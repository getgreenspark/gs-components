import { reactive as Ot, watchEffect as Ht, toRef as R, shallowRef as ue, capitalize as _a, Fragment as Le, warn as Fn, getCurrentInstance as xa, inject as pe, computed as P, provide as ze, ref as z, unref as _e, defineComponent as Be, h as rn, camelize as Ca, onBeforeUnmount as et, watch as te, readonly as Ji, onScopeDispose as We, effectScope as Qi, toRaw as he, TransitionGroup as er, Transition as xt, createVNode as I, mergeProps as ne, toRefs as Cs, createElementVNode as B, normalizeStyle as ee, normalizeClass as W, toValue as ut, isRef as bi, onBeforeMount as an, nextTick as Ue, withDirectives as Je, vShow as on, onMounted as Ft, useId as Mt, onUpdated as As, Text as Ps, resolveDynamicComponent as Aa, toDisplayString as we, Teleport as Ts, onDeactivated as Bs, cloneVNode as Is, createElementBlock as me, openBlock as ie, createCommentVNode as wt, createBlock as st, withCtx as be, createTextVNode as Zt, renderSlot as Mn, renderList as Vn, withModifiers as Os, onUnmounted as Pa, createSlots as Ta } from "vue";
import { createVuetify as Ls } from "vuetify";
function F(e, t) {
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
const fe = F({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Te = typeof window < "u", tr = Te && "IntersectionObserver" in window;
function pr(e, t, n) {
  Ns(e, t), t.set(e, n);
}
function Ns(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function yr(e, t, n) {
  return e.set(Ba(e, t), n), n;
}
function it(e, t) {
  return e.get(Ba(e, t));
}
function Ba(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Ia(e, t, n) {
  const i = t.length - 1;
  if (i < 0) return e === void 0 ? n : e;
  for (let r = 0; r < i; r++) {
    if (e == null)
      return n;
    e = e[t[r]];
  }
  return e == null || e[t[i]] === void 0 ? n : e[t[i]];
}
function Dn(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((i) => Dn(e[i], t[i]));
}
function ks(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Ia(e, t.split("."), n));
}
function jt(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const r = t(e, n);
    return typeof r > "u" ? n : r;
  }
  if (typeof t == "string") return ks(e, t, n);
  if (Array.isArray(t)) return Ia(e, t, n);
  if (typeof t != "function") return n;
  const i = t(e, n);
  return typeof i > "u" ? n : i;
}
function Z(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function wi(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function br(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Rs(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const wr = Object.freeze({
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
function ei(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Oa(e, t) {
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
function $n(e, t) {
  const n = {
    ...e
  };
  return t.forEach((i) => delete n[i]), n;
}
const La = /^on[^a-z]/, Na = (e) => La.test(e), Hs = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Fs(e) {
  const [t, n] = Er(e, [La]), i = $n(t, Hs), [r, a] = Er(n, ["class", "style", "id", /^data-/]);
  return Object.assign(r, t), Object.assign(a, i), [r, a];
}
function Et(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Kt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Sr(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Ms(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let i = 0;
  for (; i < e.length; )
    n.push(e.substr(i, t)), i += t;
  return n;
}
function Tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const i = {};
  for (const r in e)
    i[r] = e[r];
  for (const r in t) {
    const a = e[r], o = t[r];
    if (br(a) && br(o)) {
      i[r] = Tt(a, o, n);
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
function ka(e) {
  return e.map((t) => t.type === Le ? ka(t.children) : t).flat();
}
function St() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (St.cache.has(e)) return St.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return St.cache.set(e, t), t;
}
St.cache = /* @__PURE__ */ new Map();
function Wt(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => Wt(e, n)).flat(1);
  if (t.suspense)
    return Wt(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => Wt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Wt(e, t.component.subTree).flat(1);
  }
  return [];
}
var Ct = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap();
class Vs {
  constructor(t) {
    pr(this, Ct, []), pr(this, bt, 0), this.size = t;
  }
  get isFull() {
    return it(Ct, this).length === this.size;
  }
  push(t) {
    it(Ct, this)[it(bt, this)] = t, yr(bt, this, (it(bt, this) + 1) % this.size);
  }
  values() {
    return it(Ct, this).slice(it(bt, this)).concat(it(Ct, this).slice(0, it(bt, this)));
  }
  clear() {
    it(Ct, this).length = 0, yr(bt, this, 0);
  }
}
function nr(e) {
  const t = Ot({});
  Ht(() => {
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
function _n(e, t) {
  return e.includes(t);
}
function Ra(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Me = () => [Function, Array];
function _r(e, t) {
  return t = "on" + _a(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Ha(e) {
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
function Fa(e, t, n) {
  let i, r = e.indexOf(document.activeElement);
  const a = t === "next" ? 1 : -1;
  do
    r += a, i = e[r];
  while ((!i || i.offsetParent == null || !((n == null ? void 0 : n(i)) ?? !0)) && r < e.length && r >= 0);
  return i;
}
function Yt(e, t) {
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
    const s = Fa(n, t);
    s ? s.focus() : Yt(e, t === "next" ? "first" : "last");
  }
}
function Ds(e, t) {
  if (!(Te && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function $s(e, t) {
  if (!Te || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Us(e, t) {
  const n = e.clientX, i = e.clientY, r = t.getBoundingClientRect(), a = r.left, o = r.top, s = r.right, u = r.bottom;
  return n >= a && n <= s && i >= o && i <= u;
}
function Si() {
  const e = ue(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Rs(e.value)
  }), t;
}
function Gs(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
const Ma = ["top", "bottom"], js = ["start", "end", "left", "right"];
function _i(e, t) {
  let [n, i] = e.split(" ");
  return i || (i = _n(Ma, n) ? "start" : _n(js, n) ? "top" : "center"), {
    side: xr(n, t),
    align: xr(i, t)
  };
}
function xr(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function ti(e) {
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
function ni(e) {
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
function Cr(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Ar(e) {
  return _n(Ma, e.side) ? "y" : "x";
}
class Ke {
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
function Pr(e, t) {
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
function Va(e) {
  return Array.isArray(e) ? new Ke({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function zs(e) {
  if (e === document.documentElement)
    return visualViewport ? new Ke({
      x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
      y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
      width: visualViewport.width * visualViewport.scale,
      height: visualViewport.height * visualViewport.scale
    }) : new Ke({
      x: 0,
      y: 0,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  {
    const t = e.getBoundingClientRect();
    return new Ke({
      x: t.x,
      y: t.y,
      width: e.clientWidth,
      height: e.clientHeight
    });
  }
}
function ir(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), i = n.transform;
  if (i) {
    let r, a, o, s, u;
    if (i.startsWith("matrix3d("))
      r = i.slice(9, -1).split(/, /), a = Number(r[0]), o = Number(r[5]), s = Number(r[12]), u = Number(r[13]);
    else if (i.startsWith("matrix("))
      r = i.slice(7, -1).split(/, /), a = Number(r[0]), o = Number(r[3]), s = Number(r[4]), u = Number(r[5]);
    else
      return new Ke(t);
    const l = n.transformOrigin, c = t.x - s - (1 - a) * parseFloat(l), d = t.y - u - (1 - o) * parseFloat(l.slice(l.indexOf(" ") + 1)), f = a ? t.width / a : e.offsetWidth + 1, g = o ? t.height / o : e.offsetHeight + 1;
    return new Ke({
      x: c,
      y: d,
      width: f,
      height: g
    });
  } else
    return new Ke(t);
}
function Bt(e, t, n) {
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
const mn = /* @__PURE__ */ new WeakMap();
function Ws(e, t) {
  Object.keys(t).forEach((n) => {
    if (Na(n)) {
      const i = Ra(n), r = mn.get(e);
      if (t[n] == null)
        r == null || r.forEach((a) => {
          const [o, s] = a;
          o === i && (e.removeEventListener(i, s), r.delete(a));
        });
      else if (!r || ![...r].some((a) => a[0] === i && a[1] === t[n])) {
        e.addEventListener(i, t[n]);
        const a = r || /* @__PURE__ */ new Set();
        a.add([i, t[n]]), mn.has(e) || mn.set(e, a);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function qs(e, t) {
  Object.keys(t).forEach((n) => {
    if (Na(n)) {
      const i = Ra(n), r = mn.get(e);
      r == null || r.forEach((a) => {
        const [o, s] = a;
        o === i && (e.removeEventListener(i, s), r.delete(a));
      });
    } else
      e.removeAttribute(n);
  });
}
const At = 2.4, Tr = 0.2126729, Br = 0.7151522, Ir = 0.072175, Xs = 0.55, Zs = 0.58, Ys = 0.57, Ks = 0.62, fn = 0.03, Or = 1.45, Js = 5e-4, Qs = 1.25, el = 1.25, tl = 0.078, Lr = 12.82051282051282, hn = 0.06, nl = 1e-3;
function Nr(e, t) {
  const n = (e.r / 255) ** At, i = (e.g / 255) ** At, r = (e.b / 255) ** At, a = (t.r / 255) ** At, o = (t.g / 255) ** At, s = (t.b / 255) ** At;
  let u = n * Tr + i * Br + r * Ir, l = a * Tr + o * Br + s * Ir;
  if (u <= fn && (u += (fn - u) ** Or), l <= fn && (l += (fn - l) ** Or), Math.abs(l - u) < Js) return 0;
  let c;
  if (l > u) {
    const d = (l ** Xs - u ** Zs) * Qs;
    c = d < nl ? 0 : d < tl ? d - d * Lr * hn : d - hn;
  } else {
    const d = (l ** Ks - u ** Ys) * el;
    c = d > -1e-3 ? 0 : d > -0.078 ? d - d * Lr * hn : d + hn;
  }
  return c * 100;
}
function It(e) {
  Fn(`Vuetify: ${e}`);
}
function Da(e) {
  Fn(`Vuetify error: ${e}`);
}
function il(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, Fn(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
function xi(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function rl(e) {
  return xi(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const kr = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, al = {
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
  hsl: (e, t, n, i) => Rr({
    h: e,
    s: t,
    l: n,
    a: i
  }),
  hsla: (e, t, n, i) => Rr({
    h: e,
    s: t,
    l: n,
    a: i
  }),
  hsv: (e, t, n, i) => Jt({
    h: e,
    s: t,
    v: n,
    a: i
  }),
  hsva: (e, t, n, i) => Jt({
    h: e,
    s: t,
    v: n,
    a: i
  })
};
function qt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && It(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && kr.test(e)) {
    const {
      groups: t
    } = e.match(kr), {
      fn: n,
      values: i
    } = t, r = i.split(/,\s*|\s*\/\s*|\s+/).map((a, o) => a.endsWith("%") || // unitless slv are %
    o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return al[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((i) => i + i).join("") : [6, 8].includes(t.length) || It(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && It(`'${e}' is not a valid hex(a) color`), ol(t);
  } else if (typeof e == "object") {
    if (ei(e, ["r", "g", "b"]))
      return e;
    if (ei(e, ["h", "s", "l"]))
      return Jt($a(e));
    if (ei(e, ["h", "s", "v"]))
      return Jt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Jt(e) {
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
function Rr(e) {
  return Jt($a(e));
}
function $a(e) {
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
function ol(e) {
  e = sl(e);
  let [t, n, i, r] = Ms(e, 2).map((a) => parseInt(a, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: i,
    a: r
  };
}
function sl(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Sr(Sr(e, 6), 8, "F")), e;
}
function ll(e) {
  const t = Math.abs(Nr(qt(0), qt(e)));
  return Math.abs(Nr(qt(16777215), qt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function Se(e, t) {
  const n = xa();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Se(e).type;
  return St((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function ul(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const xn = Symbol.for("vuetify:defaults");
function rr() {
  const e = pe(xn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ar(e, t) {
  const n = rr(), i = z(e), r = P(() => {
    if (_e(t == null ? void 0 : t.disabled)) return n.value;
    const o = _e(t == null ? void 0 : t.scoped), s = _e(t == null ? void 0 : t.reset), u = _e(t == null ? void 0 : t.root);
    if (i.value == null && !(o || s || u)) return n.value;
    let l = Tt(i.value, {
      prev: n.value
    });
    if (o) return l;
    if (s || u) {
      const c = Number(s || 1 / 0);
      for (let d = 0; d <= c && !(!l || !("prev" in l)); d++)
        l = l.prev;
      return l && typeof u == "string" && u in l && (l = Tt(Tt(l, {
        prev: l
      }), l[u])), l;
    }
    return l.prev ? Tt(l.prev, l) : l;
  });
  return ze(xn, r), r;
}
function cl(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[St(t)] < "u");
}
function dl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rr();
  const i = Se("useDefaults");
  if (t = t ?? i.type.name ?? i.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = P(() => {
    var u;
    return (u = n.value) == null ? void 0 : u[e._as ?? t];
  }), a = new Proxy(e, {
    get(u, l) {
      var g, m, h, p;
      const c = Reflect.get(u, l);
      if (l === "class" || l === "style")
        return [(g = r.value) == null ? void 0 : g[l], c].filter((v) => v != null);
      if (cl(i.vnode, l)) return c;
      const d = (m = r.value) == null ? void 0 : m[l];
      if (d !== void 0) return d;
      const f = (p = (h = n.value) == null ? void 0 : h.global) == null ? void 0 : p[l];
      return f !== void 0 ? f : c;
    }
  }), o = ue();
  Ht(() => {
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
    const u = ul(xn, i);
    ze(xn, P(() => o.value ? Tt((u == null ? void 0 : u.value) ?? {}, o.value) : u == null ? void 0 : u.value));
  }
  return {
    props: a,
    provideSubDefaults: s
  };
}
function sn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return It("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = F(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(i) {
      return Oa(i, t);
    }, e.props._as = String, e.setup = function(i, r) {
      const a = rr();
      if (!a.value) return e._setup(i, r);
      const {
        props: o,
        provideSubDefaults: s
      } = dl(i, i._as ?? e.name, a), u = e._setup(o, r);
      return s(), u;
    };
  }
  return e;
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? sn : Be)(t);
}
function fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Q()({
    name: n ?? _a(Ca(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...fe()
    },
    setup(i, r) {
      let {
        slots: a
      } = r;
      return () => {
        var o;
        return rn(i.tag, {
          class: [e, i.class],
          style: i.style
        }, (o = a.default) == null ? void 0 : o.call(a));
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
const Cn = "cubic-bezier(0.4, 0, 0.2, 1)", hl = "cubic-bezier(0.0, 0, 0.2, 1)", vl = "cubic-bezier(0.4, 0, 1, 1)";
function gl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? ml(e) : or(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function An(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (or(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function or(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function ml(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function pl(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function ae(e) {
  const t = Se("useRender");
  t.render = e;
}
function yl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Si(), i = z();
  if (Te) {
    const r = new ResizeObserver((a) => {
      a.length && (t === "content" ? i.value = a[0].contentRect : i.value = a[0].target.getBoundingClientRect());
    });
    et(() => {
      r.disconnect();
    }), te(() => n.el, (a, o) => {
      o && (r.unobserve(o), i.value = void 0), a && r.observe(a);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Ji(i)
  };
}
function Lt(e, t) {
  let n;
  function i() {
    n = Qi(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), i();
    }) : t());
  }
  te(e, (r) => {
    r && !n ? i() : r || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), We(() => {
    n == null || n.stop();
  });
}
function Ge(e, t, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const a = Se("useProxiedModel"), o = z(e[t] !== void 0 ? e[t] : n), s = St(t), l = s !== t ? P(() => {
    var d, f, g, m;
    return e[t], !!(((d = a.vnode.props) != null && d.hasOwnProperty(t) || (f = a.vnode.props) != null && f.hasOwnProperty(s)) && ((g = a.vnode.props) != null && g.hasOwnProperty(`onUpdate:${t}`) || (m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${s}`)));
  }) : P(() => {
    var d, f;
    return e[t], !!((d = a.vnode.props) != null && d.hasOwnProperty(t) && ((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)));
  });
  Lt(() => !l.value, () => {
    te(() => e[t], (d) => {
      o.value = d;
    });
  });
  const c = P({
    get() {
      const d = e[t];
      return i(l.value ? d : o.value);
    },
    set(d) {
      const f = r(d), g = he(l.value ? e[t] : o.value);
      g === f || i(g) === d || (o.value = f, a == null || a.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => l.value ? e[t] : o.value
  }), c;
}
const Ga = Symbol.for("vuetify:locale");
function bl() {
  const e = pe(Ga);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Vt() {
  const e = pe(Ga);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Ci = Symbol.for("vuetify:theme"), He = F({
  theme: String
}, "theme");
function qe(e) {
  Se("provideTheme");
  const t = pe(Ci, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = R(() => e.theme ?? t.name.value), i = R(() => t.themes.value[n.value]), r = R(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = {
    ...t,
    name: n,
    current: i,
    themeClasses: r
  };
  return ze(Ci, a), a;
}
function wl() {
  Se("useTheme");
  const e = pe(Ci, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const Xe = F({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), El = F({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Fe(e, t, n) {
  return Q()({
    name: e,
    props: El({
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
        const s = i.group ? er : xt;
        return rn(s, {
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
function ja(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Q()({
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
      const o = i.group ? er : xt;
      return () => rn(o, {
        name: i.disabled ? "" : e,
        css: !i.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...i.disabled ? {} : t
      }, a.default);
    }
  });
}
function za() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", i = Ca(`offset-${n}`);
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
const Sl = F({
  target: [Object, Array]
}, "v-dialog-transition"), ii = /* @__PURE__ */ new WeakMap(), _l = Q()({
  name: "VDialogTransition",
  props: Sl(),
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
        const o = Fr(e.target, r), {
          x: s,
          y: u,
          sx: l,
          sy: c,
          speed: d
        } = o;
        ii.set(r, o);
        const f = Bt(r, [{
          transform: `translate(${s}px, ${u}px) scale(${l}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: hl
        });
        (g = Hr(r)) == null || g.forEach((m) => {
          Bt(m, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Cn
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
        !ii.has(r) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = Fr(e.target, r) : o = ii.get(r);
        const {
          x: s,
          y: u,
          sx: l,
          sy: c,
          speed: d
        } = o;
        Bt(r, [{}, {
          transform: `translate(${s}px, ${u}px) scale(${l}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: vl
        }).finished.then(() => a()), (g = Hr(r)) == null || g.forEach((m) => {
          Bt(m, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Cn
          });
        });
      },
      onAfterLeave(r) {
        r.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? I(xt, ne({
      name: "dialog-transition"
    }, i, {
      css: !1
    }), n) : I(xt, {
      name: "dialog-transition"
    }, n);
  }
});
function Hr(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Fr(e, t) {
  const n = Va(e), i = ir(t), [r, a] = getComputedStyle(t).transformOrigin.split(" ").map((v) => parseFloat(v)), [o, s] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
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
const Wa = Fe("slide-y-transition");
Fe("slide-y-reverse-transition");
const xl = ja("expand-transition", za()), Cl = ja("expand-x-transition", za("", !0)), Al = F({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), lt = Q(!1)({
  name: "VDefaultsProvider",
  props: Al(),
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
    } = Cs(e);
    return ar(i, {
      reset: a,
      root: o,
      scoped: s,
      disabled: r
    }), () => {
      var u;
      return (u = n.default) == null ? void 0 : u.call(n);
    };
  }
}), Dt = F({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function $t(e) {
  return {
    dimensionStyles: P(() => {
      const n = {}, i = Z(e.height), r = Z(e.maxHeight), a = Z(e.maxWidth), o = Z(e.minHeight), s = Z(e.minWidth), u = Z(e.width);
      return i != null && (n.height = i), r != null && (n.maxHeight = r), a != null && (n.maxWidth = a), o != null && (n.minHeight = o), s != null && (n.minWidth = s), u != null && (n.width = u), n;
    })
  };
}
function Pl(e) {
  return {
    aspectStyles: P(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const qa = F({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...fe(),
  ...Dt()
}, "VResponsive"), Mr = Q()({
  name: "VResponsive",
  props: qa(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: i
    } = Pl(e), {
      dimensionStyles: r
    } = $t(e);
    return ae(() => {
      var a;
      return B("div", {
        class: W(["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class]),
        style: ee([r.value, e.style])
      }, [B("div", {
        class: "v-responsive__sizer",
        style: ee(i.value)
      }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && B("div", {
        class: W(["v-responsive__content", e.contentClass])
      }, [n.default()])]);
    }), {};
  }
});
function sr(e) {
  return nr(() => {
    const t = ut(e), n = [], i = {};
    if (t.background)
      if (xi(t.background)) {
        if (i.backgroundColor = t.background, !t.text && rl(t.background)) {
          const r = qt(t.background);
          if (r.a == null || r.a === 1) {
            const a = ll(r);
            i.color = a, i.caretColor = a;
          }
        }
      } else
        n.push(`bg-${t.background}`);
    return t.text && (xi(t.text) ? (i.color = t.text, i.caretColor = t.text) : n.push(`text-${t.text}`)), {
      colorClasses: n,
      colorStyles: i
    };
  });
}
function vt(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = sr(() => ({
    text: ut(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function _t(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = sr(() => ({
    background: ut(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
const mt = F({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  return {
    roundedClasses: P(() => {
      const i = bi(e) ? e.value : e.rounded, r = bi(e) ? e.value : e.tile, a = [];
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
const Un = F({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), ft = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: i,
    disabled: r,
    group: a,
    ...o
  } = e, {
    component: s = a ? er : xt,
    ...u
  } = wi(i) ? i : {};
  let l;
  return wi(i) ? l = ne(u, JSON.parse(JSON.stringify({
    disabled: r,
    group: a
  })), o) : l = ne({
    name: r || !i ? "" : i
  }, o), rn(s, l, n);
};
function Tl(e, t) {
  if (!tr) return;
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
    r && (!n.quiet || l.init) && (!n.once || c || l.init) && r(c, s, u), c && n.once ? Xa(e, t) : l.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Xa(e, t) {
  var i;
  const n = (i = e._observe) == null ? void 0 : i[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Pn = {
  mounted: Tl,
  unmounted: Xa
}, Bl = F({
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
  ...qa(),
  ...fe(),
  ...mt(),
  ...Un()
}, "VImg"), Il = Q()({
  name: "VImg",
  directives: {
    vIntersect: Pn
  },
  props: Bl(),
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
    } = _t(() => e.color), {
      roundedClasses: o
    } = pt(e), s = Se("VImg"), u = ue(""), l = z(), c = ue(e.eager ? "loading" : "idle"), d = ue(), f = ue(), g = P(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), m = P(() => g.value.aspect || d.value / f.value || 0);
    te(() => e.src, () => {
      h(c.value !== "idle");
    }), te(m, (S, _) => {
      !S && _ && l.value && w(l.value);
    }), an(() => h());
    function h(S) {
      if (!(e.eager && S) && !(tr && !S && !e.eager)) {
        if (c.value = "loading", g.value.lazySrc) {
          const _ = new Image();
          _.src = g.value.lazySrc, w(_, null);
        }
        g.value.src && Ue(() => {
          var _;
          n("loadstart", ((_ = l.value) == null ? void 0 : _.currentSrc) || g.value.src), setTimeout(() => {
            var O;
            if (!s.isUnmounted)
              if ((O = l.value) != null && O.complete) {
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
    et(() => {
      clearTimeout(y);
    });
    function w(S) {
      let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const O = () => {
        if (clearTimeout(y), s.isUnmounted) return;
        const {
          naturalHeight: L,
          naturalWidth: N
        } = S;
        L || N ? (d.value = N, f.value = L) : !S.complete && c.value === "loading" && _ != null ? y = window.setTimeout(O, _) : (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
      };
      O();
    }
    const C = R(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), E = () => {
      var O;
      if (!g.value.src || c.value === "idle") return null;
      const S = B("img", {
        class: W(["v-img__img", C.value]),
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
      }, null), _ = (O = i.sources) == null ? void 0 : O.call(i);
      return I(ft, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Je(_ ? B("picture", {
          class: "v-img__picture"
        }, [_, S]) : S, [[on, c.value === "loaded"]])]
      });
    }, A = () => I(ft, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && c.value !== "loaded" && B("img", {
        class: W(["v-img__img", "v-img__img--preload", C.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), x = () => i.placeholder ? I(ft, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(c.value === "loading" || c.value === "error" && !i.error) && B("div", {
        class: "v-img__placeholder"
      }, [i.placeholder()])]
    }) : null, k = () => i.error ? I(ft, {
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
    }, null) : null, H = ue(!1);
    {
      const S = te(m, (_) => {
        _ && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            H.value = !0;
          });
        }), S());
      });
    }
    return ae(() => {
      const S = Mr.filterProps(e);
      return Je(I(Mr, ne({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !H.value
        }, r.value, o.value, e.class],
        style: [{
          width: Z(e.width === "auto" ? d.value : e.width)
        }, a.value, e.style]
      }, S, {
        aspectRatio: m.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => B(Le, null, [I(E, null, null), I(A, null, null), I(D, null, null), I(x, null, null), I(k, null, null)]),
        default: i.default
      }), [[Pn, {
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
}), ln = F({
  border: [Boolean, Number, String]
}, "border");
function un(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  return {
    borderClasses: P(() => {
      const i = e.border;
      return i === !0 || i === "" ? `${t}--border` : typeof i == "string" || i === 0 ? String(i).split(" ").map((r) => `border-${r}`) : [];
    })
  };
}
const Gn = F({
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
function jn(e) {
  return {
    elevationClasses: R(() => {
      const n = bi(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
function Ol() {
  const e = ue(!1);
  return Ft(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: R(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Ji(e)
  };
}
const Ll = [null, "default", "comfortable", "compact"], Ut = F({
  density: {
    type: String,
    default: "default",
    validator: (e) => Ll.includes(e)
  }
}, "density");
function Gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  return {
    densityClasses: R(() => `${t}--density-${e.density}`)
  };
}
const Nl = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function lr(e, t) {
  return B(Le, null, [e && B("span", {
    key: "overlay",
    class: W(`${t}__overlay`)
  }, null), B("span", {
    key: "underlay",
    class: W(`${t}__underlay`)
  }, null)]);
}
const cn = F({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Nl.includes(e)
  }
}, "variant");
function ur(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  const n = R(() => {
    const {
      variant: a
    } = ut(e);
    return `${t}--variant-${a}`;
  }), {
    colorClasses: i,
    colorStyles: r
  } = sr(() => {
    const {
      variant: a,
      color: o
    } = ut(e);
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
const Za = F({
  baseColor: String,
  divided: Boolean,
  ...ln(),
  ...fe(),
  ...Ut(),
  ...Gn(),
  ...mt(),
  ...Xe(),
  ...He(),
  ...cn()
}, "VBtnGroup"), Vr = Q()({
  name: "VBtnGroup",
  props: Za(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: i
    } = qe(e), {
      densityClasses: r
    } = Gt(e), {
      borderClasses: a
    } = un(e), {
      elevationClasses: o
    } = jn(e), {
      roundedClasses: s
    } = pt(e);
    ar({
      VBtn: {
        height: "auto",
        baseColor: R(() => e.baseColor),
        color: R(() => e.color),
        density: R(() => e.density),
        flat: !0,
        variant: R(() => e.variant)
      }
    }), ae(() => I(e.tag, {
      class: W(["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, i.value, a.value, r.value, o.value, s.value, e.class]),
      style: ee(e.style)
    }, n));
  }
}), kl = F({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Rl = F({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Hl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const i = Se("useGroupItem");
  if (!i)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const r = Mt();
  ze(Symbol.for(`${t.description}:id`), r);
  const a = pe(t, null);
  if (!a) {
    if (!n) return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = R(() => e.value), s = P(() => !!(a.disabled.value || e.disabled));
  a.register({
    id: r,
    value: o,
    disabled: s
  }, i), et(() => {
    a.unregister(r);
  });
  const u = P(() => a.isSelected(r)), l = P(() => a.items.value[0].id === r), c = P(() => a.items.value[a.items.value.length - 1].id === r), d = P(() => u.value && [a.selectedClass.value, e.selectedClass]);
  return te(u, (f) => {
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
function Fl(e, t) {
  let n = !1;
  const i = Ot([]), r = Ge(e, "modelValue", [], (f) => f == null ? [] : Ya(i, Et(f)), (f) => {
    const g = Vl(i, f);
    return e.multiple ? g : g[0];
  }), a = Se("useGroup");
  function o(f, g) {
    const m = f, h = Symbol.for(`${t.description}:id`), v = Wt(h, a == null ? void 0 : a.vnode).indexOf(g);
    _e(m.value) == null && (m.value = v, m.useIndexAsValue = !0), v > -1 ? i.splice(v, 0, m) : i.push(m);
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
  Ft(() => {
    u();
  }), et(() => {
    n = !0;
  }), As(() => {
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
    if (e.multiple && It('This method is not supported when using "multiple" prop'), r.value.length) {
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
    getItemIndex: (f) => Ml(i, f)
  };
  return ze(t, d), d;
}
function Ml(e, t) {
  const n = Ya(e, [t]);
  return n.length ? e.findIndex((i) => i.id === n[0]) : -1;
}
function Ya(e, t) {
  const n = [];
  return t.forEach((i) => {
    const r = e.find((o) => Dn(i, o.value)), a = e[i];
    (r == null ? void 0 : r.value) != null ? n.push(r.id) : a != null && n.push(a.id);
  }), n;
}
function Vl(e, t) {
  const n = [];
  return t.forEach((i) => {
    const r = e.findIndex((a) => a.id === i);
    if (~r) {
      const a = e[r];
      n.push(a.value != null ? a.value : r);
    }
  }), n;
}
const Ka = Symbol.for("vuetify:v-btn-toggle"), Dl = F({
  ...Za(),
  ...kl()
}, "VBtnToggle");
Q()({
  name: "VBtnToggle",
  props: Dl(),
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
    } = Fl(e, Ka);
    return ae(() => {
      const u = Vr.filterProps(e);
      return I(Vr, ne({
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
const $l = {
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
}, Ul = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => rn(zl, {
    ...e,
    class: "mdi"
  })
}, Ee = [String, Function, Object, Array], Gl = Symbol.for("vuetify:icons"), zn = F({
  icon: {
    type: Ee
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), Dr = Q()({
  name: "VComponentIcon",
  props: zn(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const i = e.icon;
      return I(e.tag, null, {
        default: () => {
          var r;
          return [e.icon ? I(i, null, null) : (r = n.default) == null ? void 0 : r.call(n)];
        }
      });
    };
  }
}), jl = sn({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: zn(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => I(e.tag, ne(n, {
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
sn({
  name: "VLigatureIcon",
  props: zn(),
  setup(e) {
    return () => I(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const zl = sn({
  name: "VClassIcon",
  props: zn(),
  setup(e) {
    return () => I(e.tag, {
      class: W(e.icon)
    }, null);
  }
}), Wl = (e) => {
  const t = pe(Gl);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: P(() => {
      var u;
      const i = ut(e);
      if (!i) return {
        component: Dr
      };
      let r = i;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = (u = t.aliases) == null ? void 0 : u[r.slice(1)])), r || It(`Could not find aliased icon "${i}"`), Array.isArray(r))
        return {
          component: jl,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: Dr,
          icon: r
        };
      const a = Object.keys(t.sets).find((l) => typeof r == "string" && r.startsWith(`${l}:`)), o = a ? r.slice(a.length + 1) : r;
      return {
        component: t.sets[a ?? t.defaultSet].component,
        icon: o
      };
    })
  };
}, ql = ["x-small", "small", "default", "large", "x-large"], Wn = F({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function qn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  return nr(() => {
    const n = e.size;
    let i, r;
    return _n(ql, n) ? i = `${t}--size-${n}` : n && (r = {
      width: Z(n),
      height: Z(n)
    }), {
      sizeClasses: i,
      sizeStyles: r
    };
  });
}
const Xl = F({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Ee,
  opacity: [String, Number],
  ...fe(),
  ...Wn(),
  ...Xe({
    tag: "i"
  }),
  ...He()
}, "VIcon"), Ne = Q()({
  name: "VIcon",
  props: Xl(),
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const r = ue(), {
      themeClasses: a
    } = wl(), {
      iconData: o
    } = Wl(() => r.value || e.icon), {
      sizeClasses: s
    } = qn(e), {
      textColorClasses: u,
      textColorStyles: l
    } = vt(() => e.color);
    return ae(() => {
      var f, g;
      const c = (f = i.default) == null ? void 0 : f.call(i);
      c && (r.value = (g = ka(c).filter((m) => m.type === Ps && m.children && typeof m.children == "string")[0]) == null ? void 0 : g.children);
      const d = !!(n.onClick || n.onClickOnce);
      return I(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: W(["v-icon", "notranslate", a.value, s.value, u.value, {
          "v-icon--clickable": d,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: ee([{
          "--v-icon-opacity": e.opacity
        }, s.value ? void 0 : {
          fontSize: Z(e.size),
          height: Z(e.size),
          width: Z(e.size)
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
function Ja(e, t) {
  const n = z(), i = ue(!1);
  if (tr) {
    const r = new IntersectionObserver((a) => {
      i.value = !!a.find((o) => o.isIntersecting);
    }, t);
    et(() => {
      r.disconnect();
    }), te(n, (a, o) => {
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
const Zl = F({
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
  ...fe(),
  ...Wn(),
  ...Xe({
    tag: "div"
  }),
  ...He()
}, "VProgressCircular"), Qa = Q()({
  name: "VProgressCircular",
  props: Zl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = 20, r = 2 * Math.PI * i, a = z(), {
      themeClasses: o
    } = qe(e), {
      sizeClasses: s,
      sizeStyles: u
    } = qn(e), {
      textColorClasses: l,
      textColorStyles: c
    } = vt(() => e.color), {
      textColorClasses: d,
      textColorStyles: f
    } = vt(() => e.bgColor), {
      intersectionRef: g,
      isIntersecting: m
    } = Ja(), {
      resizeRef: h,
      contentRect: p
    } = yl(), v = R(() => Kt(parseFloat(e.modelValue), 0, 100)), b = R(() => Number(e.width)), y = R(() => u.value ? Number(e.size) : p.value ? p.value.width : Math.max(b.value, 32)), w = R(() => i / (1 - b.value / y.value) * 2), C = R(() => b.value / y.value * w.value), E = R(() => Z((100 - v.value) / 100 * r));
    return Ht(() => {
      g.value = a.value, h.value = a.value;
    }), ae(() => I(e.tag, {
      ref: a,
      class: W(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": m.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, s.value, l.value, e.class]),
      style: ee([u.value, c.value, e.style]),
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
        class: W(["v-progress-circular__underlay", d.value]),
        style: ee(f.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: i,
        "stroke-width": C.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), B("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: i,
        "stroke-width": C.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": E.value
      }, null)]), n.default && B("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: v.value
      })])]
    })), {};
  }
}), $r = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, eo = F({
  location: String
}, "location");
function to(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: i
  } = Vt();
  return {
    locationStyles: P(() => {
      if (!e.location) return {};
      const {
        side: a,
        align: o
      } = _i(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, i.value);
      function s(l) {
        return n ? n(l) : 0;
      }
      const u = {};
      return a !== "center" && (t ? u[$r[a]] = `calc(100% - ${s(a)}px)` : u[a] = 0), o !== "center" ? t ? u[$r[o]] = `calc(100% - ${s(o)}px)` : u[o] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{
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
const Yl = F({
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
  ...fe(),
  ...eo({
    location: "top"
  }),
  ...mt(),
  ...Xe(),
  ...He()
}, "VProgressLinear"), Kl = Q()({
  name: "VProgressLinear",
  props: Yl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var H;
    let {
      slots: n
    } = t;
    const i = Ge(e, "modelValue"), {
      isRtl: r,
      rtlClasses: a
    } = Vt(), {
      themeClasses: o
    } = qe(e), {
      locationStyles: s
    } = to(e), {
      textColorClasses: u,
      textColorStyles: l
    } = vt(() => e.color), {
      backgroundColorClasses: c,
      backgroundColorStyles: d
    } = _t(() => e.bgColor || e.color), {
      backgroundColorClasses: f,
      backgroundColorStyles: g
    } = _t(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: m,
      backgroundColorStyles: h
    } = _t(() => e.color), {
      roundedClasses: p
    } = pt(e), {
      intersectionRef: v,
      isIntersecting: b
    } = Ja(), y = P(() => parseFloat(e.max)), w = P(() => parseFloat(e.height)), C = P(() => Kt(parseFloat(e.bufferValue) / y.value * 100, 0, 100)), E = P(() => Kt(parseFloat(i.value) / y.value * 100, 0, 100)), A = P(() => r.value !== e.reverse), x = P(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), k = Te && ((H = window.matchMedia) == null ? void 0 : H.call(window, "(forced-colors: active)").matches);
    function D(S) {
      if (!v.value) return;
      const {
        left: _,
        right: O,
        width: L
      } = v.value.getBoundingClientRect(), N = A.value ? L - S.clientX + (O - L) : S.clientX - _;
      i.value = Math.round(N / L * y.value);
    }
    return ae(() => I(e.tag, {
      ref: v,
      class: W(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && b.value,
        "v-progress-linear--reverse": A.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, p.value, o.value, a.value, e.class]),
      style: ee([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? Z(w.value) : 0,
        "--v-progress-linear-height": Z(w.value),
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
        class: W(["v-progress-linear__stream", u.value]),
        style: {
          ...l.value,
          [A.value ? "left" : "right"]: Z(-w.value),
          borderTop: `${Z(w.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${Z(w.value / 4)})`,
          width: Z(100 - C.value, "%"),
          "--v-progress-linear-stream-to": Z(w.value * (A.value ? 1 : -1))
        }
      }, null), B("div", {
        class: W(["v-progress-linear__background", k ? void 0 : c.value]),
        style: ee([d.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), B("div", {
        class: W(["v-progress-linear__buffer", k ? void 0 : f.value]),
        style: ee([g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: Z(C.value, "%")
        }])
      }, null), I(xt, {
        name: x.value
      }, {
        default: () => [e.indeterminate ? B("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((S) => B("div", {
          key: S,
          class: W(["v-progress-linear__indeterminate", S, k ? void 0 : m.value]),
          style: ee(h.value)
        }, null))]) : B("div", {
          class: W(["v-progress-linear__determinate", k ? void 0 : m.value]),
          style: ee([h.value, {
            width: Z(E.value, "%")
          }])
        }, null)]
      }), n.default && B("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: E.value,
        buffer: C.value
      })])]
    })), {};
  }
}), no = F({
  loading: [Boolean, String]
}, "loader");
function io(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  return {
    loaderClasses: R(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Jl(e, t) {
  var i;
  let {
    slots: n
  } = t;
  return B("div", {
    class: W(`${e.name}__loader`)
  }, [((i = n.default) == null ? void 0 : i.call(n, {
    color: e.color,
    isActive: e.active
  })) || I(Kl, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Ql = ["static", "relative", "fixed", "absolute", "sticky"], eu = F({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Ql.includes(e)
    )
  }
}, "position");
function tu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  return {
    positionClasses: R(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function nu() {
  const e = Se("useRoute");
  return P(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function iu() {
  var e, t;
  return (t = (e = Se("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function ro(e, t) {
  var c, d;
  const n = Aa("RouterLink"), i = R(() => !!(e.href || e.to)), r = P(() => (i == null ? void 0 : i.value) || _r(t, "click") || _r(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = R(() => e.href);
    return {
      isLink: i,
      isClickable: r,
      href: f,
      linkProps: Ot({
        href: f
      })
    };
  }
  const a = n.useLink({
    to: R(() => e.to || ""),
    replace: R(() => e.replace)
  }), o = P(() => e.to ? a : void 0), s = nu(), u = P(() => {
    var f, g, m;
    return o.value ? e.exact ? s.value ? ((m = o.value.isExactActive) == null ? void 0 : m.value) && Dn(o.value.route.value.query, s.value.query) : ((g = o.value.isExactActive) == null ? void 0 : g.value) ?? !1 : ((f = o.value.isActive) == null ? void 0 : f.value) ?? !1 : !1;
  }), l = P(() => {
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
    linkProps: Ot({
      href: l,
      "aria-current": R(() => u.value ? "page" : void 0)
    })
  };
}
const ao = F({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let ri = !1;
function ru(e, t) {
  let n = !1, i, r;
  Te && (e != null && e.beforeEach) && (Ue(() => {
    window.addEventListener("popstate", a), i = e.beforeEach((o, s, u) => {
      ri ? n ? t(u) : u() : setTimeout(() => n ? t(u) : u()), ri = !0;
    }), r = e == null ? void 0 : e.afterEach(() => {
      ri = !1;
    });
  }), We(() => {
    window.removeEventListener("popstate", a), i == null || i(), r == null || r();
  }));
  function a(o) {
    var s;
    (s = o.state) != null && s.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function au(e, t) {
  te(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && Ue(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const Ai = Symbol("rippleStop"), ou = 80;
function Ur(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Pi(e) {
  return e.constructor.name === "TouchEvent";
}
function oo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const su = function(e, t) {
  var d;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = 0, r = 0;
  if (!oo(e)) {
    const f = t.getBoundingClientRect(), g = Pi(e) ? e.touches[e.touches.length - 1] : e;
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
}, Tn = {
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
    } = su(e, t, n), d = `${a * 2}px`;
    r.className = "v-ripple__animation", r.style.width = d, r.style.height = d, t.appendChild(i);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), Ur(r, `translate(${s}, ${u}) scale3d(${o},${o},${o})`), r.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), Ur(r, `translate(${l}, ${c}) scale3d(1,1,1)`);
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
function so(e) {
  return typeof e > "u" || !!e;
}
function Qt(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Ai])) {
    if (e[Ai] = !0, Pi(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || oo(e), n._ripple.class && (t.class = n._ripple.class), Pi(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Tn.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var i;
        (i = n == null ? void 0 : n._ripple) != null && i.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, ou);
    } else
      Tn.show(e, n, t);
  }
}
function Gr(e) {
  e[Ai] = !0;
}
function Re(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Re(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Tn.hide(t);
  }
}
function lo(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let en = !1;
function uo(e) {
  !en && (e.keyCode === wr.enter || e.keyCode === wr.space) && (en = !0, Qt(e));
}
function co(e) {
  en = !1, Re(e);
}
function fo(e) {
  en && (en = !1, Re(e));
}
function ho(e, t, n) {
  const {
    value: i,
    modifiers: r
  } = t, a = so(i);
  if (a || Tn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = r.center, e._ripple.circle = r.circle, wi(i) && i.class && (e._ripple.class = i.class), a && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", Gr, {
        passive: !0
      }), e.addEventListener("mousedown", Gr);
      return;
    }
    e.addEventListener("touchstart", Qt, {
      passive: !0
    }), e.addEventListener("touchend", Re, {
      passive: !0
    }), e.addEventListener("touchmove", lo, {
      passive: !0
    }), e.addEventListener("touchcancel", Re), e.addEventListener("mousedown", Qt), e.addEventListener("mouseup", Re), e.addEventListener("mouseleave", Re), e.addEventListener("keydown", uo), e.addEventListener("keyup", co), e.addEventListener("blur", fo), e.addEventListener("dragstart", Re, {
      passive: !0
    });
  } else !a && n && vo(e);
}
function vo(e) {
  e.removeEventListener("mousedown", Qt), e.removeEventListener("touchstart", Qt), e.removeEventListener("touchend", Re), e.removeEventListener("touchmove", lo), e.removeEventListener("touchcancel", Re), e.removeEventListener("mouseup", Re), e.removeEventListener("mouseleave", Re), e.removeEventListener("keydown", uo), e.removeEventListener("keyup", co), e.removeEventListener("dragstart", Re), e.removeEventListener("blur", fo);
}
function lu(e, t) {
  ho(e, t, !1);
}
function uu(e) {
  delete e._ripple, vo(e);
}
function cu(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = so(t.oldValue);
  ho(e, t, n);
}
const Bn = {
  mounted: lu,
  unmounted: uu,
  updated: cu
}, du = F({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Ka
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: Ee,
  appendIcon: Ee,
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
  ...ln(),
  ...fe(),
  ...Ut(),
  ...Dt(),
  ...Gn(),
  ...Rl(),
  ...no(),
  ...eo(),
  ...eu(),
  ...mt(),
  ...ao(),
  ...Wn(),
  ...Xe({
    tag: "button"
  }),
  ...He(),
  ...cn({
    variant: "elevated"
  })
}, "VBtn"), fu = Q()({
  name: "VBtn",
  props: du(),
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
    } = qe(e), {
      borderClasses: a
    } = un(e), {
      densityClasses: o
    } = Gt(e), {
      dimensionStyles: s
    } = $t(e), {
      elevationClasses: u
    } = jn(e), {
      loaderClasses: l
    } = io(e), {
      locationStyles: c
    } = to(e), {
      positionClasses: d
    } = tu(e), {
      roundedClasses: f
    } = pt(e), {
      sizeClasses: g,
      sizeStyles: m
    } = qn(e), h = Hl(e, e.symbol, !1), p = ro(e, n), v = P(() => {
      var H;
      return e.active !== void 0 ? e.active : p.isLink.value ? (H = p.isActive) == null ? void 0 : H.value : h == null ? void 0 : h.isSelected.value;
    }), b = R(() => v.value ? e.activeColor ?? e.color : e.color), y = P(() => {
      var S, _;
      return {
        color: (h == null ? void 0 : h.isSelected.value) && (!p.isLink.value || ((S = p.isActive) == null ? void 0 : S.value)) || !h || ((_ = p.isActive) == null ? void 0 : _.value) ? b.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: C,
      variantClasses: E
    } = ur(y), A = P(() => (h == null ? void 0 : h.disabled.value) || e.disabled), x = R(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = P(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function D(H) {
      var S;
      A.value || p.isLink.value && (H.metaKey || H.ctrlKey || H.shiftKey || H.button !== 0 || n.target === "_blank") || ((S = p.navigate) == null || S.call(p, H), h == null || h.toggle());
    }
    return au(p, h == null ? void 0 : h.select), ae(() => {
      const H = p.isLink.value ? "a" : e.tag, S = !!(e.prependIcon || i.prepend), _ = !!(e.appendIcon || i.append), O = !!(e.icon && e.icon !== !0);
      return Je(I(H, ne({
        type: H === "a" ? void 0 : "button",
        class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
          "v-btn--active": v.value,
          "v-btn--block": e.block,
          "v-btn--disabled": A.value,
          "v-btn--elevated": x.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, r.value, a.value, w.value, o.value, u.value, l.value, d.value, f.value, g.value, E.value, e.class],
        style: [C.value, s.value, c.value, m.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: A.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: D,
        value: k.value
      }, p.linkProps), {
        default: () => {
          var L;
          return [lr(!0, "v-btn"), !e.icon && S && B("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [i.prepend ? I(lt, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, i.prepend) : I(Ne, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), B("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!i.default && O ? I(Ne, {
            key: "content-icon",
            icon: e.icon
          }, null) : I(lt, {
            key: "content-defaults",
            disabled: !O,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var N;
              return [((N = i.default) == null ? void 0 : N.call(i)) ?? we(e.text)];
            }
          })]), !e.icon && _ && B("span", {
            key: "append",
            class: "v-btn__append"
          }, [i.append ? I(lt, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, i.append) : I(Ne, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && B("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((L = i.loader) == null ? void 0 : L.call(i)) ?? I(Qa, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Bn, !A.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), hu = F({
  start: Boolean,
  end: Boolean,
  icon: Ee,
  image: String,
  text: String,
  ...ln(),
  ...fe(),
  ...Ut(),
  ...mt(),
  ...Wn(),
  ...Xe(),
  ...He(),
  ...cn({
    variant: "flat"
  })
}, "VAvatar"), jr = Q()({
  name: "VAvatar",
  props: hu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: i
    } = qe(e), {
      borderClasses: r
    } = un(e), {
      colorClasses: a,
      colorStyles: o,
      variantClasses: s
    } = ur(e), {
      densityClasses: u
    } = Gt(e), {
      roundedClasses: l
    } = pt(e), {
      sizeClasses: c,
      sizeStyles: d
    } = qn(e);
    return ae(() => I(e.tag, {
      class: W(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, i.value, r.value, a.value, u.value, l.value, c.value, s.value, e.class]),
      style: ee([o.value, d.value, e.style])
    }, {
      default: () => [n.default ? I(lt, {
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
      }) : e.image ? I(Il, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? I(Ne, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, lr(!1, "v-avatar")]
    })), {};
  }
}), vu = F({
  text: String,
  onClick: Me(),
  ...fe(),
  ...He()
}, "VLabel"), gu = Q()({
  name: "VLabel",
  props: vu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ae(() => {
      var i;
      return B("label", {
        class: W(["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class]),
        style: ee(e.style),
        onClick: e.onClick
      }, [e.text, (i = n.default) == null ? void 0 : i.call(n)]);
    }), {};
  }
});
function go(e) {
  const {
    t
  } = bl();
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
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), Ha(u, new PointerEvent("click", d)));
    }
    const c = u && s ? t(`$vuetify.input.${s}`, e.label ?? "") : void 0;
    return I(Ne, ne({
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
const mu = F({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...fe(),
  ...Un({
    transition: {
      component: Wa,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), pu = Q()({
  name: "VMessages",
  props: mu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = P(() => Et(e.messages)), {
      textColorClasses: r,
      textColorStyles: a
    } = vt(() => e.color);
    return ae(() => I(ft, {
      transition: e.transition,
      tag: "div",
      class: W(["v-messages", r.value, e.class]),
      style: ee([a.value, e.style])
    }, {
      default: () => [e.active && i.value.map((o, s) => B("div", {
        class: "v-messages__message",
        key: `${s}-${i.value}`
      }, [n.message ? n.message({
        message: o
      }) : o]))]
    })), {};
  }
}), mo = F({
  focused: Boolean,
  "onUpdate:focused": Me()
}, "focus");
function po(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  const n = Ge(e, "focused"), i = R(() => ({
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
const yu = Symbol.for("vuetify:form");
function bu(e) {
  const t = pe(yu, null);
  return {
    ...t,
    isReadonly: P(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: P(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const wu = Symbol.for("vuetify:rules");
function Eu(e) {
  const t = pe(wu, null);
  return t ? t(e) : R(e);
}
const Su = F({
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
  ...mo()
}, "validation");
function _u(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt();
  const i = Ge(e, "modelValue"), r = P(() => e.validationValue === void 0 ? i.value : e.validationValue), a = bu(e), o = Eu(() => e.rules), s = z([]), u = ue(!0), l = P(() => !!(Et(i.value === "" ? null : i.value).length || Et(r.value === "" ? null : r.value).length)), c = P(() => {
    var w;
    return (w = e.errorMessages) != null && w.length ? Et(e.errorMessages).concat(s.value).slice(0, Math.max(0, Number(e.maxErrors))) : s.value;
  }), d = P(() => {
    var E;
    let w = (e.validateOn ?? ((E = a.validateOn) == null ? void 0 : E.value)) || "input";
    w === "lazy" && (w = "input lazy"), w === "eager" && (w = "input eager");
    const C = new Set((w == null ? void 0 : w.split(" ")) ?? []);
    return {
      input: C.has("input"),
      blur: C.has("blur") || C.has("input") || C.has("invalid-input"),
      invalidInput: C.has("invalid-input"),
      lazy: C.has("lazy"),
      eager: C.has("eager")
    };
  }), f = P(() => {
    var w;
    return e.error || (w = e.errorMessages) != null && w.length ? !1 : e.rules.length ? u.value ? s.value.length || d.value.lazy ? null : !0 : !s.value.length : !0;
  }), g = ue(!1), m = P(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: l.value,
    [`${t}--disabled`]: a.isDisabled.value,
    [`${t}--readonly`]: a.isReadonly.value
  })), h = Se("validation"), p = P(() => e.name ?? _e(n));
  an(() => {
    var w;
    (w = a.register) == null || w.call(a, {
      id: p.value,
      vm: h,
      validate: y,
      reset: v,
      resetValidation: b
    });
  }), et(() => {
    var w;
    (w = a.unregister) == null || w.call(a, p.value);
  }), Ft(async () => {
    var w;
    d.value.lazy || await y(!d.value.eager), (w = a.update) == null || w.call(a, p.value, f.value, c.value);
  }), Lt(() => d.value.input || d.value.invalidInput && f.value === !1, () => {
    te(r, () => {
      if (r.value != null)
        y();
      else if (e.focused) {
        const w = te(() => e.focused, (C) => {
          C || y(), w();
        });
      }
    });
  }), Lt(() => d.value.blur, () => {
    te(() => e.focused, (w) => {
      w || y();
    });
  }), te([f, c], () => {
    var w;
    (w = a.update) == null || w.call(a, p.value, f.value, c.value);
  });
  async function v() {
    i.value = null, await Ue(), await b();
  }
  async function b() {
    u.value = !0, d.value.lazy ? s.value = [] : await y(!d.value.eager);
  }
  async function y() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const C = [];
    g.value = !0;
    for (const E of o.value) {
      if (C.length >= Number(e.maxErrors ?? 1))
        break;
      const x = await (typeof E == "function" ? E : () => E)(r.value);
      if (x !== !0) {
        if (x !== !1 && typeof x != "string") {
          console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        C.push(x || "");
      }
    }
    return s.value = C, g.value = !1, u.value = w, s.value;
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
const yo = F({
  id: String,
  appendIcon: Ee,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: Ee,
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
  "onClick:prepend": Me(),
  "onClick:append": Me(),
  ...fe(),
  ...Ut(),
  ...Oa(Dt(), ["maxWidth", "minWidth", "width"]),
  ...He(),
  ...Su()
}, "VInput"), zr = Q()({
  name: "VInput",
  props: {
    ...yo()
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
    } = Gt(e), {
      dimensionStyles: o
    } = $t(e), {
      themeClasses: s
    } = qe(e), {
      rtlClasses: u
    } = Vt(), {
      InputIcon: l
    } = go(e), c = Mt(), d = P(() => e.id || `input-${c}`), f = P(() => `${d.value}-messages`), {
      errorMessages: g,
      isDirty: m,
      isDisabled: h,
      isReadonly: p,
      isPristine: v,
      isValid: b,
      isValidating: y,
      reset: w,
      resetValidation: C,
      validate: E,
      validationClasses: A
    } = _u(e, "v-input", d), x = P(() => ({
      id: d,
      messagesId: f,
      isDirty: m,
      isDisabled: h,
      isReadonly: p,
      isPristine: v,
      isValid: b,
      isValidating: y,
      reset: w,
      resetValidation: C,
      validate: E
    })), k = R(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), D = R(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? k.value : e.iconColor;
    }), H = P(() => {
      var S;
      return (S = e.errorMessages) != null && S.length || !v.value && g.value.length ? g.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return ae(() => {
      var N, U, Y, oe;
      const S = !!(i.prepend || e.prependIcon), _ = !!(i.append || e.appendIcon), O = H.value.length > 0, L = !e.hideDetails || e.hideDetails === "auto" && (O || !!i.details);
      return B("div", {
        class: W(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, a.value, s.value, u.value, A.value, e.class]),
        style: ee([o.value, e.style])
      }, [S && B("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(N = i.prepend) == null ? void 0 : N.call(i, x.value), e.prependIcon && I(l, {
        key: "prepend-icon",
        name: "prepend",
        color: D.value
      }, null)]), i.default && B("div", {
        class: "v-input__control"
      }, [(U = i.default) == null ? void 0 : U.call(i, x.value)]), _ && B("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && I(l, {
        key: "append-icon",
        name: "append",
        color: D.value
      }, null), (Y = i.append) == null ? void 0 : Y.call(i, x.value)]), L && B("div", {
        id: f.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [I(pu, {
        active: O,
        messages: H.value
      }, {
        message: i.message
      }), (oe = i.details) == null ? void 0 : oe.call(i, x.value)])]);
    }), {
      reset: w,
      resetValidation: C,
      validate: E,
      isValid: b,
      errorMessages: g
    };
  }
}), xu = Symbol.for("vuetify:display");
function Cu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tt();
  const n = pe(xu);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const i = P(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), r = R(() => t ? {
    [`${t}--mobile`]: i.value
  } : {});
  return {
    ...n,
    displayClasses: r,
    mobile: i
  };
}
const Ti = Symbol.for("vuetify:list");
function bo() {
  const e = pe(Ti, {
    hasPrepend: ue(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: ue(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return ze(Ti, t), e;
}
function wo() {
  return pe(Ti, null);
}
const cr = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: i,
        value: r,
        activated: a
      } = n;
      return i = he(i), e && !r && a.size === 1 && a.has(i) || (r ? a.add(i) : a.delete(i)), a;
    },
    in: (n, i, r) => {
      let a = /* @__PURE__ */ new Set();
      if (n != null)
        for (const o of Et(n))
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
}, Eo = (e) => {
  const t = cr(e);
  return {
    activate: (i) => {
      let {
        activated: r,
        id: a,
        ...o
      } = i;
      a = he(a);
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
        const s = Et(i);
        s.length && (o = t.in(s.slice(0, 1), r, a));
      }
      return o;
    },
    out: (i, r, a) => t.out(i, r, a)
  };
}, Au = (e) => {
  const t = cr(e);
  return {
    activate: (i) => {
      let {
        id: r,
        activated: a,
        children: o,
        ...s
      } = i;
      return r = he(r), o.has(r) ? a : t.activate({
        id: r,
        activated: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, Pu = (e) => {
  const t = Eo(e);
  return {
    activate: (i) => {
      let {
        id: r,
        activated: a,
        children: o,
        ...s
      } = i;
      return r = he(r), o.has(r) ? a : t.activate({
        id: r,
        activated: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, Tu = {
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
}, So = {
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
}, Bu = {
  open: So.open,
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
}, dr = (e) => {
  const t = {
    select: (n) => {
      let {
        id: i,
        value: r,
        selected: a
      } = n;
      if (i = he(i), e && !r) {
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
}, _o = (e) => {
  const t = dr(e);
  return {
    select: (i) => {
      let {
        selected: r,
        id: a,
        ...o
      } = i;
      a = he(a);
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
}, Iu = (e) => {
  const t = dr(e);
  return {
    select: (i) => {
      let {
        id: r,
        selected: a,
        children: o,
        ...s
      } = i;
      return r = he(r), o.has(r) ? a : t.select({
        id: r,
        selected: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, Ou = (e) => {
  const t = _o(e);
  return {
    select: (i) => {
      let {
        id: r,
        selected: a,
        children: o,
        ...s
      } = i;
      return r = he(r), o.has(r) ? a : t.select({
        id: r,
        selected: a,
        children: o,
        ...s
      });
    },
    in: t.in,
    out: t.out
  };
}, xo = (e) => {
  const t = {
    select: (n) => {
      let {
        id: i,
        value: r,
        selected: a,
        children: o,
        parents: s
      } = n;
      i = he(i);
      const u = new Map(a), l = [i];
      for (; l.length; ) {
        const d = l.shift();
        a.set(he(d), r ? "on" : "off"), o.has(d) && l.push(...o.get(d));
      }
      let c = he(s.get(i));
      for (; c; ) {
        const d = o.get(c), f = d.every((m) => a.get(he(m)) === "on"), g = d.every((m) => !a.has(he(m)) || a.get(he(m)) === "off");
        a.set(c, f ? "on" : g ? "off" : "indeterminate"), c = he(s.get(c));
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
}, Lu = (e) => {
  const t = xo(e);
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
}, tn = Symbol.for("vuetify:nested"), Co = {
  id: ue(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: z(/* @__PURE__ */ new Map()),
    children: z(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: z(!1),
    selectable: z(!1),
    opened: z(/* @__PURE__ */ new Set()),
    activated: z(/* @__PURE__ */ new Set()),
    selected: z(/* @__PURE__ */ new Map()),
    selectedValues: z([]),
    getPath: () => []
  }
}, Nu = F({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), ku = (e) => {
  let t = !1;
  const n = z(/* @__PURE__ */ new Map()), i = z(/* @__PURE__ */ new Map()), r = Ge(e, "opened", e.opened, (m) => new Set(m), (m) => [...m.values()]), a = P(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Au(e.mandatory);
      case "single-leaf":
        return Pu(e.mandatory);
      case "independent":
        return cr(e.mandatory);
      case "single-independent":
      default:
        return Eo(e.mandatory);
    }
  }), o = P(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Ou(e.mandatory);
      case "leaf":
        return Iu(e.mandatory);
      case "independent":
        return dr(e.mandatory);
      case "single-independent":
        return _o(e.mandatory);
      case "trunk":
        return Lu(e.mandatory);
      case "classic":
      default:
        return xo(e.mandatory);
    }
  }), s = P(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Bu;
      case "single":
        return Tu;
      case "multiple":
      default:
        return So;
    }
  }), u = Ge(e, "activated", e.activated, (m) => a.value.in(m, n.value, i.value), (m) => a.value.out(m, n.value, i.value)), l = Ge(e, "selected", e.selected, (m) => o.value.in(m, n.value, i.value), (m) => o.value.out(m, n.value, i.value));
  et(() => {
    t = !0;
  });
  function c(m) {
    const h = [];
    let p = m;
    for (; p != null; )
      h.unshift(p), p = i.value.get(p);
    return h;
  }
  const d = Se("nested"), f = /* @__PURE__ */ new Set(), g = {
    id: ue(),
    root: {
      opened: r,
      activatable: R(() => e.activatable),
      selectable: R(() => e.selectable),
      activated: u,
      selected: l,
      selectedValues: P(() => {
        const m = [];
        for (const [h, p] of l.value.entries())
          p === "on" && m.push(h);
        return m;
      }),
      register: (m, h, p) => {
        if (f.has(m)) {
          const v = c(m).map(String).join(" -> "), b = c(h).concat(m).map(String).join(" -> ");
          Da(`Multiple nodes with the same ID
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
  return ze(tn, g), g.root;
}, Ao = (e, t) => {
  const n = pe(tn, Co), i = Symbol("nested item"), r = P(() => ut(e) ?? i), a = {
    ...n,
    id: r,
    open: (o, s) => n.root.open(r.value, o, s),
    openOnSelect: (o, s) => n.root.openOnSelect(r.value, o, s),
    isOpen: P(() => n.root.opened.value.has(r.value)),
    parent: P(() => n.root.parents.value.get(r.value)),
    activate: (o, s) => n.root.activate(r.value, o, s),
    isActivated: P(() => n.root.activated.value.has(he(r.value))),
    select: (o, s) => n.root.select(r.value, o, s),
    isSelected: P(() => n.root.selected.value.get(he(r.value)) === "on"),
    isIndeterminate: P(() => n.root.selected.value.get(he(r.value)) === "indeterminate"),
    isLeaf: P(() => !n.root.children.value.get(r.value)),
    isGroupActivator: n.isGroupActivator
  };
  return an(() => {
    !n.isGroupActivator && n.root.register(r.value, n.id.value, t);
  }), et(() => {
    !n.isGroupActivator && n.root.unregister(r.value);
  }), t && ze(tn, a), a;
}, Ru = () => {
  const e = pe(tn, Co);
  ze(tn, {
    ...e,
    isGroupActivator: !0
  });
}, Hu = sn({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ru(), () => {
      var i;
      return (i = n.default) == null ? void 0 : i.call(n);
    };
  }
}), Fu = F({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: Ee,
    default: "$collapse"
  },
  expandIcon: {
    type: Ee,
    default: "$expand"
  },
  prependIcon: Ee,
  appendIcon: Ee,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...fe(),
  ...Xe()
}, "VListGroup"), Wr = Q()({
  name: "VListGroup",
  props: Fu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: i,
      open: r,
      id: a
    } = Ao(() => e.value, !0), o = P(() => `v-list-group--id-${String(a.value)}`), s = wo(), {
      isBooted: u
    } = Ol();
    function l(g) {
      var m;
      g.stopPropagation(), !["INPUT", "TEXTAREA"].includes((m = g.target) == null ? void 0 : m.tagName) && r(!i.value, g);
    }
    const c = P(() => ({
      onClick: l,
      class: "v-list-group__header",
      id: o.value
    })), d = P(() => i.value ? e.collapseIcon : e.expandIcon), f = P(() => ({
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
    return ae(() => I(e.tag, {
      class: W(["v-list-group", {
        "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": i.value
      }, e.class]),
      style: ee(e.style)
    }, {
      default: () => [n.activator && I(lt, {
        defaults: f.value
      }, {
        default: () => [I(Hu, null, {
          default: () => [n.activator({
            props: c.value,
            isOpen: i.value
          })]
        })]
      }), I(ft, {
        transition: {
          component: xl
        },
        disabled: !u.value
      }, {
        default: () => {
          var g;
          return [Je(B("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(g = n.default) == null ? void 0 : g.call(n)]), [[on, i.value]])];
        }
      })]
    })), {
      isOpen: i
    };
  }
}), Mu = F({
  opacity: [Number, String],
  ...fe(),
  ...Xe()
}, "VListItemSubtitle"), Vu = Q()({
  name: "VListItemSubtitle",
  props: Mu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ae(() => I(e.tag, {
      class: W(["v-list-item-subtitle", e.class]),
      style: ee([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), Du = fl("v-list-item-title"), $u = F({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: Ee,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: Ee,
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
  onClick: Me(),
  onClickOnce: Me(),
  ...ln(),
  ...fe(),
  ...Ut(),
  ...Dt(),
  ...Gn(),
  ...mt(),
  ...ao(),
  ...Xe(),
  ...He(),
  ...cn({
    variant: "text"
  })
}, "VListItem"), Bi = Q()({
  name: "VListItem",
  directives: {
    vRipple: Bn
  },
  props: $u(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: i,
      emit: r
    } = t;
    const a = ro(e, n), o = P(() => e.value === void 0 ? a.href.value : e.value), {
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
    } = Ao(o, !1), b = wo(), y = P(() => {
      var j;
      return e.active !== !1 && (e.active || ((j = a.isActive) == null ? void 0 : j.value) || (m.activatable.value ? u.value : d.value));
    }), w = R(() => e.link !== !1 && a.isLink.value), C = P(() => !!b && (m.selectable.value || m.activatable.value || e.value != null)), E = P(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || C.value)), A = R(() => e.rounded || e.nav), x = R(() => e.color ?? e.activeColor), k = R(() => ({
      color: y.value ? x.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    te(() => {
      var j;
      return (j = a.isActive) == null ? void 0 : j.value;
    }, (j) => {
      j && D();
    }), an(() => {
      var j;
      (j = a.isActive) != null && j.value && D();
    });
    function D() {
      h.value != null && m.open(h.value, !0), p(!0);
    }
    const {
      themeClasses: H
    } = qe(e), {
      borderClasses: S
    } = un(e), {
      colorClasses: _,
      colorStyles: O,
      variantClasses: L
    } = ur(k), {
      densityClasses: N
    } = Gt(e), {
      dimensionStyles: U
    } = $t(e), {
      elevationClasses: Y
    } = jn(e), {
      roundedClasses: oe
    } = pt(A), G = R(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), de = P(() => ({
      isActive: y.value,
      select: l,
      isOpen: c.value,
      isSelected: d.value,
      isIndeterminate: f.value
    }));
    function Ae(j) {
      var ce, Ie;
      r("click", j), !["INPUT", "TEXTAREA"].includes((ce = j.target) == null ? void 0 : ce.tagName) && E.value && ((Ie = a.navigate) == null || Ie.call(a, j), !g && (m.activatable.value ? s(!u.value, j) : (m.selectable.value || e.value != null) && l(!d.value, j)));
    }
    function se(j) {
      const ce = j.target;
      ["INPUT", "TEXTAREA"].includes(ce.tagName) || (j.key === "Enter" || j.key === " ") && (j.preventDefault(), j.target.dispatchEvent(new MouseEvent("click", j)));
    }
    return ae(() => {
      const j = w.value ? "a" : e.tag, ce = i.title || e.title != null, Ie = i.subtitle || e.subtitle != null, q = !!(e.appendAvatar || e.appendIcon), ve = !!(q || i.append), ye = !!(e.prependAvatar || e.prependIcon), De = !!(ye || i.prepend);
      return b == null || b.updateHasPrepend(De), e.activeColor && il("active-color", ["color", "base-color"]), Je(I(j, ne({
        class: ["v-list-item", {
          "v-list-item--active": y.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": E.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !De && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && y.value
        }, H.value, S.value, _.value, N.value, Y.value, G.value, oe.value, L.value, e.class],
        style: [O.value, U.value, e.style],
        tabindex: E.value ? b ? -2 : 0 : void 0,
        "aria-selected": C.value ? m.activatable.value ? u.value : m.selectable.value ? d.value : y.value : void 0,
        onClick: Ae,
        onKeydown: E.value && !w.value && se
      }, a.linkProps), {
        default: () => {
          var nt;
          return [lr(E.value || y.value, "v-list-item"), De && B("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [i.prepend ? I(lt, {
            key: "prepend-defaults",
            disabled: !ye,
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
              var Oe;
              return [(Oe = i.prepend) == null ? void 0 : Oe.call(i, de.value)];
            }
          }) : B(Le, null, [e.prependAvatar && I(jr, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && I(Ne, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), B("div", {
            class: "v-list-item__spacer"
          }, null)]), B("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [ce && I(Du, {
            key: "title"
          }, {
            default: () => {
              var Oe;
              return [((Oe = i.title) == null ? void 0 : Oe.call(i, {
                title: e.title
              })) ?? we(e.title)];
            }
          }), Ie && I(Vu, {
            key: "subtitle"
          }, {
            default: () => {
              var Oe;
              return [((Oe = i.subtitle) == null ? void 0 : Oe.call(i, {
                subtitle: e.subtitle
              })) ?? we(e.subtitle)];
            }
          }), (nt = i.default) == null ? void 0 : nt.call(i, de.value)]), ve && B("div", {
            key: "append",
            class: "v-list-item__append"
          }, [i.append ? I(lt, {
            key: "append-defaults",
            disabled: !q,
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
              var Oe;
              return [(Oe = i.append) == null ? void 0 : Oe.call(i, de.value)];
            }
          }) : B(Le, null, [e.appendIcon && I(Ne, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && I(jr, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), B("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[Bn, E.value && e.ripple]]);
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
}), Uu = F({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...fe(),
  ...Xe()
}, "VListSubheader"), Gu = Q()({
  name: "VListSubheader",
  props: Uu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: i,
      textColorStyles: r
    } = vt(() => e.color);
    return ae(() => {
      const a = !!(n.default || e.title);
      return I(e.tag, {
        class: W(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, i.value, e.class]),
        style: ee([{
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
}), ju = F({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...fe(),
  ...He()
}, "VDivider"), zu = Q()({
  name: "VDivider",
  props: ju(),
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const {
      themeClasses: r
    } = qe(e), {
      textColorClasses: a,
      textColorStyles: o
    } = vt(() => e.color), s = P(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = Z(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Z(e.thickness)), u;
    });
    return ae(() => {
      const u = B("hr", {
        class: W([{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, r.value, a.value, e.class]),
        style: ee([s.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return i.default ? B("div", {
        class: W(["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }])
      }, [u, B("div", {
        class: "v-divider__content"
      }, [i.default()]), u]) : u;
    }), {};
  }
}), Wu = F({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Po = Q()({
  name: "VListChildren",
  props: Wu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return bo(), () => {
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
          })) ?? I(zu, s, null);
        if (u === "subheader")
          return ((g = n.subheader) == null ? void 0 : g.call(n, {
            props: s
          })) ?? I(Gu, s, null);
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
        }, d = Wr.filterProps(s);
        return o ? I(Wr, ne({
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
            }) : I(Bi, p, c);
          },
          default: () => I(Po, {
            items: o,
            returnObject: e.returnObject
          }, n)
        }) : n.item ? n.item({
          props: s
        }) : I(Bi, ne(s, {
          value: e.returnObject ? l : s.value
        }), c);
      }));
    };
  }
}), qu = F({
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
function Xu(e, t) {
  const n = jt(t, e.itemType, "item"), i = Gs(t) ? t : jt(t, e.itemTitle), r = jt(t, e.itemValue, void 0), a = jt(t, e.itemChildren), o = e.itemProps === !0 ? $n(t, ["children"]) : jt(t, e.itemProps), s = {
    title: i,
    value: r,
    ...o
  };
  return {
    type: n,
    title: s.title,
    value: s.value,
    props: s,
    children: n === "item" && a ? To(e, a) : void 0,
    raw: t
  };
}
function To(e, t) {
  const n = [];
  for (const i of t)
    n.push(Xu(e, i));
  return n;
}
function Zu(e) {
  return {
    items: P(() => To(e, e.items))
  };
}
const Yu = F({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: Ee,
  collapseIcon: Ee,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Me(),
  "onClick:select": Me(),
  "onUpdate:opened": Me(),
  ...Nu({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...ln(),
  ...fe(),
  ...Ut(),
  ...Dt(),
  ...Gn(),
  itemType: {
    type: String,
    default: "type"
  },
  ...qu(),
  ...mt(),
  ...Xe(),
  ...He(),
  ...cn({
    variant: "text"
  })
}, "VList"), Ku = Q()({
  name: "VList",
  props: Yu(),
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
    } = Zu(e), {
      themeClasses: r
    } = qe(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: o
    } = _t(() => e.bgColor), {
      borderClasses: s
    } = un(e), {
      densityClasses: u
    } = Gt(e), {
      dimensionStyles: l
    } = $t(e), {
      elevationClasses: c
    } = jn(e), {
      roundedClasses: d
    } = pt(e), {
      children: f,
      open: g,
      parents: m,
      select: h,
      getPath: p
    } = ku(e), v = R(() => e.lines ? `v-list--${e.lines}-line` : void 0), b = R(() => e.activeColor), y = R(() => e.baseColor), w = R(() => e.color);
    bo(), ar({
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
    const C = ue(!1), E = z();
    function A(_) {
      C.value = !0;
    }
    function x(_) {
      C.value = !1;
    }
    function k(_) {
      var O;
      !C.value && !(_.relatedTarget && ((O = E.value) != null && O.contains(_.relatedTarget))) && S();
    }
    function D(_) {
      const O = _.target;
      if (!(!E.value || ["INPUT", "TEXTAREA"].includes(O.tagName))) {
        if (_.key === "ArrowDown")
          S("next");
        else if (_.key === "ArrowUp")
          S("prev");
        else if (_.key === "Home")
          S("first");
        else if (_.key === "End")
          S("last");
        else
          return;
        _.preventDefault();
      }
    }
    function H(_) {
      C.value = !0;
    }
    function S(_) {
      if (E.value)
        return Yt(E.value, _);
    }
    return ae(() => I(e.tag, {
      ref: E,
      class: W(["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, r.value, a.value, s.value, u.value, c.value, v.value, d.value, e.class]),
      style: ee([o.value, l.value, e.style]),
      tabindex: e.disabled ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: A,
      onFocusout: x,
      onFocus: k,
      onKeydown: D,
      onMousedown: H
    }, {
      default: () => [I(Po, {
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
function ai(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Ju(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function qr(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: i
    } = e, r = i === "left" ? 0 : i === "center" ? t.width / 2 : i === "right" ? t.width : i, a = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return ai({
      x: r,
      y: a
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: i
    } = e, r = n === "left" ? 0 : n === "right" ? t.width : n, a = i === "top" ? 0 : i === "center" ? t.height / 2 : i === "bottom" ? t.height : i;
    return ai({
      x: r,
      y: a
    }, t);
  }
  return ai({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Bo = {
  static: tc,
  // specific viewport position, usually centered
  connected: ic
  // connected to a certain element
}, Qu = F({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Bo
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
function ec(e, t) {
  const n = z({}), i = z();
  Te && Lt(() => !!(t.isActive.value && e.locationStrategy), (s) => {
    var u, l;
    te(() => e.locationStrategy, s), We(() => {
      window.removeEventListener("resize", r), visualViewport == null || visualViewport.removeEventListener("resize", a), visualViewport == null || visualViewport.removeEventListener("scroll", o), i.value = void 0;
    }), window.addEventListener("resize", r, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("resize", a, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("scroll", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? i.value = (u = e.locationStrategy(t, e, n)) == null ? void 0 : u.updateLocation : i.value = (l = Bo[e.locationStrategy](t, e, n)) == null ? void 0 : l.updateLocation;
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
function tc() {
}
function nc(e, t) {
  const n = ir(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function ic(e, t, n) {
  (Array.isArray(e.target.value) || pl(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: r,
    preferredOrigin: a
  } = nr(() => {
    const v = _i(t.location, e.isRtl.value), b = t.origin === "overlap" ? v : t.origin === "auto" ? ti(v) : _i(t.origin, e.isRtl.value);
    return v.side === b.side && v.align === ni(b).align ? {
      preferredAnchor: Cr(v),
      preferredOrigin: Cr(b)
    } : {
      preferredAnchor: v,
      preferredOrigin: b
    };
  }), [o, s, u, l] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => P(() => {
    const b = parseFloat(t[v]);
    return isNaN(b) ? 1 / 0 : b;
  })), c = P(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = !1, f = -1;
  const g = new Vs(4), m = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((b) => {
      b !== f && g.clear(), requestAnimationFrame((y) => {
        f = y;
      });
    }), g.isFull) {
      const b = g.values();
      if (Dn(b.at(-1), b.at(-3)))
        return;
    }
    const v = p();
    v && g.push(v.flipped);
  });
  te([e.target, e.contentEl], (v, b) => {
    let [y, w] = v, [C, E] = b;
    C && !Array.isArray(C) && m.unobserve(C), y && !Array.isArray(y) && m.observe(y), E && m.unobserve(E), w && m.observe(w);
  }, {
    immediate: !0
  }), We(() => {
    m.disconnect();
  });
  let h = new Ke({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  function p() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (h = Va(e.target.value));
    const v = nc(e.contentEl.value, e.isRtl.value), b = An(e.contentEl.value), y = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = b.reduce((_, O) => {
      const L = zs(O);
      return _ ? new Ke({
        x: Math.max(_.left, L.left),
        y: Math.max(_.top, L.top),
        width: Math.min(_.right, L.right) - Math.max(_.left, L.left),
        height: Math.min(_.bottom, L.bottom) - Math.max(_.top, L.top)
      }) : L;
    }, void 0);
    w.x += y, w.y += y, w.width -= y * 2, w.height -= y * 2;
    let C = {
      anchor: r.value,
      origin: a.value
    };
    function E(_) {
      const O = new Ke(v), L = qr(_.anchor, h), N = qr(_.origin, O);
      let {
        x: U,
        y: Y
      } = Ju(L, N);
      switch (_.anchor.side) {
        case "top":
          Y -= c.value[0];
          break;
        case "bottom":
          Y += c.value[0];
          break;
        case "left":
          U -= c.value[0];
          break;
        case "right":
          U += c.value[0];
          break;
      }
      switch (_.anchor.align) {
        case "top":
          Y -= c.value[1];
          break;
        case "bottom":
          Y += c.value[1];
          break;
        case "left":
          U -= c.value[1];
          break;
        case "right":
          U += c.value[1];
          break;
      }
      return O.x += U, O.y += Y, O.width = Math.min(O.width, u.value), O.height = Math.min(O.height, l.value), {
        overflows: Pr(O, w),
        x: U,
        y: Y
      };
    }
    let A = 0, x = 0;
    const k = {
      x: 0,
      y: 0
    }, D = {
      x: !1,
      y: !1
    };
    let H = -1;
    for (; ; ) {
      if (H++ > 10) {
        Da("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _,
        y: O,
        overflows: L
      } = E(C);
      A += _, x += O, v.x += _, v.y += O;
      {
        const N = Ar(C.anchor), U = L.x.before || L.x.after, Y = L.y.before || L.y.after;
        let oe = !1;
        if (["x", "y"].forEach((G) => {
          if (G === "x" && U && !D.x || G === "y" && Y && !D.y) {
            const de = {
              anchor: {
                ...C.anchor
              },
              origin: {
                ...C.origin
              }
            }, Ae = G === "x" ? N === "y" ? ni : ti : N === "y" ? ti : ni;
            de.anchor = Ae(de.anchor), de.origin = Ae(de.origin);
            const {
              overflows: se
            } = E(de);
            (se[G].before <= L[G].before && se[G].after <= L[G].after || se[G].before + se[G].after < (L[G].before + L[G].after) / 2) && (C = de, oe = D[G] = !0);
          }
        }), oe) continue;
      }
      L.x.before && (A += L.x.before, v.x += L.x.before), L.x.after && (A -= L.x.after, v.x -= L.x.after), L.y.before && (x += L.y.before, v.y += L.y.before), L.y.after && (x -= L.y.after, v.y -= L.y.after);
      {
        const N = Pr(v, w);
        k.x = w.width - N.x.before - N.x.after, k.y = w.height - N.y.before - N.y.after, A += N.x.before, v.x += N.x.before, x += N.y.before, v.y += N.y.before;
      }
      break;
    }
    const S = Ar(C.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${C.anchor.side} ${C.anchor.align}`,
      transformOrigin: `${C.origin.side} ${C.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: Z(oi(x)),
      left: e.isRtl.value ? void 0 : Z(oi(A)),
      right: e.isRtl.value ? Z(oi(-A)) : void 0,
      minWidth: Z(S === "y" ? Math.min(o.value, h.width) : o.value),
      maxWidth: Z(Xr(Kt(k.x, o.value === 1 / 0 ? 0 : o.value, u.value))),
      maxHeight: Z(Xr(Kt(k.y, s.value === 1 / 0 ? 0 : s.value, l.value)))
    }), {
      available: k,
      contentBox: v,
      flipped: D
    };
  }
  return te(() => [r.value, a.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => p()), Ue(() => {
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
function oi(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Xr(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ii = !0;
const In = [];
function rc(e) {
  !Ii || In.length ? (In.push(e), Oi()) : (Ii = !1, e(), Oi());
}
let Zr = -1;
function Oi() {
  cancelAnimationFrame(Zr), Zr = requestAnimationFrame(() => {
    const e = In.shift();
    e && e(), In.length ? Oi() : Ii = !0;
  });
}
const pn = {
  none: null,
  close: sc,
  block: lc,
  reposition: uc
}, ac = F({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in pn
  }
}, "VOverlay-scroll-strategies");
function oc(e, t) {
  if (!Te) return;
  let n;
  Ht(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = Qi(), await new Promise((i) => setTimeout(i)), n.active && n.run(() => {
      var i;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (i = pn[e.scrollStrategy]) == null || i.call(pn, t, e, n);
    }));
  }), We(() => {
    n == null || n.stop();
  });
}
function sc(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Io(e.targetEl.value ?? e.contentEl.value, t);
}
function lc(e, t) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent, i = [.../* @__PURE__ */ new Set([...An(e.targetEl.value, t.contained ? n : void 0), ...An(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), r = window.innerWidth - document.documentElement.offsetWidth, a = ((s) => or(s) && s)(n || document.documentElement);
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((s, u) => {
    s.style.setProperty("--v-body-scroll-x", Z(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", Z(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", Z(r)), s.classList.add("v-overlay-scroll-blocked");
  }), We(() => {
    i.forEach((s, u) => {
      const l = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), d = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -l, s.scrollTop = -c, s.style.scrollBehavior = d;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function uc(e, t, n) {
  let i = !1, r = -1, a = -1;
  function o(s) {
    rc(() => {
      var c, d;
      const u = performance.now();
      (d = (c = e.updateLocation).value) == null || d.call(c, s), i = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  a = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    n.run(() => {
      Io(e.targetEl.value ?? e.contentEl.value, (s) => {
        i ? (cancelAnimationFrame(r), r = requestAnimationFrame(() => {
          r = requestAnimationFrame(() => {
            o(s);
          });
        })) : o(s);
      });
    });
  }), We(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(a), cancelAnimationFrame(r);
  });
}
function Io(e, t) {
  const n = [document, ...An(e)];
  n.forEach((i) => {
    i.addEventListener("scroll", t, {
      passive: !0
    });
  }), We(() => {
    n.forEach((i) => {
      i.removeEventListener("scroll", t);
    });
  });
}
const Li = Symbol.for("vuetify:v-menu"), cc = F({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function dc(e, t) {
  let n = () => {
  };
  function i(o) {
    n == null || n();
    const s = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      n = $s(s, () => {
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
const fc = F({
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
  ...cc()
}, "VOverlay-activator");
function hc(e, t) {
  let {
    isActive: n,
    isTop: i,
    contentEl: r
  } = t;
  const a = Se("useActivator"), o = z();
  let s = !1, u = !1, l = !0;
  const c = P(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = P(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: g
  } = dc(e, (x) => {
    x === (e.openOnHover && s || c.value && u) && !(e.openOnHover && n.value && !i.value) && (n.value !== x && (l = !0), n.value = x);
  }), m = z(), h = {
    onClick: (x) => {
      x.stopPropagation(), o.value = x.currentTarget || x.target, n.value || (m.value = [x.clientX, x.clientY]), n.value = !n.value;
    },
    onMouseenter: (x) => {
      var k;
      (k = x.sourceCapabilities) != null && k.firesTouchEvents || (s = !0, o.value = x.currentTarget || x.target, f());
    },
    onMouseleave: (x) => {
      s = !1, g();
    },
    onFocus: (x) => {
      Ds(x.target, ":focus-visible") !== !1 && (u = !0, x.stopPropagation(), o.value = x.currentTarget || x.target, f());
    },
    onBlur: (x) => {
      u = !1, x.stopPropagation(), g();
    }
  }, p = P(() => {
    const x = {};
    return d.value && (x.onClick = h.onClick), e.openOnHover && (x.onMouseenter = h.onMouseenter, x.onMouseleave = h.onMouseleave), c.value && (x.onFocus = h.onFocus, x.onBlur = h.onBlur), x;
  }), v = P(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      s = !0, f();
    }, x.onMouseleave = () => {
      s = !1, g();
    }), c.value && (x.onFocusin = () => {
      u = !0, f();
    }, x.onFocusout = () => {
      u = !1, g();
    }), e.closeOnContentClick) {
      const k = pe(Li, null);
      x.onClick = () => {
        n.value = !1, k == null || k.closeParents();
      };
    }
    return x;
  }), b = P(() => {
    const x = {};
    return e.openOnHover && (x.onMouseenter = () => {
      l && (s = !0, l = !1, f());
    }, x.onMouseleave = () => {
      s = !1, g();
    }), x;
  });
  te(i, (x) => {
    var k;
    x && (e.openOnHover && !s && (!c.value || !u) || c.value && !u && (!e.openOnHover || !s)) && !((k = r.value) != null && k.contains(document.activeElement)) && (n.value = !1);
  }), te(n, (x) => {
    x || setTimeout(() => {
      m.value = void 0;
    });
  }, {
    flush: "post"
  });
  const y = Si();
  Ht(() => {
    y.value && Ue(() => {
      o.value = y.el;
    });
  });
  const w = Si(), C = P(() => e.target === "cursor" && m.value ? m.value : w.value ? w.el : Oo(e.target, a) || o.value), E = P(() => Array.isArray(C.value) ? void 0 : C.value);
  let A;
  return te(() => !!e.activator, (x) => {
    x && Te ? (A = Qi(), A.run(() => {
      vc(e, a, {
        activatorEl: o,
        activatorEvents: p
      });
    })) : A && A.stop();
  }, {
    flush: "post",
    immediate: !0
  }), We(() => {
    A == null || A.stop();
  }), {
    activatorEl: o,
    activatorRef: y,
    target: C,
    targetEl: E,
    targetRef: w,
    activatorEvents: p,
    contentEvents: v,
    scrimEvents: b
  };
}
function vc(e, t, n) {
  let {
    activatorEl: i,
    activatorEvents: r
  } = n;
  te(() => e.activator, (u, l) => {
    if (l && u !== l) {
      const c = s(l);
      c && o(c);
    }
    u && Ue(() => a());
  }, {
    immediate: !0
  }), te(() => e.activatorProps, () => {
    a();
  }), We(() => {
    o();
  });
  function a() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && Ws(u, ne(r.value, l));
  }
  function o() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && qs(u, ne(r.value, l));
  }
  function s() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const l = Oo(u, t);
    return i.value = (l == null ? void 0 : l.nodeType) === Node.ELEMENT_NODE ? l : void 0, i.value;
  }
}
function Oo(e, t) {
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
function gc() {
  if (!Te) return ue(!1);
  const {
    ssr: e
  } = Cu();
  if (e) {
    const t = ue(!1);
    return Ft(() => {
      t.value = !0;
    }), t;
  } else
    return ue(!0);
}
const mc = F({
  eager: Boolean
}, "lazy");
function pc(e, t) {
  const n = ue(!1), i = R(() => n.value || e.eager || t.value);
  te(t, () => n.value = !0);
  function r() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: i,
    onAfterLeave: r
  };
}
function fr() {
  const t = Se("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Yr = Symbol.for("vuetify:stack"), zt = Ot([]);
function yc(e, t, n) {
  const i = Se("useStack"), r = !n, a = pe(Yr, void 0), o = Ot({
    activeChildren: /* @__PURE__ */ new Set()
  });
  ze(Yr, o);
  const s = ue(Number(ut(t)));
  Lt(e, () => {
    var d;
    const c = (d = zt.at(-1)) == null ? void 0 : d[1];
    s.value = c ? c + 10 : Number(ut(t)), r && zt.push([i.uid, s.value]), a == null || a.activeChildren.add(i.uid), We(() => {
      if (r) {
        const f = he(zt).findIndex((g) => g[0] === i.uid);
        zt.splice(f, 1);
      }
      a == null || a.activeChildren.delete(i.uid);
    });
  });
  const u = ue(!0);
  r && Ht(() => {
    var d;
    const c = ((d = zt.at(-1)) == null ? void 0 : d[0]) === i.uid;
    setTimeout(() => u.value = c);
  });
  const l = R(() => !o.activeChildren.size);
  return {
    globalTop: Ji(u),
    localTop: l,
    stackStyles: R(() => ({
      zIndex: s.value
    }))
  };
}
function bc(e) {
  return {
    teleportTarget: P(() => {
      const n = e();
      if (n === !0 || !Te) return;
      const i = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (i == null) {
        Fn(`Unable to locate target ${n}`);
        return;
      }
      let r = [...i.children].find((a) => a.matches(".v-overlay-container"));
      return r || (r = document.createElement("div"), r.className = "v-overlay-container", i.appendChild(r)), r;
    })
  };
}
function wc() {
  return !0;
}
function Lo(e, t, n) {
  if (!e || No(e, n) === !1) return !1;
  const i = Ua(t);
  if (typeof ShadowRoot < "u" && i instanceof ShadowRoot && i.host === e.target) return !1;
  const r = (typeof n.value == "object" && n.value.include || (() => []))();
  return r.push(t), !r.some((a) => a == null ? void 0 : a.contains(e.target));
}
function No(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || wc)(e);
}
function Ec(e, t, n) {
  const i = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Lo(e, t, n) && setTimeout(() => {
    No(e, n) && i && i(e);
  }, 0);
}
function Kr(e, t) {
  const n = Ua(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Jr = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (r) => Ec(r, e, t), i = (r) => {
      e._clickOutside.lastMousedownWasOutside = Lo(r, e, t);
    };
    Kr(e, (r) => {
      r.addEventListener("click", n, !0), r.addEventListener("mousedown", i, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: i
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Kr(e, (n) => {
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
function Sc(e) {
  const {
    modelValue: t,
    color: n,
    ...i
  } = e;
  return I(xt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && B("div", ne({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, i), null)]
  });
}
const hr = F({
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
  ...fc(),
  ...fe(),
  ...Dt(),
  ...mc(),
  ...Qu(),
  ...ac(),
  ...He(),
  ...Un()
}, "VOverlay"), On = Q()({
  name: "VOverlay",
  directives: {
    vClickOutside: Jr
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...hr()
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
    const a = Se("VOverlay"), o = z(), s = z(), u = z(), l = Ge(e, "modelValue"), c = P({
      get: () => l.value,
      set: (q) => {
        q && e.disabled || (l.value = q);
      }
    }), {
      themeClasses: d
    } = qe(e), {
      rtlClasses: f,
      isRtl: g
    } = Vt(), {
      hasContent: m,
      onAfterLeave: h
    } = pc(e, c), p = _t(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: v,
      localTop: b,
      stackStyles: y
    } = yc(c, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: w,
      activatorRef: C,
      target: E,
      targetEl: A,
      targetRef: x,
      activatorEvents: k,
      contentEvents: D,
      scrimEvents: H
    } = hc(e, {
      isActive: c,
      isTop: b,
      contentEl: u
    }), {
      teleportTarget: S
    } = bc(() => {
      var ye, De, nt;
      const q = e.attach || e.contained;
      if (q) return q;
      const ve = ((ye = w == null ? void 0 : w.value) == null ? void 0 : ye.getRootNode()) || ((nt = (De = a.proxy) == null ? void 0 : De.$el) == null ? void 0 : nt.getRootNode());
      return ve instanceof ShadowRoot ? ve : !1;
    }), {
      dimensionStyles: _
    } = $t(e), O = gc(), {
      scopeId: L
    } = fr();
    te(() => e.disabled, (q) => {
      q && (c.value = !1);
    });
    const {
      contentStyles: N,
      updateLocation: U
    } = ec(e, {
      isRtl: g,
      contentEl: u,
      target: E,
      isActive: c
    });
    oc(e, {
      root: o,
      contentEl: u,
      targetEl: A,
      isActive: c,
      updateLocation: U
    });
    function Y(q) {
      r("click:outside", q), e.persistent ? j() : c.value = !1;
    }
    function oe(q) {
      return c.value && v.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || q.target === s.value || q instanceof MouseEvent && q.shadowTarget === s.value);
    }
    Te && te(c, (q) => {
      q ? window.addEventListener("keydown", G) : window.removeEventListener("keydown", G);
    }, {
      immediate: !0
    }), et(() => {
      Te && window.removeEventListener("keydown", G);
    });
    function G(q) {
      var ve, ye, De;
      q.key === "Escape" && v.value && ((ve = u.value) != null && ve.contains(document.activeElement) || r("keydown", q), e.persistent ? j() : (c.value = !1, (ye = u.value) != null && ye.contains(document.activeElement) && ((De = w.value) == null || De.focus())));
    }
    function de(q) {
      q.key === "Escape" && !v.value || r("keydown", q);
    }
    const Ae = iu();
    Lt(() => e.closeOnBack, () => {
      ru(Ae, (q) => {
        v.value && c.value ? (q(!1), e.persistent ? j() : c.value = !1) : q();
      });
    });
    const se = z();
    te(() => c.value && (e.absolute || e.contained) && S.value == null, (q) => {
      if (q) {
        const ve = gl(o.value);
        ve && ve !== document.scrollingElement && (se.value = ve.scrollTop);
      }
    });
    function j() {
      e.noClickAnimation || u.value && Bt(u.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Cn
      });
    }
    function ce() {
      r("afterEnter");
    }
    function Ie() {
      h(), r("afterLeave");
    }
    return ae(() => {
      var q;
      return B(Le, null, [(q = n.activator) == null ? void 0 : q.call(n, {
        isActive: c.value,
        targetRef: x,
        props: ne({
          ref: C
        }, k.value, e.activatorProps)
      }), O.value && m.value && I(Ts, {
        disabled: !S.value,
        to: S.value
      }, {
        default: () => [B("div", ne({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": c.value,
            "v-overlay--contained": e.contained
          }, d.value, f.value, e.class],
          style: [y.value, {
            "--v-overlay-opacity": e.opacity,
            top: Z(se.value)
          }, e.style],
          ref: o,
          onKeydown: de
        }, L, i), [I(Sc, ne({
          color: p,
          modelValue: c.value && !!e.scrim,
          ref: s
        }, H.value), null), I(ft, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: E.value,
          onAfterEnter: ce,
          onAfterLeave: Ie
        }, {
          default: () => {
            var ve;
            return [Je(B("div", ne({
              ref: u,
              class: ["v-overlay__content", e.contentClass],
              style: [_.value, N.value]
            }, D.value, e.contentProps), [(ve = n.default) == null ? void 0 : ve.call(n, {
              isActive: c
            })]), [[on, c.value], [Jr, {
              handler: Y,
              closeConditional: oe,
              include: () => [w.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: w,
      scrimEl: s,
      target: E,
      animateClick: j,
      contentEl: u,
      globalTop: v,
      localTop: b,
      updateLocation: U
    };
  }
}), si = Symbol("Forwarded refs");
function li(e, t) {
  let n = e;
  for (; n; ) {
    const i = Reflect.getOwnPropertyDescriptor(n, t);
    if (i) return i;
    n = Object.getPrototypeOf(n);
  }
}
function vr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return e[si] = n, new Proxy(e, {
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
          const l = li(u.value, a) ?? ("_" in u.value ? li((s = u.value._) == null ? void 0 : s.setupState, a) : void 0);
          if (l) return l;
        }
        for (const u of n) {
          const l = u.value && u.value[si];
          if (!l) continue;
          const c = l.slice();
          for (; c.length; ) {
            const d = c.shift(), f = li(d.value, a);
            if (f) return f;
            const g = d.value && d.value[si];
            g && c.push(...g);
          }
        }
      }
    }
  });
}
const _c = F({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...$n(hr({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: _l
    }
  }), ["absolute"])
}, "VMenu"), xc = Q()({
  name: "VMenu",
  props: _c(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = Ge(e, "modelValue"), {
      scopeId: r
    } = fr(), {
      isRtl: a
    } = Vt(), o = Mt(), s = R(() => e.id || `v-menu-${o}`), u = z(), l = pe(Li, null), c = ue(/* @__PURE__ */ new Set());
    ze(Li, {
      register() {
        c.value.add(o);
      },
      unregister() {
        c.value.delete(o);
      },
      closeParents(p) {
        setTimeout(() => {
          var v;
          !c.value.size && !e.persistent && (p == null || (v = u.value) != null && v.contentEl && !Us(p, u.value.contentEl)) && (i.value = !1, l == null || l.closeParents());
        }, 40);
      }
    }), et(() => {
      l == null || l.unregister(), document.removeEventListener("focusin", d);
    }), Bs(() => i.value = !1);
    async function d(p) {
      var y, w, C;
      const v = p.relatedTarget, b = p.target;
      await Ue(), i.value && v !== b && ((y = u.value) != null && y.contentEl) && // We're the topmost menu
      ((w = u.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, u.value.contentEl].includes(b) && // It isn't inside the menu body
      !u.value.contentEl.contains(b) && ((C = Ei(u.value.contentEl)[0]) == null || C.focus());
    }
    te(i, (p) => {
      p ? (l == null || l.register(), Te && document.addEventListener("focusin", d, {
        once: !0
      })) : (l == null || l.unregister(), Te && document.removeEventListener("focusin", d));
    }, {
      immediate: !0
    });
    function f(p) {
      l == null || l.closeParents(p);
    }
    function g(p) {
      var v, b, y, w, C;
      if (!e.disabled)
        if (p.key === "Tab" || p.key === "Enter" && !e.closeOnContentClick) {
          if (p.key === "Enter" && (p.target instanceof HTMLTextAreaElement || p.target instanceof HTMLInputElement && p.target.closest("form"))) return;
          p.key === "Enter" && p.preventDefault(), Fa(Ei((v = u.value) == null ? void 0 : v.contentEl, !1), p.shiftKey ? "prev" : "next", (A) => A.tabIndex >= 0) || (i.value = !1, (y = (b = u.value) == null ? void 0 : b.activatorEl) == null || y.focus());
        } else e.submenu && p.key === (a.value ? "ArrowRight" : "ArrowLeft") && (i.value = !1, (C = (w = u.value) == null ? void 0 : w.activatorEl) == null || C.focus());
    }
    function m(p) {
      var b;
      if (e.disabled) return;
      const v = (b = u.value) == null ? void 0 : b.contentEl;
      v && i.value ? p.key === "ArrowDown" ? (p.preventDefault(), p.stopImmediatePropagation(), Yt(v, "next")) : p.key === "ArrowUp" ? (p.preventDefault(), p.stopImmediatePropagation(), Yt(v, "prev")) : e.submenu && (p.key === (a.value ? "ArrowRight" : "ArrowLeft") ? i.value = !1 : p.key === (a.value ? "ArrowLeft" : "ArrowRight") && (p.preventDefault(), Yt(v, "first"))) : (e.submenu ? p.key === (a.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(p.key)) && (i.value = !0, p.preventDefault(), setTimeout(() => setTimeout(() => m(p))));
    }
    const h = P(() => ne({
      "aria-haspopup": "menu",
      "aria-expanded": String(i.value),
      "aria-controls": s.value,
      onKeydown: m
    }, e.activatorProps));
    return ae(() => {
      const p = On.filterProps(e);
      return I(On, ne({
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
          return I(lt, {
            root: "VMenu"
          }, {
            default: () => {
              var w;
              return [(w = n.default) == null ? void 0 : w.call(n, ...b)];
            }
          });
        }
      });
    }), vr({
      id: s,
      ΨopenChildren: c
    }, u);
  }
}), Cc = F({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...fe(),
  ...Un({
    transition: {
      component: Wa
    }
  })
}, "VCounter"), Ac = Q()({
  name: "VCounter",
  functional: !0,
  props: Cc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = R(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return ae(() => I(ft, {
      transition: e.transition
    }, {
      default: () => [Je(B("div", {
        class: W(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: ee(e.style)
      }, [n.default ? n.default({
        counter: i.value,
        max: e.max,
        value: e.value
      }) : i.value]), [[on, e.active]])]
    })), {};
  }
}), Pc = F({
  floating: Boolean,
  ...fe()
}, "VFieldLabel"), vn = Q()({
  name: "VFieldLabel",
  props: Pc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ae(() => I(gu, {
      class: W(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: ee(e.style),
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Tc = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ko = F({
  appendInnerIcon: Ee,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: Ee,
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
  prependInnerIcon: Ee,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Tc.includes(e)
  },
  "onClick:clear": Me(),
  "onClick:appendInner": Me(),
  "onClick:prependInner": Me(),
  ...fe(),
  ...no(),
  ...mt(),
  ...He()
}, "VField"), Qr = Q()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...mo(),
    ...ko()
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
    } = qe(e), {
      loaderClasses: o
    } = io(e), {
      focusClasses: s,
      isFocused: u,
      focus: l,
      blur: c
    } = po(e), {
      InputIcon: d
    } = go(e), {
      roundedClasses: f
    } = pt(e), {
      rtlClasses: g
    } = Vt(), m = R(() => e.dirty || e.active), h = R(() => !!(e.label || r.label)), p = R(() => !e.singleLine && h.value), v = Mt(), b = P(() => e.id || `input-${v}`), y = R(() => `${b.value}-messages`), w = z(), C = z(), E = z(), A = P(() => ["plain", "underlined"].includes(e.variant)), x = P(() => e.error || e.disabled ? void 0 : m.value && u.value ? e.color : e.baseColor), k = P(() => {
      if (!(!e.iconColor || e.glow && !u.value))
        return e.iconColor === !0 ? x.value : e.iconColor;
    }), {
      backgroundColorClasses: D,
      backgroundColorStyles: H
    } = _t(() => e.bgColor), {
      textColorClasses: S,
      textColorStyles: _
    } = vt(x);
    te(m, (N) => {
      if (p.value) {
        const U = w.value.$el, Y = C.value.$el;
        requestAnimationFrame(() => {
          const oe = ir(U), G = Y.getBoundingClientRect(), de = G.x - oe.x, Ae = G.y - oe.y - (oe.height / 2 - G.height / 2), se = G.width / 0.75, j = Math.abs(se - oe.width) > 1 ? {
            maxWidth: Z(se)
          } : void 0, ce = getComputedStyle(U), Ie = getComputedStyle(Y), q = parseFloat(ce.transitionDuration) * 1e3 || 150, ve = parseFloat(Ie.getPropertyValue("--v-field-label-scale")), ye = Ie.getPropertyValue("color");
          U.style.visibility = "visible", Y.style.visibility = "hidden", Bt(U, {
            transform: `translate(${de}px, ${Ae}px) scale(${ve})`,
            color: ye,
            ...j
          }, {
            duration: q,
            easing: Cn,
            direction: N ? "normal" : "reverse"
          }).finished.then(() => {
            U.style.removeProperty("visibility"), Y.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const O = P(() => ({
      isActive: m,
      isFocused: u,
      controlRef: E,
      blur: c,
      focus: l
    }));
    function L(N) {
      N.target !== document.activeElement && N.preventDefault();
    }
    return ae(() => {
      var de, Ae, se;
      const N = e.variant === "outlined", U = !!(r["prepend-inner"] || e.prependInnerIcon), Y = !!(e.clearable || r.clear) && !e.disabled, oe = !!(r["append-inner"] || e.appendInnerIcon || Y), G = () => r.label ? r.label({
        ...O.value,
        label: e.label,
        props: {
          for: b.value
        }
      }) : e.label;
      return B("div", ne({
        class: ["v-field", {
          "v-field--active": m.value,
          "v-field--appended": oe,
          "v-field--center-affix": e.centerAffix ?? !A.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": U,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !G(),
          [`v-field--variant-${e.variant}`]: !0
        }, a.value, D.value, s.value, o.value, f.value, g.value, e.class],
        style: [H.value, e.style],
        onClick: L
      }, n), [B("div", {
        class: "v-field__overlay"
      }, null), I(Jl, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: r.loader
      }), U && B("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && I(d, {
        key: "prepend-icon",
        name: "prependInner",
        color: k.value
      }, null), (de = r["prepend-inner"]) == null ? void 0 : de.call(r, O.value)]), B("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && p.value && I(vn, {
        key: "floating-label",
        ref: C,
        class: W([S.value]),
        floating: !0,
        for: b.value,
        style: ee(_.value)
      }, {
        default: () => [G()]
      }), h.value && I(vn, {
        key: "label",
        ref: w,
        for: b.value
      }, {
        default: () => [G()]
      }), ((Ae = r.default) == null ? void 0 : Ae.call(r, {
        ...O.value,
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
      }, null)]), Y && I(Cl, {
        key: "clear"
      }, {
        default: () => [Je(B("div", {
          class: "v-field__clearable",
          onMousedown: (j) => {
            j.preventDefault(), j.stopPropagation();
          }
        }, [I(lt, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [r.clear ? r.clear({
            ...O.value,
            props: {
              onFocus: l,
              onBlur: c,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : I(d, {
            name: "clear",
            onFocus: l,
            onBlur: c,
            tabindex: -1
          }, null)]
        })]), [[on, e.dirty]])]
      }), oe && B("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(se = r["append-inner"]) == null ? void 0 : se.call(r, O.value), e.appendInnerIcon && I(d, {
        key: "append-icon",
        name: "appendInner",
        color: k.value
      }, null)]), B("div", {
        class: W(["v-field__outline", S.value]),
        style: ee(_.value)
      }, [N && B(Le, null, [B("div", {
        class: "v-field__outline__start"
      }, null), p.value && B("div", {
        class: "v-field__outline__notch"
      }, [I(vn, {
        ref: C,
        floating: !0,
        for: b.value
      }, {
        default: () => [G()]
      })]), B("div", {
        class: "v-field__outline__end"
      }, null)]), A.value && p.value && I(vn, {
        ref: C,
        floating: !0,
        for: b.value
      }, {
        default: () => [G()]
      })])]);
    }), {
      controlRef: E,
      fieldIconColor: k
    };
  }
}), Bc = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ic = F({
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
  ...yo(),
  ...ko()
}, "VTextField"), Oc = Q()({
  name: "VTextField",
  directives: {
    vIntersect: Pn
  },
  inheritAttrs: !1,
  props: Ic(),
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
    const a = Ge(e, "modelValue"), {
      isFocused: o,
      focus: s,
      blur: u
    } = po(e), l = P(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), c = P(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), d = P(() => ["plain", "underlined"].includes(e.variant));
    function f(E, A) {
      var x, k;
      !e.autofocus || !E || (k = (x = A[0].target) == null ? void 0 : x.focus) == null || k.call(x);
    }
    const g = z(), m = z(), h = z(), p = P(() => Bc.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function v() {
      o.value || s(), Ue(() => {
        var E;
        h.value !== document.activeElement && ((E = h.value) == null || E.focus());
      });
    }
    function b(E) {
      i("mousedown:control", E), E.target !== h.value && (v(), E.preventDefault());
    }
    function y(E) {
      i("click:control", E);
    }
    function w(E, A) {
      E.stopPropagation(), v(), Ue(() => {
        a.value = null, A(), Ha(e["onClick:clear"], E);
      });
    }
    function C(E) {
      var x;
      const A = E.target;
      if (a.value = A.value, (x = e.modelModifiers) != null && x.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const k = [A.selectionStart, A.selectionEnd];
        Ue(() => {
          A.selectionStart = k[0], A.selectionEnd = k[1];
        });
      }
    }
    return ae(() => {
      const E = !!(r.counter || e.counter !== !1 && e.counter != null), A = !!(E || r.details), [x, k] = Fs(n), {
        modelValue: D,
        ...H
      } = zr.filterProps(e), S = Qr.filterProps(e);
      return I(zr, ne({
        ref: g,
        modelValue: a.value,
        "onUpdate:modelValue": (_) => a.value = _,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": d.value
        }, e.class],
        style: e.style
      }, x, H, {
        centerAffix: !d.value,
        focused: o.value
      }), {
        ...r,
        default: (_) => {
          let {
            id: O,
            isDisabled: L,
            isDirty: N,
            isReadonly: U,
            isValid: Y,
            reset: oe
          } = _;
          return I(Qr, ne({
            ref: m,
            onMousedown: b,
            onClick: y,
            "onClick:clear": (G) => w(G, oe),
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, S, {
            id: O.value,
            active: p.value || N.value,
            dirty: N.value || e.dirty,
            disabled: L.value,
            focused: o.value,
            error: Y.value === !1
          }), {
            ...r,
            default: (G) => {
              let {
                props: {
                  class: de,
                  ...Ae
                }
              } = G;
              const se = Je(B("input", ne({
                ref: h,
                value: a.value,
                onInput: C,
                autofocus: e.autofocus,
                readonly: U.value,
                disabled: L.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: v,
                onBlur: u
              }, Ae, k), null), [[Pn, {
                handler: f
              }, null, {
                once: !0
              }]]);
              return B(Le, null, [e.prefix && B("span", {
                class: "v-text-field__prefix"
              }, [B("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), r.default ? B("div", {
                class: W(de),
                "data-no-activator": ""
              }, [r.default(), se]) : Is(se, {
                class: de
              }), e.suffix && B("span", {
                class: "v-text-field__suffix"
              }, [B("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: A ? (_) => {
          var O;
          return B(Le, null, [(O = r.details) == null ? void 0 : O.call(r, _), E && B(Le, null, [B("span", null, null), I(Ac, {
            active: e.persistentCounter || o.value,
            value: l.value,
            max: c.value,
            disabled: e.disabled
          }, r.counter)])]);
        } : void 0
      });
    }), vr({}, g, m, h);
  }
}), Lc = F({
  id: String,
  interactive: Boolean,
  text: String,
  ...$n(hr({
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
}, "VTooltip"), Nc = Q()({
  name: "VTooltip",
  props: Lc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = Ge(e, "modelValue"), {
      scopeId: r
    } = fr(), a = Mt(), o = R(() => e.id || `v-tooltip-${a}`), s = z(), u = P(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), l = P(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = R(() => e.transition != null ? e.transition : i.value ? "scale-transition" : "fade-transition"), d = P(() => ne({
      "aria-describedby": o.value
    }, e.activatorProps));
    return ae(() => {
      const f = On.filterProps(e);
      return I(On, ne({
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
    }), vr({}, s);
  }
}), kc = { class: "d-flex" }, Rc = { class: "gs-alert-bar__content" }, Hc = { class: "gs-alert-bar__icon" }, Fc = { class: "d-flex flex-column" }, Mc = ["innerHTML"], Vc = ["innerHTML"], Dc = /* @__PURE__ */ Be({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, n = P(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (i, r) => (ie(), me("div", {
      class: W(n.value),
      role: "alert"
    }, [
      B("div", kc, [
        B("div", Rc, [
          B("div", Hc, [
            I(_e(Ne), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          B("div", Fc, [
            i.title ? (ie(), me("span", {
              key: 0,
              class: "title",
              innerHTML: i.title
            }, null, 8, Mc)) : wt("", !0),
            B("span", {
              class: "message",
              innerHTML: i.message
            }, null, 8, Vc)
          ])
        ])
      ])
    ], 2));
  }
}), Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, $c = /* @__PURE__ */ Ze(Dc, [["__scopeId", "data-v-5fb92636"]]), Uc = {
  key: 1,
  class: "text"
}, Gc = /* @__PURE__ */ Be({
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
    const t = e, n = P(() => t.href ? "a" : t.tag || "button"), i = P(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), r = P(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), a = P(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (o, s) => Je((ie(), st(Aa(n.value), {
      class: W(r.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: ee({ width: o.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: be(() => [
        t.icon && !t.loading ? (ie(), st(_e(Ne), {
          key: 0,
          class: "icon"
        }, {
          default: be(() => [
            Zt(we(t.icon), 1)
          ]),
          _: 1
        })) : wt("", !0),
        o.$slots.default ? (ie(), me("span", Uc, [
          Mn(o.$slots, "default", {}, void 0, !0)
        ])) : wt("", !0),
        t.loading ? (ie(), st(_e(Qa), {
          key: 2,
          size: a.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : wt("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [Bn, i.value]
    ]);
  }
}), jc = /* @__PURE__ */ Ze(Gc, [["__scopeId", "data-v-c9c252f8"]]), zc = Be({
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
}), Wc = { class: "filter-button-list" }, qc = ["onClick"], Xc = { class: "filter-button-title" };
function Zc(e, t, n, i, r, a) {
  return ie(), me("div", Wc, [
    (ie(!0), me(Le, null, Vn(e.categories, (o) => (ie(), me("button", {
      key: o.value,
      class: W(["filter-button", { "is-active": o.value === e.modelValue }]),
      onClick: Os((s) => e.searchByCategory(o.value), ["prevent"])
    }, [
      B("span", Xc, we(o.title), 1)
    ], 10, qc))), 128))
  ]);
}
const Yc = /* @__PURE__ */ Ze(zc, [["render", Zc], ["__scopeId", "data-v-e71f6436"]]), Kc = Be({
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
}), Jc = { class: "gs-tabs" }, Qc = ["disabled", "onClick"];
function ed(e, t, n, i, r, a) {
  return ie(), me("div", Jc, [
    (ie(!0), me(Le, null, Vn(e.tabs, (o, s) => (ie(), me("button", {
      key: s,
      class: W(["gs-tab", { active: e.modelValue === o.value }]),
      disabled: o.disabled,
      onClick: (u) => e.selectTab(o)
    }, we(o.label), 11, Qc))), 128))
  ]);
}
const td = /* @__PURE__ */ Ze(Kc, [["render", ed], ["__scopeId", "data-v-b020e60d"]]), nd = ["src"], id = /* @__PURE__ */ Be({
  name: "GsTag",
  __name: "GsTag",
  props: {
    label: {},
    backgroundColor: { default: "pastel-green" },
    icon: { default: void 0 },
    bold: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = P(() => t.backgroundColor === "black" ? "var(--ui-white)" : "var(--ui-black)"), i = P(() => {
      switch (t.backgroundColor) {
        case "black":
          return "var(--ui-white)";
        case "grey":
          return "var(--ui-black)";
        default:
          return "var(--ui-green)";
      }
    }), r = P(() => {
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
    return (a, o) => (ie(), me("div", {
      style: ee({
        backgroundColor: `${r.value}`,
        gap: a.label ? "4px" : "0"
      }),
      class: "gs-tag"
    }, [
      a.icon && a.icon.startsWith("mdi") ? (ie(), st(Ne, {
        key: 0,
        icon: a.icon,
        size: "16px",
        style: ee({ color: i.value }),
        class: "gs-tag__icon"
      }, null, 8, ["icon", "style"])) : a.icon && !a.icon.startsWith("mdi") ? (ie(), me("img", {
        key: 1,
        src: a.icon,
        style: { width: "16px" },
        alt: "",
        class: "gs-tag__icon"
      }, null, 8, nd)) : wt("", !0),
      B("span", {
        style: ee({ color: n.value, fontWeight: a.bold ? "bold" : "normal" }),
        class: "gs-tag__label"
      }, we(a.label), 5)
    ], 4));
  }
}), rd = /* @__PURE__ */ Ze(id, [["__scopeId", "data-v-6b4861a9"]]), ad = /* @__PURE__ */ Be({
  name: "GsDivider",
  __name: "GsDivider",
  props: {
    color: { default: "grey200" },
    length: { default: "100%" },
    thickness: { default: "thick" },
    margin: { default: "0" }
  },
  setup(e) {
    const t = e, n = P(() => {
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
    return (i, r) => (ie(), me("hr", {
      style: ee({
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
}), od = /* @__PURE__ */ Ze(ad, [["__scopeId", "data-v-77a02199"]]);
/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ni = 9e15, yt = 1e9, ki = "0123456789abcdef", Ln = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Nn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ri = {
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
  maxE: Ni,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Ro, ot, $ = !0, Xn = "[DecimalError] ", gt = Xn + "Invalid argument: ", Ho = Xn + "Precision limit exceeded", Fo = Xn + "crypto unavailable", Mo = "[object Decimal]", Ce = Math.floor, ge = Math.pow, sd = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, ld = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ud = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Vo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, je = 1e7, V = 7, cd = 9007199254740991, dd = Ln.length - 1, Hi = Nn.length - 1, T = { toStringTag: Mo };
T.absoluteValue = T.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), M(e);
};
T.ceil = function() {
  return M(new this.constructor(this), this.e + 1, 2);
};
T.clampedTo = T.clamp = function(e, t) {
  var n, i = this, r = i.constructor;
  if (e = new r(e), t = new r(t), !e.s || !t.s) return new r(NaN);
  if (e.gt(t)) throw Error(gt + t);
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
  return n.d ? n.d[0] ? (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + V, i.rounding = 1, n = fd(i, jo(i, n)), i.precision = e, i.rounding = t, M(ot == 2 || ot == 3 ? n.neg() : n, e, t, !0)) : new i(1) : new i(NaN);
};
T.cubeRoot = T.cbrt = function() {
  var e, t, n, i, r, a, o, s, u, l, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for ($ = !1, a = c.s * ge(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (n = xe(c.d), e = c.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = ge(n, 1 / 3), e = Ce((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), i = new d(n), i.s = c.s) : i = new d(a.toString()), o = (e = d.precision) + 3; ; )
    if (s = i, u = s.times(s).times(s), l = u.plus(c), i = re(l.plus(c).times(s), l.plus(u), o + 2, 1), xe(s.d).slice(0, o) === (n = xe(i.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && (M(s, e + 1, 0), s.times(s).times(s).eq(c))) {
          i = s;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (M(i, e + 1, 1), t = !i.times(i).times(i).eq(c));
        break;
      }
  return $ = !0, M(i, e, d.rounding, t);
};
T.decimalPlaces = T.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - Ce(this.e / V)) * V, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
T.dividedBy = T.div = function(e) {
  return re(this, new this.constructor(e));
};
T.dividedToIntegerBy = T.divToInt = function(e) {
  var t = this, n = t.constructor;
  return M(re(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
T.equals = T.eq = function(e) {
  return this.cmp(e) === 0;
};
T.floor = function() {
  return M(new this.constructor(this), this.e + 1, 3);
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
  n = o.precision, i = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), t = (1 / Yn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = Nt(o, 1, a.times(t), new o(1), !0);
  for (var u, l = e, c = new o(8); l--; )
    u = a.times(a), a = s.minus(u.times(c.minus(u.times(c))));
  return M(a, o.precision = n, o.rounding = i, !0);
};
T.hyperbolicSine = T.sinh = function() {
  var e, t, n, i, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero()) return new a(r);
  if (t = a.precision, n = a.rounding, a.precision = t + Math.max(r.e, r.sd()) + 4, a.rounding = 1, i = r.d.length, i < 3)
    r = Nt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(i), e = e > 16 ? 16 : e | 0, r = r.times(1 / Yn(5, e)), r = Nt(a, 2, r, r, !0);
    for (var o, s = new a(5), u = new a(16), l = new a(20); e--; )
      o = r.times(r), r = r.times(s.plus(o.times(u.times(o).plus(l))));
  }
  return a.precision = t, a.rounding = n, M(r, t, n, !0);
};
T.hyperbolicTangent = T.tanh = function() {
  var e, t, n = this, i = n.constructor;
  return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 7, i.rounding = 1, re(n.sinh(), n.cosh(), i.precision = e, i.rounding = t)) : new i(n.s);
};
T.inverseCosine = T.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), i = t.precision, r = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? Ye(t, i, r) : new t(0) : new t(NaN) : e.isZero() ? Ye(t, i + 4, r).times(0.5) : (t.precision = i + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = i, t.rounding = r, e.times(2));
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
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, t = a.rounding, i = r.sd(), Math.max(i, e) < 2 * -r.e - 1 ? M(new a(r), e, t, !0) : (a.precision = n = i - r.e, r = re(r.plus(1), new a(1).minus(r), n + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = t, r.times(0.5))) : new a(NaN);
};
T.inverseSine = T.asin = function() {
  var e, t, n, i, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (t = r.abs().cmp(1), n = a.precision, i = a.rounding, t !== -1 ? t === 0 ? (e = Ye(a, n + 4, i).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = n + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = i, r.times(2)));
};
T.inverseTangent = T.atan = function() {
  var e, t, n, i, r, a, o, s, u, l = this, c = l.constructor, d = c.precision, f = c.rounding;
  if (l.isFinite()) {
    if (l.isZero())
      return new c(l);
    if (l.abs().eq(1) && d + 4 <= Hi)
      return o = Ye(c, d + 4, f).times(0.25), o.s = l.s, o;
  } else {
    if (!l.s) return new c(NaN);
    if (d + 4 <= Hi)
      return o = Ye(c, d + 4, f).times(0.5), o.s = l.s, o;
  }
  for (c.precision = s = d + 10, c.rounding = 1, n = Math.min(28, s / V + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for ($ = !1, t = Math.ceil(s / V), i = 1, u = l.times(l), o = new c(l), r = l; e !== -1; )
    if (r = r.times(u), a = o.minus(r.div(i += 2)), r = r.times(u), o = a.plus(r.div(i += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--; ) ;
  return n && (o = o.times(2 << n - 1)), $ = !0, M(o, c.precision = d, c.rounding = f, !0);
};
T.isFinite = function() {
  return !!this.d;
};
T.isInteger = T.isInt = function() {
  return !!this.d && Ce(this.e / V) > this.d.length - 2;
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
  if ($ = !1, s = d + g, o = ht(l, s), i = t ? kn(c, s + 10) : ht(e, s), u = re(o, i, s, 1), nn(u.d, r = d, f))
    do
      if (s += 10, o = ht(l, s), i = t ? kn(c, s + 10) : ht(e, s), u = re(o, i, s, 1), !a) {
        +xe(u.d).slice(r + 1, r + 15) + 1 == 1e14 && (u = M(u, d + 1, 0));
        break;
      }
    while (nn(u.d, r += 10, f));
  return $ = !0, M(u, d, f);
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
    return $ ? M(e, s, u) : e;
  }
  if (n = Ce(e.e / V), c = Ce(g.e / V), l = l.slice(), a = c - n, a) {
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
      for (r = i; r && l[--r] === 0; ) l[r] = je - 1;
      --l[r], l[i] += je;
    }
    l[i] -= f[i];
  }
  for (; l[--o] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (e.d = l, e.e = Zn(l, n), $ ? M(e, s, u) : e) : new m(u === 3 ? -0 : 0);
};
T.modulo = T.mod = function(e) {
  var t, n = this, i = n.constructor;
  return e = new i(e), !n.d || !e.s || e.d && !e.d[0] ? new i(NaN) : !e.d || n.d && !n.d[0] ? M(new i(n), i.precision, i.rounding) : ($ = !1, i.modulo == 9 ? (t = re(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = re(n, e, 0, i.modulo, 1), t = t.times(e), $ = !0, n.minus(t));
};
T.naturalExponential = T.exp = function() {
  return Fi(this);
};
T.naturalLogarithm = T.ln = function() {
  return ht(this);
};
T.negated = T.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, M(e);
};
T.plus = T.add = function(e) {
  var t, n, i, r, a, o, s, u, l, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (l = d.d, c = e.d, s = f.precision, u = f.rounding, !l[0] || !c[0])
    return c[0] || (e = new f(d)), $ ? M(e, s, u) : e;
  if (a = Ce(d.e / V), i = Ce(e.e / V), l = l.slice(), r = a - i, r) {
    for (r < 0 ? (n = l, r = -r, o = c.length) : (n = c, i = a, o = l.length), a = Math.ceil(s / V), o = a > o ? a + 1 : o + 1, r > o && (r = o, n.length = 1), n.reverse(); r--; ) n.push(0);
    n.reverse();
  }
  for (o = l.length, r = c.length, o - r < 0 && (r = o, n = c, c = l, l = n), t = 0; r; )
    t = (l[--r] = l[r] + c[r] + t) / je | 0, l[r] %= je;
  for (t && (l.unshift(t), ++i), o = l.length; l[--o] == 0; ) l.pop();
  return e.d = l, e.e = Zn(l, i), $ ? M(e, s, u) : e;
};
T.precision = T.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(gt + e);
  return n.d ? (t = Do(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
T.round = function() {
  var e = this, t = e.constructor;
  return M(new t(e), e.e + 1, t.rounding);
};
T.sine = T.sin = function() {
  var e, t, n = this, i = n.constructor;
  return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + V, i.rounding = 1, n = vd(i, jo(i, n)), i.precision = e, i.rounding = t, M(ot > 2 ? n.neg() : n, e, t, !0)) : new i(NaN);
};
T.squareRoot = T.sqrt = function() {
  var e, t, n, i, r, a, o = this, s = o.d, u = o.e, l = o.s, c = o.constructor;
  if (l !== 1 || !s || !s[0])
    return new c(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
  for ($ = !1, l = Math.sqrt(+o), l == 0 || l == 1 / 0 ? (t = xe(s), (t.length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(t), u = Ce((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? t = "5e" + u : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), i = new c(t)) : i = new c(l.toString()), n = (u = c.precision) + 3; ; )
    if (a = i, i = a.plus(re(o, a, n + 2, 1)).times(0.5), xe(a.d).slice(0, n) === (t = xe(i.d)).slice(0, n))
      if (t = t.slice(n - 3, n + 1), t == "9999" || !r && t == "4999") {
        if (!r && (M(a, u + 1, 0), a.times(a).eq(o))) {
          i = a;
          break;
        }
        n += 4, r = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (M(i, u + 1, 1), e = !i.times(i).eq(o));
        break;
      }
  return $ = !0, M(i, u, c.rounding, e);
};
T.tangent = T.tan = function() {
  var e, t, n = this, i = n.constructor;
  return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 10, i.rounding = 1, n = n.sin(), n.s = 1, n = re(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0), i.precision = e, i.rounding = t, M(ot == 2 || ot == 4 ? n.neg() : n, e, t, !0)) : new i(NaN);
};
T.times = T.mul = function(e) {
  var t, n, i, r, a, o, s, u, l, c = this, d = c.constructor, f = c.d, g = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !g || !g[0])
    return new d(!e.s || f && !f[0] && !g || g && !g[0] && !f ? NaN : !f || !g ? e.s / 0 : e.s * 0);
  for (n = Ce(c.e / V) + Ce(e.e / V), u = f.length, l = g.length, u < l && (a = f, f = g, g = a, o = u, u = l, l = o), a = [], o = u + l, i = o; i--; ) a.push(0);
  for (i = l; --i >= 0; ) {
    for (t = 0, r = u + i; r > i; )
      s = a[r] + g[i] * f[r - i - 1] + t, a[r--] = s % je | 0, t = s / je | 0;
    a[r] = (a[r] + t) % je | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++n : a.shift(), e.d = a, e.e = Zn(a, n), $ ? M(e, d.precision, d.rounding) : e;
};
T.toBinary = function(e, t) {
  return gr(this, 2, e, t);
};
T.toDecimalPlaces = T.toDP = function(e, t) {
  var n = this, i = n.constructor;
  return n = new i(n), e === void 0 ? n : (ke(e, 0, yt), t === void 0 ? t = i.rounding : ke(t, 0, 8), M(n, e + n.e + 1, t));
};
T.toExponential = function(e, t) {
  var n, i = this, r = i.constructor;
  return e === void 0 ? n = Qe(i, !0) : (ke(e, 0, yt), t === void 0 ? t = r.rounding : ke(t, 0, 8), i = M(new r(i), e + 1, t), n = Qe(i, !0, e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
T.toFixed = function(e, t) {
  var n, i, r = this, a = r.constructor;
  return e === void 0 ? n = Qe(r) : (ke(e, 0, yt), t === void 0 ? t = a.rounding : ke(t, 0, 8), i = M(new a(r), e + r.e + 1, t), n = Qe(i, !1, e + i.e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
T.toFraction = function(e) {
  var t, n, i, r, a, o, s, u, l, c, d, f, g = this, m = g.d, h = g.constructor;
  if (!m) return new h(g);
  if (l = n = new h(1), i = u = new h(0), t = new h(i), a = t.e = Do(m) - g.e - 1, o = a % V, t.d[0] = ge(10, o < 0 ? V + o : o), e == null)
    e = a > 0 ? t : l;
  else {
    if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(gt + s);
    e = s.gt(t) ? a > 0 ? t : l : s;
  }
  for ($ = !1, s = new h(xe(m)), c = h.precision, h.precision = a = m.length * V * 2; d = re(s, t, 0, 1, 1), r = n.plus(d.times(i)), r.cmp(e) != 1; )
    n = i, i = r, r = l, l = u.plus(d.times(r)), u = r, r = t, t = s.minus(d.times(r)), s = r;
  return r = re(e.minus(n), i, 0, 1, 1), u = u.plus(r.times(l)), n = n.plus(r.times(i)), u.s = l.s = g.s, f = re(l, i, a, 1).minus(g).abs().cmp(re(u, n, a, 1).minus(g).abs()) < 1 ? [l, i] : [u, n], h.precision = c, $ = !0, f;
};
T.toHexadecimal = T.toHex = function(e, t) {
  return gr(this, 16, e, t);
};
T.toNearest = function(e, t) {
  var n = this, i = n.constructor;
  if (n = new i(n), e == null) {
    if (!n.d) return n;
    e = new i(1), t = i.rounding;
  } else {
    if (e = new i(e), t === void 0 ? t = i.rounding : ke(t, 0, 8), !n.d) return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? ($ = !1, n = re(n, e, 0, t, 1).times(e), $ = !0, M(n)) : (e.s = n.s, n = e), n;
};
T.toNumber = function() {
  return +this;
};
T.toOctal = function(e, t) {
  return gr(this, 8, e, t);
};
T.toPower = T.pow = function(e) {
  var t, n, i, r, a, o, s = this, u = s.constructor, l = +(e = new u(e));
  if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new u(ge(+s, l));
  if (s = new u(s), s.eq(1)) return s;
  if (i = u.precision, a = u.rounding, e.eq(1)) return M(s, i, a);
  if (t = Ce(e.e / V), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= cd)
    return r = $o(u, s, n, i), e.s < 0 ? new u(1).div(r) : M(r, i, a);
  if (o = s.s, o < 0) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1) == 0 && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1)
      return s.s = o, s;
  }
  return n = ge(+s, l), t = n == 0 || !isFinite(n) ? Ce(l * (Math.log("0." + xe(s.d)) / Math.LN10 + s.e + 1)) : new u(n + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? o / 0 : 0) : ($ = !1, u.rounding = s.s = 1, n = Math.min(12, (t + "").length), r = Fi(e.times(ht(s, i + n)), i), r.d && (r = M(r, i + 5, 1), nn(r.d, i, a) && (t = i + 10, r = M(Fi(e.times(ht(s, t + n)), t), t + 5, 1), +xe(r.d).slice(i + 1, i + 15) + 1 == 1e14 && (r = M(r, i + 1, 0)))), r.s = o, $ = !0, u.rounding = a, M(r, i, a));
};
T.toPrecision = function(e, t) {
  var n, i = this, r = i.constructor;
  return e === void 0 ? n = Qe(i, i.e <= r.toExpNeg || i.e >= r.toExpPos) : (ke(e, 1, yt), t === void 0 ? t = r.rounding : ke(t, 0, 8), i = M(new r(i), e, t), n = Qe(i, e <= i.e || i.e <= r.toExpNeg, e)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
T.toSignificantDigits = T.toSD = function(e, t) {
  var n = this, i = n.constructor;
  return e === void 0 ? (e = i.precision, t = i.rounding) : (ke(e, 1, yt), t === void 0 ? t = i.rounding : ke(t, 0, 8)), M(new i(n), e, t);
};
T.toString = function() {
  var e = this, t = e.constructor, n = Qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
T.truncated = T.trunc = function() {
  return M(new this.constructor(this), this.e + 1, 1);
};
T.valueOf = T.toJSON = function() {
  var e = this, t = e.constructor, n = Qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function xe(e) {
  var t, n, i, r = e.length - 1, a = "", o = e[0];
  if (r > 0) {
    for (a += o, t = 1; t < r; t++)
      i = e[t] + "", n = V - i.length, n && (a += dt(n)), a += i;
    o = e[t], i = o + "", n = V - i.length, n && (a += dt(n));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
function ke(e, t, n) {
  if (e !== ~~e || e < t || e > n)
    throw Error(gt + e);
}
function nn(e, t, n, i) {
  var r, a, o, s;
  for (a = e[0]; a >= 10; a /= 10) --t;
  return --t < 0 ? (t += V, r = 0) : (r = Math.ceil((t + 1) / V), t %= V), a = ge(10, V - t), s = e[r] % a | 0, i == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == ge(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[r + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (i || n < 4) && s == 9999 || !i && n > 3 && s == 4999) : o = ((i || n < 4) && s + 1 == a || !i && n > 3 && s + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == ge(10, t - 3) - 1, o;
}
function yn(e, t, n) {
  for (var i, r = [0], a, o = 0, s = e.length; o < s; ) {
    for (a = r.length; a--; ) r[a] *= t;
    for (r[0] += ki.indexOf(e.charAt(o++)), i = 0; i < r.length; i++)
      r[i] > n - 1 && (r[i + 1] === void 0 && (r[i + 1] = 0), r[i + 1] += r[i] / n | 0, r[i] %= n);
  }
  return r.reverse();
}
function fd(e, t) {
  var n, i, r;
  if (t.isZero()) return t;
  i = t.d.length, i < 32 ? (n = Math.ceil(i / 3), r = (1 / Yn(4, n)).toString()) : (n = 16, r = "2.3283064365386962890625e-10"), e.precision += n, t = Nt(e, 1, t.times(r), new e(1));
  for (var a = n; a--; ) {
    var o = t.times(t);
    t = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var re = /* @__PURE__ */ function() {
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
    var l, c, d, f, g, m, h, p, v, b, y, w, C, E, A, x, k, D, H, S, _ = i.constructor, O = i.s == r.s ? 1 : -1, L = i.d, N = r.d;
    if (!L || !L[0] || !N || !N[0])
      return new _(
        // Return NaN if either NaN, or both Infinity or 0.
        !i.s || !r.s || (L ? N && L[0] == N[0] : !N) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !N ? O * 0 : O / 0
        )
      );
    for (u ? (g = 1, c = i.e - r.e) : (u = je, g = V, c = Ce(i.e / g) - Ce(r.e / g)), H = N.length, k = L.length, v = new _(O), b = v.d = [], d = 0; N[d] == (L[d] || 0); d++) ;
    if (N[d] > (L[d] || 0) && c--, a == null ? (E = a = _.precision, o = _.rounding) : s ? E = a + (i.e - r.e) + 1 : E = a, E < 0)
      b.push(1), m = !0;
    else {
      if (E = E / g + 2 | 0, d = 0, H == 1) {
        for (f = 0, N = N[0], E++; (d < k || f) && E--; d++)
          A = f * u + (L[d] || 0), b[d] = A / N | 0, f = A % N | 0;
        m = f || d < k;
      } else {
        for (f = u / (N[0] + 1) | 0, f > 1 && (N = e(N, f, u), L = e(L, f, u), H = N.length, k = L.length), x = H, y = L.slice(0, H), w = y.length; w < H; ) y[w++] = 0;
        S = N.slice(), S.unshift(0), D = N[0], N[1] >= u / 2 && ++D;
        do
          f = 0, l = t(N, y, H, w), l < 0 ? (C = y[0], H != w && (C = C * u + (y[1] || 0)), f = C / D | 0, f > 1 ? (f >= u && (f = u - 1), h = e(N, f, u), p = h.length, w = y.length, l = t(h, y, p, w), l == 1 && (f--, n(h, H < p ? S : N, p, u))) : (f == 0 && (l = f = 1), h = N.slice()), p = h.length, p < w && h.unshift(0), n(y, h, w, u), l == -1 && (w = y.length, l = t(N, y, H, w), l < 1 && (f++, n(y, H < w ? S : N, w, u))), w = y.length) : l === 0 && (f++, y = [0]), b[d++] = f, l && y[0] ? y[w++] = L[x] || 0 : (y = [L[x]], w = 1);
        while ((x++ < k || y[0] !== void 0) && E--);
        m = y[0] !== void 0;
      }
      b[0] || b.shift();
    }
    if (g == 1)
      v.e = c, Ro = m;
    else {
      for (d = 1, f = b[0]; f >= 10; f /= 10) d++;
      v.e = d + c * g - 1, M(v, s ? a + v.e + 1 : a, o, m);
    }
    return v;
  };
}();
function M(e, t, n, i) {
  var r, a, o, s, u, l, c, d, f, g = e.constructor;
  e: if (t != null) {
    if (d = e.d, !d) return e;
    for (r = 1, s = d[0]; s >= 10; s /= 10) r++;
    if (a = t - r, a < 0)
      a += V, o = t, c = d[f = 0], u = c / ge(10, r - o - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / V), s = d.length, f >= s)
      if (i) {
        for (; s++ <= f; ) d.push(0);
        c = u = 0, r = 1, a %= V, o = a - V + 1;
      } else
        break e;
    else {
      for (c = s = d[f], r = 1; s >= 10; s /= 10) r++;
      a %= V, o = a - V + r, u = o < 0 ? 0 : c / ge(10, r - o - 1) % 10 | 0;
    }
    if (i = i || t < 0 || d[f + 1] !== void 0 || (o < 0 ? c : c % ge(10, r - o - 1)), l = n < 4 ? (u || i) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (n == 4 || i || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? o > 0 ? c / ge(10, r - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0])
      return d.length = 0, l ? (t -= e.e + 1, d[0] = ge(10, (V - t % V) % V), e.e = -t || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = ge(10, V - a), d[f] = o > 0 ? (c / ge(10, r - o) % ge(10, o) | 0) * s : 0), l)
      for (; ; )
        if (f == 0) {
          for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
          for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
          a != s && (e.e++, d[0] == je && (d[0] = 1));
          break;
        } else {
          if (d[f] += s, d[f] != je) break;
          d[f--] = 0, s = 1;
        }
    for (a = d.length; d[--a] === 0; ) d.pop();
  }
  return $ && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
}
function Qe(e, t, n) {
  if (!e.isFinite()) return Go(e);
  var i, r = e.e, a = xe(e.d), o = a.length;
  return t ? (n && (i = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + dt(i) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + dt(-r - 1) + a, n && (i = n - o) > 0 && (a += dt(i))) : r >= o ? (a += dt(r + 1 - o), n && (i = n - r - 1) > 0 && (a = a + "." + dt(i))) : ((i = r + 1) < o && (a = a.slice(0, i) + "." + a.slice(i)), n && (i = n - o) > 0 && (r + 1 === o && (a += "."), a += dt(i))), a;
}
function Zn(e, t) {
  var n = e[0];
  for (t *= V; n >= 10; n /= 10) t++;
  return t;
}
function kn(e, t, n) {
  if (t > dd)
    throw $ = !0, n && (e.precision = n), Error(Ho);
  return M(new e(Ln), t, 1, !0);
}
function Ye(e, t, n) {
  if (t > Hi) throw Error(Ho);
  return M(new e(Nn), t, n, !0);
}
function Do(e) {
  var t = e.length - 1, n = t * V + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function dt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function $o(e, t, n, i) {
  var r, a = new e(1), o = Math.ceil(i / V + 4);
  for ($ = !1; ; ) {
    if (n % 2 && (a = a.times(t), ta(a.d, o) && (r = !0)), n = Ce(n / 2), n === 0) {
      n = a.d.length - 1, r && a.d[n] === 0 && ++a.d[n];
      break;
    }
    t = t.times(t), ta(t.d, o);
  }
  return $ = !0, a;
}
function ea(e) {
  return e.d[e.d.length - 1] & 1;
}
function Uo(e, t, n) {
  for (var i, r, a = new e(t[0]), o = 0; ++o < t.length; ) {
    if (r = new e(t[o]), !r.s) {
      a = r;
      break;
    }
    i = a.cmp(r), (i === n || i === 0 && a.s === n) && (a = r);
  }
  return a;
}
function Fi(e, t) {
  var n, i, r, a, o, s, u, l = 0, c = 0, d = 0, f = e.constructor, g = f.rounding, m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? ($ = !1, u = m) : u = t, s = new f(0.03125); e.e > -2; )
    e = e.times(s), d += 5;
  for (i = Math.log(ge(2, d)) / Math.LN10 * 2 + 5 | 0, u += i, n = a = o = new f(1), f.precision = u; ; ) {
    if (a = M(a.times(e), u, 1), n = n.times(++c), s = o.plus(re(a, n, u, 1)), xe(s.d).slice(0, u) === xe(o.d).slice(0, u)) {
      for (r = d; r--; ) o = M(o.times(o), u, 1);
      if (t == null)
        if (l < 3 && nn(o.d, u - i, g, l))
          f.precision = u += 10, n = a = s = new f(1), c = 0, l++;
        else
          return M(o, f.precision = m, g, $ = !0);
      else
        return f.precision = m, o;
    }
    o = s;
  }
}
function ht(e, t) {
  var n, i, r, a, o, s, u, l, c, d, f, g = 1, m = 10, h = e, p = h.d, v = h.constructor, b = v.rounding, y = v.precision;
  if (h.s < 0 || !p || !p[0] || !h.e && p[0] == 1 && p.length == 1)
    return new v(p && !p[0] ? -1 / 0 : h.s != 1 ? NaN : p ? 0 : h);
  if (t == null ? ($ = !1, c = y) : c = t, v.precision = c += m, n = xe(p), i = n.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; i < 7 && i != 1 || i == 1 && n.charAt(1) > 3; )
      h = h.times(e), n = xe(h.d), i = n.charAt(0), g++;
    a = h.e, i > 1 ? (h = new v("0." + n), a++) : h = new v(i + "." + n.slice(1));
  } else
    return l = kn(v, c + 2, y).times(a + ""), h = ht(new v(i + "." + n.slice(1)), c - m).plus(l), v.precision = y, t == null ? M(h, y, b, $ = !0) : h;
  for (d = h, u = o = h = re(h.minus(1), h.plus(1), c, 1), f = M(h.times(h), c, 1), r = 3; ; ) {
    if (o = M(o.times(f), c, 1), l = u.plus(re(o, new v(r), c, 1)), xe(l.d).slice(0, c) === xe(u.d).slice(0, c))
      if (u = u.times(2), a !== 0 && (u = u.plus(kn(v, c + 2, y).times(a + ""))), u = re(u, new v(g), c, 1), t == null)
        if (nn(u.d, c - m, b, s))
          v.precision = c += m, l = o = h = re(d.minus(1), d.plus(1), c, 1), f = M(h.times(h), c, 1), r = s = 1;
        else
          return M(u, v.precision = y, b, $ = !0);
      else
        return v.precision = y, u;
    u = l, r += 2;
  }
}
function Go(e) {
  return String(e.s * e.s / 0);
}
function bn(e, t) {
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
function hd(e, t) {
  var n, i, r, a, o, s, u, l, c;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Vo.test(t)) return bn(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (ld.test(t))
    n = 16, t = t.toLowerCase();
  else if (sd.test(t))
    n = 2;
  else if (ud.test(t))
    n = 8;
  else
    throw Error(gt + t);
  for (a = t.search(/p/i), a > 0 ? (u = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, i = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, r = $o(i, new i(n), a, a * 2)), l = yn(t, n, je), c = l.length - 1, a = c; l[a] === 0; --a) l.pop();
  return a < 0 ? new i(e.s * 0) : (e.e = Zn(l, c), e.d = l, $ = !1, o && (e = re(e, r, s * 4)), u && (e = e.times(Math.abs(u) < 54 ? ge(2, u) : dn.pow(2, u))), $ = !0, e);
}
function vd(e, t) {
  var n, i = t.d.length;
  if (i < 3)
    return t.isZero() ? t : Nt(e, 2, t, t);
  n = 1.4 * Math.sqrt(i), n = n > 16 ? 16 : n | 0, t = t.times(1 / Yn(5, n)), t = Nt(e, 2, t, t);
  for (var r, a = new e(5), o = new e(16), s = new e(20); n--; )
    r = t.times(t), t = t.times(a.plus(r.times(o.times(r).minus(s))));
  return t;
}
function Nt(e, t, n, i, r) {
  var a, o, s, u, l = e.precision, c = Math.ceil(l / V);
  for ($ = !1, u = n.times(n), s = new e(i); ; ) {
    if (o = re(s.times(u), new e(t++ * t++), l, 1), s = r ? i.plus(o) : i.minus(o), i = re(o.times(u), new e(t++ * t++), l, 1), o = s.plus(i), o.d[c] !== void 0) {
      for (a = c; o.d[a] === s.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = s, s = i, i = o, o = a;
  }
  return $ = !0, o.d.length = c + 1, o;
}
function Yn(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function jo(e, t) {
  var n, i = t.s < 0, r = Ye(e, e.precision, 1), a = r.times(0.5);
  if (t = t.abs(), t.lte(a))
    return ot = i ? 4 : 1, t;
  if (n = t.divToInt(r), n.isZero())
    ot = i ? 3 : 2;
  else {
    if (t = t.minus(n.times(r)), t.lte(a))
      return ot = ea(n) ? i ? 2 : 3 : i ? 4 : 1, t;
    ot = ea(n) ? i ? 1 : 4 : i ? 3 : 2;
  }
  return t.minus(r).abs();
}
function gr(e, t, n, i) {
  var r, a, o, s, u, l, c, d, f, g = e.constructor, m = n !== void 0;
  if (m ? (ke(n, 1, yt), i === void 0 ? i = g.rounding : ke(i, 0, 8)) : (n = g.precision, i = g.rounding), !e.isFinite())
    c = Go(e);
  else {
    for (c = Qe(e), o = c.indexOf("."), m ? (r = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : r = t, o >= 0 && (c = c.replace(".", ""), f = new g(1), f.e = c.length - o, f.d = yn(Qe(f), 10, r), f.e = f.d.length), d = yn(c, 10, r), a = u = d.length; d[--u] == 0; ) d.pop();
    if (!d[0])
      c = m ? "0p+0" : "0";
    else {
      if (o < 0 ? a-- : (e = new g(e), e.d = d, e.e = a, e = re(e, f, n, i, 0, r), d = e.d, a = e.e, l = Ro), o = d[n], s = r / 2, l = l || d[n + 1] !== void 0, l = i < 4 ? (o !== void 0 || l) && (i === 0 || i === (e.s < 0 ? 3 : 2)) : o > s || o === s && (i === 4 || l || i === 6 && d[n - 1] & 1 || i === (e.s < 0 ? 8 : 7)), d.length = n, l)
        for (; ++d[--n] > r - 1; )
          d[n] = 0, n || (++a, d.unshift(1));
      for (u = d.length; !d[u - 1]; --u) ;
      for (o = 0, c = ""; o < u; o++) c += ki.charAt(d[o]);
      if (m) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --u; u % o; u++) c += "0";
            for (d = yn(c, r, t), u = d.length; !d[u - 1]; --u) ;
            for (o = 1, c = "1."; o < u; o++) c += ki.charAt(d[o]);
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
function ta(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function gd(e) {
  return new this(e).abs();
}
function md(e) {
  return new this(e).acos();
}
function pd(e) {
  return new this(e).acosh();
}
function yd(e, t) {
  return new this(e).plus(t);
}
function bd(e) {
  return new this(e).asin();
}
function wd(e) {
  return new this(e).asinh();
}
function Ed(e) {
  return new this(e).atan();
}
function Sd(e) {
  return new this(e).atanh();
}
function _d(e, t) {
  e = new this(e), t = new this(t);
  var n, i = this.precision, r = this.rounding, a = i + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Ye(this, a, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Ye(this, i, r) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Ye(this, a, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(re(e, t, a, 1)), t = Ye(this, a, 1), this.precision = i, this.rounding = r, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(re(e, t, a, 1)), n;
}
function xd(e) {
  return new this(e).cbrt();
}
function Cd(e) {
  return M(e = new this(e), e.e + 1, 2);
}
function Ad(e, t, n) {
  return new this(e).clamp(t, n);
}
function Pd(e) {
  if (!e || typeof e != "object") throw Error(Xn + "Object expected");
  var t, n, i, r = e.defaults === !0, a = [
    "precision",
    1,
    yt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -9e15,
    0,
    "toExpPos",
    0,
    Ni,
    "maxE",
    0,
    Ni,
    "minE",
    -9e15,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < a.length; t += 3)
    if (n = a[t], r && (this[n] = Ri[n]), (i = e[n]) !== void 0)
      if (Ce(i) === i && i >= a[t + 1] && i <= a[t + 2]) this[n] = i;
      else throw Error(gt + n + ": " + i);
  if (n = "crypto", r && (this[n] = Ri[n]), (i = e[n]) !== void 0)
    if (i === !0 || i === !1 || i === 0 || i === 1)
      if (i)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Fo);
      else
        this[n] = !1;
    else
      throw Error(gt + n + ": " + i);
  return this;
}
function Td(e) {
  return new this(e).cos();
}
function Bd(e) {
  return new this(e).cosh();
}
function zo(e) {
  var t, n, i;
  function r(a) {
    var o, s, u, l = this;
    if (!(l instanceof r)) return new r(a);
    if (l.constructor = r, na(a)) {
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
      return bn(l, a.toString());
    }
    if (u === "string")
      return (s = a.charCodeAt(0)) === 45 ? (a = a.slice(1), l.s = -1) : (s === 43 && (a = a.slice(1)), l.s = 1), Vo.test(a) ? bn(l, a) : hd(l, a);
    if (u === "bigint")
      return a < 0 ? (a = -a, l.s = -1) : l.s = 1, bn(l, a.toString());
    throw Error(gt + a);
  }
  if (r.prototype = T, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = Pd, r.clone = zo, r.isDecimal = na, r.abs = gd, r.acos = md, r.acosh = pd, r.add = yd, r.asin = bd, r.asinh = wd, r.atan = Ed, r.atanh = Sd, r.atan2 = _d, r.cbrt = xd, r.ceil = Cd, r.clamp = Ad, r.cos = Td, r.cosh = Bd, r.div = Id, r.exp = Od, r.floor = Ld, r.hypot = Nd, r.ln = kd, r.log = Rd, r.log10 = Fd, r.log2 = Hd, r.max = Md, r.min = Vd, r.mod = Dd, r.mul = $d, r.pow = Ud, r.random = Gd, r.round = jd, r.sign = zd, r.sin = Wd, r.sinh = qd, r.sqrt = Xd, r.sub = Zd, r.sum = Yd, r.tan = Kd, r.tanh = Jd, r.trunc = Qd, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < i.length; ) e.hasOwnProperty(n = i[t++]) || (e[n] = this[n]);
  return r.config(e), r;
}
function Id(e, t) {
  return new this(e).div(t);
}
function Od(e) {
  return new this(e).exp();
}
function Ld(e) {
  return M(e = new this(e), e.e + 1, 3);
}
function Nd() {
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
function na(e) {
  return e instanceof dn || e && e.toStringTag === Mo || !1;
}
function kd(e) {
  return new this(e).ln();
}
function Rd(e, t) {
  return new this(e).log(t);
}
function Hd(e) {
  return new this(e).log(2);
}
function Fd(e) {
  return new this(e).log(10);
}
function Md() {
  return Uo(this, arguments, -1);
}
function Vd() {
  return Uo(this, arguments, 1);
}
function Dd(e, t) {
  return new this(e).mod(t);
}
function $d(e, t) {
  return new this(e).mul(t);
}
function Ud(e, t) {
  return new this(e).pow(t);
}
function Gd(e) {
  var t, n, i, r, a = 0, o = new this(1), s = [];
  if (e === void 0 ? e = this.precision : ke(e, 1, yt), i = Math.ceil(e / V), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(i)); a < i; )
        r = t[a], r >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(i *= 4); a < i; )
        r = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(r % 1e7), a += 4);
      a = i / 4;
    } else
      throw Error(Fo);
  else for (; a < i; ) s[a++] = Math.random() * 1e7 | 0;
  for (i = s[--a], e %= V, i && e && (r = ge(10, V - e), s[a] = (i / r | 0) * r); s[a] === 0; a--) s.pop();
  if (a < 0)
    n = 0, s = [0];
  else {
    for (n = -1; s[0] === 0; n -= V) s.shift();
    for (i = 1, r = s[0]; r >= 10; r /= 10) i++;
    i < V && (n -= V - i);
  }
  return o.e = n, o.d = s, o;
}
function jd(e) {
  return M(e = new this(e), e.e + 1, this.rounding);
}
function zd(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Wd(e) {
  return new this(e).sin();
}
function qd(e) {
  return new this(e).sinh();
}
function Xd(e) {
  return new this(e).sqrt();
}
function Zd(e, t) {
  return new this(e).sub(t);
}
function Yd() {
  var e = 0, t = arguments, n = new this(t[e]);
  for ($ = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return $ = !0, M(n, this.precision, this.rounding);
}
function Kd(e) {
  return new this(e).tan();
}
function Jd(e) {
  return new this(e).tanh();
}
function Qd(e) {
  return M(e = new this(e), e.e + 1, 1);
}
T[Symbol.for("nodejs.util.inspect.custom")] = T.toString;
T[Symbol.toStringTag] = "Decimal";
var dn = T.constructor = zo(Ri);
Ln = new dn(Ln);
Nn = new dn(Nn);
var ef = Object.defineProperty, tf = Object.defineProperties, nf = Object.getOwnPropertyDescriptors, Rn = Object.getOwnPropertySymbols, Wo = Object.prototype.hasOwnProperty, qo = Object.prototype.propertyIsEnumerable, ia = (e, t, n) => t in e ? ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pt = (e, t) => {
  for (var n in t || (t = {}))
    Wo.call(t, n) && ia(e, n, t[n]);
  if (Rn)
    for (var n of Rn(t))
      qo.call(t, n) && ia(e, n, t[n]);
  return e;
}, rf = (e, t) => tf(e, nf(t)), Xo = (e, t) => {
  var n = {};
  for (var i in e)
    Wo.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Rn)
    for (var i of Rn(e))
      t.indexOf(i) < 0 && qo.call(e, i) && (n[i] = e[i]);
  return n;
}, ra;
function af(e, t) {
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
function Kn(e) {
  return !!(e && typeof e.then == "function");
}
function wn(e, t) {
  return Kn(e) ? Promise.resolve(e).then(t) : t(e);
}
function ui(e, t, n) {
  function i(r) {
    const a = t(r);
    throw e.emit(a), console.error(a), a;
  }
  try {
    const r = n();
    return Kn(r) ? r.catch(i) : r;
  } catch (r) {
    i(r);
  }
}
function aa(e) {
  const t = (Array.isArray(e) ? e : [e]).map((a) => `'${a}'`), n = t.slice(-2).join(" or ");
  return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function of(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function Zo(e) {
  if (typeof e == "string")
    return [e];
  if (Array.isArray(e))
    return e;
}
function $e(e) {
  return Zo(e) || [];
}
function sf(e, t) {
  return of(t) ? $e(t == null ? void 0 : t[e]) : $e(t);
}
function Mi(e) {
  return Array.from(new Set(e));
}
function Yo(e) {
  return e && e.replace(/\/+$/, "");
}
function lf(e) {
  if (typeof e == "string")
    return e;
  if (typeof (e == null ? void 0 : e.message) == "string")
    return e.message;
}
const uf = (e, t) => fetch(e, t);
function cf(e) {
  return Object.fromEntries(new Headers(e).entries());
}
const Ko = (e = uf) => (t, n) => {
  let i = cf(n == null ? void 0 : n.headers);
  return i["x-api-key"] && (i = Object.assign({ "x-tolgee-sdk-type": "JS", "x-tolgee-sdk-version": "prerelease" }, i)), e(t, Object.assign(Object.assign({}, n), { headers: i }));
};
function rt(e) {
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
function df(e, t, n) {
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
        subscribeNs: (d) => ($e(d).forEach((f) => l.namespaces.add(f)), d === void 0 && l.namespaces.add(n()), c)
      };
      return c;
    }
  });
}
function ff(e, t) {
  let n = !0;
  function i() {
    return n;
  }
  const r = Object.freeze({
    onPendingLanguageChange: rt(i),
    onLanguageChange: rt(i),
    onLoadingChange: rt(i),
    onFetchingChange: rt(i),
    onInitialLoaded: rt(i),
    onRunningChange: rt(i),
    onCacheChange: rt(i),
    onUpdate: df(i, e, t),
    onPermanentChange: rt(i),
    onError: rt(i),
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
class oa extends Error {
  constructor(t, n, i = !1) {
    const { language: r, namespace: a } = t;
    super(`Tolgee: Failed to fetch record for "${r}"${a && ` and "${a}"`}`), this.cause = n, this.isDev = i, this.name = "RecordFetchError", this.language = r, this.namespace = a;
  }
}
class hf extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageDetectorError";
  }
}
class sa extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "LanguageStorageError";
  }
}
const Jo = (e) => {
  const t = /* @__PURE__ */ new Map();
  return Object.entries(e).forEach(([n, i]) => {
    if (i != null) {
      if (typeof i == "object") {
        Jo(i).forEach((r, a) => {
          t.set(n + "." + a, r);
        });
        return;
      }
      t.set(n, i);
    }
  }), t;
}, Xt = (e) => {
  const [t, ...n] = e.split(":"), i = n.join(":");
  return { language: t, namespace: i || "" };
}, at = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function vf(e, t, n, i, r, a, o) {
  const s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  let l = {}, c = 0;
  function d(h, p, v) {
    const b = at(h);
    u.set(b, {
      data: Jo(p),
      version: v
    }), e.onCacheChange.emit(h);
  }
  async function f(h) {
    function p(y) {
      const w = new oa(h, y);
      throw e.onError.emit(w), console.error(w), w;
    }
    const v = t(h);
    if (Kn(v)) {
      const y = await v.catch(p);
      if (y !== void 0)
        return y;
    }
    const b = l[at(h)];
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
        const y = new oa(h, b, !0);
        e.onError.emit(y), console.warn(y);
      }
    return v || (v = await f(h)), v;
  }
  const m = Object.freeze({
    addStaticData(h) {
      h && (l = Object.assign(Object.assign({}, l), h), Object.entries(h).forEach(([p, v]) => {
        if (typeof v != "function") {
          const b = Xt(p), y = u.get(p);
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
      const v = u.get(at(h));
      return v && p ? v.version === c : !!v;
    },
    getRecord(h) {
      var p;
      return (p = u.get(at(i(h)))) === null || p === void 0 ? void 0 : p.data;
    },
    getTranslation(h, p) {
      var v;
      return (v = u.get(at(h))) === null || v === void 0 ? void 0 : v.data.get(p);
    },
    getTranslationNs(h, p, v) {
      var b;
      for (const y of h)
        for (const w of p) {
          const C = (b = u.get(at({ language: w, namespace: y }))) === null || b === void 0 ? void 0 : b.data.get(v);
          if (C != null)
            return [y];
        }
      return Mi(h);
    },
    getTranslationFallback(h, p, v) {
      var b;
      for (const y of h)
        for (const w of p) {
          const C = (b = u.get(at({ language: w, namespace: y }))) === null || b === void 0 ? void 0 : b.data.get(v);
          if (C != null)
            return C;
        }
    },
    changeTranslation(h, p, v) {
      var b;
      const y = (b = u.get(at(h))) === null || b === void 0 ? void 0 : b.data;
      y == null || y.set(p, v), e.onCacheChange.emit(Object.assign(Object.assign({}, h), { key: p }));
    },
    isFetching(h) {
      if (r())
        return !0;
      if (h === void 0)
        return s.size > 0;
      const p = $e(h);
      return !!Array.from(s.keys()).find((v) => p.includes(Xt(v).namespace));
    },
    isLoading(h, p) {
      const v = $e(p);
      return !!(r() || Array.from(s.keys()).find((b) => {
        const y = Xt(b);
        return (!v.length || v.includes(y.namespace)) && !m.exists({
          namespace: y.namespace,
          language: h
        });
      }));
    },
    async loadRecords(h, p) {
      const v = h.map((y) => {
        const w = i(y), C = at(w), E = s.get(C);
        if (E)
          return {
            new: !1,
            promise: E,
            keyObject: w,
            cacheKey: C
          };
        const A = g(w, p) || Promise.resolve(void 0);
        return s.set(C, A), {
          new: !0,
          promise: A,
          keyObject: w,
          cacheKey: C
        };
      });
      a.notify(), o.notify();
      const b = await Promise.all(v.map((y) => y.promise));
      return v.forEach((y, w) => {
        const C = s.get(y.cacheKey) !== y.promise;
        if (y.new && !C) {
          s.delete(y.cacheKey);
          const E = b[w];
          E ? m.addRecord(y.keyObject, E) : m.getRecord(y.keyObject) || m.addRecord(y.keyObject, {});
        }
      }), a.notify(), o.notify(), v.map((y) => m.getRecord(y.keyObject));
    },
    getAllRecords() {
      return Array.from(u.entries()).map(([p, v]) => Object.assign(Object.assign({}, Xt(p)), { data: v.data }));
    }
  });
  return m;
}
function Qo(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
  return n;
}
const gf = {
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
}, Vi = "invalid", mf = "https://app.tolgee.io", pf = ({ key: e }) => e, yf = {
  defaultNs: "",
  observerOptions: gf,
  observerType: "invisible",
  onFormatError: Vi,
  apiUrl: mf,
  fetch: Ko(),
  onTranslationMissing: pf
}, Di = (...e) => {
  let t = {};
  return e.forEach((n) => {
    t = Object.assign(Object.assign(Object.assign({}, t), n), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), n == null ? void 0 : n.observerOptions) });
  }), t;
};
function la(e, t) {
  const n = Di(yf, t == null ? void 0 : t.initialOptions, e);
  return n.apiUrl = Yo(n.apiUrl), e != null && e.fetch && (n.fetch = Ko(e.fetch)), {
    initialOptions: n,
    activeNamespaces: (t == null ? void 0 : t.activeNamespaces) || /* @__PURE__ */ new Map(),
    language: t == null ? void 0 : t.language,
    pendingLanguage: t == null ? void 0 : t.language,
    isInitialLoading: !1,
    isRunning: !1
  };
}
function bf(e, t, n, i, r, a, o, s) {
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
  }, c = async ({ keysAndDefaults: S, target: _ }) => {
    var O;
    const L = S.map(({ key: N, ns: U, defaultValue: Y }) => ({
      key: N,
      defaultValue: Y,
      fallbackNamespaces: i(U),
      namespace: r({ key: N, ns: U })[0],
      translation: a({
        key: N,
        ns: U
      })
    }));
    (O = l.ui) === null || O === void 0 || O.handleElementClick(L, _);
  }, d = (S, _) => {
    var O;
    return ((O = l.observer) === null || O === void 0 ? void 0 : O.findPositions(S, _)) || [];
  };
  function f(S) {
    const _ = a({
      key: S.key,
      ns: S.ns
    });
    return H.formatTranslation(Object.assign(Object.assign({}, S), { translation: _, formatEnabled: !0 }));
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
  function C(S) {
    l.languageDetector = S;
  }
  function E() {
    return ui(s.onError, (S) => new sa("Tolgee: Failed to load language", S), () => {
      var S;
      return (S = l.languageStorage) === null || S === void 0 ? void 0 : S.getLanguage(g());
    });
  }
  function A() {
    if (!l.languageDetector)
      return;
    const S = n();
    return ui(s.onError, (_) => new hf("Tolgee: Failed to detect language", _), () => {
      var _;
      return (_ = l.languageDetector) === null || _ === void 0 ? void 0 : _.getLanguage(Object.assign({ availableLanguages: S }, g()));
    });
  }
  function x(S) {
    S && l.backends.push(S);
  }
  function k(S) {
    l.devBackend = S;
  }
  function D(S, _) {
    const O = Object.freeze({
      setFinalFormatter: v,
      addFormatter: p,
      setObserver: m,
      hasObserver: h,
      setUi: b,
      hasUi: y,
      setDevBackend: k,
      addBackend: x,
      setLanguageDetector: C,
      setLanguageStorage: w
    });
    _(S, O);
  }
  const H = Object.freeze({
    addPlugin: D,
    findPositions: d,
    run() {
      var S, _;
      const { apiKey: O, apiUrl: L, projectId: N, observerOptions: U, tagNewKeys: Y, filterTag: oe } = t();
      l.ui = (S = u.ui) === null || S === void 0 ? void 0 : S.call(u, {
        apiKey: O,
        apiUrl: L,
        projectId: N,
        highlight: H.highlight,
        changeTranslation: o,
        findPositions: d,
        onPermanentChange: (G) => s.onPermanentChange.emit(G),
        tagNewKeys: Y,
        filterTag: oe
      }), (_ = l.observer) === null || _ === void 0 || _.run({
        mouseHighlight: !0,
        options: U,
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
      const S = n(), _ = E();
      return wn(_, (O) => (!S || S.includes(O)) && O ? O : A());
    },
    setStoredLanguage(S) {
      return ui(s.onError, (_) => new sa("Tolgee: Failed to store language", _), () => {
        var _;
        return (_ = l.languageStorage) === null || _ === void 0 ? void 0 : _.setLanguage(S, g());
      });
    },
    getDevBackend() {
      return l.devBackend;
    },
    getBackendRecord: async ({ language: S, namespace: _ }) => {
      for (const O of l.backends) {
        const L = await O.getRecord(Object.assign({
          language: S,
          namespace: _
        }, g()));
        if (L !== void 0)
          return L;
      }
    },
    getBackendDevRecord: async ({ language: S, namespace: _ }) => {
      var O;
      const { apiKey: L, apiUrl: N, projectId: U, filterTag: Y } = t();
      return (O = l.devBackend) === null || O === void 0 ? void 0 : O.getRecord(Object.assign({
        apiKey: L,
        apiUrl: N,
        projectId: U,
        language: S,
        namespace: _,
        filterTag: Y
      }, g()));
    },
    getLanguageDetector() {
      return l.languageDetector;
    },
    retranslate() {
      var S;
      (S = l.observer) === null || S === void 0 || S.retranslate();
    },
    highlight: (S, _) => {
      var O, L;
      return ((L = (O = l.observer) === null || O === void 0 ? void 0 : O.highlight) === null || L === void 0 ? void 0 : L.call(O, S, _)) || { unhighlight() {
      } };
    },
    unwrap(S) {
      var _;
      return l.observer ? (_ = l.observer) === null || _ === void 0 ? void 0 : _.unwrap(S) : { text: S, keys: [] };
    },
    wrap(S) {
      var _;
      return l.observer ? (_ = l.observer) === null || _ === void 0 ? void 0 : _.wrap(S) : S.translation;
    },
    hasDevBackend() {
      return !!H.getDevBackend();
    },
    formatTranslation(S) {
      var _, { formatEnabled: O } = S, L = Qo(S, ["formatEnabled"]);
      const { key: N, translation: U, defaultValue: Y, noWrap: oe, params: G, ns: de, orEmpty: Ae } = L, se = U ?? Y;
      let j = "";
      U == null && (j = t().onTranslationMissing(L));
      let ce = se ?? (Ae ? "" : j);
      const Ie = e(), q = O || !(!((_ = l.observer) === null || _ === void 0) && _.outputNotFormattable), ve = (ye) => l.observer && !oe ? l.observer.wrap({
        key: N,
        translation: ye,
        defaultValue: Y,
        params: G,
        ns: de
      }) : ye;
      ce = ve(ce);
      try {
        if (se && Ie && q)
          for (const ye of l.formatters)
            ce = ye.format({
              translation: ce,
              language: Ie,
              params: G
            });
        l.finalFormatter && se && Ie && q && (ce = l.finalFormatter.format({
          translation: ce,
          language: Ie,
          params: G
        }));
      } catch (ye) {
        console.error(ye);
        const De = lf(ye) || Vi, nt = t().onFormatError, Oe = typeof nt;
        Oe === "string" ? ce = nt : Oe === "function" ? ce = nt(De, L) : ce = Vi, ce = ve(ce);
      }
      return ce;
    }
  });
  return H;
}
const ua = (e, t, n) => {
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
function wf(e, t, n) {
  let i = la(), r;
  const a = Object.freeze({
    init(o) {
      i = la(o, i);
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
      $e(o).forEach((u) => {
        const l = i.activeNamespaces.get(u);
        l !== void 0 ? i.activeNamespaces.set(u, l + 1) : i.activeNamespaces.set(u, 1);
      });
    },
    removeActiveNs(o) {
      $e(o).forEach((u) => {
        const l = i.activeNamespaces.get(u);
        l !== void 0 && l > 1 ? i.activeNamespaces.set(u, l - 1) : i.activeNamespaces.delete(u);
      });
    },
    getRequiredNamespaces() {
      return Mi([
        ...i.initialOptions.ns || [i.initialOptions.defaultNs],
        ...$e(i.initialOptions.fallbackNs),
        ...i.activeNamespaces.keys()
      ]);
    },
    getFallbackLangs(o) {
      const s = o || a.getLanguage();
      return s ? Mi([
        s,
        ...sf(s, i.initialOptions.fallbackLanguage)
      ]) : [];
    },
    getFallbackNs() {
      return $e(i.initialOptions.fallbackNs);
    },
    getDefaultNs(o) {
      return o === void 0 ? i.initialOptions.defaultNs : o;
    },
    getAvailableLanguages() {
      if (i.initialOptions.availableLanguages)
        return i.initialOptions.availableLanguages;
      if (i.initialOptions.staticData) {
        const o = Object.keys(i.initialOptions.staticData).map((s) => Xt(s).language);
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
      o ? r = Object.assign(Object.assign({}, o), { apiUrl: Yo(o.apiUrl) }) : r = void 0;
    }
  });
  return a;
}
function Ef(e) {
  var { ns: t, noWrap: n, orEmpty: i, params: r, language: a } = e, o = Qo(e, ["ns", "noWrap", "orEmpty", "params", "language"]);
  return Object.assign(Object.assign({}, {
    ns: t,
    noWrap: n,
    orEmpty: i,
    language: a
  }), { params: Object.assign({}, o) });
}
const Hn = (e, ...t) => {
  let n = {}, i;
  return typeof e == "object" ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], i = t[1]) : typeof t[0] == "object" && (i = t[0])), i && (n = Object.assign(Object.assign({}, Ef(i)), n)), n;
};
function Sf({ options: e }) {
  const t = ff(u, l), n = ua(!1, () => o.isFetching(), t.onFetchingChange.emit), i = ua(!1, () => C.isLoading(), t.onLoadingChange.emit), r = wf(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = bf(r.getLanguage, r.getInitialOptions, r.getAvailableLanguages, c, p, v, f, t), o = vf(t, a.getBackendRecord, a.getBackendDevRecord, r.withDefaultNs, r.isInitialLoading, n, i);
  e && g(e);
  let s;
  t.onUpdate.listen(() => {
    r.isRunning() && a.retranslate();
  });
  function u() {
    return r.getFallbackNs();
  }
  function l(E) {
    return r.getDefaultNs(E);
  }
  function c(E) {
    return [...$e(l(E)), ...u()];
  }
  function d(E) {
    return [
      ...$e(E ?? l()),
      ...r.getRequiredNamespaces()
    ];
  }
  function f(E, A, x) {
    const k = r.withDefaultNs(E), D = o.getTranslation(k, A);
    return o.changeTranslation(k, A, x), {
      revert() {
        o.changeTranslation(k, A, D);
      }
    };
  }
  function g(E) {
    r.init(E), o.addStaticData(r.getInitialOptions().staticData);
  }
  function m(E, A) {
    const x = r.getFallbackLangs(E), k = d(A), D = [];
    return x.forEach((H) => {
      k.forEach((S) => {
        o.exists({ language: H, namespace: S }, !0) || D.push({ language: H, namespace: S });
      });
    }), D;
  }
  function h(E, A) {
    const x = m(E, A);
    if (x.length)
      return wn(C.loadRecords(x), () => {
      });
  }
  function p({ key: E, ns: A }) {
    const x = r.getFallbackLangs(), k = c(A ?? void 0);
    return o.getTranslationNs(k, x, E);
  }
  function v({ key: E, ns: A, language: x }) {
    const k = c(A ?? void 0), D = r.getFallbackLangs(x);
    return o.getTranslationFallback(k, D, E);
  }
  function b() {
    const E = wn(y(), () => h());
    if (Kn(E))
      return r.setInitialLoading(!0), n.notify(), i.notify(), Promise.resolve(E).then(() => {
        r.setInitialLoading(!1), n.notify(), i.notify(), t.onInitialLoaded.emit();
      });
    t.onInitialLoaded.emit();
  }
  function y() {
    if (r.getLanguage())
      return;
    const A = a.getInitialLanguage();
    return wn(A, (x) => {
      const k = x || r.getInitialOptions().defaultLanguage;
      k && r.setLanguage(k);
    });
  }
  function w() {
    if ((a.getLanguageDetector() || a.getLanguageStorage()) && !r.getAvailableLanguages())
      throw new Error(aa("availableLanguages"));
    if (!r.getLanguage() && !r.getInitialOptions().defaultLanguage)
      throw new Error(aa(["defaultLanguage", "language"]));
  }
  const C = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), r), a), o), {
    init: g,
    getTranslation: v,
    changeTranslation: f,
    getTranslationNs: p,
    getDefaultAndFallbackNs: c,
    findPositions: a.findPositions,
    getRequiredRecords: m,
    async changeLanguage(E) {
      r.getPendingLanguage() === E && r.getLanguage() === E || (r.setPendingLanguage(E), r.isRunning() && await h(E), E === r.getPendingLanguage() && (r.setLanguage(E), await a.setStoredLanguage(E)));
    },
    async addActiveNs(E, A) {
      A || r.addActiveNs(E), r.isRunning() && await h(void 0, E);
    },
    loadRecords(E) {
      return o.loadRecords(E, C.isDev());
    },
    async loadRecord(E) {
      return (await C.loadRecords([E]))[0];
    },
    isLoading(E) {
      return o.isLoading(r.getLanguage(), E);
    },
    isLoaded(E) {
      const A = r.getLanguage();
      if (!A)
        return !1;
      const x = r.getFallbackLangs(A), k = d(E), D = [];
      return x.forEach((H) => {
        k.forEach((S) => {
          o.exists({ language: H, namespace: S }) || D.push({ language: H, namespace: S });
        });
      }), D.length === 0;
    },
    t: (...E) => {
      const A = Hn(...E), x = v(A);
      return a.formatTranslation(Object.assign(Object.assign({}, A), { translation: x }));
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
  return C;
}
function _f(e) {
  const t = Sf({
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
const xf = () => {
  const e = {
    plugins: [],
    options: {}
  }, t = Object.freeze({
    use(n) {
      return e.plugins.push(n), t;
    },
    updateDefaults(n) {
      return e.options = Di(e.options, n), t;
    },
    init(n) {
      const i = _f(Di(e.options, n));
      return e.plugins.forEach(i.addPlugin), i;
    }
  });
  return t;
}, es = 0, $i = 1, Cf = 2;
let Af = class extends Error {
  constructor(t, n, i) {
    let r, a = "";
    t === es ? r = "Empty parameter" : t === $i ? (r = "Unexpected character", a = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${n} in "${i}"` + (a ? `
` + a : "")), this.code = t, this.index = n;
  }
};
function ca(e) {
  return /\s/.test(e);
}
const ct = 0, Ui = 1, En = 2, ci = 3, di = 4, Pf = /* @__PURE__ */ new Set([
  En,
  Ui,
  ct
]), Gi = "'", Tf = /* @__PURE__ */ new Set(["{", "}", Gi]), Bf = (e) => /[0-9a-zA-Z_]/.test(e);
function If(e) {
  let t = ct, n = "", i = "", r = "";
  const a = [], o = [];
  let s = 0;
  function u(f) {
    throw new Af(f, s, e);
  }
  const l = () => {
    a.push(n), n = "";
  }, c = () => {
    Bf(r) || u($i), i += r;
  }, d = () => {
    i === "" && u(es), o.push(i), i = "";
  };
  for (s = 0; s < e.length; s++)
    switch (r = e[s], t) {
      case ct:
        r === Gi ? (n += r, t = Ui) : r === "{" ? (l(), t = ci) : (n += r, t = ct);
        break;
      case Ui:
        Tf.has(r) ? (n = n.slice(0, -1) + r, t = En) : (n += r, t = ct);
        break;
      case En:
        r === Gi ? t = ct : (n += r, t = En);
        break;
      case ci:
        r === "}" ? (d(), t = ct) : ca(r) ? i !== "" && (d(), t = di) : (c(), t = ci);
        break;
      case di:
        r == "}" ? t = ct : ca(r) ? t = di : u($i);
    }
  return Pf.has(t) || u(Cf), l(), [a, o];
}
function Of(e, t) {
  const [n, i] = If(e), r = [n[0]];
  for (let a = 1; a < n.length; a++) {
    const o = t == null ? void 0 : t[i[a - 1]];
    if (o === void 0)
      throw new Error(`Missing parameter "${i[a - 1]}" in "${e}"`);
    r.push(String(o)), r.push(n[a]);
  }
  return r.join("");
}
function Lf() {
  return {
    format: ({ translation: e, params: t }) => Of(e, t)
  };
}
const Nf = () => (e, t) => (t.setFinalFormatter(Lf()), e);
var fi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, da = {};
(function(e) {
  function t(v, b) {
    var y;
    return v instanceof Buffer ? y = v : y = Buffer.from(v.buffer, v.byteOffset, v.byteLength), y.toString(b);
  }
  var n = function(v) {
    return Buffer.from(v);
  };
  function i(v) {
    for (var b = 0, y = Math.min(256 * 256, v.length + 1), w = new Uint16Array(y), C = [], E = 0; ; ) {
      var A = b < v.length;
      if (!A || E >= y - 1) {
        var x = w.subarray(0, E), k = x;
        if (C.push(String.fromCharCode.apply(null, k)), !A)
          return C.join("");
        v = v.subarray(b), b = 0, E = 0;
      }
      var D = v[b++];
      if ((D & 128) === 0)
        w[E++] = D;
      else if ((D & 224) === 192) {
        var H = v[b++] & 63;
        w[E++] = (D & 31) << 6 | H;
      } else if ((D & 240) === 224) {
        var H = v[b++] & 63, S = v[b++] & 63;
        w[E++] = (D & 31) << 12 | H << 6 | S;
      } else if ((D & 248) === 240) {
        var H = v[b++] & 63, S = v[b++] & 63, _ = v[b++] & 63, O = (D & 7) << 18 | H << 12 | S << 6 | _;
        O > 65535 && (O -= 65536, w[E++] = O >>> 10 & 1023 | 55296, O = 56320 | O & 1023), w[E++] = O;
      }
    }
  }
  function r(v) {
    for (var b = 0, y = v.length, w = 0, C = Math.max(32, y + (y >>> 1) + 7), E = new Uint8Array(C >>> 3 << 3); b < y; ) {
      var A = v.charCodeAt(b++);
      if (A >= 55296 && A <= 56319) {
        if (b < y) {
          var x = v.charCodeAt(b);
          (x & 64512) === 56320 && (++b, A = ((A & 1023) << 10) + (x & 1023) + 65536);
        }
        if (A >= 55296 && A <= 56319)
          continue;
      }
      if (w + 4 > E.length) {
        C += 8, C *= 1 + b / v.length * 2, C = C >>> 3 << 3;
        var k = new Uint8Array(C);
        k.set(E), E = k;
      }
      if ((A & 4294967168) === 0) {
        E[w++] = A;
        continue;
      } else if ((A & 4294965248) === 0)
        E[w++] = A >>> 6 & 31 | 192;
      else if ((A & 4294901760) === 0)
        E[w++] = A >>> 12 & 15 | 224, E[w++] = A >>> 6 & 63 | 128;
      else if ((A & 4292870144) === 0)
        E[w++] = A >>> 18 & 7 | 240, E[w++] = A >>> 12 & 63 | 128, E[w++] = A >>> 6 & 63 | 128;
      else
        continue;
      E[w++] = A & 63 | 128;
    }
    return E.slice ? E.slice(0, w) : E.subarray(0, w);
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
})(typeof window < "u" ? window : fi);
const kf = /* @__PURE__ */ af({
  __proto__: null,
  default: da
}, [da]);
(ra = console.assert) == null || ra.call(console, kf);
function Rf(e, t) {
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
function Hf({
  message: e,
  recievingMessage: t,
  data: n,
  attempts: i = 1,
  timeout: r = 300
}) {
  let a = !1;
  const o = () => new Promise((u, l) => {
    const c = Rf(t, f);
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
function Ff() {
  let e;
  async function t(n) {
    e == null || e();
    const { cancel: i, promise: r } = Hf({
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
const Mf = "tolgee-in-context-tools.umd.min.js", Vf = "@tolgee/in-context-tools", Df = "InContextTools", $f = "https://cdn.jsdelivr.net/npm";
function Uf(e) {
  return new Promise((t, n) => {
    const i = document.createElement("script");
    i.src = e, i.addEventListener("load", () => t()), i.addEventListener("error", (r) => n(r.error)), document.head.appendChild(i);
  });
}
let hi = null;
function Gf(e) {
  return hi || (hi = Uf(
    `${$f}/@tolgee/web@${e}/dist/${Mf}`
  ).then(() => window[Vf][Df])), hi;
}
const ts = "__tolgee_apiKey", ns = "__tolgee_apiUrl";
function fa() {
  const e = sessionStorage.getItem(ts) || void 0, t = sessionStorage.getItem(ns) || void 0;
  if (!(!e || !t))
    return {
      apiKey: e,
      apiUrl: t
    };
}
function jf() {
  sessionStorage.removeItem(ts), sessionStorage.removeItem(ns);
}
function zf(e) {
  document.readyState !== "loading" ? Promise.resolve().then(() => {
    e();
  }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
}
let is = () => (e) => e;
const Wf = () => {
  if (typeof window > "u")
    return !1;
  try {
    return typeof sessionStorage < "u" && sessionStorage;
  } catch (e) {
    return console.error("sessionStorage not available", e), !1;
  }
};
Wf() && (is = () => (e) => {
  const t = Ff(), n = () => ({
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
    const a = await Gf(
      "prerelease"
    );
    return (o) => {
      const s = fa();
      return o.addPlugin(a({ credentials: s })), o;
    };
  };
  return e.on("running", ({ value: a }) => {
    a && zf(() => {
      t.update(n()).catch(jf);
    });
  }), fa() && i().then((a) => {
    e.addPlugin(a);
  }).catch((a) => {
    console.error("Tolgee: Failed to load in-context tools"), console.error(a);
  }), e;
});
const qf = (e, t, n, i) => {
  var r = i, { signal: a } = r, o = Xo(r, ["signal"]);
  const s = new AbortController();
  return new Promise((u, l) => {
    const c = e(t, Pt({ signal: s.signal }, o));
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
function ha(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const Xf = ({ namespace: e, language: t, prefix: n }) => e ? `${ha(n)}/${e}/${t}.json` : `${ha(n)}/${t}.json`;
function Zf(e) {
  return e.json();
}
const va = {
  prefix: "/i18n",
  getPath: Xf,
  getData: Zf,
  headers: {
    Accept: "application/json"
  },
  timeout: void 0,
  fallbackOnFail: !1
};
function Yf(e) {
  const t = rf(Pt(Pt({}, va), e), {
    headers: Pt(Pt({}, va.headers), e == null ? void 0 : e.headers)
  }), {
    prefix: n,
    getPath: i,
    getData: r,
    headers: a,
    timeout: o,
    fallbackOnFail: s
  } = t, u = Xo(t, [
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
        const g = await qf(d, f, o, Pt({
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
const Kf = (e) => (t, n) => (n.addBackend(Yf(e)), t);
function Jf() {
  return xf().use(is());
}
const Qf = () => (e) => e;
Be({
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
    const t = pe("tolgeeContext");
    e.tolgee && (t.value.tolgee = e.tolgee);
    const n = P(() => t.value.tolgee);
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
    Ft(() => {
      t.value.isInitialRender = !1;
    });
    const i = z(!n.value.isLoaded());
    return an(() => {
      n.value.run().finally(() => {
        i.value = !1;
      });
    }), Pa(() => {
      n.value.stop();
    }), { isLoading: i };
  },
  render() {
    var e, t, n, i;
    return this.isLoading ? ((i = (n = this.$slots).fallback) === null || i === void 0 ? void 0 : i.call(n)) || this.fallback || null : (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
});
const rs = (e) => {
  const t = Zo(e), n = pe("tolgeeContext"), i = P(() => n.value.tolgee);
  if (!i.value)
    throw new Error("Tolgee instance not provided");
  const r = z(u()), a = i.value.onNsUpdate(() => {
    r.value = u(), o.value = !i.value.isLoaded(t);
  });
  a.subscribeNs(t), i.value.addActiveNs(t), Pa(() => {
    a == null || a.unsubscribe(), i.value.removeActiveNs(t);
  });
  const o = z(!i.value.isLoaded(t)), s = (l) => {
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
Be({
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
    const { t: e } = rs();
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
const eh = (e) => {
  const { t, isLoading: n } = rs(e);
  return { t: P(() => (...r) => {
    const a = Hn(...r);
    return t.value(a);
  }), isLoading: n };
}, th = {
  install(e, t) {
    const n = t == null ? void 0 : t.tolgee;
    if (!n)
      throw new Error("Tolgee instance not passed in options");
    const i = !!(t != null && t.enableSSR), r = z({
      tolgee: n,
      isInitialRender: i
    });
    if (e.provide("tolgeeContext", r), i) {
      const a = () => Object.assign(Object.assign({}, r.value.tolgee), { t: (...s) => {
        const u = Hn(...s);
        return n.t(Object.assign({}, u));
      } }), o = () => Object.assign(Object.assign({}, r.value.tolgee), { t: (...s) => {
        const u = Hn(...s);
        return n.t(Object.assign(Object.assign({}, u), { noWrap: !0 }));
      } });
      r.value.tolgee = o(), te(() => r.value.isInitialRender, (s) => {
        s || (r.value.tolgee = a());
      });
    }
    r.value.tolgee.on("cache", () => {
      r.value.tolgee = Object.freeze(Object.assign({}, r.value.tolgee));
    }), e.config.globalProperties.$t = (...a) => r.value.tolgee.t(...a), e.config.globalProperties.$tolgee = r.value.tolgee;
  }
};
var ji = function(e, t) {
  return ji = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, ji(e, t);
};
function Jn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ji(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var J = function() {
  return J = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, J.apply(this, arguments);
};
function nh(e, t) {
  var n = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
  return n;
}
function vi(e, t, n) {
  if (arguments.length === 2) for (var i = 0, r = t.length, a; i < r; i++)
    (a || !(i in t)) && (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function gi(e, t) {
  var n = t && t.cache ? t.cache : lh, i = t && t.serializer ? t.serializer : sh, r = t && t.strategy ? t.strategy : ah;
  return r(e, {
    cache: n,
    serializer: i
  });
}
function ih(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function rh(e, t, n, i) {
  var r = ih(i) ? i : n(i), a = t.get(r);
  return typeof a > "u" && (a = e.call(this, i), t.set(r, a)), a;
}
function as(e, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), a = t.get(r);
  return typeof a > "u" && (a = e.apply(this, i), t.set(r, a)), a;
}
function os(e, t, n, i, r) {
  return n.bind(t, e, i, r);
}
function ah(e, t) {
  var n = e.length === 1 ? rh : as;
  return os(e, this, n, t.cache.create(), t.serializer);
}
function oh(e, t) {
  return os(e, this, as, t.cache.create(), t.serializer);
}
var sh = function() {
  return JSON.stringify(arguments);
};
function mr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
mr.prototype.get = function(e) {
  return this.cache[e];
};
mr.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var lh = {
  create: function() {
    return new mr();
  }
}, mi = {
  variadic: oh
}, X;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(X || (X = {}));
var le;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(le || (le = {}));
var kt;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(kt || (kt = {}));
function ga(e) {
  return e.type === le.literal;
}
function uh(e) {
  return e.type === le.argument;
}
function ss(e) {
  return e.type === le.number;
}
function ls(e) {
  return e.type === le.date;
}
function us(e) {
  return e.type === le.time;
}
function cs(e) {
  return e.type === le.select;
}
function ds(e) {
  return e.type === le.plural;
}
function ch(e) {
  return e.type === le.pound;
}
function fs(e) {
  return e.type === le.tag;
}
function hs(e) {
  return !!(e && typeof e == "object" && e.type === kt.number);
}
function zi(e) {
  return !!(e && typeof e == "object" && e.type === kt.dateTime);
}
var vs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, dh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function fh(e) {
  var t = {};
  return e.replace(dh, function(n) {
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
var hh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function vh(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(hh).filter(function(f) {
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
function gh(e) {
  return e.replace(/^(.*?)-/, "");
}
var ma = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, gs = /^(@+)?(\+|#+)?[rs]?$/g, mh = /(\*)(0+)|(#+)(0+)|(0+)/g, ms = /^(0+)$/;
function pa(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(gs, function(n, i, r) {
    return typeof r != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : r === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), t;
}
function ps(e) {
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
function ph(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ms.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ya(e) {
  var t = {}, n = ps(e);
  return n || t;
}
function yh(e) {
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
        t.style = "unit", t.unit = gh(r.options[0]);
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
        t = J(J(J({}, t), { notation: "scientific" }), r.options.reduce(function(u, l) {
          return J(J({}, u), ya(l));
        }, {}));
        continue;
      case "engineering":
        t = J(J(J({}, t), { notation: "engineering" }), r.options.reduce(function(u, l) {
          return J(J({}, u), ya(l));
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
        r.options[0].replace(mh, function(u, l, c, d, f, g) {
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
    if (ms.test(r.stem)) {
      t.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (ma.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(ma, function(u, l, c, d, f, g) {
        return c === "*" ? t.minimumFractionDigits = l.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : f && g ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + g.length) : (t.minimumFractionDigits = l.length, t.maximumFractionDigits = l.length), "";
      });
      var a = r.options[0];
      a === "w" ? t = J(J({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = J(J({}, t), pa(a)));
      continue;
    }
    if (gs.test(r.stem)) {
      t = J(J({}, t), pa(r.stem));
      continue;
    }
    var o = ps(r.stem);
    o && (t = J(J({}, t), o));
    var s = ph(r.stem);
    s && (t = J(J({}, t), s));
  }
  return t;
}
var gn = {
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
function bh(e, t) {
  for (var n = "", i = 0; i < e.length; i++) {
    var r = e.charAt(i);
    if (r === "j") {
      for (var a = 0; i + 1 < e.length && e.charAt(i + 1) === r; )
        a++, i++;
      var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), u = "a", l = wh(t);
      for ((l == "H" || l == "k") && (s = 0); s-- > 0; )
        n += u;
      for (; o-- > 0; )
        n = l + n;
    } else r === "J" ? n += "H" : n += r;
  }
  return n;
}
function wh(e) {
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
  var r = gn[i || ""] || gn[n || ""] || gn["".concat(n, "-001")] || gn["001"];
  return r[0];
}
var pi, Eh = new RegExp("^".concat(vs.source, "*")), Sh = new RegExp("".concat(vs.source, "*$"));
function K(e, t) {
  return { start: e, end: t };
}
var _h = !!String.prototype.startsWith && "_a".startsWith("a", 1), xh = !!String.fromCodePoint, Ch = !!Object.fromEntries, Ah = !!String.prototype.codePointAt, Ph = !!String.prototype.trimStart, Th = !!String.prototype.trimEnd, Bh = !!Number.isSafeInteger, Ih = Bh ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Wi = !0;
try {
  var Oh = bs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Wi = ((pi = Oh.exec("a")) === null || pi === void 0 ? void 0 : pi[0]) === "a";
} catch {
  Wi = !1;
}
var ba = _h ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), qi = xh ? String.fromCodePoint : (
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
), wa = (
  // native
  Ch ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, r = t; i < r.length; i++) {
        var a = r[i], o = a[0], s = a[1];
        n[o] = s;
      }
      return n;
    }
  )
), ys = Ah ? (
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
), Lh = Ph ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Eh, "");
  }
), Nh = Th ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Sh, "");
  }
);
function bs(e, t) {
  return new RegExp(e, t);
}
var Xi;
if (Wi) {
  var Ea = bs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Xi = function(t, n) {
    var i;
    Ea.lastIndex = n;
    var r = Ea.exec(t);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  Xi = function(t, n) {
    for (var i = []; ; ) {
      var r = ys(t, n);
      if (r === void 0 || ws(r) || Fh(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return qi.apply(void 0, i);
  };
var kh = (
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
              type: le.pound,
              location: K(s, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(X.UNMATCHED_CLOSING_TAG, K(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Zi(this.peek() || 0)) {
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
            type: le.literal,
            value: "<".concat(r, "/>"),
            location: K(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Zi(this.char()))
            return this.error(X.INVALID_TAG, K(s, this.clonePosition()));
          var u = this.clonePosition(), l = this.parseTagName();
          return r !== l ? this.error(X.UNMATCHED_CLOSING_TAG, K(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: le.tag,
              value: r,
              children: o,
              location: K(i, this.clonePosition())
            },
            err: null
          } : this.error(X.INVALID_TAG, K(s, this.clonePosition())));
        } else
          return this.error(X.UNCLOSED_TAG, K(i, this.clonePosition()));
      } else
        return this.error(X.INVALID_TAG, K(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Hh(this.char()); )
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
      var u = K(i, this.clonePosition());
      return {
        val: { type: le.literal, value: r, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Rh(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return qi.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), qi(i));
    }, e.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, K(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(X.EMPTY_ARGUMENT, K(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(X.MALFORMED_ARGUMENT, K(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, K(i, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: le.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: K(i, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, K(i, this.clonePosition())) : this.parseArgumentOptions(t, n, r, i);
        default:
          return this.error(X.MALFORMED_ARGUMENT, K(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = Xi(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var a = this.clonePosition(), o = K(t, a);
      return { value: i, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, i, r) {
      var a, o = this.clonePosition(), s = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (s) {
        case "":
          return this.error(X.EXPECT_ARGUMENT_TYPE, K(o, u));
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
            var f = Nh(d.val);
            if (f.length === 0)
              return this.error(X.EXPECT_ARGUMENT_STYLE, K(this.clonePosition(), this.clonePosition()));
            var g = K(c, this.clonePosition());
            l = { style: f, styleLocation: g };
          }
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var h = K(r, this.clonePosition());
          if (l && ba(l == null ? void 0 : l.style, "::", 0)) {
            var p = Lh(l.style.slice(2));
            if (s === "number") {
              var d = this.parseNumberSkeletonFromString(p, l.styleLocation);
              return d.err ? d : {
                val: { type: le.number, value: i, location: h, style: d.val },
                err: null
              };
            } else {
              if (p.length === 0)
                return this.error(X.EXPECT_DATE_TIME_SKELETON, h);
              var v = p;
              this.locale && (v = bh(p, this.locale));
              var f = {
                type: kt.dateTime,
                pattern: v,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? fh(v) : {}
              }, b = s === "date" ? le.date : le.time;
              return {
                val: { type: b, value: i, location: h, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? le.number : s === "date" ? le.date : le.time,
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
            return this.error(X.EXPECT_SELECT_ARGUMENT_OPTIONS, K(y, J({}, y)));
          this.bumpSpace();
          var w = this.parseIdentifierIfPossible(), C = 0;
          if (s !== "select" && w.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, K(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), w = this.parseIdentifierIfPossible(), C = d.val;
          }
          var E = this.tryParsePluralOrSelectOptions(t, s, n, w);
          if (E.err)
            return E;
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var A = K(r, this.clonePosition());
          return s === "select" ? {
            val: {
              type: le.select,
              value: i,
              options: wa(E.val),
              location: A
            },
            err: null
          } : {
            val: {
              type: le.plural,
              value: i,
              options: wa(E.val),
              offset: C,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: A
            },
            err: null
          };
        }
        default:
          return this.error(X.INVALID_ARGUMENT_TYPE, K(o, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, K(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, K(r, this.clonePosition()));
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
        i = vh(t);
      } catch {
        return this.error(X.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: kt.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? yh(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, i, r) {
      for (var a, o = !1, s = [], u = /* @__PURE__ */ new Set(), l = r.value, c = r.location; ; ) {
        if (l.length === 0) {
          var d = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_SELECTOR, X.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            c = K(d, this.clonePosition()), l = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (u.has(l))
          return this.error(n === "select" ? X.DUPLICATE_SELECT_ARGUMENT_SELECTOR : X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        l === "other" && (o = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, K(this.clonePosition(), this.clonePosition()));
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
            location: K(g, this.clonePosition())
          }
        ]), u.add(l), this.bumpSpace(), a = this.parseIdentifierIfPossible(), l = a.value, c = a.location;
      }
      return s.length === 0 ? this.error(n === "select" ? X.EXPECT_SELECT_ARGUMENT_SELECTOR : X.EXPECT_PLURAL_ARGUMENT_SELECTOR, K(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(X.MISSING_OTHER_CLAUSE, K(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
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
      var u = K(r, this.clonePosition());
      return a ? (o *= i, Ih(o) ? { val: o, err: null } : this.error(n, u)) : this.error(t, u);
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
      var n = ys(this.message, t);
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
      if (ba(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && ws(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function Zi(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Rh(e) {
  return Zi(e) || e === 47;
}
function Hh(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function ws(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Fh(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Yi(e) {
  e.forEach(function(t) {
    if (delete t.location, cs(t) || ds(t))
      for (var n in t.options)
        delete t.options[n].location, Yi(t.options[n].value);
    else ss(t) && hs(t.style) || (ls(t) || us(t)) && zi(t.style) ? delete t.style.location : fs(t) && Yi(t.children);
  });
}
function Mh(e, t) {
  t === void 0 && (t = {}), t = J({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new kh(e, t).parse();
  if (n.err) {
    var i = SyntaxError(X[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t != null && t.captureLocation || Yi(n.val), n.val;
}
var Rt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Rt || (Rt = {}));
var Qn = (
  /** @class */
  function(e) {
    Jn(t, e);
    function t(n, i, r) {
      var a = e.call(this, n) || this;
      return a.code = i, a.originalMessage = r, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Sa = (
  /** @class */
  function(e) {
    Jn(t, e);
    function t(n, i, r, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Rt.INVALID_VALUE, a) || this;
    }
    return t;
  }(Qn)
), Vh = (
  /** @class */
  function(e) {
    Jn(t, e);
    function t(n, i, r) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), Rt.INVALID_VALUE, r) || this;
    }
    return t;
  }(Qn)
), Dh = (
  /** @class */
  function(e) {
    Jn(t, e);
    function t(n, i) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), Rt.MISSING_VALUE, i) || this;
    }
    return t;
  }(Qn)
), Pe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Pe || (Pe = {}));
function $h(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== Pe.literal || n.type !== Pe.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function Uh(e) {
  return typeof e == "function";
}
function Sn(e, t, n, i, r, a, o) {
  if (e.length === 1 && ga(e[0]))
    return [
      {
        type: Pe.literal,
        value: e[0].value
      }
    ];
  for (var s = [], u = 0, l = e; u < l.length; u++) {
    var c = l[u];
    if (ga(c)) {
      s.push({
        type: Pe.literal,
        value: c.value
      });
      continue;
    }
    if (ch(c)) {
      typeof a == "number" && s.push({
        type: Pe.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(r && d in r))
      throw new Dh(d, o);
    var f = r[d];
    if (uh(c)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
        type: typeof f == "string" ? Pe.literal : Pe.object,
        value: f
      });
      continue;
    }
    if (ls(c)) {
      var g = typeof c.style == "string" ? i.date[c.style] : zi(c.style) ? c.style.parsedOptions : void 0;
      s.push({
        type: Pe.literal,
        value: n.getDateTimeFormat(t, g).format(f)
      });
      continue;
    }
    if (us(c)) {
      var g = typeof c.style == "string" ? i.time[c.style] : zi(c.style) ? c.style.parsedOptions : i.time.medium;
      s.push({
        type: Pe.literal,
        value: n.getDateTimeFormat(t, g).format(f)
      });
      continue;
    }
    if (ss(c)) {
      var g = typeof c.style == "string" ? i.number[c.style] : hs(c.style) ? c.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), s.push({
        type: Pe.literal,
        value: n.getNumberFormat(t, g).format(f)
      });
      continue;
    }
    if (fs(c)) {
      var m = c.children, h = c.value, p = r[h];
      if (!Uh(p))
        throw new Vh(h, "function", o);
      var v = Sn(m, t, n, i, r, a), b = p(v.map(function(C) {
        return C.value;
      }));
      Array.isArray(b) || (b = [b]), s.push.apply(s, b.map(function(C) {
        return {
          type: typeof C == "string" ? Pe.literal : Pe.object,
          value: C
        };
      }));
    }
    if (cs(c)) {
      var y = c.options[f] || c.options.other;
      if (!y)
        throw new Sa(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, Sn(y.value, t, n, i, r));
      continue;
    }
    if (ds(c)) {
      var y = c.options["=".concat(f)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new Qn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Rt.MISSING_INTL_API, o);
        var w = n.getPluralRules(t, { type: c.pluralType }).select(f - (c.offset || 0));
        y = c.options[w] || c.options.other;
      }
      if (!y)
        throw new Sa(c.value, f, Object.keys(c.options), o);
      s.push.apply(s, Sn(y.value, t, n, i, r, f - (c.offset || 0)));
      continue;
    }
  }
  return $h(s);
}
function Gh(e, t) {
  return t ? J(J(J({}, e || {}), t || {}), Object.keys(e).reduce(function(n, i) {
    return n[i] = J(J({}, e[i]), t[i] || {}), n;
  }, {})) : e;
}
function jh(e, t) {
  return t ? Object.keys(e).reduce(function(n, i) {
    return n[i] = Gh(e[i], t[i]), n;
  }, J({}, e)) : e;
}
function yi(e) {
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
function zh(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: gi(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, vi([void 0], n, !1)))();
    }, {
      cache: yi(e.number),
      strategy: mi.variadic
    }),
    getDateTimeFormat: gi(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, vi([void 0], n, !1)))();
    }, {
      cache: yi(e.dateTime),
      strategy: mi.variadic
    }),
    getPluralRules: gi(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, vi([void 0], n, !1)))();
    }, {
      cache: yi(e.pluralRules),
      strategy: mi.variadic
    })
  };
}
var Wh = (
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
          return !d.length || f.type !== Pe.literal || typeof d[d.length - 1] != "string" ? d.push(f.value) : d[d.length - 1] += f.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return Sn(a.ast, a.locales, a.formatters, a.formats, u, void 0, a.message);
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
        var s = nh(o, ["formatters"]);
        this.ast = e.__parse(t, J(J({}, s), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = jh(e.formats, i), this.formatters = r && r.formatters || zh(this.formatterCache);
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
    }, e.__parse = Mh, e.formats = {
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
), qh = Wh;
const Xh = () => {
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
    return new qh(r, u, void 0, {
      ignoreTag: s
    }).format(o);
  } });
}, Zh = () => (e, t) => (t.setFinalFormatter(Xh()), e), Yh = { max_length: "Invalid character length, please insert {limit} characters or less!", min_length: "Invalid character length, please insert minimum {limit} characters or more!", required: "Required!", email: "Please provide a valid e-mail address!", url: "Please provide a valid URL!", max_value: "Please provide a value less than or equal to {limit}!", min_value: "Please provide a value more than or equal to {limit}!", array_min_length: "Please select at least {limit} items!", positive_integer: "Please provide a positive integer!" }, Kh = "Set your own", Jh = {
  rules: Yh,
  set_your_own: Kh
}, Qh = ["en"], ev = [...Qh, "en-US"], tv = {
  en: Jh
}, Es = Jf().use(Qf()).use(Nf()).use(Zh()), nv = window.location.hostname.startsWith("deploy-preview");
nv && Es.use(Kf({ prefix: "https://cdn.tolg.ee/663da029e1beb0ea0704ea269e843a5a" }));
const Ve = Es.init({
  availableLanguages: [...ev],
  language: "en",
  staticData: tv
}), iv = (e) => e == null ? !0 : Number(e) >= 0 && new dn(Number(e)).modulo(0.01).toNumber() === 0, rv = (e) => e == null || Number.isSafeInteger(Number(e)) && Number(e) >= 0 ? !0 : Ve.t("rules.positive_integer"), av = (e = 240) => (t) => (t || "").length <= e || Ve.t("rules.max_length", { limit: e }), ov = (e) => (t) => !((t || "").length > 0 && (t || "").length < e) || Ve.t("rules.min_length", { limit: e }), sv = (e = Number.MAX_SAFE_INTEGER) => (t) => Number(t) <= e || Ve.t("rules.max_value", { limit: e }), lv = (e = 0, t) => (n) => Number(n) >= e || t || Ve.t("rules.min_value", { limit: e }), uv = (e) => {
  const t = new RegExp(
    "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    "i"
  );
  if (e) {
    const n = e.startsWith("https://") ? e : "https://" + e;
    return t.test(n) || Ve.t("rules.url");
  }
  return !e || Ve.t("rules.required");
}, cv = (e) => {
  const t = new RegExp(/^(?!https:\/\/)(?!www\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/, "g");
  return e ? t.test(e) : !e;
}, dv = (e) => !!e || Ve.t("rules.required"), fv = (e) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) || Ve.t("rules.email"), hv = (e) => {
  const t = new RegExp(
    /^(?:(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*))$/,
    "g"
  );
  return e ? t.test(e) : !e;
}, vv = (e) => /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)).*$/.test(e) || Ve.t("form_hint_password_complexity"), gv = (e) => (t) => {
  const n = e.indexOf(t);
  return !e.some((i, r) => i === t && r !== n);
}, mv = (e) => (t) => (t == null ? void 0 : t.length) >= e || Ve.t("rules.array_min_length", { limit: e }), Ss = Be({
  data() {
    return {
      rules: {
        arrayMinLength: mv,
        domain: cv,
        email: fv,
        emailName: hv,
        maxlength: av,
        maxTwoDecimal: iv,
        maxValue: sv,
        minlength: ov,
        minValue: lv,
        password: vv,
        positiveInteger: rv,
        required: dv,
        unique: gv,
        url: uv
      }
    };
  }
}), pv = Be({
  name: "GsInput",
  mixins: [Ss],
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
function yv(e, t, n, i, r, a) {
  return ie(), st(Oc, ne({
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
  }), Ta({ _: 2 }, [
    e.$slots["prepend-inner"] ? {
      name: "prepend-inner",
      fn: be(() => [
        Mn(e.$slots, "prepend-inner", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0
  ]), 1040, ["hide-details", "label", "model-value", "onBlur", "onUpdate:modelValue"]);
}
const _s = /* @__PURE__ */ Ze(pv, [["render", yv], ["__scopeId", "data-v-7750213e"]]), bv = { class: "gs-action-button__label" }, wv = { class: "gs-action-button__item-content" }, Ev = { class: "gs-action-button__item-text" }, Sv = { class: "gs-action-button__item-title" }, _v = { class: "gs-action-button__item-description" }, xv = /* @__PURE__ */ Be({
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
    const n = e, i = t, r = (o = xa()) == null ? void 0 : o.appContext.config.globalProperties.$router;
    function a(s, u) {
      s.to && r && r.push(s.to), i("select", s, u);
    }
    return (s, u) => (ie(), st(_e(xc), {
      offset: 7,
      location: "bottom",
      "close-on-content-click": !0
    }, {
      activator: be(({ props: l }) => [
        I(_e(fu), ne(l, {
          class: ["gs-action-button", { "gs-action-button--full-width": n.fullWidth }],
          style: n.width ? { width: n.width } : void 0,
          disabled: n.disabled
        }), {
          prepend: be(() => [
            I(_e(Ne), { size: "20" }, {
              default: be(() => u[0] || (u[0] = [
                Zt("mdi-plus")
              ])),
              _: 1
            })
          ]),
          append: be(() => [
            I(_e(Ne), { size: "20" }, {
              default: be(() => u[1] || (u[1] = [
                Zt("mdi-chevron-down")
              ])),
              _: 1
            })
          ]),
          default: be(() => [
            B("span", bv, we(n.label), 1)
          ]),
          _: 2
        }, 1040, ["class", "style", "disabled"])
      ]),
      default: be(() => [
        I(_e(Ku), {
          class: "gs-action-button__menu",
          style: ee(
            n.width ? { width: n.width } : n.fullWidth ? { width: "100%" } : void 0
          )
        }, {
          default: be(() => [
            (ie(!0), me(Le, null, Vn(n.items, (l, c) => (ie(), st(_e(Bi), {
              key: c,
              class: "gs-action-button__item",
              onClick: (d) => a(l, c)
            }, {
              default: be(() => [
                B("div", wv, [
                  I(_e(Ne), {
                    class: "gs-action-button__item-icon",
                    size: "22"
                  }, {
                    default: be(() => [
                      Zt(we(l.icon), 1)
                    ]),
                    _: 2
                  }, 1024),
                  B("div", Ev, [
                    B("span", Sv, we(l.title), 1),
                    B("span", _v, we(l.text), 1)
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
}), Cv = /* @__PURE__ */ Ze(xv, [["__scopeId", "data-v-b5e0b226"]]), Av = ["aria-disabled", "aria-label"], Pv = /* @__PURE__ */ Be({
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
    const n = e, i = t, r = P(() => [
      "gs-action-card",
      {
        "gs-action-card--disabled": n.disabled,
        "gs-action-card--full-width": n.fullWidth,
        "gs-action-card--selected": n.selected
      }
    ]), a = (o) => {
      n.disabled || i("click", o);
    };
    return (o, s) => (ie(), me("div", {
      "aria-disabled": o.disabled,
      "aria-label": o.ariaLabel,
      class: W(r.value),
      style: ee({
        padding: o.padding,
        width: o.width,
        height: o.height
      }),
      role: "button",
      onClick: a
    }, [
      Mn(o.$slots, "default", {}, void 0, !0)
    ], 14, Av));
  }
}), Ki = /* @__PURE__ */ Ze(Pv, [["__scopeId", "data-v-cc98c1b9"]]), Tv = { class: "gs-tooltip" }, Bv = { class: "gs-tooltip__popup" }, Iv = /* @__PURE__ */ Be({
  __name: "GsTooltip",
  props: {
    text: {},
    variant: {},
    placement: {},
    iconSize: {}
  },
  setup(e) {
    const t = e, n = P(
      () => t.variant === "light" ? "gs-tooltip--light" : "gs-tooltip--dark"
    ), i = P(() => t.placement || "top");
    return (r, a) => (ie(), me("div", Tv, [
      I(Nc, {
        class: W([n.value]),
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
        activator: be(({ props: o }) => [
          r.$slots.activator ? Mn(r.$slots, "activator", {
            key: 0,
            props: o
          }, void 0, !0) : (ie(), me("div", ne({
            key: 1,
            class: "gs-tooltip__icon-wrapper"
          }, o), [
            I(Ne, {
              icon: "mdi-information-outline",
              size: r.iconSize || 16,
              class: "gs-tooltip__icon"
            }, null, 8, ["size"])
          ], 16))
        ]),
        default: be(() => [
          B("div", Bv, we(t.text), 1)
        ]),
        _: 3
      }, 8, ["class", "location"])
    ]));
  }
}), xs = /* @__PURE__ */ Ze(Iv, [["__scopeId", "data-v-f2322950"]]), Ov = { class: "gs-preset-input" }, Lv = {
  class: "gs-preset-input__cards",
  role: "radiogroup"
}, Nv = { class: "gs-preset-input__card-content" }, kv = { class: "gs-preset-input__card-label" }, Rv = { class: "gs-preset-input__card-value" }, Hv = { class: "gs-preset-input__card-content gs-preset-input__card-content--custom" }, Fv = { class: "gs-preset-input__card-label gs-preset-input__card-label--custom" }, Mv = {
  key: 0,
  class: "gs-preset-input__input-wrapper"
}, Vv = /* @__PURE__ */ Be({
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
    const { t: n } = eh(), i = e, r = P(() => i.presets.findIndex((c) => c.value === i.modelValue)), a = z(!1);
    Ft(() => {
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
    return (c, d) => (ie(), me("div", Ov, [
      B("div", Lv, [
        (ie(!0), me(Le, null, Vn(i.presets, (f, g) => (ie(), st(Ki, {
          key: f.value,
          "aria-label": f.label,
          selected: r.value === g && !a.value,
          class: "gs-preset-input__card",
          "full-width": "",
          padding: "16px 24px",
          role: "radio",
          onClick: (m) => u(g)
        }, {
          default: be(() => [
            B("div", Nv, [
              B("div", kv, [
                Zt(we(f.label) + " ", 1),
                f.info ? (ie(), st(xs, {
                  key: 0,
                  text: f.info,
                  class: "gs-preset-input__info"
                }, null, 8, ["text"])) : wt("", !0)
              ]),
              B("div", Rv, we(i.prefix || "") + we(f.value) + we(i.postfix || ""), 1)
            ])
          ]),
          _: 2
        }, 1032, ["aria-label", "selected", "onClick"]))), 128)),
        I(Ki, {
          "aria-label": c.$t("set_your_own"),
          selected: a.value,
          class: "gs-preset-input__card",
          padding: "16px 24px",
          onClick: l
        }, {
          default: be(() => [
            B("div", Hv, [
              B("div", Fv, we(_e(n)("set_your_own")), 1)
            ])
          ]),
          _: 1
        }, 8, ["aria-label", "selected"])
      ]),
      a.value ? (ie(), me("div", Mv, [
        I(_s, {
          "hide-details": i.inputHideDetails ?? !1,
          label: i.inputLabel || "",
          "model-value": i.modelValue,
          placeholder: i.inputPlaceholder,
          rules: i.inputRules,
          type: "number",
          autofocus: "",
          "onUpdate:modelValue": s
        }, Ta({ _: 2 }, [
          c.prependInner ? {
            name: "prepend-inner",
            fn: be(() => [
              B("strong", null, we(c.prependInner), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["hide-details", "label", "model-value", "placeholder", "rules"])
      ])) : wt("", !0)
    ]));
  }
}), Dv = /* @__PURE__ */ Ze(Vv, [["__scopeId", "data-v-4fa71879"]]), $v = {
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
}, Uv = Ls({
  icons: {
    defaultSet: "mdi",
    aliases: $l,
    sets: {
      mdi: Ul
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: $v
    }
  }
});
function Gv(e) {
  e.use(th, { tolgee: Ve }).use(Uv);
}
const jv = {
  GsButton: jc,
  GsAlertBar: $c,
  GsFilter: Yc,
  GsTabs: td,
  GsTag: rd,
  GsDivider: od,
  GsInput: _s,
  RulesMixin: Ss,
  GsActionButton: Cv,
  GsActionCard: Ki,
  GsTooltip: xs,
  GsPresetInput: Dv
}, Xv = {
  install(e) {
    Gv(e);
    for (const [t, n] of Object.entries(jv))
      e.component(t, n);
  }
};
export {
  Cv as GsActionButton,
  Ki as GsActionCard,
  $c as GsAlertBar,
  jc as GsButton,
  od as GsDivider,
  Yc as GsFilter,
  _s as GsInput,
  Dv as GsPresetInput,
  td as GsTabs,
  rd as GsTag,
  xs as GsTooltip,
  Ss as RulesMixin,
  Xv as default
};
