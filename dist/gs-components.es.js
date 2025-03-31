import { reactive as Ke, computed as f, watchEffect as J, toRefs as Ze, shallowRef as Q, Fragment as Je, warn as Qe, getCurrentInstance as et, inject as ee, provide as we, defineComponent as te, ref as A, onBeforeUnmount as _e, watch as ke, readonly as tt, isRef as nt, h as st, unref as N, createVNode as m, mergeProps as rt, toRef as G, Text as it, withDirectives as at, createBlock as H, openBlock as w, resolveDynamicComponent as ot, normalizeStyle as lt, normalizeClass as Se, withCtx as ie, createCommentVNode as O, createElementBlock as Y, createTextVNode as ut, toDisplayString as ct, renderSlot as dt, createElementVNode as W } from "vue";
import { createVuetify as ft } from "vuetify";
function y(e, t) {
  return (n) => Object.keys(e).reduce((s, r) => {
    const a = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : {
      type: e[r]
    };
    return n && r in n ? s[r] = {
      ...a,
      default: n[r]
    } : s[r] = a, t && !s[r].source && (s[r].source = t), s;
  }, {});
}
const xe = y({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Ee = typeof window < "u", mt = Ee && "IntersectionObserver" in window;
function _(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function pt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ae(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function gt(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const oe = Object.freeze({
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
function j(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function vt(e, t) {
  const n = {};
  for (const s of t)
    Object.hasOwn(e, s) && (n[s] = e[s]);
  return n;
}
function le(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function ht(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let s = 0;
  for (; s < e.length; )
    n.push(e.substr(s, t)), s += t;
  return n;
}
function Te() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const s = {};
  for (const r in e)
    s[r] = e[r];
  for (const r in t) {
    const i = e[r], a = t[r];
    if (ae(i) && ae(a)) {
      s[r] = Te(i, a, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(a)) {
      s[r] = n(i, a);
      continue;
    }
    s[r] = a;
  }
  return s;
}
function Be(e) {
  return e.map((t) => t.type === Je ? Be(t.children) : t).flat();
}
function k() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (k.cache.has(e)) return k.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return k.cache.set(e, t), t;
}
k.cache = /* @__PURE__ */ new Map();
function Fe(e) {
  const t = Ke({}), n = f(e);
  return J(() => {
    for (const s in n.value)
      t[s] = n.value[s];
  }, {
    flush: "sync"
  }), Ze(t);
}
function yt(e, t) {
  return e.includes(t);
}
function bt() {
  const e = Q(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => gt(e.value)
  }), t;
}
const C = 2.4, ue = 0.2126729, ce = 0.7151522, de = 0.072175, Ct = 0.55, wt = 0.58, _t = 0.57, kt = 0.62, z = 0.03, fe = 1.45, St = 5e-4, xt = 1.25, Et = 1.25, Tt = 0.078, me = 12.82051282051282, L = 0.06, Bt = 1e-3;
function pe(e, t) {
  const n = (e.r / 255) ** C, s = (e.g / 255) ** C, r = (e.b / 255) ** C, i = (t.r / 255) ** C, a = (t.g / 255) ** C, c = (t.b / 255) ** C;
  let o = n * ue + s * ce + r * de, l = i * ue + a * ce + c * de;
  if (o <= z && (o += (z - o) ** fe), l <= z && (l += (z - l) ** fe), Math.abs(l - o) < St) return 0;
  let d;
  if (l > o) {
    const u = (l ** Ct - o ** wt) * xt;
    d = u < Bt ? 0 : u < Tt ? u - u * me * L : u - L;
  } else {
    const u = (l ** kt - o ** _t) * Et;
    d = u > -1e-3 ? 0 : u > -0.078 ? u - u * me * L : u + L;
  }
  return d * 100;
}
function T(e) {
  Qe(`Vuetify: ${e}`);
}
function U(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Ft(e) {
  return U(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const ge = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, $t = {
  rgb: (e, t, n, s) => ({
    r: e,
    g: t,
    b: n,
    a: s
  }),
  rgba: (e, t, n, s) => ({
    r: e,
    g: t,
    b: n,
    a: s
  }),
  hsl: (e, t, n, s) => ve({
    h: e,
    s: t,
    l: n,
    a: s
  }),
  hsla: (e, t, n, s) => ve({
    h: e,
    s: t,
    l: n,
    a: s
  }),
  hsv: (e, t, n, s) => B({
    h: e,
    s: t,
    v: n,
    a: s
  }),
  hsva: (e, t, n, s) => B({
    h: e,
    s: t,
    v: n,
    a: s
  })
};
function E(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && T(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && ge.test(e)) {
    const {
      groups: t
    } = e.match(ge), {
      fn: n,
      values: s
    } = t, r = s.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return $t[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((s) => s + s).join("") : [6, 8].includes(t.length) || T(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && T(`'${e}' is not a valid hex(a) color`), It(t);
  } else if (typeof e == "object") {
    if (j(e, ["r", "g", "b"]))
      return e;
    if (j(e, ["h", "s", "l"]))
      return B($e(e));
    if (j(e, ["h", "s", "v"]))
      return B(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function B(e) {
  const {
    h: t,
    s: n,
    v: s,
    a: r
  } = e, i = (c) => {
    const o = (c + t / 60) % 6;
    return s - s * n * Math.max(Math.min(o, 4 - o, 1), 0);
  }, a = [i(5), i(3), i(1)].map((c) => Math.round(c * 255));
  return {
    r: a[0],
    g: a[1],
    b: a[2],
    a: r
  };
}
function ve(e) {
  return B($e(e));
}
function $e(e) {
  const {
    h: t,
    s: n,
    l: s,
    a: r
  } = e, i = s + n * Math.min(s, 1 - s), a = i === 0 ? 0 : 2 - 2 * s / i;
  return {
    h: t,
    s: a,
    v: i,
    a: r
  };
}
function It(e) {
  e = Rt(e);
  let [t, n, s, r] = ht(e, 2).map((i) => parseInt(i, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: s,
    a: r
  };
}
function Rt(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = le(le(e, 6), 8, "F")), e;
}
function zt(e) {
  const t = Math.abs(pe(E(0), E(e)));
  return Math.abs(pe(E(16777215), E(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function I(e, t) {
  const n = et();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Lt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = I(e).type;
  return k((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : I("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const X = Symbol.for("vuetify:defaults");
function Ie() {
  const e = ee(X);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Nt(e, t) {
  var n, s;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((s = e.props) == null ? void 0 : s[k(t)]) < "u";
}
function Pt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ie();
  const s = I("useDefaults");
  if (t = t ?? s.type.name ?? s.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = f(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), i = new Proxy(e, {
    get(o, l) {
      var u, p, g, h, R, S, b;
      const d = Reflect.get(o, l);
      return l === "class" || l === "style" ? [(u = r.value) == null ? void 0 : u[l], d].filter((x) => x != null) : typeof l == "string" && !Nt(s.vnode, l) ? ((p = r.value) == null ? void 0 : p[l]) !== void 0 ? (g = r.value) == null ? void 0 : g[l] : ((R = (h = n.value) == null ? void 0 : h.global) == null ? void 0 : R[l]) !== void 0 ? (b = (S = n.value) == null ? void 0 : S.global) == null ? void 0 : b[l] : d : d;
    }
  }), a = Q();
  J(() => {
    if (r.value) {
      const o = Object.entries(r.value).filter((l) => {
        let [d] = l;
        return d.startsWith(d[0].toUpperCase());
      });
      a.value = o.length ? Object.fromEntries(o) : void 0;
    } else
      a.value = void 0;
  });
  function c() {
    const o = Ot(X, s);
    we(X, f(() => a.value ? Te((o == null ? void 0 : o.value) ?? {}, a.value) : o == null ? void 0 : o.value));
  }
  return {
    props: i,
    provideSubDefaults: c
  };
}
function V(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return T("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = y(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(s) {
      return vt(s, t);
    }, e.props._as = String, e.setup = function(s, r) {
      const i = Ie();
      if (!i.value) return e._setup(s, r);
      const {
        props: a,
        provideSubDefaults: c
      } = Pt(s, s._as ?? e.name, i), o = e._setup(a, r);
      return c(), o;
    };
  }
  return e;
}
function ne() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? V : te)(t);
}
function Re(e) {
  const t = I("useRender");
  t.render = e;
}
function At(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = bt(), s = A();
  if (Ee) {
    const r = new ResizeObserver((i) => {
      i.length && (t === "content" ? s.value = i[0].contentRect : s.value = i[0].target.getBoundingClientRect());
    });
    _e(() => {
      r.disconnect();
    }), ke(() => n.el, (i, a) => {
      a && (r.unobserve(a), s.value = void 0), i && r.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: tt(s)
  };
}
const he = Symbol.for("vuetify:theme"), ze = y({
  theme: String
}, "theme");
function Le(e) {
  I("provideTheme");
  const t = ee(he, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), s = f(() => t.themes.value[n.value]), r = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: s,
    themeClasses: r
  };
  return we(he, i), i;
}
const Oe = y({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
function Vt(e) {
  return Fe(() => {
    const t = [], n = {};
    if (e.value.background)
      if (U(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Ft(e.value.background)) {
          const s = E(e.value.background);
          if (s.a == null || s.a === 1) {
            const r = zt(s);
            n.color = r, n.caretColor = r;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (U(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function q(e, t) {
  const n = f(() => ({
    text: nt(e) ? e.value : null
  })), {
    colorClasses: s,
    colorStyles: r
  } = Vt(n);
  return {
    textColorClasses: s,
    textColorStyles: r
  };
}
const Dt = {
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
}, Mt = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => st(jt, {
    ...e,
    class: "mdi"
  })
}, Ne = [String, Function, Object, Array], Ht = Symbol.for("vuetify:icons"), D = y({
  icon: {
    type: Ne
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), ye = ne()({
  name: "VComponentIcon",
  props: D(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const s = e.icon;
      return m(e.tag, null, {
        default: () => {
          var r;
          return [e.icon ? m(s, null, null) : (r = n.default) == null ? void 0 : r.call(n)];
        }
      });
    };
  }
}), Wt = V({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: D(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => m(e.tag, rt(n, {
      style: null
    }), {
      default: () => [m("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((s) => Array.isArray(s) ? m("path", {
        d: s[0],
        "fill-opacity": s[1]
      }, null) : m("path", {
        d: s
      }, null)) : m("path", {
        d: e.icon
      }, null)])]
    });
  }
});
V({
  name: "VLigatureIcon",
  props: D(),
  setup(e) {
    return () => m(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const jt = V({
  name: "VClassIcon",
  props: D(),
  setup(e) {
    return () => m(e.tag, {
      class: e.icon
    }, null);
  }
}), Gt = (e) => {
  const t = ee(Ht);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: f(() => {
      var o;
      const s = N(e);
      if (!s) return {
        component: ye
      };
      let r = s;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = (o = t.aliases) == null ? void 0 : o[r.slice(1)])), r || T(`Could not find aliased icon "${s}"`), Array.isArray(r))
        return {
          component: Wt,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: ye,
          icon: r
        };
      const i = Object.keys(t.sets).find((l) => typeof r == "string" && r.startsWith(`${l}:`)), a = i ? r.slice(i.length + 1) : r;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: a
      };
    })
  };
}, Yt = ["x-small", "small", "default", "large", "x-large"], Pe = y({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt();
  return Fe(() => {
    let n, s;
    return yt(Yt, e.size) ? n = `${t}--size-${e.size}` : e.size && (s = {
      width: _(e.size),
      height: _(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: s
    };
  });
}
const Ut = y({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Ne,
  ...xe(),
  ...Pe(),
  ...Oe({
    tag: "i"
  }),
  ...ze()
}, "VIcon"), Ve = ne()({
  name: "VIcon",
  props: Ut(),
  setup(e, t) {
    let {
      attrs: n,
      slots: s
    } = t;
    const r = A(), {
      themeClasses: i
    } = Le(e), {
      iconData: a
    } = Gt(f(() => r.value || e.icon)), {
      sizeClasses: c
    } = Ae(e), {
      textColorClasses: o,
      textColorStyles: l
    } = q(G(e, "color"));
    return Re(() => {
      var p, g;
      const d = (p = s.default) == null ? void 0 : p.call(s);
      d && (r.value = (g = Be(d).filter((h) => h.type === it && h.children && typeof h.children == "string")[0]) == null ? void 0 : g.children);
      const u = !!(n.onClick || n.onClickOnce);
      return m(a.value.component, {
        tag: e.tag,
        icon: a.value.icon,
        class: ["v-icon", "notranslate", i.value, c.value, o.value, {
          "v-icon--clickable": u,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [c.value ? void 0 : {
          fontSize: _(e.size),
          height: _(e.size),
          width: _(e.size)
        }, l.value, e.style],
        role: u ? "button" : void 0,
        "aria-hidden": !u,
        tabindex: u ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function Xt(e, t) {
  const n = A(), s = Q(!1);
  if (mt) {
    const r = new IntersectionObserver((i) => {
      s.value = !!i.find((a) => a.isIntersecting);
    }, t);
    _e(() => {
      r.disconnect();
    }), ke(n, (i, a) => {
      a && (r.unobserve(a), s.value = !1), i && r.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: s
  };
}
const qt = y({
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
  ...xe(),
  ...Pe(),
  ...Oe({
    tag: "div"
  }),
  ...ze()
}, "VProgressCircular"), Kt = ne()({
  name: "VProgressCircular",
  props: qt(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const s = 20, r = 2 * Math.PI * s, i = A(), {
      themeClasses: a
    } = Le(e), {
      sizeClasses: c,
      sizeStyles: o
    } = Ae(e), {
      textColorClasses: l,
      textColorStyles: d
    } = q(G(e, "color")), {
      textColorClasses: u,
      textColorStyles: p
    } = q(G(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: h
    } = Xt(), {
      resizeRef: R,
      contentRect: S
    } = At(), b = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = f(() => Number(e.width)), se = f(() => o.value ? Number(e.size) : S.value ? S.value.width : Math.max(x.value, 32)), M = f(() => s / (1 - x.value / se.value) * 2), re = f(() => x.value / se.value * M.value), qe = f(() => _((100 - b.value) / 100 * r));
    return J(() => {
      g.value = i.value, R.value = i.value;
    }), Re(() => m(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": h.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, a.value, c.value, l.value, e.class],
      style: [o.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : b.value
    }, {
      default: () => [m("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${M.value} ${M.value}`
      }, [m("circle", {
        class: ["v-progress-circular__underlay", u.value],
        style: p.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: s,
        "stroke-width": re.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), m("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: s,
        "stroke-width": re.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": qe.value
      }, null)]), n.default && m("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: b.value
      })])]
    })), {};
  }
}), K = Symbol("rippleStop"), Zt = 80;
function be(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Z(e) {
  return e.constructor.name === "TouchEvent";
}
function De(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Jt = function(e, t) {
  var u;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = 0, r = 0;
  if (!De(e)) {
    const p = t.getBoundingClientRect(), g = Z(e) ? e.touches[e.touches.length - 1] : e;
    s = g.clientX - p.left, r = g.clientY - p.top;
  }
  let i = 0, a = 0.3;
  (u = t._ripple) != null && u.circle ? (a = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((s - i) ** 2 + (r - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const c = `${(t.clientWidth - i * 2) / 2}px`, o = `${(t.clientHeight - i * 2) / 2}px`, l = n.center ? c : `${s - i}px`, d = n.center ? o : `${r - i}px`;
  return {
    radius: i,
    scale: a,
    x: l,
    y: d,
    centerX: c,
    centerY: o
  };
}, P = {
  /* eslint-disable max-statements */
  show(e, t) {
    var g;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
      return;
    const s = document.createElement("span"), r = document.createElement("span");
    s.appendChild(r), s.className = "v-ripple__container", n.class && (s.className += ` ${n.class}`);
    const {
      radius: i,
      scale: a,
      x: c,
      y: o,
      centerX: l,
      centerY: d
    } = Jt(e, t, n), u = `${i * 2}px`;
    r.className = "v-ripple__animation", r.style.width = u, r.style.height = u, t.appendChild(s);
    const p = window.getComputedStyle(t);
    p && p.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), be(r, `translate(${c}, ${o}) scale3d(${a},${a},${a})`), r.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), be(r, `translate(${l}, ${d}) scale3d(1,1,1)`);
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
    const s = performance.now() - Number(n.dataset.activated), r = Math.max(250 - s, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var c;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((c = n.parentNode) == null ? void 0 : c.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, r);
  }
};
function Me(e) {
  return typeof e > "u" || !!e;
}
function F(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[K])) {
    if (e[K] = !0, Z(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || De(e), n._ripple.class && (t.class = n._ripple.class), Z(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        P.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var s;
        (s = n == null ? void 0 : n._ripple) != null && s.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Zt);
    } else
      P.show(e, n, t);
  }
}
function Ce(e) {
  e[K] = !0;
}
function v(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        v(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), P.hide(t);
  }
}
function He(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let $ = !1;
function We(e) {
  !$ && (e.keyCode === oe.enter || e.keyCode === oe.space) && ($ = !0, F(e));
}
function je(e) {
  $ = !1, v(e);
}
function Ge(e) {
  $ && ($ = !1, v(e));
}
function Ye(e, t, n) {
  const {
    value: s,
    modifiers: r
  } = t, i = Me(s);
  if (i || P.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = r.center, e._ripple.circle = r.circle, pt(s) && s.class && (e._ripple.class = s.class), i && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", Ce, {
        passive: !0
      }), e.addEventListener("mousedown", Ce);
      return;
    }
    e.addEventListener("touchstart", F, {
      passive: !0
    }), e.addEventListener("touchend", v, {
      passive: !0
    }), e.addEventListener("touchmove", He, {
      passive: !0
    }), e.addEventListener("touchcancel", v), e.addEventListener("mousedown", F), e.addEventListener("mouseup", v), e.addEventListener("mouseleave", v), e.addEventListener("keydown", We), e.addEventListener("keyup", je), e.addEventListener("blur", Ge), e.addEventListener("dragstart", v, {
      passive: !0
    });
  } else !i && n && Ue(e);
}
function Ue(e) {
  e.removeEventListener("mousedown", F), e.removeEventListener("touchstart", F), e.removeEventListener("touchend", v), e.removeEventListener("touchmove", He), e.removeEventListener("touchcancel", v), e.removeEventListener("mouseup", v), e.removeEventListener("mouseleave", v), e.removeEventListener("keydown", We), e.removeEventListener("keyup", je), e.removeEventListener("dragstart", v), e.removeEventListener("blur", Ge);
}
function Qt(e, t) {
  Ye(e, t, !1);
}
function en(e) {
  delete e._ripple, Ue(e);
}
function tn(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Me(t.oldValue);
  Ye(e, t, n);
}
const nn = {
  mounted: Qt,
  unmounted: en,
  updated: tn
}, sn = {
  key: 1,
  class: "text"
}, rn = /* @__PURE__ */ te({
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
    const t = e, n = f(() => t.href ? "a" : t.tag || "button"), s = f(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), r = f(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), i = f(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (a, c) => at((w(), H(ot(n.value), {
      class: Se(r.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      target: t.target,
      style: lt({ width: a.width + "px" }),
      type: "button"
    }, {
      default: ie(() => [
        t.icon && !t.loading ? (w(), H(N(Ve), {
          key: 0,
          class: "icon"
        }, {
          default: ie(() => [
            ut(ct(t.icon), 1)
          ]),
          _: 1
        })) : O("", !0),
        a.$slots.default ? (w(), Y("span", sn, [
          dt(a.$slots, "default", {}, void 0, !0)
        ])) : O("", !0),
        t.loading ? (w(), H(N(Kt), {
          key: 2,
          class: "loader",
          size: i.value,
          indeterminate: "",
          color: "gray"
        }, null, 8, ["size"])) : O("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "target", "style"])), [
      [nn, s.value]
    ]);
  }
}), Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, an = /* @__PURE__ */ Xe(rn, [["__scopeId", "data-v-eabf862e"]]), on = { class: "d-flex" }, ln = { class: "d-flex flex-column" }, un = ["innerHTML"], cn = ["innerHTML"], dn = /* @__PURE__ */ te({
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
    return (s, r) => (w(), Y("div", {
      class: Se(n.value),
      role: "alert"
    }, [
      W("div", on, [
        m(N(Ve), {
          icon: "mdi-information-outline",
          class: "icon me-3",
          size: "16"
        }),
        W("div", ln, [
          s.title ? (w(), Y("span", {
            key: 0,
            class: "title font-weight-bold",
            innerHTML: s.title
          }, null, 8, un)) : O("", !0),
          W("span", {
            class: "message",
            innerHTML: s.message
          }, null, 8, cn)
        ])
      ])
    ], 2));
  }
}), fn = /* @__PURE__ */ Xe(dn, [["__scopeId", "data-v-ec8eae11"]]), mn = {
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
}, pn = ft({
  icons: {
    defaultSet: "mdi",
    aliases: Dt,
    sets: {
      mdi: Mt
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: mn
    }
  }
});
function gn(e) {
  e.use(pn);
}
const vn = {
  GsButton: an,
  GsAlertBar: fn
}, bn = {
  install(e) {
    gn(e);
    for (const [t, n] of Object.entries(vn))
      e.component(t, n);
  }
};
export {
  fn as GsAlertBar,
  an as GsButton,
  bn as default
};
