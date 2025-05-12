import { reactive as Qe, computed as f, watchEffect as te, toRefs as et, shallowRef as ne, Fragment as se, warn as tt, getCurrentInstance as nt, inject as re, provide as Te, defineComponent as L, ref as M, onBeforeUnmount as Ee, watch as $e, readonly as st, isRef as rt, h as it, unref as P, createVNode as m, mergeProps as at, toRef as X, Text as ot, createElementBlock as y, openBlock as h, normalizeClass as G, createElementVNode as k, createCommentVNode as A, withDirectives as lt, createBlock as q, resolveDynamicComponent as ut, normalizeStyle as ct, withCtx as ue, createTextVNode as dt, toDisplayString as ie, renderSlot as ft, renderList as xe, withModifiers as mt } from "vue";
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
const Be = _({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Fe = typeof window < "u", gt = Fe && "IntersectionObserver" in window;
function S(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function vt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ce(e) {
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
const de = Object.freeze({
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
function U(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function yt(e, t) {
  const n = {};
  for (const s of t)
    Object.hasOwn(e, s) && (n[s] = e[s]);
  return n;
}
function fe(e, t) {
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
function Ie() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const s = {};
  for (const r in e)
    s[r] = e[r];
  for (const r in t) {
    const i = e[r], a = t[r];
    if (ce(i) && ce(a)) {
      s[r] = Ie(i, a, n);
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
function Re(e) {
  return e.map((t) => t.type === se ? Re(t.children) : t).flat();
}
function T() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (T.cache.has(e)) return T.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return T.cache.set(e, t), t;
}
T.cache = /* @__PURE__ */ new Map();
function Le(e) {
  const t = Qe({}), n = f(e);
  return te(() => {
    for (const s in n.value)
      t[s] = n.value[s];
  }, {
    flush: "sync"
  }), et(t);
}
function _t(e, t) {
  return e.includes(t);
}
function Ct() {
  const e = ne(), t = (n) => {
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
const w = 2.4, me = 0.2126729, pe = 0.7151522, ge = 0.072175, wt = 0.55, kt = 0.58, St = 0.57, Tt = 0.62, O = 0.03, ve = 1.45, Et = 5e-4, $t = 1.25, xt = 1.25, Bt = 0.078, he = 12.82051282051282, N = 0.06, Ft = 1e-3;
function ye(e, t) {
  const n = (e.r / 255) ** w, s = (e.g / 255) ** w, r = (e.b / 255) ** w, i = (t.r / 255) ** w, a = (t.g / 255) ** w, u = (t.b / 255) ** w;
  let o = n * me + s * pe + r * ge, l = i * me + a * pe + u * ge;
  if (o <= O && (o += (O - o) ** ve), l <= O && (l += (O - l) ** ve), Math.abs(l - o) < Et) return 0;
  let d;
  if (l > o) {
    const c = (l ** wt - o ** kt) * $t;
    d = c < Ft ? 0 : c < Bt ? c - c * he * N : c - N;
  } else {
    const c = (l ** Tt - o ** St) * xt;
    d = c > -1e-3 ? 0 : c > -0.078 ? c - c * he * N : c + N;
  }
  return d * 100;
}
function B(e) {
  tt(`Vuetify: ${e}`);
}
function K(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function It(e) {
  return K(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const be = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Rt = {
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
  hsl: (e, t, n, s) => _e({
    h: e,
    s: t,
    l: n,
    a: s
  }),
  hsla: (e, t, n, s) => _e({
    h: e,
    s: t,
    l: n,
    a: s
  }),
  hsv: (e, t, n, s) => F({
    h: e,
    s: t,
    v: n,
    a: s
  }),
  hsva: (e, t, n, s) => F({
    h: e,
    s: t,
    v: n,
    a: s
  })
};
function x(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && B(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && be.test(e)) {
    const {
      groups: t
    } = e.match(be), {
      fn: n,
      values: s
    } = t, r = s.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Rt[n](...r);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((s) => s + s).join("") : [6, 8].includes(t.length) || B(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && B(`'${e}' is not a valid hex(a) color`), Lt(t);
  } else if (typeof e == "object") {
    if (U(e, ["r", "g", "b"]))
      return e;
    if (U(e, ["h", "s", "l"]))
      return F(ze(e));
    if (U(e, ["h", "s", "v"]))
      return F(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function F(e) {
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
function _e(e) {
  return F(ze(e));
}
function ze(e) {
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
function Lt(e) {
  e = zt(e);
  let [t, n, s, r] = bt(e, 2).map((i) => parseInt(i, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: s,
    a: r
  };
}
function zt(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = fe(fe(e, 6), 8, "F")), e;
}
function Vt(e) {
  const t = Math.abs(ye(x(0), x(e)));
  return Math.abs(ye(x(16777215), x(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function z(e, t) {
  const n = nt();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = z(e).type;
  return T((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Z = Symbol.for("vuetify:defaults");
function Ve() {
  const e = re(Z);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function At(e, t) {
  var n, s;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((s = e.props) == null ? void 0 : s[T(t)]) < "u";
}
function Pt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ve();
  const s = z("useDefaults");
  if (t = t ?? s.type.name ?? s.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = f(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), i = new Proxy(e, {
    get(o, l) {
      var c, p, g, b, V, E, C;
      const d = Reflect.get(o, l);
      return l === "class" || l === "style" ? [(c = r.value) == null ? void 0 : c[l], d].filter(($) => $ != null) : typeof l == "string" && !At(s.vnode, l) ? ((p = r.value) == null ? void 0 : p[l]) !== void 0 ? (g = r.value) == null ? void 0 : g[l] : ((V = (b = n.value) == null ? void 0 : b.global) == null ? void 0 : V[l]) !== void 0 ? (C = (E = n.value) == null ? void 0 : E.global) == null ? void 0 : C[l] : d : d;
    }
  }), a = ne();
  te(() => {
    if (r.value) {
      const o = Object.entries(r.value).filter((l) => {
        let [d] = l;
        return d.startsWith(d[0].toUpperCase());
      });
      a.value = o.length ? Object.fromEntries(o) : void 0;
    } else
      a.value = void 0;
  });
  function u() {
    const o = Nt(Z, s);
    Te(Z, f(() => a.value ? Ie((o == null ? void 0 : o.value) ?? {}, a.value) : o == null ? void 0 : o.value));
  }
  return {
    props: i,
    provideSubDefaults: u
  };
}
function H(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return B("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = _(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(s) {
      return yt(s, t);
    }, e.props._as = String, e.setup = function(s, r) {
      const i = Ve();
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
function ae() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? H : L)(t);
}
function Oe(e) {
  const t = z("useRender");
  t.render = e;
}
function Dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Ct(), s = M();
  if (Fe) {
    const r = new ResizeObserver((i) => {
      i.length && (t === "content" ? s.value = i[0].contentRect : s.value = i[0].target.getBoundingClientRect());
    });
    Ee(() => {
      r.disconnect();
    }), $e(() => n.el, (i, a) => {
      a && (r.unobserve(a), s.value = void 0), i && r.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: st(s)
  };
}
const Ce = Symbol.for("vuetify:theme"), Ne = _({
  theme: String
}, "theme");
function Ae(e) {
  z("provideTheme");
  const t = re(Ce, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), s = f(() => t.themes.value[n.value]), r = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: s,
    themeClasses: r
  };
  return Te(Ce, i), i;
}
const Pe = _({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
function Mt(e) {
  return Le(() => {
    const t = [], n = {};
    if (e.value.background)
      if (K(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && It(e.value.background)) {
          const s = x(e.value.background);
          if (s.a == null || s.a === 1) {
            const r = Vt(s);
            n.color = r, n.caretColor = r;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (K(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function J(e, t) {
  const n = f(() => ({
    text: rt(e) ? e.value : null
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
}, Ht = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => it(Yt, {
    ...e,
    class: "mdi"
  })
}, De = [String, Function, Object, Array], Wt = Symbol.for("vuetify:icons"), W = _({
  icon: {
    type: De
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), we = ae()({
  name: "VComponentIcon",
  props: W(),
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
}), jt = H({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: W(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => m(e.tag, at(n, {
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
H({
  name: "VLigatureIcon",
  props: W(),
  setup(e) {
    return () => m(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Yt = H({
  name: "VClassIcon",
  props: W(),
  setup(e) {
    return () => m(e.tag, {
      class: e.icon
    }, null);
  }
}), qt = (e) => {
  const t = re(Wt);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: f(() => {
      var o;
      const s = P(e);
      if (!s) return {
        component: we
      };
      let r = s;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = (o = t.aliases) == null ? void 0 : o[r.slice(1)])), r || B(`Could not find aliased icon "${s}"`), Array.isArray(r))
        return {
          component: jt,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: we,
          icon: r
        };
      const i = Object.keys(t.sets).find((l) => typeof r == "string" && r.startsWith(`${l}:`)), a = i ? r.slice(i.length + 1) : r;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: a
      };
    })
  };
}, Ut = ["x-small", "small", "default", "large", "x-large"], Me = _({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ot();
  return Le(() => {
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
  icon: De,
  ...Be(),
  ...Me(),
  ...Pe({
    tag: "i"
  }),
  ...Ne()
}, "VIcon"), He = ae()({
  name: "VIcon",
  props: Xt(),
  setup(e, t) {
    let {
      attrs: n,
      slots: s
    } = t;
    const r = M(), {
      themeClasses: i
    } = Ae(e), {
      iconData: a
    } = qt(f(() => r.value || e.icon)), {
      sizeClasses: u
    } = Ge(e), {
      textColorClasses: o,
      textColorStyles: l
    } = J(X(e, "color"));
    return Oe(() => {
      var p, g;
      const d = (p = s.default) == null ? void 0 : p.call(s);
      d && (r.value = (g = Re(d).filter((b) => b.type === ot && b.children && typeof b.children == "string")[0]) == null ? void 0 : g.children);
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
        default: () => [d]
      });
    }), {};
  }
});
function Kt(e, t) {
  const n = M(), s = ne(!1);
  if (gt) {
    const r = new IntersectionObserver((i) => {
      s.value = !!i.find((a) => a.isIntersecting);
    }, t);
    Ee(() => {
      r.disconnect();
    }), $e(n, (i, a) => {
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
  ...Be(),
  ...Me(),
  ...Pe({
    tag: "div"
  }),
  ...Ne()
}, "VProgressCircular"), Jt = ae()({
  name: "VProgressCircular",
  props: Zt(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const s = 20, r = 2 * Math.PI * s, i = M(), {
      themeClasses: a
    } = Ae(e), {
      sizeClasses: u,
      sizeStyles: o
    } = Ge(e), {
      textColorClasses: l,
      textColorStyles: d
    } = J(X(e, "color")), {
      textColorClasses: c,
      textColorStyles: p
    } = J(X(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: b
    } = Kt(), {
      resizeRef: V,
      contentRect: E
    } = Dt(), C = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), $ = f(() => Number(e.width)), oe = f(() => o.value ? Number(e.size) : E.value ? E.value.width : Math.max($.value, 32)), Y = f(() => s / (1 - $.value / oe.value) * 2), le = f(() => $.value / oe.value * Y.value), Je = f(() => S((100 - C.value) / 100 * r));
    return te(() => {
      g.value = i.value, V.value = i.value;
    }), Oe(() => m(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": b.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, a.value, u.value, l.value, e.class],
      style: [o.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : C.value
    }, {
      default: () => [m("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${Y.value} ${Y.value}`
      }, [m("circle", {
        class: ["v-progress-circular__underlay", c.value],
        style: p.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: s,
        "stroke-width": le.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), m("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: s,
        "stroke-width": le.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": Je.value
      }, null)]), n.default && m("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: C.value
      })])]
    })), {};
  }
}), Q = Symbol("rippleStop"), Qt = 80;
function ke(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ee(e) {
  return e.constructor.name === "TouchEvent";
}
function We(e) {
  return e.constructor.name === "KeyboardEvent";
}
const en = function(e, t) {
  var c;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = 0, r = 0;
  if (!We(e)) {
    const p = t.getBoundingClientRect(), g = ee(e) ? e.touches[e.touches.length - 1] : e;
    s = g.clientX - p.left, r = g.clientY - p.top;
  }
  let i = 0, a = 0.3;
  (c = t._ripple) != null && c.circle ? (a = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((s - i) ** 2 + (r - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const u = `${(t.clientWidth - i * 2) / 2}px`, o = `${(t.clientHeight - i * 2) / 2}px`, l = n.center ? u : `${s - i}px`, d = n.center ? o : `${r - i}px`;
  return {
    radius: i,
    scale: a,
    x: l,
    y: d,
    centerX: u,
    centerY: o
  };
}, D = {
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
      x: u,
      y: o,
      centerX: l,
      centerY: d
    } = en(e, t, n), c = `${i * 2}px`;
    r.className = "v-ripple__animation", r.style.width = c, r.style.height = c, t.appendChild(s);
    const p = window.getComputedStyle(t);
    p && p.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), ke(r, `translate(${u}, ${o}) scale3d(${a},${a},${a})`), r.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), ke(r, `translate(${l}, ${d}) scale3d(1,1,1)`);
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
function je(e) {
  return typeof e > "u" || !!e;
}
function I(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Q])) {
    if (e[Q] = !0, ee(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || We(e), n._ripple.class && (t.class = n._ripple.class), ee(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        D.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var s;
        (s = n == null ? void 0 : n._ripple) != null && s.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Qt);
    } else
      D.show(e, n, t);
  }
}
function Se(e) {
  e[Q] = !0;
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
    }), D.hide(t);
  }
}
function Ye(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let R = !1;
function qe(e) {
  !R && (e.keyCode === de.enter || e.keyCode === de.space) && (R = !0, I(e));
}
function Ue(e) {
  R = !1, v(e);
}
function Xe(e) {
  R && (R = !1, v(e));
}
function Ke(e, t, n) {
  const {
    value: s,
    modifiers: r
  } = t, i = je(s);
  if (i || D.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = r.center, e._ripple.circle = r.circle, vt(s) && s.class && (e._ripple.class = s.class), i && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", Se, {
        passive: !0
      }), e.addEventListener("mousedown", Se);
      return;
    }
    e.addEventListener("touchstart", I, {
      passive: !0
    }), e.addEventListener("touchend", v, {
      passive: !0
    }), e.addEventListener("touchmove", Ye, {
      passive: !0
    }), e.addEventListener("touchcancel", v), e.addEventListener("mousedown", I), e.addEventListener("mouseup", v), e.addEventListener("mouseleave", v), e.addEventListener("keydown", qe), e.addEventListener("keyup", Ue), e.addEventListener("blur", Xe), e.addEventListener("dragstart", v, {
      passive: !0
    });
  } else !i && n && Ze(e);
}
function Ze(e) {
  e.removeEventListener("mousedown", I), e.removeEventListener("touchstart", I), e.removeEventListener("touchend", v), e.removeEventListener("touchmove", Ye), e.removeEventListener("touchcancel", v), e.removeEventListener("mouseup", v), e.removeEventListener("mouseleave", v), e.removeEventListener("keydown", qe), e.removeEventListener("keyup", Ue), e.removeEventListener("dragstart", v), e.removeEventListener("blur", Xe);
}
function tn(e, t) {
  Ke(e, t, !1);
}
function nn(e) {
  delete e._ripple, Ze(e);
}
function sn(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = je(t.oldValue);
  Ke(e, t, n);
}
const rn = {
  mounted: tn,
  unmounted: nn,
  updated: sn
}, an = { class: "d-flex" }, on = { class: "gs-alert-bar__content" }, ln = { class: "gs-alert-bar__icon" }, un = { class: "d-flex flex-column" }, cn = ["innerHTML"], dn = ["innerHTML"], fn = /* @__PURE__ */ L({
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
    return (s, r) => (h(), y("div", {
      class: G(n.value),
      role: "alert"
    }, [
      k("div", an, [
        k("div", on, [
          k("div", ln, [
            m(P(He), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          k("div", un, [
            s.title ? (h(), y("span", {
              key: 0,
              class: "title",
              innerHTML: s.title
            }, null, 8, cn)) : A("", !0),
            k("span", {
              class: "message",
              innerHTML: s.message
            }, null, 8, dn)
          ])
        ])
      ])
    ], 2));
  }
}), j = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, mn = /* @__PURE__ */ j(fn, [["__scopeId", "data-v-5fb92636"]]), pn = {
  key: 1,
  class: "text"
}, gn = /* @__PURE__ */ L({
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
    return (a, u) => lt((h(), q(ut(n.value), {
      class: G(r.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: ct({ width: a.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: ue(() => [
        t.icon && !t.loading ? (h(), q(P(He), {
          key: 0,
          class: "icon"
        }, {
          default: ue(() => [
            dt(ie(t.icon), 1)
          ]),
          _: 1
        })) : A("", !0),
        a.$slots.default ? (h(), y("span", pn, [
          ft(a.$slots, "default", {}, void 0, !0)
        ])) : A("", !0),
        t.loading ? (h(), q(P(Jt), {
          key: 2,
          size: i.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : A("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [rn, s.value]
    ]);
  }
}), vn = /* @__PURE__ */ j(gn, [["__scopeId", "data-v-c76db002"]]), hn = L({
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
  return h(), y("div", yn, [
    (h(!0), y(se, null, xe(e.categories, (a) => (h(), y("button", {
      key: a,
      class: G(["filter-button", { "is-active": a === e.modelValue }]),
      onClick: mt((u) => e.searchByCategory(a), ["prevent"])
    }, [
      k("span", _n, ie(a), 1)
    ], 10, bn))), 128))
  ]);
}
const wn = /* @__PURE__ */ j(hn, [["render", Cn], ["__scopeId", "data-v-132fb07a"]]), kn = L({
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
function En(e, t, n, s, r, i) {
  return h(), y("div", Sn, [
    (h(!0), y(se, null, xe(e.tabs, (a, u) => (h(), y("button", {
      key: u,
      class: G(["gs-tab", { active: e.modelValue === a.value }]),
      disabled: a.disabled,
      onClick: (o) => e.selectTab(a)
    }, ie(a.label), 11, Tn))), 128))
  ]);
}
const $n = /* @__PURE__ */ j(kn, [["render", En], ["__scopeId", "data-v-b020e60d"]]), xn = {
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
}, Bn = pt({
  icons: {
    defaultSet: "mdi",
    aliases: Gt,
    sets: {
      mdi: Ht
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: xn
    }
  }
});
function Fn(e) {
  e.use(Bn);
}
const In = {
  GsButton: vn,
  GsAlertBar: mn,
  GsFilter: wn,
  GsTabs: $n
}, zn = {
  install(e) {
    Fn(e);
    for (const [t, n] of Object.entries(In))
      e.component(t, n);
  }
};
export {
  mn as GsAlertBar,
  vn as GsButton,
  wn as GsFilter,
  $n as GsTabs,
  zn as default
};
