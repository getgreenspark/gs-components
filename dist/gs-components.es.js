import { reactive as fs, computed as T, watchEffect as Rn, toRefs as kr, shallowRef as nt, Fragment as Re, warn as ds, getCurrentInstance as hs, inject as Ne, provide as Hn, ref as K, unref as Ee, defineComponent as oe, onBeforeUnmount as kn, watch as de, readonly as gs, onScopeDispose as ms, effectScope as vs, toRaw as ps, TransitionGroup as Dn, Transition as Bt, h as Ot, camelize as bs, isRef as xt, mergeProps as He, createVNode as S, toRef as Ct, Text as ys, onBeforeMount as Dr, onMounted as Mr, nextTick as un, withDirectives as It, vShow as Fr, resolveDirective as Es, cloneVNode as ws, createElementBlock as se, openBlock as Z, normalizeClass as ot, createElementVNode as Ie, createCommentVNode as Qe, createBlock as et, resolveDynamicComponent as _s, normalizeStyle as Ge, withCtx as Wn, createTextVNode as xs, toDisplayString as Rt, renderSlot as Ur, renderList as Vr, withModifiers as Cs, onUnmounted as $r } from "vue";
import { createVuetify as Ss } from "vuetify";
function j(e, t) {
  return (n) => Object.keys(e).reduce((r, i) => {
    const a = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : {
      type: e[i]
    };
    return n && i in n ? r[i] = {
      ...a,
      default: n[i]
    } : r[i] = a, t && !r[i].source && (r[i].source = t), r;
  }, {});
}
const _e = j({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Mn = typeof window < "u", Gr = Mn && "IntersectionObserver" in window;
function W(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Ts(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function qn(e) {
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
const Xn = Object.freeze({
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
function Xt(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Fn(e, t) {
  const n = {};
  for (const r of t)
    Object.hasOwn(e, r) && (n[r] = e[r]);
  return n;
}
function Zn(e, t, n) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  for (const s in e)
    t.some((a) => a instanceof RegExp ? a.test(s) : a === s) ? r[s] = e[s] : i[s] = e[s];
  return [r, i];
}
function Ps(e, t) {
  const n = {
    ...e
  };
  return t.forEach((r) => delete n[r]), n;
}
const jr = /^on[^a-z]/, As = (e) => jr.test(e), Ls = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Bs(e) {
  const [t, n] = Zn(e, [jr]), r = Ps(t, Ls), [i, s] = Zn(n, ["class", "style", "id", /^data-/]);
  return Object.assign(i, t), Object.assign(s, r), [i, s];
}
function mt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Kn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Os(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let r = 0;
  for (; r < e.length; )
    n.push(e.substr(r, t)), r += t;
  return n;
}
function $e() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const r = {};
  for (const i in e)
    r[i] = e[i];
  for (const i in t) {
    const s = e[i], a = t[i];
    if (qn(s) && qn(a)) {
      r[i] = $e(s, a, n);
      continue;
    }
    if (n && Array.isArray(s) && Array.isArray(a)) {
      r[i] = n(s, a);
      continue;
    }
    r[i] = a;
  }
  return r;
}
function zr(e) {
  return e.map((t) => t.type === Re ? zr(t.children) : t).flat();
}
function ke() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ke.cache.has(e)) return ke.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ke.cache.set(e, t), t;
}
ke.cache = /* @__PURE__ */ new Map();
function Wr(e) {
  const t = fs({}), n = T(e);
  return Rn(() => {
    for (const r in n.value)
      t[r] = n.value[r];
  }, {
    flush: "sync"
  }), kr(t);
}
function cn(e, t) {
  return e.includes(t);
}
const De = () => [Function, Array];
function qr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  if (Array.isArray(e))
    for (const i of e)
      i(...n);
  else typeof e == "function" && e(...n);
}
function Is() {
  const e = nt(), t = (n) => {
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
const Rs = ["top", "bottom"], Hs = ["start", "end", "left", "right"];
function ks(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = cn(Rs, n) ? "start" : cn(Hs, n) ? "top" : "center"), {
    side: Jn(n, t),
    align: Jn(r, t)
  };
}
function Jn(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
class Zt {
  constructor(t) {
    let {
      x: n,
      y: r,
      width: i,
      height: s
    } = t;
    this.x = n, this.y = r, this.width = i, this.height = s;
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
function Ds(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let i, s, a, l, u;
    if (r.startsWith("matrix3d("))
      i = r.slice(9, -1).split(/, /), s = +i[0], a = +i[5], l = +i[12], u = +i[13];
    else if (r.startsWith("matrix("))
      i = r.slice(7, -1).split(/, /), s = +i[0], a = +i[3], l = +i[4], u = +i[5];
    else
      return new Zt(t);
    const o = n.transformOrigin, c = t.x - l - (1 - s) * parseFloat(o), f = t.y - u - (1 - a) * parseFloat(o.slice(o.indexOf(" ") + 1)), d = s ? t.width / s : e.offsetWidth + 1, m = a ? t.height / a : e.offsetHeight + 1;
    return new Zt({
      x: c,
      y: f,
      width: d,
      height: m
    });
  } else
    return new Zt(t);
}
function Ms(e, t, n) {
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
const Ue = 2.4, Qn = 0.2126729, er = 0.7151522, tr = 0.072175, Fs = 0.55, Us = 0.58, Vs = 0.57, $s = 0.62, ft = 0.03, nr = 1.45, Gs = 5e-4, js = 1.25, zs = 1.25, Ws = 0.078, rr = 12.82051282051282, dt = 0.06, qs = 1e-3;
function ir(e, t) {
  const n = (e.r / 255) ** Ue, r = (e.g / 255) ** Ue, i = (e.b / 255) ** Ue, s = (t.r / 255) ** Ue, a = (t.g / 255) ** Ue, l = (t.b / 255) ** Ue;
  let u = n * Qn + r * er + i * tr, o = s * Qn + a * er + l * tr;
  if (u <= ft && (u += (ft - u) ** nr), o <= ft && (o += (ft - o) ** nr), Math.abs(o - u) < Gs) return 0;
  let c;
  if (o > u) {
    const f = (o ** Fs - u ** Us) * js;
    c = f < qs ? 0 : f < Ws ? f - f * rr * dt : f - dt;
  } else {
    const f = (o ** $s - u ** Vs) * zs;
    c = f > -1e-3 ? 0 : f > -0.078 ? f - f * rr * dt : f + dt;
  }
  return c * 100;
}
function tt(e) {
  ds(`Vuetify: ${e}`);
}
function fn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Xs(e) {
  return fn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const sr = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Zs = {
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
  hsl: (e, t, n, r) => ar({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsla: (e, t, n, r) => ar({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsv: (e, t, n, r) => rt({
    h: e,
    s: t,
    v: n,
    a: r
  }),
  hsva: (e, t, n, r) => rt({
    h: e,
    s: t,
    v: n,
    a: r
  })
};
function Ke(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && tt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && sr.test(e)) {
    const {
      groups: t
    } = e.match(sr), {
      fn: n,
      values: r
    } = t, i = r.split(/,\s*/).map((s) => s.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return Zs[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length) || tt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && tt(`'${e}' is not a valid hex(a) color`), Ys(t);
  } else if (typeof e == "object") {
    if (Xt(e, ["r", "g", "b"]))
      return e;
    if (Xt(e, ["h", "s", "l"]))
      return rt(Xr(e));
    if (Xt(e, ["h", "s", "v"]))
      return rt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function rt(e) {
  const {
    h: t,
    s: n,
    v: r,
    a: i
  } = e, s = (l) => {
    const u = (l + t / 60) % 6;
    return r - r * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, a = [s(5), s(3), s(1)].map((l) => Math.round(l * 255));
  return {
    r: a[0],
    g: a[1],
    b: a[2],
    a: i
  };
}
function ar(e) {
  return rt(Xr(e));
}
function Xr(e) {
  const {
    h: t,
    s: n,
    l: r,
    a: i
  } = e, s = r + n * Math.min(r, 1 - r), a = s === 0 ? 0 : 2 - 2 * r / s;
  return {
    h: t,
    s: a,
    v: s,
    a: i
  };
}
function Ys(e) {
  e = Ks(e);
  let [t, n, r, i] = Os(e, 2).map((s) => parseInt(s, 16));
  return i = i === void 0 ? i : i / 255, {
    r: t,
    g: n,
    b: r,
    a: i
  };
}
function Ks(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Kn(Kn(e, 6), 8, "F")), e;
}
function Js(e) {
  const t = Math.abs(ir(Ke(0), Ke(e)));
  return Math.abs(ir(Ke(16777215), Ke(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function Pe(e, t) {
  const n = hs();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Xe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Pe(e).type;
  return ke((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let Zr = 0, vt = /* @__PURE__ */ new WeakMap();
function Ht() {
  const e = Pe("getUid");
  if (vt.has(e)) return vt.get(e);
  {
    const t = Zr++;
    return vt.set(e, t), t;
  }
}
Ht.reset = () => {
  Zr = 0, vt = /* @__PURE__ */ new WeakMap();
};
function Qs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pe("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const St = Symbol.for("vuetify:defaults");
function Un() {
  const e = Ne(St);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ea(e, t) {
  const n = Un(), r = K(e), i = T(() => {
    if (Ee(t == null ? void 0 : t.disabled)) return n.value;
    const a = Ee(t == null ? void 0 : t.scoped), l = Ee(t == null ? void 0 : t.reset), u = Ee(t == null ? void 0 : t.root);
    if (r.value == null && !(a || l || u)) return n.value;
    let o = $e(r.value, {
      prev: n.value
    });
    if (a) return o;
    if (l || u) {
      const c = Number(l || 1 / 0);
      for (let f = 0; f <= c && !(!o || !("prev" in o)); f++)
        o = o.prev;
      return o && typeof u == "string" && u in o && (o = $e($e(o, {
        prev: o
      }), o[u])), o;
    }
    return o.prev ? $e(o.prev, o) : o;
  });
  return Hn(St, i), i;
}
function ta(e, t) {
  var n, r;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((r = e.props) == null ? void 0 : r[ke(t)]) < "u";
}
function na() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Un();
  const r = Pe("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const i = T(() => {
    var u;
    return (u = n.value) == null ? void 0 : u[e._as ?? t];
  }), s = new Proxy(e, {
    get(u, o) {
      var f, d, m, _, v, x, g;
      const c = Reflect.get(u, o);
      return o === "class" || o === "style" ? [(f = i.value) == null ? void 0 : f[o], c].filter((b) => b != null) : typeof o == "string" && !ta(r.vnode, o) ? ((d = i.value) == null ? void 0 : d[o]) !== void 0 ? (m = i.value) == null ? void 0 : m[o] : ((v = (_ = n.value) == null ? void 0 : _.global) == null ? void 0 : v[o]) !== void 0 ? (g = (x = n.value) == null ? void 0 : x.global) == null ? void 0 : g[o] : c : c;
    }
  }), a = nt();
  Rn(() => {
    if (i.value) {
      const u = Object.entries(i.value).filter((o) => {
        let [c] = o;
        return c.startsWith(c[0].toUpperCase());
      });
      a.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      a.value = void 0;
  });
  function l() {
    const u = Qs(St, r);
    Hn(St, T(() => a.value ? $e((u == null ? void 0 : u.value) ?? {}, a.value) : u == null ? void 0 : u.value));
  }
  return {
    props: s,
    provideSubDefaults: l
  };
}
function kt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return tt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = j(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return Fn(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const s = Un();
      if (!s.value) return e._setup(r, i);
      const {
        props: a,
        provideSubDefaults: l
      } = na(r, r._as ?? e.name, s), u = e._setup(a, i);
      return l(), u;
    };
  }
  return e;
}
function ne() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? kt : oe)(t);
}
const ra = "cubic-bezier(0.4, 0, 0.2, 1)";
function me(e) {
  const t = Pe("useRender");
  t.render = e;
}
function ia(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Is(), r = K();
  if (Mn) {
    const i = new ResizeObserver((s) => {
      s.length && (t === "content" ? r.value = s[0].contentRect : r.value = s[0].target.getBoundingClientRect());
    });
    kn(() => {
      i.disconnect();
    }), de(() => n.el, (s, a) => {
      a && (i.unobserve(a), r.value = void 0), s && i.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: gs(r)
  };
}
function dn(e, t) {
  let n;
  function r() {
    n = vs(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), r();
    }) : t());
  }
  de(e, (i) => {
    i && !n ? r() : i || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), ms(() => {
    n == null || n.stop();
  });
}
function Dt(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const s = Pe("useProxiedModel"), a = K(e[t] !== void 0 ? e[t] : n), l = ke(t), o = l !== t ? T(() => {
    var f, d, m, _;
    return e[t], !!(((f = s.vnode.props) != null && f.hasOwnProperty(t) || (d = s.vnode.props) != null && d.hasOwnProperty(l)) && ((m = s.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`) || (_ = s.vnode.props) != null && _.hasOwnProperty(`onUpdate:${l}`)));
  }) : T(() => {
    var f, d;
    return e[t], !!((f = s.vnode.props) != null && f.hasOwnProperty(t) && ((d = s.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`)));
  });
  dn(() => !o.value, () => {
    de(() => e[t], (f) => {
      a.value = f;
    });
  });
  const c = T({
    get() {
      const f = e[t];
      return r(o.value ? f : a.value);
    },
    set(f) {
      const d = i(f), m = ps(o.value ? e[t] : a.value);
      m === d || r(m) === f || (a.value = d, s == null || s.emit(`update:${t}`, d));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => o.value ? e[t] : a.value
  }), c;
}
const Yr = Symbol.for("vuetify:locale");
function sa() {
  const e = Ne(Yr);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Mt() {
  const e = Ne(Yr);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const or = Symbol.for("vuetify:theme"), Ze = j({
  theme: String
}, "theme");
function lt(e) {
  Pe("provideTheme");
  const t = Ne(or, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = T(() => e.theme ?? t.name.value), r = T(() => t.themes.value[n.value]), i = T(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), s = {
    ...t,
    name: n,
    current: r,
    themeClasses: i
  };
  return Hn(or, s), s;
}
const Vn = j({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), aa = j({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function ae(e, t, n) {
  return ne()({
    name: e,
    props: aa({
      mode: n,
      origin: t
    }),
    setup(r, i) {
      let {
        slots: s
      } = i;
      const a = {
        onBeforeEnter(l) {
          r.origin && (l.style.transformOrigin = r.origin);
        },
        onLeave(l) {
          if (r.leaveAbsolute) {
            const {
              offsetTop: u,
              offsetLeft: o,
              offsetWidth: c,
              offsetHeight: f
            } = l;
            l._transitionInitialStyles = {
              position: l.style.position,
              top: l.style.top,
              left: l.style.left,
              width: l.style.width,
              height: l.style.height
            }, l.style.position = "absolute", l.style.top = `${u}px`, l.style.left = `${o}px`, l.style.width = `${c}px`, l.style.height = `${f}px`;
          }
          r.hideOnLeave && l.style.setProperty("display", "none", "important");
        },
        onAfterLeave(l) {
          if (r.leaveAbsolute && (l != null && l._transitionInitialStyles)) {
            const {
              position: u,
              top: o,
              left: c,
              width: f,
              height: d
            } = l._transitionInitialStyles;
            delete l._transitionInitialStyles, l.style.position = u || "", l.style.top = o || "", l.style.left = c || "", l.style.width = f || "", l.style.height = d || "";
          }
        }
      };
      return () => {
        const l = r.group ? Dn : Bt;
        return Ot(l, {
          name: r.disabled ? "" : e,
          css: !r.disabled,
          ...r.group ? void 0 : {
            mode: r.mode
          },
          ...r.disabled ? {} : a
        }, s.default);
      };
    }
  });
}
function Kr(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ne()({
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
        slots: s
      } = i;
      const a = r.group ? Dn : Bt;
      return () => Ot(a, {
        name: r.disabled ? "" : e,
        css: !r.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...r.disabled ? {} : t
      }, s.default);
    }
  });
}
function Jr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", r = bs(`offset-${n}`);
  return {
    onBeforeEnter(a) {
      a._parent = a.parentNode, a._initialStyle = {
        transition: a.style.transition,
        overflow: a.style.overflow,
        [n]: a.style[n]
      };
    },
    onEnter(a) {
      const l = a._initialStyle;
      if (!l) return;
      a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
      const u = `${a[r]}px`;
      a.style[n] = "0", a.offsetHeight, a.style.transition = l.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
        a.style[n] = u;
      });
    },
    onAfterEnter: s,
    onEnterCancelled: s,
    onLeave(a) {
      a._initialStyle = {
        transition: "",
        overflow: a.style.overflow,
        [n]: a.style[n]
      }, a.style.overflow = "hidden", a.style[n] = `${a[r]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[n] = "0");
    },
    onAfterLeave: i,
    onLeaveCancelled: i
  };
  function i(a) {
    e && a._parent && a._parent.classList.remove(e), s(a);
  }
  function s(a) {
    if (!a._initialStyle) return;
    const l = a._initialStyle[n];
    a.style.overflow = a._initialStyle.overflow, l != null && (a.style[n] = l), delete a._initialStyle;
  }
}
ae("fab-transition", "center center", "out-in");
ae("dialog-bottom-transition");
ae("dialog-top-transition");
ae("fade-transition");
ae("scale-transition");
ae("scroll-x-transition");
ae("scroll-x-reverse-transition");
ae("scroll-y-transition");
ae("scroll-y-reverse-transition");
ae("slide-x-transition");
ae("slide-x-reverse-transition");
const Qr = ae("slide-y-transition");
ae("slide-y-reverse-transition");
Kr("expand-transition", Jr());
const oa = Kr("expand-x-transition", Jr("", !0)), la = j({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), ua = ne(!1)({
  name: "VDefaultsProvider",
  props: la(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: r,
      disabled: i,
      reset: s,
      root: a,
      scoped: l
    } = kr(e);
    return ea(r, {
      reset: s,
      root: a,
      scoped: l,
      disabled: i
    }), () => {
      var u;
      return (u = n.default) == null ? void 0 : u.call(n);
    };
  }
}), ca = j({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function fa(e) {
  return {
    dimensionStyles: T(() => {
      const n = {}, r = W(e.height), i = W(e.maxHeight), s = W(e.maxWidth), a = W(e.minHeight), l = W(e.minWidth), u = W(e.width);
      return r != null && (n.height = r), i != null && (n.maxHeight = i), s != null && (n.maxWidth = s), a != null && (n.minHeight = a), l != null && (n.minWidth = l), u != null && (n.width = u), n;
    })
  };
}
function ei(e) {
  return Wr(() => {
    const t = [], n = {};
    if (e.value.background)
      if (fn(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Xs(e.value.background)) {
          const r = Ke(e.value.background);
          if (r.a == null || r.a === 1) {
            const i = Js(r);
            n.color = i, n.caretColor = i;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (fn(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function je(e, t) {
  const n = T(() => ({
    text: xt(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: r,
    colorStyles: i
  } = ei(n);
  return {
    textColorClasses: r,
    textColorStyles: i
  };
}
function pt(e, t) {
  const n = T(() => ({
    background: xt(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: r,
    colorStyles: i
  } = ei(n);
  return {
    backgroundColorClasses: r,
    backgroundColorStyles: i
  };
}
const ti = j({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function ni(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe();
  return {
    roundedClasses: T(() => {
      const r = xt(e) ? e.value : e.rounded, i = xt(e) ? e.value : e.tile, s = [];
      if (r === !0 || r === "")
        s.push(`${t}--rounded`);
      else if (typeof r == "string" || r === 0)
        for (const a of String(r).split(" "))
          s.push(`rounded-${a}`);
      else (i || r === !1) && s.push("rounded-0");
      return s;
    })
  };
}
const ri = j({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), ii = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: r,
    disabled: i,
    group: s,
    ...a
  } = e, {
    component: l = s ? Dn : Bt,
    ...u
  } = typeof r == "object" ? r : {};
  return Ot(l, He(typeof r == "string" ? {
    name: i ? "" : r
  } : u, typeof r == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: i,
    group: s
  }).filter((o) => {
    let [c, f] = o;
    return f !== void 0;
  })), a), n);
};
function da(e, t) {
  if (!Gr) return;
  const n = t.modifiers || {}, r = t.value, {
    handler: i,
    options: s
  } = typeof r == "object" ? r : {
    handler: r,
    options: {}
  }, a = new IntersectionObserver(function() {
    var f;
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const o = (f = e._observe) == null ? void 0 : f[t.instance.$.uid];
    if (!o) return;
    const c = l.some((d) => d.isIntersecting);
    i && (!n.quiet || o.init) && (!n.once || c || o.init) && i(c, l, u), c && n.once ? si(e, t) : o.init = !0;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: a
  }, a.observe(e);
}
function si(e, t) {
  var r;
  const n = (r = e._observe) == null ? void 0 : r[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const ha = {
  mounted: da,
  unmounted: si
}, ga = [null, "default", "comfortable", "compact"], ma = j({
  density: {
    type: String,
    default: "default",
    validator: (e) => ga.includes(e)
  }
}, "density");
function va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe();
  return {
    densityClasses: T(() => `${t}--density-${e.density}`)
  };
}
const pa = {
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
}, ba = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Ot(wa, {
    ...e,
    class: "mdi"
  })
}, Me = [String, Function, Object, Array], ya = Symbol.for("vuetify:icons"), Ft = j({
  icon: {
    type: Me
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), lr = ne()({
  name: "VComponentIcon",
  props: Ft(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const r = e.icon;
      return S(e.tag, null, {
        default: () => {
          var i;
          return [e.icon ? S(r, null, null) : (i = n.default) == null ? void 0 : i.call(n)];
        }
      });
    };
  }
}), Ea = kt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Ft(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => S(e.tag, He(n, {
      style: null
    }), {
      default: () => [S("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? S("path", {
        d: r[0],
        "fill-opacity": r[1]
      }, null) : S("path", {
        d: r
      }, null)) : S("path", {
        d: e.icon
      }, null)])]
    });
  }
});
kt({
  name: "VLigatureIcon",
  props: Ft(),
  setup(e) {
    return () => S(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const wa = kt({
  name: "VClassIcon",
  props: Ft(),
  setup(e) {
    return () => S(e.tag, {
      class: e.icon
    }, null);
  }
}), _a = (e) => {
  const t = Ne(ya);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: T(() => {
      var u;
      const r = Ee(e);
      if (!r) return {
        component: lr
      };
      let i = r;
      if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (u = t.aliases) == null ? void 0 : u[i.slice(1)])), i || tt(`Could not find aliased icon "${r}"`), Array.isArray(i))
        return {
          component: Ea,
          icon: i
        };
      if (typeof i != "string")
        return {
          component: lr,
          icon: i
        };
      const s = Object.keys(t.sets).find((o) => typeof i == "string" && i.startsWith(`${o}:`)), a = s ? i.slice(s.length + 1) : i;
      return {
        component: t.sets[s ?? t.defaultSet].component,
        icon: a
      };
    })
  };
}, xa = ["x-small", "small", "default", "large", "x-large"], ai = j({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function oi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe();
  return Wr(() => {
    let n, r;
    return cn(xa, e.size) ? n = `${t}--size-${e.size}` : e.size && (r = {
      width: W(e.size),
      height: W(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: r
    };
  });
}
const Ca = j({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Me,
  ..._e(),
  ...ai(),
  ...Vn({
    tag: "i"
  }),
  ...Ze()
}, "VIcon"), Ut = ne()({
  name: "VIcon",
  props: Ca(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const i = K(), {
      themeClasses: s
    } = lt(e), {
      iconData: a
    } = _a(T(() => i.value || e.icon)), {
      sizeClasses: l
    } = oi(e), {
      textColorClasses: u,
      textColorStyles: o
    } = je(Ct(e, "color"));
    return me(() => {
      var d, m;
      const c = (d = r.default) == null ? void 0 : d.call(r);
      c && (i.value = (m = zr(c).filter((_) => _.type === ys && _.children && typeof _.children == "string")[0]) == null ? void 0 : m.children);
      const f = !!(n.onClick || n.onClickOnce);
      return S(a.value.component, {
        tag: e.tag,
        icon: a.value.icon,
        class: ["v-icon", "notranslate", s.value, l.value, u.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [l.value ? void 0 : {
          fontSize: W(e.size),
          height: W(e.size),
          width: W(e.size)
        }, o.value, e.style],
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function li(e, t) {
  const n = K(), r = nt(!1);
  if (Gr) {
    const i = new IntersectionObserver((s) => {
      r.value = !!s.find((a) => a.isIntersecting);
    }, t);
    kn(() => {
      i.disconnect();
    }), de(n, (s, a) => {
      a && (i.unobserve(a), r.value = !1), s && i.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: r
  };
}
const Sa = j({
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
  ..._e(),
  ...ai(),
  ...Vn({
    tag: "div"
  }),
  ...Ze()
}, "VProgressCircular"), Ta = ne()({
  name: "VProgressCircular",
  props: Sa(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = 20, i = 2 * Math.PI * r, s = K(), {
      themeClasses: a
    } = lt(e), {
      sizeClasses: l,
      sizeStyles: u
    } = oi(e), {
      textColorClasses: o,
      textColorStyles: c
    } = je(Ct(e, "color")), {
      textColorClasses: f,
      textColorStyles: d
    } = je(Ct(e, "bgColor")), {
      intersectionRef: m,
      isIntersecting: _
    } = li(), {
      resizeRef: v,
      contentRect: x
    } = ia(), g = T(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), b = T(() => Number(e.width)), h = T(() => u.value ? Number(e.size) : x.value ? x.value.width : Math.max(b.value, 32)), w = T(() => r / (1 - b.value / h.value) * 2), N = T(() => b.value / h.value * w.value), p = T(() => W((100 - g.value) / 100 * i));
    return Rn(() => {
      m.value = s.value, v.value = s.value;
    }), me(() => S(e.tag, {
      ref: s,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": _.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, a.value, l.value, o.value, e.class],
      style: [u.value, c.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : g.value
    }, {
      default: () => [S("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${w.value} ${w.value}`
      }, [S("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: d.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": N.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": 0
      }, null), S("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": N.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": p.value
      }, null)]), n.default && S("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: g.value
      })])]
    })), {};
  }
}), ur = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Na = j({
  location: String
}, "location");
function Pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: r
  } = Mt();
  return {
    locationStyles: T(() => {
      if (!e.location) return {};
      const {
        side: s,
        align: a
      } = ks(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
      function l(o) {
        return n ? n(o) : 0;
      }
      const u = {};
      return s !== "center" && (t ? u[ur[s]] = `calc(100% - ${l(s)}px)` : u[s] = 0), a !== "center" ? t ? u[ur[a]] = `calc(100% - ${l(a)}px)` : u[a] = 0 : (s === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[s]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[s]), u;
    })
  };
}
const Aa = j({
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
  ..._e(),
  ...Na({
    location: "top"
  }),
  ...ti(),
  ...Vn(),
  ...Ze()
}, "VProgressLinear"), La = ne()({
  name: "VProgressLinear",
  props: Aa(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var D;
    let {
      slots: n
    } = t;
    const r = Dt(e, "modelValue"), {
      isRtl: i,
      rtlClasses: s
    } = Mt(), {
      themeClasses: a
    } = lt(e), {
      locationStyles: l
    } = Pa(e), {
      textColorClasses: u,
      textColorStyles: o
    } = je(e, "color"), {
      backgroundColorClasses: c,
      backgroundColorStyles: f
    } = pt(T(() => e.bgColor || e.color)), {
      backgroundColorClasses: d,
      backgroundColorStyles: m
    } = pt(T(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: _,
      backgroundColorStyles: v
    } = pt(e, "color"), {
      roundedClasses: x
    } = ni(e), {
      intersectionRef: g,
      isIntersecting: b
    } = li(), h = T(() => parseFloat(e.max)), w = T(() => parseFloat(e.height)), N = T(() => Yn(parseFloat(e.bufferValue) / h.value * 100, 0, 100)), p = T(() => Yn(parseFloat(r.value) / h.value * 100, 0, 100)), C = T(() => i.value !== e.reverse), R = T(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), k = Mn && ((D = window.matchMedia) == null ? void 0 : D.call(window, "(forced-colors: active)").matches);
    function M(E) {
      if (!g.value) return;
      const {
        left: P,
        right: A,
        width: B
      } = g.value.getBoundingClientRect(), O = C.value ? B - E.clientX + (A - B) : E.clientX - P;
      r.value = Math.round(O / B * h.value);
    }
    return me(() => S(e.tag, {
      ref: g,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && b.value,
        "v-progress-linear--reverse": C.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, x.value, a.value, s.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? W(w.value) : 0,
        "--v-progress-linear-height": W(w.value),
        ...e.absolute ? l.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(r.value), h.value),
      onClick: e.clickable && M
    }, {
      default: () => [e.stream && S("div", {
        key: "stream",
        class: ["v-progress-linear__stream", u.value],
        style: {
          ...o.value,
          [C.value ? "left" : "right"]: W(-w.value),
          borderTop: `${W(w.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${W(w.value / 4)})`,
          width: W(100 - N.value, "%"),
          "--v-progress-linear-stream-to": W(w.value * (C.value ? 1 : -1))
        }
      }, null), S("div", {
        class: ["v-progress-linear__background", k ? void 0 : c.value],
        style: [f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), S("div", {
        class: ["v-progress-linear__buffer", k ? void 0 : d.value],
        style: [m.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: W(N.value, "%")
        }]
      }, null), S(Bt, {
        name: R.value
      }, {
        default: () => [e.indeterminate ? S("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((E) => S("div", {
          key: E,
          class: ["v-progress-linear__indeterminate", E, k ? void 0 : _.value],
          style: v.value
        }, null))]) : S("div", {
          class: ["v-progress-linear__determinate", k ? void 0 : _.value],
          style: [v.value, {
            width: W(p.value, "%")
          }]
        }, null)]
      }), n.default && S("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: p.value,
        buffer: N.value
      })])]
    })), {};
  }
}), Ba = j({
  loading: [Boolean, String]
}, "loader");
function Oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe();
  return {
    loaderClasses: T(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Ia(e, t) {
  var r;
  let {
    slots: n
  } = t;
  return S("div", {
    class: `${e.name}__loader`
  }, [((r = n.default) == null ? void 0 : r.call(n, {
    color: e.color,
    isActive: e.active
  })) || S(La, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const hn = Symbol("rippleStop"), Ra = 80;
function cr(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function gn(e) {
  return e.constructor.name === "TouchEvent";
}
function ui(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ha = function(e, t) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
  if (!ui(e)) {
    const d = t.getBoundingClientRect(), m = gn(e) ? e.touches[e.touches.length - 1] : e;
    r = m.clientX - d.left, i = m.clientY - d.top;
  }
  let s = 0, a = 0.3;
  (f = t._ripple) != null && f.circle ? (a = 0.15, s = t.clientWidth / 2, s = n.center ? s : s + Math.sqrt((r - s) ** 2 + (i - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const l = `${(t.clientWidth - s * 2) / 2}px`, u = `${(t.clientHeight - s * 2) / 2}px`, o = n.center ? l : `${r - s}px`, c = n.center ? u : `${i - s}px`;
  return {
    radius: s,
    scale: a,
    x: o,
    y: c,
    centerX: l,
    centerY: u
  };
}, Tt = {
  /* eslint-disable max-statements */
  show(e, t) {
    var m;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled))
      return;
    const r = document.createElement("span"), i = document.createElement("span");
    r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
    const {
      radius: s,
      scale: a,
      x: l,
      y: u,
      centerX: o,
      centerY: c
    } = Ha(e, t, n), f = `${s * 2}px`;
    i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(r);
    const d = window.getComputedStyle(t);
    d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), cr(i, `translate(${l}, ${u}) scale3d(${a},${a},${a})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), cr(i, `translate(${o}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var s;
    if (!((s = e == null ? void 0 : e._ripple) != null && s.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const r = performance.now() - Number(n.dataset.activated), i = Math.max(250 - r, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var l;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((l = n.parentNode) == null ? void 0 : l.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, i);
  }
};
function ci(e) {
  return typeof e > "u" || !!e;
}
function it(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[hn])) {
    if (e[hn] = !0, gn(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || ui(e), n._ripple.class && (t.class = n._ripple.class), gn(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Tt.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var r;
        (r = n == null ? void 0 : n._ripple) != null && r.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Ra);
    } else
      Tt.show(e, n, t);
  }
}
function fr(e) {
  e[hn] = !0;
}
function ie(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        ie(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Tt.hide(t);
  }
}
function fi(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let st = !1;
function di(e) {
  !st && (e.keyCode === Xn.enter || e.keyCode === Xn.space) && (st = !0, it(e));
}
function hi(e) {
  st = !1, ie(e);
}
function gi(e) {
  st && (st = !1, ie(e));
}
function mi(e, t, n) {
  const {
    value: r,
    modifiers: i
  } = t, s = ci(r);
  if (s || Tt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = i.center, e._ripple.circle = i.circle, Ts(r) && r.class && (e._ripple.class = r.class), s && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", fr, {
        passive: !0
      }), e.addEventListener("mousedown", fr);
      return;
    }
    e.addEventListener("touchstart", it, {
      passive: !0
    }), e.addEventListener("touchend", ie, {
      passive: !0
    }), e.addEventListener("touchmove", fi, {
      passive: !0
    }), e.addEventListener("touchcancel", ie), e.addEventListener("mousedown", it), e.addEventListener("mouseup", ie), e.addEventListener("mouseleave", ie), e.addEventListener("keydown", di), e.addEventListener("keyup", hi), e.addEventListener("blur", gi), e.addEventListener("dragstart", ie, {
      passive: !0
    });
  } else !s && n && vi(e);
}
function vi(e) {
  e.removeEventListener("mousedown", it), e.removeEventListener("touchstart", it), e.removeEventListener("touchend", ie), e.removeEventListener("touchmove", fi), e.removeEventListener("touchcancel", ie), e.removeEventListener("mouseup", ie), e.removeEventListener("mouseleave", ie), e.removeEventListener("keydown", di), e.removeEventListener("keyup", hi), e.removeEventListener("dragstart", ie), e.removeEventListener("blur", gi);
}
function ka(e, t) {
  mi(e, t, !1);
}
function Da(e) {
  delete e._ripple, vi(e);
}
function Ma(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = ci(t.oldValue);
  mi(e, t, n);
}
const Fa = {
  mounted: ka,
  unmounted: Da,
  updated: Ma
}, Ua = j({
  text: String,
  onClick: De(),
  ..._e(),
  ...Ze()
}, "VLabel"), Va = ne()({
  name: "VLabel",
  props: Ua(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return me(() => {
      var r;
      return S("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (r = n.default) == null ? void 0 : r.call(n)]);
    }), {};
  }
});
function pi(e) {
  const {
    t
  } = sa();
  function n(r) {
    let {
      name: i
    } = r;
    const s = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[i], a = e[`onClick:${i}`];
    function l(o) {
      o.key !== "Enter" && o.key !== " " || (o.preventDefault(), o.stopPropagation(), qr(a, new PointerEvent("click", o)));
    }
    const u = a && s ? t(`$vuetify.input.${s}`, e.label ?? "") : void 0;
    return S(Ut, {
      icon: e[`${i}Icon`],
      "aria-label": u,
      onClick: a,
      onKeydown: l
    }, null);
  }
  return {
    InputIcon: n
  };
}
const $a = j({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ..._e(),
  ...ri({
    transition: {
      component: Qr,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Ga = ne()({
  name: "VMessages",
  props: $a(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = T(() => mt(e.messages)), {
      textColorClasses: i,
      textColorStyles: s
    } = je(T(() => e.color));
    return me(() => S(ii, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", i.value, e.class],
      style: [s.value, e.style]
    }, {
      default: () => [e.active && r.value.map((a, l) => S("div", {
        class: "v-messages__message",
        key: `${l}-${r.value}`
      }, [n.message ? n.message({
        message: a
      }) : a]))]
    })), {};
  }
}), bi = j({
  focused: Boolean,
  "onUpdate:focused": De()
}, "focus");
function yi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe();
  const n = Dt(e, "focused"), r = T(() => ({
    [`${t}--focused`]: n.value
  }));
  function i() {
    n.value = !0;
  }
  function s() {
    n.value = !1;
  }
  return {
    focusClasses: r,
    isFocused: n,
    focus: i,
    blur: s
  };
}
const ja = Symbol.for("vuetify:form");
function za(e) {
  const t = Ne(ja, null);
  return {
    ...t,
    isReadonly: T(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: T(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const Wa = j({
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
  ...bi()
}, "validation");
function qa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ht();
  const r = Dt(e, "modelValue"), i = T(() => e.validationValue === void 0 ? r.value : e.validationValue), s = za(e), a = K([]), l = nt(!0), u = T(() => !!(mt(r.value === "" ? null : r.value).length || mt(i.value === "" ? null : i.value).length)), o = T(() => {
    var h;
    return (h = e.errorMessages) != null && h.length ? mt(e.errorMessages).concat(a.value).slice(0, Math.max(0, +e.maxErrors)) : a.value;
  }), c = T(() => {
    var N;
    let h = (e.validateOn ?? ((N = s.validateOn) == null ? void 0 : N.value)) || "input";
    h === "lazy" && (h = "input lazy"), h === "eager" && (h = "input eager");
    const w = new Set((h == null ? void 0 : h.split(" ")) ?? []);
    return {
      input: w.has("input"),
      blur: w.has("blur") || w.has("input") || w.has("invalid-input"),
      invalidInput: w.has("invalid-input"),
      lazy: w.has("lazy"),
      eager: w.has("eager")
    };
  }), f = T(() => {
    var h;
    return e.error || (h = e.errorMessages) != null && h.length ? !1 : e.rules.length ? l.value ? a.value.length || c.value.lazy ? null : !0 : !a.value.length : !0;
  }), d = nt(!1), m = T(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: u.value,
    [`${t}--disabled`]: s.isDisabled.value,
    [`${t}--readonly`]: s.isReadonly.value
  })), _ = Pe("validation"), v = T(() => e.name ?? Ee(n));
  Dr(() => {
    var h;
    (h = s.register) == null || h.call(s, {
      id: v.value,
      vm: _,
      validate: b,
      reset: x,
      resetValidation: g
    });
  }), kn(() => {
    var h;
    (h = s.unregister) == null || h.call(s, v.value);
  }), Mr(async () => {
    var h;
    c.value.lazy || await b(!c.value.eager), (h = s.update) == null || h.call(s, v.value, f.value, o.value);
  }), dn(() => c.value.input || c.value.invalidInput && f.value === !1, () => {
    de(i, () => {
      if (i.value != null)
        b();
      else if (e.focused) {
        const h = de(() => e.focused, (w) => {
          w || b(), h();
        });
      }
    });
  }), dn(() => c.value.blur, () => {
    de(() => e.focused, (h) => {
      h || b();
    });
  }), de([f, o], () => {
    var h;
    (h = s.update) == null || h.call(s, v.value, f.value, o.value);
  });
  async function x() {
    r.value = null, await un(), await g();
  }
  async function g() {
    l.value = !0, c.value.lazy ? a.value = [] : await b(!c.value.eager);
  }
  async function b() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const w = [];
    d.value = !0;
    for (const N of e.rules) {
      if (w.length >= +(e.maxErrors ?? 1))
        break;
      const C = await (typeof N == "function" ? N : () => N)(i.value);
      if (C !== !0) {
        if (C !== !1 && typeof C != "string") {
          console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        w.push(C || "");
      }
    }
    return a.value = w, d.value = !1, l.value = h, a.value;
  }
  return {
    errorMessages: o,
    isDirty: u,
    isDisabled: s.isDisabled,
    isReadonly: s.isReadonly,
    isPristine: l,
    isValid: f,
    isValidating: d,
    reset: x,
    resetValidation: g,
    validate: b,
    validationClasses: m
  };
}
const Ei = j({
  id: String,
  appendIcon: Me,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: Me,
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
  ..._e(),
  ...ma(),
  ...Fn(ca(), ["maxWidth", "minWidth", "width"]),
  ...Ze(),
  ...Wa()
}, "VInput"), dr = ne()({
  name: "VInput",
  props: {
    ...Ei()
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
      densityClasses: s
    } = va(e), {
      dimensionStyles: a
    } = fa(e), {
      themeClasses: l
    } = lt(e), {
      rtlClasses: u
    } = Mt(), {
      InputIcon: o
    } = pi(e), c = Ht(), f = T(() => e.id || `input-${c}`), d = T(() => `${f.value}-messages`), {
      errorMessages: m,
      isDirty: _,
      isDisabled: v,
      isReadonly: x,
      isPristine: g,
      isValid: b,
      isValidating: h,
      reset: w,
      resetValidation: N,
      validate: p,
      validationClasses: C
    } = qa(e, "v-input", f), R = T(() => ({
      id: f,
      messagesId: d,
      isDirty: _,
      isDisabled: v,
      isReadonly: x,
      isPristine: g,
      isValid: b,
      isValidating: h,
      reset: w,
      resetValidation: N,
      validate: p
    })), k = T(() => {
      var M;
      return (M = e.errorMessages) != null && M.length || !g.value && m.value.length ? m.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return me(() => {
      var A, B, O, G;
      const M = !!(r.prepend || e.prependIcon), D = !!(r.append || e.appendIcon), E = k.value.length > 0, P = !e.hideDetails || e.hideDetails === "auto" && (E || !!r.details);
      return S("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, s.value, l.value, u.value, C.value, e.class],
        style: [a.value, e.style]
      }, [M && S("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(A = r.prepend) == null ? void 0 : A.call(r, R.value), e.prependIcon && S(o, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), r.default && S("div", {
        class: "v-input__control"
      }, [(B = r.default) == null ? void 0 : B.call(r, R.value)]), D && S("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && S(o, {
        key: "append-icon",
        name: "append"
      }, null), (O = r.append) == null ? void 0 : O.call(r, R.value)]), P && S("div", {
        id: d.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [S(Ga, {
        active: E,
        messages: k.value
      }, {
        message: r.message
      }), (G = r.details) == null ? void 0 : G.call(r, R.value)])]);
    }), {
      reset: w,
      resetValidation: N,
      validate: p,
      isValid: b,
      errorMessages: m
    };
  }
}), Yt = Symbol("Forwarded refs");
function Kt(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function Xa(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return e[Yt] = n, new Proxy(e, {
    get(i, s) {
      if (Reflect.has(i, s))
        return Reflect.get(i, s);
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const a of n)
          if (a.value && Reflect.has(a.value, s)) {
            const l = Reflect.get(a.value, s);
            return typeof l == "function" ? l.bind(a.value) : l;
          }
      }
    },
    has(i, s) {
      if (Reflect.has(i, s))
        return !0;
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const a of n)
        if (a.value && Reflect.has(a.value, s))
          return !0;
      return !1;
    },
    set(i, s, a) {
      if (Reflect.has(i, s))
        return Reflect.set(i, s, a);
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const l of n)
        if (l.value && Reflect.has(l.value, s))
          return Reflect.set(l.value, s, a);
      return !1;
    },
    getOwnPropertyDescriptor(i, s) {
      var l;
      const a = Reflect.getOwnPropertyDescriptor(i, s);
      if (a) return a;
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const u of n) {
          if (!u.value) continue;
          const o = Kt(u.value, s) ?? ("_" in u.value ? Kt((l = u.value._) == null ? void 0 : l.setupState, s) : void 0);
          if (o) return o;
        }
        for (const u of n) {
          const o = u.value && u.value[Yt];
          if (!o) continue;
          const c = o.slice();
          for (; c.length; ) {
            const f = c.shift(), d = Kt(f.value, s);
            if (d) return d;
            const m = f.value && f.value[Yt];
            m && c.push(...m);
          }
        }
      }
    }
  });
}
const Za = j({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ..._e(),
  ...ri({
    transition: {
      component: Qr
    }
  })
}, "VCounter"), Ya = ne()({
  name: "VCounter",
  functional: !0,
  props: Za(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = T(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return me(() => S(ii, {
      transition: e.transition
    }, {
      default: () => [It(S("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: r.value,
        max: e.max,
        value: e.value
      }) : r.value]), [[Fr, e.active]])]
    })), {};
  }
}), Ka = j({
  floating: Boolean,
  ..._e()
}, "VFieldLabel"), ht = ne()({
  name: "VFieldLabel",
  props: Ka(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return me(() => S(Va, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Ja = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], wi = j({
  appendInnerIcon: Me,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: Me,
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
  prependInnerIcon: Me,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Ja.includes(e)
  },
  "onClick:clear": De(),
  "onClick:appendInner": De(),
  "onClick:prependInner": De(),
  ..._e(),
  ...Ba(),
  ...ti(),
  ...Ze()
}, "VField"), _i = ne()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...bi(),
    ...wi()
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
      themeClasses: s
    } = lt(e), {
      loaderClasses: a
    } = Oa(e), {
      focusClasses: l,
      isFocused: u,
      focus: o,
      blur: c
    } = yi(e), {
      InputIcon: f
    } = pi(e), {
      roundedClasses: d
    } = ni(e), {
      rtlClasses: m
    } = Mt(), _ = T(() => e.dirty || e.active), v = T(() => !!(e.label || i.label)), x = T(() => !e.singleLine && v.value), g = Ht(), b = T(() => e.id || `input-${g}`), h = T(() => `${b.value}-messages`), w = K(), N = K(), p = K(), C = T(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: R,
      backgroundColorStyles: k
    } = pt(Ct(e, "bgColor")), {
      textColorClasses: M,
      textColorStyles: D
    } = je(T(() => e.error || e.disabled ? void 0 : _.value && u.value ? e.color : e.baseColor));
    de(_, (A) => {
      if (x.value) {
        const B = w.value.$el, O = N.value.$el;
        requestAnimationFrame(() => {
          const G = Ds(B), q = O.getBoundingClientRect(), fe = q.x - G.x, re = q.y - G.y - (G.height / 2 - q.height / 2), ve = q.width / 0.75, pe = Math.abs(ve - G.width) > 1 ? {
            maxWidth: W(ve)
          } : void 0, Be = getComputedStyle(B), Ye = getComputedStyle(O), ee = parseFloat(Be.transitionDuration) * 1e3 || 150, Fe = parseFloat(Ye.getPropertyValue("--v-field-label-scale")), ct = Ye.getPropertyValue("color");
          B.style.visibility = "visible", O.style.visibility = "hidden", Ms(B, {
            transform: `translate(${fe}px, ${re}px) scale(${Fe})`,
            color: ct,
            ...pe
          }, {
            duration: ee,
            easing: ra,
            direction: A ? "normal" : "reverse"
          }).finished.then(() => {
            B.style.removeProperty("visibility"), O.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const E = T(() => ({
      isActive: _,
      isFocused: u,
      controlRef: p,
      blur: c,
      focus: o
    }));
    function P(A) {
      A.target !== document.activeElement && A.preventDefault();
    }
    return me(() => {
      var fe, re, ve;
      const A = e.variant === "outlined", B = !!(i["prepend-inner"] || e.prependInnerIcon), O = !!(e.clearable || i.clear) && !e.disabled, G = !!(i["append-inner"] || e.appendInnerIcon || O), q = () => i.label ? i.label({
        ...E.value,
        label: e.label,
        props: {
          for: b.value
        }
      }) : e.label;
      return S("div", He({
        class: ["v-field", {
          "v-field--active": _.value,
          "v-field--appended": G,
          "v-field--center-affix": e.centerAffix ?? !C.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": B,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !q(),
          [`v-field--variant-${e.variant}`]: !0
        }, s.value, R.value, l.value, a.value, d.value, m.value, e.class],
        style: [k.value, e.style],
        onClick: P
      }, n), [S("div", {
        class: "v-field__overlay"
      }, null), S(Ia, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: i.loader
      }), B && S("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && S(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (fe = i["prepend-inner"]) == null ? void 0 : fe.call(i, E.value)]), S("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && x.value && S(ht, {
        key: "floating-label",
        ref: N,
        class: [M.value],
        floating: !0,
        for: b.value,
        style: D.value
      }, {
        default: () => [q()]
      }), v.value && S(ht, {
        key: "label",
        ref: w,
        for: b.value
      }, {
        default: () => [q()]
      }), (re = i.default) == null ? void 0 : re.call(i, {
        ...E.value,
        props: {
          id: b.value,
          class: "v-field__input",
          "aria-describedby": h.value
        },
        focus: o,
        blur: c
      })]), O && S(oa, {
        key: "clear"
      }, {
        default: () => [It(S("div", {
          class: "v-field__clearable",
          onMousedown: (pe) => {
            pe.preventDefault(), pe.stopPropagation();
          }
        }, [S(ua, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [i.clear ? i.clear({
            ...E.value,
            props: {
              onFocus: o,
              onBlur: c,
              onClick: e["onClick:clear"]
            }
          }) : S(f, {
            name: "clear",
            onFocus: o,
            onBlur: c
          }, null)]
        })]), [[Fr, e.dirty]])]
      }), G && S("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(ve = i["append-inner"]) == null ? void 0 : ve.call(i, E.value), e.appendInnerIcon && S(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), S("div", {
        class: ["v-field__outline", M.value],
        style: D.value
      }, [A && S(Re, null, [S("div", {
        class: "v-field__outline__start"
      }, null), x.value && S("div", {
        class: "v-field__outline__notch"
      }, [S(ht, {
        ref: N,
        floating: !0,
        for: b.value
      }, {
        default: () => [q()]
      })]), S("div", {
        class: "v-field__outline__end"
      }, null)]), C.value && x.value && S(ht, {
        ref: N,
        floating: !0,
        for: b.value
      }, {
        default: () => [q()]
      })])]);
    }), {
      controlRef: p
    };
  }
});
function Qa(e) {
  const t = Object.keys(_i.props).filter((n) => !As(n) && n !== "class" && n !== "style");
  return Fn(e, t);
}
const eo = ["color", "file", "time", "date", "datetime-local", "week", "month"], to = j({
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
  ...Ei(),
  ...wi()
}, "VTextField"), no = ne()({
  name: "VTextField",
  directives: {
    Intersect: ha
  },
  inheritAttrs: !1,
  props: to(),
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
    const s = Dt(e, "modelValue"), {
      isFocused: a,
      focus: l,
      blur: u
    } = yi(e), o = T(() => typeof e.counterValue == "function" ? e.counterValue(s.value) : typeof e.counterValue == "number" ? e.counterValue : (s.value ?? "").toString().length), c = T(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = T(() => ["plain", "underlined"].includes(e.variant));
    function d(p, C) {
      var R, k;
      !e.autofocus || !p || (k = (R = C[0].target) == null ? void 0 : R.focus) == null || k.call(R);
    }
    const m = K(), _ = K(), v = K(), x = T(() => eo.includes(e.type) || e.persistentPlaceholder || a.value || e.active);
    function g() {
      var p;
      v.value !== document.activeElement && ((p = v.value) == null || p.focus()), a.value || l();
    }
    function b(p) {
      r("mousedown:control", p), p.target !== v.value && (g(), p.preventDefault());
    }
    function h(p) {
      g(), r("click:control", p);
    }
    function w(p) {
      p.stopPropagation(), g(), un(() => {
        s.value = null, qr(e["onClick:clear"], p);
      });
    }
    function N(p) {
      var R;
      const C = p.target;
      if (s.value = C.value, (R = e.modelModifiers) != null && R.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const k = [C.selectionStart, C.selectionEnd];
        un(() => {
          C.selectionStart = k[0], C.selectionEnd = k[1];
        });
      }
    }
    return me(() => {
      const p = !!(i.counter || e.counter !== !1 && e.counter != null), C = !!(p || i.details), [R, k] = Bs(n), {
        modelValue: M,
        ...D
      } = dr.filterProps(e), E = Qa(e);
      return S(dr, He({
        ref: m,
        modelValue: s.value,
        "onUpdate:modelValue": (P) => s.value = P,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, R, D, {
        centerAffix: !f.value,
        focused: a.value
      }), {
        ...i,
        default: (P) => {
          let {
            id: A,
            isDisabled: B,
            isDirty: O,
            isReadonly: G,
            isValid: q
          } = P;
          return S(_i, He({
            ref: _,
            onMousedown: b,
            onClick: h,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, E, {
            id: A.value,
            active: x.value || O.value,
            dirty: O.value || e.dirty,
            disabled: B.value,
            focused: a.value,
            error: q.value === !1
          }), {
            ...i,
            default: (fe) => {
              let {
                props: {
                  class: re,
                  ...ve
                }
              } = fe;
              const pe = It(S("input", He({
                ref: v,
                value: s.value,
                onInput: N,
                autofocus: e.autofocus,
                readonly: G.value,
                disabled: B.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: g,
                onBlur: u
              }, ve, k), null), [[Es("intersect"), {
                handler: d
              }, null, {
                once: !0
              }]]);
              return S(Re, null, [e.prefix && S("span", {
                class: "v-text-field__prefix"
              }, [S("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), i.default ? S("div", {
                class: re,
                "data-no-activator": ""
              }, [i.default(), pe]) : ws(pe, {
                class: re
              }), e.suffix && S("span", {
                class: "v-text-field__suffix"
              }, [S("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: C ? (P) => {
          var A;
          return S(Re, null, [(A = i.details) == null ? void 0 : A.call(i, P), p && S(Re, null, [S("span", null, null), S(Ya, {
            active: e.persistentCounter || a.value,
            value: o.value,
            max: c.value,
            disabled: e.disabled
          }, i.counter)])]);
        } : void 0
      });
    }), Xa({}, m, _, v);
  }
}), ro = { class: "d-flex" }, io = { class: "gs-alert-bar__content" }, so = { class: "gs-alert-bar__icon" }, ao = { class: "d-flex flex-column" }, oo = ["innerHTML"], lo = ["innerHTML"], uo = /* @__PURE__ */ oe({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (r, i) => (Z(), se("div", {
      class: ot(n.value),
      role: "alert"
    }, [
      Ie("div", ro, [
        Ie("div", io, [
          Ie("div", so, [
            S(Ee(Ut), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          Ie("div", ao, [
            r.title ? (Z(), se("span", {
              key: 0,
              class: "title",
              innerHTML: r.title
            }, null, 8, oo)) : Qe("", !0),
            Ie("span", {
              class: "message",
              innerHTML: r.message
            }, null, 8, lo)
          ])
        ])
      ])
    ], 2));
  }
}), Ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, co = /* @__PURE__ */ Ae(uo, [["__scopeId", "data-v-5fb92636"]]), fo = {
  key: 1,
  class: "text"
}, ho = /* @__PURE__ */ oe({
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
    const t = e, n = T(() => t.href ? "a" : t.tag || "button"), r = T(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), i = T(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), s = T(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (a, l) => It((Z(), et(_s(n.value), {
      class: ot(i.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: Ge({ width: a.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: Wn(() => [
        t.icon && !t.loading ? (Z(), et(Ee(Ut), {
          key: 0,
          class: "icon"
        }, {
          default: Wn(() => [
            xs(Rt(t.icon), 1)
          ]),
          _: 1
        })) : Qe("", !0),
        a.$slots.default ? (Z(), se("span", fo, [
          Ur(a.$slots, "default", {}, void 0, !0)
        ])) : Qe("", !0),
        t.loading ? (Z(), et(Ee(Ta), {
          key: 2,
          size: s.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : Qe("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [Fa, r.value]
    ]);
  }
}), go = /* @__PURE__ */ Ae(ho, [["__scopeId", "data-v-c76db002"]]), mo = oe({
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
}), vo = { class: "filter-button-list" }, po = ["onClick"], bo = { class: "filter-button-title" };
function yo(e, t, n, r, i, s) {
  return Z(), se("div", vo, [
    (Z(!0), se(Re, null, Vr(e.categories, (a) => (Z(), se("button", {
      key: a,
      class: ot(["filter-button", { "is-active": a === e.modelValue }]),
      onClick: Cs((l) => e.searchByCategory(a), ["prevent"])
    }, [
      Ie("span", bo, Rt(a), 1)
    ], 10, po))), 128))
  ]);
}
const Eo = /* @__PURE__ */ Ae(mo, [["render", yo], ["__scopeId", "data-v-5a3f1ca3"]]), wo = oe({
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
}), _o = { class: "gs-tabs" }, xo = ["disabled", "onClick"];
function Co(e, t, n, r, i, s) {
  return Z(), se("div", _o, [
    (Z(!0), se(Re, null, Vr(e.tabs, (a, l) => (Z(), se("button", {
      key: l,
      class: ot(["gs-tab", { active: e.modelValue === a.value }]),
      disabled: a.disabled,
      onClick: (u) => e.selectTab(a)
    }, Rt(a.label), 11, xo))), 128))
  ]);
}
const So = /* @__PURE__ */ Ae(wo, [["render", Co], ["__scopeId", "data-v-b020e60d"]]), To = ["src"], No = /* @__PURE__ */ oe({
  name: "GsTag",
  __name: "GsTag",
  props: {
    label: {},
    backgroundColor: { default: "pastel-green" },
    icon: { default: void 0 },
    bold: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = T(() => t.backgroundColor === "black" ? "var(--ui-white)" : "var(--ui-black)"), r = T(() => {
      switch (t.backgroundColor) {
        case "black":
          return "var(--ui-white)";
        case "grey":
          return "var(--ui-black)";
        default:
          return "var(--ui-green)";
      }
    }), i = T(() => {
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
    return (s, a) => (Z(), se("div", {
      style: Ge({
        backgroundColor: `${i.value}`,
        gap: s.label ? "4px" : "0"
      }),
      class: "gs-tag"
    }, [
      s.icon && s.icon.startsWith("mdi") ? (Z(), et(Ut, {
        key: 0,
        icon: s.icon,
        size: "16px",
        style: Ge({ color: r.value }),
        class: "gs-tag__icon"
      }, null, 8, ["icon", "style"])) : s.icon && !s.icon.startsWith("mdi") ? (Z(), se("img", {
        key: 1,
        src: s.icon,
        style: { width: "16px" },
        alt: "",
        class: "gs-tag__icon"
      }, null, 8, To)) : Qe("", !0),
      Ie("span", {
        style: Ge({ color: n.value, fontWeight: s.bold ? "bold" : "normal" }),
        class: "gs-tag__label"
      }, Rt(s.label), 5)
    ], 4));
  }
}), Po = /* @__PURE__ */ Ae(No, [["__scopeId", "data-v-6b4861a9"]]), Ao = /* @__PURE__ */ oe({
  name: "GsDivider",
  __name: "GsDivider",
  props: {
    color: { default: "grey200" },
    length: { default: "100%" },
    thickness: { default: "thick" },
    margin: { default: "0" }
  },
  setup(e) {
    const t = e, n = T(() => {
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
    return (r, i) => (Z(), se("hr", {
      style: Ge({
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
}), Lo = /* @__PURE__ */ Ae(Ao, [["__scopeId", "data-v-77a02199"]]);
/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var mn = 9e15, Le = 1e9, vn = "0123456789abcdef", Nt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Pt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", pn = {
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
  maxE: mn,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, xi, we, H = !0, Vt = "[DecimalError] ", Te = Vt + "Invalid argument: ", Ci = Vt + "Precision limit exceeded", Si = Vt + "crypto unavailable", Ti = "[object Decimal]", J = Math.floor, X = Math.pow, Bo = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Oo = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Io = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ni = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ue = 1e7, I = 7, Ro = 9007199254740991, Ho = Nt.length - 1, bn = Pt.length - 1, y = { toStringTag: Ti };
y.absoluteValue = y.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), L(e);
};
y.ceil = function() {
  return L(new this.constructor(this), this.e + 1, 2);
};
y.clampedTo = y.clamp = function(e, t) {
  var n, r = this, i = r.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
  if (e.gt(t)) throw Error(Te + t);
  return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
};
y.comparedTo = y.cmp = function(e) {
  var t, n, r, i, s = this, a = s.d, l = (e = new s.constructor(e)).d, u = s.s, o = e.s;
  if (!a || !l)
    return !u || !o ? NaN : u !== o ? u : a === l ? 0 : !a ^ u < 0 ? 1 : -1;
  if (!a[0] || !l[0]) return a[0] ? u : l[0] ? -o : 0;
  if (u !== o) return u;
  if (s.e !== e.e) return s.e > e.e ^ u < 0 ? 1 : -1;
  for (r = a.length, i = l.length, t = 0, n = r < i ? r : i; t < n; ++t)
    if (a[t] !== l[t]) return a[t] > l[t] ^ u < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ u < 0 ? 1 : -1;
};
y.cosine = y.cos = function() {
  var e, t, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + I, r.rounding = 1, n = ko(r, Oi(r, n)), r.precision = e, r.rounding = t, L(we == 2 || we == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
};
y.cubeRoot = y.cbrt = function() {
  var e, t, n, r, i, s, a, l, u, o, c = this, f = c.constructor;
  if (!c.isFinite() || c.isZero()) return new f(c);
  for (H = !1, s = c.s * X(c.s * c, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (n = Y(c.d), e = c.e, (s = (e - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"), s = X(n, 1 / 3), e = J((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? n = "5e" + e : (n = s.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new f(n), r.s = c.s) : r = new f(s.toString()), a = (e = f.precision) + 3; ; )
    if (l = r, u = l.times(l).times(l), o = u.plus(c), r = $(o.plus(c).times(l), o.plus(u), a + 2, 1), Y(l.d).slice(0, a) === (n = Y(r.d)).slice(0, a))
      if (n = n.slice(a - 3, a + 1), n == "9999" || !i && n == "4999") {
        if (!i && (L(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          r = l;
          break;
        }
        a += 4, i = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (L(r, e + 1, 1), t = !r.times(r).times(r).eq(c));
        break;
      }
  return H = !0, L(r, e, f.rounding, t);
};
y.decimalPlaces = y.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - J(this.e / I)) * I, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
y.dividedBy = y.div = function(e) {
  return $(this, new this.constructor(e));
};
y.dividedToIntegerBy = y.divToInt = function(e) {
  var t = this, n = t.constructor;
  return L($(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
y.equals = y.eq = function(e) {
  return this.cmp(e) === 0;
};
y.floor = function() {
  return L(new this.constructor(this), this.e + 1, 3);
};
y.greaterThan = y.gt = function(e) {
  return this.cmp(e) > 0;
};
y.greaterThanOrEqualTo = y.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
y.hyperbolicCosine = y.cosh = function() {
  var e, t, n, r, i, s = this, a = s.constructor, l = new a(1);
  if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
  if (s.isZero()) return l;
  n = a.precision, r = a.rounding, a.precision = n + Math.max(s.e, s.sd()) + 4, a.rounding = 1, i = s.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Gt(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), s = ze(a, 1, s.times(t), new a(1), !0);
  for (var u, o = e, c = new a(8); o--; )
    u = s.times(s), s = l.minus(u.times(c.minus(u.times(c))));
  return L(s, a.precision = n, a.rounding = r, !0);
};
y.hyperbolicSine = y.sinh = function() {
  var e, t, n, r, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero()) return new s(i);
  if (t = s.precision, n = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, r = i.d.length, r < 3)
    i = ze(s, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / Gt(5, e)), i = ze(s, 2, i, i, !0);
    for (var a, l = new s(5), u = new s(16), o = new s(20); e--; )
      a = i.times(i), i = i.times(l.plus(a.times(u.times(a).plus(o))));
  }
  return s.precision = t, s.rounding = n, L(i, t, n, !0);
};
y.hyperbolicTangent = y.tanh = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, $(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
};
y.inverseCosine = y.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? he(t, r, i) : new t(0) : new t(NaN) : e.isZero() ? he(t, r + 4, i).times(0.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2));
};
y.inverseHyperbolicCosine = y.acosh = function() {
  var e, t, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, H = !1, n = n.times(n).minus(1).sqrt().plus(n), H = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
};
y.inverseHyperbolicSine = y.asinh = function() {
  var e, t, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, H = !1, n = n.times(n).plus(1).sqrt().plus(n), H = !0, r.precision = e, r.rounding = t, n.ln());
};
y.inverseHyperbolicTangent = y.atanh = function() {
  var e, t, n, r, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, t = s.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? L(new s(i), e, t, !0) : (s.precision = n = r - i.e, i = $(i.plus(1), new s(1).minus(i), n + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = t, i.times(0.5))) : new s(NaN);
};
y.inverseSine = y.asin = function() {
  var e, t, n, r, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (t = i.abs().cmp(1), n = s.precision, r = s.rounding, t !== -1 ? t === 0 ? (e = he(s, n + 4, r).times(0.5), e.s = i.s, e) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
};
y.inverseTangent = y.atan = function() {
  var e, t, n, r, i, s, a, l, u, o = this, c = o.constructor, f = c.precision, d = c.rounding;
  if (o.isFinite()) {
    if (o.isZero())
      return new c(o);
    if (o.abs().eq(1) && f + 4 <= bn)
      return a = he(c, f + 4, d).times(0.25), a.s = o.s, a;
  } else {
    if (!o.s) return new c(NaN);
    if (f + 4 <= bn)
      return a = he(c, f + 4, d).times(0.5), a.s = o.s, a;
  }
  for (c.precision = l = f + 10, c.rounding = 1, n = Math.min(28, l / I + 2 | 0), e = n; e; --e) o = o.div(o.times(o).plus(1).sqrt().plus(1));
  for (H = !1, t = Math.ceil(l / I), r = 1, u = o.times(o), a = new c(o), i = o; e !== -1; )
    if (i = i.times(u), s = a.minus(i.div(r += 2)), i = i.times(u), a = s.plus(i.div(r += 2)), a.d[t] !== void 0) for (e = t; a.d[e] === s.d[e] && e--; ) ;
  return n && (a = a.times(2 << n - 1)), H = !0, L(a, c.precision = f, c.rounding = d, !0);
};
y.isFinite = function() {
  return !!this.d;
};
y.isInteger = y.isInt = function() {
  return !!this.d && J(this.e / I) > this.d.length - 2;
};
y.isNaN = function() {
  return !this.s;
};
y.isNegative = y.isNeg = function() {
  return this.s < 0;
};
y.isPositive = y.isPos = function() {
  return this.s > 0;
};
y.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
y.lessThan = y.lt = function(e) {
  return this.cmp(e) < 0;
};
y.lessThanOrEqualTo = y.lte = function(e) {
  return this.cmp(e) < 1;
};
y.logarithm = y.log = function(e) {
  var t, n, r, i, s, a, l, u, o = this, c = o.constructor, f = c.precision, d = c.rounding, m = 5;
  if (e == null)
    e = new c(10), t = !0;
  else {
    if (e = new c(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1)) return new c(NaN);
    t = e.eq(10);
  }
  if (n = o.d, o.s < 0 || !n || !n[0] || o.eq(1))
    return new c(n && !n[0] ? -1 / 0 : o.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (t)
    if (n.length > 1)
      s = !0;
    else {
      for (i = n[0]; i % 10 === 0; ) i /= 10;
      s = i !== 1;
    }
  if (H = !1, l = f + m, a = Se(o, l), r = t ? At(c, l + 10) : Se(e, l), u = $(a, r, l, 1), at(u.d, i = f, d))
    do
      if (l += 10, a = Se(o, l), r = t ? At(c, l + 10) : Se(e, l), u = $(a, r, l, 1), !s) {
        +Y(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = L(u, f + 1, 0));
        break;
      }
    while (at(u.d, i += 10, d));
  return H = !0, L(u, f, d);
};
y.minus = y.sub = function(e) {
  var t, n, r, i, s, a, l, u, o, c, f, d, m = this, _ = m.constructor;
  if (e = new _(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new _(NaN) : m.d ? e.s = -e.s : e = new _(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (o = m.d, d = e.d, l = _.precision, u = _.rounding, !o[0] || !d[0]) {
    if (d[0]) e.s = -e.s;
    else if (o[0]) e = new _(m);
    else return new _(u === 3 ? -0 : 0);
    return H ? L(e, l, u) : e;
  }
  if (n = J(e.e / I), c = J(m.e / I), o = o.slice(), s = c - n, s) {
    for (f = s < 0, f ? (t = o, s = -s, a = d.length) : (t = d, n = c, a = o.length), r = Math.max(Math.ceil(l / I), a) + 2, s > r && (s = r, t.length = 1), t.reverse(), r = s; r--; ) t.push(0);
    t.reverse();
  } else {
    for (r = o.length, a = d.length, f = r < a, f && (a = r), r = 0; r < a; r++)
      if (o[r] != d[r]) {
        f = o[r] < d[r];
        break;
      }
    s = 0;
  }
  for (f && (t = o, o = d, d = t, e.s = -e.s), a = o.length, r = d.length - a; r > 0; --r) o[a++] = 0;
  for (r = d.length; r > s; ) {
    if (o[--r] < d[r]) {
      for (i = r; i && o[--i] === 0; ) o[i] = ue - 1;
      --o[i], o[r] += ue;
    }
    o[r] -= d[r];
  }
  for (; o[--a] === 0; ) o.pop();
  for (; o[0] === 0; o.shift()) --n;
  return o[0] ? (e.d = o, e.e = $t(o, n), H ? L(e, l, u) : e) : new _(u === 3 ? -0 : 0);
};
y.modulo = y.mod = function(e) {
  var t, n = this, r = n.constructor;
  return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? L(new r(n), r.precision, r.rounding) : (H = !1, r.modulo == 9 ? (t = $(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = $(n, e, 0, r.modulo, 1), t = t.times(e), H = !0, n.minus(t));
};
y.naturalExponential = y.exp = function() {
  return yn(this);
};
y.naturalLogarithm = y.ln = function() {
  return Se(this);
};
y.negated = y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, L(e);
};
y.plus = y.add = function(e) {
  var t, n, r, i, s, a, l, u, o, c, f = this, d = f.constructor;
  if (e = new d(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new d(NaN) : f.d || (e = new d(e.d || f.s === e.s ? f : NaN)), e;
  if (f.s != e.s)
    return e.s = -e.s, f.minus(e);
  if (o = f.d, c = e.d, l = d.precision, u = d.rounding, !o[0] || !c[0])
    return c[0] || (e = new d(f)), H ? L(e, l, u) : e;
  if (s = J(f.e / I), r = J(e.e / I), o = o.slice(), i = s - r, i) {
    for (i < 0 ? (n = o, i = -i, a = c.length) : (n = c, r = s, a = o.length), s = Math.ceil(l / I), a = s > a ? s + 1 : a + 1, i > a && (i = a, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (a = o.length, i = c.length, a - i < 0 && (i = a, n = c, c = o, o = n), t = 0; i; )
    t = (o[--i] = o[i] + c[i] + t) / ue | 0, o[i] %= ue;
  for (t && (o.unshift(t), ++r), a = o.length; o[--a] == 0; ) o.pop();
  return e.d = o, e.e = $t(o, r), H ? L(e, l, u) : e;
};
y.precision = y.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Te + e);
  return n.d ? (t = Pi(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
y.round = function() {
  var e = this, t = e.constructor;
  return L(new t(e), e.e + 1, t.rounding);
};
y.sine = y.sin = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + I, r.rounding = 1, n = Mo(r, Oi(r, n)), r.precision = e, r.rounding = t, L(we > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
y.squareRoot = y.sqrt = function() {
  var e, t, n, r, i, s, a = this, l = a.d, u = a.e, o = a.s, c = a.constructor;
  if (o !== 1 || !l || !l[0])
    return new c(!o || o < 0 && (!l || l[0]) ? NaN : l ? a : 1 / 0);
  for (H = !1, o = Math.sqrt(+a), o == 0 || o == 1 / 0 ? (t = Y(l), (t.length + u) % 2 == 0 && (t += "0"), o = Math.sqrt(t), u = J((u + 1) / 2) - (u < 0 || u % 2), o == 1 / 0 ? t = "5e" + u : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), r = new c(t)) : r = new c(o.toString()), n = (u = c.precision) + 3; ; )
    if (s = r, r = s.plus($(a, s, n + 2, 1)).times(0.5), Y(s.d).slice(0, n) === (t = Y(r.d)).slice(0, n))
      if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
        if (!i && (L(s, u + 1, 0), s.times(s).eq(a))) {
          r = s;
          break;
        }
        n += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (L(r, u + 1, 1), e = !r.times(r).eq(a));
        break;
      }
  return H = !0, L(r, u, c.rounding, e);
};
y.tangent = y.tan = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = $(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, L(we == 2 || we == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
y.times = y.mul = function(e) {
  var t, n, r, i, s, a, l, u, o, c = this, f = c.constructor, d = c.d, m = (e = new f(e)).d;
  if (e.s *= c.s, !d || !d[0] || !m || !m[0])
    return new f(!e.s || d && !d[0] && !m || m && !m[0] && !d ? NaN : !d || !m ? e.s / 0 : e.s * 0);
  for (n = J(c.e / I) + J(e.e / I), u = d.length, o = m.length, u < o && (s = d, d = m, m = s, a = u, u = o, o = a), s = [], a = u + o, r = a; r--; ) s.push(0);
  for (r = o; --r >= 0; ) {
    for (t = 0, i = u + r; i > r; )
      l = s[i] + m[r] * d[i - r - 1] + t, s[i--] = l % ue | 0, t = l / ue | 0;
    s[i] = (s[i] + t) % ue | 0;
  }
  for (; !s[--a]; ) s.pop();
  return t ? ++n : s.shift(), e.d = s, e.e = $t(s, n), H ? L(e, f.precision, f.rounding) : e;
};
y.toBinary = function(e, t) {
  return $n(this, 2, e, t);
};
y.toDecimalPlaces = y.toDP = function(e, t) {
  var n = this, r = n.constructor;
  return n = new r(n), e === void 0 ? n : (te(e, 0, Le), t === void 0 ? t = r.rounding : te(t, 0, 8), L(n, e + n.e + 1, t));
};
y.toExponential = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = ge(r, !0) : (te(e, 0, Le), t === void 0 ? t = i.rounding : te(t, 0, 8), r = L(new i(r), e + 1, t), n = ge(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
y.toFixed = function(e, t) {
  var n, r, i = this, s = i.constructor;
  return e === void 0 ? n = ge(i) : (te(e, 0, Le), t === void 0 ? t = s.rounding : te(t, 0, 8), r = L(new s(i), e + i.e + 1, t), n = ge(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
y.toFraction = function(e) {
  var t, n, r, i, s, a, l, u, o, c, f, d, m = this, _ = m.d, v = m.constructor;
  if (!_) return new v(m);
  if (o = n = new v(1), r = u = new v(0), t = new v(r), s = t.e = Pi(_) - m.e - 1, a = s % I, t.d[0] = X(10, a < 0 ? I + a : a), e == null)
    e = s > 0 ? t : o;
  else {
    if (l = new v(e), !l.isInt() || l.lt(o)) throw Error(Te + l);
    e = l.gt(t) ? s > 0 ? t : o : l;
  }
  for (H = !1, l = new v(Y(_)), c = v.precision, v.precision = s = _.length * I * 2; f = $(l, t, 0, 1, 1), i = n.plus(f.times(r)), i.cmp(e) != 1; )
    n = r, r = i, i = o, o = u.plus(f.times(i)), u = i, i = t, t = l.minus(f.times(i)), l = i;
  return i = $(e.minus(n), r, 0, 1, 1), u = u.plus(i.times(o)), n = n.plus(i.times(r)), u.s = o.s = m.s, d = $(o, r, s, 1).minus(m).abs().cmp($(u, n, s, 1).minus(m).abs()) < 1 ? [o, r] : [u, n], v.precision = c, H = !0, d;
};
y.toHexadecimal = y.toHex = function(e, t) {
  return $n(this, 16, e, t);
};
y.toNearest = function(e, t) {
  var n = this, r = n.constructor;
  if (n = new r(n), e == null) {
    if (!n.d) return n;
    e = new r(1), t = r.rounding;
  } else {
    if (e = new r(e), t === void 0 ? t = r.rounding : te(t, 0, 8), !n.d) return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (H = !1, n = $(n, e, 0, t, 1).times(e), H = !0, L(n)) : (e.s = n.s, n = e), n;
};
y.toNumber = function() {
  return +this;
};
y.toOctal = function(e, t) {
  return $n(this, 8, e, t);
};
y.toPower = y.pow = function(e) {
  var t, n, r, i, s, a, l = this, u = l.constructor, o = +(e = new u(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new u(X(+l, o));
  if (l = new u(l), l.eq(1)) return l;
  if (r = u.precision, s = u.rounding, e.eq(1)) return L(l, r, s);
  if (t = J(e.e / I), t >= e.d.length - 1 && (n = o < 0 ? -o : o) <= Ro)
    return i = Ai(u, l, n, r), e.s < 0 ? new u(1).div(i) : L(i, r, s);
  if (a = l.s, a < 0) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1) == 0 && (a = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = a, l;
  }
  return n = X(+l, o), t = n == 0 || !isFinite(n) ? J(o * (Math.log("0." + Y(l.d)) / Math.LN10 + l.e + 1)) : new u(n + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? a / 0 : 0) : (H = !1, u.rounding = l.s = 1, n = Math.min(12, (t + "").length), i = yn(e.times(Se(l, r + n)), r), i.d && (i = L(i, r + 5, 1), at(i.d, r, s) && (t = r + 10, i = L(yn(e.times(Se(l, t + n)), t), t + 5, 1), +Y(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = L(i, r + 1, 0)))), i.s = a, H = !0, u.rounding = s, L(i, r, s));
};
y.toPrecision = function(e, t) {
  var n, r = this, i = r.constructor;
  return e === void 0 ? n = ge(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (te(e, 1, Le), t === void 0 ? t = i.rounding : te(t, 0, 8), r = L(new i(r), e, t), n = ge(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
y.toSignificantDigits = y.toSD = function(e, t) {
  var n = this, r = n.constructor;
  return e === void 0 ? (e = r.precision, t = r.rounding) : (te(e, 1, Le), t === void 0 ? t = r.rounding : te(t, 0, 8)), L(new r(n), e, t);
};
y.toString = function() {
  var e = this, t = e.constructor, n = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
y.truncated = y.trunc = function() {
  return L(new this.constructor(this), this.e + 1, 1);
};
y.valueOf = y.toJSON = function() {
  var e = this, t = e.constructor, n = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function Y(e) {
  var t, n, r, i = e.length - 1, s = "", a = e[0];
  if (i > 0) {
    for (s += a, t = 1; t < i; t++)
      r = e[t] + "", n = I - r.length, n && (s += Ce(n)), s += r;
    a = e[t], r = a + "", n = I - r.length, n && (s += Ce(n));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; ) a /= 10;
  return s + a;
}
function te(e, t, n) {
  if (e !== ~~e || e < t || e > n)
    throw Error(Te + e);
}
function at(e, t, n, r) {
  var i, s, a, l;
  for (s = e[0]; s >= 10; s /= 10) --t;
  return --t < 0 ? (t += I, i = 0) : (i = Math.ceil((t + 1) / I), t %= I), s = X(10, I - t), l = e[i] % s | 0, r == null ? t < 3 ? (t == 0 ? l = l / 100 | 0 : t == 1 && (l = l / 10 | 0), a = n < 4 && l == 99999 || n > 3 && l == 49999 || l == 5e4 || l == 0) : a = (n < 4 && l + 1 == s || n > 3 && l + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == X(10, t - 2) - 1 || (l == s / 2 || l == 0) && (e[i + 1] / s / 100 | 0) == 0 : t < 4 ? (t == 0 ? l = l / 1e3 | 0 : t == 1 ? l = l / 100 | 0 : t == 2 && (l = l / 10 | 0), a = (r || n < 4) && l == 9999 || !r && n > 3 && l == 4999) : a = ((r || n < 4) && l + 1 == s || !r && n > 3 && l + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == X(10, t - 3) - 1, a;
}
function bt(e, t, n) {
  for (var r, i = [0], s, a = 0, l = e.length; a < l; ) {
    for (s = i.length; s--; ) i[s] *= t;
    for (i[0] += vn.indexOf(e.charAt(a++)), r = 0; r < i.length; r++)
      i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function ko(e, t) {
  var n, r, i;
  if (t.isZero()) return t;
  r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Gt(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = ze(e, 1, t.times(i), new e(1));
  for (var s = n; s--; ) {
    var a = t.times(t);
    t = a.times(a).minus(a).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var $ = /* @__PURE__ */ function() {
  function e(r, i, s) {
    var a, l = 0, u = r.length;
    for (r = r.slice(); u--; )
      a = r[u] * i + l, r[u] = a % s | 0, l = a / s | 0;
    return l && r.unshift(l), r;
  }
  function t(r, i, s, a) {
    var l, u;
    if (s != a)
      u = s > a ? 1 : -1;
    else
      for (l = u = 0; l < s; l++)
        if (r[l] != i[l]) {
          u = r[l] > i[l] ? 1 : -1;
          break;
        }
    return u;
  }
  function n(r, i, s, a) {
    for (var l = 0; s--; )
      r[s] -= l, l = r[s] < i[s] ? 1 : 0, r[s] = l * a + r[s] - i[s];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, i, s, a, l, u) {
    var o, c, f, d, m, _, v, x, g, b, h, w, N, p, C, R, k, M, D, E, P = r.constructor, A = r.s == i.s ? 1 : -1, B = r.d, O = i.d;
    if (!B || !B[0] || !O || !O[0])
      return new P(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !i.s || (B ? O && B[0] == O[0] : !O) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          B && B[0] == 0 || !O ? A * 0 : A / 0
        )
      );
    for (u ? (m = 1, c = r.e - i.e) : (u = ue, m = I, c = J(r.e / m) - J(i.e / m)), D = O.length, k = B.length, g = new P(A), b = g.d = [], f = 0; O[f] == (B[f] || 0); f++) ;
    if (O[f] > (B[f] || 0) && c--, s == null ? (p = s = P.precision, a = P.rounding) : l ? p = s + (r.e - i.e) + 1 : p = s, p < 0)
      b.push(1), _ = !0;
    else {
      if (p = p / m + 2 | 0, f = 0, D == 1) {
        for (d = 0, O = O[0], p++; (f < k || d) && p--; f++)
          C = d * u + (B[f] || 0), b[f] = C / O | 0, d = C % O | 0;
        _ = d || f < k;
      } else {
        for (d = u / (O[0] + 1) | 0, d > 1 && (O = e(O, d, u), B = e(B, d, u), D = O.length, k = B.length), R = D, h = B.slice(0, D), w = h.length; w < D; ) h[w++] = 0;
        E = O.slice(), E.unshift(0), M = O[0], O[1] >= u / 2 && ++M;
        do
          d = 0, o = t(O, h, D, w), o < 0 ? (N = h[0], D != w && (N = N * u + (h[1] || 0)), d = N / M | 0, d > 1 ? (d >= u && (d = u - 1), v = e(O, d, u), x = v.length, w = h.length, o = t(v, h, x, w), o == 1 && (d--, n(v, D < x ? E : O, x, u))) : (d == 0 && (o = d = 1), v = O.slice()), x = v.length, x < w && v.unshift(0), n(h, v, w, u), o == -1 && (w = h.length, o = t(O, h, D, w), o < 1 && (d++, n(h, D < w ? E : O, w, u))), w = h.length) : o === 0 && (d++, h = [0]), b[f++] = d, o && h[0] ? h[w++] = B[R] || 0 : (h = [B[R]], w = 1);
        while ((R++ < k || h[0] !== void 0) && p--);
        _ = h[0] !== void 0;
      }
      b[0] || b.shift();
    }
    if (m == 1)
      g.e = c, xi = _;
    else {
      for (f = 1, d = b[0]; d >= 10; d /= 10) f++;
      g.e = f + c * m - 1, L(g, l ? s + g.e + 1 : s, a, _);
    }
    return g;
  };
}();
function L(e, t, n, r) {
  var i, s, a, l, u, o, c, f, d, m = e.constructor;
  e: if (t != null) {
    if (f = e.d, !f) return e;
    for (i = 1, l = f[0]; l >= 10; l /= 10) i++;
    if (s = t - i, s < 0)
      s += I, a = t, c = f[d = 0], u = c / X(10, i - a - 1) % 10 | 0;
    else if (d = Math.ceil((s + 1) / I), l = f.length, d >= l)
      if (r) {
        for (; l++ <= d; ) f.push(0);
        c = u = 0, i = 1, s %= I, a = s - I + 1;
      } else
        break e;
    else {
      for (c = l = f[d], i = 1; l >= 10; l /= 10) i++;
      s %= I, a = s - I + i, u = a < 0 ? 0 : c / X(10, i - a - 1) % 10 | 0;
    }
    if (r = r || t < 0 || f[d + 1] !== void 0 || (a < 0 ? c : c % X(10, i - a - 1)), o = n < 4 ? (u || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (s > 0 ? a > 0 ? c / X(10, i - a) : 0 : f[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !f[0])
      return f.length = 0, o ? (t -= e.e + 1, f[0] = X(10, (I - t % I) % I), e.e = -t || 0) : f[0] = e.e = 0, e;
    if (s == 0 ? (f.length = d, l = 1, d--) : (f.length = d + 1, l = X(10, I - s), f[d] = a > 0 ? (c / X(10, i - a) % X(10, a) | 0) * l : 0), o)
      for (; ; )
        if (d == 0) {
          for (s = 1, a = f[0]; a >= 10; a /= 10) s++;
          for (a = f[0] += l, l = 1; a >= 10; a /= 10) l++;
          s != l && (e.e++, f[0] == ue && (f[0] = 1));
          break;
        } else {
          if (f[d] += l, f[d] != ue) break;
          f[d--] = 0, l = 1;
        }
    for (s = f.length; f[--s] === 0; ) f.pop();
  }
  return H && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function ge(e, t, n) {
  if (!e.isFinite()) return Bi(e);
  var r, i = e.e, s = Y(e.d), a = s.length;
  return t ? (n && (r = n - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + Ce(r) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + Ce(-i - 1) + s, n && (r = n - a) > 0 && (s += Ce(r))) : i >= a ? (s += Ce(i + 1 - a), n && (r = n - i - 1) > 0 && (s = s + "." + Ce(r))) : ((r = i + 1) < a && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - a) > 0 && (i + 1 === a && (s += "."), s += Ce(r))), s;
}
function $t(e, t) {
  var n = e[0];
  for (t *= I; n >= 10; n /= 10) t++;
  return t;
}
function At(e, t, n) {
  if (t > Ho)
    throw H = !0, n && (e.precision = n), Error(Ci);
  return L(new e(Nt), t, 1, !0);
}
function he(e, t, n) {
  if (t > bn) throw Error(Ci);
  return L(new e(Pt), t, n, !0);
}
function Pi(e) {
  var t = e.length - 1, n = t * I + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function Ce(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Ai(e, t, n, r) {
  var i, s = new e(1), a = Math.ceil(r / I + 4);
  for (H = !1; ; ) {
    if (n % 2 && (s = s.times(t), gr(s.d, a) && (i = !0)), n = J(n / 2), n === 0) {
      n = s.d.length - 1, i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    t = t.times(t), gr(t.d, a);
  }
  return H = !0, s;
}
function hr(e) {
  return e.d[e.d.length - 1] & 1;
}
function Li(e, t, n) {
  for (var r, i, s = new e(t[0]), a = 0; ++a < t.length; ) {
    if (i = new e(t[a]), !i.s) {
      s = i;
      break;
    }
    r = s.cmp(i), (r === n || r === 0 && s.s === n) && (s = i);
  }
  return s;
}
function yn(e, t) {
  var n, r, i, s, a, l, u, o = 0, c = 0, f = 0, d = e.constructor, m = d.rounding, _ = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? (H = !1, u = _) : u = t, l = new d(0.03125); e.e > -2; )
    e = e.times(l), f += 5;
  for (r = Math.log(X(2, f)) / Math.LN10 * 2 + 5 | 0, u += r, n = s = a = new d(1), d.precision = u; ; ) {
    if (s = L(s.times(e), u, 1), n = n.times(++c), l = a.plus($(s, n, u, 1)), Y(l.d).slice(0, u) === Y(a.d).slice(0, u)) {
      for (i = f; i--; ) a = L(a.times(a), u, 1);
      if (t == null)
        if (o < 3 && at(a.d, u - r, m, o))
          d.precision = u += 10, n = s = l = new d(1), c = 0, o++;
        else
          return L(a, d.precision = _, m, H = !0);
      else
        return d.precision = _, a;
    }
    a = l;
  }
}
function Se(e, t) {
  var n, r, i, s, a, l, u, o, c, f, d, m = 1, _ = 10, v = e, x = v.d, g = v.constructor, b = g.rounding, h = g.precision;
  if (v.s < 0 || !x || !x[0] || !v.e && x[0] == 1 && x.length == 1)
    return new g(x && !x[0] ? -1 / 0 : v.s != 1 ? NaN : x ? 0 : v);
  if (t == null ? (H = !1, c = h) : c = t, g.precision = c += _, n = Y(x), r = n.charAt(0), Math.abs(s = v.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      v = v.times(e), n = Y(v.d), r = n.charAt(0), m++;
    s = v.e, r > 1 ? (v = new g("0." + n), s++) : v = new g(r + "." + n.slice(1));
  } else
    return o = At(g, c + 2, h).times(s + ""), v = Se(new g(r + "." + n.slice(1)), c - _).plus(o), g.precision = h, t == null ? L(v, h, b, H = !0) : v;
  for (f = v, u = a = v = $(v.minus(1), v.plus(1), c, 1), d = L(v.times(v), c, 1), i = 3; ; ) {
    if (a = L(a.times(d), c, 1), o = u.plus($(a, new g(i), c, 1)), Y(o.d).slice(0, c) === Y(u.d).slice(0, c))
      if (u = u.times(2), s !== 0 && (u = u.plus(At(g, c + 2, h).times(s + ""))), u = $(u, new g(m), c, 1), t == null)
        if (at(u.d, c - _, b, l))
          g.precision = c += _, o = a = v = $(f.minus(1), f.plus(1), c, 1), d = L(v.times(v), c, 1), i = l = 1;
        else
          return L(u, g.precision = h, b, H = !0);
      else
        return g.precision = h, u;
    u = o, i += 2;
  }
}
function Bi(e) {
  return String(e.s * e.s / 0);
}
function yt(e, t) {
  var n, r, i;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++) ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
  if (t = t.slice(r, i), t) {
    if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % I, n < 0 && (r += I), r < i) {
      for (r && e.d.push(+t.slice(0, r)), i -= I; r < i; ) e.d.push(+t.slice(r, r += I));
      t = t.slice(r), r = I - t.length;
    } else
      r -= i;
    for (; r--; ) t += "0";
    e.d.push(+t), H && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Do(e, t) {
  var n, r, i, s, a, l, u, o, c;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Ni.test(t)) return yt(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Oo.test(t))
    n = 16, t = t.toLowerCase();
  else if (Bo.test(t))
    n = 2;
  else if (Io.test(t))
    n = 8;
  else
    throw Error(Te + t);
  for (s = t.search(/p/i), s > 0 ? (u = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), s = t.indexOf("."), a = s >= 0, r = e.constructor, a && (t = t.replace(".", ""), l = t.length, s = l - s, i = Ai(r, new r(n), s, s * 2)), o = bt(t, n, ue), c = o.length - 1, s = c; o[s] === 0; --s) o.pop();
  return s < 0 ? new r(e.s * 0) : (e.e = $t(o, c), e.d = o, H = !1, a && (e = $(e, i, l * 4)), u && (e = e.times(Math.abs(u) < 54 ? X(2, u) : ut.pow(2, u))), H = !0, e);
}
function Mo(e, t) {
  var n, r = t.d.length;
  if (r < 3)
    return t.isZero() ? t : ze(e, 2, t, t);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / Gt(5, n)), t = ze(e, 2, t, t);
  for (var i, s = new e(5), a = new e(16), l = new e(20); n--; )
    i = t.times(t), t = t.times(s.plus(i.times(a.times(i).minus(l))));
  return t;
}
function ze(e, t, n, r, i) {
  var s, a, l, u, o = e.precision, c = Math.ceil(o / I);
  for (H = !1, u = n.times(n), l = new e(r); ; ) {
    if (a = $(l.times(u), new e(t++ * t++), o, 1), l = i ? r.plus(a) : r.minus(a), r = $(a.times(u), new e(t++ * t++), o, 1), a = l.plus(r), a.d[c] !== void 0) {
      for (s = c; a.d[s] === l.d[s] && s--; ) ;
      if (s == -1) break;
    }
    s = l, l = r, r = a, a = s;
  }
  return H = !0, a.d.length = c + 1, a;
}
function Gt(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function Oi(e, t) {
  var n, r = t.s < 0, i = he(e, e.precision, 1), s = i.times(0.5);
  if (t = t.abs(), t.lte(s))
    return we = r ? 4 : 1, t;
  if (n = t.divToInt(i), n.isZero())
    we = r ? 3 : 2;
  else {
    if (t = t.minus(n.times(i)), t.lte(s))
      return we = hr(n) ? r ? 2 : 3 : r ? 4 : 1, t;
    we = hr(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return t.minus(i).abs();
}
function $n(e, t, n, r) {
  var i, s, a, l, u, o, c, f, d, m = e.constructor, _ = n !== void 0;
  if (_ ? (te(n, 1, Le), r === void 0 ? r = m.rounding : te(r, 0, 8)) : (n = m.precision, r = m.rounding), !e.isFinite())
    c = Bi(e);
  else {
    for (c = ge(e), a = c.indexOf("."), _ ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, a >= 0 && (c = c.replace(".", ""), d = new m(1), d.e = c.length - a, d.d = bt(ge(d), 10, i), d.e = d.d.length), f = bt(c, 10, i), s = u = f.length; f[--u] == 0; ) f.pop();
    if (!f[0])
      c = _ ? "0p+0" : "0";
    else {
      if (a < 0 ? s-- : (e = new m(e), e.d = f, e.e = s, e = $(e, d, n, r, 0, i), f = e.d, s = e.e, o = xi), a = f[n], l = i / 2, o = o || f[n + 1] !== void 0, o = r < 4 ? (a !== void 0 || o) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : a > l || a === l && (r === 4 || o || r === 6 && f[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), f.length = n, o)
        for (; ++f[--n] > i - 1; )
          f[n] = 0, n || (++s, f.unshift(1));
      for (u = f.length; !f[u - 1]; --u) ;
      for (a = 0, c = ""; a < u; a++) c += vn.charAt(f[a]);
      if (_) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (a = t == 16 ? 4 : 3, --u; u % a; u++) c += "0";
            for (f = bt(c, i, t), u = f.length; !f[u - 1]; --u) ;
            for (a = 1, c = "1."; a < u; a++) c += vn.charAt(f[a]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; ) c = "0" + c;
        c = "0." + c;
      } else if (++s > u) for (s -= u; s--; ) c += "0";
      else s < u && (c = c.slice(0, s) + "." + c.slice(s));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function gr(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Fo(e) {
  return new this(e).abs();
}
function Uo(e) {
  return new this(e).acos();
}
function Vo(e) {
  return new this(e).acosh();
}
function $o(e, t) {
  return new this(e).plus(t);
}
function Go(e) {
  return new this(e).asin();
}
function jo(e) {
  return new this(e).asinh();
}
function zo(e) {
  return new this(e).atan();
}
function Wo(e) {
  return new this(e).atanh();
}
function qo(e, t) {
  e = new this(e), t = new this(t);
  var n, r = this.precision, i = this.rounding, s = r + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = he(this, s, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? he(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = he(this, s, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan($(e, t, s, 1)), t = he(this, s, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan($(e, t, s, 1)), n;
}
function Xo(e) {
  return new this(e).cbrt();
}
function Zo(e) {
  return L(e = new this(e), e.e + 1, 2);
}
function Yo(e, t, n) {
  return new this(e).clamp(t, n);
}
function Ko(e) {
  if (!e || typeof e != "object") throw Error(Vt + "Object expected");
  var t, n, r, i = e.defaults === !0, s = [
    "precision",
    1,
    Le,
    "rounding",
    0,
    8,
    "toExpNeg",
    -9e15,
    0,
    "toExpPos",
    0,
    mn,
    "maxE",
    0,
    mn,
    "minE",
    -9e15,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < s.length; t += 3)
    if (n = s[t], i && (this[n] = pn[n]), (r = e[n]) !== void 0)
      if (J(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
      else throw Error(Te + n + ": " + r);
  if (n = "crypto", i && (this[n] = pn[n]), (r = e[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Si);
      else
        this[n] = !1;
    else
      throw Error(Te + n + ": " + r);
  return this;
}
function Jo(e) {
  return new this(e).cos();
}
function Qo(e) {
  return new this(e).cosh();
}
function Ii(e) {
  var t, n, r;
  function i(s) {
    var a, l, u, o = this;
    if (!(o instanceof i)) return new i(s);
    if (o.constructor = i, mr(s)) {
      o.s = s.s, H ? !s.d || s.e > i.maxE ? (o.e = NaN, o.d = null) : s.e < i.minE ? (o.e = 0, o.d = [0]) : (o.e = s.e, o.d = s.d.slice()) : (o.e = s.e, o.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (u = typeof s, u === "number") {
      if (s === 0) {
        o.s = 1 / s < 0 ? -1 : 1, o.e = 0, o.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, o.s = -1) : o.s = 1, s === ~~s && s < 1e7) {
        for (a = 0, l = s; l >= 10; l /= 10) a++;
        H ? a > i.maxE ? (o.e = NaN, o.d = null) : a < i.minE ? (o.e = 0, o.d = [0]) : (o.e = a, o.d = [s]) : (o.e = a, o.d = [s]);
        return;
      }
      if (s * 0 !== 0) {
        s || (o.s = NaN), o.e = NaN, o.d = null;
        return;
      }
      return yt(o, s.toString());
    }
    if (u === "string")
      return (l = s.charCodeAt(0)) === 45 ? (s = s.slice(1), o.s = -1) : (l === 43 && (s = s.slice(1)), o.s = 1), Ni.test(s) ? yt(o, s) : Do(o, s);
    if (u === "bigint")
      return s < 0 ? (s = -s, o.s = -1) : o.s = 1, yt(o, s.toString());
    throw Error(Te + s);
  }
  if (i.prototype = y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Ko, i.clone = Ii, i.isDecimal = mr, i.abs = Fo, i.acos = Uo, i.acosh = Vo, i.add = $o, i.asin = Go, i.asinh = jo, i.atan = zo, i.atanh = Wo, i.atan2 = qo, i.cbrt = Xo, i.ceil = Zo, i.clamp = Yo, i.cos = Jo, i.cosh = Qo, i.div = el, i.exp = tl, i.floor = nl, i.hypot = rl, i.ln = il, i.log = sl, i.log10 = ol, i.log2 = al, i.max = ll, i.min = ul, i.mod = cl, i.mul = fl, i.pow = dl, i.random = hl, i.round = gl, i.sign = ml, i.sin = vl, i.sinh = pl, i.sqrt = bl, i.sub = yl, i.sum = El, i.tan = wl, i.tanh = _l, i.trunc = xl, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < r.length; ) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
  return i.config(e), i;
}
function el(e, t) {
  return new this(e).div(t);
}
function tl(e) {
  return new this(e).exp();
}
function nl(e) {
  return L(e = new this(e), e.e + 1, 3);
}
function rl() {
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
function mr(e) {
  return e instanceof ut || e && e.toStringTag === Ti || !1;
}
function il(e) {
  return new this(e).ln();
}
function sl(e, t) {
  return new this(e).log(t);
}
function al(e) {
  return new this(e).log(2);
}
function ol(e) {
  return new this(e).log(10);
}
function ll() {
  return Li(this, arguments, -1);
}
function ul() {
  return Li(this, arguments, 1);
}
function cl(e, t) {
  return new this(e).mod(t);
}
function fl(e, t) {
  return new this(e).mul(t);
}
function dl(e, t) {
  return new this(e).pow(t);
}
function hl(e) {
  var t, n, r, i, s = 0, a = new this(1), l = [];
  if (e === void 0 ? e = this.precision : te(e, 1, Le), r = Math.ceil(e / I), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; )
        i = t[s], i >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : l[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(r *= 4); s < r; )
        i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((t[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (l.push(i % 1e7), s += 4);
      s = r / 4;
    } else
      throw Error(Si);
  else for (; s < r; ) l[s++] = Math.random() * 1e7 | 0;
  for (r = l[--s], e %= I, r && e && (i = X(10, I - e), l[s] = (r / i | 0) * i); l[s] === 0; s--) l.pop();
  if (s < 0)
    n = 0, l = [0];
  else {
    for (n = -1; l[0] === 0; n -= I) l.shift();
    for (r = 1, i = l[0]; i >= 10; i /= 10) r++;
    r < I && (n -= I - r);
  }
  return a.e = n, a.d = l, a;
}
function gl(e) {
  return L(e = new this(e), e.e + 1, this.rounding);
}
function ml(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function vl(e) {
  return new this(e).sin();
}
function pl(e) {
  return new this(e).sinh();
}
function bl(e) {
  return new this(e).sqrt();
}
function yl(e, t) {
  return new this(e).sub(t);
}
function El() {
  var e = 0, t = arguments, n = new this(t[e]);
  for (H = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return H = !0, L(n, this.precision, this.rounding);
}
function wl(e) {
  return new this(e).tan();
}
function _l(e) {
  return new this(e).tanh();
}
function xl(e) {
  return L(e = new this(e), e.e + 1, 1);
}
y[Symbol.for("nodejs.util.inspect.custom")] = y.toString;
y[Symbol.toStringTag] = "Decimal";
var ut = y.constructor = Ii(pn);
Nt = new ut(Nt);
Pt = new ut(Pt);
var Cl = Object.defineProperty, Sl = Object.defineProperties, Tl = Object.getOwnPropertyDescriptors, Lt = Object.getOwnPropertySymbols, Ri = Object.prototype.hasOwnProperty, Hi = Object.prototype.propertyIsEnumerable, vr = (e, t, n) => t in e ? Cl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ve = (e, t) => {
  for (var n in t || (t = {}))
    Ri.call(t, n) && vr(e, n, t[n]);
  if (Lt)
    for (var n of Lt(t))
      Hi.call(t, n) && vr(e, n, t[n]);
  return e;
}, Nl = (e, t) => Sl(e, Tl(t)), ki = (e, t) => {
  var n = {};
  for (var r in e)
    Ri.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Lt)
    for (var r of Lt(e))
      t.indexOf(r) < 0 && Hi.call(e, r) && (n[r] = e[r]);
  return n;
}, pr;
function Pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(e, i, s.get ? s : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function jt(e) {
  return !!(e && typeof e.then == "function");
}
function Et(e, t) {
  return jt(e) ? Promise.resolve(e).then(t) : t(e);
}
function Jt(e, t, n) {
  function r(i) {
    const s = t(i);
    throw e.emit(s), console.error(s), s;
  }
  try {
    const i = n();
    return jt(i) ? i.catch(r) : i;
  } catch (i) {
    r(i);
  }
}
function br(e) {
  const t = (Array.isArray(e) ? e : [e]).map((s) => `'${s}'`), n = t.slice(-2).join(" or ");
  return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function Al(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function Di(e) {
  if (typeof e == "string")
    return [e];
  if (Array.isArray(e))
    return e;
}
function le(e) {
  return Di(e) || [];
}
function Ll(e, t) {
  return Al(t) ? le(t == null ? void 0 : t[e]) : le(t);
}
function En(e) {
  return Array.from(new Set(e));
}
function Mi(e) {
  return e && e.replace(/\/+$/, "");
}
function Bl(e) {
  if (typeof e == "string")
    return e;
  if (typeof (e == null ? void 0 : e.message) == "string")
    return e.message;
}
const Ol = (e, t) => fetch(e, t);
function Il(e) {
  return Object.fromEntries(new Headers(e).entries());
}
const Fi = (e = Ol) => (t, n) => {
  let r = Il(n == null ? void 0 : n.headers);
  return r["x-api-key"] && (r = Object.assign({ "x-tolgee-sdk-type": "JS", "x-tolgee-sdk-version": "prerelease" }, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
};
function be(e) {
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
function Rl(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  function s(u) {
    const o = new Set(t());
    i.forEach((c) => {
      (u === void 0 || (u == null ? void 0 : u.findIndex((d) => o.has(d) || c.namespaces.has(d))) !== -1) && c.fn({ value: void 0 });
    });
  }
  let a = [];
  function l() {
    if (a.length === 0)
      return;
    const u = a;
    a = [], r.forEach((f) => {
      f({ value: void 0 });
    });
    let o = /* @__PURE__ */ new Set();
    u.forEach((f) => {
      f === void 0 ? o = void 0 : o !== void 0 && f.forEach((d) => o.add(d));
    });
    const c = o ? Array.from(o.keys()) : void 0;
    s(c);
  }
  return Object.freeze({
    emit(u, o) {
      e() && (a.push(u), o ? setTimeout(l, 0) : l());
    },
    listen(u) {
      return r.add(u), {
        unsubscribe: () => {
          r.delete(u);
        }
      };
    },
    listenSome(u) {
      const o = {
        fn: (f) => {
          u(f);
        },
        namespaces: /* @__PURE__ */ new Set()
      };
      i.add(o);
      const c = {
        unsubscribe: () => {
          i.delete(o);
        },
        subscribeNs: (f) => (le(f).forEach((d) => o.namespaces.add(d)), f === void 0 && o.namespaces.add(n()), c)
      };
      return c;
    }
  });
}
function Hl(e, t) {
  let n = !0;
  function r() {
    return n;
  }
  const i = Object.freeze({
    onPendingLanguageChange: be(r),
    onLanguageChange: be(r),
    onLoadingChange: be(r),
    onFetchingChange: be(r),
    onInitialLoaded: be(r),
    onRunningChange: be(r),
    onCacheChange: be(r),
    onUpdate: Rl(r, e, t),
    onPermanentChange: be(r),
    onError: be(r),
    setEmitterActive(s) {
      n = s;
    },
    on: (s, a) => {
      switch (s) {
        case "pendingLanguage":
          return i.onPendingLanguageChange.listen(a);
        case "language":
          return i.onLanguageChange.listen(a);
        case "loading":
          return i.onLoadingChange.listen(a);
        case "fetching":
          return i.onFetchingChange.listen(a);
        case "initialLoad":
          return i.onInitialLoaded.listen(a);
        case "running":
          return i.onRunningChange.listen(a);
        case "cache":
          return i.onCacheChange.listen(a);
        case "update":
          return i.onUpdate.listen(a);
        case "permanentChange":
          return i.onPermanentChange.listen(a);
        case "error":
          return i.onError.listen(a);
      }
    }
  });
  return i.onInitialLoaded.listen(() => i.onUpdate.emit()), i.onLanguageChange.listen(() => i.onUpdate.emit()), i.onCacheChange.listen(({ value: s }) => i.onUpdate.emit([s.namespace], !0)), i;
}
class yr extends Error {
  constructor(t, n, r = !1) {
    const { language: i, namespace: s } = t;
    super(`Tolgee: Failed to fetch record for "${i}"${s && ` and "${s}"`}`), this.cause = n, this.isDev = r, this.name = "RecordFetchError", this.language = i, this.namespace = s;
  }
}
class kl extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageDetectorError";
  }
}
class Er extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageStorageError";
  }
}
const Ui = (e) => {
  const t = /* @__PURE__ */ new Map();
  return Object.entries(e).forEach(([n, r]) => {
    if (r != null) {
      if (typeof r == "object") {
        Ui(r).forEach((i, s) => {
          t.set(n + "." + s, i);
        });
        return;
      }
      t.set(n, r);
    }
  }), t;
}, Je = (e) => {
  const [t, ...n] = e.split(":"), r = n.join(":");
  return { language: t, namespace: r || "" };
}, ye = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function Dl(e, t, n, r, i, s, a) {
  const l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  let o = {}, c = 0;
  function f(v, x, g) {
    const b = ye(v);
    u.set(b, {
      data: Ui(x),
      version: g
    }), e.onCacheChange.emit(v);
  }
  async function d(v) {
    function x(h) {
      const w = new yr(v, h);
      throw e.onError.emit(w), console.error(w), w;
    }
    const g = t(v);
    if (jt(g)) {
      const h = await g.catch(x);
      if (h !== void 0)
        return h;
    }
    const b = o[ye(v)];
    if (typeof b == "function")
      try {
        return await b();
      } catch (h) {
        x(h);
      }
    else
      return b;
  }
  async function m(v, x) {
    let g;
    if (x)
      try {
        g = await n(v);
      } catch (b) {
        const h = new yr(v, b, !0);
        e.onError.emit(h), console.warn(h);
      }
    return g || (g = await d(v)), g;
  }
  const _ = Object.freeze({
    addStaticData(v) {
      v && (o = Object.assign(Object.assign({}, o), v), Object.entries(v).forEach(([x, g]) => {
        if (typeof g != "function") {
          const b = Je(x), h = u.get(x);
          (!h || h.version === 0) && f(b, g, 0);
        }
      }));
    },
    invalidate() {
      l.clear(), c += 1;
    },
    addRecord(v, x) {
      f(v, x, c);
    },
    exists(v, x = !1) {
      const g = u.get(ye(v));
      return g && x ? g.version === c : !!g;
    },
    getRecord(v) {
      var x;
      return (x = u.get(ye(r(v)))) === null || x === void 0 ? void 0 : x.data;
    },
    getTranslation(v, x) {
      var g;
      return (g = u.get(ye(v))) === null || g === void 0 ? void 0 : g.data.get(x);
    },
    getTranslationNs(v, x, g) {
      var b;
      for (const h of v)
        for (const w of x) {
          const N = (b = u.get(ye({ language: w, namespace: h }))) === null || b === void 0 ? void 0 : b.data.get(g);
          if (N != null)
            return [h];
        }
      return En(v);
    },
    getTranslationFallback(v, x, g) {
      var b;
      for (const h of v)
        for (const w of x) {
          const N = (b = u.get(ye({ language: w, namespace: h }))) === null || b === void 0 ? void 0 : b.data.get(g);
          if (N != null)
            return N;
        }
    },
    changeTranslation(v, x, g) {
      var b;
      const h = (b = u.get(ye(v))) === null || b === void 0 ? void 0 : b.data;
      h == null || h.set(x, g), e.onCacheChange.emit(Object.assign(Object.assign({}, v), { key: x }));
    },
    isFetching(v) {
      if (i())
        return !0;
      if (v === void 0)
        return l.size > 0;
      const x = le(v);
      return !!Array.from(l.keys()).find((g) => x.includes(Je(g).namespace));
    },
    isLoading(v, x) {
      const g = le(x);
      return !!(i() || Array.from(l.keys()).find((b) => {
        const h = Je(b);
        return (!g.length || g.includes(h.namespace)) && !_.exists({
          namespace: h.namespace,
          language: v
        });
      }));
    },
    async loadRecords(v, x) {
      const g = v.map((h) => {
        const w = r(h), N = ye(w), p = l.get(N);
        if (p)
          return {
            new: !1,
            promise: p,
            keyObject: w,
            cacheKey: N
          };
        const C = m(w, x) || Promise.resolve(void 0);
        return l.set(N, C), {
          new: !0,
          promise: C,
          keyObject: w,
          cacheKey: N
        };
      });
      s.notify(), a.notify();
      const b = await Promise.all(g.map((h) => h.promise));
      return g.forEach((h, w) => {
        const N = l.get(h.cacheKey) !== h.promise;
        if (h.new && !N) {
          l.delete(h.cacheKey);
          const p = b[w];
          p ? _.addRecord(h.keyObject, p) : _.getRecord(h.keyObject) || _.addRecord(h.keyObject, {});
        }
      }), s.notify(), a.notify(), g.map((h) => _.getRecord(h.keyObject));
    },
    getAllRecords() {
      return Array.from(u.entries()).map(([x, g]) => Object.assign(Object.assign({}, Je(x)), { data: g.data }));
    }
  });
  return _;
}
function Vi(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
const Ml = {
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
}, wn = "invalid", Fl = "https://app.tolgee.io", Ul = ({ key: e }) => e, Vl = {
  defaultNs: "",
  observerOptions: Ml,
  observerType: "invisible",
  onFormatError: wn,
  apiUrl: Fl,
  fetch: Fi(),
  onTranslationMissing: Ul
}, _n = (...e) => {
  let t = {};
  return e.forEach((n) => {
    t = Object.assign(Object.assign(Object.assign({}, t), n), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), n == null ? void 0 : n.observerOptions) });
  }), t;
};
function wr(e, t) {
  const n = _n(Vl, t == null ? void 0 : t.initialOptions, e);
  return n.apiUrl = Mi(n.apiUrl), e != null && e.fetch && (n.fetch = Fi(e.fetch)), {
    initialOptions: n,
    activeNamespaces: (t == null ? void 0 : t.activeNamespaces) || /* @__PURE__ */ new Map(),
    language: t == null ? void 0 : t.language,
    pendingLanguage: t == null ? void 0 : t.language,
    isInitialLoading: !1,
    isRunning: !1
  };
}
function $l(e, t, n, r, i, s, a, l) {
  const u = {
    ui: void 0
  }, o = {
    formatters: [],
    finalFormatter: void 0,
    observer: void 0,
    devBackend: void 0,
    backends: [],
    ui: void 0,
    languageDetector: void 0,
    languageStorage: void 0
  }, c = async ({ keysAndDefaults: E, target: P }) => {
    var A;
    const B = E.map(({ key: O, ns: G, defaultValue: q }) => ({
      key: O,
      defaultValue: q,
      fallbackNamespaces: r(G),
      namespace: i({ key: O, ns: G })[0],
      translation: s({
        key: O,
        ns: G
      })
    }));
    (A = o.ui) === null || A === void 0 || A.handleElementClick(B, P);
  }, f = (E, P) => {
    var A;
    return ((A = o.observer) === null || A === void 0 ? void 0 : A.findPositions(E, P)) || [];
  };
  function d(E) {
    const P = s({
      key: E.key,
      ns: E.ns
    });
    return D.formatTranslation(Object.assign(Object.assign({}, E), { translation: P, formatEnabled: !0 }));
  }
  function m() {
    return { fetch: t().fetch };
  }
  function _(E) {
    o.observer = E == null ? void 0 : E();
  }
  function v() {
    return !!o.observer;
  }
  function x(E) {
    E && o.formatters.push(E);
  }
  function g(E) {
    o.finalFormatter = E;
  }
  function b(E) {
    u.ui = E;
  }
  function h() {
    return !!u.ui;
  }
  function w(E) {
    o.languageStorage = E;
  }
  function N(E) {
    o.languageDetector = E;
  }
  function p() {
    return Jt(l.onError, (E) => new Er("Tolgee: Failed to load language", E), () => {
      var E;
      return (E = o.languageStorage) === null || E === void 0 ? void 0 : E.getLanguage(m());
    });
  }
  function C() {
    if (!o.languageDetector)
      return;
    const E = n();
    return Jt(l.onError, (P) => new kl("Tolgee: Failed to detect language", P), () => {
      var P;
      return (P = o.languageDetector) === null || P === void 0 ? void 0 : P.getLanguage(Object.assign({ availableLanguages: E }, m()));
    });
  }
  function R(E) {
    E && o.backends.push(E);
  }
  function k(E) {
    o.devBackend = E;
  }
  function M(E, P) {
    const A = Object.freeze({
      setFinalFormatter: g,
      addFormatter: x,
      setObserver: _,
      hasObserver: v,
      setUi: b,
      hasUi: h,
      setDevBackend: k,
      addBackend: R,
      setLanguageDetector: N,
      setLanguageStorage: w
    });
    P(E, A);
  }
  const D = Object.freeze({
    addPlugin: M,
    findPositions: f,
    run() {
      var E, P;
      const { apiKey: A, apiUrl: B, projectId: O, observerOptions: G, tagNewKeys: q, filterTag: fe } = t();
      o.ui = (E = u.ui) === null || E === void 0 ? void 0 : E.call(u, {
        apiKey: A,
        apiUrl: B,
        projectId: O,
        highlight: D.highlight,
        changeTranslation: a,
        findPositions: f,
        onPermanentChange: (re) => l.onPermanentChange.emit(re),
        tagNewKeys: q,
        filterTag: fe
      }), (P = o.observer) === null || P === void 0 || P.run({
        mouseHighlight: !0,
        options: G,
        translate: d,
        onClick: c
      });
    },
    stop() {
      var E;
      o.ui = void 0, (E = o.observer) === null || E === void 0 || E.stop();
    },
    getLanguageStorage() {
      return o.languageStorage;
    },
    getInitialLanguage() {
      const E = n(), P = p();
      return Et(P, (A) => (!E || E.includes(A)) && A ? A : C());
    },
    setStoredLanguage(E) {
      return Jt(l.onError, (P) => new Er("Tolgee: Failed to store language", P), () => {
        var P;
        return (P = o.languageStorage) === null || P === void 0 ? void 0 : P.setLanguage(E, m());
      });
    },
    getDevBackend() {
      return o.devBackend;
    },
    getBackendRecord: async ({ language: E, namespace: P }) => {
      for (const A of o.backends) {
        const B = await A.getRecord(Object.assign({
          language: E,
          namespace: P
        }, m()));
        if (B !== void 0)
          return B;
      }
    },
    getBackendDevRecord: async ({ language: E, namespace: P }) => {
      var A;
      const { apiKey: B, apiUrl: O, projectId: G, filterTag: q } = t();
      return (A = o.devBackend) === null || A === void 0 ? void 0 : A.getRecord(Object.assign({
        apiKey: B,
        apiUrl: O,
        projectId: G,
        language: E,
        namespace: P,
        filterTag: q
      }, m()));
    },
    getLanguageDetector() {
      return o.languageDetector;
    },
    retranslate() {
      var E;
      (E = o.observer) === null || E === void 0 || E.retranslate();
    },
    highlight: (E, P) => {
      var A, B;
      return ((B = (A = o.observer) === null || A === void 0 ? void 0 : A.highlight) === null || B === void 0 ? void 0 : B.call(A, E, P)) || { unhighlight() {
      } };
    },
    unwrap(E) {
      var P;
      return o.observer ? (P = o.observer) === null || P === void 0 ? void 0 : P.unwrap(E) : { text: E, keys: [] };
    },
    wrap(E) {
      var P;
      return o.observer ? (P = o.observer) === null || P === void 0 ? void 0 : P.wrap(E) : E.translation;
    },
    hasDevBackend() {
      return !!D.getDevBackend();
    },
    formatTranslation(E) {
      var P, { formatEnabled: A } = E, B = Vi(E, ["formatEnabled"]);
      const { key: O, translation: G, defaultValue: q, noWrap: fe, params: re, ns: ve, orEmpty: pe } = B, Be = G ?? q;
      let Ye = "";
      G == null && (Ye = t().onTranslationMissing(B));
      let ee = Be ?? (pe ? "" : Ye);
      const Fe = e(), ct = A || !(!((P = o.observer) === null || P === void 0) && P.outputNotFormattable), jn = (Oe) => o.observer && !fe ? o.observer.wrap({
        key: O,
        translation: Oe,
        defaultValue: q,
        params: re,
        ns: ve
      }) : Oe;
      ee = jn(ee);
      try {
        if (Be && Fe && ct)
          for (const Oe of o.formatters)
            ee = Oe.format({
              translation: ee,
              language: Fe,
              params: re
            });
        o.finalFormatter && Be && Fe && ct && (ee = o.finalFormatter.format({
          translation: ee,
          language: Fe,
          params: re
        }));
      } catch (Oe) {
        console.error(Oe);
        const cs = Bl(Oe) || wn, qt = t().onFormatError, zn = typeof qt;
        zn === "string" ? ee = qt : zn === "function" ? ee = qt(cs, B) : ee = wn, ee = jn(ee);
      }
      return ee;
    }
  });
  return D;
}
const _r = (e, t, n) => {
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
function Gl(e, t, n) {
  let r = wr(), i;
  const s = Object.freeze({
    init(a) {
      r = wr(a, r);
    },
    isRunning() {
      return r.isRunning;
    },
    setRunning(a) {
      r.isRunning !== a && (r.isRunning = a, n.emit(a));
    },
    isInitialLoading() {
      return r.isInitialLoading;
    },
    setInitialLoading(a) {
      r.isInitialLoading = a;
    },
    getLanguage() {
      return r.language || r.initialOptions.language;
    },
    setLanguage(a) {
      r.language !== a && (r.language = a, e.emit(a));
    },
    getPendingLanguage() {
      return r.pendingLanguage || s.getLanguage();
    },
    setPendingLanguage(a) {
      r.pendingLanguage !== a && (r.pendingLanguage = a, t.emit(a));
    },
    getInitialOptions() {
      return Object.assign(Object.assign({}, r.initialOptions), i);
    },
    addActiveNs(a) {
      le(a).forEach((u) => {
        const o = r.activeNamespaces.get(u);
        o !== void 0 ? r.activeNamespaces.set(u, o + 1) : r.activeNamespaces.set(u, 1);
      });
    },
    removeActiveNs(a) {
      le(a).forEach((u) => {
        const o = r.activeNamespaces.get(u);
        o !== void 0 && o > 1 ? r.activeNamespaces.set(u, o - 1) : r.activeNamespaces.delete(u);
      });
    },
    getRequiredNamespaces() {
      return En([
        ...r.initialOptions.ns || [r.initialOptions.defaultNs],
        ...le(r.initialOptions.fallbackNs),
        ...r.activeNamespaces.keys()
      ]);
    },
    getFallbackLangs(a) {
      const l = a || s.getLanguage();
      return l ? En([
        l,
        ...Ll(l, r.initialOptions.fallbackLanguage)
      ]) : [];
    },
    getFallbackNs() {
      return le(r.initialOptions.fallbackNs);
    },
    getDefaultNs(a) {
      return a === void 0 ? r.initialOptions.defaultNs : a;
    },
    getAvailableLanguages() {
      if (r.initialOptions.availableLanguages)
        return r.initialOptions.availableLanguages;
      if (r.initialOptions.staticData) {
        const a = Object.keys(r.initialOptions.staticData).map((l) => Je(l).language);
        return Array.from(new Set(a));
      }
    },
    withDefaultNs(a) {
      return {
        namespace: a.namespace === void 0 ? s.getInitialOptions().defaultNs : a.namespace,
        language: a.language
      };
    },
    overrideCredentials(a) {
      a ? i = Object.assign(Object.assign({}, a), { apiUrl: Mi(a.apiUrl) }) : i = void 0;
    }
  });
  return s;
}
function jl(e) {
  var { ns: t, noWrap: n, orEmpty: r, params: i, language: s } = e, a = Vi(e, ["ns", "noWrap", "orEmpty", "params", "language"]);
  return Object.assign(Object.assign({}, {
    ns: t,
    noWrap: n,
    orEmpty: r,
    language: s
  }), { params: Object.assign({}, a) });
}
const xn = (e, ...t) => {
  let n = {}, r;
  return typeof e == "object" ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, jl(r)), n)), n;
};
function zl({ options: e }) {
  const t = Hl(u, o), n = _r(!1, () => a.isFetching(), t.onFetchingChange.emit), r = _r(!1, () => N.isLoading(), t.onLoadingChange.emit), i = Gl(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), s = $l(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, c, x, g, d, t), a = Dl(t, s.getBackendRecord, s.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
  e && m(e);
  let l;
  t.onUpdate.listen(() => {
    i.isRunning() && s.retranslate();
  });
  function u() {
    return i.getFallbackNs();
  }
  function o(p) {
    return i.getDefaultNs(p);
  }
  function c(p) {
    return [...le(o(p)), ...u()];
  }
  function f(p) {
    return [
      ...le(p ?? o()),
      ...i.getRequiredNamespaces()
    ];
  }
  function d(p, C, R) {
    const k = i.withDefaultNs(p), M = a.getTranslation(k, C);
    return a.changeTranslation(k, C, R), {
      revert() {
        a.changeTranslation(k, C, M);
      }
    };
  }
  function m(p) {
    i.init(p), a.addStaticData(i.getInitialOptions().staticData);
  }
  function _(p, C) {
    const R = i.getFallbackLangs(p), k = f(C), M = [];
    return R.forEach((D) => {
      k.forEach((E) => {
        a.exists({ language: D, namespace: E }, !0) || M.push({ language: D, namespace: E });
      });
    }), M;
  }
  function v(p, C) {
    const R = _(p, C);
    if (R.length)
      return Et(N.loadRecords(R), () => {
      });
  }
  function x({ key: p, ns: C }) {
    const R = i.getFallbackLangs(), k = c(C ?? void 0);
    return a.getTranslationNs(k, R, p);
  }
  function g({ key: p, ns: C, language: R }) {
    const k = c(C ?? void 0), M = i.getFallbackLangs(R);
    return a.getTranslationFallback(k, M, p);
  }
  function b() {
    const p = Et(h(), () => v());
    if (jt(p))
      return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(p).then(() => {
        i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
      });
    t.onInitialLoaded.emit();
  }
  function h() {
    if (i.getLanguage())
      return;
    const C = s.getInitialLanguage();
    return Et(C, (R) => {
      const k = R || i.getInitialOptions().defaultLanguage;
      k && i.setLanguage(k);
    });
  }
  function w() {
    if ((s.getLanguageDetector() || s.getLanguageStorage()) && !i.getAvailableLanguages())
      throw new Error(br("availableLanguages"));
    if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage)
      throw new Error(br(["defaultLanguage", "language"]));
  }
  const N = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), s), a), {
    init: m,
    getTranslation: g,
    changeTranslation: d,
    getTranslationNs: x,
    getDefaultAndFallbackNs: c,
    findPositions: s.findPositions,
    getRequiredRecords: _,
    async changeLanguage(p) {
      i.getPendingLanguage() === p && i.getLanguage() === p || (i.setPendingLanguage(p), i.isRunning() && await v(p), p === i.getPendingLanguage() && (i.setLanguage(p), await s.setStoredLanguage(p)));
    },
    async addActiveNs(p, C) {
      C || i.addActiveNs(p), i.isRunning() && await v(void 0, p);
    },
    loadRecords(p) {
      return a.loadRecords(p, N.isDev());
    },
    async loadRecord(p) {
      return (await N.loadRecords([p]))[0];
    },
    isLoading(p) {
      return a.isLoading(i.getLanguage(), p);
    },
    isLoaded(p) {
      const C = i.getLanguage();
      if (!C)
        return !1;
      const R = i.getFallbackLangs(C), k = f(p), M = [];
      return R.forEach((D) => {
        k.forEach((E) => {
          a.exists({ language: D, namespace: E }) || M.push({ language: D, namespace: E });
        });
      }), M.length === 0;
    },
    t: (...p) => {
      const C = xn(...p), R = g(C);
      return s.formatTranslation(Object.assign(Object.assign({}, C), { translation: R }));
    },
    isDev() {
      return !!(i.getInitialOptions().apiKey && i.getInitialOptions().apiUrl);
    },
    run() {
      return w(), i.isRunning() || (i.setRunning(!0), s.run(), l = b()), Promise.resolve(l);
    },
    stop() {
      i.isRunning() && (s.stop(), i.setRunning(!1));
    }
  }));
  return N;
}
function Wl(e) {
  const t = zl({
    options: e
  });
  t.isDev() && t.invalidate();
  function n(i) {
    const s = t.isRunning();
    s && t.stop(), i(), t.isDev() && t.invalidate(), s && t.run();
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
const ql = () => {
  const e = {
    plugins: [],
    options: {}
  }, t = Object.freeze({
    use(n) {
      return e.plugins.push(n), t;
    },
    updateDefaults(n) {
      return e.options = _n(e.options, n), t;
    },
    init(n) {
      const r = Wl(_n(e.options, n));
      return e.plugins.forEach(r.addPlugin), r;
    }
  });
  return t;
}, $i = 0, Cn = 1, Xl = 2;
let Zl = class extends Error {
  constructor(t, n, r) {
    let i, s = "";
    t === $i ? i = "Empty parameter" : t === Cn ? (i = "Unexpected character", s = "Did you forget to use FormatIcu to render ICU message syntax?") : i = "Unexpected end", super(`Tolgee parser: ${i} at ${n} in "${r}"` + (s ? `
` + s : "")), this.code = t, this.index = n;
  }
};
function xr(e) {
  return /\s/.test(e);
}
const xe = 0, Sn = 1, wt = 2, Qt = 3, en = 4, Yl = /* @__PURE__ */ new Set([
  wt,
  Sn,
  xe
]), Tn = "'", Kl = /* @__PURE__ */ new Set(["{", "}", Tn]), Jl = (e) => /[0-9a-zA-Z_]/.test(e);
function Ql(e) {
  let t = xe, n = "", r = "", i = "";
  const s = [], a = [];
  let l = 0;
  function u(d) {
    throw new Zl(d, l, e);
  }
  const o = () => {
    s.push(n), n = "";
  }, c = () => {
    Jl(i) || u(Cn), r += i;
  }, f = () => {
    r === "" && u($i), a.push(r), r = "";
  };
  for (l = 0; l < e.length; l++)
    switch (i = e[l], t) {
      case xe:
        i === Tn ? (n += i, t = Sn) : i === "{" ? (o(), t = Qt) : (n += i, t = xe);
        break;
      case Sn:
        Kl.has(i) ? (n = n.slice(0, -1) + i, t = wt) : (n += i, t = xe);
        break;
      case wt:
        i === Tn ? t = xe : (n += i, t = wt);
        break;
      case Qt:
        i === "}" ? (f(), t = xe) : xr(i) ? r !== "" && (f(), t = en) : (c(), t = Qt);
        break;
      case en:
        i == "}" ? t = xe : xr(i) ? t = en : u(Cn);
    }
  return Yl.has(t) || u(Xl), o(), [s, a];
}
function eu(e, t) {
  const [n, r] = Ql(e), i = [n[0]];
  for (let s = 1; s < n.length; s++) {
    const a = t == null ? void 0 : t[r[s - 1]];
    if (a === void 0)
      throw new Error(`Missing parameter "${r[s - 1]}" in "${e}"`);
    i.push(String(a)), i.push(n[s]);
  }
  return i.join("");
}
function tu() {
  return {
    format: ({ translation: e, params: t }) => eu(e, t)
  };
}
const nu = () => (e, t) => (t.setFinalFormatter(tu()), e);
var tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Cr = {};
(function(e) {
  function t(g, b) {
    var h;
    return g instanceof Buffer ? h = g : h = Buffer.from(g.buffer, g.byteOffset, g.byteLength), h.toString(b);
  }
  var n = function(g) {
    return Buffer.from(g);
  };
  function r(g) {
    for (var b = 0, h = Math.min(256 * 256, g.length + 1), w = new Uint16Array(h), N = [], p = 0; ; ) {
      var C = b < g.length;
      if (!C || p >= h - 1) {
        var R = w.subarray(0, p), k = R;
        if (N.push(String.fromCharCode.apply(null, k)), !C)
          return N.join("");
        g = g.subarray(b), b = 0, p = 0;
      }
      var M = g[b++];
      if ((M & 128) === 0)
        w[p++] = M;
      else if ((M & 224) === 192) {
        var D = g[b++] & 63;
        w[p++] = (M & 31) << 6 | D;
      } else if ((M & 240) === 224) {
        var D = g[b++] & 63, E = g[b++] & 63;
        w[p++] = (M & 31) << 12 | D << 6 | E;
      } else if ((M & 248) === 240) {
        var D = g[b++] & 63, E = g[b++] & 63, P = g[b++] & 63, A = (M & 7) << 18 | D << 12 | E << 6 | P;
        A > 65535 && (A -= 65536, w[p++] = A >>> 10 & 1023 | 55296, A = 56320 | A & 1023), w[p++] = A;
      }
    }
  }
  function i(g) {
    for (var b = 0, h = g.length, w = 0, N = Math.max(32, h + (h >>> 1) + 7), p = new Uint8Array(N >>> 3 << 3); b < h; ) {
      var C = g.charCodeAt(b++);
      if (C >= 55296 && C <= 56319) {
        if (b < h) {
          var R = g.charCodeAt(b);
          (R & 64512) === 56320 && (++b, C = ((C & 1023) << 10) + (R & 1023) + 65536);
        }
        if (C >= 55296 && C <= 56319)
          continue;
      }
      if (w + 4 > p.length) {
        N += 8, N *= 1 + b / g.length * 2, N = N >>> 3 << 3;
        var k = new Uint8Array(N);
        k.set(p), p = k;
      }
      if ((C & 4294967168) === 0) {
        p[w++] = C;
        continue;
      } else if ((C & 4294965248) === 0)
        p[w++] = C >>> 6 & 31 | 192;
      else if ((C & 4294901760) === 0)
        p[w++] = C >>> 12 & 15 | 224, p[w++] = C >>> 6 & 63 | 128;
      else if ((C & 4292870144) === 0)
        p[w++] = C >>> 18 & 7 | 240, p[w++] = C >>> 12 & 63 | 128, p[w++] = C >>> 6 & 63 | 128;
      else
        continue;
      p[w++] = C & 63 | 128;
    }
    return p.slice ? p.slice(0, w) : p.subarray(0, w);
  }
  var s = "Failed to ", a = function(g, b, h) {
    if (g)
      throw new Error("".concat(s).concat(b, ": the '").concat(h, "' option is unsupported."));
  }, l = typeof Buffer == "function" && Buffer.from, u = l ? n : i;
  function o() {
    this.encoding = "utf-8";
  }
  o.prototype.encode = function(g, b) {
    return a(b && b.stream, "encode", "stream"), u(g);
  };
  function c(g) {
    var b;
    try {
      var h = new Blob([g], { type: "text/plain;charset=UTF-8" });
      b = URL.createObjectURL(h);
      var w = new XMLHttpRequest();
      return w.open("GET", b, !1), w.send(), w.responseText;
    } finally {
      b && URL.revokeObjectURL(b);
    }
  }
  var f = !l && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", d = ["utf-8", "utf8", "unicode-1-1-utf-8"], m = r;
  l ? m = t : f && (m = function(g) {
    try {
      return c(g);
    } catch {
      return r(g);
    }
  });
  var _ = "construct 'TextDecoder'", v = "".concat(s, " ").concat(_, ": the ");
  function x(g, b) {
    a(b && b.fatal, _, "fatal"), g = g || "utf-8";
    var h;
    if (l ? h = Buffer.isEncoding(g) : h = d.indexOf(g.toLowerCase()) !== -1, !h)
      throw new RangeError("".concat(v, " encoding label provided ('").concat(g, "') is invalid."));
    this.encoding = g, this.fatal = !1, this.ignoreBOM = !1;
  }
  x.prototype.decode = function(g, b) {
    a(b && b.stream, "decode", "stream");
    var h;
    return g instanceof Uint8Array ? h = g : g.buffer instanceof ArrayBuffer ? h = new Uint8Array(g.buffer) : h = new Uint8Array(g), m(h, this.encoding);
  }, e.TextEncoder = e.TextEncoder || o, e.TextDecoder = e.TextDecoder || x;
})(typeof window < "u" ? window : tn);
const ru = /* @__PURE__ */ Pl({
  __proto__: null,
  default: Cr
}, [Cr]);
(pr = console.assert) == null || pr.call(console, ru);
function iu(e, t) {
  const n = (r) => {
    var i, s;
    e.includes((i = r.data) == null ? void 0 : i.type) && t((s = r.data) == null ? void 0 : s.data);
  };
  return window.addEventListener("message", n, !1), {
    unsubscribe() {
      window.removeEventListener("message", n);
    }
  };
}
function su({
  message: e,
  recievingMessage: t,
  data: n,
  attempts: r = 1,
  timeout: i = 300
}) {
  let s = !1;
  const a = () => new Promise((u, o) => {
    const c = iu(t, d);
    window.postMessage({ type: e, data: n }, window.origin);
    const f = setTimeout(_, i);
    function d(v) {
      clearTimeout(f), m(), u(v);
    }
    function m() {
      c.unsubscribe();
    }
    function _() {
      m(), o();
    }
  });
  return {
    cancel() {
      s = !0;
    },
    promise: (async () => {
      for (let u = 0; u < r; u++) {
        if (s)
          return new Promise(() => {
          });
        try {
          return await a();
        } catch {
          continue;
        }
      }
      if (!s)
        throw `Didn't recieve ${t.join(" or ")} in time.`;
      return new Promise(() => {
      });
    })()
  };
}
function au() {
  let e;
  async function t(n) {
    e == null || e();
    const { cancel: r, promise: i } = su({
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
const ou = "tolgee-in-context-tools.umd.min.js", lu = "@tolgee/in-context-tools", uu = "InContextTools", cu = "https://cdn.jsdelivr.net/npm";
function fu(e) {
  return new Promise((t, n) => {
    const r = document.createElement("script");
    r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (i) => n(i.error)), document.head.appendChild(r);
  });
}
let nn = null;
function du(e) {
  return nn || (nn = fu(
    `${cu}/@tolgee/web@${e}/dist/${ou}`
  ).then(() => window[lu][uu])), nn;
}
const Gi = "__tolgee_apiKey", ji = "__tolgee_apiUrl";
function Sr() {
  const e = sessionStorage.getItem(Gi) || void 0, t = sessionStorage.getItem(ji) || void 0;
  if (!(!e || !t))
    return {
      apiKey: e,
      apiUrl: t
    };
}
function hu() {
  sessionStorage.removeItem(Gi), sessionStorage.removeItem(ji);
}
function gu(e) {
  document.readyState !== "loading" ? Promise.resolve().then(() => {
    e();
  }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
}
let zi = () => (e) => e;
const mu = () => {
  if (typeof window > "u")
    return !1;
  try {
    return typeof sessionStorage < "u" && sessionStorage;
  } catch (e) {
    return console.error("sessionStorage not available", e), !1;
  }
};
mu() && (zi = () => (e) => {
  const t = au(), n = () => ({
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
    const s = await du(
      "prerelease"
    );
    return (a) => {
      const l = Sr();
      return a.addPlugin(s({ credentials: l })), a;
    };
  };
  return e.on("running", ({ value: s }) => {
    s && gu(() => {
      t.update(n()).catch(hu);
    });
  }), Sr() && r().then((s) => {
    e.addPlugin(s);
  }).catch((s) => {
    console.error("Tolgee: Failed to load in-context tools"), console.error(s);
  }), e;
});
const vu = (e, t, n, r) => {
  var i = r, { signal: s } = i, a = ki(i, ["signal"]);
  const l = new AbortController();
  return new Promise((u, o) => {
    const c = e(t, Ve({ signal: l.signal }, a));
    let f = !1;
    function d(v) {
      !f && u(v), f = !0;
    }
    function m(v) {
      !f && o(v), f = !0;
    }
    function _() {
      const v = new Error(`TIMEOUT: ${t}`);
      l.abort(v), m(v);
    }
    if (s && s.addEventListener("abort", _), n !== void 0) {
      const v = setTimeout(_, n);
      c.finally(() => clearTimeout(v));
    }
    c.catch(m).then(d);
  });
};
function Tr(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const pu = ({ namespace: e, language: t, prefix: n }) => e ? `${Tr(n)}/${e}/${t}.json` : `${Tr(n)}/${t}.json`;
function bu(e) {
  return e.json();
}
const Nr = {
  prefix: "/i18n",
  getPath: pu,
  getData: bu,
  headers: {
    Accept: "application/json"
  },
  timeout: void 0,
  fallbackOnFail: !1
};
function yu(e) {
  const t = Nl(Ve(Ve({}, Nr), e), {
    headers: Ve(Ve({}, Nr.headers), e == null ? void 0 : e.headers)
  }), {
    prefix: n,
    getPath: r,
    getData: i,
    headers: s,
    timeout: a,
    fallbackOnFail: l
  } = t, u = ki(t, [
    "prefix",
    "getPath",
    "getData",
    "headers",
    "timeout",
    "fallbackOnFail"
  ]);
  return {
    async getRecord({ namespace: o, language: c, fetch: f }) {
      const d = r({
        namespace: o,
        language: c,
        prefix: n
      });
      try {
        const m = await vu(f, d, a, Ve({
          headers: s
        }, u));
        if (!m.ok)
          throw new Error(`${m.url} ${m.status}`);
        return await i(m);
      } catch (m) {
        if (l)
          return;
        throw m;
      }
    }
  };
}
const Eu = (e) => (t, n) => (n.addBackend(yu(e)), t);
function wu() {
  return ql().use(zi());
}
const _u = () => (e) => e;
oe({
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
    const t = Ne("tolgeeContext");
    e.tolgee && (t.value.tolgee = e.tolgee);
    const n = T(() => t.value.tolgee);
    if (!n.value)
      throw new Error("Tolgee instance not provided");
    if (t.value.isInitialRender) {
      if (!e.staticData || !e.language)
        throw new Error('TolgeeProvider: "staticData" and "language" props are required for SSR.');
      if (n.value.setEmitterActive(!1), n.value.addStaticData(e.staticData), n.value.changeLanguage(e.language), n.value.setEmitterActive(!0), !n.value.isLoaded()) {
        const i = n.value.getRequiredRecords(e.language).map(({ namespace: s, language: a }) => s ? `${s}:${a}` : a).filter((s) => {
          var a;
          return !(!((a = e.staticData) === null || a === void 0) && a[s]);
        });
        console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((s) => `"${s}"`).join(", ")}`);
      }
    }
    Mr(() => {
      t.value.isInitialRender = !1;
    });
    const r = K(!n.value.isLoaded());
    return Dr(() => {
      n.value.run().finally(() => {
        r.value = !1;
      });
    }), $r(() => {
      n.value.stop();
    }), { isLoading: r };
  },
  render() {
    var e, t, n, r;
    return this.isLoading ? ((r = (n = this.$slots).fallback) === null || r === void 0 ? void 0 : r.call(n)) || this.fallback || null : (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
});
const xu = (e) => {
  const t = Di(e), n = Ne("tolgeeContext"), r = T(() => n.value.tolgee);
  if (!r.value)
    throw new Error("Tolgee instance not provided");
  const i = K(u()), s = r.value.onNsUpdate(() => {
    i.value = u(), a.value = !r.value.isLoaded(t);
  });
  s.subscribeNs(t), r.value.addActiveNs(t), $r(() => {
    s == null || s.unsubscribe(), r.value.removeActiveNs(t);
  });
  const a = K(!r.value.isLoaded(t)), l = (o) => {
    s.subscribeNs(o);
  };
  function u() {
    return (o) => {
      var c;
      const f = (c = o.ns) !== null && c !== void 0 ? c : t == null ? void 0 : t[0];
      return l(f), r.value.t(Object.assign(Object.assign({}, o), { ns: f }));
    };
  }
  return { t: i, isLoading: a };
};
oe({
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
    const { t: e } = xu();
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
const Cu = {
  install(e, t) {
    const n = t == null ? void 0 : t.tolgee;
    if (!n)
      throw new Error("Tolgee instance not passed in options");
    const r = !!(t != null && t.enableSSR), i = K({
      tolgee: n,
      isInitialRender: r
    });
    if (e.provide("tolgeeContext", i), r) {
      const s = () => Object.assign(Object.assign({}, i.value.tolgee), { t: (...l) => {
        const u = xn(...l);
        return n.t(Object.assign({}, u));
      } }), a = () => Object.assign(Object.assign({}, i.value.tolgee), { t: (...l) => {
        const u = xn(...l);
        return n.t(Object.assign(Object.assign({}, u), { noWrap: !0 }));
      } });
      i.value.tolgee = a(), de(() => i.value.isInitialRender, (l) => {
        l || (i.value.tolgee = s());
      });
    }
    i.value.tolgee.on("cache", () => {
      i.value.tolgee = Object.freeze(Object.assign({}, i.value.tolgee));
    }), e.config.globalProperties.$t = (...s) => i.value.tolgee.t(...s), e.config.globalProperties.$tolgee = i.value.tolgee;
  }
};
var Nn = function(e, t) {
  return Nn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Nn(e, t);
};
function zt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Nn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var V = function() {
  return V = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, V.apply(this, arguments);
};
function Su(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function rn(e, t, n) {
  if (arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function sn(e, t) {
  var n = t && t.cache ? t.cache : Bu, r = t && t.serializer ? t.serializer : Lu, i = t && t.strategy ? t.strategy : Pu;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Tu(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Nu(e, t, n, r) {
  var i = Tu(r) ? r : n(r), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, r), t.set(i, s)), s;
}
function Wi(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, r), t.set(i, s)), s;
}
function qi(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Pu(e, t) {
  var n = e.length === 1 ? Nu : Wi;
  return qi(e, this, n, t.cache.create(), t.serializer);
}
function Au(e, t) {
  return qi(e, this, Wi, t.cache.create(), t.serializer);
}
var Lu = function() {
  return JSON.stringify(arguments);
};
function Gn() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Gn.prototype.get = function(e) {
  return this.cache[e];
};
Gn.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Bu = {
  create: function() {
    return new Gn();
  }
}, an = {
  variadic: Au
}, F;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(F || (F = {}));
var z;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(z || (z = {}));
var We;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(We || (We = {}));
function Pr(e) {
  return e.type === z.literal;
}
function Ou(e) {
  return e.type === z.argument;
}
function Xi(e) {
  return e.type === z.number;
}
function Zi(e) {
  return e.type === z.date;
}
function Yi(e) {
  return e.type === z.time;
}
function Ki(e) {
  return e.type === z.select;
}
function Ji(e) {
  return e.type === z.plural;
}
function Iu(e) {
  return e.type === z.pound;
}
function Qi(e) {
  return e.type === z.tag;
}
function es(e) {
  return !!(e && typeof e == "object" && e.type === We.number);
}
function Pn(e) {
  return !!(e && typeof e == "object" && e.type === We.dateTime);
}
var ts = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ru = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Hu(e) {
  var t = {};
  return e.replace(Ru, function(n) {
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
var ku = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Du(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(ku).filter(function(d) {
    return d.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var s = i[r], a = s.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = a[0], u = a.slice(1), o = 0, c = u; o < c.length; o++) {
      var f = c[o];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: l, options: u });
  }
  return n;
}
function Mu(e) {
  return e.replace(/^(.*?)-/, "");
}
var Ar = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ns = /^(@+)?(\+|#+)?[rs]?$/g, Fu = /(\*)(0+)|(#+)(0+)|(0+)/g, rs = /^(0+)$/;
function Lr(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ns, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function is(e) {
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
function Uu(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !rs.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Br(e) {
  var t = {}, n = is(e);
  return n || t;
}
function Vu(e) {
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
        t.style = "unit", t.unit = Mu(i.options[0]);
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
        t = V(V(V({}, t), { notation: "scientific" }), i.options.reduce(function(u, o) {
          return V(V({}, u), Br(o));
        }, {}));
        continue;
      case "engineering":
        t = V(V(V({}, t), { notation: "engineering" }), i.options.reduce(function(u, o) {
          return V(V({}, u), Br(o));
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
        i.options[0].replace(Fu, function(u, o, c, f, d, m) {
          if (o)
            t.minimumIntegerDigits = c.length;
          else {
            if (f && d)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (rs.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ar.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ar, function(u, o, c, f, d, m) {
        return c === "*" ? t.minimumFractionDigits = o.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : d && m ? (t.minimumFractionDigits = d.length, t.maximumFractionDigits = d.length + m.length) : (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = V(V({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = V(V({}, t), Lr(s)));
      continue;
    }
    if (ns.test(i.stem)) {
      t = V(V({}, t), Lr(i.stem));
      continue;
    }
    var a = is(i.stem);
    a && (t = V(V({}, t), a));
    var l = Uu(i.stem);
    l && (t = V(V({}, t), l));
  }
  return t;
}
var gt = {
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
function $u(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var s = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        s++, r++;
      var a = 1 + (s & 1), l = s < 2 ? 1 : 3 + (s >> 1), u = "a", o = Gu(t);
      for ((o == "H" || o == "k") && (l = 0); l-- > 0; )
        n += u;
      for (; a-- > 0; )
        n = o + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Gu(e) {
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
  var i = gt[r || ""] || gt[n || ""] || gt["".concat(n, "-001")] || gt["001"];
  return i[0];
}
var on, ju = new RegExp("^".concat(ts.source, "*")), zu = new RegExp("".concat(ts.source, "*$"));
function U(e, t) {
  return { start: e, end: t };
}
var Wu = !!String.prototype.startsWith && "_a".startsWith("a", 1), qu = !!String.fromCodePoint, Xu = !!Object.fromEntries, Zu = !!String.prototype.codePointAt, Yu = !!String.prototype.trimStart, Ku = !!String.prototype.trimEnd, Ju = !!Number.isSafeInteger, Qu = Ju ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, An = !0;
try {
  var ec = as("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  An = ((on = ec.exec("a")) === null || on === void 0 ? void 0 : on[0]) === "a";
} catch {
  An = !1;
}
var Or = Wu ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Ln = qu ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, s = 0, a; i > s; ) {
      if (a = t[s++], a > 1114111)
        throw RangeError(a + " is not a valid code point");
      r += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return r;
  }
), Ir = (
  // native
  Xu ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var s = i[r], a = s[0], l = s[1];
        n[a] = l;
      }
      return n;
    }
  )
), ss = Zu ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), s;
      return i < 55296 || i > 56319 || n + 1 === r || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? i : (i - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), tc = Yu ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ju, "");
  }
), nc = Ku ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(zu, "");
  }
);
function as(e, t) {
  return new RegExp(e, t);
}
var Bn;
if (An) {
  var Rr = as("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Bn = function(t, n) {
    var r;
    Rr.lastIndex = n;
    var i = Rr.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Bn = function(t, n) {
    for (var r = []; ; ) {
      var i = ss(t, n);
      if (i === void 0 || os(i) || ac(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Ln.apply(void 0, r);
  };
var rc = (
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
        var s = this.char();
        if (s === 123) {
          var a = this.parseArgument(t, r);
          if (a.err)
            return a;
          i.push(a.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), i.push({
              type: z.pound,
              location: U(l, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(F.UNMATCHED_CLOSING_TAG, U(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && On(this.peek() || 0)) {
            var a = this.parseTag(t, n);
            if (a.err)
              return a;
            i.push(a.val);
          } else {
            var a = this.parseLiteral(t, n);
            if (a.err)
              return a;
            i.push(a.val);
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
            type: z.literal,
            value: "<".concat(i, "/>"),
            location: U(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var a = s.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !On(this.char()))
            return this.error(F.INVALID_TAG, U(l, this.clonePosition()));
          var u = this.clonePosition(), o = this.parseTagName();
          return i !== o ? this.error(F.UNMATCHED_CLOSING_TAG, U(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: z.tag,
              value: i,
              children: a,
              location: U(r, this.clonePosition())
            },
            err: null
          } : this.error(F.INVALID_TAG, U(l, this.clonePosition())));
        } else
          return this.error(F.UNCLOSED_TAG, U(r, this.clonePosition()));
      } else
        return this.error(F.INVALID_TAG, U(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && sc(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          i += s;
          continue;
        }
        var a = this.tryParseUnquoted(t, n);
        if (a) {
          i += a;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          i += l;
          continue;
        }
        break;
      }
      var u = U(r, this.clonePosition());
      return {
        val: { type: z.literal, value: i, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !ic(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Ln.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Ln(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(F.EMPTY_ARGUMENT, U(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(F.MALFORMED_ARGUMENT, U(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: z.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: U(r, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, U(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(F.MALFORMED_ARGUMENT, U(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Bn(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var s = this.clonePosition(), a = U(t, s);
      return { value: r, location: a };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var s, a = this.clonePosition(), l = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (l) {
        case "":
          return this.error(F.EXPECT_ARGUMENT_TYPE, U(a, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var o = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var d = nc(f.val);
            if (d.length === 0)
              return this.error(F.EXPECT_ARGUMENT_STYLE, U(this.clonePosition(), this.clonePosition()));
            var m = U(c, this.clonePosition());
            o = { style: d, styleLocation: m };
          }
          var _ = this.tryParseArgumentClose(i);
          if (_.err)
            return _;
          var v = U(i, this.clonePosition());
          if (o && Or(o == null ? void 0 : o.style, "::", 0)) {
            var x = tc(o.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(x, o.styleLocation);
              return f.err ? f : {
                val: { type: z.number, value: r, location: v, style: f.val },
                err: null
              };
            } else {
              if (x.length === 0)
                return this.error(F.EXPECT_DATE_TIME_SKELETON, v);
              var g = x;
              this.locale && (g = $u(x, this.locale));
              var d = {
                type: We.dateTime,
                pattern: g,
                location: o.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Hu(g) : {}
              }, b = l === "date" ? z.date : z.time;
              return {
                val: { type: b, value: r, location: v, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? z.number : l === "date" ? z.date : z.time,
              value: r,
              location: v,
              style: (s = o == null ? void 0 : o.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var h = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(F.EXPECT_SELECT_ARGUMENT_OPTIONS, U(h, V({}, h)));
          this.bumpSpace();
          var w = this.parseIdentifierIfPossible(), N = 0;
          if (l !== "select" && w.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), w = this.parseIdentifierIfPossible(), N = f.val;
          }
          var p = this.tryParsePluralOrSelectOptions(t, l, n, w);
          if (p.err)
            return p;
          var _ = this.tryParseArgumentClose(i);
          if (_.err)
            return _;
          var C = U(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: z.select,
              value: r,
              options: Ir(p.val),
              location: C
            },
            err: null
          } : {
            val: {
              type: z.plural,
              value: r,
              options: Ir(p.val),
              offset: N,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: C
            },
            err: null
          };
        }
        default:
          return this.error(F.INVALID_ARGUMENT_TYPE, U(a, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, U(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(F.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, U(i, this.clonePosition()));
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
        r = Du(t);
      } catch {
        return this.error(F.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: We.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Vu(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var s, a = !1, l = [], u = /* @__PURE__ */ new Set(), o = i.value, c = i.location; ; ) {
        if (o.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var d = this.tryParseDecimalInteger(F.EXPECT_PLURAL_ARGUMENT_SELECTOR, F.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (d.err)
              return d;
            c = U(f, this.clonePosition()), o = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (u.has(o))
          return this.error(n === "select" ? F.DUPLICATE_SELECT_ARGUMENT_SELECTOR : F.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        o === "other" && (a = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? F.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : F.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, U(this.clonePosition(), this.clonePosition()));
        var _ = this.parseMessage(t + 1, n, r);
        if (_.err)
          return _;
        var v = this.tryParseArgumentClose(m);
        if (v.err)
          return v;
        l.push([
          o,
          {
            value: _.val,
            location: U(m, this.clonePosition())
          }
        ]), u.add(o), this.bumpSpace(), s = this.parseIdentifierIfPossible(), o = s.value, c = s.location;
      }
      return l.length === 0 ? this.error(n === "select" ? F.EXPECT_SELECT_ARGUMENT_SELECTOR : F.EXPECT_PLURAL_ARGUMENT_SELECTOR, U(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(F.MISSING_OTHER_CLAUSE, U(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var s = !1, a = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          s = !0, a = a * 10 + (l - 48), this.bump();
        else
          break;
      }
      var u = U(i, this.clonePosition());
      return s ? (a *= r, Qu(a) ? { val: a, err: null } : this.error(n, u)) : this.error(t, u);
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
      var n = ss(this.message, t);
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
      if (Or(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && os(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function On(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ic(e) {
  return On(e) || e === 47;
}
function sc(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function os(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ac(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function In(e) {
  e.forEach(function(t) {
    if (delete t.location, Ki(t) || Ji(t))
      for (var n in t.options)
        delete t.options[n].location, In(t.options[n].value);
    else Xi(t) && es(t.style) || (Zi(t) || Yi(t)) && Pn(t.style) ? delete t.style.location : Qi(t) && In(t.children);
  });
}
function oc(e, t) {
  t === void 0 && (t = {}), t = V({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new rc(e, t).parse();
  if (n.err) {
    var r = SyntaxError(F[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || In(n.val), n.val;
}
var qe;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(qe || (qe = {}));
var Wt = (
  /** @class */
  function(e) {
    zt(t, e);
    function t(n, r, i) {
      var s = e.call(this, n) || this;
      return s.code = r, s.originalMessage = i, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Hr = (
  /** @class */
  function(e) {
    zt(t, e);
    function t(n, r, i, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), qe.INVALID_VALUE, s) || this;
    }
    return t;
  }(Wt)
), lc = (
  /** @class */
  function(e) {
    zt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), qe.INVALID_VALUE, i) || this;
    }
    return t;
  }(Wt)
), uc = (
  /** @class */
  function(e) {
    zt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), qe.MISSING_VALUE, r) || this;
    }
    return t;
  }(Wt)
), Q;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Q || (Q = {}));
function cc(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Q.literal || n.type !== Q.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function fc(e) {
  return typeof e == "function";
}
function _t(e, t, n, r, i, s, a) {
  if (e.length === 1 && Pr(e[0]))
    return [
      {
        type: Q.literal,
        value: e[0].value
      }
    ];
  for (var l = [], u = 0, o = e; u < o.length; u++) {
    var c = o[u];
    if (Pr(c)) {
      l.push({
        type: Q.literal,
        value: c.value
      });
      continue;
    }
    if (Iu(c)) {
      typeof s == "number" && l.push({
        type: Q.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new uc(f, a);
    var d = i[f];
    if (Ou(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), l.push({
        type: typeof d == "string" ? Q.literal : Q.object,
        value: d
      });
      continue;
    }
    if (Zi(c)) {
      var m = typeof c.style == "string" ? r.date[c.style] : Pn(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: Q.literal,
        value: n.getDateTimeFormat(t, m).format(d)
      });
      continue;
    }
    if (Yi(c)) {
      var m = typeof c.style == "string" ? r.time[c.style] : Pn(c.style) ? c.style.parsedOptions : r.time.medium;
      l.push({
        type: Q.literal,
        value: n.getDateTimeFormat(t, m).format(d)
      });
      continue;
    }
    if (Xi(c)) {
      var m = typeof c.style == "string" ? r.number[c.style] : es(c.style) ? c.style.parsedOptions : void 0;
      m && m.scale && (d = d * (m.scale || 1)), l.push({
        type: Q.literal,
        value: n.getNumberFormat(t, m).format(d)
      });
      continue;
    }
    if (Qi(c)) {
      var _ = c.children, v = c.value, x = i[v];
      if (!fc(x))
        throw new lc(v, "function", a);
      var g = _t(_, t, n, r, i, s), b = x(g.map(function(N) {
        return N.value;
      }));
      Array.isArray(b) || (b = [b]), l.push.apply(l, b.map(function(N) {
        return {
          type: typeof N == "string" ? Q.literal : Q.object,
          value: N
        };
      }));
    }
    if (Ki(c)) {
      var h = c.options[d] || c.options.other;
      if (!h)
        throw new Hr(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, _t(h.value, t, n, r, i));
      continue;
    }
    if (Ji(c)) {
      var h = c.options["=".concat(d)];
      if (!h) {
        if (!Intl.PluralRules)
          throw new Wt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, qe.MISSING_INTL_API, a);
        var w = n.getPluralRules(t, { type: c.pluralType }).select(d - (c.offset || 0));
        h = c.options[w] || c.options.other;
      }
      if (!h)
        throw new Hr(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, _t(h.value, t, n, r, i, d - (c.offset || 0)));
      continue;
    }
  }
  return cc(l);
}
function dc(e, t) {
  return t ? V(V(V({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = V(V({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function hc(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = dc(e[r], t[r]), n;
  }, V({}, e)) : e;
}
function ln(e) {
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
function gc(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: sn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, rn([void 0], n, !1)))();
    }, {
      cache: ln(e.number),
      strategy: an.variadic
    }),
    getDateTimeFormat: sn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, rn([void 0], n, !1)))();
    }, {
      cache: ln(e.dateTime),
      strategy: an.variadic
    }),
    getPluralRules: sn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, rn([void 0], n, !1)))();
    }, {
      cache: ln(e.pluralRules),
      strategy: an.variadic
    })
  };
}
var mc = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var s = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var o = s.formatToParts(u);
        if (o.length === 1)
          return o[0].value;
        var c = o.reduce(function(f, d) {
          return !f.length || d.type !== Q.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return _t(s.ast, s.locales, s.formatters, s.formats, u, void 0, s.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = s.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = i || {};
        a.formatters;
        var l = Su(a, ["formatters"]);
        this.ast = e.__parse(t, V(V({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = hc(e.formats, r), this.formatters = i && i.formatters || gc(this.formatterCache);
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
    }, e.__parse = oc, e.formats = {
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
), vc = mc;
const pc = () => {
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
      let s = String(i).replace(/[^a-zA-Z]/g, "-");
      for (; !t(s); )
        s = s.split("-").slice(0, -1).join("-") || "en";
      e.set(i, s);
    }
    return e.get(i);
  }
  return Object.freeze({ getLanguage: n, format: ({ translation: i, language: s, params: a }) => {
    const l = !Object.values(a || {}).find((o) => typeof o == "function"), u = n(s);
    return new vc(i, u, void 0, {
      ignoreTag: l
    }).format(a);
  } });
}, bc = () => (e, t) => (t.setFinalFormatter(pc()), e), yc = { max_length: "Invalid character length, please insert {limit} characters or less!", min_length: "Invalid character length, please insert minimum {limit} characters or more!", required: "Required!", email: "Please provide a valid e-mail address!", url: "Please provide a valid URL!", max_value: "Please provide a value less than or equal to {limit}!", min_value: "Please provide a value more than or equal to {limit}!", array_min_length: "Please select at least {limit} items!" }, Ec = {
  rules: yc
}, wc = ["en"], _c = [...wc, "en-US"], xc = {
  en: Ec
}, ls = wu().use(_u()).use(nu()).use(bc()), Cc = window.location.hostname.startsWith("deploy-preview");
Cc && ls.use(Eu({ prefix: "https://cdn.tolg.ee/663da029e1beb0ea0704ea269e843a5a" }));
const ce = ls.init({
  availableLanguages: [..._c],
  language: "en",
  staticData: xc
}), Sc = (e) => e == null ? !0 : Number(e) >= 0 && new ut(Number(e)).modulo(0.01).toNumber() === 0, Tc = (e) => e == null ? !0 : Number.isSafeInteger(Number(e)) && Number(e) >= 0, Nc = (e = 240) => (t) => (t || "").length <= e || ce.t("rules.max_length", { limit: e }), Pc = (e) => (t) => !((t || "").length > 0 && (t || "").length < e) || ce.t("rules.min_length", { limit: e }), Ac = (e = Number.MAX_SAFE_INTEGER) => (t) => Number(t) <= e || ce.t("rules.max_value", { limit: e }), Lc = (e = 0, t) => (n) => Number(n) >= e || t || ce.t("rules.min_value", { limit: e }), Bc = (e) => {
  const t = new RegExp(
    "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    "i"
  );
  if (e) {
    const n = e.startsWith("https://") ? e : "https://" + e;
    return t.test(n) || ce.t("rules.url");
  }
  return !e || ce.t("rules.required");
}, Oc = (e) => {
  const t = new RegExp(/^(?!https:\/\/)(?!www\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/, "g");
  return e ? t.test(e) : !e;
}, Ic = (e) => !!e || ce.t("rules.required"), Rc = (e) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) || ce.t("rules.email"), Hc = (e) => {
  const t = new RegExp(
    /^(?:(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*))$/,
    "g"
  );
  return e ? t.test(e) : !e;
}, kc = (e) => /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)).*$/.test(e) || ce.t("form_hint_password_complexity"), Dc = (e) => (t) => {
  const n = e.indexOf(t);
  return !e.some((r, i) => r === t && i !== n);
}, Mc = (e) => (t) => (t == null ? void 0 : t.length) >= e || ce.t("rules.array_min_length", { limit: e }), us = oe({
  data() {
    return {
      rules: {
        arrayMinLength: Mc,
        domain: Oc,
        email: Rc,
        emailName: Hc,
        maxlength: Nc,
        maxTwoDecimal: Sc,
        maxValue: Ac,
        minlength: Pc,
        minValue: Lc,
        password: kc,
        positiveInteger: Tc,
        required: Ic,
        unique: Dc,
        url: Bc
      }
    };
  }
}), Fc = oe({
  name: "GsInput",
  mixins: [us],
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
function Uc(e, t, n, r, i, s) {
  return Z(), et(no, He(e.$attrs, {
    variant: "outlined",
    color: "green",
    flat: "",
    class: "gs-input",
    "hide-details": e.hideDetails,
    label: e.label,
    "model-value": e.modelValue,
    "onUpdate:modelValue": e.input,
    onBlur: e.blur
  }), null, 16, ["hide-details", "label", "model-value", "onUpdate:modelValue", "onBlur"]);
}
const Vc = /* @__PURE__ */ Ae(Fc, [["render", Uc], ["__scopeId", "data-v-9b10e20e"]]), $c = ["aria-disabled", "aria-label"], Gc = /* @__PURE__ */ oe({
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
    const n = e, r = t, i = T(() => [
      "gs-action-card",
      {
        "gs-action-card--disabled": n.disabled,
        "gs-action-card--full-width": n.fullWidth,
        "gs-action-card--selected": n.selected
      }
    ]), s = (a) => {
      n.disabled || r("click", a);
    };
    return (a, l) => (Z(), se("div", {
      "aria-disabled": a.disabled,
      "aria-label": a.ariaLabel,
      class: ot(i.value),
      style: Ge({
        padding: a.padding,
        width: a.width,
        height: a.height
      }),
      role: "button",
      onClick: s
    }, [
      Ur(a.$slots, "default", {}, void 0, !0)
    ], 14, $c));
  }
}), jc = /* @__PURE__ */ Ae(Gc, [["__scopeId", "data-v-74f0a388"]]), zc = {
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
}, Wc = Ss({
  icons: {
    defaultSet: "mdi",
    aliases: pa,
    sets: {
      mdi: ba
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: zc
    }
  }
});
function qc(e) {
  e.use(Cu, { tolgee: ce }).use(Wc);
}
const Xc = {
  GsButton: go,
  GsAlertBar: co,
  GsFilter: Eo,
  GsTabs: So,
  GsTag: Po,
  GsDivider: Lo,
  GsInput: Vc,
  RulesMixin: us,
  GsActionCard: jc
}, Jc = {
  install(e) {
    qc(e);
    for (const [t, n] of Object.entries(Xc))
      e.component(t, n);
  }
};
export {
  jc as GsActionCard,
  co as GsAlertBar,
  go as GsButton,
  Lo as GsDivider,
  Eo as GsFilter,
  Vc as GsInput,
  So as GsTabs,
  Po as GsTag,
  us as RulesMixin,
  Jc as default
};
