import { reactive as qe, computed as v, watchEffect as Ke, toRefs as _a, shallowRef as K, capitalize as Va, Fragment as ue, warn as mn, getCurrentInstance as Ml, inject as ie, provide as Ie, ref as G, unref as le, defineComponent as Ft, h as rt, camelize as Pa, onBeforeUnmount as Oe, watch as j, readonly as Ea, onScopeDispose as ve, effectScope as gn, toRaw as Aa, TransitionGroup as hn, Transition as ze, createVNode as u, mergeProps as X, isRef as Ye, toRef as q, onBeforeMount as yn, nextTick as de, withDirectives as fe, resolveDirective as st, vShow as ut, onMounted as $t, onUpdated as Nl, Text as zl, resolveDynamicComponent as Ba, Teleport as Dl, onDeactivated as Hl, cloneVNode as jl, onUnmounted as Wl, createBlock as wt, openBlock as Be, normalizeStyle as Ia, normalizeClass as Oa, withCtx as Ae, createCommentVNode as at, createElementBlock as Pt, createTextVNode as Gl, toDisplayString as tn, renderSlot as Ul, createElementVNode as Ue, mergeModels as ql, useModel as Yl, createSlots as Xl, withModifiers as Kl } from "vue";
import { createVuetify as Zl } from "vuetify";
function I(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...o,
      default: n[l]
    } : a[l] = o, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const U = I({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), ee = typeof window < "u", bn = ee && "IntersectionObserver" in window, zn = ee && "EyeDropper" in window;
function Rt(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => Rt(e[a], t[a]));
}
function Jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function F(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Ql(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Dn(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function ei(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Hn = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), ti = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Te(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function kn(e, t) {
  const n = {};
  for (const a of t)
    Object.hasOwn(e, a) && (n[a] = e[a]);
  return n;
}
function jn(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Cn(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
const Ta = /^on[^a-z]/, Sn = (e) => Ta.test(e), ni = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function ai(e) {
  const [t, n] = jn(e, [Ta]), a = Cn(t, ni), [l, i] = jn(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function lt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Wn(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Gn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function li(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function je() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const i = e[l], o = t[l];
    if (Dn(i) && Dn(o)) {
      a[l] = je(i, o, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(o)) {
      a[l] = n(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function La(e) {
  return e.map((t) => t.type === ue ? La(t.children) : t).flat();
}
function Fe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Fe.cache.has(e)) return Fe.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Fe.cache.set(e, t), t;
}
Fe.cache = /* @__PURE__ */ new Map();
function nt(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => nt(e, n)).flat(1);
  if (t.suspense)
    return nt(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => nt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return nt(e, t.component.subTree).flat(1);
  }
  return [];
}
function ii(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function wn(e) {
  const t = qe({}), n = v(e);
  return Ke(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), _a(t);
}
function Et(e, t) {
  return e.includes(t);
}
function Fa(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const $e = () => [Function, Array];
function Un(e, t) {
  return t = "on" + Va(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function $a(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else typeof e == "function" && e(...n);
}
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Ra(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function pt(e, t) {
  var a, l, i, o;
  const n = nn(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = n[0]) == null || a.focus());
  else if (t === "first")
    (l = n[0]) == null || l.focus();
  else if (t === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof t == "number")
    (o = n[t]) == null || o.focus();
  else {
    const r = Ra(n, t);
    r ? r.focus() : pt(e, t === "next" ? "first" : "last");
  }
}
function oi(e, t) {
  if (!(ee && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function ri(e, t) {
  if (!ee || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function si(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return n >= i && n <= r && a >= o && a <= s;
}
function an() {
  const e = K(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => ei(e.value)
  }), t;
}
const Ma = ["top", "bottom"], ui = ["start", "end", "left", "right"];
function ln(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Et(Ma, n) ? "start" : Et(ui, n) ? "top" : "center"), {
    side: qn(n, t),
    align: qn(a, t)
  };
}
function qn(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Yt(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Xt(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Yn(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Xn(e) {
  return Et(Ma, e.side) ? "y" : "x";
}
class Re {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: l,
      height: i
    } = t;
    this.x = n, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Kn(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function Na(e) {
  return Array.isArray(e) ? new Re({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function pn(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], o = +l[5], r = +l[12], s = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], o = +l[3], r = +l[4], s = +l[5];
    else
      return new Re(t);
    const c = n.transformOrigin, d = t.x - r - (1 - i) * parseFloat(c), f = t.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), g = i ? t.width / i : e.offsetWidth + 1, h = o ? t.height / o : e.offsetHeight + 1;
    return new Re({
      x: d,
      y: f,
      width: g,
      height: h
    });
  } else
    return new Re(t);
}
function We(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const xt = /* @__PURE__ */ new WeakMap();
function ci(e, t) {
  Object.keys(t).forEach((n) => {
    if (Sn(n)) {
      const a = Fa(n), l = xt.get(e);
      if (t[n] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), xt.has(e) || xt.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function di(e, t) {
  Object.keys(t).forEach((n) => {
    if (Sn(n)) {
      const a = Fa(n), l = xt.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const He = 2.4, Zn = 0.2126729, Jn = 0.7151522, Qn = 0.072175, fi = 0.55, vi = 0.58, mi = 0.57, gi = 0.62, bt = 0.03, ea = 1.45, hi = 5e-4, yi = 1.25, bi = 1.25, ki = 0.078, ta = 12.82051282051282, kt = 0.06, Ci = 1e-3;
function na(e, t) {
  const n = (e.r / 255) ** He, a = (e.g / 255) ** He, l = (e.b / 255) ** He, i = (t.r / 255) ** He, o = (t.g / 255) ** He, r = (t.b / 255) ** He;
  let s = n * Zn + a * Jn + l * Qn, c = i * Zn + o * Jn + r * Qn;
  if (s <= bt && (s += (bt - s) ** ea), c <= bt && (c += (bt - c) ** ea), Math.abs(c - s) < hi) return 0;
  let d;
  if (c > s) {
    const f = (c ** fi - s ** vi) * yi;
    d = f < Ci ? 0 : f < ki ? f - f * ta * kt : f - kt;
  } else {
    const f = (c ** gi - s ** mi) * bi;
    d = f > -1e-3 ? 0 : f > -0.078 ? f - f * ta * kt : f + kt;
  }
  return d * 100;
}
function Me(e) {
  mn(`Vuetify: ${e}`);
}
function Si(e) {
  mn(`Vuetify error: ${e}`);
}
const wi = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], pi = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function xi(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = pi, o = wi;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * t + o[r][1] * n + o[r][2] * a;
  return l;
}
function on(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function _i(e) {
  return on(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const aa = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Vi = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => la({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => la({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => xe({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => xe({
    h: e,
    s: t,
    v: n,
    a
  })
};
function Se(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Me(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && aa.test(e)) {
    const {
      groups: t
    } = e.match(aa), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Vi[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || Me(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Me(`'${e}' is not a valid hex(a) color`), ja(t);
  } else if (typeof e == "object") {
    if (Te(e, ["r", "g", "b"]))
      return e;
    if (Te(e, ["h", "s", "l"]))
      return xe(xn(e));
    if (Te(e, ["h", "s", "v"]))
      return xe(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function xe(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function la(e) {
  return xe(xn(e));
}
function ct(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), i = Math.min(t, n, a);
  let o = 0;
  l !== i && (l === t ? o = 60 * (0 + (n - a) / (l - i)) : l === n ? o = 60 * (2 + (a - t) / (l - i)) : l === a && (o = 60 * (4 + (t - n) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, s = [o, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function za(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = a - a * n / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: t,
    s: o,
    l: i,
    a: l
  };
}
function xn(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, i = a + n * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: t,
    s: o,
    v: i,
    a: l
  };
}
function Da(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Ha(e) {
  return Da(xe(e));
}
function Ct(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Pi(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[Ct(t), Ct(n), Ct(a), l !== void 0 ? Ct(Math.round(l * 255)) : ""].join("")}`;
}
function ja(e) {
  e = Ai(e);
  let [t, n, a, l] = li(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function Ei(e) {
  const t = ja(e);
  return ct(t);
}
function Wa(e) {
  return Pi(xe(e));
}
function Ai(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Gn(Gn(e, 6), 8, "F")), e;
}
function ia(e) {
  const t = Se(e);
  return xi(t)[1];
}
function Bi(e, t) {
  const n = ia(e), a = ia(t), l = Math.max(n, a), i = Math.min(n, a);
  return (l + 0.05) / (i + 0.05);
}
function Ii(e) {
  const t = Math.abs(na(Se(0), Se(e)));
  return Math.abs(na(Se(16777215), Se(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function Q(e, t) {
  const n = Ml();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function ye() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Q(e).type;
  return Fe((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let Ga = 0, _t = /* @__PURE__ */ new WeakMap();
function Ze() {
  const e = Q("getUid");
  if (_t.has(e)) return _t.get(e);
  {
    const t = Ga++;
    return _t.set(e, t), t;
  }
}
Ze.reset = () => {
  Ga = 0, _t = /* @__PURE__ */ new WeakMap();
};
function Oi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Q("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const At = Symbol.for("vuetify:defaults");
function _n() {
  const e = ie(At);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Mt(e, t) {
  const n = _n(), a = G(e), l = v(() => {
    if (le(t == null ? void 0 : t.disabled)) return n.value;
    const o = le(t == null ? void 0 : t.scoped), r = le(t == null ? void 0 : t.reset), s = le(t == null ? void 0 : t.root);
    if (a.value == null && !(o || r || s)) return n.value;
    let c = je(a.value, {
      prev: n.value
    });
    if (o) return c;
    if (r || s) {
      const d = Number(r || 1 / 0);
      for (let f = 0; f <= d && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = je(je(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? je(c.prev, c) : c;
  });
  return Ie(At, l), l;
}
function Ti(e, t) {
  var n, a;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[Fe(t)]) < "u";
}
function Li() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _n();
  const a = Q("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = v(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? t];
  }), i = new Proxy(e, {
    get(s, c) {
      var f, g, h, C, y, m, b;
      const d = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(f = l.value) == null ? void 0 : f[c], d].filter((w) => w != null) : typeof c == "string" && !Ti(a.vnode, c) ? ((g = l.value) == null ? void 0 : g[c]) !== void 0 ? (h = l.value) == null ? void 0 : h[c] : ((y = (C = n.value) == null ? void 0 : C.global) == null ? void 0 : y[c]) !== void 0 ? (b = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : b[c] : d : d;
    }
  }), o = K();
  Ke(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = Oi(At, a);
    Ie(At, v(() => o.value ? je((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function _e(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Me("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = I(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return kn(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = _n();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = Li(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function z() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? _e : Ft)(t);
}
function Fi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return z()({
    name: n ?? Va(Pa(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...U()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return rt(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function Ua(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Bt = "cubic-bezier(0.4, 0, 0.2, 1)", $i = "cubic-bezier(0.0, 0, 0.2, 1)", Ri = "cubic-bezier(0.4, 0, 1, 1)";
function Mi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Ni(e) : Vn(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function It(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Vn(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Vn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Ni(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function zi(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function H(e) {
  const t = Q("useRender");
  t.render = e;
}
function qa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = an(), a = G();
  if (ee) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Oe(() => {
      l.disconnect();
    }), j(() => n.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Ea(a)
  };
}
function Xe(e, t) {
  let n;
  function a() {
    n = gn(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  j(e, (l) => {
    l && !n ? a() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), ve(() => {
    n == null || n.stop();
  });
}
function he(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Q("useProxiedModel"), o = G(e[t] !== void 0 ? e[t] : n), r = Fe(t), c = r !== t ? v(() => {
    var f, g, h, C;
    return e[t], !!(((f = i.vnode.props) != null && f.hasOwnProperty(t) || (g = i.vnode.props) != null && g.hasOwnProperty(r)) && ((h = i.vnode.props) != null && h.hasOwnProperty(`onUpdate:${t}`) || (C = i.vnode.props) != null && C.hasOwnProperty(`onUpdate:${r}`)));
  }) : v(() => {
    var f, g;
    return e[t], !!((f = i.vnode.props) != null && f.hasOwnProperty(t) && ((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${t}`)));
  });
  Xe(() => !c.value, () => {
    j(() => e[t], (f) => {
      o.value = f;
    });
  });
  const d = v({
    get() {
      const f = e[t];
      return a(c.value ? f : o.value);
    },
    set(f) {
      const g = l(f), h = Aa(c.value ? e[t] : o.value);
      h === g || a(h) === f || (o.value = g, i == null || i.emit(`update:${t}`, g));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[t] : o.value
  }), d;
}
const Ya = Symbol.for("vuetify:locale");
function Di() {
  const e = ie(Ya);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function be() {
  const e = ie(Ya);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const oa = Symbol.for("vuetify:theme"), se = I({
  theme: String
}, "theme");
function me(e) {
  Q("provideTheme");
  const t = ie(oa, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), a = v(() => t.themes.value[n.value]), l = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: a,
    themeClasses: l
  };
  return Ie(oa, i), i;
}
const ke = I({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Hi = I({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function oe(e, t, n) {
  return z()({
    name: e,
    props: Hi({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: d,
              offsetHeight: f
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${f}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: d,
              width: f,
              height: g
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = d || "", r.style.width = f || "", r.style.height = g || "";
          }
        }
      };
      return () => {
        const r = a.group ? hn : ze;
        return rt(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function Xa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return z()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? hn : ze;
      return () => rt(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function Ka() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Pa(`offset-${n}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [n]: o.style[n]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      if (!r) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[n] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[n] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [n]: o.style[n]
      }, o.style.overflow = "hidden", o.style[n] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    if (!o._initialStyle) return;
    const r = o._initialStyle[n];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[n] = r), delete o._initialStyle;
  }
}
const ji = I({
  target: [Object, Array]
}, "v-dialog-transition"), Wi = z()({
  name: "VDialogTransition",
  props: ji(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var g;
        await new Promise((h) => requestAnimationFrame(h)), await new Promise((h) => requestAnimationFrame(h)), l.style.visibility = "";
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = sa(e.target, l), f = We(l, [{
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: $i
        });
        (g = ra(l)) == null || g.forEach((h) => {
          We(h, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Bt
          });
        }), f.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var g;
        await new Promise((h) => requestAnimationFrame(h));
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = sa(e.target, l);
        We(l, [{}, {
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: Ri
        }).finished.then(() => i()), (g = ra(l)) == null || g.forEach((h) => {
          We(h, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Bt
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(ze, X({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : u(ze, {
      name: "dialog-transition"
    }, n);
  }
});
function ra(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function sa(e, t) {
  const n = Na(e), a = pn(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((b) => parseFloat(b)), [o, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  o === "left" || r === "left" ? s -= n.width / 2 : (o === "right" || r === "right") && (s += n.width / 2);
  let c = n.top + n.height / 2;
  o === "top" || r === "top" ? c -= n.height / 2 : (o === "bottom" || r === "bottom") && (c += n.height / 2);
  const d = n.width / a.width, f = n.height / a.height, g = Math.max(1, d, f), h = d / g || 0, C = f / g || 0, y = a.width * a.height / (window.innerWidth * window.innerHeight), m = y > 0.12 ? Math.min(1.5, (y - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (i + a.top),
    sx: h,
    sy: C,
    speed: m
  };
}
oe("fab-transition", "center center", "out-in");
oe("dialog-bottom-transition");
oe("dialog-top-transition");
oe("fade-transition");
const Gi = oe("scale-transition");
oe("scroll-x-transition");
oe("scroll-x-reverse-transition");
oe("scroll-y-transition");
oe("scroll-y-reverse-transition");
oe("slide-x-transition");
oe("slide-x-reverse-transition");
const Za = oe("slide-y-transition");
oe("slide-y-reverse-transition");
Xa("expand-transition", Ka());
const Ui = Xa("expand-x-transition", Ka("", !0)), qi = I({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), we = z(!1)({
  name: "VDefaultsProvider",
  props: qi(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = _a(e);
    return Mt(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = n.default) == null ? void 0 : s.call(n);
    };
  }
}), Je = I({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Qe(e) {
  return {
    dimensionStyles: v(() => {
      const n = {}, a = F(e.height), l = F(e.maxHeight), i = F(e.maxWidth), o = F(e.minHeight), r = F(e.minWidth), s = F(e.width);
      return a != null && (n.height = a), l != null && (n.maxHeight = l), i != null && (n.maxWidth = i), o != null && (n.minHeight = o), r != null && (n.minWidth = r), s != null && (n.width = s), n;
    })
  };
}
function Yi(e) {
  return {
    aspectStyles: v(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Ja = I({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...U(),
  ...Je()
}, "VResponsive"), ua = z()({
  name: "VResponsive",
  props: Ja(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = Yi(e), {
      dimensionStyles: l
    } = Qe(e);
    return H(() => {
      var i;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
});
function Pn(e) {
  return wn(() => {
    const t = [], n = {};
    if (e.value.background)
      if (on(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && _i(e.value.background)) {
          const a = Se(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Ii(a);
            n.color = l, n.caretColor = l;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (on(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function De(e, t) {
  const n = v(() => ({
    text: Ye(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Pn(n);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function pe(e, t) {
  const n = v(() => ({
    background: Ye(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Pn(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const Ve = I({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Pe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  return {
    roundedClasses: v(() => {
      const a = Ye(e) ? e.value : e.rounded, l = Ye(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const Nt = I({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Le = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? hn : ze,
    ...s
  } = typeof a == "object" ? a : {};
  return rt(r, X(typeof a == "string" ? {
    name: l ? "" : a
  } : s, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((c) => {
    let [d, f] = c;
    return f !== void 0;
  })), o), n);
};
function Xi(e, t) {
  if (!bn) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[t.instance.$.uid];
    if (!c) return;
    const d = r.some((g) => g.isIntersecting);
    l && (!n.quiet || c.init) && (!n.once || d || c.init) && l(d, r, s), d && n.once ? Qa(e, t) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Qa(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const el = {
  mounted: Xi,
  unmounted: Qa
}, Ki = I({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Ja(),
  ...U(),
  ...Ve(),
  ...Nt()
}, "VImg"), tl = z()({
  name: "VImg",
  directives: {
    intersect: el
  },
  props: Ki(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = pe(q(e, "color")), {
      roundedClasses: o
    } = Pe(e), r = Q("VImg"), s = K(""), c = G(), d = K(e.eager ? "loading" : "idle"), f = K(), g = K(), h = v(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), C = v(() => h.value.aspect || f.value / g.value || 0);
    j(() => e.src, () => {
      y(d.value !== "idle");
    }), j(C, (S, _) => {
      !S && _ && c.value && x(c.value);
    }), yn(() => y());
    function y(S) {
      if (!(e.eager && S) && !(bn && !S && !e.eager)) {
        if (d.value = "loading", h.value.lazySrc) {
          const _ = new Image();
          _.src = h.value.lazySrc, x(_, null);
        }
        h.value.src && de(() => {
          var _;
          n("loadstart", ((_ = c.value) == null ? void 0 : _.currentSrc) || h.value.src), setTimeout(() => {
            var B;
            if (!r.isUnmounted)
              if ((B = c.value) != null && B.complete) {
                if (c.value.naturalWidth || b(), d.value === "error") return;
                C.value || x(c.value, null), d.value === "loading" && m();
              } else
                C.value || x(c.value), w();
          });
        });
      }
    }
    function m() {
      var S;
      r.isUnmounted || (w(), x(c.value), d.value = "loaded", n("load", ((S = c.value) == null ? void 0 : S.currentSrc) || h.value.src));
    }
    function b() {
      var S;
      r.isUnmounted || (d.value = "error", n("error", ((S = c.value) == null ? void 0 : S.currentSrc) || h.value.src));
    }
    function w() {
      const S = c.value;
      S && (s.value = S.currentSrc || S.src);
    }
    let k = -1;
    Oe(() => {
      clearTimeout(k);
    });
    function x(S) {
      let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const B = () => {
        if (clearTimeout(k), r.isUnmounted) return;
        const {
          naturalHeight: L,
          naturalWidth: R
        } = S;
        L || R ? (f.value = R, g.value = L) : !S.complete && d.value === "loading" && _ != null ? k = window.setTimeout(B, _) : (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, g.value = 1);
      };
      B();
    }
    const A = v(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), V = () => {
      var B;
      if (!h.value.src || d.value === "idle") return null;
      const S = u("img", {
        class: ["v-img__img", A.value],
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: h.value.src,
        srcset: h.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: m,
        onError: b
      }, null), _ = (B = a.sources) == null ? void 0 : B.call(a);
      return u(Le, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [fe(_ ? u("picture", {
          class: "v-img__picture"
        }, [_, S]) : S, [[ut, d.value === "loaded"]])]
      });
    }, E = () => u(Le, {
      transition: e.transition
    }, {
      default: () => [h.value.lazySrc && d.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", A.value],
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: h.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), p = () => a.placeholder ? u(Le, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, T = () => a.error ? u(Le, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, M = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, O = K(!1);
    {
      const S = j(C, (_) => {
        _ && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), S());
      });
    }
    return H(() => {
      const S = ua.filterProps(e);
      return fe(u(ua, X({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !O.value
        }, l.value, o.value, e.class],
        style: [{
          width: F(e.width === "auto" ? f.value : e.width)
        }, i.value, e.style]
      }, S, {
        aspectRatio: C.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(ue, null, [u(V, null, null), u(E, null, null), u(M, null, null), u(p, null, null), u(T, null, null)]),
        default: a.default
      }), [[st("intersect"), {
        handler: y,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: d,
      naturalWidth: f,
      naturalHeight: g
    };
  }
}), dt = I({
  border: [Boolean, Number, String]
}, "border");
function ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  return {
    borderClasses: v(() => {
      const a = Ye(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const vt = I({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function mt(e) {
  return {
    elevationClasses: v(() => {
      const n = Ye(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
const Zi = [null, "default", "comfortable", "compact"], et = I({
  density: {
    type: String,
    default: "default",
    validator: (e) => Zi.includes(e)
  }
}, "density");
function gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  return {
    densityClasses: v(() => `${t}--density-${e.density}`)
  };
}
const Ji = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function En(e, t) {
  return u(ue, null, [e && u("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const zt = I({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Ji.includes(e)
  }
}, "variant");
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  const n = v(() => {
    const {
      variant: i
    } = le(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Pn(v(() => {
    const {
      variant: i,
      color: o
    } = le(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const nl = I({
  baseColor: String,
  divided: Boolean,
  ...dt(),
  ...U(),
  ...et(),
  ...vt(),
  ...Ve(),
  ...ke(),
  ...se(),
  ...zt()
}, "VBtnGroup"), ca = z()({
  name: "VBtnGroup",
  props: nl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = me(e), {
      densityClasses: l
    } = gt(e), {
      borderClasses: i
    } = ft(e), {
      elevationClasses: o
    } = mt(e), {
      roundedClasses: r
    } = Pe(e);
    Mt({
      VBtn: {
        height: "auto",
        baseColor: q(e, "baseColor"),
        color: q(e, "color"),
        density: q(e, "density"),
        flat: !0,
        variant: q(e, "variant")
      }
    }), H(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class],
      style: e.style
    }, n));
  }
}), Qi = I({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), eo = I({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function to(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Q("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ze();
  Ie(Symbol.for(`${t.description}:id`), l);
  const i = ie(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = q(e, "value"), r = v(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), Oe(() => {
    i.unregister(l);
  });
  const s = v(() => i.isSelected(l)), c = v(() => i.items.value[0].id === l), d = v(() => i.items.value[i.items.value.length - 1].id === l), f = v(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return j(s, (g) => {
    a.emit("group:selected", {
      value: g
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: d,
    toggle: () => i.select(l, !s.value),
    select: (g) => i.select(l, g),
    selectedClass: f,
    value: o,
    disabled: r,
    group: i
  };
}
function no(e, t) {
  let n = !1;
  const a = qe([]), l = he(e, "modelValue", [], (g) => g == null ? [] : al(a, lt(g)), (g) => {
    const h = lo(a, g);
    return e.multiple ? h : h[0];
  }), i = Q("useGroup");
  function o(g, h) {
    const C = g, y = Symbol.for(`${t.description}:id`), b = nt(y, i == null ? void 0 : i.vnode).indexOf(h);
    le(C.value) == null && (C.value = b, C.useIndexAsValue = !0), b > -1 ? a.splice(b, 0, C) : a.push(C);
  }
  function r(g) {
    if (n) return;
    s();
    const h = a.findIndex((C) => C.id === g);
    a.splice(h, 1);
  }
  function s() {
    const g = a.find((h) => !h.disabled);
    g && e.mandatory === "force" && !l.value.length && (l.value = [g.id]);
  }
  $t(() => {
    s();
  }), Oe(() => {
    n = !0;
  }), Nl(() => {
    for (let g = 0; g < a.length; g++)
      a[g].useIndexAsValue && (a[g].value = g);
  });
  function c(g, h) {
    const C = a.find((y) => y.id === g);
    if (!(h && (C != null && C.disabled)))
      if (e.multiple) {
        const y = l.value.slice(), m = y.findIndex((w) => w === g), b = ~m;
        if (h = h ?? !b, b && e.mandatory && y.length <= 1 || !b && e.max != null && y.length + 1 > e.max) return;
        m < 0 && h ? y.push(g) : m >= 0 && !h && y.splice(m, 1), l.value = y;
      } else {
        const y = l.value.includes(g);
        if (e.mandatory && y) return;
        l.value = h ?? !y ? [g] : [];
      }
  }
  function d(g) {
    if (e.multiple && Me('This method is not supported when using "multiple" prop'), l.value.length) {
      const h = l.value[0], C = a.findIndex((b) => b.id === h);
      let y = (C + g) % a.length, m = a[y];
      for (; m.disabled && y !== C; )
        y = (y + g) % a.length, m = a[y];
      if (m.disabled) return;
      l.value = [a[y].id];
    } else {
      const h = a.find((C) => !C.disabled);
      h && (l.value = [h.id]);
    }
  }
  const f = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: q(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (g) => l.value.includes(g),
    selectedClass: v(() => e.selectedClass),
    items: v(() => a),
    getItemIndex: (g) => ao(a, g)
  };
  return Ie(t, f), f;
}
function ao(e, t) {
  const n = al(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function al(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((o) => Rt(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? n.push(l.id) : i != null && n.push(i.id);
  }), n;
}
function lo(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value != null ? i.value : l);
    }
  }), n;
}
const ll = Symbol.for("vuetify:v-btn-toggle"), io = I({
  ...nl(),
  ...Qi()
}, "VBtnToggle");
z()({
  name: "VBtnToggle",
  props: io(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = no(e, ll);
    return H(() => {
      const s = ca.filterProps(e);
      return u(ca, X({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = n.default) == null ? void 0 : c.call(n, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
});
const oo = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload"
}, ro = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => rt(co, {
    ...e,
    class: "mdi"
  })
}, te = [String, Function, Object, Array], so = Symbol.for("vuetify:icons"), Dt = I({
  icon: {
    type: te
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), da = z()({
  name: "VComponentIcon",
  props: Dt(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return u(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? u(a, null, null) : (l = n.default) == null ? void 0 : l.call(n)];
        }
      });
    };
  }
}), uo = _e({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Dt(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => u(e.tag, X(n, {
      style: null
    }), {
      default: () => [u("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? u("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : u("path", {
        d: a
      }, null)) : u("path", {
        d: e.icon
      }, null)])]
    });
  }
});
_e({
  name: "VLigatureIcon",
  props: Dt(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const co = _e({
  name: "VClassIcon",
  props: Dt(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
}), fo = (e) => {
  const t = ie(so);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: v(() => {
      var s;
      const a = le(e);
      if (!a) return {
        component: da
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = t.aliases) == null ? void 0 : s[l.slice(1)])), l || Me(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: uo,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: da,
          icon: l
        };
      const i = Object.keys(t.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: o
      };
    })
  };
}, vo = ["x-small", "small", "default", "large", "x-large"], Ht = I({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function jt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  return wn(() => {
    let n, a;
    return Et(vo, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: F(e.size),
      height: F(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const mo = I({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: te,
  ...U(),
  ...Ht(),
  ...ke({
    tag: "i"
  }),
  ...se()
}, "VIcon"), ce = z()({
  name: "VIcon",
  props: mo(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = G(), {
      themeClasses: i
    } = me(e), {
      iconData: o
    } = fo(v(() => l.value || e.icon)), {
      sizeClasses: r
    } = jt(e), {
      textColorClasses: s,
      textColorStyles: c
    } = De(q(e, "color"));
    return H(() => {
      var g, h;
      const d = (g = a.default) == null ? void 0 : g.call(a);
      d && (l.value = (h = La(d).filter((C) => C.type === zl && C.children && typeof C.children == "string")[0]) == null ? void 0 : h.children);
      const f = !!(n.onClick || n.onClickOnce);
      return u(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: F(e.size),
          height: F(e.size),
          width: F(e.size)
        }, c.value, e.style],
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function il(e, t) {
  const n = G(), a = K(!1);
  if (bn) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, t);
    Oe(() => {
      l.disconnect();
    }), j(n, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
const go = I({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...U(),
  ...Ht(),
  ...ke({
    tag: "div"
  }),
  ...se()
}, "VProgressCircular"), ol = z()({
  name: "VProgressCircular",
  props: go(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = G(), {
      themeClasses: o
    } = me(e), {
      sizeClasses: r,
      sizeStyles: s
    } = jt(e), {
      textColorClasses: c,
      textColorStyles: d
    } = De(q(e, "color")), {
      textColorClasses: f,
      textColorStyles: g
    } = De(q(e, "bgColor")), {
      intersectionRef: h,
      isIntersecting: C
    } = il(), {
      resizeRef: y,
      contentRect: m
    } = qa(), b = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), w = v(() => Number(e.width)), k = v(() => s.value ? Number(e.size) : m.value ? m.value.width : Math.max(w.value, 32)), x = v(() => a / (1 - w.value / k.value) * 2), A = v(() => w.value / k.value * x.value), V = v(() => F((100 - b.value) / 100 * l));
    return Ke(() => {
      h.value = i.value, y.value = i.value;
    }), H(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": C.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class],
      style: [s.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : b.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${x.value} ${x.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: g.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": A.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": A.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": V.value
      }, null)]), n.default && u("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: b.value
      })])]
    })), {};
  }
}), fa = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Wt = I({
  location: String
}, "location");
function Gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = be();
  return {
    locationStyles: v(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = ln(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return n ? n(c) : 0;
      }
      const s = {};
      return i !== "center" && (t ? s[fa[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? t ? s[fa[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const ho = I({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...U(),
  ...Wt({
    location: "top"
  }),
  ...Ve(),
  ...ke(),
  ...se()
}, "VProgressLinear"), yo = z()({
  name: "VProgressLinear",
  props: ho(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var O;
    let {
      slots: n
    } = t;
    const a = he(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = be(), {
      themeClasses: o
    } = me(e), {
      locationStyles: r
    } = Gt(e), {
      textColorClasses: s,
      textColorStyles: c
    } = De(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = pe(v(() => e.bgColor || e.color)), {
      backgroundColorClasses: g,
      backgroundColorStyles: h
    } = pe(v(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: C,
      backgroundColorStyles: y
    } = pe(e, "color"), {
      roundedClasses: m
    } = Pe(e), {
      intersectionRef: b,
      isIntersecting: w
    } = il(), k = v(() => parseFloat(e.max)), x = v(() => parseFloat(e.height)), A = v(() => ge(parseFloat(e.bufferValue) / k.value * 100, 0, 100)), V = v(() => ge(parseFloat(a.value) / k.value * 100, 0, 100)), E = v(() => l.value !== e.reverse), p = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), T = ee && ((O = window.matchMedia) == null ? void 0 : O.call(window, "(forced-colors: active)").matches);
    function M(S) {
      if (!b.value) return;
      const {
        left: _,
        right: B,
        width: L
      } = b.value.getBoundingClientRect(), R = E.value ? L - S.clientX + (B - L) : S.clientX - _;
      a.value = Math.round(R / L * k.value);
    }
    return H(() => u(e.tag, {
      ref: b,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && w.value,
        "v-progress-linear--reverse": E.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, m.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? F(x.value) : 0,
        "--v-progress-linear-height": F(x.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(a.value), k.value),
      onClick: e.clickable && M
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [E.value ? "left" : "right"]: F(-x.value),
          borderTop: `${F(x.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${F(x.value / 4)})`,
          width: F(100 - A.value, "%"),
          "--v-progress-linear-stream-to": F(x.value * (E.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", T ? void 0 : d.value],
        style: [f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", T ? void 0 : g.value],
        style: [h.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: F(A.value, "%")
        }]
      }, null), u(ze, {
        name: p.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((S) => u("div", {
          key: S,
          class: ["v-progress-linear__indeterminate", S, T ? void 0 : C.value],
          style: y.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", T ? void 0 : C.value],
          style: [y.value, {
            width: F(V.value, "%")
          }]
        }, null)]
      }), n.default && u("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: V.value,
        buffer: A.value
      })])]
    })), {};
  }
}), Bn = I({
  loading: [Boolean, String]
}, "loader");
function In(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  return {
    loaderClasses: v(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function rl(e, t) {
  var a;
  let {
    slots: n
  } = t;
  return u("div", {
    class: `${e.name}__loader`
  }, [((a = n.default) == null ? void 0 : a.call(n, {
    color: e.color,
    isActive: e.active
  })) || u(yo, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const bo = ["static", "relative", "fixed", "absolute", "sticky"], On = I({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => bo.includes(e)
    )
  }
}, "position");
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  return {
    positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function ko() {
  const e = Q("useRoute");
  return v(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function Co() {
  var e, t;
  return (t = (e = Q("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function sl(e, t) {
  var f, g;
  const n = Ba("RouterLink"), a = v(() => !!(e.href || e.to)), l = v(() => (a == null ? void 0 : a.value) || Un(t, "click") || Un(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const h = q(e, "href");
    return {
      isLink: a,
      isClickable: l,
      href: h,
      linkProps: qe({
        href: h
      })
    };
  }
  const i = v(() => ({
    ...e,
    to: q(() => e.to || "")
  })), o = n.useLink(i.value), r = v(() => e.to ? o : void 0), s = ko(), c = v(() => {
    var h, C, y;
    return r.value ? e.exact ? s.value ? ((y = r.value.isExactActive) == null ? void 0 : y.value) && Rt(r.value.route.value.query, s.value.query) : ((C = r.value.isExactActive) == null ? void 0 : C.value) ?? !1 : ((h = r.value.isActive) == null ? void 0 : h.value) ?? !1 : !1;
  }), d = v(() => {
    var h;
    return e.to ? (h = r.value) == null ? void 0 : h.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: c,
    route: (f = r.value) == null ? void 0 : f.route,
    navigate: (g = r.value) == null ? void 0 : g.navigate,
    href: d,
    linkProps: qe({
      href: d,
      "aria-current": v(() => c.value ? "page" : void 0)
    })
  };
}
const ul = I({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Kt = !1;
function So(e, t) {
  let n = !1, a, l;
  ee && (e != null && e.beforeEach) && (de(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((o, r, s) => {
      Kt ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Kt = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Kt = !1;
    });
  }), ve(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function wo(e, t) {
  j(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && de(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const rn = Symbol("rippleStop"), po = 80;
function va(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function sn(e) {
  return e.constructor.name === "TouchEvent";
}
function cl(e) {
  return e.constructor.name === "KeyboardEvent";
}
const xo = function(e, t) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!cl(e)) {
    const g = t.getBoundingClientRect(), h = sn(e) ? e.touches[e.touches.length - 1] : e;
    a = h.clientX - g.left, l = h.clientY - g.top;
  }
  let i = 0, o = 0.3;
  (f = t._ripple) != null && f.circle ? (o = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - i * 2) / 2}px`, s = `${(t.clientHeight - i * 2) / 2}px`, c = n.center ? r : `${a - i}px`, d = n.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: d,
    centerX: r,
    centerY: s
  };
}, Ot = {
  /* eslint-disable max-statements */
  show(e, t) {
    var h;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((h = t == null ? void 0 : t._ripple) != null && h.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: c,
      centerY: d
    } = xo(e, t, n), f = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, t.appendChild(a);
    const g = window.getComputedStyle(t);
    g && g.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), va(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), va(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = n.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function dl(e) {
  return typeof e > "u" || !!e;
}
function it(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[rn])) {
    if (e[rn] = !0, sn(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || cl(e), n._ripple.class && (t.class = n._ripple.class), sn(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Ot.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, po);
    } else
      Ot.show(e, n, t);
  }
}
function ma(e) {
  e[rn] = !0;
}
function ae(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        ae(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Ot.hide(t);
  }
}
function fl(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let ot = !1;
function vl(e) {
  !ot && (e.keyCode === Hn.enter || e.keyCode === Hn.space) && (ot = !0, it(e));
}
function ml(e) {
  ot = !1, ae(e);
}
function gl(e) {
  ot && (ot = !1, ae(e));
}
function hl(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, i = dl(a);
  if (i || Ot.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Ql(a) && a.class && (e._ripple.class = a.class), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", ma, {
        passive: !0
      }), e.addEventListener("mousedown", ma);
      return;
    }
    e.addEventListener("touchstart", it, {
      passive: !0
    }), e.addEventListener("touchend", ae, {
      passive: !0
    }), e.addEventListener("touchmove", fl, {
      passive: !0
    }), e.addEventListener("touchcancel", ae), e.addEventListener("mousedown", it), e.addEventListener("mouseup", ae), e.addEventListener("mouseleave", ae), e.addEventListener("keydown", vl), e.addEventListener("keyup", ml), e.addEventListener("blur", gl), e.addEventListener("dragstart", ae, {
      passive: !0
    });
  } else !i && n && yl(e);
}
function yl(e) {
  e.removeEventListener("mousedown", it), e.removeEventListener("touchstart", it), e.removeEventListener("touchend", ae), e.removeEventListener("touchmove", fl), e.removeEventListener("touchcancel", ae), e.removeEventListener("mouseup", ae), e.removeEventListener("mouseleave", ae), e.removeEventListener("keydown", vl), e.removeEventListener("keyup", ml), e.removeEventListener("dragstart", ae), e.removeEventListener("blur", gl);
}
function _o(e, t) {
  hl(e, t, !1);
}
function Vo(e) {
  delete e._ripple, yl(e);
}
function Po(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = dl(t.oldValue);
  hl(e, t, n);
}
const Ut = {
  mounted: _o,
  unmounted: Vo,
  updated: Po
}, Eo = I({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: ll
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: te,
  appendIcon: te,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...dt(),
  ...U(),
  ...et(),
  ...Je(),
  ...vt(),
  ...eo(),
  ...Bn(),
  ...Wt(),
  ...On(),
  ...Ve(),
  ...ul(),
  ...Ht(),
  ...ke({
    tag: "button"
  }),
  ...se(),
  ...zt({
    variant: "elevated"
  })
}, "VBtn"), bl = z()({
  name: "VBtn",
  props: Eo(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = me(e), {
      borderClasses: i
    } = ft(e), {
      densityClasses: o
    } = gt(e), {
      dimensionStyles: r
    } = Qe(e), {
      elevationClasses: s
    } = mt(e), {
      loaderClasses: c
    } = In(e), {
      locationStyles: d
    } = Gt(e), {
      positionClasses: f
    } = Tn(e), {
      roundedClasses: g
    } = Pe(e), {
      sizeClasses: h,
      sizeStyles: C
    } = jt(e), y = to(e, e.symbol, !1), m = sl(e, n), b = v(() => {
      var O;
      return e.active !== void 0 ? e.active : m.isLink.value ? (O = m.isActive) == null ? void 0 : O.value : y == null ? void 0 : y.isSelected.value;
    }), w = v(() => b.value ? e.activeColor ?? e.color : e.color), k = v(() => {
      var S, _;
      return {
        color: (y == null ? void 0 : y.isSelected.value) && (!m.isLink.value || ((S = m.isActive) == null ? void 0 : S.value)) || !y || ((_ = m.isActive) == null ? void 0 : _.value) ? w.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: x,
      colorStyles: A,
      variantClasses: V
    } = An(k), E = v(() => (y == null ? void 0 : y.disabled.value) || e.disabled), p = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = v(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function M(O) {
      var S;
      E.value || m.isLink.value && (O.metaKey || O.ctrlKey || O.shiftKey || O.button !== 0 || n.target === "_blank") || ((S = m.navigate) == null || S.call(m, O), y == null || y.toggle());
    }
    return wo(m, y == null ? void 0 : y.select), H(() => {
      const O = m.isLink.value ? "a" : e.tag, S = !!(e.prependIcon || a.prepend), _ = !!(e.appendIcon || a.append), B = !!(e.icon && e.icon !== !0);
      return fe(u(O, X({
        type: O === "a" ? void 0 : "button",
        class: ["v-btn", y == null ? void 0 : y.selectedClass.value, {
          "v-btn--active": b.value,
          "v-btn--block": e.block,
          "v-btn--disabled": E.value,
          "v-btn--elevated": p.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, x.value, o.value, s.value, c.value, f.value, g.value, h.value, V.value, e.class],
        style: [A.value, r.value, d.value, C.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: E.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: M,
        value: T.value
      }, m.linkProps), {
        default: () => {
          var L;
          return [En(!0, "v-btn"), !e.icon && S && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? u(we, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : u(ce, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && B ? u(ce, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(we, {
            key: "content-defaults",
            disabled: !B,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var R;
              return [((R = a.default) == null ? void 0 : R.call(a)) ?? e.text];
            }
          })]), !e.icon && _ && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? u(we, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : u(ce, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((L = a.loader) == null ? void 0 : L.call(a)) ?? u(ol, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Ut, !E.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: y
    };
  }
}), Ao = I({
  start: Boolean,
  end: Boolean,
  icon: te,
  image: String,
  text: String,
  ...dt(),
  ...U(),
  ...et(),
  ...Ve(),
  ...Ht(),
  ...ke(),
  ...se(),
  ...zt({
    variant: "flat"
  })
}, "VAvatar"), ga = z()({
  name: "VAvatar",
  props: Ao(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = me(e), {
      borderClasses: l
    } = ft(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = An(e), {
      densityClasses: s
    } = gt(e), {
      roundedClasses: c
    } = Pe(e), {
      sizeClasses: d,
      sizeStyles: f
    } = jt(e);
    return H(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, c.value, d.value, r.value, e.class],
      style: [o.value, f.value, e.style]
    }, {
      default: () => [n.default ? u(we, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? u(tl, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(ce, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, En(!1, "v-avatar")]
    })), {};
  }
}), Bo = I({
  text: String,
  onClick: $e(),
  ...U(),
  ...se()
}, "VLabel"), kl = z()({
  name: "VLabel",
  props: Bo(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => {
      var a;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
});
function Cl(e) {
  const {
    t
  } = Di();
  function n(a) {
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], o = e[`onClick:${l}`];
    function r(c) {
      c.key !== "Enter" && c.key !== " " || (c.preventDefault(), c.stopPropagation(), $a(o, new PointerEvent("click", c)));
    }
    const s = o && i ? t(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return u(ce, {
      icon: e[`${l}Icon`],
      "aria-label": s,
      onClick: o,
      onKeydown: r
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Io = I({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...U(),
  ...Nt({
    transition: {
      component: Za,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Oo = z()({
  name: "VMessages",
  props: Io(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = v(() => lt(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = De(v(() => e.color));
    return H(() => u(Le, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style]
    }, {
      default: () => [e.active && a.value.map((o, r) => u("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [n.message ? n.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Ln = I({
  focused: Boolean,
  "onUpdate:focused": $e()
}, "focus");
function Fn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  const n = he(e, "focused"), a = v(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: i
  };
}
const To = Symbol.for("vuetify:form");
function Lo(e) {
  const t = ie(To, null);
  return {
    ...t,
    isReadonly: v(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: v(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const Fo = I({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Ln()
}, "validation");
function $o(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ze();
  const a = he(e, "modelValue"), l = v(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Lo(e), o = G([]), r = K(!0), s = v(() => !!(lt(a.value === "" ? null : a.value).length || lt(l.value === "" ? null : l.value).length)), c = v(() => {
    var k;
    return (k = e.errorMessages) != null && k.length ? lt(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), d = v(() => {
    var A;
    let k = (e.validateOn ?? ((A = i.validateOn) == null ? void 0 : A.value)) || "input";
    k === "lazy" && (k = "input lazy"), k === "eager" && (k = "input eager");
    const x = new Set((k == null ? void 0 : k.split(" ")) ?? []);
    return {
      input: x.has("input"),
      blur: x.has("blur") || x.has("input") || x.has("invalid-input"),
      invalidInput: x.has("invalid-input"),
      lazy: x.has("lazy"),
      eager: x.has("eager")
    };
  }), f = v(() => {
    var k;
    return e.error || (k = e.errorMessages) != null && k.length ? !1 : e.rules.length ? r.value ? o.value.length || d.value.lazy ? null : !0 : !o.value.length : !0;
  }), g = K(!1), h = v(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: s.value,
    [`${t}--disabled`]: i.isDisabled.value,
    [`${t}--readonly`]: i.isReadonly.value
  })), C = Q("validation"), y = v(() => e.name ?? le(n));
  yn(() => {
    var k;
    (k = i.register) == null || k.call(i, {
      id: y.value,
      vm: C,
      validate: w,
      reset: m,
      resetValidation: b
    });
  }), Oe(() => {
    var k;
    (k = i.unregister) == null || k.call(i, y.value);
  }), $t(async () => {
    var k;
    d.value.lazy || await w(!d.value.eager), (k = i.update) == null || k.call(i, y.value, f.value, c.value);
  }), Xe(() => d.value.input || d.value.invalidInput && f.value === !1, () => {
    j(l, () => {
      if (l.value != null)
        w();
      else if (e.focused) {
        const k = j(() => e.focused, (x) => {
          x || w(), k();
        });
      }
    });
  }), Xe(() => d.value.blur, () => {
    j(() => e.focused, (k) => {
      k || w();
    });
  }), j([f, c], () => {
    var k;
    (k = i.update) == null || k.call(i, y.value, f.value, c.value);
  });
  async function m() {
    a.value = null, await de(), await b();
  }
  async function b() {
    r.value = !0, d.value.lazy ? o.value = [] : await w(!d.value.eager);
  }
  async function w() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const x = [];
    g.value = !0;
    for (const A of e.rules) {
      if (x.length >= +(e.maxErrors ?? 1))
        break;
      const E = await (typeof A == "function" ? A : () => A)(l.value);
      if (E !== !0) {
        if (E !== !1 && typeof E != "string") {
          console.warn(`${E} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        x.push(E || "");
      }
    }
    return o.value = x, g.value = !1, r.value = k, o.value;
  }
  return {
    errorMessages: c,
    isDirty: s,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: r,
    isValid: f,
    isValidating: g,
    reset: m,
    resetValidation: b,
    validate: w,
    validationClasses: h
  };
}
const $n = I({
  id: String,
  appendIcon: te,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: te,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": $e(),
  "onClick:append": $e(),
  ...U(),
  ...et(),
  ...kn(Je(), ["maxWidth", "minWidth", "width"]),
  ...se(),
  ...Fo()
}, "VInput"), Tt = z()({
  name: "VInput",
  props: {
    ...$n()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const {
      densityClasses: i
    } = gt(e), {
      dimensionStyles: o
    } = Qe(e), {
      themeClasses: r
    } = me(e), {
      rtlClasses: s
    } = be(), {
      InputIcon: c
    } = Cl(e), d = Ze(), f = v(() => e.id || `input-${d}`), g = v(() => `${f.value}-messages`), {
      errorMessages: h,
      isDirty: C,
      isDisabled: y,
      isReadonly: m,
      isPristine: b,
      isValid: w,
      isValidating: k,
      reset: x,
      resetValidation: A,
      validate: V,
      validationClasses: E
    } = $o(e, "v-input", f), p = v(() => ({
      id: f,
      messagesId: g,
      isDirty: C,
      isDisabled: y,
      isReadonly: m,
      isPristine: b,
      isValid: w,
      isValidating: k,
      reset: x,
      resetValidation: A,
      validate: V
    })), T = v(() => {
      var M;
      return (M = e.errorMessages) != null && M.length || !b.value && h.value.length ? h.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return H(() => {
      var B, L, R, Y;
      const M = !!(a.prepend || e.prependIcon), O = !!(a.append || e.appendIcon), S = T.value.length > 0, _ = !e.hideDetails || e.hideDetails === "auto" && (S || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, E.value, e.class],
        style: [o.value, e.style]
      }, [M && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(B = a.prepend) == null ? void 0 : B.call(a, p.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(L = a.default) == null ? void 0 : L.call(a, p.value)]), O && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (R = a.append) == null ? void 0 : R.call(a, p.value)]), _ && u("div", {
        id: g.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [u(Oo, {
        active: S,
        messages: T.value
      }, {
        message: a.message
      }), (Y = a.details) == null ? void 0 : Y.call(a, p.value)])]);
    }), {
      reset: x,
      resetValidation: A,
      validate: V,
      isValid: w,
      errorMessages: h
    };
  }
}), Ro = Symbol.for("vuetify:display");
function Mo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye();
  const n = ie(Ro);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = v(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), l = v(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: a
  };
}
function Zt(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function No(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function ha(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Zt({
      x: l,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Zt({
      x: l,
      y: i
    }, t);
  }
  return Zt({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Sl = {
  static: Ho,
  // specific viewport position, usually centered
  connected: Wo
  // connected to a certain element
}, zo = I({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Sl
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Do(e, t) {
  const n = G({}), a = G();
  ee && Xe(() => !!(t.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    j(() => e.locationStrategy, i), ve(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(t, e, n)) == null ? void 0 : o.updateLocation : a.value = (r = Sl[e.locationStrategy](t, e, n)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function Ho() {
}
function jo(e, t) {
  const n = pn(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Wo(e, t, n) {
  (Array.isArray(e.target.value) || zi(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = wn(() => {
    const C = ln(t.location, e.isRtl.value), y = t.origin === "overlap" ? C : t.origin === "auto" ? Yt(C) : ln(t.origin, e.isRtl.value);
    return C.side === y.side && C.align === Xt(y).align ? {
      preferredAnchor: Yn(C),
      preferredOrigin: Yn(y)
    } : {
      preferredAnchor: C,
      preferredOrigin: y
    };
  }), [o, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((C) => v(() => {
    const y = parseFloat(t[C]);
    return isNaN(y) ? 1 / 0 : y;
  })), d = v(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const C = t.offset.split(" ").map(parseFloat);
      return C.length < 2 && C.push(0), C;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = !1;
  const g = new ResizeObserver(() => {
    f && h();
  });
  j([e.target, e.contentEl], (C, y) => {
    let [m, b] = C, [w, k] = y;
    w && !Array.isArray(w) && g.unobserve(w), m && !Array.isArray(m) && g.observe(m), k && g.unobserve(k), b && g.observe(b);
  }, {
    immediate: !0
  }), ve(() => {
    g.disconnect();
  });
  function h() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    const C = Na(e.target.value), y = jo(e.contentEl.value, e.isRtl.value), m = It(e.contentEl.value), b = 12;
    m.length || (m.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = m.reduce((O, S) => {
      const _ = S.getBoundingClientRect(), B = new Re({
        x: S === document.documentElement ? 0 : _.x,
        y: S === document.documentElement ? 0 : _.y,
        width: S.clientWidth,
        height: S.clientHeight
      });
      return O ? new Re({
        x: Math.max(O.left, B.left),
        y: Math.max(O.top, B.top),
        width: Math.min(O.right, B.right) - Math.max(O.left, B.left),
        height: Math.min(O.bottom, B.bottom) - Math.max(O.top, B.top)
      }) : B;
    }, void 0);
    w.x += b, w.y += b, w.width -= b * 2, w.height -= b * 2;
    let k = {
      anchor: l.value,
      origin: i.value
    };
    function x(O) {
      const S = new Re(y), _ = ha(O.anchor, C), B = ha(O.origin, S);
      let {
        x: L,
        y: R
      } = No(_, B);
      switch (O.anchor.side) {
        case "top":
          R -= d.value[0];
          break;
        case "bottom":
          R += d.value[0];
          break;
        case "left":
          L -= d.value[0];
          break;
        case "right":
          L += d.value[0];
          break;
      }
      switch (O.anchor.align) {
        case "top":
          R -= d.value[1];
          break;
        case "bottom":
          R += d.value[1];
          break;
        case "left":
          L -= d.value[1];
          break;
        case "right":
          L += d.value[1];
          break;
      }
      return S.x += L, S.y += R, S.width = Math.min(S.width, s.value), S.height = Math.min(S.height, c.value), {
        overflows: Kn(S, w),
        x: L,
        y: R
      };
    }
    let A = 0, V = 0;
    const E = {
      x: 0,
      y: 0
    }, p = {
      x: !1,
      y: !1
    };
    let T = -1;
    for (; ; ) {
      if (T++ > 10) {
        Si("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: S,
        overflows: _
      } = x(k);
      A += O, V += S, y.x += O, y.y += S;
      {
        const B = Xn(k.anchor), L = _.x.before || _.x.after, R = _.y.before || _.y.after;
        let Y = !1;
        if (["x", "y"].forEach((D) => {
          if (D === "x" && L && !p.x || D === "y" && R && !p.y) {
            const Z = {
              anchor: {
                ...k.anchor
              },
              origin: {
                ...k.origin
              }
            }, W = D === "x" ? B === "y" ? Xt : Yt : B === "y" ? Yt : Xt;
            Z.anchor = W(Z.anchor), Z.origin = W(Z.origin);
            const {
              overflows: N
            } = x(Z);
            (N[D].before <= _[D].before && N[D].after <= _[D].after || N[D].before + N[D].after < (_[D].before + _[D].after) / 2) && (k = Z, Y = p[D] = !0);
          }
        }), Y) continue;
      }
      _.x.before && (A += _.x.before, y.x += _.x.before), _.x.after && (A -= _.x.after, y.x -= _.x.after), _.y.before && (V += _.y.before, y.y += _.y.before), _.y.after && (V -= _.y.after, y.y -= _.y.after);
      {
        const B = Kn(y, w);
        E.x = w.width - B.x.before - B.x.after, E.y = w.height - B.y.before - B.y.after, A += B.x.before, y.x += B.x.before, V += B.y.before, y.y += B.y.before;
      }
      break;
    }
    const M = Xn(k.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`,
      transformOrigin: `${k.origin.side} ${k.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: F(Jt(V)),
      left: e.isRtl.value ? void 0 : F(Jt(A)),
      right: e.isRtl.value ? F(Jt(-A)) : void 0,
      minWidth: F(M === "y" ? Math.min(o.value, C.width) : o.value),
      maxWidth: F(ya(ge(E.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: F(ya(ge(E.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: E,
      contentBox: y
    };
  }
  return j(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => h()), de(() => {
    const C = h();
    if (!C) return;
    const {
      available: y,
      contentBox: m
    } = C;
    m.height > y.y && requestAnimationFrame(() => {
      h(), requestAnimationFrame(() => {
        h();
      });
    });
  }), {
    updateLocation: h
  };
}
function Jt(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function ya(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let un = !0;
const Lt = [];
function Go(e) {
  !un || Lt.length ? (Lt.push(e), cn()) : (un = !1, e(), cn());
}
let ba = -1;
function cn() {
  cancelAnimationFrame(ba), ba = requestAnimationFrame(() => {
    const e = Lt.shift();
    e && e(), Lt.length ? cn() : un = !0;
  });
}
const Vt = {
  none: null,
  close: Yo,
  block: Xo,
  reposition: Ko
}, Uo = I({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Vt
  }
}, "VOverlay-scroll-strategies");
function qo(e, t) {
  if (!ee) return;
  let n;
  Ke(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = gn(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Vt[e.scrollStrategy]) == null || a.call(Vt, t, e, n);
    }));
  }), ve(() => {
    n == null || n.stop();
  });
}
function Yo(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  wl(e.targetEl.value ?? e.contentEl.value, t);
}
function Xo(e, t) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...It(e.targetEl.value, t.contained ? n : void 0), ...It(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Vn(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", F(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", F(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", F(l)), r.classList.add("v-overlay-scroll-blocked");
  }), ve(() => {
    a.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), f = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = f;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Ko(e, t, n) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    Go(() => {
      var d, f;
      const s = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      wl(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), ve(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function wl(e, t) {
  const n = [document, ...It(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), ve(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const dn = Symbol.for("vuetify:v-menu"), Zo = I({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Jo(e, t) {
  let n = () => {
  };
  function a(o) {
    n == null || n();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      n = ri(r, () => {
        t == null || t(o), s(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const Qo = I({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Zo()
}, "VOverlay-activator");
function er(e, t) {
  let {
    isActive: n,
    isTop: a,
    contentEl: l
  } = t;
  const i = Q("useActivator"), o = G();
  let r = !1, s = !1, c = !0;
  const d = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !d.value), {
    runOpenDelay: g,
    runCloseDelay: h
  } = Jo(e, (p) => {
    p === (e.openOnHover && r || d.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== p && (c = !0), n.value = p);
  }), C = G(), y = {
    onClick: (p) => {
      p.stopPropagation(), o.value = p.currentTarget || p.target, n.value || (C.value = [p.clientX, p.clientY]), n.value = !n.value;
    },
    onMouseenter: (p) => {
      var T;
      (T = p.sourceCapabilities) != null && T.firesTouchEvents || (r = !0, o.value = p.currentTarget || p.target, g());
    },
    onMouseleave: (p) => {
      r = !1, h();
    },
    onFocus: (p) => {
      oi(p.target, ":focus-visible") !== !1 && (s = !0, p.stopPropagation(), o.value = p.currentTarget || p.target, g());
    },
    onBlur: (p) => {
      s = !1, p.stopPropagation(), h();
    }
  }, m = v(() => {
    const p = {};
    return f.value && (p.onClick = y.onClick), e.openOnHover && (p.onMouseenter = y.onMouseenter, p.onMouseleave = y.onMouseleave), d.value && (p.onFocus = y.onFocus, p.onBlur = y.onBlur), p;
  }), b = v(() => {
    const p = {};
    if (e.openOnHover && (p.onMouseenter = () => {
      r = !0, g();
    }, p.onMouseleave = () => {
      r = !1, h();
    }), d.value && (p.onFocusin = () => {
      s = !0, g();
    }, p.onFocusout = () => {
      s = !1, h();
    }), e.closeOnContentClick) {
      const T = ie(dn, null);
      p.onClick = () => {
        n.value = !1, T == null || T.closeParents();
      };
    }
    return p;
  }), w = v(() => {
    const p = {};
    return e.openOnHover && (p.onMouseenter = () => {
      c && (r = !0, c = !1, g());
    }, p.onMouseleave = () => {
      r = !1, h();
    }), p;
  });
  j(a, (p) => {
    var T;
    p && (e.openOnHover && !r && (!d.value || !s) || d.value && !s && (!e.openOnHover || !r)) && !((T = l.value) != null && T.contains(document.activeElement)) && (n.value = !1);
  }), j(n, (p) => {
    p || setTimeout(() => {
      C.value = void 0;
    });
  }, {
    flush: "post"
  });
  const k = an();
  Ke(() => {
    k.value && de(() => {
      o.value = k.el;
    });
  });
  const x = an(), A = v(() => e.target === "cursor" && C.value ? C.value : x.value ? x.el : pl(e.target, i) || o.value), V = v(() => Array.isArray(A.value) ? void 0 : A.value);
  let E;
  return j(() => !!e.activator, (p) => {
    p && ee ? (E = gn(), E.run(() => {
      tr(e, i, {
        activatorEl: o,
        activatorEvents: m
      });
    })) : E && E.stop();
  }, {
    flush: "post",
    immediate: !0
  }), ve(() => {
    E == null || E.stop();
  }), {
    activatorEl: o,
    activatorRef: k,
    target: A,
    targetEl: V,
    targetRef: x,
    activatorEvents: m,
    contentEvents: b,
    scrimEvents: w
  };
}
function tr(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  j(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const d = r(c);
      d && o(d);
    }
    s && de(() => i());
  }, {
    immediate: !0
  }), j(() => e.activatorProps, () => {
    i();
  }), ve(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && ci(s, X(l.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && di(s, X(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = pl(s, t);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function pl(e, t) {
  var a, l;
  if (!e) return;
  let n;
  if (e === "parent") {
    let i = (l = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function nr() {
  if (!ee) return K(!1);
  const {
    ssr: e
  } = Mo();
  if (e) {
    const t = K(!1);
    return $t(() => {
      t.value = !0;
    }), t;
  } else
    return K(!0);
}
const ar = I({
  eager: Boolean
}, "lazy");
function lr(e, t) {
  const n = K(!1), a = v(() => n.value || e.eager || t.value);
  j(t, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: l
  };
}
function xl() {
  const t = Q("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const ka = Symbol.for("vuetify:stack"), tt = qe([]);
function ir(e, t, n) {
  const a = Q("useStack"), l = !n, i = ie(ka, void 0), o = qe({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ie(ka, o);
  const r = K(+t.value);
  Xe(e, () => {
    var f;
    const d = (f = tt.at(-1)) == null ? void 0 : f[1];
    r.value = d ? d + 10 : +t.value, l && tt.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), ve(() => {
      if (l) {
        const g = Aa(tt).findIndex((h) => h[0] === a.uid);
        tt.splice(g, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = K(!0);
  l && Ke(() => {
    var f;
    const d = ((f = tt.at(-1)) == null ? void 0 : f[0]) === a.uid;
    setTimeout(() => s.value = d);
  });
  const c = v(() => !o.activeChildren.size);
  return {
    globalTop: Ea(s),
    localTop: c,
    stackStyles: v(() => ({
      zIndex: r.value
    }))
  };
}
function or(e) {
  return {
    teleportTarget: v(() => {
      const n = e();
      if (n === !0 || !ee) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        mn(`Unable to locate target ${n}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function rr() {
  return !0;
}
function _l(e, t, n) {
  if (!e || Vl(e, n) === !1) return !1;
  const a = Ua(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Vl(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || rr)(e);
}
function sr(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && _l(e, t, n) && setTimeout(() => {
    Vl(e, n) && a && a(e);
  }, 0);
}
function Ca(e, t) {
  const n = Ua(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const ur = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => sr(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = _l(l, e, t);
    };
    Ca(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Ca(e, (n) => {
      var i;
      if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function cr(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return u(ze, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", X({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Pl = I({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Qo(),
  ...U(),
  ...Je(),
  ...ar(),
  ...zo(),
  ...Uo(),
  ...se(),
  ...Nt()
}, "VOverlay"), Sa = z()({
  name: "VOverlay",
  directives: {
    ClickOutside: ur
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Pl()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const i = Q("VOverlay"), o = G(), r = G(), s = G(), c = he(e, "modelValue"), d = v({
      get: () => c.value,
      set: (P) => {
        P && e.disabled || (c.value = P);
      }
    }), {
      themeClasses: f
    } = me(e), {
      rtlClasses: g,
      isRtl: h
    } = be(), {
      hasContent: C,
      onAfterLeave: y
    } = lr(e, d), m = pe(v(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: b,
      localTop: w,
      stackStyles: k
    } = ir(d, q(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: x,
      activatorRef: A,
      target: V,
      targetEl: E,
      targetRef: p,
      activatorEvents: T,
      contentEvents: M,
      scrimEvents: O
    } = er(e, {
      isActive: d,
      isTop: w,
      contentEl: s
    }), {
      teleportTarget: S
    } = or(() => {
      var ne, ht, yt;
      const P = e.attach || e.contained;
      if (P) return P;
      const $ = ((ne = x == null ? void 0 : x.value) == null ? void 0 : ne.getRootNode()) || ((yt = (ht = i.proxy) == null ? void 0 : ht.$el) == null ? void 0 : yt.getRootNode());
      return $ instanceof ShadowRoot ? $ : !1;
    }), {
      dimensionStyles: _
    } = Qe(e), B = nr(), {
      scopeId: L
    } = xl();
    j(() => e.disabled, (P) => {
      P && (d.value = !1);
    });
    const {
      contentStyles: R,
      updateLocation: Y
    } = Do(e, {
      isRtl: h,
      contentEl: s,
      target: V,
      isActive: d
    });
    qo(e, {
      root: o,
      contentEl: s,
      targetEl: E,
      isActive: d,
      updateLocation: Y
    });
    function D(P) {
      l("click:outside", P), e.persistent ? re() : d.value = !1;
    }
    function Z(P) {
      return d.value && b.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || P.target === r.value || P instanceof MouseEvent && P.shadowTarget === r.value);
    }
    ee && j(d, (P) => {
      P ? window.addEventListener("keydown", W) : window.removeEventListener("keydown", W);
    }, {
      immediate: !0
    }), Oe(() => {
      ee && window.removeEventListener("keydown", W);
    });
    function W(P) {
      var $, ne;
      P.key === "Escape" && b.value && (e.persistent ? re() : (d.value = !1, ($ = s.value) != null && $.contains(document.activeElement) && ((ne = x.value) == null || ne.focus())));
    }
    const N = Co();
    Xe(() => e.closeOnBack, () => {
      So(N, (P) => {
        b.value && d.value ? (P(!1), e.persistent ? re() : d.value = !1) : P();
      });
    });
    const J = G();
    j(() => d.value && (e.absolute || e.contained) && S.value == null, (P) => {
      if (P) {
        const $ = Mi(o.value);
        $ && $ !== document.scrollingElement && (J.value = $.scrollTop);
      }
    });
    function re() {
      e.noClickAnimation || s.value && We(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Bt
      });
    }
    function Ce() {
      l("afterEnter");
    }
    function Ee() {
      y(), l("afterLeave");
    }
    return H(() => {
      var P;
      return u(ue, null, [(P = n.activator) == null ? void 0 : P.call(n, {
        isActive: d.value,
        targetRef: p,
        props: X({
          ref: A
        }, T.value, e.activatorProps)
      }), B.value && C.value && u(Dl, {
        disabled: !S.value,
        to: S.value
      }, {
        default: () => [u("div", X({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": d.value,
            "v-overlay--contained": e.contained
          }, f.value, g.value, e.class],
          style: [k.value, {
            "--v-overlay-opacity": e.opacity,
            top: F(J.value)
          }, e.style],
          ref: o
        }, L, a), [u(cr, X({
          color: m,
          modelValue: d.value && !!e.scrim,
          ref: r
        }, O.value), null), u(Le, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: V.value,
          onAfterEnter: Ce,
          onAfterLeave: Ee
        }, {
          default: () => {
            var $;
            return [fe(u("div", X({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [_.value, R.value]
            }, M.value, e.contentProps), [($ = n.default) == null ? void 0 : $.call(n, {
              isActive: d
            })]), [[ut, d.value], [st("click-outside"), {
              handler: D,
              closeConditional: Z,
              include: () => [x.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: x,
      scrimEl: r,
      target: V,
      animateClick: re,
      contentEl: s,
      globalTop: b,
      localTop: w,
      updateLocation: Y
    };
  }
}), Qt = Symbol("Forwarded refs");
function en(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function El(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[Qt] = n, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of n)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of n) {
          if (!s.value) continue;
          const c = en(s.value, i) ?? ("_" in s.value ? en((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const s of n) {
          const c = s.value && s.value[Qt];
          if (!c) continue;
          const d = c.slice();
          for (; d.length; ) {
            const f = d.shift(), g = en(f.value, i);
            if (g) return g;
            const h = f.value && f.value[Qt];
            h && d.push(...h);
          }
        }
      }
    }
  });
}
const dr = I({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Cn(Pl({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Wi
    }
  }), ["absolute"])
}, "VMenu"), fr = z()({
  name: "VMenu",
  props: dr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = he(e, "modelValue"), {
      scopeId: l
    } = xl(), {
      isRtl: i
    } = be(), o = Ze(), r = v(() => e.id || `v-menu-${o}`), s = G(), c = ie(dn, null), d = K(/* @__PURE__ */ new Set());
    Ie(dn, {
      register() {
        d.value.add(o);
      },
      unregister() {
        d.value.delete(o);
      },
      closeParents(m) {
        setTimeout(() => {
          var b;
          !d.value.size && !e.persistent && (m == null || (b = s.value) != null && b.contentEl && !si(m, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), Oe(() => {
      c == null || c.unregister(), document.removeEventListener("focusin", f);
    }), Hl(() => a.value = !1);
    async function f(m) {
      var k, x, A;
      const b = m.relatedTarget, w = m.target;
      await de(), a.value && b !== w && ((k = s.value) != null && k.contentEl) && // We're the topmost menu
      ((x = s.value) != null && x.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(w) && // It isn't inside the menu body
      !s.value.contentEl.contains(w) && ((A = nn(s.value.contentEl)[0]) == null || A.focus());
    }
    j(a, (m) => {
      m ? (c == null || c.register(), ee && document.addEventListener("focusin", f, {
        once: !0
      })) : (c == null || c.unregister(), ee && document.removeEventListener("focusin", f));
    }, {
      immediate: !0
    });
    function g(m) {
      c == null || c.closeParents(m);
    }
    function h(m) {
      var b, w, k, x, A;
      if (!e.disabled)
        if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
          if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
          m.key === "Enter" && m.preventDefault(), Ra(nn((b = s.value) == null ? void 0 : b.contentEl, !1), m.shiftKey ? "prev" : "next", (E) => E.tabIndex >= 0) || (a.value = !1, (k = (w = s.value) == null ? void 0 : w.activatorEl) == null || k.focus());
        } else e.submenu && m.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (A = (x = s.value) == null ? void 0 : x.activatorEl) == null || A.focus());
    }
    function C(m) {
      var w;
      if (e.disabled) return;
      const b = (w = s.value) == null ? void 0 : w.contentEl;
      b && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), pt(b, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), pt(b, "prev")) : e.submenu && (m.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : m.key === (i.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), pt(b, "first"))) : (e.submenu ? m.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => C(m))));
    }
    const y = v(() => X({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": r.value,
      onKeydown: C
    }, e.activatorProps));
    return H(() => {
      const m = Sa.filterProps(e);
      return u(Sa, X({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (b) => a.value = b,
        absolute: !0,
        activatorProps: y.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": g,
        onKeydown: h
      }, l), {
        activator: n.activator,
        default: function() {
          for (var b = arguments.length, w = new Array(b), k = 0; k < b; k++)
            w[k] = arguments[k];
          return u(we, {
            root: "VMenu"
          }, {
            default: () => {
              var x;
              return [(x = n.default) == null ? void 0 : x.call(n, ...w)];
            }
          });
        }
      });
    }), El({
      id: r,
      ΨopenChildren: d
    }, s);
  }
}), vr = I({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...U(),
  ...Nt({
    transition: {
      component: Za
    }
  })
}, "VCounter"), mr = z()({
  name: "VCounter",
  functional: !0,
  props: vr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return H(() => u(Le, {
      transition: e.transition
    }, {
      default: () => [fe(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[ut, e.active]])]
    })), {};
  }
}), gr = I({
  floating: Boolean,
  ...U()
}, "VFieldLabel"), St = z()({
  name: "VFieldLabel",
  props: gr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => u(kl, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), hr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Al = I({
  appendInnerIcon: te,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: te,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: te,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => hr.includes(e)
  },
  "onClick:clear": $e(),
  "onClick:appendInner": $e(),
  "onClick:prependInner": $e(),
  ...U(),
  ...Bn(),
  ...Ve(),
  ...se()
}, "VField"), Bl = z()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Ln(),
    ...Al()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      themeClasses: i
    } = me(e), {
      loaderClasses: o
    } = In(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: d
    } = Fn(e), {
      InputIcon: f
    } = Cl(e), {
      roundedClasses: g
    } = Pe(e), {
      rtlClasses: h
    } = be(), C = v(() => e.dirty || e.active), y = v(() => !!(e.label || l.label)), m = v(() => !e.singleLine && y.value), b = Ze(), w = v(() => e.id || `input-${b}`), k = v(() => `${w.value}-messages`), x = G(), A = G(), V = G(), E = v(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: p,
      backgroundColorStyles: T
    } = pe(q(e, "bgColor")), {
      textColorClasses: M,
      textColorStyles: O
    } = De(v(() => e.error || e.disabled ? void 0 : C.value && s.value ? e.color : e.baseColor));
    j(C, (B) => {
      if (m.value) {
        const L = x.value.$el, R = A.value.$el;
        requestAnimationFrame(() => {
          const Y = pn(L), D = R.getBoundingClientRect(), Z = D.x - Y.x, W = D.y - Y.y - (Y.height / 2 - D.height / 2), N = D.width / 0.75, J = Math.abs(N - Y.width) > 1 ? {
            maxWidth: F(N)
          } : void 0, re = getComputedStyle(L), Ce = getComputedStyle(R), Ee = parseFloat(re.transitionDuration) * 1e3 || 150, P = parseFloat(Ce.getPropertyValue("--v-field-label-scale")), $ = Ce.getPropertyValue("color");
          L.style.visibility = "visible", R.style.visibility = "hidden", We(L, {
            transform: `translate(${Z}px, ${W}px) scale(${P})`,
            color: $,
            ...J
          }, {
            duration: Ee,
            easing: Bt,
            direction: B ? "normal" : "reverse"
          }).finished.then(() => {
            L.style.removeProperty("visibility"), R.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const S = v(() => ({
      isActive: C,
      isFocused: s,
      controlRef: V,
      blur: d,
      focus: c
    }));
    function _(B) {
      B.target !== document.activeElement && B.preventDefault();
    }
    return H(() => {
      var Z, W, N;
      const B = e.variant === "outlined", L = !!(l["prepend-inner"] || e.prependInnerIcon), R = !!(e.clearable || l.clear) && !e.disabled, Y = !!(l["append-inner"] || e.appendInnerIcon || R), D = () => l.label ? l.label({
        ...S.value,
        label: e.label,
        props: {
          for: w.value
        }
      }) : e.label;
      return u("div", X({
        class: ["v-field", {
          "v-field--active": C.value,
          "v-field--appended": Y,
          "v-field--center-affix": e.centerAffix ?? !E.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": L,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !D(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, p.value, r.value, o.value, g.value, h.value, e.class],
        style: [T.value, e.style],
        onClick: _
      }, n), [u("div", {
        class: "v-field__overlay"
      }, null), u(rl, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), L && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (Z = l["prepend-inner"]) == null ? void 0 : Z.call(l, S.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && u(St, {
        key: "floating-label",
        ref: A,
        class: [M.value],
        floating: !0,
        for: w.value,
        style: O.value
      }, {
        default: () => [D()]
      }), y.value && u(St, {
        key: "label",
        ref: x,
        for: w.value
      }, {
        default: () => [D()]
      }), (W = l.default) == null ? void 0 : W.call(l, {
        ...S.value,
        props: {
          id: w.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: d
      })]), R && u(Ui, {
        key: "clear"
      }, {
        default: () => [fe(u("div", {
          class: "v-field__clearable",
          onMousedown: (J) => {
            J.preventDefault(), J.stopPropagation();
          }
        }, [u(we, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...S.value,
            props: {
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          }) : u(f, {
            name: "clear",
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[ut, e.dirty]])]
      }), Y && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(N = l["append-inner"]) == null ? void 0 : N.call(l, S.value), e.appendInnerIcon && u(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", M.value],
        style: O.value
      }, [B && u(ue, null, [u("div", {
        class: "v-field__outline__start"
      }, null), m.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(St, {
        ref: A,
        floating: !0,
        for: w.value
      }, {
        default: () => [D()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), E.value && m.value && u(St, {
        ref: A,
        floating: !0,
        for: w.value
      }, {
        default: () => [D()]
      })])]);
    }), {
      controlRef: V
    };
  }
});
function yr(e) {
  const t = Object.keys(Bl.props).filter((n) => !Sn(n) && n !== "class" && n !== "style");
  return kn(e, t);
}
const br = ["color", "file", "time", "date", "datetime-local", "week", "month"], kr = I({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...$n(),
  ...Al()
}, "VTextField"), Cr = z()({
  name: "VTextField",
  directives: {
    Intersect: el
  },
  inheritAttrs: !1,
  props: kr(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const i = he(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Fn(e), c = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = v(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = v(() => ["plain", "underlined"].includes(e.variant));
    function g(V, E) {
      var p, T;
      !e.autofocus || !V || (T = (p = E[0].target) == null ? void 0 : p.focus) == null || T.call(p);
    }
    const h = G(), C = G(), y = G(), m = v(() => br.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function b() {
      var V;
      y.value !== document.activeElement && ((V = y.value) == null || V.focus()), o.value || r();
    }
    function w(V) {
      a("mousedown:control", V), V.target !== y.value && (b(), V.preventDefault());
    }
    function k(V) {
      b(), a("click:control", V);
    }
    function x(V) {
      V.stopPropagation(), b(), de(() => {
        i.value = null, $a(e["onClick:clear"], V);
      });
    }
    function A(V) {
      var p;
      const E = V.target;
      if (i.value = E.value, (p = e.modelModifiers) != null && p.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const T = [E.selectionStart, E.selectionEnd];
        de(() => {
          E.selectionStart = T[0], E.selectionEnd = T[1];
        });
      }
    }
    return H(() => {
      const V = !!(l.counter || e.counter !== !1 && e.counter != null), E = !!(V || l.details), [p, T] = ai(n), {
        modelValue: M,
        ...O
      } = Tt.filterProps(e), S = yr(e);
      return u(Tt, X({
        ref: h,
        modelValue: i.value,
        "onUpdate:modelValue": (_) => i.value = _,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, p, O, {
        centerAffix: !f.value,
        focused: o.value
      }), {
        ...l,
        default: (_) => {
          let {
            id: B,
            isDisabled: L,
            isDirty: R,
            isReadonly: Y,
            isValid: D
          } = _;
          return u(Bl, X({
            ref: C,
            onMousedown: w,
            onClick: k,
            "onClick:clear": x,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, S, {
            id: B.value,
            active: m.value || R.value,
            dirty: R.value || e.dirty,
            disabled: L.value,
            focused: o.value,
            error: D.value === !1
          }), {
            ...l,
            default: (Z) => {
              let {
                props: {
                  class: W,
                  ...N
                }
              } = Z;
              const J = fe(u("input", X({
                ref: y,
                value: i.value,
                onInput: A,
                autofocus: e.autofocus,
                readonly: Y.value,
                disabled: L.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: b,
                onBlur: s
              }, N, T), null), [[st("intersect"), {
                handler: g
              }, null, {
                once: !0
              }]]);
              return u(ue, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: W,
                "data-no-activator": ""
              }, [l.default(), J]) : jl(J, {
                class: W
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: E ? (_) => {
          var B;
          return u(ue, null, [(B = l.details) == null ? void 0 : B.call(l, _), V && u(ue, null, [u("span", null, null), u(mr, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), El({}, h, C, y);
  }
}), Sr = z()({
  name: "VCardActions",
  props: U(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Mt({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), H(() => {
      var a;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), wr = I({
  opacity: [Number, String],
  ...U(),
  ...ke()
}, "VCardSubtitle"), pr = z()({
  name: "VCardSubtitle",
  props: wr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => u(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), xr = Fi("v-card-title"), _r = I({
  appendAvatar: String,
  appendIcon: te,
  prependAvatar: String,
  prependIcon: te,
  subtitle: [String, Number],
  title: [String, Number],
  ...U(),
  ...et()
}, "VCardItem"), Vr = z()({
  name: "VCardItem",
  props: _r(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? u(we, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, n.prepend) : u(ue, null, [e.prependAvatar && u(ga, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(ce, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [r && u(xr, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
        }
      }), s && u(pr, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = n.subtitle) == null ? void 0 : d.call(n)) ?? e.subtitle];
        }
      }), (c = n.default) == null ? void 0 : c.call(n)]), o && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? u(we, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, n.append) : u(ue, null, [e.appendIcon && u(ce, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(ga, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Pr = I({
  opacity: [Number, String],
  ...U(),
  ...ke()
}, "VCardText"), Il = z()({
  name: "VCardText",
  props: Pr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => u(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Er = I({
  appendAvatar: String,
  appendIcon: te,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: te,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...dt(),
  ...U(),
  ...et(),
  ...Je(),
  ...vt(),
  ...Bn(),
  ...Wt(),
  ...On(),
  ...Ve(),
  ...ul(),
  ...ke(),
  ...se(),
  ...zt({
    variant: "elevated"
  })
}, "VCard"), Ar = z()({
  name: "VCard",
  directives: {
    Ripple: Ut
  },
  props: Er(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = me(e), {
      borderClasses: i
    } = ft(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = An(e), {
      densityClasses: c
    } = gt(e), {
      dimensionStyles: d
    } = Qe(e), {
      elevationClasses: f
    } = mt(e), {
      loaderClasses: g
    } = In(e), {
      locationStyles: h
    } = Gt(e), {
      positionClasses: C
    } = Tn(e), {
      roundedClasses: y
    } = Pe(e), m = sl(e, n), b = v(() => e.link !== !1 && m.isLink.value), w = v(() => !e.disabled && e.link !== !1 && (e.link || m.isClickable.value));
    return H(() => {
      const k = b.value ? "a" : e.tag, x = !!(a.title || e.title != null), A = !!(a.subtitle || e.subtitle != null), V = x || A, E = !!(a.append || e.appendAvatar || e.appendIcon), p = !!(a.prepend || e.prependAvatar || e.prependIcon), T = !!(a.image || e.image), M = V || p || E, O = !!(a.text || e.text != null);
      return fe(u(k, X({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": w.value
        }, l.value, i.value, o.value, c.value, f.value, g.value, C.value, y.value, s.value, e.class],
        style: [r.value, d.value, h.value, e.style],
        onClick: w.value && m.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, m.linkProps), {
        default: () => {
          var S;
          return [T && u("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? u(we, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : u(tl, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(rl, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), M && u(Vr, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), O && u(Il, {
            key: "text"
          }, {
            default: () => {
              var _;
              return [((_ = a.text) == null ? void 0 : _.call(a)) ?? e.text];
            }
          }), (S = a.default) == null ? void 0 : S.call(a), a.actions && u(Sr, null, {
            default: a.actions
          }), En(w.value, "v-card")];
        }
      }), [[st("ripple"), w.value && e.ripple]]);
    }), {};
  }
}), Br = I({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...U()
}, "VColorPickerCanvas"), Ir = _e({
  name: "VColorPickerCanvas",
  props: Br(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = K(!1), l = G(), i = K(parseFloat(e.width)), o = K(parseFloat(e.height)), r = G({
      x: 0,
      y: 0
    }), s = v({
      get: () => r.value,
      set(m) {
        var k, x;
        if (!l.value) return;
        const {
          x: b,
          y: w
        } = m;
        r.value = m, n("update:color", {
          h: ((k = e.color) == null ? void 0 : k.h) ?? 0,
          s: ge(b, 0, i.value) / i.value,
          v: 1 - ge(w, 0, o.value) / o.value,
          a: ((x = e.color) == null ? void 0 : x.a) ?? 1
        });
      }
    }), c = v(() => {
      const {
        x: m,
        y: b
      } = s.value, w = parseInt(e.dotSize, 10) / 2;
      return {
        width: F(e.dotSize),
        height: F(e.dotSize),
        transform: `translate(${F(m - w)}, ${F(b - w)})`
      };
    }), {
      resizeRef: d
    } = qa((m) => {
      var k;
      if (!((k = d.el) != null && k.offsetParent)) return;
      const {
        width: b,
        height: w
      } = m[0].contentRect;
      i.value = b, o.value = w;
    });
    function f(m, b, w) {
      const {
        left: k,
        top: x,
        width: A,
        height: V
      } = w;
      s.value = {
        x: ge(m - k, 0, A),
        y: ge(b - x, 0, V)
      };
    }
    function g(m) {
      m.type === "mousedown" && m.preventDefault(), !e.disabled && (h(m), window.addEventListener("mousemove", h), window.addEventListener("mouseup", C), window.addEventListener("touchmove", h), window.addEventListener("touchend", C));
    }
    function h(m) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const b = ii(m);
      f(b.clientX, b.clientY, l.value.getBoundingClientRect());
    }
    function C() {
      window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", C), window.removeEventListener("touchmove", h), window.removeEventListener("touchend", C);
    }
    function y() {
      var x;
      if (!l.value) return;
      const m = l.value, b = m.getContext("2d");
      if (!b) return;
      const w = b.createLinearGradient(0, 0, m.width, 0);
      w.addColorStop(0, "hsla(0, 0%, 100%, 1)"), w.addColorStop(1, `hsla(${((x = e.color) == null ? void 0 : x.h) ?? 0}, 100%, 50%, 1)`), b.fillStyle = w, b.fillRect(0, 0, m.width, m.height);
      const k = b.createLinearGradient(0, 0, 0, m.height);
      k.addColorStop(0, "hsla(0, 0%, 0%, 0)"), k.addColorStop(1, "hsla(0, 0%, 0%, 1)"), b.fillStyle = k, b.fillRect(0, 0, m.width, m.height);
    }
    return j(() => {
      var m;
      return (m = e.color) == null ? void 0 : m.h;
    }, y, {
      immediate: !0
    }), j(() => [i.value, o.value], (m, b) => {
      y(), r.value = {
        x: s.value.x * m[0] / b[0],
        y: s.value.y * m[1] / b[1]
      };
    }, {
      flush: "post"
    }), j(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * o.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), $t(() => y()), H(() => u("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: g,
      onTouchstartPassive: g
    }, [u("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && u("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function Or(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function Tr(e, t) {
  if (t == null || typeof t == "string") {
    const n = Wa(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return Te(t, ["r", "g", "b"]) ? n = xe(e) : Te(t, ["h", "s", "l"]) ? n = za(e) : Te(t, ["h", "s", "v"]) && (n = e), Or(n, !Te(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Ge = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, fn = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, t) => ({
      ...e,
      r: Number(t)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, t) => ({
      ...e,
      g: Number(t)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, t) => ({
      ...e,
      b: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: xe,
  from: ct
};
var xa;
const Lr = {
  ...fn,
  inputs: (xa = fn.inputs) == null ? void 0 : xa.slice(0, 3)
}, vn = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, t) => ({
      ...e,
      h: Number(t)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      s: Number(t)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      l: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: za,
  from: xn
}, Fr = {
  ...vn,
  inputs: vn.inputs.slice(0, 3)
}, Ol = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, t) => t
  }],
  to: Wa,
  from: Ei
}, $r = {
  ...Ol,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t
  }]
}, Ne = {
  rgb: Lr,
  rgba: fn,
  hsl: Fr,
  hsla: vn,
  hex: $r,
  hexa: Ol
}, Rr = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", n, null), u("span", null, [t])]);
}, Mr = I({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Ne).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Ne),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Ne).includes(t))
  },
  ...U()
}, "VColorPickerEdit"), Nr = _e({
  name: "VColorPickerEdit",
  props: Mr(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = v(() => e.modes.map((i) => ({
      ...Ne[i],
      name: i
    }))), l = v(() => {
      var r;
      const i = a.value.find((s) => s.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((s) => {
        let {
          getValue: c,
          getColor: d,
          ...f
        } = s;
        return {
          ...i.inputProps,
          ...f,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (g) => {
            const h = g.target;
            h && n("update:color", i.from(d(o ?? i.to(Ge), h.value)));
          }
        };
      });
    });
    return H(() => {
      var i;
      return u("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((o) => u(Rr, o, null)), a.value.length > 1 && u(bl, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = a.value.findIndex((r) => r.name === e.mode);
          n("update:mode", a.value[(o + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Rn = Symbol.for("vuetify:v-slider");
function zr(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function Dr(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Hr = I({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...Ve(),
  ...vt({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), jr = (e) => {
  const t = v(() => parseFloat(e.min)), n = v(() => parseFloat(e.max)), a = v(() => +e.step > 0 ? parseFloat(e.step) : 0), l = v(() => Math.max(Wn(a.value), Wn(t.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = ge(o, t.value, n.value), s = t.value % a.value, c = Math.round((r - s) / a.value) * a.value + s;
    return parseFloat(Math.min(c, n.value).toFixed(l.value));
  }
  return {
    min: t,
    max: n,
    step: a,
    decimals: l,
    roundValue: i
  };
}, Wr = (e) => {
  let {
    props: t,
    steps: n,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: r
  } = be(), s = q(t, "reverse"), c = v(() => t.direction === "vertical"), d = v(() => c.value !== s.value), {
    min: f,
    max: g,
    step: h,
    decimals: C,
    roundValue: y
  } = n, m = v(() => parseInt(t.thumbSize, 10)), b = v(() => parseInt(t.tickSize, 10)), w = v(() => parseInt(t.trackSize, 10)), k = v(() => (g.value - f.value) / h.value), x = q(t, "disabled"), A = v(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), V = v(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), E = v(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), p = K(!1), T = K(0), M = G(), O = G();
  function S(P) {
    var Nn;
    const $ = (Nn = M.value) == null ? void 0 : Nn.$el;
    if (!$) return;
    const ne = t.direction === "vertical", ht = ne ? "top" : "left", yt = ne ? "height" : "width", Ll = ne ? "clientY" : "clientX", {
      [ht]: Fl,
      [yt]: $l
    } = $.getBoundingClientRect(), Rl = Dr(P, Ll);
    let qt = Math.min(Math.max((Rl - Fl - T.value) / $l, 0), 1) || 0;
    return (ne ? d.value : d.value !== r.value) && (qt = 1 - qt), y(f.value + qt * (g.value - f.value));
  }
  const _ = (P) => {
    const $ = S(P);
    $ != null && i({
      value: $
    }), p.value = !1, T.value = 0;
  }, B = (P) => {
    const $ = S(P);
    O.value = o(P), O.value && (p.value = !0, O.value.contains(P.target) ? T.value = zr(P, O.value, t.direction) : (T.value = 0, $ != null && l({
      value: $
    })), $ != null && a({
      value: $
    }), de(() => {
      var ne;
      return (ne = O.value) == null ? void 0 : ne.focus();
    }));
  }, L = {
    passive: !0,
    capture: !0
  };
  function R(P) {
    const $ = S(P);
    $ != null && l({
      value: $
    });
  }
  function Y(P) {
    P.stopPropagation(), P.preventDefault(), _(P), window.removeEventListener("mousemove", R, L), window.removeEventListener("mouseup", Y);
  }
  function D(P) {
    var $;
    _(P), window.removeEventListener("touchmove", R, L), ($ = P.target) == null || $.removeEventListener("touchend", D);
  }
  function Z(P) {
    var $;
    B(P), window.addEventListener("touchmove", R, L), ($ = P.target) == null || $.addEventListener("touchend", D, {
      passive: !1
    });
  }
  function W(P) {
    P.preventDefault(), B(P), window.addEventListener("mousemove", R, L), window.addEventListener("mouseup", Y, {
      passive: !1
    });
  }
  const N = (P) => {
    const $ = (P - f.value) / (g.value - f.value) * 100;
    return ge(isNaN($) ? 0 : $, 0, 100);
  }, J = q(t, "showTicks"), re = v(() => J.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((P) => ({
    value: P,
    position: N(P),
    label: P.toString()
  })) : Object.keys(t.ticks).map((P) => ({
    value: parseFloat(P),
    position: N(parseFloat(P)),
    label: t.ticks[P]
  })) : k.value !== 1 / 0 ? Jl(k.value + 1).map((P) => {
    const $ = f.value + P * h.value;
    return {
      value: $,
      position: N($)
    };
  }) : [] : []), Ce = v(() => re.value.some((P) => {
    let {
      label: $
    } = P;
    return !!$;
  })), Ee = {
    activeThumbRef: O,
    color: q(t, "color"),
    decimals: C,
    disabled: x,
    direction: q(t, "direction"),
    elevation: q(t, "elevation"),
    hasLabels: Ce,
    isReversed: s,
    indexFromEnd: d,
    min: f,
    max: g,
    mousePressed: p,
    numTicks: k,
    onSliderMousedown: W,
    onSliderTouchstart: Z,
    parsedTicks: re,
    parseMouseMove: S,
    position: N,
    readonly: q(t, "readonly"),
    rounded: q(t, "rounded"),
    roundValue: y,
    showTicks: J,
    startOffset: T,
    step: h,
    thumbSize: m,
    thumbColor: A,
    thumbLabel: q(t, "thumbLabel"),
    ticks: q(t, "ticks"),
    tickSize: b,
    trackColor: V,
    trackContainerRef: M,
    trackFillColor: E,
    trackSize: w,
    vertical: c
  };
  return Ie(Rn, Ee), Ee;
}, Gr = I({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  ...U()
}, "VSliderThumb"), Ur = z()({
  name: "VSliderThumb",
  directives: {
    Ripple: Ut
  },
  props: Gr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = ie(Rn), {
      isRtl: i,
      rtlClasses: o
    } = be();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: s,
      disabled: c,
      thumbSize: d,
      thumbLabel: f,
      direction: g,
      isReversed: h,
      vertical: C,
      readonly: y,
      elevation: m,
      mousePressed: b,
      decimals: w,
      indexFromEnd: k
    } = l, x = v(() => c.value ? void 0 : m.value), {
      elevationClasses: A
    } = mt(x), {
      textColorClasses: V,
      textColorStyles: E
    } = De(r), {
      pageup: p,
      pagedown: T,
      end: M,
      home: O,
      left: S,
      right: _,
      down: B,
      up: L
    } = ti, R = [p, T, M, O, S, _, B, L], Y = v(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function D(W, N) {
      if (!R.includes(W.key)) return;
      W.preventDefault();
      const J = s.value || 0.1, re = (e.max - e.min) / J;
      if ([S, _, B, L].includes(W.key)) {
        const Ee = (C.value ? [i.value ? S : _, h.value ? B : L] : k.value !== i.value ? [S, L] : [_, L]).includes(W.key) ? 1 : -1, P = W.shiftKey ? 2 : W.ctrlKey ? 1 : 0;
        N = N + Ee * J * Y.value[P];
      } else if (W.key === O)
        N = e.min;
      else if (W.key === M)
        N = e.max;
      else {
        const Ce = W.key === T ? 1 : -1;
        N = N - Ce * J * (re > 100 ? re / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, N));
    }
    function Z(W) {
      const N = D(W, e.modelValue);
      N != null && a("update:modelValue", N);
    }
    return H(() => {
      const W = F(k.value ? 100 - e.position : e.position, "%");
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && b.value
        }, e.class, o.value],
        style: [{
          "--v-slider-thumb-position": W,
          "--v-slider-thumb-size": F(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!y.value,
        "aria-orientation": g.value,
        onKeydown: y.value ? void 0 : Z
      }, [u("div", {
        class: ["v-slider-thumb__surface", V.value, A.value],
        style: {
          ...E.value
        }
      }, null), fe(u("div", {
        class: ["v-slider-thumb__ripple", V.value],
        style: E.value
      }, null), [[st("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), u(Gi, {
        origin: "bottom center"
      }, {
        default: () => {
          var N;
          return [fe(u("div", {
            class: "v-slider-thumb__label-container"
          }, [u("div", {
            class: ["v-slider-thumb__label"]
          }, [u("div", null, [((N = n["thumb-label"]) == null ? void 0 : N.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? w.value : 1)])])]), [[ut, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
}), qr = I({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...U()
}, "VSliderTrack"), Yr = z()({
  name: "VSliderTrack",
  props: qr(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ie(Rn);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: r,
      tickSize: s,
      trackColor: c,
      trackFillColor: d,
      trackSize: f,
      vertical: g,
      min: h,
      max: C,
      indexFromEnd: y
    } = a, {
      roundedClasses: m
    } = Pe(o), {
      backgroundColorClasses: b,
      backgroundColorStyles: w
    } = pe(d), {
      backgroundColorClasses: k,
      backgroundColorStyles: x
    } = pe(c), A = v(() => `inset-${g.value ? "block" : "inline"}-${y.value ? "end" : "start"}`), V = v(() => g.value ? "height" : "width"), E = v(() => ({
      [A.value]: "0%",
      [V.value]: "100%"
    })), p = v(() => e.stop - e.start), T = v(() => ({
      [A.value]: F(e.start, "%"),
      [V.value]: F(p.value, "%")
    })), M = v(() => r.value ? (g.value ? i.value.slice().reverse() : i.value).map((S, _) => {
      var L;
      const B = S.value !== h.value && S.value !== C.value ? F(S.position, "%") : void 0;
      return u("div", {
        key: S.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": S.position >= e.start && S.position <= e.stop,
          "v-slider-track__tick--first": S.value === h.value,
          "v-slider-track__tick--last": S.value === C.value
        }],
        style: {
          [A.value]: B
        }
      }, [(S.label || n["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((L = n["tick-label"]) == null ? void 0 : L.call(n, {
        tick: S,
        index: _
      })) ?? S.label])]);
    }) : []);
    return H(() => u("div", {
      class: ["v-slider-track", m.value, e.class],
      style: [{
        "--v-slider-track-size": F(f.value),
        "--v-slider-tick-size": F(s.value)
      }, e.style]
    }, [u("div", {
      class: ["v-slider-track__background", k.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...E.value,
        ...x.value
      }
    }, null), u("div", {
      class: ["v-slider-track__fill", b.value],
      style: {
        ...T.value,
        ...w.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [M.value])])), {};
  }
}), Xr = I({
  ...Ln(),
  ...Hr(),
  ...$n(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), wa = z()({
  name: "VSlider",
  props: Xr(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = G(), {
      rtlClasses: i
    } = be(), o = jr(e), r = he(e, "modelValue", void 0, (V) => o.roundValue(V ?? o.min.value)), {
      min: s,
      max: c,
      mousePressed: d,
      roundValue: f,
      onSliderMousedown: g,
      onSliderTouchstart: h,
      trackContainerRef: C,
      position: y,
      hasLabels: m,
      readonly: b
    } = Wr({
      props: e,
      steps: o,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (V) => {
        let {
          value: E
        } = V;
        const p = f(E);
        r.value = p, a("end", p);
      },
      onSliderMove: (V) => {
        let {
          value: E
        } = V;
        return r.value = f(E);
      },
      getActiveThumb: () => {
        var V;
        return (V = l.value) == null ? void 0 : V.$el;
      }
    }), {
      isFocused: w,
      focus: k,
      blur: x
    } = Fn(e), A = v(() => y(r.value));
    return H(() => {
      const V = Tt.filterProps(e), E = !!(e.label || n.label || n.prepend);
      return u(Tt, X({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || m.value,
          "v-slider--focused": w.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, V, {
        focused: w.value
      }), {
        ...n,
        prepend: E ? (p) => {
          var T, M;
          return u(ue, null, [((T = n.label) == null ? void 0 : T.call(n, p)) ?? (e.label ? u(kl, {
            id: p.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (M = n.prepend) == null ? void 0 : M.call(n, p)]);
        } : void 0,
        default: (p) => {
          let {
            id: T,
            messagesId: M
          } = p;
          return u("div", {
            class: "v-slider__container",
            onMousedown: b.value ? void 0 : g,
            onTouchstartPassive: b.value ? void 0 : h
          }, [u("input", {
            id: T.value,
            name: e.name || T.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(Yr, {
            ref: C,
            start: 0,
            stop: A.value
          }, {
            "tick-label": n["tick-label"]
          }), u(Ur, {
            ref: l,
            "aria-describedby": M.value,
            focused: w.value,
            min: s.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (O) => r.value = O,
            position: A.value,
            elevation: e.elevation,
            onFocus: k,
            onBlur: x,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Kr = I({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...U()
}, "VColorPickerPreview"), Zr = _e({
  name: "VColorPickerPreview",
  props: Kr(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = new AbortController();
    Wl(() => a.abort());
    async function l() {
      if (!zn) return;
      const i = new window.EyeDropper();
      try {
        const o = await i.open({
          signal: a.signal
        }), r = ct(Se(o.sRGBHex));
        n("update:color", {
          ...e.color ?? Ge,
          ...r
        });
      } catch {
      }
    }
    return H(() => {
      var i, o;
      return u("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [zn && u("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [u(bl, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), u("div", {
        class: "v-color-picker-preview__dot"
      }, [u("div", {
        style: {
          background: Ha(e.color ?? Ge)
        }
      }, null)]), u("div", {
        class: "v-color-picker-preview__sliders"
      }, [u(wa, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? Ge,
          h: r
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && u(wa, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? Ge,
          a: r
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
}), Jr = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, Qr = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, es = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, ts = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, ns = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, as = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, ls = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, is = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, os = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, rs = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, ss = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, us = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, cs = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, ds = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, fs = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, vs = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, ms = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, gs = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, hs = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, ys = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, bs = {
  red: Jr,
  pink: Qr,
  purple: es,
  deepPurple: ts,
  indigo: ns,
  blue: as,
  lightBlue: ls,
  cyan: is,
  teal: os,
  green: rs,
  lightGreen: ss,
  lime: us,
  yellow: cs,
  amber: ds,
  orange: fs,
  deepOrange: vs,
  brown: ms,
  blueGrey: gs,
  grey: hs,
  shades: ys
}, ks = I({
  swatches: {
    type: Array,
    default: () => Cs(bs)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...U()
}, "VColorPickerSwatches");
function Cs(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const Ss = _e({
  name: "VColorPickerSwatches",
  props: ks(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    return H(() => u("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: F(e.maxHeight)
      }, e.style]
    }, [u("div", null, [e.swatches.map((a) => u("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = Se(l), o = ct(i), r = Da(i);
      return u("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && n("update:color", o)
      }, [u("div", {
        style: {
          background: r
        }
      }, [e.color && Rt(e.color, o) ? u(ce, {
        size: "x-small",
        icon: "$success",
        color: Bi(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), Tl = I({
  color: String,
  ...dt(),
  ...U(),
  ...Je(),
  ...vt(),
  ...Wt(),
  ...On(),
  ...Ve(),
  ...ke(),
  ...se()
}, "VSheet"), pa = z()({
  name: "VSheet",
  props: Tl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = me(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = pe(q(e, "color")), {
      borderClasses: o
    } = ft(e), {
      dimensionStyles: r
    } = Qe(e), {
      elevationClasses: s
    } = mt(e), {
      locationStyles: c
    } = Gt(e), {
      positionClasses: d
    } = Tn(e), {
      roundedClasses: f
    } = Pe(e);
    return H(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, o.value, s.value, d.value, f.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, n)), {};
  }
}), ws = I({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Ne).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Ne),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Ne).includes(t))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...Cn(Tl({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), ps = _e({
  name: "VColorPicker",
  props: ws(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const t = he(e, "mode"), n = G(null), a = he(e, "modelValue", void 0, (s) => {
      if (s == null || s === "") return null;
      let c;
      try {
        c = ct(Se(s));
      } catch (d) {
        return Me(d), null;
      }
      return c;
    }, (s) => s ? Tr(s, e.modelValue) : null), l = v(() => a.value ? {
      ...a.value,
      h: n.value ?? a.value.h
    } : null), {
      rtlClasses: i
    } = be();
    let o = !0;
    j(a, (s) => {
      if (!o) {
        o = !0;
        return;
      }
      s && (n.value = s.h);
    }, {
      immediate: !0
    });
    const r = (s) => {
      o = !1, n.value = s.h, a.value = s;
    };
    return yn(() => {
      e.modes.includes(t.value) || (t.value = e.modes[0]);
    }), Mt({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), H(() => {
      const s = pa.filterProps(e);
      return u(pa, X({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Ha({
            ...l.value ?? Ge,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && u(Ir, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && u("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && u(Zr, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !t.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(Nr, {
          key: "edit",
          modes: e.modes,
          mode: t.value,
          "onUpdate:mode": (c) => t.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(Ss, {
          key: "swatches",
          color: l.value,
          "onUpdate:color": r,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
}), xs = {
  key: 1,
  class: "text"
}, _s = /* @__PURE__ */ Ft({
  __name: "GsButton",
  props: {
    tag: { default: "button" },
    type: { default: "primary" },
    size: {},
    icon: {},
    disabled: { type: Boolean },
    loading: { type: Boolean },
    fullWidth: { type: Boolean },
    href: {},
    width: {},
    target: { default: "_self" }
  },
  setup(e) {
    const t = e, n = v(() => t.href ? "a" : t.tag || "button"), a = v(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), l = v(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), i = v(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (o, r) => fe((Be(), wt(Ba(n.value), {
      class: Oa(l.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      target: t.target,
      style: Ia({ width: o.width + "px" }),
      type: "button"
    }, {
      default: Ae(() => [
        t.icon && !t.loading ? (Be(), wt(le(ce), {
          key: 0,
          class: "icon"
        }, {
          default: Ae(() => [
            Gl(tn(t.icon), 1)
          ]),
          _: 1
        })) : at("", !0),
        o.$slots.default ? (Be(), Pt("span", xs, [
          Ul(o.$slots, "default", {}, void 0, !0)
        ])) : at("", !0),
        t.loading ? (Be(), wt(le(ol), {
          key: 2,
          class: "loader",
          size: i.value,
          indeterminate: "",
          color: "gray"
        }, null, 8, ["size"])) : at("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "target", "style"])), [
      [Ut, a.value]
    ]);
  }
}), Mn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, Vs = /* @__PURE__ */ Mn(_s, [["__scopeId", "data-v-eabf862e"]]), Ps = { class: "d-flex" }, Es = { class: "d-flex flex-column" }, As = ["innerHTML"], Bs = ["innerHTML"], Is = /* @__PURE__ */ Ft({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, n = v(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (a, l) => (Be(), Pt("div", {
      class: Oa(n.value),
      role: "alert"
    }, [
      Ue("div", Ps, [
        u(le(ce), {
          icon: "mdi-information-outline",
          class: "icon me-3",
          size: "16"
        }),
        Ue("div", Es, [
          a.title ? (Be(), Pt("span", {
            key: 0,
            class: "title font-weight-bold",
            innerHTML: a.title
          }, null, 8, As)) : at("", !0),
          Ue("span", {
            class: "message",
            innerHTML: a.message
          }, null, 8, Bs)
        ])
      ])
    ], 2));
  }
}), Os = /* @__PURE__ */ Mn(Is, [["__scopeId", "data-v-ec8eae11"]]), Ts = ["aria-label"], Ls = {
  key: 0,
  class: "gs-color-picker-label"
}, Fs = { class: "sr-only" }, $s = /* @__PURE__ */ Ft({
  __name: "GsColorPicker",
  props: /* @__PURE__ */ ql({
    label: {},
    placeholder: { default: "Select a color" },
    disabled: { type: Boolean },
    colorModes: {},
    clearable: { type: Boolean, default: !1 }
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Yl(e, "modelValue"), a = v(
      () => {
        var o;
        return (o = t.colorModes) != null && o.length ? t.colorModes : ["hex"];
      }
    ), l = v(() => [
      "gs-color-picker",
      {
        "gs-color-picker-disabled": t.disabled
      }
    ]), i = () => {
      n.value = "";
    };
    return (o, r) => (Be(), wt(fr, {
      location: "top",
      offset: "15",
      "close-on-content-click": !1,
      "close-on-back": ""
    }, {
      activator: Ae(({ props: s }) => [
        Ue("div", X({ class: l.value }, s, {
          role: "button",
          tabindex: "0",
          "aria-label": `Open color picker. Current color: ${n.value || "white"}`
        }), [
          o.label ? (Be(), Pt("label", Ls, tn(o.label), 1)) : at("", !0),
          u(Cr, {
            modelValue: n.value,
            "onUpdate:modelValue": r[0] || (r[0] = (c) => n.value = c),
            flat: "",
            variant: "outlined",
            readonly: "",
            disabled: o.disabled,
            "aria-label": o.label || o.placeholder,
            placeholder: o.placeholder
          }, Xl({
            prepend: Ae(() => [
              Ue("div", {
                class: "gs-color-picker-swatch",
                style: Ia({ backgroundColor: n.value || "#FFFFFF" })
              }, [
                Ue("span", Fs, tn(n.value || "white"), 1)
              ], 4)
            ]),
            _: 2
          }, [
            o.clearable && n.value && !o.disabled ? {
              name: "append",
              fn: Ae(() => [
                u(ce, {
                  icon: "mdi-close",
                  size: "small",
                  onClick: Kl(i, ["stop"]),
                  role: "button",
                  tabindex: "0",
                  "aria-label": "Clear color selection"
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "disabled", "aria-label", "placeholder"])
        ], 16, Ts)
      ]),
      default: Ae(() => [
        u(Ar, null, {
          default: Ae(() => [
            u(Il, { class: "pa-0" }, {
              default: Ae(() => [
                u(le(ps), {
                  modelValue: n.value,
                  "onUpdate:modelValue": r[1] || (r[1] = (s) => n.value = s),
                  modes: a.value,
                  "aria-label": `Color picker for ${o.label || "color selection"}`
                }, null, 8, ["modelValue", "modes", "aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Rs = /* @__PURE__ */ Mn($s, [["__scopeId", "data-v-489d03ec"]]), Ms = {
  dark: !1,
  colors: {
    primary: "#3B755F",
    secondary: "#E57066",
    black: "#212121",
    green: "#3B755F",
    lightGreen: "#AFC6BD",
    red: "#E57066",
    error: "#E57066",
    white: "#F9F9F9",
    grey: "#BBBBBB",
    beige: "#F2EBDB"
  }
}, Ns = Zl({
  icons: {
    defaultSet: "mdi",
    aliases: oo,
    sets: {
      mdi: ro
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: Ms
    }
  }
});
function zs(e) {
  e.use(Ns);
}
const Ds = {
  GsButton: Vs,
  GsAlertBar: Os,
  GsColorPicker: Rs
}, Ws = {
  install(e) {
    zs(e);
    for (const [t, n] of Object.entries(Ds))
      e.component(t, n);
  }
};
export {
  Os as GsAlertBar,
  Vs as GsButton,
  Rs as GsColorPicker,
  Ws as default
};
