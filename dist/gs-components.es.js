import { reactive as Ht, watchEffect as $t, toRef as R, shallowRef as ce, capitalize as Pa, Fragment as _e, warn as $n, getCurrentInstance as Ta, inject as be, computed as A, provide as Ze, ref as q, unref as Ce, defineComponent as Ae, h as on, camelize as Ba, onBeforeUnmount as it, watch as re, readonly as er, onScopeDispose as Ye, effectScope as tr, toRaw as me, TransitionGroup as nr, Transition as At, createVNode as L, mergeProps as ie, toRefs as Bs, createElementVNode as B, normalizeStyle as ne, normalizeClass as G, toValue as dt, isRef as _i, onBeforeMount as sn, nextTick as We, withDirectives as tt, vShow as ln, onMounted as Ut, useId as Gt, onUpdated as Ls, Text as ks, resolveDynamicComponent as Un, toDisplayString as ve, Teleport as Is, onDeactivated as Os, cloneVNode as Ns, createElementBlock as Q, openBlock as U, createCommentVNode as He, createBlock as Ve, withCtx as ge, createTextVNode as Nt, renderSlot as Je, renderList as Ct, withModifiers as Rs, onUnmounted as La, createSlots as ka, useAttrs as Hs, useSlots as Ms } from "vue";
import { createVuetify as Fs } from "vuetify";
function M(e, t) {
  return (n) => Object.keys(e).reduce((i, r) => {
    const o = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : {
      type: e[r]
    };
    return n && r in n ? i[r] = {
      ...o,
      default: n[r]
    } : i[r] = o, t && !i[r].source && (i[r].source = t), i;
  }, {});
}
const he = M({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Le = typeof window < "u", ir = Le && "IntersectionObserver" in window;
function br(e, t, n) {
  Vs(e, t), t.set(e, n);
}
function Vs(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function wr(e, t, n) {
  return e.set(Ia(e, t), n), n;
}
function ot(e, t) {
  return e.get(Ia(e, t));
}
function Ia(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Oa(e, t, n) {
  const i = t.length - 1;
  if (i < 0) return e === void 0 ? n : e;
  for (let r = 0; r < i; r++) {
    if (e == null)
      return n;
    e = e[t[r]];
  }
  return e == null || e[t[i]] === void 0 ? n : e[t[i]];
}
function Gn(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((i) => Gn(e[i], t[i]));
}
function Ds(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Oa(e, t.split("."), n));
}
function qt(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const r = t(e, n);
    return typeof r > "u" ? n : r;
  }
  if (typeof t == "string") return Ds(e, t, n);
  if (Array.isArray(t)) return Oa(e, t, n);
  if (typeof t != "function") return n;
  const i = t(e, n);
  return typeof i > "u" ? n : i;
}
function Y(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function Si(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function _r(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function $s(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Sr = Object.freeze({
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
});
function ni(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Na(e, t) {
  const n = {};
  for (const i of t)
    Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
  return n;
}
function Er(e, t, n) {
  const i = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    t.some((o) => o instanceof RegExp ? o.test(a) : o === a) ? i[a] = e[a] : r[a] = e[a];
  return [i, r];
}
function jn(e, t) {
  const n = {
    ...e
  };
  return t.forEach((i) => delete n[i]), n;
}
const Ra = /^on[^a-z]/, Ha = (e) => Ra.test(e), Us = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Gs(e) {
  const [t, n] = Er(e, [Ra]), i = jn(t, Us), [r, a] = Er(n, ["class", "style", "id", /^data-/]);
  return Object.assign(r, t), Object.assign(a, i), [r, a];
}
function mt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Qt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Cr(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function js(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let i = 0;
  for (; i < e.length; )
    n.push(e.substr(i, t)), i += t;
  return n;
}
function It() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const i = {};
  for (const r in e)
    i[r] = e[r];
  for (const r in t) {
    const a = e[r], o = t[r];
    if (_r(a) && _r(o)) {
      i[r] = It(a, o, n);
      continue;
    }
    if (n && Array.isArray(a) && Array.isArray(o)) {
      i[r] = n(a, o);
      continue;
    }
    i[r] = o;
  }
  return i;
}
function Ma(e) {
  return e.map((t) => t.type === _e ? Ma(t.children) : t).flat();
}
function xt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (xt.cache.has(e)) return xt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return xt.cache.set(e, t), t;
}
xt.cache = /* @__PURE__ */ new Map();
function Zt(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => Zt(e, n)).flat(1);
  if (t.suspense)
    return Zt(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => Zt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Zt(e, t.component.subTree).flat(1);
  }
  return [];
}
var Bt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap();
class zs {
  constructor(t) {
    br(this, Bt, []), br(this, Et, 0), this.size = t;
  }
  get isFull() {
    return ot(Bt, this).length === this.size;
  }
  push(t) {
    ot(Bt, this)[ot(Et, this)] = t, wr(Et, this, (ot(Et, this) + 1) % this.size);
  }
  values() {
    return ot(Bt, this).slice(ot(Et, this)).concat(ot(Bt, this).slice(0, ot(Et, this)));
  }
  clear() {
    ot(Bt, this).length = 0, wr(Et, this, 0);
  }
}
function rr(e) {
  const t = Ht({});
  $t(() => {
    const i = e();
    for (const r in i)
      t[r] = i[r];
  }, {
    flush: "sync"
  });
  const n = {};
  for (const i in t)
    n[i] = R(() => t[i]);
  return n;
}
function Pn(e, t) {
  return e.includes(t);
}
function Fa(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const De = () => [Function, Array];
function xr(e, t) {
  return t = "on" + Pa(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Va(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  if (Array.isArray(e))
    for (const r of e)
      r(...n);
  else typeof e == "function" && e(...n);
}
function Ei(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((i) => `${i}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Da(e, t, n) {
  let i, r = e.indexOf(document.activeElement);
  const a = t === "next" ? 1 : -1;
  do
    r += a, i = e[r];
  while ((!i || i.offsetParent == null || !((n == null ? void 0 : n(i)) ?? !0)) && r < e.length && r >= 0);
  return i;
}
function Jt(e, t) {
  var i, r, a, o;
  const n = Ei(e);
  if (t == null)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((i = n[0]) == null || i.focus());
  else if (t === "first")
    (r = n[0]) == null || r.focus();
  else if (t === "last")
    (a = n.at(-1)) == null || a.focus();
  else if (typeof t == "number")
    (o = n[t]) == null || o.focus();
  else {
    const s = Da(n, t);
    s ? s.focus() : Jt(e, t === "next" ? "first" : "last");
  }
}
function Ws(e, t) {
  if (!(Le && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function qs(e, t) {
  if (!Le || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Xs(e, t) {
  const n = e.clientX, i = e.clientY, r = t.getBoundingClientRect(), a = r.left, o = r.top, s = r.right, u = r.bottom;
  return n >= a && n <= s && i >= o && i <= u;
}
function Ci() {
  const e = ce(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => $s(e.value)
  }), t;
}
function Zs(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
const $a = ["top", "bottom"], Ys = ["start", "end", "left", "right"];
function xi(e, t) {
  let [n, i] = e.split(" ");
  return i || (i = Pn($a, n) ? "start" : Pn(Ys, n) ? "top" : "center"), {
    side: Ar(n, t),
    align: Ar(i, t)
  };
}
function Ar(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function ii(e) {
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
function ri(e) {
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
function Pr(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Tr(e) {
  return Pn($a, e.side) ? "y" : "x";
}
class et {
  constructor(t) {
    let {
      x: n,
      y: i,
      width: r,
      height: a
    } = t;
    this.x = n, this.y = i, this.width = r, this.height = a;
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
function Br(e, t) {
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
function Ua(e) {
  return Array.isArray(e) ? new et({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Ks(e) {
  if (e === document.documentElement)
    return visualViewport ? new et({
      x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
      y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
      width: visualViewport.width * visualViewport.scale,
      height: visualViewport.height * visualViewport.scale
    }) : new et({
      x: 0,
      y: 0,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  {
    const t = e.getBoundingClientRect();
    return new et({
      x: t.x,
      y: t.y,
      width: e.clientWidth,
      height: e.clientHeight
    });
  }
}
function ar(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), i = n.transform;
  if (i) {
    let r, a, o, s, u;
    if (i.startsWith("matrix3d("))
      r = i.slice(9, -1).split(/, /), a = Number(r[0]), o = Number(r[5]), s = Number(r[12]), u = Number(r[13]);
    else if (i.startsWith("matrix("))
      r = i.slice(7, -1).split(/, /), a = Number(r[0]), o = Number(r[3]), s = Number(r[4]), u = Number(r[5]);
    else
      return new et(t);
    const l = n.transformOrigin, c = t.x - s - (1 - a) * parseFloat(l), d = t.y - u - (1 - o) * parseFloat(l.slice(l.indexOf(" ") + 1)), f = a ? t.width / a : e.offsetWidth + 1, g = o ? t.height / o : e.offsetHeight + 1;
    return new et({
      x: c,
      y: d,
      width: f,
      height: g
    });
  } else
    return new et(t);
}
function Ot(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let i;
  try {
    i = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof i.finished > "u" && (i.finished = new Promise((r) => {
    i.onfinish = () => {
      r(i);
    };
  })), i;
}
const wn = /* @__PURE__ */ new WeakMap();
function Js(e, t) {
  Object.keys(t).forEach((n) => {
    if (Ha(n)) {
      const i = Fa(n), r = wn.get(e);
      if (t[n] == null)
        r == null || r.forEach((a) => {
          const [o, s] = a;
          o === i && (e.removeEventListener(i, s), r.delete(a));
        });
      else if (!r || ![...r].some((a) => a[0] === i && a[1] === t[n])) {
        e.addEventListener(i, t[n]);
        const a = r || /* @__PURE__ */ new Set();
        a.add([i, t[n]]), wn.has(e) || wn.set(e, a);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Qs(e, t) {
  Object.keys(t).forEach((n) => {
    if (Ha(n)) {
      const i = Fa(n), r = wn.get(e);
      r == null || r.forEach((a) => {
        const [o, s] = a;
        o === i && (e.removeEventListener(i, s), r.delete(a));
      });
    } else
      e.removeAttribute(n);
  });
}
const Lt = 2.4, Lr = 0.2126729, kr = 0.7151522, Ir = 0.072175, el = 0.55, tl = 0.58, nl = 0.57, il = 0.62, mn = 0.03, Or = 1.45, rl = 5e-4, al = 1.25, ol = 1.25, sl = 0.078, Nr = 12.82051282051282, pn = 0.06, ll = 1e-3;
function Rr(e, t) {
  const n = (e.r / 255) ** Lt, i = (e.g / 255) ** Lt, r = (e.b / 255) ** Lt, a = (t.r / 255) ** Lt, o = (t.g / 255) ** Lt, s = (t.b / 255) ** Lt;
  let u = n * Lr + i * kr + r * Ir, l = a * Lr + o * kr + s * Ir;
  if (u <= mn && (u += (mn - u) ** Or), l <= mn && (l += (mn - l) ** Or), Math.abs(l - u) < rl) return 0;
  let c;
  if (l > u) {
    const d = (l ** el - u ** tl) * al;
    c = d < ll ? 0 : d < sl ? d - d * Nr * pn : d - pn;
  } else {
    const d = (l ** il - u ** nl) * ol;
    c = d > -1e-3 ? 0 : d > -0.078 ? d - d * Nr * pn : d + pn;
  }
  return c * 100;
}
function Rt(e) {
  $n(`Vuetify: ${e}`);
}
function Ga(e) {
  $n(`Vuetify error: ${e}`);
}
function ul(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, $n(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
function Ai(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function cl(e) {
  return Ai(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Hr = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, dl = {
  rgb: (e, t, n, i) => ({
    r: e,
    g: t,
    b: n,
    a: i
  }),
  rgba: (e, t, n, i) => ({
    r: e,
    g: t,
    b: n,
    a: i
  }),
  hsl: (e, t, n, i) => Mr({
    h: e,
    s: t,
    l: n,
    a: i
  }),
  hsla: (e, t, n, i) => Mr({
    h: e,
    s: t,
    l: n,
    a: i
  }),
  hsv: (e, t, n, i) => en({
    h: e,
    s: t,
    v: n,
    a: i
  }),
  hsva: (e, t, n, i) => en({
    h: e,
    s: t,
    v: n,
    a: i
  })
};
function Yt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Rt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Hr.test(e)) {
    const {
      groups: t
    } = e.match(Hr), {
      fn: n,
      values: i
    } = t, r = i.split(/,\s*|\s*\/\s*|\s+/).map((a, o) => a.endsWith("%") || // unitless slv are %
    o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return dl[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((i) => i + i).join("") : [6, 8].includes(t.length) || Rt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Rt(`'${e}' is not a valid hex(a) color`), fl(t);
  } else if (typeof e == "object") {
    if (ni(e, ["r", "g", "b"]))
      return e;
    if (ni(e, ["h", "s", "l"]))
      return en(ja(e));
    if (ni(e, ["h", "s", "v"]))
      return en(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function en(e) {
  const {
    h: t,
    s: n,
    v: i,
    a: r
  } = e, a = (s) => {
    const u = (s + t / 60) % 6;
    return i - i * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, o = [a(5), a(3), a(1)].map((s) => Math.round(s * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: r
  };
}
function Mr(e) {
  return en(ja(e));
}
function ja(e) {
  const {
    h: t,
    s: n,
    l: i,
    a: r
  } = e, a = i + n * Math.min(i, 1 - i), o = a === 0 ? 0 : 2 - 2 * i / a;
  return {
    h: t,
    s: o,
    v: a,
    a: r
  };
}
function fl(e) {
  e = hl(e);
  let [t, n, i, r] = js(e, 2).map((a) => parseInt(a, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: i,
    a: r
  };
}
function hl(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Cr(Cr(e, 6), 8, "F")), e;
}
function vl(e) {
  const t = Math.abs(Rr(Yt(0), Yt(e)));
  return Math.abs(Rr(Yt(16777215), Yt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function Ee(e, t) {
  const n = Ta();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function rt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ee(e).type;
  return xt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function gl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Tn = Symbol.for("vuetify:defaults");
function or() {
  const e = be(Tn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function sr(e, t) {
  const n = or(), i = q(e), r = A(() => {
    if (Ce(t == null ? void 0 : t.disabled)) return n.value;
    const o = Ce(t == null ? void 0 : t.scoped), s = Ce(t == null ? void 0 : t.reset), u = Ce(t == null ? void 0 : t.root);
    if (i.value == null && !(o || s || u)) return n.value;
    let l = It(i.value, {
      prev: n.value
    });
    if (o) return l;
    if (s || u) {
      const c = Number(s || 1 / 0);
      for (let d = 0; d <= c && !(!l || !("prev" in l)); d++)
        l = l.prev;
      return l && typeof u == "string" && u in l && (l = It(It(l, {
        prev: l
      }), l[u])), l;
    }
    return l.prev ? It(l.prev, l) : l;
  });
  return Ze(Tn, r), r;
}
function ml(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[xt(t)] < "u");
}
function pl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : or();
  const i = Ee("useDefaults");
  if (t = t ?? i.type.name ?? i.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = A(() => {
    var u;
    return (u = n.value) == null ? void 0 : u[e._as ?? t];
  }), a = new Proxy(e, {
    get(u, l) {
      var g, m, h, p;
      const c = Reflect.get(u, l);
      if (l === "class" || l === "style")
        return [(g = r.value) == null ? void 0 : g[l], c].filter((v) => v != null);
      if (ml(i.vnode, l)) return c;
      const d = (m = r.value) == null ? void 0 : m[l];
      if (d !== void 0) return d;
      const f = (p = (h = n.value) == null ? void 0 : h.global) == null ? void 0 : p[l];
      return f !== void 0 ? f : c;
    }
  }), o = ce();
  $t(() => {
    if (r.value) {
      const u = Object.entries(r.value).filter((l) => {
        let [c] = l;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      o.value = void 0;
  });
  function s() {
    const u = gl(Tn, i);
    Ze(Tn, A(() => o.value ? It((u == null ? void 0 : u.value) ?? {}, o.value) : u == null ? void 0 : u.value));
  }
  return {
    props: a,
    provideSubDefaults: s
  };
}
function un(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Rt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = M(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(i) {
      return Na(i, t);
    }, e.props._as = String, e.setup = function(i, r) {
      const a = or();
      if (!a.value) return e._setup(i, r);
      const {
        props: o,
        provideSubDefaults: s
      } = pl(i, i._as ?? e.name, a), u = e._setup(o, r);
      return s(), u;
    };
  }
  return e;
}
function ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? un : Ae)(t);
}
function yl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ee()({
    name: n ?? Pa(Ba(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...he()
    },
    setup(i, r) {
      let {
        slots: a
      } = r;
      return () => {
        var o;
        return on(i.tag, {
          class: [e, i.class],
          style: i.style
        }, (o = a.default) == null ? void 0 : o.call(a));
      };
    }
  });
}
function za(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Bn = "cubic-bezier(0.4, 0, 0.2, 1)", bl = "cubic-bezier(0.0, 0, 0.2, 1)", wl = "cubic-bezier(0.4, 0, 1, 1)";
function _l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Sl(e) : lr(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ln(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (lr(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function lr(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Sl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function El(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function oe(e) {
  const t = Ee("useRender");
  t.render = e;
}
function Cl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Ci(), i = q();
  if (Le) {
    const r = new ResizeObserver((a) => {
      a.length && (t === "content" ? i.value = a[0].contentRect : i.value = a[0].target.getBoundingClientRect());
    });
    it(() => {
      r.disconnect();
    }), re(() => n.el, (a, o) => {
      o && (r.unobserve(o), i.value = void 0), a && r.observe(a);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: er(i)
  };
}
function Mt(e, t) {
  let n;
  function i() {
    n = tr(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), i();
    }) : t());
  }
  re(e, (r) => {
    r && !n ? i() : r || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), Ye(() => {
    n == null || n.stop();
  });
}
function qe(e, t, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const a = Ee("useProxiedModel"), o = q(e[t] !== void 0 ? e[t] : n), s = xt(t), l = s !== t ? A(() => {
    var d, f, g, m;
    return e[t], !!(((d = a.vnode.props) != null && d.hasOwnProperty(t) || (f = a.vnode.props) != null && f.hasOwnProperty(s)) && ((g = a.vnode.props) != null && g.hasOwnProperty(`onUpdate:${t}`) || (m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${s}`)));
  }) : A(() => {
    var d, f;
    return e[t], !!((d = a.vnode.props) != null && d.hasOwnProperty(t) && ((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)));
  });
  Mt(() => !l.value, () => {
    re(() => e[t], (d) => {
      o.value = d;
    });
  });
  const c = A({
    get() {
      const d = e[t];
      return i(l.value ? d : o.value);
    },
    set(d) {
      const f = r(d), g = me(l.value ? e[t] : o.value);
      g === f || i(g) === d || (o.value = f, a == null || a.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => l.value ? e[t] : o.value
  }), c;
}
const Wa = Symbol.for("vuetify:locale");
function qa() {
  const e = be(Wa);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function jt() {
  const e = be(Wa);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Pi = Symbol.for("vuetify:theme"), Re = M({
  theme: String
}, "theme");
function Ue(e) {
  Ee("provideTheme");
  const t = be(Pi, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = R(() => e.theme ?? t.name.value), i = R(() => t.themes.value[n.value]), r = R(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = {
    ...t,
    name: n,
    current: i,
    themeClasses: r
  };
  return Ze(Pi, a), a;
}
function xl() {
  Ee("useTheme");
  const e = be(Pi, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const Ke = M({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), Al = M({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Fe(e, t, n) {
  return ee()({
    name: e,
    props: Al({
      mode: n,
      origin: t
    }),
    setup(i, r) {
      let {
        slots: a
      } = r;
      const o = {
        onBeforeEnter(s) {
          i.origin && (s.style.transformOrigin = i.origin);
        },
        onLeave(s) {
          if (i.leaveAbsolute) {
            const {
              offsetTop: u,
              offsetLeft: l,
              offsetWidth: c,
              offsetHeight: d
            } = s;
            s._transitionInitialStyles = {
              position: s.style.position,
              top: s.style.top,
              left: s.style.left,
              width: s.style.width,
              height: s.style.height
            }, s.style.position = "absolute", s.style.top = `${u}px`, s.style.left = `${l}px`, s.style.width = `${c}px`, s.style.height = `${d}px`;
          }
          i.hideOnLeave && s.style.setProperty("display", "none", "important");
        },
        onAfterLeave(s) {
          if (i.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
            const {
              position: u,
              top: l,
              left: c,
              width: d,
              height: f
            } = s._transitionInitialStyles;
            delete s._transitionInitialStyles, s.style.position = u || "", s.style.top = l || "", s.style.left = c || "", s.style.width = d || "", s.style.height = f || "";
          }
        }
      };
      return () => {
        const s = i.group ? nr : At;
        return on(s, {
          name: i.disabled ? "" : e,
          css: !i.disabled,
          ...i.group ? void 0 : {
            mode: i.mode
          },
          ...i.disabled ? {} : o
        }, a.default);
      };
    }
  });
}
function Xa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ee()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(i, r) {
      let {
        slots: a
      } = r;
      const o = i.group ? nr : At;
      return () => on(o, {
        name: i.disabled ? "" : e,
        css: !i.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...i.disabled ? {} : t
      }, a.default);
    }
  });
}
function Za() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", i = Ba(`offset-${n}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [n]: o.style[n]
      };
    },
    onEnter(o) {
      const s = o._initialStyle;
      if (!s) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const u = `${o[i]}px`;
      o.style[n] = "0", o.offsetHeight, o.style.transition = s.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[n] = u;
      });
    },
    onAfterEnter: a,
    onEnterCancelled: a,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [n]: o.style[n]
      }, o.style.overflow = "hidden", o.style[n] = `${o[i]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[n] = "0");
    },
    onAfterLeave: r,
    onLeaveCancelled: r
  };
  function r(o) {
    e && o._parent && o._parent.classList.remove(e), a(o);
  }
  function a(o) {
    if (!o._initialStyle) return;
    const s = o._initialStyle[n];
    o.style.overflow = o._initialStyle.overflow, s != null && (o.style[n] = s), delete o._initialStyle;
  }
}
const Pl = M({
  target: [Object, Array]
}, "v-dialog-transition"), ai = /* @__PURE__ */ new WeakMap(), Tl = ee()({
  name: "VDialogTransition",
  props: Pl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = {
      onBeforeEnter(r) {
        r.style.pointerEvents = "none", r.style.visibility = "hidden";
      },
      async onEnter(r, a) {
        var g;
        await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), r.style.visibility = "";
        const o = Vr(e.target, r), {
          x: s,
          y: u,
          sx: l,
          sy: c,
          speed: d
        } = o;
        ai.set(r, o);
        const f = Ot(r, [{
          transform: `translate(${s}px, ${u}px) scale(${l}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: bl
        });
        (g = Fr(r)) == null || g.forEach((m) => {
          Ot(m, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Bn
          });
        }), f.finished.then(() => a());
      },
      onAfterEnter(r) {
        r.style.removeProperty("pointer-events");
      },
      onBeforeLeave(r) {
        r.style.pointerEvents = "none";
      },
      async onLeave(r, a) {
        var g;
        await new Promise((m) => requestAnimationFrame(m));
        let o;
        !ai.has(r) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = Vr(e.target, r) : o = ai.get(r);
        const {
          x: s,
          y: u,
          sx: l,
          sy: c,
          speed: d
        } = o;
        Ot(r, [{}, {
          transform: `translate(${s}px, ${u}px) scale(${l}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: wl
        }).finished.then(() => a()), (g = Fr(r)) == null || g.forEach((m) => {
          Ot(m, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Bn
          });
        });
      },
      onAfterLeave(r) {
        r.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? L(At, ie({
      name: "dialog-transition"
    }, i, {
      css: !1
    }), n) : L(At, {
      name: "dialog-transition"
    }, n);
  }
});
function Fr(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Vr(e, t) {
  const n = Ua(e), i = ar(t), [r, a] = getComputedStyle(t).transformOrigin.split(" ").map((v) => parseFloat(v)), [o, s] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = n.left + n.width / 2;
  o === "left" || s === "left" ? u -= n.width / 2 : (o === "right" || s === "right") && (u += n.width / 2);
  let l = n.top + n.height / 2;
  o === "top" || s === "top" ? l -= n.height / 2 : (o === "bottom" || s === "bottom") && (l += n.height / 2);
  const c = n.width / i.width, d = n.height / i.height, f = Math.max(1, c, d), g = c / f || 0, m = d / f || 0, h = i.width * i.height / (window.innerWidth * window.innerHeight), p = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: u - (r + i.left),
    y: l - (a + i.top),
    sx: g,
    sy: m,
    speed: p
  };
}
Fe("fab-transition", "center center", "out-in");
Fe("dialog-bottom-transition");
Fe("dialog-top-transition");
Fe("fade-transition");
Fe("scale-transition");
Fe("scroll-x-transition");
Fe("scroll-x-reverse-transition");
Fe("scroll-y-transition");
Fe("scroll-y-reverse-transition");
Fe("slide-x-transition");
Fe("slide-x-reverse-transition");
const Ya = Fe("slide-y-transition");
Fe("slide-y-reverse-transition");
const Bl = Xa("expand-transition", Za()), Ll = Xa("expand-x-transition", Za("", !0)), kl = M({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), ct = ee(!1)({
  name: "VDefaultsProvider",
  props: kl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: i,
      disabled: r,
      reset: a,
      root: o,
      scoped: s
    } = Bs(e);
    return sr(i, {
      reset: a,
      root: o,
      scoped: s,
      disabled: r
    }), () => {
      var u;
      return (u = n.default) == null ? void 0 : u.call(n);
    };
  }
}), Pt = M({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Tt(e) {
  return {
    dimensionStyles: A(() => {
      const n = {}, i = Y(e.height), r = Y(e.maxHeight), a = Y(e.maxWidth), o = Y(e.minHeight), s = Y(e.minWidth), u = Y(e.width);
      return i != null && (n.height = i), r != null && (n.maxHeight = r), a != null && (n.maxWidth = a), o != null && (n.minHeight = o), s != null && (n.minWidth = s), u != null && (n.width = u), n;
    })
  };
}
function Il(e) {
  return {
    aspectStyles: A(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Ka = M({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...he(),
  ...Pt()
}, "VResponsive"), Dr = ee()({
  name: "VResponsive",
  props: Ka(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: i
    } = Il(e), {
      dimensionStyles: r
    } = Tt(e);
    return oe(() => {
      var a;
      return B("div", {
        class: G(["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class]),
        style: ne([r.value, e.style])
      }, [B("div", {
        class: "v-responsive__sizer",
        style: ne(i.value)
      }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && B("div", {
        class: G(["v-responsive__content", e.contentClass])
      }, [n.default()])]);
    }), {};
  }
});
function ur(e) {
  return rr(() => {
    const t = dt(e), n = [], i = {};
    if (t.background)
      if (Ai(t.background)) {
        if (i.backgroundColor = t.background, !t.text && cl(t.background)) {
          const r = Yt(t.background);
          if (r.a == null || r.a === 1) {
            const a = vl(r);
            i.color = a, i.caretColor = a;
          }
        }
      } else
        n.push(`bg-${t.background}`);
    return t.text && (Ai(t.text) ? (i.color = t.text, i.caretColor = t.text) : n.push(`text-${t.text}`)), {
      colorClasses: n,
      colorStyles: i
    };
  });
}
function yt(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = ur(() => ({
    text: dt(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function pt(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = ur(() => ({
    background: dt(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
const wt = M({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function _t(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  return {
    roundedClasses: A(() => {
      const i = _i(e) ? e.value : e.rounded, r = _i(e) ? e.value : e.tile, a = [];
      if (i === !0 || i === "")
        a.push(`${t}--rounded`);
      else if (typeof i == "string" || i === 0)
        for (const o of String(i).split(" "))
          a.push(`rounded-${o}`);
      else (r || i === !1) && a.push("rounded-0");
      return a;
    })
  };
}
const zn = M({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), vt = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: i,
    disabled: r,
    group: a,
    ...o
  } = e, {
    component: s = a ? nr : At,
    ...u
  } = Si(i) ? i : {};
  let l;
  return Si(i) ? l = ie(u, JSON.parse(JSON.stringify({
    disabled: r,
    group: a
  })), o) : l = ie({
    name: r || !i ? "" : i
  }, o), on(s, l, n);
};
function Ol(e, t) {
  if (!ir) return;
  const n = t.modifiers || {}, i = t.value, {
    handler: r,
    options: a
  } = typeof i == "object" ? i : {
    handler: i,
    options: {}
  }, o = new IntersectionObserver(function() {
    var d;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const l = (d = e._observe) == null ? void 0 : d[t.instance.$.uid];
    if (!l) return;
    const c = s.some((f) => f.isIntersecting);
    r && (!n.quiet || l.init) && (!n.once || c || l.init) && r(c, s, u), c && n.once ? Ja(e, t) : l.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Ja(e, t) {
  var i;
  const n = (i = e._observe) == null ? void 0 : i[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const kn = {
  mounted: Ol,
  unmounted: Ja
}, Nl = M({
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
  ...Ka(),
  ...he(),
  ...wt(),
  ...zn()
}, "VImg"), Rl = ee()({
  name: "VImg",
  directives: {
    vIntersect: kn
  },
  props: Nl(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: i
    } = t;
    const {
      backgroundColorClasses: r,
      backgroundColorStyles: a
    } = pt(() => e.color), {
      roundedClasses: o
    } = _t(e), s = Ee("VImg"), u = ce(""), l = q(), c = ce(e.eager ? "loading" : "idle"), d = ce(), f = ce(), g = A(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), m = A(() => g.value.aspect || d.value / f.value || 0);
    re(() => e.src, () => {
      h(c.value !== "idle");
    }), re(m, (S, E) => {
      !S && E && l.value && w(l.value);
    }), sn(() => h());
    function h(S) {
      if (!(e.eager && S) && !(ir && !S && !e.eager)) {
        if (c.value = "loading", g.value.lazySrc) {
          const E = new Image();
          E.src = g.value.lazySrc, w(E, null);
        }
        g.value.src && We(() => {
          var E;
          n("loadstart", ((E = l.value) == null ? void 0 : E.currentSrc) || g.value.src), setTimeout(() => {
            var k;
            if (!s.isUnmounted)
              if ((k = l.value) != null && k.complete) {
                if (l.value.naturalWidth || v(), c.value === "error") return;
                m.value || w(l.value, null), c.value === "loading" && p();
              } else
                m.value || w(l.value), b();
          });
        });
      }
    }
    function p() {
      var S;
      s.isUnmounted || (b(), w(l.value), c.value = "loaded", n("load", ((S = l.value) == null ? void 0 : S.currentSrc) || g.value.src));
    }
    function v() {
      var S;
      s.isUnmounted || (c.value = "error", n("error", ((S = l.value) == null ? void 0 : S.currentSrc) || g.value.src));
    }
    function b() {
      const S = l.value;
      S && (u.value = S.currentSrc || S.src);
    }
    let y = -1;
    it(() => {
      clearTimeout(y);
    });
    function w(S) {
      let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const k = () => {
        if (clearTimeout(y), s.isUnmounted) return;
        const {
          naturalHeight: I,
          naturalWidth: O
        } = S;
        I || O ? (d.value = O, f.value = I) : !S.complete && c.value === "loading" && E != null ? y = window.setTimeout(k, E) : (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
      };
      k();
    }
    const x = R(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), _ = () => {
      var k;
      if (!g.value.src || c.value === "idle") return null;
      const S = B("img", {
        class: G(["v-img__img", x.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.src,
        srcset: g.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: l,
        onLoad: p,
        onError: v
      }, null), E = (k = i.sources) == null ? void 0 : k.call(i);
      return L(vt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [tt(E ? B("picture", {
          class: "v-img__picture"
        }, [E, S]) : S, [[ln, c.value === "loaded"]])]
      });
    }, P = () => L(vt, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && c.value !== "loaded" && B("img", {
        class: G(["v-img__img", "v-img__img--preload", x.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), C = () => i.placeholder ? L(vt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(c.value === "loading" || c.value === "error" && !i.error) && B("div", {
        class: "v-img__placeholder"
      }, [i.placeholder()])]
    }) : null, N = () => i.error ? L(vt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [c.value === "error" && B("div", {
        class: "v-img__error"
      }, [i.error()])]
    }) : null, D = () => e.gradient ? B("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, H = ce(!1);
    {
      const S = re(m, (E) => {
        E && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = !0;
          });
        }), S());
      });
    }
    return oe(() => {
      const S = Dr.filterProps(e);
      return tt(L(Dr, ie({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !H.value
        }, r.value, o.value, e.class],
        style: [{
          width: Y(e.width === "auto" ? d.value : e.width)
        }, a.value, e.style]
      }, S, {
        aspectRatio: m.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => B(_e, null, [L(_, null, null), L(P, null, null), L(D, null, null), L(C, null, null), L(N, null, null)]),
        default: i.default
      }), [[kn, {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: u,
      image: l,
      state: c,
      naturalWidth: d,
      naturalHeight: f
    };
  }
}), cn = M({
  border: [Boolean, Number, String]
}, "border");
function dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  return {
    borderClasses: A(() => {
      const i = e.border;
      return i === !0 || i === "" ? `${t}--border` : typeof i == "string" || i === 0 ? String(i).split(" ").map((r) => `border-${r}`) : [];
    })
  };
}
const fn = M({
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
function hn(e) {
  return {
    elevationClasses: R(() => {
      const n = _i(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
function Hl() {
  const e = ce(!1);
  return Ut(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: R(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: er(e)
  };
}
const Ml = [null, "default", "comfortable", "compact"], zt = M({
  density: {
    type: String,
    default: "default",
    validator: (e) => Ml.includes(e)
  }
}, "density");
function Wt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  return {
    densityClasses: R(() => `${t}--density-${e.density}`)
  };
}
const Fl = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function cr(e, t) {
  return B(_e, null, [e && B("span", {
    key: "overlay",
    class: G(`${t}__overlay`)
  }, null), B("span", {
    key: "underlay",
    class: G(`${t}__underlay`)
  }, null)]);
}
const vn = M({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Fl.includes(e)
  }
}, "variant");
function dr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  const n = R(() => {
    const {
      variant: a
    } = dt(e);
    return `${t}--variant-${a}`;
  }), {
    colorClasses: i,
    colorStyles: r
  } = ur(() => {
    const {
      variant: a,
      color: o
    } = dt(e);
    return {
      [["elevated", "flat"].includes(a) ? "background" : "text"]: o
    };
  });
  return {
    colorClasses: i,
    colorStyles: r,
    variantClasses: n
  };
}
const Qa = M({
  baseColor: String,
  divided: Boolean,
  ...cn(),
  ...he(),
  ...zt(),
  ...fn(),
  ...wt(),
  ...Ke(),
  ...Re(),
  ...vn()
}, "VBtnGroup"), $r = ee()({
  name: "VBtnGroup",
  props: Qa(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: i
    } = Ue(e), {
      densityClasses: r
    } = Wt(e), {
      borderClasses: a
    } = dn(e), {
      elevationClasses: o
    } = hn(e), {
      roundedClasses: s
    } = _t(e);
    sr({
      VBtn: {
        height: "auto",
        baseColor: R(() => e.baseColor),
        color: R(() => e.color),
        density: R(() => e.density),
        flat: !0,
        variant: R(() => e.variant)
      }
    }), oe(() => L(e.tag, {
      class: G(["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, i.value, a.value, r.value, o.value, s.value, e.class]),
      style: ne(e.style)
    }, n));
  }
}), Vl = M({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Dl = M({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function $l(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const i = Ee("useGroupItem");
  if (!i)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const r = Gt();
  Ze(Symbol.for(`${t.description}:id`), r);
  const a = be(t, null);
  if (!a) {
    if (!n) return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = R(() => e.value), s = A(() => !!(a.disabled.value || e.disabled));
  a.register({
    id: r,
    value: o,
    disabled: s
  }, i), it(() => {
    a.unregister(r);
  });
  const u = A(() => a.isSelected(r)), l = A(() => a.items.value[0].id === r), c = A(() => a.items.value[a.items.value.length - 1].id === r), d = A(() => u.value && [a.selectedClass.value, e.selectedClass]);
  return re(u, (f) => {
    i.emit("group:selected", {
      value: f
    });
  }, {
    flush: "sync"
  }), {
    id: r,
    isSelected: u,
    isFirst: l,
    isLast: c,
    toggle: () => a.select(r, !u.value),
    select: (f) => a.select(r, f),
    selectedClass: d,
    value: o,
    disabled: s,
    group: a
  };
}
function Ul(e, t) {
  let n = !1;
  const i = Ht([]), r = qe(e, "modelValue", [], (f) => f == null ? [] : eo(i, mt(f)), (f) => {
    const g = jl(i, f);
    return e.multiple ? g : g[0];
  }), a = Ee("useGroup");
  function o(f, g) {
    const m = f, h = Symbol.for(`${t.description}:id`), v = Zt(h, a == null ? void 0 : a.vnode).indexOf(g);
    Ce(m.value) == null && (m.value = v, m.useIndexAsValue = !0), v > -1 ? i.splice(v, 0, m) : i.push(m);
  }
  function s(f) {
    if (n) return;
    u();
    const g = i.findIndex((m) => m.id === f);
    i.splice(g, 1);
  }
  function u() {
    const f = i.find((g) => !g.disabled);
    f && e.mandatory === "force" && !r.value.length && (r.value = [f.id]);
  }
  Ut(() => {
    u();
  }), it(() => {
    n = !0;
  }), Ls(() => {
    for (let f = 0; f < i.length; f++)
      i[f].useIndexAsValue && (i[f].value = f);
  });
  function l(f, g) {
    const m = i.find((h) => h.id === f);
    if (!(g && (m != null && m.disabled)))
      if (e.multiple) {
        const h = r.value.slice(), p = h.findIndex((b) => b === f), v = ~p;
        if (g = g ?? !v, v && e.mandatory && h.length <= 1 || !v && e.max != null && h.length + 1 > e.max) return;
        p < 0 && g ? h.push(f) : p >= 0 && !g && h.splice(p, 1), r.value = h;
      } else {
        const h = r.value.includes(f);
        if (e.mandatory && h) return;
        r.value = g ?? !h ? [f] : [];
      }
  }
  function c(f) {
    if (e.multiple && Rt('This method is not supported when using "multiple" prop'), r.value.length) {
      const g = r.value[0], m = i.findIndex((v) => v.id === g);
      let h = (m + f) % i.length, p = i[h];
      for (; p.disabled && h !== m; )
        h = (h + f) % i.length, p = i[h];
      if (p.disabled) return;
      r.value = [i[h].id];
    } else {
      const g = i.find((m) => !m.disabled);
      g && (r.value = [g.id]);
    }
  }
  const d = {
    register: o,
    unregister: s,
    selected: r,
    select: l,
    disabled: R(() => e.disabled),
    prev: () => c(i.length - 1),
    next: () => c(1),
    isSelected: (f) => r.value.includes(f),
    selectedClass: R(() => e.selectedClass),
    items: R(() => i),
    getItemIndex: (f) => Gl(i, f)
  };
  return Ze(t, d), d;
}
function Gl(e, t) {
  const n = eo(e, [t]);
  return n.length ? e.findIndex((i) => i.id === n[0]) : -1;
}
function eo(e, t) {
  const n = [];
  return t.forEach((i) => {
    const r = e.find((o) => Gn(i, o.value)), a = e[i];
    (r == null ? void 0 : r.value) != null ? n.push(r.id) : a != null && n.push(a.id);
  }), n;
}
function jl(e, t) {
  const n = [];
  return t.forEach((i) => {
    const r = e.findIndex((a) => a.id === i);
    if (~r) {
      const a = e[r];
      n.push(a.value != null ? a.value : r);
    }
  }), n;
}
const to = Symbol.for("vuetify:v-btn-toggle"), zl = M({
  ...Qa(),
  ...Vl()
}, "VBtnToggle");
ee()({
  name: "VBtnToggle",
  props: zl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: i,
      next: r,
      prev: a,
      select: o,
      selected: s
    } = Ul(e, to);
    return oe(() => {
      const u = $r.filterProps(e);
      return L($r, ie({
        class: ["v-btn-toggle", e.class]
      }, u, {
        style: e.style
      }), {
        default: () => {
          var l;
          return [(l = n.default) == null ? void 0 : l.call(n, {
            isSelected: i,
            next: r,
            prev: a,
            select: o,
            selected: s
          })];
        }
      });
    }), {
      next: r,
      prev: a,
      select: o
    };
  }
});
const Wl = {
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
  upload: "mdi-cloud-upload",
  color: "mdi-palette"
}, ql = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => on(Yl, {
    ...e,
    class: "mdi"
  })
}, Se = [String, Function, Object, Array], Xl = Symbol.for("vuetify:icons"), Wn = M({
  icon: {
    type: Se
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), Ur = ee()({
  name: "VComponentIcon",
  props: Wn(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const i = e.icon;
      return L(e.tag, null, {
        default: () => {
          var r;
          return [e.icon ? L(i, null, null) : (r = n.default) == null ? void 0 : r.call(n)];
        }
      });
    };
  }
}), Zl = un({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Wn(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => L(e.tag, ie(n, {
      style: null
    }), {
      default: () => [B("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((i) => Array.isArray(i) ? B("path", {
        d: i[0],
        "fill-opacity": i[1]
      }, null) : B("path", {
        d: i
      }, null)) : B("path", {
        d: e.icon
      }, null)])]
    });
  }
});
un({
  name: "VLigatureIcon",
  props: Wn(),
  setup(e) {
    return () => L(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Yl = un({
  name: "VClassIcon",
  props: Wn(),
  setup(e) {
    return () => L(e.tag, {
      class: G(e.icon)
    }, null);
  }
}), Kl = (e) => {
  const t = be(Xl);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: A(() => {
      var u;
      const i = dt(e);
      if (!i) return {
        component: Ur
      };
      let r = i;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = (u = t.aliases) == null ? void 0 : u[r.slice(1)])), r || Rt(`Could not find aliased icon "${i}"`), Array.isArray(r))
        return {
          component: Zl,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: Ur,
          icon: r
        };
      const a = Object.keys(t.sets).find((l) => typeof r == "string" && r.startsWith(`${l}:`)), o = a ? r.slice(a.length + 1) : r;
      return {
        component: t.sets[a ?? t.defaultSet].component,
        icon: o
      };
    })
  };
}, Jl = ["x-small", "small", "default", "large", "x-large"], qn = M({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  return rr(() => {
    const n = e.size;
    let i, r;
    return Pn(Jl, n) ? i = `${t}--size-${n}` : n && (r = {
      width: Y(n),
      height: Y(n)
    }), {
      sizeClasses: i,
      sizeStyles: r
    };
  });
}
const Ql = M({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Se,
  opacity: [String, Number],
  ...he(),
  ...qn(),
  ...Ke({
    tag: "i"
  }),
  ...Re()
}, "VIcon"), Oe = ee()({
  name: "VIcon",
  props: Ql(),
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const r = ce(), {
      themeClasses: a
    } = xl(), {
      iconData: o
    } = Kl(() => r.value || e.icon), {
      sizeClasses: s
    } = Xn(e), {
      textColorClasses: u,
      textColorStyles: l
    } = yt(() => e.color);
    return oe(() => {
      var f, g;
      const c = (f = i.default) == null ? void 0 : f.call(i);
      c && (r.value = (g = Ma(c).filter((m) => m.type === ks && m.children && typeof m.children == "string")[0]) == null ? void 0 : g.children);
      const d = !!(n.onClick || n.onClickOnce);
      return L(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: G(["v-icon", "notranslate", a.value, s.value, u.value, {
          "v-icon--clickable": d,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: ne([{
          "--v-icon-opacity": e.opacity
        }, s.value ? void 0 : {
          fontSize: Y(e.size),
          height: Y(e.size),
          width: Y(e.size)
        }, l.value, e.style]),
        role: d ? "button" : void 0,
        "aria-hidden": !d,
        tabindex: d ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function no(e, t) {
  const n = q(), i = ce(!1);
  if (ir) {
    const r = new IntersectionObserver((a) => {
      i.value = !!a.find((o) => o.isIntersecting);
    }, t);
    it(() => {
      r.disconnect();
    }), re(n, (a, o) => {
      o && (r.unobserve(o), i.value = !1), a && r.observe(a);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: i
  };
}
const eu = M({
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
  ...he(),
  ...qn(),
  ...Ke({
    tag: "div"
  }),
  ...Re()
}, "VProgressCircular"), io = ee()({
  name: "VProgressCircular",
  props: eu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = 20, r = 2 * Math.PI * i, a = q(), {
      themeClasses: o
    } = Ue(e), {
      sizeClasses: s,
      sizeStyles: u
    } = Xn(e), {
      textColorClasses: l,
      textColorStyles: c
    } = yt(() => e.color), {
      textColorClasses: d,
      textColorStyles: f
    } = yt(() => e.bgColor), {
      intersectionRef: g,
      isIntersecting: m
    } = no(), {
      resizeRef: h,
      contentRect: p
    } = Cl(), v = R(() => Qt(parseFloat(e.modelValue), 0, 100)), b = R(() => Number(e.width)), y = R(() => u.value ? Number(e.size) : p.value ? p.value.width : Math.max(b.value, 32)), w = R(() => i / (1 - b.value / y.value) * 2), x = R(() => b.value / y.value * w.value), _ = R(() => Y((100 - v.value) / 100 * r));
    return $t(() => {
      g.value = a.value, h.value = a.value;
    }), oe(() => L(e.tag, {
      ref: a,
      class: G(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": m.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, s.value, l.value, e.class]),
      style: ne([u.value, c.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : v.value
    }, {
      default: () => [B("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${w.value} ${w.value}`
      }, [B("circle", {
        class: G(["v-progress-circular__underlay", d.value]),
        style: ne(f.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: i,
        "stroke-width": x.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), B("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: i,
        "stroke-width": x.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": _.value
      }, null)]), n.default && B("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: v.value
      })])]
    })), {};
  }
}), Gr = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ro = M({
  location: String
}, "location");
function ao(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: i
  } = jt();
  return {
    locationStyles: A(() => {
      if (!e.location) return {};
      const {
        side: a,
        align: o
      } = xi(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, i.value);
      function s(l) {
        return n ? n(l) : 0;
      }
      const u = {};
      return a !== "center" && (t ? u[Gr[a]] = `calc(100% - ${s(a)}px)` : u[a] = 0), o !== "center" ? t ? u[Gr[o]] = `calc(100% - ${s(o)}px)` : u[o] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[a]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[a]), u;
    })
  };
}
const tu = M({
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
  ...he(),
  ...ro({
    location: "top"
  }),
  ...wt(),
  ...Ke(),
  ...Re()
}, "VProgressLinear"), nu = ee()({
  name: "VProgressLinear",
  props: tu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var H;
    let {
      slots: n
    } = t;
    const i = qe(e, "modelValue"), {
      isRtl: r,
      rtlClasses: a
    } = jt(), {
      themeClasses: o
    } = Ue(e), {
      locationStyles: s
    } = ao(e), {
      textColorClasses: u,
      textColorStyles: l
    } = yt(() => e.color), {
      backgroundColorClasses: c,
      backgroundColorStyles: d
    } = pt(() => e.bgColor || e.color), {
      backgroundColorClasses: f,
      backgroundColorStyles: g
    } = pt(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: m,
      backgroundColorStyles: h
    } = pt(() => e.color), {
      roundedClasses: p
    } = _t(e), {
      intersectionRef: v,
      isIntersecting: b
    } = no(), y = A(() => parseFloat(e.max)), w = A(() => parseFloat(e.height)), x = A(() => Qt(parseFloat(e.bufferValue) / y.value * 100, 0, 100)), _ = A(() => Qt(parseFloat(i.value) / y.value * 100, 0, 100)), P = A(() => r.value !== e.reverse), C = A(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), N = Le && ((H = window.matchMedia) == null ? void 0 : H.call(window, "(forced-colors: active)").matches);
    function D(S) {
      if (!v.value) return;
      const {
        left: E,
        right: k,
        width: I
      } = v.value.getBoundingClientRect(), O = P.value ? I - S.clientX + (k - I) : S.clientX - E;
      i.value = Math.round(O / I * y.value);
    }
    return oe(() => L(e.tag, {
      ref: v,
      class: G(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && b.value,
        "v-progress-linear--reverse": P.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, p.value, o.value, a.value, e.class]),
      style: ne([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? Y(w.value) : 0,
        "--v-progress-linear-height": Y(w.value),
        ...e.absolute ? s.value : {}
      }, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(i.value), y.value),
      onClick: e.clickable && D
    }, {
      default: () => [e.stream && B("div", {
        key: "stream",
        class: G(["v-progress-linear__stream", u.value]),
        style: {
          ...l.value,
          [P.value ? "left" : "right"]: Y(-w.value),
          borderTop: `${Y(w.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${Y(w.value / 4)})`,
          width: Y(100 - x.value, "%"),
          "--v-progress-linear-stream-to": Y(w.value * (P.value ? 1 : -1))
        }
      }, null), B("div", {
        class: G(["v-progress-linear__background", N ? void 0 : c.value]),
        style: ne([d.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), B("div", {
        class: G(["v-progress-linear__buffer", N ? void 0 : f.value]),
        style: ne([g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: Y(x.value, "%")
        }])
      }, null), L(At, {
        name: C.value
      }, {
        default: () => [e.indeterminate ? B("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((S) => B("div", {
          key: S,
          class: G(["v-progress-linear__indeterminate", S, N ? void 0 : m.value]),
          style: ne(h.value)
        }, null))]) : B("div", {
          class: G(["v-progress-linear__determinate", N ? void 0 : m.value]),
          style: ne([h.value, {
            width: Y(_.value, "%")
          }])
        }, null)]
      }), n.default && B("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: _.value,
        buffer: x.value
      })])]
    })), {};
  }
}), oo = M({
  loading: [Boolean, String]
}, "loader");
function so(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  return {
    loaderClasses: R(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function iu(e, t) {
  var i;
  let {
    slots: n
  } = t;
  return B("div", {
    class: G(`${e.name}__loader`)
  }, [((i = n.default) == null ? void 0 : i.call(n, {
    color: e.color,
    isActive: e.active
  })) || L(nu, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const ru = ["static", "relative", "fixed", "absolute", "sticky"], au = M({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => ru.includes(e)
    )
  }
}, "position");
function ou(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  return {
    positionClasses: R(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function su() {
  const e = Ee("useRoute");
  return A(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function lu() {
  var e, t;
  return (t = (e = Ee("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function lo(e, t) {
  var c, d;
  const n = Un("RouterLink"), i = R(() => !!(e.href || e.to)), r = A(() => (i == null ? void 0 : i.value) || xr(t, "click") || xr(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = R(() => e.href);
    return {
      isLink: i,
      isClickable: r,
      href: f,
      linkProps: Ht({
        href: f
      })
    };
  }
  const a = n.useLink({
    to: R(() => e.to || ""),
    replace: R(() => e.replace)
  }), o = A(() => e.to ? a : void 0), s = su(), u = A(() => {
    var f, g, m;
    return o.value ? e.exact ? s.value ? ((m = o.value.isExactActive) == null ? void 0 : m.value) && Gn(o.value.route.value.query, s.value.query) : ((g = o.value.isExactActive) == null ? void 0 : g.value) ?? !1 : ((f = o.value.isActive) == null ? void 0 : f.value) ?? !1 : !1;
  }), l = A(() => {
    var f;
    return e.to ? (f = o.value) == null ? void 0 : f.route.value.href : e.href;
  });
  return {
    isLink: i,
    isClickable: r,
    isActive: u,
    route: (c = o.value) == null ? void 0 : c.route,
    navigate: (d = o.value) == null ? void 0 : d.navigate,
    href: l,
    linkProps: Ht({
      href: l,
      "aria-current": R(() => u.value ? "page" : void 0)
    })
  };
}
const uo = M({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let oi = !1;
function uu(e, t) {
  let n = !1, i, r;
  Le && (e != null && e.beforeEach) && (We(() => {
    window.addEventListener("popstate", a), i = e.beforeEach((o, s, u) => {
      oi ? n ? t(u) : u() : setTimeout(() => n ? t(u) : u()), oi = !0;
    }), r = e == null ? void 0 : e.afterEach(() => {
      oi = !1;
    });
  }), Ye(() => {
    window.removeEventListener("popstate", a), i == null || i(), r == null || r();
  }));
  function a(o) {
    var s;
    (s = o.state) != null && s.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function cu(e, t) {
  re(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && We(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const Ti = Symbol("rippleStop"), du = 80;
function jr(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Bi(e) {
  return e.constructor.name === "TouchEvent";
}
function co(e) {
  return e.constructor.name === "KeyboardEvent";
}
const fu = function(e, t) {
  var d;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = 0, r = 0;
  if (!co(e)) {
    const f = t.getBoundingClientRect(), g = Bi(e) ? e.touches[e.touches.length - 1] : e;
    i = g.clientX - f.left, r = g.clientY - f.top;
  }
  let a = 0, o = 0.3;
  (d = t._ripple) != null && d.circle ? (o = 0.15, a = t.clientWidth / 2, a = n.center ? a : a + Math.sqrt((i - a) ** 2 + (r - a) ** 2) / 4) : a = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const s = `${(t.clientWidth - a * 2) / 2}px`, u = `${(t.clientHeight - a * 2) / 2}px`, l = n.center ? s : `${i - a}px`, c = n.center ? u : `${r - a}px`;
  return {
    radius: a,
    scale: o,
    x: l,
    y: c,
    centerX: s,
    centerY: u
  };
}, In = {
  /* eslint-disable max-statements */
  show(e, t) {
    var g;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
      return;
    const i = document.createElement("span"), r = document.createElement("span");
    i.appendChild(r), i.className = "v-ripple__container", n.class && (i.className += ` ${n.class}`);
    const {
      radius: a,
      scale: o,
      x: s,
      y: u,
      centerX: l,
      centerY: c
    } = fu(e, t, n), d = `${a * 2}px`;
    r.className = "v-ripple__animation", r.style.width = d, r.style.height = d, t.appendChild(i);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), jr(r, `translate(${s}, ${u}) scale3d(${o},${o},${o})`), r.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), jr(r, `translate(${l}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var a;
    if (!((a = e == null ? void 0 : e._ripple) != null && a.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const i = performance.now() - Number(n.dataset.activated), r = Math.max(250 - i, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var s;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((s = n.parentNode) == null ? void 0 : s.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, r);
  }
};
function fo(e) {
  return typeof e > "u" || !!e;
}
function tn(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Ti])) {
    if (e[Ti] = !0, Bi(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || co(e), n._ripple.class && (t.class = n._ripple.class), Bi(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        In.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var i;
        (i = n == null ? void 0 : n._ripple) != null && i.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, du);
    } else
      In.show(e, n, t);
  }
}
function zr(e) {
  e[Ti] = !0;
}
function Me(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Me(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), In.hide(t);
  }
}
function ho(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let nn = !1;
function vo(e) {
  !nn && (e.keyCode === Sr.enter || e.keyCode === Sr.space) && (nn = !0, tn(e));
}
function go(e) {
  nn = !1, Me(e);
}
function mo(e) {
  nn && (nn = !1, Me(e));
}
function po(e, t, n) {
  const {
    value: i,
    modifiers: r
  } = t, a = fo(i);
  if (a || In.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = r.center, e._ripple.circle = r.circle, Si(i) && i.class && (e._ripple.class = i.class), a && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", zr, {
        passive: !0
      }), e.addEventListener("mousedown", zr);
      return;
    }
    e.addEventListener("touchstart", tn, {
      passive: !0
    }), e.addEventListener("touchend", Me, {
      passive: !0
    }), e.addEventListener("touchmove", ho, {
      passive: !0
    }), e.addEventListener("touchcancel", Me), e.addEventListener("mousedown", tn), e.addEventListener("mouseup", Me), e.addEventListener("mouseleave", Me), e.addEventListener("keydown", vo), e.addEventListener("keyup", go), e.addEventListener("blur", mo), e.addEventListener("dragstart", Me, {
      passive: !0
    });
  } else !a && n && yo(e);
}
function yo(e) {
  e.removeEventListener("mousedown", tn), e.removeEventListener("touchstart", tn), e.removeEventListener("touchend", Me), e.removeEventListener("touchmove", ho), e.removeEventListener("touchcancel", Me), e.removeEventListener("mouseup", Me), e.removeEventListener("mouseleave", Me), e.removeEventListener("keydown", vo), e.removeEventListener("keyup", go), e.removeEventListener("dragstart", Me), e.removeEventListener("blur", mo);
}
function hu(e, t) {
  po(e, t, !1);
}
function vu(e) {
  delete e._ripple, yo(e);
}
function gu(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = fo(t.oldValue);
  po(e, t, n);
}
const On = {
  mounted: hu,
  unmounted: vu,
  updated: gu
}, mu = M({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: to
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: Se,
  appendIcon: Se,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...cn(),
  ...he(),
  ...zt(),
  ...Pt(),
  ...fn(),
  ...Dl(),
  ...oo(),
  ...ro(),
  ...au(),
  ...wt(),
  ...uo(),
  ...qn(),
  ...Ke({
    tag: "button"
  }),
  ...Re(),
  ...vn({
    variant: "elevated"
  })
}, "VBtn"), pu = ee()({
  name: "VBtn",
  props: mu(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const {
      themeClasses: r
    } = Ue(e), {
      borderClasses: a
    } = dn(e), {
      densityClasses: o
    } = Wt(e), {
      dimensionStyles: s
    } = Tt(e), {
      elevationClasses: u
    } = hn(e), {
      loaderClasses: l
    } = so(e), {
      locationStyles: c
    } = ao(e), {
      positionClasses: d
    } = ou(e), {
      roundedClasses: f
    } = _t(e), {
      sizeClasses: g,
      sizeStyles: m
    } = Xn(e), h = $l(e, e.symbol, !1), p = lo(e, n), v = A(() => {
      var H;
      return e.active !== void 0 ? e.active : p.isLink.value ? (H = p.isActive) == null ? void 0 : H.value : h == null ? void 0 : h.isSelected.value;
    }), b = R(() => v.value ? e.activeColor ?? e.color : e.color), y = A(() => {
      var S, E;
      return {
        color: (h == null ? void 0 : h.isSelected.value) && (!p.isLink.value || ((S = p.isActive) == null ? void 0 : S.value)) || !h || ((E = p.isActive) == null ? void 0 : E.value) ? b.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: x,
      variantClasses: _
    } = dr(y), P = A(() => (h == null ? void 0 : h.disabled.value) || e.disabled), C = R(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), N = A(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function D(H) {
      var S;
      P.value || p.isLink.value && (H.metaKey || H.ctrlKey || H.shiftKey || H.button !== 0 || n.target === "_blank") || ((S = p.navigate) == null || S.call(p, H), h == null || h.toggle());
    }
    return cu(p, h == null ? void 0 : h.select), oe(() => {
      const H = p.isLink.value ? "a" : e.tag, S = !!(e.prependIcon || i.prepend), E = !!(e.appendIcon || i.append), k = !!(e.icon && e.icon !== !0);
      return tt(L(H, ie({
        type: H === "a" ? void 0 : "button",
        class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
          "v-btn--active": v.value,
          "v-btn--block": e.block,
          "v-btn--disabled": P.value,
          "v-btn--elevated": C.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, r.value, a.value, w.value, o.value, u.value, l.value, d.value, f.value, g.value, _.value, e.class],
        style: [x.value, s.value, c.value, m.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: P.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: D,
        value: N.value
      }, p.linkProps), {
        default: () => {
          var I;
          return [cr(!0, "v-btn"), !e.icon && S && B("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [i.prepend ? L(ct, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, i.prepend) : L(Oe, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), B("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!i.default && k ? L(Oe, {
            key: "content-icon",
            icon: e.icon
          }, null) : L(ct, {
            key: "content-defaults",
            disabled: !k,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var O;
              return [((O = i.default) == null ? void 0 : O.call(i)) ?? ve(e.text)];
            }
          })]), !e.icon && E && B("span", {
            key: "append",
            class: "v-btn__append"
          }, [i.append ? L(ct, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, i.append) : L(Oe, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && B("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((I = i.loader) == null ? void 0 : I.call(i)) ?? L(io, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[On, !P.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), yu = M({
  start: Boolean,
  end: Boolean,
  icon: Se,
  image: String,
  text: String,
  ...cn(),
  ...he(),
  ...zt(),
  ...wt(),
  ...qn(),
  ...Ke(),
  ...Re(),
  ...vn({
    variant: "flat"
  })
}, "VAvatar"), Wr = ee()({
  name: "VAvatar",
  props: yu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: i
    } = Ue(e), {
      borderClasses: r
    } = dn(e), {
      colorClasses: a,
      colorStyles: o,
      variantClasses: s
    } = dr(e), {
      densityClasses: u
    } = Wt(e), {
      roundedClasses: l
    } = _t(e), {
      sizeClasses: c,
      sizeStyles: d
    } = Xn(e);
    return oe(() => L(e.tag, {
      class: G(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, i.value, r.value, a.value, u.value, l.value, c.value, s.value, e.class]),
      style: ne([o.value, d.value, e.style])
    }, {
      default: () => [n.default ? L(ct, {
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
      }) : e.image ? L(Rl, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? L(Oe, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, cr(!1, "v-avatar")]
    })), {};
  }
}), bu = M({
  text: String,
  onClick: De(),
  ...he(),
  ...Re()
}, "VLabel"), wu = ee()({
  name: "VLabel",
  props: bu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return oe(() => {
      var i;
      return B("label", {
        class: G(["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class]),
        style: ne(e.style),
        onClick: e.onClick
      }, [e.text, (i = n.default) == null ? void 0 : i.call(n)]);
    }), {};
  }
});
function bo(e) {
  const {
    t
  } = qa();
  function n(i) {
    let {
      name: r,
      color: a,
      ...o
    } = i;
    const s = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[r], u = e[`onClick:${r}`];
    function l(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), Va(u, new PointerEvent("click", d)));
    }
    const c = u && s ? t(`$vuetify.input.${s}`, e.label ?? "") : void 0;
    return L(Oe, ie({
      icon: e[`${r}Icon`],
      "aria-label": c,
      onClick: u,
      onKeydown: l,
      color: a
    }, o), null);
  }
  return {
    InputIcon: n
  };
}
const _u = M({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...he(),
  ...zn({
    transition: {
      component: Ya,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Su = ee()({
  name: "VMessages",
  props: _u(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = A(() => mt(e.messages)), {
      textColorClasses: r,
      textColorStyles: a
    } = yt(() => e.color);
    return oe(() => L(vt, {
      transition: e.transition,
      tag: "div",
      class: G(["v-messages", r.value, e.class]),
      style: ne([a.value, e.style])
    }, {
      default: () => [e.active && i.value.map((o, s) => B("div", {
        class: "v-messages__message",
        key: `${s}-${i.value}`
      }, [n.message ? n.message({
        message: o
      }) : o]))]
    })), {};
  }
}), wo = M({
  focused: Boolean,
  "onUpdate:focused": De()
}, "focus");
function _o(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  const n = qe(e, "focused"), i = R(() => ({
    [`${t}--focused`]: n.value
  }));
  function r() {
    n.value = !0;
  }
  function a() {
    n.value = !1;
  }
  return {
    focusClasses: i,
    isFocused: n,
    focus: r,
    blur: a
  };
}
const Eu = Symbol.for("vuetify:form");
function Cu(e) {
  const t = be(Eu, null);
  return {
    ...t,
    isReadonly: A(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: A(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const xu = Symbol.for("vuetify:rules");
function Au(e) {
  const t = be(xu, null);
  return t ? t(e) : R(e);
}
const Pu = M({
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
  ...wo()
}, "validation");
function Tu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gt();
  const i = qe(e, "modelValue"), r = A(() => e.validationValue === void 0 ? i.value : e.validationValue), a = Cu(e), o = Au(() => e.rules), s = q([]), u = ce(!0), l = A(() => !!(mt(i.value === "" ? null : i.value).length || mt(r.value === "" ? null : r.value).length)), c = A(() => {
    var w;
    return (w = e.errorMessages) != null && w.length ? mt(e.errorMessages).concat(s.value).slice(0, Math.max(0, Number(e.maxErrors))) : s.value;
  }), d = A(() => {
    var _;
    let w = (e.validateOn ?? ((_ = a.validateOn) == null ? void 0 : _.value)) || "input";
    w === "lazy" && (w = "input lazy"), w === "eager" && (w = "input eager");
    const x = new Set((w == null ? void 0 : w.split(" ")) ?? []);
    return {
      input: x.has("input"),
      blur: x.has("blur") || x.has("input") || x.has("invalid-input"),
      invalidInput: x.has("invalid-input"),
      lazy: x.has("lazy"),
      eager: x.has("eager")
    };
  }), f = A(() => {
    var w;
    return e.error || (w = e.errorMessages) != null && w.length ? !1 : e.rules.length ? u.value ? s.value.length || d.value.lazy ? null : !0 : !s.value.length : !0;
  }), g = ce(!1), m = A(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: l.value,
    [`${t}--disabled`]: a.isDisabled.value,
    [`${t}--readonly`]: a.isReadonly.value
  })), h = Ee("validation"), p = A(() => e.name ?? Ce(n));
  sn(() => {
    var w;
    (w = a.register) == null || w.call(a, {
      id: p.value,
      vm: h,
      validate: y,
      reset: v,
      resetValidation: b
    });
  }), it(() => {
    var w;
    (w = a.unregister) == null || w.call(a, p.value);
  }), Ut(async () => {
    var w;
    d.value.lazy || await y(!d.value.eager), (w = a.update) == null || w.call(a, p.value, f.value, c.value);
  }), Mt(() => d.value.input || d.value.invalidInput && f.value === !1, () => {
    re(r, () => {
      if (r.value != null)
        y();
      else if (e.focused) {
        const w = re(() => e.focused, (x) => {
          x || y(), w();
        });
      }
    });
  }), Mt(() => d.value.blur, () => {
    re(() => e.focused, (w) => {
      w || y();
    });
  }), re([f, c], () => {
    var w;
    (w = a.update) == null || w.call(a, p.value, f.value, c.value);
  });
  async function v() {
    i.value = null, await We(), await b();
  }
  async function b() {
    u.value = !0, d.value.lazy ? s.value = [] : await y(!d.value.eager);
  }
  async function y() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const x = [];
    g.value = !0;
    for (const _ of o.value) {
      if (x.length >= Number(e.maxErrors ?? 1))
        break;
      const C = await (typeof _ == "function" ? _ : () => _)(r.value);
      if (C !== !0) {
        if (C !== !1 && typeof C != "string") {
          console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        x.push(C || "");
      }
    }
    return s.value = x, g.value = !1, u.value = w, s.value;
  }
  return {
    errorMessages: c,
    isDirty: l,
    isDisabled: a.isDisabled,
    isReadonly: a.isReadonly,
    isPristine: u,
    isValid: f,
    isValidating: g,
    reset: v,
    resetValidation: b,
    validate: y,
    validationClasses: m
  };
}
const So = M({
  id: String,
  appendIcon: Se,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: Se,
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
  "onClick:prepend": De(),
  "onClick:append": De(),
  ...he(),
  ...zt(),
  ...Na(Pt(), ["maxWidth", "minWidth", "width"]),
  ...Re(),
  ...Pu()
}, "VInput"), qr = ee()({
  name: "VInput",
  props: {
    ...So()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: i,
      emit: r
    } = t;
    const {
      densityClasses: a
    } = Wt(e), {
      dimensionStyles: o
    } = Tt(e), {
      themeClasses: s
    } = Ue(e), {
      rtlClasses: u
    } = jt(), {
      InputIcon: l
    } = bo(e), c = Gt(), d = A(() => e.id || `input-${c}`), f = A(() => `${d.value}-messages`), {
      errorMessages: g,
      isDirty: m,
      isDisabled: h,
      isReadonly: p,
      isPristine: v,
      isValid: b,
      isValidating: y,
      reset: w,
      resetValidation: x,
      validate: _,
      validationClasses: P
    } = Tu(e, "v-input", d), C = A(() => ({
      id: d,
      messagesId: f,
      isDirty: m,
      isDisabled: h,
      isReadonly: p,
      isPristine: v,
      isValid: b,
      isValidating: y,
      reset: w,
      resetValidation: x,
      validate: _
    })), N = R(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), D = R(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? N.value : e.iconColor;
    }), H = A(() => {
      var S;
      return (S = e.errorMessages) != null && S.length || !v.value && g.value.length ? g.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return oe(() => {
      var O, j, K, se;
      const S = !!(i.prepend || e.prependIcon), E = !!(i.append || e.appendIcon), k = H.value.length > 0, I = !e.hideDetails || e.hideDetails === "auto" && (k || !!i.details);
      return B("div", {
        class: G(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, a.value, s.value, u.value, P.value, e.class]),
        style: ne([o.value, e.style])
      }, [S && B("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(O = i.prepend) == null ? void 0 : O.call(i, C.value), e.prependIcon && L(l, {
        key: "prepend-icon",
        name: "prepend",
        color: D.value
      }, null)]), i.default && B("div", {
        class: "v-input__control"
      }, [(j = i.default) == null ? void 0 : j.call(i, C.value)]), E && B("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && L(l, {
        key: "append-icon",
        name: "append",
        color: D.value
      }, null), (K = i.append) == null ? void 0 : K.call(i, C.value)]), I && B("div", {
        id: f.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [L(Su, {
        active: k,
        messages: H.value
      }, {
        message: i.message
      }), (se = i.details) == null ? void 0 : se.call(i, C.value)])]);
    }), {
      reset: w,
      resetValidation: x,
      validate: _,
      isValid: b,
      errorMessages: g
    };
  }
}), Bu = Symbol.for("vuetify:display");
function Lu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rt();
  const n = be(Bu);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const i = A(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), r = R(() => t ? {
    [`${t}--mobile`]: i.value
  } : {});
  return {
    ...n,
    displayClasses: r,
    mobile: i
  };
}
const Li = Symbol.for("vuetify:list");
function Eo() {
  const e = be(Li, {
    hasPrepend: ce(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: ce(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return Ze(Li, t), e;
}
function Co() {
  return be(Li, null);
}
const fr = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: i,
        value: r,
        activated: a
      } = n;
      return i = me(i), e && !r && a.size === 1 && a.has(i) || (r ? a.add(i) : a.delete(i)), a;
    },
    in: (n, i, r) => {
      let a = /* @__PURE__ */ new Set();
      if (n != null)
        for (const o of mt(n))
          a = t.activate({
            id: o,
            value: !0,
            activated: new Set(a),
            children: i,
            parents: r
          });
      return a;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, xo = (e) => {
  const t = fr(e);
  return {
    activate: (i) => {
      let {
        activated: r,
        id: a,
        ...o
      } = i;
      a = me(a);
      const s = r.has(a) ? /* @__PURE__ */ new Set([a]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...o,
        id: a,
        activated: s
      });
    },
    in: (i, r, a) => {
      let o = /* @__PURE__ */ new Set();
      if (i != null) {
        const s = mt(i);
        s.length && (o = t.in(s.slice(0, 1), r, a));
      }
      return o;
    },
    out: (i, r, a) => t.out(i, r, a)
  };
}, ku = (e) => {
  const t = fr(e);
  return {
    activate: (i) => {
      let {
        id: r,
        activated: a,
        children: o,
        ...s
      } = i;
      return r = me(r), o.has(r) ? a : t.activate({
        id: r,
        activated: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, Iu = (e) => {
  const t = xo(e);
  return {
    activate: (i) => {
      let {
        id: r,
        activated: a,
        children: o,
        ...s
      } = i;
      return r = me(r), o.has(r) ? a : t.activate({
        id: r,
        activated: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, Ou = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: i,
      parents: r
    } = e;
    if (n) {
      const a = /* @__PURE__ */ new Set();
      a.add(t);
      let o = r.get(t);
      for (; o != null; )
        a.add(o), o = r.get(o);
      return a;
    } else
      return i.delete(t), i;
  },
  select: () => null
}, Ao = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: i,
      parents: r
    } = e;
    if (n) {
      let a = r.get(t);
      for (i.add(t); a != null && a !== t; )
        i.add(a), a = r.get(a);
      return i;
    } else
      i.delete(t);
    return i;
  },
  select: () => null
}, Nu = {
  open: Ao.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: i,
      parents: r
    } = e;
    if (!n) return i;
    const a = [];
    let o = r.get(t);
    for (; o != null; )
      a.push(o), o = r.get(o);
    return new Set(a);
  }
}, hr = (e) => {
  const t = {
    select: (n) => {
      let {
        id: i,
        value: r,
        selected: a
      } = n;
      if (i = me(i), e && !r) {
        const o = Array.from(a.entries()).reduce((s, u) => {
          let [l, c] = u;
          return c === "on" && s.push(l), s;
        }, []);
        if (o.length === 1 && o[0] === i) return a;
      }
      return a.set(i, r ? "on" : "off"), a;
    },
    in: (n, i, r) => {
      const a = /* @__PURE__ */ new Map();
      for (const o of n || [])
        t.select({
          id: o,
          value: !0,
          selected: a,
          children: i,
          parents: r
        });
      return a;
    },
    out: (n) => {
      const i = [];
      for (const [r, a] of n.entries())
        a === "on" && i.push(r);
      return i;
    }
  };
  return t;
}, Po = (e) => {
  const t = hr(e);
  return {
    select: (i) => {
      let {
        selected: r,
        id: a,
        ...o
      } = i;
      a = me(a);
      const s = r.has(a) ? /* @__PURE__ */ new Map([[a, r.get(a)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...o,
        id: a,
        selected: s
      });
    },
    in: (i, r, a) => i != null && i.length ? t.in(i.slice(0, 1), r, a) : /* @__PURE__ */ new Map(),
    out: (i, r, a) => t.out(i, r, a)
  };
}, Ru = (e) => {
  const t = hr(e);
  return {
    select: (i) => {
      let {
        id: r,
        selected: a,
        children: o,
        ...s
      } = i;
      return r = me(r), o.has(r) ? a : t.select({
        id: r,
        selected: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, Hu = (e) => {
  const t = Po(e);
  return {
    select: (i) => {
      let {
        id: r,
        selected: a,
        children: o,
        ...s
      } = i;
      return r = me(r), o.has(r) ? a : t.select({
        id: r,
        selected: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, To = (e) => {
  const t = {
    select: (n) => {
      let {
        id: i,
        value: r,
        selected: a,
        children: o,
        parents: s
      } = n;
      i = me(i);
      const u = new Map(a), l = [i];
      for (; l.length; ) {
        const d = l.shift();
        a.set(me(d), r ? "on" : "off"), o.has(d) && l.push(...o.get(d));
      }
      let c = me(s.get(i));
      for (; c; ) {
        const d = o.get(c), f = d.every((m) => a.get(me(m)) === "on"), g = d.every((m) => !a.has(me(m)) || a.get(me(m)) === "off");
        a.set(c, f ? "on" : g ? "off" : "indeterminate"), c = me(s.get(c));
      }
      return e && !r && Array.from(a.entries()).reduce((f, g) => {
        let [m, h] = g;
        return h === "on" && f.push(m), f;
      }, []).length === 0 ? u : a;
    },
    in: (n, i, r) => {
      let a = /* @__PURE__ */ new Map();
      for (const o of n || [])
        a = t.select({
          id: o,
          value: !0,
          selected: a,
          children: i,
          parents: r
        });
      return a;
    },
    out: (n, i) => {
      const r = [];
      for (const [a, o] of n.entries())
        o === "on" && !i.has(a) && r.push(a);
      return r;
    }
  };
  return t;
}, Mu = (e) => {
  const t = To(e);
  return {
    select: t.select,
    in: t.in,
    out: (i, r, a) => {
      const o = [];
      for (const [s, u] of i.entries())
        if (u === "on") {
          if (a.has(s)) {
            const l = a.get(s);
            if (i.get(l) === "on") continue;
          }
          o.push(s);
        }
      return o;
    }
  };
}, rn = Symbol.for("vuetify:nested"), Bo = {
  id: ce(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: q(/* @__PURE__ */ new Map()),
    children: q(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: q(!1),
    selectable: q(!1),
    opened: q(/* @__PURE__ */ new Set()),
    activated: q(/* @__PURE__ */ new Set()),
    selected: q(/* @__PURE__ */ new Map()),
    selectedValues: q([]),
    getPath: () => []
  }
}, Fu = M({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Vu = (e) => {
  let t = !1;
  const n = q(/* @__PURE__ */ new Map()), i = q(/* @__PURE__ */ new Map()), r = qe(e, "opened", e.opened, (m) => new Set(m), (m) => [...m.values()]), a = A(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return ku(e.mandatory);
      case "single-leaf":
        return Iu(e.mandatory);
      case "independent":
        return fr(e.mandatory);
      case "single-independent":
      default:
        return xo(e.mandatory);
    }
  }), o = A(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Hu(e.mandatory);
      case "leaf":
        return Ru(e.mandatory);
      case "independent":
        return hr(e.mandatory);
      case "single-independent":
        return Po(e.mandatory);
      case "trunk":
        return Mu(e.mandatory);
      case "classic":
      default:
        return To(e.mandatory);
    }
  }), s = A(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Nu;
      case "single":
        return Ou;
      case "multiple":
      default:
        return Ao;
    }
  }), u = qe(e, "activated", e.activated, (m) => a.value.in(m, n.value, i.value), (m) => a.value.out(m, n.value, i.value)), l = qe(e, "selected", e.selected, (m) => o.value.in(m, n.value, i.value), (m) => o.value.out(m, n.value, i.value));
  it(() => {
    t = !0;
  });
  function c(m) {
    const h = [];
    let p = m;
    for (; p != null; )
      h.unshift(p), p = i.value.get(p);
    return h;
  }
  const d = Ee("nested"), f = /* @__PURE__ */ new Set(), g = {
    id: ce(),
    root: {
      opened: r,
      activatable: R(() => e.activatable),
      selectable: R(() => e.selectable),
      activated: u,
      selected: l,
      selectedValues: A(() => {
        const m = [];
        for (const [h, p] of l.value.entries())
          p === "on" && m.push(h);
        return m;
      }),
      register: (m, h, p) => {
        if (f.has(m)) {
          const v = c(m).map(String).join(" -> "), b = c(h).concat(m).map(String).join(" -> ");
          Ga(`Multiple nodes with the same ID
	${v}
	${b}`);
          return;
        } else
          f.add(m);
        h && m !== h && i.value.set(m, h), p && n.value.set(m, []), h != null && n.value.set(h, [...n.value.get(h) || [], m]);
      },
      unregister: (m) => {
        if (t) return;
        f.delete(m), n.value.delete(m);
        const h = i.value.get(m);
        if (h) {
          const p = n.value.get(h) ?? [];
          n.value.set(h, p.filter((v) => v !== m));
        }
        i.value.delete(m);
      },
      open: (m, h, p) => {
        d.emit("click:open", {
          id: m,
          value: h,
          path: c(m),
          event: p
        });
        const v = s.value.open({
          id: m,
          value: h,
          opened: new Set(r.value),
          children: n.value,
          parents: i.value,
          event: p
        });
        v && (r.value = v);
      },
      openOnSelect: (m, h, p) => {
        const v = s.value.select({
          id: m,
          value: h,
          selected: new Map(l.value),
          opened: new Set(r.value),
          children: n.value,
          parents: i.value,
          event: p
        });
        v && (r.value = v);
      },
      select: (m, h, p) => {
        d.emit("click:select", {
          id: m,
          value: h,
          path: c(m),
          event: p
        });
        const v = o.value.select({
          id: m,
          value: h,
          selected: new Map(l.value),
          children: n.value,
          parents: i.value,
          event: p
        });
        v && (l.value = v), g.root.openOnSelect(m, h, p);
      },
      activate: (m, h, p) => {
        if (!e.activatable)
          return g.root.select(m, !0, p);
        d.emit("click:activate", {
          id: m,
          value: h,
          path: c(m),
          event: p
        });
        const v = a.value.activate({
          id: m,
          value: h,
          activated: new Set(u.value),
          children: n.value,
          parents: i.value,
          event: p
        });
        if (v.size !== u.value.size)
          u.value = v;
        else {
          for (const b of v)
            if (!u.value.has(b)) {
              u.value = v;
              return;
            }
          for (const b of u.value)
            if (!v.has(b)) {
              u.value = v;
              return;
            }
        }
      },
      children: n,
      parents: i,
      getPath: c
    }
  };
  return Ze(rn, g), g.root;
}, Lo = (e, t) => {
  const n = be(rn, Bo), i = Symbol("nested item"), r = A(() => dt(e) ?? i), a = {
    ...n,
    id: r,
    open: (o, s) => n.root.open(r.value, o, s),
    openOnSelect: (o, s) => n.root.openOnSelect(r.value, o, s),
    isOpen: A(() => n.root.opened.value.has(r.value)),
    parent: A(() => n.root.parents.value.get(r.value)),
    activate: (o, s) => n.root.activate(r.value, o, s),
    isActivated: A(() => n.root.activated.value.has(me(r.value))),
    select: (o, s) => n.root.select(r.value, o, s),
    isSelected: A(() => n.root.selected.value.get(me(r.value)) === "on"),
    isIndeterminate: A(() => n.root.selected.value.get(me(r.value)) === "indeterminate"),
    isLeaf: A(() => !n.root.children.value.get(r.value)),
    isGroupActivator: n.isGroupActivator
  };
  return sn(() => {
    !n.isGroupActivator && n.root.register(r.value, n.id.value, t);
  }), it(() => {
    !n.isGroupActivator && n.root.unregister(r.value);
  }), t && Ze(rn, a), a;
}, Du = () => {
  const e = be(rn, Bo);
  Ze(rn, {
    ...e,
    isGroupActivator: !0
  });
}, $u = un({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Du(), () => {
      var i;
      return (i = n.default) == null ? void 0 : i.call(n);
    };
  }
}), Uu = M({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: Se,
    default: "$collapse"
  },
  expandIcon: {
    type: Se,
    default: "$expand"
  },
  prependIcon: Se,
  appendIcon: Se,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...he(),
  ...Ke()
}, "VListGroup"), Xr = ee()({
  name: "VListGroup",
  props: Uu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: i,
      open: r,
      id: a
    } = Lo(() => e.value, !0), o = A(() => `v-list-group--id-${String(a.value)}`), s = Co(), {
      isBooted: u
    } = Hl();
    function l(g) {
      var m;
      g.stopPropagation(), !["INPUT", "TEXTAREA"].includes((m = g.target) == null ? void 0 : m.tagName) && r(!i.value, g);
    }
    const c = A(() => ({
      onClick: l,
      class: "v-list-group__header",
      id: o.value
    })), d = A(() => i.value ? e.collapseIcon : e.expandIcon), f = A(() => ({
      VListItem: {
        active: i.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && d.value,
        appendIcon: e.appendIcon || !e.subgroup && d.value,
        title: e.title,
        value: e.value
      }
    }));
    return oe(() => L(e.tag, {
      class: G(["v-list-group", {
        "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": i.value
      }, e.class]),
      style: ne(e.style)
    }, {
      default: () => [n.activator && L(ct, {
        defaults: f.value
      }, {
        default: () => [L($u, null, {
          default: () => [n.activator({
            props: c.value,
            isOpen: i.value
          })]
        })]
      }), L(vt, {
        transition: {
          component: Bl
        },
        disabled: !u.value
      }, {
        default: () => {
          var g;
          return [tt(B("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(g = n.default) == null ? void 0 : g.call(n)]), [[ln, i.value]])];
        }
      })]
    })), {
      isOpen: i
    };
  }
}), Gu = M({
  opacity: [Number, String],
  ...he(),
  ...Ke()
}, "VListItemSubtitle"), ju = ee()({
  name: "VListItemSubtitle",
  props: Gu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return oe(() => L(e.tag, {
      class: G(["v-list-item-subtitle", e.class]),
      style: ne([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), zu = yl("v-list-item-title"), Wu = M({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: Se,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: Se,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  onClick: De(),
  onClickOnce: De(),
  ...cn(),
  ...he(),
  ...zt(),
  ...Pt(),
  ...fn(),
  ...wt(),
  ...uo(),
  ...Ke(),
  ...Re(),
  ...vn({
    variant: "text"
  })
}, "VListItem"), ki = ee()({
  name: "VListItem",
  directives: {
    vRipple: On
  },
  props: Wu(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: i,
      emit: r
    } = t;
    const a = lo(e, n), o = A(() => e.value === void 0 ? a.href.value : e.value), {
      activate: s,
      isActivated: u,
      select: l,
      isOpen: c,
      isSelected: d,
      isIndeterminate: f,
      isGroupActivator: g,
      root: m,
      parent: h,
      openOnSelect: p,
      id: v
    } = Lo(o, !1), b = Co(), y = A(() => {
      var W;
      return e.active !== !1 && (e.active || ((W = a.isActive) == null ? void 0 : W.value) || (m.activatable.value ? u.value : d.value));
    }), w = R(() => e.link !== !1 && a.isLink.value), x = A(() => !!b && (m.selectable.value || m.activatable.value || e.value != null)), _ = A(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || x.value)), P = R(() => e.rounded || e.nav), C = R(() => e.color ?? e.activeColor), N = R(() => ({
      color: y.value ? C.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    re(() => {
      var W;
      return (W = a.isActive) == null ? void 0 : W.value;
    }, (W) => {
      W && D();
    }), sn(() => {
      var W;
      (W = a.isActive) != null && W.value && D();
    });
    function D() {
      h.value != null && m.open(h.value, !0), p(!0);
    }
    const {
      themeClasses: H
    } = Ue(e), {
      borderClasses: S
    } = dn(e), {
      colorClasses: E,
      colorStyles: k,
      variantClasses: I
    } = dr(N), {
      densityClasses: O
    } = Wt(e), {
      dimensionStyles: j
    } = Tt(e), {
      elevationClasses: K
    } = hn(e), {
      roundedClasses: se
    } = _t(P), z = R(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), fe = A(() => ({
      isActive: y.value,
      select: l,
      isOpen: c.value,
      isSelected: d.value,
      isIndeterminate: f.value
    }));
    function Te(W) {
      var de, ke;
      r("click", W), !["INPUT", "TEXTAREA"].includes((de = W.target) == null ? void 0 : de.tagName) && _.value && ((ke = a.navigate) == null || ke.call(a, W), !g && (m.activatable.value ? s(!u.value, W) : (m.selectable.value || e.value != null) && l(!d.value, W)));
    }
    function le(W) {
      const de = W.target;
      ["INPUT", "TEXTAREA"].includes(de.tagName) || (W.key === "Enter" || W.key === " ") && (W.preventDefault(), W.target.dispatchEvent(new MouseEvent("click", W)));
    }
    return oe(() => {
      const W = w.value ? "a" : e.tag, de = i.title || e.title != null, ke = i.subtitle || e.subtitle != null, X = !!(e.appendAvatar || e.appendIcon), pe = !!(X || i.append), we = !!(e.prependAvatar || e.prependIcon), je = !!(we || i.prepend);
      return b == null || b.updateHasPrepend(je), e.activeColor && ul("active-color", ["color", "base-color"]), tt(L(W, ie({
        class: ["v-list-item", {
          "v-list-item--active": y.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": _.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !je && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && y.value
        }, H.value, S.value, E.value, O.value, K.value, z.value, se.value, I.value, e.class],
        style: [k.value, j.value, e.style],
        tabindex: _.value ? b ? -2 : 0 : void 0,
        "aria-selected": x.value ? m.activatable.value ? u.value : m.selectable.value ? d.value : y.value : void 0,
        onClick: Te,
        onKeydown: _.value && !w.value && le
      }, a.linkProps), {
        default: () => {
          var at;
          return [cr(_.value || y.value, "v-list-item"), je && B("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [i.prepend ? L(ct, {
            key: "prepend-defaults",
            disabled: !we,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var Ie;
              return [(Ie = i.prepend) == null ? void 0 : Ie.call(i, fe.value)];
            }
          }) : B(_e, null, [e.prependAvatar && L(Wr, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && L(Oe, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), B("div", {
            class: "v-list-item__spacer"
          }, null)]), B("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [de && L(zu, {
            key: "title"
          }, {
            default: () => {
              var Ie;
              return [((Ie = i.title) == null ? void 0 : Ie.call(i, {
                title: e.title
              })) ?? ve(e.title)];
            }
          }), ke && L(ju, {
            key: "subtitle"
          }, {
            default: () => {
              var Ie;
              return [((Ie = i.subtitle) == null ? void 0 : Ie.call(i, {
                subtitle: e.subtitle
              })) ?? ve(e.subtitle)];
            }
          }), (at = i.default) == null ? void 0 : at.call(i, fe.value)]), pe && B("div", {
            key: "append",
            class: "v-list-item__append"
          }, [i.append ? L(ct, {
            key: "append-defaults",
            disabled: !X,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var Ie;
              return [(Ie = i.append) == null ? void 0 : Ie.call(i, fe.value)];
            }
          }) : B(_e, null, [e.appendIcon && L(Oe, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && L(Wr, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), B("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[On, _.value && e.ripple]]);
    }), {
      activate: s,
      isActivated: u,
      isGroupActivator: g,
      isSelected: d,
      list: b,
      select: l,
      root: m,
      id: v,
      link: a
    };
  }
}), qu = M({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...he(),
  ...Ke()
}, "VListSubheader"), Xu = ee()({
  name: "VListSubheader",
  props: qu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: i,
      textColorStyles: r
    } = yt(() => e.color);
    return oe(() => {
      const a = !!(n.default || e.title);
      return L(e.tag, {
        class: G(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, i.value, e.class]),
        style: ne([{
          textColorStyles: r
        }, e.style])
      }, {
        default: () => {
          var o;
          return [a && B("div", {
            class: "v-list-subheader__text"
          }, [((o = n.default) == null ? void 0 : o.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), Zu = M({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...he(),
  ...Re()
}, "VDivider"), Yu = ee()({
  name: "VDivider",
  props: Zu(),
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const {
      themeClasses: r
    } = Ue(e), {
      textColorClasses: a,
      textColorStyles: o
    } = yt(() => e.color), s = A(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = Y(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Y(e.thickness)), u;
    });
    return oe(() => {
      const u = B("hr", {
        class: G([{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, r.value, a.value, e.class]),
        style: ne([s.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return i.default ? B("div", {
        class: G(["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }])
      }, [u, B("div", {
        class: "v-divider__content"
      }, [i.default()]), u]) : u;
    }), {};
  }
}), Ku = M({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), ko = ee()({
  name: "VListChildren",
  props: Ku(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Eo(), () => {
      var i, r;
      return ((i = n.default) == null ? void 0 : i.call(n)) ?? ((r = e.items) == null ? void 0 : r.map((a) => {
        var f, g;
        let {
          children: o,
          props: s,
          type: u,
          raw: l
        } = a;
        if (u === "divider")
          return ((f = n.divider) == null ? void 0 : f.call(n, {
            props: s
          })) ?? L(Yu, s, null);
        if (u === "subheader")
          return ((g = n.subheader) == null ? void 0 : g.call(n, {
            props: s
          })) ?? L(Xu, s, null);
        const c = {
          subtitle: n.subtitle ? (m) => {
            var h;
            return (h = n.subtitle) == null ? void 0 : h.call(n, {
              ...m,
              item: l
            });
          } : void 0,
          prepend: n.prepend ? (m) => {
            var h;
            return (h = n.prepend) == null ? void 0 : h.call(n, {
              ...m,
              item: l
            });
          } : void 0,
          append: n.append ? (m) => {
            var h;
            return (h = n.append) == null ? void 0 : h.call(n, {
              ...m,
              item: l
            });
          } : void 0,
          title: n.title ? (m) => {
            var h;
            return (h = n.title) == null ? void 0 : h.call(n, {
              ...m,
              item: l
            });
          } : void 0
        }, d = Xr.filterProps(s);
        return o ? L(Xr, ie({
          value: s == null ? void 0 : s.value
        }, d), {
          activator: (m) => {
            let {
              props: h
            } = m;
            const p = {
              ...s,
              ...h,
              value: e.returnObject ? l : s.value
            };
            return n.header ? n.header({
              props: p
            }) : L(ki, p, c);
          },
          default: () => L(ko, {
            items: o,
            returnObject: e.returnObject
          }, n)
        }) : n.item ? n.item({
          props: s
        }) : L(ki, ie(s, {
          value: e.returnObject ? l : s.value
        }), c);
      }));
    };
  }
}), Ju = M({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items");
function Qu(e, t) {
  const n = qt(t, e.itemType, "item"), i = Zs(t) ? t : qt(t, e.itemTitle), r = qt(t, e.itemValue, void 0), a = qt(t, e.itemChildren), o = e.itemProps === !0 ? jn(t, ["children"]) : qt(t, e.itemProps), s = {
    title: i,
    value: r,
    ...o
  };
  return {
    type: n,
    title: s.title,
    value: s.value,
    props: s,
    children: n === "item" && a ? Io(e, a) : void 0,
    raw: t
  };
}
function Io(e, t) {
  const n = [];
  for (const i of t)
    n.push(Qu(e, i));
  return n;
}
function ec(e) {
  return {
    items: A(() => Io(e, e.items))
  };
}
const tc = M({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: Se,
  collapseIcon: Se,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": De(),
  "onClick:select": De(),
  "onUpdate:opened": De(),
  ...Fu({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...cn(),
  ...he(),
  ...zt(),
  ...Pt(),
  ...fn(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Ju(),
  ...wt(),
  ...Ke(),
  ...Re(),
  ...vn({
    variant: "text"
  })
}, "VList"), nc = ee()({
  name: "VList",
  props: tc(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: i
    } = ec(e), {
      themeClasses: r
    } = Ue(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: o
    } = pt(() => e.bgColor), {
      borderClasses: s
    } = dn(e), {
      densityClasses: u
    } = Wt(e), {
      dimensionStyles: l
    } = Tt(e), {
      elevationClasses: c
    } = hn(e), {
      roundedClasses: d
    } = _t(e), {
      children: f,
      open: g,
      parents: m,
      select: h,
      getPath: p
    } = Vu(e), v = R(() => e.lines ? `v-list--${e.lines}-line` : void 0), b = R(() => e.activeColor), y = R(() => e.baseColor), w = R(() => e.color);
    Eo(), sr({
      VListGroup: {
        activeColor: b,
        baseColor: y,
        color: w,
        expandIcon: R(() => e.expandIcon),
        collapseIcon: R(() => e.collapseIcon)
      },
      VListItem: {
        activeClass: R(() => e.activeClass),
        activeColor: b,
        baseColor: y,
        color: w,
        density: R(() => e.density),
        disabled: R(() => e.disabled),
        lines: R(() => e.lines),
        nav: R(() => e.nav),
        slim: R(() => e.slim),
        variant: R(() => e.variant)
      }
    });
    const x = ce(!1), _ = q();
    function P(E) {
      x.value = !0;
    }
    function C(E) {
      x.value = !1;
    }
    function N(E) {
      var k;
      !x.value && !(E.relatedTarget && ((k = _.value) != null && k.contains(E.relatedTarget))) && S();
    }
    function D(E) {
      const k = E.target;
      if (!(!_.value || ["INPUT", "TEXTAREA"].includes(k.tagName))) {
        if (E.key === "ArrowDown")
          S("next");
        else if (E.key === "ArrowUp")
          S("prev");
        else if (E.key === "Home")
          S("first");
        else if (E.key === "End")
          S("last");
        else
          return;
        E.preventDefault();
      }
    }
    function H(E) {
      x.value = !0;
    }
    function S(E) {
      if (_.value)
        return Jt(_.value, E);
    }
    return oe(() => L(e.tag, {
      ref: _,
      class: G(["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, r.value, a.value, s.value, u.value, c.value, v.value, d.value, e.class]),
      style: ne([o.value, l.value, e.style]),
      tabindex: e.disabled ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: P,
      onFocusout: C,
      onFocus: N,
      onKeydown: D,
      onMousedown: H
    }, {
      default: () => [L(ko, {
        items: i.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: g,
      select: h,
      focus: S,
      children: f,
      parents: m,
      getPath: p
    };
  }
});
function si(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function ic(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Zr(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: i
    } = e, r = i === "left" ? 0 : i === "center" ? t.width / 2 : i === "right" ? t.width : i, a = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return si({
      x: r,
      y: a
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: i
    } = e, r = n === "left" ? 0 : n === "right" ? t.width : n, a = i === "top" ? 0 : i === "center" ? t.height / 2 : i === "bottom" ? t.height : i;
    return si({
      x: r,
      y: a
    }, t);
  }
  return si({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Oo = {
  static: oc,
  // specific viewport position, usually centered
  connected: lc
  // connected to a certain element
}, rc = M({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Oo
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
function ac(e, t) {
  const n = q({}), i = q();
  Le && Mt(() => !!(t.isActive.value && e.locationStrategy), (s) => {
    var u, l;
    re(() => e.locationStrategy, s), Ye(() => {
      window.removeEventListener("resize", r), visualViewport == null || visualViewport.removeEventListener("resize", a), visualViewport == null || visualViewport.removeEventListener("scroll", o), i.value = void 0;
    }), window.addEventListener("resize", r, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("resize", a, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("scroll", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? i.value = (u = e.locationStrategy(t, e, n)) == null ? void 0 : u.updateLocation : i.value = (l = Oo[e.locationStrategy](t, e, n)) == null ? void 0 : l.updateLocation;
  });
  function r(s) {
    var u;
    (u = i.value) == null || u.call(i, s);
  }
  function a(s) {
    var u;
    (u = i.value) == null || u.call(i, s);
  }
  function o(s) {
    var u;
    (u = i.value) == null || u.call(i, s);
  }
  return {
    contentStyles: n,
    updateLocation: i
  };
}
function oc() {
}
function sc(e, t) {
  const n = ar(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function lc(e, t, n) {
  (Array.isArray(e.target.value) || El(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: r,
    preferredOrigin: a
  } = rr(() => {
    const v = xi(t.location, e.isRtl.value), b = t.origin === "overlap" ? v : t.origin === "auto" ? ii(v) : xi(t.origin, e.isRtl.value);
    return v.side === b.side && v.align === ri(b).align ? {
      preferredAnchor: Pr(v),
      preferredOrigin: Pr(b)
    } : {
      preferredAnchor: v,
      preferredOrigin: b
    };
  }), [o, s, u, l] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => A(() => {
    const b = parseFloat(t[v]);
    return isNaN(b) ? 1 / 0 : b;
  })), c = A(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = !1, f = -1;
  const g = new zs(4), m = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((b) => {
      b !== f && g.clear(), requestAnimationFrame((y) => {
        f = y;
      });
    }), g.isFull) {
      const b = g.values();
      if (Gn(b.at(-1), b.at(-3)))
        return;
    }
    const v = p();
    v && g.push(v.flipped);
  });
  re([e.target, e.contentEl], (v, b) => {
    let [y, w] = v, [x, _] = b;
    x && !Array.isArray(x) && m.unobserve(x), y && !Array.isArray(y) && m.observe(y), _ && m.unobserve(_), w && m.observe(w);
  }, {
    immediate: !0
  }), Ye(() => {
    m.disconnect();
  });
  let h = new et({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  function p() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (h = Ua(e.target.value));
    const v = sc(e.contentEl.value, e.isRtl.value), b = Ln(e.contentEl.value), y = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = b.reduce((E, k) => {
      const I = Ks(k);
      return E ? new et({
        x: Math.max(E.left, I.left),
        y: Math.max(E.top, I.top),
        width: Math.min(E.right, I.right) - Math.max(E.left, I.left),
        height: Math.min(E.bottom, I.bottom) - Math.max(E.top, I.top)
      }) : I;
    }, void 0);
    w.x += y, w.y += y, w.width -= y * 2, w.height -= y * 2;
    let x = {
      anchor: r.value,
      origin: a.value
    };
    function _(E) {
      const k = new et(v), I = Zr(E.anchor, h), O = Zr(E.origin, k);
      let {
        x: j,
        y: K
      } = ic(I, O);
      switch (E.anchor.side) {
        case "top":
          K -= c.value[0];
          break;
        case "bottom":
          K += c.value[0];
          break;
        case "left":
          j -= c.value[0];
          break;
        case "right":
          j += c.value[0];
          break;
      }
      switch (E.anchor.align) {
        case "top":
          K -= c.value[1];
          break;
        case "bottom":
          K += c.value[1];
          break;
        case "left":
          j -= c.value[1];
          break;
        case "right":
          j += c.value[1];
          break;
      }
      return k.x += j, k.y += K, k.width = Math.min(k.width, u.value), k.height = Math.min(k.height, l.value), {
        overflows: Br(k, w),
        x: j,
        y: K
      };
    }
    let P = 0, C = 0;
    const N = {
      x: 0,
      y: 0
    }, D = {
      x: !1,
      y: !1
    };
    let H = -1;
    for (; ; ) {
      if (H++ > 10) {
        Ga("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: E,
        y: k,
        overflows: I
      } = _(x);
      P += E, C += k, v.x += E, v.y += k;
      {
        const O = Tr(x.anchor), j = I.x.before || I.x.after, K = I.y.before || I.y.after;
        let se = !1;
        if (["x", "y"].forEach((z) => {
          if (z === "x" && j && !D.x || z === "y" && K && !D.y) {
            const fe = {
              anchor: {
                ...x.anchor
              },
              origin: {
                ...x.origin
              }
            }, Te = z === "x" ? O === "y" ? ri : ii : O === "y" ? ii : ri;
            fe.anchor = Te(fe.anchor), fe.origin = Te(fe.origin);
            const {
              overflows: le
            } = _(fe);
            (le[z].before <= I[z].before && le[z].after <= I[z].after || le[z].before + le[z].after < (I[z].before + I[z].after) / 2) && (x = fe, se = D[z] = !0);
          }
        }), se) continue;
      }
      I.x.before && (P += I.x.before, v.x += I.x.before), I.x.after && (P -= I.x.after, v.x -= I.x.after), I.y.before && (C += I.y.before, v.y += I.y.before), I.y.after && (C -= I.y.after, v.y -= I.y.after);
      {
        const O = Br(v, w);
        N.x = w.width - O.x.before - O.x.after, N.y = w.height - O.y.before - O.y.after, P += O.x.before, v.x += O.x.before, C += O.y.before, v.y += O.y.before;
      }
      break;
    }
    const S = Tr(x.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`,
      transformOrigin: `${x.origin.side} ${x.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: Y(li(C)),
      left: e.isRtl.value ? void 0 : Y(li(P)),
      right: e.isRtl.value ? Y(li(-P)) : void 0,
      minWidth: Y(S === "y" ? Math.min(o.value, h.width) : o.value),
      maxWidth: Y(Yr(Qt(N.x, o.value === 1 / 0 ? 0 : o.value, u.value))),
      maxHeight: Y(Yr(Qt(N.y, s.value === 1 / 0 ? 0 : s.value, l.value)))
    }), {
      available: N,
      contentBox: v,
      flipped: D
    };
  }
  return re(() => [r.value, a.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => p()), We(() => {
    const v = p();
    if (!v) return;
    const {
      available: b,
      contentBox: y
    } = v;
    y.height > b.y && requestAnimationFrame(() => {
      p(), requestAnimationFrame(() => {
        p();
      });
    });
  }), {
    updateLocation: p
  };
}
function li(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Yr(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ii = !0;
const Nn = [];
function uc(e) {
  !Ii || Nn.length ? (Nn.push(e), Oi()) : (Ii = !1, e(), Oi());
}
let Kr = -1;
function Oi() {
  cancelAnimationFrame(Kr), Kr = requestAnimationFrame(() => {
    const e = Nn.shift();
    e && e(), Nn.length ? Oi() : Ii = !0;
  });
}
const _n = {
  none: null,
  close: fc,
  block: hc,
  reposition: vc
}, cc = M({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in _n
  }
}, "VOverlay-scroll-strategies");
function dc(e, t) {
  if (!Le) return;
  let n;
  $t(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = tr(), await new Promise((i) => setTimeout(i)), n.active && n.run(() => {
      var i;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (i = _n[e.scrollStrategy]) == null || i.call(_n, t, e, n);
    }));
  }), Ye(() => {
    n == null || n.stop();
  });
}
function fc(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  No(e.targetEl.value ?? e.contentEl.value, t);
}
function hc(e, t) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent, i = [.../* @__PURE__ */ new Set([...Ln(e.targetEl.value, t.contained ? n : void 0), ...Ln(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), r = window.innerWidth - document.documentElement.offsetWidth, a = ((s) => lr(s) && s)(n || document.documentElement);
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((s, u) => {
    s.style.setProperty("--v-body-scroll-x", Y(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", Y(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", Y(r)), s.classList.add("v-overlay-scroll-blocked");
  }), Ye(() => {
    i.forEach((s, u) => {
      const l = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), d = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -l, s.scrollTop = -c, s.style.scrollBehavior = d;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function vc(e, t, n) {
  let i = !1, r = -1, a = -1;
  function o(s) {
    uc(() => {
      var c, d;
      const u = performance.now();
      (d = (c = e.updateLocation).value) == null || d.call(c, s), i = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  a = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    n.run(() => {
      No(e.targetEl.value ?? e.contentEl.value, (s) => {
        i ? (cancelAnimationFrame(r), r = requestAnimationFrame(() => {
          r = requestAnimationFrame(() => {
            o(s);
          });
        })) : o(s);
      });
    });
  }), Ye(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(a), cancelAnimationFrame(r);
  });
}
function No(e, t) {
  const n = [document, ...Ln(e)];
  n.forEach((i) => {
    i.addEventListener("scroll", t, {
      passive: !0
    });
  }), Ye(() => {
    n.forEach((i) => {
      i.removeEventListener("scroll", t);
    });
  });
}
const Ni = Symbol.for("vuetify:v-menu"), gc = M({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function mc(e, t) {
  let n = () => {
  };
  function i(o) {
    n == null || n();
    const s = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      n = qs(s, () => {
        t == null || t(o), u(o);
      });
    });
  }
  function r() {
    return i(!0);
  }
  function a() {
    return i(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: r,
    runCloseDelay: a
  };
}
const pc = M({
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
  ...gc()
}, "VOverlay-activator");
function yc(e, t) {
  let {
    isActive: n,
    isTop: i,
    contentEl: r
  } = t;
  const a = Ee("useActivator"), o = q();
  let s = !1, u = !1, l = !0;
  const c = A(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = A(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: g
  } = mc(e, (C) => {
    C === (e.openOnHover && s || c.value && u) && !(e.openOnHover && n.value && !i.value) && (n.value !== C && (l = !0), n.value = C);
  }), m = q(), h = {
    onClick: (C) => {
      C.stopPropagation(), o.value = C.currentTarget || C.target, n.value || (m.value = [C.clientX, C.clientY]), n.value = !n.value;
    },
    onMouseenter: (C) => {
      var N;
      (N = C.sourceCapabilities) != null && N.firesTouchEvents || (s = !0, o.value = C.currentTarget || C.target, f());
    },
    onMouseleave: (C) => {
      s = !1, g();
    },
    onFocus: (C) => {
      Ws(C.target, ":focus-visible") !== !1 && (u = !0, C.stopPropagation(), o.value = C.currentTarget || C.target, f());
    },
    onBlur: (C) => {
      u = !1, C.stopPropagation(), g();
    }
  }, p = A(() => {
    const C = {};
    return d.value && (C.onClick = h.onClick), e.openOnHover && (C.onMouseenter = h.onMouseenter, C.onMouseleave = h.onMouseleave), c.value && (C.onFocus = h.onFocus, C.onBlur = h.onBlur), C;
  }), v = A(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      s = !0, f();
    }, C.onMouseleave = () => {
      s = !1, g();
    }), c.value && (C.onFocusin = () => {
      u = !0, f();
    }, C.onFocusout = () => {
      u = !1, g();
    }), e.closeOnContentClick) {
      const N = be(Ni, null);
      C.onClick = () => {
        n.value = !1, N == null || N.closeParents();
      };
    }
    return C;
  }), b = A(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      l && (s = !0, l = !1, f());
    }, C.onMouseleave = () => {
      s = !1, g();
    }), C;
  });
  re(i, (C) => {
    var N;
    C && (e.openOnHover && !s && (!c.value || !u) || c.value && !u && (!e.openOnHover || !s)) && !((N = r.value) != null && N.contains(document.activeElement)) && (n.value = !1);
  }), re(n, (C) => {
    C || setTimeout(() => {
      m.value = void 0;
    });
  }, {
    flush: "post"
  });
  const y = Ci();
  $t(() => {
    y.value && We(() => {
      o.value = y.el;
    });
  });
  const w = Ci(), x = A(() => e.target === "cursor" && m.value ? m.value : w.value ? w.el : Ro(e.target, a) || o.value), _ = A(() => Array.isArray(x.value) ? void 0 : x.value);
  let P;
  return re(() => !!e.activator, (C) => {
    C && Le ? (P = tr(), P.run(() => {
      bc(e, a, {
        activatorEl: o,
        activatorEvents: p
      });
    })) : P && P.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Ye(() => {
    P == null || P.stop();
  }), {
    activatorEl: o,
    activatorRef: y,
    target: x,
    targetEl: _,
    targetRef: w,
    activatorEvents: p,
    contentEvents: v,
    scrimEvents: b
  };
}
function bc(e, t, n) {
  let {
    activatorEl: i,
    activatorEvents: r
  } = n;
  re(() => e.activator, (u, l) => {
    if (l && u !== l) {
      const c = s(l);
      c && o(c);
    }
    u && We(() => a());
  }, {
    immediate: !0
  }), re(() => e.activatorProps, () => {
    a();
  }), Ye(() => {
    o();
  });
  function a() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && Js(u, ie(r.value, l));
  }
  function o() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && Qs(u, ie(r.value, l));
  }
  function s() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const l = Ro(u, t);
    return i.value = (l == null ? void 0 : l.nodeType) === Node.ELEMENT_NODE ? l : void 0, i.value;
  }
}
function Ro(e, t) {
  var i, r;
  if (!e) return;
  let n;
  if (e === "parent") {
    let a = (r = (i = t == null ? void 0 : t.proxy) == null ? void 0 : i.$el) == null ? void 0 : r.parentNode;
    for (; a != null && a.hasAttribute("data-no-activator"); )
      a = a.parentNode;
    n = a;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function wc() {
  if (!Le) return ce(!1);
  const {
    ssr: e
  } = Lu();
  if (e) {
    const t = ce(!1);
    return Ut(() => {
      t.value = !0;
    }), t;
  } else
    return ce(!0);
}
const _c = M({
  eager: Boolean
}, "lazy");
function Sc(e, t) {
  const n = ce(!1), i = R(() => n.value || e.eager || t.value);
  re(t, () => n.value = !0);
  function r() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: i,
    onAfterLeave: r
  };
}
function vr() {
  const t = Ee("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Jr = Symbol.for("vuetify:stack"), Xt = Ht([]);
function Ec(e, t, n) {
  const i = Ee("useStack"), r = !n, a = be(Jr, void 0), o = Ht({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ze(Jr, o);
  const s = ce(Number(dt(t)));
  Mt(e, () => {
    var d;
    const c = (d = Xt.at(-1)) == null ? void 0 : d[1];
    s.value = c ? c + 10 : Number(dt(t)), r && Xt.push([i.uid, s.value]), a == null || a.activeChildren.add(i.uid), Ye(() => {
      if (r) {
        const f = me(Xt).findIndex((g) => g[0] === i.uid);
        Xt.splice(f, 1);
      }
      a == null || a.activeChildren.delete(i.uid);
    });
  });
  const u = ce(!0);
  r && $t(() => {
    var d;
    const c = ((d = Xt.at(-1)) == null ? void 0 : d[0]) === i.uid;
    setTimeout(() => u.value = c);
  });
  const l = R(() => !o.activeChildren.size);
  return {
    globalTop: er(u),
    localTop: l,
    stackStyles: R(() => ({
      zIndex: s.value
    }))
  };
}
function Cc(e) {
  return {
    teleportTarget: A(() => {
      const n = e();
      if (n === !0 || !Le) return;
      const i = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (i == null) {
        $n(`Unable to locate target ${n}`);
        return;
      }
      let r = [...i.children].find((a) => a.matches(".v-overlay-container"));
      return r || (r = document.createElement("div"), r.className = "v-overlay-container", i.appendChild(r)), r;
    })
  };
}
function xc() {
  return !0;
}
function Ho(e, t, n) {
  if (!e || Mo(e, n) === !1) return !1;
  const i = za(t);
  if (typeof ShadowRoot < "u" && i instanceof ShadowRoot && i.host === e.target) return !1;
  const r = (typeof n.value == "object" && n.value.include || (() => []))();
  return r.push(t), !r.some((a) => a == null ? void 0 : a.contains(e.target));
}
function Mo(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || xc)(e);
}
function Ac(e, t, n) {
  const i = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Ho(e, t, n) && setTimeout(() => {
    Mo(e, n) && i && i(e);
  }, 0);
}
function Qr(e, t) {
  const n = za(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const ea = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (r) => Ac(r, e, t), i = (r) => {
      e._clickOutside.lastMousedownWasOutside = Ho(r, e, t);
    };
    Qr(e, (r) => {
      r.addEventListener("click", n, !0), r.addEventListener("mousedown", i, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: i
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Qr(e, (n) => {
      var a;
      if (!n || !((a = e._clickOutside) != null && a[t.instance.$.uid])) return;
      const {
        onClick: i,
        onMousedown: r
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", i, !0), n.removeEventListener("mousedown", r, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function Pc(e) {
  const {
    modelValue: t,
    color: n,
    ...i
  } = e;
  return L(At, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && B("div", ie({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, i), null)]
  });
}
const gr = M({
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
  ...pc(),
  ...he(),
  ...Pt(),
  ..._c(),
  ...rc(),
  ...cc(),
  ...Re(),
  ...zn()
}, "VOverlay"), Rn = ee()({
  name: "VOverlay",
  directives: {
    vClickOutside: ea
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...gr()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: i,
      emit: r
    } = t;
    const a = Ee("VOverlay"), o = q(), s = q(), u = q(), l = qe(e, "modelValue"), c = A({
      get: () => l.value,
      set: (X) => {
        X && e.disabled || (l.value = X);
      }
    }), {
      themeClasses: d
    } = Ue(e), {
      rtlClasses: f,
      isRtl: g
    } = jt(), {
      hasContent: m,
      onAfterLeave: h
    } = Sc(e, c), p = pt(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: v,
      localTop: b,
      stackStyles: y
    } = Ec(c, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: w,
      activatorRef: x,
      target: _,
      targetEl: P,
      targetRef: C,
      activatorEvents: N,
      contentEvents: D,
      scrimEvents: H
    } = yc(e, {
      isActive: c,
      isTop: b,
      contentEl: u
    }), {
      teleportTarget: S
    } = Cc(() => {
      var we, je, at;
      const X = e.attach || e.contained;
      if (X) return X;
      const pe = ((we = w == null ? void 0 : w.value) == null ? void 0 : we.getRootNode()) || ((at = (je = a.proxy) == null ? void 0 : je.$el) == null ? void 0 : at.getRootNode());
      return pe instanceof ShadowRoot ? pe : !1;
    }), {
      dimensionStyles: E
    } = Tt(e), k = wc(), {
      scopeId: I
    } = vr();
    re(() => e.disabled, (X) => {
      X && (c.value = !1);
    });
    const {
      contentStyles: O,
      updateLocation: j
    } = ac(e, {
      isRtl: g,
      contentEl: u,
      target: _,
      isActive: c
    });
    dc(e, {
      root: o,
      contentEl: u,
      targetEl: P,
      isActive: c,
      updateLocation: j
    });
    function K(X) {
      r("click:outside", X), e.persistent ? W() : c.value = !1;
    }
    function se(X) {
      return c.value && v.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || X.target === s.value || X instanceof MouseEvent && X.shadowTarget === s.value);
    }
    Le && re(c, (X) => {
      X ? window.addEventListener("keydown", z) : window.removeEventListener("keydown", z);
    }, {
      immediate: !0
    }), it(() => {
      Le && window.removeEventListener("keydown", z);
    });
    function z(X) {
      var pe, we, je;
      X.key === "Escape" && v.value && ((pe = u.value) != null && pe.contains(document.activeElement) || r("keydown", X), e.persistent ? W() : (c.value = !1, (we = u.value) != null && we.contains(document.activeElement) && ((je = w.value) == null || je.focus())));
    }
    function fe(X) {
      X.key === "Escape" && !v.value || r("keydown", X);
    }
    const Te = lu();
    Mt(() => e.closeOnBack, () => {
      uu(Te, (X) => {
        v.value && c.value ? (X(!1), e.persistent ? W() : c.value = !1) : X();
      });
    });
    const le = q();
    re(() => c.value && (e.absolute || e.contained) && S.value == null, (X) => {
      if (X) {
        const pe = _l(o.value);
        pe && pe !== document.scrollingElement && (le.value = pe.scrollTop);
      }
    });
    function W() {
      e.noClickAnimation || u.value && Ot(u.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Bn
      });
    }
    function de() {
      r("afterEnter");
    }
    function ke() {
      h(), r("afterLeave");
    }
    return oe(() => {
      var X;
      return B(_e, null, [(X = n.activator) == null ? void 0 : X.call(n, {
        isActive: c.value,
        targetRef: C,
        props: ie({
          ref: x
        }, N.value, e.activatorProps)
      }), k.value && m.value && L(Is, {
        disabled: !S.value,
        to: S.value
      }, {
        default: () => [B("div", ie({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": c.value,
            "v-overlay--contained": e.contained
          }, d.value, f.value, e.class],
          style: [y.value, {
            "--v-overlay-opacity": e.opacity,
            top: Y(le.value)
          }, e.style],
          ref: o,
          onKeydown: fe
        }, I, i), [L(Pc, ie({
          color: p,
          modelValue: c.value && !!e.scrim,
          ref: s
        }, H.value), null), L(vt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: _.value,
          onAfterEnter: de,
          onAfterLeave: ke
        }, {
          default: () => {
            var pe;
            return [tt(B("div", ie({
              ref: u,
              class: ["v-overlay__content", e.contentClass],
              style: [E.value, O.value]
            }, D.value, e.contentProps), [(pe = n.default) == null ? void 0 : pe.call(n, {
              isActive: c
            })]), [[ln, c.value], [ea, {
              handler: K,
              closeConditional: se,
              include: () => [w.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: w,
      scrimEl: s,
      target: _,
      animateClick: W,
      contentEl: u,
      globalTop: v,
      localTop: b,
      updateLocation: j
    };
  }
}), ui = Symbol("Forwarded refs");
function ci(e, t) {
  let n = e;
  for (; n; ) {
    const i = Reflect.getOwnPropertyDescriptor(n, t);
    if (i) return i;
    n = Object.getPrototypeOf(n);
  }
}
function mr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return e[ui] = n, new Proxy(e, {
    get(r, a) {
      if (Reflect.has(r, a))
        return Reflect.get(r, a);
      if (!(typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))) {
        for (const o of n)
          if (o.value && Reflect.has(o.value, a)) {
            const s = Reflect.get(o.value, a);
            return typeof s == "function" ? s.bind(o.value) : s;
          }
      }
    },
    has(r, a) {
      if (Reflect.has(r, a))
        return !0;
      if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__")) return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, a))
          return !0;
      return !1;
    },
    set(r, a, o) {
      if (Reflect.has(r, a))
        return Reflect.set(r, a, o);
      if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__")) return !1;
      for (const s of n)
        if (s.value && Reflect.has(s.value, a))
          return Reflect.set(s.value, a, o);
      return !1;
    },
    getOwnPropertyDescriptor(r, a) {
      var s;
      const o = Reflect.getOwnPropertyDescriptor(r, a);
      if (o) return o;
      if (!(typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))) {
        for (const u of n) {
          if (!u.value) continue;
          const l = ci(u.value, a) ?? ("_" in u.value ? ci((s = u.value._) == null ? void 0 : s.setupState, a) : void 0);
          if (l) return l;
        }
        for (const u of n) {
          const l = u.value && u.value[ui];
          if (!l) continue;
          const c = l.slice();
          for (; c.length; ) {
            const d = c.shift(), f = ci(d.value, a);
            if (f) return f;
            const g = d.value && d.value[ui];
            g && c.push(...g);
          }
        }
      }
    }
  });
}
const Tc = M({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...jn(gr({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Tl
    }
  }), ["absolute"])
}, "VMenu"), Bc = ee()({
  name: "VMenu",
  props: Tc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = qe(e, "modelValue"), {
      scopeId: r
    } = vr(), {
      isRtl: a
    } = jt(), o = Gt(), s = R(() => e.id || `v-menu-${o}`), u = q(), l = be(Ni, null), c = ce(/* @__PURE__ */ new Set());
    Ze(Ni, {
      register() {
        c.value.add(o);
      },
      unregister() {
        c.value.delete(o);
      },
      closeParents(p) {
        setTimeout(() => {
          var v;
          !c.value.size && !e.persistent && (p == null || (v = u.value) != null && v.contentEl && !Xs(p, u.value.contentEl)) && (i.value = !1, l == null || l.closeParents());
        }, 40);
      }
    }), it(() => {
      l == null || l.unregister(), document.removeEventListener("focusin", d);
    }), Os(() => i.value = !1);
    async function d(p) {
      var y, w, x;
      const v = p.relatedTarget, b = p.target;
      await We(), i.value && v !== b && ((y = u.value) != null && y.contentEl) && // We're the topmost menu
      ((w = u.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, u.value.contentEl].includes(b) && // It isn't inside the menu body
      !u.value.contentEl.contains(b) && ((x = Ei(u.value.contentEl)[0]) == null || x.focus());
    }
    re(i, (p) => {
      p ? (l == null || l.register(), Le && document.addEventListener("focusin", d, {
        once: !0
      })) : (l == null || l.unregister(), Le && document.removeEventListener("focusin", d));
    }, {
      immediate: !0
    });
    function f(p) {
      l == null || l.closeParents(p);
    }
    function g(p) {
      var v, b, y, w, x;
      if (!e.disabled)
        if (p.key === "Tab" || p.key === "Enter" && !e.closeOnContentClick) {
          if (p.key === "Enter" && (p.target instanceof HTMLTextAreaElement || p.target instanceof HTMLInputElement && p.target.closest("form"))) return;
          p.key === "Enter" && p.preventDefault(), Da(Ei((v = u.value) == null ? void 0 : v.contentEl, !1), p.shiftKey ? "prev" : "next", (P) => P.tabIndex >= 0) || (i.value = !1, (y = (b = u.value) == null ? void 0 : b.activatorEl) == null || y.focus());
        } else e.submenu && p.key === (a.value ? "ArrowRight" : "ArrowLeft") && (i.value = !1, (x = (w = u.value) == null ? void 0 : w.activatorEl) == null || x.focus());
    }
    function m(p) {
      var b;
      if (e.disabled) return;
      const v = (b = u.value) == null ? void 0 : b.contentEl;
      v && i.value ? p.key === "ArrowDown" ? (p.preventDefault(), p.stopImmediatePropagation(), Jt(v, "next")) : p.key === "ArrowUp" ? (p.preventDefault(), p.stopImmediatePropagation(), Jt(v, "prev")) : e.submenu && (p.key === (a.value ? "ArrowRight" : "ArrowLeft") ? i.value = !1 : p.key === (a.value ? "ArrowLeft" : "ArrowRight") && (p.preventDefault(), Jt(v, "first"))) : (e.submenu ? p.key === (a.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(p.key)) && (i.value = !0, p.preventDefault(), setTimeout(() => setTimeout(() => m(p))));
    }
    const h = A(() => ie({
      "aria-haspopup": "menu",
      "aria-expanded": String(i.value),
      "aria-controls": s.value,
      onKeydown: m
    }, e.activatorProps));
    return oe(() => {
      const p = Rn.filterProps(e);
      return L(Rn, ie({
        ref: u,
        id: s.value,
        class: ["v-menu", e.class],
        style: e.style
      }, p, {
        modelValue: i.value,
        "onUpdate:modelValue": (v) => i.value = v,
        absolute: !0,
        activatorProps: h.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": f,
        onKeydown: g
      }, r), {
        activator: n.activator,
        default: function() {
          for (var v = arguments.length, b = new Array(v), y = 0; y < v; y++)
            b[y] = arguments[y];
          return L(ct, {
            root: "VMenu"
          }, {
            default: () => {
              var w;
              return [(w = n.default) == null ? void 0 : w.call(n, ...b)];
            }
          });
        }
      });
    }), mr({
      id: s,
      ΨopenChildren: c
    }, u);
  }
}), Lc = M({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...he(),
  ...zn({
    transition: {
      component: Ya
    }
  })
}, "VCounter"), kc = ee()({
  name: "VCounter",
  functional: !0,
  props: Lc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = R(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return oe(() => L(vt, {
      transition: e.transition
    }, {
      default: () => [tt(B("div", {
        class: G(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: ne(e.style)
      }, [n.default ? n.default({
        counter: i.value,
        max: e.max,
        value: e.value
      }) : i.value]), [[ln, e.active]])]
    })), {};
  }
}), Ic = M({
  floating: Boolean,
  ...he()
}, "VFieldLabel"), yn = ee()({
  name: "VFieldLabel",
  props: Ic(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return oe(() => L(wu, {
      class: G(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: ne(e.style),
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Oc = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Fo = M({
  appendInnerIcon: Se,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: Se,
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
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: Se,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Oc.includes(e)
  },
  "onClick:clear": De(),
  "onClick:appendInner": De(),
  "onClick:prependInner": De(),
  ...he(),
  ...oo(),
  ...wt(),
  ...Re()
}, "VField"), ta = ee()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...wo(),
    ...Fo()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: i,
      slots: r
    } = t;
    const {
      themeClasses: a
    } = Ue(e), {
      loaderClasses: o
    } = so(e), {
      focusClasses: s,
      isFocused: u,
      focus: l,
      blur: c
    } = _o(e), {
      InputIcon: d
    } = bo(e), {
      roundedClasses: f
    } = _t(e), {
      rtlClasses: g
    } = jt(), m = R(() => e.dirty || e.active), h = R(() => !!(e.label || r.label)), p = R(() => !e.singleLine && h.value), v = Gt(), b = A(() => e.id || `input-${v}`), y = R(() => `${b.value}-messages`), w = q(), x = q(), _ = q(), P = A(() => ["plain", "underlined"].includes(e.variant)), C = A(() => e.error || e.disabled ? void 0 : m.value && u.value ? e.color : e.baseColor), N = A(() => {
      if (!(!e.iconColor || e.glow && !u.value))
        return e.iconColor === !0 ? C.value : e.iconColor;
    }), {
      backgroundColorClasses: D,
      backgroundColorStyles: H
    } = pt(() => e.bgColor), {
      textColorClasses: S,
      textColorStyles: E
    } = yt(C);
    re(m, (O) => {
      if (p.value) {
        const j = w.value.$el, K = x.value.$el;
        requestAnimationFrame(() => {
          const se = ar(j), z = K.getBoundingClientRect(), fe = z.x - se.x, Te = z.y - se.y - (se.height / 2 - z.height / 2), le = z.width / 0.75, W = Math.abs(le - se.width) > 1 ? {
            maxWidth: Y(le)
          } : void 0, de = getComputedStyle(j), ke = getComputedStyle(K), X = parseFloat(de.transitionDuration) * 1e3 || 150, pe = parseFloat(ke.getPropertyValue("--v-field-label-scale")), we = ke.getPropertyValue("color");
          j.style.visibility = "visible", K.style.visibility = "hidden", Ot(j, {
            transform: `translate(${fe}px, ${Te}px) scale(${pe})`,
            color: we,
            ...W
          }, {
            duration: X,
            easing: Bn,
            direction: O ? "normal" : "reverse"
          }).finished.then(() => {
            j.style.removeProperty("visibility"), K.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const k = A(() => ({
      isActive: m,
      isFocused: u,
      controlRef: _,
      blur: c,
      focus: l
    }));
    function I(O) {
      O.target !== document.activeElement && O.preventDefault();
    }
    return oe(() => {
      var fe, Te, le;
      const O = e.variant === "outlined", j = !!(r["prepend-inner"] || e.prependInnerIcon), K = !!(e.clearable || r.clear) && !e.disabled, se = !!(r["append-inner"] || e.appendInnerIcon || K), z = () => r.label ? r.label({
        ...k.value,
        label: e.label,
        props: {
          for: b.value
        }
      }) : e.label;
      return B("div", ie({
        class: ["v-field", {
          "v-field--active": m.value,
          "v-field--appended": se,
          "v-field--center-affix": e.centerAffix ?? !P.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": j,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !z(),
          [`v-field--variant-${e.variant}`]: !0
        }, a.value, D.value, s.value, o.value, f.value, g.value, e.class],
        style: [H.value, e.style],
        onClick: I
      }, n), [B("div", {
        class: "v-field__overlay"
      }, null), L(iu, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: r.loader
      }), j && B("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && L(d, {
        key: "prepend-icon",
        name: "prependInner",
        color: N.value
      }, null), (fe = r["prepend-inner"]) == null ? void 0 : fe.call(r, k.value)]), B("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && p.value && L(yn, {
        key: "floating-label",
        ref: x,
        class: G([S.value]),
        floating: !0,
        for: b.value,
        style: ne(E.value)
      }, {
        default: () => [z()]
      }), h.value && L(yn, {
        key: "label",
        ref: w,
        for: b.value
      }, {
        default: () => [z()]
      }), ((Te = r.default) == null ? void 0 : Te.call(r, {
        ...k.value,
        props: {
          id: b.value,
          class: "v-field__input",
          "aria-describedby": y.value
        },
        focus: l,
        blur: c
      })) ?? B("div", {
        id: b.value,
        class: "v-field__input",
        "aria-describedby": y.value
      }, null)]), K && L(Ll, {
        key: "clear"
      }, {
        default: () => [tt(B("div", {
          class: "v-field__clearable",
          onMousedown: (W) => {
            W.preventDefault(), W.stopPropagation();
          }
        }, [L(ct, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [r.clear ? r.clear({
            ...k.value,
            props: {
              onFocus: l,
              onBlur: c,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : L(d, {
            name: "clear",
            onFocus: l,
            onBlur: c,
            tabindex: -1
          }, null)]
        })]), [[ln, e.dirty]])]
      }), se && B("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(le = r["append-inner"]) == null ? void 0 : le.call(r, k.value), e.appendInnerIcon && L(d, {
        key: "append-icon",
        name: "appendInner",
        color: N.value
      }, null)]), B("div", {
        class: G(["v-field__outline", S.value]),
        style: ne(E.value)
      }, [O && B(_e, null, [B("div", {
        class: "v-field__outline__start"
      }, null), p.value && B("div", {
        class: "v-field__outline__notch"
      }, [L(yn, {
        ref: x,
        floating: !0,
        for: b.value
      }, {
        default: () => [z()]
      })]), B("div", {
        class: "v-field__outline__end"
      }, null)]), P.value && p.value && L(yn, {
        ref: x,
        floating: !0,
        for: b.value
      }, {
        default: () => [z()]
      })])]);
    }), {
      controlRef: _,
      fieldIconColor: N
    };
  }
}), Nc = ["color", "file", "time", "date", "datetime-local", "week", "month"], Rc = M({
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
  ...So(),
  ...Fo()
}, "VTextField"), Hc = ee()({
  name: "VTextField",
  directives: {
    vIntersect: kn
  },
  inheritAttrs: !1,
  props: Rc(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: i,
      slots: r
    } = t;
    const a = qe(e, "modelValue"), {
      isFocused: o,
      focus: s,
      blur: u
    } = _o(e), l = A(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), c = A(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), d = A(() => ["plain", "underlined"].includes(e.variant));
    function f(_, P) {
      var C, N;
      !e.autofocus || !_ || (N = (C = P[0].target) == null ? void 0 : C.focus) == null || N.call(C);
    }
    const g = q(), m = q(), h = q(), p = A(() => Nc.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function v() {
      o.value || s(), We(() => {
        var _;
        h.value !== document.activeElement && ((_ = h.value) == null || _.focus());
      });
    }
    function b(_) {
      i("mousedown:control", _), _.target !== h.value && (v(), _.preventDefault());
    }
    function y(_) {
      i("click:control", _);
    }
    function w(_, P) {
      _.stopPropagation(), v(), We(() => {
        a.value = null, P(), Va(e["onClick:clear"], _);
      });
    }
    function x(_) {
      var C;
      const P = _.target;
      if (a.value = P.value, (C = e.modelModifiers) != null && C.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const N = [P.selectionStart, P.selectionEnd];
        We(() => {
          P.selectionStart = N[0], P.selectionEnd = N[1];
        });
      }
    }
    return oe(() => {
      const _ = !!(r.counter || e.counter !== !1 && e.counter != null), P = !!(_ || r.details), [C, N] = Gs(n), {
        modelValue: D,
        ...H
      } = qr.filterProps(e), S = ta.filterProps(e);
      return L(qr, ie({
        ref: g,
        modelValue: a.value,
        "onUpdate:modelValue": (E) => a.value = E,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": d.value
        }, e.class],
        style: e.style
      }, C, H, {
        centerAffix: !d.value,
        focused: o.value
      }), {
        ...r,
        default: (E) => {
          let {
            id: k,
            isDisabled: I,
            isDirty: O,
            isReadonly: j,
            isValid: K,
            reset: se
          } = E;
          return L(ta, ie({
            ref: m,
            onMousedown: b,
            onClick: y,
            "onClick:clear": (z) => w(z, se),
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, S, {
            id: k.value,
            active: p.value || O.value,
            dirty: O.value || e.dirty,
            disabled: I.value,
            focused: o.value,
            error: K.value === !1
          }), {
            ...r,
            default: (z) => {
              let {
                props: {
                  class: fe,
                  ...Te
                }
              } = z;
              const le = tt(B("input", ie({
                ref: h,
                value: a.value,
                onInput: x,
                autofocus: e.autofocus,
                readonly: j.value,
                disabled: I.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: v,
                onBlur: u
              }, Te, N), null), [[kn, {
                handler: f
              }, null, {
                once: !0
              }]]);
              return B(_e, null, [e.prefix && B("span", {
                class: "v-text-field__prefix"
              }, [B("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), r.default ? B("div", {
                class: G(fe),
                "data-no-activator": ""
              }, [r.default(), le]) : Ns(le, {
                class: fe
              }), e.suffix && B("span", {
                class: "v-text-field__suffix"
              }, [B("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: P ? (E) => {
          var k;
          return B(_e, null, [(k = r.details) == null ? void 0 : k.call(r, E), _ && B(_e, null, [B("span", null, null), L(kc, {
            active: e.persistentCounter || o.value,
            value: l.value,
            max: c.value,
            disabled: e.disabled
          }, r.counter)])]);
        } : void 0
      });
    }), mr({}, g, m, h);
  }
}), Mc = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function Fc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return B("div", {
    class: G(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`])
  }, [t]);
}
function na(e) {
  const [t, n] = e.split("@");
  return Array.from({
    length: n
  }).map(() => Zn(t));
}
function Zn(e) {
  let t = [];
  if (!e) return t;
  const n = Mc[e];
  if (e !== n) {
    if (e.includes(",")) return ia(e);
    if (e.includes("@")) return na(e);
    n.includes(",") ? t = ia(n) : n.includes("@") ? t = na(n) : n && t.push(Zn(n));
  }
  return [Fc(e, t)];
}
function ia(e) {
  return e.replace(/\s/g, "").split(",").map(Zn);
}
const Vc = M({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...Pt(),
  ...fn(),
  ...Re()
}, "VSkeletonLoader"), Dc = ee()({
  name: "VSkeletonLoader",
  props: Vc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: i,
      backgroundColorStyles: r
    } = pt(() => e.color), {
      dimensionStyles: a
    } = Tt(e), {
      elevationClasses: o
    } = hn(e), {
      themeClasses: s
    } = Ue(e), {
      t: u
    } = qa(), l = A(() => Zn(mt(e.type).join(",")));
    return oe(() => {
      var f;
      const c = !n.default || e.loading, d = e.boilerplate || !c ? {} : {
        ariaLive: "polite",
        ariaLabel: u(e.loadingText),
        role: "alert"
      };
      return B("div", ie({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, s.value, i.value, o.value],
        style: [r.value, c ? a.value : {}]
      }, d), [c ? l.value : (f = n.default) == null ? void 0 : f.call(n)]);
    }), {};
  }
}), $c = M({
  id: String,
  interactive: Boolean,
  text: String,
  ...jn(gr({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: null
  }), ["absolute", "persistent"])
}, "VTooltip"), Uc = ee()({
  name: "VTooltip",
  props: $c(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = qe(e, "modelValue"), {
      scopeId: r
    } = vr(), a = Gt(), o = R(() => e.id || `v-tooltip-${a}`), s = q(), u = A(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), l = A(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = R(() => e.transition != null ? e.transition : i.value ? "scale-transition" : "fade-transition"), d = A(() => ie({
      "aria-describedby": o.value
    }, e.activatorProps));
    return oe(() => {
      const f = Rn.filterProps(e);
      return L(Rn, ie({
        ref: s,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: o.value
      }, f, {
        modelValue: i.value,
        "onUpdate:modelValue": (g) => i.value = g,
        transition: c.value,
        absolute: !0,
        location: u.value,
        origin: l.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: d.value,
        _disableGlobalStack: !0
      }, r), {
        activator: n.activator,
        default: function() {
          var p;
          for (var g = arguments.length, m = new Array(g), h = 0; h < g; h++)
            m[h] = arguments[h];
          return ((p = n.default) == null ? void 0 : p.call(n, ...m)) ?? e.text;
        }
      });
    }), mr({}, s);
  }
}), Gc = { class: "d-flex" }, jc = { class: "gs-alert-bar__content" }, zc = { class: "gs-alert-bar__icon" }, Wc = { class: "d-flex flex-column" }, qc = ["innerHTML"], Xc = ["innerHTML"], Zc = /* @__PURE__ */ Ae({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, n = A(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (i, r) => (U(), Q("div", {
      class: G(n.value),
      role: "alert"
    }, [
      B("div", Gc, [
        B("div", jc, [
          B("div", zc, [
            L(Ce(Oe), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          B("div", Wc, [
            i.title ? (U(), Q("span", {
              key: 0,
              class: "title",
              innerHTML: i.title
            }, null, 8, qc)) : He("", !0),
            B("span", {
              class: "message",
              innerHTML: i.message
            }, null, 8, Xc)
          ])
        ])
      ])
    ], 2));
  }
}), Ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, Yc = /* @__PURE__ */ Ge(Zc, [["__scopeId", "data-v-5fb92636"]]), Kc = {
  key: 1,
  class: "text"
}, Jc = /* @__PURE__ */ Ae({
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
    const t = e, n = A(() => t.href ? "a" : t.tag || "button"), i = A(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), r = A(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), a = A(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (o, s) => tt((U(), Ve(Un(n.value), {
      class: G(r.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: ne({ width: o.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: ge(() => [
        t.icon && !t.loading ? (U(), Ve(Ce(Oe), {
          key: 0,
          class: "icon"
        }, {
          default: ge(() => [
            Nt(ve(t.icon), 1)
          ]),
          _: 1
        })) : He("", !0),
        o.$slots.default ? (U(), Q("span", Kc, [
          Je(o.$slots, "default", {}, void 0, !0)
        ])) : He("", !0),
        t.loading ? (U(), Ve(Ce(io), {
          key: 2,
          size: a.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : He("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [On, i.value]
    ]);
  }
}), Qc = /* @__PURE__ */ Ge(Jc, [["__scopeId", "data-v-c9c252f8"]]), ed = Ae({
  name: "GsFilter",
  emits: ["update:modelValue"],
  methods: {
    searchByCategory(e) {
      this.$emit("update:modelValue", e);
    }
  },
  props: {
    modelValue: {
      type: String
    },
    categories: {
      type: Array,
      default: () => []
    }
  }
}), td = { class: "filter-button-list" }, nd = ["onClick"], id = { class: "filter-button-title" };
function rd(e, t, n, i, r, a) {
  return U(), Q("div", td, [
    (U(!0), Q(_e, null, Ct(e.categories, (o) => (U(), Q("button", {
      key: o.value,
      class: G(["filter-button", { "is-active": o.value === e.modelValue }]),
      onClick: Rs((s) => e.searchByCategory(o.value), ["prevent"])
    }, [
      B("span", id, ve(o.title), 1)
    ], 10, nd))), 128))
  ]);
}
const ad = /* @__PURE__ */ Ge(ed, [["render", rd], ["__scopeId", "data-v-e71f6436"]]), od = Ae({
  name: "GsTabs",
  props: {
    tabs: {
      type: Array,
      required: !0
    },
    modelValue: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  methods: {
    selectTab(e) {
      this.$emit("update:modelValue", e.value);
    }
  }
}), sd = { class: "gs-tabs" }, ld = ["disabled", "onClick"];
function ud(e, t, n, i, r, a) {
  return U(), Q("div", sd, [
    (U(!0), Q(_e, null, Ct(e.tabs, (o, s) => (U(), Q("button", {
      key: s,
      class: G(["gs-tab", { active: e.modelValue === o.value }]),
      disabled: o.disabled,
      onClick: (u) => e.selectTab(o)
    }, ve(o.label), 11, ld))), 128))
  ]);
}
const cd = /* @__PURE__ */ Ge(od, [["render", ud], ["__scopeId", "data-v-b020e60d"]]), dd = ["src"], fd = /* @__PURE__ */ Ae({
  name: "GsTag",
  __name: "GsTag",
  props: {
    label: {},
    backgroundColor: { default: "pastel-green" },
    icon: { default: void 0 },
    bold: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = A(() => t.backgroundColor === "black" ? "var(--ui-white)" : "var(--ui-black)"), i = A(() => {
      switch (t.backgroundColor) {
        case "black":
          return "var(--ui-white)";
        case "grey":
          return "var(--ui-black)";
        default:
          return "var(--ui-green)";
      }
    }), r = A(() => {
      switch (t.backgroundColor) {
        case "black":
          return "var(--ui-black)";
        case "grey":
          return "var(--grey-scale-200)";
        case "beige":
          return "var(--ui-beige)";
        case "emerald-green":
          return "var(--ui-emerald-green)";
        default:
          return "var(--project-pastel-green)";
      }
    });
    return (a, o) => (U(), Q("div", {
      style: ne({
        backgroundColor: `${r.value}`,
        gap: a.label ? "4px" : "0"
      }),
      class: "gs-tag"
    }, [
      a.icon && a.icon.startsWith("mdi") ? (U(), Ve(Oe, {
        key: 0,
        icon: a.icon,
        size: "16px",
        style: ne({ color: i.value }),
        class: "gs-tag__icon"
      }, null, 8, ["icon", "style"])) : a.icon && !a.icon.startsWith("mdi") ? (U(), Q("img", {
        key: 1,
        src: a.icon,
        style: { width: "16px" },
        alt: "",
        class: "gs-tag__icon"
      }, null, 8, dd)) : He("", !0),
      B("span", {
        style: ne({ color: n.value, fontWeight: a.bold ? "bold" : "normal" }),
        class: "gs-tag__label"
      }, ve(a.label), 5)
    ], 4));
  }
}), hd = /* @__PURE__ */ Ge(fd, [["__scopeId", "data-v-6b4861a9"]]), vd = /* @__PURE__ */ Ae({
  name: "GsDivider",
  __name: "GsDivider",
  props: {
    color: { default: "grey200" },
    length: { default: "100%" },
    thickness: { default: "thick" },
    margin: { default: "0" }
  },
  setup(e) {
    const t = e, n = A(() => {
      switch (t.color) {
        case "grey250":
          return "var(--grey-scale-250)";
        case "grey800":
          return "var(--grey-scale-800)";
        case "green":
          return "var(--ui-green)";
        default:
          return "var(--grey-scale-200)";
      }
    });
    return (i, r) => (U(), Q("hr", {
      style: ne({
        borderColor: n.value,
        width: t.length,
        borderTopWidth: t.thickness === "thick" ? "1px" : "0px",
        margin: `${t.margin} 0`
      }),
      "aria-orientation": "horizontal",
      class: "gs-divider",
      role: "separator"
    }, null, 4));
  }
}), gd = /* @__PURE__ */ Ge(vd, [["__scopeId", "data-v-77a02199"]]);
/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ri = 9e15, St = 1e9, Hi = "0123456789abcdef", Hn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Mn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Mi = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -9e15,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ri,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Vo, ut, $ = !0, Yn = "[DecimalError] ", bt = Yn + "Invalid argument: ", Do = Yn + "Precision limit exceeded", $o = Yn + "crypto unavailable", Uo = "[object Decimal]", Pe = Math.floor, ye = Math.pow, md = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, pd = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, yd = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Go = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Xe = 1e7, V = 7, bd = 9007199254740991, wd = Hn.length - 1, Fi = Mn.length - 1, T = { toStringTag: Uo };
T.absoluteValue = T.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), F(e);
};
T.ceil = function() {
  return F(new this.constructor(this), this.e + 1, 2);
};
T.clampedTo = T.clamp = function(e, t) {
  var n, i = this, r = i.constructor;
  if (e = new r(e), t = new r(t), !e.s || !t.s) return new r(NaN);
  if (e.gt(t)) throw Error(bt + t);
  return n = i.cmp(e), n < 0 ? e : i.cmp(t) > 0 ? t : new r(i);
};
T.comparedTo = T.cmp = function(e) {
  var t, n, i, r, a = this, o = a.d, s = (e = new a.constructor(e)).d, u = a.s, l = e.s;
  if (!o || !s)
    return !u || !l ? NaN : u !== l ? u : o === s ? 0 : !o ^ u < 0 ? 1 : -1;
  if (!o[0] || !s[0]) return o[0] ? u : s[0] ? -l : 0;
  if (u !== l) return u;
  if (a.e !== e.e) return a.e > e.e ^ u < 0 ? 1 : -1;
  for (i = o.length, r = s.length, t = 0, n = i < r ? i : r; t < n; ++t)
    if (o[t] !== s[t]) return o[t] > s[t] ^ u < 0 ? 1 : -1;
  return i === r ? 0 : i > r ^ u < 0 ? 1 : -1;
};
T.cosine = T.cos = function() {
  var e, t, n = this, i = n.constructor;
  return n.d ? n.d[0] ? (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + V, i.rounding = 1, n = _d(i, Xo(i, n)), i.precision = e, i.rounding = t, F(ut == 2 || ut == 3 ? n.neg() : n, e, t, !0)) : new i(1) : new i(NaN);
};
T.cubeRoot = T.cbrt = function() {
  var e, t, n, i, r, a, o, s, u, l, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for ($ = !1, a = c.s * ye(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (n = xe(c.d), e = c.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = ye(n, 1 / 3), e = Pe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), i = new d(n), i.s = c.s) : i = new d(a.toString()), o = (e = d.precision) + 3; ; )
    if (s = i, u = s.times(s).times(s), l = u.plus(c), i = ae(l.plus(c).times(s), l.plus(u), o + 2, 1), xe(s.d).slice(0, o) === (n = xe(i.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && (F(s, e + 1, 0), s.times(s).times(s).eq(c))) {
          i = s;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (F(i, e + 1, 1), t = !i.times(i).times(i).eq(c));
        break;
      }
  return $ = !0, F(i, e, d.rounding, t);
};
T.decimalPlaces = T.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - Pe(this.e / V)) * V, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
T.dividedBy = T.div = function(e) {
  return ae(this, new this.constructor(e));
};
T.dividedToIntegerBy = T.divToInt = function(e) {
  var t = this, n = t.constructor;
  return F(ae(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
T.equals = T.eq = function(e) {
  return this.cmp(e) === 0;
};
T.floor = function() {
  return F(new this.constructor(this), this.e + 1, 3);
};
T.greaterThan = T.gt = function(e) {
  return this.cmp(e) > 0;
};
T.greaterThanOrEqualTo = T.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
T.hyperbolicCosine = T.cosh = function() {
  var e, t, n, i, r, a = this, o = a.constructor, s = new o(1);
  if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return s;
  n = o.precision, i = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), t = (1 / Jn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = Ft(o, 1, a.times(t), new o(1), !0);
  for (var u, l = e, c = new o(8); l--; )
    u = a.times(a), a = s.minus(u.times(c.minus(u.times(c))));
  return F(a, o.precision = n, o.rounding = i, !0);
};
T.hyperbolicSine = T.sinh = function() {
  var e, t, n, i, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero()) return new a(r);
  if (t = a.precision, n = a.rounding, a.precision = t + Math.max(r.e, r.sd()) + 4, a.rounding = 1, i = r.d.length, i < 3)
    r = Ft(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(i), e = e > 16 ? 16 : e | 0, r = r.times(1 / Jn(5, e)), r = Ft(a, 2, r, r, !0);
    for (var o, s = new a(5), u = new a(16), l = new a(20); e--; )
      o = r.times(r), r = r.times(s.plus(o.times(u.times(o).plus(l))));
  }
  return a.precision = t, a.rounding = n, F(r, t, n, !0);
};
T.hyperbolicTangent = T.tanh = function() {
  var e, t, n = this, i = n.constructor;
  return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 7, i.rounding = 1, ae(n.sinh(), n.cosh(), i.precision = e, i.rounding = t)) : new i(n.s);
};
T.inverseCosine = T.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), i = t.precision, r = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? Qe(t, i, r) : new t(0) : new t(NaN) : e.isZero() ? Qe(t, i + 4, r).times(0.5) : (t.precision = i + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = i, t.rounding = r, e.times(2));
};
T.inverseHyperbolicCosine = T.acosh = function() {
  var e, t, n = this, i = n.constructor;
  return n.lte(1) ? new i(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = i.precision, t = i.rounding, i.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, i.rounding = 1, $ = !1, n = n.times(n).minus(1).sqrt().plus(n), $ = !0, i.precision = e, i.rounding = t, n.ln()) : new i(n);
};
T.inverseHyperbolicSine = T.asinh = function() {
  var e, t, n = this, i = n.constructor;
  return !n.isFinite() || n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, i.rounding = 1, $ = !1, n = n.times(n).plus(1).sqrt().plus(n), $ = !0, i.precision = e, i.rounding = t, n.ln());
};
T.inverseHyperbolicTangent = T.atanh = function() {
  var e, t, n, i, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, t = a.rounding, i = r.sd(), Math.max(i, e) < 2 * -r.e - 1 ? F(new a(r), e, t, !0) : (a.precision = n = i - r.e, r = ae(r.plus(1), new a(1).minus(r), n + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = t, r.times(0.5))) : new a(NaN);
};
T.inverseSine = T.asin = function() {
  var e, t, n, i, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (t = r.abs().cmp(1), n = a.precision, i = a.rounding, t !== -1 ? t === 0 ? (e = Qe(a, n + 4, i).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = n + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = i, r.times(2)));
};
T.inverseTangent = T.atan = function() {
  var e, t, n, i, r, a, o, s, u, l = this, c = l.constructor, d = c.precision, f = c.rounding;
  if (l.isFinite()) {
    if (l.isZero())
      return new c(l);
    if (l.abs().eq(1) && d + 4 <= Fi)
      return o = Qe(c, d + 4, f).times(0.25), o.s = l.s, o;
  } else {
    if (!l.s) return new c(NaN);
    if (d + 4 <= Fi)
      return o = Qe(c, d + 4, f).times(0.5), o.s = l.s, o;
  }
  for (c.precision = s = d + 10, c.rounding = 1, n = Math.min(28, s / V + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for ($ = !1, t = Math.ceil(s / V), i = 1, u = l.times(l), o = new c(l), r = l; e !== -1; )
    if (r = r.times(u), a = o.minus(r.div(i += 2)), r = r.times(u), o = a.plus(r.div(i += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--; ) ;
  return n && (o = o.times(2 << n - 1)), $ = !0, F(o, c.precision = d, c.rounding = f, !0);
};
T.isFinite = function() {
  return !!this.d;
};
T.isInteger = T.isInt = function() {
  return !!this.d && Pe(this.e / V) > this.d.length - 2;
};
T.isNaN = function() {
  return !this.s;
};
T.isNegative = T.isNeg = function() {
  return this.s < 0;
};
T.isPositive = T.isPos = function() {
  return this.s > 0;
};
T.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
T.lessThan = T.lt = function(e) {
  return this.cmp(e) < 0;
};
T.lessThanOrEqualTo = T.lte = function(e) {
  return this.cmp(e) < 1;
};
T.logarithm = T.log = function(e) {
  var t, n, i, r, a, o, s, u, l = this, c = l.constructor, d = c.precision, f = c.rounding, g = 5;
  if (e == null)
    e = new c(10), t = !0;
  else {
    if (e = new c(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1)) return new c(NaN);
    t = e.eq(10);
  }
  if (n = l.d, l.s < 0 || !n || !n[0] || l.eq(1))
    return new c(n && !n[0] ? -1 / 0 : l.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (t)
    if (n.length > 1)
      a = !0;
    else {
      for (r = n[0]; r % 10 === 0; ) r /= 10;
      a = r !== 1;
    }
  if ($ = !1, s = d + g, o = gt(l, s), i = t ? Fn(c, s + 10) : gt(e, s), u = ae(o, i, s, 1), an(u.d, r = d, f))
    do
      if (s += 10, o = gt(l, s), i = t ? Fn(c, s + 10) : gt(e, s), u = ae(o, i, s, 1), !a) {
        +xe(u.d).slice(r + 1, r + 15) + 1 == 1e14 && (u = F(u, d + 1, 0));
        break;
      }
    while (an(u.d, r += 10, f));
  return $ = !0, F(u, d, f);
};
T.minus = T.sub = function(e) {
  var t, n, i, r, a, o, s, u, l, c, d, f, g = this, m = g.constructor;
  if (e = new m(e), !g.d || !e.d)
    return !g.s || !e.s ? e = new m(NaN) : g.d ? e.s = -e.s : e = new m(e.d || g.s !== e.s ? g : NaN), e;
  if (g.s != e.s)
    return e.s = -e.s, g.plus(e);
  if (l = g.d, f = e.d, s = m.precision, u = m.rounding, !l[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (l[0]) e = new m(g);
    else return new m(u === 3 ? -0 : 0);
    return $ ? F(e, s, u) : e;
  }
  if (n = Pe(e.e / V), c = Pe(g.e / V), l = l.slice(), a = c - n, a) {
    for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = c, o = l.length), i = Math.max(Math.ceil(s / V), o) + 2, a > i && (a = i, t.length = 1), t.reverse(), i = a; i--; ) t.push(0);
    t.reverse();
  } else {
    for (i = l.length, o = f.length, d = i < o, d && (o = i), i = 0; i < o; i++)
      if (l[i] != f[i]) {
        d = l[i] < f[i];
        break;
      }
    a = 0;
  }
  for (d && (t = l, l = f, f = t, e.s = -e.s), o = l.length, i = f.length - o; i > 0; --i) l[o++] = 0;
  for (i = f.length; i > a; ) {
    if (l[--i] < f[i]) {
      for (r = i; r && l[--r] === 0; ) l[r] = Xe - 1;
      --l[r], l[i] += Xe;
    }
    l[i] -= f[i];
  }
  for (; l[--o] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (e.d = l, e.e = Kn(l, n), $ ? F(e, s, u) : e) : new m(u === 3 ? -0 : 0);
};
T.modulo = T.mod = function(e) {
  var t, n = this, i = n.constructor;
  return e = new i(e), !n.d || !e.s || e.d && !e.d[0] ? new i(NaN) : !e.d || n.d && !n.d[0] ? F(new i(n), i.precision, i.rounding) : ($ = !1, i.modulo == 9 ? (t = ae(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = ae(n, e, 0, i.modulo, 1), t = t.times(e), $ = !0, n.minus(t));
};
T.naturalExponential = T.exp = function() {
  return Vi(this);
};
T.naturalLogarithm = T.ln = function() {
  return gt(this);
};
T.negated = T.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, F(e);
};
T.plus = T.add = function(e) {
  var t, n, i, r, a, o, s, u, l, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (l = d.d, c = e.d, s = f.precision, u = f.rounding, !l[0] || !c[0])
    return c[0] || (e = new f(d)), $ ? F(e, s, u) : e;
  if (a = Pe(d.e / V), i = Pe(e.e / V), l = l.slice(), r = a - i, r) {
    for (r < 0 ? (n = l, r = -r, o = c.length) : (n = c, i = a, o = l.length), a = Math.ceil(s / V), o = a > o ? a + 1 : o + 1, r > o && (r = o, n.length = 1), n.reverse(); r--; ) n.push(0);
    n.reverse();
  }
  for (o = l.length, r = c.length, o - r < 0 && (r = o, n = c, c = l, l = n), t = 0; r; )
    t = (l[--r] = l[r] + c[r] + t) / Xe | 0, l[r] %= Xe;
  for (t && (l.unshift(t), ++i), o = l.length; l[--o] == 0; ) l.pop();
  return e.d = l, e.e = Kn(l, i), $ ? F(e, s, u) : e;
};
T.precision = T.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(bt + e);
  return n.d ? (t = jo(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
T.round = function() {
  var e = this, t = e.constructor;
  return F(new t(e), e.e + 1, t.rounding);
};
T.sine = T.sin = function() {
  var e, t, n = this, i = n.constructor;
  return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + V, i.rounding = 1, n = Ed(i, Xo(i, n)), i.precision = e, i.rounding = t, F(ut > 2 ? n.neg() : n, e, t, !0)) : new i(NaN);
};
T.squareRoot = T.sqrt = function() {
  var e, t, n, i, r, a, o = this, s = o.d, u = o.e, l = o.s, c = o.constructor;
  if (l !== 1 || !s || !s[0])
    return new c(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
  for ($ = !1, l = Math.sqrt(+o), l == 0 || l == 1 / 0 ? (t = xe(s), (t.length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(t), u = Pe((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? t = "5e" + u : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), i = new c(t)) : i = new c(l.toString()), n = (u = c.precision) + 3; ; )
    if (a = i, i = a.plus(ae(o, a, n + 2, 1)).times(0.5), xe(a.d).slice(0, n) === (t = xe(i.d)).slice(0, n))
      if (t = t.slice(n - 3, n + 1), t == "9999" || !r && t == "4999") {
        if (!r && (F(a, u + 1, 0), a.times(a).eq(o))) {
          i = a;
          break;
        }
        n += 4, r = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (F(i, u + 1, 1), e = !i.times(i).eq(o));
        break;
      }
  return $ = !0, F(i, u, c.rounding, e);
};
T.tangent = T.tan = function() {
  var e, t, n = this, i = n.constructor;
  return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 10, i.rounding = 1, n = n.sin(), n.s = 1, n = ae(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0), i.precision = e, i.rounding = t, F(ut == 2 || ut == 4 ? n.neg() : n, e, t, !0)) : new i(NaN);
};
T.times = T.mul = function(e) {
  var t, n, i, r, a, o, s, u, l, c = this, d = c.constructor, f = c.d, g = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !g || !g[0])
    return new d(!e.s || f && !f[0] && !g || g && !g[0] && !f ? NaN : !f || !g ? e.s / 0 : e.s * 0);
  for (n = Pe(c.e / V) + Pe(e.e / V), u = f.length, l = g.length, u < l && (a = f, f = g, g = a, o = u, u = l, l = o), a = [], o = u + l, i = o; i--; ) a.push(0);
  for (i = l; --i >= 0; ) {
    for (t = 0, r = u + i; r > i; )
      s = a[r] + g[i] * f[r - i - 1] + t, a[r--] = s % Xe | 0, t = s / Xe | 0;
    a[r] = (a[r] + t) % Xe | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++n : a.shift(), e.d = a, e.e = Kn(a, n), $ ? F(e, d.precision, d.rounding) : e;
};
T.toBinary = function(e, t) {
  return pr(this, 2, e, t);
};
T.toDecimalPlaces = T.toDP = function(e, t) {
  var n = this, i = n.constructor;
  return n = new i(n), e === void 0 ? n : (Ne(e, 0, St), t === void 0 ? t = i.rounding : Ne(t, 0, 8), F(n, e + n.e + 1, t));
};
T.toExponential = function(e, t) {
  var n, i = this, r = i.constructor;
  return e === void 0 ? n = nt(i, !0) : (Ne(e, 0, St), t === void 0 ? t = r.rounding : Ne(t, 0, 8), i = F(new r(i), e + 1, t), n = nt(i, !0, e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
T.toFixed = function(e, t) {
  var n, i, r = this, a = r.constructor;
  return e === void 0 ? n = nt(r) : (Ne(e, 0, St), t === void 0 ? t = a.rounding : Ne(t, 0, 8), i = F(new a(r), e + r.e + 1, t), n = nt(i, !1, e + i.e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
T.toFraction = function(e) {
  var t, n, i, r, a, o, s, u, l, c, d, f, g = this, m = g.d, h = g.constructor;
  if (!m) return new h(g);
  if (l = n = new h(1), i = u = new h(0), t = new h(i), a = t.e = jo(m) - g.e - 1, o = a % V, t.d[0] = ye(10, o < 0 ? V + o : o), e == null)
    e = a > 0 ? t : l;
  else {
    if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(bt + s);
    e = s.gt(t) ? a > 0 ? t : l : s;
  }
  for ($ = !1, s = new h(xe(m)), c = h.precision, h.precision = a = m.length * V * 2; d = ae(s, t, 0, 1, 1), r = n.plus(d.times(i)), r.cmp(e) != 1; )
    n = i, i = r, r = l, l = u.plus(d.times(r)), u = r, r = t, t = s.minus(d.times(r)), s = r;
  return r = ae(e.minus(n), i, 0, 1, 1), u = u.plus(r.times(l)), n = n.plus(r.times(i)), u.s = l.s = g.s, f = ae(l, i, a, 1).minus(g).abs().cmp(ae(u, n, a, 1).minus(g).abs()) < 1 ? [l, i] : [u, n], h.precision = c, $ = !0, f;
};
T.toHexadecimal = T.toHex = function(e, t) {
  return pr(this, 16, e, t);
};
T.toNearest = function(e, t) {
  var n = this, i = n.constructor;
  if (n = new i(n), e == null) {
    if (!n.d) return n;
    e = new i(1), t = i.rounding;
  } else {
    if (e = new i(e), t === void 0 ? t = i.rounding : Ne(t, 0, 8), !n.d) return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? ($ = !1, n = ae(n, e, 0, t, 1).times(e), $ = !0, F(n)) : (e.s = n.s, n = e), n;
};
T.toNumber = function() {
  return +this;
};
T.toOctal = function(e, t) {
  return pr(this, 8, e, t);
};
T.toPower = T.pow = function(e) {
  var t, n, i, r, a, o, s = this, u = s.constructor, l = +(e = new u(e));
  if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new u(ye(+s, l));
  if (s = new u(s), s.eq(1)) return s;
  if (i = u.precision, a = u.rounding, e.eq(1)) return F(s, i, a);
  if (t = Pe(e.e / V), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= bd)
    return r = zo(u, s, n, i), e.s < 0 ? new u(1).div(r) : F(r, i, a);
  if (o = s.s, o < 0) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1) == 0 && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1)
      return s.s = o, s;
  }
  return n = ye(+s, l), t = n == 0 || !isFinite(n) ? Pe(l * (Math.log("0." + xe(s.d)) / Math.LN10 + s.e + 1)) : new u(n + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? o / 0 : 0) : ($ = !1, u.rounding = s.s = 1, n = Math.min(12, (t + "").length), r = Vi(e.times(gt(s, i + n)), i), r.d && (r = F(r, i + 5, 1), an(r.d, i, a) && (t = i + 10, r = F(Vi(e.times(gt(s, t + n)), t), t + 5, 1), +xe(r.d).slice(i + 1, i + 15) + 1 == 1e14 && (r = F(r, i + 1, 0)))), r.s = o, $ = !0, u.rounding = a, F(r, i, a));
};
T.toPrecision = function(e, t) {
  var n, i = this, r = i.constructor;
  return e === void 0 ? n = nt(i, i.e <= r.toExpNeg || i.e >= r.toExpPos) : (Ne(e, 1, St), t === void 0 ? t = r.rounding : Ne(t, 0, 8), i = F(new r(i), e, t), n = nt(i, e <= i.e || i.e <= r.toExpNeg, e)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
T.toSignificantDigits = T.toSD = function(e, t) {
  var n = this, i = n.constructor;
  return e === void 0 ? (e = i.precision, t = i.rounding) : (Ne(e, 1, St), t === void 0 ? t = i.rounding : Ne(t, 0, 8)), F(new i(n), e, t);
};
T.toString = function() {
  var e = this, t = e.constructor, n = nt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
T.truncated = T.trunc = function() {
  return F(new this.constructor(this), this.e + 1, 1);
};
T.valueOf = T.toJSON = function() {
  var e = this, t = e.constructor, n = nt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function xe(e) {
  var t, n, i, r = e.length - 1, a = "", o = e[0];
  if (r > 0) {
    for (a += o, t = 1; t < r; t++)
      i = e[t] + "", n = V - i.length, n && (a += ht(n)), a += i;
    o = e[t], i = o + "", n = V - i.length, n && (a += ht(n));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
function Ne(e, t, n) {
  if (e !== ~~e || e < t || e > n)
    throw Error(bt + e);
}
function an(e, t, n, i) {
  var r, a, o, s;
  for (a = e[0]; a >= 10; a /= 10) --t;
  return --t < 0 ? (t += V, r = 0) : (r = Math.ceil((t + 1) / V), t %= V), a = ye(10, V - t), s = e[r] % a | 0, i == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == ye(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[r + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (i || n < 4) && s == 9999 || !i && n > 3 && s == 4999) : o = ((i || n < 4) && s + 1 == a || !i && n > 3 && s + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == ye(10, t - 3) - 1, o;
}
function Sn(e, t, n) {
  for (var i, r = [0], a, o = 0, s = e.length; o < s; ) {
    for (a = r.length; a--; ) r[a] *= t;
    for (r[0] += Hi.indexOf(e.charAt(o++)), i = 0; i < r.length; i++)
      r[i] > n - 1 && (r[i + 1] === void 0 && (r[i + 1] = 0), r[i + 1] += r[i] / n | 0, r[i] %= n);
  }
  return r.reverse();
}
function _d(e, t) {
  var n, i, r;
  if (t.isZero()) return t;
  i = t.d.length, i < 32 ? (n = Math.ceil(i / 3), r = (1 / Jn(4, n)).toString()) : (n = 16, r = "2.3283064365386962890625e-10"), e.precision += n, t = Ft(e, 1, t.times(r), new e(1));
  for (var a = n; a--; ) {
    var o = t.times(t);
    t = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var ae = /* @__PURE__ */ function() {
  function e(i, r, a) {
    var o, s = 0, u = i.length;
    for (i = i.slice(); u--; )
      o = i[u] * r + s, i[u] = o % a | 0, s = o / a | 0;
    return s && i.unshift(s), i;
  }
  function t(i, r, a, o) {
    var s, u;
    if (a != o)
      u = a > o ? 1 : -1;
    else
      for (s = u = 0; s < a; s++)
        if (i[s] != r[s]) {
          u = i[s] > r[s] ? 1 : -1;
          break;
        }
    return u;
  }
  function n(i, r, a, o) {
    for (var s = 0; a--; )
      i[a] -= s, s = i[a] < r[a] ? 1 : 0, i[a] = s * o + i[a] - r[a];
    for (; !i[0] && i.length > 1; ) i.shift();
  }
  return function(i, r, a, o, s, u) {
    var l, c, d, f, g, m, h, p, v, b, y, w, x, _, P, C, N, D, H, S, E = i.constructor, k = i.s == r.s ? 1 : -1, I = i.d, O = r.d;
    if (!I || !I[0] || !O || !O[0])
      return new E(
        // Return NaN if either NaN, or both Infinity or 0.
        !i.s || !r.s || (I ? O && I[0] == O[0] : !O) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          I && I[0] == 0 || !O ? k * 0 : k / 0
        )
      );
    for (u ? (g = 1, c = i.e - r.e) : (u = Xe, g = V, c = Pe(i.e / g) - Pe(r.e / g)), H = O.length, N = I.length, v = new E(k), b = v.d = [], d = 0; O[d] == (I[d] || 0); d++) ;
    if (O[d] > (I[d] || 0) && c--, a == null ? (_ = a = E.precision, o = E.rounding) : s ? _ = a + (i.e - r.e) + 1 : _ = a, _ < 0)
      b.push(1), m = !0;
    else {
      if (_ = _ / g + 2 | 0, d = 0, H == 1) {
        for (f = 0, O = O[0], _++; (d < N || f) && _--; d++)
          P = f * u + (I[d] || 0), b[d] = P / O | 0, f = P % O | 0;
        m = f || d < N;
      } else {
        for (f = u / (O[0] + 1) | 0, f > 1 && (O = e(O, f, u), I = e(I, f, u), H = O.length, N = I.length), C = H, y = I.slice(0, H), w = y.length; w < H; ) y[w++] = 0;
        S = O.slice(), S.unshift(0), D = O[0], O[1] >= u / 2 && ++D;
        do
          f = 0, l = t(O, y, H, w), l < 0 ? (x = y[0], H != w && (x = x * u + (y[1] || 0)), f = x / D | 0, f > 1 ? (f >= u && (f = u - 1), h = e(O, f, u), p = h.length, w = y.length, l = t(h, y, p, w), l == 1 && (f--, n(h, H < p ? S : O, p, u))) : (f == 0 && (l = f = 1), h = O.slice()), p = h.length, p < w && h.unshift(0), n(y, h, w, u), l == -1 && (w = y.length, l = t(O, y, H, w), l < 1 && (f++, n(y, H < w ? S : O, w, u))), w = y.length) : l === 0 && (f++, y = [0]), b[d++] = f, l && y[0] ? y[w++] = I[C] || 0 : (y = [I[C]], w = 1);
        while ((C++ < N || y[0] !== void 0) && _--);
        m = y[0] !== void 0;
      }
      b[0] || b.shift();
    }
    if (g == 1)
      v.e = c, Vo = m;
    else {
      for (d = 1, f = b[0]; f >= 10; f /= 10) d++;
      v.e = d + c * g - 1, F(v, s ? a + v.e + 1 : a, o, m);
    }
    return v;
  };
}();
function F(e, t, n, i) {
  var r, a, o, s, u, l, c, d, f, g = e.constructor;
  e: if (t != null) {
    if (d = e.d, !d) return e;
    for (r = 1, s = d[0]; s >= 10; s /= 10) r++;
    if (a = t - r, a < 0)
      a += V, o = t, c = d[f = 0], u = c / ye(10, r - o - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / V), s = d.length, f >= s)
      if (i) {
        for (; s++ <= f; ) d.push(0);
        c = u = 0, r = 1, a %= V, o = a - V + 1;
      } else
        break e;
    else {
      for (c = s = d[f], r = 1; s >= 10; s /= 10) r++;
      a %= V, o = a - V + r, u = o < 0 ? 0 : c / ye(10, r - o - 1) % 10 | 0;
    }
    if (i = i || t < 0 || d[f + 1] !== void 0 || (o < 0 ? c : c % ye(10, r - o - 1)), l = n < 4 ? (u || i) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (n == 4 || i || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? o > 0 ? c / ye(10, r - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0])
      return d.length = 0, l ? (t -= e.e + 1, d[0] = ye(10, (V - t % V) % V), e.e = -t || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = ye(10, V - a), d[f] = o > 0 ? (c / ye(10, r - o) % ye(10, o) | 0) * s : 0), l)
      for (; ; )
        if (f == 0) {
          for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
          for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
          a != s && (e.e++, d[0] == Xe && (d[0] = 1));
          break;
        } else {
          if (d[f] += s, d[f] != Xe) break;
          d[f--] = 0, s = 1;
        }
    for (a = d.length; d[--a] === 0; ) d.pop();
  }
  return $ && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
}
function nt(e, t, n) {
  if (!e.isFinite()) return qo(e);
  var i, r = e.e, a = xe(e.d), o = a.length;
  return t ? (n && (i = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + ht(i) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + ht(-r - 1) + a, n && (i = n - o) > 0 && (a += ht(i))) : r >= o ? (a += ht(r + 1 - o), n && (i = n - r - 1) > 0 && (a = a + "." + ht(i))) : ((i = r + 1) < o && (a = a.slice(0, i) + "." + a.slice(i)), n && (i = n - o) > 0 && (r + 1 === o && (a += "."), a += ht(i))), a;
}
function Kn(e, t) {
  var n = e[0];
  for (t *= V; n >= 10; n /= 10) t++;
  return t;
}
function Fn(e, t, n) {
  if (t > wd)
    throw $ = !0, n && (e.precision = n), Error(Do);
  return F(new e(Hn), t, 1, !0);
}
function Qe(e, t, n) {
  if (t > Fi) throw Error(Do);
  return F(new e(Mn), t, n, !0);
}
function jo(e) {
  var t = e.length - 1, n = t * V + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function ht(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function zo(e, t, n, i) {
  var r, a = new e(1), o = Math.ceil(i / V + 4);
  for ($ = !1; ; ) {
    if (n % 2 && (a = a.times(t), aa(a.d, o) && (r = !0)), n = Pe(n / 2), n === 0) {
      n = a.d.length - 1, r && a.d[n] === 0 && ++a.d[n];
      break;
    }
    t = t.times(t), aa(t.d, o);
  }
  return $ = !0, a;
}
function ra(e) {
  return e.d[e.d.length - 1] & 1;
}
function Wo(e, t, n) {
  for (var i, r, a = new e(t[0]), o = 0; ++o < t.length; ) {
    if (r = new e(t[o]), !r.s) {
      a = r;
      break;
    }
    i = a.cmp(r), (i === n || i === 0 && a.s === n) && (a = r);
  }
  return a;
}
function Vi(e, t) {
  var n, i, r, a, o, s, u, l = 0, c = 0, d = 0, f = e.constructor, g = f.rounding, m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? ($ = !1, u = m) : u = t, s = new f(0.03125); e.e > -2; )
    e = e.times(s), d += 5;
  for (i = Math.log(ye(2, d)) / Math.LN10 * 2 + 5 | 0, u += i, n = a = o = new f(1), f.precision = u; ; ) {
    if (a = F(a.times(e), u, 1), n = n.times(++c), s = o.plus(ae(a, n, u, 1)), xe(s.d).slice(0, u) === xe(o.d).slice(0, u)) {
      for (r = d; r--; ) o = F(o.times(o), u, 1);
      if (t == null)
        if (l < 3 && an(o.d, u - i, g, l))
          f.precision = u += 10, n = a = s = new f(1), c = 0, l++;
        else
          return F(o, f.precision = m, g, $ = !0);
      else
        return f.precision = m, o;
    }
    o = s;
  }
}
function gt(e, t) {
  var n, i, r, a, o, s, u, l, c, d, f, g = 1, m = 10, h = e, p = h.d, v = h.constructor, b = v.rounding, y = v.precision;
  if (h.s < 0 || !p || !p[0] || !h.e && p[0] == 1 && p.length == 1)
    return new v(p && !p[0] ? -1 / 0 : h.s != 1 ? NaN : p ? 0 : h);
  if (t == null ? ($ = !1, c = y) : c = t, v.precision = c += m, n = xe(p), i = n.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; i < 7 && i != 1 || i == 1 && n.charAt(1) > 3; )
      h = h.times(e), n = xe(h.d), i = n.charAt(0), g++;
    a = h.e, i > 1 ? (h = new v("0." + n), a++) : h = new v(i + "." + n.slice(1));
  } else
    return l = Fn(v, c + 2, y).times(a + ""), h = gt(new v(i + "." + n.slice(1)), c - m).plus(l), v.precision = y, t == null ? F(h, y, b, $ = !0) : h;
  for (d = h, u = o = h = ae(h.minus(1), h.plus(1), c, 1), f = F(h.times(h), c, 1), r = 3; ; ) {
    if (o = F(o.times(f), c, 1), l = u.plus(ae(o, new v(r), c, 1)), xe(l.d).slice(0, c) === xe(u.d).slice(0, c))
      if (u = u.times(2), a !== 0 && (u = u.plus(Fn(v, c + 2, y).times(a + ""))), u = ae(u, new v(g), c, 1), t == null)
        if (an(u.d, c - m, b, s))
          v.precision = c += m, l = o = h = ae(d.minus(1), d.plus(1), c, 1), f = F(h.times(h), c, 1), r = s = 1;
        else
          return F(u, v.precision = y, b, $ = !0);
      else
        return v.precision = y, u;
    u = l, r += 2;
  }
}
function qo(e) {
  return String(e.s * e.s / 0);
}
function En(e, t) {
  var n, i, r;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +t.slice(i + 1), t = t.substring(0, i)) : n < 0 && (n = t.length), i = 0; t.charCodeAt(i) === 48; i++) ;
  for (r = t.length; t.charCodeAt(r - 1) === 48; --r) ;
  if (t = t.slice(i, r), t) {
    if (r -= i, e.e = n = n - i - 1, e.d = [], i = (n + 1) % V, n < 0 && (i += V), i < r) {
      for (i && e.d.push(+t.slice(0, i)), r -= V; i < r; ) e.d.push(+t.slice(i, i += V));
      t = t.slice(i), i = V - t.length;
    } else
      i -= r;
    for (; i--; ) t += "0";
    e.d.push(+t), $ && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Sd(e, t) {
  var n, i, r, a, o, s, u, l, c;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Go.test(t)) return En(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (pd.test(t))
    n = 16, t = t.toLowerCase();
  else if (md.test(t))
    n = 2;
  else if (yd.test(t))
    n = 8;
  else
    throw Error(bt + t);
  for (a = t.search(/p/i), a > 0 ? (u = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, i = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, r = zo(i, new i(n), a, a * 2)), l = Sn(t, n, Xe), c = l.length - 1, a = c; l[a] === 0; --a) l.pop();
  return a < 0 ? new i(e.s * 0) : (e.e = Kn(l, c), e.d = l, $ = !1, o && (e = ae(e, r, s * 4)), u && (e = e.times(Math.abs(u) < 54 ? ye(2, u) : gn.pow(2, u))), $ = !0, e);
}
function Ed(e, t) {
  var n, i = t.d.length;
  if (i < 3)
    return t.isZero() ? t : Ft(e, 2, t, t);
  n = 1.4 * Math.sqrt(i), n = n > 16 ? 16 : n | 0, t = t.times(1 / Jn(5, n)), t = Ft(e, 2, t, t);
  for (var r, a = new e(5), o = new e(16), s = new e(20); n--; )
    r = t.times(t), t = t.times(a.plus(r.times(o.times(r).minus(s))));
  return t;
}
function Ft(e, t, n, i, r) {
  var a, o, s, u, l = e.precision, c = Math.ceil(l / V);
  for ($ = !1, u = n.times(n), s = new e(i); ; ) {
    if (o = ae(s.times(u), new e(t++ * t++), l, 1), s = r ? i.plus(o) : i.minus(o), i = ae(o.times(u), new e(t++ * t++), l, 1), o = s.plus(i), o.d[c] !== void 0) {
      for (a = c; o.d[a] === s.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = s, s = i, i = o, o = a;
  }
  return $ = !0, o.d.length = c + 1, o;
}
function Jn(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function Xo(e, t) {
  var n, i = t.s < 0, r = Qe(e, e.precision, 1), a = r.times(0.5);
  if (t = t.abs(), t.lte(a))
    return ut = i ? 4 : 1, t;
  if (n = t.divToInt(r), n.isZero())
    ut = i ? 3 : 2;
  else {
    if (t = t.minus(n.times(r)), t.lte(a))
      return ut = ra(n) ? i ? 2 : 3 : i ? 4 : 1, t;
    ut = ra(n) ? i ? 1 : 4 : i ? 3 : 2;
  }
  return t.minus(r).abs();
}
function pr(e, t, n, i) {
  var r, a, o, s, u, l, c, d, f, g = e.constructor, m = n !== void 0;
  if (m ? (Ne(n, 1, St), i === void 0 ? i = g.rounding : Ne(i, 0, 8)) : (n = g.precision, i = g.rounding), !e.isFinite())
    c = qo(e);
  else {
    for (c = nt(e), o = c.indexOf("."), m ? (r = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : r = t, o >= 0 && (c = c.replace(".", ""), f = new g(1), f.e = c.length - o, f.d = Sn(nt(f), 10, r), f.e = f.d.length), d = Sn(c, 10, r), a = u = d.length; d[--u] == 0; ) d.pop();
    if (!d[0])
      c = m ? "0p+0" : "0";
    else {
      if (o < 0 ? a-- : (e = new g(e), e.d = d, e.e = a, e = ae(e, f, n, i, 0, r), d = e.d, a = e.e, l = Vo), o = d[n], s = r / 2, l = l || d[n + 1] !== void 0, l = i < 4 ? (o !== void 0 || l) && (i === 0 || i === (e.s < 0 ? 3 : 2)) : o > s || o === s && (i === 4 || l || i === 6 && d[n - 1] & 1 || i === (e.s < 0 ? 8 : 7)), d.length = n, l)
        for (; ++d[--n] > r - 1; )
          d[n] = 0, n || (++a, d.unshift(1));
      for (u = d.length; !d[u - 1]; --u) ;
      for (o = 0, c = ""; o < u; o++) c += Hi.charAt(d[o]);
      if (m) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --u; u % o; u++) c += "0";
            for (d = Sn(c, r, t), u = d.length; !d[u - 1]; --u) ;
            for (o = 1, c = "1."; o < u; o++) c += Hi.charAt(d[o]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; ) c = "0" + c;
        c = "0." + c;
      } else if (++a > u) for (a -= u; a--; ) c += "0";
      else a < u && (c = c.slice(0, a) + "." + c.slice(a));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function aa(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Cd(e) {
  return new this(e).abs();
}
function xd(e) {
  return new this(e).acos();
}
function Ad(e) {
  return new this(e).acosh();
}
function Pd(e, t) {
  return new this(e).plus(t);
}
function Td(e) {
  return new this(e).asin();
}
function Bd(e) {
  return new this(e).asinh();
}
function Ld(e) {
  return new this(e).atan();
}
function kd(e) {
  return new this(e).atanh();
}
function Id(e, t) {
  e = new this(e), t = new this(t);
  var n, i = this.precision, r = this.rounding, a = i + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Qe(this, a, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Qe(this, i, r) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Qe(this, a, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(ae(e, t, a, 1)), t = Qe(this, a, 1), this.precision = i, this.rounding = r, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(ae(e, t, a, 1)), n;
}
function Od(e) {
  return new this(e).cbrt();
}
function Nd(e) {
  return F(e = new this(e), e.e + 1, 2);
}
function Rd(e, t, n) {
  return new this(e).clamp(t, n);
}
function Hd(e) {
  if (!e || typeof e != "object") throw Error(Yn + "Object expected");
  var t, n, i, r = e.defaults === !0, a = [
    "precision",
    1,
    St,
    "rounding",
    0,
    8,
    "toExpNeg",
    -9e15,
    0,
    "toExpPos",
    0,
    Ri,
    "maxE",
    0,
    Ri,
    "minE",
    -9e15,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < a.length; t += 3)
    if (n = a[t], r && (this[n] = Mi[n]), (i = e[n]) !== void 0)
      if (Pe(i) === i && i >= a[t + 1] && i <= a[t + 2]) this[n] = i;
      else throw Error(bt + n + ": " + i);
  if (n = "crypto", r && (this[n] = Mi[n]), (i = e[n]) !== void 0)
    if (i === !0 || i === !1 || i === 0 || i === 1)
      if (i)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error($o);
      else
        this[n] = !1;
    else
      throw Error(bt + n + ": " + i);
  return this;
}
function Md(e) {
  return new this(e).cos();
}
function Fd(e) {
  return new this(e).cosh();
}
function Zo(e) {
  var t, n, i;
  function r(a) {
    var o, s, u, l = this;
    if (!(l instanceof r)) return new r(a);
    if (l.constructor = r, oa(a)) {
      l.s = a.s, $ ? !a.d || a.e > r.maxE ? (l.e = NaN, l.d = null) : a.e < r.minE ? (l.e = 0, l.d = [0]) : (l.e = a.e, l.d = a.d.slice()) : (l.e = a.e, l.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (u = typeof a, u === "number") {
      if (a === 0) {
        l.s = 1 / a < 0 ? -1 : 1, l.e = 0, l.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, l.s = -1) : l.s = 1, a === ~~a && a < 1e7) {
        for (o = 0, s = a; s >= 10; s /= 10) o++;
        $ ? o > r.maxE ? (l.e = NaN, l.d = null) : o < r.minE ? (l.e = 0, l.d = [0]) : (l.e = o, l.d = [a]) : (l.e = o, l.d = [a]);
        return;
      }
      if (a * 0 !== 0) {
        a || (l.s = NaN), l.e = NaN, l.d = null;
        return;
      }
      return En(l, a.toString());
    }
    if (u === "string")
      return (s = a.charCodeAt(0)) === 45 ? (a = a.slice(1), l.s = -1) : (s === 43 && (a = a.slice(1)), l.s = 1), Go.test(a) ? En(l, a) : Sd(l, a);
    if (u === "bigint")
      return a < 0 ? (a = -a, l.s = -1) : l.s = 1, En(l, a.toString());
    throw Error(bt + a);
  }
  if (r.prototype = T, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = Hd, r.clone = Zo, r.isDecimal = oa, r.abs = Cd, r.acos = xd, r.acosh = Ad, r.add = Pd, r.asin = Td, r.asinh = Bd, r.atan = Ld, r.atanh = kd, r.atan2 = Id, r.cbrt = Od, r.ceil = Nd, r.clamp = Rd, r.cos = Md, r.cosh = Fd, r.div = Vd, r.exp = Dd, r.floor = $d, r.hypot = Ud, r.ln = Gd, r.log = jd, r.log10 = Wd, r.log2 = zd, r.max = qd, r.min = Xd, r.mod = Zd, r.mul = Yd, r.pow = Kd, r.random = Jd, r.round = Qd, r.sign = ef, r.sin = tf, r.sinh = nf, r.sqrt = rf, r.sub = af, r.sum = of, r.tan = sf, r.tanh = lf, r.trunc = uf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < i.length; ) e.hasOwnProperty(n = i[t++]) || (e[n] = this[n]);
  return r.config(e), r;
}
function Vd(e, t) {
  return new this(e).div(t);
}
function Dd(e) {
  return new this(e).exp();
}
function $d(e) {
  return F(e = new this(e), e.e + 1, 3);
}
function Ud() {
  var e, t, n = new this(0);
  for ($ = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s)
        return $ = !0, new this(1 / 0);
      n = t;
    }
  return $ = !0, n.sqrt();
}
function oa(e) {
  return e instanceof gn || e && e.toStringTag === Uo || !1;
}
function Gd(e) {
  return new this(e).ln();
}
function jd(e, t) {
  return new this(e).log(t);
}
function zd(e) {
  return new this(e).log(2);
}
function Wd(e) {
  return new this(e).log(10);
}
function qd() {
  return Wo(this, arguments, -1);
}
function Xd() {
  return Wo(this, arguments, 1);
}
function Zd(e, t) {
  return new this(e).mod(t);
}
function Yd(e, t) {
  return new this(e).mul(t);
}
function Kd(e, t) {
  return new this(e).pow(t);
}
function Jd(e) {
  var t, n, i, r, a = 0, o = new this(1), s = [];
  if (e === void 0 ? e = this.precision : Ne(e, 1, St), i = Math.ceil(e / V), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(i)); a < i; )
        r = t[a], r >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(i *= 4); a < i; )
        r = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(r % 1e7), a += 4);
      a = i / 4;
    } else
      throw Error($o);
  else for (; a < i; ) s[a++] = Math.random() * 1e7 | 0;
  for (i = s[--a], e %= V, i && e && (r = ye(10, V - e), s[a] = (i / r | 0) * r); s[a] === 0; a--) s.pop();
  if (a < 0)
    n = 0, s = [0];
  else {
    for (n = -1; s[0] === 0; n -= V) s.shift();
    for (i = 1, r = s[0]; r >= 10; r /= 10) i++;
    i < V && (n -= V - i);
  }
  return o.e = n, o.d = s, o;
}
function Qd(e) {
  return F(e = new this(e), e.e + 1, this.rounding);
}
function ef(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function tf(e) {
  return new this(e).sin();
}
function nf(e) {
  return new this(e).sinh();
}
function rf(e) {
  return new this(e).sqrt();
}
function af(e, t) {
  return new this(e).sub(t);
}
function of() {
  var e = 0, t = arguments, n = new this(t[e]);
  for ($ = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return $ = !0, F(n, this.precision, this.rounding);
}
function sf(e) {
  return new this(e).tan();
}
function lf(e) {
  return new this(e).tanh();
}
function uf(e) {
  return F(e = new this(e), e.e + 1, 1);
}
T[Symbol.for("nodejs.util.inspect.custom")] = T.toString;
T[Symbol.toStringTag] = "Decimal";
var gn = T.constructor = Zo(Mi);
Hn = new gn(Hn);
Mn = new gn(Mn);
var cf = Object.defineProperty, df = Object.defineProperties, ff = Object.getOwnPropertyDescriptors, Vn = Object.getOwnPropertySymbols, Yo = Object.prototype.hasOwnProperty, Ko = Object.prototype.propertyIsEnumerable, sa = (e, t, n) => t in e ? cf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kt = (e, t) => {
  for (var n in t || (t = {}))
    Yo.call(t, n) && sa(e, n, t[n]);
  if (Vn)
    for (var n of Vn(t))
      Ko.call(t, n) && sa(e, n, t[n]);
  return e;
}, hf = (e, t) => df(e, ff(t)), Jo = (e, t) => {
  var n = {};
  for (var i in e)
    Yo.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Vn)
    for (var i of Vn(e))
      t.indexOf(i) < 0 && Ko.call(e, i) && (n[i] = e[i]);
  return n;
}, la;
function vf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(i, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: !0,
            get: () => i[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Qn(e) {
  return !!(e && typeof e.then == "function");
}
function Cn(e, t) {
  return Qn(e) ? Promise.resolve(e).then(t) : t(e);
}
function di(e, t, n) {
  function i(r) {
    const a = t(r);
    throw e.emit(a), console.error(a), a;
  }
  try {
    const r = n();
    return Qn(r) ? r.catch(i) : r;
  } catch (r) {
    i(r);
  }
}
function ua(e) {
  const t = (Array.isArray(e) ? e : [e]).map((a) => `'${a}'`), n = t.slice(-2).join(" or ");
  return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function gf(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function Qo(e) {
  if (typeof e == "string")
    return [e];
  if (Array.isArray(e))
    return e;
}
function ze(e) {
  return Qo(e) || [];
}
function mf(e, t) {
  return gf(t) ? ze(t == null ? void 0 : t[e]) : ze(t);
}
function Di(e) {
  return Array.from(new Set(e));
}
function es(e) {
  return e && e.replace(/\/+$/, "");
}
function pf(e) {
  if (typeof e == "string")
    return e;
  if (typeof (e == null ? void 0 : e.message) == "string")
    return e.message;
}
const yf = (e, t) => fetch(e, t);
function bf(e) {
  return Object.fromEntries(new Headers(e).entries());
}
const ts = (e = yf) => (t, n) => {
  let i = bf(n == null ? void 0 : n.headers);
  return i["x-api-key"] && (i = Object.assign({ "x-tolgee-sdk-type": "JS", "x-tolgee-sdk-version": "prerelease" }, i)), e(t, Object.assign(Object.assign({}, n), { headers: i }));
};
function st(e) {
  let t = [];
  return Object.freeze({
    listen(n) {
      const i = (r) => {
        n(r);
      };
      return t.push(i), {
        unsubscribe() {
          t = t.filter((r) => i !== r);
        }
      };
    },
    emit(n) {
      e() && t.forEach((i) => i({ value: n }));
    }
  });
}
function wf(e, t, n) {
  const i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  function a(u) {
    const l = new Set(t());
    r.forEach((c) => {
      (u === void 0 || (u == null ? void 0 : u.findIndex((f) => l.has(f) || c.namespaces.has(f))) !== -1) && c.fn({ value: void 0 });
    });
  }
  let o = [];
  function s() {
    if (o.length === 0)
      return;
    const u = o;
    o = [], i.forEach((d) => {
      d({ value: void 0 });
    });
    let l = /* @__PURE__ */ new Set();
    u.forEach((d) => {
      d === void 0 ? l = void 0 : l !== void 0 && d.forEach((f) => l.add(f));
    });
    const c = l ? Array.from(l.keys()) : void 0;
    a(c);
  }
  return Object.freeze({
    emit(u, l) {
      e() && (o.push(u), l ? setTimeout(s, 0) : s());
    },
    listen(u) {
      return i.add(u), {
        unsubscribe: () => {
          i.delete(u);
        }
      };
    },
    listenSome(u) {
      const l = {
        fn: (d) => {
          u(d);
        },
        namespaces: /* @__PURE__ */ new Set()
      };
      r.add(l);
      const c = {
        unsubscribe: () => {
          r.delete(l);
        },
        subscribeNs: (d) => (ze(d).forEach((f) => l.namespaces.add(f)), d === void 0 && l.namespaces.add(n()), c)
      };
      return c;
    }
  });
}
function _f(e, t) {
  let n = !0;
  function i() {
    return n;
  }
  const r = Object.freeze({
    onPendingLanguageChange: st(i),
    onLanguageChange: st(i),
    onLoadingChange: st(i),
    onFetchingChange: st(i),
    onInitialLoaded: st(i),
    onRunningChange: st(i),
    onCacheChange: st(i),
    onUpdate: wf(i, e, t),
    onPermanentChange: st(i),
    onError: st(i),
    setEmitterActive(a) {
      n = a;
    },
    on: (a, o) => {
      switch (a) {
        case "pendingLanguage":
          return r.onPendingLanguageChange.listen(o);
        case "language":
          return r.onLanguageChange.listen(o);
        case "loading":
          return r.onLoadingChange.listen(o);
        case "fetching":
          return r.onFetchingChange.listen(o);
        case "initialLoad":
          return r.onInitialLoaded.listen(o);
        case "running":
          return r.onRunningChange.listen(o);
        case "cache":
          return r.onCacheChange.listen(o);
        case "update":
          return r.onUpdate.listen(o);
        case "permanentChange":
          return r.onPermanentChange.listen(o);
        case "error":
          return r.onError.listen(o);
      }
    }
  });
  return r.onInitialLoaded.listen(() => r.onUpdate.emit()), r.onLanguageChange.listen(() => r.onUpdate.emit()), r.onCacheChange.listen(({ value: a }) => r.onUpdate.emit([a.namespace], !0)), r;
}
class ca extends Error {
  constructor(t, n, i = !1) {
    const { language: r, namespace: a } = t;
    super(`Tolgee: Failed to fetch record for "${r}"${a && ` and "${a}"`}`), this.cause = n, this.isDev = i, this.name = "RecordFetchError", this.language = r, this.namespace = a;
  }
}
class Sf extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageDetectorError";
  }
}
class da extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageStorageError";
  }
}
const ns = (e) => {
  const t = /* @__PURE__ */ new Map();
  return Object.entries(e).forEach(([n, i]) => {
    if (i != null) {
      if (typeof i == "object") {
        ns(i).forEach((r, a) => {
          t.set(n + "." + a, r);
        });
        return;
      }
      t.set(n, i);
    }
  }), t;
}, Kt = (e) => {
  const [t, ...n] = e.split(":"), i = n.join(":");
  return { language: t, namespace: i || "" };
}, lt = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function Ef(e, t, n, i, r, a, o) {
  const s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  let l = {}, c = 0;
  function d(h, p, v) {
    const b = lt(h);
    u.set(b, {
      data: ns(p),
      version: v
    }), e.onCacheChange.emit(h);
  }
  async function f(h) {
    function p(y) {
      const w = new ca(h, y);
      throw e.onError.emit(w), console.error(w), w;
    }
    const v = t(h);
    if (Qn(v)) {
      const y = await v.catch(p);
      if (y !== void 0)
        return y;
    }
    const b = l[lt(h)];
    if (typeof b == "function")
      try {
        return await b();
      } catch (y) {
        p(y);
      }
    else
      return b;
  }
  async function g(h, p) {
    let v;
    if (p)
      try {
        v = await n(h);
      } catch (b) {
        const y = new ca(h, b, !0);
        e.onError.emit(y), console.warn(y);
      }
    return v || (v = await f(h)), v;
  }
  const m = Object.freeze({
    addStaticData(h) {
      h && (l = Object.assign(Object.assign({}, l), h), Object.entries(h).forEach(([p, v]) => {
        if (typeof v != "function") {
          const b = Kt(p), y = u.get(p);
          (!y || y.version === 0) && d(b, v, 0);
        }
      }));
    },
    invalidate() {
      s.clear(), c += 1;
    },
    addRecord(h, p) {
      d(h, p, c);
    },
    exists(h, p = !1) {
      const v = u.get(lt(h));
      return v && p ? v.version === c : !!v;
    },
    getRecord(h) {
      var p;
      return (p = u.get(lt(i(h)))) === null || p === void 0 ? void 0 : p.data;
    },
    getTranslation(h, p) {
      var v;
      return (v = u.get(lt(h))) === null || v === void 0 ? void 0 : v.data.get(p);
    },
    getTranslationNs(h, p, v) {
      var b;
      for (const y of h)
        for (const w of p) {
          const x = (b = u.get(lt({ language: w, namespace: y }))) === null || b === void 0 ? void 0 : b.data.get(v);
          if (x != null)
            return [y];
        }
      return Di(h);
    },
    getTranslationFallback(h, p, v) {
      var b;
      for (const y of h)
        for (const w of p) {
          const x = (b = u.get(lt({ language: w, namespace: y }))) === null || b === void 0 ? void 0 : b.data.get(v);
          if (x != null)
            return x;
        }
    },
    changeTranslation(h, p, v) {
      var b;
      const y = (b = u.get(lt(h))) === null || b === void 0 ? void 0 : b.data;
      y == null || y.set(p, v), e.onCacheChange.emit(Object.assign(Object.assign({}, h), { key: p }));
    },
    isFetching(h) {
      if (r())
        return !0;
      if (h === void 0)
        return s.size > 0;
      const p = ze(h);
      return !!Array.from(s.keys()).find((v) => p.includes(Kt(v).namespace));
    },
    isLoading(h, p) {
      const v = ze(p);
      return !!(r() || Array.from(s.keys()).find((b) => {
        const y = Kt(b);
        return (!v.length || v.includes(y.namespace)) && !m.exists({
          namespace: y.namespace,
          language: h
        });
      }));
    },
    async loadRecords(h, p) {
      const v = h.map((y) => {
        const w = i(y), x = lt(w), _ = s.get(x);
        if (_)
          return {
            new: !1,
            promise: _,
            keyObject: w,
            cacheKey: x
          };
        const P = g(w, p) || Promise.resolve(void 0);
        return s.set(x, P), {
          new: !0,
          promise: P,
          keyObject: w,
          cacheKey: x
        };
      });
      a.notify(), o.notify();
      const b = await Promise.all(v.map((y) => y.promise));
      return v.forEach((y, w) => {
        const x = s.get(y.cacheKey) !== y.promise;
        if (y.new && !x) {
          s.delete(y.cacheKey);
          const _ = b[w];
          _ ? m.addRecord(y.keyObject, _) : m.getRecord(y.keyObject) || m.addRecord(y.keyObject, {});
        }
      }), a.notify(), o.notify(), v.map((y) => m.getRecord(y.keyObject));
    },
    getAllRecords() {
      return Array.from(u.entries()).map(([p, v]) => Object.assign(Object.assign({}, Kt(p)), { data: v.data }));
    }
  });
  return m;
}
function is(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
  return n;
}
const Cf = {
  tagAttributes: {
    textarea: ["placeholder"],
    input: ["value", "placeholder"],
    img: ["alt"],
    "*": ["aria-label", "title"]
  },
  restrictedElements: ["script", "style"],
  highlightKeys: ["Alt"],
  highlightColor: "rgb(255, 0, 0)",
  highlightWidth: 5,
  inputPrefix: "%-%tolgee:",
  inputSuffix: "%-%",
  passToParent: ["option", "optgroup"],
  fullKeyEncode: !1
}, $i = "invalid", xf = "https://app.tolgee.io", Af = ({ key: e }) => e, Pf = {
  defaultNs: "",
  observerOptions: Cf,
  observerType: "invisible",
  onFormatError: $i,
  apiUrl: xf,
  fetch: ts(),
  onTranslationMissing: Af
}, Ui = (...e) => {
  let t = {};
  return e.forEach((n) => {
    t = Object.assign(Object.assign(Object.assign({}, t), n), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), n == null ? void 0 : n.observerOptions) });
  }), t;
};
function fa(e, t) {
  const n = Ui(Pf, t == null ? void 0 : t.initialOptions, e);
  return n.apiUrl = es(n.apiUrl), e != null && e.fetch && (n.fetch = ts(e.fetch)), {
    initialOptions: n,
    activeNamespaces: (t == null ? void 0 : t.activeNamespaces) || /* @__PURE__ */ new Map(),
    language: t == null ? void 0 : t.language,
    pendingLanguage: t == null ? void 0 : t.language,
    isInitialLoading: !1,
    isRunning: !1
  };
}
function Tf(e, t, n, i, r, a, o, s) {
  const u = {
    ui: void 0
  }, l = {
    formatters: [],
    finalFormatter: void 0,
    observer: void 0,
    devBackend: void 0,
    backends: [],
    ui: void 0,
    languageDetector: void 0,
    languageStorage: void 0
  }, c = async ({ keysAndDefaults: S, target: E }) => {
    var k;
    const I = S.map(({ key: O, ns: j, defaultValue: K }) => ({
      key: O,
      defaultValue: K,
      fallbackNamespaces: i(j),
      namespace: r({ key: O, ns: j })[0],
      translation: a({
        key: O,
        ns: j
      })
    }));
    (k = l.ui) === null || k === void 0 || k.handleElementClick(I, E);
  }, d = (S, E) => {
    var k;
    return ((k = l.observer) === null || k === void 0 ? void 0 : k.findPositions(S, E)) || [];
  };
  function f(S) {
    const E = a({
      key: S.key,
      ns: S.ns
    });
    return H.formatTranslation(Object.assign(Object.assign({}, S), { translation: E, formatEnabled: !0 }));
  }
  function g() {
    return { fetch: t().fetch };
  }
  function m(S) {
    l.observer = S == null ? void 0 : S();
  }
  function h() {
    return !!l.observer;
  }
  function p(S) {
    S && l.formatters.push(S);
  }
  function v(S) {
    l.finalFormatter = S;
  }
  function b(S) {
    u.ui = S;
  }
  function y() {
    return !!u.ui;
  }
  function w(S) {
    l.languageStorage = S;
  }
  function x(S) {
    l.languageDetector = S;
  }
  function _() {
    return di(s.onError, (S) => new da("Tolgee: Failed to load language", S), () => {
      var S;
      return (S = l.languageStorage) === null || S === void 0 ? void 0 : S.getLanguage(g());
    });
  }
  function P() {
    if (!l.languageDetector)
      return;
    const S = n();
    return di(s.onError, (E) => new Sf("Tolgee: Failed to detect language", E), () => {
      var E;
      return (E = l.languageDetector) === null || E === void 0 ? void 0 : E.getLanguage(Object.assign({ availableLanguages: S }, g()));
    });
  }
  function C(S) {
    S && l.backends.push(S);
  }
  function N(S) {
    l.devBackend = S;
  }
  function D(S, E) {
    const k = Object.freeze({
      setFinalFormatter: v,
      addFormatter: p,
      setObserver: m,
      hasObserver: h,
      setUi: b,
      hasUi: y,
      setDevBackend: N,
      addBackend: C,
      setLanguageDetector: x,
      setLanguageStorage: w
    });
    E(S, k);
  }
  const H = Object.freeze({
    addPlugin: D,
    findPositions: d,
    run() {
      var S, E;
      const { apiKey: k, apiUrl: I, projectId: O, observerOptions: j, tagNewKeys: K, filterTag: se } = t();
      l.ui = (S = u.ui) === null || S === void 0 ? void 0 : S.call(u, {
        apiKey: k,
        apiUrl: I,
        projectId: O,
        highlight: H.highlight,
        changeTranslation: o,
        findPositions: d,
        onPermanentChange: (z) => s.onPermanentChange.emit(z),
        tagNewKeys: K,
        filterTag: se
      }), (E = l.observer) === null || E === void 0 || E.run({
        mouseHighlight: !0,
        options: j,
        translate: f,
        onClick: c
      });
    },
    stop() {
      var S;
      l.ui = void 0, (S = l.observer) === null || S === void 0 || S.stop();
    },
    getLanguageStorage() {
      return l.languageStorage;
    },
    getInitialLanguage() {
      const S = n(), E = _();
      return Cn(E, (k) => (!S || S.includes(k)) && k ? k : P());
    },
    setStoredLanguage(S) {
      return di(s.onError, (E) => new da("Tolgee: Failed to store language", E), () => {
        var E;
        return (E = l.languageStorage) === null || E === void 0 ? void 0 : E.setLanguage(S, g());
      });
    },
    getDevBackend() {
      return l.devBackend;
    },
    getBackendRecord: async ({ language: S, namespace: E }) => {
      for (const k of l.backends) {
        const I = await k.getRecord(Object.assign({
          language: S,
          namespace: E
        }, g()));
        if (I !== void 0)
          return I;
      }
    },
    getBackendDevRecord: async ({ language: S, namespace: E }) => {
      var k;
      const { apiKey: I, apiUrl: O, projectId: j, filterTag: K } = t();
      return (k = l.devBackend) === null || k === void 0 ? void 0 : k.getRecord(Object.assign({
        apiKey: I,
        apiUrl: O,
        projectId: j,
        language: S,
        namespace: E,
        filterTag: K
      }, g()));
    },
    getLanguageDetector() {
      return l.languageDetector;
    },
    retranslate() {
      var S;
      (S = l.observer) === null || S === void 0 || S.retranslate();
    },
    highlight: (S, E) => {
      var k, I;
      return ((I = (k = l.observer) === null || k === void 0 ? void 0 : k.highlight) === null || I === void 0 ? void 0 : I.call(k, S, E)) || { unhighlight() {
      } };
    },
    unwrap(S) {
      var E;
      return l.observer ? (E = l.observer) === null || E === void 0 ? void 0 : E.unwrap(S) : { text: S, keys: [] };
    },
    wrap(S) {
      var E;
      return l.observer ? (E = l.observer) === null || E === void 0 ? void 0 : E.wrap(S) : S.translation;
    },
    hasDevBackend() {
      return !!H.getDevBackend();
    },
    formatTranslation(S) {
      var E, { formatEnabled: k } = S, I = is(S, ["formatEnabled"]);
      const { key: O, translation: j, defaultValue: K, noWrap: se, params: z, ns: fe, orEmpty: Te } = I, le = j ?? K;
      let W = "";
      j == null && (W = t().onTranslationMissing(I));
      let de = le ?? (Te ? "" : W);
      const ke = e(), X = k || !(!((E = l.observer) === null || E === void 0) && E.outputNotFormattable), pe = (we) => l.observer && !se ? l.observer.wrap({
        key: O,
        translation: we,
        defaultValue: K,
        params: z,
        ns: fe
      }) : we;
      de = pe(de);
      try {
        if (le && ke && X)
          for (const we of l.formatters)
            de = we.format({
              translation: de,
              language: ke,
              params: z
            });
        l.finalFormatter && le && ke && X && (de = l.finalFormatter.format({
          translation: de,
          language: ke,
          params: z
        }));
      } catch (we) {
        console.error(we);
        const je = pf(we) || $i, at = t().onFormatError, Ie = typeof at;
        Ie === "string" ? de = at : Ie === "function" ? de = at(je, I) : de = $i, de = pe(de);
      }
      return de;
    }
  });
  return H;
}
const ha = (e, t, n) => {
  let i = e;
  return Object.freeze({
    init(r) {
      i = r;
    },
    notify() {
      const r = t();
      i !== r && n(r), i = r;
    }
  });
};
function Bf(e, t, n) {
  let i = fa(), r;
  const a = Object.freeze({
    init(o) {
      i = fa(o, i);
    },
    isRunning() {
      return i.isRunning;
    },
    setRunning(o) {
      i.isRunning !== o && (i.isRunning = o, n.emit(o));
    },
    isInitialLoading() {
      return i.isInitialLoading;
    },
    setInitialLoading(o) {
      i.isInitialLoading = o;
    },
    getLanguage() {
      return i.language || i.initialOptions.language;
    },
    setLanguage(o) {
      i.language !== o && (i.language = o, e.emit(o));
    },
    getPendingLanguage() {
      return i.pendingLanguage || a.getLanguage();
    },
    setPendingLanguage(o) {
      i.pendingLanguage !== o && (i.pendingLanguage = o, t.emit(o));
    },
    getInitialOptions() {
      return Object.assign(Object.assign({}, i.initialOptions), r);
    },
    addActiveNs(o) {
      ze(o).forEach((u) => {
        const l = i.activeNamespaces.get(u);
        l !== void 0 ? i.activeNamespaces.set(u, l + 1) : i.activeNamespaces.set(u, 1);
      });
    },
    removeActiveNs(o) {
      ze(o).forEach((u) => {
        const l = i.activeNamespaces.get(u);
        l !== void 0 && l > 1 ? i.activeNamespaces.set(u, l - 1) : i.activeNamespaces.delete(u);
      });
    },
    getRequiredNamespaces() {
      return Di([
        ...i.initialOptions.ns || [i.initialOptions.defaultNs],
        ...ze(i.initialOptions.fallbackNs),
        ...i.activeNamespaces.keys()
      ]);
    },
    getFallbackLangs(o) {
      const s = o || a.getLanguage();
      return s ? Di([
        s,
        ...mf(s, i.initialOptions.fallbackLanguage)
      ]) : [];
    },
    getFallbackNs() {
      return ze(i.initialOptions.fallbackNs);
    },
    getDefaultNs(o) {
      return o === void 0 ? i.initialOptions.defaultNs : o;
    },
    getAvailableLanguages() {
      if (i.initialOptions.availableLanguages)
        return i.initialOptions.availableLanguages;
      if (i.initialOptions.staticData) {
        const o = Object.keys(i.initialOptions.staticData).map((s) => Kt(s).language);
        return Array.from(new Set(o));
      }
    },
    withDefaultNs(o) {
      return {
        namespace: o.namespace === void 0 ? a.getInitialOptions().defaultNs : o.namespace,
        language: o.language
      };
    },
    overrideCredentials(o) {
      o ? r = Object.assign(Object.assign({}, o), { apiUrl: es(o.apiUrl) }) : r = void 0;
    }
  });
  return a;
}
function Lf(e) {
  var { ns: t, noWrap: n, orEmpty: i, params: r, language: a } = e, o = is(e, ["ns", "noWrap", "orEmpty", "params", "language"]);
  return Object.assign(Object.assign({}, {
    ns: t,
    noWrap: n,
    orEmpty: i,
    language: a
  }), { params: Object.assign({}, o) });
}
const Dn = (e, ...t) => {
  let n = {}, i;
  return typeof e == "object" ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], i = t[1]) : typeof t[0] == "object" && (i = t[0])), i && (n = Object.assign(Object.assign({}, Lf(i)), n)), n;
};
function kf({ options: e }) {
  const t = _f(u, l), n = ha(!1, () => o.isFetching(), t.onFetchingChange.emit), i = ha(!1, () => x.isLoading(), t.onLoadingChange.emit), r = Bf(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = Tf(r.getLanguage, r.getInitialOptions, r.getAvailableLanguages, c, p, v, f, t), o = Ef(t, a.getBackendRecord, a.getBackendDevRecord, r.withDefaultNs, r.isInitialLoading, n, i);
  e && g(e);
  let s;
  t.onUpdate.listen(() => {
    r.isRunning() && a.retranslate();
  });
  function u() {
    return r.getFallbackNs();
  }
  function l(_) {
    return r.getDefaultNs(_);
  }
  function c(_) {
    return [...ze(l(_)), ...u()];
  }
  function d(_) {
    return [
      ...ze(_ ?? l()),
      ...r.getRequiredNamespaces()
    ];
  }
  function f(_, P, C) {
    const N = r.withDefaultNs(_), D = o.getTranslation(N, P);
    return o.changeTranslation(N, P, C), {
      revert() {
        o.changeTranslation(N, P, D);
      }
    };
  }
  function g(_) {
    r.init(_), o.addStaticData(r.getInitialOptions().staticData);
  }
  function m(_, P) {
    const C = r.getFallbackLangs(_), N = d(P), D = [];
    return C.forEach((H) => {
      N.forEach((S) => {
        o.exists({ language: H, namespace: S }, !0) || D.push({ language: H, namespace: S });
      });
    }), D;
  }
  function h(_, P) {
    const C = m(_, P);
    if (C.length)
      return Cn(x.loadRecords(C), () => {
      });
  }
  function p({ key: _, ns: P }) {
    const C = r.getFallbackLangs(), N = c(P ?? void 0);
    return o.getTranslationNs(N, C, _);
  }
  function v({ key: _, ns: P, language: C }) {
    const N = c(P ?? void 0), D = r.getFallbackLangs(C);
    return o.getTranslationFallback(N, D, _);
  }
  function b() {
    const _ = Cn(y(), () => h());
    if (Qn(_))
      return r.setInitialLoading(!0), n.notify(), i.notify(), Promise.resolve(_).then(() => {
        r.setInitialLoading(!1), n.notify(), i.notify(), t.onInitialLoaded.emit();
      });
    t.onInitialLoaded.emit();
  }
  function y() {
    if (r.getLanguage())
      return;
    const P = a.getInitialLanguage();
    return Cn(P, (C) => {
      const N = C || r.getInitialOptions().defaultLanguage;
      N && r.setLanguage(N);
    });
  }
  function w() {
    if ((a.getLanguageDetector() || a.getLanguageStorage()) && !r.getAvailableLanguages())
      throw new Error(ua("availableLanguages"));
    if (!r.getLanguage() && !r.getInitialOptions().defaultLanguage)
      throw new Error(ua(["defaultLanguage", "language"]));
  }
  const x = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), r), a), o), {
    init: g,
    getTranslation: v,
    changeTranslation: f,
    getTranslationNs: p,
    getDefaultAndFallbackNs: c,
    findPositions: a.findPositions,
    getRequiredRecords: m,
    async changeLanguage(_) {
      r.getPendingLanguage() === _ && r.getLanguage() === _ || (r.setPendingLanguage(_), r.isRunning() && await h(_), _ === r.getPendingLanguage() && (r.setLanguage(_), await a.setStoredLanguage(_)));
    },
    async addActiveNs(_, P) {
      P || r.addActiveNs(_), r.isRunning() && await h(void 0, _);
    },
    loadRecords(_) {
      return o.loadRecords(_, x.isDev());
    },
    async loadRecord(_) {
      return (await x.loadRecords([_]))[0];
    },
    isLoading(_) {
      return o.isLoading(r.getLanguage(), _);
    },
    isLoaded(_) {
      const P = r.getLanguage();
      if (!P)
        return !1;
      const C = r.getFallbackLangs(P), N = d(_), D = [];
      return C.forEach((H) => {
        N.forEach((S) => {
          o.exists({ language: H, namespace: S }) || D.push({ language: H, namespace: S });
        });
      }), D.length === 0;
    },
    t: (..._) => {
      const P = Dn(..._), C = v(P);
      return a.formatTranslation(Object.assign(Object.assign({}, P), { translation: C }));
    },
    isDev() {
      return !!(r.getInitialOptions().apiKey && r.getInitialOptions().apiUrl);
    },
    run() {
      return w(), r.isRunning() || (r.setRunning(!0), a.run(), s = b()), Promise.resolve(s);
    },
    stop() {
      r.isRunning() && (a.stop(), r.setRunning(!1));
    }
  }));
  return x;
}
function If(e) {
  const t = kf({
    options: e
  });
  t.isDev() && t.invalidate();
  function n(r) {
    const a = t.isRunning();
    a && t.stop(), r(), t.isDev() && t.invalidate(), a && t.run();
  }
  const i = Object.freeze({
    /**
     * Listen to tolgee events.
     */
    on: t.on,
    /**
     * Listen for specific namespaces changes.
     *
     * ```
     * const sub = tolgee.onUpdate(handler)
     *
     * // subscribe to selected namespace
     * sub.subscribeNs(['common'])
     *
     * // unsubscribe
     * sub.unsubscribe()
     * ```
     */
    onNsUpdate: t.onUpdate.listenSome,
    /**
     * Turn off/on events emitting. Is on by default.
     */
    setEmitterActive: t.setEmitterActive,
    /**
     * @return current language if set.
     */
    getLanguage: t.getLanguage,
    /**
     * `pendingLanguage` represents language which is currently being loaded.
     * @return current `pendingLanguage` if set.
     */
    getPendingLanguage: t.getPendingLanguage,
    /**
     * Change current language.
     * - if not running sets `pendingLanguage`, `language` to the new value
     * - if running sets `pendingLanguage` to the value, fetches necessary data and then changes `language`
     *
     * @return Promise which is resolved when `language` is changed.
     */
    changeLanguage: t.changeLanguage,
    /**
     * Temporarily change translation in cache.
     * @return object with revert method.
     */
    changeTranslation: t.changeTranslation,
    /**
     * Adds namespace(s) list of active namespaces. And if tolgee is running, loads required data.
     */
    addActiveNs: t.addActiveNs,
    /**
     * Remove namespace(s) from active namespaces.
     *
     * Tolgee internally counts how many times was each active namespace added,
     * so this method will remove namespace only if the counter goes down to 0.
     */
    removeActiveNs: t.removeActiveNs,
    /**
     * Manually load multiple records from `Backend` (or `DevBackend` when in dev mode)
     *
     * It loads data together and adds them to cache in one operation, to prevent partly loaded state.
     */
    loadRecords: t.loadRecords,
    /**
     * Manually load record from `Backend` (or `DevBackend` when in dev mode)
     */
    loadRecord: t.loadRecord,
    /**
     * Prefill static data
     */
    addStaticData: t.addStaticData,
    /**
     * Get record from cache.
     */
    getRecord: t.getRecord,
    /**
     * Get all records from cache.
     */
    getAllRecords: t.getAllRecords,
    /**
     * @param ns optional list of namespaces that you are interested in
     * @return `true` if there are data that need to be fetched.
     */
    isLoaded: t.isLoaded,
    /**
     * Returns records needed for instance to be `loaded`
     */
    getRequiredRecords: t.getRequiredRecords,
    /**
     * @return `true` if tolgee is loading initial data (triggered by `run`).
     */
    isInitialLoading: t.isInitialLoading,
    /**
     * @param ns optional list of namespaces that you are interested in
     * @return `true` if tolgee is loading some translations for the first time.
     */
    isLoading: t.isLoading,
    /**
     * @param ns optional list of namespaces that you are interested in
     * @return `true` if tolgee is fetching some translations.
     */
    isFetching: t.isFetching,
    /**
     * @return `true` if tolgee is running.
     */
    isRunning: t.isRunning,
    /**
     * Changes internal state to running: true and loads initial files.
     * Runs runnable plugins mainly Observer if present.
     */
    run: t.run,
    /**
     * Changes internal state to running: false and stops runnable plugins.
     */
    stop: t.stop,
    /**
     * Returns translated and formatted key.
     * If Observer is present and tolgee is running, wraps result to be identifiable in the DOM.
     */
    t: t.t,
    /**
     * Highlight keys that match selection.
     */
    highlight: t.highlight,
    /**
     * Find positions of keys in the DOM.
     */
    findPositions: t.findPositions,
    /**
     * @return current Tolgee options.
     */
    getInitialOptions: t.getInitialOptions,
    /**
     * Tolgee is in dev mode if `DevTools` plugin is used and `apiKey` + `apiUrl` are specified.
     * @return `true` if tolgee is in dev mode.
     */
    isDev: t.isDev,
    /**
     * Wraps translation if there is `Observer` plugin
     */
    wrap: t.wrap,
    /**
     * Unwrap translation
     */
    unwrap: t.unwrap,
    /**
     * Override creadentials passed on initialization.
     *
     * When called in running state, tolgee stops and runs again.
     */
    overrideCredentials(r) {
      n(() => t.overrideCredentials(r));
    },
    /**
     * Add tolgee plugin after initialization.
     *
     * When called in running state, tolgee stops and runs again.
     */
    addPlugin(r) {
      r && n(() => t.addPlugin(i, r));
    },
    /**
     * Updates options after instance creation. Extends existing options,
     * so it only changes the fields, that are listed.
     *
     * When called in running state, tolgee stops and runs again.
     */
    updateOptions(r) {
      r && n(() => t.init(r));
    }
  });
  return i;
}
const Of = () => {
  const e = {
    plugins: [],
    options: {}
  }, t = Object.freeze({
    use(n) {
      return e.plugins.push(n), t;
    },
    updateDefaults(n) {
      return e.options = Ui(e.options, n), t;
    },
    init(n) {
      const i = If(Ui(e.options, n));
      return e.plugins.forEach(i.addPlugin), i;
    }
  });
  return t;
}, rs = 0, Gi = 1, Nf = 2;
let Rf = class extends Error {
  constructor(t, n, i) {
    let r, a = "";
    t === rs ? r = "Empty parameter" : t === Gi ? (r = "Unexpected character", a = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${n} in "${i}"` + (a ? `
` + a : "")), this.code = t, this.index = n;
  }
};
function va(e) {
  return /\s/.test(e);
}
const ft = 0, ji = 1, xn = 2, fi = 3, hi = 4, Hf = /* @__PURE__ */ new Set([
  xn,
  ji,
  ft
]), zi = "'", Mf = /* @__PURE__ */ new Set(["{", "}", zi]), Ff = (e) => /[0-9a-zA-Z_]/.test(e);
function Vf(e) {
  let t = ft, n = "", i = "", r = "";
  const a = [], o = [];
  let s = 0;
  function u(f) {
    throw new Rf(f, s, e);
  }
  const l = () => {
    a.push(n), n = "";
  }, c = () => {
    Ff(r) || u(Gi), i += r;
  }, d = () => {
    i === "" && u(rs), o.push(i), i = "";
  };
  for (s = 0; s < e.length; s++)
    switch (r = e[s], t) {
      case ft:
        r === zi ? (n += r, t = ji) : r === "{" ? (l(), t = fi) : (n += r, t = ft);
        break;
      case ji:
        Mf.has(r) ? (n = n.slice(0, -1) + r, t = xn) : (n += r, t = ft);
        break;
      case xn:
        r === zi ? t = ft : (n += r, t = xn);
        break;
      case fi:
        r === "}" ? (d(), t = ft) : va(r) ? i !== "" && (d(), t = hi) : (c(), t = fi);
        break;
      case hi:
        r == "}" ? t = ft : va(r) ? t = hi : u(Gi);
    }
  return Hf.has(t) || u(Nf), l(), [a, o];
}
function Df(e, t) {
  const [n, i] = Vf(e), r = [n[0]];
  for (let a = 1; a < n.length; a++) {
    const o = t == null ? void 0 : t[i[a - 1]];
    if (o === void 0)
      throw new Error(`Missing parameter "${i[a - 1]}" in "${e}"`);
    r.push(String(o)), r.push(n[a]);
  }
  return r.join("");
}
function $f() {
  return {
    format: ({ translation: e, params: t }) => Df(e, t)
  };
}
const Uf = () => (e, t) => (t.setFinalFormatter($f()), e);
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ga = {};
(function(e) {
  function t(v, b) {
    var y;
    return v instanceof Buffer ? y = v : y = Buffer.from(v.buffer, v.byteOffset, v.byteLength), y.toString(b);
  }
  var n = function(v) {
    return Buffer.from(v);
  };
  function i(v) {
    for (var b = 0, y = Math.min(256 * 256, v.length + 1), w = new Uint16Array(y), x = [], _ = 0; ; ) {
      var P = b < v.length;
      if (!P || _ >= y - 1) {
        var C = w.subarray(0, _), N = C;
        if (x.push(String.fromCharCode.apply(null, N)), !P)
          return x.join("");
        v = v.subarray(b), b = 0, _ = 0;
      }
      var D = v[b++];
      if ((D & 128) === 0)
        w[_++] = D;
      else if ((D & 224) === 192) {
        var H = v[b++] & 63;
        w[_++] = (D & 31) << 6 | H;
      } else if ((D & 240) === 224) {
        var H = v[b++] & 63, S = v[b++] & 63;
        w[_++] = (D & 31) << 12 | H << 6 | S;
      } else if ((D & 248) === 240) {
        var H = v[b++] & 63, S = v[b++] & 63, E = v[b++] & 63, k = (D & 7) << 18 | H << 12 | S << 6 | E;
        k > 65535 && (k -= 65536, w[_++] = k >>> 10 & 1023 | 55296, k = 56320 | k & 1023), w[_++] = k;
      }
    }
  }
  function r(v) {
    for (var b = 0, y = v.length, w = 0, x = Math.max(32, y + (y >>> 1) + 7), _ = new Uint8Array(x >>> 3 << 3); b < y; ) {
      var P = v.charCodeAt(b++);
      if (P >= 55296 && P <= 56319) {
        if (b < y) {
          var C = v.charCodeAt(b);
          (C & 64512) === 56320 && (++b, P = ((P & 1023) << 10) + (C & 1023) + 65536);
        }
        if (P >= 55296 && P <= 56319)
          continue;
      }
      if (w + 4 > _.length) {
        x += 8, x *= 1 + b / v.length * 2, x = x >>> 3 << 3;
        var N = new Uint8Array(x);
        N.set(_), _ = N;
      }
      if ((P & 4294967168) === 0) {
        _[w++] = P;
        continue;
      } else if ((P & 4294965248) === 0)
        _[w++] = P >>> 6 & 31 | 192;
      else if ((P & 4294901760) === 0)
        _[w++] = P >>> 12 & 15 | 224, _[w++] = P >>> 6 & 63 | 128;
      else if ((P & 4292870144) === 0)
        _[w++] = P >>> 18 & 7 | 240, _[w++] = P >>> 12 & 63 | 128, _[w++] = P >>> 6 & 63 | 128;
      else
        continue;
      _[w++] = P & 63 | 128;
    }
    return _.slice ? _.slice(0, w) : _.subarray(0, w);
  }
  var a = "Failed to ", o = function(v, b, y) {
    if (v)
      throw new Error("".concat(a).concat(b, ": the '").concat(y, "' option is unsupported."));
  }, s = typeof Buffer == "function" && Buffer.from, u = s ? n : r;
  function l() {
    this.encoding = "utf-8";
  }
  l.prototype.encode = function(v, b) {
    return o(b && b.stream, "encode", "stream"), u(v);
  };
  function c(v) {
    var b;
    try {
      var y = new Blob([v], { type: "text/plain;charset=UTF-8" });
      b = URL.createObjectURL(y);
      var w = new XMLHttpRequest();
      return w.open("GET", b, !1), w.send(), w.responseText;
    } finally {
      b && URL.revokeObjectURL(b);
    }
  }
  var d = !s && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", f = ["utf-8", "utf8", "unicode-1-1-utf-8"], g = i;
  s ? g = t : d && (g = function(v) {
    try {
      return c(v);
    } catch {
      return i(v);
    }
  });
  var m = "construct 'TextDecoder'", h = "".concat(a, " ").concat(m, ": the ");
  function p(v, b) {
    o(b && b.fatal, m, "fatal"), v = v || "utf-8";
    var y;
    if (s ? y = Buffer.isEncoding(v) : y = f.indexOf(v.toLowerCase()) !== -1, !y)
      throw new RangeError("".concat(h, " encoding label provided ('").concat(v, "') is invalid."));
    this.encoding = v, this.fatal = !1, this.ignoreBOM = !1;
  }
  p.prototype.decode = function(v, b) {
    o(b && b.stream, "decode", "stream");
    var y;
    return v instanceof Uint8Array ? y = v : v.buffer instanceof ArrayBuffer ? y = new Uint8Array(v.buffer) : y = new Uint8Array(v), g(y, this.encoding);
  }, e.TextEncoder = e.TextEncoder || l, e.TextDecoder = e.TextDecoder || p;
})(typeof window < "u" ? window : vi);
const Gf = /* @__PURE__ */ vf({
  __proto__: null,
  default: ga
}, [ga]);
(la = console.assert) == null || la.call(console, Gf);
function jf(e, t) {
  const n = (i) => {
    var r, a;
    e.includes((r = i.data) == null ? void 0 : r.type) && t((a = i.data) == null ? void 0 : a.data);
  };
  return window.addEventListener("message", n, !1), {
    unsubscribe() {
      window.removeEventListener("message", n);
    }
  };
}
function zf({
  message: e,
  recievingMessage: t,
  data: n,
  attempts: i = 1,
  timeout: r = 300
}) {
  let a = !1;
  const o = () => new Promise((u, l) => {
    const c = jf(t, f);
    window.postMessage({ type: e, data: n }, window.origin);
    const d = setTimeout(m, r);
    function f(h) {
      clearTimeout(d), g(), u(h);
    }
    function g() {
      c.unsubscribe();
    }
    function m() {
      g(), l();
    }
  });
  return {
    cancel() {
      a = !0;
    },
    promise: (async () => {
      for (let u = 0; u < i; u++) {
        if (a)
          return new Promise(() => {
          });
        try {
          return await o();
        } catch {
          continue;
        }
      }
      if (!a)
        throw `Didn't recieve ${t.join(" or ")} in time.`;
      return new Promise(() => {
      });
    })()
  };
}
function Wf() {
  let e;
  async function t(n) {
    e == null || e();
    const { cancel: i, promise: r } = zf({
      message: "TOLGEE_READY",
      recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
      data: n,
      attempts: 4
    });
    return e = i, r;
  }
  return {
    update: t
  };
}
const qf = "tolgee-in-context-tools.umd.min.js", Xf = "@tolgee/in-context-tools", Zf = "InContextTools", Yf = "https://cdn.jsdelivr.net/npm";
function Kf(e) {
  return new Promise((t, n) => {
    const i = document.createElement("script");
    i.src = e, i.addEventListener("load", () => t()), i.addEventListener("error", (r) => n(r.error)), document.head.appendChild(i);
  });
}
let gi = null;
function Jf(e) {
  return gi || (gi = Kf(
    `${Yf}/@tolgee/web@${e}/dist/${qf}`
  ).then(() => window[Xf][Zf])), gi;
}
const as = "__tolgee_apiKey", os = "__tolgee_apiUrl";
function ma() {
  const e = sessionStorage.getItem(as) || void 0, t = sessionStorage.getItem(os) || void 0;
  if (!(!e || !t))
    return {
      apiKey: e,
      apiUrl: t
    };
}
function Qf() {
  sessionStorage.removeItem(as), sessionStorage.removeItem(os);
}
function eh(e) {
  document.readyState !== "loading" ? Promise.resolve().then(() => {
    e();
  }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
}
let ss = () => (e) => e;
const th = () => {
  if (typeof window > "u")
    return !1;
  try {
    return typeof sessionStorage < "u" && sessionStorage;
  } catch (e) {
    return console.error("sessionStorage not available", e), !1;
  }
};
th() && (ss = () => (e) => {
  const t = Wf(), n = () => ({
    // prevent extension downloading ui library
    uiPresent: !0,
    uiVersion: void 0,
    // tolgee mode
    mode: e.isDev() ? "development" : "production",
    // pass credentials
    config: {
      apiUrl: e.getInitialOptions().apiUrl || "",
      apiKey: e.getInitialOptions().apiKey || ""
    }
  }), i = async () => {
    const a = await Jf(
      "prerelease"
    );
    return (o) => {
      const s = ma();
      return o.addPlugin(a({ credentials: s })), o;
    };
  };
  return e.on("running", ({ value: a }) => {
    a && eh(() => {
      t.update(n()).catch(Qf);
    });
  }), ma() && i().then((a) => {
    e.addPlugin(a);
  }).catch((a) => {
    console.error("Tolgee: Failed to load in-context tools"), console.error(a);
  }), e;
});
const nh = (e, t, n, i) => {
  var r = i, { signal: a } = r, o = Jo(r, ["signal"]);
  const s = new AbortController();
  return new Promise((u, l) => {
    const c = e(t, kt({ signal: s.signal }, o));
    let d = !1;
    function f(h) {
      !d && u(h), d = !0;
    }
    function g(h) {
      !d && l(h), d = !0;
    }
    function m() {
      const h = new Error(`TIMEOUT: ${t}`);
      s.abort(h), g(h);
    }
    if (a && a.addEventListener("abort", m), n !== void 0) {
      const h = setTimeout(m, n);
      c.finally(() => clearTimeout(h));
    }
    c.catch(g).then(f);
  });
};
function pa(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const ih = ({ namespace: e, language: t, prefix: n }) => e ? `${pa(n)}/${e}/${t}.json` : `${pa(n)}/${t}.json`;
function rh(e) {
  return e.json();
}
const ya = {
  prefix: "/i18n",
  getPath: ih,
  getData: rh,
  headers: {
    Accept: "application/json"
  },
  timeout: void 0,
  fallbackOnFail: !1
};
function ah(e) {
  const t = hf(kt(kt({}, ya), e), {
    headers: kt(kt({}, ya.headers), e == null ? void 0 : e.headers)
  }), {
    prefix: n,
    getPath: i,
    getData: r,
    headers: a,
    timeout: o,
    fallbackOnFail: s
  } = t, u = Jo(t, [
    "prefix",
    "getPath",
    "getData",
    "headers",
    "timeout",
    "fallbackOnFail"
  ]);
  return {
    async getRecord({ namespace: l, language: c, fetch: d }) {
      const f = i({
        namespace: l,
        language: c,
        prefix: n
      });
      try {
        const g = await nh(d, f, o, kt({
          headers: a
        }, u));
        if (!g.ok)
          throw new Error(`${g.url} ${g.status}`);
        return await r(g);
      } catch (g) {
        if (s)
          return;
        throw g;
      }
    }
  };
}
const oh = (e) => (t, n) => (n.addBackend(ah(e)), t);
function sh() {
  return Of().use(ss());
}
const lh = () => (e) => e;
Ae({
  name: "TolgeeProvider",
  props: {
    tolgee: { type: Object, required: !1 },
    fallback: {
      type: [Object, String]
    },
    staticData: {
      type: Object,
      required: !1
    },
    language: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    const t = be("tolgeeContext");
    e.tolgee && (t.value.tolgee = e.tolgee);
    const n = A(() => t.value.tolgee);
    if (!n.value)
      throw new Error("Tolgee instance not provided");
    if (t.value.isInitialRender) {
      if (!e.staticData || !e.language)
        throw new Error('TolgeeProvider: "staticData" and "language" props are required for SSR.');
      if (n.value.setEmitterActive(!1), n.value.addStaticData(e.staticData), n.value.changeLanguage(e.language), n.value.setEmitterActive(!0), !n.value.isLoaded()) {
        const r = n.value.getRequiredRecords(e.language).map(({ namespace: a, language: o }) => a ? `${a}:${o}` : o).filter((a) => {
          var o;
          return !(!((o = e.staticData) === null || o === void 0) && o[a]);
        });
        console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${r.map((a) => `"${a}"`).join(", ")}`);
      }
    }
    Ut(() => {
      t.value.isInitialRender = !1;
    });
    const i = q(!n.value.isLoaded());
    return sn(() => {
      n.value.run().finally(() => {
        i.value = !1;
      });
    }), La(() => {
      n.value.stop();
    }), { isLoading: i };
  },
  render() {
    var e, t, n, i;
    return this.isLoading ? ((i = (n = this.$slots).fallback) === null || i === void 0 ? void 0 : i.call(n)) || this.fallback || null : (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
});
const ls = (e) => {
  const t = Qo(e), n = be("tolgeeContext"), i = A(() => n.value.tolgee);
  if (!i.value)
    throw new Error("Tolgee instance not provided");
  const r = q(u()), a = i.value.onNsUpdate(() => {
    r.value = u(), o.value = !i.value.isLoaded(t);
  });
  a.subscribeNs(t), i.value.addActiveNs(t), La(() => {
    a == null || a.unsubscribe(), i.value.removeActiveNs(t);
  });
  const o = q(!i.value.isLoaded(t)), s = (l) => {
    a.subscribeNs(l);
  };
  function u() {
    return (l) => {
      var c;
      const d = (c = l.ns) !== null && c !== void 0 ? c : t == null ? void 0 : t[0];
      return s(d), i.value.t(Object.assign(Object.assign({}, l), { ns: d }));
    };
  }
  return { t: r, isLoading: o };
};
Ae({
  name: "T",
  props: {
    keyName: { type: String, required: !0 },
    params: Object,
    defaultValue: String,
    noWrap: {
      type: Boolean,
      default: !1
    },
    ns: { type: String },
    language: { type: String }
  },
  setup() {
    const { t: e } = ls();
    return { t: e };
  },
  render() {
    const e = {};
    Object.keys(this.$slots).forEach((r) => {
      e[r] = this.$slots[r]();
    });
    const t = Object.assign({}, this.$props.params, e), n = {
      key: this.$props.keyName,
      params: t,
      defaultValue: this.$props.defaultValue,
      noWrap: this.$props.noWrap,
      ns: this.$props.ns,
      language: this.$props.language
    };
    return this.t(n);
  }
});
const uh = (e) => {
  const { t, isLoading: n } = ls(e);
  return { t: A(() => (...r) => {
    const a = Dn(...r);
    return t.value(a);
  }), isLoading: n };
}, ch = {
  install(e, t) {
    const n = t == null ? void 0 : t.tolgee;
    if (!n)
      throw new Error("Tolgee instance not passed in options");
    const i = !!(t != null && t.enableSSR), r = q({
      tolgee: n,
      isInitialRender: i
    });
    if (e.provide("tolgeeContext", r), i) {
      const a = () => Object.assign(Object.assign({}, r.value.tolgee), { t: (...s) => {
        const u = Dn(...s);
        return n.t(Object.assign({}, u));
      } }), o = () => Object.assign(Object.assign({}, r.value.tolgee), { t: (...s) => {
        const u = Dn(...s);
        return n.t(Object.assign(Object.assign({}, u), { noWrap: !0 }));
      } });
      r.value.tolgee = o(), re(() => r.value.isInitialRender, (s) => {
        s || (r.value.tolgee = a());
      });
    }
    r.value.tolgee.on("cache", () => {
      r.value.tolgee = Object.freeze(Object.assign({}, r.value.tolgee));
    }), e.config.globalProperties.$t = (...a) => r.value.tolgee.t(...a), e.config.globalProperties.$tolgee = r.value.tolgee;
  }
};
var Wi = function(e, t) {
  return Wi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Wi(e, t);
};
function ei(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Wi(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var te = function() {
  return te = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, te.apply(this, arguments);
};
function dh(e, t) {
  var n = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
  return n;
}
function mi(e, t, n) {
  if (arguments.length === 2) for (var i = 0, r = t.length, a; i < r; i++)
    (a || !(i in t)) && (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function pi(e, t) {
  var n = t && t.cache ? t.cache : ph, i = t && t.serializer ? t.serializer : mh, r = t && t.strategy ? t.strategy : vh;
  return r(e, {
    cache: n,
    serializer: i
  });
}
function fh(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function hh(e, t, n, i) {
  var r = fh(i) ? i : n(i), a = t.get(r);
  return typeof a > "u" && (a = e.call(this, i), t.set(r, a)), a;
}
function us(e, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), a = t.get(r);
  return typeof a > "u" && (a = e.apply(this, i), t.set(r, a)), a;
}
function cs(e, t, n, i, r) {
  return n.bind(t, e, i, r);
}
function vh(e, t) {
  var n = e.length === 1 ? hh : us;
  return cs(e, this, n, t.cache.create(), t.serializer);
}
function gh(e, t) {
  return cs(e, this, us, t.cache.create(), t.serializer);
}
var mh = function() {
  return JSON.stringify(arguments);
};
function yr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
yr.prototype.get = function(e) {
  return this.cache[e];
};
yr.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var ph = {
  create: function() {
    return new yr();
  }
}, yi = {
  variadic: gh
}, Z;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Z || (Z = {}));
var ue;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(ue || (ue = {}));
var Vt;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Vt || (Vt = {}));
function ba(e) {
  return e.type === ue.literal;
}
function yh(e) {
  return e.type === ue.argument;
}
function ds(e) {
  return e.type === ue.number;
}
function fs(e) {
  return e.type === ue.date;
}
function hs(e) {
  return e.type === ue.time;
}
function vs(e) {
  return e.type === ue.select;
}
function gs(e) {
  return e.type === ue.plural;
}
function bh(e) {
  return e.type === ue.pound;
}
function ms(e) {
  return e.type === ue.tag;
}
function ps(e) {
  return !!(e && typeof e == "object" && e.type === Vt.number);
}
function qi(e) {
  return !!(e && typeof e == "object" && e.type === Vt.dateTime);
}
var ys = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, wh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function _h(e) {
  var t = {};
  return e.replace(wh, function(n) {
    var i = n.length;
    switch (n[0]) {
      // Era
      case "G":
        t.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        t.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      // Quarter
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      // Month
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        t.weekday = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      // Period
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        t.minute = ["numeric", "2-digit"][i - 1];
        break;
      // Second
      case "s":
        t.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        t.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      // 1..3, 4, 5: The ISO8601 varios formats
      case "O":
      // 1, 4: milliseconds in day short, long
      case "v":
      // 1, 4: generic non-location format
      case "V":
      // 1, 2, 3, 4: time zone ID or city
      case "X":
      // 1, 2, 3, 4: The ISO8601 varios formats
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Sh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Eh(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Sh).filter(function(f) {
    return f.length > 0;
  }), n = [], i = 0, r = t; i < r.length; i++) {
    var a = r[i], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var s = o[0], u = o.slice(1), l = 0, c = u; l < c.length; l++) {
      var d = c[l];
      if (d.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: s, options: u });
  }
  return n;
}
function Ch(e) {
  return e.replace(/^(.*?)-/, "");
}
var wa = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, bs = /^(@+)?(\+|#+)?[rs]?$/g, xh = /(\*)(0+)|(#+)(0+)|(0+)/g, ws = /^(0+)$/;
function _a(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(bs, function(n, i, r) {
    return typeof r != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : r === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), t;
}
function _s(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Ah(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ws.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Sa(e) {
  var t = {}, n = _s(e);
  return n || t;
}
function Ph(e) {
  for (var t = {}, n = 0, i = e; n < i.length; n++) {
    var r = i[n];
    switch (r.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Ch(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = te(te(te({}, t), { notation: "scientific" }), r.options.reduce(function(u, l) {
          return te(te({}, u), Sa(l));
        }, {}));
        continue;
      case "engineering":
        t = te(te(te({}, t), { notation: "engineering" }), r.options.reduce(function(u, l) {
          return te(te({}, u), Sa(l));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(r.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace(xh, function(u, l, c, d, f, g) {
          if (l)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && f)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (ws.test(r.stem)) {
      t.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (wa.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(wa, function(u, l, c, d, f, g) {
        return c === "*" ? t.minimumFractionDigits = l.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : f && g ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + g.length) : (t.minimumFractionDigits = l.length, t.maximumFractionDigits = l.length), "";
      });
      var a = r.options[0];
      a === "w" ? t = te(te({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = te(te({}, t), _a(a)));
      continue;
    }
    if (bs.test(r.stem)) {
      t = te(te({}, t), _a(r.stem));
      continue;
    }
    var o = _s(r.stem);
    o && (t = te(te({}, t), o));
    var s = Ah(r.stem);
    s && (t = te(te({}, t), s));
  }
  return t;
}
var bn = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function Th(e, t) {
  for (var n = "", i = 0; i < e.length; i++) {
    var r = e.charAt(i);
    if (r === "j") {
      for (var a = 0; i + 1 < e.length && e.charAt(i + 1) === r; )
        a++, i++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), u = "a", l = Bh(t);
      for ((l == "H" || l == "k") && (s = 0); s-- > 0; )
        n += u;
      for (; o-- > 0; )
        n = l + n;
    } else r === "J" ? n += "H" : n += r;
  }
  return n;
}
function Bh(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, i;
  n !== "root" && (i = e.maximize().region);
  var r = bn[i || ""] || bn[n || ""] || bn["".concat(n, "-001")] || bn["001"];
  return r[0];
}
var bi, Lh = new RegExp("^".concat(ys.source, "*")), kh = new RegExp("".concat(ys.source, "*$"));
function J(e, t) {
  return { start: e, end: t };
}
var Ih = !!String.prototype.startsWith && "_a".startsWith("a", 1), Oh = !!String.fromCodePoint, Nh = !!Object.fromEntries, Rh = !!String.prototype.codePointAt, Hh = !!String.prototype.trimStart, Mh = !!String.prototype.trimEnd, Fh = !!Number.isSafeInteger, Vh = Fh ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Xi = !0;
try {
  var Dh = Es("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Xi = ((bi = Dh.exec("a")) === null || bi === void 0 ? void 0 : bi[0]) === "a";
} catch {
  Xi = !1;
}
var Ea = Ih ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), Zi = Oh ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var i = "", r = t.length, a = 0, o; r > a; ) {
      if (o = t[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      i += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return i;
  }
), Ca = (
  // native
  Nh ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, r = t; i < r.length; i++) {
        var a = r[i], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), Ss = Rh ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var i = t.length;
    if (!(n < 0 || n >= i)) {
      var r = t.charCodeAt(n), a;
      return r < 55296 || r > 56319 || n + 1 === i || (a = t.charCodeAt(n + 1)) < 56320 || a > 57343 ? r : (r - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), $h = Hh ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Lh, "");
  }
), Uh = Mh ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(kh, "");
  }
);
function Es(e, t) {
  return new RegExp(e, t);
}
var Yi;
if (Xi) {
  var xa = Es("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Yi = function(t, n) {
    var i;
    xa.lastIndex = n;
    var r = xa.exec(t);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  Yi = function(t, n) {
    for (var i = []; ; ) {
      var r = Ss(t, n);
      if (r === void 0 || Cs(r) || Wh(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return Zi.apply(void 0, i);
  };
var Gh = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, i) {
      for (var r = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(t, i);
          if (o.err)
            return o;
          r.push(o.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var s = this.clonePosition();
            this.bump(), r.push({
              type: ue.pound,
              location: J(s, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(Z.UNMATCHED_CLOSING_TAG, J(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Ki(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            r.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            r.push(o.val);
          }
        }
      }
      return { val: r, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var i = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: ue.literal,
            value: "<".concat(r, "/>"),
            location: J(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ki(this.char()))
            return this.error(Z.INVALID_TAG, J(s, this.clonePosition()));
          var u = this.clonePosition(), l = this.parseTagName();
          return r !== l ? this.error(Z.UNMATCHED_CLOSING_TAG, J(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ue.tag,
              value: r,
              children: o,
              location: J(i, this.clonePosition())
            },
            err: null
          } : this.error(Z.INVALID_TAG, J(s, this.clonePosition())));
        } else
          return this.error(Z.UNCLOSED_TAG, J(i, this.clonePosition()));
      } else
        return this.error(Z.INVALID_TAG, J(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && zh(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          r += a;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          r += o;
          continue;
        }
        var s = this.tryParseLeftAngleBracket();
        if (s) {
          r += s;
          continue;
        }
        break;
      }
      var u = J(i, this.clonePosition());
      return {
        val: { type: ue.literal, value: r, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !jh(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        // '{', '<', '>', '}'
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return Zi.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), Zi(i));
    }, e.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE, J(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Z.EMPTY_ARGUMENT, J(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(Z.MALFORMED_ARGUMENT, J(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE, J(i, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: ue.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: J(i, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE, J(i, this.clonePosition())) : this.parseArgumentOptions(t, n, r, i);
        default:
          return this.error(Z.MALFORMED_ARGUMENT, J(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = Yi(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var a = this.clonePosition(), o = J(t, a);
      return { value: i, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, i, r) {
      var a, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (s) {
        case "":
          return this.error(Z.EXPECT_ARGUMENT_TYPE, J(o, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var l = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
            if (d.err)
              return d;
            var f = Uh(d.val);
            if (f.length === 0)
              return this.error(Z.EXPECT_ARGUMENT_STYLE, J(this.clonePosition(), this.clonePosition()));
            var g = J(c, this.clonePosition());
            l = { style: f, styleLocation: g };
          }
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var h = J(r, this.clonePosition());
          if (l && Ea(l == null ? void 0 : l.style, "::", 0)) {
            var p = $h(l.style.slice(2));
            if (s === "number") {
              var d = this.parseNumberSkeletonFromString(p, l.styleLocation);
              return d.err ? d : {
                val: { type: ue.number, value: i, location: h, style: d.val },
                err: null
              };
            } else {
              if (p.length === 0)
                return this.error(Z.EXPECT_DATE_TIME_SKELETON, h);
              var v = p;
              this.locale && (v = Th(p, this.locale));
              var f = {
                type: Vt.dateTime,
                pattern: v,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? _h(v) : {}
              }, b = s === "date" ? ue.date : ue.time;
              return {
                val: { type: b, value: i, location: h, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? ue.number : s === "date" ? ue.date : ue.time,
              value: i,
              location: h,
              style: (a = l == null ? void 0 : l.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var y = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Z.EXPECT_SELECT_ARGUMENT_OPTIONS, J(y, te({}, y)));
          this.bumpSpace();
          var w = this.parseIdentifierIfPossible(), x = 0;
          if (s !== "select" && w.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Z.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, J(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(Z.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Z.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), w = this.parseIdentifierIfPossible(), x = d.val;
          }
          var _ = this.tryParsePluralOrSelectOptions(t, s, n, w);
          if (_.err)
            return _;
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var P = J(r, this.clonePosition());
          return s === "select" ? {
            val: {
              type: ue.select,
              value: i,
              options: Ca(_.val),
              location: P
            },
            err: null
          } : {
            val: {
              type: ue.plural,
              value: i,
              options: Ca(_.val),
              offset: x,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: P
            },
            err: null
          };
        }
        default:
          return this.error(Z.INVALID_ARGUMENT_TYPE, J(o, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Z.EXPECT_ARGUMENT_CLOSING_BRACE, J(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Z.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, J(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var i = [];
      try {
        i = Eh(t);
      } catch {
        return this.error(Z.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Vt.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Ph(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, i, r) {
      for (var a, o = !1, s = [], u = /* @__PURE__ */ new Set(), l = r.value, c = r.location; ; ) {
        if (l.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Z.EXPECT_PLURAL_ARGUMENT_SELECTOR, Z.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            c = J(d, this.clonePosition()), l = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (u.has(l))
          return this.error(n === "select" ? Z.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Z.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        l === "other" && (o = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Z.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Z.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, J(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(t + 1, n, i);
        if (m.err)
          return m;
        var h = this.tryParseArgumentClose(g);
        if (h.err)
          return h;
        s.push([
          l,
          {
            value: m.val,
            location: J(g, this.clonePosition())
          }
        ]), u.add(l), this.bumpSpace(), a = this.parseIdentifierIfPossible(), l = a.value, c = a.location;
      }
      return s.length === 0 ? this.error(n === "select" ? Z.EXPECT_SELECT_ARGUMENT_SELECTOR : Z.EXPECT_PLURAL_ARGUMENT_SELECTOR, J(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Z.MISSING_OTHER_CLAUSE, J(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var s = this.char();
        if (s >= 48 && s <= 57)
          a = !0, o = o * 10 + (s - 48), this.bump();
        else
          break;
      }
      var u = J(r, this.clonePosition());
      return a ? (o *= i, Vh(o) ? { val: o, err: null } : this.error(n, u)) : this.error(t, u);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Ss(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Ea(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), i = this.message.indexOf(t, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Cs(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function Ki(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function jh(e) {
  return Ki(e) || e === 47;
}
function zh(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Cs(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Wh(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Ji(e) {
  e.forEach(function(t) {
    if (delete t.location, vs(t) || gs(t))
      for (var n in t.options)
        delete t.options[n].location, Ji(t.options[n].value);
    else ds(t) && ps(t.style) || (fs(t) || hs(t)) && qi(t.style) ? delete t.style.location : ms(t) && Ji(t.children);
  });
}
function qh(e, t) {
  t === void 0 && (t = {}), t = te({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Gh(e, t).parse();
  if (n.err) {
    var i = SyntaxError(Z[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t != null && t.captureLocation || Ji(n.val), n.val;
}
var Dt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Dt || (Dt = {}));
var ti = (
  /** @class */
  function(e) {
    ei(t, e);
    function t(n, i, r) {
      var a = e.call(this, n) || this;
      return a.code = i, a.originalMessage = r, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Aa = (
  /** @class */
  function(e) {
    ei(t, e);
    function t(n, i, r, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Dt.INVALID_VALUE, a) || this;
    }
    return t;
  }(ti)
), Xh = (
  /** @class */
  function(e) {
    ei(t, e);
    function t(n, i, r) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), Dt.INVALID_VALUE, r) || this;
    }
    return t;
  }(ti)
), Zh = (
  /** @class */
  function(e) {
    ei(t, e);
    function t(n, i) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), Dt.MISSING_VALUE, i) || this;
    }
    return t;
  }(ti)
), Be;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Be || (Be = {}));
function Yh(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== Be.literal || n.type !== Be.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function Kh(e) {
  return typeof e == "function";
}
function An(e, t, n, i, r, a, o) {
  if (e.length === 1 && ba(e[0]))
    return [
      {
        type: Be.literal,
        value: e[0].value
      }
    ];
  for (var s = [], u = 0, l = e; u < l.length; u++) {
    var c = l[u];
    if (ba(c)) {
      s.push({
        type: Be.literal,
        value: c.value
      });
      continue;
    }
    if (bh(c)) {
      typeof a == "number" && s.push({
        type: Be.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(r && d in r))
      throw new Zh(d, o);
    var f = r[d];
    if (yh(c)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
        type: typeof f == "string" ? Be.literal : Be.object,
        value: f
      });
      continue;
    }
    if (fs(c)) {
      var g = typeof c.style == "string" ? i.date[c.style] : qi(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: Be.literal,
        value: n.getDateTimeFormat(t, g).format(f)
      });
      continue;
    }
    if (hs(c)) {
      var g = typeof c.style == "string" ? i.time[c.style] : qi(c.style) ? c.style.parsedOptions : i.time.medium;
      s.push({
        type: Be.literal,
        value: n.getDateTimeFormat(t, g).format(f)
      });
      continue;
    }
    if (ds(c)) {
      var g = typeof c.style == "string" ? i.number[c.style] : ps(c.style) ? c.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), s.push({
        type: Be.literal,
        value: n.getNumberFormat(t, g).format(f)
      });
      continue;
    }
    if (ms(c)) {
      var m = c.children, h = c.value, p = r[h];
      if (!Kh(p))
        throw new Xh(h, "function", o);
      var v = An(m, t, n, i, r, a), b = p(v.map(function(x) {
        return x.value;
      }));
      Array.isArray(b) || (b = [b]), s.push.apply(s, b.map(function(x) {
        return {
          type: typeof x == "string" ? Be.literal : Be.object,
          value: x
        };
      }));
    }
    if (vs(c)) {
      var y = c.options[f] || c.options.other;
      if (!y)
        throw new Aa(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, An(y.value, t, n, i, r));
      continue;
    }
    if (gs(c)) {
      var y = c.options["=".concat(f)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new ti(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Dt.MISSING_INTL_API, o);
        var w = n.getPluralRules(t, { type: c.pluralType }).select(f - (c.offset || 0));
        y = c.options[w] || c.options.other;
      }
      if (!y)
        throw new Aa(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, An(y.value, t, n, i, r, f - (c.offset || 0)));
      continue;
    }
  }
  return Yh(s);
}
function Jh(e, t) {
  return t ? te(te(te({}, e || {}), t || {}), Object.keys(e).reduce(function(n, i) {
    return n[i] = te(te({}, e[i]), t[i] || {}), n;
  }, {})) : e;
}
function Qh(e, t) {
  return t ? Object.keys(e).reduce(function(n, i) {
    return n[i] = Jh(e[i], t[i]), n;
  }, te({}, e)) : e;
}
function wi(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function ev(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: pi(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, mi([void 0], n, !1)))();
    }, {
      cache: wi(e.number),
      strategy: yi.variadic
    }),
    getDateTimeFormat: pi(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, mi([void 0], n, !1)))();
    }, {
      cache: wi(e.dateTime),
      strategy: yi.variadic
    }),
    getPluralRules: pi(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, mi([void 0], n, !1)))();
    }, {
      cache: wi(e.pluralRules),
      strategy: yi.variadic
    })
  };
}
var tv = (
  /** @class */
  function() {
    function e(t, n, i, r) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var l = a.formatToParts(u);
        if (l.length === 1)
          return l[0].value;
        var c = l.reduce(function(d, f) {
          return !d.length || f.type !== Be.literal || typeof d[d.length - 1] != "string" ? d.push(f.value) : d[d.length - 1] += f.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return An(a.ast, a.locales, a.formatters, a.formats, u, void 0, a.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = a.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = r || {};
        o.formatters;
        var s = dh(o, ["formatters"]);
        this.ast = e.__parse(t, te(te({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Qh(e.formats, i), this.formatters = r && r.formatters || ev(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(t);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = qh, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
), nv = tv;
const iv = () => {
  const e = /* @__PURE__ */ new Map();
  function t(r) {
    try {
      return !!Intl.NumberFormat.supportedLocalesOf(r).length;
    } catch {
      return !1;
    }
  }
  function n(r) {
    if (!e.get(r)) {
      let a = String(r).replace(/[^a-zA-Z]/g, "-");
      for (; !t(a); )
        a = a.split("-").slice(0, -1).join("-") || "en";
      e.set(r, a);
    }
    return e.get(r);
  }
  return Object.freeze({ getLanguage: n, format: ({ translation: r, language: a, params: o }) => {
    const s = !Object.values(o || {}).find((l) => typeof l == "function"), u = n(a);
    return new nv(r, u, void 0, {
      ignoreTag: s
    }).format(o);
  } });
}, rv = () => (e, t) => (t.setFinalFormatter(iv()), e), av = { max_length: "Invalid character length, please insert {limit} characters or less!", min_length: "Invalid character length, please insert minimum {limit} characters or more!", required: "Required!", email: "Please provide a valid e-mail address!", url: "Please provide a valid URL!", max_value: "Please provide a value less than or equal to {limit}!", min_value: "Please provide a value more than or equal to {limit}!", array_min_length: "Please select at least {limit} items!", positive_integer: "Please provide a positive integer!" }, ov = "Set your own", sv = {
  rules: av,
  set_your_own: ov
}, lv = ["en"], uv = [...lv, "en-US"], cv = {
  en: sv
}, xs = sh().use(lh()).use(Uf()).use(rv()), dv = window.location.hostname.startsWith("deploy-preview");
dv && xs.use(oh({ prefix: "https://cdn.tolg.ee/663da029e1beb0ea0704ea269e843a5a" }));
const $e = xs.init({
  availableLanguages: [...uv],
  language: "en",
  staticData: cv
}), fv = (e) => e == null ? !0 : Number(e) >= 0 && new gn(Number(e)).modulo(0.01).toNumber() === 0, hv = (e) => e == null || Number.isSafeInteger(Number(e)) && Number(e) >= 0 ? !0 : $e.t("rules.positive_integer"), vv = (e = 240) => (t) => (t || "").length <= e || $e.t("rules.max_length", { limit: e }), gv = (e) => (t) => !((t || "").length > 0 && (t || "").length < e) || $e.t("rules.min_length", { limit: e }), mv = (e = Number.MAX_SAFE_INTEGER) => (t) => Number(t) <= e || $e.t("rules.max_value", { limit: e }), pv = (e = 0, t) => (n) => Number(n) >= e || t || $e.t("rules.min_value", { limit: e }), yv = (e) => {
  const t = new RegExp(
    "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    "i"
  );
  if (e) {
    const n = e.startsWith("https://") ? e : "https://" + e;
    return t.test(n) || $e.t("rules.url");
  }
  return !e || $e.t("rules.required");
}, bv = (e) => {
  const t = new RegExp(/^(?!https:\/\/)(?!www\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/, "g");
  return e ? t.test(e) : !e;
}, wv = (e) => !!e || $e.t("rules.required"), _v = (e) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) || $e.t("rules.email"), Sv = (e) => {
  const t = new RegExp(
    /^(?:(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*))$/,
    "g"
  );
  return e ? t.test(e) : !e;
}, Ev = (e) => /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)).*$/.test(e) || $e.t("form_hint_password_complexity"), Cv = (e) => (t) => {
  const n = e.indexOf(t);
  return !e.some((i, r) => i === t && r !== n);
}, xv = (e) => (t) => (t == null ? void 0 : t.length) >= e || $e.t("rules.array_min_length", { limit: e }), As = Ae({
  data() {
    return {
      rules: {
        arrayMinLength: xv,
        domain: bv,
        email: _v,
        emailName: Sv,
        maxlength: vv,
        maxTwoDecimal: fv,
        maxValue: mv,
        minlength: gv,
        minValue: pv,
        password: Ev,
        positiveInteger: hv,
        required: wv,
        unique: Cv,
        url: yv
      }
    };
  }
}), Av = Ae({
  name: "GsInput",
  mixins: [As],
  emits: ["update:modelValue", "blur", "update:error"],
  methods: {
    input(e) {
      this.$emit("update:modelValue", e);
    },
    blur(e) {
      this.$emit("blur", e);
    },
    updateError(e) {
      this.$emit("update:error", e);
    }
  },
  props: {
    modelValue: {
      type: [String, Number]
    },
    hideDetails: {
      default: !0,
      type: Boolean
    },
    label: {
      type: String
    }
  }
});
function Pv(e, t, n, i, r, a) {
  return U(), Ve(Hc, ie({
    "hide-details": e.hideDetails,
    label: e.label,
    "model-value": e.modelValue,
    class: "gs-input",
    color: "green",
    flat: ""
  }, e.$attrs, {
    variant: "outlined",
    onBlur: e.blur,
    "onUpdate:modelValue": e.input
  }), ka({ _: 2 }, [
    e.$slots["prepend-inner"] ? {
      name: "prepend-inner",
      fn: ge(() => [
        Je(e.$slots, "prepend-inner", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0
  ]), 1040, ["hide-details", "label", "model-value", "onBlur", "onUpdate:modelValue"]);
}
const Ps = /* @__PURE__ */ Ge(Av, [["render", Pv], ["__scopeId", "data-v-7750213e"]]), Tv = { class: "gs-action-button__label" }, Bv = { class: "gs-action-button__item-content" }, Lv = { class: "gs-action-button__item-text" }, kv = { class: "gs-action-button__item-title" }, Iv = { class: "gs-action-button__item-description" }, Ov = /* @__PURE__ */ Ae({
  __name: "GsActionButton",
  props: {
    label: { default: "Actions" },
    items: { default: () => [] },
    disabled: { type: Boolean },
    fullWidth: { type: Boolean },
    width: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    var o;
    const n = e, i = t, r = (o = Ta()) == null ? void 0 : o.appContext.config.globalProperties.$router;
    function a(s, u) {
      s.to && r && r.push(s.to), i("select", s, u);
    }
    return (s, u) => (U(), Ve(Ce(Bc), {
      offset: 7,
      location: "bottom",
      "close-on-content-click": !0
    }, {
      activator: ge(({ props: l }) => [
        L(Ce(pu), ie(l, {
          class: ["gs-action-button", { "gs-action-button--full-width": n.fullWidth }],
          style: n.width ? { width: n.width } : void 0,
          disabled: n.disabled
        }), {
          prepend: ge(() => [
            L(Ce(Oe), { size: "20" }, {
              default: ge(() => u[0] || (u[0] = [
                Nt("mdi-plus")
              ])),
              _: 1
            })
          ]),
          append: ge(() => [
            L(Ce(Oe), { size: "20" }, {
              default: ge(() => u[1] || (u[1] = [
                Nt("mdi-chevron-down")
              ])),
              _: 1
            })
          ]),
          default: ge(() => [
            B("span", Tv, ve(n.label), 1)
          ]),
          _: 2
        }, 1040, ["class", "style", "disabled"])
      ]),
      default: ge(() => [
        L(Ce(nc), {
          class: "gs-action-button__menu",
          style: ne(
            n.width ? { width: n.width } : n.fullWidth ? { width: "100%" } : void 0
          )
        }, {
          default: ge(() => [
            (U(!0), Q(_e, null, Ct(n.items, (l, c) => (U(), Ve(Ce(ki), {
              key: c,
              class: "gs-action-button__item",
              onClick: (d) => a(l, c)
            }, {
              default: ge(() => [
                B("div", Bv, [
                  L(Ce(Oe), {
                    class: "gs-action-button__item-icon",
                    size: "22"
                  }, {
                    default: ge(() => [
                      Nt(ve(l.icon), 1)
                    ]),
                    _: 2
                  }, 1024),
                  B("div", Lv, [
                    B("span", kv, ve(l.title), 1),
                    B("span", Iv, ve(l.text), 1)
                  ])
                ])
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ]),
          _: 1
        }, 8, ["style"])
      ]),
      _: 1
    }));
  }
}), Nv = /* @__PURE__ */ Ge(Ov, [["__scopeId", "data-v-b5e0b226"]]), Rv = ["aria-disabled", "aria-label"], Hv = /* @__PURE__ */ Ae({
  __name: "GsActionCard",
  props: {
    padding: {},
    width: { default: "auto" },
    height: { default: "auto" },
    disabled: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !1 },
    ariaLabel: {},
    selected: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = A(() => [
      "gs-action-card",
      {
        "gs-action-card--disabled": n.disabled,
        "gs-action-card--full-width": n.fullWidth,
        "gs-action-card--selected": n.selected
      }
    ]), a = (o) => {
      n.disabled || i("click", o);
    };
    return (o, s) => (U(), Q("div", {
      "aria-disabled": o.disabled,
      "aria-label": o.ariaLabel,
      class: G(r.value),
      style: ne({
        padding: o.padding,
        width: o.width,
        height: o.height
      }),
      role: "button",
      onClick: a
    }, [
      Je(o.$slots, "default", {}, void 0, !0)
    ], 14, Rv));
  }
}), Qi = /* @__PURE__ */ Ge(Hv, [["__scopeId", "data-v-cc98c1b9"]]), Mv = { class: "gs-tooltip" }, Fv = { class: "gs-tooltip__popup" }, Vv = /* @__PURE__ */ Ae({
  __name: "GsTooltip",
  props: {
    text: {},
    variant: {},
    placement: {},
    iconSize: {}
  },
  setup(e) {
    const t = e, n = A(
      () => t.variant === "light" ? "gs-tooltip--light" : "gs-tooltip--dark"
    ), i = A(() => t.placement || "top");
    return (r, a) => (U(), Q("div", Mv, [
      L(Uc, {
        class: G([n.value]),
        interactive: !0,
        location: i.value,
        "open-on-click": !0,
        "close-delay": "100",
        height: "auto",
        "max-width": "250px",
        "open-delay": "100",
        width: "auto",
        "z-index": "2"
      }, {
        activator: ge(({ props: o }) => [
          r.$slots.activator ? Je(r.$slots, "activator", {
            key: 0,
            props: o
          }, void 0, !0) : (U(), Q("div", ie({
            key: 1,
            class: "gs-tooltip__icon-wrapper"
          }, o), [
            L(Oe, {
              icon: "mdi-information-outline",
              size: r.iconSize || 16,
              class: "gs-tooltip__icon"
            }, null, 8, ["size"])
          ], 16))
        ]),
        default: ge(() => [
          B("div", Fv, ve(t.text), 1)
        ]),
        _: 3
      }, 8, ["class", "location"])
    ]));
  }
}), Ts = /* @__PURE__ */ Ge(Vv, [["__scopeId", "data-v-f2322950"]]), Dv = { class: "gs-preset-input" }, $v = {
  class: "gs-preset-input__cards",
  role: "radiogroup"
}, Uv = { class: "gs-preset-input__card-content" }, Gv = { class: "gs-preset-input__card-label" }, jv = { class: "gs-preset-input__card-value" }, zv = { class: "gs-preset-input__card-content gs-preset-input__card-content--custom" }, Wv = { class: "gs-preset-input__card-label gs-preset-input__card-label--custom" }, qv = {
  key: 0,
  class: "gs-preset-input__input-wrapper"
}, Xv = /* @__PURE__ */ Ae({
  name: "GsPresetInput",
  __name: "GsPresetInput",
  props: {
    presets: {},
    modelValue: {},
    prefix: {},
    postfix: {},
    inputLabel: {},
    inputPlaceholder: {},
    inputRules: {},
    inputHideDetails: { type: Boolean },
    prependInner: {}
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const { t: n } = uh(), i = e, r = A(() => i.presets.findIndex((c) => c.value === i.modelValue)), a = q(!1);
    Ut(() => {
      a.value = i.modelValue ? r.value === -1 : !1;
    });
    const o = t;
    function s(c) {
      const d = typeof c == "number" ? c : Number(c);
      o("update:model-value", d);
    }
    function u(c) {
      a.value = !1, o("update:model-value", i.presets[c].value);
    }
    function l() {
      a.value = !0, o("update:model-value", 0);
    }
    return (c, d) => (U(), Q("div", Dv, [
      B("div", $v, [
        (U(!0), Q(_e, null, Ct(i.presets, (f, g) => (U(), Ve(Qi, {
          key: f.value,
          "aria-label": f.label,
          selected: r.value === g && !a.value,
          class: "gs-preset-input__card",
          "full-width": "",
          padding: "16px 24px",
          role: "radio",
          onClick: (m) => u(g)
        }, {
          default: ge(() => [
            B("div", Uv, [
              B("div", Gv, [
                Nt(ve(f.label) + " ", 1),
                f.info ? (U(), Ve(Ts, {
                  key: 0,
                  text: f.info,
                  class: "gs-preset-input__info"
                }, null, 8, ["text"])) : He("", !0)
              ]),
              B("div", jv, ve(i.prefix || "") + ve(f.value) + ve(i.postfix || ""), 1)
            ])
          ]),
          _: 2
        }, 1032, ["aria-label", "selected", "onClick"]))), 128)),
        L(Qi, {
          "aria-label": c.$t("set_your_own"),
          selected: a.value,
          class: "gs-preset-input__card",
          padding: "16px 24px",
          onClick: l
        }, {
          default: ge(() => [
            B("div", zv, [
              B("div", Wv, ve(Ce(n)("set_your_own")), 1)
            ])
          ]),
          _: 1
        }, 8, ["aria-label", "selected"])
      ]),
      a.value ? (U(), Q("div", qv, [
        L(Ps, {
          "hide-details": i.inputHideDetails ?? !1,
          label: i.inputLabel || "",
          "model-value": i.modelValue,
          placeholder: i.inputPlaceholder,
          rules: i.inputRules,
          type: "number",
          autofocus: "",
          "onUpdate:modelValue": s
        }, ka({ _: 2 }, [
          c.prependInner ? {
            name: "prepend-inner",
            fn: ge(() => [
              B("strong", null, ve(c.prependInner), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["hide-details", "label", "model-value", "placeholder", "rules"])
      ])) : He("", !0)
    ]));
  }
}), Zv = /* @__PURE__ */ Ge(Xv, [["__scopeId", "data-v-4fa71879"]]), Yv = {
  key: 0,
  class: "simple-table__loading"
}, Kv = { class: "simple-table__header" }, Jv = ["aria-hidden"], Qv = {
  key: 2,
  class: "simple-table__empty"
}, eg = /* @__PURE__ */ Ae({
  name: "GsSimpleTable",
  __name: "GsSimpleTable",
  props: {
    columns: {},
    items: {},
    loading: { type: Boolean, default: !1 },
    minHeight: { default: "304px" },
    skeletonRowCount: { default: 4 },
    rowsClickable: { type: Boolean, default: !0 }
  },
  emits: ["row-click"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = A(() => ({
      "--simple-table-min-height": n.minHeight
    })), a = (o) => {
      n.rowsClickable && i("row-click", o);
    };
    return (o, s) => (U(), Q("div", {
      class: G(["simple-table", { "simple-table--clickable": o.rowsClickable }]),
      style: ne(r.value)
    }, [
      o.loading ? (U(), Q("div", Yv, [
        (U(!0), Q(_e, null, Ct(o.skeletonRowCount, (u) => (U(), Ve(Dc, {
          key: u,
          class: "simple-table__skeleton",
          type: "text"
        }))), 128))
      ])) : o.items.length ? (U(), Q(_e, { key: 1 }, [
        B("div", Kv, [
          (U(!0), Q(_e, null, Ct(o.columns, (u) => (U(), Q("span", {
            key: u.id,
            "aria-hidden": u.ariaHidden || void 0
          }, ve(u.label), 9, Jv))), 128))
        ]),
        (U(!0), Q(_e, null, Ct(o.items, (u) => (U(), Ve(Un(o.rowsClickable ? "button" : "div"), ie({
          key: u.key,
          class: "simple-table__row",
          ref_for: !0
        }, o.rowsClickable ? { type: "button" } : {}, {
          onClick: (l) => a(u)
        }), {
          default: ge(() => [
            Je(o.$slots, "row", { item: u })
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128))
      ], 64)) : (U(), Q("div", Qv, [
        Je(o.$slots, "empty")
      ]))
    ], 6));
  }
}), tg = {
  key: 1,
  class: "gs-layout-card__description"
}, ng = {
  key: 0,
  class: "gs-layout-card__actions"
}, ig = {
  key: 1,
  class: "gs-layout-card__body"
}, rg = {
  key: 2,
  class: "gs-layout-card__footer"
}, ag = /* @__PURE__ */ Ae({
  inheritAttrs: !1,
  __name: "GsLayoutCard",
  props: {
    title: {},
    description: {},
    titleTag: { default: "h2" },
    titleSize: { default: "lg" },
    variant: { default: "card" },
    padding: { default: "default" },
    flushOnMobile: { type: Boolean, default: !1 },
    stretch: { type: Boolean, default: !1 },
    contentGap: { default: "sm" }
  },
  setup(e) {
    const t = e, n = Hs(), i = Ms(), r = A(() => [
      "gs-layout-card",
      `gs-layout-card--${t.variant}`,
      `gs-layout-card--padding-${t.padding}`,
      {
        "gs-layout-card--flush-mobile": t.flushOnMobile,
        "gs-layout-card--stretch": t.stretch,
        "gs-layout-card--gap-md": t.contentGap === "md",
        "gs-layout-card--has-footer": !!i.footer
      },
      n.class
    ]), a = A(() => {
      const o = { ...n };
      return delete o.class, o;
    });
    return (o, s) => (U(), Q("section", ie({ class: r.value }, a.value), [
      o.title || o.description || o.$slots.header || o.$slots.actions ? (U(), Q("header", {
        key: 0,
        class: G([
          "gs-layout-card__header",
          { "gs-layout-card__header--with-actions": o.$slots.actions }
        ])
      }, [
        Je(o.$slots, "header", {}, () => [
          B("div", {
            class: G([
              "gs-layout-card__heading",
              { "gs-layout-card__heading--with-description": o.description }
            ])
          }, [
            o.title ? (U(), Ve(Un(o.titleTag), {
              key: 0,
              class: G(["gs-layout-card__title", `gs-layout-card__title--${o.titleSize}`])
            }, {
              default: ge(() => [
                Nt(ve(o.title), 1)
              ]),
              _: 1
            }, 8, ["class"])) : He("", !0),
            o.description ? (U(), Q("p", tg, ve(o.description), 1)) : He("", !0)
          ], 2)
        ], !0),
        o.$slots.actions ? (U(), Q("div", ng, [
          Je(o.$slots, "actions", {}, void 0, !0)
        ])) : He("", !0)
      ], 2)) : He("", !0),
      o.$slots.default ? (U(), Q("div", ig, [
        Je(o.$slots, "default", {}, void 0, !0)
      ])) : He("", !0),
      o.$slots.footer ? (U(), Q("div", rg, [
        Je(o.$slots, "footer", {}, void 0, !0)
      ])) : He("", !0)
    ], 16));
  }
}), og = /* @__PURE__ */ Ge(ag, [["__scopeId", "data-v-184a34e0"]]), sg = {
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
}, lg = Fs({
  icons: {
    defaultSet: "mdi",
    aliases: Wl,
    sets: {
      mdi: ql
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: sg
    }
  }
});
function ug(e) {
  e.use(ch, { tolgee: $e }).use(lg);
}
const cg = {
  GsButton: Qc,
  GsAlertBar: Yc,
  GsFilter: ad,
  GsTabs: cd,
  GsTag: hd,
  GsDivider: gd,
  GsInput: Ps,
  RulesMixin: As,
  GsActionButton: Nv,
  GsActionCard: Qi,
  GsTooltip: Ts,
  GsPresetInput: Zv,
  GsSimpleTable: eg,
  GsLayoutCard: og
}, vg = {
  // App is loosely typed so consumers resolve against their own vue peer,
  // avoiding Plugin identity mismatches when the library is file-linked.
  install(e) {
    ug(e);
    for (const [t, n] of Object.entries(cg))
      e.component(t, n);
  }
};
export {
  Nv as GsActionButton,
  Qi as GsActionCard,
  Yc as GsAlertBar,
  Qc as GsButton,
  gd as GsDivider,
  ad as GsFilter,
  Ps as GsInput,
  og as GsLayoutCard,
  Zv as GsPresetInput,
  eg as GsSimpleTable,
  cd as GsTabs,
  hd as GsTag,
  Ts as GsTooltip,
  As as RulesMixin,
  vg as default
};
