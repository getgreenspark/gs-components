import { reactive as Ge, computed as f, watchEffect as K, toRefs as Ye, shallowRef as Z, Fragment as Ue, warn as Xe, getCurrentInstance as qe, inject as J, provide as ye, defineComponent as be, ref as L, onBeforeUnmount as Ce, watch as we, readonly as Ke, isRef as Ze, h as Je, unref as W, createVNode as m, mergeProps as Qe, toRef as H, Text as et, withDirectives as tt, createBlock as D, openBlock as $, resolveDynamicComponent as nt, normalizeStyle as rt, normalizeClass as st, withCtx as ne, createCommentVNode as M, createElementBlock as it, createTextVNode as at, toDisplayString as ot, renderSlot as lt } from "vue";
import { createVuetify as ut } from "vuetify";
function y(e, t) {
  return (n) => Object.keys(e).reduce((r, s) => {
    const a = typeof e[s] == "object" && e[s] != null && !Array.isArray(e[s]) ? e[s] : {
      type: e[s]
    };
    return n && s in n ? r[s] = {
      ...a,
      default: n[s]
    } : r[s] = a, t && !r[s].source && (r[s].source = t), r;
  }, {});
}
const _e = y({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), ke = typeof window < "u", ct = ke && "IntersectionObserver" in window;
function w(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function dt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function re(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function ft(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const se = Object.freeze({
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
function mt(e, t) {
  const n = {};
  for (const r of t)
    Object.hasOwn(e, r) && (n[r] = e[r]);
  return n;
}
function ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let r = 0;
  for (; r < e.length; )
    n.push(e.substr(r, t)), r += t;
  return n;
}
function Se() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const r = {};
  for (const s in e)
    r[s] = e[s];
  for (const s in t) {
    const i = e[s], a = t[s];
    if (re(i) && re(a)) {
      r[s] = Se(i, a, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(a)) {
      r[s] = n(i, a);
      continue;
    }
    r[s] = a;
  }
  return r;
}
function xe(e) {
  return e.map((t) => t.type === Ue ? xe(t.children) : t).flat();
}
function _() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (_.cache.has(e)) return _.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return _.cache.set(e, t), t;
}
_.cache = /* @__PURE__ */ new Map();
function Ee(e) {
  const t = Ge({}), n = f(e);
  return K(() => {
    for (const r in n.value)
      t[r] = n.value[r];
  }, {
    flush: "sync"
  }), Ye(t);
}
function gt(e, t) {
  return e.includes(t);
}
function vt() {
  const e = Z(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => ft(e.value)
  }), t;
}
const C = 2.4, ae = 0.2126729, oe = 0.7151522, le = 0.072175, ht = 0.55, yt = 0.58, bt = 0.57, Ct = 0.62, z = 0.03, ue = 1.45, wt = 5e-4, _t = 1.25, kt = 1.25, St = 0.078, ce = 12.82051282051282, O = 0.06, xt = 1e-3;
function de(e, t) {
  const n = (e.r / 255) ** C, r = (e.g / 255) ** C, s = (e.b / 255) ** C, i = (t.r / 255) ** C, a = (t.g / 255) ** C, c = (t.b / 255) ** C;
  let o = n * ae + r * oe + s * le, l = i * ae + a * oe + c * le;
  if (o <= z && (o += (z - o) ** ue), l <= z && (l += (z - l) ** ue), Math.abs(l - o) < wt) return 0;
  let d;
  if (l > o) {
    const u = (l ** ht - o ** yt) * _t;
    d = u < xt ? 0 : u < St ? u - u * ce * O : u - O;
  } else {
    const u = (l ** Ct - o ** bt) * kt;
    d = u > -1e-3 ? 0 : u > -0.078 ? u - u * ce * O : u + O;
  }
  return d * 100;
}
function E(e) {
  Xe(`Vuetify: ${e}`);
}
function G(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Et(e) {
  return G(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const fe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Tt = {
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
  hsl: (e, t, n, r) => me({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsla: (e, t, n, r) => me({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsv: (e, t, n, r) => T({
    h: e,
    s: t,
    v: n,
    a: r
  }),
  hsva: (e, t, n, r) => T({
    h: e,
    s: t,
    v: n,
    a: r
  })
};
function x(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && E(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && fe.test(e)) {
    const {
      groups: t
    } = e.match(fe), {
      fn: n,
      values: r
    } = t, s = r.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Tt[n](...s);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length) || E(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && E(`'${e}' is not a valid hex(a) color`), Ft(t);
  } else if (typeof e == "object") {
    if (j(e, ["r", "g", "b"]))
      return e;
    if (j(e, ["h", "s", "l"]))
      return T(Te(e));
    if (j(e, ["h", "s", "v"]))
      return T(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function T(e) {
  const {
    h: t,
    s: n,
    v: r,
    a: s
  } = e, i = (c) => {
    const o = (c + t / 60) % 6;
    return r - r * n * Math.max(Math.min(o, 4 - o, 1), 0);
  }, a = [i(5), i(3), i(1)].map((c) => Math.round(c * 255));
  return {
    r: a[0],
    g: a[1],
    b: a[2],
    a: s
  };
}
function me(e) {
  return T(Te(e));
}
function Te(e) {
  const {
    h: t,
    s: n,
    l: r,
    a: s
  } = e, i = r + n * Math.min(r, 1 - r), a = i === 0 ? 0 : 2 - 2 * r / i;
  return {
    h: t,
    s: a,
    v: i,
    a: s
  };
}
function Ft(e) {
  e = Bt(e);
  let [t, n, r, s] = pt(e, 2).map((i) => parseInt(i, 16));
  return s = s === void 0 ? s : s / 255, {
    r: t,
    g: n,
    b: r,
    a: s
  };
}
function Bt(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ie(ie(e, 6), 8, "F")), e;
}
function Rt(e) {
  const t = Math.abs(de(x(0), x(e)));
  return Math.abs(de(x(16777215), x(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function R(e, t) {
  const n = qe();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function It() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = R(e).type;
  return _((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function $t(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : R("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Y = Symbol.for("vuetify:defaults");
function Fe() {
  const e = J(Y);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function zt(e, t) {
  var n, r;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((r = e.props) == null ? void 0 : r[_(t)]) < "u";
}
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fe();
  const r = R("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const s = f(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), i = new Proxy(e, {
    get(o, l) {
      var u, p, g, h, I, k, b;
      const d = Reflect.get(o, l);
      return l === "class" || l === "style" ? [(u = s.value) == null ? void 0 : u[l], d].filter((S) => S != null) : typeof l == "string" && !zt(r.vnode, l) ? ((p = s.value) == null ? void 0 : p[l]) !== void 0 ? (g = s.value) == null ? void 0 : g[l] : ((I = (h = n.value) == null ? void 0 : h.global) == null ? void 0 : I[l]) !== void 0 ? (b = (k = n.value) == null ? void 0 : k.global) == null ? void 0 : b[l] : d : d;
    }
  }), a = Z();
  K(() => {
    if (s.value) {
      const o = Object.entries(s.value).filter((l) => {
        let [d] = l;
        return d.startsWith(d[0].toUpperCase());
      });
      a.value = o.length ? Object.fromEntries(o) : void 0;
    } else
      a.value = void 0;
  });
  function c() {
    const o = $t(Y, r);
    ye(Y, f(() => a.value ? Se((o == null ? void 0 : o.value) ?? {}, a.value) : o == null ? void 0 : o.value));
  }
  return {
    props: i,
    provideSubDefaults: c
  };
}
function P(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return E("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = y(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return mt(r, t);
    }, e.props._as = String, e.setup = function(r, s) {
      const i = Fe();
      if (!i.value) return e._setup(r, s);
      const {
        props: a,
        provideSubDefaults: c
      } = Ot(r, r._as ?? e.name, i), o = e._setup(a, s);
      return c(), o;
    };
  }
  return e;
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? P : be)(t);
}
function Be(e) {
  const t = R("useRender");
  t.render = e;
}
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = vt(), r = L();
  if (ke) {
    const s = new ResizeObserver((i) => {
      i.length && (t === "content" ? r.value = i[0].contentRect : r.value = i[0].target.getBoundingClientRect());
    });
    Ce(() => {
      s.disconnect();
    }), we(() => n.el, (i, a) => {
      a && (s.unobserve(a), r.value = void 0), i && s.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Ke(r)
  };
}
const pe = Symbol.for("vuetify:theme"), Re = y({
  theme: String
}, "theme");
function Ie(e) {
  R("provideTheme");
  const t = J(pe, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), r = f(() => t.themes.value[n.value]), s = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: r,
    themeClasses: s
  };
  return ye(pe, i), i;
}
const $e = y({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
function Lt(e) {
  return Ee(() => {
    const t = [], n = {};
    if (e.value.background)
      if (G(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Et(e.value.background)) {
          const r = x(e.value.background);
          if (r.a == null || r.a === 1) {
            const s = Rt(r);
            n.color = s, n.caretColor = s;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (G(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function U(e, t) {
  const n = f(() => ({
    text: Ze(e) ? e.value : null
  })), {
    colorClasses: r,
    colorStyles: s
  } = Lt(n);
  return {
    textColorClasses: r,
    textColorStyles: s
  };
}
const Pt = {
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
}, At = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Je(Mt, {
    ...e,
    class: "mdi"
  })
}, ze = [String, Function, Object, Array], Vt = Symbol.for("vuetify:icons"), A = y({
  icon: {
    type: ze
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), ge = Q()({
  name: "VComponentIcon",
  props: A(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const r = e.icon;
      return m(e.tag, null, {
        default: () => {
          var s;
          return [e.icon ? m(r, null, null) : (s = n.default) == null ? void 0 : s.call(n)];
        }
      });
    };
  }
}), Dt = P({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: A(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => m(e.tag, Qe(n, {
      style: null
    }), {
      default: () => [m("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? m("path", {
        d: r[0],
        "fill-opacity": r[1]
      }, null) : m("path", {
        d: r
      }, null)) : m("path", {
        d: e.icon
      }, null)])]
    });
  }
});
P({
  name: "VLigatureIcon",
  props: A(),
  setup(e) {
    return () => m(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Mt = P({
  name: "VClassIcon",
  props: A(),
  setup(e) {
    return () => m(e.tag, {
      class: e.icon
    }, null);
  }
}), jt = (e) => {
  const t = J(Vt);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: f(() => {
      var o;
      const r = W(e);
      if (!r) return {
        component: ge
      };
      let s = r;
      if (typeof s == "string" && (s = s.trim(), s.startsWith("$") && (s = (o = t.aliases) == null ? void 0 : o[s.slice(1)])), s || E(`Could not find aliased icon "${r}"`), Array.isArray(s))
        return {
          component: Dt,
          icon: s
        };
      if (typeof s != "string")
        return {
          component: ge,
          icon: s
        };
      const i = Object.keys(t.sets).find((l) => typeof s == "string" && s.startsWith(`${l}:`)), a = i ? s.slice(i.length + 1) : s;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: a
      };
    })
  };
}, Wt = ["x-small", "small", "default", "large", "x-large"], Oe = y({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ne(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : It();
  return Ee(() => {
    let n, r;
    return gt(Wt, e.size) ? n = `${t}--size-${e.size}` : e.size && (r = {
      width: w(e.size),
      height: w(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: r
    };
  });
}
const Ht = y({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ze,
  ..._e(),
  ...Oe(),
  ...$e({
    tag: "i"
  }),
  ...Re()
}, "VIcon"), Gt = Q()({
  name: "VIcon",
  props: Ht(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const s = L(), {
      themeClasses: i
    } = Ie(e), {
      iconData: a
    } = jt(f(() => s.value || e.icon)), {
      sizeClasses: c
    } = Ne(e), {
      textColorClasses: o,
      textColorStyles: l
    } = U(H(e, "color"));
    return Be(() => {
      var p, g;
      const d = (p = r.default) == null ? void 0 : p.call(r);
      d && (s.value = (g = xe(d).filter((h) => h.type === et && h.children && typeof h.children == "string")[0]) == null ? void 0 : g.children);
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
          fontSize: w(e.size),
          height: w(e.size),
          width: w(e.size)
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
function Yt(e, t) {
  const n = L(), r = Z(!1);
  if (ct) {
    const s = new IntersectionObserver((i) => {
      r.value = !!i.find((a) => a.isIntersecting);
    }, t);
    Ce(() => {
      s.disconnect();
    }), we(n, (i, a) => {
      a && (s.unobserve(a), r.value = !1), i && s.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: r
  };
}
const Ut = y({
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
  ...Oe(),
  ...$e({
    tag: "div"
  }),
  ...Re()
}, "VProgressCircular"), Xt = Q()({
  name: "VProgressCircular",
  props: Ut(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = 20, s = 2 * Math.PI * r, i = L(), {
      themeClasses: a
    } = Ie(e), {
      sizeClasses: c,
      sizeStyles: o
    } = Ne(e), {
      textColorClasses: l,
      textColorStyles: d
    } = U(H(e, "color")), {
      textColorClasses: u,
      textColorStyles: p
    } = U(H(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: h
    } = Yt(), {
      resizeRef: I,
      contentRect: k
    } = Nt(), b = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = f(() => Number(e.width)), ee = f(() => o.value ? Number(e.size) : k.value ? k.value.width : Math.max(S.value, 32)), V = f(() => r / (1 - S.value / ee.value) * 2), te = f(() => S.value / ee.value * V.value), He = f(() => w((100 - b.value) / 100 * s));
    return K(() => {
      g.value = i.value, I.value = i.value;
    }), Be(() => m(e.tag, {
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
        viewBox: `0 0 ${V.value} ${V.value}`
      }, [m("circle", {
        class: ["v-progress-circular__underlay", u.value],
        style: p.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": te.value,
        "stroke-dasharray": s,
        "stroke-dashoffset": 0
      }, null), m("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": te.value,
        "stroke-dasharray": s,
        "stroke-dashoffset": He.value
      }, null)]), n.default && m("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: b.value
      })])]
    })), {};
  }
}), X = Symbol("rippleStop"), qt = 80;
function ve(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function q(e) {
  return e.constructor.name === "TouchEvent";
}
function Le(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Kt = function(e, t) {
  var u;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, s = 0;
  if (!Le(e)) {
    const p = t.getBoundingClientRect(), g = q(e) ? e.touches[e.touches.length - 1] : e;
    r = g.clientX - p.left, s = g.clientY - p.top;
  }
  let i = 0, a = 0.3;
  (u = t._ripple) != null && u.circle ? (a = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((r - i) ** 2 + (s - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const c = `${(t.clientWidth - i * 2) / 2}px`, o = `${(t.clientHeight - i * 2) / 2}px`, l = n.center ? c : `${r - i}px`, d = n.center ? o : `${s - i}px`;
  return {
    radius: i,
    scale: a,
    x: l,
    y: d,
    centerX: c,
    centerY: o
  };
}, N = {
  /* eslint-disable max-statements */
  show(e, t) {
    var g;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
      return;
    const r = document.createElement("span"), s = document.createElement("span");
    r.appendChild(s), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
    const {
      radius: i,
      scale: a,
      x: c,
      y: o,
      centerX: l,
      centerY: d
    } = Kt(e, t, n), u = `${i * 2}px`;
    s.className = "v-ripple__animation", s.style.width = u, s.style.height = u, t.appendChild(r);
    const p = window.getComputedStyle(t);
    p && p.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), s.classList.add("v-ripple__animation--enter"), s.classList.add("v-ripple__animation--visible"), ve(s, `translate(${c}, ${o}) scale3d(${a},${a},${a})`), s.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        s.classList.remove("v-ripple__animation--enter"), s.classList.add("v-ripple__animation--in"), ve(s, `translate(${l}, ${d}) scale3d(1,1,1)`);
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
    const r = performance.now() - Number(n.dataset.activated), s = Math.max(250 - r, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var c;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((c = n.parentNode) == null ? void 0 : c.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, s);
  }
};
function Pe(e) {
  return typeof e > "u" || !!e;
}
function F(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[X])) {
    if (e[X] = !0, q(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Le(e), n._ripple.class && (t.class = n._ripple.class), q(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        N.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var r;
        (r = n == null ? void 0 : n._ripple) != null && r.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, qt);
    } else
      N.show(e, n, t);
  }
}
function he(e) {
  e[X] = !0;
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
    }), N.hide(t);
  }
}
function Ae(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let B = !1;
function Ve(e) {
  !B && (e.keyCode === se.enter || e.keyCode === se.space) && (B = !0, F(e));
}
function De(e) {
  B = !1, v(e);
}
function Me(e) {
  B && (B = !1, v(e));
}
function je(e, t, n) {
  const {
    value: r,
    modifiers: s
  } = t, i = Pe(r);
  if (i || N.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = s.center, e._ripple.circle = s.circle, dt(r) && r.class && (e._ripple.class = r.class), i && !n) {
    if (s.stop) {
      e.addEventListener("touchstart", he, {
        passive: !0
      }), e.addEventListener("mousedown", he);
      return;
    }
    e.addEventListener("touchstart", F, {
      passive: !0
    }), e.addEventListener("touchend", v, {
      passive: !0
    }), e.addEventListener("touchmove", Ae, {
      passive: !0
    }), e.addEventListener("touchcancel", v), e.addEventListener("mousedown", F), e.addEventListener("mouseup", v), e.addEventListener("mouseleave", v), e.addEventListener("keydown", Ve), e.addEventListener("keyup", De), e.addEventListener("blur", Me), e.addEventListener("dragstart", v, {
      passive: !0
    });
  } else !i && n && We(e);
}
function We(e) {
  e.removeEventListener("mousedown", F), e.removeEventListener("touchstart", F), e.removeEventListener("touchend", v), e.removeEventListener("touchmove", Ae), e.removeEventListener("touchcancel", v), e.removeEventListener("mouseup", v), e.removeEventListener("mouseleave", v), e.removeEventListener("keydown", Ve), e.removeEventListener("keyup", De), e.removeEventListener("dragstart", v), e.removeEventListener("blur", Me);
}
function Zt(e, t) {
  je(e, t, !1);
}
function Jt(e) {
  delete e._ripple, We(e);
}
function Qt(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Pe(t.oldValue);
  je(e, t, n);
}
const en = {
  mounted: Zt,
  unmounted: Jt,
  updated: Qt
}, tn = {
  key: 1,
  class: "text"
}, nn = /* @__PURE__ */ be({
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
    const t = e, n = f(() => t.href ? "a" : t.tag || "button"), r = f(
      () => n.value === "a" ? !1 : { class: "ripple-effect" }
    ), s = f(() => [
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
    return (a, c) => tt(($(), D(nt(n.value), {
      class: st(s.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      target: t.target,
      style: rt({ width: a.width + "px" }),
      type: "button"
    }, {
      default: ne(() => [
        t.icon && !t.loading ? ($(), D(W(Gt), {
          key: 0,
          class: "icon"
        }, {
          default: ne(() => [
            at(ot(t.icon), 1)
          ]),
          _: 1
        })) : M("", !0),
        a.$slots.default ? ($(), it("span", tn, [
          lt(a.$slots, "default", {}, void 0, !0)
        ])) : M("", !0),
        t.loading ? ($(), D(W(Xt), {
          key: 2,
          class: "loader",
          size: i.value,
          indeterminate: "",
          color: "gray"
        }, null, 8, ["size"])) : M("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "target", "style"])), [
      [en, r.value]
    ]);
  }
}), rn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, sn = /* @__PURE__ */ rn(nn, [["__scopeId", "data-v-6e2a035c"]]), an = {
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
}, on = ut({
  icons: {
    defaultSet: "mdi",
    aliases: Pt,
    sets: {
      mdi: At
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: an
    }
  }
});
function ln(e) {
  e.use(on);
}
const un = {
  GsButton: sn
}, fn = {
  install(e) {
    ln(e);
    for (const [t, n] of Object.entries(un))
      e.component(t, n);
  }
};
export {
  sn as GsButton,
  fn as default
};
