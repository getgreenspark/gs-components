import { reactive as pr, computed as B, watchEffect as vt, toRefs as mr, shallowRef as bt, Fragment as yt, warn as vr, getCurrentInstance as br, inject as be, provide as hn, defineComponent as q, ref as J, onBeforeUnmount as fn, watch as Et, readonly as yr, isRef as Er, h as xr, unref as Oe, createVNode as F, mergeProps as _r, toRef as Je, Text as Tr, createElementBlock as $, openBlock as M, normalizeClass as Pe, createElementVNode as ee, createCommentVNode as fe, withDirectives as Cr, createBlock as Ce, resolveDynamicComponent as wr, normalizeStyle as de, withCtx as Ot, createTextVNode as Lr, toDisplayString as Re, renderSlot as Sr, renderList as dn, withModifiers as Or, onMounted as Ar, onBeforeMount as Br, onUnmounted as gn } from "vue";
import { createVuetify as Pr } from "vuetify";
function Q(e, t) {
  return (r) => Object.keys(e).reduce((n, i) => {
    const s = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : {
      type: e[i]
    };
    return r && i in r ? n[i] = {
      ...s,
      default: r[i]
    } : n[i] = s, t && !n[i].source && (n[i].source = t), n;
  }, {});
}
const pn = Q({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), mn = typeof window < "u", Rr = mn && "IntersectionObserver" in window;
function re(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Hr(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function At(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Ir(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Bt = Object.freeze({
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
function ke(e, t) {
  return t.every((r) => e.hasOwnProperty(r));
}
function Nr(e, t) {
  const r = {};
  for (const n of t)
    Object.hasOwn(e, n) && (r[n] = e[n]);
  return r;
}
function Pt(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + r.repeat(Math.max(0, t - e.length));
}
function Dr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const r = [];
  let n = 0;
  for (; n < e.length; )
    r.push(e.substr(n, t)), n += t;
  return r;
}
function vn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const i in e)
    n[i] = e[i];
  for (const i in t) {
    const a = e[i], s = t[i];
    if (At(a) && At(s)) {
      n[i] = vn(a, s, r);
      continue;
    }
    if (r && Array.isArray(a) && Array.isArray(s)) {
      n[i] = r(a, s);
      continue;
    }
    n[i] = s;
  }
  return n;
}
function bn(e) {
  return e.map((t) => t.type === yt ? bn(t.children) : t).flat();
}
function ie() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ie.cache.has(e)) return ie.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ie.cache.set(e, t), t;
}
ie.cache = /* @__PURE__ */ new Map();
function yn(e) {
  const t = pr({}), r = B(e);
  return vt(() => {
    for (const n in r.value)
      t[n] = r.value[n];
  }, {
    flush: "sync"
  }), mr(t);
}
function Fr(e, t) {
  return e.includes(t);
}
function Mr() {
  const e = bt(), t = (r) => {
    e.value = r;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (r) => e.value = r
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Ir(e.value)
  }), t;
}
const te = 2.4, Rt = 0.2126729, Ht = 0.7151522, It = 0.072175, Ur = 0.55, kr = 0.58, Gr = 0.57, jr = 0.62, xe = 0.03, Nt = 1.45, $r = 5e-4, Vr = 1.25, zr = 1.25, Wr = 0.078, Dt = 12.82051282051282, _e = 0.06, Xr = 1e-3;
function Ft(e, t) {
  const r = (e.r / 255) ** te, n = (e.g / 255) ** te, i = (e.b / 255) ** te, a = (t.r / 255) ** te, s = (t.g / 255) ** te, l = (t.b / 255) ** te;
  let u = r * Rt + n * Ht + i * It, o = a * Rt + s * Ht + l * It;
  if (u <= xe && (u += (xe - u) ** Nt), o <= xe && (o += (xe - o) ** Nt), Math.abs(o - u) < $r) return 0;
  let c;
  if (o > u) {
    const f = (o ** Ur - u ** kr) * Vr;
    c = f < Xr ? 0 : f < Wr ? f - f * Dt * _e : f - _e;
  } else {
    const f = (o ** jr - u ** Gr) * zr;
    c = f > -1e-3 ? 0 : f > -0.078 ? f - f * Dt * _e : f + _e;
  }
  return c * 100;
}
function ge(e) {
  vr(`Vuetify: ${e}`);
}
function Qe(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function qr(e) {
  return Qe(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Mt = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Zr = {
  rgb: (e, t, r, n) => ({
    r: e,
    g: t,
    b: r,
    a: n
  }),
  rgba: (e, t, r, n) => ({
    r: e,
    g: t,
    b: r,
    a: n
  }),
  hsl: (e, t, r, n) => Ut({
    h: e,
    s: t,
    l: r,
    a: n
  }),
  hsla: (e, t, r, n) => Ut({
    h: e,
    s: t,
    l: r,
    a: n
  }),
  hsv: (e, t, r, n) => pe({
    h: e,
    s: t,
    v: r,
    a: n
  }),
  hsva: (e, t, r, n) => pe({
    h: e,
    s: t,
    v: r,
    a: n
  })
};
function ce(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && ge(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Mt.test(e)) {
    const {
      groups: t
    } = e.match(Mt), {
      fn: r,
      values: n
    } = t, i = n.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(r) ? parseFloat(a) / 100 : parseFloat(a));
    return Zr[r](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length) || ge(`'${e}' is not a valid hex(a) color`);
    const r = parseInt(t, 16);
    return (isNaN(r) || r < 0 || r > 4294967295) && ge(`'${e}' is not a valid hex(a) color`), Yr(t);
  } else if (typeof e == "object") {
    if (ke(e, ["r", "g", "b"]))
      return e;
    if (ke(e, ["h", "s", "l"]))
      return pe(En(e));
    if (ke(e, ["h", "s", "v"]))
      return pe(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function pe(e) {
  const {
    h: t,
    s: r,
    v: n,
    a: i
  } = e, a = (l) => {
    const u = (l + t / 60) % 6;
    return n - n * r * Math.max(Math.min(u, 4 - u, 1), 0);
  }, s = [a(5), a(3), a(1)].map((l) => Math.round(l * 255));
  return {
    r: s[0],
    g: s[1],
    b: s[2],
    a: i
  };
}
function Ut(e) {
  return pe(En(e));
}
function En(e) {
  const {
    h: t,
    s: r,
    l: n,
    a: i
  } = e, a = n + r * Math.min(n, 1 - n), s = a === 0 ? 0 : 2 - 2 * n / a;
  return {
    h: t,
    s,
    v: a,
    a: i
  };
}
function Yr(e) {
  e = Jr(e);
  let [t, r, n, i] = Dr(e, 2).map((a) => parseInt(a, 16));
  return i = i === void 0 ? i : i / 255, {
    r: t,
    g: r,
    b: n,
    a: i
  };
}
function Jr(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Pt(Pt(e, 6), 8, "F")), e;
}
function Qr(e) {
  const t = Math.abs(Ft(ce(0), ce(e)));
  return Math.abs(Ft(ce(16777215), ce(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function ye(e, t) {
  const r = br();
  if (!r)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return r;
}
function Kr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = ye(e).type;
  return ie((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function ei(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye("injectSelf");
  const {
    provides: r
  } = t;
  if (r && e in r)
    return r[e];
}
const Ke = Symbol.for("vuetify:defaults");
function xn() {
  const e = be(Ke);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ti(e, t) {
  var r, n;
  return typeof ((r = e.props) == null ? void 0 : r[t]) < "u" || typeof ((n = e.props) == null ? void 0 : n[ie(t)]) < "u";
}
function ni() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xn();
  const n = ye("useDefaults");
  if (t = t ?? n.type.name ?? n.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const i = B(() => {
    var u;
    return (u = r.value) == null ? void 0 : u[e._as ?? t];
  }), a = new Proxy(e, {
    get(u, o) {
      var f, v, y, w, b, E, h;
      const c = Reflect.get(u, o);
      return o === "class" || o === "style" ? [(f = i.value) == null ? void 0 : f[o], c].filter((p) => p != null) : typeof o == "string" && !ti(n.vnode, o) ? ((v = i.value) == null ? void 0 : v[o]) !== void 0 ? (y = i.value) == null ? void 0 : y[o] : ((b = (w = r.value) == null ? void 0 : w.global) == null ? void 0 : b[o]) !== void 0 ? (h = (E = r.value) == null ? void 0 : E.global) == null ? void 0 : h[o] : c : c;
    }
  }), s = bt();
  vt(() => {
    if (i.value) {
      const u = Object.entries(i.value).filter((o) => {
        let [c] = o;
        return c.startsWith(c[0].toUpperCase());
      });
      s.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      s.value = void 0;
  });
  function l() {
    const u = ei(Ke, n);
    hn(Ke, B(() => s.value ? vn((u == null ? void 0 : u.value) ?? {}, s.value) : u == null ? void 0 : u.value));
  }
  return {
    props: a,
    provideSubDefaults: l
  };
}
function He(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return ge("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = Q(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((r) => r !== "class" && r !== "style");
    e.filterProps = function(n) {
      return Nr(n, t);
    }, e.props._as = String, e.setup = function(n, i) {
      const a = xn();
      if (!a.value) return e._setup(n, i);
      const {
        props: s,
        provideSubDefaults: l
      } = ni(n, n._as ?? e.name, a), u = e._setup(s, i);
      return l(), u;
    };
  }
  return e;
}
function xt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? He : q)(t);
}
function _n(e) {
  const t = ye("useRender");
  t.render = e;
}
function ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const r = Mr(), n = J();
  if (mn) {
    const i = new ResizeObserver((a) => {
      a.length && (t === "content" ? n.value = a[0].contentRect : n.value = a[0].target.getBoundingClientRect());
    });
    fn(() => {
      i.disconnect();
    }), Et(() => r.el, (a, s) => {
      s && (i.unobserve(s), n.value = void 0), a && i.observe(a);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: r,
    contentRect: yr(n)
  };
}
const kt = Symbol.for("vuetify:theme"), Tn = Q({
  theme: String
}, "theme");
function Cn(e) {
  ye("provideTheme");
  const t = be(kt, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const r = B(() => e.theme ?? t.name.value), n = B(() => t.themes.value[r.value]), i = B(() => t.isDisabled ? void 0 : `v-theme--${r.value}`), a = {
    ...t,
    name: r,
    current: n,
    themeClasses: i
  };
  return hn(kt, a), a;
}
const wn = Q({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
function ii(e) {
  return yn(() => {
    const t = [], r = {};
    if (e.value.background)
      if (Qe(e.value.background)) {
        if (r.backgroundColor = e.value.background, !e.value.text && qr(e.value.background)) {
          const n = ce(e.value.background);
          if (n.a == null || n.a === 1) {
            const i = Qr(n);
            r.color = i, r.caretColor = i;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (Qe(e.value.text) ? (r.color = e.value.text, r.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: r
    };
  });
}
function et(e, t) {
  const r = B(() => ({
    text: Er(e) ? e.value : null
  })), {
    colorClasses: n,
    colorStyles: i
  } = ii(r);
  return {
    textColorClasses: n,
    textColorStyles: i
  };
}
const ai = {
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
}, si = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => xr(li, {
    ...e,
    class: "mdi"
  })
}, Ln = [String, Function, Object, Array], oi = Symbol.for("vuetify:icons"), Ie = Q({
  icon: {
    type: Ln
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Gt = xt()({
  name: "VComponentIcon",
  props: Ie(),
  setup(e, t) {
    let {
      slots: r
    } = t;
    return () => {
      const n = e.icon;
      return F(e.tag, null, {
        default: () => {
          var i;
          return [e.icon ? F(n, null, null) : (i = r.default) == null ? void 0 : i.call(r)];
        }
      });
    };
  }
}), ui = He({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Ie(),
  setup(e, t) {
    let {
      attrs: r
    } = t;
    return () => F(e.tag, _r(r, {
      style: null
    }), {
      default: () => [F("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? F("path", {
        d: n[0],
        "fill-opacity": n[1]
      }, null) : F("path", {
        d: n
      }, null)) : F("path", {
        d: e.icon
      }, null)])]
    });
  }
});
He({
  name: "VLigatureIcon",
  props: Ie(),
  setup(e) {
    return () => F(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const li = He({
  name: "VClassIcon",
  props: Ie(),
  setup(e) {
    return () => F(e.tag, {
      class: e.icon
    }, null);
  }
}), ci = (e) => {
  const t = be(oi);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: B(() => {
      var u;
      const n = Oe(e);
      if (!n) return {
        component: Gt
      };
      let i = n;
      if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (u = t.aliases) == null ? void 0 : u[i.slice(1)])), i || ge(`Could not find aliased icon "${n}"`), Array.isArray(i))
        return {
          component: ui,
          icon: i
        };
      if (typeof i != "string")
        return {
          component: Gt,
          icon: i
        };
      const a = Object.keys(t.sets).find((o) => typeof i == "string" && i.startsWith(`${o}:`)), s = a ? i.slice(a.length + 1) : i;
      return {
        component: t.sets[a ?? t.defaultSet].component,
        icon: s
      };
    })
  };
}, hi = ["x-small", "small", "default", "large", "x-large"], Sn = Q({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function On(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kr();
  return yn(() => {
    let r, n;
    return Fr(hi, e.size) ? r = `${t}--size-${e.size}` : e.size && (n = {
      width: re(e.size),
      height: re(e.size)
    }), {
      sizeClasses: r,
      sizeStyles: n
    };
  });
}
const fi = Q({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Ln,
  ...pn(),
  ...Sn(),
  ...wn({
    tag: "i"
  }),
  ...Tn()
}, "VIcon"), _t = xt()({
  name: "VIcon",
  props: fi(),
  setup(e, t) {
    let {
      attrs: r,
      slots: n
    } = t;
    const i = J(), {
      themeClasses: a
    } = Cn(e), {
      iconData: s
    } = ci(B(() => i.value || e.icon)), {
      sizeClasses: l
    } = On(e), {
      textColorClasses: u,
      textColorStyles: o
    } = et(Je(e, "color"));
    return _n(() => {
      var v, y;
      const c = (v = n.default) == null ? void 0 : v.call(n);
      c && (i.value = (y = bn(c).filter((w) => w.type === Tr && w.children && typeof w.children == "string")[0]) == null ? void 0 : y.children);
      const f = !!(r.onClick || r.onClickOnce);
      return F(s.value.component, {
        tag: e.tag,
        icon: s.value.icon,
        class: ["v-icon", "notranslate", a.value, l.value, u.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [l.value ? void 0 : {
          fontSize: re(e.size),
          height: re(e.size),
          width: re(e.size)
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
function di(e, t) {
  const r = J(), n = bt(!1);
  if (Rr) {
    const i = new IntersectionObserver((a) => {
      n.value = !!a.find((s) => s.isIntersecting);
    }, t);
    fn(() => {
      i.disconnect();
    }), Et(r, (a, s) => {
      s && (i.unobserve(s), n.value = !1), a && i.observe(a);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: r,
    isIntersecting: n
  };
}
const gi = Q({
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
  ...pn(),
  ...Sn(),
  ...wn({
    tag: "div"
  }),
  ...Tn()
}, "VProgressCircular"), pi = xt()({
  name: "VProgressCircular",
  props: gi(),
  setup(e, t) {
    let {
      slots: r
    } = t;
    const n = 20, i = 2 * Math.PI * n, a = J(), {
      themeClasses: s
    } = Cn(e), {
      sizeClasses: l,
      sizeStyles: u
    } = On(e), {
      textColorClasses: o,
      textColorStyles: c
    } = et(Je(e, "color")), {
      textColorClasses: f,
      textColorStyles: v
    } = et(Je(e, "bgColor")), {
      intersectionRef: y,
      isIntersecting: w
    } = di(), {
      resizeRef: b,
      contentRect: E
    } = ri(), h = B(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), p = B(() => Number(e.width)), g = B(() => u.value ? Number(e.size) : E.value ? E.value.width : Math.max(p.value, 32)), _ = B(() => n / (1 - p.value / g.value) * 2), C = B(() => p.value / g.value * _.value), d = B(() => re((100 - h.value) / 100 * i));
    return vt(() => {
      y.value = a.value, b.value = a.value;
    }), _n(() => F(e.tag, {
      ref: a,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": w.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, s.value, l.value, o.value, e.class],
      style: [u.value, c.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : h.value
    }, {
      default: () => [F("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${_.value} ${_.value}`
      }, [F("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: v.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: n,
        "stroke-width": C.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": 0
      }, null), F("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: n,
        "stroke-width": C.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": d.value
      }, null)]), r.default && F("div", {
        class: "v-progress-circular__content"
      }, [r.default({
        value: h.value
      })])]
    })), {};
  }
}), tt = Symbol("rippleStop"), mi = 80;
function jt(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function nt(e) {
  return e.constructor.name === "TouchEvent";
}
function An(e) {
  return e.constructor.name === "KeyboardEvent";
}
const vi = function(e, t) {
  var f;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = 0, i = 0;
  if (!An(e)) {
    const v = t.getBoundingClientRect(), y = nt(e) ? e.touches[e.touches.length - 1] : e;
    n = y.clientX - v.left, i = y.clientY - v.top;
  }
  let a = 0, s = 0.3;
  (f = t._ripple) != null && f.circle ? (s = 0.15, a = t.clientWidth / 2, a = r.center ? a : a + Math.sqrt((n - a) ** 2 + (i - a) ** 2) / 4) : a = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const l = `${(t.clientWidth - a * 2) / 2}px`, u = `${(t.clientHeight - a * 2) / 2}px`, o = r.center ? l : `${n - a}px`, c = r.center ? u : `${i - a}px`;
  return {
    radius: a,
    scale: s,
    x: o,
    y: c,
    centerX: l,
    centerY: u
  };
}, Ae = {
  /* eslint-disable max-statements */
  show(e, t) {
    var y;
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((y = t == null ? void 0 : t._ripple) != null && y.enabled))
      return;
    const n = document.createElement("span"), i = document.createElement("span");
    n.appendChild(i), n.className = "v-ripple__container", r.class && (n.className += ` ${r.class}`);
    const {
      radius: a,
      scale: s,
      x: l,
      y: u,
      centerX: o,
      centerY: c
    } = vi(e, t, r), f = `${a * 2}px`;
    i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(n);
    const v = window.getComputedStyle(t);
    v && v.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), jt(i, `translate(${l}, ${u}) scale3d(${s},${s},${s})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), jt(i, `translate(${o}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var a;
    if (!((a = e == null ? void 0 : e._ripple) != null && a.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const r = t[t.length - 1];
    if (r.dataset.isHiding) return;
    r.dataset.isHiding = "true";
    const n = performance.now() - Number(r.dataset.activated), i = Math.max(250 - n, 0);
    setTimeout(() => {
      r.classList.remove("v-ripple__animation--in"), r.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var l;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((l = r.parentNode) == null ? void 0 : l.parentNode) === e && e.removeChild(r.parentNode);
      }, 300);
    }, i);
  }
};
function Bn(e) {
  return typeof e > "u" || !!e;
}
function me(e) {
  const t = {}, r = e.currentTarget;
  if (!(!(r != null && r._ripple) || r._ripple.touched || e[tt])) {
    if (e[tt] = !0, nt(e))
      r._ripple.touched = !0, r._ripple.isTouch = !0;
    else if (r._ripple.isTouch) return;
    if (t.center = r._ripple.centered || An(e), r._ripple.class && (t.class = r._ripple.class), nt(e)) {
      if (r._ripple.showTimerCommit) return;
      r._ripple.showTimerCommit = () => {
        Ae.show(e, r, t);
      }, r._ripple.showTimer = window.setTimeout(() => {
        var n;
        (n = r == null ? void 0 : r._ripple) != null && n.showTimerCommit && (r._ripple.showTimerCommit(), r._ripple.showTimerCommit = null);
      }, mi);
    } else
      Ae.show(e, r, t);
  }
}
function $t(e) {
  e[tt] = !0;
}
function G(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        G(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Ae.hide(t);
  }
}
function Pn(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let ve = !1;
function Rn(e) {
  !ve && (e.keyCode === Bt.enter || e.keyCode === Bt.space) && (ve = !0, me(e));
}
function Hn(e) {
  ve = !1, G(e);
}
function In(e) {
  ve && (ve = !1, G(e));
}
function Nn(e, t, r) {
  const {
    value: n,
    modifiers: i
  } = t, a = Bn(n);
  if (a || Ae.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = i.center, e._ripple.circle = i.circle, Hr(n) && n.class && (e._ripple.class = n.class), a && !r) {
    if (i.stop) {
      e.addEventListener("touchstart", $t, {
        passive: !0
      }), e.addEventListener("mousedown", $t);
      return;
    }
    e.addEventListener("touchstart", me, {
      passive: !0
    }), e.addEventListener("touchend", G, {
      passive: !0
    }), e.addEventListener("touchmove", Pn, {
      passive: !0
    }), e.addEventListener("touchcancel", G), e.addEventListener("mousedown", me), e.addEventListener("mouseup", G), e.addEventListener("mouseleave", G), e.addEventListener("keydown", Rn), e.addEventListener("keyup", Hn), e.addEventListener("blur", In), e.addEventListener("dragstart", G, {
      passive: !0
    });
  } else !a && r && Dn(e);
}
function Dn(e) {
  e.removeEventListener("mousedown", me), e.removeEventListener("touchstart", me), e.removeEventListener("touchend", G), e.removeEventListener("touchmove", Pn), e.removeEventListener("touchcancel", G), e.removeEventListener("mouseup", G), e.removeEventListener("mouseleave", G), e.removeEventListener("keydown", Rn), e.removeEventListener("keyup", Hn), e.removeEventListener("dragstart", G), e.removeEventListener("blur", In);
}
function bi(e, t) {
  Nn(e, t, !1);
}
function yi(e) {
  delete e._ripple, Dn(e);
}
function Ei(e, t) {
  if (t.value === t.oldValue)
    return;
  const r = Bn(t.oldValue);
  Nn(e, t, r);
}
const xi = {
  mounted: bi,
  unmounted: yi,
  updated: Ei
}, _i = { class: "d-flex" }, Ti = { class: "gs-alert-bar__content" }, Ci = { class: "gs-alert-bar__icon" }, wi = { class: "d-flex flex-column" }, Li = ["innerHTML"], Si = ["innerHTML"], Oi = /* @__PURE__ */ q({
  __name: "GsAlertBar",
  props: {
    type: { default: "info" },
    title: {},
    message: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const t = e, r = B(() => [
      "gs-alert-bar",
      `gs-${t.type}`,
      {
        "full-width": t.fullWidth
      }
    ]);
    return (n, i) => (M(), $("div", {
      class: Pe(r.value),
      role: "alert"
    }, [
      ee("div", _i, [
        ee("div", Ti, [
          ee("div", Ci, [
            F(Oe(_t), {
              class: "icon me-3",
              icon: "mdi-information-outline",
              size: "16"
            })
          ]),
          ee("div", wi, [
            n.title ? (M(), $("span", {
              key: 0,
              class: "title",
              innerHTML: n.title
            }, null, 8, Li)) : fe("", !0),
            ee("span", {
              class: "message",
              innerHTML: n.message
            }, null, 8, Si)
          ])
        ])
      ])
    ], 2));
  }
}), oe = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Ai = /* @__PURE__ */ oe(Oi, [["__scopeId", "data-v-5fb92636"]]), Bi = {
  key: 1,
  class: "text"
}, Pi = /* @__PURE__ */ q({
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
    const t = e, r = B(() => t.href ? "a" : t.tag || "button"), n = B(
      () => r.value === "a" ? !1 : { class: "ripple-effect" }
    ), i = B(() => [
      "gs-button",
      `gs-${t.type}`,
      t.size,
      {
        "full-width": t.fullWidth,
        "is-loading": t.loading,
        "with-icon": t.icon
      }
    ]), a = B(() => {
      switch (t.size) {
        case "small":
          return 20;
        case "large":
          return 32;
        default:
          return 26;
      }
    });
    return (s, l) => Cr((M(), Ce(wr(r.value), {
      class: Pe(i.value),
      disabled: t.disabled || t.loading,
      href: t.href,
      style: de({ width: s.width + "px" }),
      target: t.target,
      type: "button"
    }, {
      default: Ot(() => [
        t.icon && !t.loading ? (M(), Ce(Oe(_t), {
          key: 0,
          class: "icon"
        }, {
          default: Ot(() => [
            Lr(Re(t.icon), 1)
          ]),
          _: 1
        })) : fe("", !0),
        s.$slots.default ? (M(), $("span", Bi, [
          Sr(s.$slots, "default", {}, void 0, !0)
        ])) : fe("", !0),
        t.loading ? (M(), Ce(Oe(pi), {
          key: 2,
          size: a.value,
          class: "loader",
          color: "gray",
          indeterminate: ""
        }, null, 8, ["size"])) : fe("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "style", "target"])), [
      [xi, n.value]
    ]);
  }
}), Ri = /* @__PURE__ */ oe(Pi, [["__scopeId", "data-v-c76db002"]]), Hi = q({
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
}), Ii = { class: "filter-button-list" }, Ni = ["onClick"], Di = { class: "filter-button-title" };
function Fi(e, t, r, n, i, a) {
  return M(), $("div", Ii, [
    (M(!0), $(yt, null, dn(e.categories, (s) => (M(), $("button", {
      key: s,
      class: Pe(["filter-button", { "is-active": s === e.modelValue }]),
      onClick: Or((l) => e.searchByCategory(s), ["prevent"])
    }, [
      ee("span", Di, Re(s), 1)
    ], 10, Ni))), 128))
  ]);
}
const Mi = /* @__PURE__ */ oe(Hi, [["render", Fi], ["__scopeId", "data-v-0e26ed44"]]), Ui = q({
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
}), ki = { class: "gs-tabs" }, Gi = ["disabled", "onClick"];
function ji(e, t, r, n, i, a) {
  return M(), $("div", ki, [
    (M(!0), $(yt, null, dn(e.tabs, (s, l) => (M(), $("button", {
      key: l,
      class: Pe(["gs-tab", { active: e.modelValue === s.value }]),
      disabled: s.disabled,
      onClick: (u) => e.selectTab(s)
    }, Re(s.label), 11, Gi))), 128))
  ]);
}
const $i = /* @__PURE__ */ oe(Ui, [["render", ji], ["__scopeId", "data-v-b020e60d"]]), Vi = ["src"], zi = /* @__PURE__ */ q({
  name: "GsTag",
  __name: "GsTag",
  props: {
    label: {},
    backgroundColor: { default: "pastel-green" },
    icon: { default: void 0 },
    bold: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = B(() => t.backgroundColor === "black" ? "var(--ui-white)" : "var(--ui-black)"), n = B(() => {
      switch (t.backgroundColor) {
        case "black":
          return "var(--ui-white)";
        case "grey":
          return "var(--ui-black)";
        default:
          return "var(--ui-green)";
      }
    }), i = B(() => {
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
    return (a, s) => (M(), $("div", {
      style: de({
        backgroundColor: `${i.value}`,
        gap: a.label ? "4px" : "0"
      }),
      class: "gs-tag"
    }, [
      a.icon && a.icon.startsWith("mdi") ? (M(), Ce(_t, {
        key: 0,
        icon: a.icon,
        size: "16px",
        style: de({ color: n.value }),
        class: "gs-tag__icon"
      }, null, 8, ["icon", "style"])) : a.icon && !a.icon.startsWith("mdi") ? (M(), $("img", {
        key: 1,
        src: a.icon,
        style: { width: "16px" },
        alt: "",
        class: "gs-tag__icon"
      }, null, 8, Vi)) : fe("", !0),
      ee("span", {
        style: de({ color: r.value, fontWeight: a.bold ? "bold" : "normal" }),
        class: "gs-tag__label"
      }, Re(a.label), 5)
    ], 4));
  }
}), Wi = /* @__PURE__ */ oe(zi, [["__scopeId", "data-v-6b4861a9"]]), Xi = /* @__PURE__ */ q({
  name: "GsDivider",
  __name: "GsDivider",
  props: {
    color: { default: "grey200" },
    length: { default: "100%" },
    thickness: { default: "thick" },
    margin: { default: "0" }
  },
  setup(e) {
    const t = e, r = B(() => {
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
    return (n, i) => (M(), $("hr", {
      style: de({
        borderColor: r.value,
        width: t.length,
        borderTopWidth: t.thickness === "thick" ? "1px" : "0px",
        margin: `${t.margin} 0`
      }),
      "aria-orientation": "horizontal",
      class: "gs-divider",
      role: "separator"
    }, null, 4));
  }
}), qi = /* @__PURE__ */ oe(Xi, [["__scopeId", "data-v-77a02199"]]);
var Zi = Object.defineProperty, Yi = Object.defineProperties, Ji = Object.getOwnPropertyDescriptors, Be = Object.getOwnPropertySymbols, Fn = Object.prototype.hasOwnProperty, Mn = Object.prototype.propertyIsEnumerable, Vt = (e, t, r) => t in e ? Zi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ne = (e, t) => {
  for (var r in t || (t = {}))
    Fn.call(t, r) && Vt(e, r, t[r]);
  if (Be)
    for (var r of Be(t))
      Mn.call(t, r) && Vt(e, r, t[r]);
  return e;
}, Qi = (e, t) => Yi(e, Ji(t)), Un = (e, t) => {
  var r = {};
  for (var n in e)
    Fn.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Be)
    for (var n of Be(e))
      t.indexOf(n) < 0 && Mn.call(e, n) && (r[n] = e[n]);
  return r;
}, zt;
function Ki(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Ne(e) {
  return !!(e && typeof e.then == "function");
}
function we(e, t) {
  return Ne(e) ? Promise.resolve(e).then(t) : t(e);
}
function Ge(e, t, r) {
  function n(i) {
    const a = t(i);
    throw e.emit(a), console.error(a), a;
  }
  try {
    const i = r();
    return Ne(i) ? i.catch(n) : i;
  } catch (i) {
    n(i);
  }
}
function Wt(e) {
  const t = (Array.isArray(e) ? e : [e]).map((a) => `'${a}'`), r = t.slice(-2).join(" or ");
  return `Tolgee: You need to specify ${[...t.slice(0, -2), r].join(", ")} option`;
}
function ea(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function kn(e) {
  if (typeof e == "string")
    return [e];
  if (Array.isArray(e))
    return e;
}
function V(e) {
  return kn(e) || [];
}
function ta(e, t) {
  return ea(t) ? V(t == null ? void 0 : t[e]) : V(t);
}
function rt(e) {
  return Array.from(new Set(e));
}
function Gn(e) {
  return e && e.replace(/\/+$/, "");
}
function na(e) {
  if (typeof e == "string")
    return e;
  if (typeof (e == null ? void 0 : e.message) == "string")
    return e.message;
}
const ra = (e, t) => fetch(e, t);
function ia(e) {
  return Object.fromEntries(new Headers(e).entries());
}
const jn = (e = ra) => (t, r) => {
  let n = ia(r == null ? void 0 : r.headers);
  return n["x-api-key"] && (n = Object.assign({ "x-tolgee-sdk-type": "JS", "x-tolgee-sdk-version": "prerelease" }, n)), e(t, Object.assign(Object.assign({}, r), { headers: n }));
};
function W(e) {
  let t = [];
  return Object.freeze({
    listen(r) {
      const n = (i) => {
        r(i);
      };
      return t.push(n), {
        unsubscribe() {
          t = t.filter((i) => n !== i);
        }
      };
    },
    emit(r) {
      e() && t.forEach((n) => n({ value: r }));
    }
  });
}
function aa(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  function a(u) {
    const o = new Set(t());
    i.forEach((c) => {
      (u === void 0 || (u == null ? void 0 : u.findIndex((v) => o.has(v) || c.namespaces.has(v))) !== -1) && c.fn({ value: void 0 });
    });
  }
  let s = [];
  function l() {
    if (s.length === 0)
      return;
    const u = s;
    s = [], n.forEach((f) => {
      f({ value: void 0 });
    });
    let o = /* @__PURE__ */ new Set();
    u.forEach((f) => {
      f === void 0 ? o = void 0 : o !== void 0 && f.forEach((v) => o.add(v));
    });
    const c = o ? Array.from(o.keys()) : void 0;
    a(c);
  }
  return Object.freeze({
    emit(u, o) {
      e() && (s.push(u), o ? setTimeout(l, 0) : l());
    },
    listen(u) {
      return n.add(u), {
        unsubscribe: () => {
          n.delete(u);
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
        subscribeNs: (f) => (V(f).forEach((v) => o.namespaces.add(v)), f === void 0 && o.namespaces.add(r()), c)
      };
      return c;
    }
  });
}
function sa(e, t) {
  let r = !0;
  function n() {
    return r;
  }
  const i = Object.freeze({
    onPendingLanguageChange: W(n),
    onLanguageChange: W(n),
    onLoadingChange: W(n),
    onFetchingChange: W(n),
    onInitialLoaded: W(n),
    onRunningChange: W(n),
    onCacheChange: W(n),
    onUpdate: aa(n, e, t),
    onPermanentChange: W(n),
    onError: W(n),
    setEmitterActive(a) {
      r = a;
    },
    on: (a, s) => {
      switch (a) {
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
  return i.onInitialLoaded.listen(() => i.onUpdate.emit()), i.onLanguageChange.listen(() => i.onUpdate.emit()), i.onCacheChange.listen(({ value: a }) => i.onUpdate.emit([a.namespace], !0)), i;
}
class Xt extends Error {
  constructor(t, r, n = !1) {
    const { language: i, namespace: a } = t;
    super(`Tolgee: Failed to fetch record for "${i}"${a && ` and "${a}"`}`), this.cause = r, this.isDev = n, this.name = "RecordFetchError", this.language = i, this.namespace = a;
  }
}
class oa extends Error {
  constructor(t, r) {
    super(t), this.cause = r, this.name = "LanguageDetectorError";
  }
}
class qt extends Error {
  constructor(t, r) {
    super(t), this.cause = r, this.name = "LanguageStorageError";
  }
}
const $n = (e) => {
  const t = /* @__PURE__ */ new Map();
  return Object.entries(e).forEach(([r, n]) => {
    if (n != null) {
      if (typeof n == "object") {
        $n(n).forEach((i, a) => {
          t.set(r + "." + a, i);
        });
        return;
      }
      t.set(r, n);
    }
  }), t;
}, he = (e) => {
  const [t, ...r] = e.split(":"), n = r.join(":");
  return { language: t, namespace: n || "" };
}, X = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function ua(e, t, r, n, i, a, s) {
  const l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  let o = {}, c = 0;
  function f(b, E, h) {
    const p = X(b);
    u.set(p, {
      data: $n(E),
      version: h
    }), e.onCacheChange.emit(b);
  }
  async function v(b) {
    function E(g) {
      const _ = new Xt(b, g);
      throw e.onError.emit(_), console.error(_), _;
    }
    const h = t(b);
    if (Ne(h)) {
      const g = await h.catch(E);
      if (g !== void 0)
        return g;
    }
    const p = o[X(b)];
    if (typeof p == "function")
      try {
        return await p();
      } catch (g) {
        E(g);
      }
    else
      return p;
  }
  async function y(b, E) {
    let h;
    if (E)
      try {
        h = await r(b);
      } catch (p) {
        const g = new Xt(b, p, !0);
        e.onError.emit(g), console.warn(g);
      }
    return h || (h = await v(b)), h;
  }
  const w = Object.freeze({
    addStaticData(b) {
      b && (o = Object.assign(Object.assign({}, o), b), Object.entries(b).forEach(([E, h]) => {
        if (typeof h != "function") {
          const p = he(E), g = u.get(E);
          (!g || g.version === 0) && f(p, h, 0);
        }
      }));
    },
    invalidate() {
      l.clear(), c += 1;
    },
    addRecord(b, E) {
      f(b, E, c);
    },
    exists(b, E = !1) {
      const h = u.get(X(b));
      return h && E ? h.version === c : !!h;
    },
    getRecord(b) {
      var E;
      return (E = u.get(X(n(b)))) === null || E === void 0 ? void 0 : E.data;
    },
    getTranslation(b, E) {
      var h;
      return (h = u.get(X(b))) === null || h === void 0 ? void 0 : h.data.get(E);
    },
    getTranslationNs(b, E, h) {
      var p;
      for (const g of b)
        for (const _ of E) {
          const C = (p = u.get(X({ language: _, namespace: g }))) === null || p === void 0 ? void 0 : p.data.get(h);
          if (C != null)
            return [g];
        }
      return rt(b);
    },
    getTranslationFallback(b, E, h) {
      var p;
      for (const g of b)
        for (const _ of E) {
          const C = (p = u.get(X({ language: _, namespace: g }))) === null || p === void 0 ? void 0 : p.data.get(h);
          if (C != null)
            return C;
        }
    },
    changeTranslation(b, E, h) {
      var p;
      const g = (p = u.get(X(b))) === null || p === void 0 ? void 0 : p.data;
      g == null || g.set(E, h), e.onCacheChange.emit(Object.assign(Object.assign({}, b), { key: E }));
    },
    isFetching(b) {
      if (i())
        return !0;
      if (b === void 0)
        return l.size > 0;
      const E = V(b);
      return !!Array.from(l.keys()).find((h) => E.includes(he(h).namespace));
    },
    isLoading(b, E) {
      const h = V(E);
      return !!(i() || Array.from(l.keys()).find((p) => {
        const g = he(p);
        return (!h.length || h.includes(g.namespace)) && !w.exists({
          namespace: g.namespace,
          language: b
        });
      }));
    },
    async loadRecords(b, E) {
      const h = b.map((g) => {
        const _ = n(g), C = X(_), d = l.get(C);
        if (d)
          return {
            new: !1,
            promise: d,
            keyObject: _,
            cacheKey: C
          };
        const x = y(_, E) || Promise.resolve(void 0);
        return l.set(C, x), {
          new: !0,
          promise: x,
          keyObject: _,
          cacheKey: C
        };
      });
      a.notify(), s.notify();
      const p = await Promise.all(h.map((g) => g.promise));
      return h.forEach((g, _) => {
        const C = l.get(g.cacheKey) !== g.promise;
        if (g.new && !C) {
          l.delete(g.cacheKey);
          const d = p[_];
          d ? w.addRecord(g.keyObject, d) : w.getRecord(g.keyObject) || w.addRecord(g.keyObject, {});
        }
      }), a.notify(), s.notify(), h.map((g) => w.getRecord(g.keyObject));
    },
    getAllRecords() {
      return Array.from(u.entries()).map(([E, h]) => Object.assign(Object.assign({}, he(E)), { data: h.data }));
    }
  });
  return w;
}
function Vn(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
const la = {
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
}, it = "invalid", ca = "https://app.tolgee.io", ha = ({ key: e }) => e, fa = {
  defaultNs: "",
  observerOptions: la,
  observerType: "invisible",
  onFormatError: it,
  apiUrl: ca,
  fetch: jn(),
  onTranslationMissing: ha
}, at = (...e) => {
  let t = {};
  return e.forEach((r) => {
    t = Object.assign(Object.assign(Object.assign({}, t), r), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), r == null ? void 0 : r.observerOptions) });
  }), t;
};
function Zt(e, t) {
  const r = at(fa, t == null ? void 0 : t.initialOptions, e);
  return r.apiUrl = Gn(r.apiUrl), e != null && e.fetch && (r.fetch = jn(e.fetch)), {
    initialOptions: r,
    activeNamespaces: (t == null ? void 0 : t.activeNamespaces) || /* @__PURE__ */ new Map(),
    language: t == null ? void 0 : t.language,
    pendingLanguage: t == null ? void 0 : t.language,
    isInitialLoading: !1,
    isRunning: !1
  };
}
function da(e, t, r, n, i, a, s, l) {
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
  }, c = async ({ keysAndDefaults: m, target: T }) => {
    var L;
    const D = m.map(({ key: z, ns: k, defaultValue: Z }) => ({
      key: z,
      defaultValue: Z,
      fallbackNamespaces: n(k),
      namespace: i({ key: z, ns: k })[0],
      translation: a({
        key: z,
        ns: k
      })
    }));
    (L = o.ui) === null || L === void 0 || L.handleElementClick(D, T);
  }, f = (m, T) => {
    var L;
    return ((L = o.observer) === null || L === void 0 ? void 0 : L.findPositions(m, T)) || [];
  };
  function v(m) {
    const T = a({
      key: m.key,
      ns: m.ns
    });
    return N.formatTranslation(Object.assign(Object.assign({}, m), { translation: T, formatEnabled: !0 }));
  }
  function y() {
    return { fetch: t().fetch };
  }
  function w(m) {
    o.observer = m == null ? void 0 : m();
  }
  function b() {
    return !!o.observer;
  }
  function E(m) {
    m && o.formatters.push(m);
  }
  function h(m) {
    o.finalFormatter = m;
  }
  function p(m) {
    u.ui = m;
  }
  function g() {
    return !!u.ui;
  }
  function _(m) {
    o.languageStorage = m;
  }
  function C(m) {
    o.languageDetector = m;
  }
  function d() {
    return Ge(l.onError, (m) => new qt("Tolgee: Failed to load language", m), () => {
      var m;
      return (m = o.languageStorage) === null || m === void 0 ? void 0 : m.getLanguage(y());
    });
  }
  function x() {
    if (!o.languageDetector)
      return;
    const m = r();
    return Ge(l.onError, (T) => new oa("Tolgee: Failed to detect language", T), () => {
      var T;
      return (T = o.languageDetector) === null || T === void 0 ? void 0 : T.getLanguage(Object.assign({ availableLanguages: m }, y()));
    });
  }
  function R(m) {
    m && o.backends.push(m);
  }
  function H(m) {
    o.devBackend = m;
  }
  function I(m, T) {
    const L = Object.freeze({
      setFinalFormatter: h,
      addFormatter: E,
      setObserver: w,
      hasObserver: b,
      setUi: p,
      hasUi: g,
      setDevBackend: H,
      addBackend: R,
      setLanguageDetector: C,
      setLanguageStorage: _
    });
    T(m, L);
  }
  const N = Object.freeze({
    addPlugin: I,
    findPositions: f,
    run() {
      var m, T;
      const { apiKey: L, apiUrl: D, projectId: z, observerOptions: k, tagNewKeys: Z, filterTag: Me } = t();
      o.ui = (m = u.ui) === null || m === void 0 ? void 0 : m.call(u, {
        apiKey: L,
        apiUrl: D,
        projectId: z,
        highlight: N.highlight,
        changeTranslation: s,
        findPositions: f,
        onPermanentChange: (ue) => l.onPermanentChange.emit(ue),
        tagNewKeys: Z,
        filterTag: Me
      }), (T = o.observer) === null || T === void 0 || T.run({
        mouseHighlight: !0,
        options: k,
        translate: v,
        onClick: c
      });
    },
    stop() {
      var m;
      o.ui = void 0, (m = o.observer) === null || m === void 0 || m.stop();
    },
    getLanguageStorage() {
      return o.languageStorage;
    },
    getInitialLanguage() {
      const m = r(), T = d();
      return we(T, (L) => (!m || m.includes(L)) && L ? L : x());
    },
    setStoredLanguage(m) {
      return Ge(l.onError, (T) => new qt("Tolgee: Failed to store language", T), () => {
        var T;
        return (T = o.languageStorage) === null || T === void 0 ? void 0 : T.setLanguage(m, y());
      });
    },
    getDevBackend() {
      return o.devBackend;
    },
    getBackendRecord: async ({ language: m, namespace: T }) => {
      for (const L of o.backends) {
        const D = await L.getRecord(Object.assign({
          language: m,
          namespace: T
        }, y()));
        if (D !== void 0)
          return D;
      }
    },
    getBackendDevRecord: async ({ language: m, namespace: T }) => {
      var L;
      const { apiKey: D, apiUrl: z, projectId: k, filterTag: Z } = t();
      return (L = o.devBackend) === null || L === void 0 ? void 0 : L.getRecord(Object.assign({
        apiKey: D,
        apiUrl: z,
        projectId: k,
        language: m,
        namespace: T,
        filterTag: Z
      }, y()));
    },
    getLanguageDetector() {
      return o.languageDetector;
    },
    retranslate() {
      var m;
      (m = o.observer) === null || m === void 0 || m.retranslate();
    },
    highlight: (m, T) => {
      var L, D;
      return ((D = (L = o.observer) === null || L === void 0 ? void 0 : L.highlight) === null || D === void 0 ? void 0 : D.call(L, m, T)) || { unhighlight() {
      } };
    },
    unwrap(m) {
      var T;
      return o.observer ? (T = o.observer) === null || T === void 0 ? void 0 : T.unwrap(m) : { text: m, keys: [] };
    },
    wrap(m) {
      var T;
      return o.observer ? (T = o.observer) === null || T === void 0 ? void 0 : T.wrap(m) : m.translation;
    },
    hasDevBackend() {
      return !!N.getDevBackend();
    },
    formatTranslation(m) {
      var T, { formatEnabled: L } = m, D = Vn(m, ["formatEnabled"]);
      const { key: z, translation: k, defaultValue: Z, noWrap: Me, params: ue, ns: fr, orEmpty: dr } = D, le = k ?? Z;
      let Ct = "";
      k == null && (Ct = t().onTranslationMissing(D));
      let j = le ?? (dr ? "" : Ct);
      const Ee = e(), wt = L || !(!((T = o.observer) === null || T === void 0) && T.outputNotFormattable), Lt = (K) => o.observer && !Me ? o.observer.wrap({
        key: z,
        translation: K,
        defaultValue: Z,
        params: ue,
        ns: fr
      }) : K;
      j = Lt(j);
      try {
        if (le && Ee && wt)
          for (const K of o.formatters)
            j = K.format({
              translation: j,
              language: Ee,
              params: ue
            });
        o.finalFormatter && le && Ee && wt && (j = o.finalFormatter.format({
          translation: j,
          language: Ee,
          params: ue
        }));
      } catch (K) {
        console.error(K);
        const gr = na(K) || it, Ue = t().onFormatError, St = typeof Ue;
        St === "string" ? j = Ue : St === "function" ? j = Ue(gr, D) : j = it, j = Lt(j);
      }
      return j;
    }
  });
  return N;
}
const Yt = (e, t, r) => {
  let n = e;
  return Object.freeze({
    init(i) {
      n = i;
    },
    notify() {
      const i = t();
      n !== i && r(i), n = i;
    }
  });
};
function ga(e, t, r) {
  let n = Zt(), i;
  const a = Object.freeze({
    init(s) {
      n = Zt(s, n);
    },
    isRunning() {
      return n.isRunning;
    },
    setRunning(s) {
      n.isRunning !== s && (n.isRunning = s, r.emit(s));
    },
    isInitialLoading() {
      return n.isInitialLoading;
    },
    setInitialLoading(s) {
      n.isInitialLoading = s;
    },
    getLanguage() {
      return n.language || n.initialOptions.language;
    },
    setLanguage(s) {
      n.language !== s && (n.language = s, e.emit(s));
    },
    getPendingLanguage() {
      return n.pendingLanguage || a.getLanguage();
    },
    setPendingLanguage(s) {
      n.pendingLanguage !== s && (n.pendingLanguage = s, t.emit(s));
    },
    getInitialOptions() {
      return Object.assign(Object.assign({}, n.initialOptions), i);
    },
    addActiveNs(s) {
      V(s).forEach((u) => {
        const o = n.activeNamespaces.get(u);
        o !== void 0 ? n.activeNamespaces.set(u, o + 1) : n.activeNamespaces.set(u, 1);
      });
    },
    removeActiveNs(s) {
      V(s).forEach((u) => {
        const o = n.activeNamespaces.get(u);
        o !== void 0 && o > 1 ? n.activeNamespaces.set(u, o - 1) : n.activeNamespaces.delete(u);
      });
    },
    getRequiredNamespaces() {
      return rt([
        ...n.initialOptions.ns || [n.initialOptions.defaultNs],
        ...V(n.initialOptions.fallbackNs),
        ...n.activeNamespaces.keys()
      ]);
    },
    getFallbackLangs(s) {
      const l = s || a.getLanguage();
      return l ? rt([
        l,
        ...ta(l, n.initialOptions.fallbackLanguage)
      ]) : [];
    },
    getFallbackNs() {
      return V(n.initialOptions.fallbackNs);
    },
    getDefaultNs(s) {
      return s === void 0 ? n.initialOptions.defaultNs : s;
    },
    getAvailableLanguages() {
      if (n.initialOptions.availableLanguages)
        return n.initialOptions.availableLanguages;
      if (n.initialOptions.staticData) {
        const s = Object.keys(n.initialOptions.staticData).map((l) => he(l).language);
        return Array.from(new Set(s));
      }
    },
    withDefaultNs(s) {
      return {
        namespace: s.namespace === void 0 ? a.getInitialOptions().defaultNs : s.namespace,
        language: s.language
      };
    },
    overrideCredentials(s) {
      s ? i = Object.assign(Object.assign({}, s), { apiUrl: Gn(s.apiUrl) }) : i = void 0;
    }
  });
  return a;
}
function pa(e) {
  var { ns: t, noWrap: r, orEmpty: n, params: i, language: a } = e, s = Vn(e, ["ns", "noWrap", "orEmpty", "params", "language"]);
  return Object.assign(Object.assign({}, {
    ns: t,
    noWrap: r,
    orEmpty: n,
    language: a
  }), { params: Object.assign({}, s) });
}
const st = (e, ...t) => {
  let r = {}, n;
  return typeof e == "object" ? r = e : (r.key = e, typeof t[0] == "string" ? (r.defaultValue = t[0], n = t[1]) : typeof t[0] == "object" && (n = t[0])), n && (r = Object.assign(Object.assign({}, pa(n)), r)), r;
};
function ma({ options: e }) {
  const t = sa(u, o), r = Yt(!1, () => s.isFetching(), t.onFetchingChange.emit), n = Yt(!1, () => C.isLoading(), t.onLoadingChange.emit), i = ga(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = da(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, c, E, h, v, t), s = ua(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, r, n);
  e && y(e);
  let l;
  t.onUpdate.listen(() => {
    i.isRunning() && a.retranslate();
  });
  function u() {
    return i.getFallbackNs();
  }
  function o(d) {
    return i.getDefaultNs(d);
  }
  function c(d) {
    return [...V(o(d)), ...u()];
  }
  function f(d) {
    return [
      ...V(d ?? o()),
      ...i.getRequiredNamespaces()
    ];
  }
  function v(d, x, R) {
    const H = i.withDefaultNs(d), I = s.getTranslation(H, x);
    return s.changeTranslation(H, x, R), {
      revert() {
        s.changeTranslation(H, x, I);
      }
    };
  }
  function y(d) {
    i.init(d), s.addStaticData(i.getInitialOptions().staticData);
  }
  function w(d, x) {
    const R = i.getFallbackLangs(d), H = f(x), I = [];
    return R.forEach((N) => {
      H.forEach((m) => {
        s.exists({ language: N, namespace: m }, !0) || I.push({ language: N, namespace: m });
      });
    }), I;
  }
  function b(d, x) {
    const R = w(d, x);
    if (R.length)
      return we(C.loadRecords(R), () => {
      });
  }
  function E({ key: d, ns: x }) {
    const R = i.getFallbackLangs(), H = c(x ?? void 0);
    return s.getTranslationNs(H, R, d);
  }
  function h({ key: d, ns: x, language: R }) {
    const H = c(x ?? void 0), I = i.getFallbackLangs(R);
    return s.getTranslationFallback(H, I, d);
  }
  function p() {
    const d = we(g(), () => b());
    if (Ne(d))
      return i.setInitialLoading(!0), r.notify(), n.notify(), Promise.resolve(d).then(() => {
        i.setInitialLoading(!1), r.notify(), n.notify(), t.onInitialLoaded.emit();
      });
    t.onInitialLoaded.emit();
  }
  function g() {
    if (i.getLanguage())
      return;
    const x = a.getInitialLanguage();
    return we(x, (R) => {
      const H = R || i.getInitialOptions().defaultLanguage;
      H && i.setLanguage(H);
    });
  }
  function _() {
    if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages())
      throw new Error(Wt("availableLanguages"));
    if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage)
      throw new Error(Wt(["defaultLanguage", "language"]));
  }
  const C = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), a), s), {
    init: y,
    getTranslation: h,
    changeTranslation: v,
    getTranslationNs: E,
    getDefaultAndFallbackNs: c,
    findPositions: a.findPositions,
    getRequiredRecords: w,
    async changeLanguage(d) {
      i.getPendingLanguage() === d && i.getLanguage() === d || (i.setPendingLanguage(d), i.isRunning() && await b(d), d === i.getPendingLanguage() && (i.setLanguage(d), await a.setStoredLanguage(d)));
    },
    async addActiveNs(d, x) {
      x || i.addActiveNs(d), i.isRunning() && await b(void 0, d);
    },
    loadRecords(d) {
      return s.loadRecords(d, C.isDev());
    },
    async loadRecord(d) {
      return (await C.loadRecords([d]))[0];
    },
    isLoading(d) {
      return s.isLoading(i.getLanguage(), d);
    },
    isLoaded(d) {
      const x = i.getLanguage();
      if (!x)
        return !1;
      const R = i.getFallbackLangs(x), H = f(d), I = [];
      return R.forEach((N) => {
        H.forEach((m) => {
          s.exists({ language: N, namespace: m }) || I.push({ language: N, namespace: m });
        });
      }), I.length === 0;
    },
    t: (...d) => {
      const x = st(...d), R = h(x);
      return a.formatTranslation(Object.assign(Object.assign({}, x), { translation: R }));
    },
    isDev() {
      return !!(i.getInitialOptions().apiKey && i.getInitialOptions().apiUrl);
    },
    run() {
      return _(), i.isRunning() || (i.setRunning(!0), a.run(), l = p()), Promise.resolve(l);
    },
    stop() {
      i.isRunning() && (a.stop(), i.setRunning(!1));
    }
  }));
  return C;
}
function va(e) {
  const t = ma({
    options: e
  });
  t.isDev() && t.invalidate();
  function r(i) {
    const a = t.isRunning();
    a && t.stop(), i(), t.isDev() && t.invalidate(), a && t.run();
  }
  const n = Object.freeze({
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
      r(() => t.overrideCredentials(i));
    },
    /**
     * Add tolgee plugin after initialization.
     *
     * When called in running state, tolgee stops and runs again.
     */
    addPlugin(i) {
      i && r(() => t.addPlugin(n, i));
    },
    /**
     * Updates options after instance creation. Extends existing options,
     * so it only changes the fields, that are listed.
     *
     * When called in running state, tolgee stops and runs again.
     */
    updateOptions(i) {
      i && r(() => t.init(i));
    }
  });
  return n;
}
const ba = () => {
  const e = {
    plugins: [],
    options: {}
  }, t = Object.freeze({
    use(r) {
      return e.plugins.push(r), t;
    },
    updateDefaults(r) {
      return e.options = at(e.options, r), t;
    },
    init(r) {
      const n = va(at(e.options, r));
      return e.plugins.forEach(n.addPlugin), n;
    }
  });
  return t;
}, zn = 0, ot = 1, ya = 2;
let Ea = class extends Error {
  constructor(t, r, n) {
    let i, a = "";
    t === zn ? i = "Empty parameter" : t === ot ? (i = "Unexpected character", a = "Did you forget to use FormatIcu to render ICU message syntax?") : i = "Unexpected end", super(`Tolgee parser: ${i} at ${r} in "${n}"` + (a ? `
` + a : "")), this.code = t, this.index = r;
  }
};
function Jt(e) {
  return /\s/.test(e);
}
const Y = 0, ut = 1, Le = 2, je = 3, $e = 4, xa = /* @__PURE__ */ new Set([
  Le,
  ut,
  Y
]), lt = "'", _a = /* @__PURE__ */ new Set(["{", "}", lt]), Ta = (e) => /[0-9a-zA-Z_]/.test(e);
function Ca(e) {
  let t = Y, r = "", n = "", i = "";
  const a = [], s = [];
  let l = 0;
  function u(v) {
    throw new Ea(v, l, e);
  }
  const o = () => {
    a.push(r), r = "";
  }, c = () => {
    Ta(i) || u(ot), n += i;
  }, f = () => {
    n === "" && u(zn), s.push(n), n = "";
  };
  for (l = 0; l < e.length; l++)
    switch (i = e[l], t) {
      case Y:
        i === lt ? (r += i, t = ut) : i === "{" ? (o(), t = je) : (r += i, t = Y);
        break;
      case ut:
        _a.has(i) ? (r = r.slice(0, -1) + i, t = Le) : (r += i, t = Y);
        break;
      case Le:
        i === lt ? t = Y : (r += i, t = Le);
        break;
      case je:
        i === "}" ? (f(), t = Y) : Jt(i) ? n !== "" && (f(), t = $e) : (c(), t = je);
        break;
      case $e:
        i == "}" ? t = Y : Jt(i) ? t = $e : u(ot);
    }
  return xa.has(t) || u(ya), o(), [a, s];
}
function wa(e, t) {
  const [r, n] = Ca(e), i = [r[0]];
  for (let a = 1; a < r.length; a++) {
    const s = t == null ? void 0 : t[n[a - 1]];
    if (s === void 0)
      throw new Error(`Missing parameter "${n[a - 1]}" in "${e}"`);
    i.push(String(s)), i.push(r[a]);
  }
  return i.join("");
}
function La() {
  return {
    format: ({ translation: e, params: t }) => wa(e, t)
  };
}
const Sa = () => (e, t) => (t.setFinalFormatter(La()), e);
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qt = {};
(function(e) {
  function t(h, p) {
    var g;
    return h instanceof Buffer ? g = h : g = Buffer.from(h.buffer, h.byteOffset, h.byteLength), g.toString(p);
  }
  var r = function(h) {
    return Buffer.from(h);
  };
  function n(h) {
    for (var p = 0, g = Math.min(256 * 256, h.length + 1), _ = new Uint16Array(g), C = [], d = 0; ; ) {
      var x = p < h.length;
      if (!x || d >= g - 1) {
        var R = _.subarray(0, d), H = R;
        if (C.push(String.fromCharCode.apply(null, H)), !x)
          return C.join("");
        h = h.subarray(p), p = 0, d = 0;
      }
      var I = h[p++];
      if ((I & 128) === 0)
        _[d++] = I;
      else if ((I & 224) === 192) {
        var N = h[p++] & 63;
        _[d++] = (I & 31) << 6 | N;
      } else if ((I & 240) === 224) {
        var N = h[p++] & 63, m = h[p++] & 63;
        _[d++] = (I & 31) << 12 | N << 6 | m;
      } else if ((I & 248) === 240) {
        var N = h[p++] & 63, m = h[p++] & 63, T = h[p++] & 63, L = (I & 7) << 18 | N << 12 | m << 6 | T;
        L > 65535 && (L -= 65536, _[d++] = L >>> 10 & 1023 | 55296, L = 56320 | L & 1023), _[d++] = L;
      }
    }
  }
  function i(h) {
    for (var p = 0, g = h.length, _ = 0, C = Math.max(32, g + (g >>> 1) + 7), d = new Uint8Array(C >>> 3 << 3); p < g; ) {
      var x = h.charCodeAt(p++);
      if (x >= 55296 && x <= 56319) {
        if (p < g) {
          var R = h.charCodeAt(p);
          (R & 64512) === 56320 && (++p, x = ((x & 1023) << 10) + (R & 1023) + 65536);
        }
        if (x >= 55296 && x <= 56319)
          continue;
      }
      if (_ + 4 > d.length) {
        C += 8, C *= 1 + p / h.length * 2, C = C >>> 3 << 3;
        var H = new Uint8Array(C);
        H.set(d), d = H;
      }
      if ((x & 4294967168) === 0) {
        d[_++] = x;
        continue;
      } else if ((x & 4294965248) === 0)
        d[_++] = x >>> 6 & 31 | 192;
      else if ((x & 4294901760) === 0)
        d[_++] = x >>> 12 & 15 | 224, d[_++] = x >>> 6 & 63 | 128;
      else if ((x & 4292870144) === 0)
        d[_++] = x >>> 18 & 7 | 240, d[_++] = x >>> 12 & 63 | 128, d[_++] = x >>> 6 & 63 | 128;
      else
        continue;
      d[_++] = x & 63 | 128;
    }
    return d.slice ? d.slice(0, _) : d.subarray(0, _);
  }
  var a = "Failed to ", s = function(h, p, g) {
    if (h)
      throw new Error("".concat(a).concat(p, ": the '").concat(g, "' option is unsupported."));
  }, l = typeof Buffer == "function" && Buffer.from, u = l ? r : i;
  function o() {
    this.encoding = "utf-8";
  }
  o.prototype.encode = function(h, p) {
    return s(p && p.stream, "encode", "stream"), u(h);
  };
  function c(h) {
    var p;
    try {
      var g = new Blob([h], { type: "text/plain;charset=UTF-8" });
      p = URL.createObjectURL(g);
      var _ = new XMLHttpRequest();
      return _.open("GET", p, !1), _.send(), _.responseText;
    } finally {
      p && URL.revokeObjectURL(p);
    }
  }
  var f = !l && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", v = ["utf-8", "utf8", "unicode-1-1-utf-8"], y = n;
  l ? y = t : f && (y = function(h) {
    try {
      return c(h);
    } catch {
      return n(h);
    }
  });
  var w = "construct 'TextDecoder'", b = "".concat(a, " ").concat(w, ": the ");
  function E(h, p) {
    s(p && p.fatal, w, "fatal"), h = h || "utf-8";
    var g;
    if (l ? g = Buffer.isEncoding(h) : g = v.indexOf(h.toLowerCase()) !== -1, !g)
      throw new RangeError("".concat(b, " encoding label provided ('").concat(h, "') is invalid."));
    this.encoding = h, this.fatal = !1, this.ignoreBOM = !1;
  }
  E.prototype.decode = function(h, p) {
    s(p && p.stream, "decode", "stream");
    var g;
    return h instanceof Uint8Array ? g = h : h.buffer instanceof ArrayBuffer ? g = new Uint8Array(h.buffer) : g = new Uint8Array(h), y(g, this.encoding);
  }, e.TextEncoder = e.TextEncoder || o, e.TextDecoder = e.TextDecoder || E;
})(typeof window < "u" ? window : Ve);
const Oa = /* @__PURE__ */ Ki({
  __proto__: null,
  default: Qt
}, [Qt]);
(zt = console.assert) == null || zt.call(console, Oa);
function Aa(e, t) {
  const r = (n) => {
    var i, a;
    e.includes((i = n.data) == null ? void 0 : i.type) && t((a = n.data) == null ? void 0 : a.data);
  };
  return window.addEventListener("message", r, !1), {
    unsubscribe() {
      window.removeEventListener("message", r);
    }
  };
}
function Ba({
  message: e,
  recievingMessage: t,
  data: r,
  attempts: n = 1,
  timeout: i = 300
}) {
  let a = !1;
  const s = () => new Promise((u, o) => {
    const c = Aa(t, v);
    window.postMessage({ type: e, data: r }, window.origin);
    const f = setTimeout(w, i);
    function v(b) {
      clearTimeout(f), y(), u(b);
    }
    function y() {
      c.unsubscribe();
    }
    function w() {
      y(), o();
    }
  });
  return {
    cancel() {
      a = !0;
    },
    promise: (async () => {
      for (let u = 0; u < n; u++) {
        if (a)
          return new Promise(() => {
          });
        try {
          return await s();
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
function Pa() {
  let e;
  async function t(r) {
    e == null || e();
    const { cancel: n, promise: i } = Ba({
      message: "TOLGEE_READY",
      recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
      data: r,
      attempts: 4
    });
    return e = n, i;
  }
  return {
    update: t
  };
}
const Ra = "tolgee-in-context-tools.umd.min.js", Ha = "@tolgee/in-context-tools", Ia = "InContextTools", Na = "https://cdn.jsdelivr.net/npm";
function Da(e) {
  return new Promise((t, r) => {
    const n = document.createElement("script");
    n.src = e, n.addEventListener("load", () => t()), n.addEventListener("error", (i) => r(i.error)), document.head.appendChild(n);
  });
}
let ze = null;
function Fa(e) {
  return ze || (ze = Da(
    `${Na}/@tolgee/web@${e}/dist/${Ra}`
  ).then(() => window[Ha][Ia])), ze;
}
const Wn = "__tolgee_apiKey", Xn = "__tolgee_apiUrl";
function Kt() {
  const e = sessionStorage.getItem(Wn) || void 0, t = sessionStorage.getItem(Xn) || void 0;
  if (!(!e || !t))
    return {
      apiKey: e,
      apiUrl: t
    };
}
function Ma() {
  sessionStorage.removeItem(Wn), sessionStorage.removeItem(Xn);
}
function Ua(e) {
  document.readyState !== "loading" ? Promise.resolve().then(() => {
    e();
  }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
}
let qn = () => (e) => e;
const ka = () => {
  if (typeof window > "u")
    return !1;
  try {
    return typeof sessionStorage < "u" && sessionStorage;
  } catch (e) {
    return console.error("sessionStorage not available", e), !1;
  }
};
ka() && (qn = () => (e) => {
  const t = Pa(), r = () => ({
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
  }), n = async () => {
    const a = await Fa(
      "prerelease"
    );
    return (s) => {
      const l = Kt();
      return s.addPlugin(a({ credentials: l })), s;
    };
  };
  return e.on("running", ({ value: a }) => {
    a && Ua(() => {
      t.update(r()).catch(Ma);
    });
  }), Kt() && n().then((a) => {
    e.addPlugin(a);
  }).catch((a) => {
    console.error("Tolgee: Failed to load in-context tools"), console.error(a);
  }), e;
});
const Ga = (e, t, r, n) => {
  var i = n, { signal: a } = i, s = Un(i, ["signal"]);
  const l = new AbortController();
  return new Promise((u, o) => {
    const c = e(t, ne({ signal: l.signal }, s));
    let f = !1;
    function v(b) {
      !f && u(b), f = !0;
    }
    function y(b) {
      !f && o(b), f = !0;
    }
    function w() {
      const b = new Error(`TIMEOUT: ${t}`);
      l.abort(b), y(b);
    }
    if (a && a.addEventListener("abort", w), r !== void 0) {
      const b = setTimeout(w, r);
      c.finally(() => clearTimeout(b));
    }
    c.catch(y).then(v);
  });
};
function en(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
const ja = ({ namespace: e, language: t, prefix: r }) => e ? `${en(r)}/${e}/${t}.json` : `${en(r)}/${t}.json`;
function $a(e) {
  return e.json();
}
const tn = {
  prefix: "/i18n",
  getPath: ja,
  getData: $a,
  headers: {
    Accept: "application/json"
  },
  timeout: void 0,
  fallbackOnFail: !1
};
function Va(e) {
  const t = Qi(ne(ne({}, tn), e), {
    headers: ne(ne({}, tn.headers), e == null ? void 0 : e.headers)
  }), {
    prefix: r,
    getPath: n,
    getData: i,
    headers: a,
    timeout: s,
    fallbackOnFail: l
  } = t, u = Un(t, [
    "prefix",
    "getPath",
    "getData",
    "headers",
    "timeout",
    "fallbackOnFail"
  ]);
  return {
    async getRecord({ namespace: o, language: c, fetch: f }) {
      const v = n({
        namespace: o,
        language: c,
        prefix: r
      });
      try {
        const y = await Ga(f, v, s, ne({
          headers: a
        }, u));
        if (!y.ok)
          throw new Error(`${y.url} ${y.status}`);
        return await i(y);
      } catch (y) {
        if (l)
          return;
        throw y;
      }
    }
  };
}
const za = (e) => (t, r) => (r.addBackend(Va(e)), t);
function Wa() {
  return ba().use(qn());
}
const Xa = () => (e) => e;
q({
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
    const r = B(() => t.value.tolgee);
    if (!r.value)
      throw new Error("Tolgee instance not provided");
    if (t.value.isInitialRender) {
      if (!e.staticData || !e.language)
        throw new Error('TolgeeProvider: "staticData" and "language" props are required for SSR.');
      if (r.value.setEmitterActive(!1), r.value.addStaticData(e.staticData), r.value.changeLanguage(e.language), r.value.setEmitterActive(!0), !r.value.isLoaded()) {
        const i = r.value.getRequiredRecords(e.language).map(({ namespace: a, language: s }) => a ? `${a}:${s}` : s).filter((a) => {
          var s;
          return !(!((s = e.staticData) === null || s === void 0) && s[a]);
        });
        console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((a) => `"${a}"`).join(", ")}`);
      }
    }
    Ar(() => {
      t.value.isInitialRender = !1;
    });
    const n = J(!r.value.isLoaded());
    return Br(() => {
      r.value.run().finally(() => {
        n.value = !1;
      });
    }), gn(() => {
      r.value.stop();
    }), { isLoading: n };
  },
  render() {
    var e, t, r, n;
    return this.isLoading ? ((n = (r = this.$slots).fallback) === null || n === void 0 ? void 0 : n.call(r)) || this.fallback || null : (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
});
const qa = (e) => {
  const t = kn(e), r = be("tolgeeContext"), n = B(() => r.value.tolgee);
  if (!n.value)
    throw new Error("Tolgee instance not provided");
  const i = J(u()), a = n.value.onNsUpdate(() => {
    i.value = u(), s.value = !n.value.isLoaded(t);
  });
  a.subscribeNs(t), n.value.addActiveNs(t), gn(() => {
    a == null || a.unsubscribe(), n.value.removeActiveNs(t);
  });
  const s = J(!n.value.isLoaded(t)), l = (o) => {
    a.subscribeNs(o);
  };
  function u() {
    return (o) => {
      var c;
      const f = (c = o.ns) !== null && c !== void 0 ? c : t == null ? void 0 : t[0];
      return l(f), n.value.t(Object.assign(Object.assign({}, o), { ns: f }));
    };
  }
  return { t: i, isLoading: s };
};
q({
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
    const { t: e } = qa();
    return { t: e };
  },
  render() {
    const e = {};
    Object.keys(this.$slots).forEach((i) => {
      e[i] = this.$slots[i]();
    });
    const t = Object.assign({}, this.$props.params, e), r = {
      key: this.$props.keyName,
      params: t,
      defaultValue: this.$props.defaultValue,
      noWrap: this.$props.noWrap,
      ns: this.$props.ns,
      language: this.$props.language
    };
    return this.t(r);
  }
});
const Za = {
  install(e, t) {
    const r = t == null ? void 0 : t.tolgee;
    if (!r)
      throw new Error("Tolgee instance not passed in options");
    const n = !!(t != null && t.enableSSR), i = J({
      tolgee: r,
      isInitialRender: n
    });
    if (e.provide("tolgeeContext", i), n) {
      const a = () => Object.assign(Object.assign({}, i.value.tolgee), { t: (...l) => {
        const u = st(...l);
        return r.t(Object.assign({}, u));
      } }), s = () => Object.assign(Object.assign({}, i.value.tolgee), { t: (...l) => {
        const u = st(...l);
        return r.t(Object.assign(Object.assign({}, u), { noWrap: !0 }));
      } });
      i.value.tolgee = s(), Et(() => i.value.isInitialRender, (l) => {
        l || (i.value.tolgee = a());
      });
    }
    i.value.tolgee.on("cache", () => {
      i.value.tolgee = Object.freeze(Object.assign({}, i.value.tolgee));
    }), e.config.globalProperties.$t = (...a) => i.value.tolgee.t(...a), e.config.globalProperties.$tolgee = i.value.tolgee;
  }
};
var ct = function(e, t) {
  return ct = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, ct(e, t);
};
function De(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ct(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var A = function() {
  return A = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, A.apply(this, arguments);
};
function Ya(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function We(e, t, r) {
  if (arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Xe(e, t) {
  var r = t && t.cache ? t.cache : ns, n = t && t.serializer ? t.serializer : ts, i = t && t.strategy ? t.strategy : Ka;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Ja(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Qa(e, t, r, n) {
  var i = Ja(n) ? n : r(n), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, n), t.set(i, a)), a;
}
function Zn(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, n), t.set(i, a)), a;
}
function Yn(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Ka(e, t) {
  var r = e.length === 1 ? Qa : Zn;
  return Yn(e, this, r, t.cache.create(), t.serializer);
}
function es(e, t) {
  return Yn(e, this, Zn, t.cache.create(), t.serializer);
}
var ts = function() {
  return JSON.stringify(arguments);
};
function Tt() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Tt.prototype.get = function(e) {
  return this.cache[e];
};
Tt.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var ns = {
  create: function() {
    return new Tt();
  }
}, qe = {
  variadic: es
}, S;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(S || (S = {}));
var P;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(P || (P = {}));
var ae;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(ae || (ae = {}));
function nn(e) {
  return e.type === P.literal;
}
function rs(e) {
  return e.type === P.argument;
}
function Jn(e) {
  return e.type === P.number;
}
function Qn(e) {
  return e.type === P.date;
}
function Kn(e) {
  return e.type === P.time;
}
function er(e) {
  return e.type === P.select;
}
function tr(e) {
  return e.type === P.plural;
}
function is(e) {
  return e.type === P.pound;
}
function nr(e) {
  return e.type === P.tag;
}
function rr(e) {
  return !!(e && typeof e == "object" && e.type === ae.number);
}
function ht(e) {
  return !!(e && typeof e == "object" && e.type === ae.dateTime);
}
var ir = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, as = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ss(e) {
  var t = {};
  return e.replace(as, function(r) {
    var n = r.length;
    switch (r[0]) {
      // Era
      case "G":
        t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        t.year = n === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
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
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        t.minute = ["numeric", "2-digit"][n - 1];
        break;
      // Second
      case "s":
        t.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        t.timeZoneName = n < 4 ? "short" : "long";
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
var os = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function us(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(os).filter(function(v) {
    return v.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var a = i[n], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = s[0], u = s.slice(1), o = 0, c = u; o < c.length; o++) {
      var f = c[o];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: l, options: u });
  }
  return r;
}
function ls(e) {
  return e.replace(/^(.*?)-/, "");
}
var rn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ar = /^(@+)?(\+|#+)?[rs]?$/g, cs = /(\*)(0+)|(#+)(0+)|(0+)/g, sr = /^(0+)$/;
function an(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ar, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function or(e) {
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
function hs(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !sr.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function sn(e) {
  var t = {}, r = or(e);
  return r || t;
}
function fs(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r];
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
        t.style = "unit", t.unit = ls(i.options[0]);
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
        t = A(A(A({}, t), { notation: "scientific" }), i.options.reduce(function(u, o) {
          return A(A({}, u), sn(o));
        }, {}));
        continue;
      case "engineering":
        t = A(A(A({}, t), { notation: "engineering" }), i.options.reduce(function(u, o) {
          return A(A({}, u), sn(o));
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
        i.options[0].replace(cs, function(u, o, c, f, v, y) {
          if (o)
            t.minimumIntegerDigits = c.length;
          else {
            if (f && v)
              throw new Error("We currently do not support maximum integer digits");
            if (y)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (sr.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (rn.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(rn, function(u, o, c, f, v, y) {
        return c === "*" ? t.minimumFractionDigits = o.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : v && y ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + y.length) : (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = A(A({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = A(A({}, t), an(a)));
      continue;
    }
    if (ar.test(i.stem)) {
      t = A(A({}, t), an(i.stem));
      continue;
    }
    var s = or(i.stem);
    s && (t = A(A({}, t), s));
    var l = hs(i.stem);
    l && (t = A(A({}, t), l));
  }
  return t;
}
var Te = {
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
function ds(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        a++, n++;
      var s = 1 + (a & 1), l = a < 2 ? 1 : 3 + (a >> 1), u = "a", o = gs(t);
      for ((o == "H" || o == "k") && (l = 0); l-- > 0; )
        r += u;
      for (; s-- > 0; )
        r = o + r;
    } else i === "J" ? r += "H" : r += i;
  }
  return r;
}
function gs(e) {
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
  var r = e.language, n;
  r !== "root" && (n = e.maximize().region);
  var i = Te[n || ""] || Te[r || ""] || Te["".concat(r, "-001")] || Te["001"];
  return i[0];
}
var Ze, ps = new RegExp("^".concat(ir.source, "*")), ms = new RegExp("".concat(ir.source, "*$"));
function O(e, t) {
  return { start: e, end: t };
}
var vs = !!String.prototype.startsWith && "_a".startsWith("a", 1), bs = !!String.fromCodePoint, ys = !!Object.fromEntries, Es = !!String.prototype.codePointAt, xs = !!String.prototype.trimStart, _s = !!String.prototype.trimEnd, Ts = !!Number.isSafeInteger, Cs = Ts ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ft = !0;
try {
  var ws = lr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ft = ((Ze = ws.exec("a")) === null || Ze === void 0 ? void 0 : Ze[0]) === "a";
} catch {
  ft = !1;
}
var on = vs ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), dt = bs ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    for (var n = "", i = t.length, a = 0, s; i > a; ) {
      if (s = t[a++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      n += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return n;
  }
), un = (
  // native
  ys ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var a = i[n], s = a[0], l = a[1];
        r[s] = l;
      }
      return r;
    }
  )
), ur = Es ? (
  // Native
  function(t, r) {
    return t.codePointAt(r);
  }
) : (
  // IE 11
  function(t, r) {
    var n = t.length;
    if (!(r < 0 || r >= n)) {
      var i = t.charCodeAt(r), a;
      return i < 55296 || i > 56319 || r + 1 === n || (a = t.charCodeAt(r + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), Ls = xs ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ps, "");
  }
), Ss = _s ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ms, "");
  }
);
function lr(e, t) {
  return new RegExp(e, t);
}
var gt;
if (ft) {
  var ln = lr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  gt = function(t, r) {
    var n;
    ln.lastIndex = r;
    var i = ln.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  gt = function(t, r) {
    for (var n = []; ; ) {
      var i = ur(t, r);
      if (i === void 0 || cr(i) || Ps(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return dt.apply(void 0, n);
  };
var Os = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, r, n) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var s = this.parseArgument(t, n);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (r === "plural" || r === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), i.push({
              type: P.pound,
              location: O(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(S.UNMATCHED_CLOSING_TAG, O(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && pt(this.peek() || 0)) {
            var s = this.parseTag(t, r);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(t, r);
            if (s.err)
              return s;
            i.push(s.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, r) {
      var n = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: P.literal,
            value: "<".concat(i, "/>"),
            location: O(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, r, !0);
        if (a.err)
          return a;
        var s = a.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !pt(this.char()))
            return this.error(S.INVALID_TAG, O(l, this.clonePosition()));
          var u = this.clonePosition(), o = this.parseTagName();
          return i !== o ? this.error(S.UNMATCHED_CLOSING_TAG, O(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: P.tag,
              value: i,
              children: s,
              location: O(n, this.clonePosition())
            },
            err: null
          } : this.error(S.INVALID_TAG, O(l, this.clonePosition())));
        } else
          return this.error(S.UNCLOSED_TAG, O(n, this.clonePosition()));
      } else
        return this.error(S.INVALID_TAG, O(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Bs(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, r) {
      for (var n = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(r);
        if (a) {
          i += a;
          continue;
        }
        var s = this.tryParseUnquoted(t, r);
        if (s) {
          i += s;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          i += l;
          continue;
        }
        break;
      }
      var u = O(n, this.clonePosition());
      return {
        val: { type: P.literal, value: i, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !As(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(n);
        this.bump();
      }
      return dt.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), dt(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, O(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(S.EMPTY_ARGUMENT, O(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(S.MALFORMED_ARGUMENT, O(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, O(n, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: P.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: O(n, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, O(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(S.MALFORMED_ARGUMENT, O(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = gt(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = O(t, a);
      return { value: n, location: s };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var a, s = this.clonePosition(), l = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (l) {
        case "":
          return this.error(S.EXPECT_ARGUMENT_TYPE, O(s, u));
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
            var v = Ss(f.val);
            if (v.length === 0)
              return this.error(S.EXPECT_ARGUMENT_STYLE, O(this.clonePosition(), this.clonePosition()));
            var y = O(c, this.clonePosition());
            o = { style: v, styleLocation: y };
          }
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var b = O(i, this.clonePosition());
          if (o && on(o == null ? void 0 : o.style, "::", 0)) {
            var E = Ls(o.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(E, o.styleLocation);
              return f.err ? f : {
                val: { type: P.number, value: n, location: b, style: f.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(S.EXPECT_DATE_TIME_SKELETON, b);
              var h = E;
              this.locale && (h = ds(E, this.locale));
              var v = {
                type: ae.dateTime,
                pattern: h,
                location: o.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? ss(h) : {}
              }, p = l === "date" ? P.date : P.time;
              return {
                val: { type: p, value: n, location: b, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? P.number : l === "date" ? P.date : P.time,
              value: n,
              location: b,
              style: (a = o == null ? void 0 : o.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var g = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(S.EXPECT_SELECT_ARGUMENT_OPTIONS, O(g, A({}, g)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), C = 0;
          if (l !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, O(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, S.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), C = f.val;
          }
          var d = this.tryParsePluralOrSelectOptions(t, l, r, _);
          if (d.err)
            return d;
          var w = this.tryParseArgumentClose(i);
          if (w.err)
            return w;
          var x = O(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: P.select,
              value: n,
              options: un(d.val),
              location: x
            },
            err: null
          } : {
            val: {
              type: P.plural,
              value: n,
              options: un(d.val),
              offset: C,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: x
            },
            err: null
          };
        }
        default:
          return this.error(S.INVALID_ARGUMENT_TYPE, O(s, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, O(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(S.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, O(i, this.clonePosition()));
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
                val: this.message.slice(r.offset, this.offset()),
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
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
      var n = [];
      try {
        n = us(t);
      } catch {
        return this.error(S.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: ae.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? fs(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var a, s = !1, l = [], u = /* @__PURE__ */ new Set(), o = i.value, c = i.location; ; ) {
        if (o.length === 0) {
          var f = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_SELECTOR, S.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            c = O(f, this.clonePosition()), o = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (u.has(o))
          return this.error(r === "select" ? S.DUPLICATE_SELECT_ARGUMENT_SELECTOR : S.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        o === "other" && (s = !0), this.bumpSpace();
        var y = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? S.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : S.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, O(this.clonePosition(), this.clonePosition()));
        var w = this.parseMessage(t + 1, r, n);
        if (w.err)
          return w;
        var b = this.tryParseArgumentClose(y);
        if (b.err)
          return b;
        l.push([
          o,
          {
            value: w.val,
            location: O(y, this.clonePosition())
          }
        ]), u.add(o), this.bumpSpace(), a = this.parseIdentifierIfPossible(), o = a.value, c = a.location;
      }
      return l.length === 0 ? this.error(r === "select" ? S.EXPECT_SELECT_ARGUMENT_SELECTOR : S.EXPECT_PLURAL_ARGUMENT_SELECTOR, O(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(S.MISSING_OTHER_CLAUSE, O(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          a = !0, s = s * 10 + (l - 48), this.bump();
        else
          break;
      }
      var u = O(i, this.clonePosition());
      return a ? (s *= n, Cs(s) ? { val: s, err: null } : this.error(r, u)) : this.error(t, u);
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
      var r = ur(this.message, t);
      if (r === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, e.prototype.error = function(t, r) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: r
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (on(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var r = this.offset(), n = this.message.indexOf(t, r);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset();
        if (r === t)
          break;
        if (r > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && cr(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function pt(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function As(e) {
  return pt(e) || e === 47;
}
function Bs(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function cr(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ps(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function mt(e) {
  e.forEach(function(t) {
    if (delete t.location, er(t) || tr(t))
      for (var r in t.options)
        delete t.options[r].location, mt(t.options[r].value);
    else Jn(t) && rr(t.style) || (Qn(t) || Kn(t)) && ht(t.style) ? delete t.style.location : nr(t) && mt(t.children);
  });
}
function Rs(e, t) {
  t === void 0 && (t = {}), t = A({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new Os(e, t).parse();
  if (r.err) {
    var n = SyntaxError(S[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || mt(r.val), r.val;
}
var se;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(se || (se = {}));
var Fe = (
  /** @class */
  function(e) {
    De(t, e);
    function t(r, n, i) {
      var a = e.call(this, r) || this;
      return a.code = n, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), cn = (
  /** @class */
  function(e) {
    De(t, e);
    function t(r, n, i, a) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), se.INVALID_VALUE, a) || this;
    }
    return t;
  }(Fe)
), Hs = (
  /** @class */
  function(e) {
    De(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), se.INVALID_VALUE, i) || this;
    }
    return t;
  }(Fe)
), Is = (
  /** @class */
  function(e) {
    De(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), se.MISSING_VALUE, n) || this;
    }
    return t;
  }(Fe)
), U;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(U || (U = {}));
function Ns(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== U.literal || r.type !== U.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function Ds(e) {
  return typeof e == "function";
}
function Se(e, t, r, n, i, a, s) {
  if (e.length === 1 && nn(e[0]))
    return [
      {
        type: U.literal,
        value: e[0].value
      }
    ];
  for (var l = [], u = 0, o = e; u < o.length; u++) {
    var c = o[u];
    if (nn(c)) {
      l.push({
        type: U.literal,
        value: c.value
      });
      continue;
    }
    if (is(c)) {
      typeof a == "number" && l.push({
        type: U.literal,
        value: r.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new Is(f, s);
    var v = i[f];
    if (rs(c)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), l.push({
        type: typeof v == "string" ? U.literal : U.object,
        value: v
      });
      continue;
    }
    if (Qn(c)) {
      var y = typeof c.style == "string" ? n.date[c.style] : ht(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: U.literal,
        value: r.getDateTimeFormat(t, y).format(v)
      });
      continue;
    }
    if (Kn(c)) {
      var y = typeof c.style == "string" ? n.time[c.style] : ht(c.style) ? c.style.parsedOptions : n.time.medium;
      l.push({
        type: U.literal,
        value: r.getDateTimeFormat(t, y).format(v)
      });
      continue;
    }
    if (Jn(c)) {
      var y = typeof c.style == "string" ? n.number[c.style] : rr(c.style) ? c.style.parsedOptions : void 0;
      y && y.scale && (v = v * (y.scale || 1)), l.push({
        type: U.literal,
        value: r.getNumberFormat(t, y).format(v)
      });
      continue;
    }
    if (nr(c)) {
      var w = c.children, b = c.value, E = i[b];
      if (!Ds(E))
        throw new Hs(b, "function", s);
      var h = Se(w, t, r, n, i, a), p = E(h.map(function(C) {
        return C.value;
      }));
      Array.isArray(p) || (p = [p]), l.push.apply(l, p.map(function(C) {
        return {
          type: typeof C == "string" ? U.literal : U.object,
          value: C
        };
      }));
    }
    if (er(c)) {
      var g = c.options[v] || c.options.other;
      if (!g)
        throw new cn(c.value, v, Object.keys(c.options), s);
      l.push.apply(l, Se(g.value, t, r, n, i));
      continue;
    }
    if (tr(c)) {
      var g = c.options["=".concat(v)];
      if (!g) {
        if (!Intl.PluralRules)
          throw new Fe(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, se.MISSING_INTL_API, s);
        var _ = r.getPluralRules(t, { type: c.pluralType }).select(v - (c.offset || 0));
        g = c.options[_] || c.options.other;
      }
      if (!g)
        throw new cn(c.value, v, Object.keys(c.options), s);
      l.push.apply(l, Se(g.value, t, r, n, i, v - (c.offset || 0)));
      continue;
    }
  }
  return Ns(l);
}
function Fs(e, t) {
  return t ? A(A(A({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = A(A({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function Ms(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = Fs(e[n], t[n]), r;
  }, A({}, e)) : e;
}
function Ye(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function Us(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, We([void 0], r, !1)))();
    }, {
      cache: Ye(e.number),
      strategy: qe.variadic
    }),
    getDateTimeFormat: Xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, We([void 0], r, !1)))();
    }, {
      cache: Ye(e.dateTime),
      strategy: qe.variadic
    }),
    getPluralRules: Xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, We([void 0], r, !1)))();
    }, {
      cache: Ye(e.pluralRules),
      strategy: qe.variadic
    })
  };
}
var ks = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      r === void 0 && (r = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var o = a.formatToParts(u);
        if (o.length === 1)
          return o[0].value;
        var c = o.reduce(function(f, v) {
          return !f.length || v.type !== U.literal || typeof f[f.length - 1] != "string" ? f.push(v.value) : f[f.length - 1] += v.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(u) {
        return Se(a.ast, a.locales, a.formatters, a.formats, u, void 0, a.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = a.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var l = Ya(s, ["formatters"]);
        this.ast = e.__parse(t, A(A({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Ms(e.formats, n), this.formatters = i && i.formatters || Us(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var r = Intl.NumberFormat.supportedLocalesOf(t);
        return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = Rs, e.formats = {
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
), Gs = ks;
const js = () => {
  const e = /* @__PURE__ */ new Map();
  function t(i) {
    try {
      return !!Intl.NumberFormat.supportedLocalesOf(i).length;
    } catch {
      return !1;
    }
  }
  function r(i) {
    if (!e.get(i)) {
      let a = String(i).replace(/[^a-zA-Z]/g, "-");
      for (; !t(a); )
        a = a.split("-").slice(0, -1).join("-") || "en";
      e.set(i, a);
    }
    return e.get(i);
  }
  return Object.freeze({ getLanguage: r, format: ({ translation: i, language: a, params: s }) => {
    const l = !Object.values(s || {}).find((o) => typeof o == "function"), u = r(a);
    return new Gs(i, u, void 0, {
      ignoreTag: l
    }).format(s);
  } });
}, $s = () => (e, t) => (t.setFinalFormatter(js()), e), Vs = { max_length: "Invalid character length, please insert {limit} characters or less!", min_length: "Invalid character length, please insert minimum {limit} characters or more!", required: "Required!", email: "Please provide a valid e-mail address!", url: "Please provide a valid URL!", max_value: "Please provide a value less than or equal to {limit}!", min_value: "Please provide a value more than or equal to {limit}!", array_min_length: "Please select at least {limit} items!" }, zs = {
  rules: Vs
}, Ws = ["en"], Xs = [...Ws, "en-US"], qs = {
  en: zs
}, hr = Wa().use(Xa()).use(Sa()).use($s()), Zs = window.location.hostname.startsWith("deploy-preview");
Zs && hr.use(za({ prefix: "https://cdn.tolg.ee/663da029e1beb0ea0704ea269e843a5a" }));
const Ys = hr.init({
  availableLanguages: [...Xs],
  language: "en",
  staticData: qs
}), Js = {
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
}, Qs = Pr({
  icons: {
    defaultSet: "mdi",
    aliases: ai,
    sets: {
      mdi: si
    }
  },
  theme: {
    defaultTheme: "greenspark",
    themes: {
      greenspark: Js
    }
  }
});
function Ks(e) {
  e.use(Za, { tolgee: Ys }).use(Qs);
}
const eo = {
  GsButton: Ri,
  GsAlertBar: Ai,
  GsFilter: Mi,
  GsTabs: $i,
  GsTag: Wi,
  GsDivider: qi
}, io = {
  install(e) {
    Ks(e);
    for (const [t, r] of Object.entries(eo))
      e.component(t, r);
  }
};
export {
  Ai as GsAlertBar,
  Ri as GsButton,
  qi as GsDivider,
  Mi as GsFilter,
  $i as GsTabs,
  Wi as GsTag,
  io as default
};
