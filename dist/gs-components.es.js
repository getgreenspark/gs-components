import { reactive as cr, watchEffect as pt, toRef as Z, shallowRef as Se, Fragment as Ge, warn as fr, getCurrentInstance as ws, inject as Ee, computed as N, provide as rn, ref as K, unref as Ue, defineComponent as pe, onBeforeUnmount as on, watch as re, readonly as Pi, onScopeDispose as Le, effectScope as dr, toRaw as Ai, TransitionGroup as hr, Transition as Ot, h as sn, camelize as Es, toRefs as _s, toValue as ft, isRef as Sr, mergeProps as se, createVNode as M, createElementVNode as B, normalizeClass as J, Text as xs, normalizeStyle as ie, nextTick as qe, useId as an, onBeforeMount as Oi, onMounted as ln, Teleport as Cs, withDirectives as Nt, vShow as gr, cloneVNode as Ss, createElementBlock as le, openBlock as Q, createCommentVNode as Qe, createBlock as et, resolveDynamicComponent as Ts, withCtx as Xe, createTextVNode as Ni, toDisplayString as Ae, renderSlot as un, renderList as vr, withModifiers as Ps, onUnmounted as Li, createSlots as Bi } from "vue";
import { createVuetify as As } from "vuetify";
function z(e, t) {
  return (n) => Object.keys(e).reduce((r, i) => {
    const s = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : {
      type: e[i]
    };
    return n && i in n ? r[i] = {
      ...s,
      default: n[i]
    } : r[i] = s, t && !r[i].source && (r[i].source = t), r;
  }, {});
}
const ke = z({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), we = typeof window < "u", Ii = we && "IntersectionObserver" in window;
function Tr(e, t, n) {
  Os(e, t), t.set(e, n);
}
function Os(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Pr(e, t, n) {
  return e.set(Ri(e, t), n), n;
}
function Me(e, t) {
  return e.get(Ri(e, t));
}
function Ri(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function ki(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((r) => ki(e[r], t[r]));
}
function X(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function Hn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ar(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Ns(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Or = Object.freeze({
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
function bn(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Hi(e, t) {
  const n = {};
  for (const r of t)
    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function Nr(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  for (const o in e)
    t.some((s) => s instanceof RegExp ? s.test(o) : s === o) ? r[o] = e[o] : i[o] = e[o];
  return [r, i];
}
function Fi(e, t) {
  const n = {
    ...e
  };
  return t.forEach((r) => delete n[r]), n;
}
const Mi = /^on[^a-z]/, Di = (e) => Mi.test(e), Ls = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Bs(e) {
  const [t, n] = Nr(e, [Mi]), r = Fi(t, Ls), [i, o] = Nr(n, ["class", "style", "id", /^data-/]);
  return Object.assign(i, t), Object.assign(o, r), [i, o];
}
function Dt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Lr(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Is(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let r = 0;
  for (; r < e.length; )
    n.push(e.substr(r, t)), r += t;
  return n;
}
function ct() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const r = {};
  for (const i in e)
    r[i] = e[i];
  for (const i in t) {
    const o = e[i], s = t[i];
    if (Ar(o) && Ar(s)) {
      r[i] = ct(o, s, n);
      continue;
    }
    if (n && Array.isArray(o) && Array.isArray(s)) {
      r[i] = n(o, s);
      continue;
    }
    r[i] = s;
  }
  return r;
}
function Vi(e) {
  return e.map((t) => t.type === Ge ? Vi(t.children) : t).flat();
}
function tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tt.cache.has(e)) return tt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tt.cache.set(e, t), t;
}
tt.cache = /* @__PURE__ */ new Map();
var at = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap();
class Rs {
  constructor(t) {
    Tr(this, at, []), Tr(this, Je, 0), this.size = t;
  }
  get isFull() {
    return Me(at, this).length === this.size;
  }
  push(t) {
    Me(at, this)[Me(Je, this)] = t, Pr(Je, this, (Me(Je, this) + 1) % this.size);
  }
  values() {
    return Me(at, this).slice(Me(Je, this)).concat(Me(at, this).slice(0, Me(Je, this)));
  }
  clear() {
    Me(at, this).length = 0, Pr(Je, this, 0);
  }
}
function mr(e) {
  const t = cr({});
  pt(() => {
    const r = e();
    for (const i in r)
      t[i] = r[i];
  }, {
    flush: "sync"
  });
  const n = {};
  for (const r in t)
    n[r] = Z(() => t[r]);
  return n;
}
function qt(e, t) {
  return e.includes(t);
}
function Ui(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const nt = () => [Function, Array];
function $i(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  if (Array.isArray(e))
    for (const i of e)
      i(...n);
  else typeof e == "function" && e(...n);
}
function ks(e, t) {
  if (!(we && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Hs(e, t) {
  if (!we || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Fn() {
  const e = Se(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Ns(e.value)
  }), t;
}
const Gi = ["top", "bottom"], Fs = ["start", "end", "left", "right"];
function Mn(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = qt(Gi, n) ? "start" : qt(Fs, n) ? "top" : "center"), {
    side: Br(n, t),
    align: Br(r, t)
  };
}
function Br(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function yn(e) {
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
function wn(e) {
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
function Ir(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Rr(e) {
  return qt(Gi, e.side) ? "y" : "x";
}
class Ie {
  constructor(t) {
    let {
      x: n,
      y: r,
      width: i,
      height: o
    } = t;
    this.x = n, this.y = r, this.width = i, this.height = o;
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
function kr(e, t) {
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
function Ms(e) {
  return Array.isArray(e) ? new Ie({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Ds(e) {
  if (e === document.documentElement)
    return visualViewport ? new Ie({
      x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
      y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
      width: visualViewport.width * visualViewport.scale,
      height: visualViewport.height * visualViewport.scale
    }) : new Ie({
      x: 0,
      y: 0,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  {
    const t = e.getBoundingClientRect();
    return new Ie({
      x: t.x,
      y: t.y,
      width: e.clientWidth,
      height: e.clientHeight
    });
  }
}
function ji(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let i, o, s, a, u;
    if (r.startsWith("matrix3d("))
      i = r.slice(9, -1).split(/, /), o = Number(i[0]), s = Number(i[5]), a = Number(i[12]), u = Number(i[13]);
    else if (r.startsWith("matrix("))
      i = r.slice(7, -1).split(/, /), o = Number(i[0]), s = Number(i[3]), a = Number(i[4]), u = Number(i[5]);
    else
      return new Ie(t);
    const l = n.transformOrigin, c = t.x - a - (1 - o) * parseFloat(l), f = t.y - u - (1 - s) * parseFloat(l.slice(l.indexOf(" ") + 1)), d = o ? t.width / o : e.offsetWidth + 1, g = s ? t.height / s : e.offsetHeight + 1;
    return new Ie({
      x: c,
      y: f,
      width: d,
      height: g
    });
  } else
    return new Ie(t);
}
function zi(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let r;
  try {
    r = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof r.finished > "u" && (r.finished = new Promise((i) => {
    r.onfinish = () => {
      i(r);
    };
  })), r;
}
const Vt = /* @__PURE__ */ new WeakMap();
function Vs(e, t) {
  Object.keys(t).forEach((n) => {
    if (Di(n)) {
      const r = Ui(n), i = Vt.get(e);
      if (t[n] == null)
        i == null || i.forEach((o) => {
          const [s, a] = o;
          s === r && (e.removeEventListener(r, a), i.delete(o));
        });
      else if (!i || ![...i].some((o) => o[0] === r && o[1] === t[n])) {
        e.addEventListener(r, t[n]);
        const o = i || /* @__PURE__ */ new Set();
        o.add([r, t[n]]), Vt.has(e) || Vt.set(e, o);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Us(e, t) {
  Object.keys(t).forEach((n) => {
    if (Di(n)) {
      const r = Ui(n), i = Vt.get(e);
      i == null || i.forEach((o) => {
        const [s, a] = o;
        s === r && (e.removeEventListener(r, a), i.delete(o));
      });
    } else
      e.removeAttribute(n);
  });
}
const lt = 2.4, Hr = 0.2126729, Fr = 0.7151522, Mr = 0.072175, $s = 0.55, Gs = 0.58, js = 0.57, zs = 0.62, kt = 0.03, Dr = 1.45, Ws = 5e-4, qs = 1.25, Xs = 1.25, Zs = 0.078, Vr = 12.82051282051282, Ht = 0.06, Ys = 1e-3;
function Ur(e, t) {
  const n = (e.r / 255) ** lt, r = (e.g / 255) ** lt, i = (e.b / 255) ** lt, o = (t.r / 255) ** lt, s = (t.g / 255) ** lt, a = (t.b / 255) ** lt;
  let u = n * Hr + r * Fr + i * Mr, l = o * Hr + s * Fr + a * Mr;
  if (u <= kt && (u += (kt - u) ** Dr), l <= kt && (l += (kt - l) ** Dr), Math.abs(l - u) < Ws) return 0;
  let c;
  if (l > u) {
    const f = (l ** $s - u ** Gs) * qs;
    c = f < Ys ? 0 : f < Zs ? f - f * Vr * Ht : f - Ht;
  } else {
    const f = (l ** zs - u ** js) * Xs;
    c = f > -1e-3 ? 0 : f > -0.078 ? f - f * Vr * Ht : f + Ht;
  }
  return c * 100;
}
function _t(e) {
  fr(`Vuetify: ${e}`);
}
function Ks(e) {
  fr(`Vuetify error: ${e}`);
}
function Dn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Js(e) {
  return Dn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const $r = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Qs = {
  rgb: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  rgba: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  hsl: (e, t, n, r) => Gr({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsla: (e, t, n, r) => Gr({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsv: (e, t, n, r) => St({
    h: e,
    s: t,
    v: n,
    a: r
  }),
  hsva: (e, t, n, r) => St({
    h: e,
    s: t,
    v: n,
    a: r
  })
};
function wt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && _t(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && $r.test(e)) {
    const {
      groups: t
    } = e.match($r), {
      fn: n,
      values: r
    } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((o, s) => o.endsWith("%") || // unitless slv are %
    s > 0 && s < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return Qs[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length) || _t(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && _t(`'${e}' is not a valid hex(a) color`), ea(t);
  } else if (typeof e == "object") {
    if (bn(e, ["r", "g", "b"]))
      return e;
    if (bn(e, ["h", "s", "l"]))
      return St(Wi(e));
    if (bn(e, ["h", "s", "v"]))
      return St(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function St(e) {
  const {
    h: t,
    s: n,
    v: r,
    a: i
  } = e, o = (a) => {
    const u = (a + t / 60) % 6;
    return r - r * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, s = [o(5), o(3), o(1)].map((a) => Math.round(a * 255));
  return {
    r: s[0],
    g: s[1],
    b: s[2],
    a: i
  };
}
function Gr(e) {
  return St(Wi(e));
}
function Wi(e) {
  const {
    h: t,
    s: n,
    l: r,
    a: i
  } = e, o = r + n * Math.min(r, 1 - r), s = o === 0 ? 0 : 2 - 2 * r / o;
  return {
    h: t,
    s,
    v: o,
    a: i
  };
}
function ea(e) {
  e = ta(e);
  let [t, n, r, i] = Is(e, 2).map((o) => parseInt(o, 16));
  return i = i === void 0 ? i : i / 255, {
    r: t,
    g: n,
    b: r,
    a: i
  };
}
function ta(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Lr(Lr(e, 6), 8, "F")), e;
}
function na(e) {
  const t = Math.abs(Ur(wt(0), wt(e)));
  return Math.abs(Ur(wt(16777215), wt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function _e(e, t) {
  const n = ws();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function it() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = _e(e).type;
  return tt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function ra(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Xt = Symbol.for("vuetify:defaults");
function pr() {
  const e = Ee(Xt);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ia(e, t) {
  const n = pr(), r = K(e), i = N(() => {
    if (Ue(t == null ? void 0 : t.disabled)) return n.value;
    const s = Ue(t == null ? void 0 : t.scoped), a = Ue(t == null ? void 0 : t.reset), u = Ue(t == null ? void 0 : t.root);
    if (r.value == null && !(s || a || u)) return n.value;
    let l = ct(r.value, {
      prev: n.value
    });
    if (s) return l;
    if (a || u) {
      const c = Number(a || 1 / 0);
      for (let f = 0; f <= c && !(!l || !("prev" in l)); f++)
        l = l.prev;
      return l && typeof u == "string" && u in l && (l = ct(ct(l, {
        prev: l
      }), l[u])), l;
    }
    return l.prev ? ct(l.prev, l) : l;
  });
  return rn(Xt, i), i;
}
function oa(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[tt(t)] < "u");
}
function sa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pr();
  const r = _e("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const i = N(() => {
    var u;
    return (u = n.value) == null ? void 0 : u[e._as ?? t];
  }), o = new Proxy(e, {
    get(u, l) {
      var g, w, v, C;
      const c = Reflect.get(u, l);
      if (l === "class" || l === "style")
        return [(g = i.value) == null ? void 0 : g[l], c].filter((h) => h != null);
      if (oa(r.vnode, l)) return c;
      const f = (w = i.value) == null ? void 0 : w[l];
      if (f !== void 0) return f;
      const d = (C = (v = n.value) == null ? void 0 : v.global) == null ? void 0 : C[l];
      return d !== void 0 ? d : c;
    }
  }), s = Se();
  pt(() => {
    if (i.value) {
      const u = Object.entries(i.value).filter((l) => {
        let [c] = l;
        return c.startsWith(c[0].toUpperCase());
      });
      s.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      s.value = void 0;
  });
  function a() {
    const u = ra(Xt, r);
    rn(Xt, N(() => s.value ? ct((u == null ? void 0 : u.value) ?? {}, s.value) : u == null ? void 0 : u.value));
  }
  return {
    props: o,
    provideSubDefaults: a
  };
}
function cn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return _t("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = z(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return Hi(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const o = pr();
      if (!o.value) return e._setup(r, i);
      const {
        props: s,
        provideSubDefaults: a
      } = sa(r, r._as ?? e.name, o), u = e._setup(s, i);
      return a(), u;
    };
  }
  return e;
}
function he() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? cn : pe)(t);
}
function qi(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Xi = "cubic-bezier(0.4, 0, 0.2, 1)";
function aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? la(e) : br(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Zt(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (br(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function br(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function la(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function ua(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Pe(e) {
  const t = _e("useRender");
  t.render = e;
}
function ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Fn(), r = K();
  if (we) {
    const i = new ResizeObserver((o) => {
      o.length && (t === "content" ? r.value = o[0].contentRect : r.value = o[0].target.getBoundingClientRect());
    });
    on(() => {
      i.disconnect();
    }), re(() => n.el, (o, s) => {
      s && (i.unobserve(s), r.value = void 0), o && i.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Pi(r)
  };
}
function dt(e, t) {
  let n;
  function r() {
    n = dr(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), r();
    }) : t());
  }
  re(e, (i) => {
    i && !n ? r() : i || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), Le(() => {
    n == null || n.stop();
  });
}
function bt(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const o = _e("useProxiedModel"), s = K(e[t] !== void 0 ? e[t] : n), a = tt(t), l = a !== t ? N(() => {
    var f, d, g, w;
    return e[t], !!(((f = o.vnode.props) != null && f.hasOwnProperty(t) || (d = o.vnode.props) != null && d.hasOwnProperty(a)) && ((g = o.vnode.props) != null && g.hasOwnProperty(`onUpdate:${t}`) || (w = o.vnode.props) != null && w.hasOwnProperty(`onUpdate:${a}`)));
  }) : N(() => {
    var f, d;
    return e[t], !!((f = o.vnode.props) != null && f.hasOwnProperty(t) && ((d = o.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`)));
  });
  dt(() => !l.value, () => {
    re(() => e[t], (f) => {
      s.value = f;
    });
  });
  const c = N({
    get() {
      const f = e[t];
      return r(l.value ? f : s.value);
    },
    set(f) {
      const d = i(f), g = Ai(l.value ? e[t] : s.value);
      g === d || r(g) === f || (s.value = d, o == null || o.emit(`update:${t}`, d));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => l.value ? e[t] : s.value
  }), c;
}
const Zi = Symbol.for("vuetify:locale");
function fa() {
  const e = Ee(Zi);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Lt() {
  const e = Ee(Zi);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Vn = Symbol.for("vuetify:theme"), ot = z({
  theme: String
}, "theme");
function Bt(e) {
  _e("provideTheme");
  const t = Ee(Vn, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = Z(() => e.theme ?? t.name.value), r = Z(() => t.themes.value[n.value]), i = Z(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), o = {
    ...t,
    name: n,
    current: r,
    themeClasses: i
  };
  return rn(Vn, o), o;
}
function da() {
  _e("useTheme");
  const e = Ee(Vn, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const yr = z({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), ha = z({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function xe(e, t, n) {
  return he()({
    name: e,
    props: ha({
      mode: n,
      origin: t
    }),
    setup(r, i) {
      let {
        slots: o
      } = i;
      const s = {
        onBeforeEnter(a) {
          r.origin && (a.style.transformOrigin = r.origin);
        },
        onLeave(a) {
          if (r.leaveAbsolute) {
            const {
              offsetTop: u,
              offsetLeft: l,
              offsetWidth: c,
              offsetHeight: f
            } = a;
            a._transitionInitialStyles = {
              position: a.style.position,
              top: a.style.top,
              left: a.style.left,
              width: a.style.width,
              height: a.style.height
            }, a.style.position = "absolute", a.style.top = `${u}px`, a.style.left = `${l}px`, a.style.width = `${c}px`, a.style.height = `${f}px`;
          }
          r.hideOnLeave && a.style.setProperty("display", "none", "important");
        },
        onAfterLeave(a) {
          if (r.leaveAbsolute && (a != null && a._transitionInitialStyles)) {
            const {
              position: u,
              top: l,
              left: c,
              width: f,
              height: d
            } = a._transitionInitialStyles;
            delete a._transitionInitialStyles, a.style.position = u || "", a.style.top = l || "", a.style.left = c || "", a.style.width = f || "", a.style.height = d || "";
          }
        }
      };
      return () => {
        const a = r.group ? hr : Ot;
        return sn(a, {
          name: r.disabled ? "" : e,
          css: !r.disabled,
          ...r.group ? void 0 : {
            mode: r.mode
          },
          ...r.disabled ? {} : s
        }, o.default);
      };
    }
  });
}
function Yi(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return he()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(r, i) {
      let {
        slots: o
      } = i;
      const s = r.group ? hr : Ot;
      return () => sn(s, {
        name: r.disabled ? "" : e,
        css: !r.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...r.disabled ? {} : t
      }, o.default);
    }
  });
}
function Ki() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", r = Es(`offset-${n}`);
  return {
    onBeforeEnter(s) {
      s._parent = s.parentNode, s._initialStyle = {
        transition: s.style.transition,
        overflow: s.style.overflow,
        [n]: s.style[n]
      };
    },
    onEnter(s) {
      const a = s._initialStyle;
      if (!a) return;
      s.style.setProperty("transition", "none", "important"), s.style.overflow = "hidden";
      const u = `${s[r]}px`;
      s.style[n] = "0", s.offsetHeight, s.style.transition = a.transition, e && s._parent && s._parent.classList.add(e), requestAnimationFrame(() => {
        s.style[n] = u;
      });
    },
    onAfterEnter: o,
    onEnterCancelled: o,
    onLeave(s) {
      s._initialStyle = {
        transition: "",
        overflow: s.style.overflow,
        [n]: s.style[n]
      }, s.style.overflow = "hidden", s.style[n] = `${s[r]}px`, s.offsetHeight, requestAnimationFrame(() => s.style[n] = "0");
    },
    onAfterLeave: i,
    onLeaveCancelled: i
  };
  function i(s) {
    e && s._parent && s._parent.classList.remove(e), o(s);
  }
  function o(s) {
    if (!s._initialStyle) return;
    const a = s._initialStyle[n];
    s.style.overflow = s._initialStyle.overflow, a != null && (s.style[n] = a), delete s._initialStyle;
  }
}
xe("fab-transition", "center center", "out-in");
xe("dialog-bottom-transition");
xe("dialog-top-transition");
xe("fade-transition");
xe("scale-transition");
xe("scroll-x-transition");
xe("scroll-x-reverse-transition");
xe("scroll-y-transition");
xe("scroll-y-reverse-transition");
xe("slide-x-transition");
xe("slide-x-reverse-transition");
const Ji = xe("slide-y-transition");
xe("slide-y-reverse-transition");
Yi("expand-transition", Ki());
const ga = Yi("expand-x-transition", Ki("", !0)), va = z({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), ma = he(!1)({
  name: "VDefaultsProvider",
  props: va(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: r,
      disabled: i,
      reset: o,
      root: s,
      scoped: a
    } = _s(e);
    return ia(r, {
      reset: o,
      root: s,
      scoped: a,
      disabled: i
    }), () => {
      var u;
      return (u = n.default) == null ? void 0 : u.call(n);
    };
  }
}), Qi = z({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function eo(e) {
  return {
    dimensionStyles: N(() => {
      const n = {}, r = X(e.height), i = X(e.maxHeight), o = X(e.maxWidth), s = X(e.minHeight), a = X(e.minWidth), u = X(e.width);
      return r != null && (n.height = r), i != null && (n.maxHeight = i), o != null && (n.maxWidth = o), s != null && (n.minHeight = s), a != null && (n.minWidth = a), u != null && (n.width = u), n;
    })
  };
}
function to(e) {
  return mr(() => {
    const t = ft(e), n = [], r = {};
    if (t.background)
      if (Dn(t.background)) {
        if (r.backgroundColor = t.background, !t.text && Js(t.background)) {
          const i = wt(t.background);
          if (i.a == null || i.a === 1) {
            const o = na(i);
            r.color = o, r.caretColor = o;
          }
        }
      } else
        n.push(`bg-${t.background}`);
    return t.text && (Dn(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), {
      colorClasses: n,
      colorStyles: r
    };
  });
}
function ht(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = to(() => ({
    text: ft(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function xt(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = to(() => ({
    background: ft(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
const no = z({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function ro(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it();
  return {
    roundedClasses: N(() => {
      const r = Sr(e) ? e.value : e.rounded, i = Sr(e) ? e.value : e.tile, o = [];
      if (r === !0 || r === "")
        o.push(`${t}--rounded`);
      else if (typeof r == "string" || r === 0)
        for (const s of String(r).split(" "))
          o.push(`rounded-${s}`);
      else (i || r === !1) && o.push("rounded-0");
      return o;
    })
  };
}
const wr = z({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Er = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: r,
    disabled: i,
    group: o,
    ...s
  } = e, {
    component: a = o ? hr : Ot,
    ...u
  } = Hn(r) ? r : {};
  let l;
  return Hn(r) ? l = se(u, JSON.parse(JSON.stringify({
    disabled: i,
    group: o
  })), s) : l = se({
    name: i || !r ? "" : r
  }, s), sn(a, l, n);
};
function pa(e, t) {
  if (!Ii) return;
  const n = t.modifiers || {}, r = t.value, {
    handler: i,
    options: o
  } = typeof r == "object" ? r : {
    handler: r,
    options: {}
  }, s = new IntersectionObserver(function() {
    var f;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const l = (f = e._observe) == null ? void 0 : f[t.instance.$.uid];
    if (!l) return;
    const c = a.some((d) => d.isIntersecting);
    i && (!n.quiet || l.init) && (!n.once || c || l.init) && i(c, a, u), c && n.once ? io(e, t) : l.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: s
  }, s.observe(e);
}
function io(e, t) {
  var r;
  const n = (r = e._observe) == null ? void 0 : r[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const jr = {
  mounted: pa,
  unmounted: io
}, ba = [null, "default", "comfortable", "compact"], ya = z({
  density: {
    type: String,
    default: "default",
    validator: (e) => ba.includes(e)
  }
}, "density");
function wa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it();
  return {
    densityClasses: Z(() => `${t}--density-${e.density}`)
  };
}
const Ea = {
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
}, _a = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => sn(Sa, {
    ...e,
    class: "mdi"
  })
}, rt = [String, Function, Object, Array], xa = Symbol.for("vuetify:icons"), fn = z({
  icon: {
    type: rt
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), zr = he()({
  name: "VComponentIcon",
  props: fn(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const r = e.icon;
      return M(e.tag, null, {
        default: () => {
          var i;
          return [e.icon ? M(r, null, null) : (i = n.default) == null ? void 0 : i.call(n)];
        }
      });
    };
  }
}), Ca = cn({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: fn(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => M(e.tag, se(n, {
      style: null
    }), {
      default: () => [B("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? B("path", {
        d: r[0],
        "fill-opacity": r[1]
      }, null) : B("path", {
        d: r
      }, null)) : B("path", {
        d: e.icon
      }, null)])]
    });
  }
});
cn({
  name: "VLigatureIcon",
  props: fn(),
  setup(e) {
    return () => M(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Sa = cn({
  name: "VClassIcon",
  props: fn(),
  setup(e) {
    return () => M(e.tag, {
      class: J(e.icon)
    }, null);
  }
}), Ta = (e) => {
  const t = Ee(xa);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: N(() => {
      var u;
      const r = ft(e);
      if (!r) return {
        component: zr
      };
      let i = r;
      if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (u = t.aliases) == null ? void 0 : u[i.slice(1)])), i || _t(`Could not find aliased icon "${r}"`), Array.isArray(i))
        return {
          component: Ca,
          icon: i
        };
      if (typeof i != "string")
        return {
          component: zr,
          icon: i
        };
      const o = Object.keys(t.sets).find((l) => typeof i == "string" && i.startsWith(`${l}:`)), s = o ? i.slice(o.length + 1) : i;
      return {
        component: t.sets[o ?? t.defaultSet].component,
        icon: s
      };
    })
  };
}, Pa = ["x-small", "small", "default", "large", "x-large"], oo = z({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function so(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it();
  return mr(() => {
    const n = e.size;
    let r, i;
    return qt(Pa, n) ? r = `${t}--size-${n}` : n && (i = {
      width: X(n),
      height: X(n)
    }), {
      sizeClasses: r,
      sizeStyles: i
    };
  });
}
const Aa = z({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: rt,
  opacity: [String, Number],
  ...ke(),
  ...oo(),
  ...yr({
    tag: "i"
  }),
  ...ot()
}, "VIcon"), It = he()({
  name: "VIcon",
  props: Aa(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const i = Se(), {
      themeClasses: o
    } = da(), {
      iconData: s
    } = Ta(() => i.value || e.icon), {
      sizeClasses: a
    } = so(e), {
      textColorClasses: u,
      textColorStyles: l
    } = ht(() => e.color);
    return Pe(() => {
      var d, g;
      const c = (d = r.default) == null ? void 0 : d.call(r);
      c && (i.value = (g = Vi(c).filter((w) => w.type === xs && w.children && typeof w.children == "string")[0]) == null ? void 0 : g.children);
      const f = !!(n.onClick || n.onClickOnce);
      return M(s.value.component, {
        tag: e.tag,
        icon: s.value.icon,
        class: J(["v-icon", "notranslate", o.value, a.value, u.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: ie([{
          "--v-icon-opacity": e.opacity
        }, a.value ? void 0 : {
          fontSize: X(e.size),
          height: X(e.size),
          width: X(e.size)
        }, l.value, e.style]),
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function ao(e, t) {
  const n = K(), r = Se(!1);
  if (Ii) {
    const i = new IntersectionObserver((o) => {
      r.value = !!o.find((s) => s.isIntersecting);
    }, t);
    on(() => {
      i.disconnect();
    }), re(n, (o, s) => {
      s && (i.unobserve(s), r.value = !1), o && i.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: r
  };
}
const Oa = z({
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
  ...ke(),
  ...oo(),
  ...yr({
    tag: "div"
  }),
  ...ot()
}, "VProgressCircular"), Na = he()({
  name: "VProgressCircular",
  props: Oa(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = 20, i = 2 * Math.PI * r, o = K(), {
      themeClasses: s
    } = Bt(e), {
      sizeClasses: a,
      sizeStyles: u
    } = so(e), {
      textColorClasses: l,
      textColorStyles: c
    } = ht(() => e.color), {
      textColorClasses: f,
      textColorStyles: d
    } = ht(() => e.bgColor), {
      intersectionRef: g,
      isIntersecting: w
    } = ao(), {
      resizeRef: v,
      contentRect: C
    } = ca(), h = Z(() => Ct(parseFloat(e.modelValue), 0, 100)), y = Z(() => Number(e.width)), m = Z(() => u.value ? Number(e.size) : C.value ? C.value.width : Math.max(y.value, 32)), b = Z(() => r / (1 - y.value / m.value) * 2), T = Z(() => y.value / m.value * b.value), p = Z(() => X((100 - h.value) / 100 * i));
    return pt(() => {
      g.value = o.value, v.value = o.value;
    }), Pe(() => M(e.tag, {
      ref: o,
      class: J(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": w.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, s.value, a.value, l.value, e.class]),
      style: ie([u.value, c.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : h.value
    }, {
      default: () => [B("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${b.value} ${b.value}`
      }, [B("circle", {
        class: J(["v-progress-circular__underlay", f.value]),
        style: ie(d.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": T.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": 0
      }, null), B("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": T.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": p.value
      }, null)]), n.default && B("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: h.value
      })])]
    })), {};
  }
}), Wr = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, La = z({
  location: String
}, "location");
function Ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: r
  } = Lt();
  return {
    locationStyles: N(() => {
      if (!e.location) return {};
      const {
        side: o,
        align: s
      } = Mn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
      function a(l) {
        return n ? n(l) : 0;
      }
      const u = {};
      return o !== "center" && (t ? u[Wr[o]] = `calc(100% - ${a(o)}px)` : u[o] = 0), s !== "center" ? t ? u[Wr[s]] = `calc(100% - ${a(s)}px)` : u[s] = 0 : (o === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[o]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[o]), u;
    })
  };
}
const Ia = z({
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
  ...ke(),
  ...La({
    location: "top"
  }),
  ...no(),
  ...yr(),
  ...ot()
}, "VProgressLinear"), Ra = he()({
  name: "VProgressLinear",
  props: Ia(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var F;
    let {
      slots: n
    } = t;
    const r = bt(e, "modelValue"), {
      isRtl: i,
      rtlClasses: o
    } = Lt(), {
      themeClasses: s
    } = Bt(e), {
      locationStyles: a
    } = Ba(e), {
      textColorClasses: u,
      textColorStyles: l
    } = ht(() => e.color), {
      backgroundColorClasses: c,
      backgroundColorStyles: f
    } = xt(() => e.bgColor || e.color), {
      backgroundColorClasses: d,
      backgroundColorStyles: g
    } = xt(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: w,
      backgroundColorStyles: v
    } = xt(() => e.color), {
      roundedClasses: C
    } = ro(e), {
      intersectionRef: h,
      isIntersecting: y
    } = ao(), m = N(() => parseFloat(e.max)), b = N(() => parseFloat(e.height)), T = N(() => Ct(parseFloat(e.bufferValue) / m.value * 100, 0, 100)), p = N(() => Ct(parseFloat(r.value) / m.value * 100, 0, 100)), S = N(() => i.value !== e.reverse), E = N(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), I = we && ((F = window.matchMedia) == null ? void 0 : F.call(window, "(forced-colors: active)").matches);
    function D(_) {
      if (!h.value) return;
      const {
        left: P,
        right: O,
        width: A
      } = h.value.getBoundingClientRect(), L = S.value ? A - _.clientX + (O - A) : _.clientX - P;
      r.value = Math.round(L / A * m.value);
    }
    return Pe(() => M(e.tag, {
      ref: h,
      class: J(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && y.value,
        "v-progress-linear--reverse": S.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, C.value, s.value, o.value, e.class]),
      style: ie([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? X(b.value) : 0,
        "--v-progress-linear-height": X(b.value),
        ...e.absolute ? a.value : {}
      }, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(r.value), m.value),
      onClick: e.clickable && D
    }, {
      default: () => [e.stream && B("div", {
        key: "stream",
        class: J(["v-progress-linear__stream", u.value]),
        style: {
          ...l.value,
          [S.value ? "left" : "right"]: X(-b.value),
          borderTop: `${X(b.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${X(b.value / 4)})`,
          width: X(100 - T.value, "%"),
          "--v-progress-linear-stream-to": X(b.value * (S.value ? 1 : -1))
        }
      }, null), B("div", {
        class: J(["v-progress-linear__background", I ? void 0 : c.value]),
        style: ie([f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), B("div", {
        class: J(["v-progress-linear__buffer", I ? void 0 : d.value]),
        style: ie([g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: X(T.value, "%")
        }])
      }, null), M(Ot, {
        name: E.value
      }, {
        default: () => [e.indeterminate ? B("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((_) => B("div", {
          key: _,
          class: J(["v-progress-linear__indeterminate", _, I ? void 0 : w.value]),
          style: ie(v.value)
        }, null))]) : B("div", {
          class: J(["v-progress-linear__determinate", I ? void 0 : w.value]),
          style: ie([v.value, {
            width: X(p.value, "%")
          }])
        }, null)]
      }), n.default && B("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: p.value,
        buffer: T.value
      })])]
    })), {};
  }
}), ka = z({
  loading: [Boolean, String]
}, "loader");
function Ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it();
  return {
    loaderClasses: Z(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Fa(e, t) {
  var r;
  let {
    slots: n
  } = t;
  return B("div", {
    class: J(`${e.name}__loader`)
  }, [((r = n.default) == null ? void 0 : r.call(n, {
    color: e.color,
    isActive: e.active
  })) || M(Ra, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
function Ma() {
  var e, t;
  return (t = (e = _e("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
let En = !1;
function Da(e, t) {
  let n = !1, r, i;
  we && (e != null && e.beforeEach) && (qe(() => {
    window.addEventListener("popstate", o), r = e.beforeEach((s, a, u) => {
      En ? n ? t(u) : u() : setTimeout(() => n ? t(u) : u()), En = !0;
    }), i = e == null ? void 0 : e.afterEach(() => {
      En = !1;
    });
  }), Le(() => {
    window.removeEventListener("popstate", o), r == null || r(), i == null || i();
  }));
  function o(s) {
    var a;
    (a = s.state) != null && a.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
const Un = Symbol("rippleStop"), Va = 80;
function qr(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function $n(e) {
  return e.constructor.name === "TouchEvent";
}
function lo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ua = function(e, t) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
  if (!lo(e)) {
    const d = t.getBoundingClientRect(), g = $n(e) ? e.touches[e.touches.length - 1] : e;
    r = g.clientX - d.left, i = g.clientY - d.top;
  }
  let o = 0, s = 0.3;
  (f = t._ripple) != null && f.circle ? (s = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((r - o) ** 2 + (i - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const a = `${(t.clientWidth - o * 2) / 2}px`, u = `${(t.clientHeight - o * 2) / 2}px`, l = n.center ? a : `${r - o}px`, c = n.center ? u : `${i - o}px`;
  return {
    radius: o,
    scale: s,
    x: l,
    y: c,
    centerX: a,
    centerY: u
  };
}, Yt = {
  /* eslint-disable max-statements */
  show(e, t) {
    var g;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
      return;
    const r = document.createElement("span"), i = document.createElement("span");
    r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
    const {
      radius: o,
      scale: s,
      x: a,
      y: u,
      centerX: l,
      centerY: c
    } = Ua(e, t, n), f = `${o * 2}px`;
    i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(r);
    const d = window.getComputedStyle(t);
    d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), qr(i, `translate(${a}, ${u}) scale3d(${s},${s},${s})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), qr(i, `translate(${l}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var o;
    if (!((o = e == null ? void 0 : e._ripple) != null && o.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const r = performance.now() - Number(n.dataset.activated), i = Math.max(250 - r, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var a;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((a = n.parentNode) == null ? void 0 : a.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, i);
  }
};
function uo(e) {
  return typeof e > "u" || !!e;
}
function Tt(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Un])) {
    if (e[Un] = !0, $n(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || lo(e), n._ripple.class && (t.class = n._ripple.class), $n(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Yt.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var r;
        (r = n == null ? void 0 : n._ripple) != null && r.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Va);
    } else
      Yt.show(e, n, t);
  }
}
function Xr(e) {
  e[Un] = !0;
}
function ye(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        ye(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Yt.hide(t);
  }
}
function co(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Pt = !1;
function fo(e) {
  !Pt && (e.keyCode === Or.enter || e.keyCode === Or.space) && (Pt = !0, Tt(e));
}
function ho(e) {
  Pt = !1, ye(e);
}
function go(e) {
  Pt && (Pt = !1, ye(e));
}
function vo(e, t, n) {
  const {
    value: r,
    modifiers: i
  } = t, o = uo(r);
  if (o || Yt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = i.center, e._ripple.circle = i.circle, Hn(r) && r.class && (e._ripple.class = r.class), o && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", Xr, {
        passive: !0
      }), e.addEventListener("mousedown", Xr);
      return;
    }
    e.addEventListener("touchstart", Tt, {
      passive: !0
    }), e.addEventListener("touchend", ye, {
      passive: !0
    }), e.addEventListener("touchmove", co, {
      passive: !0
    }), e.addEventListener("touchcancel", ye), e.addEventListener("mousedown", Tt), e.addEventListener("mouseup", ye), e.addEventListener("mouseleave", ye), e.addEventListener("keydown", fo), e.addEventListener("keyup", ho), e.addEventListener("blur", go), e.addEventListener("dragstart", ye, {
      passive: !0
    });
  } else !o && n && mo(e);
}
function mo(e) {
  e.removeEventListener("mousedown", Tt), e.removeEventListener("touchstart", Tt), e.removeEventListener("touchend", ye), e.removeEventListener("touchmove", co), e.removeEventListener("touchcancel", ye), e.removeEventListener("mouseup", ye), e.removeEventListener("mouseleave", ye), e.removeEventListener("keydown", fo), e.removeEventListener("keyup", ho), e.removeEventListener("dragstart", ye), e.removeEventListener("blur", go);
}
function $a(e, t) {
  vo(e, t, !1);
}
function Ga(e) {
  delete e._ripple, mo(e);
}
function ja(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = uo(t.oldValue);
  vo(e, t, n);
}
const za = {
  mounted: $a,
  unmounted: Ga,
  updated: ja
}, Wa = z({
  text: String,
  onClick: nt(),
  ...ke(),
  ...ot()
}, "VLabel"), qa = he()({
  name: "VLabel",
  props: Wa(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Pe(() => {
      var r;
      return B("label", {
        class: J(["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class]),
        style: ie(e.style),
        onClick: e.onClick
      }, [e.text, (r = n.default) == null ? void 0 : r.call(n)]);
    }), {};
  }
});
function po(e) {
  const {
    t
  } = fa();
  function n(r) {
    let {
      name: i,
      color: o,
      ...s
    } = r;
    const a = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[i], u = e[`onClick:${i}`];
    function l(f) {
      f.key !== "Enter" && f.key !== " " || (f.preventDefault(), f.stopPropagation(), $i(u, new PointerEvent("click", f)));
    }
    const c = u && a ? t(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return M(It, se({
      icon: e[`${i}Icon`],
      "aria-label": c,
      onClick: u,
      onKeydown: l,
      color: o
    }, s), null);
  }
  return {
    InputIcon: n
  };
}
const Xa = z({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ke(),
  ...wr({
    transition: {
      component: Ji,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Za = he()({
  name: "VMessages",
  props: Xa(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = N(() => Dt(e.messages)), {
      textColorClasses: i,
      textColorStyles: o
    } = ht(() => e.color);
    return Pe(() => M(Er, {
      transition: e.transition,
      tag: "div",
      class: J(["v-messages", i.value, e.class]),
      style: ie([o.value, e.style])
    }, {
      default: () => [e.active && r.value.map((s, a) => B("div", {
        class: "v-messages__message",
        key: `${a}-${r.value}`
      }, [n.message ? n.message({
        message: s
      }) : s]))]
    })), {};
  }
}), bo = z({
  focused: Boolean,
  "onUpdate:focused": nt()
}, "focus");
function yo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it();
  const n = bt(e, "focused"), r = Z(() => ({
    [`${t}--focused`]: n.value
  }));
  function i() {
    n.value = !0;
  }
  function o() {
    n.value = !1;
  }
  return {
    focusClasses: r,
    isFocused: n,
    focus: i,
    blur: o
  };
}
const Ya = Symbol.for("vuetify:form");
function Ka(e) {
  const t = Ee(Ya, null);
  return {
    ...t,
    isReadonly: N(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: N(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const Ja = Symbol.for("vuetify:rules");
function Qa(e) {
  const t = Ee(Ja, null);
  return t ? t(e) : Z(e);
}
const el = z({
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
  ...bo()
}, "validation");
function tl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : an();
  const r = bt(e, "modelValue"), i = N(() => e.validationValue === void 0 ? r.value : e.validationValue), o = Ka(e), s = Qa(() => e.rules), a = K([]), u = Se(!0), l = N(() => !!(Dt(r.value === "" ? null : r.value).length || Dt(i.value === "" ? null : i.value).length)), c = N(() => {
    var b;
    return (b = e.errorMessages) != null && b.length ? Dt(e.errorMessages).concat(a.value).slice(0, Math.max(0, Number(e.maxErrors))) : a.value;
  }), f = N(() => {
    var p;
    let b = (e.validateOn ?? ((p = o.validateOn) == null ? void 0 : p.value)) || "input";
    b === "lazy" && (b = "input lazy"), b === "eager" && (b = "input eager");
    const T = new Set((b == null ? void 0 : b.split(" ")) ?? []);
    return {
      input: T.has("input"),
      blur: T.has("blur") || T.has("input") || T.has("invalid-input"),
      invalidInput: T.has("invalid-input"),
      lazy: T.has("lazy"),
      eager: T.has("eager")
    };
  }), d = N(() => {
    var b;
    return e.error || (b = e.errorMessages) != null && b.length ? !1 : e.rules.length ? u.value ? a.value.length || f.value.lazy ? null : !0 : !a.value.length : !0;
  }), g = Se(!1), w = N(() => ({
    [`${t}--error`]: d.value === !1,
    [`${t}--dirty`]: l.value,
    [`${t}--disabled`]: o.isDisabled.value,
    [`${t}--readonly`]: o.isReadonly.value
  })), v = _e("validation"), C = N(() => e.name ?? Ue(n));
  Oi(() => {
    var b;
    (b = o.register) == null || b.call(o, {
      id: C.value,
      vm: v,
      validate: m,
      reset: h,
      resetValidation: y
    });
  }), on(() => {
    var b;
    (b = o.unregister) == null || b.call(o, C.value);
  }), ln(async () => {
    var b;
    f.value.lazy || await m(!f.value.eager), (b = o.update) == null || b.call(o, C.value, d.value, c.value);
  }), dt(() => f.value.input || f.value.invalidInput && d.value === !1, () => {
    re(i, () => {
      if (i.value != null)
        m();
      else if (e.focused) {
        const b = re(() => e.focused, (T) => {
          T || m(), b();
        });
      }
    });
  }), dt(() => f.value.blur, () => {
    re(() => e.focused, (b) => {
      b || m();
    });
  }), re([d, c], () => {
    var b;
    (b = o.update) == null || b.call(o, C.value, d.value, c.value);
  });
  async function h() {
    r.value = null, await qe(), await y();
  }
  async function y() {
    u.value = !0, f.value.lazy ? a.value = [] : await m(!f.value.eager);
  }
  async function m() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const T = [];
    g.value = !0;
    for (const p of s.value) {
      if (T.length >= Number(e.maxErrors ?? 1))
        break;
      const E = await (typeof p == "function" ? p : () => p)(i.value);
      if (E !== !0) {
        if (E !== !1 && typeof E != "string") {
          console.warn(`${E} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        T.push(E || "");
      }
    }
    return a.value = T, g.value = !1, u.value = b, a.value;
  }
  return {
    errorMessages: c,
    isDirty: l,
    isDisabled: o.isDisabled,
    isReadonly: o.isReadonly,
    isPristine: u,
    isValid: d,
    isValidating: g,
    reset: h,
    resetValidation: y,
    validate: m,
    validationClasses: w
  };
}
const wo = z({
  id: String,
  appendIcon: rt,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: rt,
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
  "onClick:prepend": nt(),
  "onClick:append": nt(),
  ...ke(),
  ...ya(),
  ...Hi(Qi(), ["maxWidth", "minWidth", "width"]),
  ...ot(),
  ...el()
}, "VInput"), Zr = he()({
  name: "VInput",
  props: {
    ...wo()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: r,
      emit: i
    } = t;
    const {
      densityClasses: o
    } = wa(e), {
      dimensionStyles: s
    } = eo(e), {
      themeClasses: a
    } = Bt(e), {
      rtlClasses: u
    } = Lt(), {
      InputIcon: l
    } = po(e), c = an(), f = N(() => e.id || `input-${c}`), d = N(() => `${f.value}-messages`), {
      errorMessages: g,
      isDirty: w,
      isDisabled: v,
      isReadonly: C,
      isPristine: h,
      isValid: y,
      isValidating: m,
      reset: b,
      resetValidation: T,
      validate: p,
      validationClasses: S
    } = tl(e, "v-input", f), E = N(() => ({
      id: f,
      messagesId: d,
      isDirty: w,
      isDisabled: v,
      isReadonly: C,
      isPristine: h,
      isValid: y,
      isValidating: m,
      reset: b,
      resetValidation: T,
      validate: p
    })), I = Z(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), D = Z(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? I.value : e.iconColor;
    }), F = N(() => {
      var _;
      return (_ = e.errorMessages) != null && _.length || !h.value && g.value.length ? g.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return Pe(() => {
      var L, V, W, te;
      const _ = !!(r.prepend || e.prependIcon), P = !!(r.append || e.appendIcon), O = F.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && (O || !!r.details);
      return B("div", {
        class: J(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, o.value, a.value, u.value, S.value, e.class]),
        style: ie([s.value, e.style])
      }, [_ && B("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(L = r.prepend) == null ? void 0 : L.call(r, E.value), e.prependIcon && M(l, {
        key: "prepend-icon",
        name: "prepend",
        color: D.value
      }, null)]), r.default && B("div", {
        class: "v-input__control"
      }, [(V = r.default) == null ? void 0 : V.call(r, E.value)]), P && B("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && M(l, {
        key: "append-icon",
        name: "append",
        color: D.value
      }, null), (W = r.append) == null ? void 0 : W.call(r, E.value)]), A && B("div", {
        id: d.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [M(Za, {
        active: O,
        messages: F.value
      }, {
        message: r.message
      }), (te = r.details) == null ? void 0 : te.call(r, E.value)])]);
    }), {
      reset: b,
      resetValidation: T,
      validate: p,
      isValid: y,
      errorMessages: g
    };
  }
}), nl = Symbol.for("vuetify:display");
function rl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it();
  const n = Ee(nl);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = N(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), i = Z(() => t ? {
    [`${t}--mobile`]: r.value
  } : {});
  return {
    ...n,
    displayClasses: i,
    mobile: r
  };
}
function _n(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function il(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Yr(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: r
    } = e, i = r === "left" ? 0 : r === "center" ? t.width / 2 : r === "right" ? t.width : r, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return _n({
      x: i,
      y: o
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: r
    } = e, i = n === "left" ? 0 : n === "right" ? t.width : n, o = r === "top" ? 0 : r === "center" ? t.height / 2 : r === "bottom" ? t.height : r;
    return _n({
      x: i,
      y: o
    }, t);
  }
  return _n({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Eo = {
  static: al,
  // specific viewport position, usually centered
  connected: ul
  // connected to a certain element
}, ol = z({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Eo
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
function sl(e, t) {
  const n = K({}), r = K();
  we && dt(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    var u, l;
    re(() => e.locationStrategy, a), Le(() => {
      window.removeEventListener("resize", i), visualViewport == null || visualViewport.removeEventListener("resize", o), visualViewport == null || visualViewport.removeEventListener("scroll", s), r.value = void 0;
    }), window.addEventListener("resize", i, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("resize", o, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("scroll", s, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? r.value = (u = e.locationStrategy(t, e, n)) == null ? void 0 : u.updateLocation : r.value = (l = Eo[e.locationStrategy](t, e, n)) == null ? void 0 : l.updateLocation;
  });
  function i(a) {
    var u;
    (u = r.value) == null || u.call(r, a);
  }
  function o(a) {
    var u;
    (u = r.value) == null || u.call(r, a);
  }
  function s(a) {
    var u;
    (u = r.value) == null || u.call(r, a);
  }
  return {
    contentStyles: n,
    updateLocation: r
  };
}
function al() {
}
function ll(e, t) {
  const n = ji(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function ul(e, t, n) {
  (Array.isArray(e.target.value) || ua(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: i,
    preferredOrigin: o
  } = mr(() => {
    const h = Mn(t.location, e.isRtl.value), y = t.origin === "overlap" ? h : t.origin === "auto" ? yn(h) : Mn(t.origin, e.isRtl.value);
    return h.side === y.side && h.align === wn(y).align ? {
      preferredAnchor: Ir(h),
      preferredOrigin: Ir(y)
    } : {
      preferredAnchor: h,
      preferredOrigin: y
    };
  }), [s, a, u, l] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => N(() => {
    const y = parseFloat(t[h]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = N(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = !1, d = -1;
  const g = new Rs(4), w = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((y) => {
      y !== d && g.clear(), requestAnimationFrame((m) => {
        d = m;
      });
    }), g.isFull) {
      const y = g.values();
      if (ki(y.at(-1), y.at(-3)))
        return;
    }
    const h = C();
    h && g.push(h.flipped);
  });
  re([e.target, e.contentEl], (h, y) => {
    let [m, b] = h, [T, p] = y;
    T && !Array.isArray(T) && w.unobserve(T), m && !Array.isArray(m) && w.observe(m), p && w.unobserve(p), b && w.observe(b);
  }, {
    immediate: !0
  }), Le(() => {
    w.disconnect();
  });
  let v = new Ie({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  function C() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (v = Ms(e.target.value));
    const h = ll(e.contentEl.value, e.isRtl.value), y = Zt(e.contentEl.value), m = 12;
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const b = y.reduce((P, O) => {
      const A = Ds(O);
      return P ? new Ie({
        x: Math.max(P.left, A.left),
        y: Math.max(P.top, A.top),
        width: Math.min(P.right, A.right) - Math.max(P.left, A.left),
        height: Math.min(P.bottom, A.bottom) - Math.max(P.top, A.top)
      }) : A;
    }, void 0);
    b.x += m, b.y += m, b.width -= m * 2, b.height -= m * 2;
    let T = {
      anchor: i.value,
      origin: o.value
    };
    function p(P) {
      const O = new Ie(h), A = Yr(P.anchor, v), L = Yr(P.origin, O);
      let {
        x: V,
        y: W
      } = il(A, L);
      switch (P.anchor.side) {
        case "top":
          W -= c.value[0];
          break;
        case "bottom":
          W += c.value[0];
          break;
        case "left":
          V -= c.value[0];
          break;
        case "right":
          V += c.value[0];
          break;
      }
      switch (P.anchor.align) {
        case "top":
          W -= c.value[1];
          break;
        case "bottom":
          W += c.value[1];
          break;
        case "left":
          V -= c.value[1];
          break;
        case "right":
          V += c.value[1];
          break;
      }
      return O.x += V, O.y += W, O.width = Math.min(O.width, u.value), O.height = Math.min(O.height, l.value), {
        overflows: kr(O, b),
        x: V,
        y: W
      };
    }
    let S = 0, E = 0;
    const I = {
      x: 0,
      y: 0
    }, D = {
      x: !1,
      y: !1
    };
    let F = -1;
    for (; ; ) {
      if (F++ > 10) {
        Ks("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: P,
        y: O,
        overflows: A
      } = p(T);
      S += P, E += O, h.x += P, h.y += O;
      {
        const L = Rr(T.anchor), V = A.x.before || A.x.after, W = A.y.before || A.y.after;
        let te = !1;
        if (["x", "y"].forEach((U) => {
          if (U === "x" && V && !D.x || U === "y" && W && !D.y) {
            const ae = {
              anchor: {
                ...T.anchor
              },
              origin: {
                ...T.origin
              }
            }, be = U === "x" ? L === "y" ? wn : yn : L === "y" ? yn : wn;
            ae.anchor = be(ae.anchor), ae.origin = be(ae.origin);
            const {
              overflows: ne
            } = p(ae);
            (ne[U].before <= A[U].before && ne[U].after <= A[U].after || ne[U].before + ne[U].after < (A[U].before + A[U].after) / 2) && (T = ae, te = D[U] = !0);
          }
        }), te) continue;
      }
      A.x.before && (S += A.x.before, h.x += A.x.before), A.x.after && (S -= A.x.after, h.x -= A.x.after), A.y.before && (E += A.y.before, h.y += A.y.before), A.y.after && (E -= A.y.after, h.y -= A.y.after);
      {
        const L = kr(h, b);
        I.x = b.width - L.x.before - L.x.after, I.y = b.height - L.y.before - L.y.after, S += L.x.before, h.x += L.x.before, E += L.y.before, h.y += L.y.before;
      }
      break;
    }
    const _ = Rr(T.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${T.anchor.side} ${T.anchor.align}`,
      transformOrigin: `${T.origin.side} ${T.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: X(xn(E)),
      left: e.isRtl.value ? void 0 : X(xn(S)),
      right: e.isRtl.value ? X(xn(-S)) : void 0,
      minWidth: X(_ === "y" ? Math.min(s.value, v.width) : s.value),
      maxWidth: X(Kr(Ct(I.x, s.value === 1 / 0 ? 0 : s.value, u.value))),
      maxHeight: X(Kr(Ct(I.y, a.value === 1 / 0 ? 0 : a.value, l.value)))
    }), {
      available: I,
      contentBox: h,
      flipped: D
    };
  }
  return re(() => [i.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => C()), qe(() => {
    const h = C();
    if (!h) return;
    const {
      available: y,
      contentBox: m
    } = h;
    m.height > y.y && requestAnimationFrame(() => {
      C(), requestAnimationFrame(() => {
        C();
      });
    });
  }), {
    updateLocation: C
  };
}
function xn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Kr(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Gn = !0;
const Kt = [];
function cl(e) {
  !Gn || Kt.length ? (Kt.push(e), jn()) : (Gn = !1, e(), jn());
}
let Jr = -1;
function jn() {
  cancelAnimationFrame(Jr), Jr = requestAnimationFrame(() => {
    const e = Kt.shift();
    e && e(), Kt.length ? jn() : Gn = !0;
  });
}
const Ut = {
  none: null,
  close: hl,
  block: gl,
  reposition: vl
}, fl = z({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ut
  }
}, "VOverlay-scroll-strategies");
function dl(e, t) {
  if (!we) return;
  let n;
  pt(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = dr(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      var r;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (r = Ut[e.scrollStrategy]) == null || r.call(Ut, t, e, n);
    }));
  }), Le(() => {
    n == null || n.stop();
  });
}
function hl(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  _o(e.targetEl.value ?? e.contentEl.value, t);
}
function gl(e, t) {
  var s;
  const n = (s = e.root.value) == null ? void 0 : s.offsetParent, r = [.../* @__PURE__ */ new Set([...Zt(e.targetEl.value, t.contained ? n : void 0), ...Zt(e.contentEl.value, t.contained ? n : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), i = window.innerWidth - document.documentElement.offsetWidth, o = ((a) => br(a) && a)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), r.forEach((a, u) => {
    a.style.setProperty("--v-body-scroll-x", X(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", X(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", X(i)), a.classList.add("v-overlay-scroll-blocked");
  }), Le(() => {
    r.forEach((a, u) => {
      const l = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), f = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -l, a.scrollTop = -c, a.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function vl(e, t, n) {
  let r = !1, i = -1, o = -1;
  function s(a) {
    cl(() => {
      var c, f;
      const u = performance.now();
      (f = (c = e.updateLocation).value) == null || f.call(c, a), r = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    n.run(() => {
      _o(e.targetEl.value ?? e.contentEl.value, (a) => {
        r ? (cancelAnimationFrame(i), i = requestAnimationFrame(() => {
          i = requestAnimationFrame(() => {
            s(a);
          });
        })) : s(a);
      });
    });
  }), Le(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(i);
  });
}
function _o(e, t) {
  const n = [document, ...Zt(e)];
  n.forEach((r) => {
    r.addEventListener("scroll", t, {
      passive: !0
    });
  }), Le(() => {
    n.forEach((r) => {
      r.removeEventListener("scroll", t);
    });
  });
}
const ml = Symbol.for("vuetify:v-menu"), pl = z({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function bl(e, t) {
  let n = () => {
  };
  function r(s) {
    n == null || n();
    const a = Number(s ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      n = Hs(a, () => {
        t == null || t(s), u(s);
      });
    });
  }
  function i() {
    return r(!0);
  }
  function o() {
    return r(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: i,
    runCloseDelay: o
  };
}
const yl = z({
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
  ...pl()
}, "VOverlay-activator");
function wl(e, t) {
  let {
    isActive: n,
    isTop: r,
    contentEl: i
  } = t;
  const o = _e("useActivator"), s = K();
  let a = !1, u = !1, l = !0;
  const c = N(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = N(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: d,
    runCloseDelay: g
  } = bl(e, (E) => {
    E === (e.openOnHover && a || c.value && u) && !(e.openOnHover && n.value && !r.value) && (n.value !== E && (l = !0), n.value = E);
  }), w = K(), v = {
    onClick: (E) => {
      E.stopPropagation(), s.value = E.currentTarget || E.target, n.value || (w.value = [E.clientX, E.clientY]), n.value = !n.value;
    },
    onMouseenter: (E) => {
      var I;
      (I = E.sourceCapabilities) != null && I.firesTouchEvents || (a = !0, s.value = E.currentTarget || E.target, d());
    },
    onMouseleave: (E) => {
      a = !1, g();
    },
    onFocus: (E) => {
      ks(E.target, ":focus-visible") !== !1 && (u = !0, E.stopPropagation(), s.value = E.currentTarget || E.target, d());
    },
    onBlur: (E) => {
      u = !1, E.stopPropagation(), g();
    }
  }, C = N(() => {
    const E = {};
    return f.value && (E.onClick = v.onClick), e.openOnHover && (E.onMouseenter = v.onMouseenter, E.onMouseleave = v.onMouseleave), c.value && (E.onFocus = v.onFocus, E.onBlur = v.onBlur), E;
  }), h = N(() => {
    const E = {};
    if (e.openOnHover && (E.onMouseenter = () => {
      a = !0, d();
    }, E.onMouseleave = () => {
      a = !1, g();
    }), c.value && (E.onFocusin = () => {
      u = !0, d();
    }, E.onFocusout = () => {
      u = !1, g();
    }), e.closeOnContentClick) {
      const I = Ee(ml, null);
      E.onClick = () => {
        n.value = !1, I == null || I.closeParents();
      };
    }
    return E;
  }), y = N(() => {
    const E = {};
    return e.openOnHover && (E.onMouseenter = () => {
      l && (a = !0, l = !1, d());
    }, E.onMouseleave = () => {
      a = !1, g();
    }), E;
  });
  re(r, (E) => {
    var I;
    E && (e.openOnHover && !a && (!c.value || !u) || c.value && !u && (!e.openOnHover || !a)) && !((I = i.value) != null && I.contains(document.activeElement)) && (n.value = !1);
  }), re(n, (E) => {
    E || setTimeout(() => {
      w.value = void 0;
    });
  }, {
    flush: "post"
  });
  const m = Fn();
  pt(() => {
    m.value && qe(() => {
      s.value = m.el;
    });
  });
  const b = Fn(), T = N(() => e.target === "cursor" && w.value ? w.value : b.value ? b.el : xo(e.target, o) || s.value), p = N(() => Array.isArray(T.value) ? void 0 : T.value);
  let S;
  return re(() => !!e.activator, (E) => {
    E && we ? (S = dr(), S.run(() => {
      El(e, o, {
        activatorEl: s,
        activatorEvents: C
      });
    })) : S && S.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Le(() => {
    S == null || S.stop();
  }), {
    activatorEl: s,
    activatorRef: m,
    target: T,
    targetEl: p,
    targetRef: b,
    activatorEvents: C,
    contentEvents: h,
    scrimEvents: y
  };
}
function El(e, t, n) {
  let {
    activatorEl: r,
    activatorEvents: i
  } = n;
  re(() => e.activator, (u, l) => {
    if (l && u !== l) {
      const c = a(l);
      c && s(c);
    }
    u && qe(() => o());
  }, {
    immediate: !0
  }), re(() => e.activatorProps, () => {
    o();
  }), Le(() => {
    s();
  });
  function o() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && Vs(u, se(i.value, l));
  }
  function s() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && Us(u, se(i.value, l));
  }
  function a() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const l = xo(u, t);
    return r.value = (l == null ? void 0 : l.nodeType) === Node.ELEMENT_NODE ? l : void 0, r.value;
  }
}
function xo(e, t) {
  var r, i;
  if (!e) return;
  let n;
  if (e === "parent") {
    let o = (i = (r = t == null ? void 0 : t.proxy) == null ? void 0 : r.$el) == null ? void 0 : i.parentNode;
    for (; o != null && o.hasAttribute("data-no-activator"); )
      o = o.parentNode;
    n = o;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function _l() {
  if (!we) return Se(!1);
  const {
    ssr: e
  } = rl();
  if (e) {
    const t = Se(!1);
    return ln(() => {
      t.value = !0;
    }), t;
  } else
    return Se(!0);
}
const xl = z({
  eager: Boolean
}, "lazy");
function Cl(e, t) {
  const n = Se(!1), r = Z(() => n.value || e.eager || t.value);
  re(t, () => n.value = !0);
  function i() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: r,
    onAfterLeave: i
  };
}
function Co() {
  const t = _e("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Qr = Symbol.for("vuetify:stack"), yt = cr([]);
function Sl(e, t, n) {
  const r = _e("useStack"), i = !n, o = Ee(Qr, void 0), s = cr({
    activeChildren: /* @__PURE__ */ new Set()
  });
  rn(Qr, s);
  const a = Se(Number(ft(t)));
  dt(e, () => {
    var f;
    const c = (f = yt.at(-1)) == null ? void 0 : f[1];
    a.value = c ? c + 10 : Number(ft(t)), i && yt.push([r.uid, a.value]), o == null || o.activeChildren.add(r.uid), Le(() => {
      if (i) {
        const d = Ai(yt).findIndex((g) => g[0] === r.uid);
        yt.splice(d, 1);
      }
      o == null || o.activeChildren.delete(r.uid);
    });
  });
  const u = Se(!0);
  i && pt(() => {
    var f;
    const c = ((f = yt.at(-1)) == null ? void 0 : f[0]) === r.uid;
    setTimeout(() => u.value = c);
  });
  const l = Z(() => !s.activeChildren.size);
  return {
    globalTop: Pi(u),
    localTop: l,
    stackStyles: Z(() => ({
      zIndex: a.value
    }))
  };
}
function Tl(e) {
  return {
    teleportTarget: N(() => {
      const n = e();
      if (n === !0 || !we) return;
      const r = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (r == null) {
        fr(`Unable to locate target ${n}`);
        return;
      }
      let i = [...r.children].find((o) => o.matches(".v-overlay-container"));
      return i || (i = document.createElement("div"), i.className = "v-overlay-container", r.appendChild(i)), i;
    })
  };
}
function Pl() {
  return !0;
}
function So(e, t, n) {
  if (!e || To(e, n) === !1) return !1;
  const r = qi(t);
  if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && r.host === e.target) return !1;
  const i = (typeof n.value == "object" && n.value.include || (() => []))();
  return i.push(t), !i.some((o) => o == null ? void 0 : o.contains(e.target));
}
function To(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Pl)(e);
}
function Al(e, t, n) {
  const r = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && So(e, t, n) && setTimeout(() => {
    To(e, n) && r && r(e);
  }, 0);
}
function ei(e, t) {
  const n = qi(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const ti = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (i) => Al(i, e, t), r = (i) => {
      e._clickOutside.lastMousedownWasOutside = So(i, e, t);
    };
    ei(e, (i) => {
      i.addEventListener("click", n, !0), i.addEventListener("mousedown", r, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: r
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (ei(e, (n) => {
      var o;
      if (!n || !((o = e._clickOutside) != null && o[t.instance.$.uid])) return;
      const {
        onClick: r,
        onMousedown: i
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", r, !0), n.removeEventListener("mousedown", i, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function Ol(e) {
  const {
    modelValue: t,
    color: n,
    ...r
  } = e;
  return M(Ot, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && B("div", se({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, r), null)]
  });
}
const Po = z({
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
  ...yl(),
  ...ke(),
  ...Qi(),
  ...xl(),
  ...ol(),
  ...fl(),
  ...ot(),
  ...wr()
}, "VOverlay"), ni = he()({
  name: "VOverlay",
  directives: {
    vClickOutside: ti
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Po()
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
      attrs: r,
      emit: i
    } = t;
    const o = _e("VOverlay"), s = K(), a = K(), u = K(), l = bt(e, "modelValue"), c = N({
      get: () => l.value,
      set: (G) => {
        G && e.disabled || (l.value = G);
      }
    }), {
      themeClasses: f
    } = Bt(e), {
      rtlClasses: d,
      isRtl: g
    } = Lt(), {
      hasContent: w,
      onAfterLeave: v
    } = Cl(e, c), C = xt(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: h,
      localTop: y,
      stackStyles: m
    } = Sl(c, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: b,
      activatorRef: T,
      target: p,
      targetEl: S,
      targetRef: E,
      activatorEvents: I,
      contentEvents: D,
      scrimEvents: F
    } = wl(e, {
      isActive: c,
      isTop: y,
      contentEl: u
    }), {
      teleportTarget: _
    } = Tl(() => {
      var ge, Ke, st;
      const G = e.attach || e.contained;
      if (G) return G;
      const ue = ((ge = b == null ? void 0 : b.value) == null ? void 0 : ge.getRootNode()) || ((st = (Ke = o.proxy) == null ? void 0 : Ke.$el) == null ? void 0 : st.getRootNode());
      return ue instanceof ShadowRoot ? ue : !1;
    }), {
      dimensionStyles: P
    } = eo(e), O = _l(), {
      scopeId: A
    } = Co();
    re(() => e.disabled, (G) => {
      G && (c.value = !1);
    });
    const {
      contentStyles: L,
      updateLocation: V
    } = sl(e, {
      isRtl: g,
      contentEl: u,
      target: p,
      isActive: c
    });
    dl(e, {
      root: s,
      contentEl: u,
      targetEl: S,
      isActive: c,
      updateLocation: V
    });
    function W(G) {
      i("click:outside", G), e.persistent ? Ce() : c.value = !1;
    }
    function te(G) {
      return c.value && h.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || G.target === a.value || G instanceof MouseEvent && G.shadowTarget === a.value);
    }
    we && re(c, (G) => {
      G ? window.addEventListener("keydown", U) : window.removeEventListener("keydown", U);
    }, {
      immediate: !0
    }), on(() => {
      we && window.removeEventListener("keydown", U);
    });
    function U(G) {
      var ue, ge, Ke;
      G.key === "Escape" && h.value && ((ue = u.value) != null && ue.contains(document.activeElement) || i("keydown", G), e.persistent ? Ce() : (c.value = !1, (ge = u.value) != null && ge.contains(document.activeElement) && ((Ke = b.value) == null || Ke.focus())));
    }
    function ae(G) {
      G.key === "Escape" && !h.value || i("keydown", G);
    }
    const be = Ma();
    dt(() => e.closeOnBack, () => {
      Da(be, (G) => {
        h.value && c.value ? (G(!1), e.persistent ? Ce() : c.value = !1) : G();
      });
    });
    const ne = K();
    re(() => c.value && (e.absolute || e.contained) && _.value == null, (G) => {
      if (G) {
        const ue = aa(s.value);
        ue && ue !== document.scrollingElement && (ne.value = ue.scrollTop);
      }
    });
    function Ce() {
      e.noClickAnimation || u.value && zi(u.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Xi
      });
    }
    function fe() {
      i("afterEnter");
    }
    function Fe() {
      v(), i("afterLeave");
    }
    return Pe(() => {
      var G;
      return B(Ge, null, [(G = n.activator) == null ? void 0 : G.call(n, {
        isActive: c.value,
        targetRef: E,
        props: se({
          ref: T
        }, I.value, e.activatorProps)
      }), O.value && w.value && M(Cs, {
        disabled: !_.value,
        to: _.value
      }, {
        default: () => [B("div", se({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": c.value,
            "v-overlay--contained": e.contained
          }, f.value, d.value, e.class],
          style: [m.value, {
            "--v-overlay-opacity": e.opacity,
            top: X(ne.value)
          }, e.style],
          ref: s,
          onKeydown: ae
        }, A, r), [M(Ol, se({
          color: C,
          modelValue: c.value && !!e.scrim,
          ref: a
        }, F.value), null), M(Er, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: p.value,
          onAfterEnter: fe,
          onAfterLeave: Fe
        }, {
          default: () => {
            var ue;
            return [Nt(B("div", se({
              ref: u,
              class: ["v-overlay__content", e.contentClass],
              style: [P.value, L.value]
            }, D.value, e.contentProps), [(ue = n.default) == null ? void 0 : ue.call(n, {
              isActive: c
            })]), [[gr, c.value], [ti, {
              handler: W,
              closeConditional: te,
              include: () => [b.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: b,
      scrimEl: a,
      target: p,
      animateClick: Ce,
      contentEl: u,
      globalTop: h,
      localTop: y,
      updateLocation: V
    };
  }
}), Cn = Symbol("Forwarded refs");
function Sn(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function Ao(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return e[Cn] = n, new Proxy(e, {
    get(i, o) {
      if (Reflect.has(i, o))
        return Reflect.get(i, o);
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const s of n)
          if (s.value && Reflect.has(s.value, o)) {
            const a = Reflect.get(s.value, o);
            return typeof a == "function" ? a.bind(s.value) : a;
          }
      }
    },
    has(i, o) {
      if (Reflect.has(i, o))
        return !0;
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const s of n)
        if (s.value && Reflect.has(s.value, o))
          return !0;
      return !1;
    },
    set(i, o, s) {
      if (Reflect.has(i, o))
        return Reflect.set(i, o, s);
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const a of n)
        if (a.value && Reflect.has(a.value, o))
          return Reflect.set(a.value, o, s);
      return !1;
    },
    getOwnPropertyDescriptor(i, o) {
      var a;
      const s = Reflect.getOwnPropertyDescriptor(i, o);
      if (s) return s;
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const u of n) {
          if (!u.value) continue;
          const l = Sn(u.value, o) ?? ("_" in u.value ? Sn((a = u.value._) == null ? void 0 : a.setupState, o) : void 0);
          if (l) return l;
        }
        for (const u of n) {
          const l = u.value && u.value[Cn];
          if (!l) continue;
          const c = l.slice();
          for (; c.length; ) {
            const f = c.shift(), d = Sn(f.value, o);
            if (d) return d;
            const g = f.value && f.value[Cn];
            g && c.push(...g);
          }
        }
      }
    }
  });
}
const Nl = z({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ke(),
  ...wr({
    transition: {
      component: Ji
    }
  })
}, "VCounter"), Ll = he()({
  name: "VCounter",
  functional: !0,
  props: Nl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = Z(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return Pe(() => M(Er, {
      transition: e.transition
    }, {
      default: () => [Nt(B("div", {
        class: J(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: ie(e.style)
      }, [n.default ? n.default({
        counter: r.value,
        max: e.max,
        value: e.value
      }) : r.value]), [[gr, e.active]])]
    })), {};
  }
}), Bl = z({
  floating: Boolean,
  ...ke()
}, "VFieldLabel"), Ft = he()({
  name: "VFieldLabel",
  props: Bl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Pe(() => M(qa, {
      class: J(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: ie(e.style),
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Il = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Oo = z({
  appendInnerIcon: rt,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: rt,
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
  prependInnerIcon: rt,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Il.includes(e)
  },
  "onClick:clear": nt(),
  "onClick:appendInner": nt(),
  "onClick:prependInner": nt(),
  ...ke(),
  ...ka(),
  ...no(),
  ...ot()
}, "VField"), ri = he()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...bo(),
    ...Oo()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: r,
      slots: i
    } = t;
    const {
      themeClasses: o
    } = Bt(e), {
      loaderClasses: s
    } = Ha(e), {
      focusClasses: a,
      isFocused: u,
      focus: l,
      blur: c
    } = yo(e), {
      InputIcon: f
    } = po(e), {
      roundedClasses: d
    } = ro(e), {
      rtlClasses: g
    } = Lt(), w = Z(() => e.dirty || e.active), v = Z(() => !!(e.label || i.label)), C = Z(() => !e.singleLine && v.value), h = an(), y = N(() => e.id || `input-${h}`), m = Z(() => `${y.value}-messages`), b = K(), T = K(), p = K(), S = N(() => ["plain", "underlined"].includes(e.variant)), E = N(() => e.error || e.disabled ? void 0 : w.value && u.value ? e.color : e.baseColor), I = N(() => {
      if (!(!e.iconColor || e.glow && !u.value))
        return e.iconColor === !0 ? E.value : e.iconColor;
    }), {
      backgroundColorClasses: D,
      backgroundColorStyles: F
    } = xt(() => e.bgColor), {
      textColorClasses: _,
      textColorStyles: P
    } = ht(E);
    re(w, (L) => {
      if (C.value) {
        const V = b.value.$el, W = T.value.$el;
        requestAnimationFrame(() => {
          const te = ji(V), U = W.getBoundingClientRect(), ae = U.x - te.x, be = U.y - te.y - (te.height / 2 - U.height / 2), ne = U.width / 0.75, Ce = Math.abs(ne - te.width) > 1 ? {
            maxWidth: X(ne)
          } : void 0, fe = getComputedStyle(V), Fe = getComputedStyle(W), G = parseFloat(fe.transitionDuration) * 1e3 || 150, ue = parseFloat(Fe.getPropertyValue("--v-field-label-scale")), ge = Fe.getPropertyValue("color");
          V.style.visibility = "visible", W.style.visibility = "hidden", zi(V, {
            transform: `translate(${ae}px, ${be}px) scale(${ue})`,
            color: ge,
            ...Ce
          }, {
            duration: G,
            easing: Xi,
            direction: L ? "normal" : "reverse"
          }).finished.then(() => {
            V.style.removeProperty("visibility"), W.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const O = N(() => ({
      isActive: w,
      isFocused: u,
      controlRef: p,
      blur: c,
      focus: l
    }));
    function A(L) {
      L.target !== document.activeElement && L.preventDefault();
    }
    return Pe(() => {
      var ae, be, ne;
      const L = e.variant === "outlined", V = !!(i["prepend-inner"] || e.prependInnerIcon), W = !!(e.clearable || i.clear) && !e.disabled, te = !!(i["append-inner"] || e.appendInnerIcon || W), U = () => i.label ? i.label({
        ...O.value,
        label: e.label,
        props: {
          for: y.value
        }
      }) : e.label;
      return B("div", se({
        class: ["v-field", {
          "v-field--active": w.value,
          "v-field--appended": te,
          "v-field--center-affix": e.centerAffix ?? !S.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": V,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !U(),
          [`v-field--variant-${e.variant}`]: !0
        }, o.value, D.value, a.value, s.value, d.value, g.value, e.class],
        style: [F.value, e.style],
        onClick: A
      }, n), [B("div", {
        class: "v-field__overlay"
      }, null), M(Fa, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: i.loader
      }), V && B("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && M(f, {
        key: "prepend-icon",
        name: "prependInner",
        color: I.value
      }, null), (ae = i["prepend-inner"]) == null ? void 0 : ae.call(i, O.value)]), B("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && C.value && M(Ft, {
        key: "floating-label",
        ref: T,
        class: J([_.value]),
        floating: !0,
        for: y.value,
        style: ie(P.value)
      }, {
        default: () => [U()]
      }), v.value && M(Ft, {
        key: "label",
        ref: b,
        for: y.value
      }, {
        default: () => [U()]
      }), ((be = i.default) == null ? void 0 : be.call(i, {
        ...O.value,
        props: {
          id: y.value,
          class: "v-field__input",
          "aria-describedby": m.value
        },
        focus: l,
        blur: c
      })) ?? B("div", {
        id: y.value,
        class: "v-field__input",
        "aria-describedby": m.value
      }, null)]), W && M(ga, {
        key: "clear"
      }, {
        default: () => [Nt(B("div", {
          class: "v-field__clearable",
          onMousedown: (Ce) => {
            Ce.preventDefault(), Ce.stopPropagation();
          }
        }, [M(ma, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [i.clear ? i.clear({
            ...O.value,
            props: {
              onFocus: l,
              onBlur: c,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : M(f, {
            name: "clear",
            onFocus: l,
            onBlur: c,
            tabindex: -1
          }, null)]
        })]), [[gr, e.dirty]])]
      }), te && B("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(ne = i["append-inner"]) == null ? void 0 : ne.call(i, O.value), e.appendInnerIcon && M(f, {
        key: "append-icon",
        name: "appendInner",
        color: I.value
      }, null)]), B("div", {
        class: J(["v-field__outline", _.value]),
        style: ie(P.value)
      }, [L && B(Ge, null, [B("div", {
        class: "v-field__outline__start"
      }, null), C.value && B("div", {
        class: "v-field__outline__notch"
      }, [M(Ft, {
        ref: T,
        floating: !0,
        for: y.value
      }, {
        default: () => [U()]
      })]), B("div", {
        class: "v-field__outline__end"
      }, null)]), S.value && C.value && M(Ft, {
        ref: T,
        floating: !0,
        for: y.value
      }, {
        default: () => [U()]
      })])]);
    }), {
      controlRef: p,
      fieldIconColor: I
    };
  }
}), Rl = ["color", "file", "time", "date", "datetime-local", "week", "month"], kl = z({
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
  ...wo(),
  ...Oo()
}, "VTextField"), Hl = he()({
  name: "VTextField",
  directives: {
    vIntersect: jr
  },
  inheritAttrs: !1,
  props: kl(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: r,
      slots: i
    } = t;
    const o = bt(e, "modelValue"), {
      isFocused: s,
      focus: a,
      blur: u
    } = yo(e), l = N(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), c = N(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = N(() => ["plain", "underlined"].includes(e.variant));
    function d(p, S) {
      var E, I;
      !e.autofocus || !p || (I = (E = S[0].target) == null ? void 0 : E.focus) == null || I.call(E);
    }
    const g = K(), w = K(), v = K(), C = N(() => Rl.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
    function h() {
      s.value || a(), qe(() => {
        var p;
        v.value !== document.activeElement && ((p = v.value) == null || p.focus());
      });
    }
    function y(p) {
      r("mousedown:control", p), p.target !== v.value && (h(), p.preventDefault());
    }
    function m(p) {
      r("click:control", p);
    }
    function b(p, S) {
      p.stopPropagation(), h(), qe(() => {
        o.value = null, S(), $i(e["onClick:clear"], p);
      });
    }
    function T(p) {
      var E;
      const S = p.target;
      if (o.value = S.value, (E = e.modelModifiers) != null && E.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const I = [S.selectionStart, S.selectionEnd];
        qe(() => {
          S.selectionStart = I[0], S.selectionEnd = I[1];
        });
      }
    }
    return Pe(() => {
      const p = !!(i.counter || e.counter !== !1 && e.counter != null), S = !!(p || i.details), [E, I] = Bs(n), {
        modelValue: D,
        ...F
      } = Zr.filterProps(e), _ = ri.filterProps(e);
      return M(Zr, se({
        ref: g,
        modelValue: o.value,
        "onUpdate:modelValue": (P) => o.value = P,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, E, F, {
        centerAffix: !f.value,
        focused: s.value
      }), {
        ...i,
        default: (P) => {
          let {
            id: O,
            isDisabled: A,
            isDirty: L,
            isReadonly: V,
            isValid: W,
            reset: te
          } = P;
          return M(ri, se({
            ref: w,
            onMousedown: y,
            onClick: m,
            "onClick:clear": (U) => b(U, te),
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, _, {
            id: O.value,
            active: C.value || L.value,
            dirty: L.value || e.dirty,
            disabled: A.value,
            focused: s.value,
            error: W.value === !1
          }), {
            ...i,
            default: (U) => {
              let {
                props: {
                  class: ae,
                  ...be
                }
              } = U;
              const ne = Nt(B("input", se({
                ref: v,
                value: o.value,
                onInput: T,
                autofocus: e.autofocus,
                readonly: V.value,
                disabled: A.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: h,
                onBlur: u
              }, be, I), null), [[jr, {
                handler: d
              }, null, {
                once: !0
              }]]);
              return B(Ge, null, [e.prefix && B("span", {
                class: "v-text-field__prefix"
              }, [B("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), i.default ? B("div", {
                class: J(ae),
                "data-no-activator": ""
              }, [i.default(), ne]) : Ss(ne, {
                class: ae
              }), e.suffix && B("span", {
                class: "v-text-field__suffix"
              }, [B("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: S ? (P) => {
          var O;
          return B(Ge, null, [(O = i.details) == null ? void 0 : O.call(i, P), p && B(Ge, null, [B("span", null, null), M(Ll, {
            active: e.persistentCounter || s.value,
            value: l.value,
            max: c.value,
            disabled: e.disabled
          }, i.counter)])]);
        } : void 0
      });
    }), Ao({}, g, w, v);
  }
}), Fl = z({
  id: String,
  interactive: Boolean,
  text: String,
  ...Fi(Po({
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
}, "VTooltip"), Ml = he()({
  name: "VTooltip",
  props: Fl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = bt(e, "modelValue"), {
      scopeId: i
    } = Co(), o = an(), s = Z(() => e.id || `v-tooltip-${o}`), a = K(), u = N(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), l = N(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = Z(() => e.transition != null ? e.transition : r.value ? "scale-transition" : "fade-transition"), f = N(() => se({
      "aria-describedby": s.value
    }, e.activatorProps));
    return Pe(() => {
      const d = ni.filterProps(e);
      return M(ni, se({
        ref: a,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: s.value
      }, d, {
        modelValue: r.value,
        "onUpdate:modelValue": (g) => r.value = g,
        transition: c.value,
        absolute: !0,
        location: u.value,
        origin: l.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: f.value,
        _disableGlobalStack: !0
      }, i), {
        activator: n.activator,
        default: function() {
          var C;
          for (var g = arguments.length, w = new Array(g), v = 0; v < g; v++)
            w[v] = arguments[v];
          return ((C = n.default) == null ? void 0 : C.call(n, ...w)) ?? e.text;
        }
      });
    }), Ao({}, a);
  }
}), Dl = { class: "d-flex" }, Vl = { class: "gs-alert-bar__content" }, Ul = { class: "gs-alert-bar__icon" }, $l = { class: "d-flex flex-column" }, Gl = ["innerHTML"], jl = ["innerHTML"], zl = /* @__PURE__ */ pe({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, n = N(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (r, i) => (Q(), le("div", {
      class: J(n.value),
      role: "alert"
    }, [
      B("div", Dl, [
        B("div", Vl, [
          B("div", Ul, [
            M(Ue(It), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          B("div", $l, [
            r.title ? (Q(), le("span", {
              key: 0,
              class: "title",
              innerHTML: r.title
            }, null, 8, Gl)) : Qe("", !0),
            B("span", {
              class: "message",
              innerHTML: r.message
            }, null, 8, jl)
          ])
        ])
      ])
    ], 2));
  }
}), He = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Wl = /* @__PURE__ */ He(zl, [["__scopeId", "data-v-5fb92636"]]), ql = {
  key: 1,
  class: "text"
}, Xl = /* @__PURE__ */ pe({
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
    const t = e, n = N(() => t.href ? "a" : t.tag || "button"), r = N(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), i = N(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), o = N(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (s, a) => Nt((Q(), et(Ts(n.value), {
      class: J(i.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: ie({ width: s.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: Xe(() => [
        t.icon && !t.loading ? (Q(), et(Ue(It), {
          key: 0,
          class: "icon"
        }, {
          default: Xe(() => [
            Ni(Ae(t.icon), 1)
          ]),
          _: 1
        })) : Qe("", !0),
        s.$slots.default ? (Q(), le("span", ql, [
          un(s.$slots, "default", {}, void 0, !0)
        ])) : Qe("", !0),
        t.loading ? (Q(), et(Ue(Na), {
          key: 2,
          size: o.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : Qe("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [za, r.value]
    ]);
  }
}), Zl = /* @__PURE__ */ He(Xl, [["__scopeId", "data-v-c9c252f8"]]), Yl = pe({
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
}), Kl = { class: "filter-button-list" }, Jl = ["onClick"], Ql = { class: "filter-button-title" };
function eu(e, t, n, r, i, o) {
  return Q(), le("div", Kl, [
    (Q(!0), le(Ge, null, vr(e.categories, (s) => (Q(), le("button", {
      key: s,
      class: J(["filter-button", { "is-active": s === e.modelValue }]),
      onClick: Ps((a) => e.searchByCategory(s), ["prevent"])
    }, [
      B("span", Ql, Ae(s), 1)
    ], 10, Jl))), 128))
  ]);
}
const tu = /* @__PURE__ */ He(Yl, [["render", eu], ["__scopeId", "data-v-5a3f1ca3"]]), nu = pe({
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
}), ru = { class: "gs-tabs" }, iu = ["disabled", "onClick"];
function ou(e, t, n, r, i, o) {
  return Q(), le("div", ru, [
    (Q(!0), le(Ge, null, vr(e.tabs, (s, a) => (Q(), le("button", {
      key: a,
      class: J(["gs-tab", { active: e.modelValue === s.value }]),
      disabled: s.disabled,
      onClick: (u) => e.selectTab(s)
    }, Ae(s.label), 11, iu))), 128))
  ]);
}
const su = /* @__PURE__ */ He(nu, [["render", ou], ["__scopeId", "data-v-b020e60d"]]), au = ["src"], lu = /* @__PURE__ */ pe({
  name: "GsTag",
  __name: "GsTag",
  props: {
    label: {},
    backgroundColor: { default: "pastel-green" },
    icon: { default: void 0 },
    bold: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = N(() => t.backgroundColor === "black" ? "var(--ui-white)" : "var(--ui-black)"), r = N(() => {
      switch (t.backgroundColor) {
        case "black":
          return "var(--ui-white)";
        case "grey":
          return "var(--ui-black)";
        default:
          return "var(--ui-green)";
      }
    }), i = N(() => {
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
    return (o, s) => (Q(), le("div", {
      style: ie({
        backgroundColor: `${i.value}`,
        gap: o.label ? "4px" : "0"
      }),
      class: "gs-tag"
    }, [
      o.icon && o.icon.startsWith("mdi") ? (Q(), et(It, {
        key: 0,
        icon: o.icon,
        size: "16px",
        style: ie({ color: r.value }),
        class: "gs-tag__icon"
      }, null, 8, ["icon", "style"])) : o.icon && !o.icon.startsWith("mdi") ? (Q(), le("img", {
        key: 1,
        src: o.icon,
        style: { width: "16px" },
        alt: "",
        class: "gs-tag__icon"
      }, null, 8, au)) : Qe("", !0),
      B("span", {
        style: ie({ color: n.value, fontWeight: o.bold ? "bold" : "normal" }),
        class: "gs-tag__label"
      }, Ae(o.label), 5)
    ], 4));
  }
}), uu = /* @__PURE__ */ He(lu, [["__scopeId", "data-v-6b4861a9"]]), cu = /* @__PURE__ */ pe({
  name: "GsDivider",
  __name: "GsDivider",
  props: {
    color: { default: "grey200" },
    length: { default: "100%" },
    thickness: { default: "thick" },
    margin: { default: "0" }
  },
  setup(e) {
    const t = e, n = N(() => {
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
    return (r, i) => (Q(), le("hr", {
      style: ie({
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
}), fu = /* @__PURE__ */ He(cu, [["__scopeId", "data-v-77a02199"]]);
/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var zn = 9e15, Ye = 1e9, Wn = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", qn = {
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
  maxE: zn,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, No, $e, H = !0, dn = "[DecimalError] ", Ze = dn + "Invalid argument: ", Lo = dn + "Precision limit exceeded", Bo = dn + "crypto unavailable", Io = "[object Decimal]", de = Math.floor, oe = Math.pow, du = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, hu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, gu = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ro = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ne = 1e7, k = 7, vu = 9007199254740991, mu = Jt.length - 1, Xn = Qt.length - 1, x = { toStringTag: Io };
x.absoluteValue = x.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), R(e);
};
x.ceil = function() {
  return R(new this.constructor(this), this.e + 1, 2);
};
x.clampedTo = x.clamp = function(e, t) {
  var n, r = this, i = r.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
  if (e.gt(t)) throw Error(Ze + t);
  return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
};
x.comparedTo = x.cmp = function(e) {
  var t, n, r, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, u = o.s, l = e.s;
  if (!s || !a)
    return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
  if (u !== l) return u;
  if (o.e !== e.e) return o.e > e.e ^ u < 0 ? 1 : -1;
  for (r = s.length, i = a.length, t = 0, n = r < i ? r : i; t < n; ++t)
    if (s[t] !== a[t]) return s[t] > a[t] ^ u < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ u < 0 ? 1 : -1;
};
x.cosine = x.cos = function() {
  var e, t, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + k, r.rounding = 1, n = pu(r, Do(r, n)), r.precision = e, r.rounding = t, R($e == 2 || $e == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
};
x.cubeRoot = x.cbrt = function() {
  var e, t, n, r, i, o, s, a, u, l, c = this, f = c.constructor;
  if (!c.isFinite() || c.isZero()) return new f(c);
  for (H = !1, o = c.s * oe(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = ce(c.d), e = c.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = oe(n, 1 / 3), e = de((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new f(n), r.s = c.s) : r = new f(o.toString()), s = (e = f.precision) + 3; ; )
    if (a = r, u = a.times(a).times(a), l = u.plus(c), r = Y(l.plus(c).times(a), l.plus(u), s + 2, 1), ce(a.d).slice(0, s) === (n = ce(r.d)).slice(0, s))
      if (n = n.slice(s - 3, s + 1), n == "9999" || !i && n == "4999") {
        if (!i && (R(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          r = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (R(r, e + 1, 1), t = !r.times(r).times(r).eq(c));
        break;
      }
  return H = !0, R(r, e, f.rounding, t);
};
x.decimalPlaces = x.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - de(this.e / k)) * k, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
x.dividedBy = x.div = function(e) {
  return Y(this, new this.constructor(e));
};
x.dividedToIntegerBy = x.divToInt = function(e) {
  var t = this, n = t.constructor;
  return R(Y(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
x.equals = x.eq = function(e) {
  return this.cmp(e) === 0;
};
x.floor = function() {
  return R(new this.constructor(this), this.e + 1, 3);
};
x.greaterThan = x.gt = function(e) {
  return this.cmp(e) > 0;
};
x.greaterThanOrEqualTo = x.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
x.hyperbolicCosine = x.cosh = function() {
  var e, t, n, r, i, o = this, s = o.constructor, a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  n = s.precision, r = s.rounding, s.precision = n + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / gn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = gt(s, 1, o.times(t), new s(1), !0);
  for (var u, l = e, c = new s(8); l--; )
    u = o.times(o), o = a.minus(u.times(c.minus(u.times(c))));
  return R(o, s.precision = n, s.rounding = r, !0);
};
x.hyperbolicSine = x.sinh = function() {
  var e, t, n, r, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (t = o.precision, n = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, r = i.d.length, r < 3)
    i = gt(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / gn(5, e)), i = gt(o, 2, i, i, !0);
    for (var s, a = new o(5), u = new o(16), l = new o(20); e--; )
      s = i.times(i), i = i.times(a.plus(s.times(u.times(s).plus(l))));
  }
  return o.precision = t, o.rounding = n, R(i, t, n, !0);
};
x.hyperbolicTangent = x.tanh = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, Y(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
};
x.inverseCosine = x.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? Be(t, r, i) : new t(0) : new t(NaN) : e.isZero() ? Be(t, r + 4, i).times(0.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2));
};
x.inverseHyperbolicCosine = x.acosh = function() {
  var e, t, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, H = !1, n = n.times(n).minus(1).sqrt().plus(n), H = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
};
x.inverseHyperbolicSine = x.asinh = function() {
  var e, t, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, H = !1, n = n.times(n).plus(1).sqrt().plus(n), H = !0, r.precision = e, r.rounding = t, n.ln());
};
x.inverseHyperbolicTangent = x.atanh = function() {
  var e, t, n, r, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? R(new o(i), e, t, !0) : (o.precision = n = r - i.e, i = Y(i.plus(1), new o(1).minus(i), n + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
};
x.inverseSine = x.asin = function() {
  var e, t, n, r, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (t = i.abs().cmp(1), n = o.precision, r = o.rounding, t !== -1 ? t === 0 ? (e = Be(o, n + 4, r).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = r, i.times(2)));
};
x.inverseTangent = x.atan = function() {
  var e, t, n, r, i, o, s, a, u, l = this, c = l.constructor, f = c.precision, d = c.rounding;
  if (l.isFinite()) {
    if (l.isZero())
      return new c(l);
    if (l.abs().eq(1) && f + 4 <= Xn)
      return s = Be(c, f + 4, d).times(0.25), s.s = l.s, s;
  } else {
    if (!l.s) return new c(NaN);
    if (f + 4 <= Xn)
      return s = Be(c, f + 4, d).times(0.5), s.s = l.s, s;
  }
  for (c.precision = a = f + 10, c.rounding = 1, n = Math.min(28, a / k + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (H = !1, t = Math.ceil(a / k), r = 1, u = l.times(l), s = new c(l), i = l; e !== -1; )
    if (i = i.times(u), o = s.minus(i.div(r += 2)), i = i.times(u), s = o.plus(i.div(r += 2)), s.d[t] !== void 0) for (e = t; s.d[e] === o.d[e] && e--; ) ;
  return n && (s = s.times(2 << n - 1)), H = !0, R(s, c.precision = f, c.rounding = d, !0);
};
x.isFinite = function() {
  return !!this.d;
};
x.isInteger = x.isInt = function() {
  return !!this.d && de(this.e / k) > this.d.length - 2;
};
x.isNaN = function() {
  return !this.s;
};
x.isNegative = x.isNeg = function() {
  return this.s < 0;
};
x.isPositive = x.isPos = function() {
  return this.s > 0;
};
x.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
x.lessThan = x.lt = function(e) {
  return this.cmp(e) < 0;
};
x.lessThanOrEqualTo = x.lte = function(e) {
  return this.cmp(e) < 1;
};
x.logarithm = x.log = function(e) {
  var t, n, r, i, o, s, a, u, l = this, c = l.constructor, f = c.precision, d = c.rounding, g = 5;
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
      o = !0;
    else {
      for (i = n[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (H = !1, a = f + g, s = We(l, a), r = t ? en(c, a + 10) : We(e, a), u = Y(s, r, a, 1), At(u.d, i = f, d))
    do
      if (a += 10, s = We(l, a), r = t ? en(c, a + 10) : We(e, a), u = Y(s, r, a, 1), !o) {
        +ce(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = R(u, f + 1, 0));
        break;
      }
    while (At(u.d, i += 10, d));
  return H = !0, R(u, f, d);
};
x.minus = x.sub = function(e) {
  var t, n, r, i, o, s, a, u, l, c, f, d, g = this, w = g.constructor;
  if (e = new w(e), !g.d || !e.d)
    return !g.s || !e.s ? e = new w(NaN) : g.d ? e.s = -e.s : e = new w(e.d || g.s !== e.s ? g : NaN), e;
  if (g.s != e.s)
    return e.s = -e.s, g.plus(e);
  if (l = g.d, d = e.d, a = w.precision, u = w.rounding, !l[0] || !d[0]) {
    if (d[0]) e.s = -e.s;
    else if (l[0]) e = new w(g);
    else return new w(u === 3 ? -0 : 0);
    return H ? R(e, a, u) : e;
  }
  if (n = de(e.e / k), c = de(g.e / k), l = l.slice(), o = c - n, o) {
    for (f = o < 0, f ? (t = l, o = -o, s = d.length) : (t = d, n = c, s = l.length), r = Math.max(Math.ceil(a / k), s) + 2, o > r && (o = r, t.length = 1), t.reverse(), r = o; r--; ) t.push(0);
    t.reverse();
  } else {
    for (r = l.length, s = d.length, f = r < s, f && (s = r), r = 0; r < s; r++)
      if (l[r] != d[r]) {
        f = l[r] < d[r];
        break;
      }
    o = 0;
  }
  for (f && (t = l, l = d, d = t, e.s = -e.s), s = l.length, r = d.length - s; r > 0; --r) l[s++] = 0;
  for (r = d.length; r > o; ) {
    if (l[--r] < d[r]) {
      for (i = r; i && l[--i] === 0; ) l[i] = Ne - 1;
      --l[i], l[r] += Ne;
    }
    l[r] -= d[r];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (e.d = l, e.e = hn(l, n), H ? R(e, a, u) : e) : new w(u === 3 ? -0 : 0);
};
x.modulo = x.mod = function(e) {
  var t, n = this, r = n.constructor;
  return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? R(new r(n), r.precision, r.rounding) : (H = !1, r.modulo == 9 ? (t = Y(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = Y(n, e, 0, r.modulo, 1), t = t.times(e), H = !0, n.minus(t));
};
x.naturalExponential = x.exp = function() {
  return Zn(this);
};
x.naturalLogarithm = x.ln = function() {
  return We(this);
};
x.negated = x.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, R(e);
};
x.plus = x.add = function(e) {
  var t, n, r, i, o, s, a, u, l, c, f = this, d = f.constructor;
  if (e = new d(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new d(NaN) : f.d || (e = new d(e.d || f.s === e.s ? f : NaN)), e;
  if (f.s != e.s)
    return e.s = -e.s, f.minus(e);
  if (l = f.d, c = e.d, a = d.precision, u = d.rounding, !l[0] || !c[0])
    return c[0] || (e = new d(f)), H ? R(e, a, u) : e;
  if (o = de(f.e / k), r = de(e.e / k), l = l.slice(), i = o - r, i) {
    for (i < 0 ? (n = l, i = -i, s = c.length) : (n = c, r = o, s = l.length), o = Math.ceil(a / k), s = o > s ? o + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = l.length, i = c.length, s - i < 0 && (i = s, n = c, c = l, l = n), t = 0; i; )
    t = (l[--i] = l[i] + c[i] + t) / Ne | 0, l[i] %= Ne;
  for (t && (l.unshift(t), ++r), s = l.length; l[--s] == 0; ) l.pop();
  return e.d = l, e.e = hn(l, r), H ? R(e, a, u) : e;
};
x.precision = x.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ze + e);
  return n.d ? (t = ko(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
x.round = function() {
  var e = this, t = e.constructor;
  return R(new t(e), e.e + 1, t.rounding);
};
x.sine = x.sin = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + k, r.rounding = 1, n = yu(r, Do(r, n)), r.precision = e, r.rounding = t, R($e > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
x.squareRoot = x.sqrt = function() {
  var e, t, n, r, i, o, s = this, a = s.d, u = s.e, l = s.s, c = s.constructor;
  if (l !== 1 || !a || !a[0])
    return new c(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
  for (H = !1, l = Math.sqrt(+s), l == 0 || l == 1 / 0 ? (t = ce(a), (t.length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(t), u = de((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? t = "5e" + u : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), r = new c(t)) : r = new c(l.toString()), n = (u = c.precision) + 3; ; )
    if (o = r, r = o.plus(Y(s, o, n + 2, 1)).times(0.5), ce(o.d).slice(0, n) === (t = ce(r.d)).slice(0, n))
      if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
        if (!i && (R(o, u + 1, 0), o.times(o).eq(s))) {
          r = o;
          break;
        }
        n += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (R(r, u + 1, 1), e = !r.times(r).eq(s));
        break;
      }
  return H = !0, R(r, u, c.rounding, e);
};
x.tangent = x.tan = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = Y(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, R($e == 2 || $e == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
x.times = x.mul = function(e) {
  var t, n, r, i, o, s, a, u, l, c = this, f = c.constructor, d = c.d, g = (e = new f(e)).d;
  if (e.s *= c.s, !d || !d[0] || !g || !g[0])
    return new f(!e.s || d && !d[0] && !g || g && !g[0] && !d ? NaN : !d || !g ? e.s / 0 : e.s * 0);
  for (n = de(c.e / k) + de(e.e / k), u = d.length, l = g.length, u < l && (o = d, d = g, g = o, s = u, u = l, l = s), o = [], s = u + l, r = s; r--; ) o.push(0);
  for (r = l; --r >= 0; ) {
    for (t = 0, i = u + r; i > r; )
      a = o[i] + g[r] * d[i - r - 1] + t, o[i--] = a % Ne | 0, t = a / Ne | 0;
    o[i] = (o[i] + t) % Ne | 0;
  }
  for (; !o[--s]; ) o.pop();
  return t ? ++n : o.shift(), e.d = o, e.e = hn(o, n), H ? R(e, f.precision, f.rounding) : e;
};
x.toBinary = function(e, t) {
  return _r(this, 2, e, t);
};
x.toDecimalPlaces = x.toDP = function(e, t) {
  var n = this, r = n.constructor;
  return n = new r(n), e === void 0 ? n : (me(e, 0, Ye), t === void 0 ? t = r.rounding : me(t, 0, 8), R(n, e + n.e + 1, t));
};
x.toExponential = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = Re(r, !0) : (me(e, 0, Ye), t === void 0 ? t = i.rounding : me(t, 0, 8), r = R(new i(r), e + 1, t), n = Re(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
x.toFixed = function(e, t) {
  var n, r, i = this, o = i.constructor;
  return e === void 0 ? n = Re(i) : (me(e, 0, Ye), t === void 0 ? t = o.rounding : me(t, 0, 8), r = R(new o(i), e + i.e + 1, t), n = Re(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
x.toFraction = function(e) {
  var t, n, r, i, o, s, a, u, l, c, f, d, g = this, w = g.d, v = g.constructor;
  if (!w) return new v(g);
  if (l = n = new v(1), r = u = new v(0), t = new v(r), o = t.e = ko(w) - g.e - 1, s = o % k, t.d[0] = oe(10, s < 0 ? k + s : s), e == null)
    e = o > 0 ? t : l;
  else {
    if (a = new v(e), !a.isInt() || a.lt(l)) throw Error(Ze + a);
    e = a.gt(t) ? o > 0 ? t : l : a;
  }
  for (H = !1, a = new v(ce(w)), c = v.precision, v.precision = o = w.length * k * 2; f = Y(a, t, 0, 1, 1), i = n.plus(f.times(r)), i.cmp(e) != 1; )
    n = r, r = i, i = l, l = u.plus(f.times(i)), u = i, i = t, t = a.minus(f.times(i)), a = i;
  return i = Y(e.minus(n), r, 0, 1, 1), u = u.plus(i.times(l)), n = n.plus(i.times(r)), u.s = l.s = g.s, d = Y(l, r, o, 1).minus(g).abs().cmp(Y(u, n, o, 1).minus(g).abs()) < 1 ? [l, r] : [u, n], v.precision = c, H = !0, d;
};
x.toHexadecimal = x.toHex = function(e, t) {
  return _r(this, 16, e, t);
};
x.toNearest = function(e, t) {
  var n = this, r = n.constructor;
  if (n = new r(n), e == null) {
    if (!n.d) return n;
    e = new r(1), t = r.rounding;
  } else {
    if (e = new r(e), t === void 0 ? t = r.rounding : me(t, 0, 8), !n.d) return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (H = !1, n = Y(n, e, 0, t, 1).times(e), H = !0, R(n)) : (e.s = n.s, n = e), n;
};
x.toNumber = function() {
  return +this;
};
x.toOctal = function(e, t) {
  return _r(this, 8, e, t);
};
x.toPower = x.pow = function(e) {
  var t, n, r, i, o, s, a = this, u = a.constructor, l = +(e = new u(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(oe(+a, l));
  if (a = new u(a), a.eq(1)) return a;
  if (r = u.precision, o = u.rounding, e.eq(1)) return R(a, r, o);
  if (t = de(e.e / k), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= vu)
    return i = Ho(u, a, n, r), e.s < 0 ? new u(1).div(i) : R(i, r, o);
  if (s = a.s, s < 0) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = s, a;
  }
  return n = oe(+a, l), t = n == 0 || !isFinite(n) ? de(l * (Math.log("0." + ce(a.d)) / Math.LN10 + a.e + 1)) : new u(n + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? s / 0 : 0) : (H = !1, u.rounding = a.s = 1, n = Math.min(12, (t + "").length), i = Zn(e.times(We(a, r + n)), r), i.d && (i = R(i, r + 5, 1), At(i.d, r, o) && (t = r + 10, i = R(Zn(e.times(We(a, t + n)), t), t + 5, 1), +ce(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = R(i, r + 1, 0)))), i.s = s, H = !0, u.rounding = o, R(i, r, o));
};
x.toPrecision = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = Re(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (me(e, 1, Ye), t === void 0 ? t = i.rounding : me(t, 0, 8), r = R(new i(r), e, t), n = Re(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
x.toSignificantDigits = x.toSD = function(e, t) {
  var n = this, r = n.constructor;
  return e === void 0 ? (e = r.precision, t = r.rounding) : (me(e, 1, Ye), t === void 0 ? t = r.rounding : me(t, 0, 8)), R(new r(n), e, t);
};
x.toString = function() {
  var e = this, t = e.constructor, n = Re(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
x.truncated = x.trunc = function() {
  return R(new this.constructor(this), this.e + 1, 1);
};
x.valueOf = x.toJSON = function() {
  var e = this, t = e.constructor, n = Re(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function ce(e) {
  var t, n, r, i = e.length - 1, o = "", s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      r = e[t] + "", n = k - r.length, n && (o += ze(n)), o += r;
    s = e[t], r = s + "", n = k - r.length, n && (o += ze(n));
  } else if (s === 0)
    return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function me(e, t, n) {
  if (e !== ~~e || e < t || e > n)
    throw Error(Ze + e);
}
function At(e, t, n, r) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return --t < 0 ? (t += k, i = 0) : (i = Math.ceil((t + 1) / k), t %= k), o = oe(10, k - t), a = e[i] % o | 0, r == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : s = (n < 4 && a + 1 == o || n > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == oe(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : s = ((r || n < 4) && a + 1 == o || !r && n > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == oe(10, t - 3) - 1, s;
}
function $t(e, t, n) {
  for (var r, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += Wn.indexOf(e.charAt(s++)), r = 0; r < i.length; r++)
      i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function pu(e, t) {
  var n, r, i;
  if (t.isZero()) return t;
  r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / gn(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = gt(e, 1, t.times(i), new e(1));
  for (var o = n; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var Y = /* @__PURE__ */ function() {
  function e(r, i, o) {
    var s, a = 0, u = r.length;
    for (r = r.slice(); u--; )
      s = r[u] * i + a, r[u] = s % o | 0, a = s / o | 0;
    return a && r.unshift(a), r;
  }
  function t(r, i, o, s) {
    var a, u;
    if (o != s)
      u = o > s ? 1 : -1;
    else
      for (a = u = 0; a < o; a++)
        if (r[a] != i[a]) {
          u = r[a] > i[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function n(r, i, o, s) {
    for (var a = 0; o--; )
      r[o] -= a, a = r[o] < i[o] ? 1 : 0, r[o] = a * s + r[o] - i[o];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, i, o, s, a, u) {
    var l, c, f, d, g, w, v, C, h, y, m, b, T, p, S, E, I, D, F, _, P = r.constructor, O = r.s == i.s ? 1 : -1, A = r.d, L = i.d;
    if (!A || !A[0] || !L || !L[0])
      return new P(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !i.s || (A ? L && A[0] == L[0] : !L) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          A && A[0] == 0 || !L ? O * 0 : O / 0
        )
      );
    for (u ? (g = 1, c = r.e - i.e) : (u = Ne, g = k, c = de(r.e / g) - de(i.e / g)), F = L.length, I = A.length, h = new P(O), y = h.d = [], f = 0; L[f] == (A[f] || 0); f++) ;
    if (L[f] > (A[f] || 0) && c--, o == null ? (p = o = P.precision, s = P.rounding) : a ? p = o + (r.e - i.e) + 1 : p = o, p < 0)
      y.push(1), w = !0;
    else {
      if (p = p / g + 2 | 0, f = 0, F == 1) {
        for (d = 0, L = L[0], p++; (f < I || d) && p--; f++)
          S = d * u + (A[f] || 0), y[f] = S / L | 0, d = S % L | 0;
        w = d || f < I;
      } else {
        for (d = u / (L[0] + 1) | 0, d > 1 && (L = e(L, d, u), A = e(A, d, u), F = L.length, I = A.length), E = F, m = A.slice(0, F), b = m.length; b < F; ) m[b++] = 0;
        _ = L.slice(), _.unshift(0), D = L[0], L[1] >= u / 2 && ++D;
        do
          d = 0, l = t(L, m, F, b), l < 0 ? (T = m[0], F != b && (T = T * u + (m[1] || 0)), d = T / D | 0, d > 1 ? (d >= u && (d = u - 1), v = e(L, d, u), C = v.length, b = m.length, l = t(v, m, C, b), l == 1 && (d--, n(v, F < C ? _ : L, C, u))) : (d == 0 && (l = d = 1), v = L.slice()), C = v.length, C < b && v.unshift(0), n(m, v, b, u), l == -1 && (b = m.length, l = t(L, m, F, b), l < 1 && (d++, n(m, F < b ? _ : L, b, u))), b = m.length) : l === 0 && (d++, m = [0]), y[f++] = d, l && m[0] ? m[b++] = A[E] || 0 : (m = [A[E]], b = 1);
        while ((E++ < I || m[0] !== void 0) && p--);
        w = m[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (g == 1)
      h.e = c, No = w;
    else {
      for (f = 1, d = y[0]; d >= 10; d /= 10) f++;
      h.e = f + c * g - 1, R(h, a ? o + h.e + 1 : o, s, w);
    }
    return h;
  };
}();
function R(e, t, n, r) {
  var i, o, s, a, u, l, c, f, d, g = e.constructor;
  e: if (t != null) {
    if (f = e.d, !f) return e;
    for (i = 1, a = f[0]; a >= 10; a /= 10) i++;
    if (o = t - i, o < 0)
      o += k, s = t, c = f[d = 0], u = c / oe(10, i - s - 1) % 10 | 0;
    else if (d = Math.ceil((o + 1) / k), a = f.length, d >= a)
      if (r) {
        for (; a++ <= d; ) f.push(0);
        c = u = 0, i = 1, o %= k, s = o - k + 1;
      } else
        break e;
    else {
      for (c = a = f[d], i = 1; a >= 10; a /= 10) i++;
      o %= k, s = o - k + i, u = s < 0 ? 0 : c / oe(10, i - s - 1) % 10 | 0;
    }
    if (r = r || t < 0 || f[d + 1] !== void 0 || (s < 0 ? c : c % oe(10, i - s - 1)), l = n < 4 ? (u || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (o > 0 ? s > 0 ? c / oe(10, i - s) : 0 : f[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !f[0])
      return f.length = 0, l ? (t -= e.e + 1, f[0] = oe(10, (k - t % k) % k), e.e = -t || 0) : f[0] = e.e = 0, e;
    if (o == 0 ? (f.length = d, a = 1, d--) : (f.length = d + 1, a = oe(10, k - o), f[d] = s > 0 ? (c / oe(10, i - s) % oe(10, s) | 0) * a : 0), l)
      for (; ; )
        if (d == 0) {
          for (o = 1, s = f[0]; s >= 10; s /= 10) o++;
          for (s = f[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, f[0] == Ne && (f[0] = 1));
          break;
        } else {
          if (f[d] += a, f[d] != Ne) break;
          f[d--] = 0, a = 1;
        }
    for (o = f.length; f[--o] === 0; ) f.pop();
  }
  return H && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
}
function Re(e, t, n) {
  if (!e.isFinite()) return Mo(e);
  var r, i = e.e, o = ce(e.d), s = o.length;
  return t ? (n && (r = n - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ze(r) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + ze(-i - 1) + o, n && (r = n - s) > 0 && (o += ze(r))) : i >= s ? (o += ze(i + 1 - s), n && (r = n - i - 1) > 0 && (o = o + "." + ze(r))) : ((r = i + 1) < s && (o = o.slice(0, r) + "." + o.slice(r)), n && (r = n - s) > 0 && (i + 1 === s && (o += "."), o += ze(r))), o;
}
function hn(e, t) {
  var n = e[0];
  for (t *= k; n >= 10; n /= 10) t++;
  return t;
}
function en(e, t, n) {
  if (t > mu)
    throw H = !0, n && (e.precision = n), Error(Lo);
  return R(new e(Jt), t, 1, !0);
}
function Be(e, t, n) {
  if (t > Xn) throw Error(Lo);
  return R(new e(Qt), t, n, !0);
}
function ko(e) {
  var t = e.length - 1, n = t * k + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function ze(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Ho(e, t, n, r) {
  var i, o = new e(1), s = Math.ceil(r / k + 4);
  for (H = !1; ; ) {
    if (n % 2 && (o = o.times(t), oi(o.d, s) && (i = !0)), n = de(n / 2), n === 0) {
      n = o.d.length - 1, i && o.d[n] === 0 && ++o.d[n];
      break;
    }
    t = t.times(t), oi(t.d, s);
  }
  return H = !0, o;
}
function ii(e) {
  return e.d[e.d.length - 1] & 1;
}
function Fo(e, t, n) {
  for (var r, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
    if (i = new e(t[s]), !i.s) {
      o = i;
      break;
    }
    r = o.cmp(i), (r === n || r === 0 && o.s === n) && (o = i);
  }
  return o;
}
function Zn(e, t) {
  var n, r, i, o, s, a, u, l = 0, c = 0, f = 0, d = e.constructor, g = d.rounding, w = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? (H = !1, u = w) : u = t, a = new d(0.03125); e.e > -2; )
    e = e.times(a), f += 5;
  for (r = Math.log(oe(2, f)) / Math.LN10 * 2 + 5 | 0, u += r, n = o = s = new d(1), d.precision = u; ; ) {
    if (o = R(o.times(e), u, 1), n = n.times(++c), a = s.plus(Y(o, n, u, 1)), ce(a.d).slice(0, u) === ce(s.d).slice(0, u)) {
      for (i = f; i--; ) s = R(s.times(s), u, 1);
      if (t == null)
        if (l < 3 && At(s.d, u - r, g, l))
          d.precision = u += 10, n = o = a = new d(1), c = 0, l++;
        else
          return R(s, d.precision = w, g, H = !0);
      else
        return d.precision = w, s;
    }
    s = a;
  }
}
function We(e, t) {
  var n, r, i, o, s, a, u, l, c, f, d, g = 1, w = 10, v = e, C = v.d, h = v.constructor, y = h.rounding, m = h.precision;
  if (v.s < 0 || !C || !C[0] || !v.e && C[0] == 1 && C.length == 1)
    return new h(C && !C[0] ? -1 / 0 : v.s != 1 ? NaN : C ? 0 : v);
  if (t == null ? (H = !1, c = m) : c = t, h.precision = c += w, n = ce(C), r = n.charAt(0), Math.abs(o = v.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      v = v.times(e), n = ce(v.d), r = n.charAt(0), g++;
    o = v.e, r > 1 ? (v = new h("0." + n), o++) : v = new h(r + "." + n.slice(1));
  } else
    return l = en(h, c + 2, m).times(o + ""), v = We(new h(r + "." + n.slice(1)), c - w).plus(l), h.precision = m, t == null ? R(v, m, y, H = !0) : v;
  for (f = v, u = s = v = Y(v.minus(1), v.plus(1), c, 1), d = R(v.times(v), c, 1), i = 3; ; ) {
    if (s = R(s.times(d), c, 1), l = u.plus(Y(s, new h(i), c, 1)), ce(l.d).slice(0, c) === ce(u.d).slice(0, c))
      if (u = u.times(2), o !== 0 && (u = u.plus(en(h, c + 2, m).times(o + ""))), u = Y(u, new h(g), c, 1), t == null)
        if (At(u.d, c - w, y, a))
          h.precision = c += w, l = s = v = Y(f.minus(1), f.plus(1), c, 1), d = R(v.times(v), c, 1), i = a = 1;
        else
          return R(u, h.precision = m, y, H = !0);
      else
        return h.precision = m, u;
    u = l, i += 2;
  }
}
function Mo(e) {
  return String(e.s * e.s / 0);
}
function Gt(e, t) {
  var n, r, i;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++) ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
  if (t = t.slice(r, i), t) {
    if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % k, n < 0 && (r += k), r < i) {
      for (r && e.d.push(+t.slice(0, r)), i -= k; r < i; ) e.d.push(+t.slice(r, r += k));
      t = t.slice(r), r = k - t.length;
    } else
      r -= i;
    for (; r--; ) t += "0";
    e.d.push(+t), H && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function bu(e, t) {
  var n, r, i, o, s, a, u, l, c;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Ro.test(t)) return Gt(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (hu.test(t))
    n = 16, t = t.toLowerCase();
  else if (du.test(t))
    n = 2;
  else if (gu.test(t))
    n = 8;
  else
    throw Error(Ze + t);
  for (o = t.search(/p/i), o > 0 ? (u = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, r = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Ho(r, new r(n), o, o * 2)), l = $t(t, n, Ne), c = l.length - 1, o = c; l[o] === 0; --o) l.pop();
  return o < 0 ? new r(e.s * 0) : (e.e = hn(l, c), e.d = l, H = !1, s && (e = Y(e, i, a * 4)), u && (e = e.times(Math.abs(u) < 54 ? oe(2, u) : Rt.pow(2, u))), H = !0, e);
}
function yu(e, t) {
  var n, r = t.d.length;
  if (r < 3)
    return t.isZero() ? t : gt(e, 2, t, t);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / gn(5, n)), t = gt(e, 2, t, t);
  for (var i, o = new e(5), s = new e(16), a = new e(20); n--; )
    i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
  return t;
}
function gt(e, t, n, r, i) {
  var o, s, a, u, l = e.precision, c = Math.ceil(l / k);
  for (H = !1, u = n.times(n), a = new e(r); ; ) {
    if (s = Y(a.times(u), new e(t++ * t++), l, 1), a = i ? r.plus(s) : r.minus(s), r = Y(s.times(u), new e(t++ * t++), l, 1), s = a.plus(r), s.d[c] !== void 0) {
      for (o = c; s.d[o] === a.d[o] && o--; ) ;
      if (o == -1) break;
    }
    o = a, a = r, r = s, s = o;
  }
  return H = !0, s.d.length = c + 1, s;
}
function gn(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function Do(e, t) {
  var n, r = t.s < 0, i = Be(e, e.precision, 1), o = i.times(0.5);
  if (t = t.abs(), t.lte(o))
    return $e = r ? 4 : 1, t;
  if (n = t.divToInt(i), n.isZero())
    $e = r ? 3 : 2;
  else {
    if (t = t.minus(n.times(i)), t.lte(o))
      return $e = ii(n) ? r ? 2 : 3 : r ? 4 : 1, t;
    $e = ii(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return t.minus(i).abs();
}
function _r(e, t, n, r) {
  var i, o, s, a, u, l, c, f, d, g = e.constructor, w = n !== void 0;
  if (w ? (me(n, 1, Ye), r === void 0 ? r = g.rounding : me(r, 0, 8)) : (n = g.precision, r = g.rounding), !e.isFinite())
    c = Mo(e);
  else {
    for (c = Re(e), s = c.indexOf("."), w ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new g(1), d.e = c.length - s, d.d = $t(Re(d), 10, i), d.e = d.d.length), f = $t(c, 10, i), o = u = f.length; f[--u] == 0; ) f.pop();
    if (!f[0])
      c = w ? "0p+0" : "0";
    else {
      if (s < 0 ? o-- : (e = new g(e), e.d = f, e.e = o, e = Y(e, d, n, r, 0, i), f = e.d, o = e.e, l = No), s = f[n], a = i / 2, l = l || f[n + 1] !== void 0, l = r < 4 ? (s !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : s > a || s === a && (r === 4 || l || r === 6 && f[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), f.length = n, l)
        for (; ++f[--n] > i - 1; )
          f[n] = 0, n || (++o, f.unshift(1));
      for (u = f.length; !f[u - 1]; --u) ;
      for (s = 0, c = ""; s < u; s++) c += Wn.charAt(f[s]);
      if (w) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --u; u % s; u++) c += "0";
            for (f = $t(c, i, t), u = f.length; !f[u - 1]; --u) ;
            for (s = 1, c = "1."; s < u; s++) c += Wn.charAt(f[s]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) c = "0" + c;
        c = "0." + c;
      } else if (++o > u) for (o -= u; o--; ) c += "0";
      else o < u && (c = c.slice(0, o) + "." + c.slice(o));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function oi(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function wu(e) {
  return new this(e).abs();
}
function Eu(e) {
  return new this(e).acos();
}
function _u(e) {
  return new this(e).acosh();
}
function xu(e, t) {
  return new this(e).plus(t);
}
function Cu(e) {
  return new this(e).asin();
}
function Su(e) {
  return new this(e).asinh();
}
function Tu(e) {
  return new this(e).atan();
}
function Pu(e) {
  return new this(e).atanh();
}
function Au(e, t) {
  e = new this(e), t = new this(t);
  var n, r = this.precision, i = this.rounding, o = r + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Be(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Be(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Be(this, o, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Y(e, t, o, 1)), t = Be(this, o, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(Y(e, t, o, 1)), n;
}
function Ou(e) {
  return new this(e).cbrt();
}
function Nu(e) {
  return R(e = new this(e), e.e + 1, 2);
}
function Lu(e, t, n) {
  return new this(e).clamp(t, n);
}
function Bu(e) {
  if (!e || typeof e != "object") throw Error(dn + "Object expected");
  var t, n, r, i = e.defaults === !0, o = [
    "precision",
    1,
    Ye,
    "rounding",
    0,
    8,
    "toExpNeg",
    -9e15,
    0,
    "toExpPos",
    0,
    zn,
    "maxE",
    0,
    zn,
    "minE",
    -9e15,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < o.length; t += 3)
    if (n = o[t], i && (this[n] = qn[n]), (r = e[n]) !== void 0)
      if (de(r) === r && r >= o[t + 1] && r <= o[t + 2]) this[n] = r;
      else throw Error(Ze + n + ": " + r);
  if (n = "crypto", i && (this[n] = qn[n]), (r = e[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Bo);
      else
        this[n] = !1;
    else
      throw Error(Ze + n + ": " + r);
  return this;
}
function Iu(e) {
  return new this(e).cos();
}
function Ru(e) {
  return new this(e).cosh();
}
function Vo(e) {
  var t, n, r;
  function i(o) {
    var s, a, u, l = this;
    if (!(l instanceof i)) return new i(o);
    if (l.constructor = i, si(o)) {
      l.s = o.s, H ? !o.d || o.e > i.maxE ? (l.e = NaN, l.d = null) : o.e < i.minE ? (l.e = 0, l.d = [0]) : (l.e = o.e, l.d = o.d.slice()) : (l.e = o.e, l.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (u = typeof o, u === "number") {
      if (o === 0) {
        l.s = 1 / o < 0 ? -1 : 1, l.e = 0, l.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, l.s = -1) : l.s = 1, o === ~~o && o < 1e7) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        H ? s > i.maxE ? (l.e = NaN, l.d = null) : s < i.minE ? (l.e = 0, l.d = [0]) : (l.e = s, l.d = [o]) : (l.e = s, l.d = [o]);
        return;
      }
      if (o * 0 !== 0) {
        o || (l.s = NaN), l.e = NaN, l.d = null;
        return;
      }
      return Gt(l, o.toString());
    }
    if (u === "string")
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), l.s = -1) : (a === 43 && (o = o.slice(1)), l.s = 1), Ro.test(o) ? Gt(l, o) : bu(l, o);
    if (u === "bigint")
      return o < 0 ? (o = -o, l.s = -1) : l.s = 1, Gt(l, o.toString());
    throw Error(Ze + o);
  }
  if (i.prototype = x, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Bu, i.clone = Vo, i.isDecimal = si, i.abs = wu, i.acos = Eu, i.acosh = _u, i.add = xu, i.asin = Cu, i.asinh = Su, i.atan = Tu, i.atanh = Pu, i.atan2 = Au, i.cbrt = Ou, i.ceil = Nu, i.clamp = Lu, i.cos = Iu, i.cosh = Ru, i.div = ku, i.exp = Hu, i.floor = Fu, i.hypot = Mu, i.ln = Du, i.log = Vu, i.log10 = $u, i.log2 = Uu, i.max = Gu, i.min = ju, i.mod = zu, i.mul = Wu, i.pow = qu, i.random = Xu, i.round = Zu, i.sign = Yu, i.sin = Ku, i.sinh = Ju, i.sqrt = Qu, i.sub = ec, i.sum = tc, i.tan = nc, i.tanh = rc, i.trunc = ic, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < r.length; ) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
  return i.config(e), i;
}
function ku(e, t) {
  return new this(e).div(t);
}
function Hu(e) {
  return new this(e).exp();
}
function Fu(e) {
  return R(e = new this(e), e.e + 1, 3);
}
function Mu() {
  var e, t, n = new this(0);
  for (H = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s)
        return H = !0, new this(1 / 0);
      n = t;
    }
  return H = !0, n.sqrt();
}
function si(e) {
  return e instanceof Rt || e && e.toStringTag === Io || !1;
}
function Du(e) {
  return new this(e).ln();
}
function Vu(e, t) {
  return new this(e).log(t);
}
function Uu(e) {
  return new this(e).log(2);
}
function $u(e) {
  return new this(e).log(10);
}
function Gu() {
  return Fo(this, arguments, -1);
}
function ju() {
  return Fo(this, arguments, 1);
}
function zu(e, t) {
  return new this(e).mod(t);
}
function Wu(e, t) {
  return new this(e).mul(t);
}
function qu(e, t) {
  return new this(e).pow(t);
}
function Xu(e) {
  var t, n, r, i, o = 0, s = new this(1), a = [];
  if (e === void 0 ? e = this.precision : me(e, 1, Ye), r = Math.ceil(e / k), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(r)); o < r; )
        i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(r *= 4); o < r; )
        i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
      o = r / 4;
    } else
      throw Error(Bo);
  else for (; o < r; ) a[o++] = Math.random() * 1e7 | 0;
  for (r = a[--o], e %= k, r && e && (i = oe(10, k - e), a[o] = (r / i | 0) * i); a[o] === 0; o--) a.pop();
  if (o < 0)
    n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= k) a.shift();
    for (r = 1, i = a[0]; i >= 10; i /= 10) r++;
    r < k && (n -= k - r);
  }
  return s.e = n, s.d = a, s;
}
function Zu(e) {
  return R(e = new this(e), e.e + 1, this.rounding);
}
function Yu(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Ku(e) {
  return new this(e).sin();
}
function Ju(e) {
  return new this(e).sinh();
}
function Qu(e) {
  return new this(e).sqrt();
}
function ec(e, t) {
  return new this(e).sub(t);
}
function tc() {
  var e = 0, t = arguments, n = new this(t[e]);
  for (H = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return H = !0, R(n, this.precision, this.rounding);
}
function nc(e) {
  return new this(e).tan();
}
function rc(e) {
  return new this(e).tanh();
}
function ic(e) {
  return R(e = new this(e), e.e + 1, 1);
}
x[Symbol.for("nodejs.util.inspect.custom")] = x.toString;
x[Symbol.toStringTag] = "Decimal";
var Rt = x.constructor = Vo(qn);
Jt = new Rt(Jt);
Qt = new Rt(Qt);
var oc = Object.defineProperty, sc = Object.defineProperties, ac = Object.getOwnPropertyDescriptors, tn = Object.getOwnPropertySymbols, Uo = Object.prototype.hasOwnProperty, $o = Object.prototype.propertyIsEnumerable, ai = (e, t, n) => t in e ? oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ut = (e, t) => {
  for (var n in t || (t = {}))
    Uo.call(t, n) && ai(e, n, t[n]);
  if (tn)
    for (var n of tn(t))
      $o.call(t, n) && ai(e, n, t[n]);
  return e;
}, lc = (e, t) => sc(e, ac(t)), Go = (e, t) => {
  var n = {};
  for (var r in e)
    Uo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && tn)
    for (var r of tn(e))
      t.indexOf(r) < 0 && $o.call(e, r) && (n[r] = e[r]);
  return n;
}, li;
function uc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function vn(e) {
  return !!(e && typeof e.then == "function");
}
function jt(e, t) {
  return vn(e) ? Promise.resolve(e).then(t) : t(e);
}
function Tn(e, t, n) {
  function r(i) {
    const o = t(i);
    throw e.emit(o), console.error(o), o;
  }
  try {
    const i = n();
    return vn(i) ? i.catch(r) : i;
  } catch (i) {
    r(i);
  }
}
function ui(e) {
  const t = (Array.isArray(e) ? e : [e]).map((o) => `'${o}'`), n = t.slice(-2).join(" or ");
  return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function cc(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function jo(e) {
  if (typeof e == "string")
    return [e];
  if (Array.isArray(e))
    return e;
}
function Oe(e) {
  return jo(e) || [];
}
function fc(e, t) {
  return cc(t) ? Oe(t == null ? void 0 : t[e]) : Oe(t);
}
function Yn(e) {
  return Array.from(new Set(e));
}
function zo(e) {
  return e && e.replace(/\/+$/, "");
}
function dc(e) {
  if (typeof e == "string")
    return e;
  if (typeof (e == null ? void 0 : e.message) == "string")
    return e.message;
}
const hc = (e, t) => fetch(e, t);
function gc(e) {
  return Object.fromEntries(new Headers(e).entries());
}
const Wo = (e = hc) => (t, n) => {
  let r = gc(n == null ? void 0 : n.headers);
  return r["x-api-key"] && (r = Object.assign({ "x-tolgee-sdk-type": "JS", "x-tolgee-sdk-version": "prerelease" }, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
};
function De(e) {
  let t = [];
  return Object.freeze({
    listen(n) {
      const r = (i) => {
        n(i);
      };
      return t.push(r), {
        unsubscribe() {
          t = t.filter((i) => r !== i);
        }
      };
    },
    emit(n) {
      e() && t.forEach((r) => r({ value: n }));
    }
  });
}
function vc(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  function o(u) {
    const l = new Set(t());
    i.forEach((c) => {
      (u === void 0 || (u == null ? void 0 : u.findIndex((d) => l.has(d) || c.namespaces.has(d))) !== -1) && c.fn({ value: void 0 });
    });
  }
  let s = [];
  function a() {
    if (s.length === 0)
      return;
    const u = s;
    s = [], r.forEach((f) => {
      f({ value: void 0 });
    });
    let l = /* @__PURE__ */ new Set();
    u.forEach((f) => {
      f === void 0 ? l = void 0 : l !== void 0 && f.forEach((d) => l.add(d));
    });
    const c = l ? Array.from(l.keys()) : void 0;
    o(c);
  }
  return Object.freeze({
    emit(u, l) {
      e() && (s.push(u), l ? setTimeout(a, 0) : a());
    },
    listen(u) {
      return r.add(u), {
        unsubscribe: () => {
          r.delete(u);
        }
      };
    },
    listenSome(u) {
      const l = {
        fn: (f) => {
          u(f);
        },
        namespaces: /* @__PURE__ */ new Set()
      };
      i.add(l);
      const c = {
        unsubscribe: () => {
          i.delete(l);
        },
        subscribeNs: (f) => (Oe(f).forEach((d) => l.namespaces.add(d)), f === void 0 && l.namespaces.add(n()), c)
      };
      return c;
    }
  });
}
function mc(e, t) {
  let n = !0;
  function r() {
    return n;
  }
  const i = Object.freeze({
    onPendingLanguageChange: De(r),
    onLanguageChange: De(r),
    onLoadingChange: De(r),
    onFetchingChange: De(r),
    onInitialLoaded: De(r),
    onRunningChange: De(r),
    onCacheChange: De(r),
    onUpdate: vc(r, e, t),
    onPermanentChange: De(r),
    onError: De(r),
    setEmitterActive(o) {
      n = o;
    },
    on: (o, s) => {
      switch (o) {
        case "pendingLanguage":
          return i.onPendingLanguageChange.listen(s);
        case "language":
          return i.onLanguageChange.listen(s);
        case "loading":
          return i.onLoadingChange.listen(s);
        case "fetching":
          return i.onFetchingChange.listen(s);
        case "initialLoad":
          return i.onInitialLoaded.listen(s);
        case "running":
          return i.onRunningChange.listen(s);
        case "cache":
          return i.onCacheChange.listen(s);
        case "update":
          return i.onUpdate.listen(s);
        case "permanentChange":
          return i.onPermanentChange.listen(s);
        case "error":
          return i.onError.listen(s);
      }
    }
  });
  return i.onInitialLoaded.listen(() => i.onUpdate.emit()), i.onLanguageChange.listen(() => i.onUpdate.emit()), i.onCacheChange.listen(({ value: o }) => i.onUpdate.emit([o.namespace], !0)), i;
}
class ci extends Error {
  constructor(t, n, r = !1) {
    const { language: i, namespace: o } = t;
    super(`Tolgee: Failed to fetch record for "${i}"${o && ` and "${o}"`}`), this.cause = n, this.isDev = r, this.name = "RecordFetchError", this.language = i, this.namespace = o;
  }
}
class pc extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageDetectorError";
  }
}
class fi extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageStorageError";
  }
}
const qo = (e) => {
  const t = /* @__PURE__ */ new Map();
  return Object.entries(e).forEach(([n, r]) => {
    if (r != null) {
      if (typeof r == "object") {
        qo(r).forEach((i, o) => {
          t.set(n + "." + o, i);
        });
        return;
      }
      t.set(n, r);
    }
  }), t;
}, Et = (e) => {
  const [t, ...n] = e.split(":"), r = n.join(":");
  return { language: t, namespace: r || "" };
}, Ve = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function bc(e, t, n, r, i, o, s) {
  const a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  let l = {}, c = 0;
  function f(v, C, h) {
    const y = Ve(v);
    u.set(y, {
      data: qo(C),
      version: h
    }), e.onCacheChange.emit(v);
  }
  async function d(v) {
    function C(m) {
      const b = new ci(v, m);
      throw e.onError.emit(b), console.error(b), b;
    }
    const h = t(v);
    if (vn(h)) {
      const m = await h.catch(C);
      if (m !== void 0)
        return m;
    }
    const y = l[Ve(v)];
    if (typeof y == "function")
      try {
        return await y();
      } catch (m) {
        C(m);
      }
    else
      return y;
  }
  async function g(v, C) {
    let h;
    if (C)
      try {
        h = await n(v);
      } catch (y) {
        const m = new ci(v, y, !0);
        e.onError.emit(m), console.warn(m);
      }
    return h || (h = await d(v)), h;
  }
  const w = Object.freeze({
    addStaticData(v) {
      v && (l = Object.assign(Object.assign({}, l), v), Object.entries(v).forEach(([C, h]) => {
        if (typeof h != "function") {
          const y = Et(C), m = u.get(C);
          (!m || m.version === 0) && f(y, h, 0);
        }
      }));
    },
    invalidate() {
      a.clear(), c += 1;
    },
    addRecord(v, C) {
      f(v, C, c);
    },
    exists(v, C = !1) {
      const h = u.get(Ve(v));
      return h && C ? h.version === c : !!h;
    },
    getRecord(v) {
      var C;
      return (C = u.get(Ve(r(v)))) === null || C === void 0 ? void 0 : C.data;
    },
    getTranslation(v, C) {
      var h;
      return (h = u.get(Ve(v))) === null || h === void 0 ? void 0 : h.data.get(C);
    },
    getTranslationNs(v, C, h) {
      var y;
      for (const m of v)
        for (const b of C) {
          const T = (y = u.get(Ve({ language: b, namespace: m }))) === null || y === void 0 ? void 0 : y.data.get(h);
          if (T != null)
            return [m];
        }
      return Yn(v);
    },
    getTranslationFallback(v, C, h) {
      var y;
      for (const m of v)
        for (const b of C) {
          const T = (y = u.get(Ve({ language: b, namespace: m }))) === null || y === void 0 ? void 0 : y.data.get(h);
          if (T != null)
            return T;
        }
    },
    changeTranslation(v, C, h) {
      var y;
      const m = (y = u.get(Ve(v))) === null || y === void 0 ? void 0 : y.data;
      m == null || m.set(C, h), e.onCacheChange.emit(Object.assign(Object.assign({}, v), { key: C }));
    },
    isFetching(v) {
      if (i())
        return !0;
      if (v === void 0)
        return a.size > 0;
      const C = Oe(v);
      return !!Array.from(a.keys()).find((h) => C.includes(Et(h).namespace));
    },
    isLoading(v, C) {
      const h = Oe(C);
      return !!(i() || Array.from(a.keys()).find((y) => {
        const m = Et(y);
        return (!h.length || h.includes(m.namespace)) && !w.exists({
          namespace: m.namespace,
          language: v
        });
      }));
    },
    async loadRecords(v, C) {
      const h = v.map((m) => {
        const b = r(m), T = Ve(b), p = a.get(T);
        if (p)
          return {
            new: !1,
            promise: p,
            keyObject: b,
            cacheKey: T
          };
        const S = g(b, C) || Promise.resolve(void 0);
        return a.set(T, S), {
          new: !0,
          promise: S,
          keyObject: b,
          cacheKey: T
        };
      });
      o.notify(), s.notify();
      const y = await Promise.all(h.map((m) => m.promise));
      return h.forEach((m, b) => {
        const T = a.get(m.cacheKey) !== m.promise;
        if (m.new && !T) {
          a.delete(m.cacheKey);
          const p = y[b];
          p ? w.addRecord(m.keyObject, p) : w.getRecord(m.keyObject) || w.addRecord(m.keyObject, {});
        }
      }), o.notify(), s.notify(), h.map((m) => w.getRecord(m.keyObject));
    },
    getAllRecords() {
      return Array.from(u.entries()).map(([C, h]) => Object.assign(Object.assign({}, Et(C)), { data: h.data }));
    }
  });
  return w;
}
function Xo(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
const yc = {
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
}, Kn = "invalid", wc = "https://app.tolgee.io", Ec = ({ key: e }) => e, _c = {
  defaultNs: "",
  observerOptions: yc,
  observerType: "invisible",
  onFormatError: Kn,
  apiUrl: wc,
  fetch: Wo(),
  onTranslationMissing: Ec
}, Jn = (...e) => {
  let t = {};
  return e.forEach((n) => {
    t = Object.assign(Object.assign(Object.assign({}, t), n), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), n == null ? void 0 : n.observerOptions) });
  }), t;
};
function di(e, t) {
  const n = Jn(_c, t == null ? void 0 : t.initialOptions, e);
  return n.apiUrl = zo(n.apiUrl), e != null && e.fetch && (n.fetch = Wo(e.fetch)), {
    initialOptions: n,
    activeNamespaces: (t == null ? void 0 : t.activeNamespaces) || /* @__PURE__ */ new Map(),
    language: t == null ? void 0 : t.language,
    pendingLanguage: t == null ? void 0 : t.language,
    isInitialLoading: !1,
    isRunning: !1
  };
}
function xc(e, t, n, r, i, o, s, a) {
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
  }, c = async ({ keysAndDefaults: _, target: P }) => {
    var O;
    const A = _.map(({ key: L, ns: V, defaultValue: W }) => ({
      key: L,
      defaultValue: W,
      fallbackNamespaces: r(V),
      namespace: i({ key: L, ns: V })[0],
      translation: o({
        key: L,
        ns: V
      })
    }));
    (O = l.ui) === null || O === void 0 || O.handleElementClick(A, P);
  }, f = (_, P) => {
    var O;
    return ((O = l.observer) === null || O === void 0 ? void 0 : O.findPositions(_, P)) || [];
  };
  function d(_) {
    const P = o({
      key: _.key,
      ns: _.ns
    });
    return F.formatTranslation(Object.assign(Object.assign({}, _), { translation: P, formatEnabled: !0 }));
  }
  function g() {
    return { fetch: t().fetch };
  }
  function w(_) {
    l.observer = _ == null ? void 0 : _();
  }
  function v() {
    return !!l.observer;
  }
  function C(_) {
    _ && l.formatters.push(_);
  }
  function h(_) {
    l.finalFormatter = _;
  }
  function y(_) {
    u.ui = _;
  }
  function m() {
    return !!u.ui;
  }
  function b(_) {
    l.languageStorage = _;
  }
  function T(_) {
    l.languageDetector = _;
  }
  function p() {
    return Tn(a.onError, (_) => new fi("Tolgee: Failed to load language", _), () => {
      var _;
      return (_ = l.languageStorage) === null || _ === void 0 ? void 0 : _.getLanguage(g());
    });
  }
  function S() {
    if (!l.languageDetector)
      return;
    const _ = n();
    return Tn(a.onError, (P) => new pc("Tolgee: Failed to detect language", P), () => {
      var P;
      return (P = l.languageDetector) === null || P === void 0 ? void 0 : P.getLanguage(Object.assign({ availableLanguages: _ }, g()));
    });
  }
  function E(_) {
    _ && l.backends.push(_);
  }
  function I(_) {
    l.devBackend = _;
  }
  function D(_, P) {
    const O = Object.freeze({
      setFinalFormatter: h,
      addFormatter: C,
      setObserver: w,
      hasObserver: v,
      setUi: y,
      hasUi: m,
      setDevBackend: I,
      addBackend: E,
      setLanguageDetector: T,
      setLanguageStorage: b
    });
    P(_, O);
  }
  const F = Object.freeze({
    addPlugin: D,
    findPositions: f,
    run() {
      var _, P;
      const { apiKey: O, apiUrl: A, projectId: L, observerOptions: V, tagNewKeys: W, filterTag: te } = t();
      l.ui = (_ = u.ui) === null || _ === void 0 ? void 0 : _.call(u, {
        apiKey: O,
        apiUrl: A,
        projectId: L,
        highlight: F.highlight,
        changeTranslation: s,
        findPositions: f,
        onPermanentChange: (U) => a.onPermanentChange.emit(U),
        tagNewKeys: W,
        filterTag: te
      }), (P = l.observer) === null || P === void 0 || P.run({
        mouseHighlight: !0,
        options: V,
        translate: d,
        onClick: c
      });
    },
    stop() {
      var _;
      l.ui = void 0, (_ = l.observer) === null || _ === void 0 || _.stop();
    },
    getLanguageStorage() {
      return l.languageStorage;
    },
    getInitialLanguage() {
      const _ = n(), P = p();
      return jt(P, (O) => (!_ || _.includes(O)) && O ? O : S());
    },
    setStoredLanguage(_) {
      return Tn(a.onError, (P) => new fi("Tolgee: Failed to store language", P), () => {
        var P;
        return (P = l.languageStorage) === null || P === void 0 ? void 0 : P.setLanguage(_, g());
      });
    },
    getDevBackend() {
      return l.devBackend;
    },
    getBackendRecord: async ({ language: _, namespace: P }) => {
      for (const O of l.backends) {
        const A = await O.getRecord(Object.assign({
          language: _,
          namespace: P
        }, g()));
        if (A !== void 0)
          return A;
      }
    },
    getBackendDevRecord: async ({ language: _, namespace: P }) => {
      var O;
      const { apiKey: A, apiUrl: L, projectId: V, filterTag: W } = t();
      return (O = l.devBackend) === null || O === void 0 ? void 0 : O.getRecord(Object.assign({
        apiKey: A,
        apiUrl: L,
        projectId: V,
        language: _,
        namespace: P,
        filterTag: W
      }, g()));
    },
    getLanguageDetector() {
      return l.languageDetector;
    },
    retranslate() {
      var _;
      (_ = l.observer) === null || _ === void 0 || _.retranslate();
    },
    highlight: (_, P) => {
      var O, A;
      return ((A = (O = l.observer) === null || O === void 0 ? void 0 : O.highlight) === null || A === void 0 ? void 0 : A.call(O, _, P)) || { unhighlight() {
      } };
    },
    unwrap(_) {
      var P;
      return l.observer ? (P = l.observer) === null || P === void 0 ? void 0 : P.unwrap(_) : { text: _, keys: [] };
    },
    wrap(_) {
      var P;
      return l.observer ? (P = l.observer) === null || P === void 0 ? void 0 : P.wrap(_) : _.translation;
    },
    hasDevBackend() {
      return !!F.getDevBackend();
    },
    formatTranslation(_) {
      var P, { formatEnabled: O } = _, A = Xo(_, ["formatEnabled"]);
      const { key: L, translation: V, defaultValue: W, noWrap: te, params: U, ns: ae, orEmpty: be } = A, ne = V ?? W;
      let Ce = "";
      V == null && (Ce = t().onTranslationMissing(A));
      let fe = ne ?? (be ? "" : Ce);
      const Fe = e(), G = O || !(!((P = l.observer) === null || P === void 0) && P.outputNotFormattable), ue = (ge) => l.observer && !te ? l.observer.wrap({
        key: L,
        translation: ge,
        defaultValue: W,
        params: U,
        ns: ae
      }) : ge;
      fe = ue(fe);
      try {
        if (ne && Fe && G)
          for (const ge of l.formatters)
            fe = ge.format({
              translation: fe,
              language: Fe,
              params: U
            });
        l.finalFormatter && ne && Fe && G && (fe = l.finalFormatter.format({
          translation: fe,
          language: Fe,
          params: U
        }));
      } catch (ge) {
        console.error(ge);
        const Ke = dc(ge) || Kn, st = t().onFormatError, Cr = typeof st;
        Cr === "string" ? fe = st : Cr === "function" ? fe = st(Ke, A) : fe = Kn, fe = ue(fe);
      }
      return fe;
    }
  });
  return F;
}
const hi = (e, t, n) => {
  let r = e;
  return Object.freeze({
    init(i) {
      r = i;
    },
    notify() {
      const i = t();
      r !== i && n(i), r = i;
    }
  });
};
function Cc(e, t, n) {
  let r = di(), i;
  const o = Object.freeze({
    init(s) {
      r = di(s, r);
    },
    isRunning() {
      return r.isRunning;
    },
    setRunning(s) {
      r.isRunning !== s && (r.isRunning = s, n.emit(s));
    },
    isInitialLoading() {
      return r.isInitialLoading;
    },
    setInitialLoading(s) {
      r.isInitialLoading = s;
    },
    getLanguage() {
      return r.language || r.initialOptions.language;
    },
    setLanguage(s) {
      r.language !== s && (r.language = s, e.emit(s));
    },
    getPendingLanguage() {
      return r.pendingLanguage || o.getLanguage();
    },
    setPendingLanguage(s) {
      r.pendingLanguage !== s && (r.pendingLanguage = s, t.emit(s));
    },
    getInitialOptions() {
      return Object.assign(Object.assign({}, r.initialOptions), i);
    },
    addActiveNs(s) {
      Oe(s).forEach((u) => {
        const l = r.activeNamespaces.get(u);
        l !== void 0 ? r.activeNamespaces.set(u, l + 1) : r.activeNamespaces.set(u, 1);
      });
    },
    removeActiveNs(s) {
      Oe(s).forEach((u) => {
        const l = r.activeNamespaces.get(u);
        l !== void 0 && l > 1 ? r.activeNamespaces.set(u, l - 1) : r.activeNamespaces.delete(u);
      });
    },
    getRequiredNamespaces() {
      return Yn([
        ...r.initialOptions.ns || [r.initialOptions.defaultNs],
        ...Oe(r.initialOptions.fallbackNs),
        ...r.activeNamespaces.keys()
      ]);
    },
    getFallbackLangs(s) {
      const a = s || o.getLanguage();
      return a ? Yn([
        a,
        ...fc(a, r.initialOptions.fallbackLanguage)
      ]) : [];
    },
    getFallbackNs() {
      return Oe(r.initialOptions.fallbackNs);
    },
    getDefaultNs(s) {
      return s === void 0 ? r.initialOptions.defaultNs : s;
    },
    getAvailableLanguages() {
      if (r.initialOptions.availableLanguages)
        return r.initialOptions.availableLanguages;
      if (r.initialOptions.staticData) {
        const s = Object.keys(r.initialOptions.staticData).map((a) => Et(a).language);
        return Array.from(new Set(s));
      }
    },
    withDefaultNs(s) {
      return {
        namespace: s.namespace === void 0 ? o.getInitialOptions().defaultNs : s.namespace,
        language: s.language
      };
    },
    overrideCredentials(s) {
      s ? i = Object.assign(Object.assign({}, s), { apiUrl: zo(s.apiUrl) }) : i = void 0;
    }
  });
  return o;
}
function Sc(e) {
  var { ns: t, noWrap: n, orEmpty: r, params: i, language: o } = e, s = Xo(e, ["ns", "noWrap", "orEmpty", "params", "language"]);
  return Object.assign(Object.assign({}, {
    ns: t,
    noWrap: n,
    orEmpty: r,
    language: o
  }), { params: Object.assign({}, s) });
}
const nn = (e, ...t) => {
  let n = {}, r;
  return typeof e == "object" ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, Sc(r)), n)), n;
};
function Tc({ options: e }) {
  const t = mc(u, l), n = hi(!1, () => s.isFetching(), t.onFetchingChange.emit), r = hi(!1, () => T.isLoading(), t.onLoadingChange.emit), i = Cc(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), o = xc(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, c, C, h, d, t), s = bc(t, o.getBackendRecord, o.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
  e && g(e);
  let a;
  t.onUpdate.listen(() => {
    i.isRunning() && o.retranslate();
  });
  function u() {
    return i.getFallbackNs();
  }
  function l(p) {
    return i.getDefaultNs(p);
  }
  function c(p) {
    return [...Oe(l(p)), ...u()];
  }
  function f(p) {
    return [
      ...Oe(p ?? l()),
      ...i.getRequiredNamespaces()
    ];
  }
  function d(p, S, E) {
    const I = i.withDefaultNs(p), D = s.getTranslation(I, S);
    return s.changeTranslation(I, S, E), {
      revert() {
        s.changeTranslation(I, S, D);
      }
    };
  }
  function g(p) {
    i.init(p), s.addStaticData(i.getInitialOptions().staticData);
  }
  function w(p, S) {
    const E = i.getFallbackLangs(p), I = f(S), D = [];
    return E.forEach((F) => {
      I.forEach((_) => {
        s.exists({ language: F, namespace: _ }, !0) || D.push({ language: F, namespace: _ });
      });
    }), D;
  }
  function v(p, S) {
    const E = w(p, S);
    if (E.length)
      return jt(T.loadRecords(E), () => {
      });
  }
  function C({ key: p, ns: S }) {
    const E = i.getFallbackLangs(), I = c(S ?? void 0);
    return s.getTranslationNs(I, E, p);
  }
  function h({ key: p, ns: S, language: E }) {
    const I = c(S ?? void 0), D = i.getFallbackLangs(E);
    return s.getTranslationFallback(I, D, p);
  }
  function y() {
    const p = jt(m(), () => v());
    if (vn(p))
      return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(p).then(() => {
        i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
      });
    t.onInitialLoaded.emit();
  }
  function m() {
    if (i.getLanguage())
      return;
    const S = o.getInitialLanguage();
    return jt(S, (E) => {
      const I = E || i.getInitialOptions().defaultLanguage;
      I && i.setLanguage(I);
    });
  }
  function b() {
    if ((o.getLanguageDetector() || o.getLanguageStorage()) && !i.getAvailableLanguages())
      throw new Error(ui("availableLanguages"));
    if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage)
      throw new Error(ui(["defaultLanguage", "language"]));
  }
  const T = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), o), s), {
    init: g,
    getTranslation: h,
    changeTranslation: d,
    getTranslationNs: C,
    getDefaultAndFallbackNs: c,
    findPositions: o.findPositions,
    getRequiredRecords: w,
    async changeLanguage(p) {
      i.getPendingLanguage() === p && i.getLanguage() === p || (i.setPendingLanguage(p), i.isRunning() && await v(p), p === i.getPendingLanguage() && (i.setLanguage(p), await o.setStoredLanguage(p)));
    },
    async addActiveNs(p, S) {
      S || i.addActiveNs(p), i.isRunning() && await v(void 0, p);
    },
    loadRecords(p) {
      return s.loadRecords(p, T.isDev());
    },
    async loadRecord(p) {
      return (await T.loadRecords([p]))[0];
    },
    isLoading(p) {
      return s.isLoading(i.getLanguage(), p);
    },
    isLoaded(p) {
      const S = i.getLanguage();
      if (!S)
        return !1;
      const E = i.getFallbackLangs(S), I = f(p), D = [];
      return E.forEach((F) => {
        I.forEach((_) => {
          s.exists({ language: F, namespace: _ }) || D.push({ language: F, namespace: _ });
        });
      }), D.length === 0;
    },
    t: (...p) => {
      const S = nn(...p), E = h(S);
      return o.formatTranslation(Object.assign(Object.assign({}, S), { translation: E }));
    },
    isDev() {
      return !!(i.getInitialOptions().apiKey && i.getInitialOptions().apiUrl);
    },
    run() {
      return b(), i.isRunning() || (i.setRunning(!0), o.run(), a = y()), Promise.resolve(a);
    },
    stop() {
      i.isRunning() && (o.stop(), i.setRunning(!1));
    }
  }));
  return T;
}
function Pc(e) {
  const t = Tc({
    options: e
  });
  t.isDev() && t.invalidate();
  function n(i) {
    const o = t.isRunning();
    o && t.stop(), i(), t.isDev() && t.invalidate(), o && t.run();
  }
  const r = Object.freeze({
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
    overrideCredentials(i) {
      n(() => t.overrideCredentials(i));
    },
    /**
     * Add tolgee plugin after initialization.
     *
     * When called in running state, tolgee stops and runs again.
     */
    addPlugin(i) {
      i && n(() => t.addPlugin(r, i));
    },
    /**
     * Updates options after instance creation. Extends existing options,
     * so it only changes the fields, that are listed.
     *
     * When called in running state, tolgee stops and runs again.
     */
    updateOptions(i) {
      i && n(() => t.init(i));
    }
  });
  return r;
}
const Ac = () => {
  const e = {
    plugins: [],
    options: {}
  }, t = Object.freeze({
    use(n) {
      return e.plugins.push(n), t;
    },
    updateDefaults(n) {
      return e.options = Jn(e.options, n), t;
    },
    init(n) {
      const r = Pc(Jn(e.options, n));
      return e.plugins.forEach(r.addPlugin), r;
    }
  });
  return t;
}, Zo = 0, Qn = 1, Oc = 2;
let Nc = class extends Error {
  constructor(t, n, r) {
    let i, o = "";
    t === Zo ? i = "Empty parameter" : t === Qn ? (i = "Unexpected character", o = "Did you forget to use FormatIcu to render ICU message syntax?") : i = "Unexpected end", super(`Tolgee parser: ${i} at ${n} in "${r}"` + (o ? `
` + o : "")), this.code = t, this.index = n;
  }
};
function gi(e) {
  return /\s/.test(e);
}
const je = 0, er = 1, zt = 2, Pn = 3, An = 4, Lc = /* @__PURE__ */ new Set([
  zt,
  er,
  je
]), tr = "'", Bc = /* @__PURE__ */ new Set(["{", "}", tr]), Ic = (e) => /[0-9a-zA-Z_]/.test(e);
function Rc(e) {
  let t = je, n = "", r = "", i = "";
  const o = [], s = [];
  let a = 0;
  function u(d) {
    throw new Nc(d, a, e);
  }
  const l = () => {
    o.push(n), n = "";
  }, c = () => {
    Ic(i) || u(Qn), r += i;
  }, f = () => {
    r === "" && u(Zo), s.push(r), r = "";
  };
  for (a = 0; a < e.length; a++)
    switch (i = e[a], t) {
      case je:
        i === tr ? (n += i, t = er) : i === "{" ? (l(), t = Pn) : (n += i, t = je);
        break;
      case er:
        Bc.has(i) ? (n = n.slice(0, -1) + i, t = zt) : (n += i, t = je);
        break;
      case zt:
        i === tr ? t = je : (n += i, t = zt);
        break;
      case Pn:
        i === "}" ? (f(), t = je) : gi(i) ? r !== "" && (f(), t = An) : (c(), t = Pn);
        break;
      case An:
        i == "}" ? t = je : gi(i) ? t = An : u(Qn);
    }
  return Lc.has(t) || u(Oc), l(), [o, s];
}
function kc(e, t) {
  const [n, r] = Rc(e), i = [n[0]];
  for (let o = 1; o < n.length; o++) {
    const s = t == null ? void 0 : t[r[o - 1]];
    if (s === void 0)
      throw new Error(`Missing parameter "${r[o - 1]}" in "${e}"`);
    i.push(String(s)), i.push(n[o]);
  }
  return i.join("");
}
function Hc() {
  return {
    format: ({ translation: e, params: t }) => kc(e, t)
  };
}
const Fc = () => (e, t) => (t.setFinalFormatter(Hc()), e);
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vi = {};
(function(e) {
  function t(h, y) {
    var m;
    return h instanceof Buffer ? m = h : m = Buffer.from(h.buffer, h.byteOffset, h.byteLength), m.toString(y);
  }
  var n = function(h) {
    return Buffer.from(h);
  };
  function r(h) {
    for (var y = 0, m = Math.min(256 * 256, h.length + 1), b = new Uint16Array(m), T = [], p = 0; ; ) {
      var S = y < h.length;
      if (!S || p >= m - 1) {
        var E = b.subarray(0, p), I = E;
        if (T.push(String.fromCharCode.apply(null, I)), !S)
          return T.join("");
        h = h.subarray(y), y = 0, p = 0;
      }
      var D = h[y++];
      if ((D & 128) === 0)
        b[p++] = D;
      else if ((D & 224) === 192) {
        var F = h[y++] & 63;
        b[p++] = (D & 31) << 6 | F;
      } else if ((D & 240) === 224) {
        var F = h[y++] & 63, _ = h[y++] & 63;
        b[p++] = (D & 31) << 12 | F << 6 | _;
      } else if ((D & 248) === 240) {
        var F = h[y++] & 63, _ = h[y++] & 63, P = h[y++] & 63, O = (D & 7) << 18 | F << 12 | _ << 6 | P;
        O > 65535 && (O -= 65536, b[p++] = O >>> 10 & 1023 | 55296, O = 56320 | O & 1023), b[p++] = O;
      }
    }
  }
  function i(h) {
    for (var y = 0, m = h.length, b = 0, T = Math.max(32, m + (m >>> 1) + 7), p = new Uint8Array(T >>> 3 << 3); y < m; ) {
      var S = h.charCodeAt(y++);
      if (S >= 55296 && S <= 56319) {
        if (y < m) {
          var E = h.charCodeAt(y);
          (E & 64512) === 56320 && (++y, S = ((S & 1023) << 10) + (E & 1023) + 65536);
        }
        if (S >= 55296 && S <= 56319)
          continue;
      }
      if (b + 4 > p.length) {
        T += 8, T *= 1 + y / h.length * 2, T = T >>> 3 << 3;
        var I = new Uint8Array(T);
        I.set(p), p = I;
      }
      if ((S & 4294967168) === 0) {
        p[b++] = S;
        continue;
      } else if ((S & 4294965248) === 0)
        p[b++] = S >>> 6 & 31 | 192;
      else if ((S & 4294901760) === 0)
        p[b++] = S >>> 12 & 15 | 224, p[b++] = S >>> 6 & 63 | 128;
      else if ((S & 4292870144) === 0)
        p[b++] = S >>> 18 & 7 | 240, p[b++] = S >>> 12 & 63 | 128, p[b++] = S >>> 6 & 63 | 128;
      else
        continue;
      p[b++] = S & 63 | 128;
    }
    return p.slice ? p.slice(0, b) : p.subarray(0, b);
  }
  var o = "Failed to ", s = function(h, y, m) {
    if (h)
      throw new Error("".concat(o).concat(y, ": the '").concat(m, "' option is unsupported."));
  }, a = typeof Buffer == "function" && Buffer.from, u = a ? n : i;
  function l() {
    this.encoding = "utf-8";
  }
  l.prototype.encode = function(h, y) {
    return s(y && y.stream, "encode", "stream"), u(h);
  };
  function c(h) {
    var y;
    try {
      var m = new Blob([h], { type: "text/plain;charset=UTF-8" });
      y = URL.createObjectURL(m);
      var b = new XMLHttpRequest();
      return b.open("GET", y, !1), b.send(), b.responseText;
    } finally {
      y && URL.revokeObjectURL(y);
    }
  }
  var f = !a && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", d = ["utf-8", "utf8", "unicode-1-1-utf-8"], g = r;
  a ? g = t : f && (g = function(h) {
    try {
      return c(h);
    } catch {
      return r(h);
    }
  });
  var w = "construct 'TextDecoder'", v = "".concat(o, " ").concat(w, ": the ");
  function C(h, y) {
    s(y && y.fatal, w, "fatal"), h = h || "utf-8";
    var m;
    if (a ? m = Buffer.isEncoding(h) : m = d.indexOf(h.toLowerCase()) !== -1, !m)
      throw new RangeError("".concat(v, " encoding label provided ('").concat(h, "') is invalid."));
    this.encoding = h, this.fatal = !1, this.ignoreBOM = !1;
  }
  C.prototype.decode = function(h, y) {
    s(y && y.stream, "decode", "stream");
    var m;
    return h instanceof Uint8Array ? m = h : h.buffer instanceof ArrayBuffer ? m = new Uint8Array(h.buffer) : m = new Uint8Array(h), g(m, this.encoding);
  }, e.TextEncoder = e.TextEncoder || l, e.TextDecoder = e.TextDecoder || C;
})(typeof window < "u" ? window : On);
const Mc = /* @__PURE__ */ uc({
  __proto__: null,
  default: vi
}, [vi]);
(li = console.assert) == null || li.call(console, Mc);
function Dc(e, t) {
  const n = (r) => {
    var i, o;
    e.includes((i = r.data) == null ? void 0 : i.type) && t((o = r.data) == null ? void 0 : o.data);
  };
  return window.addEventListener("message", n, !1), {
    unsubscribe() {
      window.removeEventListener("message", n);
    }
  };
}
function Vc({
  message: e,
  recievingMessage: t,
  data: n,
  attempts: r = 1,
  timeout: i = 300
}) {
  let o = !1;
  const s = () => new Promise((u, l) => {
    const c = Dc(t, d);
    window.postMessage({ type: e, data: n }, window.origin);
    const f = setTimeout(w, i);
    function d(v) {
      clearTimeout(f), g(), u(v);
    }
    function g() {
      c.unsubscribe();
    }
    function w() {
      g(), l();
    }
  });
  return {
    cancel() {
      o = !0;
    },
    promise: (async () => {
      for (let u = 0; u < r; u++) {
        if (o)
          return new Promise(() => {
          });
        try {
          return await s();
        } catch {
          continue;
        }
      }
      if (!o)
        throw `Didn't recieve ${t.join(" or ")} in time.`;
      return new Promise(() => {
      });
    })()
  };
}
function Uc() {
  let e;
  async function t(n) {
    e == null || e();
    const { cancel: r, promise: i } = Vc({
      message: "TOLGEE_READY",
      recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
      data: n,
      attempts: 4
    });
    return e = r, i;
  }
  return {
    update: t
  };
}
const $c = "tolgee-in-context-tools.umd.min.js", Gc = "@tolgee/in-context-tools", jc = "InContextTools", zc = "https://cdn.jsdelivr.net/npm";
function Wc(e) {
  return new Promise((t, n) => {
    const r = document.createElement("script");
    r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (i) => n(i.error)), document.head.appendChild(r);
  });
}
let Nn = null;
function qc(e) {
  return Nn || (Nn = Wc(
    `${zc}/@tolgee/web@${e}/dist/${$c}`
  ).then(() => window[Gc][jc])), Nn;
}
const Yo = "__tolgee_apiKey", Ko = "__tolgee_apiUrl";
function mi() {
  const e = sessionStorage.getItem(Yo) || void 0, t = sessionStorage.getItem(Ko) || void 0;
  if (!(!e || !t))
    return {
      apiKey: e,
      apiUrl: t
    };
}
function Xc() {
  sessionStorage.removeItem(Yo), sessionStorage.removeItem(Ko);
}
function Zc(e) {
  document.readyState !== "loading" ? Promise.resolve().then(() => {
    e();
  }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
}
let Jo = () => (e) => e;
const Yc = () => {
  if (typeof window > "u")
    return !1;
  try {
    return typeof sessionStorage < "u" && sessionStorage;
  } catch (e) {
    return console.error("sessionStorage not available", e), !1;
  }
};
Yc() && (Jo = () => (e) => {
  const t = Uc(), n = () => ({
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
  }), r = async () => {
    const o = await qc(
      "prerelease"
    );
    return (s) => {
      const a = mi();
      return s.addPlugin(o({ credentials: a })), s;
    };
  };
  return e.on("running", ({ value: o }) => {
    o && Zc(() => {
      t.update(n()).catch(Xc);
    });
  }), mi() && r().then((o) => {
    e.addPlugin(o);
  }).catch((o) => {
    console.error("Tolgee: Failed to load in-context tools"), console.error(o);
  }), e;
});
const Kc = (e, t, n, r) => {
  var i = r, { signal: o } = i, s = Go(i, ["signal"]);
  const a = new AbortController();
  return new Promise((u, l) => {
    const c = e(t, ut({ signal: a.signal }, s));
    let f = !1;
    function d(v) {
      !f && u(v), f = !0;
    }
    function g(v) {
      !f && l(v), f = !0;
    }
    function w() {
      const v = new Error(`TIMEOUT: ${t}`);
      a.abort(v), g(v);
    }
    if (o && o.addEventListener("abort", w), n !== void 0) {
      const v = setTimeout(w, n);
      c.finally(() => clearTimeout(v));
    }
    c.catch(g).then(d);
  });
};
function pi(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const Jc = ({ namespace: e, language: t, prefix: n }) => e ? `${pi(n)}/${e}/${t}.json` : `${pi(n)}/${t}.json`;
function Qc(e) {
  return e.json();
}
const bi = {
  prefix: "/i18n",
  getPath: Jc,
  getData: Qc,
  headers: {
    Accept: "application/json"
  },
  timeout: void 0,
  fallbackOnFail: !1
};
function ef(e) {
  const t = lc(ut(ut({}, bi), e), {
    headers: ut(ut({}, bi.headers), e == null ? void 0 : e.headers)
  }), {
    prefix: n,
    getPath: r,
    getData: i,
    headers: o,
    timeout: s,
    fallbackOnFail: a
  } = t, u = Go(t, [
    "prefix",
    "getPath",
    "getData",
    "headers",
    "timeout",
    "fallbackOnFail"
  ]);
  return {
    async getRecord({ namespace: l, language: c, fetch: f }) {
      const d = r({
        namespace: l,
        language: c,
        prefix: n
      });
      try {
        const g = await Kc(f, d, s, ut({
          headers: o
        }, u));
        if (!g.ok)
          throw new Error(`${g.url} ${g.status}`);
        return await i(g);
      } catch (g) {
        if (a)
          return;
        throw g;
      }
    }
  };
}
const tf = (e) => (t, n) => (n.addBackend(ef(e)), t);
function nf() {
  return Ac().use(Jo());
}
const rf = () => (e) => e;
pe({
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
    const t = Ee("tolgeeContext");
    e.tolgee && (t.value.tolgee = e.tolgee);
    const n = N(() => t.value.tolgee);
    if (!n.value)
      throw new Error("Tolgee instance not provided");
    if (t.value.isInitialRender) {
      if (!e.staticData || !e.language)
        throw new Error('TolgeeProvider: "staticData" and "language" props are required for SSR.');
      if (n.value.setEmitterActive(!1), n.value.addStaticData(e.staticData), n.value.changeLanguage(e.language), n.value.setEmitterActive(!0), !n.value.isLoaded()) {
        const i = n.value.getRequiredRecords(e.language).map(({ namespace: o, language: s }) => o ? `${o}:${s}` : s).filter((o) => {
          var s;
          return !(!((s = e.staticData) === null || s === void 0) && s[o]);
        });
        console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((o) => `"${o}"`).join(", ")}`);
      }
    }
    ln(() => {
      t.value.isInitialRender = !1;
    });
    const r = K(!n.value.isLoaded());
    return Oi(() => {
      n.value.run().finally(() => {
        r.value = !1;
      });
    }), Li(() => {
      n.value.stop();
    }), { isLoading: r };
  },
  render() {
    var e, t, n, r;
    return this.isLoading ? ((r = (n = this.$slots).fallback) === null || r === void 0 ? void 0 : r.call(n)) || this.fallback || null : (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
});
const Qo = (e) => {
  const t = jo(e), n = Ee("tolgeeContext"), r = N(() => n.value.tolgee);
  if (!r.value)
    throw new Error("Tolgee instance not provided");
  const i = K(u()), o = r.value.onNsUpdate(() => {
    i.value = u(), s.value = !r.value.isLoaded(t);
  });
  o.subscribeNs(t), r.value.addActiveNs(t), Li(() => {
    o == null || o.unsubscribe(), r.value.removeActiveNs(t);
  });
  const s = K(!r.value.isLoaded(t)), a = (l) => {
    o.subscribeNs(l);
  };
  function u() {
    return (l) => {
      var c;
      const f = (c = l.ns) !== null && c !== void 0 ? c : t == null ? void 0 : t[0];
      return a(f), r.value.t(Object.assign(Object.assign({}, l), { ns: f }));
    };
  }
  return { t: i, isLoading: s };
};
pe({
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
    const { t: e } = Qo();
    return { t: e };
  },
  render() {
    const e = {};
    Object.keys(this.$slots).forEach((i) => {
      e[i] = this.$slots[i]();
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
const of = (e) => {
  const { t, isLoading: n } = Qo(e);
  return { t: N(() => (...i) => {
    const o = nn(...i);
    return t.value(o);
  }), isLoading: n };
}, sf = {
  install(e, t) {
    const n = t == null ? void 0 : t.tolgee;
    if (!n)
      throw new Error("Tolgee instance not passed in options");
    const r = !!(t != null && t.enableSSR), i = K({
      tolgee: n,
      isInitialRender: r
    });
    if (e.provide("tolgeeContext", i), r) {
      const o = () => Object.assign(Object.assign({}, i.value.tolgee), { t: (...a) => {
        const u = nn(...a);
        return n.t(Object.assign({}, u));
      } }), s = () => Object.assign(Object.assign({}, i.value.tolgee), { t: (...a) => {
        const u = nn(...a);
        return n.t(Object.assign(Object.assign({}, u), { noWrap: !0 }));
      } });
      i.value.tolgee = s(), re(() => i.value.isInitialRender, (a) => {
        a || (i.value.tolgee = o());
      });
    }
    i.value.tolgee.on("cache", () => {
      i.value.tolgee = Object.freeze(Object.assign({}, i.value.tolgee));
    }), e.config.globalProperties.$t = (...o) => i.value.tolgee.t(...o), e.config.globalProperties.$tolgee = i.value.tolgee;
  }
};
var nr = function(e, t) {
  return nr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, nr(e, t);
};
function mn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  nr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var q = function() {
  return q = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, q.apply(this, arguments);
};
function af(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Ln(e, t, n) {
  if (arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function Bn(e, t) {
  var n = t && t.cache ? t.cache : hf, r = t && t.serializer ? t.serializer : df, i = t && t.strategy ? t.strategy : cf;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function lf(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function uf(e, t, n, r) {
  var i = lf(r) ? r : n(r), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, r), t.set(i, o)), o;
}
function es(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, r), t.set(i, o)), o;
}
function ts(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function cf(e, t) {
  var n = e.length === 1 ? uf : es;
  return ts(e, this, n, t.cache.create(), t.serializer);
}
function ff(e, t) {
  return ts(e, this, es, t.cache.create(), t.serializer);
}
var df = function() {
  return JSON.stringify(arguments);
};
function xr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
xr.prototype.get = function(e) {
  return this.cache[e];
};
xr.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var hf = {
  create: function() {
    return new xr();
  }
}, In = {
  variadic: ff
}, $;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})($ || ($ = {}));
var ee;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(ee || (ee = {}));
var vt;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(vt || (vt = {}));
function yi(e) {
  return e.type === ee.literal;
}
function gf(e) {
  return e.type === ee.argument;
}
function ns(e) {
  return e.type === ee.number;
}
function rs(e) {
  return e.type === ee.date;
}
function is(e) {
  return e.type === ee.time;
}
function os(e) {
  return e.type === ee.select;
}
function ss(e) {
  return e.type === ee.plural;
}
function vf(e) {
  return e.type === ee.pound;
}
function as(e) {
  return e.type === ee.tag;
}
function ls(e) {
  return !!(e && typeof e == "object" && e.type === vt.number);
}
function rr(e) {
  return !!(e && typeof e == "object" && e.type === vt.dateTime);
}
var us = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, mf = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function pf(e) {
  var t = {};
  return e.replace(mf, function(n) {
    var r = n.length;
    switch (n[0]) {
      // Era
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        t.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
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
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      // Second
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
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
var bf = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function yf(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(bf).filter(function(d) {
    return d.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var o = i[r], s = o.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = s[0], u = s.slice(1), l = 0, c = u; l < c.length; l++) {
      var f = c[l];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: u });
  }
  return n;
}
function wf(e) {
  return e.replace(/^(.*?)-/, "");
}
var wi = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, cs = /^(@+)?(\+|#+)?[rs]?$/g, Ef = /(\*)(0+)|(#+)(0+)|(0+)/g, fs = /^(0+)$/;
function Ei(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(cs, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function ds(e) {
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
function _f(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !fs.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function _i(e) {
  var t = {}, n = ds(e);
  return n || t;
}
function xf(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
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
        t.style = "unit", t.unit = wf(i.options[0]);
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
        t = q(q(q({}, t), { notation: "scientific" }), i.options.reduce(function(u, l) {
          return q(q({}, u), _i(l));
        }, {}));
        continue;
      case "engineering":
        t = q(q(q({}, t), { notation: "engineering" }), i.options.reduce(function(u, l) {
          return q(q({}, u), _i(l));
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
        t.scale = parseFloat(i.options[0]);
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
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Ef, function(u, l, c, f, d, g) {
          if (l)
            t.minimumIntegerDigits = c.length;
          else {
            if (f && d)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (fs.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (wi.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(wi, function(u, l, c, f, d, g) {
        return c === "*" ? t.minimumFractionDigits = l.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : d && g ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + g.length) : (t.minimumFractionDigits = l.length, t.maximumFractionDigits = l.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = q(q({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = q(q({}, t), Ei(o)));
      continue;
    }
    if (cs.test(i.stem)) {
      t = q(q({}, t), Ei(i.stem));
      continue;
    }
    var s = ds(i.stem);
    s && (t = q(q({}, t), s));
    var a = _f(i.stem);
    a && (t = q(q({}, t), a));
  }
  return t;
}
var Mt = {
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
function Cf(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        o++, r++;
      var s = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), u = "a", l = Sf(t);
      for ((l == "H" || l == "k") && (a = 0); a-- > 0; )
        n += u;
      for (; s-- > 0; )
        n = l + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Sf(e) {
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
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = Mt[r || ""] || Mt[n || ""] || Mt["".concat(n, "-001")] || Mt["001"];
  return i[0];
}
var Rn, Tf = new RegExp("^".concat(us.source, "*")), Pf = new RegExp("".concat(us.source, "*$"));
function j(e, t) {
  return { start: e, end: t };
}
var Af = !!String.prototype.startsWith && "_a".startsWith("a", 1), Of = !!String.fromCodePoint, Nf = !!Object.fromEntries, Lf = !!String.prototype.codePointAt, Bf = !!String.prototype.trimStart, If = !!String.prototype.trimEnd, Rf = !!Number.isSafeInteger, kf = Rf ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ir = !0;
try {
  var Hf = gs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ir = ((Rn = Hf.exec("a")) === null || Rn === void 0 ? void 0 : Rn[0]) === "a";
} catch {
  ir = !1;
}
var xi = Af ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), or = Of ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, o = 0, s; i > o; ) {
      if (s = t[o++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), Ci = (
  // native
  Nf ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r], s = o[0], a = o[1];
        n[s] = a;
      }
      return n;
    }
  )
), hs = Lf ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), o;
      return i < 55296 || i > 56319 || n + 1 === r || (o = t.charCodeAt(n + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), Ff = Bf ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Tf, "");
  }
), Mf = If ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Pf, "");
  }
);
function gs(e, t) {
  return new RegExp(e, t);
}
var sr;
if (ir) {
  var Si = gs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  sr = function(t, n) {
    var r;
    Si.lastIndex = n;
    var i = Si.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  sr = function(t, n) {
    for (var r = []; ; ) {
      var i = hs(t, n);
      if (i === void 0 || vs(i) || $f(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return or.apply(void 0, r);
  };
var Df = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var o = this.char();
        if (o === 123) {
          var s = this.parseArgument(t, r);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: ee.pound,
              location: j(a, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error($.UNMATCHED_CLOSING_TAG, j(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && ar(this.peek() || 0)) {
            var s = this.parseTag(t, n);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(t, n);
            if (s.err)
              return s;
            i.push(s.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: ee.literal,
            value: "<".concat(i, "/>"),
            location: j(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, n, !0);
        if (o.err)
          return o;
        var s = o.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !ar(this.char()))
            return this.error($.INVALID_TAG, j(a, this.clonePosition()));
          var u = this.clonePosition(), l = this.parseTagName();
          return i !== l ? this.error($.UNMATCHED_CLOSING_TAG, j(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ee.tag,
              value: i,
              children: s,
              location: j(r, this.clonePosition())
            },
            err: null
          } : this.error($.INVALID_TAG, j(a, this.clonePosition())));
        } else
          return this.error($.UNCLOSED_TAG, j(r, this.clonePosition()));
      } else
        return this.error($.INVALID_TAG, j(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Uf(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(n);
        if (o) {
          i += o;
          continue;
        }
        var s = this.tryParseUnquoted(t, n);
        if (s) {
          i += s;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var u = j(r, this.clonePosition());
      return {
        val: { type: ee.literal, value: i, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Vf(this.peek() || 0)) ? (this.bump(), "<") : null;
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
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return or.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), or(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error($.EMPTY_ARGUMENT, j(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error($.MALFORMED_ARGUMENT, j(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(r, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: ee.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: j(r, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error($.MALFORMED_ARGUMENT, j(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = sr(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var o = this.clonePosition(), s = j(t, o);
      return { value: r, location: s };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var o, s = this.clonePosition(), a = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (a) {
        case "":
          return this.error($.EXPECT_ARGUMENT_TYPE, j(s, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var l = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var d = Mf(f.val);
            if (d.length === 0)
              return this.error($.EXPECT_ARGUMENT_STYLE, j(this.clonePosition(), this.clonePosition()));
            var g = j(c, this.clonePosition());
            l = { style: d, styleLocation: g };
          }
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var v = j(i, this.clonePosition());
          if (l && xi(l == null ? void 0 : l.style, "::", 0)) {
            var C = Ff(l.style.slice(2));
            if (a === "number") {
              var f = this.parseNumberSkeletonFromString(C, l.styleLocation);
              return f.err ? f : {
                val: { type: ee.number, value: r, location: v, style: f.val },
                err: null
              };
            } else {
              if (C.length === 0)
                return this.error($.EXPECT_DATE_TIME_SKELETON, v);
              var h = C;
              this.locale && (h = Cf(C, this.locale));
              var d = {
                type: vt.dateTime,
                pattern: h,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? pf(h) : {}
              }, y = a === "date" ? ee.date : ee.time;
              return {
                val: { type: y, value: r, location: v, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? ee.number : a === "date" ? ee.date : ee.time,
              value: r,
              location: v,
              style: (o = l == null ? void 0 : l.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var m = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error($.EXPECT_SELECT_ARGUMENT_OPTIONS, j(m, q({}, m)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), T = 0;
          if (a !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error($.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger($.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), T = f.val;
          }
          var p = this.tryParsePluralOrSelectOptions(t, a, n, b);
          if (p.err)
            return p;
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var S = j(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: ee.select,
              value: r,
              options: Ci(p.val),
              location: S
            },
            err: null
          } : {
            val: {
              type: ee.plural,
              value: r,
              options: Ci(p.val),
              offset: T,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: S
            },
            err: null
          };
        }
        default:
          return this.error($.INVALID_ARGUMENT_TYPE, j(s, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error($.EXPECT_ARGUMENT_CLOSING_BRACE, j(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error($.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, j(i, this.clonePosition()));
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
      var r = [];
      try {
        r = yf(t);
      } catch {
        return this.error($.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: vt.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? xf(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var o, s = !1, a = [], u = /* @__PURE__ */ new Set(), l = i.value, c = i.location; ; ) {
        if (l.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger($.EXPECT_PLURAL_ARGUMENT_SELECTOR, $.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = j(f, this.clonePosition()), l = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (u.has(l))
          return this.error(n === "select" ? $.DUPLICATE_SELECT_ARGUMENT_SELECTOR : $.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        l === "other" && (s = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? $.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : $.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, j(this.clonePosition(), this.clonePosition()));
        var w = this.parseMessage(t + 1, n, r);
        if (w.err)
          return w;
        var v = this.tryParseArgumentClose(g);
        if (v.err)
          return v;
        a.push([
          l,
          {
            value: w.val,
            location: j(g, this.clonePosition())
          }
        ]), u.add(l), this.bumpSpace(), o = this.parseIdentifierIfPossible(), l = o.value, c = o.location;
      }
      return a.length === 0 ? this.error(n === "select" ? $.EXPECT_SELECT_ARGUMENT_SELECTOR : $.EXPECT_PLURAL_ARGUMENT_SELECTOR, j(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error($.MISSING_OTHER_CLAUSE, j(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var o = !1, s = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          o = !0, s = s * 10 + (a - 48), this.bump();
        else
          break;
      }
      var u = j(i, this.clonePosition());
      return o ? (s *= r, kf(s) ? { val: s, err: null } : this.error(n, u)) : this.error(t, u);
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
      var n = hs(this.message, t);
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
      if (xi(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
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
      for (; !this.isEOF() && vs(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function ar(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Vf(e) {
  return ar(e) || e === 47;
}
function Uf(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function vs(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function $f(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function lr(e) {
  e.forEach(function(t) {
    if (delete t.location, os(t) || ss(t))
      for (var n in t.options)
        delete t.options[n].location, lr(t.options[n].value);
    else ns(t) && ls(t.style) || (rs(t) || is(t)) && rr(t.style) ? delete t.style.location : as(t) && lr(t.children);
  });
}
function Gf(e, t) {
  t === void 0 && (t = {}), t = q({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Df(e, t).parse();
  if (n.err) {
    var r = SyntaxError($[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || lr(n.val), n.val;
}
var mt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(mt || (mt = {}));
var pn = (
  /** @class */
  function(e) {
    mn(t, e);
    function t(n, r, i) {
      var o = e.call(this, n) || this;
      return o.code = r, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Ti = (
  /** @class */
  function(e) {
    mn(t, e);
    function t(n, r, i, o) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), mt.INVALID_VALUE, o) || this;
    }
    return t;
  }(pn)
), jf = (
  /** @class */
  function(e) {
    mn(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), mt.INVALID_VALUE, i) || this;
    }
    return t;
  }(pn)
), zf = (
  /** @class */
  function(e) {
    mn(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), mt.MISSING_VALUE, r) || this;
    }
    return t;
  }(pn)
), ve;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ve || (ve = {}));
function Wf(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== ve.literal || n.type !== ve.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function qf(e) {
  return typeof e == "function";
}
function Wt(e, t, n, r, i, o, s) {
  if (e.length === 1 && yi(e[0]))
    return [
      {
        type: ve.literal,
        value: e[0].value
      }
    ];
  for (var a = [], u = 0, l = e; u < l.length; u++) {
    var c = l[u];
    if (yi(c)) {
      a.push({
        type: ve.literal,
        value: c.value
      });
      continue;
    }
    if (vf(c)) {
      typeof o == "number" && a.push({
        type: ve.literal,
        value: n.getNumberFormat(t).format(o)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new zf(f, s);
    var d = i[f];
    if (gf(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), a.push({
        type: typeof d == "string" ? ve.literal : ve.object,
        value: d
      });
      continue;
    }
    if (rs(c)) {
      var g = typeof c.style == "string" ? r.date[c.style] : rr(c.style) ? c.style.parsedOptions : void 0;
      a.push({
        type: ve.literal,
        value: n.getDateTimeFormat(t, g).format(d)
      });
      continue;
    }
    if (is(c)) {
      var g = typeof c.style == "string" ? r.time[c.style] : rr(c.style) ? c.style.parsedOptions : r.time.medium;
      a.push({
        type: ve.literal,
        value: n.getDateTimeFormat(t, g).format(d)
      });
      continue;
    }
    if (ns(c)) {
      var g = typeof c.style == "string" ? r.number[c.style] : ls(c.style) ? c.style.parsedOptions : void 0;
      g && g.scale && (d = d * (g.scale || 1)), a.push({
        type: ve.literal,
        value: n.getNumberFormat(t, g).format(d)
      });
      continue;
    }
    if (as(c)) {
      var w = c.children, v = c.value, C = i[v];
      if (!qf(C))
        throw new jf(v, "function", s);
      var h = Wt(w, t, n, r, i, o), y = C(h.map(function(T) {
        return T.value;
      }));
      Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(T) {
        return {
          type: typeof T == "string" ? ve.literal : ve.object,
          value: T
        };
      }));
    }
    if (os(c)) {
      var m = c.options[d] || c.options.other;
      if (!m)
        throw new Ti(c.value, d, Object.keys(c.options), s);
      a.push.apply(a, Wt(m.value, t, n, r, i));
      continue;
    }
    if (ss(c)) {
      var m = c.options["=".concat(d)];
      if (!m) {
        if (!Intl.PluralRules)
          throw new pn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, mt.MISSING_INTL_API, s);
        var b = n.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        m = c.options[b] || c.options.other;
      }
      if (!m)
        throw new Ti(c.value, d, Object.keys(c.options), s);
      a.push.apply(a, Wt(m.value, t, n, r, i, d - (c.offset || 0)));
      continue;
    }
  }
  return Wf(a);
}
function Xf(e, t) {
  return t ? q(q(q({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = q(q({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Zf(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Xf(e[r], t[r]), n;
  }, q({}, e)) : e;
}
function kn(e) {
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
function Yf(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Bn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ln([void 0], n, !1)))();
    }, {
      cache: kn(e.number),
      strategy: In.variadic
    }),
    getDateTimeFormat: Bn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ln([void 0], n, !1)))();
    }, {
      cache: kn(e.dateTime),
      strategy: In.variadic
    }),
    getPluralRules: Bn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Ln([void 0], n, !1)))();
    }, {
      cache: kn(e.pluralRules),
      strategy: In.variadic
    })
  };
}
var Kf = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var o = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var l = o.formatToParts(u);
        if (l.length === 1)
          return l[0].value;
        var c = l.reduce(function(f, d) {
          return !f.length || d.type !== ve.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return Wt(o.ast, o.locales, o.formatters, o.formats, u, void 0, o.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = o.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var a = af(s, ["formatters"]);
        this.ast = e.__parse(t, q(q({}, a), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Zf(e.formats, r), this.formatters = i && i.formatters || Yf(this.formatterCache);
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
    }, e.__parse = Gf, e.formats = {
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
), Jf = Kf;
const Qf = () => {
  const e = /* @__PURE__ */ new Map();
  function t(i) {
    try {
      return !!Intl.NumberFormat.supportedLocalesOf(i).length;
    } catch {
      return !1;
    }
  }
  function n(i) {
    if (!e.get(i)) {
      let o = String(i).replace(/[^a-zA-Z]/g, "-");
      for (; !t(o); )
        o = o.split("-").slice(0, -1).join("-") || "en";
      e.set(i, o);
    }
    return e.get(i);
  }
  return Object.freeze({ getLanguage: n, format: ({ translation: i, language: o, params: s }) => {
    const a = !Object.values(s || {}).find((l) => typeof l == "function"), u = n(o);
    return new Jf(i, u, void 0, {
      ignoreTag: a
    }).format(s);
  } });
}, ed = () => (e, t) => (t.setFinalFormatter(Qf()), e), td = { max_length: "Invalid character length, please insert {limit} characters or less!", min_length: "Invalid character length, please insert minimum {limit} characters or more!", required: "Required!", email: "Please provide a valid e-mail address!", url: "Please provide a valid URL!", max_value: "Please provide a value less than or equal to {limit}!", min_value: "Please provide a value more than or equal to {limit}!", array_min_length: "Please select at least {limit} items!", positive_integer: "Please provide a positive integer!" }, nd = "Set your own", rd = {
  rules: td,
  set_your_own: nd
}, id = ["en"], od = [...id, "en-US"], sd = {
  en: rd
}, ms = nf().use(rf()).use(Fc()).use(ed()), ad = window.location.hostname.startsWith("deploy-preview");
ad && ms.use(tf({ prefix: "https://cdn.tolg.ee/663da029e1beb0ea0704ea269e843a5a" }));
const Te = ms.init({
  availableLanguages: [...od],
  language: "en",
  staticData: sd
}), ld = (e) => e == null ? !0 : Number(e) >= 0 && new Rt(Number(e)).modulo(0.01).toNumber() === 0, ud = (e) => e == null || Number.isSafeInteger(Number(e)) && Number(e) >= 0 ? !0 : Te.t("rules.positive_integer"), cd = (e = 240) => (t) => (t || "").length <= e || Te.t("rules.max_length", { limit: e }), fd = (e) => (t) => !((t || "").length > 0 && (t || "").length < e) || Te.t("rules.min_length", { limit: e }), dd = (e = Number.MAX_SAFE_INTEGER) => (t) => Number(t) <= e || Te.t("rules.max_value", { limit: e }), hd = (e = 0, t) => (n) => Number(n) >= e || t || Te.t("rules.min_value", { limit: e }), gd = (e) => {
  const t = new RegExp(
    "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    "i"
  );
  if (e) {
    const n = e.startsWith("https://") ? e : "https://" + e;
    return t.test(n) || Te.t("rules.url");
  }
  return !e || Te.t("rules.required");
}, vd = (e) => {
  const t = new RegExp(/^(?!https:\/\/)(?!www\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/, "g");
  return e ? t.test(e) : !e;
}, md = (e) => !!e || Te.t("rules.required"), pd = (e) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) || Te.t("rules.email"), bd = (e) => {
  const t = new RegExp(
    /^(?:(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*))$/,
    "g"
  );
  return e ? t.test(e) : !e;
}, yd = (e) => /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)).*$/.test(e) || Te.t("form_hint_password_complexity"), wd = (e) => (t) => {
  const n = e.indexOf(t);
  return !e.some((r, i) => r === t && i !== n);
}, Ed = (e) => (t) => (t == null ? void 0 : t.length) >= e || Te.t("rules.array_min_length", { limit: e }), ps = pe({
  data() {
    return {
      rules: {
        arrayMinLength: Ed,
        domain: vd,
        email: pd,
        emailName: bd,
        maxlength: cd,
        maxTwoDecimal: ld,
        maxValue: dd,
        minlength: fd,
        minValue: hd,
        password: yd,
        positiveInteger: ud,
        required: md,
        unique: wd,
        url: gd
      }
    };
  }
}), _d = pe({
  name: "GsInput",
  mixins: [ps],
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
function xd(e, t, n, r, i, o) {
  return Q(), et(Hl, se({
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
  }), Bi({ _: 2 }, [
    e.$slots["prepend-inner"] ? {
      name: "prepend-inner",
      fn: Xe(() => [
        un(e.$slots, "prepend-inner", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0
  ]), 1040, ["hide-details", "label", "model-value", "onBlur", "onUpdate:modelValue"]);
}
const bs = /* @__PURE__ */ He(_d, [["render", xd], ["__scopeId", "data-v-7750213e"]]), Cd = ["aria-disabled", "aria-label"], Sd = /* @__PURE__ */ pe({
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
    const n = e, r = t, i = N(() => [
      "gs-action-card",
      {
        "gs-action-card--disabled": n.disabled,
        "gs-action-card--full-width": n.fullWidth,
        "gs-action-card--selected": n.selected
      }
    ]), o = (s) => {
      n.disabled || r("click", s);
    };
    return (s, a) => (Q(), le("div", {
      "aria-disabled": s.disabled,
      "aria-label": s.ariaLabel,
      class: J(i.value),
      style: ie({
        padding: s.padding,
        width: s.width,
        height: s.height
      }),
      role: "button",
      onClick: o
    }, [
      un(s.$slots, "default", {}, void 0, !0)
    ], 14, Cd));
  }
}), ur = /* @__PURE__ */ He(Sd, [["__scopeId", "data-v-cc98c1b9"]]), Td = { class: "gs-tooltip" }, Pd = { class: "gs-tooltip__popup" }, Ad = /* @__PURE__ */ pe({
  __name: "GsTooltip",
  props: {
    text: {},
    variant: {},
    placement: {},
    iconSize: {}
  },
  setup(e) {
    const t = e, n = N(
      () => t.variant === "light" ? "gs-tooltip--light" : "gs-tooltip--dark"
    ), r = N(() => t.placement || "top");
    return (i, o) => (Q(), le("div", Td, [
      M(Ml, {
        class: J([n.value]),
        interactive: !0,
        location: r.value,
        "open-on-click": !0,
        "close-delay": "100",
        height: "auto",
        "max-width": "250px",
        "open-delay": "100",
        width: "auto",
        "z-index": "2"
      }, {
        activator: Xe(({ props: s }) => [
          i.$slots.activator ? un(i.$slots, "activator", {
            key: 0,
            props: s
          }, void 0, !0) : (Q(), le("div", se({
            key: 1,
            class: "gs-tooltip__icon-wrapper"
          }, s), [
            M(It, {
              icon: "mdi-information-outline",
              size: i.iconSize || 16,
              class: "gs-tooltip__icon"
            }, null, 8, ["size"])
          ], 16))
        ]),
        default: Xe(() => [
          B("div", Pd, Ae(t.text), 1)
        ]),
        _: 3
      }, 8, ["class", "location"])
    ]));
  }
}), ys = /* @__PURE__ */ He(Ad, [["__scopeId", "data-v-f2322950"]]), Od = { class: "gs-preset-input" }, Nd = {
  class: "gs-preset-input__cards",
  role: "radiogroup"
}, Ld = { class: "gs-preset-input__card-content" }, Bd = { class: "gs-preset-input__card-label" }, Id = { class: "gs-preset-input__card-value" }, Rd = { class: "gs-preset-input__card-content gs-preset-input__card-content--custom" }, kd = { class: "gs-preset-input__card-label gs-preset-input__card-label--custom" }, Hd = {
  key: 0,
  class: "gs-preset-input__input-wrapper"
}, Fd = /* @__PURE__ */ pe({
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
    const { t: n } = of(), r = e, i = N(() => r.presets.findIndex((c) => c.value === r.modelValue)), o = K(!1);
    ln(() => {
      o.value = r.modelValue ? i.value === -1 : !1;
    });
    const s = t;
    function a(c) {
      const f = typeof c == "number" ? c : Number(c);
      s("update:model-value", f);
    }
    function u(c) {
      o.value = !1, s("update:model-value", r.presets[c].value);
    }
    function l() {
      o.value = !0, s("update:model-value", 0);
    }
    return (c, f) => (Q(), le("div", Od, [
      B("div", Nd, [
        (Q(!0), le(Ge, null, vr(r.presets, (d, g) => (Q(), et(ur, {
          key: d.value,
          "aria-label": d.label,
          selected: i.value === g && !o.value,
          class: "gs-preset-input__card",
          "full-width": "",
          padding: "16px 24px",
          role: "radio",
          onClick: (w) => u(g)
        }, {
          default: Xe(() => [
            B("div", Ld, [
              B("div", Bd, [
                Ni(Ae(d.label) + " ", 1),
                d.info ? (Q(), et(ys, {
                  key: 0,
                  text: d.info,
                  class: "gs-preset-input__info"
                }, null, 8, ["text"])) : Qe("", !0)
              ]),
              B("div", Id, Ae(r.prefix || "") + Ae(d.value) + Ae(r.postfix || ""), 1)
            ])
          ]),
          _: 2
        }, 1032, ["aria-label", "selected", "onClick"]))), 128)),
        M(ur, {
          "aria-label": c.$t("set_your_own"),
          selected: o.value,
          class: "gs-preset-input__card",
          padding: "16px 24px",
          onClick: l
        }, {
          default: Xe(() => [
            B("div", Rd, [
              B("div", kd, Ae(Ue(n)("set_your_own")), 1)
            ])
          ]),
          _: 1
        }, 8, ["aria-label", "selected"])
      ]),
      o.value ? (Q(), le("div", Hd, [
        M(bs, {
          "hide-details": r.inputHideDetails ?? !1,
          label: r.inputLabel || "",
          "model-value": r.modelValue,
          placeholder: r.inputPlaceholder,
          rules: r.inputRules,
          type: "number",
          autofocus: "",
          "onUpdate:modelValue": a
        }, Bi({ _: 2 }, [
          c.prependInner ? {
            name: "prepend-inner",
            fn: Xe(() => [
              B("strong", null, Ae(c.prependInner), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["hide-details", "label", "model-value", "placeholder", "rules"])
      ])) : Qe("", !0)
    ]));
  }
}), Md = /* @__PURE__ */ He(Fd, [["__scopeId", "data-v-4fa71879"]]), Dd = {
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
}, Vd = As({
  icons: {
    defaultSet: "mdi",
    aliases: Ea,
    sets: {
      mdi: _a
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: Dd
    }
  }
});
function Ud(e) {
  e.use(sf, { tolgee: Te }).use(Vd);
}
const $d = {
  GsButton: Zl,
  GsAlertBar: Wl,
  GsFilter: tu,
  GsTabs: su,
  GsTag: uu,
  GsDivider: fu,
  GsInput: bs,
  RulesMixin: ps,
  GsActionCard: ur,
  GsTooltip: ys,
  GsPresetInput: Md
}, Wd = {
  install(e) {
    Ud(e);
    for (const [t, n] of Object.entries($d))
      e.component(t, n);
  }
};
export {
  ur as GsActionCard,
  Wl as GsAlertBar,
  Zl as GsButton,
  fu as GsDivider,
  tu as GsFilter,
  bs as GsInput,
  Md as GsPresetInput,
  su as GsTabs,
  uu as GsTag,
  ys as GsTooltip,
  ps as RulesMixin,
  Wd as default
};
