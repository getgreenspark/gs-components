import { reactive as ut, computed as b, watchEffect as $e, toRefs as gn, shallowRef as K, isVNode as Hc, Comment as zc, Fragment as se, capitalize as On, unref as Xe, warn as Ha, getCurrentInstance as Wc, ref as j, inject as be, provide as Be, defineComponent as xr, h as jt, camelize as wr, onBeforeUnmount as Je, watch as Z, readonly as mi, onMounted as at, onDeactivated as Cr, onActivated as jc, onScopeDispose as lt, effectScope as gi, toRaw as Le, createVNode as u, TransitionGroup as hi, Transition as zt, mergeProps as H, isRef as pn, toRef as $, onBeforeMount as ra, nextTick as xe, withDirectives as Ae, resolveDirective as ft, vShow as Vt, onUpdated as Yc, Text as Gc, resolveDynamicComponent as Vr, markRaw as Uc, Teleport as Kc, cloneVNode as qc, createTextVNode as wt, onUnmounted as Xc, onBeforeUpdate as Zc, withModifiers as mo, toDisplayString as Pr, vModelText as Jc, resolveComponent as Qc, render as Ir, createBlock as Sl, openBlock as wa, normalizeStyle as ed, normalizeClass as td, withCtx as go, createCommentVNode as kl, createElementBlock as nd, renderSlot as ad } from "vue";
function p(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = {
      ...o,
      default: t[l]
    } : a[l] = o, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const ne = p({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Se = typeof window < "u", yi = Se && "IntersectionObserver" in window, ld = Se && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), ho = Se && "EyeDropper" in window;
function yo(e, n, t) {
  id(e, n), n.set(e, t);
}
function id(e, n) {
  if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function od(e, n, t) {
  return e.set(_r(e, n), t), t;
}
function Xt(e, n) {
  return e.get(_r(e, n));
}
function _r(e, n, t) {
  if (typeof e == "function" ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
  throw new TypeError("Private element is not present on this object");
}
function Ar(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function nt(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => nt(e[a], n[a]));
}
function on(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), Ar(e, n.split("."), t));
}
function ze(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l > "u" ? t : l;
  }
  if (typeof n == "string") return on(e, n, t);
  if (Array.isArray(n)) return Ar(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a > "u" ? t : a;
}
function dt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function ee(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function za(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function bo(e) {
  let n;
  return e !== null && typeof e == "object" && ((n = Object.getPrototypeOf(e)) === Object.prototype || n === null);
}
function bi(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const So = Object.freeze({
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
}), Dl = Object.freeze({
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
function Tr(e) {
  return Object.keys(e);
}
function Jt(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function Ot(e, n) {
  const t = {};
  for (const a of n)
    Object.hasOwn(e, a) && (t[a] = e[a]);
  return t;
}
function pl(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Te(e, n) {
  const t = {
    ...e
  };
  return n.forEach((a) => delete t[a]), t;
}
const Br = /^on[^a-z]/, Wa = (e) => Br.test(e), rd = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], ud = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function sd(e) {
  return e.isComposing && ud.includes(e.key);
}
function Yt(e) {
  const [n, t] = pl(e, [Br]), a = Te(n, rd), [l, i] = pl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function _e(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function cd(e, n) {
  let t = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), Xe(n));
  };
  return a.clear = () => {
    clearTimeout(t);
  }, a.immediate = e, a;
}
function Oe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function ko(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function xo(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function wo(e, n) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length)) + e;
}
function dd(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function Co(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < n)
    return `${e} B`;
  const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= n && a < t.length - 1; )
    e /= n, ++a;
  return `${e.toFixed(1)} ${t[a]}B`;
}
function et() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const i = e[l], o = n[l];
    if (bo(i) && bo(o)) {
      a[l] = et(i, o, t);
      continue;
    }
    if (t && Array.isArray(i) && Array.isArray(o)) {
      a[l] = t(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function Dr(e) {
  return e.map((n) => n.type === se ? Dr(n.children) : n).flat();
}
function tn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tn.cache.has(e)) return tn.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tn.cache.set(e, n), n;
}
tn.cache = /* @__PURE__ */ new Map();
function Bn(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => Bn(e, t)).flat(1);
  if (n.suspense)
    return Bn(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => Bn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Bn(e, n.component.subTree).flat(1);
  }
  return [];
}
var Ca = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap();
class vd {
  constructor(n) {
    yo(this, Ca, []), yo(this, In, 0), this.size = n;
  }
  push(n) {
    Xt(Ca, this)[Xt(In, this)] = n, od(In, this, (Xt(In, this) + 1) % this.size);
  }
  values() {
    return Xt(Ca, this).slice(Xt(In, this)).concat(Xt(Ca, this).slice(0, Xt(In, this)));
  }
}
function fd(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function Si(e) {
  const n = ut({}), t = b(e);
  return $e(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, {
    flush: "sync"
  }), gn(n);
}
function pa(e, n) {
  return e.includes(n);
}
function pr(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ge = () => [Function, Array];
function Vo(e, n) {
  return n = "on" + On(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ja(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function qn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Mr(e, n, t) {
  let a, l = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function nn(e, n) {
  var a, l, i, o;
  const t = qn(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const r = Mr(t, n);
    r ? r.focus() : nn(e, n === "next" ? "first" : "last");
  }
}
function Va(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Er() {
}
function Mn(e, n) {
  if (!(Se && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function Ya(e) {
  return e.some((n) => Hc(n) ? n.type === zc ? !1 : n.type !== se || Ya(n.children) : !0) ? e : null;
}
function md(e, n) {
  if (!Se || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function gd(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return t >= i && t <= r && a >= o && a <= s;
}
function Ma() {
  const e = K(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => bi(e.value)
  }), n;
}
function En(e) {
  const n = e.key.length === 1, t = !e.ctrlKey && !e.metaKey && !e.altKey;
  return n && t;
}
function Fr(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
const $r = ["top", "bottom"], hd = ["start", "end", "left", "right"];
function Ml(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = pa($r, t) ? "start" : pa(hd, t) ? "top" : "center"), {
    side: El(t, n),
    align: El(a, n)
  };
}
function El(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function xl(e) {
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
function wl(e) {
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
function Po(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Io(e) {
  return pa($r, e.side) ? "y" : "x";
}
class an {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: i
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = i;
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
function _o(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function Lr(e) {
  return Array.isArray(e) ? new an({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function ki(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], o = +l[5], r = +l[12], s = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], o = +l[3], r = +l[4], s = +l[5];
    else
      return new an(n);
    const c = t.transformOrigin, d = n.x - r - (1 - i) * parseFloat(c), v = n.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = i ? n.width / i : e.offsetWidth + 1, g = o ? n.height / o : e.offsetHeight + 1;
    return new an({
      x: d,
      y: v,
      width: f,
      height: g
    });
  } else
    return new an(n);
}
function Qt(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
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
const Ta = /* @__PURE__ */ new WeakMap();
function yd(e, n) {
  Object.keys(n).forEach((t) => {
    if (Wa(t)) {
      const a = pr(t), l = Ta.get(e);
      if (n[t] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, n[t]]), Ta.has(e) || Ta.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function bd(e, n) {
  Object.keys(n).forEach((t) => {
    if (Wa(t)) {
      const a = pr(t), l = Ta.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const _n = 2.4, Ao = 0.2126729, To = 0.7151522, Bo = 0.072175, Sd = 0.55, kd = 0.58, xd = 0.57, wd = 0.62, Pa = 0.03, Do = 1.45, Cd = 5e-4, Vd = 1.25, Pd = 1.25, Id = 0.078, po = 12.82051282051282, Ia = 0.06, _d = 1e-3;
function Mo(e, n) {
  const t = (e.r / 255) ** _n, a = (e.g / 255) ** _n, l = (e.b / 255) ** _n, i = (n.r / 255) ** _n, o = (n.g / 255) ** _n, r = (n.b / 255) ** _n;
  let s = t * Ao + a * To + l * Bo, c = i * Ao + o * To + r * Bo;
  if (s <= Pa && (s += (Pa - s) ** Do), c <= Pa && (c += (Pa - c) ** Do), Math.abs(c - s) < Cd) return 0;
  let d;
  if (c > s) {
    const v = (c ** Sd - s ** kd) * Vd;
    d = v < _d ? 0 : v < Id ? v - v * po * Ia : v - Ia;
  } else {
    const v = (c ** wd - s ** xd) * Pd;
    d = v > -1e-3 ? 0 : v > -0.078 ? v - v * po * Ia : v + Ia;
  }
  return d * 100;
}
function xt(e) {
  Ha(`Vuetify: ${e}`);
}
function Fn(e) {
  Ha(`Vuetify error: ${e}`);
}
function Ad(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, Ha(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
const Ea = 0.20689655172413793, Td = (e) => e > Ea ** 3 ? Math.cbrt(e) : e / (3 * Ea ** 2) + 4 / 29, Bd = (e) => e > Ea ? e ** 3 : 3 * Ea ** 2 * (e - 4 / 29);
function Or(e) {
  const n = Td, t = n(e[1]);
  return [116 * t - 16, 500 * (n(e[0] / 0.95047) - t), 200 * (t - n(e[2] / 1.08883))];
}
function Rr(e) {
  const n = Bd, t = (e[0] + 16) / 116;
  return [n(t + e[1] / 500) * 0.95047, n(t), n(t - e[2] / 200) * 1.08883];
}
const Dd = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], pd = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Md = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ed = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Nr(e) {
  const n = Array(3), t = pd, a = Dd;
  for (let l = 0; l < 3; ++l)
    n[l] = Math.round(Oe(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: n[0],
    g: n[1],
    b: n[2]
  };
}
function xi(e) {
  let {
    r: n,
    g: t,
    b: a
  } = e;
  const l = [0, 0, 0], i = Ed, o = Md;
  n = i(n / 255), t = i(t / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * n + o[r][1] * t + o[r][2] * a;
  return l;
}
function Fl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Fd(e) {
  return Fl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Eo = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, $d = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => Fo({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => Fo({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => Mt({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => Mt({
    h: e,
    s: n,
    v: t,
    a
  })
};
function vt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && xt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Eo.test(e)) {
    const {
      groups: n
    } = e.match(Eo), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return $d[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || xt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && xt(`'${e}' is not a valid hex(a) color`), Yr(n);
  } else if (typeof e == "object") {
    if (Jt(e, ["r", "g", "b"]))
      return e;
    if (Jt(e, ["h", "s", "l"]))
      return Mt(wi(e));
    if (Jt(e, ["h", "s", "v"]))
      return Mt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Mt(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = (r) => {
    const s = (r + n / 60) % 6;
    return a - a * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function Fo(e) {
  return Mt(wi(e));
}
function ua(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const n = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(n, t, a), i = Math.min(n, t, a);
  let o = 0;
  l !== i && (l === n ? o = 60 * (0 + (t - a) / (l - i)) : l === t ? o = 60 * (2 + (a - n) / (l - i)) : l === a && (o = 60 * (4 + (n - t) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, s = [o, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function Hr(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = a - a * t / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: n,
    s: o,
    l: i,
    a: l
  };
}
function wi(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, i = a + t * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: n,
    s: o,
    v: i,
    a: l
  };
}
function zr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function Wr(e) {
  return zr(Mt(e));
}
function _a(e) {
  const n = Math.round(e).toString(16);
  return ("00".substr(0, 2 - n.length) + n).toUpperCase();
}
function jr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return `#${[_a(n), _a(t), _a(a), l !== void 0 ? _a(Math.round(l * 255)) : ""].join("")}`;
}
function Yr(e) {
  e = Od(e);
  let [n, t, a, l] = dd(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function Ld(e) {
  const n = Yr(e);
  return ua(n);
}
function Gr(e) {
  return jr(Mt(e));
}
function Od(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = xo(xo(e, 6), 8, "F")), e;
}
function Rd(e, n) {
  const t = Or(xi(e));
  return t[0] = t[0] + n * 10, Nr(Rr(t));
}
function Nd(e, n) {
  const t = Or(xi(e));
  return t[0] = t[0] - n * 10, Nr(Rr(t));
}
function $l(e) {
  const n = vt(e);
  return xi(n)[1];
}
function Hd(e, n) {
  const t = $l(e), a = $l(n), l = Math.max(t, a), i = Math.min(t, a);
  return (l + 0.05) / (i + 0.05);
}
function Ur(e) {
  const n = Math.abs(Mo(vt(0), vt(e)));
  return Math.abs(Mo(vt(16777215), vt(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function Ee(e, n) {
  const t = Wc();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function _t() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = Ee(e).type;
  return tn((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Kr = 0, Ba = /* @__PURE__ */ new WeakMap();
function Ke() {
  const e = Ee("getUid");
  if (Ba.has(e)) return Ba.get(e);
  {
    const n = Kr++;
    return Ba.set(e, n), n;
  }
}
Ke.reset = () => {
  Kr = 0, Ba = /* @__PURE__ */ new WeakMap();
};
function zd(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const $n = Symbol.for("vuetify:defaults");
function Wd(e) {
  return j(e);
}
function Ci() {
  const e = be($n);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Me(e, n) {
  const t = Ci(), a = j(e), l = b(() => {
    if (Xe(n == null ? void 0 : n.disabled)) return t.value;
    const o = Xe(n == null ? void 0 : n.scoped), r = Xe(n == null ? void 0 : n.reset), s = Xe(n == null ? void 0 : n.root);
    if (a.value == null && !(o || r || s)) return t.value;
    let c = et(a.value, {
      prev: t.value
    });
    if (o) return c;
    if (r || s) {
      const d = Number(r || 1 / 0);
      for (let v = 0; v <= d && !(!c || !("prev" in c)); v++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = et(et(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? et(c.prev, c) : c;
  });
  return Be($n, l), l;
}
function jd(e, n) {
  var t, a;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((a = e.props) == null ? void 0 : a[tn(n)]) < "u";
}
function Yd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ci();
  const a = Ee("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = b(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), i = new Proxy(e, {
    get(s, c) {
      var v, f, g, h, y, m, S;
      const d = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(v = l.value) == null ? void 0 : v[c], d].filter((k) => k != null) : typeof c == "string" && !jd(a.vnode, c) ? ((f = l.value) == null ? void 0 : f[c]) !== void 0 ? (g = l.value) == null ? void 0 : g[c] : ((y = (h = t.value) == null ? void 0 : h.global) == null ? void 0 : y[c]) !== void 0 ? (S = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : S[c] : d : d;
    }
  }), o = K();
  $e(() => {
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
    const s = zd($n, a);
    Be($n, b(() => o.value ? et((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function mt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return xt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = p(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(a) {
      return Ot(a, n);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = Ci();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = Yd(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function R() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? mt : xr)(n);
}
function Gd(e, n) {
  return n.props = e, n;
}
function At(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return R()({
    name: t ?? On(wr(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...ne()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return jt(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function qr(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Xn = "cubic-bezier(0.4, 0, 0.2, 1)", Ud = "cubic-bezier(0.0, 0, 0.2, 1)", Kd = "cubic-bezier(0.4, 0, 1, 1)";
function $o(e, n, t) {
  return Object.keys(e).filter((a) => Wa(a) && a.endsWith(n)).reduce((a, l) => (a[l.slice(0, -n.length)] = (i) => e[l](i, t(i)), a), {});
}
function Vi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? qd(e) : Pi(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Fa(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (Pi(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Pi(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function qd(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function Xd(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function z(e) {
  const n = Ee("useRender");
  n.render = e;
}
function Ct(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = Ma(), a = j();
  if (Se) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Je(() => {
      l.disconnect();
    }), Z(() => t.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: mi(a)
  };
}
const Zn = Symbol.for("vuetify:layout"), Xr = Symbol.for("vuetify:layout-item"), Lo = 1e3, Zr = p({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), hn = p({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Jr() {
  const e = be(Zn);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function yn(e) {
  const n = be(Zn);
  if (!n) throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Ke()}`, a = Ee("useLayoutItem");
  Be(Xr, {
    id: t
  });
  const l = K(!1);
  Cr(() => l.value = !0), jc(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = n.register(a, {
    ...e,
    active: b(() => l.value ? !1 : e.active.value),
    id: t
  });
  return Je(() => n.unregister(t)), {
    layoutItemStyles: i,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: o
  };
}
const Zd = (e, n, t, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const o of e) {
    const r = n.get(o), s = t.get(o), c = a.get(o);
    if (!r || !s || !c) continue;
    const d = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: d
    }), l = d;
  }
  return i;
};
function Qr(e) {
  const n = be(Zn, null), t = b(() => n ? n.rootZIndex.value - 100 : Lo), a = j([]), l = ut(/* @__PURE__ */ new Map()), i = ut(/* @__PURE__ */ new Map()), o = ut(/* @__PURE__ */ new Map()), r = ut(/* @__PURE__ */ new Map()), s = ut(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: d
  } = Ct(), v = b(() => {
    const _ = /* @__PURE__ */ new Map(), B = e.overlaps ?? [];
    for (const w of B.filter((P) => P.includes(":"))) {
      const [P, T] = w.split(":");
      if (!a.value.includes(P) || !a.value.includes(T)) continue;
      const C = l.get(P), x = l.get(T), D = i.get(P), M = i.get(T);
      !C || !x || !D || !M || (_.set(T, {
        position: C.value,
        amount: parseInt(D.value, 10)
      }), _.set(P, {
        position: x.value,
        amount: -parseInt(M.value, 10)
      }));
    }
    return _;
  }), f = b(() => {
    const _ = [...new Set([...o.values()].map((w) => w.value))].sort((w, P) => w - P), B = [];
    for (const w of _) {
      const P = a.value.filter((T) => {
        var C;
        return ((C = o.get(T)) == null ? void 0 : C.value) === w;
      });
      B.push(...P);
    }
    return Zd(B, l, i, r);
  }), g = b(() => !Array.from(s.values()).some((_) => _.value)), h = b(() => f.value[f.value.length - 1].layer), y = b(() => ({
    "--v-layout-left": ee(h.value.left),
    "--v-layout-right": ee(h.value.right),
    "--v-layout-top": ee(h.value.top),
    "--v-layout-bottom": ee(h.value.bottom),
    ...g.value ? void 0 : {
      transition: "none"
    }
  })), m = b(() => f.value.slice(1).map((_, B) => {
    let {
      id: w
    } = _;
    const {
      layer: P
    } = f.value[B], T = i.get(w), C = l.get(w);
    return {
      id: w,
      ...P,
      size: Number(T.value),
      position: C.value
    };
  })), S = (_) => m.value.find((B) => B.id === _), k = Ee("createLayout"), V = K(!1);
  at(() => {
    V.value = !0;
  }), Be(Zn, {
    register: (_, B) => {
      let {
        id: w,
        order: P,
        position: T,
        layoutSize: C,
        elementSize: x,
        active: D,
        disableTransitions: M,
        absolute: L
      } = B;
      o.set(w, P), l.set(w, T), i.set(w, C), r.set(w, D), M && s.set(w, M);
      const J = Bn(Xr, k == null ? void 0 : k.vnode).indexOf(_);
      J > -1 ? a.value.splice(J, 0, w) : a.value.push(w);
      const N = b(() => m.value.findIndex((Y) => Y.id === w)), O = b(() => t.value + f.value.length * 2 - N.value * 2), E = b(() => {
        const Y = T.value === "left" || T.value === "right", X = T.value === "right", Q = T.value === "bottom", re = x.value ?? C.value, G = re === 0 ? "%" : "px", te = {
          [T.value]: 0,
          zIndex: O.value,
          transform: `translate${Y ? "X" : "Y"}(${(D.value ? 0 : -(re === 0 ? 100 : re)) * (X || Q ? -1 : 1)}${G})`,
          position: L.value || t.value !== Lo ? "absolute" : "fixed",
          ...g.value ? void 0 : {
            transition: "none"
          }
        };
        if (!V.value) return te;
        const le = m.value[N.value];
        if (!le) throw new Error(`[Vuetify] Could not find layout item "${w}"`);
        const Ce = v.value.get(w);
        return Ce && (le[Ce.position] += Ce.amount), {
          ...te,
          height: Y ? `calc(100% - ${le.top}px - ${le.bottom}px)` : x.value ? `${x.value}px` : void 0,
          left: X ? void 0 : `${le.left}px`,
          right: X ? `${le.right}px` : void 0,
          top: T.value !== "bottom" ? `${le.top}px` : void 0,
          bottom: T.value !== "top" ? `${le.bottom}px` : void 0,
          width: Y ? x.value ? `${x.value}px` : void 0 : `calc(100% - ${le.left}px - ${le.right}px)`
        };
      }), F = b(() => ({
        zIndex: O.value - 1
      }));
      return {
        layoutItemStyles: E,
        layoutItemScrimStyles: F,
        zIndex: O
      };
    },
    unregister: (_) => {
      o.delete(_), l.delete(_), i.delete(_), r.delete(_), s.delete(_), a.value = a.value.filter((B) => B !== _);
    },
    mainRect: h,
    mainStyles: y,
    getLayoutItem: S,
    items: m,
    layoutRect: d,
    rootZIndex: t
  });
  const A = b(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), I = b(() => ({
    zIndex: n ? t.value : void 0,
    position: n ? "relative" : void 0,
    overflow: n ? "hidden" : void 0
  }));
  return {
    layoutClasses: A,
    layoutStyles: I,
    getLayoutItem: S,
    items: m,
    layoutRect: d,
    layoutRef: c
  };
}
function ot(e, n) {
  let t;
  function a() {
    t = gi(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  Z(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), lt(() => {
    t == null || t.stop();
  });
}
function ie(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const i = Ee("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), r = tn(n), c = r !== n ? b(() => {
    var v, f, g, h;
    return e[n], !!(((v = i.vnode.props) != null && v.hasOwnProperty(n) || (f = i.vnode.props) != null && f.hasOwnProperty(r)) && ((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${n}`) || (h = i.vnode.props) != null && h.hasOwnProperty(`onUpdate:${r}`)));
  }) : b(() => {
    var v, f;
    return e[n], !!((v = i.vnode.props) != null && v.hasOwnProperty(n) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)));
  });
  ot(() => !c.value, () => {
    Z(() => e[n], (v) => {
      o.value = v;
    });
  });
  const d = b({
    get() {
      const v = e[n];
      return a(c.value ? v : o.value);
    },
    set(v) {
      const f = l(v), g = Le(c.value ? e[n] : o.value);
      g === f || a(g) === v || (o.value = f, i == null || i.emit(`update:${n}`, f));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), d;
}
const Jd = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
}, Oo = "$vuetify.", Ro = (e, n) => e.replace(/\{(\d+)\}/g, (t, a) => String(n[+a])), eu = (e, n, t) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!a.startsWith(Oo))
    return Ro(a, i);
  const r = a.replace(Oo, ""), s = e.value && t.value[e.value], c = n.value && t.value[n.value];
  let d = on(s, r, null);
  return d || (xt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), d = on(c, r, null)), d || (Fn(`Translation key "${a}" not found in fallback`), d = a), typeof d != "string" && (Fn(`Translation key "${a}" has a non-string value`), d = a), Ro(d, i);
};
function tu(e, n) {
  return (t, a) => new Intl.NumberFormat([e.value, n.value], a).format(t);
}
function Cl(e, n, t) {
  const a = ie(e, n, e[n] ?? t.value);
  return a.value = e[n] ?? t.value, Z(t, (l) => {
    e[n] == null && (a.value = t.value);
  }), a;
}
function nu(e) {
  return (n) => {
    const t = Cl(n, "locale", e.current), a = Cl(n, "fallback", e.fallback), l = Cl(n, "messages", e.messages);
    return {
      name: "vuetify",
      current: t,
      fallback: a,
      messages: l,
      t: eu(t, a, l),
      n: tu(t, a),
      provide: nu({
        current: t,
        fallback: a,
        messages: l
      })
    };
  };
}
function Qd(e) {
  const n = K((e == null ? void 0 : e.locale) ?? "en"), t = K((e == null ? void 0 : e.fallback) ?? "en"), a = j({
    en: Jd,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: n,
    fallback: t,
    messages: a,
    t: eu(n, t, a),
    n: tu(n, t),
    provide: nu({
      current: n,
      fallback: t,
      messages: a
    })
  };
}
const Ln = Symbol.for("vuetify:locale");
function ev(e) {
  return e.name != null;
}
function tv(e) {
  const n = e != null && e.adapter && ev(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Qd(e), t = lv(n, e);
  return {
    ...n,
    ...t
  };
}
function De() {
  const e = be(Ln);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function nv(e) {
  const n = be(Ln);
  if (!n) throw new Error("[Vuetify] Could not find injected locale instance");
  const t = n.provide(e), a = iv(t, n.rtl, e), l = {
    ...t,
    ...a
  };
  return Be(Ln, l), l;
}
function av() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function lv(e, n) {
  const t = j((n == null ? void 0 : n.rtl) ?? av()), a = b(() => t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function iv(e, n, t) {
  const a = b(() => t.rtl ?? n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function We() {
  const e = be(Ln);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Jn = Symbol.for("vuetify:theme"), ye = p({
  theme: String
}, "theme");
function No() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function ov() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : No();
  const n = No();
  if (!e) return {
    ...n,
    isDisabled: !0
  };
  const t = {};
  for (const [i, o] of Object.entries(e.themes ?? {})) {
    const r = o.dark || i === "dark" ? (a = n.themes) == null ? void 0 : a.dark : (l = n.themes) == null ? void 0 : l.light;
    t[i] = et(r, o);
  }
  return et(n, {
    ...e,
    themes: t
  });
}
function rv(e) {
  const n = ov(e), t = j(n.defaultTheme), a = j(n.themes), l = b(() => {
    const d = {};
    for (const [v, f] of Object.entries(a.value)) {
      const g = d[v] = {
        ...f,
        colors: {
          ...f.colors
        }
      };
      if (n.variations)
        for (const h of n.variations.colors) {
          const y = g.colors[h];
          if (y)
            for (const m of ["lighten", "darken"]) {
              const S = m === "lighten" ? Rd : Nd;
              for (const k of dt(n.variations[m], 1))
                g.colors[`${h}-${m}-${k}`] = jr(S(vt(y), k));
            }
        }
      for (const h of Object.keys(g.colors)) {
        if (/^on-[a-z]/.test(h) || g.colors[`on-${h}`]) continue;
        const y = `on-${h}`, m = vt(g.colors[h]);
        g.colors[y] = Ur(m);
      }
    }
    return d;
  }), i = b(() => l.value[t.value]), o = b(() => {
    var h;
    const d = [];
    (h = i.value) != null && h.dark && Zt(d, ":root", ["color-scheme: dark"]), Zt(d, ":root", Ho(i.value));
    for (const [y, m] of Object.entries(l.value))
      Zt(d, `.v-theme--${y}`, [`color-scheme: ${m.dark ? "dark" : "normal"}`, ...Ho(m)]);
    const v = [], f = [], g = new Set(Object.values(l.value).flatMap((y) => Object.keys(y.colors)));
    for (const y of g)
      /^on-[a-z]/.test(y) ? Zt(f, `.${y}`, [`color: rgb(var(--v-theme-${y})) !important`]) : (Zt(v, `.bg-${y}`, [`--v-theme-overlay-multiplier: var(--v-theme-${y}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${y})) !important`, `color: rgb(var(--v-theme-on-${y})) !important`]), Zt(f, `.text-${y}`, [`color: rgb(var(--v-theme-${y})) !important`]), Zt(f, `.border-${y}`, [`--v-border-color: var(--v-theme-${y})`]));
    return d.push(...v, ...f), d.map((y, m) => m === 0 ? y : `    ${y}`).join("");
  });
  function r() {
    return {
      style: [{
        children: o.value,
        id: "vuetify-theme-stylesheet",
        nonce: n.cspNonce || !1
      }]
    };
  }
  function s(d) {
    if (n.isDisabled) return;
    const v = d._context.provides.usehead;
    if (v)
      if (v.push) {
        const f = v.push(r);
        Se && Z(o, () => {
          f.patch(r);
        });
      } else
        Se ? (v.addHeadObjs(b(r)), $e(() => v.updateDOM())) : v.addHeadObjs(r());
    else {
      let g = function() {
        if (typeof document < "u" && !f) {
          const h = document.createElement("style");
          h.type = "text/css", h.id = "vuetify-theme-stylesheet", n.cspNonce && h.setAttribute("nonce", n.cspNonce), f = h, document.head.appendChild(f);
        }
        f && (f.innerHTML = o.value);
      }, f = Se ? document.getElementById("vuetify-theme-stylesheet") : null;
      Se ? Z(o, g, {
        immediate: !0
      }) : g();
    }
  }
  const c = b(() => n.isDisabled ? void 0 : `v-theme--${t.value}`);
  return {
    install: s,
    isDisabled: n.isDisabled,
    name: t,
    themes: a,
    current: i,
    computedThemes: l,
    themeClasses: c,
    styles: o,
    global: {
      name: t,
      current: i
    }
  };
}
function we(e) {
  Ee("provideTheme");
  const n = be(Jn, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = b(() => e.theme ?? n.name.value), a = b(() => n.themes.value[t.value]), l = b(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: a,
    themeClasses: l
  };
  return Be(Jn, i), i;
}
function au() {
  Ee("useTheme");
  const e = be(Jn, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Zt(e, n, t) {
  e.push(`${n} {
`, ...t.map((a) => `  ${a};
`), `}
`);
}
function Ho(e) {
  const n = e.dark ? 2 : 1, t = e.dark ? 1 : 2, a = [];
  for (const [l, i] of Object.entries(e.colors)) {
    const o = vt(i);
    a.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`), l.startsWith("on-") || a.push(`--v-theme-${l}-overlay-multiplier: ${$l(i) > 0.18 ? n : t}`);
  }
  for (const [l, i] of Object.entries(e.variables)) {
    const o = typeof i == "string" && i.startsWith("#") ? vt(i) : void 0, r = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    a.push(`--v-${l}: ${r ?? i}`);
  }
  return a;
}
const uv = p({
  ...ne(),
  ...Zr({
    fullHeight: !0
  }),
  ...ye()
}, "VApp"), sv = R()({
  name: "VApp",
  props: uv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = we(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = Qr(e), {
      rtlClasses: s
    } = We();
    return z(() => {
      var c;
      return u("div", {
        ref: r,
        class: ["v-application", a.themeClasses.value, l.value, s.value, e.class],
        style: [e.style]
      }, [u("div", {
        class: "v-application__wrap"
      }, [(c = t.default) == null ? void 0 : c.call(t)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), fe = p({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), lu = p({
  text: String,
  ...ne(),
  ...fe()
}, "VToolbarTitle"), Ii = R()({
  name: "VToolbarTitle",
  props: lu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = !!(t.default || t.text || e.text);
      return u(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [a && u("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])];
        }
      });
    }), {};
  }
}), cv = p({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function gt(e, n, t) {
  return R()({
    name: e,
    props: cv({
      mode: t,
      origin: n
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
              offsetHeight: v
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${v}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: d,
              width: v,
              height: f
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = d || "", r.style.width = v || "", r.style.height = f || "";
          }
        }
      };
      return () => {
        const r = a.group ? hi : zt;
        return jt(r, {
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
function iu(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return R()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? hi : zt;
      return () => jt(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : n
      }, i.default);
    }
  });
}
function ou() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = wr(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      if (!r) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    if (!o._initialStyle) return;
    const r = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[t] = r), delete o._initialStyle;
  }
}
const dv = p({
  target: [Object, Array]
}, "v-dialog-transition"), Ga = R()({
  name: "VDialogTransition",
  props: dv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var f;
        await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), l.style.visibility = "";
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = Wo(e.target, l), v = Qt(l, [{
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: Ud
        });
        (f = zo(l)) == null || f.forEach((g) => {
          Qt(g, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Xn
          });
        }), v.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var f;
        await new Promise((g) => requestAnimationFrame(g));
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = Wo(e.target, l);
        Qt(l, [{}, {
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: Kd
        }).finished.then(() => i()), (f = zo(l)) == null || f.forEach((g) => {
          Qt(g, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Xn
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(zt, H({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : u(zt, {
      name: "dialog-transition"
    }, t);
  }
});
function zo(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Wo(e, n) {
  const t = Lr(e), a = ki(n), [l, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  o === "left" || r === "left" ? s -= t.width / 2 : (o === "right" || r === "right") && (s += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || r === "top" ? c -= t.height / 2 : (o === "bottom" || r === "bottom") && (c += t.height / 2);
  const d = t.width / a.width, v = t.height / a.height, f = Math.max(1, d, v), g = d / f || 0, h = v / f || 0, y = a.width * a.height / (window.innerWidth * window.innerHeight), m = y > 0.12 ? Math.min(1.5, (y - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (i + a.top),
    sx: g,
    sy: h,
    speed: m
  };
}
const vv = gt("fab-transition", "center center", "out-in"), fv = gt("dialog-bottom-transition"), mv = gt("dialog-top-transition"), Qn = gt("fade-transition"), _i = gt("scale-transition"), gv = gt("scroll-x-transition"), hv = gt("scroll-x-reverse-transition"), yv = gt("scroll-y-transition"), bv = gt("scroll-y-reverse-transition"), Sv = gt("slide-x-transition"), kv = gt("slide-x-reverse-transition"), Ai = gt("slide-y-transition"), xv = gt("slide-y-reverse-transition"), Ua = iu("expand-transition", ou()), Ti = iu("expand-x-transition", ou("", !0)), wv = p({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), me = R(!1)({
  name: "VDefaultsProvider",
  props: wv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = gn(e);
    return Me(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = t.default) == null ? void 0 : s.call(t);
    };
  }
}), Re = p({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Ne(e) {
  return {
    dimensionStyles: b(() => {
      const t = {}, a = ee(e.height), l = ee(e.maxHeight), i = ee(e.maxWidth), o = ee(e.minHeight), r = ee(e.minWidth), s = ee(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), r != null && (t.minWidth = r), s != null && (t.width = s), t;
    })
  };
}
function Cv(e) {
  return {
    aspectStyles: b(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const ru = p({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...ne(),
  ...Re()
}, "VResponsive"), Ll = R()({
  name: "VResponsive",
  props: ru(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = Cv(e), {
      dimensionStyles: l
    } = Ne(e);
    return z(() => {
      var i;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function Bi(e) {
  return Si(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Fl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Fd(e.value.background)) {
          const a = vt(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Ur(a);
            t.color = l, t.caretColor = l;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (Fl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function Ue(e, n) {
  const t = b(() => ({
    text: pn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Bi(t);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function Ve(e, n) {
  const t = b(() => ({
    background: pn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Bi(t);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const pe = p({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Fe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    roundedClasses: b(() => {
      const a = pn(e) ? e.value : e.rounded, l = pn(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const Pt = p({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), tt = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? hi : zt,
    ...s
  } = typeof a == "object" ? a : {};
  return jt(r, H(typeof a == "string" ? {
    name: l ? "" : a
  } : s, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((c) => {
    let [d, v] = c;
    return v !== void 0;
  })), o), t);
};
function Vv(e, n) {
  if (!yi) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var v;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (v = e._observe) == null ? void 0 : v[n.instance.$.uid];
    if (!c) return;
    const d = r.some((f) => f.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || d || c.init) && l(d, r, s), d && t.once ? uu(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function uu(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const sa = {
  mounted: Vv,
  unmounted: uu
}, su = p({
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
  ...ru(),
  ...ne(),
  ...pe(),
  ...Pt()
}, "VImg"), Et = R()({
  name: "VImg",
  directives: {
    intersect: sa
  },
  props: su(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve($(e, "color")), {
      roundedClasses: o
    } = Fe(e), r = Ee("VImg"), s = K(""), c = j(), d = K(e.eager ? "loading" : "idle"), v = K(), f = K(), g = b(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), h = b(() => g.value.aspect || v.value / f.value || 0);
    Z(() => e.src, () => {
      y(d.value !== "idle");
    }), Z(h, (x, D) => {
      !x && D && c.value && A(c.value);
    }), ra(() => y());
    function y(x) {
      if (!(e.eager && x) && !(yi && !x && !e.eager)) {
        if (d.value = "loading", g.value.lazySrc) {
          const D = new Image();
          D.src = g.value.lazySrc, A(D, null);
        }
        g.value.src && xe(() => {
          var D;
          t("loadstart", ((D = c.value) == null ? void 0 : D.currentSrc) || g.value.src), setTimeout(() => {
            var M;
            if (!r.isUnmounted)
              if ((M = c.value) != null && M.complete) {
                if (c.value.naturalWidth || S(), d.value === "error") return;
                h.value || A(c.value, null), d.value === "loading" && m();
              } else
                h.value || A(c.value), k();
          });
        });
      }
    }
    function m() {
      var x;
      r.isUnmounted || (k(), A(c.value), d.value = "loaded", t("load", ((x = c.value) == null ? void 0 : x.currentSrc) || g.value.src));
    }
    function S() {
      var x;
      r.isUnmounted || (d.value = "error", t("error", ((x = c.value) == null ? void 0 : x.currentSrc) || g.value.src));
    }
    function k() {
      const x = c.value;
      x && (s.value = x.currentSrc || x.src);
    }
    let V = -1;
    Je(() => {
      clearTimeout(V);
    });
    function A(x) {
      let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const M = () => {
        if (clearTimeout(V), r.isUnmounted) return;
        const {
          naturalHeight: L,
          naturalWidth: W
        } = x;
        L || W ? (v.value = W, f.value = L) : !x.complete && d.value === "loading" && D != null ? V = window.setTimeout(M, D) : (x.currentSrc.endsWith(".svg") || x.currentSrc.startsWith("data:image/svg+xml")) && (v.value = 1, f.value = 1);
      };
      M();
    }
    const I = b(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), _ = () => {
      var M;
      if (!g.value.src || d.value === "idle") return null;
      const x = u("img", {
        class: ["v-img__img", I.value],
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
        ref: c,
        onLoad: m,
        onError: S
      }, null), D = (M = a.sources) == null ? void 0 : M.call(a);
      return u(tt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ae(D ? u("picture", {
          class: "v-img__picture"
        }, [D, x]) : x, [[Vt, d.value === "loaded"]])]
      });
    }, B = () => u(tt, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && d.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", I.value],
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), w = () => a.placeholder ? u(tt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, P = () => a.error ? u(tt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, T = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, C = K(!1);
    {
      const x = Z(h, (D) => {
        D && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            C.value = !0;
          });
        }), x());
      });
    }
    return z(() => {
      const x = Ll.filterProps(e);
      return Ae(u(Ll, H({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !C.value
        }, l.value, o.value, e.class],
        style: [{
          width: ee(e.width === "auto" ? v.value : e.width)
        }, i.value, e.style]
      }, x, {
        aspectRatio: h.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(se, null, [u(_, null, null), u(B, null, null), u(T, null, null), u(w, null, null), u(P, null, null)]),
        default: a.default
      }), [[ft("intersect"), {
        handler: y,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: d,
      naturalWidth: v,
      naturalHeight: f
    };
  }
}), st = p({
  border: [Boolean, Number, String]
}, "border");
function ht(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    borderClasses: b(() => {
      const a = pn(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${n}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const je = p({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function qe(e) {
  return {
    elevationClasses: b(() => {
      const t = pn(e) ? e.value : e.elevation, a = [];
      return t == null || a.push(`elevation-${t}`), a;
    })
  };
}
const Pv = [null, "prominent", "default", "comfortable", "compact"], cu = p({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => Pv.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...st(),
  ...ne(),
  ...je(),
  ...pe(),
  ...fe({
    tag: "header"
  }),
  ...ye()
}, "VToolbar"), Ol = R()({
  name: "VToolbar",
  props: cu(),
  setup(e, n) {
    var g;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve($(e, "color")), {
      borderClasses: i
    } = ht(e), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Fe(e), {
      themeClasses: s
    } = we(e), {
      rtlClasses: c
    } = We(), d = K(!!(e.extended || (g = t.extension) != null && g.call(t))), v = b(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), f = b(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return Me({
      VBtn: {
        variant: "text"
      }
    }), z(() => {
      var S;
      const h = !!(e.title || t.title), y = !!(t.image || e.image), m = (S = t.extension) == null ? void 0 : S.call(t);
      return d.value = !!(e.extended || m), u(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, o.value, r.value, s.value, c.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [y && u("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? u(me, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : u(Et, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), u(me, {
          defaults: {
            VTabs: {
              height: ee(v.value)
            }
          }
        }, {
          default: () => {
            var k, V, A;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: ee(v.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(k = t.prepend) == null ? void 0 : k.call(t)]), h && u(Ii, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (V = t.default) == null ? void 0 : V.call(t), t.append && u("div", {
              class: "v-toolbar__append"
            }, [(A = t.append) == null ? void 0 : A.call(t)])])];
          }
        }), u(me, {
          defaults: {
            VTabs: {
              height: ee(f.value)
            }
          }
        }, {
          default: () => [u(Ua, null, {
            default: () => [d.value && u("div", {
              class: "v-toolbar__extension",
              style: {
                height: ee(f.value)
              }
            }, [m])]
          })]
        })]
      });
    }), {
      contentHeight: v,
      extensionHeight: f
    };
  }
}), Iv = p({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function _v(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let a = 0, l = 0;
  const i = j(null), o = K(0), r = K(0), s = K(0), c = K(!1), d = K(!1), v = b(() => Number(e.scrollThreshold)), f = b(() => Oe((v.value - o.value) / v.value || 0)), g = () => {
    const h = i.value;
    if (!h || t && !t.value) return;
    a = o.value, o.value = "window" in h ? h.pageYOffset : h.scrollTop;
    const y = h instanceof Window ? document.documentElement.scrollHeight : h.scrollHeight;
    if (l !== y) {
      l = y;
      return;
    }
    d.value = o.value < a, s.value = Math.abs(o.value - v.value);
  };
  return Z(d, () => {
    r.value = r.value || o.value;
  }), Z(c, () => {
    r.value = 0;
  }), at(() => {
    Z(() => e.scrollTarget, (h) => {
      var m;
      const y = h ? document.querySelector(h) : window;
      if (!y) {
        xt(`Unable to locate element with identifier ${h}`);
        return;
      }
      y !== i.value && ((m = i.value) == null || m.removeEventListener("scroll", g), i.value = y, i.value.addEventListener("scroll", g, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), Je(() => {
    var h;
    (h = i.value) == null || h.removeEventListener("scroll", g);
  }), t && Z(t, g, {
    immediate: !0
  }), {
    scrollThreshold: v,
    currentScroll: o,
    currentThreshold: s,
    isScrollActive: c,
    scrollRatio: f,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: d,
    savedScroll: r
  };
}
function bn() {
  const e = K(!1);
  return at(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: b(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: mi(e)
  };
}
const Av = p({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...cu(),
  ...hn(),
  ...Iv(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), Tv = R()({
  name: "VAppBar",
  props: Av(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), l = ie(e, "modelValue"), i = b(() => {
      var V;
      const k = new Set(((V = e.scrollBehavior) == null ? void 0 : V.split(" ")) ?? []);
      return {
        hide: k.has("hide"),
        fullyHide: k.has("fully-hide"),
        inverted: k.has("inverted"),
        collapse: k.has("collapse"),
        elevate: k.has("elevate"),
        fadeImage: k.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = b(() => {
      const k = i.value;
      return k.hide || k.fullyHide || k.inverted || k.collapse || k.elevate || k.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: d
    } = _v(e, {
      canScroll: o
    }), v = b(() => i.value.hide || i.value.fullyHide), f = b(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), g = b(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), h = b(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), y = b(() => {
      var A, I;
      if (i.value.hide && i.value.inverted) return 0;
      const k = ((A = a.value) == null ? void 0 : A.contentHeight) ?? 0, V = ((I = a.value) == null ? void 0 : I.extensionHeight) ?? 0;
      return v.value ? r.value < s.value || i.value.fullyHide ? k + V : k : k + V;
    });
    ot(b(() => !!e.scrollBehavior), () => {
      $e(() => {
        v.value ? i.value.inverted ? l.value = r.value > s.value : l.value = c.value || r.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: m
    } = bn(), {
      layoutItemStyles: S
    } = yn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: $(e, "location"),
      layoutSize: y,
      elementSize: K(void 0),
      active: l,
      absolute: $(e, "absolute")
    });
    return z(() => {
      const k = Ol.filterProps(e);
      return u(Ol, H({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...S.value,
          "--v-toolbar-image-opacity": h.value,
          height: void 0,
          ...m.value
        }, e.style]
      }, k, {
        collapse: f.value,
        flat: g.value
      }), t);
    }), {};
  }
}), Bv = [null, "default", "comfortable", "compact"], Ye = p({
  density: {
    type: String,
    default: "default",
    validator: (e) => Bv.includes(e)
  }
}, "density");
function it(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    densityClasses: b(() => `${n}--density-${e.density}`)
  };
}
const Dv = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Gt(e, n) {
  return u(se, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const St = p({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Dv.includes(e)
  }
}, "variant");
function Sn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  const t = b(() => {
    const {
      variant: i
    } = Xe(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Bi(b(() => {
    const {
      variant: i,
      color: o
    } = Xe(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const du = p({
  baseColor: String,
  divided: Boolean,
  ...st(),
  ...ne(),
  ...Ye(),
  ...je(),
  ...pe(),
  ...fe(),
  ...ye(),
  ...St()
}, "VBtnGroup"), Rl = R()({
  name: "VBtnGroup",
  props: du(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      densityClasses: l
    } = it(e), {
      borderClasses: i
    } = ht(e), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Fe(e);
    Me({
      VBtn: {
        height: "auto",
        baseColor: $(e, "baseColor"),
        color: $(e, "color"),
        density: $(e, "density"),
        flat: !0,
        variant: $(e, "variant")
      }
    }), z(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class],
      style: e.style
    }, t));
  }
}), kn = p({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), xn = p({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function wn(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Ee("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ke();
  Be(Symbol.for(`${n.description}:id`), l);
  const i = be(n, null);
  if (!i) {
    if (!t) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = $(e, "value"), r = b(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), Je(() => {
    i.unregister(l);
  });
  const s = b(() => i.isSelected(l)), c = b(() => i.items.value[0].id === l), d = b(() => i.items.value[i.items.value.length - 1].id === l), v = b(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return Z(s, (f) => {
    a.emit("group:selected", {
      value: f
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: d,
    toggle: () => i.select(l, !s.value),
    select: (f) => i.select(l, f),
    selectedClass: v,
    value: o,
    disabled: r,
    group: i
  };
}
function Ut(e, n) {
  let t = !1;
  const a = ut([]), l = ie(e, "modelValue", [], (f) => f == null ? [] : vu(a, _e(f)), (f) => {
    const g = Mv(a, f);
    return e.multiple ? g : g[0];
  }), i = Ee("useGroup");
  function o(f, g) {
    const h = f, y = Symbol.for(`${n.description}:id`), S = Bn(y, i == null ? void 0 : i.vnode).indexOf(g);
    Xe(h.value) == null && (h.value = S, h.useIndexAsValue = !0), S > -1 ? a.splice(S, 0, h) : a.push(h);
  }
  function r(f) {
    if (t) return;
    s();
    const g = a.findIndex((h) => h.id === f);
    a.splice(g, 1);
  }
  function s() {
    const f = a.find((g) => !g.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  at(() => {
    s();
  }), Je(() => {
    t = !0;
  }), Yc(() => {
    for (let f = 0; f < a.length; f++)
      a[f].useIndexAsValue && (a[f].value = f);
  });
  function c(f, g) {
    const h = a.find((y) => y.id === f);
    if (!(g && (h != null && h.disabled)))
      if (e.multiple) {
        const y = l.value.slice(), m = y.findIndex((k) => k === f), S = ~m;
        if (g = g ?? !S, S && e.mandatory && y.length <= 1 || !S && e.max != null && y.length + 1 > e.max) return;
        m < 0 && g ? y.push(f) : m >= 0 && !g && y.splice(m, 1), l.value = y;
      } else {
        const y = l.value.includes(f);
        if (e.mandatory && y) return;
        l.value = g ?? !y ? [f] : [];
      }
  }
  function d(f) {
    if (e.multiple && xt('This method is not supported when using "multiple" prop'), l.value.length) {
      const g = l.value[0], h = a.findIndex((S) => S.id === g);
      let y = (h + f) % a.length, m = a[y];
      for (; m.disabled && y !== h; )
        y = (y + f) % a.length, m = a[y];
      if (m.disabled) return;
      l.value = [a[y].id];
    } else {
      const g = a.find((h) => !h.disabled);
      g && (l.value = [g.id]);
    }
  }
  const v = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: $(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (f) => l.value.includes(f),
    selectedClass: b(() => e.selectedClass),
    items: b(() => a),
    getItemIndex: (f) => pv(a, f)
  };
  return Be(n, v), v;
}
function pv(e, n) {
  const t = vu(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function vu(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((o) => nt(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id);
  }), t;
}
function Mv(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      t.push(i.value != null ? i.value : l);
    }
  }), t;
}
const Di = Symbol.for("vuetify:v-btn-toggle"), Ev = p({
  ...du(),
  ...kn()
}, "VBtnToggle"), Fv = R()({
  name: "VBtnToggle",
  props: Ev(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = Ut(e, Di);
    return z(() => {
      const s = Rl.filterProps(e);
      return u(Rl, H({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
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
}), fu = {
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
}, mu = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => jt(Mi, {
    ...e,
    class: "mdi"
  })
}, oe = [String, Function, Object, Array], Nl = Symbol.for("vuetify:icons"), Ka = p({
  icon: {
    type: oe
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Hl = R()({
  name: "VComponentIcon",
  props: Ka(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return u(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? u(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), pi = mt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Ka(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => u(e.tag, H(t, {
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
}), $v = mt({
  name: "VLigatureIcon",
  props: Ka(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), Mi = mt({
  name: "VClassIcon",
  props: Ka(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
function Lv() {
  return {
    svg: {
      component: pi
    },
    class: {
      component: Mi
    }
  };
}
function Ov(e) {
  const n = Lv(), t = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return t === "mdi" && !n.mdi && (n.mdi = mu), et({
    defaultSet: t,
    sets: n,
    aliases: {
      ...fu,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Rv = (e) => {
  const n = be(Nl);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: b(() => {
      var s;
      const a = Xe(e);
      if (!a) return {
        component: Hl
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = n.aliases) == null ? void 0 : s[l.slice(1)])), l || xt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: pi,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Hl,
          icon: l
        };
      const i = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, Nv = ["x-small", "small", "default", "large", "x-large"], Tt = p({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Rn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return Si(() => {
    let t, a;
    return pa(Nv, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
      width: ee(e.size),
      height: ee(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: a
    };
  });
}
const Hv = p({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: oe,
  ...ne(),
  ...Tt(),
  ...fe({
    tag: "i"
  }),
  ...ye()
}, "VIcon"), ke = R()({
  name: "VIcon",
  props: Hv(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = j(), {
      themeClasses: i
    } = we(e), {
      iconData: o
    } = Rv(b(() => l.value || e.icon)), {
      sizeClasses: r
    } = Rn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ue($(e, "color"));
    return z(() => {
      var f, g;
      const d = (f = a.default) == null ? void 0 : f.call(a);
      d && (l.value = (g = Dr(d).filter((h) => h.type === Gc && h.children && typeof h.children == "string")[0]) == null ? void 0 : g.children);
      const v = !!(t.onClick || t.onClickOnce);
      return u(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": v,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: ee(e.size),
          height: ee(e.size),
          width: ee(e.size)
        }, c.value, e.style],
        role: v ? "button" : void 0,
        "aria-hidden": !v,
        tabindex: v ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function qa(e, n) {
  const t = j(), a = K(!1);
  if (yi) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, n);
    Je(() => {
      l.disconnect();
    }), Z(t, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
const zv = p({
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
  ...ne(),
  ...Tt(),
  ...fe({
    tag: "div"
  }),
  ...ye()
}, "VProgressCircular"), rn = R()({
  name: "VProgressCircular",
  props: zv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, i = j(), {
      themeClasses: o
    } = we(e), {
      sizeClasses: r,
      sizeStyles: s
    } = Rn(e), {
      textColorClasses: c,
      textColorStyles: d
    } = Ue($(e, "color")), {
      textColorClasses: v,
      textColorStyles: f
    } = Ue($(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: h
    } = qa(), {
      resizeRef: y,
      contentRect: m
    } = Ct(), S = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), k = b(() => Number(e.width)), V = b(() => s.value ? Number(e.size) : m.value ? m.value.width : Math.max(k.value, 32)), A = b(() => a / (1 - k.value / V.value) * 2), I = b(() => k.value / V.value * A.value), _ = b(() => ee((100 - S.value) / 100 * l));
    return $e(() => {
      g.value = i.value, y.value = i.value;
    }), z(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": h.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class],
      style: [s.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : S.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${A.value} ${A.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", v.value],
        style: f.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": I.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": I.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": _.value
      }, null)]), t.default && u("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: S.value
      })])]
    })), {};
  }
}), jo = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Rt = p({
  location: String
}, "location");
function Cn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = We();
  return {
    locationStyles: b(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = Ml(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const s = {};
      return i !== "center" && (n ? s[jo[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? n ? s[jo[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
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
const Wv = p({
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
  ...ne(),
  ...Rt({
    location: "top"
  }),
  ...pe(),
  ...fe(),
  ...ye()
}, "VProgressLinear"), Xa = R()({
  name: "VProgressLinear",
  props: Wv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var C;
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = We(), {
      themeClasses: o
    } = we(e), {
      locationStyles: r
    } = Cn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ue(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: v
    } = Ve(b(() => e.bgColor || e.color)), {
      backgroundColorClasses: f,
      backgroundColorStyles: g
    } = Ve(b(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: h,
      backgroundColorStyles: y
    } = Ve(e, "color"), {
      roundedClasses: m
    } = Fe(e), {
      intersectionRef: S,
      isIntersecting: k
    } = qa(), V = b(() => parseFloat(e.max)), A = b(() => parseFloat(e.height)), I = b(() => Oe(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), _ = b(() => Oe(parseFloat(a.value) / V.value * 100, 0, 100)), B = b(() => l.value !== e.reverse), w = b(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = Se && ((C = window.matchMedia) == null ? void 0 : C.call(window, "(forced-colors: active)").matches);
    function T(x) {
      if (!S.value) return;
      const {
        left: D,
        right: M,
        width: L
      } = S.value.getBoundingClientRect(), W = B.value ? L - x.clientX + (M - L) : x.clientX - D;
      a.value = Math.round(W / L * V.value);
    }
    return z(() => u(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && k.value,
        "v-progress-linear--reverse": B.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, m.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? ee(A.value) : 0,
        "--v-progress-linear-height": ee(A.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(a.value), V.value),
      onClick: e.clickable && T
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [B.value ? "left" : "right"]: ee(-A.value),
          borderTop: `${ee(A.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${ee(A.value / 4)})`,
          width: ee(100 - I.value, "%"),
          "--v-progress-linear-stream-to": ee(A.value * (B.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", P ? void 0 : d.value],
        style: [v.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", P ? void 0 : f.value],
        style: [g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: ee(I.value, "%")
        }]
      }, null), u(zt, {
        name: w.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((x) => u("div", {
          key: x,
          class: ["v-progress-linear__indeterminate", x, P ? void 0 : h.value],
          style: y.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", P ? void 0 : h.value],
          style: [y.value, {
            width: ee(_.value, "%")
          }]
        }, null)]
      }), t.default && u("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: _.value,
        buffer: I.value
      })])]
    })), {};
  }
}), Za = p({
  loading: [Boolean, String]
}, "loader");
function ca(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    loaderClasses: b(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function da(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(Xa, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const jv = ["static", "relative", "fixed", "absolute", "sticky"], Nn = p({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => jv.includes(e)
    )
  }
}, "position");
function Hn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    positionClasses: b(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function Yv() {
  const e = Ee("useRoute");
  return b(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function gu() {
  var e, n;
  return (n = (e = Ee("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function va(e, n) {
  var v, f;
  const t = Vr("RouterLink"), a = b(() => !!(e.href || e.to)), l = b(() => (a == null ? void 0 : a.value) || Vo(n, "click") || Vo(e, "click"));
  if (typeof t == "string" || !("useLink" in t)) {
    const g = $(e, "href");
    return {
      isLink: a,
      isClickable: l,
      href: g,
      linkProps: ut({
        href: g
      })
    };
  }
  const i = b(() => ({
    ...e,
    to: $(() => e.to || "")
  })), o = t.useLink(i.value), r = b(() => e.to ? o : void 0), s = Yv(), c = b(() => {
    var g, h, y;
    return r.value ? e.exact ? s.value ? ((y = r.value.isExactActive) == null ? void 0 : y.value) && nt(r.value.route.value.query, s.value.query) : ((h = r.value.isExactActive) == null ? void 0 : h.value) ?? !1 : ((g = r.value.isActive) == null ? void 0 : g.value) ?? !1 : !1;
  }), d = b(() => {
    var g;
    return e.to ? (g = r.value) == null ? void 0 : g.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: c,
    route: (v = r.value) == null ? void 0 : v.route,
    navigate: (f = r.value) == null ? void 0 : f.navigate,
    href: d,
    linkProps: ut({
      href: d,
      "aria-current": b(() => c.value ? "page" : void 0)
    })
  };
}
const fa = p({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Vl = !1;
function Gv(e, n) {
  let t = !1, a, l;
  Se && (e != null && e.beforeEach) && (xe(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((o, r, s) => {
      Vl ? t ? n(s) : s() : setTimeout(() => t ? n(s) : s()), Vl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Vl = !1;
    });
  }), lt(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function Uv(e, n) {
  Z(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && xe(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const zl = Symbol("rippleStop"), Kv = 80;
function Yo(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Wl(e) {
  return e.constructor.name === "TouchEvent";
}
function hu(e) {
  return e.constructor.name === "KeyboardEvent";
}
const qv = function(e, n) {
  var v;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!hu(e)) {
    const f = n.getBoundingClientRect(), g = Wl(e) ? e.touches[e.touches.length - 1] : e;
    a = g.clientX - f.left, l = g.clientY - f.top;
  }
  let i = 0, o = 0.3;
  (v = n._ripple) != null && v.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const r = `${(n.clientWidth - i * 2) / 2}px`, s = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? r : `${a - i}px`, d = t.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: d,
    centerX: r,
    centerY: s
  };
}, $a = {
  /* eslint-disable max-statements */
  show(e, n) {
    var g;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = n == null ? void 0 : n._ripple) != null && g.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: c,
      centerY: d
    } = qv(e, n, t), v = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = v, l.style.height = v, n.appendChild(a);
    const f = window.getComputedStyle(n);
    f && f.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Yo(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Yo(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function yu(e) {
  return typeof e > "u" || !!e;
}
function ea(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[zl])) {
    if (e[zl] = !0, Wl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || hu(e), t._ripple.class && (n.class = t._ripple.class), Wl(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        $a.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Kv);
    } else
      $a.show(e, t, n);
  }
}
function Go(e) {
  e[zl] = !0;
}
function ct(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        ct(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), $a.hide(n);
  }
}
function bu(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let ta = !1;
function Su(e) {
  !ta && (e.keyCode === So.enter || e.keyCode === So.space) && (ta = !0, ea(e));
}
function ku(e) {
  ta = !1, ct(e);
}
function xu(e) {
  ta && (ta = !1, ct(e));
}
function wu(e, n, t) {
  const {
    value: a,
    modifiers: l
  } = n, i = yu(a);
  if (i || $a.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, za(a) && a.class && (e._ripple.class = a.class), i && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", Go, {
        passive: !0
      }), e.addEventListener("mousedown", Go);
      return;
    }
    e.addEventListener("touchstart", ea, {
      passive: !0
    }), e.addEventListener("touchend", ct, {
      passive: !0
    }), e.addEventListener("touchmove", bu, {
      passive: !0
    }), e.addEventListener("touchcancel", ct), e.addEventListener("mousedown", ea), e.addEventListener("mouseup", ct), e.addEventListener("mouseleave", ct), e.addEventListener("keydown", Su), e.addEventListener("keyup", ku), e.addEventListener("blur", xu), e.addEventListener("dragstart", ct, {
      passive: !0
    });
  } else !i && t && Cu(e);
}
function Cu(e) {
  e.removeEventListener("mousedown", ea), e.removeEventListener("touchstart", ea), e.removeEventListener("touchend", ct), e.removeEventListener("touchmove", bu), e.removeEventListener("touchcancel", ct), e.removeEventListener("mouseup", ct), e.removeEventListener("mouseleave", ct), e.removeEventListener("keydown", Su), e.removeEventListener("keyup", ku), e.removeEventListener("dragstart", ct), e.removeEventListener("blur", xu);
}
function Xv(e, n) {
  wu(e, n, !1);
}
function Zv(e) {
  delete e._ripple, Cu(e);
}
function Jv(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = yu(n.oldValue);
  wu(e, n, t);
}
const Bt = {
  mounted: Xv,
  unmounted: Zv,
  updated: Jv
}, Ja = p({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Di
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: oe,
  appendIcon: oe,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...st(),
  ...ne(),
  ...Ye(),
  ...Re(),
  ...je(),
  ...xn(),
  ...Za(),
  ...Rt(),
  ...Nn(),
  ...pe(),
  ...fa(),
  ...Tt(),
  ...fe({
    tag: "button"
  }),
  ...ye(),
  ...St({
    variant: "elevated"
  })
}, "VBtn"), he = R()({
  name: "VBtn",
  props: Ja(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = we(e), {
      borderClasses: i
    } = ht(e), {
      densityClasses: o
    } = it(e), {
      dimensionStyles: r
    } = Ne(e), {
      elevationClasses: s
    } = qe(e), {
      loaderClasses: c
    } = ca(e), {
      locationStyles: d
    } = Cn(e), {
      positionClasses: v
    } = Hn(e), {
      roundedClasses: f
    } = Fe(e), {
      sizeClasses: g,
      sizeStyles: h
    } = Rn(e), y = wn(e, e.symbol, !1), m = va(e, t), S = b(() => {
      var C;
      return e.active !== void 0 ? e.active : m.isLink.value ? (C = m.isActive) == null ? void 0 : C.value : y == null ? void 0 : y.isSelected.value;
    }), k = b(() => S.value ? e.activeColor ?? e.color : e.color), V = b(() => {
      var x, D;
      return {
        color: (y == null ? void 0 : y.isSelected.value) && (!m.isLink.value || ((x = m.isActive) == null ? void 0 : x.value)) || !y || ((D = m.isActive) == null ? void 0 : D.value) ? k.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: A,
      colorStyles: I,
      variantClasses: _
    } = Sn(V), B = b(() => (y == null ? void 0 : y.disabled.value) || e.disabled), w = b(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), P = b(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function T(C) {
      var x;
      B.value || m.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || t.target === "_blank") || ((x = m.navigate) == null || x.call(m, C), y == null || y.toggle());
    }
    return Uv(m, y == null ? void 0 : y.select), z(() => {
      const C = m.isLink.value ? "a" : e.tag, x = !!(e.prependIcon || a.prepend), D = !!(e.appendIcon || a.append), M = !!(e.icon && e.icon !== !0);
      return Ae(u(C, H({
        type: C === "a" ? void 0 : "button",
        class: ["v-btn", y == null ? void 0 : y.selectedClass.value, {
          "v-btn--active": S.value,
          "v-btn--block": e.block,
          "v-btn--disabled": B.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, A.value, o.value, s.value, c.value, v.value, f.value, g.value, _.value, e.class],
        style: [I.value, r.value, d.value, h.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: B.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: T,
        value: P.value
      }, m.linkProps), {
        default: () => {
          var L;
          return [Gt(!0, "v-btn"), !e.icon && x && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : u(ke, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && M ? u(ke, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(me, {
            key: "content-defaults",
            disabled: !M,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var W;
              return [((W = a.default) == null ? void 0 : W.call(a)) ?? e.text];
            }
          })]), !e.icon && D && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? u(me, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : u(ke, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((L = a.loader) == null ? void 0 : L.call(a)) ?? u(rn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Bt, !B.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: y
    };
  }
}), Qv = p({
  ...Ja({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), ef = R()({
  name: "VAppBarNavIcon",
  props: Qv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(he, H(e, {
      class: ["v-app-bar-nav-icon"]
    }), t)), {};
  }
}), tf = R()({
  name: "VAppBarTitle",
  props: lu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(Ii, H(e, {
      class: "v-app-bar-title"
    }), t)), {};
  }
}), Vu = At("v-alert-title"), nf = ["success", "info", "warning", "error"], af = p({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: oe,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => nf.includes(e)
  },
  ...ne(),
  ...Ye(),
  ...Re(),
  ...je(),
  ...Rt(),
  ...Nn(),
  ...pe(),
  ...fe(),
  ...ye(),
  ...St({
    variant: "flat"
  })
}, "VAlert"), lf = R()({
  name: "VAlert",
  props: af(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), i = b(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), o = b(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: r
    } = we(e), {
      colorClasses: s,
      colorStyles: c,
      variantClasses: d
    } = Sn(o), {
      densityClasses: v
    } = it(e), {
      dimensionStyles: f
    } = Ne(e), {
      elevationClasses: g
    } = qe(e), {
      locationStyles: h
    } = Cn(e), {
      positionClasses: y
    } = Hn(e), {
      roundedClasses: m
    } = Fe(e), {
      textColorClasses: S,
      textColorStyles: k
    } = Ue($(e, "borderColor")), {
      t: V
    } = De(), A = b(() => ({
      "aria-label": V(e.closeLabel),
      onClick(I) {
        l.value = !1, t("click:close", I);
      }
    }));
    return () => {
      const I = !!(a.prepend || i.value), _ = !!(a.title || e.title), B = !!(a.close || e.closable);
      return l.value && u(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, v.value, g.value, y.value, m.value, d.value, e.class],
        style: [c.value, f.value, h.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var w, P;
          return [Gt(!1, "v-alert"), e.border && u("div", {
            key: "border",
            class: ["v-alert__border", S.value],
            style: k.value
          }, null), I && u("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : u(ke, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), u("div", {
            class: "v-alert__content"
          }, [_ && u(Vu, {
            key: "title"
          }, {
            default: () => {
              var T;
              return [((T = a.title) == null ? void 0 : T.call(a)) ?? e.title];
            }
          }), ((w = a.text) == null ? void 0 : w.call(a)) ?? e.text, (P = a.default) == null ? void 0 : P.call(a)]), a.append && u("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), B && u("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? u(me, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var T;
              return [(T = a.close) == null ? void 0 : T.call(a, {
                props: A.value
              })];
            }
          }) : u(he, H({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, A.value), null)])];
        }
      });
    };
  }
}), of = p({
  start: Boolean,
  end: Boolean,
  icon: oe,
  image: String,
  text: String,
  ...st(),
  ...ne(),
  ...Ye(),
  ...pe(),
  ...Tt(),
  ...fe(),
  ...ye(),
  ...St({
    variant: "flat"
  })
}, "VAvatar"), bt = R()({
  name: "VAvatar",
  props: of(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      borderClasses: l
    } = ht(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = Sn(e), {
      densityClasses: s
    } = it(e), {
      roundedClasses: c
    } = Fe(e), {
      sizeClasses: d,
      sizeStyles: v
    } = Rn(e);
    return z(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, c.value, d.value, r.value, e.class],
      style: [o.value, v.value, e.style]
    }, {
      default: () => [t.default ? u(me, {
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
        default: () => [t.default()]
      }) : e.image ? u(Et, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(ke, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Gt(!1, "v-avatar")]
    })), {};
  }
}), rf = p({
  text: String,
  onClick: Ge(),
  ...ne(),
  ...ye()
}, "VLabel"), zn = R()({
  name: "VLabel",
  props: rf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var a;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Pu = Symbol.for("vuetify:selection-control-group"), Ei = p({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: oe,
  trueIcon: oe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: nt
  },
  ...ne(),
  ...Ye(),
  ...ye()
}, "SelectionControlGroup"), uf = p({
  ...Ei({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), Iu = R()({
  name: "VSelectionControlGroup",
  props: uf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = Ke(), i = b(() => e.id || `v-selection-control-group-${l}`), o = b(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Be(Pu, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), lt(() => {
          r.delete(s);
        });
      }
    }), Me({
      [e.defaultsTarget]: {
        color: $(e, "color"),
        disabled: $(e, "disabled"),
        density: $(e, "density"),
        error: $(e, "error"),
        inline: $(e, "inline"),
        modelValue: a,
        multiple: b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: $(e, "falseIcon"),
        trueIcon: $(e, "trueIcon"),
        readonly: $(e, "readonly"),
        ripple: $(e, "ripple"),
        type: $(e, "type"),
        valueComparator: $(e, "valueComparator")
      }
    }), z(() => {
      var s;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = t.default) == null ? void 0 : s.call(t)]);
    }), {};
  }
}), Qa = p({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ne(),
  ...Ei()
}, "VSelectionControl");
function sf(e) {
  const n = be(Pu, void 0), {
    densityClasses: t
  } = it(e), a = ie(e, "modelValue"), l = b(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = b(() => e.falseValue !== void 0 ? e.falseValue : !1), o = b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = b({
    get() {
      const g = n ? n.modelValue.value : a.value;
      return o.value ? _e(g).some((h) => e.valueComparator(h, l.value)) : e.valueComparator(g, l.value);
    },
    set(g) {
      if (e.readonly) return;
      const h = g ? l.value : i.value;
      let y = h;
      o.value && (y = g ? [..._e(a.value), h] : _e(a.value).filter((m) => !e.valueComparator(m, l.value))), n ? n.modelValue.value = y : a.value = y;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = Ue(b(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: v
  } = Ve(b(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), f = b(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: v,
    icon: f
  };
}
const Wt = R()({
  name: "VSelectionControl",
  directives: {
    Ripple: Bt
  },
  inheritAttrs: !1,
  props: Qa(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: v,
      trueValue: f
    } = sf(e), g = Ke(), h = K(!1), y = K(!1), m = j(), S = b(() => e.id || `input-${g}`), k = b(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      m.value && (m.value.checked = r.value);
    });
    function V(B) {
      k.value && (h.value = !0, Mn(B.target, ":focus-visible") !== !1 && (y.value = !0));
    }
    function A() {
      h.value = !1, y.value = !1;
    }
    function I(B) {
      B.stopPropagation();
    }
    function _(B) {
      if (!k.value) {
        m.value && (m.value.checked = r.value);
        return;
      }
      e.readonly && l && xe(() => l.forceUpdate()), r.value = B.target.checked;
    }
    return z(() => {
      var C, x;
      const B = a.label ? a.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [w, P] = Yt(t), T = u("input", H({
        ref: m,
        checked: r.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: A,
        onFocus: V,
        onInput: _,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: f.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, P), null);
      return u("div", H({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": h.value,
          "v-selection-control--focus-visible": y.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, w, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: c.value
      }, [(C = a.default) == null ? void 0 : C.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: v
      }), Ae(u("div", {
        class: ["v-selection-control__input"]
      }, [((x = a.input) == null ? void 0 : x.call(a, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: v,
        inputNode: T,
        icon: o.value,
        props: {
          onFocus: V,
          onBlur: A,
          id: S.value
        }
      })) ?? u(se, null, [o.value && u(ke, {
        key: "icon",
        icon: o.value
      }, null), T])]), [[ft("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), B && u(zn, {
        for: S.value,
        onClick: I
      }, {
        default: () => [B]
      })]);
    }), {
      isFocused: h,
      input: m
    };
  }
}), _u = p({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: oe,
    default: "$checkboxIndeterminate"
  },
  ...Qa({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Ft = R()({
  name: "VCheckboxBtn",
  props: _u(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "indeterminate"), l = ie(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const o = b(() => a.value ? e.indeterminateIcon : e.falseIcon), r = b(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return z(() => {
      const s = Te(Wt.filterProps(e), ["modelValue"]);
      return u(Wt, H(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function Au(e) {
  const {
    t: n
  } = De();
  function t(a) {
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
      c.key !== "Enter" && c.key !== " " || (c.preventDefault(), c.stopPropagation(), ja(o, new PointerEvent("click", c)));
    }
    const s = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return u(ke, {
      icon: e[`${l}Icon`],
      "aria-label": s,
      onClick: o,
      onKeydown: r
    }, null);
  }
  return {
    InputIcon: t
  };
}
const cf = p({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ne(),
  ...Pt({
    transition: {
      component: Ai,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Tu = R()({
  name: "VMessages",
  props: cf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => _e(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = Ue(b(() => e.color));
    return z(() => u(tt, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style]
    }, {
      default: () => [e.active && a.value.map((o, r) => u("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Wn = p({
  focused: Boolean,
  "onUpdate:focused": Ge()
}, "focus");
function Dt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  const t = ie(e, "focused"), a = b(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: i
  };
}
const Bu = Symbol.for("vuetify:form"), df = p({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function vf(e) {
  const n = ie(e, "modelValue"), t = b(() => e.disabled), a = b(() => e.readonly), l = K(!1), i = j([]), o = j([]);
  async function r() {
    const d = [];
    let v = !0;
    o.value = [], l.value = !0;
    for (const f of i.value) {
      const g = await f.validate();
      if (g.length > 0 && (v = !1, d.push({
        id: f.id,
        errorMessages: g
      })), !v && e.fastFail) break;
    }
    return o.value = d, l.value = !1, {
      valid: v,
      errors: o.value
    };
  }
  function s() {
    i.value.forEach((d) => d.reset());
  }
  function c() {
    i.value.forEach((d) => d.resetValidation());
  }
  return Z(i, () => {
    let d = 0, v = 0;
    const f = [];
    for (const g of i.value)
      g.isValid === !1 ? (v++, f.push({
        id: g.id,
        errorMessages: g.errorMessages
      })) : g.isValid === !0 && d++;
    o.value = f, n.value = v > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Be(Bu, {
    register: (d) => {
      let {
        id: v,
        vm: f,
        validate: g,
        reset: h,
        resetValidation: y
      } = d;
      i.value.some((m) => m.id === v) && xt(`Duplicate input name "${v}"`), i.value.push({
        id: v,
        validate: g,
        reset: h,
        resetValidation: y,
        vm: Uc(f),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((v) => v.id !== d);
    },
    update: (d, v, f) => {
      const g = i.value.find((h) => h.id === d);
      g && (g.isValid = v, g.errorMessages = f);
    },
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validateOn: $(e, "validateOn")
  }), {
    errors: o,
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validate: r,
    reset: s,
    resetValidation: c
  };
}
function el(e) {
  const n = be(Bu, null);
  return {
    ...n,
    isReadonly: b(() => !!((e == null ? void 0 : e.readonly) ?? (n == null ? void 0 : n.isReadonly.value))),
    isDisabled: b(() => !!((e == null ? void 0 : e.disabled) ?? (n == null ? void 0 : n.isDisabled.value)))
  };
}
const Du = p({
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
  ...Wn()
}, "validation");
function pu(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ke();
  const a = ie(e, "modelValue"), l = b(() => e.validationValue === void 0 ? a.value : e.validationValue), i = el(e), o = j([]), r = K(!0), s = b(() => !!(_e(a.value === "" ? null : a.value).length || _e(l.value === "" ? null : l.value).length)), c = b(() => {
    var V;
    return (V = e.errorMessages) != null && V.length ? _e(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), d = b(() => {
    var I;
    let V = (e.validateOn ?? ((I = i.validateOn) == null ? void 0 : I.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const A = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return {
      input: A.has("input"),
      blur: A.has("blur") || A.has("input") || A.has("invalid-input"),
      invalidInput: A.has("invalid-input"),
      lazy: A.has("lazy"),
      eager: A.has("eager")
    };
  }), v = b(() => {
    var V;
    return e.error || (V = e.errorMessages) != null && V.length ? !1 : e.rules.length ? r.value ? o.value.length || d.value.lazy ? null : !0 : !o.value.length : !0;
  }), f = K(!1), g = b(() => ({
    [`${n}--error`]: v.value === !1,
    [`${n}--dirty`]: s.value,
    [`${n}--disabled`]: i.isDisabled.value,
    [`${n}--readonly`]: i.isReadonly.value
  })), h = Ee("validation"), y = b(() => e.name ?? Xe(t));
  ra(() => {
    var V;
    (V = i.register) == null || V.call(i, {
      id: y.value,
      vm: h,
      validate: k,
      reset: m,
      resetValidation: S
    });
  }), Je(() => {
    var V;
    (V = i.unregister) == null || V.call(i, y.value);
  }), at(async () => {
    var V;
    d.value.lazy || await k(!d.value.eager), (V = i.update) == null || V.call(i, y.value, v.value, c.value);
  }), ot(() => d.value.input || d.value.invalidInput && v.value === !1, () => {
    Z(l, () => {
      if (l.value != null)
        k();
      else if (e.focused) {
        const V = Z(() => e.focused, (A) => {
          A || k(), V();
        });
      }
    });
  }), ot(() => d.value.blur, () => {
    Z(() => e.focused, (V) => {
      V || k();
    });
  }), Z([v, c], () => {
    var V;
    (V = i.update) == null || V.call(i, y.value, v.value, c.value);
  });
  async function m() {
    a.value = null, await xe(), await S();
  }
  async function S() {
    r.value = !0, d.value.lazy ? o.value = [] : await k(!d.value.eager);
  }
  async function k() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const A = [];
    f.value = !0;
    for (const I of e.rules) {
      if (A.length >= +(e.maxErrors ?? 1))
        break;
      const B = await (typeof I == "function" ? I : () => I)(l.value);
      if (B !== !0) {
        if (B !== !1 && typeof B != "string") {
          console.warn(`${B} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        A.push(B || "");
      }
    }
    return o.value = A, f.value = !1, r.value = V, o.value;
  }
  return {
    errorMessages: c,
    isDirty: s,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: r,
    isValid: v,
    isValidating: f,
    reset: m,
    resetValidation: S,
    validate: k,
    validationClasses: g
  };
}
const Nt = p({
  id: String,
  appendIcon: oe,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: oe,
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
  "onClick:prepend": Ge(),
  "onClick:append": Ge(),
  ...ne(),
  ...Ye(),
  ...Ot(Re(), ["maxWidth", "minWidth", "width"]),
  ...ye(),
  ...Du()
}, "VInput"), Ze = R()({
  name: "VInput",
  props: {
    ...Nt()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: i
    } = it(e), {
      dimensionStyles: o
    } = Ne(e), {
      themeClasses: r
    } = we(e), {
      rtlClasses: s
    } = We(), {
      InputIcon: c
    } = Au(e), d = Ke(), v = b(() => e.id || `input-${d}`), f = b(() => `${v.value}-messages`), {
      errorMessages: g,
      isDirty: h,
      isDisabled: y,
      isReadonly: m,
      isPristine: S,
      isValid: k,
      isValidating: V,
      reset: A,
      resetValidation: I,
      validate: _,
      validationClasses: B
    } = pu(e, "v-input", v), w = b(() => ({
      id: v,
      messagesId: f,
      isDirty: h,
      isDisabled: y,
      isReadonly: m,
      isPristine: S,
      isValid: k,
      isValidating: V,
      reset: A,
      resetValidation: I,
      validate: _
    })), P = b(() => {
      var T;
      return (T = e.errorMessages) != null && T.length || !S.value && g.value.length ? g.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return z(() => {
      var M, L, W, J;
      const T = !!(a.prepend || e.prependIcon), C = !!(a.append || e.appendIcon), x = P.value.length > 0, D = !e.hideDetails || e.hideDetails === "auto" && (x || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, B.value, e.class],
        style: [o.value, e.style]
      }, [T && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(M = a.prepend) == null ? void 0 : M.call(a, w.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(L = a.default) == null ? void 0 : L.call(a, w.value)]), C && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (W = a.append) == null ? void 0 : W.call(a, w.value)]), D && u("div", {
        id: f.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [u(Tu, {
        active: x,
        messages: P.value
      }, {
        message: a.message
      }), (J = a.details) == null ? void 0 : J.call(a, w.value)])]);
    }), {
      reset: A,
      resetValidation: I,
      validate: _,
      isValid: k,
      errorMessages: g
    };
  }
}), ff = p({
  ...Nt(),
  ...Te(_u(), ["inline"])
}, "VCheckbox"), mf = R()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: ff(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = Dt(e), s = Ke(), c = b(() => e.id || `checkbox-${s}`);
    return z(() => {
      const [d, v] = Yt(t), f = Ze.filterProps(e), g = Ft.filterProps(e);
      return u(Ze, H({
        class: ["v-checkbox", e.class]
      }, d, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (h) => l.value = h,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (h) => {
          let {
            id: y,
            messagesId: m,
            isDisabled: S,
            isReadonly: k,
            isValid: V
          } = h;
          return u(Ft, H(g, {
            id: y.value,
            "aria-describedby": m.value,
            disabled: S.value,
            readonly: k.value
          }, v, {
            error: V.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (A) => l.value = A,
            onFocus: o,
            onBlur: r
          }), a);
        }
      });
    }), {};
  }
}), tl = ["sm", "md", "lg", "xl", "xxl"], jl = Symbol.for("vuetify:display"), Uo = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, gf = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Uo;
  return et(Uo, e);
};
function Ko(e) {
  return Se && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function qo(e) {
  return Se && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Xo(e) {
  const n = Se && !e ? window.navigator.userAgent : "ssr";
  function t(h) {
    return !!n.match(h);
  }
  const a = t(/android/i), l = t(/iphone|ipad|ipod/i), i = t(/cordova/i), o = t(/electron/i), r = t(/chrome/i), s = t(/edge/i), c = t(/firefox/i), d = t(/opera/i), v = t(/win/i), f = t(/mac/i), g = t(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
    chrome: r,
    edge: s,
    firefox: c,
    opera: d,
    win: v,
    mac: f,
    linux: g,
    touch: ld,
    ssr: n === "ssr"
  };
}
function hf(e, n) {
  const {
    thresholds: t,
    mobileBreakpoint: a
  } = gf(e), l = K(qo(n)), i = K(Xo(n)), o = ut({}), r = K(Ko(n));
  function s() {
    l.value = qo(), r.value = Ko();
  }
  function c() {
    s(), i.value = Xo();
  }
  return $e(() => {
    const d = r.value < t.sm, v = r.value < t.md && !d, f = r.value < t.lg && !(v || d), g = r.value < t.xl && !(f || v || d), h = r.value < t.xxl && !(g || f || v || d), y = r.value >= t.xxl, m = d ? "xs" : v ? "sm" : f ? "md" : g ? "lg" : h ? "xl" : "xxl", S = typeof a == "number" ? a : t[a], k = r.value < S;
    o.xs = d, o.sm = v, o.md = f, o.lg = g, o.xl = h, o.xxl = y, o.smAndUp = !d, o.mdAndUp = !(d || v), o.lgAndUp = !(d || v || f), o.xlAndUp = !(d || v || f || g), o.smAndDown = !(f || g || h || y), o.mdAndDown = !(g || h || y), o.lgAndDown = !(h || y), o.xlAndDown = !y, o.name = m, o.height = l.value, o.width = r.value, o.mobile = k, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = t;
  }), Se && window.addEventListener("resize", s, {
    passive: !0
  }), {
    ...gn(o),
    update: c,
    ssr: !!n
  };
}
const Vn = p({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function kt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  const t = be(jl);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = b(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? t.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? t.width.value < t.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? t.mobile.value : !1), l = b(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return {
    ...t,
    displayClasses: l,
    mobile: a
  };
}
const Mu = Symbol.for("vuetify:goto");
function Eu() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function yf(e) {
  return Fi(e) ?? (document.scrollingElement || document.body);
}
function Fi(e) {
  return typeof e == "string" ? document.querySelector(e) : bi(e);
}
function Pl(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = Fi(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function bf(e, n) {
  return {
    rtl: n.isRtl,
    options: et(Eu(), e)
  };
}
async function Zo(e, n, t, a) {
  const l = t ? "scrollLeft" : "scrollTop", i = et((a == null ? void 0 : a.options) ?? Eu(), n), o = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : Fi(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : yf(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let d;
  if (typeof r == "number")
    d = Pl(r, t, o);
  else if (d = Pl(r, t, o) - Pl(s, t, o), i.layout) {
    const h = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    h && (d -= parseInt(h, 10));
  }
  d += i.offset, d = kf(s, d, !!o, !!t);
  const v = s[l] ?? 0;
  if (d === v) return Promise.resolve(d);
  const f = performance.now();
  return new Promise((g) => requestAnimationFrame(function h(y) {
    const S = (y - f) / i.duration, k = Math.floor(v + (d - v) * c(Oe(S, 0, 1)));
    if (s[l] = k, S >= 1 && Math.abs(k - s[l]) < 10)
      return g(d);
    if (S > 2)
      return xt("Scroll target is not reachable"), g(s[l]);
    requestAnimationFrame(h);
  }));
}
function Sf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = be(Mu), {
    isRtl: t
  } = We();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...n,
    // can be set via VLocaleProvider
    rtl: b(() => n.rtl.value || t.value)
  };
  async function l(i, o) {
    return Zo(i, et(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => Zo(i, et(e, o), !0, a), l;
}
function kf(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? t ? (s = -(l - o), c = 0) : (s = 0, c = l - o) : (s = 0, c = i + -r), Math.max(Math.min(n, c), s);
}
function xf(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = na(l, t), o = Fu(l, a, t), r = na(l, n), s = $u(l, n), c = r * 0.4;
  return o > s ? s - c : o + i < s + r ? s - i + r + c : o;
}
function wf(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = na(a, t), i = $u(a, n), o = na(a, n);
  return i - l / 2 + o / 2;
}
function Jo(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Cf(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Fu(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = t;
  return e ? n ? i - l + a : a : t.scrollTop;
}
function na(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function $u(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Lu = Symbol.for("vuetify:v-slide-group"), $i = p({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Lu
  },
  nextIcon: {
    type: oe,
    default: "$next"
  },
  prevIcon: {
    type: oe,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...ne(),
  ...Vn({
    mobile: null
  }),
  ...fe(),
  ...kn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), aa = R()({
  name: "VSlideGroup",
  props: $i(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = We(), {
      displayClasses: l,
      mobile: i
    } = kt(e), o = Ut(e, e.symbol), r = K(!1), s = K(0), c = K(0), d = K(0), v = b(() => e.direction === "horizontal"), {
      resizeRef: f,
      contentRect: g
    } = Ct(), {
      resizeRef: h,
      contentRect: y
    } = Ct(), m = Sf(), S = b(() => ({
      container: f.el,
      duration: 200,
      easing: "easeOutQuart"
    })), k = b(() => o.selected.value.length ? o.items.value.findIndex((F) => F.id === o.selected.value[0]) : -1), V = b(() => o.selected.value.length ? o.items.value.findIndex((F) => F.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (Se) {
      let F = -1;
      Z(() => [o.selected.value, g.value, y.value, v.value], () => {
        cancelAnimationFrame(F), F = requestAnimationFrame(() => {
          if (g.value && y.value) {
            const Y = v.value ? "width" : "height";
            c.value = g.value[Y], d.value = y.value[Y], r.value = c.value + 1 < d.value;
          }
          if (k.value >= 0 && h.el) {
            const Y = h.el.children[V.value];
            I(Y, e.centerActive);
          }
        });
      });
    }
    const A = K(!1);
    function I(F, Y) {
      let X = 0;
      Y ? X = wf({
        containerElement: f.el,
        isHorizontal: v.value,
        selectedElement: F
      }) : X = xf({
        containerElement: f.el,
        isHorizontal: v.value,
        isRtl: a.value,
        selectedElement: F
      }), _(X);
    }
    function _(F) {
      if (!Se || !f.el) return;
      const Y = na(v.value, f.el), X = Fu(v.value, a.value, f.el);
      if (!(Jo(v.value, f.el) <= Y || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(F - X) < 16)) {
        if (v.value && a.value && f.el) {
          const {
            scrollWidth: re,
            offsetWidth: G
          } = f.el;
          F = re - G - F;
        }
        v.value ? m.horizontal(F, S.value) : m(F, S.value);
      }
    }
    function B(F) {
      const {
        scrollTop: Y,
        scrollLeft: X
      } = F.target;
      s.value = v.value ? X : Y;
    }
    function w(F) {
      if (A.value = !0, !(!r.value || !h.el)) {
        for (const Y of F.composedPath())
          for (const X of h.el.children)
            if (X === Y) {
              I(X);
              return;
            }
      }
    }
    function P(F) {
      A.value = !1;
    }
    let T = !1;
    function C(F) {
      var Y;
      !T && !A.value && !(F.relatedTarget && ((Y = h.el) != null && Y.contains(F.relatedTarget))) && L(), T = !1;
    }
    function x() {
      T = !0;
    }
    function D(F) {
      if (!h.el) return;
      function Y(X) {
        F.preventDefault(), L(X);
      }
      v.value ? F.key === "ArrowRight" ? Y(a.value ? "prev" : "next") : F.key === "ArrowLeft" && Y(a.value ? "next" : "prev") : F.key === "ArrowDown" ? Y("next") : F.key === "ArrowUp" && Y("prev"), F.key === "Home" ? Y("first") : F.key === "End" && Y("last");
    }
    function M(F, Y) {
      if (!F) return;
      let X = F;
      do
        X = X == null ? void 0 : X[Y === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (X != null && X.hasAttribute("disabled"));
      return X;
    }
    function L(F) {
      if (!h.el) return;
      let Y;
      if (!F)
        Y = qn(h.el)[0];
      else if (F === "next") {
        if (Y = M(h.el.querySelector(":focus"), F), !Y) return L("first");
      } else if (F === "prev") {
        if (Y = M(h.el.querySelector(":focus"), F), !Y) return L("last");
      } else F === "first" ? (Y = h.el.firstElementChild, Y != null && Y.hasAttribute("disabled") && (Y = M(Y, "next"))) : F === "last" && (Y = h.el.lastElementChild, Y != null && Y.hasAttribute("disabled") && (Y = M(Y, "prev")));
      Y && Y.focus({
        preventScroll: !0
      });
    }
    function W(F) {
      const Y = v.value && a.value ? -1 : 1, X = (F === "prev" ? -Y : Y) * c.value;
      let Q = s.value + X;
      if (v.value && a.value && f.el) {
        const {
          scrollWidth: re,
          offsetWidth: G
        } = f.el;
        Q += re - G;
      }
      _(Q);
    }
    const J = b(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), N = b(() => {
      switch (e.showArrows) {
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !i.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return r.value || Math.abs(s.value) > 0;
        // Always show on mobile
        case "mobile":
          return i.value || r.value || Math.abs(s.value) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !i.value && (r.value || Math.abs(s.value) > 0);
      }
    }), O = b(() => Math.abs(s.value) > 1), E = b(() => {
      if (!f.value) return !1;
      const F = Jo(v.value, f.el), Y = Cf(v.value, f.el);
      return F - Y - Math.abs(s.value) > 1;
    });
    return z(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !v.value,
        "v-slide-group--has-affixes": N.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: A.value || o.selected.value.length ? -1 : 0,
      onFocus: C
    }, {
      default: () => {
        var F, Y, X;
        return [N.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !O.value
          }],
          onMousedown: x,
          onClick: () => O.value && W("prev")
        }, [((F = t.prev) == null ? void 0 : F.call(t, J.value)) ?? u(Qn, null, {
          default: () => [u(ke, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: f,
          class: "v-slide-group__container",
          onScroll: B
        }, [u("div", {
          ref: h,
          class: "v-slide-group__content",
          onFocusin: w,
          onFocusout: P,
          onKeydown: D
        }, [(Y = t.default) == null ? void 0 : Y.call(t, J.value)])]), N.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !E.value
          }],
          onMousedown: x,
          onClick: () => E.value && W("next")
        }, [((X = t.next) == null ? void 0 : X.call(t, J.value)) ?? u(Qn, null, {
          default: () => [u(ke, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: W,
      scrollOffset: s,
      focus: L,
      hasPrev: O,
      hasNext: E
    };
  }
}), Ou = Symbol.for("vuetify:v-chip-group"), Vf = p({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: nt
  },
  ...$i(),
  ...ne(),
  ...kn({
    selectedClass: "v-chip--selected"
  }),
  ...fe(),
  ...ye(),
  ...St({
    variant: "tonal"
  })
}, "VChipGroup"), Pf = R()({
  name: "VChipGroup",
  props: Vf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = Ut(e, Ou);
    return Me({
      VChip: {
        color: $(e, "color"),
        disabled: $(e, "disabled"),
        filter: $(e, "filter"),
        variant: $(e, "variant")
      }
    }), z(() => {
      const c = aa.filterProps(e);
      return u(aa, H(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = t.default) == null ? void 0 : d.call(t, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
}), If = p({
  activeClass: String,
  appendAvatar: String,
  appendIcon: oe,
  closable: Boolean,
  closeIcon: {
    type: oe,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: oe,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: oe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Ge(),
  onClickOnce: Ge(),
  ...st(),
  ...ne(),
  ...Ye(),
  ...je(),
  ...xn(),
  ...pe(),
  ...fa(),
  ...Tt(),
  ...fe({
    tag: "span"
  }),
  ...ye(),
  ...St({
    variant: "tonal"
  })
}, "VChip"), jn = R()({
  name: "VChip",
  directives: {
    Ripple: Bt
  },
  props: If(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = De(), {
      borderClasses: o
    } = ht(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = Sn(e), {
      densityClasses: d
    } = it(e), {
      elevationClasses: v
    } = qe(e), {
      roundedClasses: f
    } = Fe(e), {
      sizeClasses: g
    } = Rn(e), {
      themeClasses: h
    } = we(e), y = ie(e, "modelValue"), m = wn(e, Ou, !1), S = va(e, t), k = b(() => e.link !== !1 && S.isLink.value), V = b(() => !e.disabled && e.link !== !1 && (!!m || e.link || S.isClickable.value)), A = b(() => ({
      "aria-label": i(e.closeLabel),
      onClick(B) {
        B.preventDefault(), B.stopPropagation(), y.value = !1, a("click:close", B);
      }
    }));
    function I(B) {
      var w;
      a("click", B), V.value && ((w = S.navigate) == null || w.call(S, B), m == null || m.toggle());
    }
    function _(B) {
      (B.key === "Enter" || B.key === " ") && (B.preventDefault(), I(B));
    }
    return () => {
      var L;
      const B = S.isLink.value ? "a" : e.tag, w = !!(e.appendIcon || e.appendAvatar), P = !!(w || l.append), T = !!(l.close || e.closable), C = !!(l.filter || e.filter) && m, x = !!(e.prependIcon || e.prependAvatar), D = !!(x || l.prepend), M = !m || m.isSelected.value;
      return y.value && Ae(u(B, H({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": V.value,
          "v-chip--filter": C,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && ((L = S.isActive) == null ? void 0 : L.value)
        }, h.value, o.value, M ? r.value : void 0, d.value, v.value, f.value, g.value, c.value, m == null ? void 0 : m.selectedClass.value, e.class],
        style: [M ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: V.value ? 0 : void 0,
        onClick: I,
        onKeydown: V.value && !k.value && _
      }, S.linkProps), {
        default: () => {
          var W;
          return [Gt(V.value, "v-chip"), C && u(Ti, {
            key: "filter"
          }, {
            default: () => [Ae(u("div", {
              class: "v-chip__filter"
            }, [l.filter ? u(me, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : u(ke, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[Vt, m.isSelected.value]])]
          }), D && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !x,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : u(se, null, [e.prependIcon && u(ke, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(bt, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((W = l.default) == null ? void 0 : W.call(l, {
            isSelected: m == null ? void 0 : m.isSelected.value,
            selectedClass: m == null ? void 0 : m.selectedClass.value,
            select: m == null ? void 0 : m.select,
            toggle: m == null ? void 0 : m.toggle,
            value: m == null ? void 0 : m.value.value,
            disabled: e.disabled
          })) ?? e.text]), P && u("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? u(me, {
            key: "append-defaults",
            disabled: !w,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : u(se, null, [e.appendIcon && u(ke, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(bt, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), T && u("button", H({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, A.value), [l.close ? u(me, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : u(ke, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[ft("ripple"), V.value && e.ripple, null]]);
    };
  }
}), Yl = Symbol.for("vuetify:list");
function Ru() {
  const e = be(Yl, {
    hasPrepend: K(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: K(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return Be(Yl, n), e;
}
function Nu() {
  return be(Yl, null);
}
const Li = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: i
      } = t;
      return a = Le(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of _e(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, Hu = (e) => {
  const n = Li(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = Le(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = _e(a);
        r.length && (o = n.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, _f = (e) => {
  const n = Li(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Le(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Af = (e) => {
  const n = Hu(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Le(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Tf = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = l.get(n);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, zu = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let i = l.get(n);
      for (a.add(n); i != null && i !== n; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, Bf = {
  open: zu.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const i = [];
    let o = l.get(n);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, Oi = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i
      } = t;
      if (a = Le(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [c, d] = s;
          return d === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (t, a, l) => {
      const i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        n.select({
          id: o,
          value: !0,
          selected: i,
          children: a,
          parents: l
        });
      return i;
    },
    out: (t) => {
      const a = [];
      for (const [l, i] of t.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, Wu = (e) => {
  const n = Oi(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = Le(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (a, l, i) => a != null && a.length ? n.in(a.slice(0, 1), l, i) : /* @__PURE__ */ new Map(),
    out: (a, l, i) => n.out(a, l, i)
  };
}, Df = (e) => {
  const n = Oi(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Le(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, pf = (e) => {
  const n = Wu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Le(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Mf = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r
      } = t;
      a = Le(a);
      const s = new Map(i), c = [a];
      for (; c.length; ) {
        const v = c.shift();
        i.set(Le(v), l ? "on" : "off"), o.has(v) && c.push(...o.get(v));
      }
      let d = Le(r.get(a));
      for (; d; ) {
        const v = o.get(d), f = v.every((h) => i.get(Le(h)) === "on"), g = v.every((h) => !i.has(Le(h)) || i.get(Le(h)) === "off");
        i.set(d, f ? "on" : g ? "off" : "indeterminate"), d = Le(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((f, g) => {
        let [h, y] = g;
        return y === "on" && f.push(h), f;
      }, []).length === 0 ? s : i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: i,
          children: a,
          parents: l
        });
      return i;
    },
    out: (t, a) => {
      const l = [];
      for (const [i, o] of t.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return n;
}, la = Symbol.for("vuetify:nested"), ju = {
  id: K(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: j(/* @__PURE__ */ new Map()),
    children: j(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: j(!1),
    selectable: j(!1),
    opened: j(/* @__PURE__ */ new Set()),
    activated: j(/* @__PURE__ */ new Set()),
    selected: j(/* @__PURE__ */ new Map()),
    selectedValues: j([]),
    getPath: () => []
  }
}, Ef = p({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Ff = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), a = j(/* @__PURE__ */ new Map()), l = ie(e, "opened", e.opened, (h) => new Set(h), (h) => [...h.values()]), i = b(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return _f(e.mandatory);
      case "single-leaf":
        return Af(e.mandatory);
      case "independent":
        return Li(e.mandatory);
      case "single-independent":
      default:
        return Hu(e.mandatory);
    }
  }), o = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return pf(e.mandatory);
      case "leaf":
        return Df(e.mandatory);
      case "independent":
        return Oi(e.mandatory);
      case "single-independent":
        return Wu(e.mandatory);
      case "classic":
      default:
        return Mf(e.mandatory);
    }
  }), r = b(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Bf;
      case "single":
        return Tf;
      case "multiple":
      default:
        return zu;
    }
  }), s = ie(e, "activated", e.activated, (h) => i.value.in(h, t.value, a.value), (h) => i.value.out(h, t.value, a.value)), c = ie(e, "selected", e.selected, (h) => o.value.in(h, t.value, a.value), (h) => o.value.out(h, t.value, a.value));
  Je(() => {
    n = !0;
  });
  function d(h) {
    const y = [];
    let m = h;
    for (; m != null; )
      y.unshift(m), m = a.value.get(m);
    return y;
  }
  const v = Ee("nested"), f = /* @__PURE__ */ new Set(), g = {
    id: K(),
    root: {
      opened: l,
      activatable: $(e, "activatable"),
      selectable: $(e, "selectable"),
      activated: s,
      selected: c,
      selectedValues: b(() => {
        const h = [];
        for (const [y, m] of c.value.entries())
          m === "on" && h.push(y);
        return h;
      }),
      register: (h, y, m) => {
        if (f.has(h)) {
          const S = d(h).map(String).join(" -> "), k = d(y).concat(h).map(String).join(" -> ");
          Fn(`Multiple nodes with the same ID
	${S}
	${k}`);
          return;
        } else
          f.add(h);
        y && h !== y && a.value.set(h, y), m && t.value.set(h, []), y != null && t.value.set(y, [...t.value.get(y) || [], h]);
      },
      unregister: (h) => {
        if (n) return;
        f.delete(h), t.value.delete(h);
        const y = a.value.get(h);
        if (y) {
          const m = t.value.get(y) ?? [];
          t.value.set(y, m.filter((S) => S !== h));
        }
        a.value.delete(h);
      },
      open: (h, y, m) => {
        v.emit("click:open", {
          id: h,
          value: y,
          path: d(h),
          event: m
        });
        const S = r.value.open({
          id: h,
          value: y,
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        S && (l.value = S);
      },
      openOnSelect: (h, y, m) => {
        const S = r.value.select({
          id: h,
          value: y,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        S && (l.value = S);
      },
      select: (h, y, m) => {
        v.emit("click:select", {
          id: h,
          value: y,
          path: d(h),
          event: m
        });
        const S = o.value.select({
          id: h,
          value: y,
          selected: new Map(c.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        S && (c.value = S), g.root.openOnSelect(h, y, m);
      },
      activate: (h, y, m) => {
        if (!e.activatable)
          return g.root.select(h, !0, m);
        v.emit("click:activate", {
          id: h,
          value: y,
          path: d(h),
          event: m
        });
        const S = i.value.activate({
          id: h,
          value: y,
          activated: new Set(s.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        if (S.size !== s.value.size)
          s.value = S;
        else {
          for (const k of S)
            if (!s.value.has(k)) {
              s.value = S;
              return;
            }
          for (const k of s.value)
            if (!S.has(k)) {
              s.value = S;
              return;
            }
        }
      },
      children: t,
      parents: a,
      getPath: d
    }
  };
  return Be(la, g), g.root;
}, Yu = (e, n) => {
  const t = be(la, ju), a = Symbol(Ke()), l = b(() => e.value !== void 0 ? e.value : a), i = {
    ...t,
    id: l,
    open: (o, r) => t.root.open(l.value, o, r),
    openOnSelect: (o, r) => t.root.openOnSelect(l.value, o, r),
    isOpen: b(() => t.root.opened.value.has(l.value)),
    parent: b(() => t.root.parents.value.get(l.value)),
    activate: (o, r) => t.root.activate(l.value, o, r),
    isActivated: b(() => t.root.activated.value.has(Le(l.value))),
    select: (o, r) => t.root.select(l.value, o, r),
    isSelected: b(() => t.root.selected.value.get(Le(l.value)) === "on"),
    isIndeterminate: b(() => t.root.selected.value.get(Le(l.value)) === "indeterminate"),
    isLeaf: b(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator
  };
  return ra(() => {
    !t.isGroupActivator && t.root.register(l.value, t.id.value, n);
  }), Je(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
  }), n && Be(la, i), i;
}, $f = () => {
  const e = be(la, ju);
  Be(la, {
    ...e,
    isGroupActivator: !0
  });
}, Lf = mt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return $f(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), Of = p({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: oe,
    default: "$collapse"
  },
  expandIcon: {
    type: oe,
    default: "$expand"
  },
  prependIcon: oe,
  appendIcon: oe,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...ne(),
  ...fe()
}, "VListGroup"), Gl = R()({
  name: "VListGroup",
  props: Of(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Yu($(e, "value"), !0), o = b(() => `v-list-group--id-${String(i.value)}`), r = Nu(), {
      isBooted: s
    } = bn();
    function c(g) {
      g.stopPropagation(), l(!a.value, g);
    }
    const d = b(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), v = b(() => a.value ? e.collapseIcon : e.expandIcon), f = b(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && v.value,
        appendIcon: e.appendIcon || !e.subgroup && v.value,
        title: e.title,
        value: e.value
      }
    }));
    return z(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && u(me, {
        defaults: f.value
      }, {
        default: () => [u(Lf, null, {
          default: () => [t.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), u(tt, {
        transition: {
          component: Ua
        },
        disabled: !s.value
      }, {
        default: () => {
          var g;
          return [Ae(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(g = t.default) == null ? void 0 : g.call(t)]), [[Vt, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), Rf = p({
  opacity: [Number, String],
  ...ne(),
  ...fe()
}, "VListItemSubtitle"), Gu = R()({
  name: "VListItemSubtitle",
  props: Rf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Uu = At("v-list-item-title"), Nf = p({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: oe,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: oe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Ge(),
  onClickOnce: Ge(),
  ...st(),
  ...ne(),
  ...Ye(),
  ...Re(),
  ...je(),
  ...pe(),
  ...fa(),
  ...fe(),
  ...ye(),
  ...St({
    variant: "text"
  })
}, "VListItem"), $t = R()({
  name: "VListItem",
  directives: {
    Ripple: Bt
  },
  props: Nf(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = va(e, t), o = b(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: c,
      isOpen: d,
      isSelected: v,
      isIndeterminate: f,
      isGroupActivator: g,
      root: h,
      parent: y,
      openOnSelect: m,
      id: S
    } = Yu(o, !1), k = Nu(), V = b(() => {
      var Q;
      return e.active !== !1 && (e.active || ((Q = i.isActive) == null ? void 0 : Q.value) || (h.activatable.value ? s.value : v.value));
    }), A = b(() => e.link !== !1 && i.isLink.value), I = b(() => !!k && (h.selectable.value || h.activatable.value || e.value != null)), _ = b(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || I.value)), B = b(() => e.rounded || e.nav), w = b(() => e.color ?? e.activeColor), P = b(() => ({
      color: V.value ? w.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    Z(() => {
      var Q;
      return (Q = i.isActive) == null ? void 0 : Q.value;
    }, (Q) => {
      Q && T();
    }), ra(() => {
      var Q;
      (Q = i.isActive) != null && Q.value && T();
    });
    function T() {
      y.value != null && h.open(y.value, !0), m(!0);
    }
    const {
      themeClasses: C
    } = we(e), {
      borderClasses: x
    } = ht(e), {
      colorClasses: D,
      colorStyles: M,
      variantClasses: L
    } = Sn(P), {
      densityClasses: W
    } = it(e), {
      dimensionStyles: J
    } = Ne(e), {
      elevationClasses: N
    } = qe(e), {
      roundedClasses: O
    } = Fe(B), E = b(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), F = b(() => ({
      isActive: V.value,
      select: c,
      isOpen: d.value,
      isSelected: v.value,
      isIndeterminate: f.value
    }));
    function Y(Q) {
      var re;
      l("click", Q), _.value && ((re = i.navigate) == null || re.call(i, Q), !g && (h.activatable.value ? r(!s.value, Q) : (h.selectable.value || e.value != null) && c(!v.value, Q)));
    }
    function X(Q) {
      (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), Q.target.dispatchEvent(new MouseEvent("click", Q)));
    }
    return z(() => {
      const Q = A.value ? "a" : e.tag, re = a.title || e.title != null, G = a.subtitle || e.subtitle != null, te = !!(e.appendAvatar || e.appendIcon), le = !!(te || a.append), Ce = !!(e.prependAvatar || e.prependIcon), ge = !!(Ce || a.prepend);
      return k == null || k.updateHasPrepend(ge), e.activeColor && Ad("active-color", ["color", "base-color"]), Ae(u(Q, H({
        class: ["v-list-item", {
          "v-list-item--active": V.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": _.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ge && (k == null ? void 0 : k.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && V.value
        }, C.value, x.value, D.value, W.value, N.value, E.value, O.value, L.value, e.class],
        style: [M.value, J.value, e.style],
        tabindex: _.value ? k ? -2 : 0 : void 0,
        "aria-selected": I.value ? h.activatable.value ? s.value : h.selectable.value ? v.value : V.value : void 0,
        onClick: Y,
        onKeydown: _.value && !A.value && X
      }, i.linkProps), {
        default: () => {
          var q;
          return [Gt(_.value || V.value, "v-list-item"), ge && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !Ce,
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
              var ue;
              return [(ue = a.prepend) == null ? void 0 : ue.call(a, F.value)];
            }
          }) : u(se, null, [e.prependAvatar && u(bt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(ke, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [re && u(Uu, {
            key: "title"
          }, {
            default: () => {
              var ue;
              return [((ue = a.title) == null ? void 0 : ue.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), G && u(Gu, {
            key: "subtitle"
          }, {
            default: () => {
              var ue;
              return [((ue = a.subtitle) == null ? void 0 : ue.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (q = a.default) == null ? void 0 : q.call(a, F.value)]), le && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? u(me, {
            key: "append-defaults",
            disabled: !te,
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
              var ue;
              return [(ue = a.append) == null ? void 0 : ue.call(a, F.value)];
            }
          }) : u(se, null, [e.appendIcon && u(ke, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(bt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[ft("ripple"), _.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: g,
      isSelected: v,
      list: k,
      select: c,
      root: h,
      id: S,
      link: i
    };
  }
}), Hf = p({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ne(),
  ...fe()
}, "VListSubheader"), Ku = R()({
  name: "VListSubheader",
  props: Hf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ue($(e, "color"));
    return z(() => {
      const i = !!(t.default || e.title);
      return u(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var o;
          return [i && u("div", {
            class: "v-list-subheader__text"
          }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), zf = p({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ne(),
  ...ye()
}, "VDivider"), ma = R()({
  name: "VDivider",
  props: zf(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = we(e), {
      textColorClasses: i,
      textColorStyles: o
    } = Ue($(e, "color")), r = b(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = ee(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ee(e.thickness)), s;
    });
    return z(() => {
      const s = u("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class],
        style: [r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? u("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [s, u("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), Wf = p({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), qu = R()({
  name: "VListChildren",
  props: Wf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ru(), () => {
      var a, l;
      return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var f, g;
        let {
          children: o,
          props: r,
          type: s,
          raw: c
        } = i;
        if (s === "divider")
          return ((f = t.divider) == null ? void 0 : f.call(t, {
            props: r
          })) ?? u(ma, r, null);
        if (s === "subheader")
          return ((g = t.subheader) == null ? void 0 : g.call(t, {
            props: r
          })) ?? u(Ku, r, null);
        const d = {
          subtitle: t.subtitle ? (h) => {
            var y;
            return (y = t.subtitle) == null ? void 0 : y.call(t, {
              ...h,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (h) => {
            var y;
            return (y = t.prepend) == null ? void 0 : y.call(t, {
              ...h,
              item: c
            });
          } : void 0,
          append: t.append ? (h) => {
            var y;
            return (y = t.append) == null ? void 0 : y.call(t, {
              ...h,
              item: c
            });
          } : void 0,
          title: t.title ? (h) => {
            var y;
            return (y = t.title) == null ? void 0 : y.call(t, {
              ...h,
              item: c
            });
          } : void 0
        }, v = Gl.filterProps(r);
        return o ? u(Gl, H({
          value: r == null ? void 0 : r.value
        }, v), {
          activator: (h) => {
            let {
              props: y
            } = h;
            const m = {
              ...r,
              ...y,
              value: e.returnObject ? c : r.value
            };
            return t.header ? t.header({
              props: m
            }) : u($t, m, d);
          },
          default: () => u(qu, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: r
        }) : u($t, H(r, {
          value: e.returnObject ? c : r.value
        }), d);
      }));
    };
  }
}), Xu = p({
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
function Ht(e, n) {
  const t = ze(n, e.itemTitle, n), a = ze(n, e.itemValue, t), l = ze(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? Te(n, ["children"]) : n : void 0 : ze(n, e.itemProps), o = {
    title: t,
    value: a,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(l) ? Zu(e, l) : void 0,
    raw: n
  };
}
function Zu(e, n) {
  const t = Ot(e, ["itemTitle", "itemValue", "itemChildren", "itemProps", "returnObject", "valueComparator"]), a = [];
  for (const l of n)
    a.push(Ht(t, l));
  return a;
}
function Ri(e) {
  const n = b(() => Zu(e, e.items)), t = b(() => n.value.some((r) => r.value === null)), a = K(/* @__PURE__ */ new Map()), l = K([]);
  $e(() => {
    const r = n.value, s = /* @__PURE__ */ new Map(), c = [];
    for (let d = 0; d < r.length; d++) {
      const v = r[d];
      if (Fr(v.value) || v.value === null) {
        let f = s.get(v.value);
        f || (f = [], s.set(v.value, f)), f.push(v);
      } else
        c.push(v);
    }
    a.value = s, l.value = c;
  });
  function i(r) {
    const s = a.value, c = n.value, d = l.value, v = t.value, f = e.returnObject, g = !!e.valueComparator, h = e.valueComparator || nt, y = Ot(e, ["itemTitle", "itemValue", "itemChildren", "itemProps", "returnObject", "valueComparator"]), m = [];
    e: for (const S of r) {
      if (!v && S === null) continue;
      if (f && typeof S == "string") {
        m.push(Ht(y, S));
        continue;
      }
      const k = s.get(S);
      if (g || !k) {
        for (const V of g ? c : d)
          if (h(S, V.value)) {
            m.push(V);
            continue e;
          }
        m.push(Ht(y, S));
        continue;
      }
      m.push(...k);
    }
    return m;
  }
  function o(r) {
    return e.returnObject ? r.map((s) => {
      let {
        raw: c
      } = s;
      return c;
    }) : r.map((s) => {
      let {
        value: c
      } = s;
      return c;
    });
  }
  return {
    items: n,
    transformIn: i,
    transformOut: o
  };
}
function jf(e, n) {
  const t = ze(n, e.itemType, "item"), a = Fr(n) ? n : ze(n, e.itemTitle), l = ze(n, e.itemValue, void 0), i = ze(n, e.itemChildren), o = e.itemProps === !0 ? Te(n, ["children"]) : ze(n, e.itemProps), r = {
    title: a,
    value: l,
    ...o
  };
  return {
    type: t,
    title: r.title,
    value: r.value,
    props: r,
    children: t === "item" && i ? Ju(e, i) : void 0,
    raw: n
  };
}
function Ju(e, n) {
  const t = [];
  for (const a of n)
    t.push(jf(e, a));
  return t;
}
function Yf(e) {
  return {
    items: b(() => Ju(e, e.items))
  };
}
const Gf = p({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: oe,
  collapseIcon: oe,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Ge(),
  "onClick:select": Ge(),
  "onUpdate:opened": Ge(),
  ...Ef({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...st(),
  ...ne(),
  ...Ye(),
  ...Re(),
  ...je(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Xu(),
  ...pe(),
  ...fe(),
  ...ye(),
  ...St({
    variant: "text"
  })
}, "VList"), nl = R()({
  name: "VList",
  props: Gf(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = Yf(e), {
      themeClasses: l
    } = we(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve($(e, "bgColor")), {
      borderClasses: r
    } = ht(e), {
      densityClasses: s
    } = it(e), {
      dimensionStyles: c
    } = Ne(e), {
      elevationClasses: d
    } = qe(e), {
      roundedClasses: v
    } = Fe(e), {
      children: f,
      open: g,
      parents: h,
      select: y,
      getPath: m
    } = Ff(e), S = b(() => e.lines ? `v-list--${e.lines}-line` : void 0), k = $(e, "activeColor"), V = $(e, "baseColor"), A = $(e, "color");
    Ru(), Me({
      VListGroup: {
        activeColor: k,
        baseColor: V,
        color: A,
        expandIcon: $(e, "expandIcon"),
        collapseIcon: $(e, "collapseIcon")
      },
      VListItem: {
        activeClass: $(e, "activeClass"),
        activeColor: k,
        baseColor: V,
        color: A,
        density: $(e, "density"),
        disabled: $(e, "disabled"),
        lines: $(e, "lines"),
        nav: $(e, "nav"),
        slim: $(e, "slim"),
        variant: $(e, "variant")
      }
    });
    const I = K(!1), _ = j();
    function B(D) {
      I.value = !0;
    }
    function w(D) {
      I.value = !1;
    }
    function P(D) {
      var M;
      !I.value && !(D.relatedTarget && ((M = _.value) != null && M.contains(D.relatedTarget))) && x();
    }
    function T(D) {
      const M = D.target;
      if (!(!_.value || ["INPUT", "TEXTAREA"].includes(M.tagName))) {
        if (D.key === "ArrowDown")
          x("next");
        else if (D.key === "ArrowUp")
          x("prev");
        else if (D.key === "Home")
          x("first");
        else if (D.key === "End")
          x("last");
        else
          return;
        D.preventDefault();
      }
    }
    function C(D) {
      I.value = !0;
    }
    function x(D) {
      if (_.value)
        return nn(_.value, D);
    }
    return z(() => u(e.tag, {
      ref: _,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, s.value, d.value, S.value, v.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: B,
      onFocusout: w,
      onFocus: P,
      onKeydown: T,
      onMousedown: C
    }, {
      default: () => [u(qu, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: g,
      select: y,
      focus: x,
      children: f,
      parents: h,
      getPath: m
    };
  }
}), Uf = At("v-list-img"), Kf = p({
  start: Boolean,
  end: Boolean,
  ...ne(),
  ...fe()
}, "VListItemAction"), qf = R()({
  name: "VListItemAction",
  props: Kf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
}), Xf = p({
  start: Boolean,
  end: Boolean,
  ...ne(),
  ...fe()
}, "VListItemMedia"), Zf = R()({
  name: "VListItemMedia",
  props: Xf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
});
function Il(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function Jf(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Qo(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return Il({
      x: l,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return Il({
      x: l,
      y: i
    }, n);
  }
  return Il({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const Qu = {
  static: tm,
  // specific viewport position, usually centered
  connected: am
  // connected to a certain element
}, Qf = p({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Qu
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
function em(e, n) {
  const t = j({}), a = j();
  Se && ot(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    Z(() => e.locationStrategy, i), lt(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : a.value = (r = Qu[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function tm() {
}
function nm(e, n) {
  const t = ki(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function am(e, n, t) {
  (Array.isArray(e.target.value) || Xd(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = Si(() => {
    const h = Ml(n.location, e.isRtl.value), y = n.origin === "overlap" ? h : n.origin === "auto" ? xl(h) : Ml(n.origin, e.isRtl.value);
    return h.side === y.side && h.align === wl(y).align ? {
      preferredAnchor: Po(h),
      preferredOrigin: Po(y)
    } : {
      preferredAnchor: h,
      preferredOrigin: y
    };
  }), [o, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => b(() => {
    const y = parseFloat(n[h]);
    return isNaN(y) ? 1 / 0 : y;
  })), d = b(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const h = n.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let v = !1;
  const f = new ResizeObserver(() => {
    v && g();
  });
  Z([e.target, e.contentEl], (h, y) => {
    let [m, S] = h, [k, V] = y;
    k && !Array.isArray(k) && f.unobserve(k), m && !Array.isArray(m) && f.observe(m), V && f.unobserve(V), S && f.observe(S);
  }, {
    immediate: !0
  }), lt(() => {
    f.disconnect();
  });
  function g() {
    if (v = !1, requestAnimationFrame(() => v = !0), !e.target.value || !e.contentEl.value) return;
    const h = Lr(e.target.value), y = nm(e.contentEl.value, e.isRtl.value), m = Fa(e.contentEl.value), S = 12;
    m.length || (m.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const k = m.reduce((C, x) => {
      const D = x.getBoundingClientRect(), M = new an({
        x: x === document.documentElement ? 0 : D.x,
        y: x === document.documentElement ? 0 : D.y,
        width: x.clientWidth,
        height: x.clientHeight
      });
      return C ? new an({
        x: Math.max(C.left, M.left),
        y: Math.max(C.top, M.top),
        width: Math.min(C.right, M.right) - Math.max(C.left, M.left),
        height: Math.min(C.bottom, M.bottom) - Math.max(C.top, M.top)
      }) : M;
    }, void 0);
    k.x += S, k.y += S, k.width -= S * 2, k.height -= S * 2;
    let V = {
      anchor: l.value,
      origin: i.value
    };
    function A(C) {
      const x = new an(y), D = Qo(C.anchor, h), M = Qo(C.origin, x);
      let {
        x: L,
        y: W
      } = Jf(D, M);
      switch (C.anchor.side) {
        case "top":
          W -= d.value[0];
          break;
        case "bottom":
          W += d.value[0];
          break;
        case "left":
          L -= d.value[0];
          break;
        case "right":
          L += d.value[0];
          break;
      }
      switch (C.anchor.align) {
        case "top":
          W -= d.value[1];
          break;
        case "bottom":
          W += d.value[1];
          break;
        case "left":
          L -= d.value[1];
          break;
        case "right":
          L += d.value[1];
          break;
      }
      return x.x += L, x.y += W, x.width = Math.min(x.width, s.value), x.height = Math.min(x.height, c.value), {
        overflows: _o(x, k),
        x: L,
        y: W
      };
    }
    let I = 0, _ = 0;
    const B = {
      x: 0,
      y: 0
    }, w = {
      x: !1,
      y: !1
    };
    let P = -1;
    for (; ; ) {
      if (P++ > 10) {
        Fn("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: C,
        y: x,
        overflows: D
      } = A(V);
      I += C, _ += x, y.x += C, y.y += x;
      {
        const M = Io(V.anchor), L = D.x.before || D.x.after, W = D.y.before || D.y.after;
        let J = !1;
        if (["x", "y"].forEach((N) => {
          if (N === "x" && L && !w.x || N === "y" && W && !w.y) {
            const O = {
              anchor: {
                ...V.anchor
              },
              origin: {
                ...V.origin
              }
            }, E = N === "x" ? M === "y" ? wl : xl : M === "y" ? xl : wl;
            O.anchor = E(O.anchor), O.origin = E(O.origin);
            const {
              overflows: F
            } = A(O);
            (F[N].before <= D[N].before && F[N].after <= D[N].after || F[N].before + F[N].after < (D[N].before + D[N].after) / 2) && (V = O, J = w[N] = !0);
          }
        }), J) continue;
      }
      D.x.before && (I += D.x.before, y.x += D.x.before), D.x.after && (I -= D.x.after, y.x -= D.x.after), D.y.before && (_ += D.y.before, y.y += D.y.before), D.y.after && (_ -= D.y.after, y.y -= D.y.after);
      {
        const M = _o(y, k);
        B.x = k.width - M.x.before - M.x.after, B.y = k.height - M.y.before - M.y.after, I += M.x.before, y.x += M.x.before, _ += M.y.before, y.y += M.y.before;
      }
      break;
    }
    const T = Io(V.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${V.anchor.side} ${V.anchor.align}`,
      transformOrigin: `${V.origin.side} ${V.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: ee(_l(_)),
      left: e.isRtl.value ? void 0 : ee(_l(I)),
      right: e.isRtl.value ? ee(_l(-I)) : void 0,
      minWidth: ee(T === "y" ? Math.min(o.value, h.width) : o.value),
      maxWidth: ee(er(Oe(B.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: ee(er(Oe(B.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: B,
      contentBox: y
    };
  }
  return Z(() => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => g()), xe(() => {
    const h = g();
    if (!h) return;
    const {
      available: y,
      contentBox: m
    } = h;
    m.height > y.y && requestAnimationFrame(() => {
      g(), requestAnimationFrame(() => {
        g();
      });
    });
  }), {
    updateLocation: g
  };
}
function _l(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function er(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ul = !0;
const La = [];
function lm(e) {
  !Ul || La.length ? (La.push(e), Kl()) : (Ul = !1, e(), Kl());
}
let tr = -1;
function Kl() {
  cancelAnimationFrame(tr), tr = requestAnimationFrame(() => {
    const e = La.shift();
    e && e(), La.length ? Kl() : Ul = !0;
  });
}
const Da = {
  none: null,
  close: rm,
  block: um,
  reposition: sm
}, im = p({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Da
  }
}, "VOverlay-scroll-strategies");
function om(e, n) {
  if (!Se) return;
  let t;
  $e(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = gi(), await new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = Da[e.scrollStrategy]) == null || a.call(Da, n, e, t);
    }));
  }), lt(() => {
    t == null || t.stop();
  });
}
function rm(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  es(e.targetEl.value ?? e.contentEl.value, n);
}
function um(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...Fa(e.targetEl.value, n.contained ? t : void 0), ...Fa(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Pi(r) && r)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ee(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ee(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ee(l)), r.classList.add("v-overlay-scroll-blocked");
  }), lt(() => {
    a.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), v = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = v;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function sm(e, n, t) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    lm(() => {
      var d, v;
      const s = performance.now();
      (v = (d = e.updateLocation).value) == null || v.call(d, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      es(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), lt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function es(e, n) {
  const t = [document, ...Fa(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), lt(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const ql = Symbol.for("vuetify:v-menu"), Ni = p({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Hi(e, n) {
  let t = () => {
  };
  function a(o) {
    t == null || t();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = md(r, () => {
        n == null || n(o), s(o);
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
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const cm = p({
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
  ...Ni()
}, "VOverlay-activator");
function dm(e, n) {
  let {
    isActive: t,
    isTop: a,
    contentEl: l
  } = n;
  const i = Ee("useActivator"), o = j();
  let r = !1, s = !1, c = !0;
  const d = b(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = b(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !d.value), {
    runOpenDelay: f,
    runCloseDelay: g
  } = Hi(e, (w) => {
    w === (e.openOnHover && r || d.value && s) && !(e.openOnHover && t.value && !a.value) && (t.value !== w && (c = !0), t.value = w);
  }), h = j(), y = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, t.value || (h.value = [w.clientX, w.clientY]), t.value = !t.value;
    },
    onMouseenter: (w) => {
      var P;
      (P = w.sourceCapabilities) != null && P.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, f());
    },
    onMouseleave: (w) => {
      r = !1, g();
    },
    onFocus: (w) => {
      Mn(w.target, ":focus-visible") !== !1 && (s = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, f());
    },
    onBlur: (w) => {
      s = !1, w.stopPropagation(), g();
    }
  }, m = b(() => {
    const w = {};
    return v.value && (w.onClick = y.onClick), e.openOnHover && (w.onMouseenter = y.onMouseenter, w.onMouseleave = y.onMouseleave), d.value && (w.onFocus = y.onFocus, w.onBlur = y.onBlur), w;
  }), S = b(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, f();
    }, w.onMouseleave = () => {
      r = !1, g();
    }), d.value && (w.onFocusin = () => {
      s = !0, f();
    }, w.onFocusout = () => {
      s = !1, g();
    }), e.closeOnContentClick) {
      const P = be(ql, null);
      w.onClick = () => {
        t.value = !1, P == null || P.closeParents();
      };
    }
    return w;
  }), k = b(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      c && (r = !0, c = !1, f());
    }, w.onMouseleave = () => {
      r = !1, g();
    }), w;
  });
  Z(a, (w) => {
    var P;
    w && (e.openOnHover && !r && (!d.value || !s) || d.value && !s && (!e.openOnHover || !r)) && !((P = l.value) != null && P.contains(document.activeElement)) && (t.value = !1);
  }), Z(t, (w) => {
    w || setTimeout(() => {
      h.value = void 0;
    });
  }, {
    flush: "post"
  });
  const V = Ma();
  $e(() => {
    V.value && xe(() => {
      o.value = V.el;
    });
  });
  const A = Ma(), I = b(() => e.target === "cursor" && h.value ? h.value : A.value ? A.el : ts(e.target, i) || o.value), _ = b(() => Array.isArray(I.value) ? void 0 : I.value);
  let B;
  return Z(() => !!e.activator, (w) => {
    w && Se ? (B = gi(), B.run(() => {
      vm(e, i, {
        activatorEl: o,
        activatorEvents: m
      });
    })) : B && B.stop();
  }, {
    flush: "post",
    immediate: !0
  }), lt(() => {
    B == null || B.stop();
  }), {
    activatorEl: o,
    activatorRef: V,
    target: I,
    targetEl: _,
    targetRef: A,
    activatorEvents: m,
    contentEvents: S,
    scrimEvents: k
  };
}
function vm(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  Z(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const d = r(c);
      d && o(d);
    }
    s && xe(() => i());
  }, {
    immediate: !0
  }), Z(() => e.activatorProps, () => {
    i();
  }), lt(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && yd(s, H(l.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && bd(s, H(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = ts(s, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function ts(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let i = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function ns() {
  if (!Se) return K(!1);
  const {
    ssr: e
  } = kt();
  if (e) {
    const n = K(!1);
    return at(() => {
      n.value = !0;
    }), n;
  } else
    return K(!0);
}
const zi = p({
  eager: Boolean
}, "lazy");
function Wi(e, n) {
  const t = K(!1), a = b(() => t.value || e.eager || n.value);
  Z(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function Pn() {
  const n = Ee("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const nr = Symbol.for("vuetify:stack"), Un = ut([]);
function fm(e, n, t) {
  const a = Ee("useStack"), l = !t, i = be(nr, void 0), o = ut({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Be(nr, o);
  const r = K(+n.value);
  ot(e, () => {
    var v;
    const d = (v = Un.at(-1)) == null ? void 0 : v[1];
    r.value = d ? d + 10 : +n.value, l && Un.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), lt(() => {
      if (l) {
        const f = Le(Un).findIndex((g) => g[0] === a.uid);
        Un.splice(f, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = K(!0);
  l && $e(() => {
    var v;
    const d = ((v = Un.at(-1)) == null ? void 0 : v[0]) === a.uid;
    setTimeout(() => s.value = d);
  });
  const c = b(() => !o.activeChildren.size);
  return {
    globalTop: mi(s),
    localTop: c,
    stackStyles: b(() => ({
      zIndex: r.value
    }))
  };
}
function mm(e) {
  return {
    teleportTarget: b(() => {
      const t = e();
      if (t === !0 || !Se) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        Ha(`Unable to locate target ${t}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function gm() {
  return !0;
}
function as(e, n, t) {
  if (!e || ls(e, t) === !1) return !1;
  const a = qr(n);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ls(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || gm)(e);
}
function hm(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  e.shadowTarget = e.target, n._clickOutside.lastMousedownWasOutside && as(e, n, t) && setTimeout(() => {
    ls(e, t) && a && a(e);
  }, 0);
}
function ar(e, n) {
  const t = qr(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const is = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => hm(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = as(l, e, n);
    };
    ar(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  beforeUnmount(e, n) {
    e._clickOutside && (ar(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function ym(e) {
  const {
    modelValue: n,
    color: t,
    ...a
  } = e;
  return u(zt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", H({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const ga = p({
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
  ...cm(),
  ...ne(),
  ...Re(),
  ...zi(),
  ...Qf(),
  ...im(),
  ...ye(),
  ...Pt()
}, "VOverlay"), It = R()({
  name: "VOverlay",
  directives: {
    ClickOutside: is
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...ga()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const i = Ee("VOverlay"), o = j(), r = j(), s = j(), c = ie(e, "modelValue"), d = b({
      get: () => c.value,
      set: (G) => {
        G && e.disabled || (c.value = G);
      }
    }), {
      themeClasses: v
    } = we(e), {
      rtlClasses: f,
      isRtl: g
    } = We(), {
      hasContent: h,
      onAfterLeave: y
    } = Wi(e, d), m = Ve(b(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: S,
      localTop: k,
      stackStyles: V
    } = fm(d, $(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: A,
      activatorRef: I,
      target: _,
      targetEl: B,
      targetRef: w,
      activatorEvents: P,
      contentEvents: T,
      scrimEvents: C
    } = dm(e, {
      isActive: d,
      isTop: k,
      contentEl: s
    }), {
      teleportTarget: x
    } = mm(() => {
      var le, Ce, ge;
      const G = e.attach || e.contained;
      if (G) return G;
      const te = ((le = A == null ? void 0 : A.value) == null ? void 0 : le.getRootNode()) || ((ge = (Ce = i.proxy) == null ? void 0 : Ce.$el) == null ? void 0 : ge.getRootNode());
      return te instanceof ShadowRoot ? te : !1;
    }), {
      dimensionStyles: D
    } = Ne(e), M = ns(), {
      scopeId: L
    } = Pn();
    Z(() => e.disabled, (G) => {
      G && (d.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: J
    } = em(e, {
      isRtl: g,
      contentEl: s,
      target: _,
      isActive: d
    });
    om(e, {
      root: o,
      contentEl: s,
      targetEl: B,
      isActive: d,
      updateLocation: J
    });
    function N(G) {
      l("click:outside", G), e.persistent ? X() : d.value = !1;
    }
    function O(G) {
      return d.value && S.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || G.target === r.value || G instanceof MouseEvent && G.shadowTarget === r.value);
    }
    Se && Z(d, (G) => {
      G ? window.addEventListener("keydown", E) : window.removeEventListener("keydown", E);
    }, {
      immediate: !0
    }), Je(() => {
      Se && window.removeEventListener("keydown", E);
    });
    function E(G) {
      var te, le;
      G.key === "Escape" && S.value && (e.persistent ? X() : (d.value = !1, (te = s.value) != null && te.contains(document.activeElement) && ((le = A.value) == null || le.focus())));
    }
    const F = gu();
    ot(() => e.closeOnBack, () => {
      Gv(F, (G) => {
        S.value && d.value ? (G(!1), e.persistent ? X() : d.value = !1) : G();
      });
    });
    const Y = j();
    Z(() => d.value && (e.absolute || e.contained) && x.value == null, (G) => {
      if (G) {
        const te = Vi(o.value);
        te && te !== document.scrollingElement && (Y.value = te.scrollTop);
      }
    });
    function X() {
      e.noClickAnimation || s.value && Qt(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Xn
      });
    }
    function Q() {
      l("afterEnter");
    }
    function re() {
      y(), l("afterLeave");
    }
    return z(() => {
      var G;
      return u(se, null, [(G = t.activator) == null ? void 0 : G.call(t, {
        isActive: d.value,
        targetRef: w,
        props: H({
          ref: I
        }, P.value, e.activatorProps)
      }), M.value && h.value && u(Kc, {
        disabled: !x.value,
        to: x.value
      }, {
        default: () => [u("div", H({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": d.value,
            "v-overlay--contained": e.contained
          }, v.value, f.value, e.class],
          style: [V.value, {
            "--v-overlay-opacity": e.opacity,
            top: ee(Y.value)
          }, e.style],
          ref: o
        }, L, a), [u(ym, H({
          color: m,
          modelValue: d.value && !!e.scrim,
          ref: r
        }, C.value), null), u(tt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: _.value,
          onAfterEnter: Q,
          onAfterLeave: re
        }, {
          default: () => {
            var te;
            return [Ae(u("div", H({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [D.value, W.value]
            }, T.value, e.contentProps), [(te = t.default) == null ? void 0 : te.call(t, {
              isActive: d
            })]), [[Vt, d.value], [ft("click-outside"), {
              handler: N,
              closeConditional: O,
              include: () => [A.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: A,
      scrimEl: r,
      target: _,
      animateClick: X,
      contentEl: s,
      globalTop: S,
      localTop: k,
      updateLocation: J
    };
  }
}), Al = Symbol("Forwarded refs");
function Tl(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function yt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[Al] = t, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
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
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of t)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of t) {
          if (!s.value) continue;
          const c = Tl(s.value, i) ?? ("_" in s.value ? Tl((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const s of t) {
          const c = s.value && s.value[Al];
          if (!c) continue;
          const d = c.slice();
          for (; d.length; ) {
            const v = d.shift(), f = Tl(v.value, i);
            if (f) return f;
            const g = v.value && v.value[Al];
            g && d.push(...g);
          }
        }
      }
    }
  });
}
const os = p({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Te(ga({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Ga
    }
  }), ["absolute"])
}, "VMenu"), un = R()({
  name: "VMenu",
  props: os(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      scopeId: l
    } = Pn(), {
      isRtl: i
    } = We(), o = Ke(), r = b(() => e.id || `v-menu-${o}`), s = j(), c = be(ql, null), d = K(/* @__PURE__ */ new Set());
    Be(ql, {
      register() {
        d.value.add(o);
      },
      unregister() {
        d.value.delete(o);
      },
      closeParents(m) {
        setTimeout(() => {
          var S;
          !d.value.size && !e.persistent && (m == null || (S = s.value) != null && S.contentEl && !gd(m, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), Je(() => {
      c == null || c.unregister(), document.removeEventListener("focusin", v);
    }), Cr(() => a.value = !1);
    async function v(m) {
      var V, A, I;
      const S = m.relatedTarget, k = m.target;
      await xe(), a.value && S !== k && ((V = s.value) != null && V.contentEl) && // We're the topmost menu
      ((A = s.value) != null && A.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(k) && // It isn't inside the menu body
      !s.value.contentEl.contains(k) && ((I = qn(s.value.contentEl)[0]) == null || I.focus());
    }
    Z(a, (m) => {
      m ? (c == null || c.register(), Se && document.addEventListener("focusin", v, {
        once: !0
      })) : (c == null || c.unregister(), Se && document.removeEventListener("focusin", v));
    }, {
      immediate: !0
    });
    function f(m) {
      c == null || c.closeParents(m);
    }
    function g(m) {
      var S, k, V, A, I;
      if (!e.disabled)
        if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
          if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
          m.key === "Enter" && m.preventDefault(), Mr(qn((S = s.value) == null ? void 0 : S.contentEl, !1), m.shiftKey ? "prev" : "next", (B) => B.tabIndex >= 0) || (a.value = !1, (V = (k = s.value) == null ? void 0 : k.activatorEl) == null || V.focus());
        } else e.submenu && m.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (I = (A = s.value) == null ? void 0 : A.activatorEl) == null || I.focus());
    }
    function h(m) {
      var k;
      if (e.disabled) return;
      const S = (k = s.value) == null ? void 0 : k.contentEl;
      S && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), nn(S, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), nn(S, "prev")) : e.submenu && (m.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : m.key === (i.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), nn(S, "first"))) : (e.submenu ? m.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => h(m))));
    }
    const y = b(() => H({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": r.value,
      onKeydown: h
    }, e.activatorProps));
    return z(() => {
      const m = It.filterProps(e);
      return u(It, H({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (S) => a.value = S,
        absolute: !0,
        activatorProps: y.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": f,
        onKeydown: g
      }, l), {
        activator: t.activator,
        default: function() {
          for (var S = arguments.length, k = new Array(S), V = 0; V < S; V++)
            k[V] = arguments[V];
          return u(me, {
            root: "VMenu"
          }, {
            default: () => {
              var A;
              return [(A = t.default) == null ? void 0 : A.call(t, ...k)];
            }
          });
        }
      });
    }), yt({
      id: r,
      ΨopenChildren: d
    }, s);
  }
}), bm = p({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ne(),
  ...Pt({
    transition: {
      component: Ai
    }
  })
}, "VCounter"), al = R()({
  name: "VCounter",
  functional: !0,
  props: bm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return z(() => u(tt, {
      transition: e.transition
    }, {
      default: () => [Ae(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Vt, e.active]])]
    })), {};
  }
}), Sm = p({
  floating: Boolean,
  ...ne()
}, "VFieldLabel"), Kn = R()({
  name: "VFieldLabel",
  props: Sm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(zn, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), km = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ha = p({
  appendInnerIcon: oe,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: oe,
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
  prependInnerIcon: oe,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => km.includes(e)
  },
  "onClick:clear": Ge(),
  "onClick:appendInner": Ge(),
  "onClick:prependInner": Ge(),
  ...ne(),
  ...Za(),
  ...pe(),
  ...ye()
}, "VField"), Yn = R()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Wn(),
    ...ha()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: i
    } = we(e), {
      loaderClasses: o
    } = ca(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: d
    } = Dt(e), {
      InputIcon: v
    } = Au(e), {
      roundedClasses: f
    } = Fe(e), {
      rtlClasses: g
    } = We(), h = b(() => e.dirty || e.active), y = b(() => !!(e.label || l.label)), m = b(() => !e.singleLine && y.value), S = Ke(), k = b(() => e.id || `input-${S}`), V = b(() => `${k.value}-messages`), A = j(), I = j(), _ = j(), B = b(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: w,
      backgroundColorStyles: P
    } = Ve($(e, "bgColor")), {
      textColorClasses: T,
      textColorStyles: C
    } = Ue(b(() => e.error || e.disabled ? void 0 : h.value && s.value ? e.color : e.baseColor));
    Z(h, (M) => {
      if (m.value) {
        const L = A.value.$el, W = I.value.$el;
        requestAnimationFrame(() => {
          const J = ki(L), N = W.getBoundingClientRect(), O = N.x - J.x, E = N.y - J.y - (J.height / 2 - N.height / 2), F = N.width / 0.75, Y = Math.abs(F - J.width) > 1 ? {
            maxWidth: ee(F)
          } : void 0, X = getComputedStyle(L), Q = getComputedStyle(W), re = parseFloat(X.transitionDuration) * 1e3 || 150, G = parseFloat(Q.getPropertyValue("--v-field-label-scale")), te = Q.getPropertyValue("color");
          L.style.visibility = "visible", W.style.visibility = "hidden", Qt(L, {
            transform: `translate(${O}px, ${E}px) scale(${G})`,
            color: te,
            ...Y
          }, {
            duration: re,
            easing: Xn,
            direction: M ? "normal" : "reverse"
          }).finished.then(() => {
            L.style.removeProperty("visibility"), W.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const x = b(() => ({
      isActive: h,
      isFocused: s,
      controlRef: _,
      blur: d,
      focus: c
    }));
    function D(M) {
      M.target !== document.activeElement && M.preventDefault();
    }
    return z(() => {
      var O, E, F;
      const M = e.variant === "outlined", L = !!(l["prepend-inner"] || e.prependInnerIcon), W = !!(e.clearable || l.clear) && !e.disabled, J = !!(l["append-inner"] || e.appendInnerIcon || W), N = () => l.label ? l.label({
        ...x.value,
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label;
      return u("div", H({
        class: ["v-field", {
          "v-field--active": h.value,
          "v-field--appended": J,
          "v-field--center-affix": e.centerAffix ?? !B.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": L,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !N(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, w.value, r.value, o.value, f.value, g.value, e.class],
        style: [P.value, e.style],
        onClick: D
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(da, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), L && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(v, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (O = l["prepend-inner"]) == null ? void 0 : O.call(l, x.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && u(Kn, {
        key: "floating-label",
        ref: I,
        class: [T.value],
        floating: !0,
        for: k.value,
        style: C.value
      }, {
        default: () => [N()]
      }), y.value && u(Kn, {
        key: "label",
        ref: A,
        for: k.value
      }, {
        default: () => [N()]
      }), (E = l.default) == null ? void 0 : E.call(l, {
        ...x.value,
        props: {
          id: k.value,
          class: "v-field__input",
          "aria-describedby": V.value
        },
        focus: c,
        blur: d
      })]), W && u(Ti, {
        key: "clear"
      }, {
        default: () => [Ae(u("div", {
          class: "v-field__clearable",
          onMousedown: (Y) => {
            Y.preventDefault(), Y.stopPropagation();
          }
        }, [u(me, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...x.value,
            props: {
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          }) : u(v, {
            name: "clear",
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[Vt, e.dirty]])]
      }), J && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(F = l["append-inner"]) == null ? void 0 : F.call(l, x.value), e.appendInnerIcon && u(v, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", T.value],
        style: C.value
      }, [M && u(se, null, [u("div", {
        class: "v-field__outline__start"
      }, null), m.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Kn, {
        ref: I,
        floating: !0,
        for: k.value
      }, {
        default: () => [N()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), B.value && m.value && u(Kn, {
        ref: I,
        floating: !0,
        for: k.value
      }, {
        default: () => [N()]
      })])]);
    }), {
      controlRef: _
    };
  }
});
function ji(e) {
  const n = Object.keys(Yn.props).filter((t) => !Wa(t) && t !== "class" && t !== "style");
  return Ot(e, n);
}
const xm = ["color", "file", "time", "date", "datetime-local", "week", "month"], ya = p({
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
  ...Nt(),
  ...ha()
}, "VTextField"), Lt = R()({
  name: "VTextField",
  directives: {
    Intersect: sa
  },
  inheritAttrs: !1,
  props: ya(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = ie(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Dt(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = b(() => ["plain", "underlined"].includes(e.variant));
    function f(_, B) {
      var w, P;
      !e.autofocus || !_ || (P = (w = B[0].target) == null ? void 0 : w.focus) == null || P.call(w);
    }
    const g = j(), h = j(), y = j(), m = b(() => xm.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function S() {
      var _;
      y.value !== document.activeElement && ((_ = y.value) == null || _.focus()), o.value || r();
    }
    function k(_) {
      a("mousedown:control", _), _.target !== y.value && (S(), _.preventDefault());
    }
    function V(_) {
      S(), a("click:control", _);
    }
    function A(_) {
      _.stopPropagation(), S(), xe(() => {
        i.value = null, ja(e["onClick:clear"], _);
      });
    }
    function I(_) {
      var w;
      const B = _.target;
      if (i.value = B.value, (w = e.modelModifiers) != null && w.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const P = [B.selectionStart, B.selectionEnd];
        xe(() => {
          B.selectionStart = P[0], B.selectionEnd = P[1];
        });
      }
    }
    return z(() => {
      const _ = !!(l.counter || e.counter !== !1 && e.counter != null), B = !!(_ || l.details), [w, P] = Yt(t), {
        modelValue: T,
        ...C
      } = Ze.filterProps(e), x = ji(e);
      return u(Ze, H({
        ref: g,
        modelValue: i.value,
        "onUpdate:modelValue": (D) => i.value = D,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, w, C, {
        centerAffix: !v.value,
        focused: o.value
      }), {
        ...l,
        default: (D) => {
          let {
            id: M,
            isDisabled: L,
            isDirty: W,
            isReadonly: J,
            isValid: N
          } = D;
          return u(Yn, H({
            ref: h,
            onMousedown: k,
            onClick: V,
            "onClick:clear": A,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, x, {
            id: M.value,
            active: m.value || W.value,
            dirty: W.value || e.dirty,
            disabled: L.value,
            focused: o.value,
            error: N.value === !1
          }), {
            ...l,
            default: (O) => {
              let {
                props: {
                  class: E,
                  ...F
                }
              } = O;
              const Y = Ae(u("input", H({
                ref: y,
                value: i.value,
                onInput: I,
                autofocus: e.autofocus,
                readonly: J.value,
                disabled: L.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: s
              }, F, P), null), [[ft("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]);
              return u(se, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: E,
                "data-no-activator": ""
              }, [l.default(), Y]) : qc(Y, {
                class: E
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: B ? (D) => {
          var M;
          return u(se, null, [(M = l.details) == null ? void 0 : M.call(l, D), _ && u(se, null, [u("span", null, null), u(al, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), yt({}, g, h, y);
  }
}), wm = p({
  renderless: Boolean,
  ...ne()
}, "VVirtualScrollItem"), rs = R()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: wm(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      resizeRef: i,
      contentRect: o
    } = Ct(void 0, "border");
    Z(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), z(() => {
      var r, s;
      return e.renderless ? u(se, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : u("div", H({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), Cm = -1, Vm = 1, Bl = 100, us = p({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function ss(e, n) {
  const t = kt(), a = K(0);
  $e(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = K(0), i = K(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (a.value || 16)
  ) || 1), o = K(0), r = K(0), s = j(), c = j();
  let d = 0;
  const {
    resizeRef: v,
    contentRect: f
  } = Ct();
  $e(() => {
    v.value = s.value;
  });
  const g = b(() => {
    var E;
    return s.value === document.documentElement ? t.height.value : ((E = f.value) == null ? void 0 : E.height) || parseInt(e.height) || 0;
  }), h = b(() => !!(s.value && c.value && g.value && a.value));
  let y = Array.from({
    length: n.value.length
  }), m = Array.from({
    length: n.value.length
  });
  const S = K(0);
  let k = -1;
  function V(E) {
    return y[E] || a.value;
  }
  const A = cd(() => {
    const E = performance.now();
    m[0] = 0;
    const F = n.value.length;
    for (let Y = 1; Y <= F - 1; Y++)
      m[Y] = (m[Y - 1] || 0) + V(Y - 1);
    S.value = Math.max(S.value, performance.now() - E);
  }, S), I = Z(h, (E) => {
    E && (I(), d = c.value.offsetTop, A.immediate(), W(), ~k && xe(() => {
      Se && window.requestAnimationFrame(() => {
        N(k), k = -1;
      });
    }));
  });
  lt(() => {
    A.clear();
  });
  function _(E, F) {
    const Y = y[E], X = a.value;
    a.value = X ? Math.min(a.value, F) : F, (Y !== F || X !== a.value) && (y[E] = F, A());
  }
  function B(E) {
    return E = Oe(E, 0, n.value.length - 1), m[E] || 0;
  }
  function w(E) {
    return Pm(m, E);
  }
  let P = 0, T = 0, C = 0;
  Z(g, (E, F) => {
    F && (W(), E < F && requestAnimationFrame(() => {
      T = 0, W();
    }));
  });
  let x = -1;
  function D() {
    if (!s.value || !c.value) return;
    const E = s.value.scrollTop, F = performance.now();
    F - C > 500 ? (T = Math.sign(E - P), d = c.value.offsetTop) : T = E - P, P = E, C = F, window.clearTimeout(x), x = window.setTimeout(M, 500), W();
  }
  function M() {
    !s.value || !c.value || (T = 0, C = 0, window.clearTimeout(x), W());
  }
  let L = -1;
  function W() {
    cancelAnimationFrame(L), L = requestAnimationFrame(J);
  }
  function J() {
    if (!s.value || !g.value) return;
    const E = P - d, F = Math.sign(T), Y = Math.max(0, E - Bl), X = Oe(w(Y), 0, n.value.length), Q = E + g.value + Bl, re = Oe(w(Q) + 1, X + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (F !== Cm || X < l.value) && (F !== Vm || re > i.value)
    ) {
      const G = B(l.value) - B(X), te = B(re) - B(i.value);
      Math.max(G, te) > Bl ? (l.value = X, i.value = re) : (X <= 0 && (l.value = X), re >= n.value.length && (i.value = re));
    }
    o.value = B(l.value), r.value = B(n.value.length) - B(i.value);
  }
  function N(E) {
    const F = B(E);
    !s.value || E && !F ? k = E : s.value.scrollTop = F;
  }
  const O = b(() => n.value.slice(l.value, i.value).map((E, F) => ({
    raw: E,
    index: F + l.value,
    key: za(E) && "value" in E ? E.value : F + l.value
  })));
  return Z(n, () => {
    y = Array.from({
      length: n.value.length
    }), m = Array.from({
      length: n.value.length
    }), A.immediate(), W();
  }, {
    deep: !0
  }), {
    calculateVisibleItems: W,
    containerRef: s,
    markerRef: c,
    computedItems: O,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: N,
    handleScroll: D,
    handleScrollend: M,
    handleItemResize: _
  };
}
function Pm(e, n) {
  let t = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[t] < n)
    return t;
  for (; a <= t; )
    if (l = a + t >> 1, i = e[l], i > n)
      t = l - 1;
    else if (i < n)
      o = l, a = l + 1;
    else return i === n ? l : a;
  return o;
}
const Im = p({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...us(),
  ...ne(),
  ...Re()
}, "VVirtualScroll"), ll = R()({
  name: "VVirtualScroll",
  props: Im(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ee("VVirtualScroll"), {
      dimensionStyles: l
    } = Ne(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: s,
      handleScrollend: c,
      handleItemResize: d,
      scrollToIndex: v,
      paddingTop: f,
      paddingBottom: g,
      computedItems: h
    } = ss(e, $(e, "items"));
    return ot(() => e.renderless, () => {
      function y() {
        var k, V;
        const S = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[S]("scroll", s, {
          passive: !0
        }), document[S]("scrollend", c)) : ((k = o.value) == null || k[S]("scroll", s, {
          passive: !0
        }), (V = o.value) == null || V[S]("scrollend", c));
      }
      at(() => {
        o.value = Vi(a.vnode.el, !0), y(!0);
      }), lt(y);
    }), z(() => {
      const y = h.value.map((m) => u(rs, {
        key: m.key,
        renderless: e.renderless,
        "onUpdate:height": (S) => d(m.index, S)
      }, {
        default: (S) => {
          var k;
          return (k = t.default) == null ? void 0 : k.call(t, {
            item: m.raw,
            index: m.index,
            ...S
          });
        }
      }));
      return e.renderless ? u(se, null, [u("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: ee(f.value)
        }
      }, null), y, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: ee(g.value)
        }
      }, null)]) : u("div", {
        ref: o,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: s,
        onScrollend: c,
        style: [l.value, e.style]
      }, [u("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: ee(f.value),
          paddingBottom: ee(g.value)
        }
      }, [y])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: v
    };
  }
});
function Yi(e, n) {
  const t = K(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), t.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (t.value) {
        const s = Z(t, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var d, v;
    if (r.key === "Tab" && ((d = n.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (v = e.value) == null ? void 0 : v.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const f = s.getBoundingClientRect().top;
      for (const g of c)
        if (g.getBoundingClientRect().top >= f) {
          g.focus();
          break;
        }
    } else {
      const f = s.getBoundingClientRect().bottom;
      for (const g of [...c].reverse())
        if (g.getBoundingClientRect().bottom <= f) {
          g.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: o
  };
}
const Gi = p({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: oe,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...Xu({
    itemChildren: !1
  })
}, "Select"), _m = p({
  ...Gi(),
  ...Te(ya({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Pt({
    transition: {
      component: Ga
    }
  })
}, "VSelect"), Ui = R()({
  name: "VSelect",
  props: _m(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), l = j(), i = j(), o = j(), r = ie(e, "menu"), s = b({
      get: () => r.value,
      set: (O) => {
        var E;
        r.value && !O && ((E = i.value) != null && E.ΨopenChildren.size) || (r.value = O);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: v
    } = Ri(e), f = ie(e, "modelValue", [], (O) => d(O === null ? [null] : _e(O)), (O) => {
      const E = v(O);
      return e.multiple ? E : E[0] ?? null;
    }), g = b(() => typeof e.counterValue == "function" ? e.counterValue(f.value) : typeof e.counterValue == "number" ? e.counterValue : f.value.length), h = el(e), y = b(() => f.value.map((O) => O.value)), m = K(!1), S = b(() => s.value ? e.closeText : e.openText);
    let k = "", V;
    const A = b(() => e.hideSelected ? c.value.filter((O) => !f.value.some((E) => (e.valueComparator || nt)(E, O))) : c.value), I = b(() => e.hideNoData && !A.value.length || h.isReadonly.value || h.isDisabled.value), _ = b(() => {
      var O;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((O = e.menuProps) == null ? void 0 : O.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), B = j(), w = Yi(B, l);
    function P(O) {
      e.openOnClear && (s.value = !0);
    }
    function T() {
      I.value || (s.value = !s.value);
    }
    function C(O) {
      En(O) && x(O);
    }
    function x(O) {
      var X, Q;
      if (!O.key || h.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(O.key) && O.preventDefault(), ["Enter", "ArrowDown", " "].includes(O.key) && (s.value = !0), ["Escape", "Tab"].includes(O.key) && (s.value = !1), O.key === "Home" ? (X = B.value) == null || X.focus("first") : O.key === "End" && ((Q = B.value) == null || Q.focus("last"));
      const E = 1e3;
      if (!En(O)) return;
      const F = performance.now();
      F - V > E && (k = ""), k += O.key.toLowerCase(), V = F;
      const Y = c.value.find((re) => re.title.toLowerCase().startsWith(k));
      if (Y !== void 0) {
        f.value = [Y];
        const re = A.value.indexOf(Y);
        Se && window.requestAnimationFrame(() => {
          var G;
          re >= 0 && ((G = o.value) == null || G.scrollToIndex(re));
        });
      }
    }
    function D(O) {
      let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!O.props.disabled)
        if (e.multiple) {
          const F = f.value.findIndex((X) => (e.valueComparator || nt)(X.value, O.value)), Y = E ?? !~F;
          if (~F) {
            const X = Y ? [...f.value, O] : [...f.value];
            X.splice(F, 1), f.value = X;
          } else Y && (f.value = [...f.value, O]);
        } else {
          const F = E !== !1;
          f.value = F ? [O] : [], xe(() => {
            s.value = !1;
          });
        }
    }
    function M(O) {
      var E;
      (E = B.value) != null && E.$el.contains(O.relatedTarget) || (s.value = !1);
    }
    function L() {
      var O;
      e.eager && ((O = o.value) == null || O.calculateVisibleItems());
    }
    function W() {
      var O;
      m.value && ((O = l.value) == null || O.focus());
    }
    function J(O) {
      m.value = !0;
    }
    function N(O) {
      if (O == null) f.value = [];
      else if (Mn(l.value, ":autofill") || Mn(l.value, ":-webkit-autofill")) {
        const E = c.value.find((F) => F.title === O);
        E && D(E);
      } else l.value && (l.value.value = "");
    }
    return Z(s, () => {
      if (!e.hideSelected && s.value && f.value.length) {
        const O = A.value.findIndex((E) => f.value.some((F) => (e.valueComparator || nt)(F.value, E.value)));
        Se && window.requestAnimationFrame(() => {
          var E;
          O >= 0 && ((E = o.value) == null || E.scrollToIndex(O));
        });
      }
    }), Z(() => e.items, (O, E) => {
      s.value || m.value && !E.length && O.length && (s.value = !0);
    }), z(() => {
      const O = !!(e.chips || t.chip), E = !!(!e.hideNoData || A.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), F = f.value.length > 0, Y = Lt.filterProps(e), X = F || !m.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(Lt, H({
        ref: l
      }, Y, {
        modelValue: f.value.map((Q) => Q.props.value).join(", "),
        "onUpdate:modelValue": N,
        focused: m.value,
        "onUpdate:focused": (Q) => m.value = Q,
        validationValue: f.externalValue,
        counterValue: g.value,
        dirty: F,
        class: ["v-select", {
          "v-select--active-menu": s.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": f.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: X,
        "onClick:clear": P,
        "onMousedown:control": T,
        onBlur: M,
        onKeydown: x,
        "aria-label": a(S.value),
        title: a(S.value)
      }), {
        ...t,
        default: () => u(se, null, [u(un, H({
          ref: i,
          modelValue: s.value,
          "onUpdate:modelValue": (Q) => s.value = Q,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: I.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: L,
          onAfterLeave: W
        }, _.value), {
          default: () => [E && u(nl, H({
            ref: B,
            selected: y.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Q) => Q.preventDefault(),
            onKeydown: C,
            onFocusin: J,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, w, e.listProps), {
            default: () => {
              var Q, re, G;
              return [(Q = t["prepend-item"]) == null ? void 0 : Q.call(t), !A.value.length && !e.hideNoData && (((re = t["no-data"]) == null ? void 0 : re.call(t)) ?? u($t, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), u(ll, {
                ref: o,
                renderless: !0,
                items: A.value
              }, {
                default: (te) => {
                  var ue;
                  let {
                    item: le,
                    index: Ce,
                    itemRef: ge
                  } = te;
                  const q = H(le.props, {
                    ref: ge,
                    key: le.value,
                    onClick: () => D(le, null)
                  });
                  return ((ue = t.item) == null ? void 0 : ue.call(t, {
                    item: le,
                    index: Ce,
                    props: q
                  })) ?? u($t, H(q, {
                    role: "option"
                  }), {
                    prepend: (U) => {
                      let {
                        isSelected: ae
                      } = U;
                      return u(se, null, [e.multiple && !e.hideSelected ? u(Ft, {
                        key: le.value,
                        modelValue: ae,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, le.props.prependAvatar && u(bt, {
                        image: le.props.prependAvatar
                      }, null), le.props.prependIcon && u(ke, {
                        icon: le.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (G = t["append-item"]) == null ? void 0 : G.call(t)];
            }
          })]
        }), f.value.map((Q, re) => {
          function G(ge) {
            ge.stopPropagation(), ge.preventDefault(), D(Q, !1);
          }
          const te = {
            "onClick:close": G,
            onKeydown(ge) {
              ge.key !== "Enter" && ge.key !== " " || (ge.preventDefault(), ge.stopPropagation(), G(ge));
            },
            onMousedown(ge) {
              ge.preventDefault(), ge.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, le = O ? !!t.chip : !!t.selection, Ce = le ? Ya(O ? t.chip({
            item: Q,
            index: re,
            props: te
          }) : t.selection({
            item: Q,
            index: re
          })) : void 0;
          if (!(le && !Ce))
            return u("div", {
              key: Q.value,
              class: "v-select__selection"
            }, [O ? t.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: Q.title
                }
              }
            }, {
              default: () => [Ce]
            }) : u(jn, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Q.title,
              disabled: Q.props.disabled
            }, te), null) : Ce ?? u("span", {
              class: "v-select__selection-text"
            }, [Q.title, e.multiple && re < f.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [wt(",")])])]);
        })]),
        "append-inner": function() {
          var te;
          for (var Q = arguments.length, re = new Array(Q), G = 0; G < Q; G++)
            re[G] = arguments[G];
          return u(se, null, [(te = t["append-inner"]) == null ? void 0 : te.call(t, ...re), e.menuIcon ? u(ke, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), yt({
      isFocused: m,
      menu: s,
      select: D
    }, l);
  }
}), Am = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), ba = p({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function Tm(e, n, t) {
  var r;
  const a = [], l = (t == null ? void 0 : t.default) ?? Am, i = t != null && t.filterKeys ? _e(t.filterKeys) : !1, o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let s = 0; s < e.length; s++) {
    const [c, d = c] = _e(e[s]), v = {}, f = {};
    let g = -1;
    if ((n || o > 0) && !(t != null && t.noFilter)) {
      if (typeof c == "object") {
        const m = i || Object.keys(d);
        for (const S of m) {
          const k = ze(d, S), V = (r = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : r[S];
          if (g = V ? V(k, n, c) : l(k, n, c), g !== -1 && g !== !1)
            V ? v[S] = g : f[S] = g;
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        g = l(c, n, c), g !== -1 && g !== !1 && (f.title = g);
      const h = Object.keys(f).length, y = Object.keys(v).length;
      if (!h && !y || (t == null ? void 0 : t.filterMode) === "union" && y !== o && !h || (t == null ? void 0 : t.filterMode) === "intersection" && (y !== o || !h)) continue;
    }
    a.push({
      index: s,
      matches: {
        ...f,
        ...v
      }
    });
  }
  return a;
}
function Sa(e, n, t, a) {
  const l = K([]), i = K(/* @__PURE__ */ new Map()), o = b(() => a != null && a.transform ? Xe(n).map((s) => [s, a.transform(s)]) : Xe(n));
  $e(() => {
    const s = typeof t == "function" ? t() : Xe(t), c = typeof s != "string" && typeof s != "number" ? "" : String(s), d = Tm(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...Xe(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), v = Xe(n), f = [], g = /* @__PURE__ */ new Map();
    d.forEach((h) => {
      let {
        index: y,
        matches: m
      } = h;
      const S = v[y];
      f.push(S), g.set(S.value, m);
    }), l.value = f, i.value = g;
  });
  function r(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function Bm(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? u(se, null, [u("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, n)]), u("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(n, t)]), u("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(n + t)])]) : e;
}
const Dm = p({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...ba({
    filterKeys: ["title"]
  }),
  ...Gi(),
  ...Te(ya({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Pt({
    transition: !1
  })
}, "VAutocomplete"), pm = R()({
  name: "VAutocomplete",
  props: Dm(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), l = j(), i = K(!1), o = K(!0), r = K(!1), s = j(), c = j(), d = ie(e, "menu"), v = b({
      get: () => d.value,
      set: (q) => {
        var ue;
        d.value && !q && ((ue = s.value) != null && ue.ΨopenChildren.size) || (d.value = q);
      }
    }), f = K(-1), g = b(() => {
      var q;
      return (q = l.value) == null ? void 0 : q.color;
    }), h = b(() => v.value ? e.closeText : e.openText), {
      items: y,
      transformIn: m,
      transformOut: S
    } = Ri(e), {
      textColorClasses: k,
      textColorStyles: V
    } = Ue(g), A = ie(e, "search", ""), I = ie(e, "modelValue", [], (q) => m(q === null ? [null] : _e(q)), (q) => {
      const ue = S(q);
      return e.multiple ? ue : ue[0] ?? null;
    }), _ = b(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), B = el(e), {
      filteredItems: w,
      getMatches: P
    } = Sa(e, y, () => o.value ? "" : A.value), T = b(() => e.hideSelected ? w.value.filter((q) => !I.value.some((ue) => ue.value === q.value)) : w.value), C = b(() => !!(e.chips || t.chip)), x = b(() => C.value || !!t.selection), D = b(() => I.value.map((q) => q.props.value)), M = b(() => {
      var ue;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && A.value === ((ue = T.value[0]) == null ? void 0 : ue.title)) && T.value.length > 0 && !o.value && !r.value;
    }), L = b(() => e.hideNoData && !T.value.length || B.isReadonly.value || B.isDisabled.value), W = j(), J = Yi(W, l);
    function N(q) {
      e.openOnClear && (v.value = !0), A.value = "";
    }
    function O() {
      L.value || (v.value = !0);
    }
    function E(q) {
      L.value || (i.value && (q.preventDefault(), q.stopPropagation()), v.value = !v.value);
    }
    function F(q) {
      var ue;
      q.key !== " " && En(q) && ((ue = l.value) == null || ue.focus());
    }
    function Y(q) {
      var ae, de, ce;
      if (B.isReadonly.value) return;
      const ue = l.value.selectionStart, U = I.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(q.key) && q.preventDefault(), ["Enter", "ArrowDown"].includes(q.key) && (v.value = !0), ["Escape"].includes(q.key) && (v.value = !1), M.value && ["Enter", "Tab"].includes(q.key) && !I.value.some((ve) => {
        let {
          value: Pe
        } = ve;
        return Pe === T.value[0].value;
      }) && ge(T.value[0]), q.key === "ArrowDown" && M.value && ((ae = W.value) == null || ae.focus("next")), ["Backspace", "Delete"].includes(q.key)) {
        if (!e.multiple && x.value && I.value.length > 0 && !A.value) return ge(I.value[0], !1);
        if (~f.value) {
          q.preventDefault();
          const ve = f.value;
          ge(I.value[f.value], !1), f.value = ve >= U - 1 ? U - 2 : ve;
        } else q.key === "Backspace" && !A.value && (f.value = U - 1);
        return;
      }
      if (e.multiple)
        if (q.key === "ArrowLeft") {
          if (f.value < 0 && ue > 0) return;
          const ve = f.value > -1 ? f.value - 1 : U - 1;
          I.value[ve] ? f.value = ve : (f.value = -1, l.value.setSelectionRange((de = A.value) == null ? void 0 : de.length, (ce = A.value) == null ? void 0 : ce.length));
        } else if (q.key === "ArrowRight") {
          if (f.value < 0) return;
          const ve = f.value + 1;
          I.value[ve] ? f.value = ve : (f.value = -1, l.value.setSelectionRange(0, 0));
        } else ~f.value && En(q) && (f.value = -1);
    }
    function X(q) {
      if (Mn(l.value, ":autofill") || Mn(l.value, ":-webkit-autofill")) {
        const ue = y.value.find((U) => U.title === q.target.value);
        ue && ge(ue);
      }
    }
    function Q() {
      var q;
      e.eager && ((q = c.value) == null || q.calculateVisibleItems());
    }
    function re() {
      var q;
      i.value && (o.value = !0, (q = l.value) == null || q.focus());
    }
    function G(q) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function te(q) {
      r.value = !1;
    }
    function le(q) {
      (q == null || q === "" && !e.multiple && !x.value) && (I.value = []);
    }
    const Ce = K(!1);
    function ge(q) {
      let ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!q || q.props.disabled))
        if (e.multiple) {
          const U = I.value.findIndex((de) => (e.valueComparator || nt)(de.value, q.value)), ae = ue ?? !~U;
          if (~U) {
            const de = ae ? [...I.value, q] : [...I.value];
            de.splice(U, 1), I.value = de;
          } else ae && (I.value = [...I.value, q]);
          e.clearOnSelect && (A.value = "");
        } else {
          const U = ue !== !1;
          I.value = U ? [q] : [], A.value = U && !x.value ? q.title : "", xe(() => {
            v.value = !1, o.value = !0;
          });
        }
    }
    return Z(i, (q, ue) => {
      var U;
      q !== ue && (q ? (Ce.value = !0, A.value = e.multiple || x.value ? "" : String(((U = I.value.at(-1)) == null ? void 0 : U.props.title) ?? ""), o.value = !0, xe(() => Ce.value = !1)) : (!e.multiple && A.value == null && (I.value = []), v.value = !1, I.value.some((ae) => {
        let {
          title: de
        } = ae;
        return de === A.value;
      }) || (A.value = ""), f.value = -1));
    }), Z(A, (q) => {
      !i.value || Ce.value || (q && (v.value = !0), o.value = !q);
    }), Z(v, () => {
      if (!e.hideSelected && v.value && I.value.length) {
        const q = T.value.findIndex((ue) => I.value.some((U) => ue.value === U.value));
        Se && window.requestAnimationFrame(() => {
          var ue;
          q >= 0 && ((ue = c.value) == null || ue.scrollToIndex(q));
        });
      }
    }), Z(() => e.items, (q, ue) => {
      v.value || i.value && !ue.length && q.length && (v.value = !0);
    }), z(() => {
      const q = !!(!e.hideNoData || T.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), ue = I.value.length > 0, U = Lt.filterProps(e);
      return u(Lt, H({
        ref: l
      }, U, {
        modelValue: A.value,
        "onUpdate:modelValue": [(ae) => A.value = ae, le],
        focused: i.value,
        "onUpdate:focused": (ae) => i.value = ae,
        validationValue: I.externalValue,
        counterValue: _.value,
        dirty: ue,
        onChange: X,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": v.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!x.value,
          "v-autocomplete--selecting-index": f.value > -1
        }, e.class],
        style: e.style,
        readonly: B.isReadonly.value,
        placeholder: ue ? void 0 : e.placeholder,
        "onClick:clear": N,
        "onMousedown:control": O,
        onKeydown: Y
      }), {
        ...t,
        default: () => u(se, null, [u(un, H({
          ref: s,
          modelValue: v.value,
          "onUpdate:modelValue": (ae) => v.value = ae,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: L.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: Q,
          onAfterLeave: re
        }, e.menuProps), {
          default: () => [q && u(nl, H({
            ref: W,
            selected: D.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ae) => ae.preventDefault(),
            onKeydown: F,
            onFocusin: G,
            onFocusout: te,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, J, e.listProps), {
            default: () => {
              var ae, de, ce;
              return [(ae = t["prepend-item"]) == null ? void 0 : ae.call(t), !T.value.length && !e.hideNoData && (((de = t["no-data"]) == null ? void 0 : de.call(t)) ?? u($t, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), u(ll, {
                ref: c,
                renderless: !0,
                items: T.value
              }, {
                default: (ve) => {
                  var Qe;
                  let {
                    item: Pe,
                    index: rt,
                    itemRef: Ie
                  } = ve;
                  const pt = H(Pe.props, {
                    ref: Ie,
                    key: Pe.value,
                    active: M.value && rt === 0 ? !0 : void 0,
                    onClick: () => ge(Pe, null)
                  });
                  return ((Qe = t.item) == null ? void 0 : Qe.call(t, {
                    item: Pe,
                    index: rt,
                    props: pt
                  })) ?? u($t, H(pt, {
                    role: "option"
                  }), {
                    prepend: (Kt) => {
                      let {
                        isSelected: qt
                      } = Kt;
                      return u(se, null, [e.multiple && !e.hideSelected ? u(Ft, {
                        key: Pe.value,
                        modelValue: qt,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Pe.props.prependAvatar && u(bt, {
                        image: Pe.props.prependAvatar
                      }, null), Pe.props.prependIcon && u(ke, {
                        icon: Pe.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var Kt, qt;
                      return o.value ? Pe.title : Bm(Pe.title, (Kt = P(Pe)) == null ? void 0 : Kt.title, ((qt = A.value) == null ? void 0 : qt.length) ?? 0);
                    }
                  });
                }
              }), (ce = t["append-item"]) == null ? void 0 : ce.call(t)];
            }
          })]
        }), I.value.map((ae, de) => {
          function ce(Ie) {
            Ie.stopPropagation(), Ie.preventDefault(), ge(ae, !1);
          }
          const ve = {
            "onClick:close": ce,
            onKeydown(Ie) {
              Ie.key !== "Enter" && Ie.key !== " " || (Ie.preventDefault(), Ie.stopPropagation(), ce(Ie));
            },
            onMousedown(Ie) {
              Ie.preventDefault(), Ie.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Pe = C.value ? !!t.chip : !!t.selection, rt = Pe ? Ya(C.value ? t.chip({
            item: ae,
            index: de,
            props: ve
          }) : t.selection({
            item: ae,
            index: de
          })) : void 0;
          if (!(Pe && !rt))
            return u("div", {
              key: ae.value,
              class: ["v-autocomplete__selection", de === f.value && ["v-autocomplete__selection--selected", k.value]],
              style: de === f.value ? V.value : {}
            }, [C.value ? t.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ae.title
                }
              }
            }, {
              default: () => [rt]
            }) : u(jn, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ae.title,
              disabled: ae.props.disabled
            }, ve), null) : rt ?? u("span", {
              class: "v-autocomplete__selection-text"
            }, [ae.title, e.multiple && de < I.value.length - 1 && u("span", {
              class: "v-autocomplete__selection-comma"
            }, [wt(",")])])]);
        })]),
        "append-inner": function() {
          var ve;
          for (var ae = arguments.length, de = new Array(ae), ce = 0; ce < ae; ce++)
            de[ce] = arguments[ce];
          return u(se, null, [(ve = t["append-inner"]) == null ? void 0 : ve.call(t, ...de), e.menuIcon ? u(ke, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: E,
            onClick: Er,
            "aria-label": a(h.value),
            title: a(h.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), yt({
      isFocused: i,
      isPristine: o,
      menu: v,
      search: A,
      filteredItems: w,
      select: ge
    }, l);
  }
}), Mm = p({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: oe,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...ne(),
  ...Rt({
    location: "top end"
  }),
  ...pe(),
  ...fe(),
  ...ye(),
  ...Pt({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), Em = R()({
  name: "VBadge",
  inheritAttrs: !1,
  props: Mm(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = Ve($(e, "color")), {
      roundedClasses: l
    } = Fe(e), {
      t: i
    } = De(), {
      textColorClasses: o,
      textColorStyles: r
    } = Ue($(e, "textColor")), {
      themeClasses: s
    } = au(), {
      locationStyles: c
    } = Cn(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? +(e.offsetY ?? 0) : ["left", "right"].includes(d) ? +(e.offsetX ?? 0) : 0));
    return z(() => {
      const d = Number(e.content), v = !e.max || isNaN(d) ? e.content : d <= +e.max ? d : `${e.max}+`, [f, g] = pl(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return u(e.tag, H({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, g, {
        style: e.style
      }), {
        default: () => {
          var h, y;
          return [u("div", {
            class: "v-badge__wrapper"
          }, [(y = (h = n.slots).default) == null ? void 0 : y.call(h), u(tt, {
            transition: e.transition
          }, {
            default: () => {
              var m, S;
              return [Ae(u("span", H({
                class: ["v-badge__badge", s.value, t.value, l.value, o.value],
                style: [a.value, r.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, f), [e.dot ? void 0 : n.slots.badge ? (S = (m = n.slots).badge) == null ? void 0 : S.call(m) : e.icon ? u(ke, {
                icon: e.icon
              }, null) : v]), [[Vt, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), Fm = p({
  color: String,
  density: String,
  ...ne()
}, "VBannerActions"), cs = R()({
  name: "VBannerActions",
  props: Fm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Me({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), z(() => {
      var a;
      return u("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), ds = At("v-banner-text"), $m = p({
  avatar: String,
  bgColor: String,
  color: String,
  icon: oe,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...st(),
  ...ne(),
  ...Ye(),
  ...Re(),
  ...Vn({
    mobile: null
  }),
  ...je(),
  ...Rt(),
  ...Nn(),
  ...pe(),
  ...fe(),
  ...ye()
}, "VBanner"), Lm = R()({
  name: "VBanner",
  props: $m(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve(e, "bgColor"), {
      borderClasses: i
    } = ht(e), {
      densityClasses: o
    } = it(e), {
      displayClasses: r,
      mobile: s
    } = kt(e), {
      dimensionStyles: c
    } = Ne(e), {
      elevationClasses: d
    } = qe(e), {
      locationStyles: v
    } = Cn(e), {
      positionClasses: f
    } = Hn(e), {
      roundedClasses: g
    } = Fe(e), {
      themeClasses: h
    } = we(e), y = $(e, "color"), m = $(e, "density");
    Me({
      VBannerActions: {
        color: y,
        density: m
      }
    }), z(() => {
      const S = !!(e.text || t.text), k = !!(e.avatar || e.icon), V = !!(k || t.prepend);
      return u(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, h.value, a.value, i.value, o.value, r.value, d.value, f.value, g.value, e.class],
        style: [l.value, c.value, v.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var A;
          return [V && u("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [t.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !k,
            defaults: {
              VAvatar: {
                color: y.value,
                density: m.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, t.prepend) : u(bt, {
            key: "prepend-avatar",
            color: y.value,
            density: m.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), u("div", {
            class: "v-banner__content"
          }, [S && u(ds, {
            key: "text"
          }, {
            default: () => {
              var I;
              return [((I = t.text) == null ? void 0 : I.call(t)) ?? e.text];
            }
          }), (A = t.default) == null ? void 0 : A.call(t)]), t.actions && u(cs, {
            key: "actions"
          }, t.actions)];
        }
      });
    });
  }
}), Om = p({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...st(),
  ...ne(),
  ...Ye(),
  ...je(),
  ...pe(),
  ...hn({
    name: "bottom-navigation"
  }),
  ...fe({
    tag: "header"
  }),
  ...kn({
    selectedClass: "v-btn--selected"
  }),
  ...ye()
}, "VBottomNavigation"), Rm = R()({
  name: "VBottomNavigation",
  props: Om(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = au(), {
      borderClasses: l
    } = ht(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve($(e, "bgColor")), {
      densityClasses: r
    } = it(e), {
      elevationClasses: s
    } = qe(e), {
      roundedClasses: c
    } = Fe(e), {
      ssrBootStyles: d
    } = bn(), v = b(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = ie(e, "active", e.active), {
      layoutItemStyles: g
    } = yn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: b(() => "bottom"),
      layoutSize: b(() => f.value ? v.value : 0),
      elementSize: v,
      active: f,
      absolute: $(e, "absolute")
    });
    return Ut(e, Di), Me({
      VBtn: {
        baseColor: $(e, "baseColor"),
        color: $(e, "color"),
        density: $(e, "density"),
        stacked: b(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), z(() => u(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": f.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, i.value, l.value, r.value, s.value, c.value, e.class],
      style: [o.value, g.value, {
        height: ee(v.value)
      }, d.value, e.style]
    }, {
      default: () => [t.default && u("div", {
        class: "v-bottom-navigation__content"
      }, [t.default()])]
    })), {};
  }
}), vs = p({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...ga({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Ga
    },
    zIndex: 2400
  })
}, "VDialog"), Xl = R()({
  name: "VDialog",
  props: vs(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), {
      scopeId: i
    } = Pn(), o = j();
    function r(d) {
      var g, h;
      const v = d.relatedTarget, f = d.target;
      if (v !== f && ((g = o.value) != null && g.contentEl) && // We're the topmost dialog
      ((h = o.value) != null && h.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(f) && // It isn't inside the dialog body
      !o.value.contentEl.contains(f)) {
        const y = qn(o.value.contentEl);
        if (!y.length) return;
        const m = y[0], S = y[y.length - 1];
        v === m ? S.focus() : m.focus();
      }
    }
    Je(() => {
      document.removeEventListener("focusin", r);
    }), Se && Z(() => l.value && e.retainFocus, (d) => {
      d ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function s() {
      var d;
      t("afterEnter"), (d = o.value) != null && d.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return Z(l, async (d) => {
      var v;
      d || (await xe(), (v = o.value.activatorEl) == null || v.focus({
        preventScroll: !0
      }));
    }), z(() => {
      const d = It.filterProps(e), v = H({
        "aria-haspopup": "dialog"
      }, e.activatorProps), f = H({
        tabindex: -1
      }, e.contentProps);
      return u(It, H({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, d, {
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        "aria-modal": "true",
        activatorProps: v,
        contentProps: f,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: s,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var g = arguments.length, h = new Array(g), y = 0; y < g; y++)
            h[y] = arguments[y];
          return u(me, {
            root: "VDialog"
          }, {
            default: () => {
              var m;
              return [(m = a.default) == null ? void 0 : m.call(a, ...h)];
            }
          });
        }
      });
    }), yt({}, o);
  }
}), Nm = p({
  inset: Boolean,
  ...vs({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), Hm = R()({
  name: "VBottomSheet",
  props: Nm(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue");
    return z(() => {
      const l = Xl.filterProps(e);
      return u(Xl, H(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), t);
    }), {};
  }
}), zm = p({
  divider: [Number, String],
  ...ne()
}, "VBreadcrumbsDivider"), fs = R()({
  name: "VBreadcrumbsDivider",
  props: zm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var a;
      return u("li", {
        "aria-hidden": "true",
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider]);
    }), {};
  }
}), Wm = p({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...ne(),
  ...fa(),
  ...fe({
    tag: "li"
  })
}, "VBreadcrumbsItem"), ms = R()({
  name: "VBreadcrumbsItem",
  props: Wm(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const l = va(e, a), i = b(() => {
      var c;
      return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }), o = b(() => i.value ? e.activeColor : e.color), {
      textColorClasses: r,
      textColorStyles: s
    } = Ue(o);
    return z(() => u(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, r.value, e.class],
      style: [s.value, e.style],
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var c, d;
        return [l.isLink.value ? u("a", H({
          class: "v-breadcrumbs-item--link",
          onClick: l.navigate
        }, l.linkProps), [((d = t.default) == null ? void 0 : d.call(t)) ?? e.title]) : ((c = t.default) == null ? void 0 : c.call(t)) ?? e.title];
      }
    })), {};
  }
}), jm = p({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: oe,
  items: {
    type: Array,
    default: () => []
  },
  ...ne(),
  ...Ye(),
  ...pe(),
  ...fe({
    tag: "ul"
  })
}, "VBreadcrumbs"), Ym = R()({
  name: "VBreadcrumbs",
  props: jm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve($(e, "bgColor")), {
      densityClasses: i
    } = it(e), {
      roundedClasses: o
    } = Fe(e);
    Me({
      VBreadcrumbsDivider: {
        divider: $(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: $(e, "activeClass"),
        activeColor: $(e, "activeColor"),
        color: $(e, "color"),
        disabled: $(e, "disabled")
      }
    });
    const r = b(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return z(() => {
      const s = !!(t.prepend || e.icon);
      return u(e.tag, {
        class: ["v-breadcrumbs", a.value, i.value, o.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var c;
          return [s && u("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [t.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, t.prepend) : u(ke, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), r.value.map((d, v, f) => {
            var y;
            let {
              item: g,
              raw: h
            } = d;
            return u(se, null, [((y = t.item) == null ? void 0 : y.call(t, {
              item: g,
              index: v
            })) ?? u(ms, H({
              key: v,
              disabled: v >= f.length - 1
            }, typeof g == "string" ? {
              title: g
            } : g), {
              default: t.title ? () => {
                var m;
                return (m = t.title) == null ? void 0 : m.call(t, {
                  item: g,
                  index: v
                });
              } : void 0
            }), v < f.length - 1 && u(fs, null, {
              default: t.divider ? () => {
                var m;
                return (m = t.divider) == null ? void 0 : m.call(t, {
                  item: h,
                  index: v
                });
              } : void 0
            })]);
          }), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    }), {};
  }
}), gs = R()({
  name: "VCardActions",
  props: ne(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Me({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), z(() => {
      var a;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Gm = p({
  opacity: [Number, String],
  ...ne(),
  ...fe()
}, "VCardSubtitle"), hs = R()({
  name: "VCardSubtitle",
  props: Gm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), ys = At("v-card-title"), Um = p({
  appendAvatar: String,
  appendIcon: oe,
  prependAvatar: String,
  prependIcon: oe,
  subtitle: [String, Number],
  title: [String, Number],
  ...ne(),
  ...Ye()
}, "VCardItem"), bs = R()({
  name: "VCardItem",
  props: Um(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), r = !!(e.title != null || t.title), s = !!(e.subtitle != null || t.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? u(me, {
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
      }, t.prepend) : u(se, null, [e.prependAvatar && u(bt, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(ke, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [r && u(ys, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = t.title) == null ? void 0 : d.call(t)) ?? e.title];
        }
      }), s && u(hs, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = t.subtitle) == null ? void 0 : d.call(t)) ?? e.subtitle];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? u(me, {
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
      }, t.append) : u(se, null, [e.appendIcon && u(ke, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(bt, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Km = p({
  opacity: [Number, String],
  ...ne(),
  ...fe()
}, "VCardText"), Ss = R()({
  name: "VCardText",
  props: Km(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => u(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), qm = p({
  appendAvatar: String,
  appendIcon: oe,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: oe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...st(),
  ...ne(),
  ...Ye(),
  ...Re(),
  ...je(),
  ...Za(),
  ...Rt(),
  ...Nn(),
  ...pe(),
  ...fa(),
  ...fe(),
  ...ye(),
  ...St({
    variant: "elevated"
  })
}, "VCard"), Xm = R()({
  name: "VCard",
  directives: {
    Ripple: Bt
  },
  props: qm(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = we(e), {
      borderClasses: i
    } = ht(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = Sn(e), {
      densityClasses: c
    } = it(e), {
      dimensionStyles: d
    } = Ne(e), {
      elevationClasses: v
    } = qe(e), {
      loaderClasses: f
    } = ca(e), {
      locationStyles: g
    } = Cn(e), {
      positionClasses: h
    } = Hn(e), {
      roundedClasses: y
    } = Fe(e), m = va(e, t), S = b(() => e.link !== !1 && m.isLink.value), k = b(() => !e.disabled && e.link !== !1 && (e.link || m.isClickable.value));
    return z(() => {
      const V = S.value ? "a" : e.tag, A = !!(a.title || e.title != null), I = !!(a.subtitle || e.subtitle != null), _ = A || I, B = !!(a.append || e.appendAvatar || e.appendIcon), w = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), T = _ || w || B, C = !!(a.text || e.text != null);
      return Ae(u(V, H({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": k.value
        }, l.value, i.value, o.value, c.value, v.value, f.value, h.value, y.value, s.value, e.class],
        style: [r.value, d.value, g.value, e.style],
        onClick: k.value && m.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, m.linkProps), {
        default: () => {
          var x;
          return [P && u("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? u(me, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : u(Et, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(da, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), T && u(bs, {
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
          }), C && u(Ss, {
            key: "text"
          }, {
            default: () => {
              var D;
              return [((D = a.text) == null ? void 0 : D.call(a)) ?? e.text];
            }
          }), (x = a.default) == null ? void 0 : x.call(a), a.actions && u(gs, null, {
            default: a.actions
          }), Gt(k.value, "v-card")];
        }
      }), [[ft("ripple"), k.value && e.ripple]]);
    }), {};
  }
}), Zm = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function Jm(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function Qm(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, {
    originalEvent: e,
    ...n
  }), Zm(n);
}
function eg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function tg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => Jm(t, n),
    touchend: (t) => Qm(t, n),
    touchmove: (t) => eg(t, n)
  };
}
function ng(e, n) {
  var r;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (t == null ? void 0 : t.options) ?? {
    passive: !0
  }, i = (r = n.instance) == null ? void 0 : r.$.uid;
  if (!a || !i) return;
  const o = tg(n.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Tr(o).forEach((s) => {
    a.addEventListener(s, o[s], l);
  });
}
function ag(e, n) {
  var i, o;
  const t = (i = n.value) != null && i.parent ? e.parentElement : e, a = (o = n.instance) == null ? void 0 : o.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  Tr(l).forEach((r) => {
    t.removeEventListener(r, l[r]);
  }), delete t._touchHandlers[a];
}
const Ki = {
  mounted: ng,
  unmounted: ag
}, ks = Symbol.for("vuetify:v-window"), xs = Symbol.for("vuetify:v-window-group"), il = p({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...ne(),
  ...fe(),
  ...ye()
}, "VWindow"), sn = R()({
  name: "VWindow",
  directives: {
    Touch: Ki
  },
  props: il(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      isRtl: l
    } = We(), {
      t: i
    } = De(), o = Ut(e, xs), r = j(), s = b(() => l.value ? !e.reverse : e.reverse), c = K(!1), d = b(() => {
      const A = e.direction === "vertical" ? "y" : "x", _ = (s.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${A}${_}-transition`;
    }), v = K(0), f = j(void 0), g = b(() => o.items.value.findIndex((A) => o.selected.value.includes(A.id)));
    Z(g, (A, I) => {
      const _ = o.items.value.length, B = _ - 1;
      _ <= 2 ? c.value = A < I : A === B && I === 0 ? c.value = !0 : A === 0 && I === B ? c.value = !1 : c.value = A < I;
    }), Be(ks, {
      transition: d,
      isReversed: c,
      transitionCount: v,
      transitionHeight: f,
      rootRef: r
    });
    const h = b(() => e.continuous || g.value !== 0), y = b(() => e.continuous || g.value !== o.items.value.length - 1);
    function m() {
      h.value && o.prev();
    }
    function S() {
      y.value && o.next();
    }
    const k = b(() => {
      const A = [], I = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      A.push(h.value ? t.prev ? t.prev({
        props: I
      }) : u(he, I, null) : u("div", null, null));
      const _ = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return A.push(y.value ? t.next ? t.next({
        props: _
      }) : u(he, _, null) : u("div", null, null)), A;
    }), V = b(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? m() : S();
        },
        right: () => {
          s.value ? S() : m();
        },
        start: (I) => {
          let {
            originalEvent: _
          } = I;
          _.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return z(() => Ae(u(e.tag, {
      ref: r,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var A, I;
        return [u("div", {
          class: "v-window__container",
          style: {
            height: f.value
          }
        }, [(A = t.default) == null ? void 0 : A.call(t, {
          group: o
        }), e.showArrows !== !1 && u("div", {
          class: "v-window__controls"
        }, [k.value])]), (I = t.additional) == null ? void 0 : I.call(t, {
          group: o
        })];
      }
    }), [[ft("touch"), V.value]])), {
      group: o
    };
  }
}), lg = p({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: oe,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...il({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), ig = R()({
  name: "VCarousel",
  props: lg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      t: l
    } = De(), i = j();
    let o = -1;
    Z(a, s), Z(() => e.interval, s), Z(() => e.cycle, (c) => {
      c ? s() : window.clearTimeout(o);
    }), at(r);
    function r() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function s() {
      window.clearTimeout(o), window.requestAnimationFrame(r);
    }
    return z(() => {
      const c = sn.filterProps(e);
      return u(sn, H({
        ref: i
      }, c, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: ee(e.height)
        }, e.style]
      }), {
        default: t.default,
        additional: (d) => {
          let {
            group: v
          } = d;
          return u(se, null, [!e.hideDelimiters && u("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [v.items.value.length > 0 && u(me, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [v.items.value.map((f, g) => {
              const h = {
                id: `carousel-item-${f.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", g + 1, v.items.value.length),
                class: ["v-carousel__controls__item", v.isSelected(f.id) && "v-btn--active"],
                onClick: () => v.select(f.id, !0)
              };
              return t.item ? t.item({
                props: h,
                item: f
              }) : u(he, H(f, h), null);
            })]
          })]), e.progress && u(Xa, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (v.getItemIndex(a.value) + 1) / v.items.value.length * 100
          }, null)]);
        },
        prev: t.prev,
        next: t.next
      });
    }), {};
  }
}), ol = p({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...ne(),
  ...xn(),
  ...zi()
}, "VWindowItem"), cn = R()({
  name: "VWindowItem",
  directives: {
    Touch: Ki
  },
  props: ol(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(ks), l = wn(e, xs), {
      isBooted: i
    } = bn();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = K(!1), r = b(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var h;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = ee((h = a.rootRef.value) == null ? void 0 : h.clientHeight)), a.transitionCount.value += 1);
    }
    function d() {
      s();
    }
    function v(h) {
      o.value && xe(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = ee(h.clientHeight));
      });
    }
    const f = b(() => {
      const h = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof h != "string" ? a.transition.value : h,
        onBeforeEnter: c,
        onAfterEnter: s,
        onEnterCancelled: d,
        onBeforeLeave: c,
        onAfterLeave: s,
        onLeaveCancelled: d,
        onEnter: v
      } : !1;
    }), {
      hasContent: g
    } = Wi(e, l.isSelected);
    return z(() => u(tt, {
      transition: f.value,
      disabled: !i.value
    }, {
      default: () => {
        var h;
        return [Ae(u("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [g.value && ((h = t.default) == null ? void 0 : h.call(t))]), [[Vt, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), og = p({
  ...su(),
  ...ol()
}, "VCarouselItem"), rg = R()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: og(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    z(() => {
      const l = Et.filterProps(e), i = cn.filterProps(e);
      return u(cn, H({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [u(Et, H(a, l), t)]
      });
    });
  }
}), ug = At("v-code", "code"), sg = p({
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
  ...ne()
}, "VColorPickerCanvas"), cg = mt({
  name: "VColorPickerCanvas",
  props: sg(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = K(!1), l = j(), i = K(parseFloat(e.width)), o = K(parseFloat(e.height)), r = j({
      x: 0,
      y: 0
    }), s = b({
      get: () => r.value,
      set(m) {
        var V, A;
        if (!l.value) return;
        const {
          x: S,
          y: k
        } = m;
        r.value = m, t("update:color", {
          h: ((V = e.color) == null ? void 0 : V.h) ?? 0,
          s: Oe(S, 0, i.value) / i.value,
          v: 1 - Oe(k, 0, o.value) / o.value,
          a: ((A = e.color) == null ? void 0 : A.a) ?? 1
        });
      }
    }), c = b(() => {
      const {
        x: m,
        y: S
      } = s.value, k = parseInt(e.dotSize, 10) / 2;
      return {
        width: ee(e.dotSize),
        height: ee(e.dotSize),
        transform: `translate(${ee(m - k)}, ${ee(S - k)})`
      };
    }), {
      resizeRef: d
    } = Ct((m) => {
      var V;
      if (!((V = d.el) != null && V.offsetParent)) return;
      const {
        width: S,
        height: k
      } = m[0].contentRect;
      i.value = S, o.value = k;
    });
    function v(m, S, k) {
      const {
        left: V,
        top: A,
        width: I,
        height: _
      } = k;
      s.value = {
        x: Oe(m - V, 0, I),
        y: Oe(S - A, 0, _)
      };
    }
    function f(m) {
      m.type === "mousedown" && m.preventDefault(), !e.disabled && (g(m), window.addEventListener("mousemove", g), window.addEventListener("mouseup", h), window.addEventListener("touchmove", g), window.addEventListener("touchend", h));
    }
    function g(m) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const S = fd(m);
      v(S.clientX, S.clientY, l.value.getBoundingClientRect());
    }
    function h() {
      window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", h), window.removeEventListener("touchmove", g), window.removeEventListener("touchend", h);
    }
    function y() {
      var A;
      if (!l.value) return;
      const m = l.value, S = m.getContext("2d");
      if (!S) return;
      const k = S.createLinearGradient(0, 0, m.width, 0);
      k.addColorStop(0, "hsla(0, 0%, 100%, 1)"), k.addColorStop(1, `hsla(${((A = e.color) == null ? void 0 : A.h) ?? 0}, 100%, 50%, 1)`), S.fillStyle = k, S.fillRect(0, 0, m.width, m.height);
      const V = S.createLinearGradient(0, 0, 0, m.height);
      V.addColorStop(0, "hsla(0, 0%, 0%, 0)"), V.addColorStop(1, "hsla(0, 0%, 0%, 1)"), S.fillStyle = V, S.fillRect(0, 0, m.width, m.height);
    }
    return Z(() => {
      var m;
      return (m = e.color) == null ? void 0 : m.h;
    }, y, {
      immediate: !0
    }), Z(() => [i.value, o.value], (m, S) => {
      y(), r.value = {
        x: s.value.x * m[0] / S[0],
        y: s.value.y * m[1] / S[1]
      };
    }, {
      flush: "post"
    }), Z(() => e.color, () => {
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
    }), at(() => y()), z(() => u("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: f,
      onTouchstartPassive: f
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
function dg(e, n) {
  if (n) {
    const {
      a: t,
      ...a
    } = e;
    return a;
  }
  return e;
}
function vg(e, n) {
  if (n == null || typeof n == "string") {
    const t = Gr(e);
    return e.a === 1 ? t.slice(0, 7) : t;
  }
  if (typeof n == "object") {
    let t;
    return Jt(n, ["r", "g", "b"]) ? t = Mt(e) : Jt(n, ["h", "s", "l"]) ? t = Hr(e) : Jt(n, ["h", "s", "v"]) && (t = e), dg(t, !Jt(n, ["a"]) && e.a === 1);
  }
  return e;
}
const Dn = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Zl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => ({
      ...e,
      r: Number(n)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => ({
      ...e,
      g: Number(n)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => ({
      ...e,
      b: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Mt,
  from: ua
};
var kr;
const fg = {
  ...Zl,
  inputs: (kr = Zl.inputs) == null ? void 0 : kr.slice(0, 3)
}, Jl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => ({
      ...e,
      h: Number(n)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      s: Number(n)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      l: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Hr,
  from: wi
}, mg = {
  ...Jl,
  inputs: Jl.inputs.slice(0, 3)
}, ws = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, n) => n
  }],
  to: Gr,
  from: Ld
}, gg = {
  ...ws,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, n) => n
  }]
}, ln = {
  rgb: fg,
  rgba: Zl,
  hsl: mg,
  hsla: Jl,
  hex: gg,
  hexa: ws
}, hg = (e) => {
  let {
    label: n,
    ...t
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", t, null), u("span", null, [n])]);
}, yg = p({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(ln).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(ln),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(ln).includes(n))
  },
  ...ne()
}, "VColorPickerEdit"), bg = mt({
  name: "VColorPickerEdit",
  props: yg(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = b(() => e.modes.map((i) => ({
      ...ln[i],
      name: i
    }))), l = b(() => {
      var r;
      const i = a.value.find((s) => s.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((s) => {
        let {
          getValue: c,
          getColor: d,
          ...v
        } = s;
        return {
          ...i.inputProps,
          ...v,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (f) => {
            const g = f.target;
            g && t("update:color", i.from(d(o ?? i.to(Dn), g.value)));
          }
        };
      });
    });
    return z(() => {
      var i;
      return u("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((o) => u(hg, o, null)), a.value.length > 1 && u(he, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = a.value.findIndex((r) => r.name === e.mode);
          t("update:mode", a.value[(o + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), qi = Symbol.for("vuetify:v-slider");
function Ql(e, n, t) {
  const a = t === "vertical", l = n.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function Sg(e, n) {
  return "touches" in e && e.touches.length ? e.touches[0][n] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n];
}
const Cs = p({
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
  ...pe(),
  ...je({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Vs = (e) => {
  const n = b(() => parseFloat(e.min)), t = b(() => parseFloat(e.max)), a = b(() => +e.step > 0 ? parseFloat(e.step) : 0), l = b(() => Math.max(ko(a.value), ko(n.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = Oe(o, n.value, t.value), s = n.value % a.value, c = Math.round((r - s) / a.value) * a.value + s;
    return parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return {
    min: n,
    max: t,
    step: a,
    decimals: l,
    roundValue: i
  };
}, Ps = (e) => {
  let {
    props: n,
    steps: t,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: r
  } = We(), s = $(n, "reverse"), c = b(() => n.direction === "vertical"), d = b(() => c.value !== s.value), {
    min: v,
    max: f,
    step: g,
    decimals: h,
    roundValue: y
  } = t, m = b(() => parseInt(n.thumbSize, 10)), S = b(() => parseInt(n.tickSize, 10)), k = b(() => parseInt(n.trackSize, 10)), V = b(() => (f.value - v.value) / g.value), A = $(n, "disabled"), I = b(() => n.error || n.disabled ? void 0 : n.thumbColor ?? n.color), _ = b(() => n.error || n.disabled ? void 0 : n.trackColor ?? n.color), B = b(() => n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color), w = K(!1), P = K(0), T = j(), C = j();
  function x(G) {
    var ce;
    const te = (ce = T.value) == null ? void 0 : ce.$el;
    if (!te) return;
    const le = n.direction === "vertical", Ce = le ? "top" : "left", ge = le ? "height" : "width", q = le ? "clientY" : "clientX", {
      [Ce]: ue,
      [ge]: U
    } = te.getBoundingClientRect(), ae = Sg(G, q);
    let de = Math.min(Math.max((ae - ue - P.value) / U, 0), 1) || 0;
    return (le ? d.value : d.value !== r.value) && (de = 1 - de), y(v.value + de * (f.value - v.value));
  }
  const D = (G) => {
    const te = x(G);
    te != null && i({
      value: te
    }), w.value = !1, P.value = 0;
  }, M = (G) => {
    const te = x(G);
    C.value = o(G), C.value && (w.value = !0, C.value.contains(G.target) ? P.value = Ql(G, C.value, n.direction) : (P.value = 0, te != null && l({
      value: te
    })), te != null && a({
      value: te
    }), xe(() => {
      var le;
      return (le = C.value) == null ? void 0 : le.focus();
    }));
  }, L = {
    passive: !0,
    capture: !0
  };
  function W(G) {
    const te = x(G);
    te != null && l({
      value: te
    });
  }
  function J(G) {
    G.stopPropagation(), G.preventDefault(), D(G), window.removeEventListener("mousemove", W, L), window.removeEventListener("mouseup", J);
  }
  function N(G) {
    var te;
    D(G), window.removeEventListener("touchmove", W, L), (te = G.target) == null || te.removeEventListener("touchend", N);
  }
  function O(G) {
    var te;
    M(G), window.addEventListener("touchmove", W, L), (te = G.target) == null || te.addEventListener("touchend", N, {
      passive: !1
    });
  }
  function E(G) {
    G.preventDefault(), M(G), window.addEventListener("mousemove", W, L), window.addEventListener("mouseup", J, {
      passive: !1
    });
  }
  const F = (G) => {
    const te = (G - v.value) / (f.value - v.value) * 100;
    return Oe(isNaN(te) ? 0 : te, 0, 100);
  }, Y = $(n, "showTicks"), X = b(() => Y.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map((G) => ({
    value: G,
    position: F(G),
    label: G.toString()
  })) : Object.keys(n.ticks).map((G) => ({
    value: parseFloat(G),
    position: F(parseFloat(G)),
    label: n.ticks[G]
  })) : V.value !== 1 / 0 ? dt(V.value + 1).map((G) => {
    const te = v.value + G * g.value;
    return {
      value: te,
      position: F(te)
    };
  }) : [] : []), Q = b(() => X.value.some((G) => {
    let {
      label: te
    } = G;
    return !!te;
  })), re = {
    activeThumbRef: C,
    color: $(n, "color"),
    decimals: h,
    disabled: A,
    direction: $(n, "direction"),
    elevation: $(n, "elevation"),
    hasLabels: Q,
    isReversed: s,
    indexFromEnd: d,
    min: v,
    max: f,
    mousePressed: w,
    numTicks: V,
    onSliderMousedown: E,
    onSliderTouchstart: O,
    parsedTicks: X,
    parseMouseMove: x,
    position: F,
    readonly: $(n, "readonly"),
    rounded: $(n, "rounded"),
    roundValue: y,
    showTicks: Y,
    startOffset: P,
    step: g,
    thumbSize: m,
    thumbColor: I,
    thumbLabel: $(n, "thumbLabel"),
    ticks: $(n, "ticks"),
    tickSize: S,
    trackColor: _,
    trackContainerRef: T,
    trackFillColor: B,
    trackSize: k,
    vertical: c
  };
  return Be(qi, re), re;
}, kg = p({
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
  ...ne()
}, "VSliderThumb"), ei = R()({
  name: "VSliderThumb",
  directives: {
    Ripple: Bt
  },
  props: kg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = be(qi), {
      isRtl: i,
      rtlClasses: o
    } = We();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: s,
      disabled: c,
      thumbSize: d,
      thumbLabel: v,
      direction: f,
      isReversed: g,
      vertical: h,
      readonly: y,
      elevation: m,
      mousePressed: S,
      decimals: k,
      indexFromEnd: V
    } = l, A = b(() => c.value ? void 0 : m.value), {
      elevationClasses: I
    } = qe(A), {
      textColorClasses: _,
      textColorStyles: B
    } = Ue(r), {
      pageup: w,
      pagedown: P,
      end: T,
      home: C,
      left: x,
      right: D,
      down: M,
      up: L
    } = Dl, W = [w, P, T, C, x, D, M, L], J = b(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function N(E, F) {
      if (!W.includes(E.key)) return;
      E.preventDefault();
      const Y = s.value || 0.1, X = (e.max - e.min) / Y;
      if ([x, D, M, L].includes(E.key)) {
        const re = (h.value ? [i.value ? x : D, g.value ? M : L] : V.value !== i.value ? [x, L] : [D, L]).includes(E.key) ? 1 : -1, G = E.shiftKey ? 2 : E.ctrlKey ? 1 : 0;
        F = F + re * Y * J.value[G];
      } else if (E.key === C)
        F = e.min;
      else if (E.key === T)
        F = e.max;
      else {
        const Q = E.key === P ? 1 : -1;
        F = F - Q * Y * (X > 100 ? X / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, F));
    }
    function O(E) {
      const F = N(E, e.modelValue);
      F != null && a("update:modelValue", F);
    }
    return z(() => {
      const E = ee(V.value ? 100 - e.position : e.position, "%");
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && S.value
        }, e.class, o.value],
        style: [{
          "--v-slider-thumb-position": E,
          "--v-slider-thumb-size": ee(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!y.value,
        "aria-orientation": f.value,
        onKeydown: y.value ? void 0 : O
      }, [u("div", {
        class: ["v-slider-thumb__surface", _.value, I.value],
        style: {
          ...B.value
        }
      }, null), Ae(u("div", {
        class: ["v-slider-thumb__ripple", _.value],
        style: B.value
      }, null), [[ft("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), u(_i, {
        origin: "bottom center"
      }, {
        default: () => {
          var F;
          return [Ae(u("div", {
            class: "v-slider-thumb__label-container"
          }, [u("div", {
            class: ["v-slider-thumb__label"]
          }, [u("div", null, [((F = t["thumb-label"]) == null ? void 0 : F.call(t, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? k.value : 1)])])]), [[Vt, v.value && e.focused || v.value === "always"]])];
        }
      })]);
    }), {};
  }
}), xg = p({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...ne()
}, "VSliderTrack"), Is = R()({
  name: "VSliderTrack",
  props: xg(),
  emits: {},
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(qi);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: r,
      tickSize: s,
      trackColor: c,
      trackFillColor: d,
      trackSize: v,
      vertical: f,
      min: g,
      max: h,
      indexFromEnd: y
    } = a, {
      roundedClasses: m
    } = Fe(o), {
      backgroundColorClasses: S,
      backgroundColorStyles: k
    } = Ve(d), {
      backgroundColorClasses: V,
      backgroundColorStyles: A
    } = Ve(c), I = b(() => `inset-${f.value ? "block" : "inline"}-${y.value ? "end" : "start"}`), _ = b(() => f.value ? "height" : "width"), B = b(() => ({
      [I.value]: "0%",
      [_.value]: "100%"
    })), w = b(() => e.stop - e.start), P = b(() => ({
      [I.value]: ee(e.start, "%"),
      [_.value]: ee(w.value, "%")
    })), T = b(() => r.value ? (f.value ? i.value.slice().reverse() : i.value).map((x, D) => {
      var L;
      const M = x.value !== g.value && x.value !== h.value ? ee(x.position, "%") : void 0;
      return u("div", {
        key: x.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": x.position >= e.start && x.position <= e.stop,
          "v-slider-track__tick--first": x.value === g.value,
          "v-slider-track__tick--last": x.value === h.value
        }],
        style: {
          [I.value]: M
        }
      }, [(x.label || t["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((L = t["tick-label"]) == null ? void 0 : L.call(t, {
        tick: x,
        index: D
      })) ?? x.label])]);
    }) : []);
    return z(() => u("div", {
      class: ["v-slider-track", m.value, e.class],
      style: [{
        "--v-slider-track-size": ee(v.value),
        "--v-slider-tick-size": ee(s.value)
      }, e.style]
    }, [u("div", {
      class: ["v-slider-track__background", V.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...B.value,
        ...A.value
      }
    }, null), u("div", {
      class: ["v-slider-track__fill", S.value],
      style: {
        ...P.value,
        ...k.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [T.value])])), {};
  }
}), wg = p({
  ...Wn(),
  ...Cs(),
  ...Nt(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), ti = R()({
  name: "VSlider",
  props: wg(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), {
      rtlClasses: i
    } = We(), o = Vs(e), r = ie(e, "modelValue", void 0, (_) => o.roundValue(_ ?? o.min.value)), {
      min: s,
      max: c,
      mousePressed: d,
      roundValue: v,
      onSliderMousedown: f,
      onSliderTouchstart: g,
      trackContainerRef: h,
      position: y,
      hasLabels: m,
      readonly: S
    } = Ps({
      props: e,
      steps: o,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (_) => {
        let {
          value: B
        } = _;
        const w = v(B);
        r.value = w, a("end", w);
      },
      onSliderMove: (_) => {
        let {
          value: B
        } = _;
        return r.value = v(B);
      },
      getActiveThumb: () => {
        var _;
        return (_ = l.value) == null ? void 0 : _.$el;
      }
    }), {
      isFocused: k,
      focus: V,
      blur: A
    } = Dt(e), I = b(() => y(r.value));
    return z(() => {
      const _ = Ze.filterProps(e), B = !!(e.label || t.label || t.prepend);
      return u(Ze, H({
        class: ["v-slider", {
          "v-slider--has-labels": !!t["tick-label"] || m.value,
          "v-slider--focused": k.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, _, {
        focused: k.value
      }), {
        ...t,
        prepend: B ? (w) => {
          var P, T;
          return u(se, null, [((P = t.label) == null ? void 0 : P.call(t, w)) ?? (e.label ? u(zn, {
            id: w.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (T = t.prepend) == null ? void 0 : T.call(t, w)]);
        } : void 0,
        default: (w) => {
          let {
            id: P,
            messagesId: T
          } = w;
          return u("div", {
            class: "v-slider__container",
            onMousedown: S.value ? void 0 : f,
            onTouchstartPassive: S.value ? void 0 : g
          }, [u("input", {
            id: P.value,
            name: e.name || P.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(Is, {
            ref: h,
            start: 0,
            stop: I.value
          }, {
            "tick-label": t["tick-label"]
          }), u(ei, {
            ref: l,
            "aria-describedby": T.value,
            focused: k.value,
            min: s.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (C) => r.value = C,
            position: I.value,
            elevation: e.elevation,
            onFocus: V,
            onBlur: A,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Cg = p({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...ne()
}, "VColorPickerPreview"), Vg = mt({
  name: "VColorPickerPreview",
  props: Cg(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = new AbortController();
    Xc(() => a.abort());
    async function l() {
      if (!ho) return;
      const i = new window.EyeDropper();
      try {
        const o = await i.open({
          signal: a.signal
        }), r = ua(vt(o.sRGBHex));
        t("update:color", {
          ...e.color ?? Dn,
          ...r
        });
      } catch {
      }
    }
    return z(() => {
      var i, o;
      return u("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [ho && u("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [u(he, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), u("div", {
        class: "v-color-picker-preview__dot"
      }, [u("div", {
        style: {
          background: Wr(e.color ?? Dn)
        }
      }, null)]), u("div", {
        class: "v-color-picker-preview__sliders"
      }, [u(ti, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? Dn,
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
      }, null), !e.hideAlpha && u(ti, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? Dn,
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
}), Pg = {
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
}, Ig = {
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
}, _g = {
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
}, Ag = {
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
}, Tg = {
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
}, Bg = {
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
}, Dg = {
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
}, pg = {
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
}, Mg = {
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
}, Eg = {
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
}, Fg = {
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
}, $g = {
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
}, Lg = {
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
}, Og = {
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
}, Rg = {
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
}, Ng = {
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
}, Hg = {
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
}, zg = {
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
}, Wg = {
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
}, jg = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Yg = {
  red: Pg,
  pink: Ig,
  purple: _g,
  deepPurple: Ag,
  indigo: Tg,
  blue: Bg,
  lightBlue: Dg,
  cyan: pg,
  teal: Mg,
  green: Eg,
  lightGreen: Fg,
  lime: $g,
  yellow: Lg,
  amber: Og,
  orange: Rg,
  deepOrange: Ng,
  brown: Hg,
  blueGrey: zg,
  grey: Wg,
  shades: jg
}, Gg = p({
  swatches: {
    type: Array,
    default: () => Ug(Yg)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...ne()
}, "VColorPickerSwatches");
function Ug(e) {
  return Object.keys(e).map((n) => {
    const t = e[n];
    return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent];
  });
}
const Kg = mt({
  name: "VColorPickerSwatches",
  props: Gg(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    return z(() => u("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: ee(e.maxHeight)
      }, e.style]
    }, [u("div", null, [e.swatches.map((a) => u("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = vt(l), o = ua(i), r = zr(i);
      return u("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && t("update:color", o)
      }, [u("div", {
        style: {
          background: r
        }
      }, [e.color && nt(e.color, o) ? u(ke, {
        size: "x-small",
        icon: "$success",
        color: Hd(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), rl = p({
  color: String,
  ...st(),
  ...ne(),
  ...Re(),
  ...je(),
  ...Rt(),
  ...Nn(),
  ...pe(),
  ...fe(),
  ...ye()
}, "VSheet"), dn = R()({
  name: "VSheet",
  props: rl(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve($(e, "color")), {
      borderClasses: o
    } = ht(e), {
      dimensionStyles: r
    } = Ne(e), {
      elevationClasses: s
    } = qe(e), {
      locationStyles: c
    } = Cn(e), {
      positionClasses: d
    } = Hn(e), {
      roundedClasses: v
    } = Fe(e);
    return z(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, o.value, s.value, d.value, v.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, t)), {};
  }
}), qg = p({
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
    validator: (e) => Object.keys(ln).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(ln),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(ln).includes(n))
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
  ...Te(rl({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), Xg = mt({
  name: "VColorPicker",
  props: qg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const n = ie(e, "mode"), t = j(null), a = ie(e, "modelValue", void 0, (s) => {
      if (s == null || s === "") return null;
      let c;
      try {
        c = ua(vt(s));
      } catch (d) {
        return xt(d), null;
      }
      return c;
    }, (s) => s ? vg(s, e.modelValue) : null), l = b(() => a.value ? {
      ...a.value,
      h: t.value ?? a.value.h
    } : null), {
      rtlClasses: i
    } = We();
    let o = !0;
    Z(a, (s) => {
      if (!o) {
        o = !0;
        return;
      }
      s && (t.value = s.h);
    }, {
      immediate: !0
    });
    const r = (s) => {
      o = !1, t.value = s.h, a.value = s;
    };
    return ra(() => {
      e.modes.includes(n.value) || (n.value = e.modes[0]);
    }), Me({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), z(() => {
      const s = dn.filterProps(e);
      return u(dn, H({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Wr({
            ...l.value ?? Dn,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && u(cg, {
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
        }, [!e.hideSliders && u(Vg, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !n.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(bg, {
          key: "edit",
          modes: e.modes,
          mode: n.value,
          "onUpdate:mode": (c) => n.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(Kg, {
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
});
function Zg(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? u(se, null, [u("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, n)]), u("span", {
    class: "v-combobox__mask"
  }, [e.substr(n, t)]), u("span", {
    class: "v-combobox__unmask"
  }, [e.substr(n + t)])]) : e;
}
const Jg = p({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...ba({
    filterKeys: ["title"]
  }),
  ...Gi({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Te(ya({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Pt({
    transition: !1
  })
}, "VCombobox"), Qg = R()({
  name: "VCombobox",
  props: Jg(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    var ue;
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = De(), i = j(), o = K(!1), r = K(!0), s = K(!1), c = j(), d = j(), v = ie(e, "menu"), f = b({
      get: () => v.value,
      set: (U) => {
        var ae;
        v.value && !U && ((ae = c.value) != null && ae.ΨopenChildren.size) || (v.value = U);
      }
    }), g = K(-1);
    let h = !1;
    const y = b(() => {
      var U;
      return (U = i.value) == null ? void 0 : U.color;
    }), m = b(() => f.value ? e.closeText : e.openText), {
      items: S,
      transformIn: k,
      transformOut: V
    } = Ri(e), {
      textColorClasses: A,
      textColorStyles: I
    } = Ue(y), _ = ie(e, "modelValue", [], (U) => k(_e(U)), (U) => {
      const ae = V(U);
      return e.multiple ? ae : ae[0] ?? null;
    }), B = el(e), w = b(() => !!(e.chips || a.chip)), P = b(() => w.value || !!a.selection), T = K(!e.multiple && !P.value ? ((ue = _.value[0]) == null ? void 0 : ue.title) ?? "" : ""), C = b({
      get: () => T.value,
      set: (U) => {
        var ae;
        if (T.value = U ?? "", !e.multiple && !P.value && (_.value = [Ht(e, U)]), U && e.multiple && ((ae = e.delimiters) != null && ae.length)) {
          const de = U.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          de.length > 1 && (de.forEach((ce) => {
            ce = ce.trim(), ce && le(Ht(e, ce));
          }), T.value = "");
        }
        U || (g.value = -1), r.value = !U;
      }
    }), x = b(() => typeof e.counterValue == "function" ? e.counterValue(_.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? _.value.length : C.value.length);
    Z(T, (U) => {
      h ? xe(() => h = !1) : o.value && !f.value && (f.value = !0), t("update:search", U);
    }), Z(_, (U) => {
      var ae;
      !e.multiple && !P.value && (T.value = ((ae = U[0]) == null ? void 0 : ae.title) ?? "");
    });
    const {
      filteredItems: D,
      getMatches: M
    } = Sa(e, S, () => r.value ? "" : C.value), L = b(() => e.hideSelected ? D.value.filter((U) => !_.value.some((ae) => ae.value === U.value)) : D.value), W = b(() => _.value.map((U) => U.value)), J = b(() => {
      var ae;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && C.value === ((ae = L.value[0]) == null ? void 0 : ae.title)) && L.value.length > 0 && !r.value && !s.value;
    }), N = b(() => e.hideNoData && !L.value.length || B.isReadonly.value || B.isDisabled.value), O = j(), E = Yi(O, i);
    function F(U) {
      h = !0, e.openOnClear && (f.value = !0);
    }
    function Y() {
      N.value || (f.value = !0);
    }
    function X(U) {
      N.value || (o.value && (U.preventDefault(), U.stopPropagation()), f.value = !f.value);
    }
    function Q(U) {
      var ae;
      U.key !== " " && En(U) && ((ae = i.value) == null || ae.focus());
    }
    function re(U) {
      var ce;
      if (sd(U) || B.isReadonly.value) return;
      const ae = i.value.selectionStart, de = _.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(U.key) && U.preventDefault(), ["Enter", "ArrowDown"].includes(U.key) && (f.value = !0), ["Escape"].includes(U.key) && (f.value = !1), ["Enter", "Escape", "Tab"].includes(U.key) && (J.value && ["Enter", "Tab"].includes(U.key) && !_.value.some((ve) => {
        let {
          value: Pe
        } = ve;
        return Pe === L.value[0].value;
      }) && le(D.value[0]), r.value = !0), U.key === "ArrowDown" && J.value && ((ce = O.value) == null || ce.focus("next")), U.key === "Enter" && C.value && (le(Ht(e, C.value)), P.value && (T.value = "")), ["Backspace", "Delete"].includes(U.key)) {
        if (!e.multiple && P.value && _.value.length > 0 && !C.value) return le(_.value[0], !1);
        if (~g.value) {
          U.preventDefault();
          const ve = g.value;
          le(_.value[g.value], !1), g.value = ve >= de - 1 ? de - 2 : ve;
        } else U.key === "Backspace" && !C.value && (g.value = de - 1);
        return;
      }
      if (e.multiple)
        if (U.key === "ArrowLeft") {
          if (g.value < 0 && ae > 0) return;
          const ve = g.value > -1 ? g.value - 1 : de - 1;
          _.value[ve] ? g.value = ve : (g.value = -1, i.value.setSelectionRange(C.value.length, C.value.length));
        } else if (U.key === "ArrowRight") {
          if (g.value < 0) return;
          const ve = g.value + 1;
          _.value[ve] ? g.value = ve : (g.value = -1, i.value.setSelectionRange(0, 0));
        } else ~g.value && En(U) && (g.value = -1);
    }
    function G() {
      var U;
      e.eager && ((U = d.value) == null || U.calculateVisibleItems());
    }
    function te() {
      var U;
      o.value && (r.value = !0, (U = i.value) == null || U.focus());
    }
    function le(U) {
      let ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!U || U.props.disabled))
        if (e.multiple) {
          const de = _.value.findIndex((ve) => (e.valueComparator || nt)(ve.value, U.value)), ce = ae ?? !~de;
          if (~de) {
            const ve = ce ? [..._.value, U] : [..._.value];
            ve.splice(de, 1), _.value = ve;
          } else ce && (_.value = [..._.value, U]);
          e.clearOnSelect && (C.value = "");
        } else {
          const de = ae !== !1;
          _.value = de ? [U] : [], T.value = de && !P.value ? U.title : "", xe(() => {
            f.value = !1, r.value = !0;
          });
        }
    }
    function Ce(U) {
      o.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function ge(U) {
      s.value = !1;
    }
    function q(U) {
      (U == null || U === "" && !e.multiple && !P.value) && (_.value = []);
    }
    return Z(o, (U, ae) => {
      if (!(U || U === ae) && (g.value = -1, f.value = !1, C.value)) {
        if (e.multiple) {
          le(Ht(e, C.value));
          return;
        }
        if (!P.value) return;
        _.value.some((de) => {
          let {
            title: ce
          } = de;
          return ce === C.value;
        }) ? T.value = "" : le(Ht(e, C.value));
      }
    }), Z(f, () => {
      if (!e.hideSelected && f.value && _.value.length) {
        const U = L.value.findIndex((ae) => _.value.some((de) => (e.valueComparator || nt)(de.value, ae.value)));
        Se && window.requestAnimationFrame(() => {
          var ae;
          U >= 0 && ((ae = d.value) == null || ae.scrollToIndex(U));
        });
      }
    }), Z(() => e.items, (U, ae) => {
      f.value || o.value && !ae.length && U.length && (f.value = !0);
    }), z(() => {
      const U = !!(!e.hideNoData || L.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ae = _.value.length > 0, de = Lt.filterProps(e);
      return u(Lt, H({
        ref: i
      }, de, {
        modelValue: C.value,
        "onUpdate:modelValue": [(ce) => C.value = ce, q],
        focused: o.value,
        "onUpdate:focused": (ce) => o.value = ce,
        validationValue: _.externalValue,
        counterValue: x.value,
        dirty: ae,
        class: ["v-combobox", {
          "v-combobox--active-menu": f.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!P.value,
          "v-combobox--selecting-index": g.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: B.isReadonly.value,
        placeholder: ae ? void 0 : e.placeholder,
        "onClick:clear": F,
        "onMousedown:control": Y,
        onKeydown: re
      }), {
        ...a,
        default: () => u(se, null, [u(un, H({
          ref: c,
          modelValue: f.value,
          "onUpdate:modelValue": (ce) => f.value = ce,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: N.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: G,
          onAfterLeave: te
        }, e.menuProps), {
          default: () => [U && u(nl, H({
            ref: O,
            selected: W.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ce) => ce.preventDefault(),
            onKeydown: Q,
            onFocusin: Ce,
            onFocusout: ge,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, E, e.listProps), {
            default: () => {
              var ce, ve, Pe;
              return [(ce = a["prepend-item"]) == null ? void 0 : ce.call(a), !L.value.length && !e.hideNoData && (((ve = a["no-data"]) == null ? void 0 : ve.call(a)) ?? u($t, {
                key: "no-data",
                title: l(e.noDataText)
              }, null)), u(ll, {
                ref: d,
                renderless: !0,
                items: L.value
              }, {
                default: (rt) => {
                  var qt;
                  let {
                    item: Ie,
                    index: pt,
                    itemRef: Qe
                  } = rt;
                  const Kt = H(Ie.props, {
                    ref: Qe,
                    key: Ie.value,
                    active: J.value && pt === 0 ? !0 : void 0,
                    onClick: () => le(Ie, null)
                  });
                  return ((qt = a.item) == null ? void 0 : qt.call(a, {
                    item: Ie,
                    index: pt,
                    props: Kt
                  })) ?? u($t, H(Kt, {
                    role: "option"
                  }), {
                    prepend: (ka) => {
                      let {
                        isSelected: xa
                      } = ka;
                      return u(se, null, [e.multiple && !e.hideSelected ? u(Ft, {
                        key: Ie.value,
                        modelValue: xa,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Ie.props.prependAvatar && u(bt, {
                        image: Ie.props.prependAvatar
                      }, null), Ie.props.prependIcon && u(ke, {
                        icon: Ie.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var ka, xa;
                      return r.value ? Ie.title : Zg(Ie.title, (ka = M(Ie)) == null ? void 0 : ka.title, ((xa = C.value) == null ? void 0 : xa.length) ?? 0);
                    }
                  });
                }
              }), (Pe = a["append-item"]) == null ? void 0 : Pe.call(a)];
            }
          })]
        }), _.value.map((ce, ve) => {
          function Pe(Qe) {
            Qe.stopPropagation(), Qe.preventDefault(), le(ce, !1);
          }
          const rt = {
            "onClick:close": Pe,
            onKeydown(Qe) {
              Qe.key !== "Enter" && Qe.key !== " " || (Qe.preventDefault(), Qe.stopPropagation(), Pe(Qe));
            },
            onMousedown(Qe) {
              Qe.preventDefault(), Qe.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Ie = w.value ? !!a.chip : !!a.selection, pt = Ie ? Ya(w.value ? a.chip({
            item: ce,
            index: ve,
            props: rt
          }) : a.selection({
            item: ce,
            index: ve
          })) : void 0;
          if (!(Ie && !pt))
            return u("div", {
              key: ce.value,
              class: ["v-combobox__selection", ve === g.value && ["v-combobox__selection--selected", A.value]],
              style: ve === g.value ? I.value : {}
            }, [w.value ? a.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ce.title
                }
              }
            }, {
              default: () => [pt]
            }) : u(jn, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ce.title,
              disabled: ce.props.disabled
            }, rt), null) : pt ?? u("span", {
              class: "v-combobox__selection-text"
            }, [ce.title, e.multiple && ve < _.value.length - 1 && u("span", {
              class: "v-combobox__selection-comma"
            }, [wt(",")])])]);
        })]),
        "append-inner": function() {
          var rt;
          for (var ce = arguments.length, ve = new Array(ce), Pe = 0; Pe < ce; Pe++)
            ve[Pe] = arguments[Pe];
          return u(se, null, [(rt = a["append-inner"]) == null ? void 0 : rt.call(a, ...ve), (!e.hideNoData || e.items.length) && e.menuIcon ? u(ke, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: X,
            onClick: Er,
            "aria-label": l(m.value),
            title: l(m.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), yt({
      isFocused: o,
      isPristine: r,
      menu: f,
      search: C,
      selectionIndex: g,
      filteredItems: D,
      select: le
    }, i);
  }
}), ul = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function eh(e, n, t) {
  const a = [];
  let l = [];
  const i = _s(e), o = As(e), r = t ?? ul[n.slice(-2).toUpperCase()] ?? 0, s = (i.getDay() - r + 7) % 7, c = (o.getDay() - r + 7) % 7;
  for (let d = 0; d < s; d++) {
    const v = new Date(i);
    v.setDate(v.getDate() - (s - d)), l.push(v);
  }
  for (let d = 1; d <= o.getDate(); d++) {
    const v = new Date(e.getFullYear(), e.getMonth(), d);
    l.push(v), l.length === 7 && (a.push(l), l = []);
  }
  for (let d = 1; d < 7 - c; d++) {
    const v = new Date(o);
    v.setDate(v.getDate() + d), l.push(v);
  }
  return l.length > 0 && a.push(l), a;
}
function th(e, n, t) {
  const a = t ?? ul[n.slice(-2).toUpperCase()] ?? 0, l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function nh(e, n) {
  const t = new Date(e), a = ((ul[n.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; t.getDay() !== a; )
    t.setDate(t.getDate() + 1);
  return t;
}
function _s(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function As(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function ah(e) {
  const n = e.split("-").map(Number);
  return new Date(n[0], n[1] - 1, n[2]);
}
const lh = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Ts(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let n;
    if (lh.test(e))
      return ah(e);
    if (n = Date.parse(e), !isNaN(n)) return new Date(n);
  }
  return null;
}
const lr = new Date(2e3, 0, 2);
function ih(e, n) {
  const t = n ?? ul[e.slice(-2).toUpperCase()] ?? 0;
  return dt(7).map((a) => {
    const l = new Date(lr);
    return l.setDate(lr.getDate() + t + a), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(l);
  });
}
function oh(e, n, t, a) {
  const l = Ts(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[n];
  if (typeof i == "function")
    return i(l, n, t);
  let o = {};
  switch (n) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(t, {
        month: "long"
      }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(t).format(l.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    default:
      o = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(t, o).format(l);
}
function rh(e, n) {
  const t = e.toJsDate(n), a = t.getFullYear(), l = wo(String(t.getMonth() + 1), 2, "0"), i = wo(String(t.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function uh(e) {
  const [n, t, a] = e.split("-").map(Number);
  return new Date(n, t - 1, a);
}
function sh(e, n) {
  const t = new Date(e);
  return t.setMinutes(t.getMinutes() + n), t;
}
function ch(e, n) {
  const t = new Date(e);
  return t.setHours(t.getHours() + n), t;
}
function dh(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n), t;
}
function vh(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n * 7), t;
}
function fh(e, n) {
  const t = new Date(e);
  return t.setDate(1), t.setMonth(t.getMonth() + n), t;
}
function mh(e) {
  return e.getFullYear();
}
function gh(e) {
  return e.getMonth();
}
function hh(e) {
  return e.getDate();
}
function yh(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function bh(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Sh(e) {
  return e.getHours();
}
function kh(e) {
  return e.getMinutes();
}
function xh(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function wh(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Ch(e, n) {
  return Oa(e, n[0]) && Ih(e, n[1]);
}
function Vh(e) {
  const n = new Date(e);
  return n instanceof Date && !isNaN(n.getTime());
}
function Oa(e, n) {
  return e.getTime() > n.getTime();
}
function Ph(e, n) {
  return Oa(ni(e), ni(n));
}
function Ih(e, n) {
  return e.getTime() < n.getTime();
}
function ir(e, n) {
  return e.getTime() === n.getTime();
}
function _h(e, n) {
  return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Ah(e, n) {
  return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Th(e, n) {
  return e.getFullYear() === n.getFullYear();
}
function Bh(e, n, t) {
  const a = new Date(e), l = new Date(n);
  switch (t) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Dh(e, n) {
  const t = new Date(e);
  return t.setHours(n), t;
}
function ph(e, n) {
  const t = new Date(e);
  return t.setMinutes(n), t;
}
function Mh(e, n) {
  const t = new Date(e);
  return t.setMonth(n), t;
}
function Eh(e, n) {
  const t = new Date(e);
  return t.setDate(n), t;
}
function Fh(e, n) {
  const t = new Date(e);
  return t.setFullYear(n), t;
}
function ni(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function $h(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Lh {
  constructor(n) {
    this.locale = n.locale, this.formats = n.formats;
  }
  date(n) {
    return Ts(n);
  }
  toJsDate(n) {
    return n;
  }
  toISO(n) {
    return rh(this, n);
  }
  parseISO(n) {
    return uh(n);
  }
  addMinutes(n, t) {
    return sh(n, t);
  }
  addHours(n, t) {
    return ch(n, t);
  }
  addDays(n, t) {
    return dh(n, t);
  }
  addWeeks(n, t) {
    return vh(n, t);
  }
  addMonths(n, t) {
    return fh(n, t);
  }
  getWeekArray(n, t) {
    return eh(n, this.locale, t ? Number(t) : void 0);
  }
  startOfWeek(n, t) {
    return th(n, this.locale, t ? Number(t) : void 0);
  }
  endOfWeek(n) {
    return nh(n, this.locale);
  }
  startOfMonth(n) {
    return _s(n);
  }
  endOfMonth(n) {
    return As(n);
  }
  format(n, t) {
    return oh(n, t, this.locale, this.formats);
  }
  isEqual(n, t) {
    return ir(n, t);
  }
  isValid(n) {
    return Vh(n);
  }
  isWithinRange(n, t) {
    return Ch(n, t);
  }
  isAfter(n, t) {
    return Oa(n, t);
  }
  isAfterDay(n, t) {
    return Ph(n, t);
  }
  isBefore(n, t) {
    return !Oa(n, t) && !ir(n, t);
  }
  isSameDay(n, t) {
    return _h(n, t);
  }
  isSameMonth(n, t) {
    return Ah(n, t);
  }
  isSameYear(n, t) {
    return Th(n, t);
  }
  setMinutes(n, t) {
    return ph(n, t);
  }
  setHours(n, t) {
    return Dh(n, t);
  }
  setMonth(n, t) {
    return Mh(n, t);
  }
  setDate(n, t) {
    return Eh(n, t);
  }
  setYear(n, t) {
    return Fh(n, t);
  }
  getDiff(n, t, a) {
    return Bh(n, t, a);
  }
  getWeekdays(n) {
    return ih(this.locale, n ? Number(n) : void 0);
  }
  getYear(n) {
    return mh(n);
  }
  getMonth(n) {
    return gh(n);
  }
  getDate(n) {
    return hh(n);
  }
  getNextMonth(n) {
    return yh(n);
  }
  getPreviousMonth(n) {
    return bh(n);
  }
  getHours(n) {
    return Sh(n);
  }
  getMinutes(n) {
    return kh(n);
  }
  startOfDay(n) {
    return ni(n);
  }
  endOfDay(n) {
    return $h(n);
  }
  startOfYear(n) {
    return xh(n);
  }
  endOfYear(n) {
    return wh(n);
  }
}
const Bs = Symbol.for("vuetify:date-options"), or = Symbol.for("vuetify:date-adapter");
function Oh(e, n) {
  const t = et({
    adapter: Lh,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: t,
    instance: Ds(t, n)
  };
}
function Ds(e, n) {
  const t = ut(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[n.current.value] ?? n.current.value,
    formats: e.formats
  }) : e.adapter);
  return Z(n.current, (a) => {
    t.locale = e.locale[a] ?? a ?? t.locale;
  }), t;
}
function Gn() {
  const e = be(Bs);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = De();
  return Ds(e, n);
}
function Rh(e, n) {
  const t = e.toJsDate(n);
  let a = t.getFullYear(), l = new Date(a, 0, 1);
  if (t < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const r = new Date(a + 1, 0, 1);
    t >= r && (a = a + 1, l = r);
  }
  const i = Math.abs(t.getTime() - l.getTime()), o = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(o / 7) + 1;
}
const ps = p({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit"), ai = R()({
  name: "VConfirmEdit",
  props: ps(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), i = j();
    $e(() => {
      i.value = structuredClone(Le(l.value));
    });
    const {
      t: o
    } = De(), r = b(() => nt(l.value, i.value));
    function s() {
      l.value = i.value, t("save", i.value);
    }
    function c() {
      i.value = structuredClone(Le(l.value)), t("cancel");
    }
    function d(f) {
      return u(se, null, [u(he, H({
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: o(e.cancelText)
      }, f), null), u(he, H({
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: s,
        text: o(e.okText)
      }, f), null)]);
    }
    let v = !1;
    return z(() => {
      var f;
      return u(se, null, [(f = a.default) == null ? void 0 : f.call(a, {
        model: i,
        save: s,
        cancel: c,
        isPristine: r.value,
        get actions() {
          return v = !0, d;
        }
      }), !v && d()]);
    }), {
      save: s,
      cancel: c,
      isPristine: r
    };
  }
}), Ms = p({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Es = Symbol.for("vuetify:datatable:expanded");
function sl(e) {
  const n = $(e, "expandOnClick"), t = ie(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const c = new Set(t.value);
    s ? c.add(r.value) : c.delete(r.value), t.value = c;
  }
  function l(r) {
    return t.value.has(r.value);
  }
  function i(r) {
    a(r, !l(r));
  }
  const o = {
    expand: a,
    expanded: t,
    expandOnClick: n,
    isExpanded: l,
    toggleExpand: i
  };
  return Be(Es, o), o;
}
function Fs() {
  const e = be(Es);
  if (!e) throw new Error("foo");
  return e;
}
const Xi = p({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), $s = Symbol.for("vuetify:data-table-group");
function Zi(e) {
  return {
    groupBy: ie(e, "groupBy")
  };
}
function cl(e) {
  const {
    disableSort: n,
    groupBy: t,
    sortBy: a
  } = e, l = j(/* @__PURE__ */ new Set()), i = b(() => t.value.map((d) => ({
    ...d,
    order: d.order ?? !1
  })).concat(n != null && n.value ? [] : a.value));
  function o(d) {
    return l.value.has(d.id);
  }
  function r(d) {
    const v = new Set(l.value);
    o(d) ? v.delete(d.id) : v.add(d.id), l.value = v;
  }
  function s(d) {
    function v(f) {
      const g = [];
      for (const h of f.items)
        "type" in h && h.type === "group" ? g.push(...v(h)) : g.push(h);
      return [...new Set(g)];
    }
    return v({
      items: d
    });
  }
  const c = {
    sortByWithGroups: i,
    toggleGroup: r,
    opened: l,
    groupBy: t,
    extractRows: s,
    isGroupOpen: o
  };
  return Be($s, c), c;
}
function Ls() {
  const e = be($s);
  if (!e) throw new Error("Missing group!");
  return e;
}
function Nh(e, n) {
  if (!e.length) return [];
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = on(a.raw, n);
    t.has(l) || t.set(l, []), t.get(l).push(a);
  }
  return t;
}
function Os(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length) return [];
  const l = Nh(e, n[0]), i = [], o = n.slice(1);
  return l.forEach((r, s) => {
    const c = n[0], d = `${a}_${c}_${s}`;
    i.push({
      depth: t,
      id: d,
      key: c,
      value: s,
      items: o.length ? Os(r, o, t + 1, d) : r,
      type: "group"
    });
  }), i;
}
function Rs(e, n) {
  const t = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...Rs(a.items, n))) : t.push(a);
  return t;
}
function dl(e, n, t) {
  return {
    flatItems: b(() => {
      if (!n.value.length) return e.value;
      const l = Os(e.value, n.value.map((i) => i.key));
      return Rs(l, t.value);
    })
  };
}
function vl(e) {
  let {
    page: n,
    itemsPerPage: t,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = Ee("VDataTable"), r = b(() => ({
    page: n.value,
    itemsPerPage: t.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  }));
  let s = null;
  Z(r, () => {
    nt(s, r.value) || (s && s.search !== r.value.search && (n.value = 1), o.emit("update:options", r.value), s = r.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Ji = p({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), Ns = Symbol.for("vuetify:data-table-pagination");
function Qi(e) {
  const n = ie(e, "page", void 0, (a) => +(a ?? 1)), t = ie(e, "itemsPerPage", void 0, (a) => +(a ?? 10));
  return {
    page: n,
    itemsPerPage: t
  };
}
function eo(e) {
  const {
    page: n,
    itemsPerPage: t,
    itemsLength: a
  } = e, l = b(() => t.value === -1 ? 0 : t.value * (n.value - 1)), i = b(() => t.value === -1 ? a.value : Math.min(a.value, l.value + t.value)), o = b(() => t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value));
  Z([n, o], () => {
    n.value > o.value && (n.value = o.value);
  });
  function r(f) {
    t.value = f, n.value = 1;
  }
  function s() {
    n.value = Oe(n.value + 1, 1, o.value);
  }
  function c() {
    n.value = Oe(n.value - 1, 1, o.value);
  }
  function d(f) {
    n.value = Oe(f, 1, o.value);
  }
  const v = {
    page: n,
    itemsPerPage: t,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: c,
    setPage: d,
    setItemsPerPage: r
  };
  return Be(Ns, v), v;
}
function Hh() {
  const e = be(Ns);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Hs(e) {
  const n = Ee("usePaginatedItems"), {
    items: t,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = b(() => i.value <= 0 ? t.value : t.value.slice(a.value, l.value));
  return Z(o, (r) => {
    n.emit("update:currentItems", r);
  }, {
    immediate: !0
  }), {
    paginatedItems: o
  };
}
const zh = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: n,
      value: t
    } = e;
    return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: n
    } = e;
    return n;
  }
}, zs = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      currentPage: t,
      selected: a
    } = e;
    return zs.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Ws = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      allItems: t,
      selected: a
    } = e;
    return Ws.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, js = p({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: nt
  }
}, "DataTable-select"), Ys = Symbol.for("vuetify:data-table-selection");
function fl(e, n) {
  let {
    allItems: t,
    currentPage: a
  } = n;
  const l = ie(e, "modelValue", e.modelValue, (S) => new Set(_e(S).map((k) => {
    var V;
    return ((V = t.value.find((A) => e.valueComparator(k, A.value))) == null ? void 0 : V.value) ?? k;
  })), (S) => [...S.values()]), i = b(() => t.value.filter((S) => S.selectable)), o = b(() => a.value.filter((S) => S.selectable)), r = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return zh;
      case "all":
        return Ws;
      case "page":
      default:
        return zs;
    }
  });
  function s(S) {
    return _e(S).every((k) => l.value.has(k.value));
  }
  function c(S) {
    return _e(S).some((k) => l.value.has(k.value));
  }
  function d(S, k) {
    const V = r.value.select({
      items: S,
      value: k,
      selected: new Set(l.value)
    });
    l.value = V;
  }
  function v(S) {
    d([S], !s([S]));
  }
  function f(S) {
    const k = r.value.selectAll({
      value: S,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = k;
  }
  const g = b(() => l.value.size > 0), h = b(() => {
    const S = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!S.length && s(S);
  }), y = b(() => r.value.showSelectAll), m = {
    toggleSelect: v,
    select: d,
    selectAll: f,
    isSelected: s,
    isSomeSelected: c,
    someSelected: g,
    allSelected: h,
    showSelectAll: y
  };
  return Be(Ys, m), m;
}
function ml() {
  const e = be(Ys);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Gs = p({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), Us = Symbol.for("vuetify:data-table-sort");
function gl(e) {
  const n = ie(e, "sortBy"), t = $(e, "mustSort"), a = $(e, "multiSort");
  return {
    sortBy: n,
    mustSort: t,
    multiSort: a
  };
}
function hl(e) {
  const {
    sortBy: n,
    mustSort: t,
    multiSort: a,
    page: l
  } = e, i = (s) => {
    if (s.key == null) return;
    let c = n.value.map((v) => ({
      ...v
    })) ?? [];
    const d = c.find((v) => v.key === s.key);
    d ? d.order === "desc" ? t.value && c.length === 1 ? d.order = "asc" : c = c.filter((v) => v.key !== s.key) : d.order = "desc" : a.value ? c.push({
      key: s.key,
      order: "asc"
    }) : c = [{
      key: s.key,
      order: "asc"
    }], n.value = c, l && (l.value = 1);
  };
  function o(s) {
    return !!n.value.find((c) => c.key === s.key);
  }
  const r = {
    sortBy: n,
    toggleSort: i,
    isSorted: o
  };
  return Be(Us, r), r;
}
function Ks() {
  const e = be(Us);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function to(e, n, t, a) {
  const l = De();
  return {
    sortedItems: b(() => {
      var o, r;
      return t.value.length ? Wh(n.value, t.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value
        },
        sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
      }) : n.value;
    })
  };
}
function Wh(e, n, t, a) {
  const l = new Intl.Collator(t, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a != null && a.transform ? a.transform(o) : o]).sort((o, r) => {
    var s, c;
    for (let d = 0; d < n.length; d++) {
      let v = !1;
      const f = n[d].key, g = n[d].order ?? "asc";
      if (g === !1) continue;
      let h = on(o[1], f), y = on(r[1], f), m = o[0].raw, S = r[0].raw;
      if (g === "desc" && ([h, y] = [y, h], [m, S] = [S, m]), (s = a == null ? void 0 : a.sortRawFunctions) != null && s[f]) {
        const k = a.sortRawFunctions[f](m, S);
        if (k == null) continue;
        if (v = !0, k) return k;
      }
      if ((c = a == null ? void 0 : a.sortFunctions) != null && c[f]) {
        const k = a.sortFunctions[f](h, y);
        if (k == null) continue;
        if (v = !0, k) return k;
      }
      if (!v) {
        if (h instanceof Date && y instanceof Date)
          return h.getTime() - y.getTime();
        if ([h, y] = [h, y].map((k) => k != null ? k.toString().toLocaleLowerCase() : k), h !== y)
          return Va(h) && Va(y) ? 0 : Va(h) ? -1 : Va(y) ? 1 : !isNaN(h) && !isNaN(y) ? Number(h) - Number(y) : l.compare(h, y);
      }
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const jh = p({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function Yh(e, n) {
  const t = e.returnObject ? n : ze(n, e.itemValue), a = ze(n, e.itemSelectable, !0);
  return {
    type: "item",
    value: t,
    selectable: a,
    raw: n
  };
}
function Gh(e, n) {
  const t = [];
  for (const a of n)
    t.push(Yh(e, a));
  return t;
}
function Uh(e) {
  return {
    items: b(() => Gh(e, e.items))
  };
}
const Kh = p({
  search: String,
  loading: Boolean,
  ...ne(),
  ...jh(),
  ...js(),
  ...Gs(),
  ...Ji({
    itemsPerPage: 5
  }),
  ...Ms(),
  ...Xi(),
  ...ba(),
  ...fe(),
  ...Pt({
    transition: {
      component: Qn,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), qh = R()({
  name: "VDataIterator",
  props: Kh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "groupBy"), l = $(e, "search"), {
      items: i
    } = Uh(e), {
      filteredItems: o
    } = Sa(e, i, l, {
      transform: (F) => F.raw
    }), {
      sortBy: r,
      multiSort: s,
      mustSort: c
    } = gl(e), {
      page: d,
      itemsPerPage: v
    } = Qi(e), {
      toggleSort: f
    } = hl({
      sortBy: r,
      multiSort: s,
      mustSort: c,
      page: d
    }), {
      sortByWithGroups: g,
      opened: h,
      extractRows: y,
      isGroupOpen: m,
      toggleGroup: S
    } = cl({
      groupBy: a,
      sortBy: r
    }), {
      sortedItems: k
    } = to(e, o, g, {
      transform: (F) => F.raw
    }), {
      flatItems: V
    } = dl(k, a, h), A = b(() => V.value.length), {
      startIndex: I,
      stopIndex: _,
      pageCount: B,
      prevPage: w,
      nextPage: P,
      setItemsPerPage: T,
      setPage: C
    } = eo({
      page: d,
      itemsPerPage: v,
      itemsLength: A
    }), {
      paginatedItems: x
    } = Hs({
      items: V,
      startIndex: I,
      stopIndex: _,
      itemsPerPage: v
    }), D = b(() => y(x.value)), {
      isSelected: M,
      select: L,
      selectAll: W,
      toggleSelect: J
    } = fl(e, {
      allItems: i,
      currentPage: D
    }), {
      isExpanded: N,
      toggleExpand: O
    } = sl(e);
    vl({
      page: d,
      itemsPerPage: v,
      sortBy: r,
      groupBy: a,
      search: l
    });
    const E = b(() => ({
      page: d.value,
      itemsPerPage: v.value,
      sortBy: r.value,
      pageCount: B.value,
      toggleSort: f,
      prevPage: w,
      nextPage: P,
      setPage: C,
      setItemsPerPage: T,
      isSelected: M,
      select: L,
      selectAll: W,
      toggleSelect: J,
      isExpanded: N,
      toggleExpand: O,
      isGroupOpen: m,
      toggleGroup: S,
      items: D.value,
      groupedItems: x.value
    }));
    return z(() => u(e.tag, {
      class: ["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class],
      style: e.style
    }, {
      default: () => {
        var F, Y;
        return [(F = t.header) == null ? void 0 : F.call(t, E.value), u(tt, {
          transition: e.transition
        }, {
          default: () => {
            var X, Q;
            return [e.loading ? u(da, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (re) => {
                var G;
                return (G = t.loader) == null ? void 0 : G.call(t, re);
              }
            }) : u("div", {
              key: "items"
            }, [x.value.length ? (Q = t.default) == null ? void 0 : Q.call(t, E.value) : (X = t["no-data"]) == null ? void 0 : X.call(t)])];
          }
        }), (Y = t.footer) == null ? void 0 : Y.call(t, E.value)];
      }
    })), {};
  }
});
function Xh() {
  const e = j([]);
  Zc(() => e.value = []);
  function n(t, a) {
    e.value[a] = t;
  }
  return {
    refs: e,
    updateRef: n
  };
}
const Zh = p({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: oe,
    default: "$first"
  },
  prevIcon: {
    type: oe,
    default: "$prev"
  },
  nextIcon: {
    type: oe,
    default: "$next"
  },
  lastIcon: {
    type: oe,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...st(),
  ...ne(),
  ...Ye(),
  ...je(),
  ...pe(),
  ...Tt(),
  ...fe({
    tag: "nav"
  }),
  ...ye(),
  ...St({
    variant: "text"
  })
}, "VPagination"), li = R()({
  name: "VPagination",
  props: Zh(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = ie(e, "modelValue"), {
      t: i,
      n: o
    } = De(), {
      isRtl: r
    } = We(), {
      themeClasses: s
    } = we(e), {
      width: c
    } = kt(), d = K(-1);
    Me(void 0, {
      scoped: !0
    });
    const {
      resizeRef: v
    } = Ct((w) => {
      if (!w.length) return;
      const {
        target: P,
        contentRect: T
      } = w[0], C = P.querySelector(".v-pagination__list > *");
      if (!C) return;
      const x = T.width, D = C.offsetWidth + parseFloat(getComputedStyle(C).marginRight) * 2;
      d.value = y(x, D);
    }), f = b(() => parseInt(e.length, 10)), g = b(() => parseInt(e.start, 10)), h = b(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : y(c.value, 58));
    function y(w, P) {
      const T = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((w - P * T) / P).toFixed(2)
      ));
    }
    const m = b(() => {
      if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
      if (h.value <= 0) return [];
      if (h.value === 1) return [l.value];
      if (f.value <= h.value)
        return dt(f.value, g.value);
      const w = h.value % 2 === 0, P = w ? h.value / 2 : Math.floor(h.value / 2), T = w ? P : P + 1, C = f.value - P;
      if (T - l.value >= 0)
        return [...dt(Math.max(1, h.value - 1), g.value), e.ellipsis, f.value];
      if (l.value - C >= (w ? 1 : 0)) {
        const x = h.value - 1, D = f.value - x + g.value;
        return [g.value, e.ellipsis, ...dt(x, D)];
      } else {
        const x = Math.max(1, h.value - 2), D = x === 1 ? l.value : l.value - Math.ceil(x / 2) + g.value;
        return [g.value, e.ellipsis, ...dt(x, D), e.ellipsis, f.value];
      }
    });
    function S(w, P, T) {
      w.preventDefault(), l.value = P, T && a(T, P);
    }
    const {
      refs: k,
      updateRef: V
    } = Xh();
    Me({
      VPaginationBtn: {
        color: $(e, "color"),
        border: $(e, "border"),
        density: $(e, "density"),
        size: $(e, "size"),
        variant: $(e, "variant"),
        rounded: $(e, "rounded"),
        elevation: $(e, "elevation")
      }
    });
    const A = b(() => m.value.map((w, P) => {
      const T = (C) => V(C, P);
      if (typeof w == "string")
        return {
          isActive: !1,
          key: `ellipsis-${P}`,
          page: w,
          props: {
            ref: T,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const C = w === l.value;
        return {
          isActive: C,
          key: w,
          page: o(w),
          props: {
            ref: T,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: C ? e.activeColor : e.color,
            "aria-current": C,
            "aria-label": i(C ? e.currentPageAriaLabel : e.pageAriaLabel, w),
            onClick: (x) => S(x, w)
          }
        };
      }
    })), I = b(() => {
      const w = !!e.disabled || l.value <= g.value, P = !!e.disabled || l.value >= g.value + f.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (T) => S(T, g.value, "first"),
          disabled: w,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": w
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (T) => S(T, l.value - 1, "prev"),
          disabled: w,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": w
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (T) => S(T, l.value + 1, "next"),
          disabled: P,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": P
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (T) => S(T, g.value + f.value - 1, "last"),
          disabled: P,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": P
        } : void 0
      };
    });
    function _() {
      var P;
      const w = l.value - g.value;
      (P = k.value[w]) == null || P.$el.focus();
    }
    function B(w) {
      w.key === Dl.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1, xe(_)) : w.key === Dl.right && !e.disabled && l.value < g.value + f.value - 1 && (l.value = l.value + 1, xe(_));
    }
    return z(() => u(e.tag, {
      ref: v,
      class: ["v-pagination", s.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: B,
      "data-test": "v-pagination-root"
    }, {
      default: () => [u("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && u("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [t.first ? t.first(I.value.first) : u(he, H({
        _as: "VPaginationBtn"
      }, I.value.first), null)]), u("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [t.prev ? t.prev(I.value.prev) : u(he, H({
        _as: "VPaginationBtn"
      }, I.value.prev), null)]), A.value.map((w, P) => u("li", {
        key: w.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": w.isActive
        }],
        "data-test": "v-pagination-item"
      }, [t.item ? t.item(w) : u(he, H({
        _as: "VPaginationBtn"
      }, w.props), {
        default: () => [w.page]
      })])), u("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [t.next ? t.next(I.value.next) : u(he, H({
        _as: "VPaginationBtn"
      }, I.value.next), null)]), e.showFirstLastPage && u("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [t.last ? t.last(I.value.last) : u(he, H({
        _as: "VPaginationBtn"
      }, I.value.last), null)])])]
    })), {};
  }
}), no = p({
  prevIcon: {
    type: oe,
    default: "$prev"
  },
  nextIcon: {
    type: oe,
    default: "$next"
  },
  firstIcon: {
    type: oe,
    default: "$first"
  },
  lastIcon: {
    type: oe,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), ia = R()({
  name: "VDataTableFooter",
  props: no(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: c,
      setItemsPerPage: d
    } = Hh(), v = b(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? {
      value: f,
      title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f)
    } : {
      ...f,
      title: isNaN(Number(f.title)) ? a(f.title) : f.title
    }));
    return z(() => {
      var g;
      const f = li.filterProps(e);
      return u("div", {
        class: "v-data-table-footer"
      }, [(g = t.prepend) == null ? void 0 : g.call(t), u("div", {
        class: "v-data-table-footer__items-per-page"
      }, [u("span", null, [a(e.itemsPerPageText)]), u(Ui, {
        items: v.value,
        modelValue: c.value,
        "onUpdate:modelValue": (h) => d(Number(h)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), u("div", {
        class: "v-data-table-footer__info"
      }, [u("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])]), u("div", {
        class: "v-data-table-footer__pagination"
      }, [u(li, H({
        modelValue: l.value,
        "onUpdate:modelValue": (h) => l.value = h,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: i.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, f), null)])]);
    }), {};
  }
}), Ra = Gd({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, n) => {
  let {
    slots: t
  } = n;
  const a = e.tag ?? "td";
  return u(a, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: ee(e.height),
      width: ee(e.width),
      maxWidth: ee(e.maxWidth),
      left: ee(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var l;
      return [(l = t.default) == null ? void 0 : l.call(t)];
    }
  });
}), Jh = p({
  headers: Array
}, "DataTable-header"), qs = Symbol.for("vuetify:data-table-headers"), Xs = {
  title: "",
  sortable: !1
}, Qh = {
  ...Xs,
  width: 48
};
function ey() {
  const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
    element: t,
    priority: 0
  }));
  return {
    enqueue: (t, a) => {
      let l = !1;
      for (let i = 0; i < n.length; i++)
        if (n[i].priority > a) {
          n.splice(i, 0, {
            element: t,
            priority: a
          }), l = !0;
          break;
        }
      l || n.push({
        element: t,
        priority: a
      });
    },
    size: () => n.length,
    count: () => {
      let t = 0;
      if (!n.length) return 0;
      const a = Math.floor(n[0].priority);
      for (let l = 0; l < n.length; l++)
        Math.floor(n[l].priority) === a && (t += 1);
      return t;
    },
    dequeue: () => n.shift()
  };
}
function ii(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    n.push(e);
  else
    for (const t of e.children)
      ii(t, n);
  return n;
}
function Zs(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && Zs(t.children, n);
  return n;
}
function ty(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Xs;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Qh;
  }
}
function ao(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => ao(t, n + 1))) : n;
}
function ny(e) {
  let n = !1;
  function t(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (i)
      if (o && (i.fixed = !0), i.fixed)
        if (i.children)
          for (let r = i.children.length - 1; r >= 0; r--)
            t(i.children[r], !0);
        else
          n ? isNaN(+i.width) && Fn(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.lastFixed = !0, n = !0;
      else if (i.children)
        for (let r = i.children.length - 1; r >= 0; r--)
          t(i.children[r]);
      else
        n = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    t(e[i]);
  function a(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!i) return o;
    if (i.children) {
      i.fixedOffset = o;
      for (const r of i.children)
        o = a(r, o);
    } else i.fixed && (i.fixedOffset = o, o += parseFloat(i.width || "0") || 0);
    return o;
  }
  let l = 0;
  for (const i of e)
    l = a(i, l);
}
function ay(e, n) {
  const t = [];
  let a = 0;
  const l = ey(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let s = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: d
      } = l.dequeue(), v = n - a - ao(c);
      if (r.push({
        ...c,
        rowspan: v ?? 1,
        colspan: c.children ? ii(c).length : 1
      }), c.children)
        for (const f of c.children) {
          const g = d % 1 + s / Math.pow(10, a + 2);
          l.enqueue(f, a + v + g);
        }
      s += 1, o -= 1;
    }
    a += 1, t.push(r);
  }
  return {
    columns: e.map((o) => ii(o)).flat(),
    headers: t
  };
}
function Js(e) {
  const n = [];
  for (const t of e) {
    const a = {
      ...ty(t),
      ...t
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? Js(a.children) : void 0
    };
    n.push(o);
  }
  return n;
}
function lo(e, n) {
  const t = j([]), a = j([]), l = j({}), i = j({}), o = j({});
  $e(() => {
    var y, m, S;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((k) => ({
      key: k,
      title: On(k)
    }))).slice(), d = Zs(c);
    (y = n == null ? void 0 : n.groupBy) != null && y.value.length && !d.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (m = n == null ? void 0 : n.showSelect) != null && m.value && !d.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (S = n == null ? void 0 : n.showExpand) != null && S.value && !d.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const v = Js(c);
    ny(v);
    const f = Math.max(...v.map((k) => ao(k))) + 1, g = ay(v, f);
    t.value = g.headers, a.value = g.columns;
    const h = g.headers.flat(1);
    for (const k of h)
      k.key && (k.sortable && (k.sort && (l.value[k.key] = k.sort), k.sortRaw && (i.value[k.key] = k.sortRaw)), k.filter && (o.value[k.key] = k.filter));
  });
  const r = {
    headers: t,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return Be(qs, r), r;
}
function yl() {
  const e = be(qs);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Qs = p({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: oe,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: oe,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...Vn(),
  ...Za()
}, "VDataTableHeaders"), vn = R()({
  name: "VDataTableHeaders",
  props: Qs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = Ks(), {
      someSelected: r,
      allSelected: s,
      selectAll: c,
      showSelectAll: d
    } = ml(), {
      columns: v,
      headers: f
    } = yl(), {
      loaderClasses: g
    } = ca(e);
    function h(w, P) {
      if (!(!(e.sticky || e.fixedHeader) && !w.fixed))
        return {
          position: "sticky",
          left: w.fixed ? ee(w.fixedOffset) : void 0,
          top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0
        };
    }
    function y(w) {
      const P = i.value.find((T) => T.key === w.key);
      return P ? P.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: m,
      backgroundColorStyles: S
    } = Ve(e, "color"), {
      displayClasses: k,
      mobile: V
    } = kt(e), A = b(() => ({
      headers: f.value,
      columns: v.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: c,
      getSortIcon: y
    })), I = b(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky || e.fixedHeader
    }, k.value, g.value]), _ = (w) => {
      let {
        column: P,
        x: T,
        y: C
      } = w;
      const x = P.key === "data-table-select" || P.key === "data-table-expand", D = H(e.headerProps ?? {}, P.headerProps ?? {});
      return u(Ra, H({
        tag: "th",
        align: P.align,
        class: [{
          "v-data-table__th--sortable": P.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(P),
          "v-data-table__th--fixed": P.fixed
        }, ...I.value],
        style: {
          width: ee(P.width),
          minWidth: ee(P.minWidth),
          maxWidth: ee(P.maxWidth),
          ...h(P, C)
        },
        colspan: P.colspan,
        rowspan: P.rowspan,
        onClick: P.sortable ? () => l(P) : void 0,
        fixed: P.fixed,
        nowrap: P.nowrap,
        lastFixed: P.lastFixed,
        noPadding: x
      }, D), {
        default: () => {
          var W;
          const M = `header.${P.key}`, L = {
            column: P,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: y
          };
          return t[M] ? t[M](L) : P.key === "data-table-select" ? ((W = t["header.data-table-select"]) == null ? void 0 : W.call(t, L)) ?? (d.value && u(Ft, {
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": c
          }, null)) : u("div", {
            class: "v-data-table-header__content"
          }, [u("span", null, [P.title]), P.sortable && !e.disableSort && u(ke, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: y(P)
          }, null), e.multiSort && o(P) && u("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...m.value],
            style: S.value
          }, [i.value.findIndex((J) => J.key === P.key) + 1])]);
        }
      });
    }, B = () => {
      const w = H(e.headerProps ?? {} ?? {}), P = b(() => v.value.filter((C) => (C == null ? void 0 : C.sortable) && !e.disableSort)), T = b(() => {
        if (v.value.find((x) => x.key === "data-table-select") != null)
          return s.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return u(Ra, H({
        tag: "th",
        class: [...I.value],
        colspan: f.value.length + 1
      }, w), {
        default: () => [u("div", {
          class: "v-data-table-header__content"
        }, [u(Ui, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: P.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: T.value,
          "onClick:append": () => c(!s.value)
        }, {
          ...t,
          chip: (C) => {
            var x;
            return u(jn, {
              onClick: (x = C.item.raw) != null && x.sortable ? () => l(C.item.raw) : void 0,
              onMousedown: (D) => {
                D.preventDefault(), D.stopPropagation();
              }
            }, {
              default: () => [C.item.title, u(ke, {
                class: ["v-data-table__td-sort-icon", o(C.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: y(C.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    z(() => V.value ? u("tr", null, [u(B, null, null)]) : u(se, null, [t.headers ? t.headers(A.value) : f.value.map((w, P) => u("tr", null, [w.map((T, C) => u(_, {
      column: T,
      x: C,
      y: P
    }, null))])), e.loading && u("tr", {
      class: "v-data-table-progress"
    }, [u("th", {
      colspan: v.value.length
    }, [u(da, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: t.loader
    })])])]));
  }
}), ly = p({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), iy = R()({
  name: "VDataTableGroupHeaderRow",
  props: ly(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = Ls(), {
      isSelected: o,
      isSomeSelected: r,
      select: s
    } = ml(), {
      columns: c
    } = yl(), d = b(() => i([e.item]));
    return () => u("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((v) => {
      var f, g;
      if (v.key === "data-table-group") {
        const h = a(e.item) ? "$expand" : "$next", y = () => l(e.item);
        return ((f = t["data-table-group"]) == null ? void 0 : f.call(t, {
          item: e.item,
          count: d.value.length,
          props: {
            icon: h,
            onClick: y
          }
        })) ?? u(Ra, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [u(he, {
            size: "small",
            variant: "text",
            icon: h,
            onClick: y
          }, null), u("span", null, [e.item.value]), u("span", null, [wt("("), d.value.length, wt(")")])]
        });
      }
      if (v.key === "data-table-select") {
        const h = o(d.value), y = r(d.value) && !h, m = (S) => s(d.value, S);
        return ((g = t["data-table-select"]) == null ? void 0 : g.call(t, {
          props: {
            modelValue: h,
            indeterminate: y,
            "onUpdate:modelValue": m
          }
        })) ?? u("td", null, [u(Ft, {
          modelValue: h,
          indeterminate: y,
          "onUpdate:modelValue": m
        }, null)]);
      }
      return u("td", null, null);
    })]);
  }
}), oy = p({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: Ge(),
  onContextmenu: Ge(),
  onDblclick: Ge(),
  ...Vn()
}, "VDataTableRow"), io = R()({
  name: "VDataTableRow",
  props: oy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      displayClasses: a,
      mobile: l
    } = kt(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: s,
      selectAll: c
    } = ml(), {
      isExpanded: d,
      toggleExpand: v
    } = Fs(), {
      toggleSort: f,
      sortBy: g,
      isSorted: h
    } = Ks(), {
      columns: y
    } = yl();
    z(() => u("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && y.value.map((m, S) => {
      const k = e.item, V = `item.${m.key}`, A = `header.${m.key}`, I = {
        index: e.index,
        item: k.raw,
        internalItem: k,
        value: on(k.columns, m.key),
        column: m,
        isSelected: i,
        toggleSelect: o,
        isExpanded: d,
        toggleExpand: v
      }, _ = {
        column: m,
        selectAll: c,
        isSorted: h,
        toggleSort: f,
        sortBy: g.value,
        someSelected: r.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, B = typeof e.cellProps == "function" ? e.cellProps({
        index: I.index,
        item: I.item,
        internalItem: I.internalItem,
        value: I.value,
        column: m
      }) : e.cellProps, w = typeof m.cellProps == "function" ? m.cellProps({
        index: I.index,
        item: I.item,
        internalItem: I.internalItem,
        value: I.value
      }) : m.cellProps;
      return u(Ra, H({
        align: m.align,
        class: {
          "v-data-table__td--expanded-row": m.key === "data-table-expand",
          "v-data-table__td--select-row": m.key === "data-table-select"
        },
        fixed: m.fixed,
        fixedOffset: m.fixedOffset,
        lastFixed: m.lastFixed,
        maxWidth: l.value ? void 0 : m.maxWidth,
        noPadding: m.key === "data-table-select" || m.key === "data-table-expand",
        nowrap: m.nowrap,
        width: l.value ? void 0 : m.width
      }, B, w), {
        default: () => {
          var T, C, x, D, M;
          if (t[V] && !l.value) return (T = t[V]) == null ? void 0 : T.call(t, I);
          if (m.key === "data-table-select")
            return ((C = t["item.data-table-select"]) == null ? void 0 : C.call(t, I)) ?? u(Ft, {
              disabled: !k.selectable,
              modelValue: i([k]),
              onClick: mo(() => o(k), ["stop"])
            }, null);
          if (m.key === "data-table-expand")
            return ((x = t["item.data-table-expand"]) == null ? void 0 : x.call(t, I)) ?? u(he, {
              icon: d(k) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: mo(() => v(k), ["stop"])
            }, null);
          const P = Pr(I.value);
          return l.value ? u(se, null, [u("div", {
            class: "v-data-table__td-title"
          }, [((D = t[A]) == null ? void 0 : D.call(t, _)) ?? m.title]), u("div", {
            class: "v-data-table__td-value"
          }, [((M = t[V]) == null ? void 0 : M.call(t, I)) ?? P])]) : P;
        }
      });
    })]));
  }
}), ec = p({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...Vn()
}, "VDataTableRows"), fn = R()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: ec(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      columns: l
    } = yl(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = Fs(), {
      isSelected: s,
      toggleSelect: c
    } = ml(), {
      toggleGroup: d,
      isGroupOpen: v
    } = Ls(), {
      t: f
    } = De(), {
      mobile: g
    } = kt(e);
    return z(() => {
      var h, y;
      return e.loading && (!e.items.length || a.loading) ? u("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [u("td", {
        colspan: l.value.length
      }, [((h = a.loading) == null ? void 0 : h.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? u("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [u("td", {
        colspan: l.value.length
      }, [((y = a["no-data"]) == null ? void 0 : y.call(a)) ?? f(e.noDataText)])]) : u(se, null, [e.items.map((m, S) => {
        var A;
        if (m.type === "group") {
          const I = {
            index: S,
            item: m,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: s,
            toggleSelect: c,
            toggleGroup: d,
            isGroupOpen: v
          };
          return a["group-header"] ? a["group-header"](I) : u(iy, H({
            key: `group-header_${m.id}`,
            item: m
          }, $o(t, ":group-header", () => I)), a);
        }
        const k = {
          index: S,
          item: m.raw,
          internalItem: m,
          columns: l.value,
          isExpanded: r,
          toggleExpand: o,
          isSelected: s,
          toggleSelect: c
        }, V = {
          ...k,
          props: H({
            key: `item_${m.key ?? m.index}`,
            onClick: i.value ? () => {
              o(m);
            } : void 0,
            index: S,
            item: m,
            cellProps: e.cellProps,
            mobile: g.value
          }, $o(t, ":row", () => k), typeof e.rowProps == "function" ? e.rowProps({
            item: k.item,
            index: k.index,
            internalItem: k.internalItem
          }) : e.rowProps)
        };
        return u(se, {
          key: V.props.key
        }, [a.item ? a.item(V) : u(io, V.props, a), r(m) && ((A = a["expanded-row"]) == null ? void 0 : A.call(a, k))]);
      })]);
    }), {};
  }
}), tc = p({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...ne(),
  ...Ye(),
  ...fe(),
  ...ye()
}, "VTable"), mn = R()({
  name: "VTable",
  props: tc(),
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      themeClasses: l
    } = we(e), {
      densityClasses: i
    } = it(e);
    return z(() => u(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!t.top,
        "v-table--has-bottom": !!t.bottom,
        "v-table--hover": e.hover
      }, l.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var o, r, s;
        return [(o = t.top) == null ? void 0 : o.call(t), t.default ? u("div", {
          class: "v-table__wrapper",
          style: {
            height: ee(e.height)
          }
        }, [u("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
      }
    })), {};
  }
}), ry = p({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function uy(e, n, t, a) {
  const l = e.returnObject ? n : ze(n, e.itemValue), i = ze(n, e.itemSelectable, !0), o = a.reduce((r, s) => (s.key != null && (r[s.key] = ze(n, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? ze(n, e.itemValue) : l,
    index: t,
    value: l,
    selectable: i,
    columns: o,
    raw: n
  };
}
function sy(e, n, t) {
  return n.map((a, l) => uy(e, a, l, t));
}
function oo(e, n) {
  return {
    items: b(() => sy(e, e.items, n.value))
  };
}
const ro = p({
  ...ec(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Ms(),
  ...Xi(),
  ...Jh(),
  ...ry(),
  ...js(),
  ...Gs(),
  ...Qs(),
  ...tc()
}, "DataTable"), cy = p({
  ...Ji(),
  ...ro(),
  ...ba(),
  ...no()
}, "VDataTable"), dy = R()({
  name: "VDataTable",
  props: cy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Zi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = gl(e), {
      page: s,
      itemsPerPage: c
    } = Qi(e), {
      disableSort: d
    } = gn(e), {
      columns: v,
      headers: f,
      sortFunctions: g,
      sortRawFunctions: h,
      filterFunctions: y
    } = lo(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: m
    } = oo(e, v), S = $(e, "search"), {
      filteredItems: k
    } = Sa(e, m, S, {
      transform: (te) => te.columns,
      customKeyFilter: y
    }), {
      toggleSort: V
    } = hl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      sortByWithGroups: A,
      opened: I,
      extractRows: _,
      isGroupOpen: B,
      toggleGroup: w
    } = cl({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      sortedItems: P
    } = to(e, k, A, {
      transform: (te) => ({
        ...te.raw,
        ...te.columns
      }),
      sortFunctions: g,
      sortRawFunctions: h
    }), {
      flatItems: T
    } = dl(P, l, I), C = b(() => T.value.length), {
      startIndex: x,
      stopIndex: D,
      pageCount: M,
      setItemsPerPage: L
    } = eo({
      page: s,
      itemsPerPage: c,
      itemsLength: C
    }), {
      paginatedItems: W
    } = Hs({
      items: T,
      startIndex: x,
      stopIndex: D,
      itemsPerPage: c
    }), J = b(() => _(W.value)), {
      isSelected: N,
      select: O,
      selectAll: E,
      toggleSelect: F,
      someSelected: Y,
      allSelected: X
    } = fl(e, {
      allItems: m,
      currentPage: J
    }), {
      isExpanded: Q,
      toggleExpand: re
    } = sl(e);
    vl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: S
    }), Me({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const G = b(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: M.value,
      toggleSort: V,
      setItemsPerPage: L,
      someSelected: Y.value,
      allSelected: X.value,
      isSelected: N,
      select: O,
      selectAll: E,
      toggleSelect: F,
      isExpanded: Q,
      toggleExpand: re,
      isGroupOpen: B,
      toggleGroup: w,
      items: J.value.map((te) => te.raw),
      internalItems: J.value,
      groupedItems: W.value,
      columns: v.value,
      headers: f.value
    }));
    return z(() => {
      const te = ia.filterProps(e), le = vn.filterProps(e), Ce = fn.filterProps(e), ge = mn.filterProps(e);
      return u(mn, H({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ge, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var q;
          return (q = a.top) == null ? void 0 : q.call(a, G.value);
        },
        default: () => {
          var q, ue, U, ae, de, ce;
          return a.default ? a.default(G.value) : u(se, null, [(q = a.colgroup) == null ? void 0 : q.call(a, G.value), !e.hideDefaultHeader && u("thead", {
            key: "thead"
          }, [u(vn, le, a)]), (ue = a.thead) == null ? void 0 : ue.call(a, G.value), !e.hideDefaultBody && u("tbody", null, [(U = a["body.prepend"]) == null ? void 0 : U.call(a, G.value), a.body ? a.body(G.value) : u(fn, H(t, Ce, {
            items: W.value
          }), a), (ae = a["body.append"]) == null ? void 0 : ae.call(a, G.value)]), (de = a.tbody) == null ? void 0 : de.call(a, G.value), (ce = a.tfoot) == null ? void 0 : ce.call(a, G.value)]);
        },
        bottom: () => a.bottom ? a.bottom(G.value) : !e.hideDefaultFooter && u(se, null, [u(ma, null, null), u(ia, te, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), vy = p({
  ...ro(),
  ...Xi(),
  ...us(),
  ...ba()
}, "VDataTableVirtual"), fy = R()({
  name: "VDataTableVirtual",
  props: vy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Zi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = gl(e), {
      disableSort: s
    } = gn(e), {
      columns: c,
      headers: d,
      filterFunctions: v,
      sortFunctions: f,
      sortRawFunctions: g
    } = lo(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: h
    } = oo(e, c), y = $(e, "search"), {
      filteredItems: m
    } = Sa(e, h, y, {
      transform: (le) => le.columns,
      customKeyFilter: v
    }), {
      toggleSort: S
    } = hl({
      sortBy: i,
      multiSort: o,
      mustSort: r
    }), {
      sortByWithGroups: k,
      opened: V,
      extractRows: A,
      isGroupOpen: I,
      toggleGroup: _
    } = cl({
      groupBy: l,
      sortBy: i,
      disableSort: s
    }), {
      sortedItems: B
    } = to(e, m, k, {
      transform: (le) => ({
        ...le.raw,
        ...le.columns
      }),
      sortFunctions: f,
      sortRawFunctions: g
    }), {
      flatItems: w
    } = dl(B, l, V), P = b(() => A(w.value)), {
      isSelected: T,
      select: C,
      selectAll: x,
      toggleSelect: D,
      someSelected: M,
      allSelected: L
    } = fl(e, {
      allItems: P,
      currentPage: P
    }), {
      isExpanded: W,
      toggleExpand: J
    } = sl(e), {
      containerRef: N,
      markerRef: O,
      paddingTop: E,
      paddingBottom: F,
      computedItems: Y,
      handleItemResize: X,
      handleScroll: Q,
      handleScrollend: re
    } = ss(e, w), G = b(() => Y.value.map((le) => le.raw));
    vl({
      sortBy: i,
      page: K(1),
      itemsPerPage: K(-1),
      groupBy: l,
      search: y
    }), Me({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const te = b(() => ({
      sortBy: i.value,
      toggleSort: S,
      someSelected: M.value,
      allSelected: L.value,
      isSelected: T,
      select: C,
      selectAll: x,
      toggleSelect: D,
      isExpanded: W,
      toggleExpand: J,
      isGroupOpen: I,
      toggleGroup: _,
      items: P.value.map((le) => le.raw),
      internalItems: P.value,
      groupedItems: w.value,
      columns: c.value,
      headers: d.value
    }));
    z(() => {
      const le = vn.filterProps(e), Ce = fn.filterProps(e), ge = mn.filterProps(e);
      return u(mn, H({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ge, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var q;
          return (q = a.top) == null ? void 0 : q.call(a, te.value);
        },
        wrapper: () => {
          var q, ue, U;
          return u("div", {
            ref: N,
            onScrollPassive: Q,
            onScrollend: re,
            class: "v-table__wrapper",
            style: {
              height: ee(e.height)
            }
          }, [u("table", null, [(q = a.colgroup) == null ? void 0 : q.call(a, te.value), !e.hideDefaultHeader && u("thead", {
            key: "thead"
          }, [u(vn, le, a)]), !e.hideDefaultBody && u("tbody", null, [u("tr", {
            ref: O,
            style: {
              height: ee(E.value),
              border: 0
            }
          }, [u("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (ue = a["body.prepend"]) == null ? void 0 : ue.call(a, te.value), u(fn, H(t, Ce, {
            items: G.value
          }), {
            ...a,
            item: (ae) => u(rs, {
              key: ae.internalItem.index,
              renderless: !0,
              "onUpdate:height": (de) => X(ae.internalItem.index, de)
            }, {
              default: (de) => {
                var ve;
                let {
                  itemRef: ce
                } = de;
                return ((ve = a.item) == null ? void 0 : ve.call(a, {
                  ...ae,
                  itemRef: ce
                })) ?? u(io, H(ae.props, {
                  ref: ce,
                  key: ae.internalItem.index,
                  index: ae.internalItem.index
                }), a);
              }
            })
          }), (U = a["body.append"]) == null ? void 0 : U.call(a, te.value), u("tr", {
            style: {
              height: ee(F.value),
              border: 0
            }
          }, [u("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var q;
          return (q = a.bottom) == null ? void 0 : q.call(a, te.value);
        }
      });
    });
  }
}), my = p({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Ji(),
  ...ro(),
  ...no()
}, "VDataTableServer"), gy = R()({
  name: "VDataTableServer",
  props: my(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Zi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = gl(e), {
      page: s,
      itemsPerPage: c
    } = Qi(e), {
      disableSort: d
    } = gn(e), v = b(() => parseInt(e.itemsLength, 10)), {
      columns: f,
      headers: g
    } = lo(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: h
    } = oo(e, f), {
      toggleSort: y
    } = hl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      opened: m,
      isGroupOpen: S,
      toggleGroup: k,
      extractRows: V
    } = cl({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      pageCount: A,
      setItemsPerPage: I
    } = eo({
      page: s,
      itemsPerPage: c,
      itemsLength: v
    }), {
      flatItems: _
    } = dl(h, l, m), {
      isSelected: B,
      select: w,
      selectAll: P,
      toggleSelect: T,
      someSelected: C,
      allSelected: x
    } = fl(e, {
      allItems: h,
      currentPage: h
    }), {
      isExpanded: D,
      toggleExpand: M
    } = sl(e), L = b(() => V(h.value));
    vl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: $(e, "search")
    }), Be("v-data-table", {
      toggleSort: y,
      sortBy: i
    }), Me({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const W = b(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: A.value,
      toggleSort: y,
      setItemsPerPage: I,
      someSelected: C.value,
      allSelected: x.value,
      isSelected: B,
      select: w,
      selectAll: P,
      toggleSelect: T,
      isExpanded: D,
      toggleExpand: M,
      isGroupOpen: S,
      toggleGroup: k,
      items: L.value.map((J) => J.raw),
      internalItems: L.value,
      groupedItems: _.value,
      columns: f.value,
      headers: g.value
    }));
    z(() => {
      const J = ia.filterProps(e), N = vn.filterProps(e), O = fn.filterProps(e), E = mn.filterProps(e);
      return u(mn, H({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, E, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var F;
          return (F = a.top) == null ? void 0 : F.call(a, W.value);
        },
        default: () => {
          var F, Y, X, Q, re, G;
          return a.default ? a.default(W.value) : u(se, null, [(F = a.colgroup) == null ? void 0 : F.call(a, W.value), !e.hideDefaultHeader && u("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [u(vn, N, a)]), (Y = a.thead) == null ? void 0 : Y.call(a, W.value), !e.hideDefaultBody && u("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(X = a["body.prepend"]) == null ? void 0 : X.call(a, W.value), a.body ? a.body(W.value) : u(fn, H(t, O, {
            items: _.value
          }), a), (Q = a["body.append"]) == null ? void 0 : Q.call(a, W.value)]), (re = a.tbody) == null ? void 0 : re.call(a, W.value), (G = a.tfoot) == null ? void 0 : G.call(a, W.value)]);
        },
        bottom: () => a.bottom ? a.bottom(W.value) : !e.hideDefaultFooter && u(se, null, [u(ma, null, null), u(ia, J, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), hy = p({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...ne(),
  ...Re(),
  ...fe()
}, "VContainer"), yy = R()({
  name: "VContainer",
  props: hy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = We(), {
      dimensionStyles: l
    } = Ne(e);
    return z(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: [l.value, e.style]
    }, t)), {};
  }
}), nc = tl.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), ac = tl.reduce((e, n) => {
  const t = "offset" + On(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), lc = tl.reduce((e, n) => {
  const t = "order" + On(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), rr = {
  col: Object.keys(nc),
  offset: Object.keys(ac),
  order: Object.keys(lc)
};
function by(e, n, t) {
  let a = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (t === "" || t === !0) || (a += `-${t}`), a.toLowerCase();
  }
}
const Sy = ["auto", "start", "end", "center", "baseline", "stretch"], ky = p({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...nc,
  offset: {
    type: [String, Number],
    default: null
  },
  ...ac,
  order: {
    type: [String, Number],
    default: null
  },
  ...lc,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Sy.includes(e)
  },
  ...ne(),
  ...fe()
}, "VCol"), xy = R()({
  name: "VCol",
  props: ky(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => {
      const l = [];
      let i;
      for (i in rr)
        rr[i].forEach((r) => {
          const s = e[r], c = by(i, r, s);
          c && l.push(c);
        });
      const o = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return jt(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), uo = ["start", "end", "center"], ic = ["space-between", "space-around", "space-evenly"];
function so(e, n) {
  return tl.reduce((t, a) => {
    const l = e + On(a);
    return t[l] = n(), t;
  }, {});
}
const wy = [...uo, "baseline", "stretch"], oc = (e) => wy.includes(e), rc = so("align", () => ({
  type: String,
  default: null,
  validator: oc
})), Cy = [...uo, ...ic], uc = (e) => Cy.includes(e), sc = so("justify", () => ({
  type: String,
  default: null,
  validator: uc
})), Vy = [...uo, ...ic, "stretch"], cc = (e) => Vy.includes(e), dc = so("alignContent", () => ({
  type: String,
  default: null,
  validator: cc
})), ur = {
  align: Object.keys(rc),
  justify: Object.keys(sc),
  alignContent: Object.keys(dc)
}, Py = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Iy(e, n, t) {
  let a = Py[e];
  if (t != null) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${t}`, a.toLowerCase();
  }
}
const _y = p({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: oc
  },
  ...rc,
  justify: {
    type: String,
    default: null,
    validator: uc
  },
  ...sc,
  alignContent: {
    type: String,
    default: null,
    validator: cc
  },
  ...dc,
  ...ne(),
  ...fe()
}, "VRow"), Ay = R()({
  name: "VRow",
  props: _y(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => {
      const l = [];
      let i;
      for (i in ur)
        ur[i].forEach((o) => {
          const r = e[o], s = Iy(i, o, r);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return jt(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), vc = At("v-spacer", "div", "VSpacer"), fc = p({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: null
  },
  nextIcon: {
    type: oe,
    default: "$next"
  },
  prevIcon: {
    type: oe,
    default: "$prev"
  },
  modeIcon: {
    type: oe,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), oi = R()({
  name: "VDatePickerControls",
  props: fc(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = b(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = b(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = b(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = b(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      t("click:prev");
    }
    function s() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function d() {
      t("click:month");
    }
    return z(() => u("div", {
      class: ["v-date-picker-controls"]
    }, [u(he, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), u(he, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), u(vc, {
      key: "mode-spacer"
    }, null), u("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [u(he, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), u(he, {
      disabled: o.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: s
    }, null)])])), {};
  }
}), Ty = p({
  appendIcon: oe,
  color: String,
  header: String,
  transition: String,
  onClick: Ge()
}, "VDatePickerHeader"), ri = R()({
  name: "VDatePickerHeader",
  props: Ty(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "color");
    function o() {
      t("click");
    }
    function r() {
      t("click:append");
    }
    return z(() => {
      const s = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return u("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: o
      }, [a.prepend && u("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && u(tt, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var d;
          return [u("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((d = a.default) == null ? void 0 : d.call(a)) ?? e.header])];
        }
      }), c && u("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? u(me, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var d;
          return [(d = a.append) == null ? void 0 : d.call(a)];
        }
      }) : u(he, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), By = p({
  allowedDates: [Array, Function],
  disabled: {
    type: Boolean,
    default: null
  },
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function Dy(e) {
  const n = Gn(), t = ie(e, "modelValue", [], (h) => _e(h)), a = b(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = ie(e, "year", void 0, (h) => {
    const y = h != null ? Number(h) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), y));
  }, (h) => n.getYear(h)), i = ie(e, "month", void 0, (h) => {
    const y = h != null ? Number(h) : n.getMonth(a.value), m = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(m, y);
  }, (h) => n.getMonth(h)), o = b(() => e.firstDayOfWeek ?? e.weekdays[0]), r = b(() => {
    const h = Number(e.firstDayOfWeek ?? 0);
    return e.weekdays.map((y) => (y + h) % 7);
  }), s = b(() => {
    const h = n.getWeekArray(i.value, o.value), y = h.flat(), m = 6 * 7;
    if (e.weeksInMonth === "static" && y.length < m) {
      const S = y[y.length - 1];
      let k = [];
      for (let V = 1; V <= m - y.length; V++)
        k.push(n.addDays(S, V)), V % 7 === 0 && (h.push(k), k = []);
    }
    return h;
  });
  function c(h, y) {
    return h.filter((m) => r.value.includes(n.toJsDate(m).getDay())).map((m, S) => {
      const k = n.toISO(m), V = !n.isSameMonth(m, i.value), A = n.isSameDay(m, n.startOfMonth(i.value)), I = n.isSameDay(m, n.endOfMonth(i.value)), _ = n.isSameDay(m, i.value);
      return {
        date: m,
        isoDate: k,
        formatted: n.format(m, "keyboardDate"),
        year: n.getYear(m),
        month: n.getMonth(m),
        isDisabled: g(m),
        isWeekStart: S % 7 === 0,
        isWeekEnd: S % 7 === 6,
        isToday: n.isSameDay(m, y),
        isAdjacent: V,
        isHidden: V && !e.showAdjacentMonths,
        isStart: A,
        isSelected: t.value.some((B) => n.isSameDay(m, B)),
        isEnd: I,
        isSame: _,
        localized: n.format(m, "dayOfMonth")
      };
    });
  }
  const d = b(() => {
    const h = n.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let S = 0; S <= 6; S++)
      y.push(n.addDays(h, S));
    const m = n.date();
    return c(y, m);
  }), v = b(() => {
    const h = s.value.flat(), y = n.date();
    return c(h, y);
  }), f = b(() => s.value.map((h) => h.length ? Rh(n, h[0]) : null));
  function g(h) {
    if (e.disabled) return !0;
    const y = n.date(h);
    return e.min && n.isAfter(n.date(e.min), y) || e.max && n.isAfter(y, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((m) => n.isSameDay(n.date(m), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: v,
    daysInWeek: d,
    genDays: c,
    model: t,
    weeksInMonth: s,
    weekDays: r,
    weekNumbers: f
  };
}
const mc = p({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...Te(By(), ["displayValue"])
}, "VDatePickerMonth"), ui = R()({
  name: "VDatePickerMonth",
  props: mc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = j(), {
      daysInMonth: i,
      model: o,
      weekNumbers: r
    } = Dy(e), s = Gn(), c = K(), d = K(), v = K(!1), f = b(() => v.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (c.value = o.value[0], o.value.length > 1 && (d.value = o.value[o.value.length - 1]));
    const g = b(() => {
      const S = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= S;
    });
    Z(i, (S, k) => {
      k && (v.value = s.isBefore(S[0].date, k[0].date));
    });
    function h(S) {
      const k = s.startOfDay(S);
      if (o.value.length === 0 ? c.value = void 0 : o.value.length === 1 && (c.value = o.value[0], d.value = void 0), !c.value)
        c.value = k, o.value = [c.value];
      else if (d.value)
        c.value = S, d.value = void 0, o.value = [c.value];
      else {
        if (s.isSameDay(k, c.value)) {
          c.value = void 0, o.value = [];
          return;
        } else s.isBefore(k, c.value) ? (d.value = s.endOfDay(c.value), c.value = k) : d.value = s.endOfDay(k);
        const V = s.getDiff(d.value, c.value, "days"), A = [c.value];
        for (let I = 1; I < V; I++) {
          const _ = s.addDays(c.value, I);
          A.push(_);
        }
        A.push(d.value), o.value = A;
      }
    }
    function y(S) {
      const k = o.value.findIndex((V) => s.isSameDay(V, S));
      if (k === -1)
        o.value = [...o.value, S];
      else {
        const V = [...o.value];
        V.splice(k, 1), o.value = V;
      }
    }
    function m(S) {
      e.multiple === "range" ? h(S) : e.multiple ? y(S) : o.value = [S];
    }
    return () => u("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && u("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && u("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [wt(" ")]), r.value.map((S) => u("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [S]))]), u(tt, {
      name: f.value
    }, {
      default: () => {
        var S;
        return [u("div", {
          ref: l,
          key: (S = i.value[0].date) == null ? void 0 : S.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && s.getWeekdays(e.firstDayOfWeek).map((k) => u("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [k])), i.value.map((k, V) => {
          const A = {
            props: {
              onClick: () => m(k.date)
            },
            item: k,
            i: V
          };
          return g.value && !k.isSelected && (k.isDisabled = !0), u("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": k.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": k.isHidden,
              "v-date-picker-month__day--selected": k.isSelected,
              "v-date-picker-month__day--week-end": k.isWeekEnd,
              "v-date-picker-month__day--week-start": k.isWeekStart
            }],
            "data-v-date": k.isDisabled ? void 0 : k.isoDate
          }, [(e.showAdjacentMonths || !k.isAdjacent) && u(me, {
            defaults: {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (k.isSelected || k.isToday) && !k.isDisabled ? e.color : void 0,
                disabled: k.isDisabled,
                icon: !0,
                ripple: !1,
                text: k.localized,
                variant: k.isDisabled ? k.isToday ? "outlined" : "text" : k.isToday && !k.isSelected ? "outlined" : "flat",
                onClick: () => m(k.date)
              }
            }
          }, {
            default: () => {
              var I;
              return [((I = a.day) == null ? void 0 : I.call(a, A)) ?? u(he, A.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), gc = p({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), si = R()({
  name: "VDatePickerMonths",
  props: gc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Gn(), i = ie(e, "modelValue"), o = b(() => {
      let r = l.startOfYear(l.date());
      return e.year && (r = l.setYear(r, e.year)), dt(12).map((s) => {
        const c = l.format(r, "monthShort"), d = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r) || e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))));
        return r = l.getNextMonth(r), {
          isDisabled: d,
          text: c,
          value: s
        };
      });
    });
    return $e(() => {
      i.value = i.value ?? l.getMonth(l.date());
    }), z(() => u("div", {
      class: "v-date-picker-months",
      style: {
        height: ee(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((r, s) => {
      var v;
      const c = {
        active: i.value === s,
        color: i.value === s ? e.color : void 0,
        disabled: r.isDisabled,
        rounded: !0,
        text: r.text,
        variant: i.value === r.value ? "flat" : "text",
        onClick: () => d(s)
      };
      function d(f) {
        if (i.value === f) {
          t("update:modelValue", i.value);
          return;
        }
        i.value = f;
      }
      return ((v = a.month) == null ? void 0 : v.call(a, {
        month: r,
        i: s,
        props: c
      })) ?? u(he, H({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), hc = p({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), ci = R()({
  name: "VDatePickerYears",
  props: hc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Gn(), i = ie(e, "modelValue"), o = b(() => {
      const s = l.getYear(l.date());
      let c = s - 100, d = s + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (d = l.getYear(l.date(e.max)));
      let v = l.startOfYear(l.date());
      return v = l.setYear(v, c), dt(d - c + 1, c).map((f) => {
        const g = l.format(v, "year");
        return v = l.setYear(v, l.getYear(v) + 1), {
          text: g,
          value: f
        };
      });
    });
    $e(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const r = Ma();
    return at(async () => {
      var s;
      await xe(), (s = r.el) == null || s.scrollIntoView({
        block: "center"
      });
    }), z(() => u("div", {
      class: "v-date-picker-years",
      style: {
        height: ee(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((s, c) => {
      var v;
      const d = {
        ref: i.value === s.value ? r : void 0,
        active: i.value === s.value,
        color: i.value === s.value ? e.color : void 0,
        rounded: !0,
        text: s.text,
        variant: i.value === s.value ? "flat" : "text",
        onClick: () => {
          if (i.value === s.value) {
            t("update:modelValue", i.value);
            return;
          }
          i.value = s.value;
        }
      };
      return ((v = a.year) == null ? void 0 : v.call(a, {
        year: s,
        i: c,
        props: d
      })) ?? u(he, H({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), py = At("v-picker-title"), co = p({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...rl()
}, "VPicker"), Na = R()({
  name: "VPicker",
  props: co(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve($(e, "color"));
    return z(() => {
      const i = dn.filterProps(e), o = !!(e.title || t.title);
      return u(dn, H(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && u("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [o && u(py, {
            key: "picker-title"
          }, {
            default: () => {
              var s;
              return [((s = t.title) == null ? void 0 : s.call(t)) ?? e.title];
            }
          }), t.header && u("div", {
            class: "v-picker__header"
          }, [t.header()])]), u("div", {
            class: "v-picker__body"
          }, [(r = t.default) == null ? void 0 : r.call(t)]), t.actions && u(me, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), yc = p({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...fc(),
  ...mc({
    weeksInMonth: "static"
  }),
  ...Te(gc(), ["modelValue"]),
  ...Te(hc(), ["modelValue"]),
  ...co({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), di = R()({
  name: "VDatePicker",
  props: yc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Gn(), {
      t: i
    } = De(), o = ie(e, "modelValue", void 0, (P) => _e(P), (P) => e.multiple ? P : P[0]), r = ie(e, "viewMode"), s = b(() => {
      const P = l.date(e.min);
      return e.min && l.isValid(P) ? P : null;
    }), c = b(() => {
      const P = l.date(e.max);
      return e.max && l.isValid(P) ? P : null;
    }), d = b(() => {
      var C;
      const P = l.date();
      let T = P;
      return (C = o.value) != null && C[0] ? T = l.date(o.value[0]) : s.value && l.isBefore(P, s.value) ? T = s.value : c.value && l.isAfter(P, c.value) && (T = c.value), T && l.isValid(T) ? T : P;
    }), v = j(Number(e.month ?? l.getMonth(l.startOfMonth(d.value)))), f = j(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(d.value, v.value))))), g = K(!1), h = b(() => e.multiple && o.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(l.date(o.value[0]), "normalDateWithWeekday") : i(e.header)), y = b(() => {
      let P = l.date();
      return P = l.setDate(P, 1), P = l.setMonth(P, v.value), P = l.setYear(P, f.value), l.format(P, "monthAndYear");
    }), m = b(() => `date-picker-header${g.value ? "-reverse" : ""}-transition`), S = b(() => {
      if (e.disabled) return !0;
      const P = [];
      if (r.value !== "month")
        P.push("prev", "next");
      else {
        let T = l.date();
        if (T = l.startOfMonth(T), T = l.setMonth(T, v.value), T = l.setYear(T, f.value), s.value) {
          const C = l.addDays(l.startOfMonth(T), -1);
          l.isAfter(s.value, C) && P.push("prev");
        }
        if (c.value) {
          const C = l.addDays(l.endOfMonth(T), 1);
          l.isAfter(C, c.value) && P.push("next");
        }
      }
      return P;
    });
    function k() {
      v.value < 11 ? v.value++ : (f.value++, v.value = 0, w(f.value)), B(v.value);
    }
    function V() {
      v.value > 0 ? v.value-- : (f.value--, v.value = 11, w(f.value)), B(v.value);
    }
    function A() {
      r.value = "month";
    }
    function I() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function _() {
      r.value = r.value === "year" ? "month" : "year";
    }
    function B(P) {
      r.value === "months" && I(), t("update:month", P);
    }
    function w(P) {
      r.value === "year" && _(), t("update:year", P);
    }
    return Z(o, (P, T) => {
      const C = _e(T), x = _e(P);
      if (!x.length) return;
      const D = l.date(C[C.length - 1]), M = l.date(x[x.length - 1]), L = l.getMonth(M), W = l.getYear(M);
      L !== v.value && (v.value = L, B(v.value)), W !== f.value && (f.value = W, w(f.value)), g.value = l.isBefore(D, M);
    }), z(() => {
      const P = Na.filterProps(e), T = oi.filterProps(e), C = ri.filterProps(e), x = ui.filterProps(e), D = Te(si.filterProps(e), ["modelValue"]), M = Te(ci.filterProps(e), ["modelValue"]), L = {
        header: h.value,
        transition: m.value
      };
      return u(Na, H(P, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var W;
          return ((W = a.title) == null ? void 0 : W.call(a)) ?? u("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? u(me, {
          defaults: {
            VDatePickerHeader: {
              ...L
            }
          }
        }, {
          default: () => {
            var W;
            return [(W = a.header) == null ? void 0 : W.call(a, L)];
          }
        }) : u(ri, H({
          key: "header"
        }, C, L, {
          onClick: r.value !== "month" ? A : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => u(se, null, [u(oi, H(T, {
          disabled: S.value,
          text: y.value,
          "onClick:next": k,
          "onClick:prev": V,
          "onClick:month": I,
          "onClick:year": _
        }), null), u(Qn, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? u(si, H({
            key: "date-picker-months"
          }, D, {
            modelValue: v.value,
            "onUpdate:modelValue": [(W) => v.value = W, B],
            min: s.value,
            max: c.value,
            year: f.value
          }), null) : r.value === "year" ? u(ci, H({
            key: "date-picker-years"
          }, M, {
            modelValue: f.value,
            "onUpdate:modelValue": [(W) => f.value = W, w],
            min: s.value,
            max: c.value
          }), null) : u(ui, H({
            key: "date-picker-month"
          }, x, {
            modelValue: o.value,
            "onUpdate:modelValue": (W) => o.value = W,
            month: v.value,
            "onUpdate:month": [(W) => v.value = W, B],
            year: f.value,
            "onUpdate:year": [(W) => f.value = W, w],
            min: s.value,
            max: c.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), My = p({
  actionText: String,
  bgColor: String,
  color: String,
  icon: oe,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...ne(),
  ...Re(),
  ...Tt({
    size: void 0
  }),
  ...ye()
}, "VEmptyState"), Ey = R()({
  name: "VEmptyState",
  props: My(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = we(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve($(e, "bgColor")), {
      dimensionStyles: r
    } = Ne(e), {
      displayClasses: s
    } = kt();
    function c(d) {
      t("click:action", d);
    }
    return z(() => {
      var m, S, k;
      const d = !!(a.actions || e.actionText), v = !!(a.headline || e.headline), f = !!(a.title || e.title), g = !!(a.text || e.text), h = !!(a.media || e.image || e.icon), y = e.size || (e.image ? 200 : 96);
      return u("div", {
        class: ["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, s.value, e.class],
        style: [o.value, r.value, e.style]
      }, [h && u("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? u(me, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: y
          },
          VIcon: {
            size: y,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : u(se, null, [e.image ? u(Et, {
        key: "image",
        src: e.image,
        height: y
      }, null) : e.icon ? u(ke, {
        key: "icon",
        color: e.color,
        size: y,
        icon: e.icon
      }, null) : void 0])]), v && u("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [((m = a.headline) == null ? void 0 : m.call(a)) ?? e.headline]), f && u("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [((S = a.title) == null ? void 0 : S.call(a)) ?? e.title]), g && u("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: ee(e.textWidth)
        }
      }, [((k = a.text) == null ? void 0 : k.call(a)) ?? e.text]), a.default && u("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), d && u("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [u(me, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            text: e.actionText
          }
        }
      }, {
        default: () => {
          var V;
          return [((V = a.actions) == null ? void 0 : V.call(a, {
            props: {
              onClick: c
            }
          })) ?? u(he, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), oa = Symbol.for("vuetify:v-expansion-panel"), bc = p({
  ...ne(),
  ...zi()
}, "VExpansionPanelText"), vi = R()({
  name: "VExpansionPanelText",
  props: bc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(oa);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = Wi(e, a.isSelected);
    return z(() => u(Ua, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [Ae(u("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && l.value && u("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[Vt, a.isSelected.value]])];
      }
    })), {};
  }
}), Sc = p({
  color: String,
  expandIcon: {
    type: oe,
    default: "$expand"
  },
  collapseIcon: {
    type: oe,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...ne(),
  ...Re()
}, "VExpansionPanelTitle"), fi = R()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: Bt
  },
  props: Sc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(oa);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "color"), {
      dimensionStyles: o
    } = Ne(e), r = b(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = b(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return z(() => {
      var c;
      return Ae(u("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, o.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [u("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = t.default) == null ? void 0 : c.call(t, r.value), !e.hideActions && u(me, {
        defaults: {
          VIcon: {
            icon: s.value
          }
        }
      }, {
        default: () => {
          var d;
          return [u("span", {
            class: "v-expansion-panel-title__icon"
          }, [((d = t.actions) == null ? void 0 : d.call(t, r.value)) ?? u(ke, null, null)])];
        }
      })]), [[ft("ripple"), e.ripple]]);
    }), {};
  }
}), kc = p({
  title: String,
  text: String,
  bgColor: String,
  ...je(),
  ...xn(),
  ...pe(),
  ...fe(),
  ...Sc(),
  ...bc()
}, "VExpansionPanel"), Fy = R()({
  name: "VExpansionPanel",
  props: kc(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = wn(e, oa), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve(e, "bgColor"), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Fe(e), s = b(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = b(() => a.group.items.value.reduce((f, g, h) => (a.group.selected.value.includes(g.id) && f.push(h), f), [])), d = b(() => {
      const f = a.group.items.value.findIndex((g) => g.id === a.id);
      return !a.isSelected.value && c.value.some((g) => g - f === 1);
    }), v = b(() => {
      const f = a.group.items.value.findIndex((g) => g.id === a.id);
      return !a.isSelected.value && c.value.some((g) => g - f === -1);
    });
    return Be(oa, a), z(() => {
      const f = !!(t.text || e.text), g = !!(t.title || e.title), h = fi.filterProps(e), y = vi.filterProps(e);
      return u(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": d.value,
          "v-expansion-panel--after-active": v.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => [u("div", {
          class: ["v-expansion-panel__shadow", ...o.value]
        }, null), u(me, {
          defaults: {
            VExpansionPanelTitle: {
              ...h
            },
            VExpansionPanelText: {
              ...y
            }
          }
        }, {
          default: () => {
            var m;
            return [g && u(fi, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), f && u(vi, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (m = t.default) == null ? void 0 : m.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), $y = ["default", "accordion", "inset", "popout"], Ly = p({
  flat: Boolean,
  ...kn(),
  ...Ot(kc(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ye(),
  ...ne(),
  ...fe(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => $y.includes(e)
  }
}, "VExpansionPanels"), Oy = R()({
  name: "VExpansionPanels",
  props: Ly(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = Ut(e, oa), {
      themeClasses: i
    } = we(e), o = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return Me({
      VExpansionPanel: {
        bgColor: $(e, "bgColor"),
        collapseIcon: $(e, "collapseIcon"),
        color: $(e, "color"),
        eager: $(e, "eager"),
        elevation: $(e, "elevation"),
        expandIcon: $(e, "expandIcon"),
        focusable: $(e, "focusable"),
        hideActions: $(e, "hideActions"),
        readonly: $(e, "readonly"),
        ripple: $(e, "ripple"),
        rounded: $(e, "rounded"),
        static: $(e, "static")
      }
    }), z(() => u(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), Ry = p({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...Te(Ja({
    active: !0
  }), ["location"]),
  ...hn(),
  ...Rt(),
  ...Pt({
    transition: "fab-transition"
  })
}, "VFab"), Ny = R()({
  name: "VFab",
  props: Ry(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = K(56), i = j(), {
      resizeRef: o
    } = Ct((v) => {
      v.length && (l.value = v[0].target.clientHeight);
    }), r = b(() => e.app || e.absolute), s = b(() => {
      var v;
      return r.value ? ((v = e.location) == null ? void 0 : v.split(" ").shift()) ?? "bottom" : !1;
    }), c = b(() => {
      var v;
      return r.value ? ((v = e.location) == null ? void 0 : v.split(" ")[1]) ?? "end" : !1;
    });
    ot(() => e.app, () => {
      const v = yn({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: b(() => e.layout ? l.value + 24 : 0),
        elementSize: b(() => l.value + 24),
        active: b(() => e.app && a.value),
        absolute: $(e, "absolute")
      });
      $e(() => {
        i.value = v.layoutItemStyles.value;
      });
    });
    const d = j();
    return z(() => {
      const v = he.filterProps(e);
      return u("div", {
        ref: d,
        class: ["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: r.value,
          [`v-fab--${c.value}`]: r.value
        }, e.class],
        style: [e.app ? {
          ...i.value
        } : {
          height: e.absolute ? "100%" : "inherit"
        }, e.style]
      }, [u("div", {
        class: "v-fab__container"
      }, [u(tt, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [Ae(u(he, H({
          ref: o
        }, v, {
          active: void 0,
          location: void 0
        }), t), [[Vt, e.active]])]
      })])]);
    }), {};
  }
}), Hy = p({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  ...Nt({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => _e(e).every((n) => n != null && typeof n == "object")
  },
  ...ha({
    clearable: !0
  })
}, "VFileInput"), zy = R()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: Hy(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = De(), o = ie(e, "modelValue", e.modelValue, (C) => _e(C), (C) => !e.multiple && Array.isArray(C) ? C[0] : C), {
      isFocused: r,
      focus: s,
      blur: c
    } = Dt(e), d = b(() => typeof e.showSize != "boolean" ? e.showSize : void 0), v = b(() => (o.value ?? []).reduce((C, x) => {
      let {
        size: D = 0
      } = x;
      return C + D;
    }, 0)), f = b(() => Co(v.value, d.value)), g = b(() => (o.value ?? []).map((C) => {
      const {
        name: x = "",
        size: D = 0
      } = C;
      return e.showSize ? `${x} (${Co(D, d.value)})` : x;
    })), h = b(() => {
      var x;
      const C = ((x = o.value) == null ? void 0 : x.length) ?? 0;
      return e.showSize ? i(e.counterSizeString, C, f.value) : i(e.counterString, C);
    }), y = j(), m = j(), S = j(), k = b(() => r.value || e.active), V = b(() => ["plain", "underlined"].includes(e.variant));
    function A() {
      var C;
      S.value !== document.activeElement && ((C = S.value) == null || C.focus()), r.value || s();
    }
    function I(C) {
      var x;
      (x = S.value) == null || x.click();
    }
    function _(C) {
      a("mousedown:control", C);
    }
    function B(C) {
      var x;
      (x = S.value) == null || x.click(), a("click:control", C);
    }
    function w(C) {
      C.stopPropagation(), A(), xe(() => {
        o.value = [], ja(e["onClick:clear"], C);
      });
    }
    function P(C) {
      C.preventDefault();
    }
    function T(C) {
      C.preventDefault(), C.dataTransfer && (o.value = [...C.dataTransfer.files ?? []]);
    }
    return Z(o, (C) => {
      (!Array.isArray(C) || !C.length) && S.value && (S.value.value = "");
    }), z(() => {
      const C = !!(l.counter || e.counter), x = !!(C || l.details), [D, M] = Yt(t), {
        modelValue: L,
        ...W
      } = Ze.filterProps(e), J = ji(e);
      return u(Ze, H({
        ref: y,
        modelValue: e.multiple ? o.value : o.value[0],
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": V.value
        }, e.class],
        style: e.style,
        "onClick:prepend": I
      }, D, W, {
        centerAffix: !V.value,
        focused: r.value
      }), {
        ...l,
        default: (N) => {
          let {
            id: O,
            isDisabled: E,
            isDirty: F,
            isReadonly: Y,
            isValid: X
          } = N;
          return u(Yn, H({
            ref: m,
            "prepend-icon": e.prependIcon,
            onMousedown: _,
            onClick: B,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, J, {
            id: O.value,
            active: k.value || F.value,
            dirty: F.value || e.dirty,
            disabled: E.value,
            focused: r.value,
            error: X.value === !1,
            onDragover: P,
            onDrop: T
          }), {
            ...l,
            default: (Q) => {
              var te;
              let {
                props: {
                  class: re,
                  ...G
                }
              } = Q;
              return u(se, null, [u("input", H({
                ref: S,
                type: "file",
                readonly: Y.value,
                disabled: E.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (le) => {
                  le.stopPropagation(), Y.value && le.preventDefault(), A();
                },
                onChange: (le) => {
                  if (!le.target) return;
                  const Ce = le.target;
                  o.value = [...Ce.files ?? []];
                },
                onFocus: A,
                onBlur: c
              }, G, M), null), u("div", {
                class: re
              }, [!!((te = o.value) != null && te.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: g.value,
                totalBytes: v.value,
                totalBytesReadable: f.value
              }) : e.chips ? g.value.map((le) => u(jn, {
                key: le,
                size: "small",
                text: le
              }, null)) : g.value.join(", "))])]);
            }
          });
        },
        details: x ? (N) => {
          var O, E;
          return u(se, null, [(O = l.details) == null ? void 0 : O.call(l, N), C && u(se, null, [u("span", null, null), u(al, {
            active: !!((E = o.value) != null && E.length),
            value: h.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), yt({}, y, m, S);
  }
}), Wy = p({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...st(),
  ...ne(),
  ...je(),
  ...hn(),
  ...pe(),
  ...fe({
    tag: "footer"
  }),
  ...ye()
}, "VFooter"), jy = R()({
  name: "VFooter",
  props: Wy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), {
      themeClasses: l
    } = we(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ve($(e, "color")), {
      borderClasses: r
    } = ht(e), {
      elevationClasses: s
    } = qe(e), {
      roundedClasses: c
    } = Fe(e), d = K(32), {
      resizeRef: v
    } = Ct((g) => {
      g.length && (d.value = g[0].target.clientHeight);
    }), f = b(() => e.height === "auto" ? d.value : parseInt(e.height, 10));
    return ot(() => e.app, () => {
      const g = yn({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: b(() => "bottom"),
        layoutSize: f,
        elementSize: b(() => e.height === "auto" ? void 0 : f.value),
        active: b(() => e.app),
        absolute: $(e, "absolute")
      });
      $e(() => {
        a.value = g.layoutItemStyles.value;
      });
    }), z(() => u(e.tag, {
      ref: v,
      class: ["v-footer", l.value, i.value, r.value, s.value, c.value, e.class],
      style: [o.value, e.app ? a.value : {
        height: ee(e.height)
      }, e.style]
    }, t)), {};
  }
}), Yy = p({
  ...ne(),
  ...df()
}, "VForm"), Gy = R()({
  name: "VForm",
  props: Yy(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = vf(e), i = j();
    function o(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const c = s, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), a("submit", c), c.defaultPrevented || d.then((v) => {
        var g;
        let {
          valid: f
        } = v;
        f && ((g = i.value) == null || g.submit());
      }), c.preventDefault();
    }
    return z(() => {
      var s;
      return u("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: o,
        onSubmit: r
      }, [(s = t.default) == null ? void 0 : s.call(t, l)]);
    }), yt(l, i);
  }
}), Uy = p({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...Ni()
}, "VHover"), Ky = R()({
  name: "VHover",
  props: Uy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = Hi(e, (o) => !e.disabled && (a.value = o));
    return () => {
      var o;
      return (o = t.default) == null ? void 0 : o.call(t, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), qy = p({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  },
  ...Re(),
  ...fe()
}, "VInfiniteScroll"), sr = mt({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootMargin: String
  },
  emits: {
    intersect: (e, n) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = qa();
    return Z(l, async (i) => {
      t("intersect", e.side, i);
    }), z(() => u("div", {
      class: "v-infinite-scroll-intersect",
      style: {
        "--v-infinite-margin-size": e.rootMargin
      },
      ref: a
    }, [wt(" ")])), {};
  }
}), Xy = R()({
  name: "VInfiniteScroll",
  props: qy(),
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = K("ok"), o = K("ok"), r = b(() => ee(e.margin)), s = K(!1);
    function c(I) {
      if (!l.value) return;
      const _ = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[_] = I;
    }
    function d() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[I];
    }
    function v() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[I];
    }
    function f() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[I];
    }
    at(() => {
      l.value && (e.side === "start" ? c(v()) : e.side === "both" && c(v() / 2 - f() / 2));
    });
    function g(I, _) {
      I === "start" ? i.value = _ : I === "end" && (o.value = _);
    }
    function h(I) {
      return I === "start" ? i.value : o.value;
    }
    let y = 0;
    function m(I, _) {
      s.value = _, s.value && S(I);
    }
    function S(I) {
      if (e.mode !== "manual" && !s.value) return;
      const _ = h(I);
      if (!l.value || ["empty", "loading"].includes(_)) return;
      y = v(), g(I, "loading");
      function B(w) {
        g(I, w), xe(() => {
          w === "empty" || w === "error" || (w === "ok" && I === "start" && c(v() - y + d()), e.mode !== "manual" && xe(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  S(I);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: I,
        done: B
      });
    }
    const {
      t: k
    } = De();
    function V(I, _) {
      var P, T, C, x, D;
      if (e.side !== I && e.side !== "both") return;
      const B = () => S(I), w = {
        side: I,
        props: {
          onClick: B,
          color: e.color
        }
      };
      return _ === "error" ? (P = t.error) == null ? void 0 : P.call(t, w) : _ === "empty" ? ((T = t.empty) == null ? void 0 : T.call(t, w)) ?? u("div", null, [k(e.emptyText)]) : e.mode === "manual" ? _ === "loading" ? ((C = t.loading) == null ? void 0 : C.call(t, w)) ?? u(rn, {
        indeterminate: !0,
        color: e.color
      }, null) : ((x = t["load-more"]) == null ? void 0 : x.call(t, w)) ?? u(he, {
        variant: "outlined",
        color: e.color,
        onClick: B
      }, {
        default: () => [k(e.loadMoreText)]
      }) : ((D = t.loading) == null ? void 0 : D.call(t, w)) ?? u(rn, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: A
    } = Ne(e);
    z(() => {
      const I = e.tag, _ = e.side === "start" || e.side === "both", B = e.side === "end" || e.side === "both", w = e.mode === "intersect";
      return u(I, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": _,
          "v-infinite-scroll--end": B
        }],
        style: A.value
      }, {
        default: () => {
          var P;
          return [u("div", {
            class: "v-infinite-scroll__side"
          }, [V("start", i.value)]), _ && w && u(sr, {
            key: "start",
            side: "start",
            onIntersect: m,
            rootMargin: r.value
          }, null), (P = t.default) == null ? void 0 : P.call(t), B && w && u(sr, {
            key: "end",
            side: "end",
            onIntersect: m,
            rootMargin: r.value
          }, null), u("div", {
            class: "v-infinite-scroll__side"
          }, [V("end", o.value)])];
        }
      });
    });
  }
}), xc = Symbol.for("vuetify:v-item-group"), Zy = p({
  ...ne(),
  ...kn({
    selectedClass: "v-item--selected"
  }),
  ...fe(),
  ...ye()
}, "VItemGroup"), Jy = R()({
  name: "VItemGroup",
  props: Zy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = Ut(e, xc);
    return () => u(e.tag, {
      class: ["v-item-group", a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = t.default) == null ? void 0 : c.call(t, {
          isSelected: l,
          select: i,
          next: o,
          prev: r,
          selected: s.value
        })];
      }
    });
  }
}), Qy = R()({
  name: "VItem",
  props: xn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      select: l,
      toggle: i,
      selectedClass: o,
      value: r,
      disabled: s
    } = wn(e, xc);
    return () => {
      var c;
      return (c = t.default) == null ? void 0 : c.call(t, {
        isSelected: a.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: r.value,
        disabled: s.value
      });
    };
  }
}), eb = At("v-kbd", "kbd"), tb = p({
  ...ne(),
  ...Re(),
  ...Zr()
}, "VLayout"), nb = R()({
  name: "VLayout",
  props: tb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = Qr(e), {
      dimensionStyles: s
    } = Ne(e);
    return z(() => {
      var c;
      return u("div", {
        ref: r,
        class: [a.value, e.class],
        style: [s.value, l.value, e.style]
      }, [(c = t.default) == null ? void 0 : c.call(t)]);
    }), {
      getLayoutItem: i,
      items: o
    };
  }
}), ab = p({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...ne(),
  ...hn()
}, "VLayoutItem"), lb = R()({
  name: "VLayoutItem",
  props: ab(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutItemStyles: a
    } = yn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: $(e, "position"),
      elementSize: $(e, "size"),
      layoutSize: $(e, "size"),
      active: $(e, "modelValue"),
      absolute: $(e, "absolute")
    });
    return () => {
      var l;
      return u("div", {
        class: ["v-layout-item", e.class],
        style: [a.value, e.style]
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), ib = p({
  modelValue: Boolean,
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
  ...ne(),
  ...Re(),
  ...fe(),
  ...Pt({
    transition: "fade-transition"
  })
}, "VLazy"), ob = R()({
  name: "VLazy",
  directives: {
    intersect: sa
  },
  props: ib(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Ne(e), l = ie(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return z(() => Ae(u(e.tag, {
      class: ["v-lazy", e.class],
      style: [a.value, e.style]
    }, {
      default: () => [l.value && u(tt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t)];
        }
      })]
    }), [[ft("intersect"), {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), rb = p({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...ne()
}, "VLocaleProvider"), ub = R()({
  name: "VLocaleProvider",
  props: rb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = nv(e);
    return z(() => {
      var l;
      return u("div", {
        class: ["v-locale-provider", a.value, e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), sb = p({
  scrollable: Boolean,
  ...ne(),
  ...Re(),
  ...fe({
    tag: "main"
  })
}, "VMain"), cb = R()({
  name: "VMain",
  props: sb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Ne(e), {
      mainStyles: l
    } = Jr(), {
      ssrBootStyles: i
    } = bn();
    return z(() => u(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [l.value, i.value, a.value, e.style]
    }, {
      default: () => {
        var o, r;
        return [e.scrollable ? u("div", {
          class: "v-main__scroller"
        }, [(o = t.default) == null ? void 0 : o.call(t)]) : (r = t.default) == null ? void 0 : r.call(t)];
      }
    })), {};
  }
});
function db(e) {
  let {
    rootEl: n,
    isSticky: t,
    layoutItemStyles: a
  } = e;
  const l = K(!1), i = K(0), o = b(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [t.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: ee(i.value)
    } : {
      top: a.value.top
    }];
  });
  at(() => {
    Z(t, (c) => {
      c ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), Je(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const c = r > window.scrollY ? "up" : "down", d = n.value.getBoundingClientRect(), v = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, i.value - v), g = d.height + Math.max(i.value, v) - window.scrollY - window.innerHeight, h = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
    d.height < window.innerHeight - v ? (l.value = "top", i.value = v) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + d.top - h, l.value = !0) : c === "down" && g <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && f <= 0 && (h ? l.value !== "top" && (i.value = -f + h + v, l.value = "top") : (i.value = d.top + f, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const vb = 100, fb = 20;
function cr(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function dr(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = cr(n), l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (l - a) * Math.abs(l), t === e.length - 1 && (n *= 0.5);
  }
  return cr(n) * 1e3;
}
function mb() {
  const e = {};
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new vd(fb))).push([l.timeStamp, i]);
    });
  }
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], s = [];
    for (const d of i) {
      if (o[0] - d[0] > vb) break;
      r.push({
        t: d[0],
        d: d[1].clientX
      }), s.push({
        t: d[0],
        d: d[1].clientY
      });
    }
    return {
      x: dr(r),
      y: dr(s),
      get direction() {
        const {
          x: d,
          y: v
        } = this, [f, g] = [Math.abs(d), Math.abs(v)];
        return f > g && d >= 0 ? "right" : f > g && d <= 0 ? "left" : g > f && v >= 0 ? "down" : g > f && v <= 0 ? "up" : gb();
      }
    };
  }
  return {
    addMovement: n,
    endTouch: t,
    getVelocity: a
  };
}
function gb() {
  throw new Error();
}
function hb(e) {
  let {
    el: n,
    isActive: t,
    isTemporary: a,
    width: l,
    touchless: i,
    position: o
  } = e;
  at(() => {
    window.addEventListener("touchstart", k, {
      passive: !0
    }), window.addEventListener("touchmove", V, {
      passive: !1
    }), window.addEventListener("touchend", A, {
      passive: !0
    });
  }), Je(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", V), window.removeEventListener("touchend", A);
  });
  const r = b(() => ["left", "right"].includes(o.value)), {
    addMovement: s,
    endTouch: c,
    getVelocity: d
  } = mb();
  let v = !1;
  const f = K(!1), g = K(0), h = K(0);
  let y;
  function m(_, B) {
    return (o.value === "left" ? _ : o.value === "right" ? document.documentElement.clientWidth - _ : o.value === "top" ? _ : o.value === "bottom" ? document.documentElement.clientHeight - _ : An()) - (B ? l.value : 0);
  }
  function S(_) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const w = o.value === "left" ? (_ - h.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - _ - h.value) / l.value : o.value === "top" ? (_ - h.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - _ - h.value) / l.value : An();
    return B ? Math.max(0, Math.min(1, w)) : w;
  }
  function k(_) {
    if (i.value) return;
    const B = _.changedTouches[0].clientX, w = _.changedTouches[0].clientY, P = 25, T = o.value === "left" ? B < P : o.value === "right" ? B > document.documentElement.clientWidth - P : o.value === "top" ? w < P : o.value === "bottom" ? w > document.documentElement.clientHeight - P : An(), C = t.value && (o.value === "left" ? B < l.value : o.value === "right" ? B > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : An());
    (T || C || t.value && a.value) && (y = [B, w], h.value = m(r.value ? B : w, t.value), g.value = S(r.value ? B : w), v = h.value > -20 && h.value < 80, c(_), s(_));
  }
  function V(_) {
    const B = _.changedTouches[0].clientX, w = _.changedTouches[0].clientY;
    if (v) {
      if (!_.cancelable) {
        v = !1;
        return;
      }
      const T = Math.abs(B - y[0]), C = Math.abs(w - y[1]);
      (r.value ? T > C && T > 3 : C > T && C > 3) ? (f.value = !0, v = !1) : (r.value ? C : T) > 3 && (v = !1);
    }
    if (!f.value) return;
    _.preventDefault(), s(_);
    const P = S(r.value ? B : w, !1);
    g.value = Math.max(0, Math.min(1, P)), P > 1 ? h.value = m(r.value ? B : w, !0) : P < 0 && (h.value = m(r.value ? B : w, !1));
  }
  function A(_) {
    if (v = !1, !f.value) return;
    s(_), f.value = !1;
    const B = d(_.changedTouches[0].identifier), w = Math.abs(B.x), P = Math.abs(B.y);
    (r.value ? w > P && w > 400 : P > w && P > 3) ? t.value = B.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || An()) : t.value = g.value > 0.5;
  }
  const I = b(() => f.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${g.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${g.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${g.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${g.value * l.value}px))` : An(),
    transition: "none"
  } : void 0);
  return ot(f, () => {
    var w, P;
    const _ = ((w = n.value) == null ? void 0 : w.style.transform) ?? null, B = ((P = n.value) == null ? void 0 : P.style.transition) ?? null;
    $e(() => {
      var T, C, x, D;
      (C = n.value) == null || C.style.setProperty("transform", ((T = I.value) == null ? void 0 : T.transform) || "none"), (D = n.value) == null || D.style.setProperty("transition", ((x = I.value) == null ? void 0 : x.transition) || null);
    }), lt(() => {
      var T, C;
      (T = n.value) == null || T.style.setProperty("transform", _), (C = n.value) == null || C.style.setProperty("transition", B);
    });
  }), {
    isDragging: f,
    dragProgress: g,
    dragStyles: I
  };
}
function An() {
  throw new Error();
}
const yb = ["start", "end", "left", "right", "top", "bottom"], bb = p({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => yb.includes(e)
  },
  sticky: Boolean,
  ...st(),
  ...ne(),
  ...Ni(),
  ...Vn({
    mobile: null
  }),
  ...je(),
  ...hn(),
  ...pe(),
  ...fe({
    tag: "nav"
  }),
  ...ye()
}, "VNavigationDrawer"), Sb = R()({
  name: "VNavigationDrawer",
  props: bb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      isRtl: i
    } = We(), {
      themeClasses: o
    } = we(e), {
      borderClasses: r
    } = ht(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: c
    } = Ve($(e, "color")), {
      elevationClasses: d
    } = qe(e), {
      displayClasses: v,
      mobile: f
    } = kt(e), {
      roundedClasses: g
    } = Fe(e), h = gu(), y = ie(e, "modelValue", null, (E) => !!E), {
      ssrBootStyles: m
    } = bn(), {
      scopeId: S
    } = Pn(), k = j(), V = K(!1), {
      runOpenDelay: A,
      runCloseDelay: I
    } = Hi(e, (E) => {
      V.value = E;
    }), _ = b(() => e.rail && e.expandOnHover && V.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), B = b(() => El(e.location, i.value)), w = b(() => e.persistent), P = b(() => !e.permanent && (f.value || e.temporary)), T = b(() => e.sticky && !P.value && B.value !== "bottom");
    ot(() => e.expandOnHover && e.rail != null, () => {
      Z(V, (E) => a("update:rail", !E));
    }), ot(() => !e.disableResizeWatcher, () => {
      Z(P, (E) => !e.permanent && xe(() => y.value = !E));
    }), ot(() => !e.disableRouteWatcher && !!h, () => {
      Z(h.currentRoute, () => P.value && (y.value = !1));
    }), Z(() => e.permanent, (E) => {
      E && (y.value = !0);
    }), e.modelValue == null && !P.value && (y.value = e.permanent || !f.value);
    const {
      isDragging: C,
      dragProgress: x
    } = hb({
      el: k,
      isActive: y,
      isTemporary: P,
      width: _,
      touchless: $(e, "touchless"),
      position: B
    }), D = b(() => {
      const E = P.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : _.value;
      return C.value ? E * x.value : E;
    }), {
      layoutItemStyles: M,
      layoutItemScrimStyles: L
    } = yn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: B,
      layoutSize: D,
      elementSize: _,
      active: b(() => y.value || C.value),
      disableTransitions: b(() => C.value),
      absolute: b(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || T.value && typeof W.value != "string"
      ))
    }), {
      isStuck: W,
      stickyStyles: J
    } = db({
      rootEl: k,
      isSticky: T,
      layoutItemStyles: M
    }), N = Ve(b(() => typeof e.scrim == "string" ? e.scrim : null)), O = b(() => ({
      ...C.value ? {
        opacity: x.value * 0.2,
        transition: "none"
      } : void 0,
      ...L.value
    }));
    return Me({
      VList: {
        bgColor: "transparent"
      }
    }), z(() => {
      const E = l.image || e.image;
      return u(se, null, [u(e.tag, H({
        ref: k,
        onMouseenter: A,
        onMouseleave: I,
        class: ["v-navigation-drawer", `v-navigation-drawer--${B.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": V.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": P.value,
          "v-navigation-drawer--persistent": w.value,
          "v-navigation-drawer--active": y.value,
          "v-navigation-drawer--sticky": T.value
        }, o.value, s.value, r.value, v.value, d.value, g.value, e.class],
        style: [c.value, M.value, m.value, J.value, e.style]
      }, S, t), {
        default: () => {
          var F, Y, X;
          return [E && u("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? u(me, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : u(Et, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && u("div", {
            class: "v-navigation-drawer__prepend"
          }, [(F = l.prepend) == null ? void 0 : F.call(l)]), u("div", {
            class: "v-navigation-drawer__content"
          }, [(Y = l.default) == null ? void 0 : Y.call(l)]), l.append && u("div", {
            class: "v-navigation-drawer__append"
          }, [(X = l.append) == null ? void 0 : X.call(l)])];
        }
      }), u(zt, {
        name: "fade-transition"
      }, {
        default: () => [P.value && (C.value || y.value) && !!e.scrim && u("div", H({
          class: ["v-navigation-drawer__scrim", N.backgroundColorClasses.value],
          style: [O.value, N.backgroundColorStyles.value],
          onClick: () => {
            w.value || (y.value = !1);
          }
        }, S), null)]
      })]);
    }), {
      isStuck: W
    };
  }
}), kb = mt({
  name: "VNoSsr",
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ns();
    return () => {
      var l;
      return a.value && ((l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), xb = p({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...Re(),
  ...Wn(),
  ...Ot(ha({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), wb = R()({
  name: "VOtpInput",
  props: xb(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      dimensionStyles: i
    } = Ne(e), {
      isFocused: o,
      focus: r,
      blur: s
    } = Dt(e), c = ie(e, "modelValue", "", (w) => w == null ? [] : String(w).split(""), (w) => w.join("")), {
      t: d
    } = De(), v = b(() => Number(e.length)), f = b(() => Array(v.value).fill(0)), g = j(-1), h = j(), y = j([]), m = b(() => y.value[g.value]);
    function S() {
      if (B(m.value.value)) {
        m.value.value = "";
        return;
      }
      const w = c.value.slice(), P = m.value.value;
      w[g.value] = P;
      let T = null;
      g.value > c.value.length ? T = c.value.length + 1 : g.value + 1 !== v.value && (T = "next"), c.value = w, T && nn(h.value, T);
    }
    function k(w) {
      const P = c.value.slice(), T = g.value;
      let C = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(w.key) && (w.preventDefault(), w.key === "ArrowLeft" ? C = "prev" : w.key === "ArrowRight" ? C = "next" : ["Backspace", "Delete"].includes(w.key) && (P[g.value] = "", c.value = P, g.value > 0 && w.key === "Backspace" ? C = "prev" : requestAnimationFrame(() => {
        var x;
        (x = y.value[T]) == null || x.select();
      })), requestAnimationFrame(() => {
        C != null && nn(h.value, C);
      }));
    }
    function V(w, P) {
      var C, x;
      P.preventDefault(), P.stopPropagation();
      const T = ((C = P == null ? void 0 : P.clipboardData) == null ? void 0 : C.getData("Text").slice(0, v.value)) ?? "";
      B(T) || (c.value = T.split(""), (x = y.value) == null || x[w].blur());
    }
    function A() {
      c.value = [];
    }
    function I(w, P) {
      r(), g.value = P;
    }
    function _() {
      s(), g.value = -1;
    }
    function B(w) {
      return e.type === "number" && /[^0-9]/g.test(w);
    }
    return Me({
      VField: {
        color: b(() => e.color),
        bgColor: b(() => e.color),
        baseColor: b(() => e.baseColor),
        disabled: b(() => e.disabled),
        error: b(() => e.error),
        variant: b(() => e.variant)
      }
    }, {
      scoped: !0
    }), Z(c, (w) => {
      w.length === v.value && a("finish", w.join(""));
    }, {
      deep: !0
    }), Z(g, (w) => {
      w < 0 || xe(() => {
        var P;
        (P = y.value[w]) == null || P.select();
      });
    }), z(() => {
      var T;
      const [w, P] = Yt(t);
      return u("div", H({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, w), [u("div", {
        ref: h,
        class: "v-otp-input__content",
        style: [i.value]
      }, [f.value.map((C, x) => u(se, null, [e.divider && x !== 0 && u("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), u(Yn, {
        focused: o.value && e.focusAll || g.value === x,
        key: x
      }, {
        ...l,
        loader: void 0,
        default: () => u("input", {
          ref: (D) => y.value[x] = D,
          "aria-label": d(e.label, x + 1),
          autofocus: x === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ["v-otp-input__field"],
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: c.value[x],
          onInput: S,
          onFocus: (D) => I(D, x),
          onBlur: _,
          onKeydown: k,
          onPaste: (D) => V(x, D)
        }, null)
      })])), u("input", H({
        class: "v-otp-input-input",
        type: "hidden"
      }, P, {
        value: c.value.join("")
      }), null), u(It, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var C;
          return [((C = l.loader) == null ? void 0 : C.call(l)) ?? u(rn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (T = l.default) == null ? void 0 : T.call(l)])]);
    }), {
      blur: () => {
        var w;
        (w = y.value) == null || w.some((P) => P.blur());
      },
      focus: () => {
        var w;
        (w = y.value) == null || w[0].focus();
      },
      reset: A,
      isFocused: o
    };
  }
});
function Cb(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const Vb = p({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...ne()
}, "VParallax"), Pb = R()({
  name: "VParallax",
  props: Vb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = qa(), {
      resizeRef: i,
      contentRect: o
    } = Ct(), {
      height: r
    } = kt(), s = j();
    $e(() => {
      var g;
      a.value = i.value = (g = s.value) == null ? void 0 : g.$el;
    });
    let c;
    Z(l, (g) => {
      g ? (c = Vi(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", f, {
        passive: !0
      }), f()) : c.removeEventListener("scroll", f);
    }), Je(() => {
      c == null || c.removeEventListener("scroll", f);
    }), Z(r, f), Z(() => {
      var g;
      return (g = o.value) == null ? void 0 : g.height;
    }, f);
    const d = b(() => 1 - Oe(+e.scale));
    let v = -1;
    function f() {
      l.value && (cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        var I;
        const g = ((I = s.value) == null ? void 0 : I.$el).querySelector(".v-img__img");
        if (!g) return;
        const h = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, y = c instanceof Document ? window.scrollY : c.scrollTop, m = a.value.getBoundingClientRect().top + y, S = o.value.height, k = m + (S - h) / 2, V = Cb((y - k) * d.value), A = Math.max(1, (d.value * (h - S) + S) / S);
        g.style.setProperty("transform", `translateY(${V}px) scale(${A})`);
      }));
    }
    return z(() => u(Et, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: s,
      cover: !0,
      onLoadstart: f,
      onLoad: f
    }, t)), {};
  }
}), Ib = p({
  ...Qa({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), _b = R()({
  name: "VRadio",
  props: Ib(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = Wt.filterProps(e);
      return u(Wt, H(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), t);
    }), {};
  }
}), Ab = p({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Nt(),
  ...Te(Ei(), ["multiple"]),
  trueIcon: {
    type: oe,
    default: "$radioOn"
  },
  falseIcon: {
    type: oe,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), Tb = R()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: Ab(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = Ke(), i = b(() => e.id || `radio-group-${l}`), o = ie(e, "modelValue");
    return z(() => {
      const [r, s] = Yt(t), c = Ze.filterProps(e), d = Wt.filterProps(e), v = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return u(Ze, H({
        class: ["v-radio-group", e.class],
        style: e.style
      }, r, c, {
        modelValue: o.value,
        "onUpdate:modelValue": (f) => o.value = f,
        id: i.value
      }), {
        ...a,
        default: (f) => {
          let {
            id: g,
            messagesId: h,
            isDisabled: y,
            isReadonly: m
          } = f;
          return u(se, null, [v && u(zn, {
            id: g.value
          }, {
            default: () => [v]
          }), u(Iu, H(d, {
            id: g.value,
            "aria-describedby": h.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: y.value,
            readonly: m.value,
            "aria-labelledby": v ? g.value : void 0,
            multiple: !1
          }, s, {
            modelValue: o.value,
            "onUpdate:modelValue": (S) => o.value = S
          }), a)]);
        }
      });
    }), {};
  }
}), Bb = p({
  ...Wn(),
  ...Nt(),
  ...Cs(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), Db = R()({
  name: "VRangeSlider",
  props: Bb(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = j(), o = j(), {
      rtlClasses: r
    } = We();
    function s(T) {
      if (!l.value || !i.value) return;
      const C = Ql(T, l.value.$el, e.direction), x = Ql(T, i.value.$el, e.direction), D = Math.abs(C), M = Math.abs(x);
      return D < M || D === M && C < 0 ? l.value.$el : i.value.$el;
    }
    const c = Vs(e), d = ie(e, "modelValue", void 0, (T) => T != null && T.length ? T.map((C) => c.roundValue(C)) : [0, 0]), {
      activeThumbRef: v,
      hasLabels: f,
      max: g,
      min: h,
      mousePressed: y,
      onSliderMousedown: m,
      onSliderTouchstart: S,
      position: k,
      trackContainerRef: V,
      readonly: A
    } = Ps({
      props: e,
      steps: c,
      onSliderStart: () => {
        a("start", d.value);
      },
      onSliderEnd: (T) => {
        var D;
        let {
          value: C
        } = T;
        const x = v.value === ((D = l.value) == null ? void 0 : D.$el) ? [C, d.value[1]] : [d.value[0], C];
        !e.strict && x[0] < x[1] && (d.value = x), a("end", d.value);
      },
      onSliderMove: (T) => {
        var M, L, W, J;
        let {
          value: C
        } = T;
        const [x, D] = d.value;
        !e.strict && x === D && x !== h.value && (v.value = C > x ? (M = i.value) == null ? void 0 : M.$el : (L = l.value) == null ? void 0 : L.$el, (W = v.value) == null || W.focus()), v.value === ((J = l.value) == null ? void 0 : J.$el) ? d.value = [Math.min(C, D), D] : d.value = [x, Math.max(x, C)];
      },
      getActiveThumb: s
    }), {
      isFocused: I,
      focus: _,
      blur: B
    } = Dt(e), w = b(() => k(d.value[0])), P = b(() => k(d.value[1]));
    return z(() => {
      const T = Ze.filterProps(e), C = !!(e.label || t.label || t.prepend);
      return u(Ze, H({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!t["tick-label"] || f.value,
          "v-slider--focused": I.value,
          "v-slider--pressed": y.value,
          "v-slider--disabled": e.disabled
        }, r.value, e.class],
        style: e.style,
        ref: o
      }, T, {
        focused: I.value
      }), {
        ...t,
        prepend: C ? (x) => {
          var D, M;
          return u(se, null, [((D = t.label) == null ? void 0 : D.call(t, x)) ?? (e.label ? u(zn, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (M = t.prepend) == null ? void 0 : M.call(t, x)]);
        } : void 0,
        default: (x) => {
          var L, W;
          let {
            id: D,
            messagesId: M
          } = x;
          return u("div", {
            class: "v-slider__container",
            onMousedown: A.value ? void 0 : m,
            onTouchstartPassive: A.value ? void 0 : S
          }, [u("input", {
            id: `${D.value}_start`,
            name: e.name || D.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[0]
          }, null), u("input", {
            id: `${D.value}_stop`,
            name: e.name || D.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[1]
          }, null), u(Is, {
            ref: V,
            start: w.value,
            stop: P.value
          }, {
            "tick-label": t["tick-label"]
          }), u(ei, {
            ref: l,
            "aria-describedby": M.value,
            focused: I && v.value === ((L = l.value) == null ? void 0 : L.$el),
            modelValue: d.value[0],
            "onUpdate:modelValue": (J) => d.value = [J, d.value[1]],
            onFocus: (J) => {
              var N, O, E, F;
              _(), v.value = (N = l.value) == null ? void 0 : N.$el, g.value !== h.value && d.value[0] === d.value[1] && d.value[1] === h.value && J.relatedTarget !== ((O = i.value) == null ? void 0 : O.$el) && ((E = l.value) == null || E.$el.blur(), (F = i.value) == null || F.$el.focus());
            },
            onBlur: () => {
              B(), v.value = void 0;
            },
            min: h.value,
            max: d.value[1],
            position: w.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          }), u(ei, {
            ref: i,
            "aria-describedby": M.value,
            focused: I && v.value === ((W = i.value) == null ? void 0 : W.$el),
            modelValue: d.value[1],
            "onUpdate:modelValue": (J) => d.value = [d.value[0], J],
            onFocus: (J) => {
              var N, O, E, F;
              _(), v.value = (N = i.value) == null ? void 0 : N.$el, g.value !== h.value && d.value[0] === d.value[1] && d.value[0] === g.value && J.relatedTarget !== ((O = l.value) == null ? void 0 : O.$el) && ((E = i.value) == null || E.$el.blur(), (F = l.value) == null || F.$el.focus());
            },
            onBlur: () => {
              B(), v.value = void 0;
            },
            min: d.value[0],
            max: g.value,
            position: P.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), pb = p({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: oe,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: oe,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean,
  ...ne(),
  ...Ye(),
  ...Tt(),
  ...fe(),
  ...ye()
}, "VRating"), Mb = R()({
  name: "VRating",
  props: pb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), {
      themeClasses: l
    } = we(e), i = ie(e, "modelValue"), o = b(() => Oe(parseFloat(i.value), 0, +e.length)), r = b(() => dt(Number(e.length), 1)), s = b(() => r.value.flatMap((y) => e.halfIncrements ? [y - 0.5, y] : [y])), c = K(-1), d = b(() => s.value.map((y) => {
      const m = e.hover && c.value > -1, S = o.value >= y, k = c.value >= y, A = (m ? k : S) ? e.fullIcon : e.emptyIcon, I = e.activeColor ?? e.color, _ = S || k ? I : e.color;
      return {
        isFilled: S,
        isHovered: k,
        icon: A,
        color: _
      };
    })), v = b(() => [0, ...s.value].map((y) => {
      function m() {
        c.value = y;
      }
      function S() {
        c.value = -1;
      }
      function k() {
        e.disabled || e.readonly || (i.value = o.value === y && e.clearable ? 0 : y);
      }
      return {
        onMouseenter: e.hover ? m : void 0,
        onMouseleave: e.hover ? S : void 0,
        onClick: k
      };
    })), f = b(() => e.name ?? `v-rating-${Ke()}`);
    function g(y) {
      var w, P;
      let {
        value: m,
        index: S,
        showStar: k = !0
      } = y;
      const {
        onMouseenter: V,
        onMouseleave: A,
        onClick: I
      } = v.value[S + 1], _ = `${f.value}-${String(m).replace(".", "-")}`, B = {
        color: (w = d.value[S]) == null ? void 0 : w.color,
        density: e.density,
        disabled: e.disabled,
        icon: (P = d.value[S]) == null ? void 0 : P.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return u(se, null, [u("label", {
        for: _,
        class: {
          "v-rating__item--half": e.halfIncrements && m % 1 > 0,
          "v-rating__item--full": e.halfIncrements && m % 1 === 0
        },
        onMouseenter: V,
        onMouseleave: A,
        onClick: I
      }, [u("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, m, e.length)]), k ? t.item ? t.item({
        ...d.value[S],
        props: B,
        value: m,
        index: S,
        rating: o.value
      }) : u(he, H({
        "aria-label": a(e.itemAriaLabel, m, e.length)
      }, B), null) : void 0]), u("input", {
        class: "v-rating__hidden",
        name: f.value,
        id: _,
        type: "radio",
        value: m,
        checked: o.value === m,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function h(y) {
      return t["item-label"] ? t["item-label"](y) : y.label ? u("span", null, [y.label]) : u("span", null, [wt(" ")]);
    }
    return z(() => {
      var m;
      const y = !!((m = e.itemLabels) != null && m.length) || t["item-label"];
      return u(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [u(g, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), r.value.map((S, k) => {
          var V, A;
          return u("div", {
            class: "v-rating__wrapper"
          }, [y && e.itemLabelPosition === "top" ? h({
            value: S,
            index: k,
            label: (V = e.itemLabels) == null ? void 0 : V[k]
          }) : void 0, u("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? u(se, null, [u(g, {
            value: S - 0.5,
            index: k * 2
          }, null), u(g, {
            value: S,
            index: k * 2 + 1
          }, null)]) : u(g, {
            value: S,
            index: k
          }, null)]), y && e.itemLabelPosition === "bottom" ? h({
            value: S,
            index: k,
            label: (A = e.itemLabels) == null ? void 0 : A[k]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), Eb = {
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
function Fb(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return u("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [n]);
}
function vr(e) {
  const [n, t] = e.split("@");
  return Array.from({
    length: t
  }).map(() => bl(n));
}
function bl(e) {
  let n = [];
  if (!e) return n;
  const t = Eb[e];
  if (e !== t) {
    if (e.includes(",")) return fr(e);
    if (e.includes("@")) return vr(e);
    t.includes(",") ? n = fr(t) : t.includes("@") ? n = vr(t) : t && n.push(bl(t));
  }
  return [Fb(e, n)];
}
function fr(e) {
  return e.replace(/\s/g, "").split(",").map(bl);
}
const $b = p({
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
  ...Re(),
  ...je(),
  ...ye()
}, "VSkeletonLoader"), Lb = R()({
  name: "VSkeletonLoader",
  props: $b(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ve($(e, "color")), {
      dimensionStyles: i
    } = Ne(e), {
      elevationClasses: o
    } = qe(e), {
      themeClasses: r
    } = we(e), {
      t: s
    } = De(), c = b(() => bl(_e(e.type).join(",")));
    return z(() => {
      var f;
      const d = !t.default || e.loading, v = e.boilerplate || !d ? {} : {
        ariaLive: "polite",
        ariaLabel: s(e.loadingText),
        role: "alert"
      };
      return u("div", H({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, r.value, a.value, o.value],
        style: [l.value, d ? i.value : {}]
      }, v), [d ? c.value : (f = t.default) == null ? void 0 : f.call(t)]);
    }), {};
  }
}), Ob = R()({
  name: "VSlideGroupItem",
  props: xn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = wn(e, Lu);
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function Rb(e) {
  const n = K(e());
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), xe(() => n.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const d = performance.now() - c + s;
      n.value = Math.max(e() - d, 0), n.value <= 0 && a();
    }, s);
  }
  return lt(a), {
    clear: a,
    time: n,
    start: i,
    reset: l
  };
}
const Nb = p({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...Rt({
    location: "bottom"
  }),
  ...Nn(),
  ...pe(),
  ...St(),
  ...ye(),
  ...Te(ga({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), Hb = R()({
  name: "VSnackbar",
  props: Nb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      positionClasses: l
    } = Hn(e), {
      scopeId: i
    } = Pn(), {
      themeClasses: o
    } = we(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = Sn(e), {
      roundedClasses: d
    } = Fe(e), v = Rb(() => Number(e.timeout)), f = j(), g = j(), h = K(!1), y = K(0), m = j(), S = be(Zn, void 0);
    ot(() => !!S, () => {
      const C = Jr();
      $e(() => {
        m.value = C.mainStyles.value;
      });
    }), Z(a, V), Z(() => e.timeout, V), at(() => {
      a.value && V();
    });
    let k = -1;
    function V() {
      v.reset(), window.clearTimeout(k);
      const C = Number(e.timeout);
      if (!a.value || C === -1) return;
      const x = bi(g.value);
      v.start(x), k = window.setTimeout(() => {
        a.value = !1;
      }, C);
    }
    function A() {
      v.reset(), window.clearTimeout(k);
    }
    function I() {
      h.value = !0, A();
    }
    function _() {
      h.value = !1, V();
    }
    function B(C) {
      y.value = C.touches[0].clientY;
    }
    function w(C) {
      Math.abs(y.value - C.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function P() {
      h.value && _();
    }
    const T = b(() => e.location.split(" ").reduce((C, x) => (C[`v-snackbar--${x}`] = !0, C), {}));
    return z(() => {
      const C = It.filterProps(e), x = !!(t.default || t.text || e.text);
      return u(It, H({
        ref: f,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, T.value, l.value, e.class],
        style: [m.value, e.style]
      }, C, {
        modelValue: a.value,
        "onUpdate:modelValue": (D) => a.value = D,
        contentProps: H({
          class: ["v-snackbar__wrapper", o.value, r.value, d.value, c.value],
          style: [s.value],
          onPointerenter: I,
          onPointerleave: _
        }, C.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: B,
        onTouchend: w,
        onAfterLeave: P
      }, i), {
        default: () => {
          var D, M;
          return [Gt(!1, "v-snackbar"), e.timer && !h.value && u("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [u(Xa, {
            ref: g,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": v.time.value
          }, null)]), x && u("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((D = t.text) == null ? void 0 : D.call(t)) ?? e.text, (M = t.default) == null ? void 0 : M.call(t)]), t.actions && u(me, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), yt({}, f);
  }
}), wc = p({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: [Boolean, String, Number],
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), Cc = p({
  autoLineWidth: Boolean,
  ...wc()
}, "VBarline"), mr = R()({
  name: "VBarline",
  props: Cc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ke(), l = b(() => e.id || `barline-${a}`), i = b(() => Number(e.autoDrawDuration) || 500), o = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), r = b(() => parseFloat(e.lineWidth) || 4), s = b(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = b(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), d = b(() => e.modelValue.map((m) => ze(m, e.itemValue, m)));
    function v(m, S) {
      const {
        minX: k,
        maxX: V,
        minY: A,
        maxY: I
      } = S, _ = m.length;
      let B = e.max != null ? Number(e.max) : Math.max(...m), w = e.min != null ? Number(e.min) : Math.min(...m);
      w > 0 && e.min == null && (w = 0), B < 0 && e.max == null && (B = 0);
      const P = V / _, T = (I - A) / (B - w || 1), C = I - Math.abs(w * T);
      return m.map((x, D) => {
        const M = Math.abs(T * x);
        return {
          x: k + D * P,
          y: C - M + +(x < 0) * M,
          height: M,
          value: x
        };
      });
    }
    const f = b(() => {
      const m = [], S = v(d.value, c.value), k = S.length;
      for (let V = 0; m.length < k; V++) {
        const A = S[V];
        let I = e.labels[V];
        I || (I = typeof A == "object" ? A.value : A), m.push({
          x: A.x,
          value: String(I)
        });
      }
      return m;
    }), g = b(() => v(d.value, c.value)), h = b(() => (Math.abs(g.value[0].x - g.value[1].x) - r.value) / 2), y = b(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
    z(() => {
      const m = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return u("svg", {
        display: "block"
      }, [u("defs", null, [u("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [m.map((S, k) => u("stop", {
        offset: k / Math.max(m.length - 1, 1),
        "stop-color": S || "currentColor"
      }, null))])]), u("clipPath", {
        id: `${l.value}-clip`
      }, [g.value.map((S) => u("rect", {
        x: S.x + h.value,
        y: S.y,
        width: r.value,
        height: S.height,
        rx: y.value,
        ry: y.value
      }, [e.autoDraw && u(se, null, [u("animate", {
        attributeName: "y",
        from: S.y + S.height,
        to: S.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), u("animate", {
        attributeName: "height",
        from: "0",
        to: S.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && u("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [f.value.map((S, k) => {
        var V;
        return u("text", {
          x: S.x + h.value + r.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((V = t.label) == null ? void 0 : V.call(t, {
          index: k,
          value: S.value
        })) ?? S.value]);
      })]), u("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [u("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function zb(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const s = e[r + 1], c = e[r - 1] || l, d = s && Wb(s, o, c);
    if (!s || d)
      return `L${o.x} ${o.y}`;
    const v = Math.min(gr(c, o), gr(s, o)), g = v / 2 < n ? v / 2 : n, h = hr(c, o, g), y = hr(s, o, g);
    return `L${h.x} ${h.y}S${o.x} ${o.y} ${y.x} ${y.y}`;
  }).join("") + (t ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function Aa(e) {
  return parseInt(e, 10);
}
function Wb(e, n, t) {
  return Aa(e.x + t.x) === Aa(2 * n.x) && Aa(e.y + t.y) === Aa(2 * n.y);
}
function gr(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function hr(e, n, t) {
  const a = {
    x: e.x - n.x,
    y: e.y - n.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: n.x + i.x * t,
    y: n.y + i.y * t
  };
}
const Vc = p({
  fill: Boolean,
  ...wc()
}, "VTrendline"), yr = R()({
  name: "VTrendline",
  props: Vc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ke(), l = b(() => e.id || `trendline-${a}`), i = b(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = j(0), r = j(null);
    function s(m, S) {
      const {
        minX: k,
        maxX: V,
        minY: A,
        maxY: I
      } = S, _ = m.length, B = e.max != null ? Number(e.max) : Math.max(...m), w = e.min != null ? Number(e.min) : Math.min(...m), P = (V - k) / (_ - 1), T = (I - A) / (B - w || 1);
      return m.map((C, x) => ({
        x: k + x * P,
        y: I - (C - w) * T,
        value: C
      }));
    }
    const c = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), d = b(() => parseFloat(e.lineWidth) || 4), v = b(() => Number(e.width)), f = b(() => {
      const m = Number(e.padding);
      return {
        minX: m,
        maxX: v.value - m,
        minY: m,
        maxY: parseInt(e.height, 10) - m
      };
    }), g = b(() => e.modelValue.map((m) => ze(m, e.itemValue, m))), h = b(() => {
      const m = [], S = s(g.value, f.value), k = S.length;
      for (let V = 0; m.length < k; V++) {
        const A = S[V];
        let I = e.labels[V];
        I || (I = typeof A == "object" ? A.value : A), m.push({
          x: A.x,
          value: String(I)
        });
      }
      return m;
    });
    Z(() => e.modelValue, async () => {
      if (await xe(), !e.autoDraw || !r.value) return;
      const m = r.value, S = m.getTotalLength();
      e.fill ? (m.style.transformOrigin = "bottom center", m.style.transition = "none", m.style.transform = "scaleY(0)", m.getBoundingClientRect(), m.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, m.style.transform = "scaleY(1)") : (m.style.strokeDasharray = `${S}`, m.style.strokeDashoffset = `${S}`, m.getBoundingClientRect(), m.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, m.style.strokeDashoffset = "0"), o.value = S;
    }, {
      immediate: !0
    });
    function y(m) {
      const S = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
      return zb(s(g.value, f.value), S, m, parseInt(e.height, 10));
    }
    z(() => {
      var S;
      const m = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return u("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [u("defs", null, [u("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [m.map((k, V) => u("stop", {
        offset: V / Math.max(m.length - 1, 1),
        "stop-color": k || "currentColor"
      }, null))])]), c.value && u("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [h.value.map((k, V) => {
        var A;
        return u("text", {
          x: k.x + d.value / 2 + d.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((A = t.label) == null ? void 0 : A.call(t, {
          index: V,
          value: k.value
        })) ?? k.value]);
      })]), u("path", {
        ref: r,
        d: y(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && u("path", {
        d: y(!1),
        fill: "none",
        stroke: e.color ?? ((S = e.gradient) == null ? void 0 : S[0])
      }, null)]);
    });
  }
}), jb = p({
  type: {
    type: String,
    default: "trend"
  },
  ...Cc(),
  ...Vc()
}, "VSparkline"), Yb = R()({
  name: "VSparkline",
  props: jb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ue($(e, "color")), i = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), o = b(() => {
      let r = parseInt(e.height, 10);
      return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    z(() => {
      const r = e.type === "trend" ? yr : mr, s = e.type === "trend" ? yr.filterProps(e) : mr.filterProps(e);
      return u(r, H({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, s), t);
    });
  }
}), Gb = p({
  ...ne(),
  ...os({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), Ub = R()({
  name: "VSpeedDial",
  props: Gb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = j(), i = b(() => {
      var c;
      const [r, s = "center"] = ((c = e.location) == null ? void 0 : c.split(" ")) ?? [];
      return `${r} ${s}`;
    }), o = b(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return z(() => {
      const r = un.filterProps(e);
      return u(un, H(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...t,
        default: (s) => u(me, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [u(tt, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, s)];
            }
          })]
        })
      });
    }), {};
  }
}), vo = Symbol.for("vuetify:v-stepper"), Pc = p({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), Ic = R()({
  name: "VStepperActions",
  props: Pc(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = De();
    function i() {
      t("click:prev");
    }
    function o() {
      t("click:next");
    }
    return z(() => {
      const r = {
        onClick: i
      }, s = {
        onClick: o
      };
      return u("div", {
        class: "v-stepper-actions"
      }, [u(me, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.prev) == null ? void 0 : c.call(a, {
            props: r
          })) ?? u(he, r, null)];
        }
      }), u(me, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.next) == null ? void 0 : c.call(a, {
            props: s
          })) ?? u(he, s, null)];
        }
      })]);
    }), {};
  }
}), _c = At("v-stepper-header"), Kb = p({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: oe,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: oe,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: oe,
    default: "$error"
  },
  icon: oe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), qb = p({
  ...Kb(),
  ...xn()
}, "VStepperItem"), Ac = R()({
  name: "VStepperItem",
  directives: {
    Ripple: Bt
  },
  props: qb(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = wn(e, vo, !0), l = b(() => (a == null ? void 0 : a.value.value) ?? e.value), i = b(() => e.rules.every((f) => f() === !0)), o = b(() => !e.disabled && e.editable), r = b(() => !e.disabled && e.editable), s = b(() => e.error || !i.value), c = b(() => e.complete || e.rules.length > 0 && i.value), d = b(() => s.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), v = b(() => ({
      canEdit: r.value,
      hasError: s.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return z(() => {
      var m, S, k;
      const f = (!a || a.isSelected.value || c.value || r.value) && !s.value && !e.disabled, g = !!(e.title != null || t.title), h = !!(e.subtitle != null || t.subtitle);
      function y() {
        a == null || a.toggle();
      }
      return Ae(u("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        type: "button",
        onClick: y
      }, [o.value && Gt(!0, "v-stepper-item"), u(bt, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: f ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var V;
          return [((V = t.icon) == null ? void 0 : V.call(t, v.value)) ?? (d.value ? u(ke, {
            icon: d.value
          }, null) : l.value)];
        }
      }), u("div", {
        class: "v-stepper-item__content"
      }, [g && u("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((m = t.title) == null ? void 0 : m.call(t, v.value)) ?? e.title]), h && u("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((S = t.subtitle) == null ? void 0 : S.call(t, v.value)) ?? e.subtitle]), (k = t.default) == null ? void 0 : k.call(t, v.value)])]), [[ft("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), Xb = p({
  ...Te(il(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), Tc = R()({
  name: "VStepperWindow",
  props: Xb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(vo, null), l = ie(e, "modelValue"), i = b({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return z(() => {
      const o = sn.filterProps(e);
      return u(sn, H({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), Zb = p({
  ...ol()
}, "VStepperWindowItem"), Bc = R()({
  name: "VStepperWindowItem",
  props: Zb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = cn.filterProps(e);
      return u(cn, H({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), Jb = p({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: oe,
  editIcon: oe,
  editable: Boolean,
  errorIcon: oe,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...Vn()
}, "Stepper"), Qb = p({
  ...Jb(),
  ...kn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...rl(),
  ...Ot(Pc(), ["prevText", "nextText"])
}, "VStepper"), eS = R()({
  name: "VStepper",
  props: Qb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: i,
      selected: o
    } = Ut(e, vo), {
      displayClasses: r,
      mobile: s
    } = kt(e), {
      completeIcon: c,
      editIcon: d,
      errorIcon: v,
      color: f,
      editable: g,
      prevText: h,
      nextText: y
    } = gn(e), m = b(() => e.items.map((V, A) => {
      const I = ze(V, e.itemTitle, V), _ = ze(V, e.itemValue, A + 1);
      return {
        title: I,
        value: _,
        raw: V
      };
    })), S = b(() => a.value.findIndex((V) => o.value.includes(V.id))), k = b(() => e.disabled ? e.disabled : S.value === 0 ? "prev" : S.value === a.value.length - 1 ? "next" : !1);
    return Me({
      VStepperItem: {
        editable: g,
        errorIcon: v,
        completeIcon: c,
        editIcon: d,
        prevText: h,
        nextText: y
      },
      VStepperActions: {
        color: f,
        disabled: k,
        prevText: h,
        nextText: y
      }
    }), z(() => {
      const V = dn.filterProps(e), A = !!(t.header || e.items.length), I = e.items.length > 0, _ = !e.hideActions && !!(I || t.actions);
      return u(dn, H(V, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": s.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var B, w;
          return [A && u(_c, {
            key: "stepper-header"
          }, {
            default: () => [m.value.map((P, T) => {
              let {
                raw: C,
                ...x
              } = P;
              return u(se, null, [!!T && u(ma, null, null), u(Ac, x, {
                default: t[`header-item.${x.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), I && u(Tc, {
            key: "stepper-window"
          }, {
            default: () => [m.value.map((P) => u(Bc, {
              value: P.value
            }, {
              default: () => {
                var T, C;
                return ((T = t[`item.${P.value}`]) == null ? void 0 : T.call(t, P)) ?? ((C = t.item) == null ? void 0 : C.call(t, P));
              }
            }))]
          }), (B = t.default) == null ? void 0 : B.call(t, {
            prev: i,
            next: l
          }), _ && (((w = t.actions) == null ? void 0 : w.call(t, {
            next: l,
            prev: i
          })) ?? u(Ic, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), tS = p({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...Nt(),
  ...Qa()
}, "VSwitch"), nS = R()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: tS(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "indeterminate"), i = ie(e, "modelValue"), {
      loaderClasses: o
    } = ca(e), {
      isFocused: r,
      focus: s,
      blur: c
    } = Dt(e), d = j(), v = Se && window.matchMedia("(forced-colors: active)").matches, f = b(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), g = Ke(), h = b(() => e.id || `switch-${g}`);
    function y() {
      l.value && (l.value = !1);
    }
    function m(S) {
      var k, V;
      S.stopPropagation(), S.preventDefault(), (V = (k = d.value) == null ? void 0 : k.input) == null || V.click();
    }
    return z(() => {
      const [S, k] = Yt(t), V = Ze.filterProps(e), A = Wt.filterProps(e);
      return u(Ze, H({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, S, V, {
        modelValue: i.value,
        "onUpdate:modelValue": (I) => i.value = I,
        id: h.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (I) => {
          let {
            id: _,
            messagesId: B,
            isDisabled: w,
            isReadonly: P,
            isValid: T
          } = I;
          const C = {
            model: i,
            isValid: T
          };
          return u(Wt, H({
            ref: d
          }, A, {
            modelValue: i.value,
            "onUpdate:modelValue": [(x) => i.value = x, y],
            id: _.value,
            "aria-describedby": B.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: w.value,
            readonly: P.value,
            onFocus: s,
            onBlur: c
          }, k), {
            ...a,
            default: (x) => {
              let {
                backgroundColorClasses: D,
                backgroundColorStyles: M
              } = x;
              return u("div", {
                class: ["v-switch__track", v ? void 0 : D.value],
                style: M.value,
                onClick: m
              }, [a["track-true"] && u("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](C)]), a["track-false"] && u("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](C)])]);
            },
            input: (x) => {
              let {
                inputNode: D,
                icon: M,
                backgroundColorClasses: L,
                backgroundColorStyles: W
              } = x;
              return u(se, null, [D, u("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": M || e.loading
                }, e.inset || v ? void 0 : L.value],
                style: e.inset ? void 0 : W.value
              }, [a.thumb ? u(me, {
                defaults: {
                  VIcon: {
                    icon: M,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...C,
                  icon: M
                })]
              }) : u(_i, null, {
                default: () => [e.loading ? u(da, {
                  name: "v-switch",
                  active: !0,
                  color: T.value === !1 ? void 0 : f.value
                }, {
                  default: (J) => a.loader ? a.loader(J) : u(rn, {
                    active: J.isActive,
                    color: J.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : M && u(ke, {
                  key: String(M),
                  icon: M,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), aS = p({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...ne(),
  ...je(),
  ...hn(),
  ...pe(),
  ...fe(),
  ...ye()
}, "VSystemBar"), lS = R()({
  name: "VSystemBar",
  props: aS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ve($(e, "color")), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: r
    } = Fe(e), {
      ssrBootStyles: s
    } = bn(), c = b(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: d
    } = yn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: K("top"),
      layoutSize: c,
      elementSize: c,
      active: b(() => !0),
      absolute: $(e, "absolute")
    });
    return z(() => u(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, o.value, r.value, e.class],
      style: [i.value, d.value, s.value, e.style]
    }, t)), {};
  }
}), fo = Symbol.for("vuetify:v-tabs"), iS = p({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Te(Ja({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), Dc = R()({
  name: "VTab",
  props: iS(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = Ue(e, "sliderColor"), o = j(), r = j(), s = b(() => e.direction === "horizontal"), c = b(() => {
      var v, f;
      return ((f = (v = o.value) == null ? void 0 : v.group) == null ? void 0 : f.isSelected.value) ?? !1;
    });
    function d(v) {
      var g, h;
      let {
        value: f
      } = v;
      if (f) {
        const y = (h = (g = o.value) == null ? void 0 : g.$el.parentElement) == null ? void 0 : h.querySelector(".v-tab--selected .v-tab__slider"), m = r.value;
        if (!y || !m) return;
        const S = getComputedStyle(y).color, k = y.getBoundingClientRect(), V = m.getBoundingClientRect(), A = s.value ? "x" : "y", I = s.value ? "X" : "Y", _ = s.value ? "right" : "bottom", B = s.value ? "width" : "height", w = k[A], P = V[A], T = w > P ? k[_] - V[_] : k[A] - V[A], C = Math.sign(T) > 0 ? s.value ? "right" : "bottom" : Math.sign(T) < 0 ? s.value ? "left" : "top" : "center", D = (Math.abs(T) + (Math.sign(T) < 0 ? k[B] : V[B])) / Math.max(k[B], V[B]) || 0, M = k[B] / V[B] || 0, L = 1.5;
        Qt(m, {
          backgroundColor: [S, "currentcolor"],
          transform: [`translate${I}(${T}px) scale${I}(${M})`, `translate${I}(${T / L}px) scale${I}(${(D - 1) / L + 1})`, "none"],
          transformOrigin: Array(3).fill(C)
        }, {
          duration: 225,
          easing: Xn
        });
      }
    }
    return z(() => {
      const v = he.filterProps(e);
      return u(he, H({
        symbol: fo,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, v, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": d
      }), {
        ...t,
        default: () => {
          var f;
          return u(se, null, [((f = t.default) == null ? void 0 : f.call(t)) ?? e.text, !e.hideSlider && u("div", {
            ref: r,
            class: ["v-tab__slider", l.value],
            style: i.value
          }, null)]);
        }
      });
    }), yt({}, o);
  }
}), oS = p({
  ...Te(il(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), pc = R()({
  name: "VTabsWindow",
  props: oS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(fo, null), l = ie(e, "modelValue"), i = b({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return z(() => {
      const o = sn.filterProps(e);
      return u(sn, H({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), rS = p({
  ...ol()
}, "VTabsWindowItem"), Mc = R()({
  name: "VTabsWindowItem",
  props: rS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = cn.filterProps(e);
      return u(cn, H({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
});
function uS(e) {
  return e ? e.map((n) => za(n) ? n : {
    text: n,
    value: n
  }) : [];
}
const sS = p({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...$i({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...Ye(),
  ...fe()
}, "VTabs"), cS = R()({
  name: "VTabs",
  props: sS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), i = b(() => uS(e.items)), {
      densityClasses: o
    } = it(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = Ve($(e, "bgColor")), {
      scopeId: c
    } = Pn();
    return Me({
      VTab: {
        color: $(e, "color"),
        direction: $(e, "direction"),
        stacked: $(e, "stacked"),
        fixed: $(e, "fixedTabs"),
        sliderColor: $(e, "sliderColor"),
        hideSlider: $(e, "hideSlider")
      }
    }), z(() => {
      const d = aa.filterProps(e), v = !!(a.window || e.items.length > 0);
      return u(se, null, [u(aa, H(d, {
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": ee(e.height)
        }, s.value, e.style],
        role: "tablist",
        symbol: fo
      }, c, t), {
        default: () => {
          var f;
          return [((f = a.default) == null ? void 0 : f.call(a)) ?? i.value.map((g) => {
            var h;
            return ((h = a.tab) == null ? void 0 : h.call(a, {
              item: g
            })) ?? u(Dc, H(g, {
              key: g.text,
              value: g.value
            }), {
              default: a[`tab.${g.value}`] ? () => {
                var y;
                return (y = a[`tab.${g.value}`]) == null ? void 0 : y.call(a, {
                  item: g
                });
              } : void 0
            });
          })];
        }
      }), v && u(pc, H({
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        key: "tabs-window"
      }, c), {
        default: () => {
          var f;
          return [i.value.map((g) => {
            var h;
            return ((h = a.item) == null ? void 0 : h.call(a, {
              item: g
            })) ?? u(Mc, {
              value: g.value
            }, {
              default: () => {
                var y;
                return (y = a[`item.${g.value}`]) == null ? void 0 : y.call(a, {
                  item: g
                });
              }
            });
          }), (f = a.window) == null ? void 0 : f.call(a)];
        }
      })]);
    }), {};
  }
}), dS = p({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...Nt(),
  ...ha()
}, "VTextarea"), vS = R()({
  name: "VTextarea",
  directives: {
    Intersect: sa
  },
  inheritAttrs: !1,
  props: dS(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = ie(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Dt(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function v(C, x) {
      var D, M;
      !e.autofocus || !C || (M = (D = x[0].target) == null ? void 0 : D.focus) == null || M.call(D);
    }
    const f = j(), g = j(), h = K(""), y = j(), m = b(() => e.persistentPlaceholder || o.value || e.active);
    function S() {
      var C;
      y.value !== document.activeElement && ((C = y.value) == null || C.focus()), o.value || r();
    }
    function k(C) {
      S(), a("click:control", C);
    }
    function V(C) {
      a("mousedown:control", C);
    }
    function A(C) {
      C.stopPropagation(), S(), xe(() => {
        i.value = "", ja(e["onClick:clear"], C);
      });
    }
    function I(C) {
      var D;
      const x = C.target;
      if (i.value = x.value, (D = e.modelModifiers) != null && D.trim) {
        const M = [x.selectionStart, x.selectionEnd];
        xe(() => {
          x.selectionStart = M[0], x.selectionEnd = M[1];
        });
      }
    }
    const _ = j(), B = j(+e.rows), w = b(() => ["plain", "underlined"].includes(e.variant));
    $e(() => {
      e.autoGrow || (B.value = +e.rows);
    });
    function P() {
      e.autoGrow && xe(() => {
        if (!_.value || !g.value) return;
        const C = getComputedStyle(_.value), x = getComputedStyle(g.value.$el), D = parseFloat(C.getPropertyValue("--v-field-padding-top")) + parseFloat(C.getPropertyValue("--v-input-padding-top")) + parseFloat(C.getPropertyValue("--v-field-padding-bottom")), M = _.value.scrollHeight, L = parseFloat(C.lineHeight), W = Math.max(parseFloat(e.rows) * L + D, parseFloat(x.getPropertyValue("--v-input-control-height"))), J = parseFloat(e.maxRows) * L + D || 1 / 0, N = Oe(M ?? 0, W, J);
        B.value = Math.floor((N - D) / L), h.value = ee(N);
      });
    }
    at(P), Z(i, P), Z(() => e.rows, P), Z(() => e.maxRows, P), Z(() => e.density, P);
    let T;
    return Z(_, (C) => {
      C ? (T = new ResizeObserver(P), T.observe(_.value)) : T == null || T.disconnect();
    }), Je(() => {
      T == null || T.disconnect();
    }), z(() => {
      const C = !!(l.counter || e.counter || e.counterValue), x = !!(C || l.details), [D, M] = Yt(t), {
        modelValue: L,
        ...W
      } = Ze.filterProps(e), J = ji(e);
      return u(Ze, H({
        ref: f,
        modelValue: i.value,
        "onUpdate:modelValue": (N) => i.value = N,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": w.value
        }, e.class],
        style: e.style
      }, D, W, {
        centerAffix: B.value === 1 && !w.value,
        focused: o.value
      }), {
        ...l,
        default: (N) => {
          let {
            id: O,
            isDisabled: E,
            isDirty: F,
            isReadonly: Y,
            isValid: X
          } = N;
          return u(Yn, H({
            ref: g,
            style: {
              "--v-textarea-control-height": h.value
            },
            onClick: k,
            onMousedown: V,
            "onClick:clear": A,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, J, {
            id: O.value,
            active: m.value || F.value,
            centerAffix: B.value === 1 && !w.value,
            dirty: F.value || e.dirty,
            disabled: E.value,
            focused: o.value,
            error: X.value === !1
          }), {
            ...l,
            default: (Q) => {
              let {
                props: {
                  class: re,
                  ...G
                }
              } = Q;
              return u(se, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), Ae(u("textarea", H({
                ref: y,
                class: re,
                value: i.value,
                onInput: I,
                autofocus: e.autofocus,
                readonly: Y.value,
                disabled: E.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: S,
                onBlur: s
              }, G, M), null), [[ft("intersect"), {
                handler: v
              }, null, {
                once: !0
              }]]), e.autoGrow && Ae(u("textarea", {
                class: [re, "v-textarea__sizer"],
                id: `${G.id}-sizer`,
                "onUpdate:modelValue": (te) => i.value = te,
                ref: _,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[Jc, i.value]]), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: x ? (N) => {
          var O;
          return u(se, null, [(O = l.details) == null ? void 0 : O.call(l, N), C && u(se, null, [u("span", null, null), u(al, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), yt({}, f, g, y);
  }
}), fS = p({
  withBackground: Boolean,
  ...ne(),
  ...ye(),
  ...fe()
}, "VThemeProvider"), mS = R()({
  name: "VThemeProvider",
  props: fS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e);
    return () => {
      var l;
      return e.withBackground ? u(e.tag, {
        class: ["v-theme-provider", a.value, e.class],
        style: e.style
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      }) : (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), gS = p({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: oe,
  iconColor: String,
  lineColor: String,
  ...ne(),
  ...pe(),
  ...Tt(),
  ...je()
}, "VTimelineDivider"), hS = R()({
  name: "VTimelineDivider",
  props: gS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = Rn(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = Ve($(e, "dotColor")), {
      roundedClasses: r
    } = Fe(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = qe(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: d
    } = Ve($(e, "lineColor"));
    return z(() => u("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [u("div", {
      class: ["v-timeline-divider__before", c.value],
      style: d.value
    }, null), !e.hideDot && u("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", s.value, r.value, a.value],
      style: l.value
    }, [u("div", {
      class: ["v-timeline-divider__inner-dot", o.value, r.value],
      style: i.value
    }, [t.default ? u(me, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, t.default) : u(ke, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), u("div", {
      class: ["v-timeline-divider__after", c.value],
      style: d.value
    }, null)])), {};
  }
}), Ec = p({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: oe,
  iconColor: String,
  lineInset: [Number, String],
  ...ne(),
  ...Re(),
  ...je(),
  ...pe(),
  ...Tt(),
  ...fe()
}, "VTimelineItem"), yS = R()({
  name: "VTimelineItem",
  props: Ec(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Ne(e), l = K(0), i = j();
    return Z(i, (o) => {
      var r;
      o && (l.value = ((r = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : r.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), z(() => {
      var o, r;
      return u("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": ee(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ee(e.lineInset)})` : ee(0)
        }, e.style]
      }, [u("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(o = t.default) == null ? void 0 : o.call(t)]), u(hS, {
        ref: i,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: t.icon
      }), e.density !== "compact" && u("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((r = t.opposite) == null ? void 0 : r.call(t))])]);
    }), {};
  }
}), bS = p({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  ...Ot(Ec({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...ne(),
  ...Ye(),
  ...fe(),
  ...ye()
}, "VTimeline"), SS = R()({
  name: "VTimeline",
  props: bS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = we(e), {
      densityClasses: l
    } = it(e), {
      rtlClasses: i
    } = We();
    Me({
      VTimelineDivider: {
        lineColor: $(e, "lineColor")
      },
      VTimelineItem: {
        density: $(e, "density"),
        dotColor: $(e, "dotColor"),
        fillDot: $(e, "fillDot"),
        hideOpposite: $(e, "hideOpposite"),
        iconColor: $(e, "iconColor"),
        lineColor: $(e, "lineColor"),
        lineInset: $(e, "lineInset"),
        size: $(e, "size")
      }
    });
    const o = b(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), r = b(() => {
      const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return s;
        case "start":
          return s[0];
        case "end":
          return s[1];
        default:
          return null;
      }
    });
    return z(() => u(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, o.value, i.value, e.class],
      style: [{
        "--v-timeline-line-thickness": ee(e.lineThickness)
      }, e.style]
    }, t)), {};
  }
}), kS = p({
  ...ne(),
  ...St({
    variant: "text"
  })
}, "VToolbarItems"), xS = R()({
  name: "VToolbarItems",
  props: kS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Me({
      VBtn: {
        color: $(e, "color"),
        height: "inherit",
        variant: $(e, "variant")
      }
    }), z(() => {
      var a;
      return u("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), wS = p({
  id: String,
  text: String,
  ...Te(ga({
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
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), Fc = R()({
  name: "VTooltip",
  props: wS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      scopeId: l
    } = Pn(), i = Ke(), o = b(() => e.id || `v-tooltip-${i}`), r = j(), s = b(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = b(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = b(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), v = b(() => H({
      "aria-describedby": o.value
    }, e.activatorProps));
    return z(() => {
      const f = It.filterProps(e);
      return u(It, H({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: o.value
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (g) => a.value = g,
        transition: d.value,
        absolute: !0,
        location: s.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: v.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var m;
          for (var g = arguments.length, h = new Array(g), y = 0; y < g; y++)
            h[y] = arguments[y];
          return ((m = t.default) == null ? void 0 : m.call(t, ...h)) ?? e.text;
        }
      });
    }), yt({}, r);
  }
}), CS = R()({
  name: "VValidation",
  props: Du(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = pu(e, "validation");
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, a);
    };
  }
}), VS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: lf,
  VAlertTitle: Vu,
  VApp: sv,
  VAppBar: Tv,
  VAppBarNavIcon: ef,
  VAppBarTitle: tf,
  VAutocomplete: pm,
  VAvatar: bt,
  VBadge: Em,
  VBanner: Lm,
  VBannerActions: cs,
  VBannerText: ds,
  VBottomNavigation: Rm,
  VBottomSheet: Hm,
  VBreadcrumbs: Ym,
  VBreadcrumbsDivider: fs,
  VBreadcrumbsItem: ms,
  VBtn: he,
  VBtnGroup: Rl,
  VBtnToggle: Fv,
  VCard: Xm,
  VCardActions: gs,
  VCardItem: bs,
  VCardSubtitle: hs,
  VCardText: Ss,
  VCardTitle: ys,
  VCarousel: ig,
  VCarouselItem: rg,
  VCheckbox: mf,
  VCheckboxBtn: Ft,
  VChip: jn,
  VChipGroup: Pf,
  VClassIcon: Mi,
  VCode: ug,
  VCol: xy,
  VColorPicker: Xg,
  VCombobox: Qg,
  VComponentIcon: Hl,
  VConfirmEdit: ai,
  VContainer: yy,
  VCounter: al,
  VDataIterator: qh,
  VDataTable: dy,
  VDataTableFooter: ia,
  VDataTableHeaders: vn,
  VDataTableRow: io,
  VDataTableRows: fn,
  VDataTableServer: gy,
  VDataTableVirtual: fy,
  VDatePicker: di,
  VDatePickerControls: oi,
  VDatePickerHeader: ri,
  VDatePickerMonth: ui,
  VDatePickerMonths: si,
  VDatePickerYears: ci,
  VDefaultsProvider: me,
  VDialog: Xl,
  VDialogBottomTransition: fv,
  VDialogTopTransition: mv,
  VDialogTransition: Ga,
  VDivider: ma,
  VEmptyState: Ey,
  VExpandTransition: Ua,
  VExpandXTransition: Ti,
  VExpansionPanel: Fy,
  VExpansionPanelText: vi,
  VExpansionPanelTitle: fi,
  VExpansionPanels: Oy,
  VFab: Ny,
  VFabTransition: vv,
  VFadeTransition: Qn,
  VField: Yn,
  VFieldLabel: Kn,
  VFileInput: zy,
  VFooter: jy,
  VForm: Gy,
  VHover: Ky,
  VIcon: ke,
  VImg: Et,
  VInfiniteScroll: Xy,
  VInput: Ze,
  VItem: Qy,
  VItemGroup: Jy,
  VKbd: eb,
  VLabel: zn,
  VLayout: nb,
  VLayoutItem: lb,
  VLazy: ob,
  VLigatureIcon: $v,
  VList: nl,
  VListGroup: Gl,
  VListImg: Uf,
  VListItem: $t,
  VListItemAction: qf,
  VListItemMedia: Zf,
  VListItemSubtitle: Gu,
  VListItemTitle: Uu,
  VListSubheader: Ku,
  VLocaleProvider: ub,
  VMain: cb,
  VMenu: un,
  VMessages: Tu,
  VNavigationDrawer: Sb,
  VNoSsr: kb,
  VOtpInput: wb,
  VOverlay: It,
  VPagination: li,
  VParallax: Pb,
  VProgressCircular: rn,
  VProgressLinear: Xa,
  VRadio: _b,
  VRadioGroup: Tb,
  VRangeSlider: Db,
  VRating: Mb,
  VResponsive: Ll,
  VRow: Ay,
  VScaleTransition: _i,
  VScrollXReverseTransition: hv,
  VScrollXTransition: gv,
  VScrollYReverseTransition: bv,
  VScrollYTransition: yv,
  VSelect: Ui,
  VSelectionControl: Wt,
  VSelectionControlGroup: Iu,
  VSheet: dn,
  VSkeletonLoader: Lb,
  VSlideGroup: aa,
  VSlideGroupItem: Ob,
  VSlideXReverseTransition: kv,
  VSlideXTransition: Sv,
  VSlideYReverseTransition: xv,
  VSlideYTransition: Ai,
  VSlider: ti,
  VSnackbar: Hb,
  VSpacer: vc,
  VSparkline: Yb,
  VSpeedDial: Ub,
  VStepper: eS,
  VStepperActions: Ic,
  VStepperHeader: _c,
  VStepperItem: Ac,
  VStepperWindow: Tc,
  VStepperWindowItem: Bc,
  VSvgIcon: pi,
  VSwitch: nS,
  VSystemBar: lS,
  VTab: Dc,
  VTable: mn,
  VTabs: cS,
  VTabsWindow: pc,
  VTabsWindowItem: Mc,
  VTextField: Lt,
  VTextarea: vS,
  VThemeProvider: mS,
  VTimeline: SS,
  VTimelineItem: yS,
  VToolbar: Ol,
  VToolbarItems: xS,
  VToolbarTitle: Ii,
  VTooltip: Fc,
  VValidation: CS,
  VVirtualScroll: ll,
  VWindow: sn,
  VWindowItem: cn
}, Symbol.toStringTag, { value: "Module" }));
function PS(e, n) {
  const t = n.modifiers || {}, a = n.value, {
    once: l,
    immediate: i,
    ...o
  } = t, r = !Object.keys(o).length, {
    handler: s,
    options: c
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (o == null ? void 0 : o.attr) ?? r,
      characterData: (o == null ? void 0 : o.char) ?? r,
      childList: (o == null ? void 0 : o.child) ?? r,
      subtree: (o == null ? void 0 : o.sub) ?? r
    }
  }, d = new MutationObserver(function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null || s(v, f), l && $c(e, n);
  });
  i && (s == null || s([], d)), e._mutate = Object(e._mutate), e._mutate[n.instance.$.uid] = {
    observer: d
  }, d.observe(e, c);
}
function $c(e, n) {
  var t;
  (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const IS = {
  mounted: PS,
  unmounted: $c
};
function _S(e, n) {
  var l, i;
  const t = n.value, a = {
    passive: !((l = n.modifiers) != null && l.active)
  };
  window.addEventListener("resize", t, a), e._onResize = Object(e._onResize), e._onResize[n.instance.$.uid] = {
    handler: t,
    options: a
  }, (i = n.modifiers) != null && i.quiet || t();
}
function AS(e, n) {
  var l;
  if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a
  } = e._onResize[n.instance.$.uid];
  window.removeEventListener("resize", t, a), delete e._onResize[n.instance.$.uid];
}
const TS = {
  mounted: _S,
  unmounted: AS
};
function Lc(e, n) {
  const {
    self: t = !1
  } = n.modifiers ?? {}, a = n.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = t ? e : n.arg ? document.querySelector(n.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[n.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: t ? void 0 : o
  });
}
function Oc(e, n) {
  var i;
  if (!((i = e._onScroll) != null && i[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a,
    target: l = e
  } = e._onScroll[n.instance.$.uid];
  l.removeEventListener("scroll", t, a), delete e._onScroll[n.instance.$.uid];
}
function BS(e, n) {
  n.value !== n.oldValue && (Oc(e, n), Lc(e, n));
}
const DS = {
  mounted: Lc,
  unmounted: Oc,
  updated: BS
};
function pS(e, n) {
  const t = typeof e == "string" ? Qc(e) : e, a = MS(t, n);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      Ir(null, l);
    }
  };
}
function MS(e, n) {
  return function(t, a, l) {
    var v, f, g;
    const i = typeof n == "function" ? n(a) : n, o = ((v = a.value) == null ? void 0 : v.text) ?? a.value ?? (i == null ? void 0 : i.text), r = za(a.value) ? a.value : {}, s = () => o ?? t.textContent, c = (l.ctx === a.instance.$ ? (f = ES(l, a.instance.$)) == null ? void 0 : f.provides : (g = l.ctx) == null ? void 0 : g.provides) ?? a.instance.$.provides, d = jt(e, H(i, r), s);
    d.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: c
    }), Ir(d, t);
  };
}
function ES(e, n) {
  const t = /* @__PURE__ */ new Set(), a = (i) => {
    var o, r;
    for (const s of i) {
      if (!s) continue;
      if (s === e || s.el && e.el && s.el === e.el)
        return !0;
      t.add(s);
      let c;
      if (s.suspense ? c = a([s.ssContent]) : Array.isArray(s.children) ? c = a(s.children) : (o = s.component) != null && o.vnode && (c = a([(r = s.component) == null ? void 0 : r.subTree])), c)
        return c;
      t.delete(s);
    }
    return !1;
  };
  if (!a([n.subTree]))
    return Fn("Could not find original vnode, component will not inherit provides"), n;
  const l = Array.from(t).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return n;
}
const FS = pS(Fc, (e) => {
  var n;
  return {
    activator: "parent",
    location: (n = e.arg) == null ? void 0 : n.replace("-", " "),
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), $S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: is,
  Intersect: sa,
  Mutate: IS,
  Resize: TS,
  Ripple: Bt,
  Scroll: DS,
  Tooltip: FS,
  Touch: Ki
}, Symbol.toStringTag, { value: "Module" })), LS = {
  key: 1,
  class: "text"
}, OS = /* @__PURE__ */ xr({
  __name: "GsButton",
  props: {
    tag: { default: "button" },
    variant: { default: "primary" },
    size: {},
    icon: {},
    disabled: { type: Boolean },
    loading: { type: Boolean },
    fullWidth: { type: Boolean },
    href: {},
    width: {},
    target: { default: "_self" },
    buttonType: {}
  },
  setup(e) {
    const n = e, t = b(() => n.href ? "a" : n.tag || "button"), a = b(
      () => t.value === "a" ? !1 : { class: "ripple-effect" }
    ), l = b(() => [
      "gs-button",
      `gs-${n.variant}`,
      n.size,
      {
        "full-width": n.fullWidth,
        "is-loading": n.loading
      }
    ]), i = b(() => {
      switch (n.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (o, r) => Ae((wa(), Sl(Vr(t.value), {
      class: td(l.value),
      disabled: n.disabled || n.loading,
      href: n.href,
      target: n.target,
      type: n.buttonType,
      style: ed({ width: o.width + "px" })
    }, {
      default: go(() => [
        n.icon && !n.loading ? (wa(), Sl(Xe(ke), {
          key: 0,
          class: "icon"
        }, {
          default: go(() => [
            wt(Pr(n.icon), 1)
          ]),
          _: 1
        })) : kl("", !0),
        o.$slots.default && !n.loading ? (wa(), nd("span", LS, [
          ad(o.$slots, "default", {}, void 0, !0)
        ])) : kl("", !0),
        n.loading ? (wa(), Sl(Xe(rn), {
          key: 2,
          size: i.value,
          indeterminate: "",
          color: "gray"
        }, null, 8, ["size"])) : kl("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "target", "type", "style"])), [
      [Bt, a.value]
    ]);
  }
}), RS = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, NS = /* @__PURE__ */ RS(OS, [["__scopeId", "data-v-648c0ff6"]]);
function Rc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: n,
    ...t
  } = e, a = et(n, t), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = a, r = Wd(a.defaults), s = hf(a.display, a.ssr), c = rv(a.theme), d = Ov(a.icons), v = tv(a.locale), f = Oh(a.date, v), g = bf(a.goTo, v);
  return {
    install: (y) => {
      for (const m in o)
        y.directive(m, o[m]);
      for (const m in i)
        y.component(m, i[m]);
      for (const m in l)
        y.component(m, mt({
          ...l[m],
          name: m,
          aliasName: l[m].name
        }));
      if (c.install(y), y.provide($n, r), y.provide(jl, s), y.provide(Jn, c), y.provide(Nl, d), y.provide(Ln, v), y.provide(Bs, f.options), y.provide(or, f.instance), y.provide(Mu, g), Se && a.ssr)
        if (y.$nuxt)
          y.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const {
            mount: m
          } = y;
          y.mount = function() {
            const S = m(...arguments);
            return xe(() => s.update()), y.mount = m, S;
          };
        }
      Ke.reset(), y.mixin({
        computed: {
          $vuetify() {
            return ut({
              defaults: Tn.call(this, $n),
              display: Tn.call(this, jl),
              theme: Tn.call(this, Jn),
              icons: Tn.call(this, Nl),
              locale: Tn.call(this, Ln),
              date: Tn.call(this, or)
            });
          }
        }
      });
    },
    defaults: r,
    display: s,
    theme: c,
    icons: d,
    locale: v,
    date: f,
    goTo: g
  };
}
const HS = "3.7.14";
Rc.version = HS;
function Tn(e) {
  var a, l;
  const n = this.$, t = ((a = n.parent) == null ? void 0 : a.provides) ?? ((l = n.vnode.appContext) == null ? void 0 : l.provides);
  if (t && e in t)
    return t[e];
}
const zS = p({
  hideActions: Boolean,
  location: {
    type: String,
    default: "bottom start"
  },
  ...Wn(),
  ...ps(),
  ...ya({
    placeholder: "mm/dd/yyyy",
    prependIcon: "$calendar"
  }),
  ...Te(yc({
    weeksInMonth: "dynamic",
    hideHeader: !0
  }), ["active", "location", "rounded"])
}, "VDateInput"), WS = R()({
  name: "VDateInput",
  props: zS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), l = Gn(), {
      isFocused: i,
      focus: o,
      blur: r
    } = Dt(e), s = ie(e, "modelValue", e.multiple ? [] : null, (S) => Array.isArray(S) ? S.map((k) => l.toJsDate(k)) : S && l.toJsDate(S), (S) => Array.isArray(S) ? S.map((k) => l.date(k)) : S && l.date(S)), c = K(!1), d = j(), v = b(() => {
      const S = _e(s.value);
      if (!S.length) return null;
      if (e.multiple === !0)
        return a("$vuetify.datePicker.itemsSelected", S.length);
      if (e.multiple === "range") {
        const k = S[0], V = S[S.length - 1];
        return l.isValid(k) && l.isValid(V) ? `${l.format(k, "keyboardDate")} - ${l.format(V, "keyboardDate")}` : "";
      }
      return l.isValid(s.value) ? l.format(s.value, "keyboardDate") : "";
    }), f = b(() => !e.disabled && !e.readonly);
    function g(S) {
      if (S.key !== "Enter") return;
      if (!c.value || !i.value) {
        c.value = !0;
        return;
      }
      const k = S.target;
      s.value = k.value;
    }
    function h(S) {
      S.preventDefault(), S.stopPropagation(), c.value = !0;
    }
    function y() {
      c.value = !1;
    }
    function m(S) {
      S == null && (s.value = null);
    }
    return z(() => {
      const S = ai.filterProps(e), k = di.filterProps(Te(e, ["active", "location", "rounded"])), V = Lt.filterProps(e);
      return u(Lt, H({
        ref: d
      }, V, {
        class: e.class,
        style: e.style,
        modelValue: v.value,
        onKeydown: f.value ? g : void 0,
        focused: c.value || i.value,
        onFocus: o,
        onBlur: r,
        "onClick:control": f.value ? h : void 0,
        "onClick:prepend": f.value ? h : void 0,
        "onUpdate:modelValue": m
      }), {
        ...t,
        default: () => {
          var A;
          return u(se, null, [u(un, {
            modelValue: c.value,
            "onUpdate:modelValue": (I) => c.value = I,
            activator: "parent",
            "min-width": "0",
            location: e.location,
            closeOnContentClick: !1,
            openOnClick: !1
          }, {
            default: () => [u(ai, H(S, {
              modelValue: s.value,
              "onUpdate:modelValue": (I) => s.value = I,
              onSave: y,
              onCancel: () => c.value = !1
            }), {
              default: (I) => {
                let {
                  actions: _,
                  model: B,
                  save: w,
                  cancel: P,
                  isPristine: T
                } = I;
                return u(di, H(k, {
                  modelValue: e.hideActions ? s.value : B.value,
                  "onUpdate:modelValue": (C) => {
                    e.hideActions ? (s.value = C, e.multiple || (c.value = !1)) : B.value = C;
                  },
                  onMousedown: (C) => C.preventDefault()
                }), {
                  actions: e.hideActions ? void 0 : () => {
                    var C;
                    return ((C = t.actions) == null ? void 0 : C.call(t, {
                      save: w,
                      cancel: P,
                      isPristine: T
                    })) ?? _();
                  }
                });
              }
            })]
          }), (A = t.default) == null ? void 0 : A.call(t)]);
        }
      });
    }), yt({}, d);
  }
});
function en(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(n, "0");
}
const jS = p({
  allowedValues: Function,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: null,
  double: Boolean,
  format: {
    type: Function,
    default: (e) => e
  },
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number
  }
}, "VTimePickerClock"), br = R()({
  name: "VTimePickerClock",
  props: jS(),
  emits: {
    change: (e) => !0,
    input: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = j(null), l = j(null), i = j(void 0), o = j(!1), r = j(null), s = j(null), {
      textColorClasses: c,
      textColorStyles: d
    } = Ue($(e, "color")), {
      backgroundColorClasses: v,
      backgroundColorStyles: f
    } = Ve($(e, "color")), g = b(() => e.max - e.min + 1), h = b(() => e.double ? g.value / 2 : g.value), y = b(() => 360 / h.value), m = b(() => y.value * Math.PI / 180), S = b(() => e.modelValue == null ? e.min : e.modelValue), k = b(() => 0.62), V = b(() => {
      const N = [];
      for (let O = e.min; O <= e.max; O = O + e.step)
        N.push(O);
      return N;
    });
    Z(() => e.modelValue, (N) => {
      i.value = N;
    });
    function A(N) {
      i.value !== N && (i.value = N), t("input", N);
    }
    function I(N) {
      return !e.allowedValues || e.allowedValues(N);
    }
    function _(N) {
      if (!e.scrollable || e.disabled) return;
      N.preventDefault();
      const O = Math.sign(-N.deltaY || 1);
      let E = S.value;
      do
        E = E + O, E = (E - e.min + g.value) % g.value + e.min;
      while (!I(E) && E !== S.value);
      E !== e.displayedValue && A(E);
    }
    function B(N) {
      return e.double && N - e.min >= h.value;
    }
    function w(N) {
      return B(N) ? k.value : 1;
    }
    function P(N) {
      const O = e.rotate * Math.PI / 180;
      return {
        x: Math.sin((N - e.min) * m.value + O) * w(N),
        y: -Math.cos((N - e.min) * m.value + O) * w(N)
      };
    }
    function T(N, O) {
      const E = (Math.round(N / y.value) + (O ? h.value : 0)) % g.value + e.min;
      return N < 360 - y.value / 2 ? E : O ? e.max - h.value + 1 : e.min;
    }
    function C(N) {
      const {
        x: O,
        y: E
      } = P(N);
      return {
        left: `${50 + O * 50}%`,
        top: `${50 + E * 50}%`
      };
    }
    function x(N, O) {
      const E = O.x - N.x, F = O.y - N.y;
      return Math.sqrt(E * E + F * F);
    }
    function D(N, O) {
      const E = 2 * Math.atan2(O.y - N.y - x(N, O), O.x - N.x);
      return Math.abs(E * 180 / Math.PI);
    }
    function M(N) {
      r.value === null && (r.value = N), s.value = N, A(N);
    }
    function L(N) {
      var q, ue;
      if (N.preventDefault(), !o.value && N.type !== "click" || !a.value) return;
      const {
        width: O,
        top: E,
        left: F
      } = (q = a.value) == null ? void 0 : q.getBoundingClientRect(), {
        width: Y
      } = ((ue = l.value) == null ? void 0 : ue.getBoundingClientRect()) ?? {
        width: 0
      }, {
        clientX: X,
        clientY: Q
      } = "touches" in N ? N.touches[0] : N, re = {
        x: O / 2,
        y: -O / 2
      }, G = {
        x: X - F,
        y: E - Q
      }, te = Math.round(D(re, G) - e.rotate + 360) % 360, le = e.double && x(re, G) < (Y + Y * k.value) / 4, Ce = Math.ceil(15 / y.value);
      let ge;
      for (let U = 0; U < Ce; U++)
        if (ge = T(te + U * y.value, le), I(ge) || (ge = T(te - U * y.value, le), I(ge))) return M(ge);
    }
    function W(N) {
      e.disabled || (N.preventDefault(), window.addEventListener("mousemove", L), window.addEventListener("touchmove", L), window.addEventListener("mouseup", J), window.addEventListener("touchend", J), r.value = null, s.value = null, o.value = !0, L(N));
    }
    function J(N) {
      N.stopPropagation(), window.removeEventListener("mousemove", L), window.removeEventListener("touchmove", L), window.removeEventListener("mouseup", J), window.removeEventListener("touchend", J), o.value = !1, s.value !== null && I(s.value) && t("change", s.value);
    }
    z(() => u("div", {
      class: [{
        "v-time-picker-clock": !0,
        "v-time-picker-clock--indeterminate": e.modelValue == null,
        "v-time-picker-clock--readonly": e.readonly
      }],
      onMousedown: W,
      onTouchstart: W,
      onWheel: _,
      ref: a
    }, [u("div", {
      class: "v-time-picker-clock__inner",
      ref: l
    }, [u("div", {
      class: [{
        "v-time-picker-clock__hand": !0,
        "v-time-picker-clock__hand--inner": B(e.modelValue)
      }, c.value],
      style: [{
        transform: `rotate(${e.rotate + y.value * (S.value - e.min)}deg) scaleY(${w(S.value)})`
      }, d.value]
    }, null), V.value.map((N) => {
      const O = N === S.value;
      return u("div", {
        class: [{
          "v-time-picker-clock__item": !0,
          "v-time-picker-clock__item--active": O,
          "v-time-picker-clock__item--disabled": e.disabled || !I(N)
        }, O && v.value],
        style: [C(N), O && f.value]
      }, [u("span", null, [e.format(N)])]);
    })])]));
  }
});
var He = /* @__PURE__ */ function(e) {
  return e[e.Hour = 1] = "Hour", e[e.Minute = 2] = "Minute", e[e.Second = 3] = "Second", e;
}(He || {});
const YS = p({
  ampm: Boolean,
  ampmInTitle: Boolean,
  ampmReadonly: Boolean,
  color: String,
  disabled: Boolean,
  hour: Number,
  minute: Number,
  second: Number,
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  selecting: Number,
  value: Number
}, "VTimePickerControls"), Sr = R()({
  name: "VTimePickerControls",
  props: YS(),
  emits: {
    "update:period": (e) => !0,
    "update:selecting": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = De();
    return z(() => {
      let i = e.hour;
      return e.ampm && (i = i ? (i - 1) % 12 + 1 : 12), u("div", {
        class: "v-time-picker-controls"
      }, [u("div", {
        class: {
          "v-time-picker-controls__time": !0,
          "v-time-picker-controls__time--with-seconds": e.useSeconds
        }
      }, [u(he, {
        active: e.selecting === 1,
        color: e.selecting === 1 ? e.color : void 0,
        disabled: e.disabled,
        variant: "tonal",
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        text: e.hour == null ? "--" : en(`${i}`),
        onClick: () => t("update:selecting", He.Hour)
      }, null), u("span", {
        class: ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }]
      }, [wt(":")]), u(he, {
        active: e.selecting === 2,
        color: e.selecting === 2 ? e.color : void 0,
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.selecting === 2,
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        disabled: e.disabled,
        variant: "tonal",
        text: e.minute == null ? "--" : en(e.minute),
        onClick: () => t("update:selecting", He.Minute)
      }, null), e.useSeconds && u("span", {
        class: ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }],
        key: "secondsDivider"
      }, [wt(":")]), e.useSeconds && u(he, {
        key: "secondsVal",
        variant: "tonal",
        onClick: () => t("update:selecting", He.Second),
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.selecting === 3,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        disabled: e.disabled,
        text: e.second == null ? "--" : en(e.second)
      }, null), e.ampm && e.ampmInTitle && u("div", {
        class: ["v-time-picker-controls__ampm", {
          "v-time-picker-controls__ampm--readonly": e.ampmReadonly
        }]
      }, [u(he, {
        active: e.period === "am",
        color: e.period === "am" ? e.color : void 0,
        class: {
          "v-time-picker-controls__ampm__am": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "am"
        },
        disabled: e.disabled,
        text: l("$vuetify.timePicker.am"),
        variant: e.disabled && e.period === "am" ? "elevated" : "tonal",
        onClick: () => e.period !== "am" ? t("update:period", "am") : null
      }, null), u(he, {
        active: e.period === "pm",
        color: e.period === "pm" ? e.color : void 0,
        class: {
          "v-time-picker-controls__ampm__pm": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "pm"
        },
        disabled: e.disabled,
        text: l("$vuetify.timePicker.pm"),
        variant: e.disabled && e.period === "pm" ? "elevated" : "tonal",
        onClick: () => e.period !== "pm" ? t("update:period", "pm") : null
      }, null)])])]);
    }), {};
  }
}), GS = dt(24), Nc = dt(12), US = Nc.map((e) => e + 12);
dt(60);
const KS = {
  1: "hour",
  2: "minute",
  3: "second"
}, qS = p({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  ampmInTitle: Boolean,
  disabled: Boolean,
  format: {
    type: String,
    default: "ampm"
  },
  max: String,
  min: String,
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  ...Te(co({
    title: "$vuetify.timePicker.title"
  }), ["landscape"])
}, "VTimePicker"), XS = R()({
  name: "VTimePicker",
  props: qS(),
  emits: {
    "update:hour": (e) => !0,
    "update:minute": (e) => !0,
    "update:period": (e) => !0,
    "update:second": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = De(), i = j(null), o = j(null), r = j(null), s = j(null), c = j(null), d = j(null), v = j("am"), f = j(He.Hour), g = j(null), h = j(null), y = b(() => {
      let x;
      if (e.allowedHours instanceof Array ? x = (L) => e.allowedHours.includes(L) : x = e.allowedHours, !e.min && !e.max) return x;
      const D = e.min ? Number(e.min.split(":")[0]) : 0, M = e.max ? Number(e.max.split(":")[0]) : 23;
      return (L) => L >= D * 1 && L <= M * 1 && (!x || x(L));
    }), m = b(() => {
      let x;
      const D = !y.value || i.value === null || y.value(i.value);
      if (e.allowedMinutes instanceof Array ? x = (E) => e.allowedMinutes.includes(E) : x = e.allowedMinutes, !e.min && !e.max)
        return D ? x : () => !1;
      const [M, L] = e.min ? e.min.split(":").map(Number) : [0, 0], [W, J] = e.max ? e.max.split(":").map(Number) : [23, 59], N = M * 60 + L * 1, O = W * 60 + J * 1;
      return (E) => {
        const F = 60 * i.value + E;
        return F >= N && F <= O && D && (!x || x(E));
      };
    }), S = b(() => {
      let x;
      const M = (!y.value || i.value === null || y.value(i.value)) && (!m.value || o.value === null || m.value(o.value));
      if (e.allowedSeconds instanceof Array ? x = (X) => e.allowedSeconds.includes(X) : x = e.allowedSeconds, !e.min && !e.max)
        return M ? x : () => !1;
      const [L, W, J] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [N, O, E] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], F = L * 3600 + W * 60 + (J || 0) * 1, Y = N * 3600 + O * 60 + (E || 0) * 1;
      return (X) => {
        const Q = 3600 * i.value + 60 * o.value + X;
        return Q >= F && Q <= Y && M && (!x || x(X));
      };
    }), k = b(() => e.format === "ampm");
    Z(() => e.modelValue, (x) => B(x)), at(() => {
      B(e.modelValue);
    });
    function V() {
      return i.value != null && o.value != null && (!e.useSeconds || r.value != null) ? `${en(i.value)}:${en(o.value)}` + (e.useSeconds ? `:${en(r.value)}` : "") : null;
    }
    function A() {
      const x = V();
      x !== null && t("update:modelValue", x);
    }
    function I(x) {
      return x ? (x - 1) % 12 + 1 : 12;
    }
    function _(x, D) {
      return x % 12 + (D === "pm" ? 12 : 0);
    }
    function B(x) {
      if (x == null || x === "")
        i.value = null, o.value = null, r.value = null;
      else if (x instanceof Date)
        i.value = x.getHours(), o.value = x.getMinutes(), r.value = x.getSeconds();
      else {
        const [D, , M, , L, W] = x.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        i.value = W ? _(parseInt(D, 10), W) : parseInt(D, 10), o.value = parseInt(M, 10), r.value = parseInt(L || 0, 10);
      }
      v.value = i.value == null || i.value < 12 ? "am" : "pm";
    }
    function w(x, D) {
      const M = y.value;
      if (!M) return D;
      const L = k.value ? D < 12 ? Nc : US : GS;
      return ((L.find((J) => M((J + D) % L.length + L[0])) || 0) + D) % L.length + L[0];
    }
    function P(x) {
      if (v.value = x, i.value != null) {
        const D = i.value + (v.value === "am" ? -12 : 12);
        i.value = w("hour", D);
      }
      return t("update:period", x), A(), !0;
    }
    function T(x) {
      f.value === He.Hour ? i.value = k.value ? _(x, v.value) : x : f.value === He.Minute ? o.value = x : r.value = x;
    }
    function C(x) {
      switch (KS[f.value]) {
        case "hour":
          t("update:hour", x);
          break;
        case "minute":
          t("update:minute", x);
          break;
        case "second":
          t("update:second", x);
          break;
      }
      const D = i.value !== null && o.value !== null && (e.useSeconds ? r.value !== null : !0);
      f.value === He.Hour ? f.value = He.Minute : e.useSeconds && f.value === He.Minute && (f.value = He.Second), !(i.value === s.value && o.value === c.value && (!e.useSeconds || r.value === d.value) || V() === null) && (s.value = i.value, c.value = o.value, e.useSeconds && (d.value = r.value), D && A());
    }
    z(() => {
      const x = Na.filterProps(e), D = Sr.filterProps(e), M = br.filterProps(Te(e, ["format", "modelValue", "min", "max"]));
      return u(Na, H(x, {
        color: void 0,
        class: ["v-time-picker", e.class],
        style: e.style
      }), {
        title: () => {
          var L;
          return ((L = a.title) == null ? void 0 : L.call(a)) ?? u("div", {
            class: "v-time-picker__title"
          }, [l(e.title)]);
        },
        header: () => u(Sr, H(D, {
          ampm: k.value || e.ampmInTitle,
          ampmReadonly: k.value && !e.ampmInTitle,
          hour: i.value,
          minute: o.value,
          period: v.value,
          second: r.value,
          selecting: f.value,
          "onUpdate:period": (L) => P(L),
          "onUpdate:selecting": (L) => f.value = L,
          ref: g
        }), null),
        default: () => u(br, H(M, {
          allowedValues: f.value === He.Hour ? y.value : f.value === He.Minute ? m.value : S.value,
          double: f.value === He.Hour && !k.value,
          format: f.value === He.Hour ? k.value ? I : (L) => L : (L) => en(L, 2),
          max: f.value === He.Hour ? k.value && v.value === "am" ? 11 : 23 : 59,
          min: f.value === He.Hour && k.value && v.value === "pm" ? 12 : 0,
          size: 20,
          step: f.value === He.Hour ? 1 : 5,
          modelValue: f.value === He.Hour ? i.value : f.value === He.Minute ? o.value : r.value,
          onChange: C,
          onInput: T,
          ref: h
        }), null),
        actions: a.actions
      });
    });
  }
}), ZS = {
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
}, JS = Rc({
  components: {
    VDateInput: WS,
    VTimePicker: XS,
    ...VS
  },
  directives: $S,
  icons: {
    defaultSet: "mdi",
    aliases: fu,
    sets: {
      mdi: mu
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: ZS
    }
  }
});
function QS(e) {
  e.use(JS);
}
const ek = {
  GsButton: NS
}, nk = {
  install(e) {
    QS(e);
    for (const [n, t] of Object.entries(ek))
      e.component(n, t);
  }
};
export {
  NS as GsButton,
  nk as default
};
