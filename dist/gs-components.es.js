import { reactive as ct, computed as f, watchEffect as mt, toRefs as ja, shallowRef as ae, capitalize as Ha, Fragment as de, warn as In, getCurrentInstance as so, inject as he, provide as Re, ref as j, unref as re, defineComponent as le, h as _t, camelize as Wa, onBeforeUnmount as qe, watch as q, readonly as Ua, onScopeDispose as Ve, effectScope as En, toRaw as qa, TransitionGroup as $n, Transition as nt, createVNode as u, mergeProps as Q, isRef as dt, toRef as U, onBeforeMount as An, nextTick as Se, withDirectives as _e, resolveDirective as gt, vShow as Vt, onMounted as Xe, onUpdated as uo, Text as co, resolveDynamicComponent as Tn, Teleport as fo, onDeactivated as vo, cloneVNode as mo, onUnmounted as xt, createElementBlock as D, openBlock as O, normalizeClass as xe, createElementVNode as L, createCommentVNode as fe, createBlock as ve, normalizeStyle as He, withCtx as z, createTextVNode as K, toDisplayString as ee, renderSlot as Le, createSlots as On, mergeModels as go, useModel as ho, withModifiers as na, renderList as Qt } from "vue";
import { createVuetify as yo } from "vuetify";
function I(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...i,
      default: n[l]
    } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const J = I({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), me = typeof window < "u", Fn = me && "IntersectionObserver" in window, aa = me && "EyeDropper" in window;
function Pt(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => Pt(e[a], t[a]));
}
function bo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function M(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function po(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function la(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function ko(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const oa = Object.freeze({
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
}), Co = Object.freeze({
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
function Ye(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Ln(e, t) {
  const n = {};
  for (const a of t)
    Object.hasOwn(e, a) && (n[a] = e[a]);
  return n;
}
function ia(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e)
    t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Bt(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
const Xa = /^on[^a-z]/, Mn = (e) => Xa.test(e), wo = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Rn(e) {
  const [t, n] = ia(e, [Xa]), a = Bt(t, wo), [l, o] = ia(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function We(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Be(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ra(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function sa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function So(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function it() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const o = e[l], i = t[l];
    if (la(o) && la(i)) {
      a[l] = it(o, i, n);
      continue;
    }
    if (n && Array.isArray(o) && Array.isArray(i)) {
      a[l] = n(o, i);
      continue;
    }
    a[l] = i;
  }
  return a;
}
function Ya(e) {
  return e.map((t) => t.type === de ? Ya(t.children) : t).flat();
}
function Ze() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Ze.cache.has(e)) return Ze.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Ze.cache.set(e, t), t;
}
Ze.cache = /* @__PURE__ */ new Map();
function kt(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => kt(e, n)).flat(1);
  if (t.suspense)
    return kt(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => kt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return kt(e, t.component.subTree).flat(1);
  }
  return [];
}
function _o(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function zn(e) {
  const t = ct({}), n = f(e);
  return mt(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), ja(t);
}
function Ut(e, t) {
  return e.includes(t);
}
function Ka(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Je = () => [Function, Array];
function ua(e, t) {
  return t = "on" + Ha(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Za(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else typeof e == "function" && e(...n);
}
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Ja(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function Gt(e, t) {
  var a, l, o, i;
  const n = bn(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = n[0]) == null || a.focus());
  else if (t === "first")
    (l = n[0]) == null || l.focus();
  else if (t === "last")
    (o = n.at(-1)) == null || o.focus();
  else if (typeof t == "number")
    (i = n[t]) == null || i.focus();
  else {
    const r = Ja(n, t);
    r ? r.focus() : Gt(e, t === "next" ? "first" : "last");
  }
}
function Qa(e, t) {
  if (!(me && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Vo(e, t) {
  if (!me || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function xo(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function pn() {
  const e = ae(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => ko(e.value)
  }), t;
}
const el = ["top", "bottom"], Po = ["start", "end", "left", "right"];
function kn(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Ut(el, n) ? "start" : Ut(Po, n) ? "top" : "center"), {
    side: ca(n, t),
    align: ca(a, t)
  };
}
function ca(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function dn(e) {
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
function fn(e) {
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
function da(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function fa(e) {
  return Ut(el, e.side) ? "y" : "x";
}
class Qe {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: l,
      height: o
    } = t;
    this.x = n, this.y = a, this.width = l, this.height = o;
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
function va(e, t) {
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
function tl(e) {
  return Array.isArray(e) ? new Qe({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Nn(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), o = +l[0], i = +l[5], r = +l[12], s = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), o = +l[0], i = +l[3], r = +l[4], s = +l[5];
    else
      return new Qe(t);
    const c = n.transformOrigin, d = t.x - r - (1 - o) * parseFloat(c), v = t.y - s - (1 - i) * parseFloat(c.slice(c.indexOf(" ") + 1)), h = o ? t.width / o : e.offsetWidth + 1, g = i ? t.height / i : e.offsetHeight + 1;
    return new Qe({
      x: d,
      y: v,
      width: h,
      height: g
    });
  } else
    return new Qe(t);
}
function rt(e, t, n) {
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
const jt = /* @__PURE__ */ new WeakMap();
function Bo(e, t) {
  Object.keys(t).forEach((n) => {
    if (Mn(n)) {
      const a = Ka(n), l = jt.get(e);
      if (t[n] == null)
        l == null || l.forEach((o) => {
          const [i, r] = o;
          i === a && (e.removeEventListener(a, r), l.delete(o));
        });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, t[n]]), jt.has(e) || jt.set(e, o);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Io(e, t) {
  Object.keys(t).forEach((n) => {
    if (Mn(n)) {
      const a = Ka(n), l = jt.get(e);
      l == null || l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else
      e.removeAttribute(n);
  });
}
const ot = 2.4, ma = 0.2126729, ga = 0.7151522, ha = 0.072175, Eo = 0.55, $o = 0.58, Ao = 0.57, To = 0.62, Rt = 0.03, ya = 1.45, Oo = 5e-4, Fo = 1.25, Lo = 1.25, Mo = 0.078, ba = 12.82051282051282, zt = 0.06, Ro = 1e-3;
function pa(e, t) {
  const n = (e.r / 255) ** ot, a = (e.g / 255) ** ot, l = (e.b / 255) ** ot, o = (t.r / 255) ** ot, i = (t.g / 255) ** ot, r = (t.b / 255) ** ot;
  let s = n * ma + a * ga + l * ha, c = o * ma + i * ga + r * ha;
  if (s <= Rt && (s += (Rt - s) ** ya), c <= Rt && (c += (Rt - c) ** ya), Math.abs(c - s) < Oo) return 0;
  let d;
  if (c > s) {
    const v = (c ** Eo - s ** $o) * Fo;
    d = v < Ro ? 0 : v < Mo ? v - v * ba * zt : v - zt;
  } else {
    const v = (c ** To - s ** Ao) * Lo;
    d = v > -1e-3 ? 0 : v > -0.078 ? v - v * ba * zt : v + zt;
  }
  return d * 100;
}
function et(e) {
  In(`Vuetify: ${e}`);
}
function zo(e) {
  In(`Vuetify error: ${e}`);
}
const No = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Do = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Go(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], o = Do, i = No;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function Cn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function jo(e) {
  return Cn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const ka = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ho = {
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
  hsl: (e, t, n, a) => Ca({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => Ca({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => Me({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => Me({
    h: e,
    s: t,
    v: n,
    a
  })
};
function Oe(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && et(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && ka.test(e)) {
    const {
      groups: t
    } = e.match(ka), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*/).map((o) => o.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return Ho[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || et(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && et(`'${e}' is not a valid hex(a) color`), ol(t);
  } else if (typeof e == "object") {
    if (Ye(e, ["r", "g", "b"]))
      return e;
    if (Ye(e, ["h", "s", "l"]))
      return Me(Dn(e));
    if (Ye(e, ["h", "s", "v"]))
      return Me(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Me(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return {
    r: i[0],
    g: i[1],
    b: i[2],
    a: l
  };
}
function Ca(e) {
  return Me(Dn(e));
}
function It(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function nl(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return {
    h: t,
    s: i,
    l: o,
    a: l
  };
}
function Dn(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return {
    h: t,
    s: i,
    v: o,
    a: l
  };
}
function al(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function ll(e) {
  return al(Me(e));
}
function Nt(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Wo(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[Nt(t), Nt(n), Nt(a), l !== void 0 ? Nt(Math.round(l * 255)) : ""].join("")}`;
}
function ol(e) {
  e = qo(e);
  let [t, n, a, l] = So(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function Uo(e) {
  const t = ol(e);
  return It(t);
}
function il(e) {
  return Wo(Me(e));
}
function qo(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = sa(sa(e, 6), 8, "F")), e;
}
function wa(e) {
  const t = Oe(e);
  return Go(t)[1];
}
function Xo(e, t) {
  const n = wa(e), a = wa(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function Yo(e) {
  const t = Math.abs(pa(Oe(0), Oe(e)));
  return Math.abs(pa(Oe(16777215), Oe(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function ce(e, t) {
  const n = so();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = ce(e).type;
  return Ze((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let rl = 0, Ht = /* @__PURE__ */ new WeakMap();
function ze() {
  const e = ce("getUid");
  if (Ht.has(e)) return Ht.get(e);
  {
    const t = rl++;
    return Ht.set(e, t), t;
  }
}
ze.reset = () => {
  rl = 0, Ht = /* @__PURE__ */ new WeakMap();
};
function Ko(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const qt = Symbol.for("vuetify:defaults");
function Gn() {
  const e = he(qt);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Et(e, t) {
  const n = Gn(), a = j(e), l = f(() => {
    if (re(t == null ? void 0 : t.disabled)) return n.value;
    const i = re(t == null ? void 0 : t.scoped), r = re(t == null ? void 0 : t.reset), s = re(t == null ? void 0 : t.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let c = it(a.value, {
      prev: n.value
    });
    if (i) return c;
    if (r || s) {
      const d = Number(r || 1 / 0);
      for (let v = 0; v <= d && !(!c || !("prev" in c)); v++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = it(it(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? it(c.prev, c) : c;
  });
  return Re(qt, l), l;
}
function Zo(e, t) {
  var n, a;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[Ze(t)]) < "u";
}
function Jo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gn();
  const a = ce("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = f(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? t];
  }), o = new Proxy(e, {
    get(s, c) {
      var v, h, g, b, y, m, p;
      const d = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(v = l.value) == null ? void 0 : v[c], d].filter((w) => w != null) : typeof c == "string" && !Zo(a.vnode, c) ? ((h = l.value) == null ? void 0 : h[c]) !== void 0 ? (g = l.value) == null ? void 0 : g[c] : ((y = (b = n.value) == null ? void 0 : b.global) == null ? void 0 : y[c]) !== void 0 ? (p = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : p[c] : d : d;
    }
  }), i = ae();
  mt(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      i.value = void 0;
  });
  function r() {
    const s = Ko(qt, a);
    Re(qt, f(() => i.value ? it((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return {
    props: o,
    provideSubDefaults: r
  };
}
function Ne(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return et("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = I(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return Ln(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = Gn();
      if (!o.value) return e._setup(a, l);
      const {
        props: i,
        provideSubDefaults: r
      } = Jo(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function G() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Ne : le)(t);
}
function Qo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return G()({
    name: n ?? Ha(Wa(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...J()
    },
    setup(a, l) {
      let {
        slots: o
      } = l;
      return () => {
        var i;
        return _t(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (i = o.default) == null ? void 0 : i.call(o));
      };
    }
  });
}
function sl(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Xt = "cubic-bezier(0.4, 0, 0.2, 1)", ei = "cubic-bezier(0.0, 0, 0.2, 1)", ti = "cubic-bezier(0.4, 0, 1, 1)";
function ni(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? ai(e) : jn(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Yt(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (jn(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function jn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function ai(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function li(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function H(e) {
  const t = ce("useRender");
  t.render = e;
}
function ul(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = pn(), a = j();
  if (me) {
    const l = new ResizeObserver((o) => {
      e == null || e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    qe(() => {
      l.disconnect();
    }), q(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Ua(a)
  };
}
function ft(e, t) {
  let n;
  function a() {
    n = En(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  q(e, (l) => {
    l && !n ? a() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), Ve(() => {
    n == null || n.stop();
  });
}
function ge(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const o = ce("useProxiedModel"), i = j(e[t] !== void 0 ? e[t] : n), r = Ze(t), c = r !== t ? f(() => {
    var v, h, g, b;
    return e[t], !!(((v = o.vnode.props) != null && v.hasOwnProperty(t) || (h = o.vnode.props) != null && h.hasOwnProperty(r)) && ((g = o.vnode.props) != null && g.hasOwnProperty(`onUpdate:${t}`) || (b = o.vnode.props) != null && b.hasOwnProperty(`onUpdate:${r}`)));
  }) : f(() => {
    var v, h;
    return e[t], !!((v = o.vnode.props) != null && v.hasOwnProperty(t) && ((h = o.vnode.props) != null && h.hasOwnProperty(`onUpdate:${t}`)));
  });
  ft(() => !c.value, () => {
    q(() => e[t], (v) => {
      i.value = v;
    });
  });
  const d = f({
    get() {
      const v = e[t];
      return a(c.value ? v : i.value);
    },
    set(v) {
      const h = l(v), g = qa(c.value ? e[t] : i.value);
      g === h || a(g) === v || (i.value = h, o == null || o.emit(`update:${t}`, h));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[t] : i.value
  }), d;
}
const cl = Symbol.for("vuetify:locale");
function oi() {
  const e = he(cl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function $e() {
  const e = he(cl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Sa = Symbol.for("vuetify:theme"), ke = I({
  theme: String
}, "theme");
function Pe(e) {
  ce("provideTheme");
  const t = he(Sa, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), a = f(() => t.themes.value[n.value]), l = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), o = {
    ...t,
    name: n,
    current: a,
    themeClasses: l
  };
  return Re(Sa, o), o;
}
const Ae = I({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), ii = I({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Ce(e, t, n) {
  return G()({
    name: e,
    props: ii({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: o
      } = l;
      const i = {
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
              height: h
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = d || "", r.style.width = v || "", r.style.height = h || "";
          }
        }
      };
      return () => {
        const r = a.group ? $n : nt;
        return _t(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : i
        }, o.default);
      };
    }
  });
}
function dl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return G()({
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
        slots: o
      } = l;
      const i = a.group ? $n : nt;
      return () => _t(i, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, o.default);
    }
  });
}
function fl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Wa(`offset-${n}`);
  return {
    onBeforeEnter(i) {
      i._parent = i.parentNode, i._initialStyle = {
        transition: i.style.transition,
        overflow: i.style.overflow,
        [n]: i.style[n]
      };
    },
    onEnter(i) {
      const r = i._initialStyle;
      if (!r) return;
      i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
      const s = `${i[a]}px`;
      i.style[n] = "0", i.offsetHeight, i.style.transition = r.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
        i.style[n] = s;
      });
    },
    onAfterEnter: o,
    onEnterCancelled: o,
    onLeave(i) {
      i._initialStyle = {
        transition: "",
        overflow: i.style.overflow,
        [n]: i.style[n]
      }, i.style.overflow = "hidden", i.style[n] = `${i[a]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), o(i);
  }
  function o(i) {
    if (!i._initialStyle) return;
    const r = i._initialStyle[n];
    i.style.overflow = i._initialStyle.overflow, r != null && (i.style[n] = r), delete i._initialStyle;
  }
}
const ri = I({
  target: [Object, Array]
}, "v-dialog-transition"), si = G()({
  name: "VDialogTransition",
  props: ri(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, o) {
        var h;
        await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), l.style.visibility = "";
        const {
          x: i,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = Va(e.target, l), v = rt(l, [{
          transform: `translate(${i}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: ei
        });
        (h = _a(l)) == null || h.forEach((g) => {
          rt(g, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Xt
          });
        }), v.finished.then(() => o());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, o) {
        var h;
        await new Promise((g) => requestAnimationFrame(g));
        const {
          x: i,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = Va(e.target, l);
        rt(l, [{}, {
          transform: `translate(${i}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: ti
        }).finished.then(() => o()), (h = _a(l)) == null || h.forEach((g) => {
          rt(g, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Xt
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(nt, Q({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : u(nt, {
      name: "dialog-transition"
    }, n);
  }
});
function _a(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Va(e, t) {
  const n = tl(e), a = Nn(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((p) => parseFloat(p)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let c = n.top + n.height / 2;
  i === "top" || r === "top" ? c -= n.height / 2 : (i === "bottom" || r === "bottom") && (c += n.height / 2);
  const d = n.width / a.width, v = n.height / a.height, h = Math.max(1, d, v), g = d / h || 0, b = v / h || 0, y = a.width * a.height / (window.innerWidth * window.innerHeight), m = y > 0.12 ? Math.min(1.5, (y - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (o + a.top),
    sx: g,
    sy: b,
    speed: m
  };
}
Ce("fab-transition", "center center", "out-in");
Ce("dialog-bottom-transition");
Ce("dialog-top-transition");
Ce("fade-transition");
const ui = Ce("scale-transition");
Ce("scroll-x-transition");
Ce("scroll-x-reverse-transition");
Ce("scroll-y-transition");
Ce("scroll-y-reverse-transition");
Ce("slide-x-transition");
Ce("slide-x-reverse-transition");
const vl = Ce("slide-y-transition");
Ce("slide-y-reverse-transition");
dl("expand-transition", fl());
const ci = dl("expand-x-transition", fl("", !0)), di = I({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Fe = G(!1)({
  name: "VDefaultsProvider",
  props: di(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: o,
      root: i,
      scoped: r
    } = ja(e);
    return Et(a, {
      reset: o,
      root: i,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = n.default) == null ? void 0 : s.call(n);
    };
  }
}), ht = I({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function yt(e) {
  return {
    dimensionStyles: f(() => {
      const n = {}, a = M(e.height), l = M(e.maxHeight), o = M(e.maxWidth), i = M(e.minHeight), r = M(e.minWidth), s = M(e.width);
      return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
    })
  };
}
function fi(e) {
  return {
    aspectStyles: f(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const ml = I({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...J(),
  ...ht()
}, "VResponsive"), xa = G()({
  name: "VResponsive",
  props: ml(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = fi(e), {
      dimensionStyles: l
    } = yt(e);
    return H(() => {
      var o;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (o = n.additional) == null ? void 0 : o.call(n), n.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
});
function Hn(e) {
  return zn(() => {
    const t = [], n = {};
    if (e.value.background)
      if (Cn(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && jo(e.value.background)) {
          const a = Oe(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Yo(a);
            n.color = l, n.caretColor = l;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (Cn(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function Ue(e, t) {
  const n = f(() => ({
    text: dt(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Hn(n);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function Ie(e, t) {
  const n = f(() => ({
    background: dt(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Hn(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const De = I({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  return {
    roundedClasses: f(() => {
      const a = dt(e) ? e.value : e.rounded, l = dt(e) ? e.value : e.tile, o = [];
      if (a === !0 || a === "")
        o.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          o.push(`rounded-${i}`);
      else (l || a === !1) && o.push("rounded-0");
      return o;
    })
  };
}
const en = I({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Ke = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    group: o,
    ...i
  } = e, {
    component: r = o ? $n : nt,
    ...s
  } = typeof a == "object" ? a : {};
  return _t(r, Q(typeof a == "string" ? {
    name: l ? "" : a
  } : s, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: o
  }).filter((c) => {
    let [d, v] = c;
    return v !== void 0;
  })), i), n);
};
function vi(e, t) {
  if (!Fn) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: o
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, i = new IntersectionObserver(function() {
    var v;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (v = e._observe) == null ? void 0 : v[t.instance.$.uid];
    if (!c) return;
    const d = r.some((h) => h.isIntersecting);
    l && (!n.quiet || c.init) && (!n.once || d || c.init) && l(d, r, s), d && n.once ? gl(e, t) : c.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: i
  }, i.observe(e);
}
function gl(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const hl = {
  mounted: vi,
  unmounted: gl
}, mi = I({
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
  ...ml(),
  ...J(),
  ...De(),
  ...en()
}, "VImg"), yl = G()({
  name: "VImg",
  directives: {
    intersect: hl
  },
  props: mi(),
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
      backgroundColorStyles: o
    } = Ie(U(e, "color")), {
      roundedClasses: i
    } = Ge(e), r = ce("VImg"), s = ae(""), c = j(), d = ae(e.eager ? "loading" : "idle"), v = ae(), h = ae(), g = f(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), b = f(() => g.value.aspect || v.value / h.value || 0);
    q(() => e.src, () => {
      y(d.value !== "idle");
    }), q(b, (C, P) => {
      !C && P && c.value && _(c.value);
    }), An(() => y());
    function y(C) {
      if (!(e.eager && C) && !(Fn && !C && !e.eager)) {
        if (d.value = "loading", g.value.lazySrc) {
          const P = new Image();
          P.src = g.value.lazySrc, _(P, null);
        }
        g.value.src && Se(() => {
          var P;
          n("loadstart", ((P = c.value) == null ? void 0 : P.currentSrc) || g.value.src), setTimeout(() => {
            var A;
            if (!r.isUnmounted)
              if ((A = c.value) != null && A.complete) {
                if (c.value.naturalWidth || p(), d.value === "error") return;
                b.value || _(c.value, null), d.value === "loading" && m();
              } else
                b.value || _(c.value), w();
          });
        });
      }
    }
    function m() {
      var C;
      r.isUnmounted || (w(), _(c.value), d.value = "loaded", n("load", ((C = c.value) == null ? void 0 : C.currentSrc) || g.value.src));
    }
    function p() {
      var C;
      r.isUnmounted || (d.value = "error", n("error", ((C = c.value) == null ? void 0 : C.currentSrc) || g.value.src));
    }
    function w() {
      const C = c.value;
      C && (s.value = C.currentSrc || C.src);
    }
    let k = -1;
    qe(() => {
      clearTimeout(k);
    });
    function _(C) {
      let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const A = () => {
        if (clearTimeout(k), r.isUnmounted) return;
        const {
          naturalHeight: F,
          naturalWidth: N
        } = C;
        F || N ? (v.value = N, h.value = F) : !C.complete && d.value === "loading" && P != null ? k = window.setTimeout(A, P) : (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (v.value = 1, h.value = 1);
      };
      A();
    }
    const E = f(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), V = () => {
      var A;
      if (!g.value.src || d.value === "idle") return null;
      const C = u("img", {
        class: ["v-img__img", E.value],
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
        onError: p
      }, null), P = (A = a.sources) == null ? void 0 : A.call(a);
      return u(Ke, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [_e(P ? u("picture", {
          class: "v-img__picture"
        }, [P, C]) : C, [[Vt, d.value === "loaded"]])]
      });
    }, x = () => u(Ke, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && d.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", E.value],
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), S = () => a.placeholder ? u(Ke, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, T = () => a.error ? u(Ke, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, W = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, $ = ae(!1);
    {
      const C = q(b, (P) => {
        P && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            $.value = !0;
          });
        }), C());
      });
    }
    return H(() => {
      const C = xa.filterProps(e);
      return _e(u(xa, Q({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !$.value
        }, l.value, i.value, e.class],
        style: [{
          width: M(e.width === "auto" ? v.value : e.width)
        }, o.value, e.style]
      }, C, {
        aspectRatio: b.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(de, null, [u(V, null, null), u(x, null, null), u(W, null, null), u(S, null, null), u(T, null, null)]),
        default: a.default
      }), [[gt("intersect"), {
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
      naturalHeight: h
    };
  }
}), $t = I({
  border: [Boolean, Number, String]
}, "border");
function At(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  return {
    borderClasses: f(() => {
      const a = dt(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          l.push(`border-${o}`);
      return l;
    })
  };
}
const Tt = I({
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
function Ot(e) {
  return {
    elevationClasses: f(() => {
      const n = dt(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
const gi = [null, "default", "comfortable", "compact"], lt = I({
  density: {
    type: String,
    default: "default",
    validator: (e) => gi.includes(e)
  }
}, "density");
function bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  return {
    densityClasses: f(() => `${t}--density-${e.density}`)
  };
}
const hi = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Wn(e, t) {
  return u(de, null, [e && u("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const tn = I({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => hi.includes(e)
  }
}, "variant");
function Un(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  const n = f(() => {
    const {
      variant: o
    } = re(e);
    return `${t}--variant-${o}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Hn(f(() => {
    const {
      variant: o,
      color: i
    } = re(e);
    return {
      [["elevated", "flat"].includes(o) ? "background" : "text"]: i
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const bl = I({
  baseColor: String,
  divided: Boolean,
  ...$t(),
  ...J(),
  ...lt(),
  ...Tt(),
  ...De(),
  ...Ae(),
  ...ke(),
  ...tn()
}, "VBtnGroup"), Pa = G()({
  name: "VBtnGroup",
  props: bl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Pe(e), {
      densityClasses: l
    } = bt(e), {
      borderClasses: o
    } = At(e), {
      elevationClasses: i
    } = Ot(e), {
      roundedClasses: r
    } = Ge(e);
    Et({
      VBtn: {
        height: "auto",
        baseColor: U(e, "baseColor"),
        color: U(e, "color"),
        density: U(e, "density"),
        flat: !0,
        variant: U(e, "variant")
      }
    }), H(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, o.value, l.value, i.value, r.value, e.class],
      style: e.style
    }, n));
  }
}), yi = I({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), bi = I({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function pi(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = ce("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = ze();
  Re(Symbol.for(`${t.description}:id`), l);
  const o = he(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = U(e, "value"), r = f(() => !!(o.disabled.value || e.disabled));
  o.register({
    id: l,
    value: i,
    disabled: r
  }, a), qe(() => {
    o.unregister(l);
  });
  const s = f(() => o.isSelected(l)), c = f(() => o.items.value[0].id === l), d = f(() => o.items.value[o.items.value.length - 1].id === l), v = f(() => s.value && [o.selectedClass.value, e.selectedClass]);
  return q(s, (h) => {
    a.emit("group:selected", {
      value: h
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: d,
    toggle: () => o.select(l, !s.value),
    select: (h) => o.select(l, h),
    selectedClass: v,
    value: i,
    disabled: r,
    group: o
  };
}
function ki(e, t) {
  let n = !1;
  const a = ct([]), l = ge(e, "modelValue", [], (h) => h == null ? [] : pl(a, We(h)), (h) => {
    const g = wi(a, h);
    return e.multiple ? g : g[0];
  }), o = ce("useGroup");
  function i(h, g) {
    const b = h, y = Symbol.for(`${t.description}:id`), p = kt(y, o == null ? void 0 : o.vnode).indexOf(g);
    re(b.value) == null && (b.value = p, b.useIndexAsValue = !0), p > -1 ? a.splice(p, 0, b) : a.push(b);
  }
  function r(h) {
    if (n) return;
    s();
    const g = a.findIndex((b) => b.id === h);
    a.splice(g, 1);
  }
  function s() {
    const h = a.find((g) => !g.disabled);
    h && e.mandatory === "force" && !l.value.length && (l.value = [h.id]);
  }
  Xe(() => {
    s();
  }), qe(() => {
    n = !0;
  }), uo(() => {
    for (let h = 0; h < a.length; h++)
      a[h].useIndexAsValue && (a[h].value = h);
  });
  function c(h, g) {
    const b = a.find((y) => y.id === h);
    if (!(g && (b != null && b.disabled)))
      if (e.multiple) {
        const y = l.value.slice(), m = y.findIndex((w) => w === h), p = ~m;
        if (g = g ?? !p, p && e.mandatory && y.length <= 1 || !p && e.max != null && y.length + 1 > e.max) return;
        m < 0 && g ? y.push(h) : m >= 0 && !g && y.splice(m, 1), l.value = y;
      } else {
        const y = l.value.includes(h);
        if (e.mandatory && y) return;
        l.value = g ?? !y ? [h] : [];
      }
  }
  function d(h) {
    if (e.multiple && et('This method is not supported when using "multiple" prop'), l.value.length) {
      const g = l.value[0], b = a.findIndex((p) => p.id === g);
      let y = (b + h) % a.length, m = a[y];
      for (; m.disabled && y !== b; )
        y = (y + h) % a.length, m = a[y];
      if (m.disabled) return;
      l.value = [a[y].id];
    } else {
      const g = a.find((b) => !b.disabled);
      g && (l.value = [g.id]);
    }
  }
  const v = {
    register: i,
    unregister: r,
    selected: l,
    select: c,
    disabled: U(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (h) => l.value.includes(h),
    selectedClass: f(() => e.selectedClass),
    items: f(() => a),
    getItemIndex: (h) => Ci(a, h)
  };
  return Re(t, v), v;
}
function Ci(e, t) {
  const n = pl(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function pl(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Pt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) != null ? n.push(l.id) : o != null && n.push(o.id);
  }), n;
}
function wi(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value != null ? o.value : l);
    }
  }), n;
}
const kl = Symbol.for("vuetify:v-btn-toggle"), Si = I({
  ...bl(),
  ...yi()
}, "VBtnToggle");
G()({
  name: "VBtnToggle",
  props: Si(),
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
      prev: o,
      select: i,
      selected: r
    } = ki(e, kl);
    return H(() => {
      const s = Pa.filterProps(e);
      return u(Pa, Q({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = n.default) == null ? void 0 : c.call(n, {
            isSelected: a,
            next: l,
            prev: o,
            select: i,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: o,
      select: i
    };
  }
});
const _i = {
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
}, Vi = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => _t(Bi, {
    ...e,
    class: "mdi"
  })
}, ue = [String, Function, Object, Array], xi = Symbol.for("vuetify:icons"), nn = I({
  icon: {
    type: ue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Ba = G()({
  name: "VComponentIcon",
  props: nn(),
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
}), Pi = Ne({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: nn(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => u(e.tag, Q(n, {
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
Ne({
  name: "VLigatureIcon",
  props: nn(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Bi = Ne({
  name: "VClassIcon",
  props: nn(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
}), Ii = (e) => {
  const t = he(xi);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: f(() => {
      var s;
      const a = re(e);
      if (!a) return {
        component: Ba
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = t.aliases) == null ? void 0 : s[l.slice(1)])), l || et(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: Pi,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Ba,
          icon: l
        };
      const o = Object.keys(t.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), i = o ? l.slice(o.length + 1) : l;
      return {
        component: t.sets[o ?? t.defaultSet].component,
        icon: i
      };
    })
  };
}, Ei = ["x-small", "small", "default", "large", "x-large"], an = I({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  return zn(() => {
    let n, a;
    return Ut(Ei, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: M(e.size),
      height: M(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const $i = I({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ue,
  ...J(),
  ...an(),
  ...Ae({
    tag: "i"
  }),
  ...ke()
}, "VIcon"), pe = G()({
  name: "VIcon",
  props: $i(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = j(), {
      themeClasses: o
    } = Pe(e), {
      iconData: i
    } = Ii(f(() => l.value || e.icon)), {
      sizeClasses: r
    } = ln(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ue(U(e, "color"));
    return H(() => {
      var h, g;
      const d = (h = a.default) == null ? void 0 : h.call(a);
      d && (l.value = (g = Ya(d).filter((b) => b.type === co && b.children && typeof b.children == "string")[0]) == null ? void 0 : g.children);
      const v = !!(n.onClick || n.onClickOnce);
      return u(i.value.component, {
        tag: e.tag,
        icon: i.value.icon,
        class: ["v-icon", "notranslate", o.value, r.value, s.value, {
          "v-icon--clickable": v,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: M(e.size),
          height: M(e.size),
          width: M(e.size)
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
function Cl(e, t) {
  const n = j(), a = ae(!1);
  if (Fn) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    qe(() => {
      l.disconnect();
    }), q(n, (o, i) => {
      i && (l.unobserve(i), a.value = !1), o && l.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
const Ai = I({
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
  ...J(),
  ...an(),
  ...Ae({
    tag: "div"
  }),
  ...ke()
}, "VProgressCircular"), wl = G()({
  name: "VProgressCircular",
  props: Ai(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, o = j(), {
      themeClasses: i
    } = Pe(e), {
      sizeClasses: r,
      sizeStyles: s
    } = ln(e), {
      textColorClasses: c,
      textColorStyles: d
    } = Ue(U(e, "color")), {
      textColorClasses: v,
      textColorStyles: h
    } = Ue(U(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: b
    } = Cl(), {
      resizeRef: y,
      contentRect: m
    } = ul(), p = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), w = f(() => Number(e.width)), k = f(() => s.value ? Number(e.size) : m.value ? m.value.width : Math.max(w.value, 32)), _ = f(() => a / (1 - w.value / k.value) * 2), E = f(() => w.value / k.value * _.value), V = f(() => M((100 - p.value) / 100 * l));
    return mt(() => {
      g.value = o.value, y.value = o.value;
    }), H(() => u(e.tag, {
      ref: o,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": b.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, i.value, r.value, c.value, e.class],
      style: [s.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : p.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${_.value} ${_.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", v.value],
        style: h.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": E.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": E.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": V.value
      }, null)]), n.default && u("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: p.value
      })])]
    })), {};
  }
}), Ia = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, on = I({
  location: String
}, "location");
function rn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = $e();
  return {
    locationStyles: f(() => {
      if (!e.location) return {};
      const {
        side: o,
        align: i
      } = kn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return n ? n(c) : 0;
      }
      const s = {};
      return o !== "center" && (t ? s[Ia[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[Ia[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[o]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[o]), s;
    })
  };
}
const Ti = I({
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
  ...J(),
  ...on({
    location: "top"
  }),
  ...De(),
  ...Ae(),
  ...ke()
}, "VProgressLinear"), Sl = G()({
  name: "VProgressLinear",
  props: Ti(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var $;
    let {
      slots: n
    } = t;
    const a = ge(e, "modelValue"), {
      isRtl: l,
      rtlClasses: o
    } = $e(), {
      themeClasses: i
    } = Pe(e), {
      locationStyles: r
    } = rn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ue(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: v
    } = Ie(f(() => e.bgColor || e.color)), {
      backgroundColorClasses: h,
      backgroundColorStyles: g
    } = Ie(f(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: b,
      backgroundColorStyles: y
    } = Ie(e, "color"), {
      roundedClasses: m
    } = Ge(e), {
      intersectionRef: p,
      isIntersecting: w
    } = Cl(), k = f(() => parseFloat(e.max)), _ = f(() => parseFloat(e.height)), E = f(() => Be(parseFloat(e.bufferValue) / k.value * 100, 0, 100)), V = f(() => Be(parseFloat(a.value) / k.value * 100, 0, 100)), x = f(() => l.value !== e.reverse), S = f(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), T = me && (($ = window.matchMedia) == null ? void 0 : $.call(window, "(forced-colors: active)").matches);
    function W(C) {
      if (!p.value) return;
      const {
        left: P,
        right: A,
        width: F
      } = p.value.getBoundingClientRect(), N = x.value ? F - C.clientX + (A - F) : C.clientX - P;
      a.value = Math.round(N / F * k.value);
    }
    return H(() => u(e.tag, {
      ref: p,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && w.value,
        "v-progress-linear--reverse": x.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, m.value, i.value, o.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? M(_.value) : 0,
        "--v-progress-linear-height": M(_.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(a.value), k.value),
      onClick: e.clickable && W
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [x.value ? "left" : "right"]: M(-_.value),
          borderTop: `${M(_.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${M(_.value / 4)})`,
          width: M(100 - E.value, "%"),
          "--v-progress-linear-stream-to": M(_.value * (x.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", T ? void 0 : d.value],
        style: [v.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", T ? void 0 : h.value],
        style: [g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: M(E.value, "%")
        }]
      }, null), u(nt, {
        name: S.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((C) => u("div", {
          key: C,
          class: ["v-progress-linear__indeterminate", C, T ? void 0 : b.value],
          style: y.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", T ? void 0 : b.value],
          style: [y.value, {
            width: M(V.value, "%")
          }]
        }, null)]
      }), n.default && u("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: V.value,
        buffer: E.value
      })])]
    })), {};
  }
}), qn = I({
  loading: [Boolean, String]
}, "loader");
function Xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  return {
    loaderClasses: f(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function _l(e, t) {
  var a;
  let {
    slots: n
  } = t;
  return u("div", {
    class: `${e.name}__loader`
  }, [((a = n.default) == null ? void 0 : a.call(n, {
    color: e.color,
    isActive: e.active
  })) || u(Sl, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Oi = ["static", "relative", "fixed", "absolute", "sticky"], Yn = I({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Oi.includes(e)
    )
  }
}, "position");
function Kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  return {
    positionClasses: f(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function Fi() {
  const e = ce("useRoute");
  return f(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function Li() {
  var e, t;
  return (t = (e = ce("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function Vl(e, t) {
  var v, h;
  const n = Tn("RouterLink"), a = f(() => !!(e.href || e.to)), l = f(() => (a == null ? void 0 : a.value) || ua(t, "click") || ua(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const g = U(e, "href");
    return {
      isLink: a,
      isClickable: l,
      href: g,
      linkProps: ct({
        href: g
      })
    };
  }
  const o = f(() => ({
    ...e,
    to: U(() => e.to || "")
  })), i = n.useLink(o.value), r = f(() => e.to ? i : void 0), s = Fi(), c = f(() => {
    var g, b, y;
    return r.value ? e.exact ? s.value ? ((y = r.value.isExactActive) == null ? void 0 : y.value) && Pt(r.value.route.value.query, s.value.query) : ((b = r.value.isExactActive) == null ? void 0 : b.value) ?? !1 : ((g = r.value.isActive) == null ? void 0 : g.value) ?? !1 : !1;
  }), d = f(() => {
    var g;
    return e.to ? (g = r.value) == null ? void 0 : g.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: c,
    route: (v = r.value) == null ? void 0 : v.route,
    navigate: (h = r.value) == null ? void 0 : h.navigate,
    href: d,
    linkProps: ct({
      href: d,
      "aria-current": f(() => c.value ? "page" : void 0)
    })
  };
}
const xl = I({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let vn = !1;
function Mi(e, t) {
  let n = !1, a, l;
  me && (e != null && e.beforeEach) && (Se(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      vn ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), vn = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      vn = !1;
    });
  }), Ve(() => {
    window.removeEventListener("popstate", o), a == null || a(), l == null || l();
  }));
  function o(i) {
    var r;
    (r = i.state) != null && r.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Ri(e, t) {
  q(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && Se(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const wn = Symbol("rippleStop"), zi = 80;
function Ea(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Sn(e) {
  return e.constructor.name === "TouchEvent";
}
function Pl(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ni = function(e, t) {
  var v;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Pl(e)) {
    const h = t.getBoundingClientRect(), g = Sn(e) ? e.touches[e.touches.length - 1] : e;
    a = g.clientX - h.left, l = g.clientY - h.top;
  }
  let o = 0, i = 0.3;
  (v = t._ripple) != null && v.circle ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, c = n.center ? r : `${a - o}px`, d = n.center ? s : `${l - o}px`;
  return {
    radius: o,
    scale: i,
    x: c,
    y: d,
    centerX: r,
    centerY: s
  };
}, Kt = {
  /* eslint-disable max-statements */
  show(e, t) {
    var g;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: o,
      scale: i,
      x: r,
      y: s,
      centerX: c,
      centerY: d
    } = Ni(e, t, n), v = `${o * 2}px`;
    l.className = "v-ripple__animation", l.style.width = v, l.style.height = v, t.appendChild(a);
    const h = window.getComputedStyle(t);
    h && h.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Ea(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Ea(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
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
    const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = n.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function Bl(e) {
  return typeof e > "u" || !!e;
}
function Ct(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[wn])) {
    if (e[wn] = !0, Sn(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Pl(e), n._ripple.class && (t.class = n._ripple.class), Sn(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Kt.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, zi);
    } else
      Kt.show(e, n, t);
  }
}
function $a(e) {
  e[wn] = !0;
}
function be(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        be(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Kt.hide(t);
  }
}
function Il(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let wt = !1;
function El(e) {
  !wt && (e.keyCode === oa.enter || e.keyCode === oa.space) && (wt = !0, Ct(e));
}
function $l(e) {
  wt = !1, be(e);
}
function Al(e) {
  wt && (wt = !1, be(e));
}
function Tl(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, o = Bl(a);
  if (o || Kt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle, po(a) && a.class && (e._ripple.class = a.class), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", $a, {
        passive: !0
      }), e.addEventListener("mousedown", $a);
      return;
    }
    e.addEventListener("touchstart", Ct, {
      passive: !0
    }), e.addEventListener("touchend", be, {
      passive: !0
    }), e.addEventListener("touchmove", Il, {
      passive: !0
    }), e.addEventListener("touchcancel", be), e.addEventListener("mousedown", Ct), e.addEventListener("mouseup", be), e.addEventListener("mouseleave", be), e.addEventListener("keydown", El), e.addEventListener("keyup", $l), e.addEventListener("blur", Al), e.addEventListener("dragstart", be, {
      passive: !0
    });
  } else !o && n && Ol(e);
}
function Ol(e) {
  e.removeEventListener("mousedown", Ct), e.removeEventListener("touchstart", Ct), e.removeEventListener("touchend", be), e.removeEventListener("touchmove", Il), e.removeEventListener("touchcancel", be), e.removeEventListener("mouseup", be), e.removeEventListener("mouseleave", be), e.removeEventListener("keydown", El), e.removeEventListener("keyup", $l), e.removeEventListener("dragstart", be), e.removeEventListener("blur", Al);
}
function Di(e, t) {
  Tl(e, t, !1);
}
function Gi(e) {
  delete e._ripple, Ol(e);
}
function ji(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Bl(t.oldValue);
  Tl(e, t, n);
}
const Ft = {
  mounted: Di,
  unmounted: Gi,
  updated: ji
}, Hi = I({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: kl
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ue,
  appendIcon: ue,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...$t(),
  ...J(),
  ...lt(),
  ...ht(),
  ...Tt(),
  ...bi(),
  ...qn(),
  ...on(),
  ...Yn(),
  ...De(),
  ...xl(),
  ...an(),
  ...Ae({
    tag: "button"
  }),
  ...ke(),
  ...tn({
    variant: "elevated"
  })
}, "VBtn"), Fl = G()({
  name: "VBtn",
  props: Hi(),
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
    } = Pe(e), {
      borderClasses: o
    } = At(e), {
      densityClasses: i
    } = bt(e), {
      dimensionStyles: r
    } = yt(e), {
      elevationClasses: s
    } = Ot(e), {
      loaderClasses: c
    } = Xn(e), {
      locationStyles: d
    } = rn(e), {
      positionClasses: v
    } = Kn(e), {
      roundedClasses: h
    } = Ge(e), {
      sizeClasses: g,
      sizeStyles: b
    } = ln(e), y = pi(e, e.symbol, !1), m = Vl(e, n), p = f(() => {
      var $;
      return e.active !== void 0 ? e.active : m.isLink.value ? ($ = m.isActive) == null ? void 0 : $.value : y == null ? void 0 : y.isSelected.value;
    }), w = f(() => p.value ? e.activeColor ?? e.color : e.color), k = f(() => {
      var C, P;
      return {
        color: (y == null ? void 0 : y.isSelected.value) && (!m.isLink.value || ((C = m.isActive) == null ? void 0 : C.value)) || !y || ((P = m.isActive) == null ? void 0 : P.value) ? w.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: _,
      colorStyles: E,
      variantClasses: V
    } = Un(k), x = f(() => (y == null ? void 0 : y.disabled.value) || e.disabled), S = f(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = f(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function W($) {
      var C;
      x.value || m.isLink.value && ($.metaKey || $.ctrlKey || $.shiftKey || $.button !== 0 || n.target === "_blank") || ((C = m.navigate) == null || C.call(m, $), y == null || y.toggle());
    }
    return Ri(m, y == null ? void 0 : y.select), H(() => {
      const $ = m.isLink.value ? "a" : e.tag, C = !!(e.prependIcon || a.prepend), P = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== !0);
      return _e(u($, Q({
        type: $ === "a" ? void 0 : "button",
        class: ["v-btn", y == null ? void 0 : y.selectedClass.value, {
          "v-btn--active": p.value,
          "v-btn--block": e.block,
          "v-btn--disabled": x.value,
          "v-btn--elevated": S.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, o.value, _.value, i.value, s.value, c.value, v.value, h.value, g.value, V.value, e.class],
        style: [E.value, r.value, d.value, b.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: x.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: W,
        value: T.value
      }, m.linkProps), {
        default: () => {
          var F;
          return [Wn(!0, "v-btn"), !e.icon && C && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? u(Fe, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : u(pe, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && A ? u(pe, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(Fe, {
            key: "content-defaults",
            disabled: !A,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var N;
              return [((N = a.default) == null ? void 0 : N.call(a)) ?? e.text];
            }
          })]), !e.icon && P && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? u(Fe, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : u(pe, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((F = a.loader) == null ? void 0 : F.call(a)) ?? u(wl, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Ft, !x.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: y
    };
  }
}), Wi = I({
  start: Boolean,
  end: Boolean,
  icon: ue,
  image: String,
  text: String,
  ...$t(),
  ...J(),
  ...lt(),
  ...De(),
  ...an(),
  ...Ae(),
  ...ke(),
  ...tn({
    variant: "flat"
  })
}, "VAvatar"), Aa = G()({
  name: "VAvatar",
  props: Wi(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Pe(e), {
      borderClasses: l
    } = At(e), {
      colorClasses: o,
      colorStyles: i,
      variantClasses: r
    } = Un(e), {
      densityClasses: s
    } = bt(e), {
      roundedClasses: c
    } = Ge(e), {
      sizeClasses: d,
      sizeStyles: v
    } = ln(e);
    return H(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, o.value, s.value, c.value, d.value, r.value, e.class],
      style: [i.value, v.value, e.style]
    }, {
      default: () => [n.default ? u(Fe, {
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
      }) : e.image ? u(yl, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(pe, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Wn(!1, "v-avatar")]
    })), {};
  }
}), Ui = I({
  text: String,
  onClick: Je(),
  ...J(),
  ...ke()
}, "VLabel"), Zn = G()({
  name: "VLabel",
  props: Ui(),
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
}), Ll = Symbol.for("vuetify:selection-control-group"), Ml = I({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ue,
  trueIcon: ue,
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
    default: Pt
  },
  ...J(),
  ...lt(),
  ...ke()
}, "SelectionControlGroup"), qi = I({
  ...Ml({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
G()({
  name: "VSelectionControlGroup",
  props: qi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ge(e, "modelValue"), l = ze(), o = f(() => e.id || `v-selection-control-group-${l}`), i = f(() => e.name || o.value), r = /* @__PURE__ */ new Set();
    return Re(Ll, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), Ve(() => {
          r.delete(s);
        });
      }
    }), Et({
      [e.defaultsTarget]: {
        color: U(e, "color"),
        disabled: U(e, "disabled"),
        density: U(e, "density"),
        error: U(e, "error"),
        inline: U(e, "inline"),
        modelValue: a,
        multiple: f(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: i,
        falseIcon: U(e, "falseIcon"),
        trueIcon: U(e, "trueIcon"),
        readonly: U(e, "readonly"),
        ripple: U(e, "ripple"),
        type: U(e, "type"),
        valueComparator: U(e, "valueComparator")
      }
    }), H(() => {
      var s;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {};
  }
});
const Jn = I({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...J(),
  ...Ml()
}, "VSelectionControl");
function Xi(e) {
  const t = he(Ll, void 0), {
    densityClasses: n
  } = bt(e), a = ge(e, "modelValue"), l = f(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), o = f(() => e.falseValue !== void 0 ? e.falseValue : !1), i = f(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = f({
    get() {
      const g = t ? t.modelValue.value : a.value;
      return i.value ? We(g).some((b) => e.valueComparator(b, l.value)) : e.valueComparator(g, l.value);
    },
    set(g) {
      if (e.readonly) return;
      const b = g ? l.value : o.value;
      let y = b;
      i.value && (y = g ? [...We(a.value), b] : We(a.value).filter((m) => !e.valueComparator(m, l.value))), t ? t.modelValue.value = y : a.value = y;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = Ue(f(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: v
  } = Ie(f(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), h = f(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: o,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: v,
    icon: h
  };
}
const Zt = G()({
  name: "VSelectionControl",
  directives: {
    Ripple: Ft
  },
  inheritAttrs: !1,
  props: Jn(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: l,
      densityClasses: o,
      icon: i,
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: v,
      trueValue: h
    } = Xi(e), g = ze(), b = ae(!1), y = ae(!1), m = j(), p = f(() => e.id || `input-${g}`), w = f(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      m.value && (m.value.checked = r.value);
    });
    function k(x) {
      w.value && (b.value = !0, Qa(x.target, ":focus-visible") !== !1 && (y.value = !0));
    }
    function _() {
      b.value = !1, y.value = !1;
    }
    function E(x) {
      x.stopPropagation();
    }
    function V(x) {
      if (!w.value) {
        m.value && (m.value.checked = r.value);
        return;
      }
      e.readonly && l && Se(() => l.forceUpdate()), r.value = x.target.checked;
    }
    return H(() => {
      var $, C;
      const x = a.label ? a.label({
        label: e.label,
        props: {
          for: p.value
        }
      }) : e.label, [S, T] = Rn(n), W = u("input", Q({
        ref: m,
        checked: r.value,
        disabled: !!e.disabled,
        id: p.value,
        onBlur: _,
        onFocus: k,
        onInput: V,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: h.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, T), null);
      return u("div", Q({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": b.value,
          "v-selection-control--focus-visible": y.value,
          "v-selection-control--inline": e.inline
        }, o.value, e.class]
      }, S, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: c.value
      }, [($ = a.default) == null ? void 0 : $.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: v
      }), _e(u("div", {
        class: ["v-selection-control__input"]
      }, [((C = a.input) == null ? void 0 : C.call(a, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: v,
        inputNode: W,
        icon: i.value,
        props: {
          onFocus: k,
          onBlur: _,
          id: p.value
        }
      })) ?? u(de, null, [i.value && u(pe, {
        key: "icon",
        icon: i.value
      }, null), W])]), [[gt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), x && u(Zn, {
        for: p.value,
        onClick: E
      }, {
        default: () => [x]
      })]);
    }), {
      isFocused: b,
      input: m
    };
  }
}), Rl = I({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ue,
    default: "$checkboxIndeterminate"
  },
  ...Jn({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Ta = G()({
  name: "VCheckboxBtn",
  props: Rl(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ge(e, "indeterminate"), l = ge(e, "modelValue");
    function o(s) {
      a.value && (a.value = !1);
    }
    const i = f(() => a.value ? e.indeterminateIcon : e.falseIcon), r = f(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return H(() => {
      const s = Bt(Zt.filterProps(e), ["modelValue"]);
      return u(Zt, Q(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, o],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: i.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function zl(e) {
  const {
    t
  } = oi();
  function n(a) {
    let {
      name: l
    } = a;
    const o = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], i = e[`onClick:${l}`];
    function r(c) {
      c.key !== "Enter" && c.key !== " " || (c.preventDefault(), c.stopPropagation(), Za(i, new PointerEvent("click", c)));
    }
    const s = i && o ? t(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return u(pe, {
      icon: e[`${l}Icon`],
      "aria-label": s,
      onClick: i,
      onKeydown: r
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Yi = I({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...J(),
  ...en({
    transition: {
      component: vl,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Ki = G()({
  name: "VMessages",
  props: Yi(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => We(e.messages)), {
      textColorClasses: l,
      textColorStyles: o
    } = Ue(f(() => e.color));
    return H(() => u(Ke, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [o.value, e.style]
    }, {
      default: () => [e.active && a.value.map((i, r) => u("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [n.message ? n.message({
        message: i
      }) : i]))]
    })), {};
  }
}), Qn = I({
  focused: Boolean,
  "onUpdate:focused": Je()
}, "focus");
function sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  const n = ge(e, "focused"), a = f(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function o() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: o
  };
}
const Zi = Symbol.for("vuetify:form");
function Ji(e) {
  const t = he(Zi, null);
  return {
    ...t,
    isReadonly: f(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: f(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const Qi = I({
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
  ...Qn()
}, "validation");
function er(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ze();
  const a = ge(e, "modelValue"), l = f(() => e.validationValue === void 0 ? a.value : e.validationValue), o = Ji(e), i = j([]), r = ae(!0), s = f(() => !!(We(a.value === "" ? null : a.value).length || We(l.value === "" ? null : l.value).length)), c = f(() => {
    var k;
    return (k = e.errorMessages) != null && k.length ? We(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors)) : i.value;
  }), d = f(() => {
    var E;
    let k = (e.validateOn ?? ((E = o.validateOn) == null ? void 0 : E.value)) || "input";
    k === "lazy" && (k = "input lazy"), k === "eager" && (k = "input eager");
    const _ = new Set((k == null ? void 0 : k.split(" ")) ?? []);
    return {
      input: _.has("input"),
      blur: _.has("blur") || _.has("input") || _.has("invalid-input"),
      invalidInput: _.has("invalid-input"),
      lazy: _.has("lazy"),
      eager: _.has("eager")
    };
  }), v = f(() => {
    var k;
    return e.error || (k = e.errorMessages) != null && k.length ? !1 : e.rules.length ? r.value ? i.value.length || d.value.lazy ? null : !0 : !i.value.length : !0;
  }), h = ae(!1), g = f(() => ({
    [`${t}--error`]: v.value === !1,
    [`${t}--dirty`]: s.value,
    [`${t}--disabled`]: o.isDisabled.value,
    [`${t}--readonly`]: o.isReadonly.value
  })), b = ce("validation"), y = f(() => e.name ?? re(n));
  An(() => {
    var k;
    (k = o.register) == null || k.call(o, {
      id: y.value,
      vm: b,
      validate: w,
      reset: m,
      resetValidation: p
    });
  }), qe(() => {
    var k;
    (k = o.unregister) == null || k.call(o, y.value);
  }), Xe(async () => {
    var k;
    d.value.lazy || await w(!d.value.eager), (k = o.update) == null || k.call(o, y.value, v.value, c.value);
  }), ft(() => d.value.input || d.value.invalidInput && v.value === !1, () => {
    q(l, () => {
      if (l.value != null)
        w();
      else if (e.focused) {
        const k = q(() => e.focused, (_) => {
          _ || w(), k();
        });
      }
    });
  }), ft(() => d.value.blur, () => {
    q(() => e.focused, (k) => {
      k || w();
    });
  }), q([v, c], () => {
    var k;
    (k = o.update) == null || k.call(o, y.value, v.value, c.value);
  });
  async function m() {
    a.value = null, await Se(), await p();
  }
  async function p() {
    r.value = !0, d.value.lazy ? i.value = [] : await w(!d.value.eager);
  }
  async function w() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const _ = [];
    h.value = !0;
    for (const E of e.rules) {
      if (_.length >= +(e.maxErrors ?? 1))
        break;
      const x = await (typeof E == "function" ? E : () => E)(l.value);
      if (x !== !0) {
        if (x !== !1 && typeof x != "string") {
          console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        _.push(x || "");
      }
    }
    return i.value = _, h.value = !1, r.value = k, i.value;
  }
  return {
    errorMessages: c,
    isDirty: s,
    isDisabled: o.isDisabled,
    isReadonly: o.isReadonly,
    isPristine: r,
    isValid: v,
    isValidating: h,
    reset: m,
    resetValidation: p,
    validate: w,
    validationClasses: g
  };
}
const un = I({
  id: String,
  appendIcon: ue,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: ue,
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
  "onClick:prepend": Je(),
  "onClick:append": Je(),
  ...J(),
  ...lt(),
  ...Ln(ht(), ["maxWidth", "minWidth", "width"]),
  ...ke(),
  ...Qi()
}, "VInput"), vt = G()({
  name: "VInput",
  props: {
    ...un()
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
      densityClasses: o
    } = bt(e), {
      dimensionStyles: i
    } = yt(e), {
      themeClasses: r
    } = Pe(e), {
      rtlClasses: s
    } = $e(), {
      InputIcon: c
    } = zl(e), d = ze(), v = f(() => e.id || `input-${d}`), h = f(() => `${v.value}-messages`), {
      errorMessages: g,
      isDirty: b,
      isDisabled: y,
      isReadonly: m,
      isPristine: p,
      isValid: w,
      isValidating: k,
      reset: _,
      resetValidation: E,
      validate: V,
      validationClasses: x
    } = er(e, "v-input", v), S = f(() => ({
      id: v,
      messagesId: h,
      isDirty: b,
      isDisabled: y,
      isReadonly: m,
      isPristine: p,
      isValid: w,
      isValidating: k,
      reset: _,
      resetValidation: E,
      validate: V
    })), T = f(() => {
      var W;
      return (W = e.errorMessages) != null && W.length || !p.value && g.value.length ? g.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return H(() => {
      var A, F, N, ne;
      const W = !!(a.prepend || e.prependIcon), $ = !!(a.append || e.appendIcon), C = T.value.length > 0, P = !e.hideDetails || e.hideDetails === "auto" && (C || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, o.value, r.value, s.value, x.value, e.class],
        style: [i.value, e.style]
      }, [W && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(A = a.prepend) == null ? void 0 : A.call(a, S.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(F = a.default) == null ? void 0 : F.call(a, S.value)]), $ && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (N = a.append) == null ? void 0 : N.call(a, S.value)]), P && u("div", {
        id: h.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [u(Ki, {
        active: C,
        messages: T.value
      }, {
        message: a.message
      }), (ne = a.details) == null ? void 0 : ne.call(a, S.value)])]);
    }), {
      reset: _,
      resetValidation: E,
      validate: V,
      isValid: w,
      errorMessages: g
    };
  }
}), tr = I({
  ...un(),
  ...Bt(Rl(), ["inline"])
}, "VCheckbox"), nr = G()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: tr(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = ge(e, "modelValue"), {
      isFocused: o,
      focus: i,
      blur: r
    } = sn(e), s = ze(), c = f(() => e.id || `checkbox-${s}`);
    return H(() => {
      const [d, v] = Rn(n), h = vt.filterProps(e), g = Ta.filterProps(e);
      return u(vt, Q({
        class: ["v-checkbox", e.class]
      }, d, h, {
        modelValue: l.value,
        "onUpdate:modelValue": (b) => l.value = b,
        id: c.value,
        focused: o.value,
        style: e.style
      }), {
        ...a,
        default: (b) => {
          let {
            id: y,
            messagesId: m,
            isDisabled: p,
            isReadonly: w,
            isValid: k
          } = b;
          return u(Ta, Q(g, {
            id: y.value,
            "aria-describedby": m.value,
            disabled: p.value,
            readonly: w.value
          }, v, {
            error: k.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (_) => l.value = _,
            onFocus: i,
            onBlur: r
          }), a);
        }
      });
    }), {};
  }
}), ar = Symbol.for("vuetify:display");
function lr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
  const n = he(ar);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = f(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), l = f(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: a
  };
}
function mn(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function or(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Oa(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return mn({
      x: l,
      y: o
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return mn({
      x: l,
      y: o
    }, t);
  }
  return mn({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Nl = {
  static: sr,
  // specific viewport position, usually centered
  connected: cr
  // connected to a certain element
}, ir = I({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Nl
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
function rr(e, t) {
  const n = j({}), a = j();
  me && ft(() => !!(t.isActive.value && e.locationStrategy), (o) => {
    var i, r;
    q(() => e.locationStrategy, o), Ve(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (i = e.locationStrategy(t, e, n)) == null ? void 0 : i.updateLocation : a.value = (r = Nl[e.locationStrategy](t, e, n)) == null ? void 0 : r.updateLocation;
  });
  function l(o) {
    var i;
    (i = a.value) == null || i.call(a, o);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function sr() {
}
function ur(e, t) {
  const n = Nn(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function cr(e, t, n) {
  (Array.isArray(e.target.value) || li(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: o
  } = zn(() => {
    const b = kn(t.location, e.isRtl.value), y = t.origin === "overlap" ? b : t.origin === "auto" ? dn(b) : kn(t.origin, e.isRtl.value);
    return b.side === y.side && b.align === fn(y).align ? {
      preferredAnchor: da(b),
      preferredOrigin: da(y)
    } : {
      preferredAnchor: b,
      preferredOrigin: y
    };
  }), [i, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((b) => f(() => {
    const y = parseFloat(t[b]);
    return isNaN(y) ? 1 / 0 : y;
  })), d = f(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const b = t.offset.split(" ").map(parseFloat);
      return b.length < 2 && b.push(0), b;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let v = !1;
  const h = new ResizeObserver(() => {
    v && g();
  });
  q([e.target, e.contentEl], (b, y) => {
    let [m, p] = b, [w, k] = y;
    w && !Array.isArray(w) && h.unobserve(w), m && !Array.isArray(m) && h.observe(m), k && h.unobserve(k), p && h.observe(p);
  }, {
    immediate: !0
  }), Ve(() => {
    h.disconnect();
  });
  function g() {
    if (v = !1, requestAnimationFrame(() => v = !0), !e.target.value || !e.contentEl.value) return;
    const b = tl(e.target.value), y = ur(e.contentEl.value, e.isRtl.value), m = Yt(e.contentEl.value), p = 12;
    m.length || (m.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = m.reduce(($, C) => {
      const P = C.getBoundingClientRect(), A = new Qe({
        x: C === document.documentElement ? 0 : P.x,
        y: C === document.documentElement ? 0 : P.y,
        width: C.clientWidth,
        height: C.clientHeight
      });
      return $ ? new Qe({
        x: Math.max($.left, A.left),
        y: Math.max($.top, A.top),
        width: Math.min($.right, A.right) - Math.max($.left, A.left),
        height: Math.min($.bottom, A.bottom) - Math.max($.top, A.top)
      }) : A;
    }, void 0);
    w.x += p, w.y += p, w.width -= p * 2, w.height -= p * 2;
    let k = {
      anchor: l.value,
      origin: o.value
    };
    function _($) {
      const C = new Qe(y), P = Oa($.anchor, b), A = Oa($.origin, C);
      let {
        x: F,
        y: N
      } = or(P, A);
      switch ($.anchor.side) {
        case "top":
          N -= d.value[0];
          break;
        case "bottom":
          N += d.value[0];
          break;
        case "left":
          F -= d.value[0];
          break;
        case "right":
          F += d.value[0];
          break;
      }
      switch ($.anchor.align) {
        case "top":
          N -= d.value[1];
          break;
        case "bottom":
          N += d.value[1];
          break;
        case "left":
          F -= d.value[1];
          break;
        case "right":
          F += d.value[1];
          break;
      }
      return C.x += F, C.y += N, C.width = Math.min(C.width, s.value), C.height = Math.min(C.height, c.value), {
        overflows: va(C, w),
        x: F,
        y: N
      };
    }
    let E = 0, V = 0;
    const x = {
      x: 0,
      y: 0
    }, S = {
      x: !1,
      y: !1
    };
    let T = -1;
    for (; ; ) {
      if (T++ > 10) {
        zo("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: $,
        y: C,
        overflows: P
      } = _(k);
      E += $, V += C, y.x += $, y.y += C;
      {
        const A = fa(k.anchor), F = P.x.before || P.x.after, N = P.y.before || P.y.after;
        let ne = !1;
        if (["x", "y"].forEach((Y) => {
          if (Y === "x" && F && !S.x || Y === "y" && N && !S.y) {
            const ie = {
              anchor: {
                ...k.anchor
              },
              origin: {
                ...k.origin
              }
            }, Z = Y === "x" ? A === "y" ? fn : dn : A === "y" ? dn : fn;
            ie.anchor = Z(ie.anchor), ie.origin = Z(ie.origin);
            const {
              overflows: X
            } = _(ie);
            (X[Y].before <= P[Y].before && X[Y].after <= P[Y].after || X[Y].before + X[Y].after < (P[Y].before + P[Y].after) / 2) && (k = ie, ne = S[Y] = !0);
          }
        }), ne) continue;
      }
      P.x.before && (E += P.x.before, y.x += P.x.before), P.x.after && (E -= P.x.after, y.x -= P.x.after), P.y.before && (V += P.y.before, y.y += P.y.before), P.y.after && (V -= P.y.after, y.y -= P.y.after);
      {
        const A = va(y, w);
        x.x = w.width - A.x.before - A.x.after, x.y = w.height - A.y.before - A.y.after, E += A.x.before, y.x += A.x.before, V += A.y.before, y.y += A.y.before;
      }
      break;
    }
    const W = fa(k.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`,
      transformOrigin: `${k.origin.side} ${k.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: M(gn(V)),
      left: e.isRtl.value ? void 0 : M(gn(E)),
      right: e.isRtl.value ? M(gn(-E)) : void 0,
      minWidth: M(W === "y" ? Math.min(i.value, b.width) : i.value),
      maxWidth: M(Fa(Be(x.x, i.value === 1 / 0 ? 0 : i.value, s.value))),
      maxHeight: M(Fa(Be(x.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: x,
      contentBox: y
    };
  }
  return q(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => g()), Se(() => {
    const b = g();
    if (!b) return;
    const {
      available: y,
      contentBox: m
    } = b;
    m.height > y.y && requestAnimationFrame(() => {
      g(), requestAnimationFrame(() => {
        g();
      });
    });
  }), {
    updateLocation: g
  };
}
function gn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Fa(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let _n = !0;
const Jt = [];
function dr(e) {
  !_n || Jt.length ? (Jt.push(e), Vn()) : (_n = !1, e(), Vn());
}
let La = -1;
function Vn() {
  cancelAnimationFrame(La), La = requestAnimationFrame(() => {
    const e = Jt.shift();
    e && e(), Jt.length ? Vn() : _n = !0;
  });
}
const Wt = {
  none: null,
  close: mr,
  block: gr,
  reposition: hr
}, fr = I({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Wt
  }
}, "VOverlay-scroll-strategies");
function vr(e, t) {
  if (!me) return;
  let n;
  mt(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = En(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Wt[e.scrollStrategy]) == null || a.call(Wt, t, e, n);
    }));
  }), Ve(() => {
    n == null || n.stop();
  });
}
function mr(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Dl(e.targetEl.value ?? e.contentEl.value, t);
}
function gr(e, t) {
  var i;
  const n = (i = e.root.value) == null ? void 0 : i.offsetParent, a = [.../* @__PURE__ */ new Set([...Yt(e.targetEl.value, t.contained ? n : void 0), ...Yt(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, o = ((r) => jn(r) && r)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", M(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", M(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", M(l)), r.classList.add("v-overlay-scroll-blocked");
  }), Ve(() => {
    a.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), v = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = v;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function hr(e, t, n) {
  let a = !1, l = -1, o = -1;
  function i(r) {
    dr(() => {
      var d, v;
      const s = performance.now();
      (v = (d = e.updateLocation).value) == null || v.call(d, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Dl(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), Ve(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(l);
  });
}
function Dl(e, t) {
  const n = [document, ...Yt(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), Ve(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const xn = Symbol.for("vuetify:v-menu"), yr = I({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function br(e, t) {
  let n = () => {
  };
  function a(i) {
    n == null || n();
    const r = Number(i ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      n = Vo(r, () => {
        t == null || t(i), s(i);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function o() {
    return a(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: o
  };
}
const pr = I({
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
  ...yr()
}, "VOverlay-activator");
function kr(e, t) {
  let {
    isActive: n,
    isTop: a,
    contentEl: l
  } = t;
  const o = ce("useActivator"), i = j();
  let r = !1, s = !1, c = !0;
  const d = f(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = f(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !d.value), {
    runOpenDelay: h,
    runCloseDelay: g
  } = br(e, (S) => {
    S === (e.openOnHover && r || d.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== S && (c = !0), n.value = S);
  }), b = j(), y = {
    onClick: (S) => {
      S.stopPropagation(), i.value = S.currentTarget || S.target, n.value || (b.value = [S.clientX, S.clientY]), n.value = !n.value;
    },
    onMouseenter: (S) => {
      var T;
      (T = S.sourceCapabilities) != null && T.firesTouchEvents || (r = !0, i.value = S.currentTarget || S.target, h());
    },
    onMouseleave: (S) => {
      r = !1, g();
    },
    onFocus: (S) => {
      Qa(S.target, ":focus-visible") !== !1 && (s = !0, S.stopPropagation(), i.value = S.currentTarget || S.target, h());
    },
    onBlur: (S) => {
      s = !1, S.stopPropagation(), g();
    }
  }, m = f(() => {
    const S = {};
    return v.value && (S.onClick = y.onClick), e.openOnHover && (S.onMouseenter = y.onMouseenter, S.onMouseleave = y.onMouseleave), d.value && (S.onFocus = y.onFocus, S.onBlur = y.onBlur), S;
  }), p = f(() => {
    const S = {};
    if (e.openOnHover && (S.onMouseenter = () => {
      r = !0, h();
    }, S.onMouseleave = () => {
      r = !1, g();
    }), d.value && (S.onFocusin = () => {
      s = !0, h();
    }, S.onFocusout = () => {
      s = !1, g();
    }), e.closeOnContentClick) {
      const T = he(xn, null);
      S.onClick = () => {
        n.value = !1, T == null || T.closeParents();
      };
    }
    return S;
  }), w = f(() => {
    const S = {};
    return e.openOnHover && (S.onMouseenter = () => {
      c && (r = !0, c = !1, h());
    }, S.onMouseleave = () => {
      r = !1, g();
    }), S;
  });
  q(a, (S) => {
    var T;
    S && (e.openOnHover && !r && (!d.value || !s) || d.value && !s && (!e.openOnHover || !r)) && !((T = l.value) != null && T.contains(document.activeElement)) && (n.value = !1);
  }), q(n, (S) => {
    S || setTimeout(() => {
      b.value = void 0;
    });
  }, {
    flush: "post"
  });
  const k = pn();
  mt(() => {
    k.value && Se(() => {
      i.value = k.el;
    });
  });
  const _ = pn(), E = f(() => e.target === "cursor" && b.value ? b.value : _.value ? _.el : Gl(e.target, o) || i.value), V = f(() => Array.isArray(E.value) ? void 0 : E.value);
  let x;
  return q(() => !!e.activator, (S) => {
    S && me ? (x = En(), x.run(() => {
      Cr(e, o, {
        activatorEl: i,
        activatorEvents: m
      });
    })) : x && x.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Ve(() => {
    x == null || x.stop();
  }), {
    activatorEl: i,
    activatorRef: k,
    target: E,
    targetEl: V,
    targetRef: _,
    activatorEvents: m,
    contentEvents: p,
    scrimEvents: w
  };
}
function Cr(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  q(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const d = r(c);
      d && i(d);
    }
    s && Se(() => o());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    o();
  }), Ve(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Bo(s, Q(l.value, c));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Io(s, Q(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Gl(s, t);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function Gl(e, t) {
  var a, l;
  if (!e) return;
  let n;
  if (e === "parent") {
    let o = (l = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; o != null && o.hasAttribute("data-no-activator"); )
      o = o.parentNode;
    n = o;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function wr() {
  if (!me) return ae(!1);
  const {
    ssr: e
  } = lr();
  if (e) {
    const t = ae(!1);
    return Xe(() => {
      t.value = !0;
    }), t;
  } else
    return ae(!0);
}
const Sr = I({
  eager: Boolean
}, "lazy");
function _r(e, t) {
  const n = ae(!1), a = f(() => n.value || e.eager || t.value);
  q(t, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: l
  };
}
function jl() {
  const t = ce("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Ma = Symbol.for("vuetify:stack"), pt = ct([]);
function Vr(e, t, n) {
  const a = ce("useStack"), l = !n, o = he(Ma, void 0), i = ct({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Re(Ma, i);
  const r = ae(+t.value);
  ft(e, () => {
    var v;
    const d = (v = pt.at(-1)) == null ? void 0 : v[1];
    r.value = d ? d + 10 : +t.value, l && pt.push([a.uid, r.value]), o == null || o.activeChildren.add(a.uid), Ve(() => {
      if (l) {
        const h = qa(pt).findIndex((g) => g[0] === a.uid);
        pt.splice(h, 1);
      }
      o == null || o.activeChildren.delete(a.uid);
    });
  });
  const s = ae(!0);
  l && mt(() => {
    var v;
    const d = ((v = pt.at(-1)) == null ? void 0 : v[0]) === a.uid;
    setTimeout(() => s.value = d);
  });
  const c = f(() => !i.activeChildren.size);
  return {
    globalTop: Ua(s),
    localTop: c,
    stackStyles: f(() => ({
      zIndex: r.value
    }))
  };
}
function xr(e) {
  return {
    teleportTarget: f(() => {
      const n = e();
      if (n === !0 || !me) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        In(`Unable to locate target ${n}`);
        return;
      }
      let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Pr() {
  return !0;
}
function Hl(e, t, n) {
  if (!e || Wl(e, n) === !1) return !1;
  const a = sl(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function Wl(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Pr)(e);
}
function Br(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Hl(e, t, n) && setTimeout(() => {
    Wl(e, n) && a && a(e);
  }, 0);
}
function Ra(e, t) {
  const n = sl(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Ir = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => Br(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = Hl(l, e, t);
    };
    Ra(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Ra(e, (n) => {
      var o;
      if (!n || !((o = e._clickOutside) != null && o[t.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function Er(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return u(nt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", Q({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Ul = I({
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
  ...pr(),
  ...J(),
  ...ht(),
  ...Sr(),
  ...ir(),
  ...fr(),
  ...ke(),
  ...en()
}, "VOverlay"), za = G()({
  name: "VOverlay",
  directives: {
    ClickOutside: Ir
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Ul()
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
    const o = ce("VOverlay"), i = j(), r = j(), s = j(), c = ge(e, "modelValue"), d = f({
      get: () => c.value,
      set: (B) => {
        B && e.disabled || (c.value = B);
      }
    }), {
      themeClasses: v
    } = Pe(e), {
      rtlClasses: h,
      isRtl: g
    } = $e(), {
      hasContent: b,
      onAfterLeave: y
    } = _r(e, d), m = Ie(f(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: p,
      localTop: w,
      stackStyles: k
    } = Vr(d, U(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: _,
      activatorRef: E,
      target: V,
      targetEl: x,
      targetRef: S,
      activatorEvents: T,
      contentEvents: W,
      scrimEvents: $
    } = kr(e, {
      isActive: d,
      isTop: w,
      contentEl: s
    }), {
      teleportTarget: C
    } = xr(() => {
      var ye, Lt, Mt;
      const B = e.attach || e.contained;
      if (B) return B;
      const R = ((ye = _ == null ? void 0 : _.value) == null ? void 0 : ye.getRootNode()) || ((Mt = (Lt = o.proxy) == null ? void 0 : Lt.$el) == null ? void 0 : Mt.getRootNode());
      return R instanceof ShadowRoot ? R : !1;
    }), {
      dimensionStyles: P
    } = yt(e), A = wr(), {
      scopeId: F
    } = jl();
    q(() => e.disabled, (B) => {
      B && (d.value = !1);
    });
    const {
      contentStyles: N,
      updateLocation: ne
    } = rr(e, {
      isRtl: g,
      contentEl: s,
      target: V,
      isActive: d
    });
    vr(e, {
      root: i,
      contentEl: s,
      targetEl: x,
      isActive: d,
      updateLocation: ne
    });
    function Y(B) {
      l("click:outside", B), e.persistent ? we() : d.value = !1;
    }
    function ie(B) {
      return d.value && p.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || B.target === r.value || B instanceof MouseEvent && B.shadowTarget === r.value);
    }
    me && q(d, (B) => {
      B ? window.addEventListener("keydown", Z) : window.removeEventListener("keydown", Z);
    }, {
      immediate: !0
    }), qe(() => {
      me && window.removeEventListener("keydown", Z);
    });
    function Z(B) {
      var R, ye;
      B.key === "Escape" && p.value && (e.persistent ? we() : (d.value = !1, (R = s.value) != null && R.contains(document.activeElement) && ((ye = _.value) == null || ye.focus())));
    }
    const X = Li();
    ft(() => e.closeOnBack, () => {
      Mi(X, (B) => {
        p.value && d.value ? (B(!1), e.persistent ? we() : d.value = !1) : B();
      });
    });
    const se = j();
    q(() => d.value && (e.absolute || e.contained) && C.value == null, (B) => {
      if (B) {
        const R = ni(i.value);
        R && R !== document.scrollingElement && (se.value = R.scrollTop);
      }
    });
    function we() {
      e.noClickAnimation || s.value && rt(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Xt
      });
    }
    function Te() {
      l("afterEnter");
    }
    function je() {
      y(), l("afterLeave");
    }
    return H(() => {
      var B;
      return u(de, null, [(B = n.activator) == null ? void 0 : B.call(n, {
        isActive: d.value,
        targetRef: S,
        props: Q({
          ref: E
        }, T.value, e.activatorProps)
      }), A.value && b.value && u(fo, {
        disabled: !C.value,
        to: C.value
      }, {
        default: () => [u("div", Q({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": d.value,
            "v-overlay--contained": e.contained
          }, v.value, h.value, e.class],
          style: [k.value, {
            "--v-overlay-opacity": e.opacity,
            top: M(se.value)
          }, e.style],
          ref: i
        }, F, a), [u(Er, Q({
          color: m,
          modelValue: d.value && !!e.scrim,
          ref: r
        }, $.value), null), u(Ke, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: V.value,
          onAfterEnter: Te,
          onAfterLeave: je
        }, {
          default: () => {
            var R;
            return [_e(u("div", Q({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [P.value, N.value]
            }, W.value, e.contentProps), [(R = n.default) == null ? void 0 : R.call(n, {
              isActive: d
            })]), [[Vt, d.value], [gt("click-outside"), {
              handler: Y,
              closeConditional: ie,
              include: () => [_.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: _,
      scrimEl: r,
      target: V,
      animateClick: we,
      contentEl: s,
      globalTop: p,
      localTop: w,
      updateLocation: ne
    };
  }
}), hn = Symbol("Forwarded refs");
function yn(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function ql(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[hn] = n, new Proxy(e, {
    get(l, o) {
      if (Reflect.has(l, o))
        return Reflect.get(l, o);
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const i of n)
          if (i.value && Reflect.has(i.value, o)) {
            const r = Reflect.get(i.value, o);
            return typeof r == "function" ? r.bind(i.value) : r;
          }
      }
    },
    has(l, o) {
      if (Reflect.has(l, o))
        return !0;
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const i of n)
        if (i.value && Reflect.has(i.value, o))
          return !0;
      return !1;
    },
    set(l, o, i) {
      if (Reflect.has(l, o))
        return Reflect.set(l, o, i);
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, o))
          return Reflect.set(r.value, o, i);
      return !1;
    },
    getOwnPropertyDescriptor(l, o) {
      var r;
      const i = Reflect.getOwnPropertyDescriptor(l, o);
      if (i) return i;
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const s of n) {
          if (!s.value) continue;
          const c = yn(s.value, o) ?? ("_" in s.value ? yn((r = s.value._) == null ? void 0 : r.setupState, o) : void 0);
          if (c) return c;
        }
        for (const s of n) {
          const c = s.value && s.value[hn];
          if (!c) continue;
          const d = c.slice();
          for (; d.length; ) {
            const v = d.shift(), h = yn(v.value, o);
            if (h) return h;
            const g = v.value && v.value[hn];
            g && d.push(...g);
          }
        }
      }
    }
  });
}
const $r = I({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Bt(Ul({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: si
    }
  }), ["absolute"])
}, "VMenu"), Ar = G()({
  name: "VMenu",
  props: $r(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ge(e, "modelValue"), {
      scopeId: l
    } = jl(), {
      isRtl: o
    } = $e(), i = ze(), r = f(() => e.id || `v-menu-${i}`), s = j(), c = he(xn, null), d = ae(/* @__PURE__ */ new Set());
    Re(xn, {
      register() {
        d.value.add(i);
      },
      unregister() {
        d.value.delete(i);
      },
      closeParents(m) {
        setTimeout(() => {
          var p;
          !d.value.size && !e.persistent && (m == null || (p = s.value) != null && p.contentEl && !xo(m, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), qe(() => {
      c == null || c.unregister(), document.removeEventListener("focusin", v);
    }), vo(() => a.value = !1);
    async function v(m) {
      var k, _, E;
      const p = m.relatedTarget, w = m.target;
      await Se(), a.value && p !== w && ((k = s.value) != null && k.contentEl) && // We're the topmost menu
      ((_ = s.value) != null && _.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(w) && // It isn't inside the menu body
      !s.value.contentEl.contains(w) && ((E = bn(s.value.contentEl)[0]) == null || E.focus());
    }
    q(a, (m) => {
      m ? (c == null || c.register(), me && document.addEventListener("focusin", v, {
        once: !0
      })) : (c == null || c.unregister(), me && document.removeEventListener("focusin", v));
    }, {
      immediate: !0
    });
    function h(m) {
      c == null || c.closeParents(m);
    }
    function g(m) {
      var p, w, k, _, E;
      if (!e.disabled)
        if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
          if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
          m.key === "Enter" && m.preventDefault(), Ja(bn((p = s.value) == null ? void 0 : p.contentEl, !1), m.shiftKey ? "prev" : "next", (x) => x.tabIndex >= 0) || (a.value = !1, (k = (w = s.value) == null ? void 0 : w.activatorEl) == null || k.focus());
        } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (E = (_ = s.value) == null ? void 0 : _.activatorEl) == null || E.focus());
    }
    function b(m) {
      var w;
      if (e.disabled) return;
      const p = (w = s.value) == null ? void 0 : w.contentEl;
      p && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Gt(p, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Gt(p, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Gt(p, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => b(m))));
    }
    const y = f(() => Q({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": r.value,
      onKeydown: b
    }, e.activatorProps));
    return H(() => {
      const m = za.filterProps(e);
      return u(za, Q({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (p) => a.value = p,
        absolute: !0,
        activatorProps: y.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": h,
        onKeydown: g
      }, l), {
        activator: n.activator,
        default: function() {
          for (var p = arguments.length, w = new Array(p), k = 0; k < p; k++)
            w[k] = arguments[k];
          return u(Fe, {
            root: "VMenu"
          }, {
            default: () => {
              var _;
              return [(_ = n.default) == null ? void 0 : _.call(n, ...w)];
            }
          });
        }
      });
    }), ql({
      id: r,
      ΨopenChildren: d
    }, s);
  }
}), Tr = I({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...J(),
  ...en({
    transition: {
      component: vl
    }
  })
}, "VCounter"), Or = G()({
  name: "VCounter",
  functional: !0,
  props: Tr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = f(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return H(() => u(Ke, {
      transition: e.transition
    }, {
      default: () => [_e(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Vt, e.active]])]
    })), {};
  }
}), Fr = I({
  floating: Boolean,
  ...J()
}, "VFieldLabel"), Dt = G()({
  name: "VFieldLabel",
  props: Fr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => u(Zn, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Lr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Xl = I({
  appendInnerIcon: ue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ue,
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
  prependInnerIcon: ue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Lr.includes(e)
  },
  "onClick:clear": Je(),
  "onClick:appendInner": Je(),
  "onClick:prependInner": Je(),
  ...J(),
  ...qn(),
  ...De(),
  ...ke()
}, "VField"), Yl = G()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Qn(),
    ...Xl()
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
      themeClasses: o
    } = Pe(e), {
      loaderClasses: i
    } = Xn(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: d
    } = sn(e), {
      InputIcon: v
    } = zl(e), {
      roundedClasses: h
    } = Ge(e), {
      rtlClasses: g
    } = $e(), b = f(() => e.dirty || e.active), y = f(() => !!(e.label || l.label)), m = f(() => !e.singleLine && y.value), p = ze(), w = f(() => e.id || `input-${p}`), k = f(() => `${w.value}-messages`), _ = j(), E = j(), V = j(), x = f(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: S,
      backgroundColorStyles: T
    } = Ie(U(e, "bgColor")), {
      textColorClasses: W,
      textColorStyles: $
    } = Ue(f(() => e.error || e.disabled ? void 0 : b.value && s.value ? e.color : e.baseColor));
    q(b, (A) => {
      if (m.value) {
        const F = _.value.$el, N = E.value.$el;
        requestAnimationFrame(() => {
          const ne = Nn(F), Y = N.getBoundingClientRect(), ie = Y.x - ne.x, Z = Y.y - ne.y - (ne.height / 2 - Y.height / 2), X = Y.width / 0.75, se = Math.abs(X - ne.width) > 1 ? {
            maxWidth: M(X)
          } : void 0, we = getComputedStyle(F), Te = getComputedStyle(N), je = parseFloat(we.transitionDuration) * 1e3 || 150, B = parseFloat(Te.getPropertyValue("--v-field-label-scale")), R = Te.getPropertyValue("color");
          F.style.visibility = "visible", N.style.visibility = "hidden", rt(F, {
            transform: `translate(${ie}px, ${Z}px) scale(${B})`,
            color: R,
            ...se
          }, {
            duration: je,
            easing: Xt,
            direction: A ? "normal" : "reverse"
          }).finished.then(() => {
            F.style.removeProperty("visibility"), N.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const C = f(() => ({
      isActive: b,
      isFocused: s,
      controlRef: V,
      blur: d,
      focus: c
    }));
    function P(A) {
      A.target !== document.activeElement && A.preventDefault();
    }
    return H(() => {
      var ie, Z, X;
      const A = e.variant === "outlined", F = !!(l["prepend-inner"] || e.prependInnerIcon), N = !!(e.clearable || l.clear) && !e.disabled, ne = !!(l["append-inner"] || e.appendInnerIcon || N), Y = () => l.label ? l.label({
        ...C.value,
        label: e.label,
        props: {
          for: w.value
        }
      }) : e.label;
      return u("div", Q({
        class: ["v-field", {
          "v-field--active": b.value,
          "v-field--appended": ne,
          "v-field--center-affix": e.centerAffix ?? !x.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": F,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !Y(),
          [`v-field--variant-${e.variant}`]: !0
        }, o.value, S.value, r.value, i.value, h.value, g.value, e.class],
        style: [T.value, e.style],
        onClick: P
      }, n), [u("div", {
        class: "v-field__overlay"
      }, null), u(_l, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), F && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(v, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (ie = l["prepend-inner"]) == null ? void 0 : ie.call(l, C.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && u(Dt, {
        key: "floating-label",
        ref: E,
        class: [W.value],
        floating: !0,
        for: w.value,
        style: $.value
      }, {
        default: () => [Y()]
      }), y.value && u(Dt, {
        key: "label",
        ref: _,
        for: w.value
      }, {
        default: () => [Y()]
      }), (Z = l.default) == null ? void 0 : Z.call(l, {
        ...C.value,
        props: {
          id: w.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: d
      })]), N && u(ci, {
        key: "clear"
      }, {
        default: () => [_e(u("div", {
          class: "v-field__clearable",
          onMousedown: (se) => {
            se.preventDefault(), se.stopPropagation();
          }
        }, [u(Fe, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...C.value,
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
      }), ne && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(X = l["append-inner"]) == null ? void 0 : X.call(l, C.value), e.appendInnerIcon && u(v, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", W.value],
        style: $.value
      }, [A && u(de, null, [u("div", {
        class: "v-field__outline__start"
      }, null), m.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Dt, {
        ref: E,
        floating: !0,
        for: w.value
      }, {
        default: () => [Y()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), x.value && m.value && u(Dt, {
        ref: E,
        floating: !0,
        for: w.value
      }, {
        default: () => [Y()]
      })])]);
    }), {
      controlRef: V
    };
  }
});
function Mr(e) {
  const t = Object.keys(Yl.props).filter((n) => !Mn(n) && n !== "class" && n !== "style");
  return Ln(e, t);
}
const Rr = ["color", "file", "time", "date", "datetime-local", "week", "month"], zr = I({
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
  ...un(),
  ...Xl()
}, "VTextField"), Kl = G()({
  name: "VTextField",
  directives: {
    Intersect: hl
  },
  inheritAttrs: !1,
  props: zr(),
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
    const o = ge(e, "modelValue"), {
      isFocused: i,
      focus: r,
      blur: s
    } = sn(e), c = f(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = f(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = f(() => ["plain", "underlined"].includes(e.variant));
    function h(V, x) {
      var S, T;
      !e.autofocus || !V || (T = (S = x[0].target) == null ? void 0 : S.focus) == null || T.call(S);
    }
    const g = j(), b = j(), y = j(), m = f(() => Rr.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
    function p() {
      var V;
      y.value !== document.activeElement && ((V = y.value) == null || V.focus()), i.value || r();
    }
    function w(V) {
      a("mousedown:control", V), V.target !== y.value && (p(), V.preventDefault());
    }
    function k(V) {
      p(), a("click:control", V);
    }
    function _(V) {
      V.stopPropagation(), p(), Se(() => {
        o.value = null, Za(e["onClick:clear"], V);
      });
    }
    function E(V) {
      var S;
      const x = V.target;
      if (o.value = x.value, (S = e.modelModifiers) != null && S.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const T = [x.selectionStart, x.selectionEnd];
        Se(() => {
          x.selectionStart = T[0], x.selectionEnd = T[1];
        });
      }
    }
    return H(() => {
      const V = !!(l.counter || e.counter !== !1 && e.counter != null), x = !!(V || l.details), [S, T] = Rn(n), {
        modelValue: W,
        ...$
      } = vt.filterProps(e), C = Mr(e);
      return u(vt, Q({
        ref: g,
        modelValue: o.value,
        "onUpdate:modelValue": (P) => o.value = P,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, S, $, {
        centerAffix: !v.value,
        focused: i.value
      }), {
        ...l,
        default: (P) => {
          let {
            id: A,
            isDisabled: F,
            isDirty: N,
            isReadonly: ne,
            isValid: Y
          } = P;
          return u(Yl, Q({
            ref: b,
            onMousedown: w,
            onClick: k,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, C, {
            id: A.value,
            active: m.value || N.value,
            dirty: N.value || e.dirty,
            disabled: F.value,
            focused: i.value,
            error: Y.value === !1
          }), {
            ...l,
            default: (ie) => {
              let {
                props: {
                  class: Z,
                  ...X
                }
              } = ie;
              const se = _e(u("input", Q({
                ref: y,
                value: o.value,
                onInput: E,
                autofocus: e.autofocus,
                readonly: ne.value,
                disabled: F.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: p,
                onBlur: s
              }, X, T), null), [[gt("intersect"), {
                handler: h
              }, null, {
                once: !0
              }]]);
              return u(de, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: Z,
                "data-no-activator": ""
              }, [l.default(), se]) : mo(se, {
                class: Z
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: x ? (P) => {
          var A;
          return u(de, null, [(A = l.details) == null ? void 0 : A.call(l, P), V && u(de, null, [u("span", null, null), u(Or, {
            active: e.persistentCounter || i.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), ql({}, g, b, y);
  }
}), Nr = G()({
  name: "VCardActions",
  props: J(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Et({
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
}), Dr = I({
  opacity: [Number, String],
  ...J(),
  ...Ae()
}, "VCardSubtitle"), Gr = G()({
  name: "VCardSubtitle",
  props: Dr(),
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
}), jr = Qo("v-card-title"), Hr = I({
  appendAvatar: String,
  appendIcon: ue,
  prependAvatar: String,
  prependIcon: ue,
  subtitle: [String, Number],
  title: [String, Number],
  ...J(),
  ...lt()
}, "VCardItem"), Wr = G()({
  name: "VCardItem",
  props: Hr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? u(Fe, {
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
      }, n.prepend) : u(de, null, [e.prependAvatar && u(Aa, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(pe, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [r && u(jr, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
        }
      }), s && u(Gr, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = n.subtitle) == null ? void 0 : d.call(n)) ?? e.subtitle];
        }
      }), (c = n.default) == null ? void 0 : c.call(n)]), i && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? u(Fe, {
        key: "append-defaults",
        disabled: !o,
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
      }, n.append) : u(de, null, [e.appendIcon && u(pe, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(Aa, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Ur = I({
  opacity: [Number, String],
  ...J(),
  ...Ae()
}, "VCardText"), Zl = G()({
  name: "VCardText",
  props: Ur(),
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
}), qr = I({
  appendAvatar: String,
  appendIcon: ue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...$t(),
  ...J(),
  ...lt(),
  ...ht(),
  ...Tt(),
  ...qn(),
  ...on(),
  ...Yn(),
  ...De(),
  ...xl(),
  ...Ae(),
  ...ke(),
  ...tn({
    variant: "elevated"
  })
}, "VCard"), Xr = G()({
  name: "VCard",
  directives: {
    Ripple: Ft
  },
  props: qr(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Pe(e), {
      borderClasses: o
    } = At(e), {
      colorClasses: i,
      colorStyles: r,
      variantClasses: s
    } = Un(e), {
      densityClasses: c
    } = bt(e), {
      dimensionStyles: d
    } = yt(e), {
      elevationClasses: v
    } = Ot(e), {
      loaderClasses: h
    } = Xn(e), {
      locationStyles: g
    } = rn(e), {
      positionClasses: b
    } = Kn(e), {
      roundedClasses: y
    } = Ge(e), m = Vl(e, n), p = f(() => e.link !== !1 && m.isLink.value), w = f(() => !e.disabled && e.link !== !1 && (e.link || m.isClickable.value));
    return H(() => {
      const k = p.value ? "a" : e.tag, _ = !!(a.title || e.title != null), E = !!(a.subtitle || e.subtitle != null), V = _ || E, x = !!(a.append || e.appendAvatar || e.appendIcon), S = !!(a.prepend || e.prependAvatar || e.prependIcon), T = !!(a.image || e.image), W = V || S || x, $ = !!(a.text || e.text != null);
      return _e(u(k, Q({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": w.value
        }, l.value, o.value, i.value, c.value, v.value, h.value, b.value, y.value, s.value, e.class],
        style: [r.value, d.value, g.value, e.style],
        onClick: w.value && m.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, m.linkProps), {
        default: () => {
          var C;
          return [T && u("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? u(Fe, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : u(yl, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(_l, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), W && u(Wr, {
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
          }), $ && u(Zl, {
            key: "text"
          }, {
            default: () => {
              var P;
              return [((P = a.text) == null ? void 0 : P.call(a)) ?? e.text];
            }
          }), (C = a.default) == null ? void 0 : C.call(a), a.actions && u(Nr, null, {
            default: a.actions
          }), Wn(w.value, "v-card")];
        }
      }), [[gt("ripple"), w.value && e.ripple]]);
    }), {};
  }
}), Yr = I({
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
  ...J()
}, "VColorPickerCanvas"), Kr = Ne({
  name: "VColorPickerCanvas",
  props: Yr(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = ae(!1), l = j(), o = ae(parseFloat(e.width)), i = ae(parseFloat(e.height)), r = j({
      x: 0,
      y: 0
    }), s = f({
      get: () => r.value,
      set(m) {
        var k, _;
        if (!l.value) return;
        const {
          x: p,
          y: w
        } = m;
        r.value = m, n("update:color", {
          h: ((k = e.color) == null ? void 0 : k.h) ?? 0,
          s: Be(p, 0, o.value) / o.value,
          v: 1 - Be(w, 0, i.value) / i.value,
          a: ((_ = e.color) == null ? void 0 : _.a) ?? 1
        });
      }
    }), c = f(() => {
      const {
        x: m,
        y: p
      } = s.value, w = parseInt(e.dotSize, 10) / 2;
      return {
        width: M(e.dotSize),
        height: M(e.dotSize),
        transform: `translate(${M(m - w)}, ${M(p - w)})`
      };
    }), {
      resizeRef: d
    } = ul((m) => {
      var k;
      if (!((k = d.el) != null && k.offsetParent)) return;
      const {
        width: p,
        height: w
      } = m[0].contentRect;
      o.value = p, i.value = w;
    });
    function v(m, p, w) {
      const {
        left: k,
        top: _,
        width: E,
        height: V
      } = w;
      s.value = {
        x: Be(m - k, 0, E),
        y: Be(p - _, 0, V)
      };
    }
    function h(m) {
      m.type === "mousedown" && m.preventDefault(), !e.disabled && (g(m), window.addEventListener("mousemove", g), window.addEventListener("mouseup", b), window.addEventListener("touchmove", g), window.addEventListener("touchend", b));
    }
    function g(m) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const p = _o(m);
      v(p.clientX, p.clientY, l.value.getBoundingClientRect());
    }
    function b() {
      window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", b), window.removeEventListener("touchmove", g), window.removeEventListener("touchend", b);
    }
    function y() {
      var _;
      if (!l.value) return;
      const m = l.value, p = m.getContext("2d");
      if (!p) return;
      const w = p.createLinearGradient(0, 0, m.width, 0);
      w.addColorStop(0, "hsla(0, 0%, 100%, 1)"), w.addColorStop(1, `hsla(${((_ = e.color) == null ? void 0 : _.h) ?? 0}, 100%, 50%, 1)`), p.fillStyle = w, p.fillRect(0, 0, m.width, m.height);
      const k = p.createLinearGradient(0, 0, 0, m.height);
      k.addColorStop(0, "hsla(0, 0%, 0%, 0)"), k.addColorStop(1, "hsla(0, 0%, 0%, 1)"), p.fillStyle = k, p.fillRect(0, 0, m.width, m.height);
    }
    return q(() => {
      var m;
      return (m = e.color) == null ? void 0 : m.h;
    }, y, {
      immediate: !0
    }), q(() => [o.value, i.value], (m, p) => {
      y(), r.value = {
        x: s.value.x * m[0] / p[0],
        y: s.value.y * m[1] / p[1]
      };
    }, {
      flush: "post"
    }), q(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * o.value,
        y: (1 - e.color.v) * i.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), Xe(() => y()), H(() => u("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: h,
      onTouchstartPassive: h
    }, [u("canvas", {
      ref: l,
      width: o.value,
      height: i.value
    }, null), e.color && u("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function Zr(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function Jr(e, t) {
  if (t == null || typeof t == "string") {
    const n = il(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return Ye(t, ["r", "g", "b"]) ? n = Me(e) : Ye(t, ["h", "s", "l"]) ? n = nl(e) : Ye(t, ["h", "s", "v"]) && (n = e), Zr(n, !Ye(t, ["a"]) && e.a === 1);
  }
  return e;
}
const st = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Pn = {
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
  to: Me,
  from: It
};
var Ga;
const Qr = {
  ...Pn,
  inputs: (Ga = Pn.inputs) == null ? void 0 : Ga.slice(0, 3)
}, Bn = {
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
  to: nl,
  from: Dn
}, es = {
  ...Bn,
  inputs: Bn.inputs.slice(0, 3)
}, Jl = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, t) => t
  }],
  to: il,
  from: Uo
}, ts = {
  ...Jl,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t
  }]
}, tt = {
  rgb: Qr,
  rgba: Pn,
  hsl: es,
  hsla: Bn,
  hex: ts,
  hexa: Jl
}, ns = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", n, null), u("span", null, [t])]);
}, as = I({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(tt).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(tt),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(tt).includes(t))
  },
  ...J()
}, "VColorPickerEdit"), ls = Ne({
  name: "VColorPickerEdit",
  props: as(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = f(() => e.modes.map((o) => ({
      ...tt[o],
      name: o
    }))), l = f(() => {
      var r;
      const o = a.value.find((s) => s.name === e.mode);
      if (!o) return [];
      const i = e.color ? o.to(e.color) : null;
      return (r = o.inputs) == null ? void 0 : r.map((s) => {
        let {
          getValue: c,
          getColor: d,
          ...v
        } = s;
        return {
          ...o.inputProps,
          ...v,
          disabled: e.disabled,
          value: i && c(i),
          onChange: (h) => {
            const g = h.target;
            g && n("update:color", o.from(d(i ?? o.to(st), g.value)));
          }
        };
      });
    });
    return H(() => {
      var o;
      return u("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(o = l.value) == null ? void 0 : o.map((i) => u(ns, i, null)), a.value.length > 1 && u(Fl, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const i = a.value.findIndex((r) => r.name === e.mode);
          n("update:mode", a.value[(i + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), ea = Symbol.for("vuetify:v-slider");
function os(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function is(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const rs = I({
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
  ...De(),
  ...Tt({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), ss = (e) => {
  const t = f(() => parseFloat(e.min)), n = f(() => parseFloat(e.max)), a = f(() => +e.step > 0 ? parseFloat(e.step) : 0), l = f(() => Math.max(ra(a.value), ra(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Be(i, t.value, n.value), s = t.value % a.value, c = Math.round((r - s) / a.value) * a.value + s;
    return parseFloat(Math.min(c, n.value).toFixed(l.value));
  }
  return {
    min: t,
    max: n,
    step: a,
    decimals: l,
    roundValue: o
  };
}, us = (e) => {
  let {
    props: t,
    steps: n,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: o,
    getActiveThumb: i
  } = e;
  const {
    isRtl: r
  } = $e(), s = U(t, "reverse"), c = f(() => t.direction === "vertical"), d = f(() => c.value !== s.value), {
    min: v,
    max: h,
    step: g,
    decimals: b,
    roundValue: y
  } = n, m = f(() => parseInt(t.thumbSize, 10)), p = f(() => parseInt(t.tickSize, 10)), w = f(() => parseInt(t.trackSize, 10)), k = f(() => (h.value - v.value) / g.value), _ = U(t, "disabled"), E = f(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), V = f(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), x = f(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), S = ae(!1), T = ae(0), W = j(), $ = j();
  function C(B) {
    var ta;
    const R = (ta = W.value) == null ? void 0 : ta.$el;
    if (!R) return;
    const ye = t.direction === "vertical", Lt = ye ? "top" : "left", Mt = ye ? "height" : "width", lo = ye ? "clientY" : "clientX", {
      [Lt]: oo,
      [Mt]: io
    } = R.getBoundingClientRect(), ro = is(B, lo);
    let cn = Math.min(Math.max((ro - oo - T.value) / io, 0), 1) || 0;
    return (ye ? d.value : d.value !== r.value) && (cn = 1 - cn), y(v.value + cn * (h.value - v.value));
  }
  const P = (B) => {
    const R = C(B);
    R != null && o({
      value: R
    }), S.value = !1, T.value = 0;
  }, A = (B) => {
    const R = C(B);
    $.value = i(B), $.value && (S.value = !0, $.value.contains(B.target) ? T.value = os(B, $.value, t.direction) : (T.value = 0, R != null && l({
      value: R
    })), R != null && a({
      value: R
    }), Se(() => {
      var ye;
      return (ye = $.value) == null ? void 0 : ye.focus();
    }));
  }, F = {
    passive: !0,
    capture: !0
  };
  function N(B) {
    const R = C(B);
    R != null && l({
      value: R
    });
  }
  function ne(B) {
    B.stopPropagation(), B.preventDefault(), P(B), window.removeEventListener("mousemove", N, F), window.removeEventListener("mouseup", ne);
  }
  function Y(B) {
    var R;
    P(B), window.removeEventListener("touchmove", N, F), (R = B.target) == null || R.removeEventListener("touchend", Y);
  }
  function ie(B) {
    var R;
    A(B), window.addEventListener("touchmove", N, F), (R = B.target) == null || R.addEventListener("touchend", Y, {
      passive: !1
    });
  }
  function Z(B) {
    B.preventDefault(), A(B), window.addEventListener("mousemove", N, F), window.addEventListener("mouseup", ne, {
      passive: !1
    });
  }
  const X = (B) => {
    const R = (B - v.value) / (h.value - v.value) * 100;
    return Be(isNaN(R) ? 0 : R, 0, 100);
  }, se = U(t, "showTicks"), we = f(() => se.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((B) => ({
    value: B,
    position: X(B),
    label: B.toString()
  })) : Object.keys(t.ticks).map((B) => ({
    value: parseFloat(B),
    position: X(parseFloat(B)),
    label: t.ticks[B]
  })) : k.value !== 1 / 0 ? bo(k.value + 1).map((B) => {
    const R = v.value + B * g.value;
    return {
      value: R,
      position: X(R)
    };
  }) : [] : []), Te = f(() => we.value.some((B) => {
    let {
      label: R
    } = B;
    return !!R;
  })), je = {
    activeThumbRef: $,
    color: U(t, "color"),
    decimals: b,
    disabled: _,
    direction: U(t, "direction"),
    elevation: U(t, "elevation"),
    hasLabels: Te,
    isReversed: s,
    indexFromEnd: d,
    min: v,
    max: h,
    mousePressed: S,
    numTicks: k,
    onSliderMousedown: Z,
    onSliderTouchstart: ie,
    parsedTicks: we,
    parseMouseMove: C,
    position: X,
    readonly: U(t, "readonly"),
    rounded: U(t, "rounded"),
    roundValue: y,
    showTicks: se,
    startOffset: T,
    step: g,
    thumbSize: m,
    thumbColor: E,
    thumbLabel: U(t, "thumbLabel"),
    ticks: U(t, "ticks"),
    tickSize: p,
    trackColor: V,
    trackContainerRef: W,
    trackFillColor: x,
    trackSize: w,
    vertical: c
  };
  return Re(ea, je), je;
}, cs = I({
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
  ...J()
}, "VSliderThumb"), ds = G()({
  name: "VSliderThumb",
  directives: {
    Ripple: Ft
  },
  props: cs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = he(ea), {
      isRtl: o,
      rtlClasses: i
    } = $e();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: s,
      disabled: c,
      thumbSize: d,
      thumbLabel: v,
      direction: h,
      isReversed: g,
      vertical: b,
      readonly: y,
      elevation: m,
      mousePressed: p,
      decimals: w,
      indexFromEnd: k
    } = l, _ = f(() => c.value ? void 0 : m.value), {
      elevationClasses: E
    } = Ot(_), {
      textColorClasses: V,
      textColorStyles: x
    } = Ue(r), {
      pageup: S,
      pagedown: T,
      end: W,
      home: $,
      left: C,
      right: P,
      down: A,
      up: F
    } = Co, N = [S, T, W, $, C, P, A, F], ne = f(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function Y(Z, X) {
      if (!N.includes(Z.key)) return;
      Z.preventDefault();
      const se = s.value || 0.1, we = (e.max - e.min) / se;
      if ([C, P, A, F].includes(Z.key)) {
        const je = (b.value ? [o.value ? C : P, g.value ? A : F] : k.value !== o.value ? [C, F] : [P, F]).includes(Z.key) ? 1 : -1, B = Z.shiftKey ? 2 : Z.ctrlKey ? 1 : 0;
        X = X + je * se * ne.value[B];
      } else if (Z.key === $)
        X = e.min;
      else if (Z.key === W)
        X = e.max;
      else {
        const Te = Z.key === T ? 1 : -1;
        X = X - Te * se * (we > 100 ? we / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, X));
    }
    function ie(Z) {
      const X = Y(Z, e.modelValue);
      X != null && a("update:modelValue", X);
    }
    return H(() => {
      const Z = M(k.value ? 100 - e.position : e.position, "%");
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && p.value
        }, e.class, i.value],
        style: [{
          "--v-slider-thumb-position": Z,
          "--v-slider-thumb-size": M(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!y.value,
        "aria-orientation": h.value,
        onKeydown: y.value ? void 0 : ie
      }, [u("div", {
        class: ["v-slider-thumb__surface", V.value, E.value],
        style: {
          ...x.value
        }
      }, null), _e(u("div", {
        class: ["v-slider-thumb__ripple", V.value],
        style: x.value
      }, null), [[gt("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), u(ui, {
        origin: "bottom center"
      }, {
        default: () => {
          var X;
          return [_e(u("div", {
            class: "v-slider-thumb__label-container"
          }, [u("div", {
            class: ["v-slider-thumb__label"]
          }, [u("div", null, [((X = n["thumb-label"]) == null ? void 0 : X.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? w.value : 1)])])]), [[Vt, v.value && e.focused || v.value === "always"]])];
        }
      })]);
    }), {};
  }
}), fs = I({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...J()
}, "VSliderTrack"), vs = G()({
  name: "VSliderTrack",
  props: fs(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = he(ea);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: o,
      rounded: i,
      showTicks: r,
      tickSize: s,
      trackColor: c,
      trackFillColor: d,
      trackSize: v,
      vertical: h,
      min: g,
      max: b,
      indexFromEnd: y
    } = a, {
      roundedClasses: m
    } = Ge(i), {
      backgroundColorClasses: p,
      backgroundColorStyles: w
    } = Ie(d), {
      backgroundColorClasses: k,
      backgroundColorStyles: _
    } = Ie(c), E = f(() => `inset-${h.value ? "block" : "inline"}-${y.value ? "end" : "start"}`), V = f(() => h.value ? "height" : "width"), x = f(() => ({
      [E.value]: "0%",
      [V.value]: "100%"
    })), S = f(() => e.stop - e.start), T = f(() => ({
      [E.value]: M(e.start, "%"),
      [V.value]: M(S.value, "%")
    })), W = f(() => r.value ? (h.value ? o.value.slice().reverse() : o.value).map((C, P) => {
      var F;
      const A = C.value !== g.value && C.value !== b.value ? M(C.position, "%") : void 0;
      return u("div", {
        key: C.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": C.position >= e.start && C.position <= e.stop,
          "v-slider-track__tick--first": C.value === g.value,
          "v-slider-track__tick--last": C.value === b.value
        }],
        style: {
          [E.value]: A
        }
      }, [(C.label || n["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((F = n["tick-label"]) == null ? void 0 : F.call(n, {
        tick: C,
        index: P
      })) ?? C.label])]);
    }) : []);
    return H(() => u("div", {
      class: ["v-slider-track", m.value, e.class],
      style: [{
        "--v-slider-track-size": M(v.value),
        "--v-slider-tick-size": M(s.value)
      }, e.style]
    }, [u("div", {
      class: ["v-slider-track__background", k.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...x.value,
        ..._.value
      }
    }, null), u("div", {
      class: ["v-slider-track__fill", p.value],
      style: {
        ...T.value,
        ...w.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [W.value])])), {};
  }
}), ms = I({
  ...Qn(),
  ...rs(),
  ...un(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Na = G()({
  name: "VSlider",
  props: ms(),
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
    const l = j(), {
      rtlClasses: o
    } = $e(), i = ss(e), r = ge(e, "modelValue", void 0, (V) => i.roundValue(V ?? i.min.value)), {
      min: s,
      max: c,
      mousePressed: d,
      roundValue: v,
      onSliderMousedown: h,
      onSliderTouchstart: g,
      trackContainerRef: b,
      position: y,
      hasLabels: m,
      readonly: p
    } = us({
      props: e,
      steps: i,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (V) => {
        let {
          value: x
        } = V;
        const S = v(x);
        r.value = S, a("end", S);
      },
      onSliderMove: (V) => {
        let {
          value: x
        } = V;
        return r.value = v(x);
      },
      getActiveThumb: () => {
        var V;
        return (V = l.value) == null ? void 0 : V.$el;
      }
    }), {
      isFocused: w,
      focus: k,
      blur: _
    } = sn(e), E = f(() => y(r.value));
    return H(() => {
      const V = vt.filterProps(e), x = !!(e.label || n.label || n.prepend);
      return u(vt, Q({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || m.value,
          "v-slider--focused": w.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, o.value, e.class],
        style: e.style
      }, V, {
        focused: w.value
      }), {
        ...n,
        prepend: x ? (S) => {
          var T, W;
          return u(de, null, [((T = n.label) == null ? void 0 : T.call(n, S)) ?? (e.label ? u(Zn, {
            id: S.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (W = n.prepend) == null ? void 0 : W.call(n, S)]);
        } : void 0,
        default: (S) => {
          let {
            id: T,
            messagesId: W
          } = S;
          return u("div", {
            class: "v-slider__container",
            onMousedown: p.value ? void 0 : h,
            onTouchstartPassive: p.value ? void 0 : g
          }, [u("input", {
            id: T.value,
            name: e.name || T.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(vs, {
            ref: b,
            start: 0,
            stop: E.value
          }, {
            "tick-label": n["tick-label"]
          }), u(ds, {
            ref: l,
            "aria-describedby": W.value,
            focused: w.value,
            min: s.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": ($) => r.value = $,
            position: E.value,
            elevation: e.elevation,
            onFocus: k,
            onBlur: _,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), gs = I({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...J()
}, "VColorPickerPreview"), hs = Ne({
  name: "VColorPickerPreview",
  props: gs(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = new AbortController();
    xt(() => a.abort());
    async function l() {
      if (!aa) return;
      const o = new window.EyeDropper();
      try {
        const i = await o.open({
          signal: a.signal
        }), r = It(Oe(i.sRGBHex));
        n("update:color", {
          ...e.color ?? st,
          ...r
        });
      } catch {
      }
    }
    return H(() => {
      var o, i;
      return u("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [aa && u("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [u(Fl, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), u("div", {
        class: "v-color-picker-preview__dot"
      }, [u("div", {
        style: {
          background: ll(e.color ?? st)
        }
      }, null)]), u("div", {
        class: "v-color-picker-preview__sliders"
      }, [u(Na, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (o = e.color) == null ? void 0 : o.h,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? st,
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
      }, null), !e.hideAlpha && u(Na, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((i = e.color) == null ? void 0 : i.a) ?? 1,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? st,
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
}), ys = {
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
}, bs = {
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
}, ps = {
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
}, ks = {
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
}, Cs = {
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
}, ws = {
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
}, Ss = {
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
}, _s = {
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
}, Vs = {
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
}, xs = {
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
}, Ps = {
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
}, Bs = {
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
}, Is = {
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
}, Es = {
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
}, $s = {
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
}, As = {
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
}, Ts = {
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
}, Os = {
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
}, Fs = {
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
}, Ls = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Ms = {
  red: ys,
  pink: bs,
  purple: ps,
  deepPurple: ks,
  indigo: Cs,
  blue: ws,
  lightBlue: Ss,
  cyan: _s,
  teal: Vs,
  green: xs,
  lightGreen: Ps,
  lime: Bs,
  yellow: Is,
  amber: Es,
  orange: $s,
  deepOrange: As,
  brown: Ts,
  blueGrey: Os,
  grey: Fs,
  shades: Ls
}, Rs = I({
  swatches: {
    type: Array,
    default: () => zs(Ms)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...J()
}, "VColorPickerSwatches");
function zs(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const Ns = Ne({
  name: "VColorPickerSwatches",
  props: Rs(),
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
        maxHeight: M(e.maxHeight)
      }, e.style]
    }, [u("div", null, [e.swatches.map((a) => u("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const o = Oe(l), i = It(o), r = al(o);
      return u("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => i && n("update:color", i)
      }, [u("div", {
        style: {
          background: r
        }
      }, [e.color && Pt(e.color, i) ? u(pe, {
        size: "x-small",
        icon: "$success",
        color: Xo(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), Ql = I({
  color: String,
  ...$t(),
  ...J(),
  ...ht(),
  ...Tt(),
  ...on(),
  ...Yn(),
  ...De(),
  ...Ae(),
  ...ke()
}, "VSheet"), Da = G()({
  name: "VSheet",
  props: Ql(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Pe(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = Ie(U(e, "color")), {
      borderClasses: i
    } = At(e), {
      dimensionStyles: r
    } = yt(e), {
      elevationClasses: s
    } = Ot(e), {
      locationStyles: c
    } = rn(e), {
      positionClasses: d
    } = Kn(e), {
      roundedClasses: v
    } = Ge(e);
    return H(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, i.value, s.value, d.value, v.value, e.class],
      style: [o.value, r.value, c.value, e.style]
    }, n)), {};
  }
}), Ds = I({
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
    validator: (e) => Object.keys(tt).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(tt),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(tt).includes(t))
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
  ...Bt(Ql({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), Gs = Ne({
  name: "VColorPicker",
  props: Ds(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const t = ge(e, "mode"), n = j(null), a = ge(e, "modelValue", void 0, (s) => {
      if (s == null || s === "") return null;
      let c;
      try {
        c = It(Oe(s));
      } catch (d) {
        return et(d), null;
      }
      return c;
    }, (s) => s ? Jr(s, e.modelValue) : null), l = f(() => a.value ? {
      ...a.value,
      h: n.value ?? a.value.h
    } : null), {
      rtlClasses: o
    } = $e();
    let i = !0;
    q(a, (s) => {
      if (!i) {
        i = !0;
        return;
      }
      s && (n.value = s.h);
    }, {
      immediate: !0
    });
    const r = (s) => {
      i = !1, n.value = s.h, a.value = s;
    };
    return An(() => {
      e.modes.includes(t.value) || (t.value = e.modes[0]);
    }), Et({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), H(() => {
      const s = Da.filterProps(e);
      return u(Da, Q({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", o.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": ll({
            ...l.value ?? st,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && u(Kr, {
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
        }, [!e.hideSliders && u(hs, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !t.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(ls, {
          key: "edit",
          modes: e.modes,
          mode: t.value,
          "onUpdate:mode": (c) => t.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(Ns, {
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
}), js = I({
  ...Jn({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), Hs = G()({
  name: "VRadio",
  props: js(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return H(() => {
      const a = Zt.filterProps(e);
      return u(Zt, Q(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), n);
    }), {};
  }
}), Ws = { class: "d-flex" }, Us = { class: "gs-alert-bar__content" }, qs = { class: "gs-alert-bar__icon" }, Xs = { class: "d-flex flex-column" }, Ys = ["innerHTML"], Ks = ["innerHTML"], Zs = /* @__PURE__ */ le({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, n = f(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (a, l) => (O(), D("div", {
      class: xe(n.value),
      role: "alert"
    }, [
      L("div", Ws, [
        L("div", Us, [
          L("div", qs, [
            u(re(pe), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          L("div", Xs, [
            a.title ? (O(), D("span", {
              key: 0,
              class: "title",
              innerHTML: a.title
            }, null, 8, Ys)) : fe("", !0),
            L("span", {
              class: "message",
              innerHTML: a.message
            }, null, 8, Ks)
          ])
        ])
      ])
    ], 2));
  }
}), oe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, eo = /* @__PURE__ */ oe(Zs, [["__scopeId", "data-v-37c94566"]]), Js = {
  key: 1,
  class: "text"
}, Qs = /* @__PURE__ */ le({
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
    const t = e, n = f(() => t.href ? "a" : t.tag || "button"), a = f(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), l = f(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), o = f(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (i, r) => _e((O(), ve(Tn(n.value), {
      class: xe(l.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: He({ width: i.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: z(() => [
        t.icon && !t.loading ? (O(), ve(re(pe), {
          key: 0,
          class: "icon"
        }, {
          default: z(() => [
            K(ee(t.icon), 1)
          ]),
          _: 1
        })) : fe("", !0),
        i.$slots.default ? (O(), D("span", Js, [
          Le(i.$slots, "default", {}, void 0, !0)
        ])) : fe("", !0),
        t.loading ? (O(), ve(re(wl), {
          key: 2,
          size: o.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : fe("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [Ft, a.value]
    ]);
  }
}), at = /* @__PURE__ */ oe(Qs, [["__scopeId", "data-v-04fb02fc"]]), eu = /* @__PURE__ */ le({
  name: "GsTypography",
  __name: "GsTypography",
  props: {
    variant: {},
    bold: { type: Boolean, default: !1 },
    tag: { default: "p" },
    color: { default: "ui-black" }
  },
  setup(e) {
    return (t, n) => (O(), ve(Tn(t.tag), {
      class: xe(["gs-typography", `gs-typography--${t.variant}`, { "gs-typography--bold": t.bold }]),
      style: He({ color: `var(--${t.color})` })
    }, {
      default: z(() => [
        Le(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), te = /* @__PURE__ */ oe(eu, [["__scopeId", "data-v-f8fb6197"]]), tu = /* @__PURE__ */ le({
  name: "GsRadioButton",
  __name: "GsRadioButton",
  props: {
    modelValue: { default: void 0 },
    value: { default: void 0 },
    label: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (O(), ve(re(Hs), {
      disabled: t.disabled,
      "model-value": t.modelValue,
      value: t.value,
      class: "gs-radio",
      "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a))
    }, {
      label: z(() => [
        u(te, { variant: "description" }, {
          default: z(() => [
            K(ee(t.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["disabled", "model-value", "value"]));
  }
}), to = /* @__PURE__ */ oe(tu, [["__scopeId", "data-v-607a25d3"]]), nu = { class: "gs-card-selector__content" }, au = { class: "gs-card-selector__radio" }, lu = ["alt", "src"], ou = {
  key: 1,
  class: "gs-card-selector__pattern"
}, iu = /* @__PURE__ */ le({
  name: "GsCardSelector",
  __name: "GsCardSelector",
  props: {
    text: {},
    selected: { type: Boolean, default: !1 },
    value: {},
    name: {},
    disabled: { type: Boolean, default: !1 },
    imageSrc: { default: void 0 },
    imageAlt: { default: "" }
  },
  emits: ["update:selected", "change"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = j(void 0);
    q(
      () => n.selected,
      (s) => {
        l.value = s ? n.value : void 0;
      },
      { immediate: !0 }
    );
    const o = f(() => [
      "gs-card-selector",
      {
        "gs-card-selector--selected": l.value === n.value,
        "gs-card-selector--disabled": n.disabled
      }
    ]), i = (s) => {
      if (!n.disabled) {
        const c = s === n.value;
        a("update:selected", c), c && a("change", n.value);
      }
    }, r = (s) => {
      s.target instanceof Element && s.target.closest(".gs-radio-button") || !n.disabled && !n.selected && (l.value = n.value, i(n.value));
    };
    return (s, c) => (O(), D("article", {
      class: xe(o.value),
      role: "article",
      onClick: r
    }, [
      L("div", nu, [
        L("div", au, [
          u(to, {
            disabled: s.disabled,
            "model-value": l.value,
            name: s.name,
            value: s.value,
            class: "gs-radio-button",
            "onUpdate:modelValue": i
          }, null, 8, ["disabled", "model-value", "name", "value"])
        ]),
        u(te, {
          class: "gs-card-selector__text",
          variant: "body"
        }, {
          default: z(() => [
            K(ee(s.text), 1)
          ]),
          _: 1
        })
      ]),
      L("div", {
        class: xe([{ "gs-card-selector__image--placeholder": !s.imageSrc }, "gs-card-selector__image"])
      }, [
        s.imageSrc ? (O(), D("img", {
          key: 0,
          alt: s.imageAlt,
          src: s.imageSrc
        }, null, 8, lu)) : (O(), D("div", ou))
      ], 2)
    ], 2));
  }
}), ru = /* @__PURE__ */ oe(iu, [["__scopeId", "data-v-415c91e0"]]), su = /* @__PURE__ */ le({
  name: "GsCheckbox",
  __name: "GsCheckbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    textSize: { default: "description" },
    bold: { type: Boolean, default: !1 },
    errorMessages: { default: "" },
    hideDetails: { type: Boolean, default: !1 },
    density: { default: "default" },
    color: { default: "primary" }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = f({
      get: () => n.modelValue,
      set: (o) => a("update:modelValue", o)
    });
    return (o, i) => (O(), D("div", {
      class: xe([{ "gs-checkbox--disabled": o.disabled }, "gs-checkbox"])
    }, [
      u(re(nr), {
        modelValue: l.value,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => l.value = r),
        color: o.color,
        density: o.density,
        disabled: o.disabled,
        "error-messages": o.errorMessages,
        "hide-details": o.hideDetails,
        label: o.label,
        ripple: !1
      }, On({ _: 2 }, [
        o.label ? {
          name: "label",
          fn: z(() => [
            Le(o.$slots, "label", {}, () => [
              K(ee(o.label), 1)
            ], !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "color", "density", "disabled", "error-messages", "hide-details", "label"])
    ], 2));
  }
}), uu = /* @__PURE__ */ oe(su, [["__scopeId", "data-v-58e2cec7"]]), cu = ["aria-label"], du = {
  key: 0,
  class: "gs-color-picker-label"
}, fu = { class: "sr-only" }, vu = /* @__PURE__ */ le({
  __name: "GsColorPicker",
  props: /* @__PURE__ */ go({
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
    const t = e, n = ho(e, "modelValue"), a = f(
      () => {
        var r;
        return (r = t.colorModes) != null && r.length ? t.colorModes : ["hex"];
      }
    ), l = f(() => [
      "gs-color-picker",
      {
        "gs-color-picker-disabled": t.disabled
      }
    ]), o = () => {
      n.value = "";
    }, i = (r) => {
      n.value = r;
    };
    return (r, s) => (O(), ve(Ar, {
      "close-on-content-click": !1,
      "close-on-back": "",
      location: "top",
      offset: "15"
    }, {
      activator: z(({ props: c }) => [
        L("div", Q({
          "aria-label": `Open color picker. Current color: ${n.value || "white"}`,
          class: l.value,
          role: "button",
          tabindex: "0"
        }, c, {
          onClick: s[1] || (s[1] = na(() => {
          }, ["stop"]))
        }), [
          r.label ? (O(), D("label", du, ee(r.label), 1)) : fe("", !0),
          u(Kl, {
            modelValue: n.value,
            "onUpdate:modelValue": s[0] || (s[0] = (d) => n.value = d),
            "aria-label": r.label || r.placeholder,
            disabled: r.disabled,
            placeholder: r.placeholder,
            flat: "",
            readonly: "",
            variant: "outlined"
          }, On({
            prepend: z(() => [
              L("div", {
                style: He({ backgroundColor: n.value || "#FFFFFF" }),
                class: "gs-color-picker-swatch"
              }, [
                L("span", fu, ee(n.value || "white"), 1)
              ], 4)
            ]),
            _: 2
          }, [
            r.clearable && n.value && !r.disabled ? {
              name: "append",
              fn: z(() => [
                u(pe, {
                  "aria-label": "Clear color selection",
                  icon: "mdi-close",
                  role: "button",
                  size: "small",
                  tabindex: "0",
                  onClick: na(o, ["stop"])
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "aria-label", "disabled", "placeholder"])
        ], 16, cu)
      ]),
      default: z(() => [
        u(Xr, null, {
          default: z(() => [
            u(Zl, { class: "pa-0" }, {
              default: z(() => [
                u(re(Gs), {
                  modelValue: n.value,
                  "onUpdate:modelValue": [
                    s[2] || (s[2] = (c) => n.value = c),
                    i
                  ],
                  "aria-label": `Color picker for ${r.label || "color selection"}`,
                  modes: a.value
                }, null, 8, ["modelValue", "aria-label", "modes"])
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
}), mu = /* @__PURE__ */ oe(vu, [["__scopeId", "data-v-5b7a15c7"]]), gu = /* @__PURE__ */ le({
  name: "GsDivider",
  __name: "GsDivider",
  props: {
    color: { default: "grey200" }
  },
  setup(e) {
    const t = e, n = f(() => {
      switch (t.color) {
        case "grey250":
          return "var(--grey-scale-250)";
        case "grey800":
          return "var(--grey-scale-800)";
        default:
          return "var(--grey-scale-200)";
      }
    });
    return (a, l) => (O(), D("hr", {
      style: He({ borderColor: n.value }),
      class: "gs-divider"
    }, null, 4));
  }
}), no = /* @__PURE__ */ oe(gu, [["__scopeId", "data-v-6e39a7b2"]]), hu = { class: "gs-floating-action-menu" }, yu = { class: "gs-floating-action-menu__content" }, bu = { class: "gs-floating-action-menu__actions" }, pu = /* @__PURE__ */ le({
  name: "GsFloatingActionMenu",
  __name: "GsFloatingActionMenu",
  props: {
    title: { default: "Ready to take action and support this project?" },
    description: { default: "Add a tailored impact or create an automation to help drive change!" },
    primaryButtonText: { default: "Tailored impact" },
    secondaryButtonText: { default: "Add automation" }
  },
  emits: ["primary-action", "secondary-action"],
  setup(e) {
    const t = j(!1), n = () => {
      t.value = window.innerWidth <= 640;
    };
    return Xe(() => {
      n(), window.addEventListener("resize", n);
    }), xt(() => {
      window.removeEventListener("resize", n);
    }), (a, l) => (O(), D("section", hu, [
      L("div", yu, [
        u(te, {
          variant: t.value ? "description" : "big-description",
          bold: "",
          class: "gs-floating-action-menu__title",
          tag: "h2"
        }, {
          default: z(() => [
            K(ee(a.title), 1)
          ]),
          _: 1
        }, 8, ["variant"]),
        t.value ? fe("", !0) : (O(), ve(te, {
          key: 0,
          class: "gs-floating-action-menu__description",
          tag: "p",
          variant: "description"
        }, {
          default: z(() => [
            K(ee(a.description), 1)
          ]),
          _: 1
        }))
      ]),
      L("div", bu, [
        u(at, {
          fullWidth: "",
          type: "secondary",
          onClick: l[0] || (l[0] = (o) => a.$emit("primary-action"))
        }, {
          default: z(() => [
            K(ee(a.primaryButtonText), 1)
          ]),
          _: 1
        }),
        u(at, {
          fullWidth: "",
          type: "primary",
          onClick: l[1] || (l[1] = (o) => a.$emit("secondary-action"))
        }, {
          default: z(() => [
            K(ee(a.secondaryButtonText), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
}), ku = /* @__PURE__ */ oe(pu, [["__scopeId", "data-v-a9d2f507"]]), Cu = {
  class: "gs-icon-with-text",
  role: "region"
}, wu = { class: "icon-wrapper" }, Su = ["alt", "src"], _u = { class: "text-wrapper" }, Vu = /* @__PURE__ */ le({
  name: "GsIconWithText",
  __name: "GsIconWithText",
  props: {
    mdiIcon: {},
    iconPath: {},
    iconAlt: {},
    iconSize: { default: 20 },
    iconColor: { default: "var(--ui-black)" },
    text: {},
    textVariant: { default: "body" },
    tag: { default: "p" }
  },
  setup(e) {
    return (t, n) => (O(), D("article", Cu, [
      L("div", wu, [
        t.iconPath ? (O(), D("img", {
          key: 0,
          alt: t.iconAlt,
          src: t.iconPath,
          class: "custom-icon"
        }, null, 8, Su)) : t.mdiIcon ? (O(), ve(re(pe), {
          key: 1,
          color: t.iconColor,
          icon: t.mdiIcon,
          size: t.iconSize
        }, null, 8, ["color", "icon", "size"])) : fe("", !0)
      ]),
      L("div", _u, [
        u(te, {
          tag: t.tag,
          variant: t.textVariant,
          class: "text-content"
        }, {
          default: z(() => [
            Le(t.$slots, "text", {}, () => [
              K(ee(t.text), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["tag", "variant"])
      ])
    ]));
  }
}), ut = /* @__PURE__ */ oe(Vu, [["__scopeId", "data-v-44f1b7d8"]]), xu = ["height", "src", "width"], Pu = /* @__PURE__ */ le({
  name: "GsTags",
  __name: "GsTags",
  props: {
    label: {},
    backgroundColor: { default: "ui-green" },
    borderColor: { default: "none" },
    fontColor: { default: "ui-white" },
    icon: { default: void 0 },
    iconSize: { default: 14 },
    fontSize: { default: "body" },
    bold: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = f(() => t.fontColor ? `var(--${t.fontColor})` : t.backgroundColor.startsWith("grey-scale-") ? "var(--ui-white)" : [
      "project-pastel-blue",
      "project-pastel-orange",
      "project-pastel-green",
      "project-pastel-turquoise",
      "project-pastel-purple",
      "ui-beige"
    ].includes(t.backgroundColor) ? "var(--ui-black)" : "var(--ui-white)"), a = f(() => t.borderColor === "none" ? "none" : `1px solid var(--${t.borderColor})`), l = f(() => t.borderColor && !t.backgroundColor ? "transparent" : `var(--${t.backgroundColor})`);
    return (o, i) => (O(), D("div", {
      style: He({
        backgroundColor: l.value,
        border: a.value
      }),
      class: "gs-tags"
    }, [
      o.icon ? (O(), D("img", {
        key: 0,
        height: o.iconSize,
        src: o.icon,
        style: He({ filter: n.value === "var(--ui-black)" ? "none" : "brightness(0) invert(1)" }),
        width: o.iconSize,
        alt: ""
      }, null, 12, xu)) : fe("", !0),
      u(te, {
        style: He({
          color: n.value,
          fontWeight: o.bold ? "700" : "400"
        }),
        variant: o.fontSize
      }, {
        default: z(() => [
          K(ee(o.label), 1)
        ]),
        _: 1
      }, 8, ["style", "variant"])
    ], 4));
  }
}), St = /* @__PURE__ */ oe(Pu, [["__scopeId", "data-v-37955819"]]), Bu = { class: "gs-integration-selector__content" }, Iu = { class: "gs-integration-selector__icon" }, Eu = ["src"], $u = {
  key: 1,
  fill: "none",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, Au = /* @__PURE__ */ le({
  name: "GsIntegrationSelector",
  __name: "GsIntegrationSelector",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "Integration name" },
    disabled: { type: Boolean, default: !1 },
    icon: { default: "" },
    tagLabel: { default: void 0 },
    errorMessages: { default: "" },
    hideDetails: { type: Boolean, default: !1 },
    density: { default: "default" },
    color: { default: "primary" }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = f({
      get: () => n.modelValue,
      set: (i) => a("update:modelValue", i)
    }), o = (i) => {
      a("change", i);
    };
    return (i, r) => (O(), D("div", {
      class: xe([{
        "gs-integration-selector--selected": l.value,
        "gs-integration-selector--disabled": i.disabled
      }, "gs-integration-selector"]),
      onClick: r[0] || (r[0] = (s) => !i.disabled && o(!l.value))
    }, [
      L("div", Bu, [
        L("div", Iu, [
          i.icon ? (O(), D("img", {
            key: 0,
            src: i.icon,
            alt: "",
            height: "24",
            width: "24"
          }, null, 8, Eu)) : (O(), D("svg", $u, r[1] || (r[1] = [
            L("rect", {
              fill: "#00B67A",
              height: "24",
              width: "24"
            }, null, -1)
          ])))
        ]),
        u(te, { variant: "big-description" }, {
          default: z(() => [
            Le(i.$slots, "label", {}, () => [
              K(ee(i.label), 1)
            ], !0)
          ]),
          _: 3
        })
      ]),
      i.tagLabel ? (O(), ve(St, {
        key: 0,
        label: i.tagLabel,
        "background-color": "ui-green",
        bold: "",
        class: "gs-integration-selector__tag"
      }, null, 8, ["label"])) : fe("", !0)
    ], 2));
  }
}), Tu = /* @__PURE__ */ oe(Au, [["__scopeId", "data-v-00558abc"]]), Ou = { class: "gs-manage-plan__content" }, Fu = ["alt", "src"], Lu = { class: "gs-manage-plan__text" }, Mu = /* @__PURE__ */ le({
  name: "GsManagePlan",
  __name: "GsManagePlan",
  props: {
    icon: {},
    title: {},
    description: { default: "" },
    buttonLabel: { default: "Manage" },
    buttonIcon: { default: "mdi-cog" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const n = t, a = j(!1), l = () => {
      a.value = window.innerWidth < 768;
    };
    Xe(() => {
      l(), window.addEventListener("resize", l);
    }), xt(() => {
      window.removeEventListener("resize", l);
    });
    const o = () => {
      n("button-click");
    };
    return (i, r) => (O(), D("div", {
      class: xe([{ "gs-manage-plan--disabled": i.disabled }, "gs-manage-plan"])
    }, [
      L("div", Ou, [
        L("img", {
          alt: i.title,
          src: i.icon,
          class: "gs-manage-plan__icon"
        }, null, 8, Fu),
        L("div", Lu, [
          u(te, {
            bold: "",
            tag: "h2",
            variant: "title-1"
          }, {
            default: z(() => [
              K(ee(i.title), 1)
            ]),
            _: 1
          }),
          u(te, { variant: "big-description" }, {
            default: z(() => [
              Le(i.$slots, "description", {}, () => [
                K(ee(i.description), 1)
              ], !0)
            ]),
            _: 3
          })
        ])
      ]),
      u(at, {
        "full-width": a.value,
        icon: i.buttonIcon,
        type: "success",
        onClick: o
      }, {
        default: z(() => [
          K(ee(i.buttonLabel), 1)
        ]),
        _: 1
      }, 8, ["full-width", "icon"])
    ], 2));
  }
}), ao = /* @__PURE__ */ oe(Mu, [["__scopeId", "data-v-300940db"]]), Ru = { class: "gs-notification-bar" }, zu = { class: "gs-notification-content" }, Nu = ["alt", "src"], Du = { class: "gs-notification-text" }, Gu = /* @__PURE__ */ le({
  name: "GsNotificationBar",
  __name: "GsNotificationBar",
  props: {
    icon: { default: "" },
    title: { default: "" },
    description: { default: "" },
    buttonLabel: { default: "Action" },
    buttonIcon: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const n = t, a = j(!1), l = () => {
      a.value = window.innerWidth < 768;
    };
    Xe(() => {
      l(), window.addEventListener("resize", l);
    }), xt(() => {
      window.removeEventListener("resize", l);
    });
    const o = () => {
      n("button-click");
    };
    return (i, r) => (O(), D("article", Ru, [
      L("div", zu, [
        i.icon ? (O(), D("img", {
          key: 0,
          alt: i.title,
          src: i.icon,
          class: "gs-notification-icon"
        }, null, 8, Nu)) : fe("", !0),
        L("div", Du, [
          i.title ? (O(), ve(te, {
            key: 0,
            bold: "",
            color: "ui-white",
            tag: "h2",
            variant: "title-1"
          }, {
            default: z(() => [
              K(ee(i.title), 1)
            ]),
            _: 1
          })) : fe("", !0),
          i.description ? (O(), ve(te, {
            key: 1,
            class: "gs-notification-description",
            color: "ui-white",
            variant: "big-description"
          }, {
            default: z(() => [
              Le(i.$slots, "description", {}, () => [
                K(ee(i.description), 1)
              ], !0)
            ]),
            _: 3
          })) : fe("", !0)
        ])
      ]),
      u(at, {
        "full-width": a.value,
        icon: i.buttonIcon,
        type: "success",
        onClick: o
      }, {
        default: z(() => [
          K(ee(i.buttonLabel), 1)
        ]),
        _: 1
      }, 8, ["full-width", "icon"])
    ]));
  }
}), ju = /* @__PURE__ */ oe(Gu, [["__scopeId", "data-v-fa341cb3"]]), Hu = { class: "gs-plan-overview" }, Wu = { class: "gs-plan-overview__header" }, Uu = { class: "gs-plan-overview__content" }, qu = { class: "gs-plan-overview__features" }, Xu = { class: "gs-plan-overview__features-list" }, Yu = { class: "gs-plan-overview__billing" }, Ku = { class: "gs-plan-overview__payment-info" }, Zu = { class: "gs-plan-overview__price-details" }, Ju = { class: "gs-plan-overview__billing-cycle" }, Qu = /* @__PURE__ */ le({
  name: "GsPlanOverview",
  __name: "GsPlanOverview",
  props: {
    imageUrl: { default: "/placeholder-image.png" },
    title: { default: "Starter Plan - Monthly" },
    description: { default: "For companies just getting started on their positive impact journey." },
    tagText: { default: "Free trial" },
    showTag: { type: Boolean, default: !0 },
    features: { default: () => [
      "Create and manage your impact with vetted climate projects",
      "1 active user",
      "1 active app integration with basic automations",
      "Public profile, dynamic widgets and badges to showcase & share your impact",
      "Offset your team's carbon and plastic footprints",
      "Basic analytics to track your impact",
      "One additional tree planted free every month"
    ] },
    priceText: { default: "£5/month" },
    billingCycle: { default: "Oct 4, 2024 - Nov 3, 2024" },
    billingType: { default: "Monthly plan, paid monthly" },
    showTrialNotice: { type: Boolean, default: !0 },
    trialMessage: { default: "You're on a free trial of the <Plan_Name>. If you change your plan type during your trial it will end and you'll be charged." },
    onUpdatePaymentClick: { type: Function, default: () => {
    } },
    onManagePlanClick: { type: Function, default: () => {
    } }
  },
  setup(e) {
    return (t, n) => (O(), D("article", Hu, [
      L("header", Wu, [
        u(te, {
          bold: "",
          tag: "h1",
          variant: "title-2"
        }, {
          default: z(() => n[0] || (n[0] = [
            K("Your plan")
          ])),
          _: 1
        })
      ]),
      L("div", Uu, [
        u(ao, {
          description: t.description,
          "has-trial": t.showTag,
          icon: "",
          "image-url": t.imageUrl,
          "tag-text": t.tagText,
          title: t.title,
          onManageClick: t.onManagePlanClick
        }, null, 8, ["description", "has-trial", "image-url", "tag-text", "title", "onManageClick"]),
        L("section", qu, [
          u(te, {
            bold: "",
            tag: "h2",
            variant: "title-2"
          }, {
            default: z(() => n[1] || (n[1] = [
              K("Included in your plan")
            ])),
            _: 1
          }),
          L("ul", Xu, [
            (O(!0), D(de, null, Qt(t.features, (a, l) => (O(), D("li", { key: l }, [
              u(ut, {
                text: a,
                iconColor: "var(--ui-green)",
                mdiIcon: "mdi-check",
                tag: "p",
                textVariant: "body"
              }, null, 8, ["text"])
            ]))), 128))
          ])
        ]),
        L("section", Yu, [
          u(te, {
            bold: "",
            tag: "h2",
            variant: "title-2"
          }, {
            default: z(() => n[2] || (n[2] = [
              K("Billing and payment")
            ])),
            _: 1
          }),
          L("div", Ku, [
            u(ut, {
              iconAlt: "Stripe",
              iconPath: "/icons/stripe-card.svg",
              text: "Paid via Stripe",
              textVariant: "description"
            }),
            L("div", Zu, [
              u(ut, {
                text: t.priceText,
                iconPath: "/icons/money.svg",
                textVariant: "description"
              }, null, 8, ["text"]),
              L("div", Ju, [
                u(ut, {
                  iconPath: "/icons/calendar.svg",
                  text: "Current billing cycle:",
                  textVariant: "description"
                }),
                u(te, {
                  class: "gs-plan-overview__bold",
                  variant: "description"
                }, {
                  default: z(() => [
                    K(ee(t.billingCycle), 1)
                  ]),
                  _: 1
                }),
                u(te, { variant: "description" }, {
                  default: z(() => [
                    K(ee(t.billingType), 1)
                  ]),
                  _: 1
                })
              ]),
              u(at, {
                "full-width": "",
                type: "secondary",
                onClick: t.onUpdatePaymentClick
              }, {
                default: z(() => n[3] || (n[3] = [
                  K(" Update Payment ")
                ])),
                _: 1
              }, 8, ["onClick"])
            ])
          ])
        ])
      ]),
      t.showTrialNotice ? (O(), ve(eo, {
        key: 0,
        message: t.trialMessage,
        "full-width": "",
        type: "warning"
      }, null, 8, ["message"])) : fe("", !0)
    ]));
  }
}), ec = /* @__PURE__ */ oe(Qu, [["__scopeId", "data-v-1ba25112"]]), tc = { class: "gs-progress-bar-wrapper" }, nc = /* @__PURE__ */ le({
  name: "GsProgressBar",
  __name: "GsProgressBar",
  props: {
    modelValue: {},
    color: { default: "ui-emerald-green" },
    backgroundColor: { default: "ui-white" },
    showPercentage: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const t = (n) => n >= 50 ? "var(--ui-white)" : "var(--ui-black)";
    return (n, a) => (O(), D("div", tc, [
      u(re(Sl), {
        "bg-color": n.backgroundColor,
        color: n.color,
        height: n.height,
        "model-value": n.modelValue,
        class: "gs-progress-bar",
        rounded: ""
      }, On({ _: 2 }, [
        n.showPercentage ? {
          name: "default",
          fn: z(({ value: l }) => [
            u(te, {
              style: He({ color: t(l) }),
              class: "gs-progress-bar__text",
              variant: "caption"
            }, {
              default: z(() => [
                K(ee(Math.round(l)) + "% ", 1)
              ]),
              _: 2
            }, 1032, ["style"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["bg-color", "color", "height", "model-value"])
    ]));
  }
}), ac = /* @__PURE__ */ oe(nc, [["__scopeId", "data-v-28623be5"]]), lc = { class: "gs-project-filter" }, oc = ["onClick"], ic = /* @__PURE__ */ le({
  name: "GsProjectFilter",
  __name: "GsProjectFilter",
  props: {
    items: {},
    label: {}
  },
  emits: ["itemClick", "update:items"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = j([]);
    q(
      () => n.items,
      (i) => {
        l.value = JSON.parse(JSON.stringify(i));
      },
      { immediate: !0, deep: !0 }
    );
    const o = (i, r) => {
      const s = l.value.map((c, d) => ({
        ...c,
        selected: d === r ? !c.selected : !1
      }));
      l.value = s, a("itemClick", { ...i, selected: !i.selected }), a("update:items", s);
    };
    return (i, r) => (O(), D("div", lc, [
      u(te, {
        "font-color": "ui-white",
        variant: "body"
      }, {
        default: z(() => [
          K(ee(i.label), 1)
        ]),
        _: 1
      }),
      (O(!0), D(de, null, Qt(l.value, (s, c) => (O(), D("div", {
        key: c,
        class: "gs-project-filter__item",
        onClick: (d) => o(s, c)
      }, [
        u(St, {
          "background-color": s.selected ? "ui-black" : "gray-light-7C",
          icon: s.icon,
          "icon-size": 16,
          label: s.text,
          "border-color": "none",
          "font-color": "ui-white",
          "font-size": "description"
        }, null, 8, ["background-color", "icon", "label"])
      ], 8, oc))), 128))
    ]));
  }
}), rc = /* @__PURE__ */ oe(ic, [["__scopeId", "data-v-703929cc"]]), sc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_465_963)'%3e%3cpath%20d='M10%206L8.59003%207.41L13.17%2012L8.59003%2016.59L10%2018L16%2012L10%206Z'%20fill='%233B755F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_465_963'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", uc = { class: "image-wrapper" }, cc = ["alt", "src"], dc = { class: "content-wrapper" }, fc = { class: "card-header" }, vc = { class: "content-section" }, mc = { class: "card-footer" }, gc = { class: "location-wrapper" }, hc = { class: "location-icon" }, yc = ["src"], bc = {
  key: 1,
  fill: "none",
  height: "20",
  viewBox: "0 0 16 20",
  width: "16",
  xmlns: "http://www.w3.org/2000/svg"
}, pc = {
  key: 1,
  "aria-hidden": "true",
  class: "chevron-button",
  tabindex: "-1"
}, kc = /* @__PURE__ */ le({
  name: "GsProjectCardSelector",
  __name: "GsProjectCardSelector",
  props: {
    title: {},
    subtitle: {},
    description: {},
    location: {},
    imageUrl: {},
    imageAlt: { default: "" },
    tagBackgroundColor: { default: "ui-green" },
    tagFontColor: { default: void 0 },
    tagText: { default: "XXX impact created" },
    cardBackgroundColor: { default: "grey-scale-10" },
    locationIcon: { default: void 0 },
    variant: { default: "horizontal" },
    readMoreVariant: { default: "text" },
    enableHover: { type: Boolean, default: !1 }
  },
  emits: ["readMore"],
  setup(e, { emit: t }) {
    const n = t, a = () => {
      n("readMore");
    };
    return (l, o) => (O(), D("article", {
      class: xe([[
        `background-${l.cardBackgroundColor}`,
        `variant-${l.variant}`,
        "clickable",
        { "hover-enabled": l.enableHover }
      ], "project-card"]),
      onClick: a
    }, [
      L("div", uc, [
        L("img", {
          alt: l.imageAlt,
          src: l.imageUrl,
          class: "card-image"
        }, null, 8, cc)
      ]),
      L("div", dc, [
        l.variant === "compact" ? (O(), ve(St, {
          key: 0,
          "background-color": l.tagBackgroundColor,
          "font-color": l.tagFontColor,
          label: l.tagText,
          "border-color": "none",
          class: "compact-tag"
        }, null, 8, ["background-color", "font-color", "label"])) : fe("", !0),
        L("header", fc, [
          u(te, {
            bold: "",
            variant: "title-2"
          }, {
            default: z(() => [
              K(ee(l.title), 1)
            ]),
            _: 1
          }),
          l.variant === "horizontal" ? (O(), ve(St, {
            key: 0,
            "background-color": l.tagBackgroundColor,
            "font-color": l.tagFontColor,
            label: l.tagText,
            "border-color": "none"
          }, null, 8, ["background-color", "font-color", "label"])) : fe("", !0)
        ]),
        L("div", vc, [
          u(te, { variant: "description" }, {
            default: z(() => [
              K(ee(l.subtitle), 1)
            ]),
            _: 1
          }),
          u(te, { variant: "body" }, {
            default: z(() => [
              Le(l.$slots, "description", {}, () => [
                K(ee(l.description), 1)
              ], !0)
            ]),
            _: 3
          })
        ]),
        u(no, { color: "grey250" }),
        L("footer", mc, [
          L("div", gc, [
            L("div", hc, [
              l.locationIcon ? (O(), D("img", {
                key: 0,
                src: l.locationIcon,
                alt: "Location icon"
              }, null, 8, yc)) : (O(), D("svg", bc, o[0] || (o[0] = [
                L("path", {
                  "clip-rule": "evenodd",
                  d: "M8 0C11.7371 0 16 2.89412 16 8.41177C16 12.0824 13.3371 15.9529 8 20C2.66286 15.9529 0 12.0824 0 8.41177C0 2.89412 4.26286 0 8 0Z",
                  fill: "#1A975B",
                  "fill-rule": "evenodd"
                }, null, -1),
                L("path", {
                  d: "M11 7.41891C11 6.9672 10.7375 6.56786 10.3381 6.33218C10.5181 6.13579 10.625 5.88866 10.625 5.61861C10.625 4.98524 10.0381 4.47297 9.3125 4.47297C9.29375 4.47297 9.275 4.47461 9.25625 4.47624C9.29187 4.3715 9.3125 4.26184 9.3125 4.14564C9.3125 3.51227 8.72562 3 8 3C7.27437 3 6.6875 3.51227 6.6875 4.14564C6.6875 4.26021 6.70812 4.3715 6.74375 4.47624C6.725 4.47624 6.70625 4.47297 6.6875 4.47297C5.96188 4.47297 5.375 4.98524 5.375 5.61861C5.375 5.88866 5.48375 6.13742 5.66188 6.33218C5.2625 6.56786 5 6.96556 5 7.41891C5 7.87226 5.2625 8.26996 5.66188 8.50563C5.48188 8.70203 5.375 8.94916 5.375 9.2192C5.375 9.85258 5.96188 10.3648 6.6875 10.3648H9.3125C10.0381 10.3648 10.625 9.85258 10.625 9.2192C10.625 8.94916 10.5162 8.70039 10.3381 8.50563C10.7375 8.26996 11 7.87226 11 7.41891Z",
                  fill: "white"
                }, null, -1),
                L("path", {
                  d: "M8.36 12.7871V10.3648H8.12H7.88V12.7871C7.88 13.014 7.88 12.9998 8.12 12.9998C8.36 12.9998 8.36 13.014 8.36 12.7871Z",
                  fill: "white"
                }, null, -1)
              ])))
            ]),
            u(te, { variant: "body" }, {
              default: z(() => [
                Le(l.$slots, "location", {}, () => [
                  K(ee(l.location), 1)
                ], !0)
              ]),
              _: 3
            })
          ]),
          l.readMoreVariant === "text" ? (O(), ve(at, {
            key: 0,
            "aria-hidden": "true",
            tabindex: "-1",
            type: "link"
          }, {
            default: z(() => o[1] || (o[1] = [
              K(" Read more ")
            ])),
            _: 1
          })) : (O(), D("div", pc, o[2] || (o[2] = [
            L("img", {
              alt: "Chevron right",
              class: "chevron-icon",
              src: sc
            }, null, -1)
          ])))
        ])
      ])
    ], 2));
  }
}), Cc = /* @__PURE__ */ oe(kc, [["__scopeId", "data-v-62fe46c8"]]), wc = { class: "gs-submenu" }, Sc = { class: "gs-submenu__list" }, _c = ["onClick"], Vc = {
  key: 0,
  class: "gs-submenu__divider"
}, xc = /* @__PURE__ */ le({
  name: "GsSubmenu",
  __name: "GsSubmenu",
  props: {
    items: {}
  },
  emits: ["itemClick", "update:items"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = j([]);
    q(
      () => n.items,
      (i) => {
        l.value = JSON.parse(JSON.stringify(i));
      },
      { immediate: !0, deep: !0 }
    );
    const o = (i, r) => {
      const s = l.value.map((c, d) => ({
        ...c,
        selected: d === r
      }));
      l.value = s, a("itemClick", { ...i, selected: !0 }), a("update:items", s);
    };
    return (i, r) => (O(), D("nav", wc, [
      L("ul", Sc, [
        (O(!0), D(de, null, Qt(l.value, (s, c) => (O(), D("li", {
          key: c,
          class: xe([{ "gs-submenu__item--selected": s.selected }, "gs-submenu__item"]),
          onClick: (d) => o(s, c)
        }, [
          u(te, {
            class: xe({ "gs-submenu__text--unselected": !s.selected }),
            bold: "",
            tag: "span",
            variant: "description"
          }, {
            default: z(() => [
              K(ee(s.text), 1)
            ]),
            _: 2
          }, 1032, ["class"]),
          s.selected ? (O(), D("div", Vc)) : fe("", !0)
        ], 10, _c))), 128))
      ])
    ]));
  }
}), Pc = /* @__PURE__ */ oe(xc, [["__scopeId", "data-v-4d278ede"]]), Bc = /* @__PURE__ */ le({
  name: "GsTextField",
  __name: "GsTextField",
  props: {
    modelValue: { default: "" },
    label: {},
    placeholder: {},
    description: {},
    error: { type: Boolean, default: !1 },
    errorMessage: {},
    success: { type: Boolean, default: !1 },
    successMessage: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (O(), ve(re(Kl), {
      disabled: t.disabled,
      error: t.error,
      "error-messages": t.error ? t.errorMessage : void 0,
      label: t.label,
      messages: !t.error && !t.success ? t.description : t.success ? t.successMessage : void 0,
      "model-value": t.modelValue,
      placeholder: t.placeholder,
      success: t.success,
      class: "gs-text-field",
      density: "comfortable",
      variant: "outlined",
      "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a))
    }, null, 8, ["disabled", "error", "error-messages", "label", "messages", "model-value", "placeholder", "success"]));
  }
}), Ic = /* @__PURE__ */ oe(Bc, [["__scopeId", "data-v-efca6638"]]), Ec = { class: "gs-verification" }, $c = { class: "gs-verification__grid" }, Ac = /* @__PURE__ */ le({
  name: "GsVerification",
  __name: "GsVerification",
  props: {
    title: { default: "Verification" },
    items: {}
  },
  setup(e) {
    const t = j(!1), n = () => {
      t.value = window.innerWidth <= 500;
    };
    Xe(() => {
      n(), window.addEventListener("resize", n);
    }), xt(() => {
      window.removeEventListener("resize", n);
    });
    const a = f(() => t.value ? "body" : "description");
    return (l, o) => (O(), D("section", Ec, [
      u(te, {
        bold: "",
        tag: "h3",
        variant: "description"
      }, {
        default: z(() => [
          K(ee(l.title), 1)
        ]),
        _: 1
      }),
      L("div", $c, [
        (O(!0), D(de, null, Qt(l.items, (i, r) => (O(), D("div", {
          key: r,
          class: "gs-verification__item"
        }, [
          u(ut, {
            "icon-path": i.iconPath,
            text: i.text,
            "text-variant": a.value
          }, null, 8, ["icon-path", "text", "text-variant"])
        ]))), 128))
      ])
    ]));
  }
}), Tc = /* @__PURE__ */ oe(Ac, [["__scopeId", "data-v-c2101c11"]]), Oc = {
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
}, Fc = yo({
  icons: {
    defaultSet: "mdi",
    aliases: _i,
    sets: {
      mdi: Vi
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: Oc
    }
  }
});
function Lc(e) {
  e.use(Fc);
}
const Mc = {
  GsButton: at,
  GsAlertBar: eo,
  GsColorPicker: mu,
  GsCardSelector: ru,
  GsCheckbox: uu,
  GsDivider: no,
  GsFloatingActionMenu: ku,
  GsIconWithText: ut,
  GsIntegrationSelector: Tu,
  GsManagePlan: ao,
  GsNotificationBar: ju,
  GsPlanOverview: ec,
  GsProgressBar: ac,
  GsProjectFilter: rc,
  GsProjectCardSelector: Cc,
  GsRadioButton: to,
  GsSubmenu: Pc,
  GsTags: St,
  GsTextField: Ic,
  GsTypography: te,
  GsVerification: Tc
}, Nc = {
  install(e) {
    Lc(e);
    for (const [t, n] of Object.entries(Mc))
      e.component(t, n);
  }
};
export {
  eo as GsAlertBar,
  at as GsButton,
  ru as GsCardSelector,
  uu as GsCheckbox,
  mu as GsColorPicker,
  no as GsDivider,
  ku as GsFloatingActionMenu,
  ut as GsIconWithText,
  Tu as GsIntegrationSelector,
  ao as GsManagePlan,
  ju as GsNotificationBar,
  ec as GsPlanOverview,
  ac as GsProgressBar,
  Cc as GsProjectCardSelector,
  rc as GsProjectFilter,
  to as GsRadioButton,
  Pc as GsSubmenu,
  St as GsTags,
  Ic as GsTextField,
  te as GsTypography,
  Tc as GsVerification,
  Nc as default
};
