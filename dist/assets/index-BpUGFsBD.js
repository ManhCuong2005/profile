(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = s(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.5.42
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function In(e) {
  const t = Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const re = {},
  Et = [],
  Ge = () => {},
  Wr = () => !1,
  Hs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Rs = (e) => e.startsWith("onUpdate:"),
  xe = Object.assign,
  jn = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  },
  pl = Object.prototype.hasOwnProperty,
  Z = (e, t) => pl.call(e, t),
  V = Array.isArray,
  ft = (e) => is(e) === "[object Map]",
  Ts = (e) => is(e) === "[object Set]",
  sr = (e) => is(e) === "[object Date]",
  R = (e) => typeof e == "function",
  de = (e) => typeof e == "string",
  Xe = (e) => typeof e == "symbol",
  Y = (e) => e !== null && typeof e == "object",
  zr = (e) => (Y(e) || R(e)) && R(e.then) && R(e.catch),
  Jr = Object.prototype.toString,
  is = (e) => Jr.call(e),
  gl = (e) => is(e).slice(8, -1),
  Gr = (e) => is(e) === "[object Object]",
  On = (e) =>
    de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Wt = In(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Bs = (e) => {
    const t = Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  },
  xl = /-\w/g,
  $e = Bs((e) => e.replace(xl, (t) => t.slice(1).toUpperCase())),
  ml = /\B([A-Z])/g,
  pt = Bs((e) => e.replace(ml, "-$1").toLowerCase()),
  Ks = Bs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  rn = Bs((e) => (e ? `on${Ks(e)}` : "")),
  Je = (e, t) => !Object.is(e, t),
  ws = (e, ...t) => {
    for (let s = 0; s < e.length; s++) e[s](...t);
  },
  Xr = (e, t, s, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: s,
    });
  },
  Ln = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  bl = (e) => {
    const t = de(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let nr;
const Us = () =>
  nr ||
  (nr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function qs(e) {
  if (V(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        r = de(n) ? wl(n) : qs(n);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (de(e) || Y(e)) return e;
}
const vl = /;(?![^(]*\))/g,
  yl = /:([^]+)/,
  kl = /\/\*[^]*?\*\//g;
function wl(e) {
  const t = {};
  return (
    e
      .replace(kl, "")
      .split(vl)
      .forEach((s) => {
        if (s) {
          const n = s.split(yl);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function Le(e) {
  let t = "";
  if (de(e)) t = e;
  else if (V(e))
    for (let s = 0; s < e.length; s++) {
      const n = Le(e[s]);
      n && (t += n + " ");
    }
  else if (Y(e)) for (const s in e) e[s] && (t += s + " ");
  return t.trim();
}
const _l =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Cl = In(_l);
function Qr(e) {
  return !!e || e === "";
}
function Sl(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++) s = Ws(e[n], t[n]);
  return s;
}
function rr(e, t) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t),
    n = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!n[l] && Ws(r, s[l])) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    n[o] = 1;
  }
  return !0;
}
function Ws(e, t) {
  if (e === t) return !0;
  let s = sr(e),
    n = sr(t);
  if (s || n) return s && n ? e.getTime() === t.getTime() : !1;
  if (((s = Xe(e)), (n = Xe(t)), s || n)) return e === t;
  if (((s = V(e)), (n = V(t)), s || n)) return s && n ? Sl(e, t) : !1;
  if (((s = Y(e)), (n = Y(t)), s || n)) {
    if (!s || !n) return !1;
    if (
      ((s = ft(e)), (n = ft(t)), s || n || ((s = Ts(e)), (n = Ts(t)), s || n))
    )
      return s && n ? rr(e, t) : !1;
    const r = Object.keys(e).length,
      o = Object.keys(t).length;
    if (r !== o) return !1;
    for (const l in e) {
      const a = e.hasOwnProperty(l),
        d = t.hasOwnProperty(l);
      if ((a && !d) || (!a && d) || !Ws(e[l], t[l])) return !1;
    }
  }
  return String(e) === String(t);
}
const Zr = (e) => !!(e && e.__v_isRef === !0),
  C = (e) =>
    de(e)
      ? e
      : e == null
        ? ""
        : V(e) || (Y(e) && (e.toString === Jr || !R(e.toString)))
          ? Zr(e)
            ? C(e.value)
            : JSON.stringify(e, Yr, 2)
          : String(e),
  Yr = (e, t) =>
    Zr(t)
      ? Yr(e, t.value)
      : ft(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (s, [n, r], o) => ((s[on(n, o) + " =>"] = r), s),
              {},
            ),
          }
        : Ts(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((s) => on(s)) }
          : Xe(t)
            ? on(t)
            : Y(t) && !V(t) && !Gr(t)
              ? String(t)
              : t,
  on = (e, t = "") => {
    var s;
    return Xe(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
  };
/**
 * @vue/reactivity v3.5.42
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be;
class Tl {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this._warnOnRun = !0),
      (this.__v_skip = !0),
      !t &&
        be &&
        (be.active
          ? ((this.parent = be),
            (this.index = (be.scopes || (be.scopes = [])).push(this) - 1))
          : ((this._active = !1), (this._warnOnRun = !1))));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, s = n.length; t < s; t++) n[t].pause();
      }
      for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, s = r.length; t < s; t++) r[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, s = n.length; t < s; t++) n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = be;
      try {
        return ((be = this), t());
      } finally {
        be = s;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = be), (be = this));
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (be === this) be = this.prevScope;
      else {
        let t = be;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (((this.cleanups.length = 0), this.scopes)) {
        const r = this.scopes.slice();
        for (s = 0, n = r.length; s < n; s++) r[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function $l() {
  return be;
}
let ie;
const ln = new WeakSet();
class eo {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      be && (be.active ? be.effects.push(this) : (this.flags &= -2)));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), ln.has(this) && (ln.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || so(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), or(this), no(this));
    const t = ie,
      s = Fe;
    ((ie = this), (Fe = !0));
    try {
      return this.fn();
    } finally {
      (ro(this), (ie = t), (Fe = s), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Fn(t);
      ((this.deps = this.depsTail = void 0),
        or(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? ln.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    vn(this) && this.run();
  }
  get dirty() {
    return vn(this);
  }
}
let to = 0,
  zt,
  Jt;
function so(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = Jt), (Jt = e));
    return;
  }
  ((e.next = zt), (zt = e));
}
function Nn() {
  to++;
}
function Dn() {
  if (--to > 0) return;
  if (Jt) {
    let t = Jt;
    for (Jt = void 0; t; ) {
      const s = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = s));
    }
  }
  let e;
  for (; zt; ) {
    let t = zt;
    for (zt = void 0; t; ) {
      const s = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function no(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function ro(e) {
  let t,
    s = e.depsTail,
    n = s;
  for (; n; ) {
    const r = n.prevDep;
    (n.version === -1 ? (n === s && (s = r), Fn(n), Al(n)) : (t = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = r));
  }
  ((e.deps = t), (e.depsTail = s));
}
function vn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (oo(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function oo(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Yt) ||
    ((e.globalVersion = Yt),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !vn(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    s = ie,
    n = Fe;
  ((ie = e), (Fe = !0));
  try {
    no(e);
    const r = e.fn(e._value);
    (t.version === 0 || Je(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    ((ie = s), (Fe = n), ro(e), (e.flags &= -3));
  }
}
function Fn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (
    (n && ((n.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = n), (e.nextSub = void 0)),
    s.subs === e && ((s.subs = n), !n && s.computed))
  ) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep) Fn(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Al(e) {
  const { prevDep: t, nextDep: s } = e;
  (t && ((t.nextDep = s), (e.prevDep = void 0)),
    s && ((s.prevDep = t), (e.nextDep = void 0)));
}
let Fe = !0;
const lo = [];
function ot() {
  (lo.push(Fe), (Fe = !1));
}
function lt() {
  const e = lo.pop();
  Fe = e === void 0 ? !0 : e;
}
function or(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const s = ie;
    ie = void 0;
    try {
      t();
    } finally {
      ie = s;
    }
  }
}
let Yt = 0;
class Ml {
  constructor(t, s) {
    ((this.sub = t),
      (this.dep = s),
      (this.version = s.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class Vn {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(t) {
    if (!ie || !Fe || ie === this.computed) return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ie)
      ((s = this.activeLink = new Ml(ie, this)),
        ie.deps
          ? ((s.prevDep = ie.depsTail),
            (ie.depsTail.nextDep = s),
            (ie.depsTail = s))
          : (ie.deps = ie.depsTail = s),
        io(s));
    else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
      const n = s.nextDep;
      ((n.prevDep = s.prevDep),
        s.prevDep && (s.prevDep.nextDep = n),
        (s.prevDep = ie.depsTail),
        (s.nextDep = void 0),
        (ie.depsTail.nextDep = s),
        (ie.depsTail = s),
        ie.deps === s && (ie.deps = n));
    }
    return s;
  }
  trigger(t) {
    (this.version++, Yt++, this.notify(t));
  }
  notify(t) {
    Nn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Dn();
    }
  }
}
function io(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep) io(n);
    }
    const s = e.dep.subs;
    (s !== e && ((e.prevSub = s), s && (s.nextSub = e)), (e.dep.subs = e));
  }
}
const yn = new WeakMap(),
  Ct = Symbol(""),
  kn = Symbol(""),
  es = Symbol("");
function ve(e, t, s) {
  if (Fe && ie) {
    let n = yn.get(e);
    n || yn.set(e, (n = new Map()));
    let r = n.get(s);
    (r || (n.set(s, (r = new Vn())), (r.map = n), (r.key = s)), r.track());
  }
}
function st(e, t, s, n, r, o) {
  const l = yn.get(e);
  if (!l) {
    Yt++;
    return;
  }
  const a = (d) => {
    d && d.trigger();
  };
  if ((Nn(), t === "clear")) l.forEach(a);
  else {
    const d = V(e),
      f = d && On(s);
    if (d && s === "length") {
      const u = Number(n);
      l.forEach((p, m) => {
        (m === "length" || m === es || (!Xe(m) && m >= u)) && a(p);
      });
    } else
      switch (
        ((s !== void 0 || l.has(void 0)) && a(l.get(s)), f && a(l.get(es)), t)
      ) {
        case "add":
          d ? f && a(l.get("length")) : (a(l.get(Ct)), ft(e) && a(l.get(kn)));
          break;
        case "delete":
          d || (a(l.get(Ct)), ft(e) && a(l.get(kn)));
          break;
        case "set":
          ft(e) && a(l.get(Ct));
          break;
      }
  }
  Dn();
}
function At(e) {
  const t = X(e);
  return t === e ? t : (ve(t, "iterate", es), Ne(e) ? t : t.map(Ve));
}
function zs(e) {
  return (ve((e = X(e)), "iterate", es), e);
}
function We(e, t) {
  return it(e) ? Lt(St(e) ? Ve(t) : t) : Ve(t);
}
const Pl = {
  __proto__: null,
  [Symbol.iterator]() {
    return an(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return At(this).concat(...e.map((t) => (V(t) ? At(t) : t)));
  },
  entries() {
    return an(this, "entries", (e) => ((e[1] = We(this, e[1])), e));
  },
  every(e, t) {
    return Ze(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ze(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => We(this, n)),
      arguments,
    );
  },
  find(e, t) {
    return Ze(this, "find", e, t, (s) => We(this, s), arguments);
  },
  findIndex(e, t) {
    return Ze(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ze(this, "findLast", e, t, (s) => We(this, s), arguments);
  },
  findLastIndex(e, t) {
    return Ze(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ze(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return dn(this, "includes", e);
  },
  indexOf(...e) {
    return dn(this, "indexOf", e);
  },
  join(e) {
    return At(this).join(e);
  },
  lastIndexOf(...e) {
    return dn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ze(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ht(this, "pop");
  },
  push(...e) {
    return Ht(this, "push", e);
  },
  reduce(e, ...t) {
    return lr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return lr(this, "reduceRight", e, t);
  },
  shift() {
    return Ht(this, "shift");
  },
  some(e, t) {
    return Ze(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ht(this, "splice", e);
  },
  toReversed() {
    return At(this).toReversed();
  },
  toSorted(e) {
    return At(this).toSorted(e);
  },
  toSpliced(...e) {
    return At(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ht(this, "unshift", e);
  },
  values() {
    return an(this, "values", (e) => We(this, e));
  },
};
function an(e, t, s) {
  const n = zs(e),
    r = n[t]();
  return (
    n !== e &&
      !Ne(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const o = r._next();
        return (o.done || (o.value = s(o.value)), o);
      })),
    r
  );
}
const El = Array.prototype;
function Ze(e, t, s, n, r, o) {
  const l = zs(e),
    a = l !== e && !Ne(e),
    d = l[t];
  if (d !== El[t]) {
    const p = d.apply(e, o);
    return a ? Ve(p) : p;
  }
  let f = s;
  l !== e &&
    (a
      ? (f = function (p, m) {
          return s.call(this, We(e, p), m, e);
        })
      : s.length > 2 &&
        (f = function (p, m) {
          return s.call(this, p, m, e);
        }));
  const u = d.call(l, f, n);
  return a && r ? r(u) : u;
}
function lr(e, t, s, n) {
  const r = zs(e),
    o = r !== e && !Ne(e);
  let l = s,
    a = !1;
  r !== e &&
    (o
      ? ((a = n.length === 0),
        (l = function (f, u, p) {
          return (
            a && ((a = !1), (f = We(e, f))),
            s.call(this, f, We(e, u), p, e)
          );
        }))
      : s.length > 3 &&
        (l = function (f, u, p) {
          return s.call(this, f, u, p, e);
        }));
  const d = r[t](l, ...n);
  return a ? We(e, d) : d;
}
function dn(e, t, s) {
  const n = X(e);
  ve(n, "iterate", es);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Kn(s[0])
    ? ((s[0] = X(s[0])), n[t](...s))
    : r;
}
function Ht(e, t, s = []) {
  (ot(), Nn());
  const n = X(e)[t].apply(e, s);
  return (Dn(), lt(), n);
}
const Il = In("__proto__,__v_isRef,__isVue"),
  ao = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Xe),
  );
function jl(e) {
  Xe(e) || (e = String(e));
  const t = X(this);
  return (ve(t, "has", e), t.hasOwnProperty(e));
}
class co {
  constructor(t = !1, s = !1) {
    ((this._isReadonly = t), (this._isShallow = s));
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      o = this._isShallow;
    if (s === "__v_isReactive") return !r;
    if (s === "__v_isReadonly") return r;
    if (s === "__v_isShallow") return o;
    if (s === "__v_raw")
      return n === (r ? (o ? Kl : po) : o ? ho : fo).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const l = V(t);
    if (!r) {
      let d;
      if (l && (d = Pl[s])) return d;
      if (s === "hasOwnProperty") return jl;
    }
    const a = Reflect.get(t, s, ke(t) ? t : n);
    if ((Xe(s) ? ao.has(s) : Il(s)) || (r || ve(t, "get", s), o)) return a;
    if (ke(a)) {
      const d = l && On(s) ? a : a.value;
      return r && Y(d) ? _n(d) : d;
    }
    return Y(a) ? (r ? _n(a) : Rn(a)) : a;
  }
}
class uo extends co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    const l = V(t) && On(s);
    if (!this._isShallow) {
      const f = it(o);
      if ((!Ne(n) && !it(n) && ((o = X(o)), (n = X(n))), !l && ke(o) && !ke(n)))
        return (f || (o.value = n), !0);
    }
    const a = l ? Number(s) < t.length : Z(t, s),
      d = Reflect.set(t, s, n, ke(t) ? t : r);
    return (
      t === X(r) &&
        d &&
        (a ? Je(n, o) && st(t, "set", s, n) : st(t, "add", s, n)),
      d
    );
  }
  deleteProperty(t, s) {
    const n = Z(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return (r && n && st(t, "delete", s, void 0), r);
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return ((!Xe(s) || !ao.has(s)) && ve(t, "has", s), n);
  }
  ownKeys(t) {
    return (ve(t, "iterate", V(t) ? "length" : Ct), Reflect.ownKeys(t));
  }
}
class Ol extends co {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Ll = new uo(),
  Nl = new Ol(),
  Dl = new uo(!0);
const wn = (e) => e,
  fs = (e) => Reflect.getPrototypeOf(e);
function Fl(e, t, s) {
  return function (...n) {
    const r = this.__v_raw,
      o = X(r),
      l = ft(o),
      a = e === "entries" || (e === Symbol.iterator && l),
      d = e === "keys" && l,
      f = r[e](...n),
      u = s ? wn : t ? Lt : Ve;
    return (
      !t && ve(o, "iterate", d ? kn : Ct),
      xe(Object.create(f), {
        next() {
          const { value: p, done: m } = f.next();
          return m
            ? { value: p, done: m }
            : { value: a ? [u(p[0]), u(p[1])] : u(p), done: m };
        },
      })
    );
  };
}
function hs(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vl(e, t) {
  const s = {
    get(r) {
      const o = this.__v_raw,
        l = X(o),
        a = X(r);
      e || (Je(r, a) && ve(l, "get", r), ve(l, "get", a));
      const { has: d } = fs(l),
        f = t ? wn : e ? Lt : Ve;
      if (d.call(l, r)) return f(o.get(r));
      if (d.call(l, a)) return f(o.get(a));
      o !== l && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return (!e && ve(X(r), "iterate", Ct), r.size);
    },
    has(r) {
      const o = this.__v_raw,
        l = X(o),
        a = X(r);
      return (
        e || (Je(r, a) && ve(l, "has", r), ve(l, "has", a)),
        r === a ? o.has(r) : o.has(r) || o.has(a)
      );
    },
    forEach(r, o) {
      const l = this,
        a = l.__v_raw,
        d = X(a),
        f = t ? wn : e ? Lt : Ve;
      return (
        !e && ve(d, "iterate", Ct),
        a.forEach((u, p) => r.call(o, f(u), f(p), l))
      );
    },
  };
  return (
    xe(
      s,
      e
        ? {
            add: hs("add"),
            set: hs("set"),
            delete: hs("delete"),
            clear: hs("clear"),
          }
        : {
            add(r) {
              const o = X(this),
                l = fs(o),
                a = X(r),
                d = !t && !Ne(r) && !it(r) ? a : r;
              return (
                l.has.call(o, d) ||
                  (Je(r, d) && l.has.call(o, r)) ||
                  (Je(a, d) && l.has.call(o, a)) ||
                  (o.add(d), st(o, "add", d, d)),
                this
              );
            },
            set(r, o) {
              !t && !Ne(o) && !it(o) && (o = X(o));
              const l = X(this),
                { has: a, get: d } = fs(l);
              let f = a.call(l, r);
              f || ((r = X(r)), (f = a.call(l, r)));
              const u = d.call(l, r);
              return (
                l.set(r, o),
                f ? Je(o, u) && st(l, "set", r, o) : st(l, "add", r, o),
                this
              );
            },
            delete(r) {
              const o = X(this),
                { has: l, get: a } = fs(o);
              let d = l.call(o, r);
              (d || ((r = X(r)), (d = l.call(o, r))), a && a.call(o, r));
              const f = o.delete(r);
              return (d && st(o, "delete", r, void 0), f);
            },
            clear() {
              const r = X(this),
                o = r.size !== 0,
                l = r.clear();
              return (o && st(r, "clear", void 0, void 0), l);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      s[r] = Fl(r, e, t);
    }),
    s
  );
}
function Hn(e, t) {
  const s = Vl(e, t);
  return (n, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? n
          : Reflect.get(Z(s, r) && r in n ? s : n, r, o);
}
const Hl = { get: Hn(!1, !1) },
  Rl = { get: Hn(!1, !0) },
  Bl = { get: Hn(!0, !1) };
const fo = new WeakMap(),
  ho = new WeakMap(),
  po = new WeakMap(),
  Kl = new WeakMap();
function Ul(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Rn(e) {
  return it(e) ? e : Bn(e, !1, Ll, Hl, fo);
}
function ql(e) {
  return Bn(e, !1, Dl, Rl, ho);
}
function _n(e) {
  return Bn(e, !0, Nl, Bl, po);
}
function Bn(e, t, s, n, r) {
  if (
    !Y(e) ||
    (e.__v_raw && !(t && e.__v_isReactive)) ||
    e.__v_skip ||
    !Object.isExtensible(e)
  )
    return e;
  const o = r.get(e);
  if (o) return o;
  const l = Ul(gl(e));
  if (l === 0) return e;
  const a = new Proxy(e, l === 2 ? n : s);
  return (r.set(e, a), a);
}
function St(e) {
  return it(e) ? St(e.__v_raw) : !!(e && e.__v_isReactive);
}
function it(e) {
  return !!(e && e.__v_isReadonly);
}
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
function Kn(e) {
  return e ? !!e.__v_raw : !1;
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function Wl(e) {
  return (
    !Z(e, "__v_skip") && Object.isExtensible(e) && Xr(e, "__v_skip", !0),
    e
  );
}
const Ve = (e) => (Y(e) ? Rn(e) : e),
  Lt = (e) => (Y(e) ? _n(e) : e);
function ke(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return zl(e, !1);
}
function zl(e, t) {
  return ke(e) ? e : new Jl(e, t);
}
class Jl {
  constructor(t, s) {
    ((this.dep = new Vn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = s ? t : X(t)),
      (this._value = s ? t : Ve(t)),
      (this.__v_isShallow = s));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(t) {
    const s = this._rawValue,
      n = this.__v_isShallow || Ne(t) || it(t);
    ((t = n ? t : X(t)),
      Je(t, s) &&
        ((this._rawValue = t),
        (this._value = n ? t : Ve(t)),
        this.dep.trigger()));
  }
}
function P(e) {
  return ke(e) ? e.value : e;
}
const Gl = {
  get: (e, t, s) => (t === "__v_raw" ? e : P(Reflect.get(e, t, s))),
  set: (e, t, s, n) => {
    const r = e[t];
    return ke(r) && !ke(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n);
  },
};
function go(e) {
  return St(e) ? e : new Proxy(e, Gl);
}
class Xl {
  constructor(t, s, n) {
    ((this.fn = t),
      (this.setter = s),
      (this._value = void 0),
      (this.dep = new Vn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Yt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !s),
      (this.isSSR = n));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ie !== this))
      return (so(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (oo(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ql(e, t, s = !1) {
  let n, r;
  return (R(e) ? (n = e) : ((n = e.get), (r = e.set)), new Xl(n, r, s));
}
const ps = {},
  $s = new WeakMap();
let kt;
function Zl(e, t = !1, s = kt) {
  if (s) {
    let n = $s.get(s);
    (n || $s.set(s, (n = [])), n.push(e));
  }
}
function Yl(e, t, s = re) {
  const {
      immediate: n,
      deep: r,
      once: o,
      scheduler: l,
      augmentJob: a,
      call: d,
    } = s,
    f = (j) => (r ? j : Ne(j) || r === !1 || r === 0 ? nt(j, 1) : nt(j));
  let u,
    p,
    m,
    S,
    L = !1,
    I = !1;
  if (
    (ke(e)
      ? ((p = () => e.value), (L = Ne(e)))
      : St(e)
        ? ((p = () => f(e)), (L = !0))
        : V(e)
          ? ((I = !0),
            (L = e.some((j) => St(j) || Ne(j))),
            (p = () =>
              e.map((j) => {
                if (ke(j)) return j.value;
                if (St(j)) return f(j);
                if (R(j)) return d ? d(j, 2) : j();
              })))
          : R(e)
            ? t
              ? (p = d ? () => d(e, 2) : e)
              : (p = () => {
                  if (m) {
                    ot();
                    try {
                      m();
                    } finally {
                      lt();
                    }
                  }
                  const j = kt;
                  kt = u;
                  try {
                    return d ? d(e, 3, [S]) : e(S);
                  } finally {
                    kt = j;
                  }
                })
            : (p = Ge),
    t && r)
  ) {
    const j = p,
      Q = r === !0 ? 1 / 0 : r;
    p = () => nt(j(), Q);
  }
  const K = $l(),
    U = () => {
      (u.stop(), K && K.active && jn(K.effects, u));
    };
  if (o && t) {
    const j = t;
    t = (...Q) => {
      const ce = j(...Q);
      return (U(), ce);
    };
  }
  let D = I ? new Array(e.length).fill(ps) : ps;
  const W = (j) => {
    if (!(!(u.flags & 1) || (!u.dirty && !j)))
      if (t) {
        const Q = u.run();
        if (j || r || L || (I ? Q.some((ce, B) => Je(ce, D[B])) : Je(Q, D))) {
          m && m();
          const ce = kt;
          kt = u;
          try {
            const B = [Q, D === ps ? void 0 : I && D[0] === ps ? [] : D, S];
            ((D = Q), d ? d(t, 3, B) : t(...B));
          } finally {
            kt = ce;
          }
        }
      } else u.run();
  };
  return (
    a && a(W),
    (u = new eo(p)),
    (u.scheduler = l ? () => l(W, !1) : W),
    (S = (j) => Zl(j, !1, u)),
    (m = u.onStop =
      () => {
        const j = $s.get(u);
        if (j) {
          if (d) d(j, 4);
          else for (const Q of j) Q();
          $s.delete(u);
        }
      }),
    t ? (n ? W(!0) : (D = u.run())) : l ? l(W.bind(null, !0), !0) : u.run(),
    (U.pause = u.pause.bind(u)),
    (U.resume = u.resume.bind(u)),
    (U.stop = U),
    U
  );
}
function nt(e, t = 1 / 0, s) {
  if (
    t <= 0 ||
    !Y(e) ||
    e.__v_skip ||
    ((s = s || new Map()), (s.get(e) || 0) >= t)
  )
    return e;
  if ((s.set(e, t), t--, ke(e))) nt(e.value, t, s);
  else if (V(e)) for (let n = 0; n < e.length; n++) nt(e[n], t, s);
  else if (Ts(e) || ft(e))
    e.forEach((n) => {
      nt(n, t, s);
    });
  else if (Gr(e)) {
    for (const n in e) nt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && nt(e[n], t, s);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.42
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function as(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Js(r, t, s);
  }
}
function De(e, t, s, n) {
  if (R(e)) {
    const r = as(e, t, s, n);
    return (
      r &&
        zr(r) &&
        r.catch((o) => {
          Js(o, t, s);
        }),
      r
    );
  }
  if (V(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++) r.push(De(e[o], t, s, n));
    return r;
  }
}
function Js(e, t, s, n = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: l } =
      (t && t.appContext.config) || re;
  if (t) {
    let a = t.parent;
    const d = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let p = 0; p < u.length; p++) if (u[p](e, d, f) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      (ot(), as(o, null, 10, [e, d, f]), lt());
      return;
    }
  }
  ei(e, s, r, n, l);
}
function ei(e, t, s, n = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Se = [];
let qe = -1;
const It = [];
let ut = null,
  Mt = 0;
const xo = Promise.resolve();
let As = null;
function ti(e) {
  const t = As || xo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function si(e) {
  let t = qe + 1,
    s = Se.length;
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      r = Se[n],
      o = ts(r);
    o < e || (o === e && r.flags & 2) ? (t = n + 1) : (s = n);
  }
  return t;
}
function Un(e) {
  if (!(e.flags & 1)) {
    const t = ts(e),
      s = Se[Se.length - 1];
    (!s || (!(e.flags & 2) && t >= ts(s)) ? Se.push(e) : Se.splice(si(t), 0, e),
      (e.flags |= 1),
      mo());
  }
}
function mo() {
  As || (As = xo.then(vo));
}
function ni(e) {
  if (!V(e))
    ut && e.id === -1
      ? ut.splice(Mt + 1, 0, e)
      : e.flags & 1 || (It.push(e), (e.flags |= 1));
  else for (let t = 0; t < e.length; t++) It.push(e[t]);
  mo();
}
function ir(e, t, s = qe + 1) {
  for (; s < Se.length; s++) {
    const n = Se[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid) continue;
      (Se.splice(s, 1),
        s--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2));
    }
  }
}
function bo(e) {
  if (It.length) {
    const t = [...new Set(It)].sort((s, n) => ts(s) - ts(n));
    if (((It.length = 0), ut)) {
      for (let s = 0; s < t.length; s++) ut.push(t[s]);
      return;
    }
    for (ut = t, Mt = 0; Mt < ut.length; Mt++) {
      const s = ut[Mt];
      (s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2));
    }
    ((ut = null), (Mt = 0));
  }
}
const ts = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function vo(e) {
  try {
    for (qe = 0; qe < Se.length; qe++) {
      const t = Se[qe];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        as(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; qe < Se.length; qe++) {
      const t = Se[qe];
      t && (t.flags &= -2);
    }
    ((qe = -1),
      (Se.length = 0),
      bo(),
      (As = null),
      (Se.length || It.length) && vo());
  }
}
let Ee = null,
  yo = null;
function Ms(e) {
  const t = Ee;
  return ((Ee = e), (yo = (e && e.type.__scopeId) || null), t);
}
function jt(e, t = Ee, s) {
  if (!t || e._n) return e;
  const n = (...r) => {
    n._d && js(-1);
    const o = Ms(t),
      l = Tt.length;
    let a;
    try {
      a = e(...r);
    } finally {
      for (let d = Tt.length; d > l; d--) Go();
      (Ms(o), n._d && js(1));
    }
    return a;
  };
  return ((n._n = !0), (n._c = !0), (n._d = !0), n);
}
function gs(e, t) {
  if (Ee === null) return e;
  const s = tn(Ee),
    n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, l, a, d = re] = t[r];
    o &&
      (R(o) && (o = { mounted: o, updated: o }),
      o.deep && nt(l),
      n.push({
        dir: o,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: d,
      }));
  }
  return e;
}
function mt(e, t, s, n) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const a = r[l];
    o && (a.oldValue = o[l].value);
    let d = a.dir[n];
    d && (ot(), De(d, s, 8, [e.el, a, e, t]), lt());
  }
}
function ri(e, t) {
  if (ye) {
    let s = ye.provides;
    const n = ye.parent && ye.parent.provides;
    (n === s && (s = ye.provides = Object.create(n)), (s[e] = t));
  }
}
function _s(e, t, s = !1) {
  const n = Zo();
  if (n || Ot) {
    let r = Ot
      ? Ot._context.provides
      : n
        ? n.parent == null || n.ce
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return s && R(t) ? t.call(n && n.proxy) : t;
  }
}
const oi = Symbol.for("v-scx"),
  li = () => _s(oi);
function cn(e, t, s) {
  return ko(e, t, s);
}
function ko(e, t, s = re) {
  const { immediate: n, deep: r, flush: o, once: l } = s,
    a = xe({}, s),
    d = (t && n) || (!t && o !== "post");
  let f;
  if (os) {
    if (o === "sync") {
      const S = li();
      f = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!d) {
      const S = () => {};
      return ((S.stop = Ge), (S.resume = Ge), (S.pause = Ge), S);
    }
  }
  const u = ye;
  a.call = (S, L, I) => De(S, u, L, I);
  let p = !1;
  (o === "post"
    ? (a.scheduler = (S) => {
        Ce(S, u && u.suspense);
      })
    : o !== "sync" &&
      ((p = !0),
      (a.scheduler = (S, L) => {
        L ? S() : Un(S);
      })),
    (a.augmentJob = (S) => {
      (t && (S.flags |= 4),
        p && ((S.flags |= 2), u && ((S.id = u.uid), (S.i = u))));
    }));
  const m = Yl(e, t, a);
  return (os && (f ? f.push(m) : d && m()), m);
}
function ii(e, t, s) {
  const n = this.proxy,
    r = de(e) ? (e.includes(".") ? wo(n, e) : () => n[e]) : e.bind(n, n);
  let o;
  R(t) ? (o = t) : ((o = t.handler), (s = t));
  const l = ds(this),
    a = ko(r, o.bind(n), s);
  return (l(), a);
}
function wo(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++) n = n[s[r]];
    return n;
  };
}
const ct = new WeakMap(),
  _o = Symbol("_vte"),
  Gs = (e) => e.__isTeleport,
  wt = (e) => e && (e.disabled || e.disabled === ""),
  ai = (e) => e && (e.defer || e.defer === ""),
  ar = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  dr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Cn = (e, t) => {
    const s = e && e.to;
    return de(s) ? (t ? t(s) : null) : s;
  },
  di = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, s, n, r, o, l, a, d, f) {
      const {
          mc: u,
          pc: p,
          pbc: m,
          o: {
            insert: S,
            querySelector: L,
            createText: I,
            createComment: K,
            parentNode: U,
          },
        } = f,
        D = wt(t.props);
      let { dynamicChildren: W } = t;
      const j = (B, ee, O) => {
          B.shapeFlag & 16 && u(B.children, ee, O, r, o, l, a, d);
        },
        Q = (B = t) => {
          const ee = wt(B.props),
            O = (B.target = Cn(B.props, L)),
            J = Sn(O, B, I, S);
          O &&
            (l !== "svg" && ar(O)
              ? (l = "svg")
              : l !== "mathml" && dr(O) && (l = "mathml"),
            r &&
              r.isCE &&
              (
                r.ce._teleportTargets || (r.ce._teleportTargets = new Set())
              ).add(O),
            ee || (j(B, O, J), Kt(B, !1)));
        },
        ce = (B) => {
          const ee = () => {
            if (ct.get(B) === ee) {
              if ((ct.delete(B), wt(B.props))) {
                const O = U(B.el) || s;
                (j(B, O, B.anchor), Kt(B, !0));
              }
              Q(B);
            }
          };
          (ct.set(B, ee), Ce(ee, o));
        };
      if (e == null) {
        const B = (t.el = I("")),
          ee = (t.anchor = I(""));
        if ((S(B, s, n), S(ee, s, n), ai(t.props) || (o && o.pendingBranch))) {
          ce(t);
          return;
        }
        (D && (j(t, s, ee), Kt(t, !0)), Q());
      } else {
        t.el = e.el;
        const B = (t.anchor = e.anchor),
          ee = ct.get(e);
        if (ee) {
          ((ee.flags |= 8), ct.delete(e), ce(t));
          return;
        }
        t.targetStart = e.targetStart;
        const O = (t.target = e.target),
          J = (t.targetAnchor = e.targetAnchor),
          te = wt(e.props),
          E = te ? s : O,
          oe = te ? B : J;
        if (
          (l === "svg" || ar(O)
            ? (l = "svg")
            : (l === "mathml" || dr(O)) && (l = "mathml"),
          W
            ? (m(e.dynamicChildren, W, E, r, o, l, a), zn(e, t, !0))
            : d || p(e, t, E, oe, r, o, l, a, !1),
          D)
        )
          te
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : xs(t, s, B, f, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const fe = Cn(t.props, L);
          fe && ((t.target = fe), xs(t, fe, null, f, 0));
        } else te && xs(t, O, J, f, 1);
        Kt(t, D);
      }
    },
    remove(e, t, s, { um: n, o: { remove: r } }, o) {
      const {
          shapeFlag: l,
          children: a,
          anchor: d,
          targetStart: f,
          targetAnchor: u,
          target: p,
          props: m,
        } = e,
        S = wt(m),
        L = o || !S,
        I = ct.get(e);
      if (
        (I && ((I.flags |= 8), ct.delete(e)),
        p && (r(f), r(u)),
        o && r(d),
        !I && (S || p) && l & 16)
      )
        for (let K = 0; K < a.length; K++) {
          const U = a[K];
          n(U, t, s, L, !!U.dynamicChildren);
        }
    },
    move: xs,
    hydrate: ci,
  };
function xs(e, t, s, { o: { insert: n }, m: r }, o = 2) {
  o === 0 && n(e.targetAnchor, t, s);
  const { el: l, anchor: a, shapeFlag: d, children: f, props: u } = e,
    p = o === 2;
  if ((p && n(l, t, s), !ct.has(e) && (!p || wt(u)) && d & 16))
    for (let m = 0; m < f.length; m++) r(f[m], t, s, 2);
  p && n(a, t, s);
}
function ci(
  e,
  t,
  s,
  n,
  r,
  o,
  {
    o: {
      nextSibling: l,
      parentNode: a,
      querySelector: d,
      insert: f,
      createText: u,
    },
  },
  p,
) {
  function m(K, U) {
    let D = U;
    for (; D; ) {
      if (D && D.nodeType === 8) {
        if (D.data === "teleport start anchor") t.targetStart = D;
        else if (D.data === "teleport anchor") {
          ((t.targetAnchor = D),
            (K._lpa = t.targetAnchor && l(t.targetAnchor)));
          break;
        }
      }
      D = l(D);
    }
  }
  function S(K, U) {
    U.anchor = p(l(K), U, a(K), s, n, r, o);
  }
  const L = (t.target = Cn(t.props, d)),
    I = wt(t.props);
  if (L) {
    const K = L._lpa || L.firstChild;
    (t.shapeFlag & 16 &&
      (I
        ? (S(e, t),
          m(L, K),
          t.targetAnchor || Sn(L, t, u, f, a(e) === L ? e : null))
        : ((t.anchor = l(e)),
          m(L, K),
          t.targetAnchor || Sn(L, t, u, f),
          p(K && l(K), t, L, s, n, r, o))),
      Kt(t, I));
  } else
    I &&
      t.shapeFlag & 16 &&
      (S(e, t), (t.targetStart = e), (t.targetAnchor = l(e)));
  return t.anchor && l(t.anchor);
}
const ui = di;
function Kt(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, r;
    for (
      t
        ? ((n = e.el), (r = e.anchor))
        : ((n = e.targetStart), (r = e.targetAnchor));
      n && n !== r;
    )
      (n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid),
        (n = n.nextSibling));
    s.ut();
  }
}
function Sn(e, t, s, n, r = null) {
  const o = (t.targetStart = s("")),
    l = (t.targetAnchor = s(""));
  return ((o[_o] = l), e && (n(o, e, r), n(l, e, r)), l);
}
const Oe = Symbol("_leaveCb"),
  Rt = Symbol("_enterCb");
function fi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    $t(() => {
      e.isMounted = !0;
    }),
    Eo(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const je = [Function, Array],
  Co = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: je,
    onEnter: je,
    onAfterEnter: je,
    onEnterCancelled: je,
    onBeforeLeave: je,
    onLeave: je,
    onAfterLeave: je,
    onLeaveCancelled: je,
    onBeforeAppear: je,
    onAppear: je,
    onAfterAppear: je,
    onAppearCancelled: je,
  },
  So = (e) => {
    const t = e.subTree;
    return t.component ? So(t.component) : t;
  },
  hi = {
    name: "BaseTransition",
    props: Co,
    setup(e, { slots: t }) {
      const s = Zo(),
        n = fi();
      return () => {
        const r = t.default && Ao(t.default(), !0),
          o = r && r.length ? To(r) : s.subTree ? pe() : void 0;
        if (!o) return;
        const l = X(e),
          { mode: a } = l;
        if (n.isLeaving) return un(o);
        const d = Ps(o);
        if (!d) return un(o);
        let f = Tn(d, l, n, s, (p) => (f = p));
        d.type !== Te && ss(d, f);
        let u = s.subTree && Ps(s.subTree);
        if (u && u.type !== Te && !_t(u, d) && So(s).type !== Te) {
          let p = Tn(u, l, n, s);
          if ((ss(u, p), a === "out-in" && d.type !== Te))
            return (
              (n.isLeaving = !0),
              (p.afterLeave = () => {
                ((n.isLeaving = !1),
                  s.job.flags & 8 || s.update(),
                  delete p.afterLeave,
                  (u = void 0));
              }),
              un(o)
            );
          a === "in-out" && d.type !== Te
            ? (p.delayLeave = (m, S, L) => {
                const I = $o(n, u);
                ((I[String(u.key)] = u),
                  (m[Oe] = () => {
                    (S(),
                      (m[Oe] = void 0),
                      delete f.delayedLeave,
                      (u = void 0));
                  }),
                  (f.delayedLeave = () => {
                    (L(), delete f.delayedLeave, (u = void 0));
                  }));
              })
            : (u = void 0);
        } else u && (u = void 0);
        return o;
      };
    },
  };
function To(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Te) {
        t = s;
        break;
      }
  }
  return t;
}
const pi = hi;
function $o(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return (n || ((n = Object.create(null)), s.set(t.type, n)), n);
}
function Tn(e, t, s, n, r) {
  const {
      appear: o,
      mode: l,
      persisted: a = !1,
      onBeforeEnter: d,
      onEnter: f,
      onAfterEnter: u,
      onEnterCancelled: p,
      onBeforeLeave: m,
      onLeave: S,
      onAfterLeave: L,
      onLeaveCancelled: I,
      onBeforeAppear: K,
      onAppear: U,
      onAfterAppear: D,
      onAppearCancelled: W,
    } = t,
    j = String(e.key),
    Q = $o(s, e),
    ce = (O, J) => {
      O && De(O, n, 9, J);
    },
    B = (O, J) => {
      const te = J[1];
      (ce(O, J),
        V(O) ? O.every((E) => E.length <= 1) && te() : O.length <= 1 && te());
    },
    ee = {
      mode: l,
      persisted: a,
      beforeEnter(O) {
        let J = d;
        if (!s.isMounted)
          if (o) J = K || d;
          else return;
        O[Oe] && O[Oe](!0);
        const te = Q[j];
        (te && _t(e, te) && te.el[Oe] && te.el[Oe](), ce(J, [O]));
      },
      enter(O) {
        if (Q[j] === e) return;
        let J = f,
          te = u,
          E = p;
        if (!s.isMounted)
          if (o) ((J = U || f), (te = D || u), (E = W || p));
          else return;
        let oe = !1;
        O[Rt] = (Qe) => {
          oe ||
            ((oe = !0),
            Qe ? ce(E, [O]) : ce(te, [O]),
            ee.delayedLeave && ee.delayedLeave(),
            (O[Rt] = void 0));
        };
        const fe = O[Rt].bind(null, !1);
        J ? B(J, [O, fe]) : fe();
      },
      leave(O, J) {
        const te = String(e.key);
        if ((O[Rt] && O[Rt](!0), s.isUnmounting)) return J();
        ce(m, [O]);
        let E = !1;
        O[Oe] = (fe) => {
          E ||
            ((E = !0),
            J(),
            fe ? ce(I, [O]) : ce(L, [O]),
            (O[Oe] = void 0),
            Q[te] === e && delete Q[te]);
        };
        const oe = O[Oe].bind(null, !1);
        ((Q[te] = e), S ? B(S, [O, oe]) : oe());
      },
      clone(O) {
        const J = Tn(O, t, s, n, r);
        return (r && r(J), J);
      },
    };
  return ee;
}
function un(e) {
  if (Xs(e)) return ((e = ht(e)), (e.children = null), e);
}
function Ps(e) {
  if (!Xs(e)) return Gs(e.type) && e.children ? To(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16) return s[0];
    if (t & 32 && R(s.default)) return s.default();
  }
}
function ss(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const s = e.component.subTree;
    ss((Gs(s.type) && Ps(s)) || s, t);
  } else
    e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Ao(e, t = !1, s) {
  let n = [],
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    const a = s == null ? l.key : String(s) + String(l.key != null ? l.key : o);
    l.type === z
      ? (l.patchFlag & 128 && r++, (n = n.concat(Ao(l.children, t, a))))
      : (t || l.type !== Te) && n.push(a != null ? ht(l, { key: a }) : l);
  }
  if (r > 1) for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
  return n;
}
function Mo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cr(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Es = new WeakMap();
function Gt(e, t, s, n, r = !1) {
  if (V(e)) {
    e.forEach((I, K) => Gt(I, t && (V(t) ? t[K] : t), s, n, r));
    return;
  }
  if (Xt(n) && !r) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      Gt(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? tn(n.component) : n.el,
    l = r ? null : o,
    { i: a, r: d } = e,
    f = t && t.r,
    u = a.refs === re ? (a.refs = {}) : a.refs,
    p = a.setupState,
    m = X(p),
    S = p === re ? Wr : (I) => (cr(u, I) ? !1 : Z(m, I)),
    L = (I, K) => !(K && cr(u, K));
  if (f != null && f !== d) {
    if ((ur(t), de(f))) ((u[f] = null), S(f) && (p[f] = null));
    else if (ke(f)) {
      const I = t;
      (L(f, I.k) && (f.value = null), I.k && (u[I.k] = null));
    }
  }
  if (R(d)) as(d, a, 12, [l, u]);
  else {
    const I = de(d),
      K = ke(d);
    if (I || K) {
      const U = () => {
        if (e.f) {
          const D = I ? (S(d) ? p[d] : u[d]) : L() || !e.k ? d.value : u[e.k];
          if (r) V(D) && jn(D, o);
          else if (V(D)) D.includes(o) || D.push(o);
          else if (I) ((u[d] = [o]), S(d) && (p[d] = u[d]));
          else {
            const W = [o];
            (L(d, e.k) && (d.value = W), e.k && (u[e.k] = W));
          }
        } else
          I
            ? ((u[d] = l), S(d) && (p[d] = l))
            : K && (L(d, e.k) && (d.value = l), e.k && (u[e.k] = l));
      };
      if (l) {
        const D = () => {
          (U(), Es.delete(e));
        };
        ((D.id = -1), Es.set(e, D), Ce(D, s));
      } else (ur(e), U());
    }
  }
}
function ur(e) {
  const t = Es.get(e);
  t && ((t.flags |= 8), Es.delete(e));
}
Us().requestIdleCallback;
Us().cancelIdleCallback;
const Xt = (e) => !!e.type.__asyncLoader,
  Xs = (e) => e.type.__isKeepAlive;
function gi(e, t) {
  Po(e, "a", t);
}
function xi(e, t) {
  Po(e, "da", t);
}
function Po(e, t, s = ye) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let r = s;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Qs(t, n, s), s)) {
    let r = s.parent;
    for (; r && r.parent; )
      (Xs(r.parent.vnode) && mi(n, t, s, r), (r = r.parent));
  }
}
function mi(e, t, s, n) {
  const r = Qs(t, e, n, !0);
  Nt(() => {
    jn(n[t], r);
  }, s);
}
function Qs(e, t, s = ye, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...l) => {
          ot();
          const a = ds(s),
            d = De(t, s, e, l);
          return (a(), lt(), d);
        });
    return (n ? r.unshift(o) : r.push(o), o);
  }
}
const at =
    (e) =>
    (t, s = ye) => {
      (!os || e === "sp") && Qs(e, (...n) => t(...n), s);
    },
  bi = at("bm"),
  $t = at("m"),
  vi = at("bu"),
  yi = at("u"),
  Eo = at("bum"),
  Nt = at("um"),
  ki = at("sp"),
  wi = at("rtg"),
  _i = at("rtc");
function Ci(e, t = ye) {
  Qs("ec", e, t);
}
const Si = "components",
  Io = Symbol.for("v-ndc");
function Ti(e) {
  return de(e) ? $i(Si, e, !1) || e : e || Io;
}
function $i(e, t, s = !0, n = !1) {
  const r = Ee || ye;
  if (r) {
    const o = r.type;
    {
      const a = ca(o, !1);
      if (a && (a === t || a === $e(t) || a === Ks($e(t)))) return o;
    }
    const l = fr(r[e] || o[e], t) || fr(r.appContext[e], t);
    return !l && n ? o : l;
  }
}
function fr(e, t) {
  return e && (e[t] || e[$e(t)] || e[Ks($e(t))]);
}
function ae(e, t, s, n) {
  let r;
  const o = s,
    l = V(e);
  if (l || de(e)) {
    const a = l && St(e);
    let d = !1,
      f = !1;
    (a && ((d = !Ne(e)), (f = it(e)), (e = zs(e))), (r = new Array(e.length)));
    for (let u = 0, p = e.length; u < p; u++)
      r[u] = t(d ? (f ? Lt(Ve(e[u])) : Ve(e[u])) : e[u], u, void 0, o);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let a = 0; a < e; a++) r[a] = t(a + 1, a, void 0, o);
  } else if (Y(e))
    if (e[Symbol.iterator]) r = Array.from(e, (a, d) => t(a, d, void 0, o));
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let d = 0, f = a.length; d < f; d++) {
        const u = a[d];
        r[d] = t(e[u], u, d, o);
      }
    }
  else r = [];
  return r;
}
const $n = (e) => (e ? (Yo(e) ? tn(e) : $n(e.parent)) : null),
  Qt = xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $n(e.parent),
    $root: (e) => $n(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Oo(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Un(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => ii.bind(e),
  }),
  fn = (e, t) => e !== re && !e.__isScriptSetup && Z(e, t),
  Ai = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: s,
        setupState: n,
        data: r,
        props: o,
        accessCache: l,
        type: a,
        appContext: d,
      } = e;
      if (t[0] !== "$") {
        const m = l[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return n[t];
            case 2:
              return r[t];
            case 4:
              return s[t];
            case 3:
              return o[t];
          }
        else {
          if (fn(n, t)) return ((l[t] = 1), n[t]);
          if (r !== re && Z(r, t)) return ((l[t] = 2), r[t]);
          if (Z(o, t)) return ((l[t] = 3), o[t]);
          if (s !== re && Z(s, t)) return ((l[t] = 4), s[t]);
          An && (l[t] = 0);
        }
      }
      const f = Qt[t];
      let u, p;
      if (f) return (t === "$attrs" && ve(e.attrs, "get", ""), f(e));
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (s !== re && Z(s, t)) return ((l[t] = 4), s[t]);
      if (((p = d.config.globalProperties), Z(p, t))) return p[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: r, ctx: o } = e;
      return fn(r, t)
        ? ((r[t] = s), !0)
        : n !== re && Z(n, t)
          ? ((n[t] = s), !0)
          : Z(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((o[t] = s), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: s,
          ctx: n,
          appContext: r,
          props: o,
          type: l,
        },
      },
      a,
    ) {
      let d;
      return !!(
        s[a] ||
        (e !== re && a[0] !== "$" && Z(e, a)) ||
        fn(t, a) ||
        Z(o, a) ||
        Z(n, a) ||
        Z(Qt, a) ||
        Z(r.config.globalProperties, a) ||
        ((d = l.__cssModules) && d[a])
      );
    },
    defineProperty(e, t, s) {
      return (
        s.get != null
          ? (e._.accessCache[t] = 0)
          : Z(s, "value") && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      );
    },
  };
function hr(e) {
  return V(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let An = !0;
function Mi(e) {
  const t = Oo(e),
    s = e.proxy,
    n = e.ctx;
  ((An = !1), t.beforeCreate && pr(t.beforeCreate, e, "bc"));
  const {
    data: r,
    computed: o,
    methods: l,
    watch: a,
    provide: d,
    inject: f,
    created: u,
    beforeMount: p,
    mounted: m,
    beforeUpdate: S,
    updated: L,
    activated: I,
    deactivated: K,
    beforeDestroy: U,
    beforeUnmount: D,
    destroyed: W,
    unmounted: j,
    render: Q,
    renderTracked: ce,
    renderTriggered: B,
    errorCaptured: ee,
    serverPrefetch: O,
    expose: J,
    inheritAttrs: te,
    components: E,
    directives: oe,
    filters: fe,
  } = t;
  if ((f && Pi(f, n, null), l))
    for (const ue in l) {
      const le = l[ue];
      R(le) && (n[ue] = le.bind(s));
    }
  if (r) {
    const ue = r.call(s, s);
    Y(ue) && (e.data = Rn(ue));
  }
  if (((An = !0), o))
    for (const ue in o) {
      const le = o[ue],
        gt = R(le) ? le.bind(s, s) : R(le.get) ? le.get.bind(s, s) : Ge,
        cs = !R(le) && R(le.set) ? le.set.bind(s) : Ge,
        xt = sn({ get: gt, set: cs });
      Object.defineProperty(n, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (He) => (xt.value = He),
      });
    }
  if (a) for (const ue in a) jo(a[ue], n, s, ue);
  if (d) {
    const ue = R(d) ? d.call(s) : d;
    Reflect.ownKeys(ue).forEach((le) => {
      ri(le, ue[le]);
    });
  }
  u && pr(u, e, "c");
  function ge(ue, le) {
    V(le) ? le.forEach((gt) => ue(gt.bind(s))) : le && ue(le.bind(s));
  }
  if (
    (ge(bi, p),
    ge($t, m),
    ge(vi, S),
    ge(yi, L),
    ge(gi, I),
    ge(xi, K),
    ge(Ci, ee),
    ge(_i, ce),
    ge(wi, B),
    ge(Eo, D),
    ge(Nt, j),
    ge(ki, O),
    V(J))
  )
    if (J.length) {
      const ue = e.exposed || (e.exposed = {});
      J.forEach((le) => {
        Object.defineProperty(ue, le, {
          get: () => s[le],
          set: (gt) => (s[le] = gt),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (Q && e.render === Ge && (e.render = Q),
    te != null && (e.inheritAttrs = te),
    E && (e.components = E),
    oe && (e.directives = oe),
    O && Mo(e));
}
function Pi(e, t, s = Ge) {
  V(e) && (e = Mn(e));
  for (const n in e) {
    const r = e[n];
    let o;
    (Y(r)
      ? "default" in r
        ? (o = _s(r.from || n, r.default, !0))
        : (o = _s(r.from || n))
      : (o = _s(r)),
      ke(o)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (l) => (o.value = l),
          })
        : (t[n] = o));
  }
}
function pr(e, t, s) {
  De(V(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function jo(e, t, s, n) {
  let r = n.includes(".") ? wo(s, n) : () => s[n];
  if (de(e)) {
    const o = t[e];
    R(o) && cn(r, o);
  } else if (R(e)) cn(r, e.bind(s));
  else if (Y(e))
    if (V(e)) e.forEach((o) => jo(o, t, s, n));
    else {
      const o = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(o) && cn(r, o, e);
    }
}
function Oo(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    a = o.get(t);
  let d;
  return (
    a
      ? (d = a)
      : !r.length && !s && !n
        ? (d = t)
        : ((d = {}),
          r.length && r.forEach((f) => Is(d, f, l, !0)),
          Is(d, t, l)),
    Y(t) && o.set(t, d),
    d
  );
}
function Is(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  (o && Is(e, o, s, !0), r && r.forEach((l) => Is(e, l, s, !0)));
  for (const l in t)
    if (!(n && l === "expose")) {
      const a = Ei[l] || (s && s[l]);
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const Ei = {
  data: gr,
  props: xr,
  emits: xr,
  methods: Ut,
  computed: Ut,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: Ut,
  directives: Ut,
  watch: ji,
  provide: gr,
  inject: Ii,
};
function gr(e, t) {
  return t
    ? e
      ? function () {
          return xe(
            R(e) ? e.call(this, this) : e,
            R(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Ii(e, t) {
  return Ut(Mn(e), Mn(t));
}
function Mn(e) {
  if (V(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t;
  }
  return e;
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ut(e, t) {
  return e ? xe(Object.create(null), e, t) : t;
}
function xr(e, t) {
  return e
    ? V(e) && V(t)
      ? [...new Set([...e, ...t])]
      : xe(Object.create(null), hr(e), hr(t ?? {}))
    : t;
}
function ji(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = xe(Object.create(null), e);
  for (const n in t) s[n] = _e(e[n], t[n]);
  return s;
}
function Lo() {
  return {
    app: null,
    config: {
      isNativeTag: Wr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Oi = 0;
function Li(e, t) {
  return function (n, r = null) {
    (R(n) || (n = xe({}, n)), r != null && !Y(r) && (r = null));
    const o = Lo(),
      l = new WeakSet(),
      a = [];
    let d = !1;
    const f = (o.app = {
      _uid: Oi++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: fa,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...p) {
        return (
          l.has(u) ||
            (u && R(u.install)
              ? (l.add(u), u.install(f, ...p))
              : R(u) && (l.add(u), u(f, ...p))),
          f
        );
      },
      mixin(u) {
        return (o.mixins.includes(u) || o.mixins.push(u), f);
      },
      component(u, p) {
        return p ? ((o.components[u] = p), f) : o.components[u];
      },
      directive(u, p) {
        return p ? ((o.directives[u] = p), f) : o.directives[u];
      },
      mount(u, p, m) {
        if (!d) {
          const S = f._ceVNode || A(n, r);
          return (
            (S.appContext = o),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            e(S, u, m),
            (d = !0),
            (f._container = u),
            (u.__vue_app__ = f),
            tn(S.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        d &&
          (De(a, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__);
      },
      provide(u, p) {
        return ((o.provides[u] = p), f);
      },
      runWithContext(u) {
        const p = Ot;
        Ot = f;
        try {
          return u();
        } finally {
          Ot = p;
        }
      },
    });
    return f;
  };
}
let Ot = null;
const Ni = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${pt(t)}Modifiers`];
function Di(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || re;
  let r = s;
  const o = t.startsWith("update:"),
    l = o && Ni(n, t.slice(7));
  l &&
    (l.trim && (r = s.map((u) => (de(u) ? u.trim() : u))),
    l.number && (r = r.map(Ln)));
  let a,
    d = n[(a = rn(t))] || n[(a = rn($e(t)))];
  (!d && o && (d = n[(a = rn(pt(t)))]), d && De(d, e, 6, r));
  const f = n[a + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    ((e.emitted[a] = !0), De(f, e, 6, r));
  }
}
const Fi = new WeakMap();
function No(e, t, s = !1) {
  const n = s ? Fi : t.emitsCache,
    r = n.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let l = {},
    a = !1;
  if (!R(e)) {
    const d = (f) => {
      const u = No(f, t, !0);
      u && ((a = !0), xe(l, u));
    };
    (!s && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d));
  }
  return !o && !a
    ? (Y(e) && n.set(e, null), null)
    : (V(o) ? o.forEach((d) => (l[d] = null)) : xe(l, o),
      Y(e) && n.set(e, l),
      l);
}
function Zs(e, t) {
  return !e || !Hs(t)
    ? !1
    : ((t = t.slice(2)),
      (t = t === "Once" ? t : t.replace(/Once$/, "")),
      Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, pt(t)) || Z(e, t));
}
function mr(e) {
  const {
      type: t,
      vnode: s,
      proxy: n,
      withProxy: r,
      propsOptions: [o],
      slots: l,
      attrs: a,
      emit: d,
      render: f,
      renderCache: u,
      props: p,
      data: m,
      setupState: S,
      ctx: L,
      inheritAttrs: I,
    } = e,
    K = Ms(e);
  let U, D;
  try {
    if (s.shapeFlag & 4) {
      const j = r || n,
        Q = j;
      ((U = ze(f.call(Q, j, u, p, S, m, L))), (D = a));
    } else {
      const j = t;
      ((U = ze(
        j.length > 1 ? j(p, { attrs: a, slots: l, emit: d }) : j(p, null),
      )),
        (D = t.props ? a : Vi(a)));
    }
  } catch (j) {
    ((Tt.length = 0), Js(j, e, 1), (U = A(Te)));
  }
  let W = U;
  if (D && I !== !1) {
    const j = Object.keys(D),
      { shapeFlag: Q } = W;
    j.length &&
      Q & 7 &&
      (o && j.some(Rs) && (D = Hi(D, o)), (W = ht(W, D, !1, !0)));
  }
  if (
    (s.dirs &&
      ((W = ht(W, null, !1, !0)),
      (W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs)),
    s.transition)
  ) {
    const j = (Gs(W.type) && Ps(W)) || W;
    ss(j, s.transition);
  }
  return ((U = W), Ms(K), U);
}
const Vi = (e) => {
    let t;
    for (const s in e)
      (s === "class" || s === "style" || Hs(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
  },
  Hi = (e, t) => {
    const s = {};
    for (const n in e) (!Rs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
function Ri(e, t, s) {
  const { props: n, children: r, component: o } = e,
    { props: l, children: a, patchFlag: d } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && d >= 0) {
    if (d & 1024) return !0;
    if (d & 16) return n ? br(n, l, f) : !!l;
    if (d & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const m = u[p];
        if (Do(l, n, m) && !Zs(f, m)) return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable)
      ? !0
      : n === l
        ? !1
        : n
          ? l
            ? br(n, l, f)
            : !0
          : !!l;
  return !1;
}
function br(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (Do(t, e, o) && !Zs(s, o)) return !0;
  }
  return !1;
}
function Do(e, t, s) {
  const n = e[s],
    r = t[s];
  return s === "style" && Y(n) && Y(r) ? !Ws(n, r) : n !== r;
}
function Bi({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (
      (r.suspense &&
        r.suspense.activeBranch === e &&
        ((r.suspense.vnode.el = r.el = n), (e = r)),
      r === e)
    )
      (((e = t.vnode).el = n), (t = t.parent));
    else break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Fo = {},
  Vo = () => Object.create(Fo),
  Ho = (e) => Object.getPrototypeOf(e) === Fo;
function Ki(e, t, s, n = !1) {
  const r = {},
    o = Vo();
  ((e.propsDefaults = Object.create(null)), Ro(e, t, r, o));
  for (const l in e.propsOptions[0]) l in r || (r[l] = void 0);
  (s ? (e.props = n ? r : ql(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o));
}
function Ui(e, t, s, n) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: l },
    } = e,
    a = X(r),
    [d] = e.propsOptions;
  let f = !1;
  if ((n || l > 0) && !(l & 16)) {
    if (l & 8) {
      const u = e.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let m = u[p];
        if (Zs(e.emitsOptions, m)) continue;
        const S = t[m];
        if (d)
          if (Z(o, m)) S !== o[m] && ((o[m] = S), (f = !0));
          else {
            const L = $e(m);
            r[L] = Pn(d, a, L, S, e, !1);
          }
        else S !== o[m] && ((o[m] = S), (f = !0));
      }
    }
  } else {
    Ro(e, t, r, o) && (f = !0);
    let u;
    for (const p in a)
      (!t || (!Z(t, p) && ((u = pt(p)) === p || !Z(t, u)))) &&
        (d
          ? s &&
            (s[p] !== void 0 || s[u] !== void 0) &&
            (r[p] = Pn(d, a, p, void 0, e, !0))
          : delete r[p]);
    if (o !== a) for (const p in o) (!t || !Z(t, p)) && (delete o[p], (f = !0));
  }
  f && st(e.attrs, "set", "");
}
function Ro(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let l = !1,
    a;
  if (t)
    for (let d in t) {
      if (Wt(d)) continue;
      const f = t[d];
      let u;
      r && Z(r, (u = $e(d)))
        ? !o || !o.includes(u)
          ? (s[u] = f)
          : ((a || (a = {}))[u] = f)
        : Zs(e.emitsOptions, d) ||
          ((!(d in n) || f !== n[d]) && ((n[d] = f), (l = !0)));
    }
  if (o) {
    const d = X(s),
      f = a || re;
    for (let u = 0; u < o.length; u++) {
      const p = o[u];
      s[p] = Pn(r, d, p, f[p], e, !Z(f, p));
    }
  }
  return l;
}
function Pn(e, t, s, n, r, o) {
  const l = e[s];
  if (l != null) {
    const a = Z(l, "default");
    if (a && n === void 0) {
      const d = l.default;
      if (l.type !== Function && !l.skipFactory && R(d)) {
        const { propsDefaults: f } = r;
        if (s in f) n = f[s];
        else {
          const u = ds(r);
          ((n = f[s] = d.call(null, t)), u());
        }
      } else n = d;
      r.ce && r.ce._setProp(s, n);
    }
    l[0] &&
      (o && !a ? (n = !1) : l[1] && (n === "" || n === pt(s)) && (n = !0));
  }
  return n;
}
const qi = new WeakMap();
function Bo(e, t, s = !1) {
  const n = s ? qi : t.propsCache,
    r = n.get(e);
  if (r) return r;
  const o = e.props,
    l = {},
    a = [];
  let d = !1;
  if (!R(e)) {
    const u = (p) => {
      d = !0;
      const [m, S] = Bo(p, t, !0);
      (xe(l, m), S && a.push(...S));
    };
    (!s && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u));
  }
  if (!o && !d) return (Y(e) && n.set(e, Et), Et);
  if (V(o))
    for (let u = 0; u < o.length; u++) {
      const p = $e(o[u]);
      vr(p) && (l[p] = re);
    }
  else if (o)
    for (const u in o) {
      const p = $e(u);
      if (vr(p)) {
        const m = o[u],
          S = (l[p] = V(m) || R(m) ? { type: m } : xe({}, m)),
          L = S.type;
        let I = !1,
          K = !0;
        if (V(L))
          for (let U = 0; U < L.length; ++U) {
            const D = L[U],
              W = R(D) && D.name;
            if (W === "Boolean") {
              I = !0;
              break;
            } else W === "String" && (K = !1);
          }
        else I = R(L) && L.name === "Boolean";
        ((S[0] = I), (S[1] = K), (I || Z(S, "default")) && a.push(p));
      }
    }
  const f = [l, a];
  return (Y(e) && n.set(e, f), f);
}
function vr(e) {
  return e[0] !== "$" && !Wt(e);
}
const qn = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Wn = (e) => (V(e) ? e.map(ze) : [ze(e)]),
  Wi = (e, t, s) => {
    if (t._n) return t;
    const n = jt((...r) => Wn(t(...r)), s);
    return ((n._c = !1), n);
  },
  Ko = (e, t, s) => {
    const n = e._ctx;
    for (const r in e) {
      if (qn(r)) continue;
      const o = e[r];
      if (R(o)) t[r] = Wi(r, o, n);
      else if (o != null) {
        const l = Wn(o);
        t[r] = () => l;
      }
    }
  },
  Uo = (e, t) => {
    const s = Wn(t);
    e.slots.default = () => s;
  },
  qo = (e, t, s) => {
    for (const n in t) (s || !qn(n)) && (e[n] = t[n]);
  },
  zi = (e, t, s) => {
    const n = (e.slots = Vo());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (qo(n, t, s), s && Xr(n, "_", r, !0)) : Ko(t, n);
    } else t && Uo(e, t);
  },
  Ji = (e, t, s) => {
    const { vnode: n, slots: r } = e;
    let o = !0,
      l = re;
    if (n.shapeFlag & 32) {
      const a = t._;
      (a
        ? s && a === 1
          ? (o = !1)
          : qo(r, t, s)
        : ((o = !t.$stable), Ko(t, r)),
        (l = t));
    } else t && (Uo(e, t), (l = { default: 1 }));
    if (o) for (const a in r) !qn(a) && l[a] == null && delete r[a];
  },
  Ce = Yi;
function Gi(e) {
  return Xi(e);
}
function Xi(e, t) {
  const s = Us();
  s.__VUE__ = !0;
  const {
      insert: n,
      remove: r,
      patchProp: o,
      createElement: l,
      createText: a,
      createComment: d,
      setText: f,
      setElementText: u,
      parentNode: p,
      nextSibling: m,
      setScopeId: S = Ge,
      insertStaticContent: L,
    } = e,
    I = (
      c,
      h,
      g,
      y = null,
      v = null,
      x = null,
      T = void 0,
      _ = null,
      w = !!h.dynamicChildren,
    ) => {
      if (c === h) return;
      (c && !_t(c, h) && ((y = us(c)), He(c, v, x, !0), (c = null)),
        h.patchFlag === -2 && ((w = !1), (h.dynamicChildren = null)));
      const { type: b, ref: F, shapeFlag: M } = h;
      switch (b) {
        case Ys:
          K(c, h, g, y);
          break;
        case Te:
          U(c, h, g, y);
          break;
        case Cs:
          c == null && D(h, g, y, T);
          break;
        case z:
          E(c, h, g, y, v, x, T, _, w);
          break;
        default:
          M & 1
            ? Q(c, h, g, y, v, x, T, _, w)
            : M & 6
              ? oe(c, h, g, y, v, x, T, _, w)
              : (M & 64 || M & 128) && b.process(c, h, g, y, v, x, T, _, w, Ft);
      }
      F != null && v
        ? Gt(F, c && c.ref, x, h || c, !h)
        : F == null && c && c.ref != null && Gt(c.ref, null, x, c, !0);
    },
    K = (c, h, g, y) => {
      if (c == null) n((h.el = a(h.children)), g, y);
      else {
        const v = (h.el = c.el);
        h.children !== c.children && f(v, h.children);
      }
    },
    U = (c, h, g, y) => {
      c == null ? n((h.el = d(h.children || "")), g, y) : (h.el = c.el);
    },
    D = (c, h, g, y) => {
      [c.el, c.anchor] = L(c.children, h, g, y, c.el, c.anchor);
    },
    W = ({ el: c, anchor: h }, g, y) => {
      let v;
      for (; c && c !== h; ) ((v = m(c)), n(c, g, y), (c = v));
      n(h, g, y);
    },
    j = ({ el: c, anchor: h }) => {
      let g;
      for (; c && c !== h; ) ((g = m(c)), r(c), (c = g));
      r(h);
    },
    Q = (c, h, g, y, v, x, T, _, w) => {
      if (
        (h.type === "svg" ? (T = "svg") : h.type === "math" && (T = "mathml"),
        c == null)
      )
        ce(h, g, y, v, x, T, _, w);
      else {
        const b = c.el && c.el._isVueCE ? c.el : null;
        try {
          (b && b._beginPatch(), O(c, h, v, x, T, _, w));
        } finally {
          b && b._endPatch();
        }
      }
    },
    ce = (c, h, g, y, v, x, T, _) => {
      let w, b;
      const { props: F, shapeFlag: M, transition: N, dirs: H } = c;
      if (
        ((w = c.el = l(c.type, x, F && F.is, F)),
        M & 8
          ? u(w, c.children)
          : M & 16 && ee(c.children, w, null, y, v, hn(c, x), T, _),
        H && mt(c, null, y, "created"),
        B(w, c, c.scopeId, T, y),
        F)
      ) {
        for (const ne in F)
          ne !== "value" && !Wt(ne) && o(w, ne, null, F[ne], x, y);
        ("value" in F && o(w, "value", null, F.value, x),
          (b = F.onVnodeBeforeMount) && Ue(b, y, c));
      }
      H && mt(c, null, y, "beforeMount");
      const G = Qi(v, N);
      (G && N.beforeEnter(w),
        n(w, h, g),
        ((b = F && F.onVnodeMounted) || G || H) &&
          Ce(() => {
            try {
              (b && Ue(b, y, c),
                G && N.enter(w),
                H && mt(c, null, y, "mounted"));
            } finally {
            }
          }, v));
    },
    B = (c, h, g, y, v) => {
      if ((g && S(c, g), y)) for (let x = 0; x < y.length; x++) S(c, y[x]);
      if (v) {
        let x = v.subTree;
        if (
          h === x ||
          (Jo(x.type) && (x.ssContent === h || x.ssFallback === h))
        ) {
          const T = v.vnode;
          B(c, T, T.scopeId, T.slotScopeIds, v.parent);
        }
      }
    },
    ee = (c, h, g, y, v, x, T, _, w = 0) => {
      for (let b = w; b < c.length; b++) {
        const F = (c[b] = _ ? tt(c[b]) : ze(c[b]));
        I(null, F, h, g, y, v, x, T, _);
      }
    },
    O = (c, h, g, y, v, x, T) => {
      const _ = (h.el = c.el);
      let { patchFlag: w, dynamicChildren: b, dirs: F } = h;
      w |= c.patchFlag & 16;
      const M = c.props || re,
        N = h.props || re;
      let H;
      if (
        (g && bt(g, !1),
        (H = N.onVnodeBeforeUpdate) && Ue(H, g, h, c),
        F && mt(h, c, g, "beforeUpdate"),
        g && bt(g, !0),
        b &&
          (!c.dynamicChildren || c.dynamicChildren.length !== b.length) &&
          ((w = 0), (T = !1), (b = null)),
        ((M.innerHTML && N.innerHTML == null) ||
          (M.textContent && N.textContent == null)) &&
          u(_, ""),
        b
          ? J(c.dynamicChildren, b, _, g, y, hn(h, v), x)
          : T || le(c, h, _, null, g, y, hn(h, v), x, !1),
        w > 0)
      ) {
        if (w & 16) te(_, M, N, g, v);
        else if (
          (w & 2 && M.class !== N.class && o(_, "class", null, N.class, v),
          w & 4 && o(_, "style", M.style, N.style, v),
          w & 8)
        ) {
          const G = h.dynamicProps;
          for (let ne = 0; ne < G.length; ne++) {
            const se = G[ne],
              he = M[se],
              me = N[se];
            (me !== he || se === "value") && o(_, se, he, me, v, g);
          }
        }
        w & 1 && c.children !== h.children && u(_, h.children);
      } else !T && b == null && te(_, M, N, g, v);
      ((H = N.onVnodeUpdated) || F) &&
        Ce(() => {
          (H && Ue(H, g, h, c), F && mt(h, c, g, "updated"));
        }, y);
    },
    J = (c, h, g, y, v, x, T) => {
      for (let _ = 0; _ < h.length; _++) {
        const w = c[_],
          b = h[_],
          F =
            w.el && (w.type === z || !_t(w, b) || w.shapeFlag & 198)
              ? p(w.el)
              : g;
        I(w, b, F, null, y, v, x, T, !0);
      }
    },
    te = (c, h, g, y, v) => {
      if (h !== g) {
        if (h !== re)
          for (const x in h) !Wt(x) && !(x in g) && o(c, x, h[x], null, v, y);
        for (const x in g) {
          if (Wt(x)) continue;
          const T = g[x],
            _ = h[x];
          T !== _ && x !== "value" && o(c, x, _, T, v, y);
        }
        "value" in g && o(c, "value", h.value, g.value, v);
      }
    },
    E = (c, h, g, y, v, x, T, _, w) => {
      const b = (h.el = c ? c.el : a("")),
        F = (h.anchor = c ? c.anchor : a(""));
      let { patchFlag: M, dynamicChildren: N, slotScopeIds: H } = h;
      (H && (_ = _ ? _.concat(H) : H),
        c == null
          ? (n(b, g, y), n(F, g, y), ee(h.children || [], g, F, v, x, T, _, w))
          : M > 0 &&
              M & 64 &&
              N &&
              c.dynamicChildren &&
              c.dynamicChildren.length === N.length
            ? (J(c.dynamicChildren, N, g, v, x, T, _),
              (h.key != null || (v && h === v.subTree)) && zn(c, h, !0))
            : le(c, h, g, F, v, x, T, _, w));
    },
    oe = (c, h, g, y, v, x, T, _, w) => {
      ((h.slotScopeIds = _),
        c == null
          ? h.shapeFlag & 512
            ? v.ctx.activate(h, g, y, T, w)
            : fe(h, g, y, v, x, T, w)
          : Qe(c, h, w));
    },
    fe = (c, h, g, y, v, x, T) => {
      const _ = (c.component = oa(c, y, v));
      if ((Xs(c) && (_.ctx.renderer = Ft), la(_, !1, T), _.asyncDep)) {
        if ((v && v.registerDep(_, ge, T), !c.el)) {
          const w = (_.subTree = A(Te));
          (U(null, w, h, g), (c.placeholder = w.el));
        }
      } else ge(_, c, h, g, v, x, T);
    },
    Qe = (c, h, g) => {
      const y = (h.component = c.component);
      if (Ri(c, h, g))
        if (y.asyncDep && !y.asyncResolved) {
          ue(y, h, g);
          return;
        } else ((y.next = h), y.update());
      else ((h.el = c.el), (y.vnode = h));
    },
    ge = (c, h, g, y, v, x, T) => {
      const _ = () => {
        if (c.isMounted) {
          let { next: M, bu: N, u: H, parent: G, vnode: ne } = c;
          {
            const Be = Wo(c);
            if (Be) {
              (M && ((M.el = ne.el), ue(c, M, T)),
                Be.asyncDep.then(() => {
                  Ce(() => {
                    c.isUnmounted || b();
                  }, v);
                }));
              return;
            }
          }
          let se = M,
            he;
          (bt(c, !1),
            M ? ((M.el = ne.el), ue(c, M, T)) : (M = ne),
            N && ws(N),
            (he = M.props && M.props.onVnodeBeforeUpdate) && Ue(he, G, M, ne),
            bt(c, !0));
          const me = mr(c),
            Re = c.subTree;
          ((c.subTree = me),
            I(Re, me, p(Re.el), us(Re), c, v, x),
            (M.el = me.el),
            se === null && Bi(c, me.el),
            H && Ce(H, v),
            (he = M.props && M.props.onVnodeUpdated) &&
              Ce(() => Ue(he, G, M, ne), v));
        } else {
          let M;
          const { el: N, props: H } = h,
            { bm: G, m: ne, parent: se, root: he, type: me } = c,
            Re = Xt(h);
          (bt(c, !1),
            G && ws(G),
            !Re && (M = H && H.onVnodeBeforeMount) && Ue(M, se, h),
            bt(c, !0));
          {
            he.ce &&
              he.ce._hasShadowRoot() &&
              he.ce._injectChildStyle(me, c.parent ? c.parent.type : void 0);
            const Be = (c.subTree = mr(c));
            (I(null, Be, g, y, c, v, x), (h.el = Be.el));
          }
          if ((ne && Ce(ne, v), !Re && (M = H && H.onVnodeMounted))) {
            const Be = h;
            Ce(() => Ue(M, se, Be), v);
          }
          ((h.shapeFlag & 256 ||
            (se && Xt(se.vnode) && se.vnode.shapeFlag & 256)) &&
            c.a &&
            Ce(c.a, v),
            (c.isMounted = !0),
            (h = g = y = null));
        }
      };
      c.scope.on();
      const w = (c.effect = new eo(_));
      c.scope.off();
      const b = (c.update = w.run.bind(w)),
        F = (c.job = w.runIfDirty.bind(w));
      ((F.i = c), (F.id = c.uid), (w.scheduler = () => Un(F)), bt(c, !0), b());
    },
    ue = (c, h, g) => {
      h.component = c;
      const y = c.vnode.props;
      ((c.vnode = h),
        (c.next = null),
        Ui(c, h.props, y, g),
        Ji(c, h.children, g),
        ot(),
        ir(c),
        lt());
    },
    le = (c, h, g, y, v, x, T, _, w = !1) => {
      const b = c && c.children,
        F = c ? c.shapeFlag : 0,
        M = h.children,
        { patchFlag: N, shapeFlag: H } = h;
      if (N > 0) {
        if (N & 128) {
          cs(b, M, g, y, v, x, T, _, w);
          return;
        } else if (N & 256) {
          gt(b, M, g, y, v, x, T, _, w);
          return;
        }
      }
      H & 8
        ? (F & 16 && Dt(b, v, x), M !== b && u(g, M))
        : F & 16
          ? H & 16
            ? cs(b, M, g, y, v, x, T, _, w)
            : Dt(b, v, x, !0)
          : (F & 8 && u(g, ""), H & 16 && ee(M, g, y, v, x, T, _, w));
    },
    gt = (c, h, g, y, v, x, T, _, w) => {
      ((c = c || Et), (h = h || Et));
      const b = c.length,
        F = h.length,
        M = Math.min(b, F);
      let N;
      for (N = 0; N < M; N++) {
        const H = (h[N] = w ? tt(h[N]) : ze(h[N]));
        I(c[N], H, g, null, v, x, T, _, w);
      }
      b > F ? Dt(c, v, x, !0, !1, M) : ee(h, g, y, v, x, T, _, w, M);
    },
    cs = (c, h, g, y, v, x, T, _, w) => {
      let b = 0;
      const F = h.length;
      let M = c.length - 1,
        N = F - 1;
      for (; b <= M && b <= N; ) {
        const H = c[b],
          G = (h[b] = w ? tt(h[b]) : ze(h[b]));
        if (_t(H, G)) I(H, G, g, null, v, x, T, _, w);
        else break;
        b++;
      }
      for (; b <= M && b <= N; ) {
        const H = c[M],
          G = (h[N] = w ? tt(h[N]) : ze(h[N]));
        if (_t(H, G)) I(H, G, g, null, v, x, T, _, w);
        else break;
        (M--, N--);
      }
      if (b > M) {
        if (b <= N) {
          const H = N + 1,
            G = H < F ? h[H].el : y;
          for (; b <= N; )
            (I(null, (h[b] = w ? tt(h[b]) : ze(h[b])), g, G, v, x, T, _, w),
              b++);
        }
      } else if (b > N) for (; b <= M; ) (He(c[b], v, x, !0), b++);
      else {
        const H = b,
          G = b,
          ne = new Map();
        for (b = G; b <= N; b++) {
          const Me = (h[b] = w ? tt(h[b]) : ze(h[b]));
          Me.key != null && ne.set(Me.key, b);
        }
        let se,
          he = 0;
        const me = N - G + 1;
        let Re = !1,
          Be = 0;
        const Vt = new Array(me);
        for (b = 0; b < me; b++) Vt[b] = 0;
        for (b = H; b <= M; b++) {
          const Me = c[b];
          if (he >= me) {
            He(Me, v, x, !0);
            continue;
          }
          let Ke;
          if (Me.key != null) Ke = ne.get(Me.key);
          else
            for (se = G; se <= N; se++)
              if (Vt[se - G] === 0 && _t(Me, h[se])) {
                Ke = se;
                break;
              }
          Ke === void 0
            ? He(Me, v, x, !0)
            : ((Vt[Ke - G] = b + 1),
              Ke >= Be ? (Be = Ke) : (Re = !0),
              I(Me, h[Ke], g, null, v, x, T, _, w),
              he++);
        }
        const Yn = Re ? Zi(Vt) : Et;
        for (se = Yn.length - 1, b = me - 1; b >= 0; b--) {
          const Me = G + b,
            Ke = h[Me],
            er = h[Me + 1],
            tr = Me + 1 < F ? er.el || zo(er) : y;
          Vt[b] === 0
            ? I(null, Ke, g, tr, v, x, T, _, w)
            : Re && (se < 0 || b !== Yn[se] ? xt(Ke, g, tr, 2) : se--);
        }
      }
    },
    xt = (c, h, g, y, v = null) => {
      const { el: x, type: T, transition: _, children: w, shapeFlag: b } = c;
      if (b & 6) {
        xt(c.component.subTree, h, g, y);
        return;
      }
      if (b & 128) {
        c.suspense.move(h, g, y);
        return;
      }
      if (b & 64) {
        T.move(c, h, g, Ft);
        return;
      }
      if (T === z) {
        n(x, h, g);
        for (let M = 0; M < w.length; M++) xt(w[M], h, g, y);
        n(c.anchor, h, g);
        return;
      }
      if (T === Cs) {
        W(c, h, g);
        return;
      }
      if (y !== 2 && b & 1 && _)
        if (y === 0)
          _.persisted && !x[Oe]
            ? n(x, h, g)
            : (_.beforeEnter(x), n(x, h, g), Ce(() => _.enter(x), v));
        else {
          const { leave: M, delayLeave: N, afterLeave: H } = _,
            G = () => {
              c.ctx.isUnmounted ? r(x) : n(x, h, g);
            },
            ne = () => {
              const se = x._isLeaving || !!x[Oe];
              (x._isLeaving && x[Oe](!0),
                _.persisted && !se
                  ? G()
                  : M(x, () => {
                      (G(), H && H());
                    }));
            };
          N ? N(x, G, ne) : ne();
        }
      else n(x, h, g);
    },
    He = (c, h, g, y = !1, v = !1) => {
      const {
        type: x,
        props: T,
        ref: _,
        children: w,
        dynamicChildren: b,
        shapeFlag: F,
        patchFlag: M,
        dirs: N,
        cacheIndex: H,
        memo: G,
      } = c;
      if (
        (M === -2 && (v = !1),
        _ != null && (ot(), Gt(_, null, g, c, !0), lt()),
        H != null && (h.renderCache[H] = void 0),
        F & 256)
      ) {
        h.ctx.deactivate(c);
        return;
      }
      const ne = F & 1 && N,
        se = !Xt(c);
      let he;
      if ((se && (he = T && T.onVnodeBeforeUnmount) && Ue(he, h, c), F & 6))
        hl(c.component, g, y);
      else {
        if (F & 128) {
          c.suspense.unmount(g, y);
          return;
        }
        (ne && mt(c, null, h, "beforeUnmount"),
          F & 64
            ? c.type.remove(c, h, g, Ft, y)
            : b && !b.hasOnce && (x !== z || (M > 0 && M & 64))
              ? Dt(b, h, g, !1, !0)
              : ((x === z && M & 384) || (!v && F & 16)) && Dt(w, h, g),
          y && Qn(c));
      }
      const me = G != null && H == null;
      ((se && (he = T && T.onVnodeUnmounted)) || ne || me) &&
        Ce(() => {
          (he && Ue(he, h, c),
            ne && mt(c, null, h, "unmounted"),
            me && (c.el = null));
        }, g);
    },
    Qn = (c) => {
      const { type: h, el: g, anchor: y, transition: v } = c;
      if (h === z) {
        fl(g, y);
        return;
      }
      if (h === Cs) {
        j(c);
        return;
      }
      const x = () => {
        (r(g), v && !v.persisted && v.afterLeave && v.afterLeave());
      };
      if (c.shapeFlag & 1 && v && !v.persisted) {
        const { leave: T, delayLeave: _ } = v,
          w = () => T(g, x);
        _ ? _(c.el, x, w) : w();
      } else x();
    },
    fl = (c, h) => {
      let g;
      for (; c !== h; ) ((g = m(c)), r(c), (c = g));
      r(h);
    },
    hl = (c, h, g) => {
      const { bum: y, scope: v, job: x, subTree: T, um: _, m: w, a: b } = c;
      (yr(w),
        yr(b),
        y && ws(y),
        v.stop(),
        x && ((x.flags |= 8), He(T, c, h, g)),
        _ && Ce(_, h),
        Ce(() => {
          c.isUnmounted = !0;
        }, h));
    },
    Dt = (c, h, g, y = !1, v = !1, x = 0) => {
      for (let T = x; T < c.length; T++) He(c[T], h, g, y, v);
    },
    us = (c) => {
      if (c.shapeFlag & 6) return us(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const h = m(c.anchor || c.el),
        g = h && h[_o];
      return g ? m(g) : h;
    };
  let nn = !1;
  const Zn = (c, h, g) => {
      let y;
      (c == null
        ? h._vnode && (He(h._vnode, null, null, !0), (y = h._vnode.component))
        : I(h._vnode || null, c, h, null, null, null, g),
        (h._vnode = c),
        nn || ((nn = !0), ir(y), bo(), (nn = !1)));
    },
    Ft = {
      p: I,
      um: He,
      m: xt,
      r: Qn,
      mt: fe,
      mc: ee,
      pc: le,
      pbc: J,
      n: us,
      o: e,
    };
  return { render: Zn, hydrate: void 0, createApp: Li(Zn) };
}
function hn({ type: e, props: t }, s) {
  return (s === "svg" && e === "foreignObject") ||
    (s === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : s;
}
function bt({ effect: e, job: t }, s) {
  s ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Qi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function zn(e, t, s = !1) {
  const n = e.children,
    r = t.children;
  if (V(n) && V(r))
    for (let o = 0; o < n.length; o++) {
      const l = n[o];
      let a = r[o];
      (a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = r[o] = tt(r[o])), (a.el = l.el)),
        !s && a.patchFlag !== -2 && zn(l, a)),
        a.type === Ys &&
          (a.patchFlag === -1 && (a = r[o] = tt(a)), (a.el = l.el)),
        a.type === Te && !a.el && (a.el = l.el));
    }
}
function Zi(e) {
  const t = e.slice(),
    s = [0];
  let n, r, o, l, a;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const f = e[n];
    if (f !== 0) {
      if (((r = s[s.length - 1]), e[r] < f)) {
        ((t[n] = r), s.push(n));
        continue;
      }
      for (o = 0, l = s.length - 1; o < l; )
        ((a = (o + l) >> 1), e[s[a]] < f ? (o = a + 1) : (l = a));
      f < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), (s[o] = n));
    }
  }
  for (o = s.length, l = s[o - 1]; o-- > 0; ) ((s[o] = l), (l = t[l]));
  return s;
}
function Wo(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Wo(t);
}
function yr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function zo(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? zo(t.subTree) : null;
}
const Jo = (e) => e.__isSuspense;
function Yi(e, t) {
  t && t.pendingBranch
    ? V(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ni(e);
}
const z = Symbol.for("v-fgt"),
  Ys = Symbol.for("v-txt"),
  Te = Symbol.for("v-cmt"),
  Cs = Symbol.for("v-stc"),
  Tt = [];
let Ie = null;
function k(e = !1) {
  Tt.push((Ie = e ? null : []));
}
function Go() {
  (Tt.pop(), (Ie = Tt[Tt.length - 1] || null));
}
let ns = 1;
function js(e, t = !1) {
  ((ns += e), e < 0 && Ie && t && (Ie.hasOnce = !0));
}
function Xo(e) {
  return (
    (e.dynamicChildren = ns > 0 ? Ie || Et : null),
    Go(),
    ns > 0 && Ie && Ie.push(e),
    e
  );
}
function $(e, t, s, n, r, o) {
  return Xo(i(e, t, s, n, r, o, !0));
}
function Ae(e, t, s, n, r) {
  return Xo(A(e, t, s, n, r, !0));
}
function Os(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _t(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qo = ({ key: e }) => e ?? null,
  Ss = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? de(e) || ke(e) || R(e)
        ? { i: Ee, r: e, k: t, f: !!s }
        : e
      : null
  );
function i(
  e,
  t = null,
  s = null,
  n = 0,
  r = null,
  o = e === z ? 0 : 1,
  l = !1,
  a = !1,
) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qo(t),
    ref: t && Ss(t),
    scopeId: yo,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee,
  };
  return (
    a
      ? (Ls(d, s), o & 128 && e.normalize(d))
      : s && (d.shapeFlag |= de(s) ? 8 : 16),
    ns > 0 &&
      !l &&
      Ie &&
      (d.patchFlag > 0 || o & 6) &&
      d.patchFlag !== 32 &&
      Ie.push(d),
    d
  );
}
const A = ea;
function ea(e, t = null, s = null, n = 0, r = null, o = !1) {
  if (((!e || e === Io) && (e = Te), Os(e))) {
    const a = ht(e, t, !0);
    return (
      s && Ls(a, s),
      ns > 0 &&
        !o &&
        Ie &&
        (a.shapeFlag & 6 ? (Ie[Ie.indexOf(e)] = a) : Ie.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((ua(e) && (e = e.__vccOpts), t)) {
    t = ta(t);
    let { class: a, style: d } = t;
    (a && !de(a) && (t.class = Le(a)),
      Y(d) && (Kn(d) && !V(d) && (d = xe({}, d)), (t.style = qs(d))));
  }
  const l = de(e) ? 1 : Jo(e) ? 128 : Gs(e) ? 64 : Y(e) ? 4 : R(e) ? 2 : 0;
  return i(e, t, s, n, r, l, o, !0);
}
function ta(e) {
  return e ? (Kn(e) || Ho(e) ? xe({}, e) : e) : null;
}
function ht(e, t, s = !1, n = !1) {
  const { props: r, ref: o, patchFlag: l, children: a, transition: d } = e,
    f = t ? sa(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && Qo(f),
      ref:
        t && t.ref
          ? s && o
            ? V(o)
              ? o.concat(Ss(t))
              : [o, Ss(t)]
            : Ss(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== z ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: d,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ht(e.ssContent),
      ssFallback: e.ssFallback && ht(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (d && n && ss(u, d.clone(u)), u);
}
function rt(e = " ", t = 0) {
  return A(Ys, null, e, t);
}
function en(e, t) {
  const s = A(Cs, null, e);
  return ((s.staticCount = t), s);
}
function pe(e = "", t = !1) {
  return t ? (k(), Ae(Te, null, e)) : A(Te, null, e);
}
function ze(e) {
  return e == null || typeof e == "boolean"
    ? A(Te)
    : V(e)
      ? A(z, null, e.slice())
      : Os(e)
        ? tt(e)
        : A(Ys, null, String(e));
}
function tt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ht(e);
}
function Ls(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (V(t)) s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ls(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Ho(t)
        ? (t._ctx = Ee)
        : r === 3 &&
          Ee &&
          (Ee.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else if (R(t)) {
    if (n & 65) {
      Ls(e, { default: t });
      return;
    }
    ((t = { default: t, _ctx: Ee }), (s = 32));
  } else ((t = String(t)), n & 64 ? ((s = 16), (t = [rt(t)])) : (s = 8));
  ((e.children = t), (e.shapeFlag |= s));
}
function sa(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Le([t.class, n.class]));
      else if (r === "style") t.style = qs([t.style, n.style]);
      else if (Hs(r)) {
        const o = t[r],
          l = n[r];
        l && o !== l && !(V(o) && o.includes(l))
          ? (t[r] = o ? [].concat(o, l) : l)
          : l == null && o == null && !Rs(r) && (t[r] = l);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Ue(e, t, s, n = null) {
  De(e, t, 7, [s, n]);
}
const na = Lo();
let ra = 0;
function oa(e, t, s) {
  const n = e.type,
    r = (t ? t.appContext : e.appContext) || na,
    o = {
      uid: ra++,
      vnode: e,
      type: n,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Tl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Bo(n, r),
      emitsOptions: No(n, r),
      emit: null,
      emitted: null,
      propsDefaults: re,
      inheritAttrs: n.inheritAttrs,
      ctx: re,
      data: re,
      props: re,
      attrs: re,
      slots: re,
      refs: re,
      setupState: re,
      setupContext: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Di.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ye = null;
const Zo = () => ye || Ee;
let Ns, rs;
{
  const e = Us(),
    t = (s, n) => {
      let r;
      return (
        (r = e[s]) || (r = e[s] = []),
        r.push(n),
        (o) => {
          r.length > 1 ? r.forEach((l) => l(o)) : r[0](o);
        }
      );
    };
  ((Ns = t("__VUE_INSTANCE_SETTERS__", (s) => (ye = s))),
    (rs = t("__VUE_SSR_SETTERS__", (s) => (os = s))));
}
const ds = (e) => {
    const t = ye;
    return (
      Ns(e),
      e.scope.on(),
      () => {
        (e.scope.off(), Ns(t));
      }
    );
  },
  kr = () => {
    (ye && ye.scope.off(), Ns(null));
  };
function Yo(e) {
  return e.vnode.shapeFlag & 4;
}
let os = !1;
function la(e, t = !1, s = !1) {
  t && rs(t);
  const { props: n, children: r } = e.vnode,
    o = Yo(e);
  (Ki(e, n, o, t), zi(e, r, s || t));
  const l = o ? ia(e, t) : void 0;
  return (t && rs(!1), l);
}
function ia(e, t) {
  const s = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Ai)));
  const { setup: n } = s;
  if (n) {
    ot();
    const r = (e.setupContext = n.length > 1 ? da(e) : null),
      o = ds(e),
      l = as(n, e, 0, [e.props, r]),
      a = zr(l);
    if ((lt(), o(), (a || e.sp) && !Xt(e) && Mo(e), a)) {
      if ((l.then(kr, kr), t))
        return l
          .then((d) => {
            rs(!0);
            try {
              wr(e, d, t);
            } finally {
              rs(!1);
            }
          })
          .catch((d) => {
            Js(d, e, 0);
          });
      e.asyncDep = l;
    } else wr(e, l);
  } else el(e);
}
function wr(e, t, s) {
  (R(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Y(t) && (e.setupState = go(t)),
    el(e));
}
function el(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ge);
  {
    const r = ds(e);
    ot();
    try {
      Mi(e);
    } finally {
      (lt(), r());
    }
  }
}
const aa = {
  get(e, t) {
    return (ve(e, "get", ""), e[t]);
  },
};
function da(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, aa),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function tn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(go(Wl(e.exposed)), {
          get(t, s) {
            if (s in t) return t[s];
            if (s in Qt) return Qt[s](e);
          },
          has(t, s) {
            return s in t || s in Qt;
          },
        }))
    : e.proxy;
}
function ca(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function ua(e) {
  return R(e) && "__vccOpts" in e;
}
const sn = (e, t) => Ql(e, t, os);
function Ds(e, t, s) {
  try {
    js(-1);
    const n = arguments.length;
    return n === 2
      ? Y(t) && !V(t)
        ? Os(t)
          ? A(e, null, [t])
          : A(e, t)
        : A(e, null, t)
      : (n > 3
          ? (s = Array.prototype.slice.call(arguments, 2))
          : n === 3 && Os(s) && (s = [s]),
        A(e, t, s));
  } finally {
    js(1);
  }
}
const fa = "3.5.42";
/**
 * @vue/runtime-dom v3.5.42
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let En;
const _r = typeof window < "u" && window.trustedTypes;
if (_r)
  try {
    En = _r.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const tl = En ? (e) => En.createHTML(e) : (e) => e,
  ha = "http://www.w3.org/2000/svg",
  pa = "http://www.w3.org/1998/Math/MathML",
  et = typeof document < "u" ? document : null,
  Cr = et && et.createElement("template"),
  ga = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, s, n) => {
      const r =
        t === "svg"
          ? et.createElementNS(ha, e)
          : t === "mathml"
            ? et.createElementNS(pa, e)
            : s
              ? et.createElement(e, { is: s })
              : et.createElement(e);
      return (
        e === "select" &&
          n &&
          n.multiple != null &&
          r.setAttribute("multiple", n.multiple),
        r
      );
    },
    createText: (e) => et.createTextNode(e),
    createComment: (e) => et.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => et.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, s, n, r, o) {
      const l = s ? s.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), s),
            !(r === o || !(r = r.nextSibling));
        );
      else {
        Cr.innerHTML = tl(
          n === "svg"
            ? `<svg>${e}</svg>`
            : n === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const a = Cr.content;
        if (n === "svg" || n === "mathml") {
          const d = a.firstChild;
          for (; d.firstChild; ) a.appendChild(d.firstChild);
          a.removeChild(d);
        }
        t.insertBefore(a, s);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild,
      ];
    },
  },
  dt = "transition",
  Bt = "animation",
  ls = Symbol("_vtc"),
  sl = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  xa = xe({}, Co, sl),
  ma = (e) => ((e.displayName = "Transition"), (e.props = xa), e),
  Zt = ma((e, { slots: t }) => Ds(pi, ba(e), t)),
  vt = (e, t = []) => {
    V(e) ? e.forEach((s) => s(...t)) : e && e(...t);
  },
  Sr = (e) => (e ? (V(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ba(e) {
  const t = {};
  for (const E in e) E in sl || (t[E] = e[E]);
  if (e.css === !1) return t;
  const {
      name: s = "v",
      type: n,
      duration: r,
      enterFromClass: o = `${s}-enter-from`,
      enterActiveClass: l = `${s}-enter-active`,
      enterToClass: a = `${s}-enter-to`,
      appearFromClass: d = o,
      appearActiveClass: f = l,
      appearToClass: u = a,
      leaveFromClass: p = `${s}-leave-from`,
      leaveActiveClass: m = `${s}-leave-active`,
      leaveToClass: S = `${s}-leave-to`,
    } = e,
    L = va(r),
    I = L && L[0],
    K = L && L[1],
    {
      onBeforeEnter: U,
      onEnter: D,
      onEnterCancelled: W,
      onLeave: j,
      onLeaveCancelled: Q,
      onBeforeAppear: ce = U,
      onAppear: B = D,
      onAppearCancelled: ee = W,
    } = t,
    O = (E, oe, fe, Qe) => {
      ((E._enterCancelled = Qe),
        yt(E, oe ? u : a),
        yt(E, oe ? f : l),
        fe && fe());
    },
    J = (E, oe) => {
      ((E._isLeaving = !1), yt(E, p), yt(E, S), yt(E, m), oe && oe());
    },
    te = (E) => (oe, fe) => {
      const Qe = E ? B : D,
        ge = () => O(oe, E, fe);
      (vt(Qe, [oe, ge]),
        Tr(() => {
          (yt(oe, E ? d : o), Ye(oe, E ? u : a), Sr(Qe) || $r(oe, n, I, ge));
        }));
    };
  return xe(t, {
    onBeforeEnter(E) {
      (vt(U, [E]), Ye(E, o), Ye(E, l));
    },
    onBeforeAppear(E) {
      (vt(ce, [E]), Ye(E, d), Ye(E, f));
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(E, oe) {
      E._isLeaving = !0;
      const fe = () => J(E, oe);
      (Ye(E, p),
        E._enterCancelled ? (Ye(E, m), Pr(E)) : (Pr(E), Ye(E, m)),
        Tr(() => {
          E._isLeaving && (yt(E, p), Ye(E, S), Sr(j) || $r(E, n, K, fe));
        }),
        vt(j, [E, fe]));
    },
    onEnterCancelled(E) {
      (O(E, !1, void 0, !0), vt(W, [E]));
    },
    onAppearCancelled(E) {
      (O(E, !0, void 0, !0), vt(ee, [E]));
    },
    onLeaveCancelled(E) {
      (J(E), vt(Q, [E]));
    },
  });
}
function va(e) {
  if (e == null) return null;
  if (Y(e)) return [pn(e.enter), pn(e.leave)];
  {
    const t = pn(e);
    return [t, t];
  }
}
function pn(e) {
  return bl(e);
}
function Ye(e, t) {
  (t.split(/\s+/).forEach((s) => s && e.classList.add(s)),
    (e[ls] || (e[ls] = new Set())).add(t));
}
function yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[ls];
  s && (s.delete(t), s.size || (e[ls] = void 0));
}
function Tr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ya = 0;
function $r(e, t, s, n) {
  const r = (e._endId = ++ya),
    o = () => {
      r === e._endId && n();
    };
  if (s != null) return setTimeout(o, s);
  const { type: l, timeout: a, propCount: d } = ka(e, t);
  if (!l) return n();
  const f = l + "end";
  let u = 0;
  const p = () => {
      (e.removeEventListener(f, m), o());
    },
    m = (S) => {
      S.target === e && ++u >= d && p();
    };
  (setTimeout(() => {
    u < d && p();
  }, a + 1),
    e.addEventListener(f, m));
}
function ka(e, t) {
  const s = window.getComputedStyle(e),
    n = (L) => (s[L] || "").split(", "),
    r = n(`${dt}Delay`),
    o = n(`${dt}Duration`),
    l = Ar(r, o),
    a = n(`${Bt}Delay`),
    d = n(`${Bt}Duration`),
    f = Ar(a, d);
  let u = null,
    p = 0,
    m = 0;
  t === dt
    ? l > 0 && ((u = dt), (p = l), (m = o.length))
    : t === Bt
      ? f > 0 && ((u = Bt), (p = f), (m = d.length))
      : ((p = Math.max(l, f)),
        (u = p > 0 ? (l > f ? dt : Bt) : null),
        (m = u ? (u === dt ? o.length : d.length) : 0));
  const S =
    u === dt &&
    /\b(?:transform|all)(?:,|$)/.test(n(`${dt}Property`).toString());
  return { type: u, timeout: p, propCount: m, hasTransform: S };
}
function Ar(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((s, n) => Mr(s) + Mr(e[n])));
}
function Mr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function wa(e, t, s) {
  const n = e[ls];
  (n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : s
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const Er = Symbol("_vod"),
  _a = Symbol("_vsh"),
  Ca = Symbol(""),
  Sa = /(?:^|;)\s*display\s*:/;
function Ta(e, t, s) {
  const n = e.style,
    r = de(s);
  let o = !1;
  if (s && !r) {
    if (t)
      if (de(t))
        for (const l of t.split(";")) {
          const a = l.slice(0, l.indexOf(":")).trim();
          s[a] == null && qt(n, a, "");
        }
      else for (const l in t) s[l] == null && qt(n, l, "");
    for (const l in s) {
      l === "display" && (o = !0);
      const a = s[l];
      a != null
        ? Aa(e, l, !de(t) && t ? t[l] : void 0, a) || qt(n, l, a)
        : qt(n, l, "");
    }
  } else if (r) {
    if (t !== s) {
      const l = n[Ca];
      (l && (s += ";" + l), (n.cssText = s), (o = Sa.test(s)));
    }
  } else t && e.removeAttribute("style");
  Er in e && ((e[Er] = o ? n.display : ""), e[_a] && (n.display = "none"));
}
const ms = /\s*!important$/;
function qt(e, t, s) {
  if (V(s)) s.forEach((n) => qt(e, t, n));
  else if ((s == null && (s = ""), t.startsWith("--")))
    ms.test(s)
      ? e.setProperty(t, s.replace(ms, ""), "important")
      : e.setProperty(t, s);
  else {
    const n = $a(e, t);
    ms.test(s)
      ? e.setProperty(pt(n), s.replace(ms, ""), "important")
      : (e[n] = s);
  }
}
const Ir = ["Webkit", "Moz", "ms"],
  gn = {};
function $a(e, t) {
  const s = gn[t];
  if (s) return s;
  let n = $e(t);
  if (n !== "filter" && n in e) return (gn[t] = n);
  n = Ks(n);
  for (let r = 0; r < Ir.length; r++) {
    const o = Ir[r] + n;
    if (o in e) return (gn[t] = o);
  }
  return t;
}
function Aa(e, t, s, n) {
  return (
    e.tagName === "TEXTAREA" &&
    (t === "width" || t === "height") &&
    de(n) &&
    s === n
  );
}
const jr = "http://www.w3.org/1999/xlink";
function Or(e, t, s, n, r, o = Cl(t)) {
  n && t.startsWith("xlink:")
    ? s == null
      ? e.removeAttributeNS(jr, t.slice(6, t.length))
      : e.setAttributeNS(jr, t, s)
    : s == null || (o && !Qr(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : Xe(s) ? String(s) : s);
}
function Lr(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? tl(s) : s);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      d = s == null ? (e.type === "checkbox" ? "on" : "") : String(s);
    ((a !== d || !("_value" in e)) && (e.value = d),
      s == null && e.removeAttribute(t),
      (e._value = s));
    return;
  }
  let l = !1;
  if (s === "" || s == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (s = Qr(s))
      : s == null && a === "string"
        ? ((s = ""), (l = !0))
        : a === "number" && ((s = 0), (l = !0));
  }
  try {
    e[t] = s;
  } catch {}
  l && e.removeAttribute(r || t);
}
function Pt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ma(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Nr = Symbol("_vei");
function Pa(e, t, s, n, r = null) {
  const o = e[Nr] || (e[Nr] = {}),
    l = o[t];
  if (n && l) l.value = n;
  else {
    const [a, d] = ja(t);
    if (n) {
      const f = (o[t] = Na(n, r));
      Pt(e, a, f, d);
    } else l && (Ma(e, a, l, d), (o[t] = void 0));
  }
}
const Ea = /(Once|Passive|Capture)$/,
  Ia = /^on:?(?:Once|Passive|Capture)$/;
function ja(e) {
  let t, s;
  for (; (s = e.match(Ea)) && !Ia.test(e); )
    (t || (t = {}),
      (e = e.slice(0, e.length - s[1].length)),
      (t[s[1].toLowerCase()] = !0));
  return [e[2] === ":" ? e.slice(3) : pt(e.slice(2)), t];
}
let xn = 0;
const Oa = Promise.resolve(),
  La = () => xn || (Oa.then(() => (xn = 0)), (xn = Date.now()));
function Na(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    const r = s.value;
    if (V(r)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        (o.call(n), (n._stopped = !0));
      };
      const l = r.slice(),
        a = [n];
      for (let d = 0; d < l.length && !n._stopped; d++) {
        const f = l[d];
        f && De(f, t, 5, a);
      }
    } else De(r, t, 5, [n]);
  };
  return ((s.value = e), (s.attached = La()), s);
}
const Dr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Da = (e, t, s, n, r, o) => {
    const l = r === "svg";
    t === "class"
      ? wa(e, n, l)
      : t === "style"
        ? Ta(e, s, n)
        : Hs(t)
          ? Rs(t) || Pa(e, t, s, n, o)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Fa(e, t, n, l)
              )
            ? (Lr(e, t, n),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Or(e, t, n, l, o, t !== "value"))
            : e._isVueCE &&
                (Va(e, t) ||
                  (e._def.__asyncLoader && (/[A-Z]/.test(t) || !de(n))))
              ? Lr(e, $e(t), n, o, t)
              : (t === "true-value"
                  ? (e._trueValue = n)
                  : t === "false-value" && (e._falseValue = n),
                Or(e, t, n, l));
  };
function Fa(e, t, s, n) {
  if (n)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Dr(t) && R(s))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Dr(t) && de(s) ? !1 : t in e;
}
function Va(e, t) {
  const s = e._def.props;
  if (!s) return !1;
  const n = $e(t);
  return Array.isArray(s)
    ? s.some((r) => $e(r) === n)
    : Object.keys(s).some((r) => $e(r) === n);
}
const Fr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (s) => ws(t, s) : t;
};
function Ha(e) {
  e.target.composing = !0;
}
function Vr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const bs = Symbol("_assign"),
  vs = Symbol("_initialValue");
function mn(e, t, s) {
  return (t && (e = e.trim()), s && (e = Ln(e)), e);
}
const ys = {
    created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
      (e.parentNode &&
        (e.type === "text"
          ? (e[vs] = e.defaultValue.replace(/[\r\n]/g, ""))
          : e.type === "textarea" &&
            (e[vs] = e.defaultValue.replace(
              /\r\n?/g,
              `
`,
            ))),
        (e[bs] = Fr(r)));
      const o = n || (r.props && r.props.type === "number");
      (Pt(e, t ? "change" : "input", (l) => {
        l.target.composing || e[bs](mn(e.value, s, o));
      }),
        (s || o) &&
          Pt(e, "change", () => {
            e.value = mn(e.value, s, o);
          }),
        t ||
          (Pt(e, "compositionstart", Ha),
          Pt(e, "compositionend", Vr),
          Pt(e, "change", Vr)));
    },
    mounted(e, { value: t, modifiers: { trim: s, number: n } }) {
      const r = t ?? "",
        o = e[vs];
      (delete e[vs],
        o !== void 0 &&
        (e.type === "text" || e.type === "textarea") &&
        e.value !== o
          ? e[bs](mn(e.value, s, n))
          : (e.value = r));
    },
    beforeUpdate(
      e,
      { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: o } },
      l,
    ) {
      if (((e[bs] = Fr(l)), e.composing)) return;
      const a =
          (o || e.type === "number") && !/^0\d/.test(e.value)
            ? Ln(e.value)
            : e.value,
        d = t ?? "";
      if (a === d) return;
      const f = e.getRootNode();
      ((f instanceof Document || f instanceof ShadowRoot) &&
        f.activeElement === e &&
        e.type !== "range" &&
        ((n && t === s) || (r && e.value.trim() === d))) ||
        (e.value = d);
    },
  },
  Ra = ["ctrl", "shift", "alt", "meta"],
  Ba = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Ra.some((s) => e[`${s}Key`] && !t.includes(s)),
  },
  Fs = (e, t) => {
    if (!e) return e;
    const s = e._withMods || (e._withMods = {}),
      n = t.join(".");
    return (
      s[n] ||
      (s[n] = (r, ...o) => {
        for (let l = 0; l < t.length; l++) {
          const a = Ba[t[l]];
          if (a && a(r, t)) return;
        }
        return e(r, ...o);
      })
    );
  },
  Ka = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Ua = (e, t) => {
    const s = e._withKeys || (e._withKeys = {}),
      n = t.join(".");
    return (
      s[n] ||
      (s[n] = (r) => {
        if (!("key" in r)) return;
        const o = pt(r.key);
        if (t.some((l) => l === o || Ka[l] === o)) return e(r);
      })
    );
  },
  qa = xe({ patchProp: Da }, ga);
let Hr;
function Wa() {
  return Hr || (Hr = Gi(qa));
}
const za = (...e) => {
  const t = Wa().createApp(...e),
    { mount: s } = t;
  return (
    (t.mount = (n) => {
      const r = Ga(n);
      if (!r) return;
      const o = t._component;
      (!R(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ""));
      const l = s(r, !1, Ja(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        l
      );
    }),
    t
  );
};
function Ja(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ga(e) {
  return de(e) ? document.querySelector(e) : e;
}
const we = {
  personal: {
    fullName: "Nguyễn Mạnh Cường",
    title: "Software Engineer | Fullstack & Systems Developer",
    subtitle:
      "Sinh viên Kỹ sư CNTT đam mê xây dựng hệ thống mạng Realtime, ứng dụng Thương mại điện tử tích hợp AI & Blockchain, song song kinh nghiệm kinh doanh thực chiến TikTok Shop & Affiliate Marketing.",
    avatar:
      "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/486269939_1320799155857208_4315338073025820117_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEINXye-I3s4gRo_0h08bCUZt-FYPCNaNlm34Vg8I1o2dAXNCbPle3RNM7Yip5zGzslHMFWHXuivPGRW-JNF1rV&_nc_ohc=Qq_6QcjihFQQ7kNvwH6fSfQ&_nc_oc=Adp3m71LccKEk0_fGWWLblL9XBBzx4yu-AWa-tOO8afAasxOVdi76Cmg_qBJPIoLOy_S1k7IumnffE8cbX0IKG7t&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=n8-auHEOkrvCHL9y2-MJGA&_nc_ss=7b2a8&oh=00_AQKtlCDqderVgjrGa5qiz_w4pcIc9XDpWHF-czwyQOTtBA&oe=6A9DB677",
    openToWork: !0,
    workStatusText: "Sẵn sàng cho cơ hội Thực tập & Dự án mới",
    location: "Đà Nẵng, Việt Nam",
    email: "manhcuongnguyen2205@gmail.com",
    phone: "0977148627",
    dateOfBirth: "22/05/2005",
    website: "https://cuonglocnuoc.vercel.app",
    github: "https://github.com/manhcuong2005",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com/manhcuong2205",
    telegram: "https://t.me/0977148627",
    summary:
      "Tôi là sinh viên ngành Kỹ sư Công nghệ Thông tin (2023–2028) với đam mê sâu sắc về lập trình hệ thống, mạng đa luồng và công nghệ mới như AI, Blockchain. Song song đó, tôi sở hữu kinh nghiệm thực chiến về kinh doanh online — từ Affiliate Marketing đến TikTok Shop — cùng kỹ năng sáng tạo nội dung và dựng video chuyên nghiệp.",
  },
  stats: [
    { label: "GPA Hiện tại", value: "3.1", suffix: "/4.0" },
    { label: "Dự án Nổi bật", value: "5+", suffix: "" },
    { label: "Doanh thu Affiliate", value: "2.5B", suffix: "đ" },
    { label: "Đánh giá Shop", value: "4.8★", suffix: "" },
  ],
  services: [
    {
      icon: "Server",
      title: "Backend & Systems Development",
      description:
        "Xây dựng backend mạnh mẽ với Java Spring Boot, Node.js và thiết kế CSDL quan hệ PostgreSQL/MySQL. Kinh nghiệm lập trình socket TCP/UDP đa luồng cho ứng dụng Realtime.",
    },
    {
      icon: "Cpu",
      title: "AI & Blockchain Integration",
      description:
        "Tích hợp mô hình AI nhận diện khuôn mặt (Python/OpenCV) và cổng thanh toán Blockchain, ZaloPay Sandbox vào hệ thống thương mại điện tử thực tế.",
    },
    {
      icon: "Coins",
      title: "Affiliate Marketing & E-Commerce",
      description:
        "Vận hành affiliate marketing đa kênh với doanh thu ước tính ~2.5 tỷ đồng. Kinh doanh TikTok Shop đạt Star Shop, 500+ đơn hàng, đánh giá 4.8★, doanh thu ~35 triệu.",
    },
    {
      icon: "Video",
      title: "Content Creation & Video Editing",
      description:
        "Quay dựng video chuyên nghiệp phục vụ quảng bá thương hiệu, sản phẩm Affiliate và TikTok Shop. Nắm vững workflow sản xuất nội dung tăng chuyển đổi (conversion rate).",
    },
  ],
  skillCategories: [
    {
      name: "Ngôn ngữ Lập trình (Core Languages)",
      skills: [
        { name: "Java (Core, OOP, Advanced)", level: 88, icon: "Code" },
        {
          name: "C / C++ (Data Structures & Sockets)",
          level: 82,
          icon: "Code",
        },
        { name: "Python (AI & Scripting)", level: 80, icon: "FileCode" },
        { name: "JavaScript / TypeScript", level: 85, icon: "FileCode" },
        { name: "HTML5 / CSS3 / Tailwind", level: 88, icon: "Palette" },
      ],
    },
    {
      name: "Backend Frameworks & Cơ sở dữ liệu",
      skills: [
        { name: "Spring Boot / Java Web", level: 85, icon: "Server" },
        { name: "PostgreSQL", level: 82, icon: "Database" },
        { name: "MySQL", level: 85, icon: "Database" },
        { name: "RESTful API Architecture", level: 86, icon: "Network" },
        { name: "Node.js / Express", level: 78, icon: "Server" },
      ],
    },
    {
      name: "Mạng máy tính & Công nghệ Mới",
      skills: [
        {
          name: "Socket TCP / UDP & Multi-threading",
          level: 86,
          icon: "Network",
        },
        { name: "AI / Face Recognition (Python)", level: 78, icon: "Cpu" },
        { name: "Blockchain & Web3 Payment", level: 75, icon: "Coins" },
        { name: "ZaloPay Sandbox Integration", level: 85, icon: "CreditCard" },
      ],
    },
    {
      name: "Kinh doanh & Sáng tạo Nội dung",
      skills: [
        {
          name: "Affiliate Marketing (Đa kênh)",
          level: 90,
          icon: "TrendingUp",
        },
        { name: "TikTok Shop Operations", level: 88, icon: "ShoppingBag" },
        {
          name: "Quay & Dựng Video (Premiere/Capcut)",
          level: 85,
          icon: "Video",
        },
        { name: "Content Strategy & SEO", level: 80, icon: "Lightbulb" },
      ],
    },
  ],
  experiences: [
    {
      period: "2023 – 2026",
      role: "Sinh viên Kỹ sư CNTT – Lập trình Dự án",
      company: "Đại học",
      location: "Đà Nẵng, Việt Nam",
      description:
        "Học tập và thực hành song song các dự án lập trình thực tế từ cơ bản đến nâng cao qua các năm học.",
      achievements: [
        "2023 – Xây dựng ứng dụng bán đồ ăn (Food Delivery) và ứng dụng nhắn tin cơ bản bằng Java Core & OOP.",
        "2025 – Phát triển ứng dụng nhắn tin nâng cao với Java: TCP/UDP socket đa luồng, gọi điện Realtime, đồng bộ dữ liệu.",
        "2026 – Xây dựng hệ thống thương mại điện tử tích hợp AI nhận diện khuôn mặt và thanh toán bằng Blockchain.",
      ],
      techStack: [
        "Java",
        "C++",
        "Python",
        "Spring Boot",
        "PostgreSQL",
        "MySQL",
        "TCP/UDP",
        "Blockchain",
      ],
    },
  ],
  businessExperiences: [
    {
      period: "10/2024 – 09/2026",
      role: "Affiliate Marketer – Đa kênh & Đa nền tảng",
      company: "Tự kinh doanh (Freelance)",
      location: "Toàn quốc (Online)",
      type: "affiliate",
      description:
        "Vận hành hệ thống affiliate marketing đa kênh trên các nền tảng mạng xã hội và sàn thương mại điện tử, tiếp cận và chuyển đổi hàng nghìn khách hàng tiềm năng.",
      achievements: [
        "Doanh thu ước tính từ affiliate đạt mức ~2.5 tỷ đồng trong vòng 2 năm hoạt động.",
        "Xây dựng hệ thống nội dung quảng bá (content funnel) tối ưu tỷ lệ chuyển đổi trên đa kênh.",
        "Kết hợp video marketing và SEO để tăng traffic tự nhiên bền vững.",
      ],
      techStack: [
        "Affiliate Networks",
        "TikTok Ads",
        "Facebook Ads",
        "Content Marketing",
        "SEO",
      ],
    },
    {
      period: "05/2025 – 09/2026",
      role: "Chủ Shop – TikTok Shop Seller",
      company: "TikTok Shop",
      location: "Đà Nẵng / Toàn quốc",
      type: "tiktok",
      description:
        "Tự vận hành cửa hàng TikTok Shop từ bước nhập hàng, quay video sản phẩm đến xử lý đơn hàng và chăm sóc khách hàng.",
      achievements: [
        "Đạt 500+ đơn hàng thành công với doanh thu ~35 triệu đồng.",
        "Nhận huy hiệu ⭐ Star Shop với điểm đánh giá 4.8/5 sao từ khách hàng.",
        "Tỷ lệ hoàn hàng duy trì ở mức thấp, tỷ lệ phản hồi khách hàng đạt 95%+.",
      ],
      techStack: [
        "TikTok Shop",
        "Video Marketing",
        "Livestream",
        "Order Management",
        "Customer Care",
      ],
    },
    {
      period: "10/2024 – 09/2026",
      role: "Video Editor & Content Creator",
      company: "Tự thực hiện – Kênh Affiliate & TikTok",
      location: "Đà Nẵng, Việt Nam",
      type: "video",
      description:
        "Tự sản xuất, quay và dựng toàn bộ video quảng cáo sản phẩm phục vụ chiến dịch Affiliate và TikTok Shop.",
      achievements: [
        "Sản xuất hàng chục video quảng bá sản phẩm đạt hàng nghìn lượt xem tự nhiên.",
        "Thành thạo workflow dựng video thương mại với CapCut",
        "Xây dựng phong cách nội dung nhất quán, tăng nhận diện thương hiệu cá nhân.",
      ],
      techStack: ["CapCut", "TikTok Creator Tools", "Canva"],
    },
  ],
  education: [
    {
      period: "2023 – 2028",
      degree: "Kỹ sư Công nghệ Thông tin",
      school: "Khoa Công nghệ Thông tin",
      grade: "GPA Hiện tại: 3.1 / 4.0",
      description:
        "Chương trình đào tạo Kỹ sư CNTT chính quy, nghiên cứu chuyên sâu về Kiến trúc hệ thống, Lập trình mạng, Trí tuệ nhân tạo và Cơ sở dữ liệu phân tán.",
    },
  ],
  certifications: [
    {
      name: "Chứng chỉ Hoàn thành Cuộc thi Java Web",
      issuer: "FPT Software",
      year: "2024",
      link: "#",
    },
    {
      name: "⭐ Star Shop – TikTok Shop",
      issuer: "TikTok Shop Vietnam",
      year: "2025",
      link: "#",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Ứng dụng Nhắn tin & Gọi điện Desktop Realtime (TCP / UDP)",
      category: "web",
      categoryLabel: "Desktop & Network",
      tagline:
        "Hệ thống truyền thông đa luồng realtime — TCP nhắn tin, UDP gọi điện",
      description:
        "Ứng dụng Desktop cho phép nhắn tin tức thời qua TCP đảm bảo độ tin cậy và gọi thoại Realtime qua UDP tốc độ cao, kết hợp kiến trúc đa luồng Multi-threading Socket Programming.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      tags: [
        "Java",
        "C++",
        "TCP/UDP Sockets",
        "Multi-threading",
        "Network Audio",
      ],
      liveUrl: "https://github.com/manhcuong2005",
      githubUrl: "https://github.com/manhcuong2005",
      featured: !0,
    },
    {
      id: 2,
      title: "Hệ sinh thái E-Commerce tích hợp AI & Blockchain",
      category: "web",
      categoryLabel: "Fullstack & AI Web3",
      tagline:
        "Thương mại điện tử thông minh — AI nhận diện, thanh toán Blockchain & ZaloPay",
      description:
        "Nền tảng thương mại điện tử hiện đại tích hợp AI nhận diện khuôn mặt đăng nhập (Python/OpenCV), thanh toán hợp đồng thông minh Blockchain và ZaloPay Sandbox ảo.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      tags: [
        "Spring Boot",
        "Python AI",
        "Blockchain",
        "PostgreSQL",
        "ZaloPay Sandbox",
        "Vue.js",
      ],
      liveUrl: "https://cuonglocnuoc.vercel.app",
      githubUrl: "https://github.com/manhcuong2005",
      featured: !0,
    },
    {
      id: 3,
      title: "Ứng dụng Bán đồ ăn & Nhắn tin cơ bản (Java Core)",
      category: "web",
      categoryLabel: "Java Desktop App",
      tagline:
        "Ứng dụng đầu tay — food ordering & basic messaging với Java OOP",
      description:
        "Ứng dụng desktop bán đồ ăn (gọi món, quản lý đơn hàng) và nhắn tin cơ bản xây dựng bằng Java Core, áp dụng các nguyên lý lập trình hướng đối tượng và cấu trúc dữ liệu.",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
      tags: ["Java Core", "OOP", "JavaSwing / JavaFX", "MySQL"],
      liveUrl: "https://github.com/manhcuong2005",
      githubUrl: "https://github.com/manhcuong2005",
      featured: !1,
    },
    {
      id: 4,
      title: "CuongLocNuoc Web Platform",
      category: "web",
      categoryLabel: "Web Application",
      tagline: "Website giới thiệu và quản lý sản phẩm thực tế",
      description:
        "Website chính thức giới thiệu dịch vụ và sản phẩm lọc nước, giao diện Responsive hoàn chỉnh và triển khai trên Vercel.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["JavaScript", "CSS3", "Tailwind CSS", "Vercel"],
      liveUrl: "https://cuonglocnuoc.vercel.app",
      githubUrl: "https://github.com/manhcuong2005",
      featured: !1,
    },
  ],
};
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xa = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ks = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qa = (
  {
    size: e,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    color: n,
    iconNode: r,
    name: o,
    class: l,
    ...a
  },
  { slots: d },
) =>
  Ds(
    "svg",
    {
      ...ks,
      width: e || ks.width,
      height: e || ks.height,
      stroke: n || ks.stroke,
      "stroke-width": s ? (Number(t) * 24) / Number(e) : t,
      class: ["lucide", `lucide-${Xa(o ?? "icon")}`],
      ...a,
    },
    [...r.map((f) => Ds(...f)), ...(d.default ? [d.default()] : [])],
  );
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q =
  (e, t) =>
  (s, { slots: n }) =>
    Ds(Qa, { ...s, iconNode: t, name: e }, n);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Za = q("ArrowUpIcon", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ya = q("BriefcaseIcon", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = q("CheckIcon", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bn = q("CircleCheckBigIcon", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nl = q("CircleCheckIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = q("CloudIcon", [
  [
    "path",
    { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rl = q("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = q("CoinsIcon", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Br = q("CopyIcon", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = q("CpuIcon", [
  [
    "rect",
    { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" },
  ],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = q("CreditCardIcon", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = q("DatabaseIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ol = q("ExternalLinkIcon", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ll = q("FacebookIcon", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const od = q("FileDownIcon", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vs = q("FileTextIcon", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const il = q("FolderGit2Icon", [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
      key: "1w6njk",
    },
  ],
  ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
  ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8", key: "pkpw2h" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jn = q("GithubIcon", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = q("GraduationCapIcon", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const id = q("HouseIcon", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const al = q("LinkedinIcon", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dl = q("MailIcon", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cl = q("MapPinIcon", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ad = q("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kr = q("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dd = q("NetworkIcon", [
  [
    "rect",
    { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" },
  ],
  [
    "rect",
    { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" },
  ],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cd = q("PanelsTopLeftIcon", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ul = q("PhoneIcon", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = q("PrinterIcon", [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd",
    },
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  [
    "rect",
    { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" },
  ],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gn = q("SendIcon", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ur = q("ServerIcon", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = q("SmartphoneIcon", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = q("SparklesIcon", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qr = q("SunIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pd = q("TrendingUpIcon", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gd = q("UserCheckIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xn = q("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = q("ZoomInIcon", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
  ]),
  md = {
    class:
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",
  },
  bd = { href: "#", class: "flex items-center gap-2.5 group" },
  vd = {
    class:
      "w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform",
  },
  yd = { class: "flex flex-col" },
  kd = {
    class:
      "font-bold text-base sm:text-lg tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors",
  },
  wd = { class: "hidden md:flex items-center gap-1 lg:gap-2" },
  _d = ["href"],
  Cd = { class: "hidden sm:flex items-center gap-3" },
  Sd = ["title"],
  Td = { class: "flex items-center gap-2 md:hidden" },
  $d = {
    key: 0,
    class:
      "md:hidden glass border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl",
  },
  Ad = ["href"],
  Md = { class: "pt-3 border-t border-slate-200 dark:border-slate-800" },
  Pd = {
    __name: "Navbar",
    props: {
      personal: { type: Object, required: !0 },
      isDark: { type: Boolean, default: !1 },
    },
    emits: ["toggle-theme", "open-cv"],
    setup(e, { emit: t }) {
      const s = e,
        n = t,
        r = Pe(!1),
        o = Pe(!1),
        l = [
          { label: "Giới thiệu", href: "#about" },
          { label: "Kinh nghiệm", href: "#experience" },
          { label: "Kỹ năng", href: "#skills" },
          { label: "Dự án", href: "#projects" },
          { label: "Liên hệ", href: "#contact" },
        ],
        a = sn(() => {
          if (!s.personal.fullName) return "CV";
          const u = s.personal.fullName.trim().split(" ");
          return u.length === 1
            ? u[0].substring(0, 2).toUpperCase()
            : (u[0][0] + u[u.length - 1][0]).toUpperCase();
        }),
        d = () => {
          r.value = window.scrollY > 20;
        },
        f = () => {
          n("toggle-theme");
        };
      return (
        $t(() => {
          window.addEventListener("scroll", d);
        }),
        Nt(() => {
          window.removeEventListener("scroll", d);
        }),
        (u, p) => (
          k(),
          $(
            "header",
            {
              class: Le([
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print",
                [
                  r.value
                    ? "glass shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3"
                    : "bg-transparent py-5",
                ],
              ]),
            },
            [
              i("div", md, [
                i("a", bd, [
                  i("div", vd, C(a.value), 1),
                  i("div", yd, [
                    i("span", kd, C(e.personal.fullName), 1),
                    p[4] ||
                      (p[4] = i(
                        "span",
                        {
                          class:
                            "text-xs text-slate-500 dark:text-slate-400 font-medium",
                        },
                        "Digital CV & Portfolio",
                        -1,
                      )),
                  ]),
                ]),
                i("nav", wd, [
                  (k(),
                  $(
                    z,
                    null,
                    ae(l, (m) =>
                      i(
                        "a",
                        {
                          key: m.href,
                          href: m.href,
                          class:
                            "px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all",
                        },
                        C(m.label),
                        9,
                        _d,
                      ),
                    ),
                    64,
                  )),
                ]),
                i("div", Cd, [
                  i(
                    "button",
                    {
                      onClick: f,
                      class:
                        "p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors",
                      title: e.isDark
                        ? "Chuyển sang chế độ sáng"
                        : "Chuyển sang chế độ tối",
                    },
                    [
                      e.isDark
                        ? (k(),
                          Ae(P(qr), {
                            key: 0,
                            class: "w-5 h-5 text-amber-400",
                          }))
                        : (k(),
                          Ae(P(Kr), {
                            key: 1,
                            class: "w-5 h-5 text-slate-600",
                          })),
                    ],
                    8,
                    Sd,
                  ),
                  i(
                    "button",
                    {
                      onClick: p[0] || (p[0] = (m) => u.$emit("open-cv")),
                      class:
                        "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm hover:shadow-md shadow-brand-600/20 active:scale-95 transition-all",
                    },
                    [
                      A(P(Vs), { class: "w-4 h-4" }),
                      p[5] || (p[5] = i("span", null, "Xem & In CV", -1)),
                    ],
                  ),
                ]),
                i("div", Td, [
                  i(
                    "button",
                    {
                      onClick: f,
                      class:
                        "p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
                    },
                    [
                      e.isDark
                        ? (k(),
                          Ae(P(qr), {
                            key: 0,
                            class: "w-5 h-5 text-amber-400",
                          }))
                        : (k(),
                          Ae(P(Kr), {
                            key: 1,
                            class: "w-5 h-5 text-slate-600",
                          })),
                    ],
                  ),
                  i(
                    "button",
                    {
                      onClick: p[1] || (p[1] = (m) => (o.value = !o.value)),
                      class:
                        "p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none",
                    },
                    [
                      o.value
                        ? (k(), Ae(P(Xn), { key: 0, class: "w-6 h-6" }))
                        : (k(), Ae(P(ad), { key: 1, class: "w-6 h-6" })),
                    ],
                  ),
                ]),
              ]),
              A(
                Zt,
                {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "transform -translate-y-4 opacity-0",
                  "enter-to-class": "transform translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "transform translate-y-0 opacity-100",
                  "leave-to-class": "transform -translate-y-4 opacity-0",
                },
                {
                  default: jt(() => [
                    o.value
                      ? (k(),
                        $("div", $d, [
                          (k(),
                          $(
                            z,
                            null,
                            ae(l, (m) =>
                              i(
                                "a",
                                {
                                  key: m.href,
                                  href: m.href,
                                  onClick:
                                    p[2] || (p[2] = (S) => (o.value = !1)),
                                  class:
                                    "block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 transition-colors",
                                },
                                C(m.label),
                                9,
                                Ad,
                              ),
                            ),
                            64,
                          )),
                          i("div", Md, [
                            i(
                              "button",
                              {
                                onClick:
                                  p[3] ||
                                  (p[3] = (m) => {
                                    (u.$emit("open-cv"), (o.value = !1));
                                  }),
                                class:
                                  "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm",
                              },
                              [
                                A(P(Vs), { class: "w-4 h-4" }),
                                p[6] ||
                                  (p[6] = i(
                                    "span",
                                    null,
                                    "Xem & In CV (Bản Chuẩn)",
                                    -1,
                                  )),
                              ],
                            ),
                          ]),
                        ]))
                      : pe("", !0),
                  ]),
                  _: 1,
                },
              ),
            ],
            2,
          )
        )
      );
    },
  },
  Ed = {
    class:
      "relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern",
  },
  Id = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
  jd = {
    class:
      "flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-8",
  },
  Od = {
    class:
      "flex-1 text-center lg:text-left space-y-4 sm:space-y-6 w-full animate-fade-in-up",
  },
  Ld = {
    key: 0,
    class:
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shadow-sm hover:shadow-emerald-500/20 transition-all",
  },
  Nd = { class: "space-y-1 sm:space-y-2" },
  Dd = {
    class:
      "text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight",
  },
  Fd = {
    class:
      "bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient-flow",
  },
  Vd = {
    class:
      "h-8 sm:h-10 flex items-center justify-center lg:justify-start gap-1",
  },
  Hd = {
    class: "text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200",
  },
  Rd = {
    class:
      "text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0",
  },
  Bd = {
    class:
      "flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1",
  },
  Kd = {
    class:
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-105 transition-transform",
  },
  Ud = ["href"],
  qd = { class: "hidden xs:inline" },
  Wd = ["href"],
  zd = {
    class:
      "flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2",
  },
  Jd = {
    href: "#contact",
    class:
      "card-shimmer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:scale-95 transition-all",
  },
  Gd = { class: "grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3" },
  Xd = {
    href: "#projects",
    class:
      "card-shimmer inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm",
  },
  Qd = {
    class: "flex items-center justify-center lg:justify-start gap-3 pt-2",
  },
  Zd = ["href"],
  Yd = ["href"],
  ec = ["href"],
  tc = { class: "flex-shrink-0 relative my-2 sm:my-0" },
  sc = { class: "relative w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96" },
  nc = {
    class:
      "relative w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-inner",
  },
  rc = ["src", "alt"],
  oc = {
    class:
      "absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 pointer-events-none backdrop-blur-[2px]",
  },
  lc = {
    class:
      "absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 dark:bg-slate-900/95 glass border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl flex items-center gap-2 sm:gap-3 animate-float pointer-events-none z-30",
  },
  ic = {
    class:
      "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold shadow-inner",
  },
  ac = {
    class:
      "absolute top-1 -right-2 sm:top-6 sm:right-0 bg-white/95 dark:bg-slate-900/95 glass border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl flex items-center gap-2 sm:gap-3 animate-bounce-soft pointer-events-none z-30",
  },
  dc = {
    class:
      "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shadow-inner",
  },
  cc = {
    class:
      "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/70 dark:border-slate-800/70",
  },
  uc = {
    class:
      "block text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600 group-hover:scale-110 transition-transform",
  },
  fc = {
    class:
      "block mt-1 text-[11px] sm:text-sm font-medium text-slate-600 dark:text-slate-400",
  },
  hc = {
    __name: "HeroSection",
    props: {
      personal: { type: Object, required: !0 },
      stats: { type: Array, default: () => [] },
    },
    emits: ["open-cv", "open-avatar"],
    setup(e) {
      const t = [
          "Software Engineer",
          "Java & Spring Boot Developer",
          "TCP / UDP Socket Realtime Multi-threading",
          "AI Face Recognition & Blockchain Web3",
        ],
        s = Pe(t[0]);
      let n = 0,
        r = t[0].length,
        o = !1,
        l = null;
      const a = () => {
        const d = t[n];
        if (o)
          (r--,
            (s.value = d.substring(0, r)),
            r === 0 && ((o = !1), (n = (n + 1) % t.length)));
        else if ((r++, (s.value = d.substring(0, r)), r === d.length)) {
          ((o = !0),
            clearInterval(l),
            setTimeout(() => {
              l = setInterval(a, 40);
            }, 1500));
          return;
        }
      };
      return (
        $t(() => {
          l = setInterval(a, 60);
        }),
        Nt(() => {
          l && clearInterval(l);
        }),
        (d, f) => (
          k(),
          $("section", Ed, [
            f[15] ||
              (f[15] = en(
                '<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-gradient-to-tr from-brand-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div><div class="absolute top-10 right-4 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-pink-500/15 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow"></div><div class="absolute bottom-10 left-4 sm:left-16 w-60 sm:w-96 h-60 sm:h-96 bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse"></div><div class="hidden lg:block absolute top-28 left-[8%] px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-xl text-xs font-mono font-bold text-brand-600 dark:text-brand-400 animate-float pointer-events-none"> ⚡ Java &amp; Spring Boot </div><div class="hidden lg:block absolute top-40 right-[10%] px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-xl text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 animate-float-slow pointer-events-none"> 🌐 TCP / UDP Sockets </div><div class="hidden lg:block absolute bottom-36 left-[12%] px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-xl text-xs font-mono font-bold text-purple-600 dark:text-purple-400 animate-float-reverse pointer-events-none"> 🤖 AI &amp; Blockchain Web3 </div>',
                6,
              )),
            i("div", Id, [
              i("div", jd, [
                i("div", Od, [
                  e.personal.openToWork
                    ? (k(),
                      $("div", Ld, [
                        f[3] ||
                          (f[3] = i(
                            "span",
                            { class: "relative flex h-2.5 w-2.5" },
                            [
                              i("span", {
                                class:
                                  "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
                              }),
                              i("span", {
                                class:
                                  "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500",
                              }),
                            ],
                            -1,
                          )),
                        i(
                          "span",
                          null,
                          C(
                            e.personal.workStatusText ||
                              "Sẵn sàng nhận dự án mới",
                          ),
                          1,
                        ),
                      ]))
                    : pe("", !0),
                  i("div", Nd, [
                    f[5] ||
                      (f[5] = i(
                        "h2",
                        {
                          class:
                            "text-xs sm:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold",
                        },
                        " Xin chào, tôi là ",
                        -1,
                      )),
                    i("h1", Dd, [i("span", Fd, C(e.personal.fullName), 1)]),
                    i("div", Vd, [
                      i("span", Hd, C(s.value), 1),
                      f[4] ||
                        (f[4] = i(
                          "span",
                          { class: "w-0.5 h-6 bg-brand-500 animate-pulse" },
                          null,
                          -1,
                        )),
                    ]),
                  ]),
                  i("p", Rd, C(e.personal.subtitle), 1),
                  i("div", Bd, [
                    i("span", Kd, [
                      A(P(cl), { class: "w-3.5 h-3.5 text-brand-500" }),
                      rt(" " + C(e.personal.location), 1),
                    ]),
                    i(
                      "a",
                      {
                        href: `mailto:${e.personal.email}`,
                        class:
                          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:scale-105 active:scale-95 transition-all shadow-sm",
                      },
                      [
                        A(P(dl), { class: "w-3.5 h-3.5 text-brand-500" }),
                        i("span", qd, C(e.personal.email), 1),
                        f[6] ||
                          (f[6] = i(
                            "span",
                            { class: "xs:hidden" },
                            "Email",
                            -1,
                          )),
                      ],
                      8,
                      Ud,
                    ),
                    i(
                      "a",
                      {
                        href: `tel:${e.personal.phone}`,
                        class:
                          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:scale-105 active:scale-95 transition-all shadow-sm",
                      },
                      [
                        A(P(ul), { class: "w-3.5 h-3.5 text-brand-500" }),
                        rt(" " + C(e.personal.phone), 1),
                      ],
                      8,
                      Wd,
                    ),
                  ]),
                  i("div", zd, [
                    i("a", Jd, [
                      A(P(Gn), { class: "w-4 h-4" }),
                      f[7] || (f[7] = i("span", null, "Liên hệ hợp tác", -1)),
                    ]),
                    i("div", Gd, [
                      i("a", Xd, [
                        A(P(il), { class: "w-4 h-4 text-brand-500" }),
                        f[8] || (f[8] = i("span", null, "Xem dự án", -1)),
                      ]),
                      i(
                        "button",
                        {
                          type: "button",
                          onClick: f[0] || (f[0] = (u) => d.$emit("open-cv")),
                          class:
                            "card-shimmer inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer",
                        },
                        [
                          A(P(od), { class: "w-4 h-4 text-brand-500" }),
                          f[9] || (f[9] = i("span", null, "Bản in CV", -1)),
                        ],
                      ),
                    ]),
                  ]),
                  i("div", Qd, [
                    f[10] ||
                      (f[10] = i(
                        "span",
                        {
                          class:
                            "text-xs font-semibold uppercase tracking-wider text-slate-400",
                        },
                        "Mạng xã hội:",
                        -1,
                      )),
                    e.personal.github
                      ? (k(),
                        $(
                          "a",
                          {
                            key: 0,
                            href: e.personal.github,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class:
                              "p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all",
                            title: "GitHub",
                          },
                          [A(P(Jn), { class: "w-4 h-4" })],
                          8,
                          Zd,
                        ))
                      : pe("", !0),
                    e.personal.linkedin
                      ? (k(),
                        $(
                          "a",
                          {
                            key: 1,
                            href: e.personal.linkedin,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class:
                              "p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all",
                            title: "LinkedIn",
                          },
                          [A(P(al), { class: "w-4 h-4" })],
                          8,
                          Yd,
                        ))
                      : pe("", !0),
                    e.personal.facebook
                      ? (k(),
                        $(
                          "a",
                          {
                            key: 2,
                            href: e.personal.facebook,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class:
                              "p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all",
                            title: "Facebook",
                          },
                          [A(P(ll), { class: "w-4 h-4" })],
                          8,
                          ec,
                        ))
                      : pe("", !0),
                  ]),
                ]),
                i("div", tc, [
                  i("div", sc, [
                    f[14] ||
                      (f[14] = i(
                        "div",
                        {
                          class:
                            "absolute inset-0 rounded-full bg-gradient-to-tr from-brand-600 via-indigo-500 to-purple-500 blur-2xl opacity-50 dark:opacity-70 animate-pulse-glow pointer-events-none",
                        },
                        null,
                        -1,
                      )),
                    i(
                      "div",
                      {
                        role: "button",
                        tabindex: "0",
                        onClick: f[1] || (f[1] = (u) => d.$emit("open-avatar")),
                        onKeydown:
                          f[2] ||
                          (f[2] = Ua((u) => d.$emit("open-avatar"), ["enter"])),
                        class:
                          "relative w-full h-full rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-brand-500 via-indigo-400 to-purple-500 shadow-2xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-500/40 hover:scale-105 active:scale-95 transition-all duration-300 z-20",
                        title: "Nhấn vào để xem ảnh đại diện phóng to",
                      },
                      [
                        i("div", nc, [
                          i(
                            "img",
                            {
                              src: e.personal.avatar,
                              alt: e.personal.fullName,
                              class:
                                "w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 select-none",
                            },
                            null,
                            8,
                            rc,
                          ),
                          i("div", oc, [
                            A(P(xd), {
                              class:
                                "w-7 h-7 sm:w-10 sm:h-10 text-white drop-shadow-md group-hover:scale-110 transition-transform",
                            }),
                            f[11] ||
                              (f[11] = i(
                                "span",
                                {
                                  class:
                                    "text-[10px] sm:text-xs font-bold mt-1 bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-white/20",
                                },
                                "Xem to",
                                -1,
                              )),
                          ]),
                        ]),
                      ],
                      32,
                    ),
                    i("div", lc, [
                      i("div", ic, [
                        A(P(hd), {
                          class: "w-4 h-4 sm:w-5 sm:h-5 text-amber-500",
                        }),
                      ]),
                      f[12] ||
                        (f[12] = i(
                          "div",
                          null,
                          [
                            i(
                              "p",
                              {
                                class:
                                  "text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium",
                              },
                              "Học vấn",
                            ),
                            i(
                              "p",
                              {
                                class:
                                  "text-xs sm:text-sm font-bold text-slate-800 dark:text-white",
                              },
                              "GPA 3.1 / 4.0",
                            ),
                          ],
                          -1,
                        )),
                    ]),
                    i("div", ac, [
                      i("div", dc, [
                        A(P(nl), {
                          class: "w-4 h-4 sm:w-5 sm:h-5 text-emerald-500",
                        }),
                      ]),
                      f[13] ||
                        (f[13] = i(
                          "div",
                          null,
                          [
                            i(
                              "p",
                              {
                                class:
                                  "text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium",
                              },
                              "FPT Software",
                            ),
                            i(
                              "p",
                              {
                                class:
                                  "text-xs sm:text-sm font-bold text-slate-800 dark:text-white",
                              },
                              "Java Web Pass",
                            ),
                          ],
                          -1,
                        )),
                    ]),
                  ]),
                ]),
              ]),
              i("div", cc, [
                (k(!0),
                $(
                  z,
                  null,
                  ae(
                    e.stats,
                    (u, p) => (
                      k(),
                      $(
                        "div",
                        {
                          key: p,
                          class:
                            "card-shimmer p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-center hover:border-brand-500/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm group",
                        },
                        [
                          i("span", uc, C(u.value), 1),
                          i("span", fc, C(u.label), 1),
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
          ])
        )
      );
    },
  },
  pc = {
    id: "about",
    class:
      "py-14 sm:py-20 bg-slate-100/50 dark:bg-slate-900/40 relative overflow-hidden",
  },
  gc = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
  xc = {
    class: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
  },
  mc = { class: "lg:col-span-5 space-y-6" },
  bc = {
    class:
      "card-shimmer p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-5 hover:border-brand-500/50 transition-all duration-300",
  },
  vc = {
    class:
      "text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",
  },
  yc = {
    class:
      "text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm",
  },
  kc = {
    class:
      "space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm",
  },
  wc = {
    class:
      "flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60",
  },
  _c = { class: "font-semibold text-slate-800 dark:text-slate-200" },
  Cc = {
    class:
      "flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60",
  },
  Sc = { class: "font-semibold text-slate-800 dark:text-slate-200" },
  Tc = {
    class:
      "flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60",
  },
  $c = { class: "font-semibold text-slate-800 dark:text-slate-200" },
  Ac = { class: "flex justify-between py-1" },
  Mc = { class: "font-semibold text-brand-600 dark:text-brand-400 break-all" },
  Pc = {
    class: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5",
  },
  Ec = {
    class:
      "w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-brand-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm",
  },
  Ic = {
    class:
      "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors",
  },
  jc = {
    class:
      "text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed",
  },
  Oc = {
    __name: "AboutSection",
    props: {
      personal: { type: Object, required: !0 },
      services: { type: Array, default: () => [] },
    },
    setup(e) {
      const t = {
          Layout: cd,
          Server: Ur,
          Smartphone: fd,
          Cloud: ed,
          Code: rl,
          Database: rd,
          Network: dd,
          Cpu: sd,
          Coins: td,
          CreditCard: nd,
        },
        s = (n) => t[n] || Ur;
      return (n, r) => (
        k(),
        $("section", pc, [
          r[6] ||
            (r[6] = i(
              "div",
              {
                class:
                  "absolute bottom-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none",
              },
              null,
              -1,
            )),
          i("div", gc, [
            r[5] ||
              (r[5] = i(
                "div",
                { class: "text-center max-w-3xl mx-auto mb-10 sm:mb-16" },
                [
                  i(
                    "h2",
                    {
                      class:
                        "text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-1.5 sm:mb-2",
                    },
                    " Về bản thân ",
                  ),
                  i(
                    "p",
                    {
                      class:
                        "text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight",
                    },
                    " Đam mê lập trình hệ thống & công nghệ mới ",
                  ),
                  i("div", {
                    class:
                      "w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-3 rounded-full",
                  }),
                ],
                -1,
              )),
            i("div", xc, [
              i("div", mc, [
                i("div", bc, [
                  i("h3", vc, [
                    A(P(gd), { class: "w-5 h-5 text-brand-500" }),
                    r[0] || (r[0] = i("span", null, "Tóm tắt năng lực", -1)),
                  ]),
                  i("p", yc, C(e.personal.summary), 1),
                  i("div", kc, [
                    i("div", wc, [
                      r[1] ||
                        (r[1] = i(
                          "span",
                          { class: "text-slate-500 dark:text-slate-400" },
                          "Họ và tên:",
                          -1,
                        )),
                      i("span", _c, C(e.personal.fullName), 1),
                    ]),
                    i("div", Cc, [
                      r[2] ||
                        (r[2] = i(
                          "span",
                          { class: "text-slate-500 dark:text-slate-400" },
                          "Năm sinh:",
                          -1,
                        )),
                      i("span", Sc, C(e.personal.dateOfBirth), 1),
                    ]),
                    i("div", Tc, [
                      r[3] ||
                        (r[3] = i(
                          "span",
                          { class: "text-slate-500 dark:text-slate-400" },
                          "Khu vực:",
                          -1,
                        )),
                      i("span", $c, C(e.personal.location), 1),
                    ]),
                    i("div", Ac, [
                      r[4] ||
                        (r[4] = i(
                          "span",
                          { class: "text-slate-500 dark:text-slate-400" },
                          "Email:",
                          -1,
                        )),
                      i("span", Mc, C(e.personal.email), 1),
                    ]),
                  ]),
                ]),
              ]),
              i("div", Pc, [
                (k(!0),
                $(
                  z,
                  null,
                  ae(
                    e.services,
                    (o, l) => (
                      k(),
                      $(
                        "div",
                        {
                          key: l,
                          class:
                            "card-shimmer p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group",
                        },
                        [
                          i("div", null, [
                            i("div", Ec, [
                              (k(),
                              Ae(Ti(s(o.icon)), {
                                class: "w-5 h-5 sm:w-6 sm:h-6",
                              })),
                            ]),
                            i("h4", Ic, C(o.title), 1),
                            i("p", jc, C(o.description), 1),
                          ]),
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  Lc = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, r] of t) s[n] = r;
    return s;
  },
  Nc = { id: "experience", class: "py-14 sm:py-20 relative overflow-hidden" },
  Dc = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
  Fc = { class: "flex justify-center mb-8 sm:mb-12" },
  Vc = {
    class:
      "w-full sm:w-auto flex p-1 sm:p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 shadow-inner overflow-x-auto no-scrollbar",
  },
  Hc = { class: "max-w-4xl mx-auto", key: "tech" },
  Rc = {
    class:
      "relative space-y-6 before:absolute before:left-4 sm:before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-brand-500 before:via-indigo-500 before:to-purple-500",
  },
  Bc = { class: "relative flex gap-4 sm:gap-6 group" },
  Kc = {
    class:
      "card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/50 hover:-translate-y-0.5 transition-all duration-300",
  },
  Uc = { class: "flex flex-wrap gap-1.5" },
  qc = { class: "relative flex gap-4 sm:gap-6 group" },
  Wc = {
    class:
      "card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300",
  },
  zc = { class: "flex flex-wrap gap-1.5" },
  Jc = { class: "relative flex gap-4 sm:gap-6 group" },
  Gc = {
    class:
      "card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-300",
  },
  Xc = { class: "flex flex-wrap gap-1.5" },
  Qc = { class: "relative flex gap-4 sm:gap-6 group" },
  Zc = {
    class:
      "card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-rose-500/50 hover:-translate-y-0.5 transition-all duration-300",
  },
  Yc = { class: "flex flex-wrap gap-1.5" },
  e0 = { class: "max-w-4xl mx-auto", key: "business" },
  t0 = { class: "space-y-5" },
  s0 = {
    class:
      "card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-orange-500/50 transition-all duration-300 group",
  },
  n0 = { class: "space-y-2 mb-4" },
  r0 = { class: "flex flex-wrap gap-1.5" },
  o0 = {
    class:
      "card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-pink-500/50 transition-all duration-300 group",
  },
  l0 = { class: "space-y-2 mb-4" },
  i0 = { class: "flex flex-wrap gap-1.5" },
  a0 = {
    class:
      "card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300 group",
  },
  d0 = { class: "space-y-2 mb-4" },
  c0 = { class: "flex flex-wrap gap-1.5" },
  u0 = { class: "max-w-4xl mx-auto space-y-8", key: "education" },
  f0 = { class: "space-y-5" },
  h0 = { class: "flex flex-wrap items-center justify-between gap-2 mb-3" },
  p0 = {
    class:
      "px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200/50",
  },
  g0 = {
    key: 0,
    class:
      "px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-200/50",
  },
  x0 = {
    class: "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1",
  },
  m0 = {
    class: "text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2",
  },
  b0 = {
    class:
      "text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
  },
  v0 = {
    class: "space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800",
  },
  y0 = { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
  k0 = {
    class: "text-xs font-bold text-brand-600 dark:text-brand-400 mb-1 block",
  },
  w0 = {
    class:
      "text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors",
  },
  _0 = { class: "text-xs text-slate-500 dark:text-slate-400 mt-1" },
  C0 = {
    __name: "ExperienceSection",
    props: {
      experiences: { type: Array, default: () => [] },
      businessExperiences: { type: Array, default: () => [] },
      education: { type: Array, default: () => [] },
      certifications: { type: Array, default: () => [] },
    },
    setup(e) {
      const t = Pe("tech");
      return (s, n) => (
        k(),
        $("section", Nc, [
          n[33] ||
            (n[33] = i(
              "div",
              {
                class:
                  "absolute top-20 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow",
              },
              null,
              -1,
            )),
          n[34] ||
            (n[34] = i(
              "div",
              {
                class:
                  "absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse",
              },
              null,
              -1,
            )),
          i("div", Dc, [
            n[32] ||
              (n[32] = en(
                '<div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12" data-v-bcafb36e><span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-3 border border-brand-200/50 dark:border-brand-800/50" data-v-bcafb36e><span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" data-v-bcafb36e></span> Hành trình &amp; Kinh nghiệm </span><p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" data-v-bcafb36e> Kinh nghiệm làm việc &amp; Học vấn </p><div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-600 to-purple-500 mx-auto mt-3 rounded-full" data-v-bcafb36e></div></div>',
                1,
              )),
            i("div", Fc, [
              i("div", Vc, [
                i(
                  "button",
                  {
                    onClick: n[0] || (n[0] = (r) => (t.value = "tech")),
                    class: Le([
                      "flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer",
                      t.value === "tech"
                        ? "bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-md"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white",
                    ]),
                  },
                  [
                    A(P(rl), { class: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
                    n[3] || (n[3] = i("span", null, "💻 Lập trình & CNTT", -1)),
                  ],
                  2,
                ),
                i(
                  "button",
                  {
                    onClick: n[1] || (n[1] = (r) => (t.value = "business")),
                    class: Le([
                      "flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer",
                      t.value === "business"
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md shadow-orange-500/20"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white",
                    ]),
                  },
                  [
                    A(P(pd), { class: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
                    n[4] ||
                      (n[4] = i("span", null, "🛒 TMĐT & Kinh doanh", -1)),
                  ],
                  2,
                ),
                i(
                  "button",
                  {
                    onClick: n[2] || (n[2] = (r) => (t.value = "education")),
                    class: Le([
                      "flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer",
                      t.value === "education"
                        ? "bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-md"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white",
                    ]),
                  },
                  [
                    A(P(ld), { class: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
                    n[5] ||
                      (n[5] = i("span", null, "🎓 Học vấn & Chứng chỉ", -1)),
                  ],
                  2,
                ),
              ]),
            ]),
            A(
              Zt,
              { name: "tab-fade", mode: "out-in" },
              {
                default: jt(() => [
                  t.value === "tech"
                    ? (k(),
                      $("div", Hc, [
                        n[22] ||
                          (n[22] = i(
                            "div",
                            {
                              class:
                                "mb-8 p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-indigo-50 dark:from-brand-950/40 dark:to-indigo-950/40 border border-brand-200/60 dark:border-brand-800/50 flex items-center gap-3",
                            },
                            [
                              i(
                                "div",
                                {
                                  class:
                                    "w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center text-lg flex-shrink-0",
                                },
                                " 💻 ",
                              ),
                              i("div", null, [
                                i(
                                  "p",
                                  {
                                    class:
                                      "font-bold text-slate-900 dark:text-white text-sm",
                                  },
                                  "Hành trình lập trình (2023 – 2026)",
                                ),
                                i(
                                  "p",
                                  {
                                    class:
                                      "text-xs text-slate-600 dark:text-slate-400",
                                  },
                                  "Từ Java cơ bản đến hệ thống E-Commerce tích hợp AI & Blockchain",
                                ),
                              ]),
                            ],
                            -1,
                          )),
                        i("div", Rc, [
                          i("div", Bc, [
                            n[9] ||
                              (n[9] = i(
                                "div",
                                {
                                  class:
                                    "relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform mt-1",
                                },
                                " 23 ",
                                -1,
                              )),
                            i("div", Kc, [
                              n[6] ||
                                (n[6] = i(
                                  "div",
                                  {
                                    class:
                                      "flex flex-wrap items-center justify-between gap-2 mb-3",
                                  },
                                  [
                                    i(
                                      "span",
                                      {
                                        class:
                                          "px-3 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-[11px] font-bold border border-brand-200/50",
                                      },
                                      "2023",
                                    ),
                                    i(
                                      "span",
                                      { class: "text-xs text-slate-400" },
                                      "Năm 1 đại học",
                                    ),
                                  ],
                                  -1,
                                )),
                              n[7] ||
                                (n[7] = i(
                                  "h3",
                                  {
                                    class:
                                      "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1",
                                  },
                                  "Ứng dụng Bán đồ ăn & Nhắn tin cơ bản",
                                  -1,
                                )),
                              n[8] ||
                                (n[8] = i(
                                  "p",
                                  {
                                    class:
                                      "text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3",
                                  },
                                  "Xây dựng ứng dụng Food Delivery (gọi món, quản lý đơn) và ứng dụng nhắn tin cơ bản bằng Java Core với các nguyên lý OOP.",
                                  -1,
                                )),
                              i("div", Uc, [
                                (k(),
                                $(
                                  z,
                                  null,
                                  ae(
                                    [
                                      "Java Core",
                                      "OOP",
                                      "JavaSwing",
                                      "MySQL",
                                      "Data Structures",
                                    ],
                                    (r) =>
                                      i(
                                        "span",
                                        {
                                          key: r,
                                          class:
                                            "px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium",
                                        },
                                        C(r),
                                        1,
                                      ),
                                  ),
                                  64,
                                )),
                              ]),
                            ]),
                          ]),
                          i("div", qc, [
                            n[13] ||
                              (n[13] = i(
                                "div",
                                {
                                  class:
                                    "relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center text-[9px] sm:text-xs font-extrabold shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform mt-1",
                                },
                                " 🎓 ",
                                -1,
                              )),
                            i("div", Wc, [
                              n[10] ||
                                (n[10] = i(
                                  "div",
                                  {
                                    class:
                                      "flex flex-wrap items-center justify-between gap-2 mb-3",
                                  },
                                  [
                                    i(
                                      "span",
                                      {
                                        class:
                                          "px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200/50",
                                      },
                                      "2023 – 2028",
                                    ),
                                    i(
                                      "span",
                                      {
                                        class:
                                          "px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-[11px] font-bold border border-amber-200/50",
                                      },
                                      "GPA 3.1/4.0",
                                    ),
                                  ],
                                  -1,
                                )),
                              n[11] ||
                                (n[11] = i(
                                  "h3",
                                  {
                                    class:
                                      "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1",
                                  },
                                  "Kỹ sư Công nghệ Thông tin",
                                  -1,
                                )),
                              n[12] ||
                                (n[12] = i(
                                  "p",
                                  {
                                    class:
                                      "text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3",
                                  },
                                  "Chương trình đào tạo chính quy chuyên sâu về Kiến trúc hệ thống, Lập trình mạng, AI và CSDL phân tán.",
                                  -1,
                                )),
                              i("div", zc, [
                                (k(),
                                $(
                                  z,
                                  null,
                                  ae(
                                    [
                                      "Algorithms & DS",
                                      "Network Programming",
                                      "AI Fundamentals",
                                      "Database Systems",
                                      "OOP & Design Patterns",
                                    ],
                                    (r) =>
                                      i(
                                        "span",
                                        {
                                          key: r,
                                          class:
                                            "px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium",
                                        },
                                        C(r),
                                        1,
                                      ),
                                  ),
                                  64,
                                )),
                              ]),
                            ]),
                          ]),
                          i("div", Jc, [
                            n[17] ||
                              (n[17] = i(
                                "div",
                                {
                                  class:
                                    "relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-violet-600 to-purple-500 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform mt-1",
                                },
                                " 25 ",
                                -1,
                              )),
                            i("div", Gc, [
                              n[14] ||
                                (n[14] = i(
                                  "div",
                                  {
                                    class:
                                      "flex flex-wrap items-center justify-between gap-2 mb-3",
                                  },
                                  [
                                    i(
                                      "span",
                                      {
                                        class:
                                          "px-3 py-0.5 rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 text-[11px] font-bold border border-violet-200/50",
                                      },
                                      "2025",
                                    ),
                                    i(
                                      "span",
                                      {
                                        class:
                                          "px-2.5 py-0.5 rounded-lg bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 text-[11px] font-bold border border-orange-200/50",
                                      },
                                      "FPT Software Pass ✓",
                                    ),
                                  ],
                                  -1,
                                )),
                              n[15] ||
                                (n[15] = i(
                                  "h3",
                                  {
                                    class:
                                      "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1",
                                  },
                                  "Ứng dụng Nhắn tin & Gọi điện Nâng cao (Realtime)",
                                  -1,
                                )),
                              n[16] ||
                                (n[16] = i(
                                  "p",
                                  {
                                    class:
                                      "text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3",
                                  },
                                  "Hệ thống nhắn tin nâng cao với TCP/UDP socket đa luồng, gọi thoại/video realtime, đồng bộ dữ liệu đa người dùng. Tham gia và pass cuộc thi Java Web của FPT Software.",
                                  -1,
                                )),
                              i("div", Xc, [
                                (k(),
                                $(
                                  z,
                                  null,
                                  ae(
                                    [
                                      "Java Advanced",
                                      "TCP/UDP Sockets",
                                      "Multi-threading",
                                      "Network Audio/Video",
                                      "MySQL",
                                      "Spring Framework",
                                    ],
                                    (r) =>
                                      i(
                                        "span",
                                        {
                                          key: r,
                                          class:
                                            "px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium",
                                        },
                                        C(r),
                                        1,
                                      ),
                                  ),
                                  64,
                                )),
                              ]),
                            ]),
                          ]),
                          i("div", Qc, [
                            n[21] ||
                              (n[21] = i(
                                "div",
                                {
                                  class:
                                    "relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-rose-500 via-orange-500 to-amber-500 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform mt-1",
                                },
                                " 26 ",
                                -1,
                              )),
                            i("div", Zc, [
                              n[18] ||
                                (n[18] = i(
                                  "div",
                                  {
                                    class:
                                      "flex flex-wrap items-center justify-between gap-2 mb-3",
                                  },
                                  [
                                    i(
                                      "span",
                                      {
                                        class:
                                          "px-3 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-[11px] font-bold border border-rose-200/50",
                                      },
                                      "2026",
                                    ),
                                    i(
                                      "span",
                                      {
                                        class:
                                          "px-2.5 py-0.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-[11px] font-bold border border-brand-200/50",
                                      },
                                      "🔥 Dự án nổi bật",
                                    ),
                                  ],
                                  -1,
                                )),
                              n[19] ||
                                (n[19] = i(
                                  "h3",
                                  {
                                    class:
                                      "text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1",
                                  },
                                  "Hệ sinh thái E-Commerce tích hợp AI & Blockchain",
                                  -1,
                                )),
                              n[20] ||
                                (n[20] = i(
                                  "p",
                                  {
                                    class:
                                      "text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3",
                                  },
                                  "Nền tảng TMĐT hiện đại nhất: AI nhận diện khuôn mặt đăng nhập (Python/OpenCV), thanh toán Blockchain hợp đồng thông minh, tích hợp ZaloPay Sandbox ảo.",
                                  -1,
                                )),
                              i("div", Yc, [
                                (k(),
                                $(
                                  z,
                                  null,
                                  ae(
                                    [
                                      "Spring Boot",
                                      "Python AI/OpenCV",
                                      "Blockchain/Web3",
                                      "ZaloPay Sandbox",
                                      "PostgreSQL",
                                      "Vue.js",
                                      "Docker",
                                    ],
                                    (r) =>
                                      i(
                                        "span",
                                        {
                                          key: r,
                                          class:
                                            "px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium",
                                        },
                                        C(r),
                                        1,
                                      ),
                                  ),
                                  64,
                                )),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]))
                    : pe("", !0),
                ]),
                _: 1,
              },
            ),
            A(
              Zt,
              { name: "tab-fade", mode: "out-in" },
              {
                default: jt(() => [
                  t.value === "business"
                    ? (k(),
                      $("div", e0, [
                        n[29] ||
                          (n[29] = i(
                            "div",
                            {
                              class:
                                "mb-8 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/30 dark:to-pink-950/30 border border-orange-200/60 dark:border-orange-800/50 flex items-center gap-3",
                            },
                            [
                              i(
                                "div",
                                {
                                  class:
                                    "w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-pink-500 text-white flex items-center justify-center text-lg flex-shrink-0",
                                },
                                " 🛒 ",
                              ),
                              i("div", null, [
                                i(
                                  "p",
                                  {
                                    class:
                                      "font-bold text-slate-900 dark:text-white text-sm",
                                  },
                                  "Kinh doanh Online & Sáng tạo Nội dung",
                                ),
                                i(
                                  "p",
                                  {
                                    class:
                                      "text-xs text-slate-600 dark:text-slate-400",
                                  },
                                  "Affiliate ~2.5 tỷ · TikTok Shop ⭐ Star Shop · Video Creator",
                                ),
                              ]),
                            ],
                            -1,
                          )),
                        i("div", t0, [
                          i("div", s0, [
                            n[23] ||
                              (n[23] = i(
                                "div",
                                {
                                  class:
                                    "flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4",
                                },
                                [
                                  i(
                                    "div",
                                    { class: "flex items-center gap-3" },
                                    [
                                      i(
                                        "div",
                                        {
                                          class:
                                            "w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center text-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform",
                                        },
                                        " 📣 ",
                                      ),
                                      i("div", null, [
                                        i(
                                          "h3",
                                          {
                                            class:
                                              "text-base sm:text-xl font-bold text-slate-900 dark:text-white",
                                          },
                                          "Affiliate Marketer",
                                        ),
                                        i(
                                          "p",
                                          {
                                            class:
                                              "text-xs text-slate-500 dark:text-slate-400 font-semibold",
                                          },
                                          "Đa kênh & Đa nền tảng",
                                        ),
                                      ]),
                                    ],
                                  ),
                                  i(
                                    "span",
                                    {
                                      class:
                                        "self-start px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 text-xs font-bold border border-orange-200/50 whitespace-nowrap",
                                    },
                                    " 10/2024 – 09/2026 ",
                                  ),
                                ],
                                -1,
                              )),
                            n[24] ||
                              (n[24] = i(
                                "div",
                                {
                                  class:
                                    "mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-200/50 dark:border-amber-800/50 flex items-center gap-3",
                                },
                                [
                                  i(
                                    "span",
                                    {
                                      class:
                                        "text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600",
                                    },
                                    "~2.5 tỷ",
                                  ),
                                  i("div", null, [
                                    i(
                                      "p",
                                      {
                                        class:
                                          "text-xs font-bold text-amber-700 dark:text-amber-400",
                                      },
                                      "Doanh thu ước tính (VNĐ)",
                                    ),
                                    i(
                                      "p",
                                      {
                                        class:
                                          "text-[10px] text-slate-500 dark:text-slate-400",
                                      },
                                      "Trong 2 năm hoạt động (2024–2026)",
                                    ),
                                  ]),
                                ],
                                -1,
                              )),
                            i("ul", n0, [
                              (k(),
                              $(
                                z,
                                null,
                                ae(
                                  [
                                    "Xây dựng hệ thống content funnel tối ưu tỷ lệ chuyển đổi đa kênh.",
                                    "Kết hợp video marketing và SEO để tăng traffic tự nhiên bền vững.",
                                    "Vận hành quảng cáo TikTok Ads & Facebook Ads tối ưu chi phí CPM.",
                                  ],
                                  (r) =>
                                    i(
                                      "li",
                                      {
                                        key: r,
                                        class:
                                          "flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300",
                                      },
                                      [
                                        A(P(bn), {
                                          class:
                                            "w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5",
                                        }),
                                        i("span", null, C(r), 1),
                                      ],
                                    ),
                                ),
                                64,
                              )),
                            ]),
                            i("div", r0, [
                              (k(),
                              $(
                                z,
                                null,
                                ae(
                                  [
                                    "Affiliate Networks",
                                    "TikTok Ads",
                                    "Facebook Ads",
                                    "Content Marketing",
                                    "SEO/SEM",
                                  ],
                                  (r) =>
                                    i(
                                      "span",
                                      {
                                        key: r,
                                        class:
                                          "px-2.5 py-0.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 text-[10px] sm:text-xs font-medium border border-orange-100 dark:border-orange-900",
                                      },
                                      C(r),
                                      1,
                                    ),
                                ),
                                64,
                              )),
                            ]),
                          ]),
                          i("div", o0, [
                            n[25] ||
                              (n[25] = i(
                                "div",
                                {
                                  class:
                                    "flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4",
                                },
                                [
                                  i(
                                    "div",
                                    { class: "flex items-center gap-3" },
                                    [
                                      i(
                                        "div",
                                        {
                                          class:
                                            "w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center text-xl shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform",
                                        },
                                        " 🛍️ ",
                                      ),
                                      i("div", null, [
                                        i(
                                          "h3",
                                          {
                                            class:
                                              "text-base sm:text-xl font-bold text-slate-900 dark:text-white",
                                          },
                                          "TikTok Shop Seller",
                                        ),
                                        i(
                                          "p",
                                          {
                                            class:
                                              "text-xs text-slate-500 dark:text-slate-400 font-semibold",
                                          },
                                          "TikTok Shop Vietnam",
                                        ),
                                      ]),
                                    ],
                                  ),
                                  i(
                                    "span",
                                    {
                                      class:
                                        "self-start px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 text-xs font-bold border border-pink-200/50 whitespace-nowrap",
                                    },
                                    " 05/2025 – 09/2026 ",
                                  ),
                                ],
                                -1,
                              )),
                            n[26] ||
                              (n[26] = i(
                                "div",
                                {
                                  class: "grid grid-cols-3 gap-2 sm:gap-4 mb-4",
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      class:
                                        "p-2.5 sm:p-4 rounded-2xl bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900 text-center group-hover:border-pink-400/60 transition-colors",
                                    },
                                    [
                                      i(
                                        "p",
                                        {
                                          class:
                                            "text-lg sm:text-2xl font-extrabold text-pink-600 dark:text-pink-400",
                                        },
                                        "500+",
                                      ),
                                      i(
                                        "p",
                                        {
                                          class:
                                            "text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5",
                                        },
                                        "Đơn hàng",
                                      ),
                                    ],
                                  ),
                                  i(
                                    "div",
                                    {
                                      class:
                                        "p-2.5 sm:p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900 text-center group-hover:border-rose-400/60 transition-colors",
                                    },
                                    [
                                      i(
                                        "p",
                                        {
                                          class:
                                            "text-lg sm:text-2xl font-extrabold text-rose-600 dark:text-rose-400",
                                        },
                                        "~35tr",
                                      ),
                                      i(
                                        "p",
                                        {
                                          class:
                                            "text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5",
                                        },
                                        "Doanh thu (đ)",
                                      ),
                                    ],
                                  ),
                                  i(
                                    "div",
                                    {
                                      class:
                                        "p-2.5 sm:p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900 text-center group-hover:border-amber-400/60 transition-colors",
                                    },
                                    [
                                      i(
                                        "p",
                                        {
                                          class:
                                            "text-lg sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400",
                                        },
                                        "4.8⭐",
                                      ),
                                      i(
                                        "p",
                                        {
                                          class:
                                            "text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5",
                                        },
                                        "Đánh giá",
                                      ),
                                    ],
                                  ),
                                ],
                                -1,
                              )),
                            n[27] ||
                              (n[27] = i(
                                "div",
                                {
                                  class:
                                    "mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow-md shadow-orange-500/25",
                                },
                                " ⭐ Đạt Huy hiệu Star Shop TikTok ",
                                -1,
                              )),
                            i("ul", l0, [
                              (k(),
                              $(
                                z,
                                null,
                                ae(
                                  [
                                    "Tỷ lệ phản hồi khách hàng đạt 95%+, tỷ lệ hoàn hàng duy trì mức thấp.",
                                    "Tự quay, dựng và đăng video quảng bá sản phẩm đẩy doanh số.",
                                  ],
                                  (r) =>
                                    i(
                                      "li",
                                      {
                                        key: r,
                                        class:
                                          "flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300",
                                      },
                                      [
                                        A(P(bn), {
                                          class:
                                            "w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5",
                                        }),
                                        i("span", null, C(r), 1),
                                      ],
                                    ),
                                ),
                                64,
                              )),
                            ]),
                            i("div", i0, [
                              (k(),
                              $(
                                z,
                                null,
                                ae(
                                  [
                                    "TikTok Shop",
                                    "Livestream Bán hàng",
                                    "Order Management",
                                    "Customer Care",
                                    "Video Marketing",
                                  ],
                                  (r) =>
                                    i(
                                      "span",
                                      {
                                        key: r,
                                        class:
                                          "px-2.5 py-0.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 text-[10px] sm:text-xs font-medium border border-pink-100 dark:border-pink-900",
                                      },
                                      C(r),
                                      1,
                                    ),
                                ),
                                64,
                              )),
                            ]),
                          ]),
                          i("div", a0, [
                            n[28] ||
                              (n[28] = i(
                                "div",
                                {
                                  class:
                                    "flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4",
                                },
                                [
                                  i(
                                    "div",
                                    { class: "flex items-center gap-3" },
                                    [
                                      i(
                                        "div",
                                        {
                                          class:
                                            "w-11 h-11 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-500 text-white flex items-center justify-center text-xl shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform",
                                        },
                                        " 🎬 ",
                                      ),
                                      i("div", null, [
                                        i(
                                          "h3",
                                          {
                                            class:
                                              "text-base sm:text-xl font-bold text-slate-900 dark:text-white",
                                          },
                                          "Video Editor & Content Creator",
                                        ),
                                        i(
                                          "p",
                                          {
                                            class:
                                              "text-xs text-slate-500 dark:text-slate-400 font-semibold",
                                          },
                                          "Kênh Affiliate & TikTok Shop",
                                        ),
                                      ]),
                                    ],
                                  ),
                                  i(
                                    "span",
                                    {
                                      class:
                                        "self-start px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 text-xs font-bold border border-violet-200/50 whitespace-nowrap",
                                    },
                                    " 10/2024 – 09/2026 ",
                                  ),
                                ],
                                -1,
                              )),
                            i("ul", d0, [
                              (k(),
                              $(
                                z,
                                null,
                                ae(
                                  [
                                    "Quay dựng hàng chục video quảng bá sản phẩm đạt hàng nghìn lượt xem tự nhiên.",
                                    "Thành thạo workflow dựng video thương mại: CapCut.",
                                    "Xây dựng phong cách nội dung nhất quán, tăng nhận diện thương hiệu cá nhân.",
                                    "Sáng tạo kịch bản, quay hình, edit và tối ưu video cho giải thuật TikTok.",
                                  ],
                                  (r) =>
                                    i(
                                      "li",
                                      {
                                        key: r,
                                        class:
                                          "flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300",
                                      },
                                      [
                                        A(P(bn), {
                                          class:
                                            "w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5",
                                        }),
                                        i("span", null, C(r), 1),
                                      ],
                                    ),
                                ),
                                64,
                              )),
                            ]),
                            i("div", c0, [
                              (k(),
                              $(
                                z,
                                null,
                                ae(
                                  [
                                    "CapCut",
                                    "TikTok Creator Tools",
                                    "Canva",
                                    "Content Strategy",
                                  ],
                                  (r) =>
                                    i(
                                      "span",
                                      {
                                        key: r,
                                        class:
                                          "px-2.5 py-0.5 rounded-lg bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 text-[10px] sm:text-xs font-medium border border-violet-100 dark:border-violet-900",
                                      },
                                      C(r),
                                      1,
                                    ),
                                ),
                                64,
                              )),
                            ]),
                          ]),
                        ]),
                      ]))
                    : pe("", !0),
                ]),
                _: 1,
              },
            ),
            A(
              Zt,
              { name: "tab-fade", mode: "out-in" },
              {
                default: jt(() => [
                  t.value === "education"
                    ? (k(),
                      $("div", u0, [
                        i("div", f0, [
                          n[30] ||
                            (n[30] = i(
                              "h3",
                              {
                                class:
                                  "text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5",
                              },
                              [
                                i(
                                  "span",
                                  {
                                    class:
                                      "w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center",
                                  },
                                  "🎓",
                                ),
                                rt(" Trình độ Học vấn "),
                              ],
                              -1,
                            )),
                          (k(!0),
                          $(
                            z,
                            null,
                            ae(
                              e.education,
                              (r, o) => (
                                k(),
                                $(
                                  "div",
                                  {
                                    key: o,
                                    class:
                                      "card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300",
                                  },
                                  [
                                    i("div", h0, [
                                      i("span", p0, C(r.period), 1),
                                      r.grade
                                        ? (k(), $("span", g0, C(r.grade), 1))
                                        : pe("", !0),
                                    ]),
                                    i("h4", x0, C(r.degree), 1),
                                    i("p", m0, C(r.school), 1),
                                    i("p", b0, C(r.description), 1),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        i("div", v0, [
                          n[31] ||
                            (n[31] = i(
                              "h3",
                              {
                                class:
                                  "text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5",
                              },
                              [
                                i(
                                  "span",
                                  {
                                    class:
                                      "w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center",
                                  },
                                  "🏆",
                                ),
                                rt(" Chứng chỉ & Thành tích "),
                              ],
                              -1,
                            )),
                          i("div", y0, [
                            (k(!0),
                            $(
                              z,
                              null,
                              ae(
                                e.certifications,
                                (r, o) => (
                                  k(),
                                  $(
                                    "div",
                                    {
                                      key: o,
                                      class:
                                        "card-shimmer p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group",
                                    },
                                    [
                                      i("span", k0, C(r.year), 1),
                                      i("h5", w0, C(r.name), 1),
                                      i("p", _0, C(r.issuer), 1),
                                    ],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                      ]))
                    : pe("", !0),
                ]),
                _: 1,
              },
            ),
          ]),
        ])
      );
    },
  },
  S0 = Lc(C0, [["__scopeId", "data-v-bcafb36e"]]),
  T0 = {
    id: "skills",
    class:
      "py-14 sm:py-20 bg-slate-100/50 dark:bg-slate-900/40 relative overflow-hidden",
  },
  $0 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" },
  A0 = { class: "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8" },
  M0 = {
    class:
      "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4",
  },
  P0 = {
    class:
      "text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5",
  },
  E0 = {
    class:
      "text-xs font-bold px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200/50",
  },
  I0 = { class: "space-y-4" },
  j0 = { class: "flex justify-between text-xs sm:text-sm" },
  O0 = {
    class:
      "font-semibold text-slate-700 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors",
  },
  L0 = { class: "font-mono font-bold text-brand-600 dark:text-brand-400" },
  N0 = {
    class:
      "w-full h-2 sm:h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",
  },
  D0 = {
    __name: "SkillsSection",
    props: { categories: { type: Array, default: () => [] } },
    setup(e) {
      return (t, s) => (
        k(),
        $("section", T0, [
          s[3] ||
            (s[3] = i(
              "div",
              {
                class:
                  "absolute -top-20 -right-20 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow",
              },
              null,
              -1,
            )),
          s[4] ||
            (s[4] = i(
              "div",
              {
                class:
                  "absolute bottom-0 -left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow",
              },
              null,
              -1,
            )),
          i("div", $0, [
            s[2] ||
              (s[2] = en(
                '<div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16"><span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-3 border border-brand-200/50 dark:border-brand-800/50"><span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> Kỹ năng &amp; Chuyên môn </span><p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"> Công nghệ &amp; Năng lực kỹ thuật </p><div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-600 to-purple-500 mx-auto mt-3 rounded-full"></div></div>',
                1,
              )),
            i("div", A0, [
              (k(!0),
              $(
                z,
                null,
                ae(
                  e.categories,
                  (n, r) => (
                    k(),
                    $(
                      "div",
                      {
                        key: r,
                        class:
                          "card-shimmer p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/40 hover:-translate-y-0.5 transition-all duration-300 space-y-5",
                      },
                      [
                        i("div", M0, [
                          i("h3", P0, [
                            s[0] ||
                              (s[0] = i(
                                "span",
                                {
                                  class:
                                    "w-2.5 h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-indigo-500",
                                },
                                null,
                                -1,
                              )),
                            rt(" " + C(n.name), 1),
                          ]),
                          i("span", E0, C(n.skills.length) + " kỹ năng ", 1),
                        ]),
                        i("div", I0, [
                          (k(!0),
                          $(
                            z,
                            null,
                            ae(
                              n.skills,
                              (o, l) => (
                                k(),
                                $(
                                  "div",
                                  { key: l, class: "space-y-1.5 group" },
                                  [
                                    i("div", j0, [
                                      i("span", O0, C(o.name), 1),
                                      i("span", L0, C(o.level) + "% ", 1),
                                    ]),
                                    i("div", N0, [
                                      i(
                                        "div",
                                        {
                                          class:
                                            "h-full rounded-full bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-500 transition-all duration-1000 ease-out relative overflow-hidden",
                                          style: qs({ width: `${o.level}%` }),
                                        },
                                        [
                                          ...(s[1] ||
                                            (s[1] = [
                                              i(
                                                "div",
                                                {
                                                  class:
                                                    "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer",
                                                },
                                                null,
                                                -1,
                                              ),
                                            ])),
                                        ],
                                        4,
                                      ),
                                    ]),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                      ],
                    )
                  ),
                ),
                128,
              )),
            ]),
          ]),
        ])
      );
    },
  },
  F0 = { id: "projects", class: "py-14 sm:py-20 relative" },
  V0 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
  H0 = {
    class:
      "flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-0 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0",
  },
  R0 = ["onClick"],
  B0 = {
    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
  },
  K0 = { class: "relative h-48 sm:h-56 overflow-hidden bg-slate-950" },
  U0 = ["src", "alt"],
  q0 = {
    class:
      "absolute top-3 left-3 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-brand-600 dark:text-brand-400 backdrop-blur-md shadow-lg border border-white/20",
  },
  W0 = { class: "p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4" },
  z0 = {
    class:
      "text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors",
  },
  J0 = {
    class: "text-xs font-semibold text-brand-600 dark:text-brand-400 mt-0.5",
  },
  G0 = {
    class:
      "text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed",
  },
  X0 = { class: "pt-1" },
  Q0 = { class: "flex flex-wrap gap-1.5 mb-4" },
  Z0 = {
    class:
      "flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800",
  },
  Y0 = ["href"],
  eu = ["href"],
  tu = {
    __name: "ProjectsSection",
    props: { projects: { type: Array, default: () => [] } },
    setup(e) {
      const t = e,
        s = Pe("all"),
        n = [
          { label: "Tất cả dự án", value: "all" },
          { label: "Web Application", value: "web" },
          { label: "Desktop & Network", value: "web" },
          { label: "UI/UX & Khác", value: "design" },
        ],
        r = sn(() =>
          s.value === "all"
            ? t.projects
            : t.projects.filter((o) => o.category === s.value),
        );
      return (o, l) => (
        k(),
        $("section", F0, [
          i("div", V0, [
            l[2] ||
              (l[2] = i(
                "div",
                { class: "text-center max-w-3xl mx-auto mb-8 sm:mb-12" },
                [
                  i(
                    "h2",
                    {
                      class:
                        "text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-1.5 sm:mb-2",
                    },
                    " Dự án tiêu biểu ",
                  ),
                  i(
                    "p",
                    {
                      class:
                        "text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight",
                    },
                    " Sản phẩm thực tế & Cá nhân ",
                  ),
                  i("div", {
                    class:
                      "w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-3 rounded-full",
                  }),
                ],
                -1,
              )),
            i("div", H0, [
              (k(),
              $(
                z,
                null,
                ae(n, (a) =>
                  i(
                    "button",
                    {
                      key: a.value,
                      onClick: (d) => (s.value = a.value),
                      class: Le([
                        "flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-sm hover:scale-105",
                        [
                          s.value === a.value
                            ? "bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/30"
                            : "bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700",
                        ],
                      ]),
                    },
                    C(a.label),
                    11,
                    R0,
                  ),
                ),
                64,
              )),
            ]),
            i("div", B0, [
              (k(!0),
              $(
                z,
                null,
                ae(
                  r.value,
                  (a) => (
                    k(),
                    $(
                      "div",
                      {
                        key: a.id,
                        class:
                          "card-shimmer rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-2xl hover:border-brand-500/60 hover:-translate-y-2 transition-all duration-500 flex flex-col group",
                      },
                      [
                        i("div", K0, [
                          i(
                            "img",
                            {
                              src: a.image,
                              alt: a.title,
                              class:
                                "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100",
                              loading: "lazy",
                            },
                            null,
                            8,
                            U0,
                          ),
                          l[0] ||
                            (l[0] = i(
                              "div",
                              {
                                class:
                                  "absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent",
                              },
                              null,
                              -1,
                            )),
                          i("span", q0, C(a.categoryLabel || a.category), 1),
                        ]),
                        i("div", W0, [
                          i("div", null, [
                            i("h3", z0, C(a.title), 1),
                            i("p", J0, C(a.tagline), 1),
                            i("p", G0, C(a.description), 1),
                          ]),
                          i("div", X0, [
                            i("div", Q0, [
                              (k(!0),
                              $(
                                z,
                                null,
                                ae(
                                  a.tags,
                                  (d, f) => (
                                    k(),
                                    $(
                                      "span",
                                      {
                                        key: f,
                                        class:
                                          "px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs font-medium border border-slate-200/50 dark:border-slate-700/50 group-hover:border-brand-500/30 transition-colors",
                                      },
                                      C(d),
                                      1,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                            i("div", Z0, [
                              a.liveUrl
                                ? (k(),
                                  $(
                                    "a",
                                    {
                                      key: 0,
                                      href: a.liveUrl,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class:
                                        "flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-600 hover:text-white text-brand-600 dark:text-brand-400 text-xs font-bold active:scale-95 transition-all shadow-sm group-hover:shadow-brand-500/20",
                                    },
                                    [
                                      A(P(ol), { class: "w-3.5 h-3.5" }),
                                      l[1] ||
                                        (l[1] = i(
                                          "span",
                                          null,
                                          "Trải nghiệm Demo",
                                          -1,
                                        )),
                                    ],
                                    8,
                                    Y0,
                                  ))
                                : pe("", !0),
                              a.githubUrl
                                ? (k(),
                                  $(
                                    "a",
                                    {
                                      key: 1,
                                      href: a.githubUrl,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class:
                                        "inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:scale-110 active:scale-90 transition-all shadow-sm",
                                      title: "Source Code GitHub",
                                    },
                                    [A(P(Jn), { class: "w-4 h-4" })],
                                    8,
                                    eu,
                                  ))
                                : pe("", !0),
                            ]),
                          ]),
                        ]),
                      ],
                    )
                  ),
                ),
                128,
              )),
            ]),
          ]),
        ])
      );
    },
  },
  su = {
    id: "contact",
    class: "py-20 bg-slate-100/50 dark:bg-slate-900/40 relative",
  },
  nu = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
  ru = { class: "grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto" },
  ou = { class: "lg:col-span-5 space-y-6" },
  lu = {
    class:
      "p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4",
  },
  iu = {
    class:
      "w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0",
  },
  au = { class: "flex-1" },
  du = ["href"],
  cu = {
    class:
      "p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4",
  },
  uu = {
    class:
      "w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0",
  },
  fu = { class: "flex-1" },
  hu = ["href"],
  pu = {
    class:
      "p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4",
  },
  gu = {
    class:
      "w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0",
  },
  xu = { class: "font-semibold text-slate-900 dark:text-white mt-0.5" },
  mu = { class: "lg:col-span-7" },
  bu = {
    class:
      "p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm",
  },
  vu = { key: 0, class: "py-12 text-center space-y-4" },
  yu = {
    class:
      "w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 mx-auto flex items-center justify-center",
  },
  ku = { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" },
  wu = ["disabled"],
  _u = { key: 1 },
  Cu = { key: 2 },
  Su = {
    __name: "ContactSection",
    props: { personal: { type: Object, required: !0 } },
    setup(e) {
      const t = Pe(null),
        s = Pe(!1),
        n = Pe(!1),
        r = Pe({ name: "", email: "", subject: "", message: "" }),
        o = (a, d) => {
          (navigator.clipboard.writeText(a),
            (t.value = d),
            setTimeout(() => {
              t.value = null;
            }, 2e3));
        },
        l = () => {
          ((s.value = !0),
            setTimeout(() => {
              ((s.value = !1),
                (n.value = !0),
                (r.value = { name: "", email: "", subject: "", message: "" }));
            }, 800));
        };
      return (a, d) => (
        k(),
        $("section", su, [
          i("div", nu, [
            d[17] ||
              (d[17] = en(
                '<div class="text-center max-w-3xl mx-auto mb-16"><h2 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2"> Kết nối </h2><p class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"> Hãy cùng tạo ra điều tuyệt vời </p><p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2"> Bạn có dự án mới, ý tưởng cần thảo luận hoặc cơ hội nghề nghiệp thú vị? Hãy gửi tin nhắn cho tôi! </p><div class="w-16 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div></div>',
                1,
              )),
            i("div", ru, [
              i("div", ou, [
                i("div", lu, [
                  i("div", iu, [A(P(dl), { class: "w-6 h-6" })]),
                  i("div", au, [
                    d[7] ||
                      (d[7] = i(
                        "span",
                        { class: "text-xs font-bold uppercase text-slate-400" },
                        "Email Trực tiếp",
                        -1,
                      )),
                    i(
                      "a",
                      {
                        href: `mailto:${e.personal.email}`,
                        class:
                          "block font-semibold text-slate-900 dark:text-white hover:text-brand-600 transition-colors mt-0.5 break-all",
                      },
                      C(e.personal.email),
                      9,
                      du,
                    ),
                    i(
                      "button",
                      {
                        onClick:
                          d[0] || (d[0] = (f) => o(e.personal.email, "email")),
                        class:
                          "text-xs text-brand-600 dark:text-brand-400 font-medium mt-1 hover:underline inline-flex items-center gap-1",
                      },
                      [
                        t.value === "email"
                          ? (k(),
                            Ae(P(Rr), {
                              key: 0,
                              class: "w-3.5 h-3.5 text-emerald-500",
                            }))
                          : (k(), Ae(P(Br), { key: 1, class: "w-3.5 h-3.5" })),
                        i(
                          "span",
                          null,
                          C(
                            t.value === "email"
                              ? "Đã sao chép!"
                              : "Sao chép Email",
                          ),
                          1,
                        ),
                      ],
                    ),
                  ]),
                ]),
                i("div", cu, [
                  i("div", uu, [A(P(ul), { class: "w-6 h-6" })]),
                  i("div", fu, [
                    d[8] ||
                      (d[8] = i(
                        "span",
                        { class: "text-xs font-bold uppercase text-slate-400" },
                        "Điện thoại / Zalo",
                        -1,
                      )),
                    i(
                      "a",
                      {
                        href: `tel:${e.personal.phone}`,
                        class:
                          "block font-semibold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors mt-0.5",
                      },
                      C(e.personal.phone),
                      9,
                      hu,
                    ),
                    i(
                      "button",
                      {
                        onClick:
                          d[1] || (d[1] = (f) => o(e.personal.phone, "phone")),
                        class:
                          "text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1 hover:underline inline-flex items-center gap-1",
                      },
                      [
                        t.value === "phone"
                          ? (k(),
                            Ae(P(Rr), {
                              key: 0,
                              class: "w-3.5 h-3.5 text-emerald-500",
                            }))
                          : (k(), Ae(P(Br), { key: 1, class: "w-3.5 h-3.5" })),
                        i(
                          "span",
                          null,
                          C(
                            t.value === "phone"
                              ? "Đã sao chép!"
                              : "Sao chép Số điện thoại",
                          ),
                          1,
                        ),
                      ],
                    ),
                  ]),
                ]),
                i("div", pu, [
                  i("div", gu, [A(P(cl), { class: "w-6 h-6" })]),
                  i("div", null, [
                    d[9] ||
                      (d[9] = i(
                        "span",
                        { class: "text-xs font-bold uppercase text-slate-400" },
                        "Địa điểm làm việc",
                        -1,
                      )),
                    i("p", xu, C(e.personal.location), 1),
                    d[10] ||
                      (d[10] = i(
                        "p",
                        { class: "text-xs text-slate-500 mt-1" },
                        "Linh hoạt: Remote / Hybrid / On-site",
                        -1,
                      )),
                  ]),
                ]),
              ]),
              i("div", mu, [
                i("div", bu, [
                  n.value
                    ? (k(),
                      $("div", vu, [
                        i("div", yu, [A(P(nl), { class: "w-8 h-8" })]),
                        d[11] ||
                          (d[11] = i(
                            "h3",
                            {
                              class:
                                "text-2xl font-bold text-slate-900 dark:text-white",
                            },
                            "Gửi tin nhắn thành công!",
                            -1,
                          )),
                        d[12] ||
                          (d[12] = i(
                            "p",
                            {
                              class:
                                "text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto",
                            },
                            " Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại cho bạn trong thời gian sớm nhất. ",
                            -1,
                          )),
                        i(
                          "button",
                          {
                            onClick: d[2] || (d[2] = (f) => (n.value = !1)),
                            class:
                              "px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors",
                          },
                          " Gửi tin nhắn khác ",
                        ),
                      ]))
                    : (k(),
                      $(
                        "form",
                        {
                          key: 1,
                          onSubmit: Fs(l, ["prevent"]),
                          class: "space-y-5",
                        },
                        [
                          i("div", ku, [
                            i("div", null, [
                              d[13] ||
                                (d[13] = i(
                                  "label",
                                  {
                                    class:
                                      "block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2",
                                  },
                                  " Tên của bạn * ",
                                  -1,
                                )),
                              gs(
                                i(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      d[3] ||
                                      (d[3] = (f) => (r.value.name = f)),
                                    required: "",
                                    type: "text",
                                    placeholder: "VD: Nguyễn Văn B",
                                    class:
                                      "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all",
                                  },
                                  null,
                                  512,
                                ),
                                [[ys, r.value.name]],
                              ),
                            ]),
                            i("div", null, [
                              d[14] ||
                                (d[14] = i(
                                  "label",
                                  {
                                    class:
                                      "block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2",
                                  },
                                  " Email liên hệ * ",
                                  -1,
                                )),
                              gs(
                                i(
                                  "input",
                                  {
                                    "onUpdate:modelValue":
                                      d[4] ||
                                      (d[4] = (f) => (r.value.email = f)),
                                    required: "",
                                    type: "email",
                                    placeholder: "VD: contact@example.com",
                                    class:
                                      "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all",
                                  },
                                  null,
                                  512,
                                ),
                                [[ys, r.value.email]],
                              ),
                            ]),
                          ]),
                          i("div", null, [
                            d[15] ||
                              (d[15] = i(
                                "label",
                                {
                                  class:
                                    "block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2",
                                },
                                " Chủ đề trao đổi ",
                                -1,
                              )),
                            gs(
                              i(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    d[5] ||
                                    (d[5] = (f) => (r.value.subject = f)),
                                  type: "text",
                                  placeholder:
                                    "VD: Hợp tác phát triển ứng dụng Web...",
                                  class:
                                    "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all",
                                },
                                null,
                                512,
                              ),
                              [[ys, r.value.subject]],
                            ),
                          ]),
                          i("div", null, [
                            d[16] ||
                              (d[16] = i(
                                "label",
                                {
                                  class:
                                    "block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2",
                                },
                                " Nội dung tin nhắn * ",
                                -1,
                              )),
                            gs(
                              i(
                                "textarea",
                                {
                                  "onUpdate:modelValue":
                                    d[6] ||
                                    (d[6] = (f) => (r.value.message = f)),
                                  required: "",
                                  rows: "4",
                                  placeholder:
                                    "Hãy chia sẻ chi tiết về nhu cầu hoặc câu hỏi của bạn...",
                                  class:
                                    "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none",
                                },
                                null,
                                512,
                              ),
                              [[ys, r.value.message]],
                            ),
                          ]),
                          i(
                            "button",
                            {
                              type: "submit",
                              disabled: s.value,
                              class:
                                "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 active:scale-98 transition-all disabled:opacity-50",
                            },
                            [
                              s.value
                                ? pe("", !0)
                                : (k(),
                                  Ae(P(Gn), { key: 0, class: "w-4 h-4" })),
                              s.value
                                ? (k(), $("span", _u, "Đang gửi tin nhắn..."))
                                : (k(), $("span", Cu, "Gửi tin nhắn ngay")),
                            ],
                            8,
                            wu,
                          ),
                        ],
                        32,
                      )),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  Tu = {
    class:
      "py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 no-print transition-colors",
  },
  $u = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
  Au = {
    class: "flex flex-col sm:flex-row items-center justify-between gap-6",
  },
  Mu = { class: "text-center sm:text-left space-y-1" },
  Pu = { class: "font-bold text-slate-800 dark:text-white" },
  Eu = { class: "text-xs text-slate-500 dark:text-slate-400" },
  Iu = { class: "flex items-center gap-3" },
  ju = ["href"],
  Ou = ["href"],
  Lu = ["href"],
  Nu = {
    __name: "Footer",
    props: { personal: { type: Object, required: !0 } },
    setup(e) {
      const t = sn(() => new Date().getFullYear()),
        s = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
      return (n, r) => (
        k(),
        $("footer", Tu, [
          i("div", $u, [
            i("div", Au, [
              i("div", Mu, [
                i("p", Pu, C(e.personal.fullName), 1),
                i(
                  "p",
                  Eu,
                  " © " +
                    C(t.value) +
                    " Bản quyền thuộc về tác giả. Thiết kế với Vue 3 + Tailwind CSS. ",
                  1,
                ),
              ]),
              i("div", Iu, [
                e.personal.github
                  ? (k(),
                    $(
                      "a",
                      {
                        key: 0,
                        href: e.personal.github,
                        target: "_blank",
                        class:
                          "p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                      },
                      [A(P(Jn), { class: "w-4 h-4" })],
                      8,
                      ju,
                    ))
                  : pe("", !0),
                e.personal.linkedin
                  ? (k(),
                    $(
                      "a",
                      {
                        key: 1,
                        href: e.personal.linkedin,
                        target: "_blank",
                        class:
                          "p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                      },
                      [A(P(al), { class: "w-4 h-4" })],
                      8,
                      Ou,
                    ))
                  : pe("", !0),
                e.personal.facebook
                  ? (k(),
                    $(
                      "a",
                      {
                        key: 2,
                        href: e.personal.facebook,
                        target: "_blank",
                        class:
                          "p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                      },
                      [A(P(ll), { class: "w-4 h-4" })],
                      8,
                      Lu,
                    ))
                  : pe("", !0),
              ]),
              i("div", null, [
                i(
                  "button",
                  {
                    onClick: s,
                    class:
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors",
                  },
                  [
                    A(P(Za), { class: "w-3.5 h-3.5" }),
                    r[0] || (r[0] = i("span", null, "Về đầu trang", -1)),
                  ],
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  Du = { class: "md:hidden fixed bottom-3 left-3 right-3 z-50 no-print" },
  Fu = {
    class:
      "glass border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-1.5 shadow-2xl flex items-center justify-around",
  },
  Vu = {
    __name: "MobileBottomNav",
    emits: ["open-cv"],
    setup(e) {
      const t = Pe(window.location.hash),
        s = () => {
          t.value = window.location.hash;
        };
      return (
        $t(() => {
          window.addEventListener("hashchange", s);
        }),
        Nt(() => {
          window.removeEventListener("hashchange", s);
        }),
        (n, r) => (
          k(),
          $("div", Du, [
            i("div", Fu, [
              i(
                "a",
                {
                  href: "#",
                  class: Le([
                    "flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all",
                    {
                      "text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60":
                        t.value === "" || t.value === "#",
                    },
                  ]),
                },
                [
                  A(P(id), { class: "w-5 h-5" }),
                  r[1] ||
                    (r[1] = i(
                      "span",
                      { class: "text-[10px] mt-0.5" },
                      "Trang chủ",
                      -1,
                    )),
                ],
                2,
              ),
              i(
                "a",
                {
                  href: "#experience",
                  class: Le([
                    "flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all",
                    {
                      "text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60":
                        t.value === "#experience",
                    },
                  ]),
                },
                [
                  A(P(Ya), { class: "w-5 h-5" }),
                  r[2] ||
                    (r[2] = i(
                      "span",
                      { class: "text-[10px] mt-0.5" },
                      "Kinh nghiệm",
                      -1,
                    )),
                ],
                2,
              ),
              i(
                "button",
                {
                  onClick: r[0] || (r[0] = (o) => n.$emit("open-cv")),
                  class:
                    "flex flex-col items-center justify-center -mt-5 p-3 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/40 active:scale-90 transition-all",
                  title: "Xem CV",
                },
                [A(P(Vs), { class: "w-5 h-5" })],
              ),
              i(
                "a",
                {
                  href: "#projects",
                  class: Le([
                    "flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all",
                    {
                      "text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60":
                        t.value === "#projects",
                    },
                  ]),
                },
                [
                  A(P(il), { class: "w-5 h-5" }),
                  r[3] ||
                    (r[3] = i(
                      "span",
                      { class: "text-[10px] mt-0.5" },
                      "Dự án",
                      -1,
                    )),
                ],
                2,
              ),
              i(
                "a",
                {
                  href: "#contact",
                  class: Le([
                    "flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all",
                    {
                      "text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60":
                        t.value === "#contact",
                    },
                  ]),
                },
                [
                  A(P(Gn), { class: "w-5 h-5" }),
                  r[4] ||
                    (r[4] = i(
                      "span",
                      { class: "text-[10px] mt-0.5" },
                      "Liên hệ",
                      -1,
                    )),
                ],
                2,
              ),
            ]),
          ])
        )
      );
    },
  },
  Hu = {
    class:
      "relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full sm:h-auto sm:max-h-[90vh]",
  },
  Ru = {
    class:
      "px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/80 no-print flex-shrink-0",
  },
  Bu = { class: "flex items-center gap-2" },
  Ku = { class: "flex items-center gap-2 sm:gap-3" },
  Uu = {
    class:
      "overflow-y-auto p-4 sm:p-10 bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex-1",
    id: "cv-print-area",
  },
  qu = {
    class:
      "flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-slate-200 dark:border-slate-800",
  },
  Wu = { class: "text-center sm:text-left space-y-1 w-full" },
  zu = {
    class:
      "text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight",
  },
  Ju = {
    class: "text-sm sm:text-base font-bold text-brand-600 dark:text-brand-400",
  },
  Gu = {
    class:
      "flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 pt-1.5",
  },
  Xu = {
    class:
      "w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-brand-500 flex-shrink-0 shadow-md",
  },
  Qu = ["src", "alt"],
  Zu = {
    class: "py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800",
  },
  Yu = {
    class:
      "text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed",
  },
  ef = {
    class:
      "py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 space-y-3.5",
  },
  tf = {
    class: "flex flex-col sm:flex-row sm:justify-between sm:items-baseline",
  },
  sf = { class: "text-xs sm:text-sm font-bold text-slate-900 dark:text-white" },
  nf = { class: "text-brand-600 dark:text-brand-400 font-semibold" },
  rf = { class: "text-[11px] sm:text-xs font-mono font-medium text-slate-500" },
  of = { class: "text-[11px] sm:text-xs text-slate-600 dark:text-slate-400" },
  lf = {
    key: 0,
    class:
      "list-disc list-inside space-y-0.5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 pl-1",
  },
  af = {
    key: 1,
    class: "text-[10px] sm:text-[11px] text-slate-500 font-medium pt-0.5",
  },
  df = { class: "py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 gap-5" },
  cf = { class: "space-y-2.5" },
  uf = { class: "font-bold text-slate-800 dark:text-slate-200" },
  ff = { class: "text-slate-600 dark:text-slate-400" },
  hf = { class: "space-y-3.5" },
  pf = { class: "font-bold text-slate-900 dark:text-white" },
  gf = { class: "text-slate-600 dark:text-slate-400" },
  xf = { class: "text-slate-500" },
  mf = {
    class:
      "text-[11px] sm:text-xs space-y-0.5 text-slate-700 dark:text-slate-300",
  },
  bf = {
    __name: "PrintCvModal",
    props: {
      isOpen: { type: Boolean, default: !1 },
      profile: { type: Object, required: !0 },
    },
    emits: ["close"],
    setup(e) {
      const t = () => {
        window.print();
      };
      return (s, n) =>
        e.isOpen
          ? (k(),
            $(
              "div",
              {
                key: 0,
                class:
                  "fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6",
                onClick: n[1] || (n[1] = Fs((r) => s.$emit("close"), ["self"])),
              },
              [
                i("div", Hu, [
                  i("div", Ru, [
                    i("div", Bu, [
                      A(P(Vs), {
                        class: "w-5 h-5 text-brand-600 dark:text-brand-400",
                      }),
                      n[2] ||
                        (n[2] = i(
                          "h3",
                          {
                            class:
                              "font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-base",
                          },
                          " Bản xem trước CV (A4 / PDF) ",
                          -1,
                        )),
                    ]),
                    i("div", Ku, [
                      i(
                        "button",
                        {
                          onClick: t,
                          class:
                            "inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all",
                        },
                        [
                          A(P(ud), { class: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
                          n[3] || (n[3] = i("span", null, "In / Lưu PDF", -1)),
                        ],
                      ),
                      i(
                        "button",
                        {
                          onClick: n[0] || (n[0] = (r) => s.$emit("close")),
                          class:
                            "p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90 transition-all",
                          "aria-label": "Đóng",
                        },
                        [A(P(Xn), { class: "w-5 h-5" })],
                      ),
                    ]),
                  ]),
                  i("div", Uu, [
                    i("div", qu, [
                      i("div", Wu, [
                        i("h1", zu, C(e.profile.personal.fullName), 1),
                        i("p", Ju, C(e.profile.personal.title), 1),
                        i("div", Gu, [
                          i(
                            "span",
                            null,
                            "📍 " + C(e.profile.personal.location),
                            1,
                          ),
                          i(
                            "span",
                            null,
                            "📧 " + C(e.profile.personal.email),
                            1,
                          ),
                          i(
                            "span",
                            null,
                            "📞 " + C(e.profile.personal.phone),
                            1,
                          ),
                        ]),
                      ]),
                      i("div", Xu, [
                        i(
                          "img",
                          {
                            src: e.profile.personal.avatar,
                            alt: e.profile.personal.fullName,
                            class: "w-full h-full object-cover",
                          },
                          null,
                          8,
                          Qu,
                        ),
                      ]),
                    ]),
                    i("div", Zu, [
                      n[4] ||
                        (n[4] = i(
                          "h4",
                          {
                            class:
                              "text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1.5",
                          },
                          " Mục tiêu & Tóm tắt nghề nghiệp ",
                          -1,
                        )),
                      i("p", Yu, C(e.profile.personal.summary), 1),
                    ]),
                    i("div", ef, [
                      n[5] ||
                        (n[5] = i(
                          "h4",
                          {
                            class:
                              "text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400",
                          },
                          " Kinh nghiệm làm việc ",
                          -1,
                        )),
                      (k(!0),
                      $(
                        z,
                        null,
                        ae(
                          e.profile.experiences,
                          (r, o) => (
                            k(),
                            $("div", { key: o, class: "space-y-1" }, [
                              i("div", tf, [
                                i("h5", sf, [
                                  rt(C(r.role) + " - ", 1),
                                  i("span", nf, C(r.company), 1),
                                ]),
                                i("span", rf, C(r.period), 1),
                              ]),
                              i("p", of, C(r.description), 1),
                              r.achievements
                                ? (k(),
                                  $("ul", lf, [
                                    (k(!0),
                                    $(
                                      z,
                                      null,
                                      ae(
                                        r.achievements,
                                        (l, a) => (
                                          k(),
                                          $("li", { key: a }, C(l), 1)
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]))
                                : pe("", !0),
                              r.techStack
                                ? (k(),
                                  $(
                                    "p",
                                    af,
                                    " Công nghệ: " + C(r.techStack.join(", ")),
                                    1,
                                  ))
                                : pe("", !0),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                    i("div", df, [
                      i("div", cf, [
                        n[6] ||
                          (n[6] = i(
                            "h4",
                            {
                              class:
                                "text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400",
                            },
                            " Kỹ năng công nghệ ",
                            -1,
                          )),
                        (k(!0),
                        $(
                          z,
                          null,
                          ae(
                            e.profile.skillCategories,
                            (r, o) => (
                              k(),
                              $(
                                "div",
                                {
                                  key: o,
                                  class: "text-[11px] sm:text-xs space-y-0.5",
                                },
                                [
                                  i("span", uf, C(r.name) + ":", 1),
                                  i(
                                    "p",
                                    ff,
                                    C(r.skills.map((l) => l.name).join(", ")),
                                    1,
                                  ),
                                ],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      i("div", hf, [
                        i("div", null, [
                          n[7] ||
                            (n[7] = i(
                              "h4",
                              {
                                class:
                                  "text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1",
                              },
                              " Học vấn ",
                              -1,
                            )),
                          (k(!0),
                          $(
                            z,
                            null,
                            ae(
                              e.profile.education,
                              (r, o) => (
                                k(),
                                $(
                                  "div",
                                  { key: o, class: "text-[11px] sm:text-xs" },
                                  [
                                    i("p", pf, C(r.degree), 1),
                                    i(
                                      "p",
                                      gf,
                                      C(r.school) + " (" + C(r.period) + ")",
                                      1,
                                    ),
                                    i("p", xf, C(r.grade), 1),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        i("div", null, [
                          n[9] ||
                            (n[9] = i(
                              "h4",
                              {
                                class:
                                  "text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1",
                              },
                              " Chứng chỉ ",
                              -1,
                            )),
                          i("ul", mf, [
                            (k(!0),
                            $(
                              z,
                              null,
                              ae(
                                e.profile.certifications,
                                (r, o) => (
                                  k(),
                                  $("li", { key: o }, [
                                    n[8] || (n[8] = rt(" • ", -1)),
                                    i("strong", null, C(r.name), 1),
                                    rt(
                                      " (" +
                                        C(r.issuer) +
                                        " - " +
                                        C(r.year) +
                                        ") ",
                                      1,
                                    ),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
            ))
          : pe("", !0);
    },
  },
  vf = { class: "text-center mb-6" },
  yf = {
    class: "text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white",
  },
  kf = {
    class:
      "text-xs sm:text-sm text-brand-600 dark:text-brand-400 font-semibold mt-0.5",
  },
  wf = {
    class:
      "relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-brand-600 via-indigo-500 to-purple-500 shadow-2xl my-2 group",
  },
  _f = {
    class:
      "w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-white dark:border-slate-900 shadow-inner",
  },
  Cf = ["src", "alt"],
  Sf = { class: "flex items-center gap-3 mt-6 w-full justify-center" },
  Tf = ["href"],
  $f = {
    __name: "AvatarModal",
    props: {
      isOpen: { type: Boolean, default: !1 },
      personal: { type: Object, required: !0 },
    },
    emits: ["close"],
    setup(e, { emit: t }) {
      const s = e,
        n = t,
        r = (o) => {
          o.key === "Escape" && s.isOpen && n("close");
        };
      return (
        $t(() => {
          window.addEventListener("keydown", r);
        }),
        Nt(() => {
          window.removeEventListener("keydown", r);
        }),
        (o, l) => (
          k(),
          Ae(ui, { to: "body" }, [
            A(
              Zt,
              {
                "enter-active-class": "transition duration-300 ease-out",
                "enter-from-class": "opacity-0 scale-95",
                "enter-to-class": "opacity-100 scale-100",
                "leave-active-class": "transition duration-200 ease-in",
                "leave-from-class": "opacity-100 scale-100",
                "leave-to-class": "opacity-0 scale-95",
              },
              {
                default: jt(() => [
                  e.isOpen
                    ? (k(),
                      $(
                        "div",
                        {
                          key: 0,
                          class:
                            "fixed inset-0 z-[999] overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 no-print",
                          onClick:
                            l[3] ||
                            (l[3] = Fs((a) => o.$emit("close"), ["self"])),
                        },
                        [
                          i(
                            "div",
                            {
                              class:
                                "relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col items-center p-6 sm:p-8 animate-fade-in",
                              onClick: l[2] || (l[2] = Fs(() => {}, ["stop"])),
                            },
                            [
                              i(
                                "button",
                                {
                                  type: "button",
                                  onClick:
                                    l[0] || (l[0] = (a) => o.$emit("close")),
                                  class:
                                    "absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-90 transition-all cursor-pointer z-10",
                                  title: "Đóng (Esc)",
                                  "aria-label": "Đóng",
                                },
                                [A(P(Xn), { class: "w-5 h-5" })],
                              ),
                              i("div", vf, [
                                i("h3", yf, C(e.personal.fullName), 1),
                                i("p", kf, C(e.personal.title), 1),
                              ]),
                              i("div", wf, [
                                i("div", _f, [
                                  i(
                                    "img",
                                    {
                                      src: e.personal.avatar,
                                      alt: e.personal.fullName,
                                      class:
                                        "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500",
                                    },
                                    null,
                                    8,
                                    Cf,
                                  ),
                                ]),
                              ]),
                              i("div", Sf, [
                                i(
                                  "a",
                                  {
                                    href: e.personal.avatar,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    class:
                                      "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm active:scale-95 transition-all",
                                  },
                                  [
                                    A(P(ol), {
                                      class: "w-4 h-4 text-brand-500",
                                    }),
                                    l[4] ||
                                      (l[4] = i(
                                        "span",
                                        null,
                                        "Mở ảnh gốc",
                                        -1,
                                      )),
                                  ],
                                  8,
                                  Tf,
                                ),
                                i(
                                  "button",
                                  {
                                    type: "button",
                                    onClick:
                                      l[1] || (l[1] = (a) => o.$emit("close")),
                                    class:
                                      "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all cursor-pointer",
                                  },
                                  [
                                    ...(l[5] ||
                                      (l[5] = [
                                        i("span", null, "Đóng lại", -1),
                                      ])),
                                  ],
                                ),
                              ]),
                            ],
                          ),
                        ],
                      ))
                    : pe("", !0),
                ]),
                _: 1,
              },
            ),
          ])
        )
      );
    },
  },
  Af = {
    class:
      "min-h-screen flex flex-col selection:bg-brand-500 selection:text-white pb-20 md:pb-0",
  },
  Mf = { class: "flex-1" },
  Pf = {
    __name: "App",
    setup(e) {
      const t = Pe(!1),
        s = Pe(!1),
        n = Pe(!1),
        r = () => {
          ((n.value = !n.value),
            n.value
              ? (document.documentElement.classList.add("dark"),
                localStorage.setItem("theme", "dark"))
              : (document.documentElement.classList.remove("dark"),
                localStorage.setItem("theme", "light")));
        };
      return (
        $t(() => {
          const o = localStorage.getItem("theme"),
            l = window.matchMedia("(prefers-color-scheme: dark)").matches;
          o === "dark" || (!o && l)
            ? ((n.value = !0), document.documentElement.classList.add("dark"))
            : ((n.value = !1),
              document.documentElement.classList.remove("dark"));
        }),
        (o, l) => (
          k(),
          $("div", Af, [
            A(
              Pd,
              {
                personal: P(we).personal,
                "is-dark": n.value,
                onToggleTheme: r,
                onOpenCv: l[0] || (l[0] = (a) => (t.value = !0)),
              },
              null,
              8,
              ["personal", "is-dark"],
            ),
            i("main", Mf, [
              A(
                hc,
                {
                  personal: P(we).personal,
                  stats: P(we).stats,
                  onOpenCv: l[1] || (l[1] = (a) => (t.value = !0)),
                  onOpenAvatar: l[2] || (l[2] = (a) => (s.value = !0)),
                },
                null,
                8,
                ["personal", "stats"],
              ),
              A(
                Oc,
                { personal: P(we).personal, services: P(we).services },
                null,
                8,
                ["personal", "services"],
              ),
              A(
                S0,
                {
                  experiences: P(we).experiences,
                  "business-experiences": P(we).businessExperiences,
                  education: P(we).education,
                  certifications: P(we).certifications,
                },
                null,
                8,
                [
                  "experiences",
                  "business-experiences",
                  "education",
                  "certifications",
                ],
              ),
              A(D0, { categories: P(we).skillCategories }, null, 8, [
                "categories",
              ]),
              A(tu, { projects: P(we).projects }, null, 8, ["projects"]),
              A(Su, { personal: P(we).personal }, null, 8, ["personal"]),
            ]),
            A(Nu, { personal: P(we).personal }, null, 8, ["personal"]),
            A(Vu, { onOpenCv: l[3] || (l[3] = (a) => (t.value = !0)) }),
            A(
              bf,
              {
                "is-open": t.value,
                profile: P(we),
                onClose: l[4] || (l[4] = (a) => (t.value = !1)),
              },
              null,
              8,
              ["is-open", "profile"],
            ),
            A(
              $f,
              {
                "is-open": s.value,
                personal: P(we).personal,
                onClose: l[5] || (l[5] = (a) => (s.value = !1)),
              },
              null,
              8,
              ["is-open", "personal"],
            ),
          ])
        )
      );
    },
  };
za(Pf).mount("#app");
