import { reactive as et, computed as d, watchEffect as se, toRefs as tt, shallowRef as re, Fragment as ie, warn as nt, getCurrentInstance as st, inject as ae, provide as Ee, defineComponent as $, ref as H, onBeforeUnmount as xe, watch as Be, readonly as rt, isRef as it, h as at, unref as G, createVNode as m, mergeProps as ot, toRef as Z, Text as lt, createElementBlock as y, openBlock as p, normalizeClass as j, createElementVNode as C, createCommentVNode as F, withDirectives as ut, createBlock as D, resolveDynamicComponent as ct, normalizeStyle as M, withCtx as de, createTextVNode as dt, toDisplayString as Y, renderSlot as ft, renderList as Fe, withModifiers as mt } from "vue";
import { createVuetify as pt } from "vuetify";
function _(e, t) {
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
const Ie = _({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Re = typeof window < "u", gt = Re && "IntersectionObserver" in window;
function S(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function vt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function fe(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function ht(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const me = Object.freeze({
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
function K(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function yt(e, t) {
  const n = {};
  for (const s of t)
    Object.hasOwn(e, s) && (n[s] = e[s]);
  return n;
}
function pe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let s = 0;
  for (; s < e.length; )
    n.push(e.substr(s, t)), s += t;
  return n;
}
function ze() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const s = {};
  for (const r in e)
    s[r] = e[r];
  for (const r in t) {
    const i = e[r], a = t[r];
    if (fe(i) && fe(a)) {
      s[r] = ze(i, a, n);
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
function Le(e) {
  return e.map((t) => t.type === ie ? Le(t.children) : t).flat();
}
function T() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (T.cache.has(e)) return T.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return T.cache.set(e, t), t;
}
T.cache = /* @__PURE__ */ new Map();
function Ve(e) {
  const t = et({}), n = d(e);
  return se(() => {
    for (const s in n.value)
      t[s] = n.value[s];
  }, {
    flush: "sync"
  }), tt(t);
}
function _t(e, t) {
  return e.includes(t);
}
function Ct() {
  const e = re(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => ht(e.value)
  }), t;
}
const k = 2.4, ge = 0.2126729, ve = 0.7151522, he = 0.072175, wt = 0.55, kt = 0.58, St = 0.57, Tt = 0.62, A = 0.03, ye = 1.45, $t = 5e-4, Et = 1.25, xt = 1.25, Bt = 0.078, be = 12.82051282051282, P = 0.06, Ft = 1e-3;
function _e(e, t) {
  const n = (e.r / 255) ** k, s = (e.g / 255) ** k, r = (e.b / 255) ** k, i = (t.r / 255) ** k, a = (t.g / 255) ** k, u = (t.b / 255) ** k;
  let o = n * ge + s * ve + r * he, l = i * ge + a * ve + u * he;
  if (o <= A && (o += (A - o) ** ye), l <= A && (l += (A - l) ** ye), Math.abs(l - o) < $t) return 0;
  let f;
  if (l > o) {
    const c = (l ** wt - o ** kt) * Et;
    f = c < Ft ? 0 : c < Bt ? c - c * be * P : c - P;
  } else {
    const c = (l ** Tt - o ** St) * xt;
    f = c > -1e-3 ? 0 : c > -0.078 ? c - c * be * P : c + P;
  }
  return f * 100;
}
function I(e) {
  nt(`Vuetify: ${e}`);
}
function J(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function It(e) {
  return J(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ce = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Rt = {
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
  hsl: (e, t, n, s) => we({
    h: e,
    s: t,
    l: n,
    a: s
  }),
  hsla: (e, t, n, s) => we({
    h: e,
    s: t,
    l: n,
    a: s
  }),
  hsv: (e, t, n, s) => R({
    h: e,
    s: t,
    v: n,
    a: s
  }),
  hsva: (e, t, n, s) => R({
    h: e,
    s: t,
    v: n,
    a: s
  })
};
function B(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && I(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Ce.test(e)) {
    const {
      groups: t
    } = e.match(Ce), {
      fn: n,
      values: s
    } = t, r = s.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Rt[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((s) => s + s).join("") : [6, 8].includes(t.length) || I(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && I(`'${e}' is not a valid hex(a) color`), zt(t);
  } else if (typeof e == "object") {
    if (K(e, ["r", "g", "b"]))
      return e;
    if (K(e, ["h", "s", "l"]))
      return R(Oe(e));
    if (K(e, ["h", "s", "v"]))
      return R(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function R(e) {
  const {
    h: t,
    s: n,
    v: s,
    a: r
  } = e, i = (u) => {
    const o = (u + t / 60) % 6;
    return s - s * n * Math.max(Math.min(o, 4 - o, 1), 0);
  }, a = [i(5), i(3), i(1)].map((u) => Math.round(u * 255));
  return {
    r: a[0],
    g: a[1],
    b: a[2],
    a: r
  };
}
function we(e) {
  return R(Oe(e));
}
function Oe(e) {
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
function zt(e) {
  e = Lt(e);
  let [t, n, s, r] = bt(e, 2).map((i) => parseInt(i, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: s,
    a: r
  };
}
function Lt(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = pe(pe(e, 6), 8, "F")), e;
}
function Vt(e) {
  const t = Math.abs(_e(B(0), B(e)));
  return Math.abs(_e(B(16777215), B(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function V(e, t) {
  const n = st();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = V(e).type;
  return T((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : V("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Q = Symbol.for("vuetify:defaults");
function Ne() {
  const e = ae(Q);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function At(e, t) {
  var n, s;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((s = e.props) == null ? void 0 : s[T(t)]) < "u";
}
function Pt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ne();
  const s = V("useDefaults");
  if (t = t ?? s.type.name ?? s.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = d(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), i = new Proxy(e, {
    get(o, l) {
      var c, g, v, b, N, E, w;
      const f = Reflect.get(o, l);
      return l === "class" || l === "style" ? [(c = r.value) == null ? void 0 : c[l], f].filter((x) => x != null) : typeof l == "string" && !At(s.vnode, l) ? ((g = r.value) == null ? void 0 : g[l]) !== void 0 ? (v = r.value) == null ? void 0 : v[l] : ((N = (b = n.value) == null ? void 0 : b.global) == null ? void 0 : N[l]) !== void 0 ? (w = (E = n.value) == null ? void 0 : E.global) == null ? void 0 : w[l] : f : f;
    }
  }), a = re();
  se(() => {
    if (r.value) {
      const o = Object.entries(r.value).filter((l) => {
        let [f] = l;
        return f.startsWith(f[0].toUpperCase());
      });
      a.value = o.length ? Object.fromEntries(o) : void 0;
    } else
      a.value = void 0;
  });
  function u() {
    const o = Nt(Q, s);
    Ee(Q, d(() => a.value ? ze((o == null ? void 0 : o.value) ?? {}, a.value) : o == null ? void 0 : o.value));
  }
  return {
    props: i,
    provideSubDefaults: u
  };
}
function q(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return I("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = _(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(s) {
      return yt(s, t);
    }, e.props._as = String, e.setup = function(s, r) {
      const i = Ne();
      if (!i.value) return e._setup(s, r);
      const {
        props: a,
        provideSubDefaults: u
      } = Pt(s, s._as ?? e.name, i), o = e._setup(a, r);
      return u(), o;
    };
  }
  return e;
}
function oe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? q : $)(t);
}
function Ae(e) {
  const t = V("useRender");
  t.render = e;
}
function Dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Ct(), s = H();
  if (Re) {
    const r = new ResizeObserver((i) => {
      i.length && (t === "content" ? s.value = i[0].contentRect : s.value = i[0].target.getBoundingClientRect());
    });
    xe(() => {
      r.disconnect();
    }), Be(() => n.el, (i, a) => {
      a && (r.unobserve(a), s.value = void 0), i && r.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: rt(s)
  };
}
const ke = Symbol.for("vuetify:theme"), Pe = _({
  theme: String
}, "theme");
function De(e) {
  V("provideTheme");
  const t = ae(ke, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = d(() => e.theme ?? t.name.value), s = d(() => t.themes.value[n.value]), r = d(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: s,
    themeClasses: r
  };
  return Ee(ke, i), i;
}
const Me = _({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
function Mt(e) {
  return Ve(() => {
    const t = [], n = {};
    if (e.value.background)
      if (J(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && It(e.value.background)) {
          const s = B(e.value.background);
          if (s.a == null || s.a === 1) {
            const r = Vt(s);
            n.color = r, n.caretColor = r;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (J(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function ee(e, t) {
  const n = d(() => ({
    text: it(e) ? e.value : null
  })), {
    colorClasses: s,
    colorStyles: r
  } = Mt(n);
  return {
    textColorClasses: s,
    textColorStyles: r
  };
}
const Gt = {
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
}, Wt = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => at(Yt, {
    ...e,
    class: "mdi"
  })
}, Ge = [String, Function, Object, Array], Ht = Symbol.for("vuetify:icons"), U = _({
  icon: {
    type: Ge
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Se = oe()({
  name: "VComponentIcon",
  props: U(),
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
}), jt = q({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: U(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => m(e.tag, ot(n, {
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
q({
  name: "VLigatureIcon",
  props: U(),
  setup(e) {
    return () => m(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Yt = q({
  name: "VClassIcon",
  props: U(),
  setup(e) {
    return () => m(e.tag, {
      class: e.icon
    }, null);
  }
}), qt = (e) => {
  const t = ae(Ht);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: d(() => {
      var o;
      const s = G(e);
      if (!s) return {
        component: Se
      };
      let r = s;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = (o = t.aliases) == null ? void 0 : o[r.slice(1)])), r || I(`Could not find aliased icon "${s}"`), Array.isArray(r))
        return {
          component: jt,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: Se,
          icon: r
        };
      const i = Object.keys(t.sets).find((l) => typeof r == "string" && r.startsWith(`${l}:`)), a = i ? r.slice(i.length + 1) : r;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: a
      };
    })
  };
}, Ut = ["x-small", "small", "default", "large", "x-large"], We = _({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function He(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ot();
  return Ve(() => {
    let n, s;
    return _t(Ut, e.size) ? n = `${t}--size-${e.size}` : e.size && (s = {
      width: S(e.size),
      height: S(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: s
    };
  });
}
const Xt = _({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Ge,
  ...Ie(),
  ...We(),
  ...Me({
    tag: "i"
  }),
  ...Pe()
}, "VIcon"), le = oe()({
  name: "VIcon",
  props: Xt(),
  setup(e, t) {
    let {
      attrs: n,
      slots: s
    } = t;
    const r = H(), {
      themeClasses: i
    } = De(e), {
      iconData: a
    } = qt(d(() => r.value || e.icon)), {
      sizeClasses: u
    } = He(e), {
      textColorClasses: o,
      textColorStyles: l
    } = ee(Z(e, "color"));
    return Ae(() => {
      var g, v;
      const f = (g = s.default) == null ? void 0 : g.call(s);
      f && (r.value = (v = Le(f).filter((b) => b.type === lt && b.children && typeof b.children == "string")[0]) == null ? void 0 : v.children);
      const c = !!(n.onClick || n.onClickOnce);
      return m(a.value.component, {
        tag: e.tag,
        icon: a.value.icon,
        class: ["v-icon", "notranslate", i.value, u.value, o.value, {
          "v-icon--clickable": c,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [u.value ? void 0 : {
          fontSize: S(e.size),
          height: S(e.size),
          width: S(e.size)
        }, l.value, e.style],
        role: c ? "button" : void 0,
        "aria-hidden": !c,
        tabindex: c ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [f]
      });
    }), {};
  }
});
function Kt(e, t) {
  const n = H(), s = re(!1);
  if (gt) {
    const r = new IntersectionObserver((i) => {
      s.value = !!i.find((a) => a.isIntersecting);
    }, t);
    xe(() => {
      r.disconnect();
    }), Be(n, (i, a) => {
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
const Zt = _({
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
  ...Ie(),
  ...We(),
  ...Me({
    tag: "div"
  }),
  ...Pe()
}, "VProgressCircular"), Jt = oe()({
  name: "VProgressCircular",
  props: Zt(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const s = 20, r = 2 * Math.PI * s, i = H(), {
      themeClasses: a
    } = De(e), {
      sizeClasses: u,
      sizeStyles: o
    } = He(e), {
      textColorClasses: l,
      textColorStyles: f
    } = ee(Z(e, "color")), {
      textColorClasses: c,
      textColorStyles: g
    } = ee(Z(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: b
    } = Kt(), {
      resizeRef: N,
      contentRect: E
    } = Dt(), w = d(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = d(() => Number(e.width)), ue = d(() => o.value ? Number(e.size) : E.value ? E.value.width : Math.max(x.value, 32)), X = d(() => s / (1 - x.value / ue.value) * 2), ce = d(() => x.value / ue.value * X.value), Qe = d(() => S((100 - w.value) / 100 * r));
    return se(() => {
      v.value = i.value, N.value = i.value;
    }), Ae(() => m(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": b.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, a.value, u.value, l.value, e.class],
      style: [o.value, f.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : w.value
    }, {
      default: () => [m("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${X.value} ${X.value}`
      }, [m("circle", {
        class: ["v-progress-circular__underlay", c.value],
        style: g.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: s,
        "stroke-width": ce.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), m("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: s,
        "stroke-width": ce.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": Qe.value
      }, null)]), n.default && m("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: w.value
      })])]
    })), {};
  }
}), te = Symbol("rippleStop"), Qt = 80;
function Te(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ne(e) {
  return e.constructor.name === "TouchEvent";
}
function je(e) {
  return e.constructor.name === "KeyboardEvent";
}
const en = function(e, t) {
  var c;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = 0, r = 0;
  if (!je(e)) {
    const g = t.getBoundingClientRect(), v = ne(e) ? e.touches[e.touches.length - 1] : e;
    s = v.clientX - g.left, r = v.clientY - g.top;
  }
  let i = 0, a = 0.3;
  (c = t._ripple) != null && c.circle ? (a = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((s - i) ** 2 + (r - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const u = `${(t.clientWidth - i * 2) / 2}px`, o = `${(t.clientHeight - i * 2) / 2}px`, l = n.center ? u : `${s - i}px`, f = n.center ? o : `${r - i}px`;
  return {
    radius: i,
    scale: a,
    x: l,
    y: f,
    centerX: u,
    centerY: o
  };
}, W = {
  /* eslint-disable max-statements */
  show(e, t) {
    var v;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = t == null ? void 0 : t._ripple) != null && v.enabled))
      return;
    const s = document.createElement("span"), r = document.createElement("span");
    s.appendChild(r), s.className = "v-ripple__container", n.class && (s.className += ` ${n.class}`);
    const {
      radius: i,
      scale: a,
      x: u,
      y: o,
      centerX: l,
      centerY: f
    } = en(e, t, n), c = `${i * 2}px`;
    r.className = "v-ripple__animation", r.style.width = c, r.style.height = c, t.appendChild(s);
    const g = window.getComputedStyle(t);
    g && g.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), Te(r, `translate(${u}, ${o}) scale3d(${a},${a},${a})`), r.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), Te(r, `translate(${l}, ${f}) scale3d(1,1,1)`);
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
        var u;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((u = n.parentNode) == null ? void 0 : u.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, r);
  }
};
function Ye(e) {
  return typeof e > "u" || !!e;
}
function z(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[te])) {
    if (e[te] = !0, ne(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || je(e), n._ripple.class && (t.class = n._ripple.class), ne(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        W.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var s;
        (s = n == null ? void 0 : n._ripple) != null && s.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Qt);
    } else
      W.show(e, n, t);
  }
}
function $e(e) {
  e[te] = !0;
}
function h(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        h(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), W.hide(t);
  }
}
function qe(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let L = !1;
function Ue(e) {
  !L && (e.keyCode === me.enter || e.keyCode === me.space) && (L = !0, z(e));
}
function Xe(e) {
  L = !1, h(e);
}
function Ke(e) {
  L && (L = !1, h(e));
}
function Ze(e, t, n) {
  const {
    value: s,
    modifiers: r
  } = t, i = Ye(s);
  if (i || W.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = r.center, e._ripple.circle = r.circle, vt(s) && s.class && (e._ripple.class = s.class), i && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", $e, {
        passive: !0
      }), e.addEventListener("mousedown", $e);
      return;
    }
    e.addEventListener("touchstart", z, {
      passive: !0
    }), e.addEventListener("touchend", h, {
      passive: !0
    }), e.addEventListener("touchmove", qe, {
      passive: !0
    }), e.addEventListener("touchcancel", h), e.addEventListener("mousedown", z), e.addEventListener("mouseup", h), e.addEventListener("mouseleave", h), e.addEventListener("keydown", Ue), e.addEventListener("keyup", Xe), e.addEventListener("blur", Ke), e.addEventListener("dragstart", h, {
      passive: !0
    });
  } else !i && n && Je(e);
}
function Je(e) {
  e.removeEventListener("mousedown", z), e.removeEventListener("touchstart", z), e.removeEventListener("touchend", h), e.removeEventListener("touchmove", qe), e.removeEventListener("touchcancel", h), e.removeEventListener("mouseup", h), e.removeEventListener("mouseleave", h), e.removeEventListener("keydown", Ue), e.removeEventListener("keyup", Xe), e.removeEventListener("dragstart", h), e.removeEventListener("blur", Ke);
}
function tn(e, t) {
  Ze(e, t, !1);
}
function nn(e) {
  delete e._ripple, Je(e);
}
function sn(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Ye(t.oldValue);
  Ze(e, t, n);
}
const rn = {
  mounted: tn,
  unmounted: nn,
  updated: sn
}, an = { class: "d-flex" }, on = { class: "gs-alert-bar__content" }, ln = { class: "gs-alert-bar__icon" }, un = { class: "d-flex flex-column" }, cn = ["innerHTML"], dn = ["innerHTML"], fn = /* @__PURE__ */ $({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, n = d(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (s, r) => (p(), y("div", {
      class: j(n.value),
      role: "alert"
    }, [
      C("div", an, [
        C("div", on, [
          C("div", ln, [
            m(G(le), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          C("div", un, [
            s.title ? (p(), y("span", {
              key: 0,
              class: "title",
              innerHTML: s.title
            }, null, 8, cn)) : F("", !0),
            C("span", {
              class: "message",
              innerHTML: s.message
            }, null, 8, dn)
          ])
        ])
      ])
    ], 2));
  }
}), O = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, mn = /* @__PURE__ */ O(fn, [["__scopeId", "data-v-5fb92636"]]), pn = {
  key: 1,
  class: "text"
}, gn = /* @__PURE__ */ $({
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
    const t = e, n = d(() => t.href ? "a" : t.tag || "button"), s = d(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), r = d(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), i = d(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (a, u) => ut((p(), D(ct(n.value), {
      class: j(r.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: M({ width: a.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: de(() => [
        t.icon && !t.loading ? (p(), D(G(le), {
          key: 0,
          class: "icon"
        }, {
          default: de(() => [
            dt(Y(t.icon), 1)
          ]),
          _: 1
        })) : F("", !0),
        a.$slots.default ? (p(), y("span", pn, [
          ft(a.$slots, "default", {}, void 0, !0)
        ])) : F("", !0),
        t.loading ? (p(), D(G(Jt), {
          key: 2,
          size: i.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : F("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [rn, s.value]
    ]);
  }
}), vn = /* @__PURE__ */ O(gn, [["__scopeId", "data-v-c76db002"]]), hn = $({
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
}), yn = { class: "filter-button-list" }, bn = ["onClick"], _n = { class: "filter-button-title" };
function Cn(e, t, n, s, r, i) {
  return p(), y("div", yn, [
    (p(!0), y(ie, null, Fe(e.categories, (a) => (p(), y("button", {
      key: a,
      class: j(["filter-button", { "is-active": a === e.modelValue }]),
      onClick: mt((u) => e.searchByCategory(a), ["prevent"])
    }, [
      C("span", _n, Y(a), 1)
    ], 10, bn))), 128))
  ]);
}
const wn = /* @__PURE__ */ O(hn, [["render", Cn], ["__scopeId", "data-v-0e26ed44"]]), kn = $({
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
}), Sn = { class: "gs-tabs" }, Tn = ["disabled", "onClick"];
function $n(e, t, n, s, r, i) {
  return p(), y("div", Sn, [
    (p(!0), y(ie, null, Fe(e.tabs, (a, u) => (p(), y("button", {
      key: u,
      class: j(["gs-tab", { active: e.modelValue === a.value }]),
      disabled: a.disabled,
      onClick: (o) => e.selectTab(a)
    }, Y(a.label), 11, Tn))), 128))
  ]);
}
const En = /* @__PURE__ */ O(kn, [["render", $n], ["__scopeId", "data-v-b020e60d"]]), xn = ["src"], Bn = /* @__PURE__ */ $({
  name: "GsTag",
  __name: "GsTag",
  props: {
    label: {},
    backgroundColor: { default: "pastel-green" },
    icon: { default: void 0 },
    bold: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = d(() => t.backgroundColor === "black" ? "var(--ui-white)" : "var(--ui-black)"), s = d(() => {
      switch (t.backgroundColor) {
        case "black":
          return "var(--ui-white)";
        case "grey":
          return "var(--ui-black)";
        default:
          return "var(--ui-green)";
      }
    }), r = d(() => {
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
    return (i, a) => (p(), y("div", {
      style: M({
        backgroundColor: `${r.value}`,
        gap: i.label ? "4px" : "0"
      }),
      class: "gs-tag"
    }, [
      i.icon && i.icon.startsWith("mdi") ? (p(), D(le, {
        key: 0,
        icon: i.icon,
        size: "16px",
        style: M({ color: s.value }),
        class: "gs-tag__icon"
      }, null, 8, ["icon", "style"])) : i.icon && !i.icon.startsWith("mdi") ? (p(), y("img", {
        key: 1,
        src: i.icon,
        style: { width: "16px" },
        alt: "",
        class: "gs-tag__icon"
      }, null, 8, xn)) : F("", !0),
      C("span", {
        style: M({ color: n.value, fontWeight: i.bold ? "bold" : "normal" }),
        class: "gs-tag__label"
      }, Y(i.label), 5)
    ], 4));
  }
}), Fn = /* @__PURE__ */ O(Bn, [["__scopeId", "data-v-6b4861a9"]]), In = {
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
}, Rn = pt({
  icons: {
    defaultSet: "mdi",
    aliases: Gt,
    sets: {
      mdi: Wt
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: In
    }
  }
});
function zn(e) {
  e.use(Rn);
}
const Ln = {
  GsButton: vn,
  GsAlertBar: mn,
  GsFilter: wn,
  GsTabs: En,
  GsTag: Fn
}, Nn = {
  install(e) {
    zn(e);
    for (const [t, n] of Object.entries(Ln))
      e.component(t, n);
  }
};
export {
  mn as GsAlertBar,
  vn as GsButton,
  wn as GsFilter,
  En as GsTabs,
  Fn as GsTag,
  Nn as default
};
