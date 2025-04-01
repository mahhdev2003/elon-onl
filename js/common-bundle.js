/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
/*!
 * Generated using the Bootstrap Customizer (/getbootstrap.com/docs/3.4/customize/)
 */

/*!
 * Bootstrap v5.3.2 (/getbootstrap.com/)
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
})(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.alert");
        n || i.data("bs.alert", (n = new o(this))),
          "string" == typeof e && n[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      o = function (e) {
        t(e).on("click", i, this.close);
      };
    (o.VERSION = "5.3.2"),
      (o.TRANSITION_DURATION = 150),
      (o.prototype.close = function (e) {
        function i() {
          a.detach().trigger("closed.bs.alert").remove();
        }
        var n = t(this),
          s = n.attr("data-target");
        s || ((s = n.attr("href")), (s = s && s.replace(/.*(?=#[^\s]*$)/, ""))),
          (s = "#" === s ? [] : s);
        var a = t(document).find(s);
        e && e.preventDefault(),
          a.length || (a = n.closest(".alert")),
          a.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (a.removeClass("in"),
            t.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
              : i());
      });
    var n = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = o),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = n), this;
      }),
      t(document).on("click.bs.alert.data-api", i, o.prototype.close);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.button"),
          s = "object" == typeof e && e;
        n || o.data("bs.button", (n = new i(this, s))),
          "toggle" == e ? n.toggle() : e && n.setState(e);
      });
    }
    var i = function (e, o) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, o)),
        (this.isLoading = !1);
    };
    (i.VERSION = "5.3.2"),
      (i.DEFAULTS = { loadingText: "loading..." }),
      (i.prototype.setState = function (e) {
        var i = "disabled",
          o = this.$element,
          n = o.is("input") ? "val" : "html",
          s = o.data();
        (e += "Text"),
          null == s.resetText && o.data("resetText", o[n]()),
          setTimeout(
            t.proxy(function () {
              o[n](null == s[e] ? this.options[e] : s[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0),
                    o.addClass(i).attr(i, i).prop(i, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    o.removeClass(i).removeAttr(i).prop(i, !1));
            }, this),
            0
          );
      }),
      (i.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type")
            ? (i.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == i.prop("type") &&
              (i.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            t && i.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var o = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = i),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = o), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (i) {
            var o = t(i.target).closest(".btn");
            e.call(o, "toggle"),
              t(i.target).is('input[type="radio"], input[type="checkbox"]') ||
                (i.preventDefault(),
                o.is("input,button")
                  ? o.trigger("focus")
                  : o
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.carousel"),
          s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
          a = "string" == typeof e ? e : s.slide;
        n || o.data("bs.carousel", (n = new i(this, s))),
          "number" == typeof e
            ? n.to(e)
            : a
            ? n[a]()
            : s.interval && n.pause().cycle();
      });
    }
    var i = function (e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (i.VERSION = "5.3.2"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (i.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
          o =
            ("prev" == t && 0 === i) ||
            ("next" == t && i == this.$items.length - 1);
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
          s = (i + n) % this.$items.length;
        return this.$items.eq(s);
      }),
      (i.prototype.to = function (t) {
        var e = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : i == t
          ? this.pause().cycle()
          : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
      }),
      (i.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"),
          s = o || this.getItemForDirection(e, n),
          a = this.interval,
          r = "next" == e ? "left" : "right",
          l = this;
        if (s.hasClass("active")) return (this.sliding = !1);
        var h = s[0],
          d = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r });
        if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), a && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var p = t(this.$indicators.children()[this.getItemIndex(s)]);
            p && p.addClass("active");
          }
          var c = t.Event("slid.bs.carousel", {
            relatedTarget: h,
            direction: r,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (s.addClass(e),
                "object" == typeof s && s.length && s[0].offsetWidth,
                n.addClass(r),
                s.addClass(r),
                n
                  .one("bsTransitionEnd", function () {
                    s.removeClass([e, r].join(" ")).addClass("active"),
                      n.removeClass(["active", r].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(c);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (n.removeClass("active"),
                s.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(c)),
            a && this.cycle(),
            this
          );
        }
      });
    var o = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = i),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = o), this;
      });
    var n = function (i) {
      var o = t(this),
        n = o.attr("href");
      n && (n = n.replace(/.*(?=#[^\s]+$)/, ""));
      var s = o.attr("data-target") || n,
        a = t(document).find(s);
      if (a.hasClass("carousel")) {
        var r = t.extend({}, a.data(), o.data()),
          l = o.attr("data-slide-to");
        l && (r.interval = !1),
          e.call(a, r),
          l && a.data("bs.carousel").to(l),
          i.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", n)
      .on("click.bs.carousel.data-api", "[data-slide-to]", n),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var i = t(this);
          e.call(i, i.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i = e.attr("data-target");
      i ||
        ((i = e.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var o = "#" !== i ? t(document).find(i) : null;
      return o && o.length ? o : e.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (t(n).remove(),
        t(s).each(function () {
          var o = t(this),
            n = e(o),
            s = { relatedTarget: this };
          n.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              t.contains(n[0], i.target)) ||
              (n.trigger((i = t.Event("hide.bs.dropdown", s))),
              i.isDefaultPrevented() ||
                (o.attr("aria-expanded", "false"),
                n
                  .removeClass("open")
                  .trigger(t.Event("hidden.bs.dropdown", s)))));
        }));
    }
    function o(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.dropdown");
        o || i.data("bs.dropdown", (o = new a(this))),
          "string" == typeof e && o[e].call(i);
      });
    }
    var n = ".dropdown-backdrop",
      s = '[data-toggle="dropdown"]',
      a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (a.VERSION = "5.3.2"),
      (a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
          var s = e(n),
            a = s.hasClass("open");
          if ((i(), !a)) {
            "ontouchstart" in document.documentElement &&
              !s.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", i);
            var r = { relatedTarget: this };
            if (
              (s.trigger((o = t.Event("show.bs.dropdown", r))),
              o.isDefaultPrevented())
            )
              return;
            n.trigger("focus").attr("aria-expanded", "true"),
              s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r));
          }
          return !1;
        }
      }),
      (a.prototype.keydown = function (i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var o = t(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !o.is(".disabled, :disabled"))
          ) {
            var n = e(o),
              a = n.hasClass("open");
            if ((!a && 27 != i.which) || (a && 27 == i.which))
              return (
                27 == i.which && n.find(s).trigger("focus"), o.trigger("click")
              );
            var r = " li:not(.disabled):visible a",
              l = n.find(".dropdown-menu" + r);
            if (l.length) {
              var h = l.index(i.target);
              38 == i.which && h > 0 && h--,
                40 == i.which && h < l.length - 1 && h++,
                ~h || (h = 0),
                l.eq(h).trigger("focus");
            }
          }
        }
      });
    var r = t.fn.dropdown;
    (t.fn.dropdown = o),
      (t.fn.dropdown.Constructor = a),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = r), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", s, a.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", s, a.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          a.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e, o) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.modal"),
          a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        s || n.data("bs.modal", (s = new i(this, a))),
          "string" == typeof e ? s[e](o) : a.show && s.show(o);
      });
    }
    var i = function (e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        (this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom"),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (i.VERSION = "5.3.2"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (i.prototype.show = function (e) {
        var o = this,
          n = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(n),
          this.isShown ||
            n.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var n = t.support.transition && o.$element.hasClass("fade");
              o.$element.parent().length || o.$element.appendTo(o.$body),
                o.$element.show().scrollTop(0),
                o.adjustDialog(),
                n && o.$element[0].offsetWidth,
                o.$element.addClass("in"),
                o.enforceFocus();
              var s = t.Event("shown.bs.modal", { relatedTarget: e });
              n
                ? o.$dialog
                    .one("bsTransitionEnd", function () {
                      o.$element.trigger("focus").trigger(s);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : o.$element.trigger("focus").trigger(s);
            }));
      }),
      (i.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (i.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function (e) {
        var o = this,
          n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var s = t.support.transition && n;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + n)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            s && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          s
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var a = function () {
            o.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", a)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : a();
        } else e && e();
      }),
      (i.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var i = this.scrollbarWidth;
        this.bodyIsOverflowing &&
          (this.$body.css("padding-right", e + i),
          t(this.fixedContent).each(function (e, o) {
            var n = o.style.paddingRight,
              s = t(o).css("padding-right");
            t(o)
              .data("padding-right", n)
              .css("padding-right", parseFloat(s) + i + "px");
          }));
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad),
          t(this.fixedContent).each(function (e, i) {
            var o = t(i).data("padding-right");
            t(i).removeData("padding-right"),
              (i.style.paddingRight = o ? o : "");
          });
      }),
      (i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var o = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = o), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (i) {
          var o = t(this),
            n = o.attr("href"),
            s = o.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = t(document).find(s),
            r = a.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(n) && n }, a.data(), o.data());
          o.is("a") && i.preventDefault(),
            a.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                a.one("hidden.bs.modal", function () {
                  o.is(":visible") && o.trigger("focus");
                });
            }),
            e.call(a, r, this);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e, i) {
      var o = e.nodeName.toLowerCase();
      if (-1 !== t.inArray(o, i))
        return -1 !== t.inArray(o, s)
          ? Boolean(e.nodeValue.match(l) || e.nodeValue.match(h))
          : !0;
      for (
        var n = t(i).filter(function (t, e) {
            return e instanceof RegExp;
          }),
          a = 0,
          r = n.length;
        r > a;
        a++
      )
        if (o.match(n[a])) return !0;
      return !1;
    }
    function i(i, o, n) {
      if (0 === i.length) return i;
      if (n && "function" == typeof n) return n(i);
      if (
        !document.implementation ||
        !document.implementation.createHTMLDocument
      )
        return i;
      var s = document.implementation.createHTMLDocument("sanitization");
      s.body.innerHTML = i;
      for (
        var a = t.map(o, function (t, e) {
            return e;
          }),
          r = t(s.body).find("*"),
          l = 0,
          h = r.length;
        h > l;
        l++
      ) {
        var d = r[l],
          p = d.nodeName.toLowerCase();
        if (-1 !== t.inArray(p, a))
          for (
            var c = t.map(d.attributes, function (t) {
                return t;
              }),
              f = [].concat(o["*"] || [], o[p] || []),
              u = 0,
              g = c.length;
            g > u;
            u++
          )
            e(c[u], f) || d.removeAttribute(c[u].nodeName);
        else d.parentNode.removeChild(d);
      }
      return s.body.innerHTML;
    }
    function o(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tooltip"),
          n = "object" == typeof e && e;
        (!o && /destroy|hide/.test(e)) ||
          (o || i.data("bs.tooltip", (o = new d(this, n))),
          "string" == typeof e && o[e]());
      });
    }
    var n = ["sanitize", "whiteList", "sanitizeFn"],
      s = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      a = /^aria-[\w-]*$/i,
      r = {
        "*": ["class", "dir", "id", "lang", "role", a],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      h =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
      d = function (t, e) {
        (this.type = null),
          (this.options = null),
          (this.enabled = null),
          (this.timeout = null),
          (this.hoverState = null),
          (this.$element = null),
          (this.inState = null),
          this.init("tooltip", t, e);
      };
    (d.VERSION = "5.3.2"),
      (d.TRANSITION_DURATION = 150),
      (d.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: r,
      }),
      (d.prototype.init = function (e, i, o) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(i)),
          (this.options = this.getOptions(o)),
          (this.$viewport =
            this.options.viewport &&
            t(document).find(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
          var a = n[s];
          if ("click" == a)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin",
              l = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(
              r + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (d.prototype.getDefaults = function () {
        return d.DEFAULTS;
      }),
      (d.prototype.getOptions = function (e) {
        var o = this.$element.data();
        for (var s in o)
          o.hasOwnProperty(s) && -1 !== t.inArray(s, n) && delete o[s];
        return (
          (e = t.extend({}, this.getDefaults(), o, e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e.sanitize && (e.template = i(e.template, e.whiteList, e.sanitizeFn)),
          e
        );
      }),
      (d.prototype.getDelegateOptions = function () {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, o) {
              i[t] != o && (e[t] = o);
            }),
          e
        );
      }),
      (d.prototype.enter = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          i.tip().hasClass("in") || "in" == i.hoverState
            ? void (i.hoverState = "in")
            : (clearTimeout(i.timeout),
              (i.hoverState = "in"),
              i.options.delay && i.options.delay.show
                ? void (i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show();
                  }, i.options.delay.show))
                : i.show())
        );
      }),
      (d.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (d.prototype.leave = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          i.isInStateTrue()
            ? void 0
            : (clearTimeout(i.timeout),
              (i.hoverState = "out"),
              i.options.delay && i.options.delay.hide
                ? void (i.timeout = setTimeout(function () {
                    "out" == i.hoverState && i.hide();
                  }, i.options.delay.hide))
                : i.hide())
        );
      }),
      (d.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !i) return;
          var o = this,
            n = this.tip(),
            s = this.getUID(this.type);
          this.setContent(),
            n.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && n.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, n[0], this.$element[0])
                : this.options.placement,
            r = /\s?auto?\s?/i,
            l = r.test(a);
          l && (a = a.replace(r, "") || "top"),
            n
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? n.appendTo(t(document).find(this.options.container))
              : n.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var h = this.getPosition(),
            p = n[0].offsetWidth,
            c = n[0].offsetHeight;
          if (l) {
            var f = a,
              u = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && h.bottom + c > u.bottom
                ? "top"
                : "top" == a && h.top - c < u.top
                ? "bottom"
                : "right" == a && h.right + p > u.width
                ? "left"
                : "left" == a && h.left - p < u.left
                ? "right"
                : a),
              n.removeClass(f).addClass(a);
          }
          var g = this.getCalculatedOffset(a, h, p, c);
          this.applyPlacement(g, a);
          var m = function () {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type),
              (o.hoverState = null),
              "out" == t && o.leave(o);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? n
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(d.TRANSITION_DURATION)
            : m();
        }
      }),
      (d.prototype.applyPlacement = function (e, i) {
        var o = this.tip(),
          n = o[0].offsetWidth,
          s = o[0].offsetHeight,
          a = parseInt(o.css("margin-top"), 10),
          r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0),
          isNaN(r) && (r = 0),
          (e.top += a),
          (e.left += r),
          t.offset.setOffset(
            o[0],
            t.extend(
              {
                using: function (t) {
                  o.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          o.addClass("in");
        var l = o[0].offsetWidth,
          h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? (e.left += d.left) : (e.top += d.top);
        var p = /top|bottom/.test(i),
          c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
          f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p);
      }),
      (d.prototype.replaceArrow = function (t, e, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(i ? "top" : "left", "");
      }),
      (d.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        this.options.html
          ? (this.options.sanitize &&
              (e = i(e, this.options.whiteList, this.options.sanitizeFn)),
            t.find(".tooltip-inner").html(e))
          : t.find(".tooltip-inner").text(e),
          t.removeClass("fade in top bottom left right");
      }),
      (d.prototype.hide = function (e) {
        function i() {
          "in" != o.hoverState && n.detach(),
            o.$element &&
              o.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + o.type),
            e && e();
        }
        var o = this,
          n = t(this.$tip),
          s = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(s),
          s.isDefaultPrevented()
            ? void 0
            : (n.removeClass("in"),
              t.support.transition && n.hasClass("fade")
                ? n
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(d.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (d.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (d.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (d.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
          o = "BODY" == i.tagName,
          n = i.getBoundingClientRect();
        null == n.width &&
          (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top,
          }));
        var s = window.SVGElement && i instanceof window.SVGElement,
          a = o ? { top: 0, left: 0 } : s ? null : e.offset(),
          r = {
            scroll: o
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          l = o
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, n, r, l, a);
      }),
      (d.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
          : "top" == t
          ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
      }),
      (d.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = { top: 0, left: 0 };
        if (!this.$viewport) return n;
        var s = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var r = e.top - s - a.scroll,
            l = e.top + s - a.scroll + o;
          r < a.top
            ? (n.top = a.top - r)
            : l > a.top + a.height && (n.top = a.top + a.height - l);
        } else {
          var h = e.left - s,
            d = e.left + s + i;
          h < a.left
            ? (n.left = a.left - h)
            : d > a.right && (n.left = a.left + a.width - d);
        }
        return n;
      }),
      (d.prototype.getTitle = function () {
        var t,
          e = this.$element,
          i = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof i.title ? i.title.call(e[0]) : i.title));
      }),
      (d.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (d.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (d.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (d.prototype.enable = function () {
        this.enabled = !0;
      }),
      (d.prototype.disable = function () {
        this.enabled = !1;
      }),
      (d.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (d.prototype.toggle = function (e) {
        var i = this;
        e &&
          ((i = t(e.currentTarget).data("bs." + this.type)),
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i))),
          e
            ? ((i.inState.click = !i.inState.click),
              i.isInStateTrue() ? i.enter(i) : i.leave(i))
            : i.tip().hasClass("in")
            ? i.leave(i)
            : i.enter(i);
      }),
      (d.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      }),
      (d.prototype.sanitizeHtml = function (t) {
        return i(t, this.options.whiteList, this.options.sanitizeFn);
      });
    var p = t.fn.tooltip;
    (t.fn.tooltip = o),
      (t.fn.tooltip.Constructor = d),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = p), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.popover"),
          s = "object" == typeof e && e;
        (!n && /destroy|hide/.test(e)) ||
          (n || o.data("bs.popover", (n = new i(this, s))),
          "string" == typeof e && n[e]());
      });
    }
    var i = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (i.VERSION = "5.3.2"),
      (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        if (this.options.html) {
          var o = typeof i;
          this.options.sanitize &&
            ((e = this.sanitizeHtml(e)),
            "string" === o && (i = this.sanitizeHtml(i))),
            t.find(".popover-title").html(e),
            t
              .find(".popover-content")
              .children()
              .detach()
              .end()
              ["string" === o ? "html" : "append"](i);
        } else
          t.find(".popover-title").text(e),
            t.find(".popover-content").children().detach().end().text(i);
        t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (i.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var o = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = i),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = o), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.tab");
        n || o.data("bs.tab", (n = new i(this))),
          "string" == typeof e && n[e]();
      });
    }
    var i = function (e) {
      this.element = t(e);
    };
    (i.VERSION = "5.3.2"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          o = e.data("target");
        if (
          (o ||
            ((o = e.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var n = i.find(".active:last a"),
            s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            a = t.Event("show.bs.tab", { relatedTarget: n[0] });
          if (
            (n.trigger(s),
            e.trigger(a),
            !a.isDefaultPrevented() && !s.isDefaultPrevented())
          ) {
            var r = t(document).find(o);
            this.activate(e.closest("li"), i),
              this.activate(r, r.parent(), function () {
                n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] });
              });
          }
        }
      }),
      (i.prototype.activate = function (e, o, n) {
        function s() {
          a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            n && n();
        }
        var a = o.find("> .active"),
          r =
            n &&
            t.support.transition &&
            ((a.length && a.hasClass("fade")) || !!o.find("> .fade").length);
        a.length && r
          ? a
              .one("bsTransitionEnd", s)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : s(),
          a.removeClass("in");
      });
    var o = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = o), this;
      });
    var n = function (i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', n)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.affix"),
          s = "object" == typeof e && e;
        n || o.data("bs.affix", (n = new i(this, s))),
          "string" == typeof e && n[e]();
      });
    }
    var i = function (e, o) {
      this.options = t.extend({}, i.DEFAULTS, o);
      var n =
        this.options.target === i.DEFAULTS.target
          ? t(this.options.target)
          : t(document).find(this.options.target);
      (this.$target = n
        .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
        .on(
          "click.bs.affix.data-api",
          t.proxy(this.checkPositionWithEventLoop, this)
        )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (i.VERSION = "5.3.2"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = { offset: 0, target: window }),
      (i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(),
          s = this.$element.offset(),
          a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != i
            ? n + this.unpin <= s.top
              ? !1
              : "bottom"
            : t - o >= n + a
            ? !1
            : "bottom";
        var r = null == this.affixed,
          l = r ? n : s.top,
          h = r ? a : e;
        return null != i && i >= n
          ? "top"
          : null != o && l + h >= t - o
          ? "bottom"
          : !1;
      }),
      (i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            o = this.options.offset,
            n = o.top,
            s = o.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof o && (s = n = o),
            "function" == typeof n && (n = o.top(this.$element)),
            "function" == typeof s && (s = o.bottom(this.$element));
          var r = this.getState(a, e, n, s);
          if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""),
              h = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(h), h.isDefaultPrevented())) return;
            (this.affixed = r),
              (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == r && this.$element.offset({ top: a - e - s });
        }
      });
    var o = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = i),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = o), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var i = t(this),
            o = i.data();
          (o.offset = o.offset || {}),
            null != o.offsetBottom && (o.offset.bottom = o.offsetBottom),
            null != o.offsetTop && (o.offset.top = o.offsetTop),
            e.call(i, o);
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i,
        o =
          e.attr("data-target") ||
          ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return t(document).find(o);
    }
    function i(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.collapse"),
          s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
        !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1),
          n || i.data("bs.collapse", (n = new o(this, s))),
          "string" == typeof e && n[e]();
      });
    }
    var o = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, o.DEFAULTS, i)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (o.VERSION = "5.3.2"),
      (o.TRANSITION_DURATION = 350),
      (o.DEFAULTS = { toggle: !0 }),
      (o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            n =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              n &&
              n.length &&
              ((e = n.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var s = t.Event("show.bs.collapse");
            if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
              n &&
                n.length &&
                (i.call(n, "hide"), e || n.data("bs.collapse", null));
              var a = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [a](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var r = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [a](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return r.call(this);
              var l = t.camelCase(["scroll", a].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(r, this))
                .emulateTransitionEnd(o.TRANSITION_DURATION)
                [a](this.$element[0][l]);
            }
          }
        }
      }),
      (o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var n = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[i](0)
                  .one("bsTransitionEnd", t.proxy(n, this))
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
              : n.call(this);
          }
        }
      }),
      (o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (o.prototype.getParent = function () {
        return t(document)
          .find(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (i, o) {
              var n = t(o);
              this.addAriaAndCollapsedClass(e(n), n);
            }, this)
          )
          .end();
      }),
      (o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var n = t.fn.collapse;
    (t.fn.collapse = i),
      (t.fn.collapse.Constructor = o),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = n), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (o) {
          var n = t(this);
          n.attr("data-target") || o.preventDefault();
          var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
          i.call(s, r);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(i, o) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(t(i).is(document.body) ? window : i)),
        (this.options = t.extend({}, e.DEFAULTS, o)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function i(i) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.scrollspy"),
          s = "object" == typeof i && i;
        n || o.data("bs.scrollspy", (n = new e(this, s))),
          "string" == typeof i && n[i]();
      });
    }
    (e.VERSION = "5.3.2"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = this,
          i = "offset",
          o = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (o = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
              return (
                (s && s.length && s.is(":visible") && [[s[i]().top + o, n]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          o = this.options.offset + i - this.$scrollElement.height(),
          n = this.offsets,
          s = this.targets,
          a = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), e >= o))
          return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return (this.activeTarget = null), this.clear();
        for (t = n.length; t--; )
          a != s[t] &&
            e >= n[t] &&
            (void 0 === n[t + 1] || e < n[t + 1]) &&
            this.activate(s[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var i =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length &&
          (o = o.closest("li.dropdown").addClass("active")),
          o.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var o = t.fn.scrollspy;
    (t.fn.scrollspy = i),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = o), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          i.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var i = !1,
        o = this;
      t(this).one("bsTransitionEnd", function () {
        i = !0;
      });
      var n = function () {
        i || t(o).trigger(t.support.transition.end);
      };
      return setTimeout(n, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery);
$(function () {
  if (document.location.hash) {
    let anchor = $(
      "div[data-plugin=Blog] a.wb_anchor[name=" +
        document.location.hash.substring(1) +
        "]"
    );
    if (anchor.length) {
      let offset = anchor.offset();
      if (offset.top) {
        window.scrollTo({ top: offset.top, behavior: "instant" });
      }
    }
  }
});
function wb_form_validateForm(formId, values, errors) {
  var form = $("input[name='wb_form_id'][value='" + formId + "']").parent();
  if (!form || form.length === 0 || !errors) return;
  form.find("input[name],textarea[name]").css({ backgroundColor: "" });
  var elem;
  if (errors.required) {
    for (var i = 0; i < errors.required.length; i++) {
      var name = errors.required[i];
      elem = form.find(
        "input[name='" +
          name +
          "'],textarea[name='" +
          name +
          "'],select[name='" +
          name +
          "']"
      );
      elem.css({ backgroundColor: "#ff8c8c" });
    }
  }
  if (Object.keys(errors).length) {
    for (var k in values) {
      elem = form.find(
        "input[name='" +
          k +
          "'][type='radio'],input[name='" +
          k +
          "'][type='checkbox'],input[name='" +
          k +
          "[]'][type='checkbox']"
      );
      if (elem.length) {
        if (!Array.isArray(values[k])) values[k] = [values[k]];
        elem.each(function (key, item) {
          if (values[k].indexOf($(item).val()) >= 0) {
            $(item).attr("checked", !0);
          }
        });
        continue;
      }
      elem = form.find(
        "input[name='" +
          k +
          "'],textarea[name='" +
          k +
          "'],select[name='" +
          k +
          "']"
      );
      if (elem.length) {
        elem.val(values[k]);
      }
    }
  }
}
var _isTouchDevice;
function isTouchDevice() {
  if (_isTouchDevice === undefined) {
    _isTouchDevice =
      "ontouchstart" in document.documentElement &&
      (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/Opera Mini/i) ||
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints > 0));
  }
  return _isTouchDevice;
}
var _baseUrl;
function getBaseUrl() {
  if (_baseUrl === undefined) {
    _baseUrl = $("base").attr("href");
  }
  return _baseUrl;
}
function isIOS() {
  return (
    "ontouchstart" in document.documentElement &&
    (navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints > 0))
  );
}
function wb_show_alert(message, type) {
  var prompt = $("<div>")
    .addClass("alert alert-wb-form alert-" + type)
    .append(message)
    .prepend(
      $("<button>")
        .addClass("close")
        .html("&nbsp;&times;")
        .on("click", function () {
          $(this).parent().remove();
        })
    )
    .appendTo("body");
  setTimeout(function () {
    prompt.animate({ opacity: 1, right: 0 }, 250);
  }, 250);
}
(function () {
  var popupInited = !1;
  var loader, container, popup, iframe, closeBtn, isVisible;
  var setPopupVisible = function (visible) {
    isVisible = !!visible;
    if (isVisible) {
      container.show();
      var options = container.data("options");
      if (options.height !== "auto") {
        popup.css("height", options.height);
      }
      setTimeout(function () {
        container.addClass("visible");
      }, 10);
    } else {
      container.removeClass("visible");
      setTimeout(function () {
        container.hide();
      }, 300);
    }
  };
  window.wb_close_popup = function () {
    if (iframe && iframe.length) {
      iframe.attr("src", "");
      setPopupVisible(!1);
      $(window).off("resize", popupLoaded);
      iframe.off("load", popupLoaded);
      iframe.data("options", {});
      $(document.body).css({ overflow: "" });
    }
  };
  function popupLoaded(init) {
    var options = container.data("options");
    var d = iframe.get(0).contentDocument;
    window.postMessage(
      JSON.stringify({
        type: "popupIframeLoaded",
        data: { height: d ? $(d).outerHeight() : -1 },
      }),
      $("base").attr("href")
    );
    $(document.body).css({
      overflow: options.height === "auto" ? "hidden" : "",
    });
    container.css({ overflow: options.height === "auto" ? "auto" : "" });
    popup.css({ height: "" });
    popup.css({
      height:
        options.height === "auto"
          ? d
            ? $(d.body).outerHeight()
            : ""
          : options.height,
      maxHeight: options.height === "auto" ? "none" : options.height,
    });
    if (options.pagePopup) {
      var offset = Math.floor(
        0 -
          popup[0].getBoundingClientRect().x -
          (popup[0].offsetParent
            ? parseInt(getComputedStyle(popup[0].offsetParent)["padding-left"])
            : 0)
      );
      var popupOverflowed =
        (sizeFormat(options.width).indexOf("px") > 0 &&
          options.width > $(popup).width()) ||
        (sizeFormat(options.minWidth).indexOf("px") > 0 &&
          options.minWidth >= $(popup).width());
      iframe.css({
        position: "absolute",
        left: !popupOverflowed ? offset : 0,
        right: !popupOverflowed ? offset : 0,
      });
    } else {
      iframe.css({ position: "relative", left: "", right: "", width: "" });
    }
    setPopupVisible(!0);
    if (init !== !1) {
      loader.hide();
      setTimeout(function () {
        popupLoaded(!1);
      }, 100);
      setTimeout(function () {
        popupLoaded(!1);
      }, 500);
      var observer = new MutationObserver(function () {
        if (options.height === "auto") {
          popup.css({
            height:
              options.height === "auto"
                ? d
                  ? $(d.body).outerHeight()
                  : ""
                : options.height,
            maxHeight: options.height === "auto" ? "none" : options.height,
          });
        }
      });
      observer.observe(d, { attributes: !0, childList: !0, subtree: !0 });
    }
  }
  window.wb_show_popup = function (url, options) {
    if (!options) options = {};
    if (!popupInited) {
      popupInited = !0;
      container = $('<div class="wb-popup-container">');
      popup = $('<div class="wb-popup">');
      loader = $('<div class="wb-popup-loader">').hide();
      $('<div class="ico-spin spinner">').appendTo(loader);
      var iframeWrapper = $('<div class="wb-iframe-wrapper">');
      iframeWrapper.css({ overflow: "hidden" });
      iframe = $("<iframe>");
      closeBtn = $('<div class="wb-popup-btn-close">');
      closeBtn.on("click", wb_close_popup);
      popup.append(loader);
      popup.append(closeBtn);
      popup.append(iframeWrapper);
      iframeWrapper.append(iframe);
      popup.appendTo(container);
      container.appendTo("body");
      $(document).on("keydown", function (e) {
        if (e.keyCode === 27) {
          if (isVisible) wb_close_popup();
        }
      });
      if (isIOS()) {
        iframeWrapper.attr(
          "style",
          "-webkit-overflow-scrolling: touch; overflow-y: auto;"
        );
      }
    }
    loader.show();
    popup.css({
      width: options.width || 400,
      height: options.height || 320,
      minWidth: sizeFormat(options.minWidth),
      minHeight: sizeFormat(options.minHeight),
      maxWidth: sizeFormat(options.maxWidth),
      maxHeight: sizeFormat(options.maxHeight),
    });
    container.css({ overflow: "" });
    popup.css({ height: "", maxHeight: "" });
    container.data("options", options);
    $(window).on("resize", popupLoaded);
    iframe.on("load", popupLoaded);
    iframe.attr("src", url);
    setPopupVisible(!0);
  };
  function sizeFormat(size) {
    if (size && String(size || "").indexOf("%") > 0) {
      return size;
    }
    if (size && String(size || "") === "auto") {
      return size;
    }
    if (size) {
      return size + "px";
    }
    return "";
  }
  $(window).on("message", function (e) {
    var eData = e.originalEvent.data;
    if (eData && typeof eData === "object") {
      if (eData.data && typeof eData.data === "object") {
        var event = eData.event,
          data = eData.data;
        if (event === "wb_contact_form_sent") {
          var type = data.type ? data.type : "success";
          if (data.state) wb_show_alert(data.state, type);
          if (type === "success") {
            setPopupVisible(!1);
          }
        }
        if (event === "wb_show_popup") {
          var url = data.url;
          var options = data.options || {};
          wb_show_popup(url, options);
        }
      }
      if (
        typeof eData.action === "string" &&
        eData.action === "showPlanUpgradeDialog"
      ) {
        window.parent.postMessage(eData);
      }
    }
  });
})();
(function () {
  var params = [];
  var i, part;
  var qs_parts = location.search.replace(/^\?/, "").split("&");
  for (i = 0; i < qs_parts.length; i++) {
    part = qs_parts[i].split("=");
    if (part.length === 2) {
      params[decodeURIComponent(part[0])] = decodeURIComponent(part[1]);
    }
  }
  window.wb_get_query_param = function (key) {
    return key && key in params ? params[key] : null;
  };
})();
$(function () {
  if (navigator.userAgent.indexOf("Instagram") > -1) {
    $("form").each(function () {
      if (
        this.method &&
        this.method.toLowerCase() === "post" &&
        this.target &&
        this.target === "_blank"
      ) {
        $(this).removeAttr("target");
      }
    });
  }
  (function () {
    var extractYoutubeId = function (url) {
      var id = null;
      if (/^https?:\/\/.*youtube.*/i.test(url)) {
        var parts = url.split("?");
        if (parts.length > 1) {
          var parts2 = parts[1].split("&");
          for (var i = 0; i < parts2.length; i++) {
            var keyVal = parts2[i].split("=");
            if (keyVal.length > 1) {
              if (keyVal[0] === "v" && keyVal[1]) {
                id = keyVal[1];
                break;
              }
            }
          }
        }
      }
      if (!id && /^(?:https?:\/\/|)(www\.)?youtu\.be\/(.+)$/i.test(url)) {
        id = RegExp.$1;
      }
      if (
        !id &&
        /(?:^|")(?:https?:\/\/|)(?:www\.|music\.)?youtube\.com\/(?:embed\/|shorts\/|watch\?v=)(.+?)(?:[\?&].*)?(?:"|$)/i.test(
          url
        )
      ) {
        id = RegExp.$1;
      }
      if (id) {
        id = id.replace(/[^a-zA-Z0-9\_\-]/, "");
      }
      return id;
    };
    $(".wb_video_background").each(function () {
      var videoContainer = $(this);
      var isSite = videoContainer.is(".wb_site_video_background");
      var url = videoContainer.data("video"),
        start = videoContainer.data("start"),
        end = videoContainer.data("end");
      if (!start) start = 0;
      if (!end) end = null;
      if (url) {
        var youtubeVideoId = extractYoutubeId(url);
        if (youtubeVideoId) {
          if (!window.YT) {
            $.getScript("/www.youtube.com/iframe_api");
          }
          var onAPIReady = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = function () {
            if (typeof onAPIReady === "function") onAPIReady();
            var youtubeElementId =
              videoContainer.attr("id") + "_youtube_container";
            var player = $(
              '<div class="wb-youtube-video">' +
                '<div class="youtube" id="' +
                youtubeElementId +
                '"></div>' +
                "</div>"
            );
            videoContainer.append(player);
            var viewportCont = isSite ? $(window) : videoContainer;
            var lastWidth, lastHeight;
            var innerCont = null;
            var inited = !1;
            var resizer = function () {
              if (!innerCont) innerCont = player.children("iframe.youtube");
              if (!innerCont.length) return;
              var w = viewportCont.width(),
                h = viewportCont.height();
              if (lastWidth === w && lastHeight === h) return;
              lastWidth = w;
              lastHeight = h;
              if (w / h > 16 / 9) {
                youtube.setSize(w, (w / 16) * 9);
                innerCont.css("left", 0);
              } else {
                youtube.setSize((h / 9) * 16, h);
                innerCont.css("left", -(innerCont.outerWidth() - w) / 2);
              }
            };
            var onfocus = function () {
              if (youtube.getPlayerState() !== YT.PlayerState.PLAYING)
                youtube.playVideo();
            };
            $(window).on("resize", resizer);
            $(window).on("focus", onfocus);
            var initVideo = function (reload) {
              player.addClass("visible");
              clearInterval(timer);
              timer = setInterval(function () {
                youtube.seekTo(start);
                if (youtube.getPlayerState() !== YT.PlayerState.PLAYING)
                  youtube.playVideo();
              }, ((end ? end : youtube.getDuration() - 0.5) - start) * 1000);
              if (reload) {
                youtube.seekTo(start);
                if (youtube.getPlayerState() !== YT.PlayerState.PLAYING)
                  youtube.playVideo();
              }
            };
            var timer;
            var youtube = new YT.Player(youtubeElementId, {
              events: {
                playerVars: {
                  autoplay: 0,
                  autohide: 1,
                  modestbranding: 0,
                  rel: 0,
                  showinfo: 0,
                  controls: 0,
                  disablekb: 1,
                  enablejsapi: 0,
                  iv_load_policy: 3,
                },
                onReady: function () {
                  youtube.loadVideoById({
                    videoId: youtubeVideoId,
                    startSeconds: start,
                  });
                  youtube.mute();
                  resizer();
                },
                onStateChange: function (e) {
                  if (e.data === YT.PlayerState.PLAYING) {
                    if (!inited) {
                      initVideo();
                      inited = !0;
                    }
                  } else if (e.data === YT.PlayerState.ENDED) {
                    initVideo(!0);
                  }
                },
              },
            });
          };
        } else {
          var video = $('<video class="wb-video" muted playsinline>');
          var loaded = !1;
          var ratio;
          var lastWidth, lastHeight;
          videoContainer.append(video);
          var resizer = function () {
            if (!ratio) return;
            var ew = videoContainer.width();
            var eh = videoContainer.height();
            if (
              lastWidth &&
              lastWidth === ew &&
              lastHeight &&
              lastHeight === eh
            )
              return;
            lastWidth = ew;
            lastHeight = eh;
            var er = ew / eh;
            var nw = 0,
              nh = 0,
              nl = 0,
              nt = 0;
            if (ratio > er) {
              nh = eh;
              nw = nh * ratio;
              nl = (nw - ew) / 2;
            } else if (ratio < eh) {
              nw = ew;
              nh = nw / ratio;
              nt = (nh - eh) / 2;
            } else {
              nw = ew;
              nh = eh;
            }
            video.css({ width: nw, height: nh, left: -nl, top: -nt });
          };
          $(window).on("resize", resizer);
          video.get(0).autoplay = !0;
          video.on("loadeddata", function () {
            if (loaded) return;
            loaded = !0;
            setInterval(function () {
              video.get(0).currentTime = start;
              if (video.get(0).paused) video.get(0).play();
            }, ((end ? end : video.get(0).duration) - start) * 1000);
            video.get(0).currentTime = start;
            video.get(0).play();
            video.addClass("visible");
            ratio = video.width() / video.height();
            resizer();
          });
          video.get(0).src = url;
        }
      }
    });
  })();
  var currLang =
    "currLang" in window && window.currLang ? window.currLang : null;
  var useTrailingSlashes =
    !("useTrailingSlashes" in window) || window.useTrailingSlashes;
  var disableRightClick =
    "disableRightClick" in window && window.disableRightClick;
  var isPopupMode = parseInt(wb_get_query_param("wbPopupMode")) === 1;
  var openPopupPageUrl =
    "openPopupPageUrl" in window && window.openPopupPageUrl;
  var openPopupPageOptions =
    "openPopupPageOptions" in window && window.openPopupPageOptions;
  var isMaintenance = $("body").attr("wb-maintenance-page") === "true";
  var href = wb_get_query_param("wbPopupOpen");
  if (href) {
    var baseUrl = $("head base").attr("href");
    if (/^wb_popup:([^;]*);/.test(href)) {
      var url = RegExp.$1,
        popupOptions = {};
      var parts = href.split(";");
      for (var i = 0; i < parts.length; i++) {
        var pp = parts[i].split("=");
        if (pp.length !== 2 || (!parseInt(pp[1]) && pp[1] !== "auto")) continue;
        if (pp[0] === "w") popupOptions.width = pp[1];
        else if (pp[0] === "h") popupOptions.height = pp[1];
        else if (pp[0] === "wmin") popupOptions.minWidth = pp[1];
        else if (pp[0] === "wmax") popupOptions.maxWidth = pp[1];
        else if (pp[0] === "hmin") popupOptions.minHeight = pp[1];
        else if (pp[0] === "hmax") popupOptions.maxHeight = pp[1];
        else if (pp[0] === "pagePopup") popupOptions.pagePopup = pp[1];
      }
      if (!/^https?:\/\//.test(url)) {
        url = baseUrl + url;
      }
      if (!isPopupMode) {
        wb_show_popup(url, popupOptions);
      } else if (window !== window.parent && window.parent.postMessage) {
        window.parent.postMessage({
          event: "wb_show_popup",
          data: { url: url, options: popupOptions },
        });
      }
    }
  }
  if (disableRightClick) {
    $(document).on("contextmenu", function (e) {
      e.preventDefault();
    });
  }
  var comboBoxes = $(".wb-combobox-controll");
  if (comboBoxes.length) {
    comboBoxes.each(function () {
      var thisCombo = $(this);
      var clickFunc = function () {
        var input = thisCombo.find("input");
        var menu = thisCombo.find(".dropdown-menu");
        var w = input.outerWidth();
        var mw = menu.width();
        var mh = menu.height();
        var ew = thisCombo.parent().outerWidth();
        var eh = thisCombo.parent().outerHeight();
        var wW = $(document.body).outerWidth();
        var wH = $(document.body).outerHeight();
        var offset = thisCombo.parent().offset();
        if (mw < ew) menu.width(ew);
        let margin = -w;
        if (document.dir === "rtl") {
          if (mw > offset.left + ew) margin -= mw - ew;
        } else {
          if (offset.left + mw > wW) margin -= mw - ew;
        }
        let css = {};
        css[document.dir === "rtl" ? "marginRight" : "marginLeft"] =
          margin + "px";
        menu.css(css);
        if (offset.top + eh + mh > wH)
          menu.css({ top: "initial", bottom: "100%" });
        if (offset.top - mh < 0) menu.css({ top: "100%", bottom: "initial" });
        thisCombo.find(".btn-group").toggleClass("open");
      };
      $(this).find("input").bind("click", clickFunc);
      $(this).find(".dropdown-toggle").bind("click", clickFunc);
    });
    $(document).bind("click", function (e) {
      var t = $(e.target);
      if (!t.is(".wb-combobox-controll")) {
        t = t.parents(".wb-combobox-controll");
        $.each($(".wb-combobox-controll"), function () {
          if (t.get(0) !== $(this).get(0)) {
            $(this).find(".btn-group").removeClass("open");
          }
        });
      }
    });
  }
  if (currLang) {
    $(".lang-selector").each(function () {
      var thisElem = $(this);
      var type = thisElem.attr("data-type");
      if (type === "flags") {
        thisElem.find('a[data-lang="' + currLang + '"]').addClass("active");
      } else if (type === "select") {
        var actLi = thisElem.find('li[data-lang="' + currLang + '"]');
        actLi.addClass("active");
        thisElem.find("input").val(actLi.find("a").html());
        thisElem.find("input").on("click", function () {
          setTimeout(function () {
            thisElem.find(".dropdown-toggle").click();
          }, 1);
        });
      }
    });
  }
  $(".btn-group.dropdown").each(function () {
    var ddh = $(this).height();
    var ddm = $(this).children(".dropdown-menu");
    ddm.addClass("open");
    var ddmh = ddm.height();
    ddm.removeClass("open");
    var ddt = $(this).offset().top;
    var dh = $(document).height();
    if (ddt + ddh + ddmh + 2 >= dh) {
      $(this).removeClass("dropdown").addClass("dropup");
    }
  });
  $(".dropdown").on("shown.bs.dropdown", function () {
    var ddm = $(this).children(".dropdown-menu");
    if (ddm.length) {
      ddm.find("a").css({ whiteSpace: "" });
      ddm.css({ width: "", left: "", right: "" });
      var wWidth = $(window).width();
      var rect = ddm.get(0).getBoundingClientRect();
      if (rect.width > wWidth) {
        ddm.css({ width: wWidth });
        ddm.find("a").css({ whiteSpace: "normal" });
      }
      rect = ddm.get(0).getBoundingClientRect();
      if (ddm.has(".dropdown-menu-right") && rect.left < 0) {
        ddm.css({ right: rect.left });
      }
      if (ddm.has(".dropdown-menu-left") && wWidth < rect.right) {
        ddm.css({ left: rect.right - wWidth });
      }
    }
  });
  var menuList = [];
  var lastOpenMi = null;
  var closeMenus = function (ignoreMenu) {
    for (var i = 0; i < menuList.length; i++) {
      var menu = menuList[i];
      if (ignoreMenu && menu.menuId === ignoreMenu.menuId) continue;
      menu.closeAll();
    }
  };
  $("body").on("touchstart", function (e) {
    var ignoreMenu = SpMenu.lookupMenu(
      $(e.target).closest(".wb-menu,.wb-menu-det")
    );
    closeMenus(ignoreMenu);
  });
  var SpMenuItem = function (elem, parent) {
    this.elem = elem;
    this.parent = parent;
    this.subMenu =
      elem.children("ul").length > 0 ? new SpMenu(elem, this) : null;
    var isOver = !1;
    this.isHover = function () {
      return isOver;
    };
    this.isActive = function () {
      return elem.is(".active");
    };
    var linkElem = this.elem.children("a");
    var href = linkElem.attr("href");
    var clearAnchor = function (url) {
      var anchorPos = url.indexOf("#");
      return anchorPos > -1 ? url.substring(0, url.indexOf("#")) : url;
    };
    var itemOnCurrPage;
    this.isAnchor = function (onCurrentPage) {
      if (href && href.indexOf("#") > -1) {
        if (onCurrentPage !== undefined) {
          if (itemOnCurrPage === undefined) {
            var baseUrl = getBaseUrl();
            var currUrl = clearAnchor(location.href);
            var currUri = currUrl.replace(baseUrl, "");
            var itemUri = href.replace(baseUrl, "");
            itemOnCurrPage = clearAnchor(itemUri) === currUri;
          }
          return itemOnCurrPage === !!onCurrentPage;
        }
        return !0;
      }
      return !1;
    };
    this.getText = function () {
      return linkElem.text();
    };
    var _hto = 0;
    this.setHover = function (over) {
      this.cancelHoverTimeout();
      if (isOver == over) return;
      isOver = over;
      if (over) {
        elem.addClass("over");
        if (this.parent.isExpandOnClick())
          this.parent.startListenOutsideClicks();
        var pItems = this.parent.getItems();
        for (var i = 0; i < pItems.length; i++) {
          var item = pItems[i];
          if (item === this) continue;
          if (item.isHover()) item.setHover(!1);
        }
      } else {
        elem.removeClass("over");
        if (this.parent.isExpandOnClick())
          this.parent.stopListenOutsideClicks();
        if (this.parent.isExpandOnClick() && this.subMenu) {
          this.subMenu.getItems().forEach(function (item) {
            item.setHover(over);
          });
        }
      }
      if (this.subMenu) this.subMenu.triggerHover(over);
      if (this.parent && this.parent.isVertical() && this.parent.parent) {
        this.parent.parent.cancelHoverTimeout();
        if (!this.parent.isHover()) this.parent.parent.setHover(over);
      }
    };
    this.setHoverTimeout = function (over) {
      this.cancelHoverTimeout();
      var self = this;
      _hto = setTimeout(function () {
        self.setHover(over);
      }, 20);
    };
    this.cancelHoverTimeout = function () {
      if (_hto) clearTimeout(_hto);
    };
  };
  var SpMenu = function (elem, parent) {
    this.isExpandOnClick = function () {
      return (
        this.menuElem.hasClass("onclick") ||
        (this.parent &&
          this.parent.parent &&
          this.parent.parent.isExpandOnClick())
      );
    };
    this.menuId = parent && parent.parent ? parent.parent.menuId : elem[0].id;
    this.parent = parent;
    SpMenu.markMenu(elem, this.menuId);
    this.menuElem = elem.children("ul");
    var isVertical = this.menuElem.is(".vmenu");
    var items = [];
    var rawItem = this.menuElem.children("li");
    for (var i = 0, c = rawItem.length; i < c; i++) {
      var el = rawItem.eq(i);
      el.data("spMi", i);
      items.push(new SpMenuItem(el, this));
    }
    var fallbackActiveItem = null;
    var currentPageItems = this.menuElem.find("li.wb_this_page_menu_item");
    var anchorItemMap = {};
    currentPageItems.each(function () {
      var item = $(this);
      if (!fallbackActiveItem) fallbackActiveItem = item;
      var anchor = item.data("anchor") || "";
      if (!anchorItemMap.hasOwnProperty(anchor)) {
        anchorItemMap[anchor] = item;
        anchorItemMap[encodeURIComponent(anchor)] = item;
        anchorItemMap[encodeURIComponent(anchor).replace(/%20/g, "+")] = item;
      }
    });
    var _wrapperElem = null;
    var _wrapper = !1;
    this.isWrapper = function () {
      return this._wrapper ? !0 : !1;
    };
    this.setWrapper = function (wrapper, mi) {
      if (_wrapper == wrapper) return;
      _wrapper = wrapper;
      if (wrapper) {
        if (!_wrapperElem) {
          _wrapperElem = $("<div>")
            .addClass("vmenu wb-menu-det")
            .attr({ id: this.menuId + "-det" })
            .css({
              position: "absolute",
              zIndex: 9999,
              top: -20,
              left: -20,
              width: 1,
            })
            .appendTo(document.body);
          SpMenu.markMenu(_wrapperElem, this.menuId);
        }
        _wrapperElem.append(this.menuElem);
        var windowWidth = $(window).outerWidth();
        var menuWidth = this.menuElem.outerWidth();
        var pos = mi.elem.offset();
        var width = mi.elem.outerWidth();
        if (pos.left + width - 1 + menuWidth < windowWidth) {
          _wrapperElem.css({ left: pos.left + width - 1, top: pos.top });
        } else if (pos.left - menuWidth + 1 > 0) {
          _wrapperElem.css({ left: pos.left - menuWidth + 1, top: pos.top });
        } else {
          _wrapperElem.css({
            left: pos.left,
            right: pos.left + width,
            top: pos.top + mi.elem.outerHeight(),
          });
        }
      } else {
        elem.append(this.menuElem);
      }
    };
    this.triggerHover = function (over, mi) {
      if (!over) this.setWrapper(!1, mi);
    };
    this.isVertical = function () {
      if (!this.parent) {
        return isVertical;
      } else if (this.parent.parent) {
        return this.parent.parent.isVertical();
      }
      return !1;
    };
    var _openLeft = !1;
    this.isOpenLeft = function () {
      return _openLeft;
    };
    this.setOpenLeft = function (openLeft) {
      if (_openLeft == openLeft) return;
      _openLeft = openLeft;
      if (openLeft) this.menuElem.addClass("open-left");
      else this.menuElem.removeClass("open-left");
    };
    this.getLeft = function () {
      return this.menuElem.offset().left;
    };
    this.getWidth = function () {
      return this.menuElem.outerWidth(!0);
    };
    var isExpanded = function () {
      return elem.is(".collapse-expanded");
    };
    var open = function () {
      elem.addClass("collapse-expanded");
      updateMenuPosition();
      if (isLanding) onResize();
      SpMenu.updateActiveItems();
    };
    var close = function () {
      elem.removeClass("collapse-expanded");
    };
    this.clearOpenLeft = function () {
      this.setOpenLeft(!1);
      for (var i = 0; i < items.length; i++) {
        if (items[i].subMenu) items[i].subMenu.clearOpenLeft();
      }
    };
    this.closeAll = function () {
      for (var i = 0; i < items.length; i++) {
        var mi = items[i];
        mi.setHover(!1);
        if (mi.subMenu) mi.subMenu.closeAll();
      }
    };
    this.getItems = function () {
      return items;
    };
    this.updateActiveItems = function (anchorsAbove, anchorsBelow) {
      if (currentPageItems.length < 2) {
        currentPageItems.addClass("active");
      } else {
        currentPageItems.removeClass("active");
        var searchFunc = function (anchorList) {
          for (var i = 0, il = anchorList.length; i < il; i++) {
            var anchor = anchorList[i];
            if (!anchorItemMap.hasOwnProperty(anchor.name)) continue;
            anchorItemMap[anchor.name].addClass("active");
            return !0;
          }
          return !1;
        };
        if (!searchFunc(anchorsAbove))
          if (!searchFunc(anchorsBelow)) fallbackActiveItem.addClass("active");
      }
    };
    var isHover = !1;
    this.isHover = function () {
      return isHover;
    };
    var outsideClickListener = null;
    this.startListenOutsideClicks = function () {
      if (this.parent) return;
      $(document).on(
        "click",
        (outsideClickListener = function (event) {
          var menuEl =
            $(event.target).is(".wb-menu") ||
            $(event.target).parents(".wb-menu");
          if (menuEl.length) return;
          Object.keys(menuIdx).forEach((id) => menuIdx[id].closeAll());
        })
      );
    };
    this.stopListenOutsideClicks = function () {
      if (this.parent) return;
      $(document).off("click", outsideClickListener);
      outsideClickListener = null;
    };
    var onHover = function (mi, over) {
      if (over) {
        mi.setHover(!0);
        lastOpenMi = mi;
        if (isExpanded()) {
          mi.parent.clearOpenLeft();
        } else if (mi.subMenu) {
          if (isVertical) {
            if (mi.parent.isOpenLeft()) {
              mi.subMenu.setOpenLeft(!0);
            }
          } else {
            var windowWidth = $(window).outerWidth();
            var menuWidth = mi.subMenu.menuElem.outerWidth();
            var pos = mi.elem.offset();
            var width = mi.elem.outerWidth();
            if (
              pos.left +
                (mi.parent && mi.parent.parent ? width : 0) -
                1 +
                menuWidth <
              windowWidth
            ) {
              mi.subMenu.menuElem.css({
                left: mi.parent && mi.parent.parent ? "100%" : "",
                right: "",
                top: "",
              });
            } else if (
              pos.left +
                (mi.parent && mi.parent.parent ? 0 : width) -
                menuWidth +
                1 >
              0
            ) {
              mi.subMenu.menuElem.css({
                left: "auto",
                right: mi.parent && mi.parent.parent ? "100%" : 0,
                top: "",
              });
            } else {
              mi.subMenu.menuElem.css({
                left: "auto",
                right: "auto",
                top: "100%",
              });
            }
          }
          mi.subMenu.setWrapper(isVertical, mi);
        }
      } else {
        mi.setHoverTimeout(!1);
      }
    };
    var onClick = function (mi) {
      if (mi.isAnchor(!0)) {
        setTimeout(function () {
          close();
        }, 100);
      }
    };
    var self = this;
    var onHoverToggle = function (mi, e) {
      var isOver = mi.isHover() || (isExpanded() && mi.isActive());
      closeMenus(self);
      var parentMatch = !1;
      var mip = mi;
      while (!0) {
        if (mip === lastOpenMi) {
          parentMatch = !0;
          break;
        } else if (mip.parent) {
          mip = mip.parent;
        } else {
          break;
        }
      }
      if (lastOpenMi && !mi.parent && !parentMatch) {
        lastOpenMi.setHoverTimeout(!1);
      }
      if (!isOver && mi.subMenu) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
      onHover(mi, !isOver);
    };
    var inferMi = function (miElem) {
      var idx = miElem.data("spMi");
      if (typeof idx !== "number" && typeof idx !== "string") return null;
      if (idx < 0 || idx >= items.length) return null;
      return items[idx];
    };
    var ignoreHover = null;
    this.menuElem.on("mouseenter", function () {
      if (!self.parent) return;
      isHover = !0;
    });
    if (this.isExpandOnClick()) {
      this.menuElem.on("click", "> li", function (e) {
        var mi = inferMi($(this));
        if (!mi) return;
        if (mi.subMenu) {
          onHover(mi, !mi.isHover());
          e.preventDefault();
          return !1;
        } else {
          onClick(mi);
          e.stopPropagation();
        }
      });
    } else {
      this.menuElem.on("mouseleave", function () {
        if (!self.parent) return;
        isHover = !1;
        var hasHoverChild = !1;
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (item.isHover()) {
            hasHoverChild = !0;
            break;
          }
        }
        if (!hasHoverChild) {
          self.parent.setHover(!1);
        }
      });
      this.menuElem.on("click", "> li", function (e) {
        var mi = inferMi($(this));
        onClick(mi);
        e.stopPropagation();
      });
      this.menuElem.on("mouseover", "> li", function () {
        if (ignoreHover) return;
        var mi = inferMi($(this));
        if (!mi) return;
        onHover(mi, !0);
        var miParent = mi;
        do {
          var timer = miParent.elem.data("outTimer");
          if (timer) clearTimeout(timer);
          miParent = miParent.parent.parent;
        } while (miParent);
      });
      this.menuElem.on("mouseout", "> li", function () {
        if (ignoreHover) return;
        var mi = inferMi($(this));
        if (!mi) return;
        mi.elem.data(
          "outTimer",
          setTimeout(function () {
            onHover(mi, !1);
          }, 400)
        );
      });
      this.menuElem.on("touchstart", "> li > a", function (e) {
        if (ignoreHover) clearTimeout(ignoreHover);
        ignoreHover = setTimeout(function () {
          ignoreHover = null;
        }, 2000);
        var mi = inferMi($(this).parent());
        if (!mi) return;
        onHoverToggle(mi, e);
      });
    }
    if (!parent) SpMenu.registerMenu(this);
  };
  var menuIdx = {};
  SpMenu.registerMenu = function (menu) {
    menuList.push(menu);
    menuIdx[menu.menuId] = menu;
  };
  SpMenu.markMenu = function (elem, menuId) {
    elem.data("spMenu", menuId);
  };
  SpMenu.lookupMenu = function (elem) {
    var menuId = elem.data("spMenu");
    return menuId in menuIdx ? menuIdx[menuId] : null;
  };
  SpMenu.updateActiveItems = function () {
    var anchorsAbove = [],
      anchorsBelow = [];
    anchorsAbove.push({ name: "", delta: $(window).scrollTop() });
    $("a.wb_anchor").each(function () {
      var $this = $(this);
      var anchor = $this.attr("name");
      var offset = Math.round(this.getBoundingClientRect().top);
      if (offset <= 3) anchorsAbove.push({ name: anchor, delta: -offset });
      else anchorsBelow.push({ name: anchor, delta: offset });
    });
    var sortFunc = function (a, b) {
      if (a.delta === b.delta) {
        if (a.name === "") return -1;
        if (b.name === "") return 1;
        return 0;
      }
      return a.delta < b.delta ? -1 : 1;
    };
    anchorsAbove.sort(sortFunc);
    anchorsBelow.sort(sortFunc);
    for (var i = 0, il = menuList.length; i < il; i++)
      menuList[i].updateActiveItems(anchorsAbove, anchorsBelow);
    $(".wb-menu li:not(.wb_this_page_menu_item)")
      .removeClass("active")
      .filter(function (i, el) {
        var ul = $(el).parents(".wb-menu > ul").get(0);
        return ul && getComputedStyle(ul)["position"] !== "fixed";
      })
      .each(function (key, item) {
        if ($(item).find("li.active").length) {
          $(item).addClass("active");
        }
      });
  };
  $(window).on("scroll orientationchange", SpMenu.updateActiveItems);
  if ("ResizeObserver" in window) {
    new ResizeObserver(SpMenu.updateActiveItems).observe(document.body);
  } else {
    var lastBodyHeight = null;
    setInterval(function () {
      if (document.body.clientHeight !== lastBodyHeight) {
        lastBodyHeight = document.body.clientHeight;
        SpMenu.updateActiveItems();
      }
    }, 500);
  }
  setTimeout(SpMenu.updateActiveItems, 0);
  $(".wb-menu").each(function () {
    new SpMenu($(this), null);
  });
  $(".wb-menu-mobile").each(function () {
    var elem = $(this);
    var btn = elem.children(".btn-collapser").eq(0);
    var isHeaderFixed = elem.parents(".wb_header_fixed").length > 0;
    var onResize = function () {
      var ul = elem.children("ul");
      ul.css(
        "max-height",
        $(window).scrollTop() - ul.offset().top + $(window).height() - 20 + "px"
      );
    };
    elem.find("[data-anchor]").click(function () {
      var linkAnchor = $(this);
      setTimeout(() => {
        elem.removeClass("collapse-expanded");
      }, 50);
    });
    var updateMenuPosition = function () {
      var box = elem[0].getBoundingClientRect();
      elem
        .children(elem.is(".collapse-expanded") ? "ul" : "ul:not(.vmenu)")
        .css({
          top: box.bottom,
          "max-height": "calc(98vh - " + box.bottom + "px)",
        });
      var collapser = elem.children(".btn-collapser");
      var ul = elem.children("ul");
      if (collapser.css("display") === "none") {
        ul.css({ left: "", right: "", width: "" });
      } else {
        var wWidth = $(document.body).width();
        ul.css("max-width", "");
        var ulMaxW = parseInt(ul.css("max-width"));
        if (ulMaxW && wWidth > ulMaxW + 40) {
          var align = "left";
          if ($(elem[0]).hasClass("wb-menu-mobile-left")) align = "left";
          if ($(elem[0]).hasClass("wb-menu-mobile-center")) align = "center";
          if ($(elem[0]).hasClass("wb-menu-mobile-right")) align = "right";
          ul.css({
            left:
              align === "left"
                ? box.left
                : align === "right"
                ? "unset"
                : box.left + box.width / 2 - ulMaxW / 2,
            right:
              align === "left"
                ? "unset"
                : align === "right"
                ? wWidth - (box.left + box.width)
                : "unset",
            width: "",
          });
          var ulBox = ul.get(0).getBoundingClientRect();
          if (ulBox.right + 20 > wWidth) {
            ul.css(
              "left",
              parseInt(ul.css("left")) - (ulBox.right - wWidth) - 20
            );
          }
          if (ulBox.left < 20) {
            ul.css("left", 20);
          }
        } else {
          ul.css({ left: "20px", right: "20px", width: "auto" });
        }
      }
    };
    btn.on("click", function (e) {
      if (elem.hasClass("collapse-expanded")) {
        elem.removeClass("collapse-expanded");
      } else {
        elem.addClass("collapse-expanded");
        updateMenuPosition();
        if (isHeaderFixed) onResize();
        SpMenu.updateActiveItems();
      }
    });
    $(document).on("click", function (e) {
      if (
        !$(e.target).is("#" + elem.attr("id") + ", #" + elem.attr("id") + " *")
      ) {
        if (elem.hasClass("collapse-expanded")) {
          elem.removeClass("collapse-expanded");
        }
        e.stopPropagation();
      }
    });
    $(window)
      .on("resize orientationchange", function () {
        if (elem.hasClass("collapse-expanded")) {
          elem.removeClass("collapse-expanded");
        }
        updateMenuPosition();
        if (isHeaderFixed) onResize();
      })
      .scroll(function () {
        updateMenuPosition();
      });
    if (isHeaderFixed) {
      elem.find("li").on("click", function () {
        elem.removeClass("collapse-expanded");
      });
    }
  });
  (function () {
    if (!(typeof window.IntersectionObserver === "function")) return;
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0, c = entries.length; i < c; i++) {
        if (!entries[i].isIntersecting) continue;
        var elem = $(entries[i].target);
        if (elem.data("wbAnimEntry")) continue;
        (function (elem) {
          var time = elem.attr("data-wb-anim-entry-time") * 1.0;
          var delay = elem.attr("data-wb-anim-entry-delay") * 1.0;
          elem.removeAttr("data-wb-anim-entry-time");
          elem.removeAttr("data-wb-anim-entry-delay");
          var funcStart = function () {
            elem
              .data("wbAnimEntry", "1")
              .addClass("wb-anim-entry-on")
              .removeClass("wb-anim-entry");
          };
          if (delay) setTimeout(funcStart, delay * 1000);
          else funcStart();
          if (time && !elem.hasClass("loop")) {
            setTimeout(function () {
              elem.removeClass("wb-anim-entry-on");
            }, delay * 1000 + time * 1000 + 40);
          }
        })(elem);
      }
    }, {});
    $(".wb-anim-entry").each(function () {
      observer.observe(this);
    });
  })();
  (function () {
    var $sticky = $(".wb-sticky");
    if ($sticky.length) {
      var $anchors = $(".wb_anchor");
      var html = $("html").get(0);
      var $root = $(".root");
      var watcher = 0,
        retry = 0,
        lastSize;
      var stickyUpdateCalled = !1;
      var stickyUpdate = function () {
        var clientWidth = html.clientWidth;
        var clientHeight = html.clientHeight;
        let padding = {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        };
        $sticky.each(function () {
          var $this = $(this);
          var hAlign = $this.data("hAlign"),
            vAlign = $this.data("vAlign");
          if (!hAlign || !vAlign) return;
          var rect = this.getBoundingClientRect(),
            v;
          var margin = {
            top:
              (v = parseFloat($sticky.css("margin-top"))) && !isNaN(v) ? v : 0,
            bottom:
              (v = parseFloat($sticky.css("margin-bottom"))) && !isNaN(v)
                ? v
                : 0,
            left:
              (v = parseFloat($sticky.css("margin-left"))) && !isNaN(v) ? v : 0,
            right:
              (v = parseFloat($sticky.css("margin-right"))) && !isNaN(v)
                ? v
                : 0,
          };
          if (
            rect.top - margin.top <= 0 &&
            Math.round(rect.bottom) + margin.bottom >= clientHeight
          ) {
            if (hAlign === "left")
              padding.paddingLeft = Math.max(
                padding.paddingLeft,
                Math.round(rect.right)
              );
            else if (hAlign === "right")
              padding.paddingRight = Math.max(
                padding.paddingRight,
                Math.round(clientWidth - rect.left)
              );
          } else if (
            rect.left - margin.left <= 0 &&
            Math.round(rect.right) + margin.right >= clientWidth
          ) {
            if (vAlign === "top")
              padding.paddingTop = Math.max(
                padding.paddingTop,
                Math.round(rect.bottom)
              );
            else if (vAlign === "bottom")
              padding.paddingBottom = Math.max(
                padding.paddingBottom,
                Math.round(clientHeight - rect.top)
              );
          }
        });
        $anchors.css({ position: "relative" });
        $anchors.css({ position: "relative", top: -padding.paddingTop });
        $root.css(padding);
        if (!stickyUpdateCalled) $root.addClass("root-padding-fixed");
        stickyUpdateCalled = !0;
        return clientWidth + "," + clientHeight;
      };
      var animationWatcherFunc = function () {
        var size = stickyUpdate();
        if (size !== lastSize) {
          retry = 0;
          watcher = requestAnimationFrame(animationWatcherFunc);
        } else if (++retry <= 2)
          watcher = requestAnimationFrame(animationWatcherFunc);
        else watcher = 0;
        lastSize = size;
      };
      var stickyUpdateCallback = function () {
        if (watcher) cancelAnimationFrame(watcher);
        lastSize = "";
        retry = 0;
        watcher = requestAnimationFrame(animationWatcherFunc);
      };
      $(window).on("resize orientationchange", stickyUpdateCallback);
      stickyUpdateCallback();
      lastSize = stickyUpdate();
    }
  })();
  (function () {
    var defMaintenance = $("#default_empty_maintenance_h1");
    if (defMaintenance.length) {
      defMaintenance
        .css({
          textAlign: "center",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: "0",
        })
        .addClass("wb-stl-custom5")
        .show();
      $("#wb_root").remove();
      return;
    }
    var header = null,
      main = null,
      footer = null;
    $("#wb_root")
      .children()
      .each(function () {
        var $this = $(this);
        var id = "" + $this.attr("id");
        if (/^wb_header/.test(id)) header = $this;
        if (/^wb_main/.test(id)) main = $this;
        if (/^wb_footer/.test(id)) footer = $this;
      });
    var updateMainBlockHeight = function () {
      if (!isMaintenance && (!main || !header || !footer)) return;
      var mainMargins = main.outerHeight(!0) - main.outerHeight(!1);
      var minMainBlockHeight = window.innerHeight - mainMargins;
      if (!isMaintenance) {
        var headerHeight = header.hasClass("wb_header_fixed")
          ? 0
          : header.outerHeight(!0);
        minMainBlockHeight =
          minMainBlockHeight - headerHeight - footer.outerHeight(!0);
      }
      var mainBlockHeight = parseInt(main.get(0).style.height);
      if (!mainBlockHeight) mainBlockHeight = 0;
      main.css(
        "min-height",
        Math.max(minMainBlockHeight, mainBlockHeight) + "px"
      );
    };
    $(window).on("resize", updateMainBlockHeight);
    $(window).on("load", updateMainBlockHeight);
    updateMainBlockHeight();
    setTimeout(function () {
      updateMainBlockHeight();
    }, 100);
    setTimeout(function () {
      updateMainBlockHeight();
    }, 300);
    setTimeout(function () {
      updateMainBlockHeight();
    }, 1000);
  })();
  $(window).trigger("hashchange");
  $(document).on("mousedown", ".ecwid a", function () {
    var href = $(this).attr("href");
    if (href && href.indexOf("#!") === 0) {
      var url = decodeURIComponent(location.pathname) + href;
      $(this).attr("href", url);
    }
  });
  (function () {
    $(".wb_anchor").each(function () {
      try {
        var anchor = $(this);
        var target = $('[href="#' + this.name + '"]');
        if (!target.length)
          target = $('[href="#' + decodeURIComponent(this.name) + '"]');
        if (!target.length)
          target = $('[href="#' + encodeURIComponent(this.name) + '"]');
        if (target.length) {
          target.each(function () {
            $(this).on("click", function (e) {
              window.location.hash = anchor.get(0).name || "";
              $(window).scrollTop(anchor.offset().top);
              let menu = target.parents(".wb-menu-mobile");
              setTimeout(() => {
                menu.removeClass("collapse-expanded");
              }, 50);
              e.preventDefault();
              return !1;
            });
          });
        }
      } catch (e) {}
    });
  })();
  (function () {
    var recaptchaList = $(".wb_form_captcha");
    var defaultRecaptchaWidth = 304;
    if (recaptchaList.length) {
      var resizeCaptcha = function () {
        recaptchaList.each(function () {
          var recaptcha = $(this);
          if (recaptcha.is(":visible")) {
            var form = recaptcha.parents(".wb_form");
            var fw = form.outerWidth();
            var scale = Math.min(fw / defaultRecaptchaWidth, 1);
            var scaleCss = "scale(" + scale + ")";
            if (scale > 0) {
              recaptcha.css({
                transform: scaleCss,
                "-o-transform": scaleCss,
                "-ms-transform": scaleCss,
                "-moz-transform": scaleCss,
                "-webkit-transform": scaleCss,
                "max-width": fw * scale + "px",
              });
            }
          }
        });
      };
      $(window).on("resize", resizeCaptcha);
      setTimeout(function () {
        resizeCaptcha();
      }, 500);
    }
  })();
  (function () {
    var updatePositionFixed = function () {
      if (isTouchDevice()) {
        if (isIOS() && !window.MSStream) {
          $("body").addClass("wb_no_bg_fixed");
        }
        var pageCssSheet, sheet;
        for (var i = 0; i < document.styleSheets.length; i++) {
          sheet = document.styleSheets[i];
          if (
            sheet.ownerNode &&
            sheet.ownerNode.getAttribute("id") === "wb-page-stylesheet"
          ) {
            pageCssSheet = sheet;
            break;
          }
        }
        if (!pageCssSheet) return;
        var rules =
          !pageCssSheet.href || pageCssSheet.href.indexOf(location.origin) > -1
            ? pageCssSheet.cssRules || pageCssSheet.rules
            : [];
        if (!rules) return;
        var fixedBgCss;
        for (i = 0; i < rules.length; i++) {
          if (rules[i].selectorText === "body.site::before") {
            if (/\bfixed\b/i.test(rules[i].cssText)) {
              fixedBgCss = rules[i].cssText;
              pageCssSheet.deleteRule(i);
              break;
            }
          }
        }
        if (fixedBgCss) {
          var css = fixedBgCss
            .match(/\{(.+)\}/)[1]
            .replace(/\bfixed\b/i, "scroll");
          css += " position: fixed";
          $('<div class="wb_fixed_bg_hack">').prependTo("body");
          pageCssSheet.addRule(".wb_fixed_bg_hack", css);
        }
      }
    };
    updatePositionFixed();
  })();
  (function () {
    var angularLazyClbId = 0;
    var baseUrl = $("head base").attr("href");
    var convertLinks = function (link) {
      $(link || 'a[data-popup-processed!="true"]').each(function () {
        var a = $(this);
        var dataPopup = a.attr("data-popup");
        if (dataPopup && /^wb_popup:([^;]*);/.test(dataPopup)) {
          var url = RegExp.$1,
            popupOptions = {};
          var parts = dataPopup.split(";");
          for (var i = 0; i < parts.length; i++) {
            var pp = parts[i].split("=");
            if (pp.length !== 2 || (!parseInt(pp[1]) && pp[1] !== "auto"))
              continue;
            if (pp[0] === "w") popupOptions.width = pp[1];
            else if (pp[0] === "h") popupOptions.height = pp[1];
            else if (pp[0] === "wmin") popupOptions.minWidth = pp[1];
            else if (pp[0] === "wmax") popupOptions.maxWidth = pp[1];
            else if (pp[0] === "hmin") popupOptions.minHeight = pp[1];
            else if (pp[0] === "hmax") popupOptions.maxHeight = pp[1];
            else if (pp[0] === "pagePopup") popupOptions.pagePopup = pp[1];
          }
          if (!/^https?:\/\//.test(url)) {
            url = baseUrl + url;
          }
          (function (url, popupOptions) {
            var func = function (e) {
              e.stopImmediatePropagation();
              e.preventDefault();
              if (!isPopupMode) {
                wb_show_popup(url, popupOptions);
              } else if (
                window !== window.parent &&
                window.parent.postMessage
              ) {
                window.parent.postMessage({
                  event: "wb_show_popup",
                  data: { url: url, options: popupOptions },
                });
              }
            };
            if (a.parents("[data-ng-controller]").length) {
              a.attr("data-lazy-clb", angularLazyClbId);
              a.parents("[data-ng-controller]").on(
                "click",
                "[data-lazy-clb=" + angularLazyClbId + "]",
                func
              );
              angularLazyClbId++;
            } else {
              a.data("wbpopfunc", func).on("click", func);
            }
          })(url, popupOptions);
          a.attr("data-popup-url", a.attr("data-popup"));
          a.removeAttr("data-popup");
          a.attr("href", "javascript:void(0)");
          a.removeAttr("target");
          a.attr("data-is-popup", "true");
        } else if (isPopupMode) {
          var target = a.attr("target");
          if (!target || target === "_self") {
            a.attr("target", "_parent");
          }
        }
        a.attr("data-popup-processed", "true");
      });
    };
    convertLinks();
    setTimeout(convertLinks, 100);
    if (window.wbmodGalleryLib) {
      setTimeout(function () {
        var galleryList = window.wbmodGalleryLib.getGalleryLibList();
        for (var i = 0; i < galleryList.length; i++) {
          galleryList[i].onImageDisplayed = function () {
            convertLinks();
          };
        }
      }, 500);
    }
    if (openPopupPageUrl && !isPopupMode) {
      setTimeout(function () {
        wb_show_popup(openPopupPageUrl, openPopupPageOptions);
      }, 1000);
    }
    window.initLink = function (link) {
      var $link = $(link);
      var func = $link.data("wbpopfunc");
      if (func) $link.off("click", func);
      $link.removeAttr("data-popup-processed").removeAttr("data-is-popup");
      convertLinks(link);
    };
  })();
  (function () {
    $("[data-enlarge-src]")
      .css("cursor", "pointer")
      .on("click touchstart touchend touchmove", function (e) {
        var $this = $(this);
        if (e.type === "touchstart") {
          $this.data("pswpDisabled", !1);
        } else if (e.type === "touchmove") {
          $this.data("pswpDisabled", !0);
        }
        if (
          (e.type === "click" || e.type === "touchend") &&
          !$(this).data("pswpDisabled")
        ) {
          if ($this.data("clicked")) return;
          $this.data("clicked", !0);
          var img = new Image();
          img.onload = function () {
            new PhotoSwipe(
              $(".wb_pswp").get(0),
              PhotoSwipeUI_Default,
              [
                {
                  src: this.src,
                  w: this.width,
                  h: this.height,
                  msrc: this.src,
                },
              ],
              { index: 0, closeOnScroll: !1 }
            ).init();
            $this.data("clicked", !1);
          };
          img.src = $this.attr("data-enlarge-src");
        }
      });
  })();
  (function () {
    var ignoreTags = ["A", "FORM", "INPUT", "SELECT", "TEXTAREA"];
    $(".wb-layout-link").each(function () {
      var $link = $(this);
      $link
        .parent()
        .children(".wb_content")
        .on("click", function (e) {
          for (
            var target = e.target;
            target && target !== this;
            target = target.parentNode
          ) {
            if (
              ignoreTags.indexOf(target.tagName) >= 0 ||
              /wb-prevent-layout-click/.test(target.getAttribute("class") || "")
            )
              return;
          }
          e.stopImmediatePropagation();
          e.preventDefault();
          var href = $link.attr("href");
          if (href.indexOf(":") < 0) {
            var baseUrl = $("base").attr("href");
            href = baseUrl + href;
          }
          if (href === "javascript:void(0)") $link.click();
          else if (
            $link.attr("target") === "_blank" ||
            (e.type === "click" && (e.button === 1 || e.ctrlKey)) ||
            ("wbPreview" in window &&
              window.wbPreview &&
              window.location.protocol === "https:" &&
              /http:/.test(href))
          )
            window.open(href, void 0, "noopener");
          else window.location.href = href;
        });
    });
  })();
  (function () {
    if (typeof window.IntersectionObserver === "function") {
      var observer = new IntersectionObserver(function (entries) {
        for (var i = 0, c = entries.length; i < c; i++) {
          if (!entries[i].isIntersecting) continue;
          var elem = entries[i].target;
          var src = elem.getAttribute("data-src");
          if (src) {
            elem.removeAttribute("data-defer-load");
            elem.removeAttribute("data-src");
            elem.src = src;
          }
        }
      }, {});
      $("[data-defer-load]").each(function () {
        observer.observe(this);
      });
    } else {
      $("[data-defer-load]").each(function () {
        var elem = this;
        var src = elem.getAttribute("data-src");
        if (src) {
          elem.removeAttribute("data-defer-load");
          elem.removeAttribute("data-src");
          elem.src = src;
        }
      });
    }
  })();
  (function () {
    setTimeout(function () {
      $("html").css("scroll-behavior", "smooth");
    }, 500);
  })();
  (function () {
    $('.wb-accordion [data-toggle="tab"]').on("shown.bs.tab", function (e) {
      var elem = $(e.target);
      elem.trigger("resize");
      setTimeout(() => elem.trigger("resize"), 500);
    });
    $(
      '.wb-accordion [data-toggle="collapse"], .wb-accordion > div > .panel-group'
    ).on("shown.bs.collapse", function (e) {
      var elem = $(e.target);
      elem.trigger("resize");
      setTimeout(() => elem.trigger("resize"), 500);
    });
    function saveState(elem) {
      if (!elem.data("save-open-tab") || !elem.data("save-open-tab-loaded"))
        return;
      var lastOpened;
      try {
        lastOpened = JSON.parse(
          localStorage.getItem("ACCORDION" + elem.get(0).id) || "[]"
        );
      } catch (e) {
        lastOpened = [];
      }
      var selector =
        "#id > .wb-accordion-type-accordion > .panel-group > .panel[data-item-id] > .in, #id > .wb-accordion-type-tabs > div > ul > .wb-accordion-item.active[data-item-id], #id > .wb-accordion-type-slider > div > .carousel-indicators > .wb-accordion-item.active[data-item-id]";
      var openTabs = $(selector.replace(/#id/g, "#" + elem.get(0).id));
      lastOpened = openTabs
        .map(function (i, openTab) {
          if ($(openTab).parent("[data-item-id]").length) {
            openTab = $(openTab).parent("[data-item-id]").get(0);
          }
          return $(openTab).data("item-id");
        })
        .toArray();
      localStorage.setItem(
        "ACCORDION" + elem.get(0).id,
        JSON.stringify(lastOpened)
      );
    }
    function loadState() {
      $(".wb-accordion[data-save-open-tab]").each(function (i, elem) {
        var lastOpened;
        try {
          lastOpened = JSON.parse(
            localStorage.getItem("ACCORDION" + elem.id) || "[]"
          );
        } catch (e) {
          lastOpened = [];
        }
        if (lastOpened.length > 0) {
          var selector =
            "#id > .wb-accordion-type-accordion > .panel-group > .panel[data-item-id], #id > .wb-accordion-type-tabs > div > ul > .wb-accordion-item[data-item-id], #id > .wb-accordion-type-slider > div > .carousel-indicators > .wb-accordion-item[data-item-id]";
          var tabs = $(selector.replace(/#id/g, "#" + elem.id));
          if ($(elem).children(".wb-accordion-type-accordion").length) {
            tabs.each(function (i, tab) {
              var contentId;
              if (lastOpened.indexOf($(tab).data("item-id")) >= 0) {
                contentId = $(tab)
                  .addClass("in")
                  .children(".panel-heading")
                  .children(".panel-title")
                  .children(".wb-accordion-title")
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0)
                  .attr("href");
                $(contentId).addClass("in");
              } else {
                contentId = $(tab)
                  .removeClass("in")
                  .children(".panel-heading")
                  .children(".panel-title")
                  .children(".wb-accordion-title")
                  .addClass("collapsed")
                  .attr("aria-expanded", !1)
                  .attr("href");
                $(contentId).removeClass("in");
              }
            });
          } else if ($(elem).children(".wb-accordion-type-tabs").length) {
            tabs.each(function (i, tab) {
              var contentId;
              if (lastOpened.indexOf($(tab).data("item-id")) >= 0) {
                contentId = $(tab)
                  .addClass("active")
                  .attr("aria-expanded", !0)
                  .attr("href");
                $(contentId).addClass("active");
              } else {
                contentId = $(tab)
                  .removeClass("active")
                  .attr("aria-expanded", !1)
                  .attr("href");
                $(contentId).removeClass("active");
              }
            });
          } else if ($(elem).children(".wb-accordion-type-slider").length) {
            tabs.each(function (i, tab) {
              var slideId;
              if (lastOpened.indexOf($(tab).data("item-id")) >= 0) {
                slideId = $(tab).addClass("active").attr("data-slide-to");
                $($(tab).parent().next().children().get(slideId)).addClass(
                  "active"
                );
              } else {
                slideId = $(tab).removeClass("active").attr("data-slide-to");
                $($(tab).parent().next().children().get(slideId)).removeClass(
                  "active"
                );
              }
            });
          }
        }
        $(elem).attr("data-save-open-tab-loaded", !0);
      });
      $(
        '.wb-accordion [data-toggle="tab"], .wb-accordion [data-toggle="collapse"], .wb-accordion [data-slide-to]'
      ).on("click", function (e) {
        setTimeout(function () {
          var elem = $(e.target);
          saveState(elem.parents(".wb-accordion"));
        }, 500);
      });
    }
    loadState();
  })();
});
/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(b)
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.PhotoSwipe = b());
})(this, function () {
  "use strict";
  var a = function (a, b, c, d) {
    var e = {
      features: null,
      bind: function (a, b, c, d) {
        var e = (d ? "remove" : "add") + "EventListener";
        b = b.split(" ");
        for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1);
      },
      isArray: function (a) {
        return a instanceof Array;
      },
      createEl: function (a, b) {
        var c = document.createElement(b || "div");
        return a && (c.className = a), c;
      },
      getScrollY: function () {
        var a = window.pageYOffset;
        return void 0 !== a ? a : document.documentElement.scrollTop;
      },
      unbind: function (a, b, c) {
        e.bind(a, b, c, !0);
      },
      removeClass: function (a, b) {
        var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
        a.className = a.className
          .replace(c, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      },
      addClass: function (a, b) {
        e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
      },
      hasClass: function (a, b) {
        return (
          a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        );
      },
      getChildByClass: function (a, b) {
        for (var c = a.firstChild; c; ) {
          if (e.hasClass(c, b)) return c;
          c = c.nextSibling;
        }
      },
      arraySearch: function (a, b, c) {
        for (var d = a.length; d--; ) if (a[d][c] === b) return d;
        return -1;
      },
      extend: function (a, b, c) {
        for (var d in b)
          if (b.hasOwnProperty(d)) {
            if (c && a.hasOwnProperty(d)) continue;
            a[d] = b[d];
          }
      },
      easing: {
        sine: {
          out: function (a) {
            return Math.sin(a * (Math.PI / 2));
          },
          inOut: function (a) {
            return -(Math.cos(Math.PI * a) - 1) / 2;
          },
        },
        cubic: {
          out: function (a) {
            return --a * a * a + 1;
          },
        },
      },
      detectFeatures: function () {
        if (e.features) return e.features;
        var a = e.createEl(),
          b = a.style,
          c = "",
          d = {};
        if (
          ((d.oldIE = document.all && !document.addEventListener),
          (d.touch = "ontouchstart" in window),
          window.requestAnimationFrame &&
            ((d.raf = window.requestAnimationFrame),
            (d.caf = window.cancelAnimationFrame)),
          (d.pointerEvent =
            navigator.pointerEnabled || navigator.msPointerEnabled),
          !d.pointerEvent)
        ) {
          var f = navigator.userAgent;
          if (/iP(hone|od)/.test(navigator.platform)) {
            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            g &&
              g.length > 0 &&
              ((g = parseInt(g[1], 10)),
              g >= 1 && g < 8 && (d.isOldIOSPhone = !0));
          }
          var h = f.match(/Android\s([0-9\.]*)/),
            i = h ? h[1] : 0;
          (i = parseFloat(i)),
            i >= 1 &&
              (i < 4.4 && (d.isOldAndroid = !0), (d.androidVersion = i)),
            (d.isMobileOpera = /opera mini|opera mobi/i.test(f));
        }
        for (
          var j,
            k,
            l = ["transform", "perspective", "animationName"],
            m = ["", "webkit", "Moz", "ms", "O"],
            n = 0;
          n < 4;
          n++
        ) {
          c = m[n];
          for (var o = 0; o < 3; o++)
            (j = l[o]),
              (k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j)),
              !d[j] && k in b && (d[j] = k);
          c &&
            !d.raf &&
            ((c = c.toLowerCase()),
            (d.raf = window[c + "RequestAnimationFrame"]),
            d.raf &&
              (d.caf =
                window[c + "CancelAnimationFrame"] ||
                window[c + "CancelRequestAnimationFrame"]));
        }
        if (!d.raf) {
          var p = 0;
          (d.raf = function (a) {
            var b = new Date().getTime(),
              c = Math.max(0, 16 - (b - p)),
              d = window.setTimeout(function () {
                a(b + c);
              }, c);
            return (p = b + c), d;
          }),
            (d.caf = function (a) {
              clearTimeout(a);
            });
        }
        return (
          (d.svg =
            !!document.createElementNS &&
            !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect),
          (e.features = d),
          d
        );
      },
    };
    e.detectFeatures(),
      e.features.oldIE &&
        (e.bind = function (a, b, c, d) {
          b = b.split(" ");
          for (
            var e,
              f = (d ? "detach" : "attach") + "Event",
              g = function () {
                c.handleEvent.call(c);
              },
              h = 0;
            h < b.length;
            h++
          )
            if ((e = b[h]))
              if ("object" == typeof c && c.handleEvent) {
                if (d) {
                  if (!c["oldIE" + e]) return !1;
                } else c["oldIE" + e] = g;
                a[f]("on" + e, c["oldIE" + e]);
              } else a[f]("on" + e, c);
        });
    var f = this,
      g = 25,
      h = 3,
      i = {
        allowPanToNext: !0,
        spacing: 0.12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: 0.75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        isClickableElement: function (a) {
          return "A" === a.tagName;
        },
        getDoubleTapZoom: function (a, b) {
          return a ? 1 : b.initialZoomLevel < 0.7 ? 1 : 1.33;
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit",
      };
    e.extend(i, d);
    var j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X,
      Y,
      Z,
      $,
      _,
      aa,
      ba,
      ca,
      da,
      ea,
      fa,
      ga,
      ha,
      ia,
      ja,
      ka,
      la,
      ma = function () {
        return { x: 0, y: 0 };
      },
      na = ma(),
      oa = ma(),
      pa = ma(),
      qa = {},
      ra = 0,
      sa = {},
      ta = ma(),
      ua = 0,
      va = !0,
      wa = [],
      xa = {},
      ya = !1,
      za = function (a, b) {
        e.extend(f, b.publicMethods), wa.push(a);
      },
      Aa = function (a) {
        var b = ac();
        return a > b - 1 ? a - b : a < 0 ? b + a : a;
      },
      Ba = {},
      Ca = function (a, b) {
        return Ba[a] || (Ba[a] = []), Ba[a].push(b);
      },
      Da = function (a) {
        var b = Ba[a];
        if (b) {
          var c = Array.prototype.slice.call(arguments);
          c.shift();
          for (var d = 0; d < b.length; d++) b[d].apply(f, c);
        }
      },
      Ea = function () {
        return new Date().getTime();
      },
      Fa = function (a) {
        (ja = a), (f.bg.style.opacity = a * i.bgOpacity);
      },
      Ga = function (a, b, c, d, e) {
        (!ya || (e && e !== f.currItem)) &&
          (d /= e ? e.fitRatio : f.currItem.fitRatio),
          (a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")");
      },
      Ha = function (a) {
        ea &&
          (a &&
            (s > f.currItem.fitRatio
              ? ya || (mc(f.currItem, !1, !0), (ya = !0))
              : ya && (mc(f.currItem), (ya = !1))),
          Ga(ea, pa.x, pa.y, s));
      },
      Ia = function (a) {
        a.container &&
          Ga(
            a.container.style,
            a.initialPosition.x,
            a.initialPosition.y,
            a.initialZoomLevel,
            a
          );
      },
      Ja = function (a, b) {
        b[E] = u + a + "px, 0px" + v;
      },
      Ka = function (a, b) {
        if (!i.loop && b) {
          var c = m + (ta.x * ra - a) / ta.x,
            d = Math.round(a - tb.x);
          ((c < 0 && d > 0) || (c >= ac() - 1 && d < 0)) &&
            (a = tb.x + d * i.mainScrollEndFriction);
        }
        (tb.x = a), Ja(a, n);
      },
      La = function (a, b) {
        var c = ub[a] - sa[a];
        return oa[a] + na[a] + c - c * (b / t);
      },
      Ma = function (a, b) {
        (a.x = b.x), (a.y = b.y), b.id && (a.id = b.id);
      },
      Na = function (a) {
        (a.x = Math.round(a.x)), (a.y = Math.round(a.y));
      },
      Oa = null,
      Pa = function () {
        Oa &&
          (e.unbind(document, "mousemove", Pa),
          e.addClass(a, "pswp--has_mouse"),
          (i.mouseUsed = !0),
          Da("mouseUsed")),
          (Oa = setTimeout(function () {
            Oa = null;
          }, 100));
      },
      Qa = function () {
        e.bind(document, "keydown", f),
          N.transform && e.bind(f.scrollWrap, "click", f),
          i.mouseUsed || e.bind(document, "mousemove", Pa),
          e.bind(window, "resize scroll orientationchange", f),
          Da("bindEvents");
      },
      Ra = function () {
        e.unbind(window, "resize scroll orientationchange", f),
          e.unbind(window, "scroll", r.scroll),
          e.unbind(document, "keydown", f),
          e.unbind(document, "mousemove", Pa),
          N.transform && e.unbind(f.scrollWrap, "click", f),
          V && e.unbind(window, p, f),
          clearTimeout(O),
          Da("unbindEvents");
      },
      Sa = function (a, b) {
        var c = ic(f.currItem, qa, a);
        return b && (da = c), c;
      },
      Ta = function (a) {
        return a || (a = f.currItem), a.initialZoomLevel;
      },
      Ua = function (a) {
        return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
      },
      Va = function (a, b, c, d) {
        return d === f.currItem.initialZoomLevel
          ? ((c[a] = f.currItem.initialPosition[a]), !0)
          : ((c[a] = La(a, d)),
            c[a] > b.min[a]
              ? ((c[a] = b.min[a]), !0)
              : c[a] < b.max[a] && ((c[a] = b.max[a]), !0));
      },
      Wa = function () {
        if (E) {
          var b = N.perspective && !G;
          return (
            (u = "translate" + (b ? "3d(" : "(")),
            void (v = N.perspective ? ", 0px)" : ")")
          );
        }
        (E = "left"),
          e.addClass(a, "pswp--ie"),
          (Ja = function (a, b) {
            b.left = a + "px";
          }),
          (Ia = function (a) {
            var b = a.fitRatio > 1 ? 1 : a.fitRatio,
              c = a.container.style,
              d = b * a.w,
              e = b * a.h;
            (c.width = d + "px"),
              (c.height = e + "px"),
              (c.left = a.initialPosition.x + "px"),
              (c.top = a.initialPosition.y + "px");
          }),
          (Ha = function () {
            if (ea) {
              var a = ea,
                b = f.currItem,
                c = b.fitRatio > 1 ? 1 : b.fitRatio,
                d = c * b.w,
                e = c * b.h;
              (a.width = d + "px"),
                (a.height = e + "px"),
                (a.left = pa.x + "px"),
                (a.top = pa.y + "px");
            }
          });
      },
      Xa = function (a) {
        var b = "";
        i.escKey && 27 === a.keyCode
          ? (b = "close")
          : i.arrowKeys &&
            (37 === a.keyCode
              ? (b = "prev")
              : 39 === a.keyCode && (b = "next")),
          b &&
            (a.ctrlKey ||
              a.altKey ||
              a.shiftKey ||
              a.metaKey ||
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
              f[b]()));
      },
      Ya = function (a) {
        a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation());
      },
      Za = function () {
        f.setScrollOffset(0, e.getScrollY());
      },
      $a = {},
      _a = 0,
      ab = function (a) {
        $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]);
      },
      bb = function (a) {
        $a[a] && ab(a), $a[a] || (_a++, ($a[a] = {}));
      },
      cb = function () {
        for (var a in $a) $a.hasOwnProperty(a) && ab(a);
      },
      db = function (a, b, c, d, e, f, g) {
        var h,
          i = Ea();
        bb(a);
        var j = function () {
          if ($a[a]) {
            if (((h = Ea() - i), h >= d)) return ab(a), f(c), void (g && g());
            f((c - b) * e(h / d) + b), ($a[a].raf = H(j));
          }
        };
        j();
      },
      eb = {
        shout: Da,
        listen: Ca,
        viewportSize: qa,
        options: i,
        isMainScrollAnimating: function () {
          return fa;
        },
        getZoomLevel: function () {
          return s;
        },
        getCurrentIndex: function () {
          return m;
        },
        isDragging: function () {
          return V;
        },
        isZooming: function () {
          return aa;
        },
        setScrollOffset: function (a, b) {
          (sa.x = a), (M = sa.y = b), Da("updateScrollOffset", sa);
        },
        applyZoomPan: function (a, b, c, d) {
          (pa.x = b), (pa.y = c), (s = a), Ha(d);
        },
        init: function () {
          if (!j && !k) {
            var c;
            (f.framework = e),
              (f.template = a),
              (f.bg = e.getChildByClass(a, "pswp__bg")),
              (J = a.className),
              (j = !0),
              (N = e.detectFeatures()),
              (H = N.raf),
              (I = N.caf),
              (E = N.transform),
              (L = N.oldIE),
              (f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap")),
              (f.container = e.getChildByClass(
                f.scrollWrap,
                "pswp__container"
              )),
              (n = f.container.style),
              (f.itemHolders = y =
                [
                  { el: f.container.children[0], wrap: 0, index: -1 },
                  { el: f.container.children[1], wrap: 0, index: -1 },
                  { el: f.container.children[2], wrap: 0, index: -1 },
                ]),
              (y[0].el.style.display = y[2].el.style.display = "none"),
              Wa(),
              (r = {
                resize: f.updateSize,
                orientationchange: function () {
                  clearTimeout(O),
                    (O = setTimeout(function () {
                      qa.x !== f.scrollWrap.clientWidth && f.updateSize();
                    }, 500));
                },
                scroll: Za,
                keydown: Xa,
                click: Ya,
              });
            var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
            for (
              (N.animationName && N.transform && !d) ||
                (i.showAnimationDuration = i.hideAnimationDuration = 0),
                c = 0;
              c < wa.length;
              c++
            )
              f["init" + wa[c]]();
            if (b) {
              var g = (f.ui = new b(f, e));
              g.init();
            }
            Da("firstUpdate"),
              (m = m || i.index || 0),
              (isNaN(m) || m < 0 || m >= ac()) && (m = 0),
              (f.currItem = _b(m)),
              (N.isOldIOSPhone || N.isOldAndroid) && (va = !1),
              a.setAttribute("aria-hidden", "false"),
              i.modal &&
                (va
                  ? (a.style.position = "fixed")
                  : ((a.style.position = "absolute"),
                    (a.style.top = e.getScrollY() + "px"))),
              void 0 === M && (Da("initialLayout"), (M = K = e.getScrollY()));
            var l = "pswp--open ";
            for (
              i.mainClass && (l += i.mainClass + " "),
                i.showHideOpacity && (l += "pswp--animate_opacity "),
                l += G ? "pswp--touch" : "pswp--notouch",
                l += N.animationName ? " pswp--css_animation" : "",
                l += N.svg ? " pswp--svg" : "",
                e.addClass(a, l),
                f.updateSize(),
                o = -1,
                ua = null,
                c = 0;
              c < h;
              c++
            )
              Ja((c + o) * ta.x, y[c].el.style);
            L || e.bind(f.scrollWrap, q, f),
              Ca("initialZoomInEnd", function () {
                f.setContent(y[0], m - 1),
                  f.setContent(y[2], m + 1),
                  (y[0].el.style.display = y[2].el.style.display = "block"),
                  i.focus && a.focus(),
                  Qa();
              }),
              f.setContent(y[1], m),
              f.updateCurrItem(),
              Da("afterInit"),
              va ||
                (w = setInterval(function () {
                  _a ||
                    V ||
                    aa ||
                    s !== f.currItem.initialZoomLevel ||
                    f.updateSize();
                }, 1e3)),
              e.addClass(a, "pswp--visible");
          }
        },
        close: function () {
          j &&
            ((j = !1),
            (k = !0),
            Da("close"),
            Ra(),
            cc(f.currItem, null, !0, f.destroy));
        },
        destroy: function () {
          Da("destroy"),
            Xb && clearTimeout(Xb),
            a.setAttribute("aria-hidden", "true"),
            (a.className = J),
            w && clearInterval(w),
            e.unbind(f.scrollWrap, q, f),
            e.unbind(window, "scroll", f),
            zb(),
            cb(),
            (Ba = null);
        },
        panTo: function (a, b, c) {
          c ||
            (a > da.min.x ? (a = da.min.x) : a < da.max.x && (a = da.max.x),
            b > da.min.y ? (b = da.min.y) : b < da.max.y && (b = da.max.y)),
            (pa.x = a),
            (pa.y = b),
            Ha();
        },
        handleEvent: function (a) {
          (a = a || window.event), r[a.type] && r[a.type](a);
        },
        goTo: function (a) {
          a = Aa(a);
          var b = a - m;
          (ua = b),
            (m = a),
            (f.currItem = _b(m)),
            (ra -= b),
            Ka(ta.x * ra),
            cb(),
            (fa = !1),
            f.updateCurrItem();
        },
        next: function () {
          f.goTo(m + 1);
        },
        prev: function () {
          f.goTo(m - 1);
        },
        updateCurrZoomItem: function (a) {
          if ((a && Da("beforeChange", 0), y[1].el.children.length)) {
            var b = y[1].el.children[0];
            ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
          } else ea = null;
          (da = f.currItem.bounds),
            (t = s = f.currItem.initialZoomLevel),
            (pa.x = da.center.x),
            (pa.y = da.center.y),
            a && Da("afterChange");
        },
        invalidateCurrItems: function () {
          x = !0;
          for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0);
        },
        updateCurrItem: function (a) {
          if (0 !== ua) {
            var b,
              c = Math.abs(ua);
            if (!(a && c < 2)) {
              (f.currItem = _b(m)),
                (ya = !1),
                Da("beforeChange", ua),
                c >= h && ((o += ua + (ua > 0 ? -h : h)), (c = h));
              for (var d = 0; d < c; d++)
                ua > 0
                  ? ((b = y.shift()),
                    (y[h - 1] = b),
                    o++,
                    Ja((o + 2) * ta.x, b.el.style),
                    f.setContent(b, m - c + d + 1 + 1))
                  : ((b = y.pop()),
                    y.unshift(b),
                    o--,
                    Ja(o * ta.x, b.el.style),
                    f.setContent(b, m + c - d - 1 - 1));
              if (ea && 1 === Math.abs(ua)) {
                var e = _b(z);
                e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e));
              }
              (ua = 0), f.updateCurrZoomItem(), (z = m), Da("afterChange");
            }
          }
        },
        updateSize: function (b) {
          if (!va && i.modal) {
            var c = e.getScrollY();
            if (
              (M !== c && ((a.style.top = c + "px"), (M = c)),
              !b && xa.x === window.innerWidth && xa.y === window.innerHeight)
            )
              return;
            (xa.x = window.innerWidth),
              (xa.y = window.innerHeight),
              (a.style.height = xa.y + "px");
          }
          if (
            ((qa.x = f.scrollWrap.clientWidth),
            (qa.y = f.scrollWrap.clientHeight),
            Za(),
            (ta.x = qa.x + Math.round(qa.x * i.spacing)),
            (ta.y = qa.y),
            Ka(ta.x * ra),
            Da("beforeResize"),
            void 0 !== o)
          ) {
            for (var d, g, j, k = 0; k < h; k++)
              (d = y[k]),
                Ja((k + o) * ta.x, d.el.style),
                (j = m + k - 1),
                i.loop && ac() > 2 && (j = Aa(j)),
                (g = _b(j)),
                g && (x || g.needsUpdate || !g.bounds)
                  ? (f.cleanSlide(g),
                    f.setContent(d, j),
                    1 === k && ((f.currItem = g), f.updateCurrZoomItem(!0)),
                    (g.needsUpdate = !1))
                  : d.index === -1 && j >= 0 && f.setContent(d, j),
                g && g.container && (ic(g, qa), mc(g), Ia(g));
            x = !1;
          }
          (t = s = f.currItem.initialZoomLevel),
            (da = f.currItem.bounds),
            da && ((pa.x = da.center.x), (pa.y = da.center.y), Ha(!0)),
            Da("resize");
        },
        zoomTo: function (a, b, c, d, f) {
          b &&
            ((t = s),
            (ub.x = Math.abs(b.x) - pa.x),
            (ub.y = Math.abs(b.y) - pa.y),
            Ma(oa, pa));
          var g = Sa(a, !1),
            h = {};
          Va("x", g, h, a), Va("y", g, h, a);
          var i = s,
            j = { x: pa.x, y: pa.y };
          Na(h);
          var k = function (b) {
            1 === b
              ? ((s = a), (pa.x = h.x), (pa.y = h.y))
              : ((s = (a - i) * b + i),
                (pa.x = (h.x - j.x) * b + j.x),
                (pa.y = (h.y - j.y) * b + j.y)),
              f && f(b),
              Ha(1 === b);
          };
          c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
        },
      },
      fb = 30,
      gb = 10,
      hb = {},
      ib = {},
      jb = {},
      kb = {},
      lb = {},
      mb = [],
      nb = {},
      ob = [],
      pb = {},
      qb = 0,
      rb = ma(),
      sb = 0,
      tb = ma(),
      ub = ma(),
      vb = ma(),
      wb = function (a, b) {
        return a.x === b.x && a.y === b.y;
      },
      xb = function (a, b) {
        return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
      },
      yb = function (a, b) {
        return (
          (pb.x = Math.abs(a.x - b.x)),
          (pb.y = Math.abs(a.y - b.y)),
          Math.sqrt(pb.x * pb.x + pb.y * pb.y)
        );
      },
      zb = function () {
        Z && (I(Z), (Z = null));
      },
      Ab = function () {
        V && ((Z = H(Ab)), Qb());
      },
      Bb = function () {
        return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel);
      },
      Cb = function (a, b) {
        return (
          !(!a || a === document) &&
          !(
            a.getAttribute("class") &&
            a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
          ) &&
          (b(a) ? a : Cb(a.parentNode, b))
        );
      },
      Db = {},
      Eb = function (a, b) {
        return (
          (Db.prevent = !Cb(a.target, i.isClickableElement)),
          Da("preventDragEvent", a, b, Db),
          Db.prevent
        );
      },
      Fb = function (a, b) {
        return (b.x = a.pageX), (b.y = a.pageY), (b.id = a.identifier), b;
      },
      Gb = function (a, b, c) {
        (c.x = 0.5 * (a.x + b.x)), (c.y = 0.5 * (a.y + b.y));
      },
      Hb = function (a, b, c) {
        if (a - Q > 50) {
          var d = ob.length > 2 ? ob.shift() : {};
          (d.x = b), (d.y = c), ob.push(d), (Q = a);
        }
      },
      Ib = function () {
        var a = pa.y - f.currItem.initialPosition.y;
        return 1 - Math.abs(a / (qa.y / 2));
      },
      Jb = {},
      Kb = {},
      Lb = [],
      Mb = function (a) {
        for (; Lb.length > 0; ) Lb.pop();
        return (
          F
            ? ((la = 0),
              mb.forEach(function (a) {
                0 === la ? (Lb[0] = a) : 1 === la && (Lb[1] = a), la++;
              }))
            : a.type.indexOf("touch") > -1
            ? a.touches &&
              a.touches.length > 0 &&
              ((Lb[0] = Fb(a.touches[0], Jb)),
              a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb)))
            : ((Jb.x = a.pageX), (Jb.y = a.pageY), (Jb.id = ""), (Lb[0] = Jb)),
          Lb
        );
      },
      Nb = function (a, b) {
        var c,
          d,
          e,
          g,
          h = 0,
          j = pa[a] + b[a],
          k = b[a] > 0,
          l = tb.x + b.x,
          m = tb.x - nb.x;
        return (
          (c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1),
          (j = pa[a] + b[a] * c),
          (!i.allowPanToNext && s !== f.currItem.initialZoomLevel) ||
          (ea
            ? "h" !== ga ||
              "x" !== a ||
              X ||
              (k
                ? (j > da.min[a] &&
                    ((c = i.panEndFriction),
                    (h = da.min[a] - j),
                    (d = da.min[a] - oa[a])),
                  (d <= 0 || m < 0) && ac() > 1
                    ? ((g = l), m < 0 && l > nb.x && (g = nb.x))
                    : da.min.x !== da.max.x && (e = j))
                : (j < da.max[a] &&
                    ((c = i.panEndFriction),
                    (h = j - da.max[a]),
                    (d = oa[a] - da.max[a])),
                  (d <= 0 || m > 0) && ac() > 1
                    ? ((g = l), m > 0 && l < nb.x && (g = nb.x))
                    : da.min.x !== da.max.x && (e = j)))
            : (g = l),
          "x" !== a)
            ? void (fa || $ || (s > f.currItem.fitRatio && (pa[a] += b[a] * c)))
            : (void 0 !== g && (Ka(g, !0), ($ = g !== nb.x)),
              da.min.x !== da.max.x &&
                (void 0 !== e ? (pa.x = e) : $ || (pa.x += b.x * c)),
              void 0 !== g)
        );
      },
      Ob = function (a) {
        if (!("mousedown" === a.type && a.button > 0)) {
          if ($b) return void a.preventDefault();
          if (!U || "mousedown" !== a.type) {
            if ((Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F)) {
              var b = e.arraySearch(mb, a.pointerId, "id");
              b < 0 && (b = mb.length),
                (mb[b] = { x: a.pageX, y: a.pageY, id: a.pointerId });
            }
            var c = Mb(a),
              d = c.length;
            (_ = null),
              cb(),
              (V && 1 !== d) ||
                ((V = ha = !0),
                e.bind(window, p, f),
                (S = ka = ia = T = $ = Y = W = X = !1),
                (ga = null),
                Da("firstTouchStart", c),
                Ma(oa, pa),
                (na.x = na.y = 0),
                Ma(kb, c[0]),
                Ma(lb, kb),
                (nb.x = ta.x * ra),
                (ob = [{ x: kb.x, y: kb.y }]),
                (Q = P = Ea()),
                Sa(s, !0),
                zb(),
                Ab()),
              !aa &&
                d > 1 &&
                !fa &&
                !$ &&
                ((t = s),
                (X = !1),
                (aa = W = !0),
                (na.y = na.x = 0),
                Ma(oa, pa),
                Ma(hb, c[0]),
                Ma(ib, c[1]),
                Gb(hb, ib, vb),
                (ub.x = Math.abs(vb.x) - pa.x),
                (ub.y = Math.abs(vb.y) - pa.y),
                (ba = ca = yb(hb, ib)));
          }
        }
      },
      Pb = function (a) {
        if ((a.preventDefault(), F)) {
          var b = e.arraySearch(mb, a.pointerId, "id");
          if (b > -1) {
            var c = mb[b];
            (c.x = a.pageX), (c.y = a.pageY);
          }
        }
        if (V) {
          var d = Mb(a);
          if (ga || Y || aa) _ = d;
          else if (tb.x !== ta.x * ra) ga = "h";
          else {
            var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
            Math.abs(f) >= gb && ((ga = f > 0 ? "h" : "v"), (_ = d));
          }
        }
      },
      Qb = function () {
        if (_) {
          var a = _.length;
          if (0 !== a)
            if (
              (Ma(hb, _[0]),
              (jb.x = hb.x - kb.x),
              (jb.y = hb.y - kb.y),
              aa && a > 1)
            ) {
              if (
                ((kb.x = hb.x), (kb.y = hb.y), !jb.x && !jb.y && wb(_[1], ib))
              )
                return;
              Ma(ib, _[1]), X || ((X = !0), Da("zoomGestureStarted"));
              var b = yb(hb, ib),
                c = Vb(b);
              c >
                f.currItem.initialZoomLevel +
                  f.currItem.initialZoomLevel / 15 && (ka = !0);
              var d = 1,
                e = Ta(),
                g = Ua();
              if (c < e)
                if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                  var h = e - c,
                    j = 1 - h / (e / 1.2);
                  Fa(j), Da("onPinchClose", j), (ia = !0);
                } else
                  (d = (e - c) / e), d > 1 && (d = 1), (c = e - d * (e / 3));
              else
                c > g &&
                  ((d = (c - g) / (6 * e)), d > 1 && (d = 1), (c = g + d * e));
              d < 0 && (d = 0),
                (ba = b),
                Gb(hb, ib, rb),
                (na.x += rb.x - vb.x),
                (na.y += rb.y - vb.y),
                Ma(vb, rb),
                (pa.x = La("x", c)),
                (pa.y = La("y", c)),
                (S = c > s),
                (s = c),
                Ha();
            } else {
              if (!ga) return;
              if (
                (ha &&
                  ((ha = !1),
                  Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x),
                  Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)),
                (kb.x = hb.x),
                (kb.y = hb.y),
                0 === jb.x && 0 === jb.y)
              )
                return;
              if ("v" === ga && i.closeOnVerticalDrag && !Bb()) {
                (na.y += jb.y), (pa.y += jb.y);
                var k = Ib();
                return (T = !0), Da("onVerticalDrag", k), Fa(k), void Ha();
              }
              Hb(Ea(), hb.x, hb.y), (Y = !0), (da = f.currItem.bounds);
              var l = Nb("x", jb);
              l || (Nb("y", jb), Na(pa), Ha());
            }
        }
      },
      Rb = function (a) {
        if (N.isOldAndroid) {
          if (U && "mouseup" === a.type) return;
          a.type.indexOf("touch") > -1 &&
            (clearTimeout(U),
            (U = setTimeout(function () {
              U = 0;
            }, 600)));
        }
        Da("pointerUp"), Eb(a, !1) && a.preventDefault();
        var b;
        if (F) {
          var c = e.arraySearch(mb, a.pointerId, "id");
          if (c > -1)
            if (((b = mb.splice(c, 1)[0]), navigator.pointerEnabled))
              b.type = a.pointerType || "mouse";
            else {
              var d = { 4: "mouse", 2: "touch", 3: "pen" };
              (b.type = d[a.pointerType]),
                b.type || (b.type = a.pointerType || "mouse");
            }
        }
        var g,
          h = Mb(a),
          j = h.length;
        if (("mouseup" === a.type && (j = 0), 2 === j)) return (_ = null), !0;
        1 === j && Ma(lb, h[0]),
          0 !== j ||
            ga ||
            fa ||
            (b ||
              ("mouseup" === a.type
                ? (b = { x: a.pageX, y: a.pageY, type: "mouse" })
                : a.changedTouches &&
                  a.changedTouches[0] &&
                  (b = {
                    x: a.changedTouches[0].pageX,
                    y: a.changedTouches[0].pageY,
                    type: "touch",
                  })),
            Da("touchRelease", a, b));
        var k = -1;
        if (
          (0 === j &&
            ((V = !1),
            e.unbind(window, p, f),
            zb(),
            aa ? (k = 0) : sb !== -1 && (k = Ea() - sb)),
          (sb = 1 === j ? Ea() : -1),
          (g = k !== -1 && k < 150 ? "zoom" : "swipe"),
          aa &&
            j < 2 &&
            ((aa = !1),
            1 === j && (g = "zoomPointerUp"),
            Da("zoomGestureEnded")),
          (_ = null),
          Y || X || fa || T)
        )
          if ((cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T)) {
            var l = Ib();
            if (l < i.verticalDragRange) f.close();
            else {
              var m = pa.y,
                n = ja;
              db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
                (pa.y = (f.currItem.initialPosition.y - m) * a + m),
                  Fa((1 - n) * a + n),
                  Ha();
              }),
                Da("onVerticalDrag", 1);
            }
          } else {
            if (($ || fa) && 0 === j) {
              var o = Ub(g, R);
              if (o) return;
              g = "zoomPointerUp";
            }
            if (!fa)
              return "swipe" !== g
                ? void Wb()
                : void (!$ && s > f.currItem.fitRatio && Tb(R));
          }
      },
      Sb = function () {
        var a,
          b,
          c = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (d) {
              ob.length > 1
                ? ((a = Ea() - Q + 50), (b = ob[ob.length - 2][d]))
                : ((a = Ea() - P), (b = lb[d])),
                (c.lastFlickOffset[d] = kb[d] - b),
                (c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d])),
                c.lastFlickDist[d] > 20
                  ? (c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a)
                  : (c.lastFlickSpeed[d] = 0),
                Math.abs(c.lastFlickSpeed[d]) < 0.1 &&
                  (c.lastFlickSpeed[d] = 0),
                (c.slowDownRatio[d] = 0.95),
                (c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d]),
                (c.speedDecelerationRatio[d] = 1);
            },
            calculateOverBoundsAnimOffset: function (a, b) {
              c.backAnimStarted[a] ||
                (pa[a] > da.min[a]
                  ? (c.backAnimDestination[a] = da.min[a])
                  : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]),
                void 0 !== c.backAnimDestination[a] &&
                  ((c.slowDownRatio[a] = 0.7),
                  (c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a]),
                  c.speedDecelerationRatioAbs[a] < 0.05 &&
                    ((c.lastFlickSpeed[a] = 0),
                    (c.backAnimStarted[a] = !0),
                    db(
                      "bounceZoomPan" + a,
                      pa[a],
                      c.backAnimDestination[a],
                      b || 300,
                      e.easing.sine.out,
                      function (b) {
                        (pa[a] = b), Ha();
                      }
                    ))));
            },
            calculateAnimOffset: function (a) {
              c.backAnimStarted[a] ||
                ((c.speedDecelerationRatio[a] =
                  c.speedDecelerationRatio[a] *
                  (c.slowDownRatio[a] +
                    c.slowDownRatioReverse[a] -
                    (c.slowDownRatioReverse[a] * c.timeDiff) / 10)),
                (c.speedDecelerationRatioAbs[a] = Math.abs(
                  c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]
                )),
                (c.distanceOffset[a] =
                  c.lastFlickSpeed[a] *
                  c.speedDecelerationRatio[a] *
                  c.timeDiff),
                (pa[a] += c.distanceOffset[a]));
            },
            panAnimLoop: function () {
              if (
                $a.zoomPan &&
                (($a.zoomPan.raf = H(c.panAnimLoop)),
                (c.now = Ea()),
                (c.timeDiff = c.now - c.lastNow),
                (c.lastNow = c.now),
                c.calculateAnimOffset("x"),
                c.calculateAnimOffset("y"),
                Ha(),
                c.calculateOverBoundsAnimOffset("x"),
                c.calculateOverBoundsAnimOffset("y"),
                c.speedDecelerationRatioAbs.x < 0.05 &&
                  c.speedDecelerationRatioAbs.y < 0.05)
              )
                return (
                  (pa.x = Math.round(pa.x)),
                  (pa.y = Math.round(pa.y)),
                  Ha(),
                  void ab("zoomPan")
                );
            },
          };
        return c;
      },
      Tb = function (a) {
        return (
          a.calculateSwipeSpeed("y"),
          (da = f.currItem.bounds),
          (a.backAnimDestination = {}),
          (a.backAnimStarted = {}),
          Math.abs(a.lastFlickSpeed.x) <= 0.05 &&
          Math.abs(a.lastFlickSpeed.y) <= 0.05
            ? ((a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y =
                0),
              a.calculateOverBoundsAnimOffset("x"),
              a.calculateOverBoundsAnimOffset("y"),
              !0)
            : (bb("zoomPan"), (a.lastNow = Ea()), void a.panAnimLoop())
        );
      },
      Ub = function (a, b) {
        var c;
        fa || (qb = m);
        var d;
        if ("swipe" === a) {
          var g = kb.x - lb.x,
            h = b.lastFlickDist.x < 10;
          g > fb && (h || b.lastFlickOffset.x > 20)
            ? (d = -1)
            : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1);
        }
        var j;
        d &&
          ((m += d),
          m < 0
            ? ((m = i.loop ? ac() - 1 : 0), (j = !0))
            : m >= ac() && ((m = i.loop ? 0 : ac() - 1), (j = !0)),
          (j && !i.loop) || ((ua += d), (ra -= d), (c = !0)));
        var k,
          l = ta.x * ra,
          n = Math.abs(l - tb.x);
        return (
          c || l > tb.x == b.lastFlickSpeed.x > 0
            ? ((k =
                Math.abs(b.lastFlickSpeed.x) > 0
                  ? n / Math.abs(b.lastFlickSpeed.x)
                  : 333),
              (k = Math.min(k, 400)),
              (k = Math.max(k, 250)))
            : (k = 333),
          qb === m && (c = !1),
          (fa = !0),
          Da("mainScrollAnimStart"),
          db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function () {
            cb(),
              (fa = !1),
              (qb = -1),
              (c || qb !== m) && f.updateCurrItem(),
              Da("mainScrollAnimComplete");
          }),
          c && f.updateCurrItem(!0),
          c
        );
      },
      Vb = function (a) {
        return (1 / ca) * a * t;
      },
      Wb = function () {
        var a = s,
          b = Ta(),
          c = Ua();
        s < b ? (a = b) : s > c && (a = c);
        var d,
          g = 1,
          h = ja;
        return ia && !S && !ka && s < b
          ? (f.close(), !0)
          : (ia &&
              (d = function (a) {
                Fa((g - h) * a + h);
              }),
            f.zoomTo(a, 0, 200, e.easing.cubic.out, d),
            !0);
      };
    za("Gestures", {
      publicMethods: {
        initGestures: function () {
          var a = function (a, b, c, d, e) {
            (A = a + b), (B = a + c), (C = a + d), (D = e ? a + e : "");
          };
          (F = N.pointerEvent),
            F && N.touch && (N.touch = !1),
            F
              ? navigator.pointerEnabled
                ? a("pointer", "down", "move", "up", "cancel")
                : a("MSPointer", "Down", "Move", "Up", "Cancel")
              : N.touch
              ? (a("touch", "start", "move", "end", "cancel"), (G = !0))
              : a("mouse", "down", "move", "up"),
            (p = B + " " + C + " " + D),
            (q = A),
            F &&
              !G &&
              (G =
                navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
            (f.likelyTouchDevice = G),
            (r[A] = Ob),
            (r[B] = Pb),
            (r[C] = Rb),
            D && (r[D] = r[C]),
            N.touch &&
              ((q += " mousedown"),
              (p += " mousemove mouseup"),
              (r.mousedown = r[A]),
              (r.mousemove = r[B]),
              (r.mouseup = r[C])),
            G || (i.allowPanToNext = !1);
        },
      },
    });
    var Xb,
      Yb,
      Zb,
      $b,
      _b,
      ac,
      bc,
      cc = function (b, c, d, g) {
        Xb && clearTimeout(Xb), ($b = !0), (Zb = !0);
        var h;
        b.initialLayout
          ? ((h = b.initialLayout), (b.initialLayout = null))
          : (h = i.getThumbBoundsFn && i.getThumbBoundsFn(m));
        var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
          k = function () {
            ab("initialZoom"),
              d
                ? (f.template.removeAttribute("style"),
                  f.bg.removeAttribute("style"))
                : (Fa(1),
                  c && (c.style.display = "block"),
                  e.addClass(a, "pswp--animated-in"),
                  Da("initialZoom" + (d ? "OutEnd" : "InEnd"))),
              g && g(),
              ($b = !1);
          };
        if (!j || !h || void 0 === h.x)
          return (
            Da("initialZoom" + (d ? "Out" : "In")),
            (s = b.initialZoomLevel),
            Ma(pa, b.initialPosition),
            Ha(),
            (a.style.opacity = d ? 0 : 1),
            Fa(1),
            void (j
              ? setTimeout(function () {
                  k();
                }, j)
              : k())
          );
        var n = function () {
          var c = l,
            g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
          b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"),
            d ||
              ((s = h.w / b.w),
              (pa.x = h.x),
              (pa.y = h.y - K),
              (f[g ? "template" : "bg"].style.opacity = 0.001),
              Ha()),
            bb("initialZoom"),
            d && !c && e.removeClass(a, "pswp--animated-in"),
            g &&
              (d
                ? e[(c ? "remove" : "add") + "Class"](
                    a,
                    "pswp--animate_opacity"
                  )
                : setTimeout(function () {
                    e.addClass(a, "pswp--animate_opacity");
                  }, 30)),
            (Xb = setTimeout(
              function () {
                if ((Da("initialZoom" + (d ? "Out" : "In")), d)) {
                  var f = h.w / b.w,
                    i = { x: pa.x, y: pa.y },
                    l = s,
                    m = ja,
                    n = function (b) {
                      1 === b
                        ? ((s = f), (pa.x = h.x), (pa.y = h.y - M))
                        : ((s = (f - l) * b + l),
                          (pa.x = (h.x - i.x) * b + i.x),
                          (pa.y = (h.y - M - i.y) * b + i.y)),
                        Ha(),
                        g ? (a.style.opacity = 1 - b) : Fa(m - b * m);
                    };
                  c
                    ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k)
                    : (n(1), (Xb = setTimeout(k, j + 20)));
                } else
                  (s = b.initialZoomLevel),
                    Ma(pa, b.initialPosition),
                    Ha(),
                    Fa(1),
                    g ? (a.style.opacity = 1) : Fa(1),
                    (Xb = setTimeout(k, j + 20));
              },
              d ? 25 : 90
            ));
        };
        n();
      },
      dc = {},
      ec = [],
      fc = {
        index: 0,
        errorMsg:
          '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function () {
          return Yb.length;
        },
      },
      gc = function () {
        return {
          center: { x: 0, y: 0 },
          max: { x: 0, y: 0 },
          min: { x: 0, y: 0 },
        };
      },
      hc = function (a, b, c) {
        var d = a.bounds;
        (d.center.x = Math.round((dc.x - b) / 2)),
          (d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top),
          (d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x),
          (d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y),
          (d.min.x = b > dc.x ? 0 : d.center.x),
          (d.min.y = c > dc.y ? a.vGap.top : d.center.y);
      },
      ic = function (a, b, c) {
        if (a.src && !a.loadError) {
          var d = !c;
          if (
            (d &&
              (a.vGap || (a.vGap = { top: 0, bottom: 0 }),
              Da("parseVerticalMargin", a)),
            (dc.x = b.x),
            (dc.y = b.y - a.vGap.top - a.vGap.bottom),
            d)
          ) {
            var e = dc.x / a.w,
              f = dc.y / a.h;
            a.fitRatio = e < f ? e : f;
            var g = i.scaleMode;
            "orig" === g ? (c = 1) : "fit" === g && (c = a.fitRatio),
              c > 1 && (c = 1),
              (a.initialZoomLevel = c),
              a.bounds || (a.bounds = gc());
          }
          if (!c) return;
          return (
            hc(a, a.w * c, a.h * c),
            d &&
              c === a.initialZoomLevel &&
              (a.initialPosition = a.bounds.center),
            a.bounds
          );
        }
        return (
          (a.w = a.h = 0),
          (a.initialZoomLevel = a.fitRatio = 1),
          (a.bounds = gc()),
          (a.initialPosition = a.bounds.center),
          a.bounds
        );
      },
      jc = function (a, b, c, d, e, g) {
        b.loadError ||
          (d &&
            ((b.imageAppended = !0),
            mc(b, d, b === f.currItem && ya),
            c.appendChild(d),
            g &&
              setTimeout(function () {
                b &&
                  b.loaded &&
                  b.placeholder &&
                  ((b.placeholder.style.display = "none"),
                  (b.placeholder = null));
              }, 500)));
      },
      kc = function (a) {
        (a.loading = !0), (a.loaded = !1);
        var b = (a.img = e.createEl("pswp__img", "img")),
          c = function () {
            (a.loading = !1),
              (a.loaded = !0),
              a.loadComplete ? a.loadComplete(a) : (a.img = null),
              (b.onload = b.onerror = null),
              (b = null);
          };
        return (
          (b.onload = c),
          (b.onerror = function () {
            (a.loadError = !0), c();
          }),
          (b.src = a.src),
          b
        );
      },
      lc = function (a, b) {
        if (a.src && a.loadError && a.container)
          return (
            b && (a.container.innerHTML = ""),
            (a.container.innerHTML = i.errorMsg.replace("%url%", a.src)),
            !0
          );
      },
      mc = function (a, b, c) {
        if (a.src) {
          b || (b = a.container.lastChild);
          var d = c ? a.w : Math.round(a.w * a.fitRatio),
            e = c ? a.h : Math.round(a.h * a.fitRatio);
          a.placeholder &&
            !a.loaded &&
            ((a.placeholder.style.width = d + "px"),
            (a.placeholder.style.height = e + "px")),
            (b.style.width = d + "px"),
            (b.style.height = e + "px");
        }
      },
      nc = function () {
        if (ec.length) {
          for (var a, b = 0; b < ec.length; b++)
            (a = ec[b]),
              a.holder.index === a.index &&
                jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
          ec = [];
        }
      };
    za("Controller", {
      publicMethods: {
        lazyLoadItem: function (a) {
          a = Aa(a);
          var b = _b(a);
          b &&
            ((!b.loaded && !b.loading) || x) &&
            (Da("gettingData", a, b), b.src && kc(b));
        },
        initController: function () {
          e.extend(i, fc, !0),
            (f.items = Yb = c),
            (_b = f.getItemAt),
            (ac = i.getNumItemsFn),
            (bc = i.loop),
            ac() < 3 && (i.loop = !1),
            Ca("beforeChange", function (a) {
              var b,
                c = i.preload,
                d = null === a || a >= 0,
                e = Math.min(c[0], ac()),
                g = Math.min(c[1], ac());
              for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
              for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b);
            }),
            Ca("initialLayout", function () {
              f.currItem.initialLayout =
                i.getThumbBoundsFn && i.getThumbBoundsFn(m);
            }),
            Ca("mainScrollAnimComplete", nc),
            Ca("initialZoomInEnd", nc),
            Ca("destroy", function () {
              for (var a, b = 0; b < Yb.length; b++)
                (a = Yb[b]),
                  a.container && (a.container = null),
                  a.placeholder && (a.placeholder = null),
                  a.img && (a.img = null),
                  a.preloader && (a.preloader = null),
                  a.loadError && (a.loaded = a.loadError = !1);
              ec = null;
            });
        },
        getItemAt: function (a) {
          return a >= 0 && void 0 !== Yb[a] && Yb[a];
        },
        allowProgressiveImg: function () {
          return (
            i.forceProgressiveLoading ||
            !G ||
            i.mouseUsed ||
            screen.width > 1200
          );
        },
        setContent: function (a, b) {
          i.loop && (b = Aa(b));
          var c = f.getItemAt(a.index);
          c && (c.container = null);
          var d,
            g = f.getItemAt(b);
          if (!g) return void (a.el.innerHTML = "");
          Da("gettingData", b, g), (a.index = b), (a.item = g);
          var h = (g.container = e.createEl("pswp__zoom-wrap"));
          if (
            (!g.src &&
              g.html &&
              (g.html.tagName ? h.appendChild(g.html) : (h.innerHTML = g.html)),
            lc(g),
            ic(g, qa),
            !g.src || g.loadError || g.loaded)
          )
            g.src &&
              !g.loadError &&
              ((d = e.createEl("pswp__img", "img")),
              (d.style.opacity = 1),
              (d.src = g.src),
              mc(g, d),
              jc(b, g, h, d, !0));
          else {
            if (
              ((g.loadComplete = function (c) {
                if (j) {
                  if (a && a.index === b) {
                    if (lc(c, !0))
                      return (
                        (c.loadComplete = c.img = null),
                        ic(c, qa),
                        Ia(c),
                        void (a.index === m && f.updateCurrZoomItem())
                      );
                    c.imageAppended
                      ? !$b &&
                        c.placeholder &&
                        ((c.placeholder.style.display = "none"),
                        (c.placeholder = null))
                      : N.transform && (fa || $b)
                      ? ec.push({
                          item: c,
                          baseDiv: h,
                          img: c.img,
                          index: b,
                          holder: a,
                          clearPlaceholder: !0,
                        })
                      : jc(b, c, h, c.img, fa || $b, !0);
                  }
                  (c.loadComplete = null),
                    (c.img = null),
                    Da("imageLoadComplete", b, c);
                }
              }),
              e.features.transform)
            ) {
              var k = "pswp__img pswp__img--placeholder";
              k += g.msrc ? "" : " pswp__img--placeholder--blank";
              var l = e.createEl(k, g.msrc ? "img" : "");
              g.msrc && (l.src = g.msrc),
                mc(g, l),
                h.appendChild(l),
                (g.placeholder = l);
            }
            g.loading || kc(g),
              f.allowProgressiveImg() &&
                (!Zb && N.transform
                  ? ec.push({
                      item: g,
                      baseDiv: h,
                      img: g.img,
                      index: b,
                      holder: a,
                    })
                  : jc(b, g, h, g.img, !0, !0));
          }
          Zb || b !== m ? Ia(g) : ((ea = h.style), cc(g, d || g.img)),
            (a.el.innerHTML = ""),
            a.el.appendChild(h);
        },
        cleanSlide: function (a) {
          a.img && (a.img.onload = a.img.onerror = null),
            (a.loaded = a.loading = a.img = a.imageAppended = !1);
        },
      },
    });
    var oc,
      pc = {},
      qc = function (a, b, c) {
        var d = document.createEvent("CustomEvent"),
          e = {
            origEvent: a,
            target: a.target,
            releasePoint: b,
            pointerType: c || "touch",
          };
        d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
      };
    za("Tap", {
      publicMethods: {
        initTap: function () {
          Ca("firstTouchStart", f.onTapStart),
            Ca("touchRelease", f.onTapRelease),
            Ca("destroy", function () {
              (pc = {}), (oc = null);
            });
        },
        onTapStart: function (a) {
          a.length > 1 && (clearTimeout(oc), (oc = null));
        },
        onTapRelease: function (a, b) {
          if (b && !Y && !W && !_a) {
            var c = b;
            if (oc && (clearTimeout(oc), (oc = null), xb(c, pc)))
              return void Da("doubleTap", c);
            if ("mouse" === b.type) return void qc(a, b, "mouse");
            var d = a.target.tagName.toUpperCase();
            if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap"))
              return void qc(a, b);
            Ma(pc, c),
              (oc = setTimeout(function () {
                qc(a, b), (oc = null);
              }, 300));
          }
        },
      },
    });
    var rc;
    za("DesktopZoom", {
      publicMethods: {
        initDesktopZoom: function () {
          L ||
            (G
              ? Ca("mouseUsed", function () {
                  f.setupDesktopZoom();
                })
              : f.setupDesktopZoom(!0));
        },
        setupDesktopZoom: function (b) {
          rc = {};
          var c = "wheel mousewheel DOMMouseScroll";
          Ca("bindEvents", function () {
            e.bind(a, c, f.handleMouseWheel);
          }),
            Ca("unbindEvents", function () {
              rc && e.unbind(a, c, f.handleMouseWheel);
            }),
            (f.mouseZoomedIn = !1);
          var d,
            g = function () {
              f.mouseZoomedIn &&
                (e.removeClass(a, "pswp--zoomed-in"), (f.mouseZoomedIn = !1)),
                s < 1
                  ? e.addClass(a, "pswp--zoom-allowed")
                  : e.removeClass(a, "pswp--zoom-allowed"),
                h();
            },
            h = function () {
              d && (e.removeClass(a, "pswp--dragging"), (d = !1));
            };
          Ca("resize", g),
            Ca("afterChange", g),
            Ca("pointerDown", function () {
              f.mouseZoomedIn && ((d = !0), e.addClass(a, "pswp--dragging"));
            }),
            Ca("pointerUp", h),
            b || g();
        },
        handleMouseWheel: function (a) {
          if (s <= f.currItem.fitRatio)
            return (
              i.modal &&
                (!i.closeOnScroll || _a || V
                  ? a.preventDefault()
                  : E && Math.abs(a.deltaY) > 2 && ((l = !0), f.close())),
              !0
            );
          if ((a.stopPropagation(), (rc.x = 0), "deltaX" in a))
            1 === a.deltaMode
              ? ((rc.x = 18 * a.deltaX), (rc.y = 18 * a.deltaY))
              : ((rc.x = a.deltaX), (rc.y = a.deltaY));
          else if ("wheelDelta" in a)
            a.wheelDeltaX && (rc.x = -0.16 * a.wheelDeltaX),
              a.wheelDeltaY
                ? (rc.y = -0.16 * a.wheelDeltaY)
                : (rc.y = -0.16 * a.wheelDelta);
          else {
            if (!("detail" in a)) return;
            rc.y = a.detail;
          }
          Sa(s, !0);
          var b = pa.x - rc.x,
            c = pa.y - rc.y;
          (i.modal ||
            (b <= da.min.x &&
              b >= da.max.x &&
              c <= da.min.y &&
              c >= da.max.y)) &&
            a.preventDefault(),
            f.panTo(b, c);
        },
        toggleDesktopZoom: function (b) {
          b = b || { x: qa.x / 2 + sa.x, y: qa.y / 2 + sa.y };
          var c = i.getDoubleTapZoom(!0, f.currItem),
            d = s === c;
          (f.mouseZoomedIn = !d),
            f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333),
            e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in");
        },
      },
    });
    var sc,
      tc,
      uc,
      vc,
      wc,
      xc,
      yc,
      zc,
      Ac,
      Bc,
      Cc,
      Dc,
      Ec = { history: !0, galleryUID: 1 },
      Fc = function () {
        return Cc.hash.substring(1);
      },
      Gc = function () {
        sc && clearTimeout(sc), uc && clearTimeout(uc);
      },
      Hc = function () {
        var a = Fc(),
          b = {};
        if (a.length < 5) return b;
        var c,
          d = a.split("&");
        for (c = 0; c < d.length; c++)
          if (d[c]) {
            var e = d[c].split("=");
            e.length < 2 || (b[e[0]] = e[1]);
          }
        if (i.galleryPIDs) {
          var f = b.pid;
          for (b.pid = 0, c = 0; c < Yb.length; c++)
            if (Yb[c].pid === f) {
              b.pid = c;
              break;
            }
        } else b.pid = parseInt(b.pid, 10) - 1;
        return b.pid < 0 && (b.pid = 0), b;
      },
      Ic = function () {
        if ((uc && clearTimeout(uc), _a || V))
          return void (uc = setTimeout(Ic, 500));
        vc ? clearTimeout(tc) : (vc = !0);
        var a = m + 1,
          b = _b(m);
        b.hasOwnProperty("pid") && (a = b.pid);
        var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
        zc || (Cc.hash.indexOf(c) === -1 && (Bc = !0));
        var d = Cc.href.split("#")[0] + "#" + c;
        Dc
          ? "#" + c !== window.location.hash &&
            history[zc ? "replaceState" : "pushState"]("", document.title, d)
          : zc
          ? Cc.replace(d)
          : (Cc.hash = c),
          (zc = !0),
          (tc = setTimeout(function () {
            vc = !1;
          }, 60));
      };
    za("History", {
      publicMethods: {
        initHistory: function () {
          if ((e.extend(i, Ec, !0), i.history)) {
            (Cc = window.location),
              (Bc = !1),
              (Ac = !1),
              (zc = !1),
              (yc = Fc()),
              (Dc = "pushState" in history),
              yc.indexOf("gid=") > -1 &&
                ((yc = yc.split("&gid=")[0]), (yc = yc.split("?gid=")[0])),
              Ca("afterChange", f.updateURL),
              Ca("unbindEvents", function () {
                e.unbind(window, "hashchange", f.onHashChange);
              });
            var a = function () {
              (xc = !0),
                Ac ||
                  (Bc
                    ? history.back()
                    : yc
                    ? (Cc.hash = yc)
                    : Dc
                    ? history.pushState(
                        "",
                        document.title,
                        Cc.pathname + Cc.search
                      )
                    : (Cc.hash = "")),
                Gc();
            };
            Ca("unbindEvents", function () {
              l && a();
            }),
              Ca("destroy", function () {
                xc || a();
              }),
              Ca("firstUpdate", function () {
                m = Hc().pid;
              });
            var b = yc.indexOf("pid=");
            b > -1 &&
              ((yc = yc.substring(0, b)),
              "&" === yc.slice(-1) && (yc = yc.slice(0, -1))),
              setTimeout(function () {
                j && e.bind(window, "hashchange", f.onHashChange);
              }, 40);
          }
        },
        onHashChange: function () {
          return Fc() === yc
            ? ((Ac = !0), void f.close())
            : void (vc || ((wc = !0), f.goTo(Hc().pid), (wc = !1)));
        },
        updateURL: function () {
          Gc(), wc || (zc ? (sc = setTimeout(Ic, 800)) : Ic());
        },
      },
    }),
      e.extend(f, eb);
  };
  return a;
});
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(b)
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.PhotoSwipeUI_Default = b());
})(this, function () {
  "use strict";
  var a = function (a, b) {
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v = this,
      w = !1,
      x = !0,
      y = !0,
      z = {
        barsSize: { top: 44, bottom: "auto" },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (a, b) {
          return a.title
            ? ((b.children[0].innerHTML = a.title), !0)
            : ((b.children[0].innerHTML = ""), !1);
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [
          {
            id: "facebook",
            label: "Share on Facebook",
            url: "/www.facebook.com/sharer/sharer.php?u={{url}}",
          },
          {
            id: "twitter",
            label: "Tweet",
            url: "/twitter.com/intent/tweet?text={{text}}&url={{url}}",
          },
          {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
          },
          {
            id: "download",
            label: "Download image",
            url: "{{raw_image_url}}",
            download: !0,
          },
        ],
        getImageURLForShare: function () {
          return a.currItem.src || "";
        },
        getPageURLForShare: function () {
          return window.location.href;
        },
        getTextForShare: function () {
          return a.currItem.title || "";
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200,
      },
      A = function (a) {
        if (r) return !0;
        (a = a || window.event), q.timeToIdle && q.mouseUsed && !k && K();
        for (
          var c,
            d,
            e = a.target || a.srcElement,
            f = e.getAttribute("class") || "",
            g = 0;
          g < S.length;
          g++
        )
          (c = S[g]),
            c.onTap &&
              f.indexOf("pswp__" + c.name) > -1 &&
              (c.onTap(), (d = !0));
        if (d) {
          a.stopPropagation && a.stopPropagation(), (r = !0);
          var h = b.features.isOldAndroid ? 600 : 30;
          s = setTimeout(function () {
            r = !1;
          }, h);
        }
      },
      B = function () {
        return (
          !a.likelyTouchDevice ||
          q.mouseUsed ||
          screen.width > q.fitControlsWidth
        );
      },
      C = function (a, c, d) {
        b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
      },
      D = function () {
        var a = 1 === q.getNumItemsFn();
        a !== p && (C(d, "ui--one-slide", a), (p = a));
      },
      E = function () {
        C(i, "share-modal--hidden", y);
      },
      F = function () {
        return (
          (y = !y),
          y
            ? (b.removeClass(i, "pswp__share-modal--fade-in"),
              setTimeout(function () {
                y && E();
              }, 300))
            : (E(),
              setTimeout(function () {
                y || b.addClass(i, "pswp__share-modal--fade-in");
              }, 30)),
          y || H(),
          !1
        );
      },
      G = function (b) {
        b = b || window.event;
        var c = b.target || b.srcElement;
        return (
          a.shout("shareLinkClick", b, c),
          !!c.href &&
            (!!c.hasAttribute("download") ||
              (window.open(
                c.href,
                "pswp_share",
                "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                  (window.screen ? Math.round(screen.width / 2 - 275) : 100)
              ),
              y || F(),
              !1))
        );
      },
      H = function () {
        for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)
          (a = q.shareButtons[g]),
            (c = q.getImageURLForShare(a)),
            (d = q.getPageURLForShare(a)),
            (e = q.getTextForShare(a)),
            (b = a.url
              .replace("{{url}}", encodeURIComponent(d))
              .replace("{{image_url}}", encodeURIComponent(c))
              .replace("{{raw_image_url}}", c)
              .replace("{{text}}", encodeURIComponent(e))),
            (f +=
              '<a href="' +
              b +
              '" target="_blank" class="pswp__share--' +
              a.id +
              '"' +
              (a.download ? "download" : "") +
              ">" +
              a.label +
              "</a>"),
            q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
        (i.children[0].innerHTML = f), (i.children[0].onclick = G);
      },
      I = function (a) {
        for (var c = 0; c < q.closeElClasses.length; c++)
          if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
      },
      J = 0,
      K = function () {
        clearTimeout(u), (J = 0), k && v.setIdle(!1);
      },
      L = function (a) {
        a = a ? a : window.event;
        var b = a.relatedTarget || a.toElement;
        (b && "HTML" !== b.nodeName) ||
          (clearTimeout(u),
          (u = setTimeout(function () {
            v.setIdle(!0);
          }, q.timeToIdleOutside)));
      },
      M = function () {
        q.fullscreenEl &&
          !b.features.isOldAndroid &&
          (c || (c = v.getFullscreenAPI()),
          c
            ? (b.bind(document, c.eventK, v.updateFullscreen),
              v.updateFullscreen(),
              b.addClass(a.template, "pswp--supports-fs"))
            : b.removeClass(a.template, "pswp--supports-fs"));
      },
      N = function () {
        q.preloaderEl &&
          (O(!0),
          l("beforeChange", function () {
            clearTimeout(o),
              (o = setTimeout(function () {
                a.currItem && a.currItem.loading
                  ? (!a.allowProgressiveImg() ||
                      (a.currItem.img && !a.currItem.img.naturalWidth)) &&
                    O(!1)
                  : O(!0);
              }, q.loadingIndicatorDelay));
          }),
          l("imageLoadComplete", function (b, c) {
            a.currItem === c && O(!0);
          }));
      },
      O = function (a) {
        n !== a && (C(m, "preloader--active", !a), (n = a));
      },
      P = function (a) {
        var c = a.vGap;
        if (B()) {
          var g = q.barsSize;
          if (q.captionEl && "auto" === g.bottom)
            if (
              (f ||
                ((f = b.createEl("pswp__caption pswp__caption--fake")),
                f.appendChild(b.createEl("pswp__caption__center")),
                d.insertBefore(f, e),
                b.addClass(d, "pswp__ui--fit")),
              q.addCaptionHTMLFn(a, f, !0))
            ) {
              var h = f.clientHeight;
              c.bottom = parseInt(h, 10) || 44;
            } else c.bottom = g.top;
          else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
          c.top = g.top;
        } else c.top = c.bottom = 0;
      },
      Q = function () {
        q.timeToIdle &&
          l("mouseUsed", function () {
            b.bind(document, "mousemove", K),
              b.bind(document, "mouseout", L),
              (t = setInterval(function () {
                J++, 2 === J && v.setIdle(!0);
              }, q.timeToIdle / 2));
          });
      },
      R = function () {
        l("onVerticalDrag", function (a) {
          x && a < 0.95
            ? v.hideControls()
            : !x && a >= 0.95 && v.showControls();
        });
        var a;
        l("onPinchClose", function (b) {
          x && b < 0.9
            ? (v.hideControls(), (a = !0))
            : a && !x && b > 0.9 && v.showControls();
        }),
          l("zoomGestureEnded", function () {
            (a = !1), a && !x && v.showControls();
          });
      },
      S = [
        {
          name: "caption",
          option: "captionEl",
          onInit: function (a) {
            e = a;
          },
        },
        {
          name: "share-modal",
          option: "shareEl",
          onInit: function (a) {
            i = a;
          },
          onTap: function () {
            F();
          },
        },
        {
          name: "button--share",
          option: "shareEl",
          onInit: function (a) {
            h = a;
          },
          onTap: function () {
            F();
          },
        },
        { name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom },
        {
          name: "counter",
          option: "counterEl",
          onInit: function (a) {
            g = a;
          },
        },
        { name: "button--close", option: "closeEl", onTap: a.close },
        { name: "button--arrow--left", option: "arrowEl", onTap: a.prev },
        { name: "button--arrow--right", option: "arrowEl", onTap: a.next },
        {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            c.isFullscreen() ? c.exit() : c.enter();
          },
        },
        {
          name: "preloader",
          option: "preloaderEl",
          onInit: function (a) {
            m = a;
          },
        },
      ],
      T = function () {
        var a,
          c,
          e,
          f = function (d) {
            if (d)
              for (var f = d.length, g = 0; g < f; g++) {
                (a = d[g]), (c = a.className);
                for (var h = 0; h < S.length; h++)
                  (e = S[h]),
                    c.indexOf("pswp__" + e.name) > -1 &&
                      (q[e.option]
                        ? (b.removeClass(a, "pswp__element--disabled"),
                          e.onInit && e.onInit(a))
                        : b.addClass(a, "pswp__element--disabled"));
              }
          };
        f(d.children);
        var g = b.getChildByClass(d, "pswp__top-bar");
        g && f(g.children);
      };
    (v.init = function () {
      b.extend(a.options, z, !0),
        (q = a.options),
        (d = b.getChildByClass(a.scrollWrap, "pswp__ui")),
        (l = a.listen),
        R(),
        l("beforeChange", v.update),
        l("doubleTap", function (b) {
          var c = a.currItem.initialZoomLevel;
          a.getZoomLevel() !== c
            ? a.zoomTo(c, b, 333)
            : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333);
        }),
        l("preventDragEvent", function (a, b, c) {
          var d = a.target || a.srcElement;
          d &&
            d.getAttribute("class") &&
            a.type.indexOf("mouse") > -1 &&
            (d.getAttribute("class").indexOf("__caption") > 0 ||
              /(SMALL|STRONG|EM)/i.test(d.tagName)) &&
            (c.prevent = !1);
        }),
        l("bindEvents", function () {
          b.bind(d, "pswpTap click", A),
            b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap),
            a.likelyTouchDevice ||
              b.bind(a.scrollWrap, "mouseover", v.onMouseOver);
        }),
        l("unbindEvents", function () {
          y || F(),
            t && clearInterval(t),
            b.unbind(document, "mouseout", L),
            b.unbind(document, "mousemove", K),
            b.unbind(d, "pswpTap click", A),
            b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap),
            b.unbind(a.scrollWrap, "mouseover", v.onMouseOver),
            c &&
              (b.unbind(document, c.eventK, v.updateFullscreen),
              c.isFullscreen() && ((q.hideAnimationDuration = 0), c.exit()),
              (c = null));
        }),
        l("destroy", function () {
          q.captionEl &&
            (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")),
            i && (i.children[0].onclick = null),
            b.removeClass(d, "pswp__ui--over-close"),
            b.addClass(d, "pswp__ui--hidden"),
            v.setIdle(!1);
        }),
        q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"),
        l("initialZoomIn", function () {
          q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
        }),
        l("initialZoomOut", function () {
          b.addClass(d, "pswp__ui--hidden");
        }),
        l("parseVerticalMargin", P),
        T(),
        q.shareEl && h && i && (y = !0),
        D(),
        Q(),
        M(),
        N();
    }),
      (v.setIdle = function (a) {
        (k = a), C(d, "ui--idle", a);
      }),
      (v.update = function () {
        x && a.currItem
          ? (v.updateIndexIndicator(),
            q.captionEl &&
              (q.addCaptionHTMLFn(a.currItem, e),
              C(e, "caption--empty", !a.currItem.title)),
            (w = !0))
          : (w = !1),
          y || F(),
          D();
      }),
      (v.updateFullscreen = function (d) {
        d &&
          setTimeout(function () {
            a.setScrollOffset(0, b.getScrollY());
          }, 50),
          b[(c.isFullscreen() ? "add" : "remove") + "Class"](
            a.template,
            "pswp--fs"
          );
      }),
      (v.updateIndexIndicator = function () {
        q.counterEl &&
          (g.innerHTML =
            a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
      }),
      (v.onGlobalTap = function (c) {
        c = c || window.event;
        var d = c.target || c.srcElement;
        if (!r)
          if (c.detail && "mouse" === c.detail.pointerType) {
            if (I(d)) return void a.close();
            b.hasClass(d, "pswp__img") &&
              (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio
                ? q.clickToCloseNonZoomable && a.close()
                : a.toggleDesktopZoom(c.detail.releasePoint));
          } else if (
            (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()),
            q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))
          )
            return void a.close();
      }),
      (v.onMouseOver = function (a) {
        a = a || window.event;
        var b = a.target || a.srcElement;
        C(d, "ui--over-close", I(b));
      }),
      (v.hideControls = function () {
        b.addClass(d, "pswp__ui--hidden"), (x = !1);
      }),
      (v.showControls = function () {
        (x = !0), w || v.update(), b.removeClass(d, "pswp__ui--hidden");
      }),
      (v.supportsFullscreen = function () {
        var a = document;
        return !!(
          a.exitFullscreen ||
          a.mozCancelFullScreen ||
          a.webkitExitFullscreen ||
          a.msExitFullscreen
        );
      }),
      (v.getFullscreenAPI = function () {
        var b,
          c = document.documentElement,
          d = "fullscreenchange";
        return (
          c.requestFullscreen
            ? (b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d,
              })
            : c.mozRequestFullScreen
            ? (b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d,
              })
            : c.webkitRequestFullscreen
            ? (b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d,
              })
            : c.msRequestFullscreen &&
              (b = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange",
              }),
          b &&
            ((b.enter = function () {
              return (
                (j = q.closeOnScroll),
                (q.closeOnScroll = !1),
                "webkitRequestFullscreen" !== this.enterK
                  ? a.template[this.enterK]()
                  : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
              );
            }),
            (b.exit = function () {
              return (q.closeOnScroll = j), document[this.exitK]();
            }),
            (b.isFullscreen = function () {
              return document[this.elementK];
            })),
          b
        );
      });
  };
  return a;
});
(function () {
  var tmpRequire = this.require;
  this.require = function (module) {
    return module === "jquery" ? $ : void 0;
  };
  this.exports = {};
  this.module = { exports: {} };
  var __assign =
    (this && this.__assign) ||
    function () {
      __assign =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
      return __assign.apply(this, arguments);
    };
  var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
  var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
  (function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
      var v = factory(require, exports);
      if (v !== undefined) module.exports = v;
    } else if (typeof define === "function" && define.amd) {
      define(["require", "exports", "jquery"], factory);
    }
  })(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.GalleryLib = exports.isVideoFile = void 0;
    var jquery_1 = __importDefault(require("jquery"));
    function buildAnimName(val) {
      return (
        "wb-anim-" + val.effect + (val.direction ? "-" + val.direction : "")
      );
    }
    function buildAnimCss(val) {
      if (!val) return { animation: "none" };
      return {
        animation:
          buildAnimName(val) +
          " " +
          val.duration +
          "s" +
          " " +
          val.timing +
          " " +
          val.delay +
          "s",
        "animation-iteration-count": val.loop ? "infinite" : 1,
      };
    }
    var config = {
      thumbWidth: 290,
      thumbHeight: 290,
      minWidth: 320,
      minHeight: 240,
    };
    var win = window;
    var GoogleMapsApi = (function () {
      function GoogleMapsApi() {}
      GoogleMapsApi.configure = function (apiKey, locale) {
        GoogleMapsApi.apiKey = apiKey;
        GoogleMapsApi.locale = locale;
      };
      GoogleMapsApi.addListener = function (callback) {
        if (win["GoogleMapsApi_ScriptReady"]) {
          callback();
        } else {
          if (!win["GoogleMapsApi_Listeners"])
            win["GoogleMapsApi_Listeners"] = [];
          win["GoogleMapsApi_Listeners"].push(callback);
        }
        if (!win["GoogleMapsApi_ScriptLoaded"]) {
          win["GoogleMapsApi_ScriptLoaded"] = !0;
          win["GoogleMapsApi_clb_fn"] = function () {
            return (win["GoogleMapsApi_ScriptReady"] = !0);
          };
          var region =
            GoogleMapsApi.locale.indexOf("_") >= 0
              ? GoogleMapsApi.locale.split("_")[1].toUpperCase()
              : null;
          jquery_1.default.getScript(
            "//maps.googleapis.com/maps/api/js?v=3.exp&key=" +
              GoogleMapsApi.apiKey +
              "&sensor=false" +
              (region
                ? "&region=" + region + "&language=" + GoogleMapsApi.locale
                : "") +
              "&callback=GoogleMapsApi_clb_fn&libraries=places"
          );
          var compleFunc_1 = function () {
            if (!win["GoogleMapsApi_ScriptReady"]) {
              setTimeout(compleFunc_1, 100);
            } else if (win["GoogleMapsApi_Listeners"]) {
              for (
                var _i = 0, _a = win["GoogleMapsApi_Listeners"];
                _i < _a.length;
                _i++
              ) {
                var callback_1 = _a[_i];
                callback_1();
              }
            }
          };
          compleFunc_1();
        }
      };
      GoogleMapsApi.apiKey = "";
      GoogleMapsApi.locale = "en_US";
      return GoogleMapsApi;
    })();
    var isVideoFile = function (src) {
      var tsParts = src.split("?ts=");
      var extParts = tsParts[0].split(".");
      var ext = extParts.length > 1 ? extParts[extParts.length - 1] : "";
      if ("mp4,mpeg,avi,flv,mkv,mov".indexOf(ext.toLowerCase()) >= 0) {
        return !0;
      }
      return !1;
    };
    exports.isVideoFile = isVideoFile;
    var GalleryLib = (function () {
      function GalleryLib(data) {
        var _this_1 = this;
        this.type = "thumbs";
        this.slideshowInterval = 5;
        this.slideshowSpeed = 400;
        this.pauseOnHover = !1;
        this.images = [];
        this.imageIndex = 0;
        this.slideshowTimer = 0;
        this.displayedImage = null;
        this.loadingImage = null;
        this.listImgCont = null;
        this.thumbImgCont = null;
        this.fullThumbWidth = 0;
        this.fullThumbHeight = 0;
        this.bgColor = "";
        this.padding = 0;
        this.imageCover = !1;
        this.disablePopup = !1;
        this.slideOpacity = 100;
        this.thumbWidth = config.thumbWidth;
        this.thumbHeight = config.thumbHeight;
        this.thumbAlign = "left";
        this.thumbPadding = 6;
        this.thumbAnim = null;
        this.thumbShadow = null;
        this.showPictureCaption = "always";
        this.captionIncludeDescription = !1;
        this.imageElems = {};
        this.lightBox = null;
        this.initialRender = !1;
        this.lightBoxDisplayed = !1;
        this.invalid = !1;
        this.resizeEventHandler = null;
        this.transitionendEventHandler = null;
        this.mousemoveEventHandler = null;
        this.imageChangedHandler = null;
        this.map = null;
        this.mapMarkers = [];
        this.mapInfowindows = [];
        this.mapDiv = null;
        this.pause = !1;
        this.delayedUpdateTimeout = 0;
        this.metaUpdateTimeout = 0;
        GalleryLib.galleryLibList.push(this);
        this.elem = (0, jquery_1.default)("<div>").addClass("wb_gallery");
        this.id = data.id ? data.id : "wb-gallery-id";
        this.height = data.height ? data.height : "";
        this.border = data.border
          ? data.border
          : { border: "5px none #FFFFFF" };
        this.thumbWidth =
          typeof data.thumbWidth === "number" && data.thumbWidth > 0
            ? data.thumbWidth
            : config.thumbWidth;
        this.thumbHeight =
          typeof data.thumbHeight === "number" && data.thumbHeight > 0
            ? data.thumbHeight
            : config.thumbHeight;
        this.thumbAlign = data.thumbAlign ? data.thumbAlign : this.thumbAlign;
        this.thumbPadding =
          data.thumbPadding || data.thumbPadding === 0
            ? data.thumbPadding
            : this.thumbPadding;
        if (data.thumbAnim) this.thumbAnim = data.thumbAnim;
        if (data.thumbShadow) this.thumbShadow = data.thumbShadow;
        this.padding = data.padding || data.padding === 0 ? data.padding : 0;
        this.type = data.type ? data.type : this.type;
        this.slideshowInterval =
          typeof data.interval === "number" ? data.interval : 10;
        this.imageCover =
          typeof data.imageCover === "boolean"
            ? data.imageCover
            : this.imageCover;
        this.disablePopup =
          typeof data.disablePopup === "boolean"
            ? data.disablePopup
            : this.disablePopup;
        this.slideOpacity =
          typeof data.slideOpacity === "number"
            ? data.slideOpacity
            : this.slideOpacity;
        this.slideshowSpeed = typeof data.speed === "number" ? data.speed : 400;
        this.setBgColor(data.bgColor ? data.bgColor : "transparent");
        this.showPictureCaption =
          typeof data.showPictureCaption === "string"
            ? data.showPictureCaption
            : this.showPictureCaption;
        this.captionIncludeDescription = !!data.captionIncludeDescription;
        if (data.captionBackground)
          this.setCaptionBackground(data.captionBackground);
        if (data.captionPosition) this.setCaptionPosition(data.captionPosition);
        if (data.captionTitleStyle)
          this.setCaptionTitleStyle(data.captionTitleStyle);
        if (data.captionDescriptionStyle)
          this.setCaptionDescriptionStyle(data.captionDescriptionStyle);
        if (data.controlsArrow) this.setControlsArrow(data.controlsArrow);
        if (data.controlsArrowSize)
          this.setControlsArrowSize(data.controlsArrowSize);
        if (data.controlsArrowStyle)
          this.setControlsArrowStyle(data.controlsArrowStyle);
        this.mapTypeId = data.mapTypeId || null;
        this.markerIconTypeId = data.markerIconTypeId || null;
        this.zoom = data.zoom || 16;
        this.mapCenter = data.mapCenter || null;
        this.key = data.key || null;
        this.theme = data.theme || "default";
        this.color = data.color || "#eeeeee";
        this.showSatellite = data.showSatellite || !1;
        this.showZoom = data.showZoom || !1;
        this.showStreetView = data.showStreetView || !1;
        this.showFullscreen = data.showFullscreen || !1;
        this.allowDragging = data.allowDragging || !1;
        this.showRoads = data.showRoads || !1;
        this.showLandmarks = data.showLandmarks || !1;
        this.showLabels = data.showLabels || !1;
        this.locale = data.locale || "en_US";
        this.pauseOnHover = data.pauseOnHover || !1;
        if (this.key) GoogleMapsApi.configure(this.key, this.locale);
        if (!("wb_builder" in window)) {
          this.initialRender = !0;
        }
        this.setImages(data.images && data.images.length ? data.images : []);
        if (data.trackResize) {
          this.resizeEventHandler = function () {
            return _this_1.handleResize();
          };
          (0, jquery_1.default)(window).on("resize", this.resizeEventHandler);
        }
        this.transitionendEventHandler = function (e) {
          if ((0, jquery_1.default)(e.target).is(".wb-viewport-block"))
            _this_1.handleResize();
        };
        (0, jquery_1.default)(window).on(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          this.transitionendEventHandler
        );
        this.mousemoveEventHandler = function (e) {
          if (!_this_1.pauseOnHover) {
            return;
          }
          if (
            (0, jquery_1.default)(e.target).attr("data-plugin") == "Gallery" ||
            (0, jquery_1.default)(e.target).parents(
              'div[data-plugin="Gallery"]'
            ).length
          ) {
            _this_1.pause = !0;
            if (_this_1.currentType == "image") {
              clearInterval(_this_1.slideshowTimer);
              _this_1.slideshowTimer = 0;
            }
          } else {
            _this_1.pause = !1;
            if (_this_1.currentType == "image") {
              _this_1.reset();
            }
          }
        };
        (0, jquery_1.default)(document).on(
          "mousemove",
          this.mousemoveEventHandler
        );
      }
      GalleryLib.getGalleryLibList = function () {
        return GalleryLib.galleryLibList;
      };
      GalleryLib.getGalleryLibById = function (id) {
        for (var i in GalleryLib.galleryLibList) {
          if (GalleryLib.galleryLibList[i].id === id)
            return GalleryLib.galleryLibList[i];
        }
        return null;
      };
      GalleryLib.prototype.setVisible = function (visible) {
        this.elem.css("display", visible ? "block" : "none");
      };
      GalleryLib.prototype.appendTo = function (container) {
        (0, jquery_1.default)(container).append(this.elem);
        this.handleResize();
      };
      GalleryLib.prototype.destroy = function () {
        var _a;
        if (this.slideshowTimer) clearInterval(this.slideshowTimer);
        if (this.type === "masonry" && this.listImgCont)
          this.listImgCont.masonry("destroy");
        (_a = this.lightBox) === null || _a === void 0 ? void 0 : _a.destroy();
        if (this.resizeEventHandler)
          (0, jquery_1.default)(window).off("resize", this.resizeEventHandler);
        if (this.transitionendEventHandler)
          (0, jquery_1.default)(window).off(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            this.transitionendEventHandler
          );
        if (this.mousemoveEventHandler)
          (0, jquery_1.default)(document).off(
            "mousemove",
            this.mousemoveEventHandler
          );
        this.elem.remove();
      };
      GalleryLib.prototype.reset = function (callback) {
        var _this_1 = this;
        if (this.slideshowTimer) clearInterval(this.slideshowTimer);
        if (this.slideshowInterval && this.images.length > 1) {
          this.slideshowTimer = setInterval(function () {
            return _this_1.slideshowNext(callback);
          }, this.slideshowInterval * 1000);
        } else this.slideshowTimer = 0;
      };
      GalleryLib.prototype.setPause = function (pause) {
        if (pause === void 0) {
          pause = !0;
        }
        if (pause) {
          if (this.slideshowTimer) clearInterval(this.slideshowTimer);
          this.slideshowTimer = 0;
        } else {
          this.reset();
        }
      };
      GalleryLib.prototype.invalidate = function () {
        var _this_1 = this;
        if (!this.invalid) {
          this.invalid = !0;
          if ("requestAnimationFrame" in window)
            requestAnimationFrame(function () {
              return _this_1.revalidate();
            });
          else
            setTimeout(function () {
              return _this_1.revalidate();
            }, 0);
        }
        return this;
      };
      GalleryLib.prototype.revalidate = function () {
        this.invalid = !1;
        this.render();
        return this;
      };
      GalleryLib.prototype.applyAnimation = function (img, i, layoutReady) {
        img.css(buildAnimCss());
        if (this.thumbAnim && this.thumbAnim.normal) {
          var anim_1 = this.thumbAnim.normal;
          img.addClass("wb-anim-entry").removeClass("wb-anim-entry-on");
          var func = function () {
            return setTimeout(function () {
              img.css(
                buildAnimCss(__assign(__assign({}, anim_1), { delay: 0 }))
              );
              setTimeout(function () {
                return img
                  .addClass("wb-anim-entry-on")
                  .removeClass("wb-anim-entry");
              }, 40);
            }, anim_1.delay * 1000 * i);
          };
          if (layoutReady) layoutReady.done(func);
          else func();
        }
        if (this.thumbAnim && this.thumbAnim.hover) {
          var anim = this.thumbAnim.hover;
          var hoverOff_1 = buildAnimCss();
          var hoverOn_1 = buildAnimCss(anim);
          img
            .addClass(buildAnimName(anim))
            .off("mouseover")
            .on("mouseover", function () {
              return img.css(hoverOn_1);
            })
            .off("mouseout")
            .on("mouseout", function () {
              return img.css(hoverOff_1);
            });
          if (anim.loop) img.addClass("loop");
        }
      };
      GalleryLib.prototype.render = function () {
        this.imageChangedHandler = null;
        if (this.slideshowTimer) clearInterval(this.slideshowTimer);
        this.slideshowTimer = 0;
        this.listImgCont = null;
        this.displayedImage = null;
        this.loadingImage = null;
        this.elem.empty();
        if (this.images.length == 0) return;
        if (!this._initialHeight)
          this._initialHeight = this.elem.parent().get(0).style.height;
        this.elem.parent().css("height", this._initialHeight);
        switch (this.type) {
          case "slideshow":
            this.renderSlideshow();
            break;
          case "list":
            this.renderList();
            break;
          case "masonry":
            this.renderMasonry();
            break;
          case "map":
            this.renderMap();
            break;
          default:
            this.renderThumbs();
            break;
        }
      };
      GalleryLib.prototype.getThemeDefaultStyle = function () {
        return [];
      };
      GalleryLib.prototype.getThemeLightStyle = function (color) {
        return [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              { color: color ? color : "#cccccc" },
              { visibility: "on" },
            ],
          },
        ];
      };
      GalleryLib.prototype.getThemeDarkStyle = function (color) {
        return [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#000000" },
              { lightness: 40 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#000000" },
              { lightness: 16 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 20 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 21 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 16 }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 19 }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: color ? color : "#333333" }, { lightness: 17 }],
          },
        ];
      };
      GalleryLib.prototype.getThemeMonochromeStyle = function (color) {
        return [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: color ? color : "#3e44b5" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ gamma: 0.01 }, { lightness: 20 }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              { saturation: -31 },
              { lightness: -33 },
              { weight: 2 },
              { gamma: 0.8 },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ lightness: 30 }, { saturation: 30 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ saturation: 20 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ lightness: 20 }, { saturation: -20 }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ lightness: 10 }, { saturation: -30 }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ saturation: 25 }, { lightness: 25 }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ lightness: -20 }],
          },
        ];
      };
      GalleryLib.prototype.getThemeStyle = function (theme, color) {
        if (theme === "light") {
          return this.getThemeLightStyle(color);
        } else if (theme === "dark") {
          return this.getThemeDarkStyle(color);
        } else if (theme === "monochrome") {
          return this.getThemeMonochromeStyle(color);
        }
        return this.getThemeDefaultStyle();
      };
      GalleryLib.prototype.getStyles = function () {
        var styles = this.getThemeStyle(this.theme, this.color);
        var extraStyles = [
          {
            featureType: "road",
            stylers: [{ visibility: this.showRoads ? "on" : "off" }],
          },
          {
            featureType: "poi",
            stylers: [{ visibility: this.showLandmarks ? "on" : "off" }],
          },
          {
            elementType: "labels",
            stylers: [{ visibility: this.showLabels ? "on" : "off" }],
          },
        ];
        return styles.concat(extraStyles);
      };
      GalleryLib.prototype.getLeftArrow = function (type, active) {
        if (type === void 0) {
          type = null;
        }
        if (active === void 0) {
          active = !1;
        }
        if (this.images.length <= 1) return null;
        var icon = (0, jquery_1.default)('<i class="fa fa-chevron-left"></i>');
        switch (type) {
          case "shevron":
            icon = (0, jquery_1.default)('<i class="fa fa-chevron-left"></i>');
            break;
          case "shevron-circle":
            icon = (0, jquery_1.default)(
              '<i class="fa fa-chevron-circle-left"></i>'
            );
            break;
          case "arrow":
            icon = (0, jquery_1.default)('<i class="fa fa-arrow-left"></i>');
            break;
          case "arrow-circle":
            icon = (0, jquery_1.default)(
              '<i class="fa fa-arrow-circle-left"></i>'
            );
            break;
          case "caret":
            icon = (0, jquery_1.default)('<i class="fa fa-caret-left"></i>');
            break;
          case "circles":
            icon = (0, jquery_1.default)(
              active
                ? '<i class="fa fa-circle"></i>'
                : '<i class="fa fa-circle-o"></i>'
            );
            break;
          case "none":
            return null;
        }
        if (this.controlsArrowSize) {
          icon.css("font-size", this.controlsArrowSize);
        }
        return icon;
      };
      GalleryLib.prototype.getRightArrow = function (type, active) {
        if (type === void 0) {
          type = null;
        }
        if (active === void 0) {
          active = !1;
        }
        if (this.images.length <= 1) return null;
        var icon = (0, jquery_1.default)('<i class="fa fa-chevron-right"></i>');
        switch (type) {
          case "shevron":
            icon = (0, jquery_1.default)('<i class="fa fa-chevron-right"></i>');
            break;
          case "shevron-circle":
            icon = (0, jquery_1.default)(
              '<i class="fa fa-chevron-circle-right"></i>'
            );
            break;
          case "arrow":
            icon = (0, jquery_1.default)('<i class="fa fa-arrow-right"></i>');
            break;
          case "arrow-circle":
            icon = (0, jquery_1.default)(
              '<i class="fa fa-arrow-circle-right"></i>'
            );
            break;
          case "caret":
            icon = (0, jquery_1.default)('<i class="fa fa-caret-right"></i>');
            break;
          case "circles":
            icon = (0, jquery_1.default)(
              active
                ? '<i class="fa fa-circle"></i>'
                : '<i class="fa fa-circle-o"></i>'
            );
            break;
          case "none":
            return null;
        }
        if (this.controlsArrowSize) {
          icon.css("font-size", this.controlsArrowSize);
        }
        return icon;
      };
      GalleryLib.prototype.renderThumbs = function () {
        this.elem.html(
          '<div class="wb-thumbs-only" style="width: 100%; height: 100%; overflow: auto;"></div>'
        );
        this.elem.css("text-align", this.thumbAlign);
        var elem = this.elem.children().first();
        for (var i = 0, c = this.images.length; i < c; i++) {
          if ((0, exports.isVideoFile)(this.images[i].src)) {
            continue;
          }
          var img = this.addImage(elem, this.images[i], i).wrp;
          this.applyAnimation(img, i);
        }
        elem.children(".wb_thumb").css("padding", this.thumbPadding / 2 + "px");
        if (this.thumbShadow && this.height === "auto") {
          this.elem.css("overflow", "visible");
          this.elem.children(".wb-thumbs-only").css("overflow", "visible");
          this.elem.parent(".wb_gallery").css("overflow", "visible");
        } else {
          this.elem.css("overflow", "");
          this.elem.parent(".wb_gallery").css("overflow", "");
        }
      };
      GalleryLib.prototype.renderSlideshow = function () {
        var self = this;
        var rootElem = this.elem.parent();
        if ("wb_builder" in window) {
          rootElem = rootElem.parent();
        }
        if (rootElem.length) {
          var minH = rootElem.css("min-height");
          if (minH && /^\d+px$/.test(minH) && parseInt(minH) > 0)
            this.elem.parent().css("height", minH);
        }
        this.elem.html(
          '<div class="gallery-slideshow">' +
            '<div class="gallery-slide-image" style="overflow: hidden;"></div>' +
            "</div>"
        );
        var cont = this.elem.children().first();
        this.initSwipes(cont, function (dir) {
          if (dir === "right") self.slideshowPrev();
          if (dir === "left") self.slideshowNext();
        });
        this.renderSlideshowControls(cont);
        this.listImgCont = cont.children(".gallery-slide-image");
        this.listImgCont.css("opacity", this.slideOpacity / 100);
        this.reset();
        this.imageIndex = -1;
        this.slideshowNext();
      };
      GalleryLib.prototype.renderSlideshowControls = function (cont) {
        var _this_1 = this;
        var _a;
        var self = this;
        var toNormal = function () {
          var _a, _b, _c, _d, _e, _f;
          var $this = (0, jquery_1.default)(this);
          if (
            (_b =
              (_a = self.controlsArrowStyle) === null || _a === void 0
                ? void 0
                : _a.normal) === null || _b === void 0
              ? void 0
              : _b.color
          )
            $this.css({ color: self.controlsArrowStyle.normal.color });
          else $this.css("color", "");
          if (
            ((_d =
              (_c = self.controlsArrowStyle) === null || _c === void 0
                ? void 0
                : _c.normal.shadow) === null || _d === void 0
              ? void 0
              : _d.css) &&
            ((_f =
              (_e = self.controlsArrowStyle) === null || _e === void 0
                ? void 0
                : _e.normal.shadow) === null || _f === void 0
              ? void 0
              : _f.css["text-shadow"])
          ) {
            $this.css({
              textShadow:
                self.controlsArrowStyle.normal.shadow.css["text-shadow"],
            });
          } else $this.css("textShadow", "");
        };
        var toHoverState = function () {
          var _a, _b, _c, _d, _e, _f;
          var $this = (0, jquery_1.default)(this);
          if (
            (_b =
              (_a = self.controlsArrowStyle) === null || _a === void 0
                ? void 0
                : _a.hover) === null || _b === void 0
              ? void 0
              : _b.color
          )
            $this.css({ color: self.controlsArrowStyle.hover.color });
          else $this.css("color", "");
          if (
            ((_d =
              (_c = self.controlsArrowStyle) === null || _c === void 0
                ? void 0
                : _c.hover.shadow) === null || _d === void 0
              ? void 0
              : _d.css) &&
            ((_f =
              (_e = self.controlsArrowStyle) === null || _e === void 0
                ? void 0
                : _e.hover.shadow) === null || _f === void 0
              ? void 0
              : _f.css["text-shadow"])
          ) {
            $this.css({
              textShadow:
                self.controlsArrowStyle.hover.shadow.css["text-shadow"],
            });
          } else $this.css("textShadow", "");
        };
        var toActiveState = function () {
          var _a, _b, _c, _d, _e, _f;
          var $this = (0, jquery_1.default)(this);
          if (
            (_b =
              (_a = self.controlsArrowStyle) === null || _a === void 0
                ? void 0
                : _a.active) === null || _b === void 0
              ? void 0
              : _b.color
          )
            $this.css({ color: self.controlsArrowStyle.active.color });
          else $this.css("color", "");
          if (
            ((_d =
              (_c = self.controlsArrowStyle) === null || _c === void 0
                ? void 0
                : _c.active.shadow) === null || _d === void 0
              ? void 0
              : _d.css) &&
            ((_f =
              (_e = self.controlsArrowStyle) === null || _e === void 0
                ? void 0
                : _e.active.shadow) === null || _f === void 0
              ? void 0
              : _f.css["text-shadow"])
          ) {
            $this.css({
              textShadow:
                self.controlsArrowStyle.active.shadow.css["text-shadow"],
            });
          } else $this.css("textShadow", "");
        };
        if (this.controlsArrow === "circles") {
          cont.children(".gallery-slide-pagination").remove();
          var pageElem = (0, jquery_1.default)(
            '<div class="gallery-slide-pagination"></div>'
          );
          if (
            this.showPictureCaption !== "none" &&
            this.captionPosition === "center bottom"
          )
            pageElem.addClass("gallery-slide-pagination-top");
          else pageElem.addClass("gallery-slide-pagination-bottom");
          cont.append(pageElem);
          var _loop_1 = function (i) {
            var circleElem =
              (_a = this_1.getLeftArrow(
                this_1.controlsArrow,
                i === this_1.imageIndex
              )) === null || _a === void 0
                ? void 0
                : _a
                    .clone()
                    .hover(toHoverState, function () {
                      if (i === self.imageIndex) toActiveState.apply(this);
                      else toNormal.apply(this);
                    })
                    .click(function () {
                      return _this_1.slideshowTo(i);
                    });
            if (circleElem) {
              (i === this_1.imageIndex ? toActiveState : toNormal).apply(
                circleElem.get(0)
              );
              pageElem.append(circleElem);
            }
          };
          var this_1 = this;
          for (var i = 0; i < this.getImages().length; i++) {
            _loop_1(i);
          }
        } else {
          cont.children(".gallery-slide-left, .gallery-slide-right").remove();
          var larr = (0, jquery_1.default)(
            '<div class="gallery-slide-left"></div>'
          );
          cont.append(larr);
          var larrow = this.getLeftArrow(this.controlsArrow);
          if (larrow) larr.append(larrow);
          var rarr = (0, jquery_1.default)(
            '<div class="gallery-slide-right"></div>'
          );
          cont.append(rarr);
          var rarrow = this.getRightArrow(this.controlsArrow);
          if (rarrow) rarr.append(rarrow);
          larr.click(function () {
            return _this_1.slideshowPrev();
          });
          rarr.click(function () {
            return _this_1.slideshowNext();
          });
          larr.hover(toHoverState, toNormal);
          toNormal.apply(larr.get(0));
          rarr.hover(toHoverState, toNormal);
          toNormal.apply(rarr.get(0));
        }
      };
      GalleryLib.prototype.renderList = function () {
        var _this_1 = this;
        var rootElem = this.elem.parent();
        if ("wb_builder" in window) {
          rootElem = rootElem.parent();
        }
        if (rootElem.length) {
          var minH = rootElem.css("min-height");
          if (minH && /^\d+px$/.test(minH) && parseInt(minH) > 0)
            this.elem.parent().css("height", minH);
        }
        var h = this.elem.height();
        if (!h) h = this.elem.parent().height();
        var tw = this.getThumbWidth();
        var th = this.getThumbHeight();
        var thumbcont = (0, jquery_1.default)("<div></div>");
        this.imageChangedHandler = function () {
          var img = _this_1.imageElems[_this_1.imageIndex];
          if (
            !img.parentNode ||
            !img.parentNode.parentNode ||
            !img.parentNode.parentNode.parentNode
          )
            return;
          (0, jquery_1.default)(img.parentNode.parentNode.parentNode)
            .children(".tmb-selected")
            .removeClass("tmb-selected");
          (0, jquery_1.default)(img.parentNode.parentNode).addClass(
            "tmb-selected"
          );
        };
        this.imageElems = {};
        var _loop_2 = function (i) {
          var image = this_2.images[i];
          var img = this_2.addImage(thumbcont, image, i, !0).img;
          img.css({ cursor: "pointer" });
          this_2.imageElems[i] = img.get(0);
          img.click(function () {
            if (!_this_1.listImgCont) return;
            _this_1.imageIndex = _this_1.images.indexOf(image);
            _this_1.displayImage(_this_1.listImgCont);
            if (_this_1.slideshowTimer) {
              _this_1.setPause(!0);
              setTimeout(function () {
                return _this_1.setPause(!1);
              }, _this_1.slideshowInterval * 1000);
            }
          });
          var par = img.parent().parent();
          if (i === this_2.imageIndex) {
            par.addClass("tmb-selected");
            tw = this_2.getThumbWidth() + 8;
            th = this_2.getThumbHeight() + 8;
          }
        };
        var this_2 = this;
        for (var i = 0; i < this.images.length; i++) {
          _loop_2(i);
        }
        var thumbs = thumbcont.children(".wb_thumb");
        thumbs.css("margin", "0 " + this.getThumbPadding() / 2 + "px");
        (0, jquery_1.default)(thumbs.get(0)).css(
          "margin",
          "0 " + this.getThumbPadding() / 2 + "px 0 0"
        );
        (0, jquery_1.default)(thumbs.get(thumbs.length - 1)).css(
          "margin",
          "0 0 0 " + this.getThumbPadding() / 2 + "px"
        );
        this.fullThumbWidth = tw;
        this.fullThumbHeight = th;
        var thumbsWidth =
          tw * this.images.length +
          this.getThumbPadding() * (this.images.length - 1);
        thumbcont.css({
          position: "absolute",
          left: "0",
          top: "5px",
          width: thumbsWidth + "px",
          height: th + "px",
        });
        var galcont = document.createElement("DIV");
        (0, jquery_1.default)(galcont).css({
          position: "relative",
          height: h > 0 ? h + "px" : "",
        });
        galcont.className = "gallery-list";
        var imgcont = document.createElement("DIV");
        (0, jquery_1.default)(imgcont).css({
          position: "relative",
          height: h > 0 ? h - th - 10 + "px" : "",
          overflow: "hidden",
        });
        imgcont.className = "gallery-list-image";
        this.initSwipes((0, jquery_1.default)(imgcont), function (dir) {
          if (dir === "right") _this_1.slideshowPrev();
          if (dir === "left") _this_1.slideshowNext();
          if (_this_1.slideshowTimer) {
            _this_1.setPause(!0);
            setTimeout(function () {
              return _this_1.setPause(!1);
            }, _this_1.slideshowInterval * 1000);
          }
        });
        var icon;
        var thumbdiv_in1 = document.createElement("DIV");
        (0, jquery_1.default)(thumbdiv_in1).css({
          position: "relative",
          float: "left",
          height: th + 10 + "px",
          cursor: "pointer",
        });
        thumbdiv_in1.className = "gallery-list-left";
        (0, jquery_1.default)(thumbdiv_in1).click(function () {
          return _this_1.slideBy("left");
        });
        icon = this.getLeftArrow(this.controlsArrow);
        if (icon) thumbdiv_in1.appendChild(icon.get(0));
        var thumbdiv_in2 = document.createElement("DIV");
        (0, jquery_1.default)(thumbdiv_in2).css({
          position: "relative",
          float: "none",
          margin: "0 auto",
          maxWidth: thumbsWidth + "px",
          height: th + 10 + "px",
          overflow: "hidden",
        });
        thumbdiv_in2.className = "gallery-list-thumbs";
        this.initSwipes((0, jquery_1.default)(thumbdiv_in2), function (dir) {
          if (dir === "right") _this_1.slideBy("left");
          if (dir === "left") _this_1.slideBy("right");
          if (_this_1.slideshowTimer) {
            _this_1.setPause(!0);
            setTimeout(function () {
              return _this_1.setPause(!1);
            }, _this_1.slideshowInterval * 1000);
          }
        });
        var thumbdiv_in3 = document.createElement("DIV");
        (0, jquery_1.default)(thumbdiv_in3).css({
          position: "relative",
          float: "right",
          height: th + 10 + "px",
          cursor: "pointer",
        });
        thumbdiv_in3.className = "gallery-list-right";
        (0, jquery_1.default)(thumbdiv_in3).click(function () {
          return _this_1.slideBy("right");
        });
        icon = this.getRightArrow(this.controlsArrow);
        if (icon) thumbdiv_in3.appendChild(icon.get(0));
        var self = this;
        var toHoverState = function () {
          var _a, _b, _c, _d, _e, _f;
          var $this = (0, jquery_1.default)(this);
          if (
            (_b =
              (_a = self.controlsArrowStyle) === null || _a === void 0
                ? void 0
                : _a.hover) === null || _b === void 0
              ? void 0
              : _b.color
          )
            $this.css({ color: self.controlsArrowStyle.hover.color });
          else $this.css("color", "");
          if (
            ((_d =
              (_c = self.controlsArrowStyle) === null || _c === void 0
                ? void 0
                : _c.hover.shadow) === null || _d === void 0
              ? void 0
              : _d.css) &&
            ((_f =
              (_e = self.controlsArrowStyle) === null || _e === void 0
                ? void 0
                : _e.hover.shadow) === null || _f === void 0
              ? void 0
              : _f.css["text-shadow"])
          ) {
            $this.css({
              textShadow:
                self.controlsArrowStyle.hover.shadow.css["text-shadow"],
            });
          } else $this.css("textShadow", "");
        };
        var toNormalState = function () {
          var _a, _b, _c, _d, _e, _f;
          var $this = (0, jquery_1.default)(this);
          if (
            (_b =
              (_a = self.controlsArrowStyle) === null || _a === void 0
                ? void 0
                : _a.normal) === null || _b === void 0
              ? void 0
              : _b.color
          )
            $this.css({ color: self.controlsArrowStyle.normal.color });
          else $this.css("color", "");
          if (
            ((_d =
              (_c = self.controlsArrowStyle) === null || _c === void 0
                ? void 0
                : _c.normal.shadow) === null || _d === void 0
              ? void 0
              : _d.css) &&
            ((_f =
              (_e = self.controlsArrowStyle) === null || _e === void 0
                ? void 0
                : _e.normal.shadow) === null || _f === void 0
              ? void 0
              : _f.css["text-shadow"])
          ) {
            $this.css({
              textShadow:
                self.controlsArrowStyle.normal.shadow.css["text-shadow"],
            });
          } else $this.css("textShadow", "");
        };
        (0, jquery_1.default)(thumbdiv_in1).hover(toHoverState, toNormalState);
        toNormalState.apply(thumbdiv_in1);
        (0, jquery_1.default)(thumbdiv_in3).hover(toHoverState, toNormalState);
        toNormalState.apply(thumbdiv_in3);
        var thumbdiv = document.createElement("DIV");
        (0, jquery_1.default)(thumbdiv).css({
          position: "relative",
          height: th + 10 + "px",
          overflow: "hidden",
        });
        thumbdiv.classList.add("gallery-list-thumbs-list");
        (0, jquery_1.default)(thumbdiv_in2).append(thumbcont);
        thumbdiv.appendChild(thumbdiv_in1);
        thumbdiv.appendChild(thumbdiv_in3);
        thumbdiv.appendChild(thumbdiv_in2);
        galcont.appendChild(imgcont);
        galcont.appendChild(thumbdiv);
        this.listImgCont = (0, jquery_1.default)(imgcont);
        this.thumbImgCont = (0, jquery_1.default)(thumbdiv_in2);
        this.elem.append(galcont);
        this.reset();
        this.imageIndex = -1;
        this.slideshowNext();
        if (
          1 <
          this.elem.width() -
            ((0, jquery_1.default)(thumbdiv_in1).outerWidth() +
              (0, jquery_1.default)(thumbdiv_in2).outerWidth() +
              (0, jquery_1.default)(thumbdiv_in3).outerWidth())
        ) {
          (0, jquery_1.default)(thumbdiv_in1).hide();
          (0, jquery_1.default)(thumbdiv_in3).hide();
        }
        if (this.images.length <= 1) {
          this.elem.find(".gallery-list-thumbs-list").hide();
          this.fullThumbHeight = 0;
        }
      };
      GalleryLib.prototype.renderMasonry = function () {
        var elem = (0, jquery_1.default)('<div class="wb-masonry-items"/>');
        var cont = (0, jquery_1.default)(
          '<div class="wb-masonry" style="width: 100%; height: 100%; overflow: auto;"/>'
        );
        cont.append(elem);
        this.elem.append(cont);
        if (this.thumbAlign === "left") elem.css("float", "left");
        else if (this.thumbAlign === "right") elem.css("float", "right");
        else elem.css("margin", "0 auto");
        var layoutReady = jquery_1.default.Deferred();
        for (var i = 0, c = this.images.length; i < c; i++) {
          if ((0, exports.isVideoFile)(this.images[i].src)) {
            continue;
          }
          var img = this.addImage(elem, this.images[i], i).wrp;
          this.applyAnimation(img, i, layoutReady.promise());
        }
        elem.children(".wb_thumb").css("padding", this.thumbPadding / 2 + "px");
        var brd = this.getBorder();
        elem
          .masonry({
            itemSelector: ".wb_thumb",
            columnWidth:
              this.getThumbWidth() +
              (brd
                ? this.getBorderWidth(brd, 1) + this.getBorderWidth(brd, 3)
                : 0) +
              this.thumbPadding,
            fitWidth: !0,
            transitionDuration: 0,
          })
          .masonry("once", "layoutComplete", function () {
            return layoutReady.resolve();
          });
        this.listImgCont = elem;
        if (this.thumbShadow && this.height === "auto") {
          this.elem.css("overflow", "visible");
          this.elem
            .children(".wb-masonry")
            .get(0)
            .style.setProperty("overflow", "visible", "important");
          this.elem.parent(".wb_gallery").css("overflow", "visible");
        } else {
          this.elem.css("overflow", "");
          this.elem.parent(".wb_gallery").css("overflow", "");
        }
      };
      GalleryLib.prototype.renderMap = function () {
        var _this_1 = this;
        var rootElem = this.elem.parent();
        if ("wb_builder" in window) {
          rootElem = rootElem.parent();
        }
        if (rootElem.length) {
          var minH = rootElem.css("min-height");
          if (minH && /^\d+px$/.test(minH) && parseInt(minH) > 0)
            this.elem.parent().css("height", minH);
        }
        this.elem.html(
          '<div class="wb-gallery-map" style="width: 100%; height: 100%; overflow: auto; position: absolute;"></div>'
        );
        this.elem.css("text-align", this.thumbAlign);
        var elem = this.elem.children().first();
        this.map = null;
        this.mapDiv = null;
        if (this.key) {
          GoogleMapsApi.addListener(function () {
            var mapTypeId = _this_1.mapTypeId || google.maps.MapTypeId.ROADMAP;
            var thisClass = _this_1;
            if (!_this_1.map) {
              if (!_this_1.mapDiv) {
                _this_1.mapDiv = (0, jquery_1.default)("<div>")
                  .css({ width: "100%", height: "100%" })
                  .appendTo(elem);
              }
              _this_1.mapDiv.css("display", "block");
              setTimeout(function () {
                if (thisClass.mapDiv) {
                  thisClass.map = new google.maps.Map(thisClass.mapDiv.get(0), {
                    zoom: thisClass.zoom,
                    center:
                      thisClass.mapCenter && thisClass.mapCenter.latLng
                        ? thisClass.mapCenter.latLng
                        : new google.maps.LatLng(0, 0),
                    mapTypeId: mapTypeId,
                    mapTypeControl: thisClass.showSatellite,
                    zoomControl: thisClass.showZoom,
                    streetViewControl: thisClass.showStreetView,
                    fullscreenControl: thisClass.showFullscreen,
                    draggable: thisClass.allowDragging,
                    styles: thisClass.getStyles(),
                  });
                }
              }, 50);
            }
            var init = function () {
              if (!thisClass.map) {
                setTimeout(init, 10);
                return;
              }
              thisClass.map.setZoom(thisClass.zoom);
              thisClass.map.setCenter(new google.maps.LatLng(0, 0));
              thisClass.map.setMapTypeId(mapTypeId);
              thisClass.map.setOptions({
                mapTypeControl: thisClass.showSatellite,
                zoomControl: thisClass.showZoom,
                streetViewControl: thisClass.showStreetView,
                fullscreenControl: thisClass.showFullscreen,
                draggable: thisClass.allowDragging,
                styles: thisClass.getStyles(),
              });
              thisClass.map.addListener("click", function () {
                thisClass.mapInfowindows.map(function (item) {
                  item.close();
                });
              });
              thisClass.mapMarkers.map(function (item) {
                return item.setMap(null);
              });
              thisClass.mapMarkers = [];
              thisClass.mapInfowindows = [];
              var latlngbounds = new google.maps.LatLngBounds();
              var _loop_3 = function (i, c) {
                var image = thisClass.images[i];
                if (image.address && image.address.latLng) {
                  var content = (0, jquery_1.default)(
                    '<div class="gallery-map-image" style="position: relative">' +
                      '<img loading="lazy" src="'
                        .concat(
                          thisClass.urlEncode(image.src || image.thumb || ""),
                          '" alt="'
                        )
                        .concat(
                          image.title,
                          '" style="max-width: 100%; max-height: 100%"/>'
                        ) +
                      "</div>"
                  );
                  if (
                    (image.title || image.description) &&
                    thisClass.showPictureCaption !== "none"
                  ) {
                    caption = (0, jquery_1.default)(
                      '<div class="wb-picture-caption"/>'
                    );
                    if (thisClass.captionBackground)
                      caption.css(
                        "background-color",
                        thisClass.captionBackground
                      );
                    if (thisClass.captionPosition)
                      caption.addClass(
                        thisClass.captionPosition.split(" ").join("-")
                      );
                    thisClass.fillCaptionContainer(
                      caption,
                      image,
                      thisClass.captionIncludeDescription
                    );
                    content.append(caption);
                  }
                  var infowindow_1 = new google.maps.InfoWindow({
                    content: content.get(0),
                  });
                  infowindow_1.addListener("domready", function () {
                    var parent = (0, jquery_1.default)(
                      this.getContent()
                    ).parent();
                    var height =
                      parent.parent().innerHeight() - parent.height();
                    (0, jquery_1.default)(this.getContent())
                      .children("img")
                      .css("max-height", parent.height() - height);
                  });
                  var position = new google.maps.LatLng(image.address.latLng);
                  latlngbounds.extend(position);
                  var icon = undefined;
                  if (thisClass.markerIconTypeId === "thumbs") {
                    icon = {
                      url: image.thumb || image.src,
                      size: new google.maps.Size(35, 35),
                      scaledSize: new google.maps.Size(35, 35),
                    };
                  } else if (thisClass.markerIconTypeId === "camera") {
                    icon = {
                      path: "M960 864q119 0 203.5 -84.5t84.5 -203.5t-84.5 -203.5t-203.5 -84.5t-203.5 84.5t-84.5 203.5t84.5 203.5t203.5 84.5zM1664 1280q106 0 181 -75t75 -181v-896q0 -106 -75 -181t-181 -75h-1408q-106 0 -181 75t-75 181v896q0 106 75 181t181 75h224l51 136 q19 49 69.5 84.5t103.5 35.5h512q53 0 103.5 -35.5t69.5 -84.5l51 -136h224zM960 128q185 0 316.5 131.5t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z",
                      anchor: new google.maps.Point(15, 30),
                      scale: 0.01,
                      rotation: 180,
                      fillColor: "#cecece",
                      fillOpacity: 0.5,
                      strokeWeight: 1,
                    };
                  }
                  var marker_1 = new google.maps.Marker({
                    position: position,
                    map: thisClass.map,
                    title: image.title,
                    icon: icon,
                  });
                  marker_1.addListener("click", function () {
                    thisClass.mapInfowindows.map(function (item) {
                      return item.close();
                    });
                    var map = marker_1.getMap();
                    if (map) {
                      infowindow_1.open(map, marker_1);
                    }
                  });
                  thisClass.mapMarkers.push(marker_1);
                  thisClass.mapInfowindows.push(infowindow_1);
                }
              };
              var caption;
              for (var i = 0, c = thisClass.images.length; i < c; i++) {
                _loop_3(i, c);
              }
              if (
                thisClass.mapCenter &&
                thisClass.mapCenter.latLng &&
                thisClass.mapCenter.latLng.lat !== 0 &&
                thisClass.mapCenter.latLng.lng !== 0
              ) {
                thisClass.map.setCenter(thisClass.mapCenter.latLng);
                thisClass.map.setZoom(thisClass.zoom);
              } else if (thisClass.mapMarkers.length === 1) {
                thisClass.map.setCenter(new google.maps.LatLng(0, 0));
                thisClass.map.setZoom(thisClass.zoom);
              } else {
                thisClass.map.fitBounds(latlngbounds);
              }
            };
            setTimeout(init, 50);
          });
        }
      };
      GalleryLib.prototype.onImageLoad = function () {
        var _this_1 = this;
        if (this.type === "masonry") {
          this.elem.find(".wb-masonry-items").masonry();
          this.elem.trigger("elementviewchange");
        }
        if (this.delayedUpdateTimeout) clearTimeout(this.delayedUpdateTimeout);
        this.delayedUpdateTimeout = setTimeout(function () {
          _this_1.delayedUpdateTimeout = 0;
          if (_this_1.type === "masonry") {
            _this_1.elem.find(".wb-masonry-items").masonry();
            _this_1.elem.trigger("elementviewchange");
          }
        }, 1000);
      };
      GalleryLib.prototype.getBorderWidth = function (css, side) {
        if (side === void 0) {
          side = 0;
        }
        var border = "";
        if (side == 1 && typeof css.borderLeft === "string")
          border = css.borderLeft;
        if (side == 1 && typeof css["border-left"] === "string")
          border = css["border-left"];
        if (side == 3 && typeof css.borderRight === "string")
          border = css.borderRight;
        if (side == 3 && typeof css["border-right"] === "string")
          border = css["border-right"];
        if (!border && typeof css.border === "string") border = css.border;
        if (border.indexOf("none") === -1) {
          var res = border.match(/^([0-9]+)px(?:| .+)$/);
          if (res) return parseFloat(res[1]);
        }
        return 0;
      };
      GalleryLib.prototype.slideBy = function (delta, instant) {
        if (instant === void 0) {
          instant = !1;
        }
        var behavior = instant ? "instant" : "smooth";
        if (!this.thumbImgCont) return;
        var cont = this.thumbImgCont;
        var div = cont.children().first();
        var pos = div.position();
        var x = cont.get(0).scrollLeft;
        if (typeof delta === "string") {
          x += this.thumbImgCont.width() * 0.95 * (delta === "left" ? -1 : 1);
          cont.get(0).scrollTo({ left: x, behavior: behavior });
        } else {
          var cont_1 = this.thumbImgCont.get(0);
          var thumb = this.thumbImgCont.find(".wb_thumb").get(this.imageIndex);
          if (cont_1 && thumb) {
            var childOffsetRight = thumb.offsetLeft + thumb.offsetWidth;
            var containerScrollRight = cont_1.scrollLeft + cont_1.offsetWidth;
            if (cont_1.scrollLeft > thumb.offsetLeft) {
              cont_1.scrollTo({ left: thumb.offsetLeft, behavior: behavior });
            } else if (containerScrollRight < childOffsetRight) {
              cont_1.scrollTo({
                left:
                  cont_1.scrollLeft + childOffsetRight - containerScrollRight,
                behavior: behavior,
              });
            }
          }
        }
      };
      GalleryLib.prototype.handleContinuousResize = function () {
        if (!this.listImgCont) return;
        if (this.type === "masonry") {
          this.listImgCont.masonry();
        }
      };
      GalleryLib.prototype.handleResize = function () {
        if (!this.listImgCont) return;
        if (this.type === "list") {
          var thumbs = (0, jquery_1.default)(".gallery-list-thumbs", this.elem);
          var thumbsWrap = thumbs.children().first();
          var thumbsElems = (0, jquery_1.default)(".wb_thumb", thumbs);
          var thumbsWidth_1 = 0;
          thumbsElems.each(function (i, elem) {
            var $elem = (0, jquery_1.default)(elem);
            var rect = elem.getBoundingClientRect();
            thumbsWidth_1 += rect.width ? rect.width : rect.right - rect.left;
            thumbsWidth_1 +=
              parseFloat($elem.css("marginLeft")) +
              parseFloat($elem.css("marginRight"));
          });
          thumbsWidth_1 = Math.ceil(thumbsWidth_1);
          thumbsWrap.css({ width: thumbsWidth_1 + "px" });
          thumbs.css({ maxWidth: thumbsWidth_1 + "px" });
          this.listImgCont.css({ height: "" });
          var h = this.elem.height();
          var th = this.fullThumbHeight;
          this.listImgCont.css({ height: h - th - 10 + "px" });
          this.slideBy(this.imageIndex, !0);
          var larr = (0, jquery_1.default)(".gallery-list-left", this.elem);
          var rarr = (0, jquery_1.default)(".gallery-list-right", this.elem);
          if (
            1 <
            this.elem.width() -
              (larr.outerWidth() + thumbs.outerWidth() + rarr.outerWidth())
          ) {
            larr.hide();
            rarr.hide();
          } else {
            larr.show();
            rarr.show();
          }
        } else if (this.type === "masonry") {
          this.listImgCont.css("width", "");
          this.listImgCont.masonry();
        }
        if (this.displayedImage) this.updateImageSize(this.displayedImage);
        if (this.loadingImage) this.updateImageSize(this.loadingImage);
      };
      GalleryLib.prototype.updateImageSize = function (imageCont) {
        if (!this.listImgCont) return;
        if (this.type === "slideshow" || this.type === "list") return;
        var size = imageCont.data("_wb_size_");
        var stl = this.calcImageStyles(this.listImgCont, size);
        imageCont.css({ left: stl.x + "px", top: stl.y + "px" });
        var img = imageCont.children("img").first();
        if (img && img.length) {
          img.css({ width: stl.width + "px", height: stl.height + "px" });
          var imgRaw = img.get(0);
          imgRaw.width = stl.width;
          imgRaw.height = stl.height;
        }
      };
      GalleryLib.prototype.calcImageStyles = function (displayCont, image) {
        if (!image) return { x: 0, y: 0, width: 0, height: 0 };
        var cover = this.imageCover;
        var pad = cover ? 0 : this.padding;
        var maxWidth = displayCont.innerWidth() - pad * 2;
        var maxHeight = displayCont.innerHeight() - pad * 2;
        var w = image.width;
        var h = image.height;
        if (cover || w > maxWidth || h > maxHeight) {
          var ratio1 = w / maxWidth;
          var ratio2 = h / maxHeight;
          var ratio = cover
            ? Math.min(ratio1, ratio2)
            : Math.max(ratio1, ratio2);
          w = Math.floor(w / ratio);
          h = Math.floor(h / ratio);
        }
        return {
          x: Math.floor((maxWidth - w) / 2 + pad),
          y: Math.floor((maxHeight - h) / 2 + pad),
          width: w,
          height: h,
        };
      };
      GalleryLib.prototype.parseHash = function () {
        var hash = window.location.hash.substring(1),
          params = { gid: "", pid: "" };
        if (hash.length < 5) {
          return params;
        }
        var vars = hash.split("&");
        for (var i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue;
          }
          var pair = vars[i].split("=");
          if (pair.length < 2) {
            continue;
          }
          if (i == 1 && pair) {
            params.gid = pair[1];
          }
          if (i == 2 && pair) {
            params.pid = pair[1];
          }
        }
        return params;
      };
      GalleryLib.prototype.isiPhone = function () {
        return /iPhone/.test(navigator.userAgent);
      };
      GalleryLib.prototype.displayImage = function (displayCont, callback) {
        var _this_1 = this;
        if (typeof callback === "function") callback();
        if (this.imageChangedHandler) this.imageChangedHandler();
        var image = this.images[this.imageIndex];
        if (!image) return;
        var link =
          this.type !== "thumbs" && this.type !== "masonry" && image.link
            ? image.link
            : undefined;
        var cont = (
          link ? (0, jquery_1.default)("<a>") : (0, jquery_1.default)("<div>")
        ).addClass("gallery-image");
        if (link) {
          if (/^wb_popup:([^;]*);/.test(link.url)) {
            cont.attr("data-popup", link.url);
            cont.attr("href", "javascript:void(0)");
          } else {
            cont.attr("href", link.url);
          }
          if (link.target) cont.attr("target", link.target);
        }
        if (image.title) cont.attr("title", image.title);
        cont.data("image", image);
        cont.css({ display: "none" });
        if (
          this.thumbShadow &&
          this.thumbShadow.css &&
          ["thumbs", "masonry"].indexOf(this.type) >= 0
        ) {
          cont.css(this.thumbShadow.css);
        }
        var img;
        var imgJq;
        if ((0, exports.isVideoFile)(image.src)) {
          this.currentType = "video";
          imgJq = (0, jquery_1.default)(
            '<video class="wb-video visible" playsinline muted' +
              (this.pauseOnHover ? " loop" : "") +
              ' controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture preload="auto">'
          );
          img = imgJq[0];
          imgJq.on("loadedmetadata", function () {
            var onloaded = function () {
              if (_this_1.displayedImage) _this_1.displayedImage.remove();
              var parent = cont.parent();
              _this_1.displayedImage = parent && parent.length ? cont : null;
              _this_1.loadingImage = null;
              img.play();
            };
            imgJq.css({
              "object-fit": _this_1.imageCover ? "cover" : "contain",
            });
            imgJq.css({ transform: "translate3d(0, 0, 1px)" });
            cont.css({ position: "absolute" });
            cont.append(img);
            var speed = _this_1.getTransitionSpeed();
            if (!speed) {
              cont.show();
              onloaded();
            } else {
              cont.fadeIn(speed, function () {
                cont.css({ position: "" });
                onloaded();
              });
            }
          });
          if (this.slideshowTimer) {
            clearInterval(this.slideshowTimer);
            this.slideshowTimer = 0;
          }
          var _this_2 = this;
          var firstPlay_1 = !0;
          imgJq.on("timeupdate", function () {
            var curTime = Math.round(this.currentTime);
            var endTime = Math.round(this.duration);
            if (
              curTime > 0 &&
              endTime > 0 &&
              curTime >= endTime &&
              firstPlay_1 &&
              !_this_2.pause
            ) {
              firstPlay_1 = !1;
              if (_this_2.slideshowInterval && _this_2.images.length > 1) {
                _this_2.reset();
                _this_2.slideshowNext(callback);
              }
            }
          });
          if (!this.imageCover) {
            var isIphone_1 = this.isiPhone();
            if (isIphone_1) {
              img.controls = !1;
            } else {
              imgJq
                .on("mouseover", function () {
                  this.controls = !0;
                })
                .on("mouseout", function () {
                  this.controls = !1;
                });
            }
            imgJq.on("click", function () {
              if (!isIphone_1) {
                this.controls = !1;
              }
              if (!this.paused) {
                this.pause();
              } else {
                this.play();
              }
            });
          }
        } else {
          this.currentType = "image";
          img = new Image();
          img.alt = "";
          if (image.title) img.alt = image.title;
          imgJq = (0, jquery_1.default)(img);
          img.onload = function () {
            if (_this_1.displayedImage) {
              var caption_1 = _this_1.displayedImage.data("caption");
              _this_1.displayedImage.fadeOut(
                _this_1.getTransitionSpeed(),
                function () {
                  if (_this_1.displayedImage) _this_1.displayedImage.remove();
                }
              );
              if (caption_1) {
                caption_1.fadeOut(_this_1.getTransitionSpeed(), function () {
                  return caption_1.remove();
                });
              }
            }
            cont.append(img);
            imgJq.css({
              "object-fit": _this_1.imageCover ? "cover" : "contain",
            });
            imgJq.css({ transform: "translate3d(0, 0, 1px)" });
            cont.css({ position: "absolute" });
            cont.fadeIn(_this_1.getTransitionSpeed(), function () {
              if (_this_1.displayedImage) _this_1.displayedImage.remove();
              var parent = cont.parent();
              _this_1.displayedImage = parent && parent.length ? cont : null;
              _this_1.loadingImage = null;
              cont.css({ position: "" });
            });
          };
        }
        imgJq.css(
          this.imageCover || !this.border ? { border: "none" } : this.border
        );
        imgJq.on("dragstart", function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
        displayCont.append(cont);
        this.loadingImage = cont;
        var caption = (0, jquery_1.default)(
          '<div class="wb-picture-caption" style="display: none;"/>'
        );
        if (this.captionBackground)
          caption.css("background-color", this.captionBackground);
        if (this.captionPosition)
          caption.addClass(this.captionPosition.split(" ").join("-"));
        if (
          this.fillCaptionContainer(
            caption,
            image,
            this.captionIncludeDescription
          )
        ) {
          if (this.showPictureCaption === "always") {
            caption.fadeIn(this.getTransitionSpeed());
            displayCont.append(caption);
            cont.data("caption", caption);
          } else if (this.showPictureCaption === "hover") {
            displayCont.append(caption);
            cont.data("caption", caption);
            caption.css({ display: "block", opacity: 0 });
            displayCont.hover(
              function () {
                caption.css("opacity", "1");
              },
              function () {
                caption.css("opacity", "0");
              }
            );
          }
        } else {
        }
        img.src = this.urlEncode(image.src, !0, !0);
        if (!link) this.initImageLightBox(imgJq, this.imageIndex);
        if (this.type === "slideshow")
          this.renderSlideshowControls(this.elem.children().first());
        if (this.type === "list") this.slideBy(this.imageIndex);
        if (typeof this.onImageDisplayed === "function")
          this.onImageDisplayed(img.src);
      };
      GalleryLib.prototype.slideshowTo = function (index, callback) {
        if (
          this.images.length === 0 ||
          !this.listImgCont ||
          this.lightBoxDisplayed
        )
          return;
        this.imageIndex = index;
        if (this.imageIndex >= this.images.length) this.imageIndex = 0;
        if (this.imageIndex < 0) this.imageIndex = this.images.length - 1;
        this.displayImage(this.listImgCont, callback);
      };
      GalleryLib.prototype.slideshowNext = function (callback) {
        if (
          this.images.length === 0 ||
          !this.listImgCont ||
          this.lightBoxDisplayed
        )
          return;
        this.imageIndex++;
        if (this.imageIndex >= this.images.length) this.imageIndex = 0;
        this.displayImage(this.listImgCont, callback);
      };
      GalleryLib.prototype.slideshowPrev = function (callback) {
        if (this.images.length === 0 || !this.listImgCont) return;
        this.imageIndex--;
        if (this.imageIndex < 0) this.imageIndex = this.images.length - 1;
        this.displayImage(this.listImgCont, callback);
      };
      GalleryLib.prototype.addImage = function (cont, image, idx, noLightbox) {
        var _this_1 = this;
        if (noLightbox === void 0) {
          noLightbox = !1;
        }
        var isThumbsOnlyMode =
          this.type === "thumbs" || this.type === "masonry";
        var link = isThumbsOnlyMode && image.link ? image.link : undefined;
        var div = (
          link ? (0, jquery_1.default)("<a>") : (0, jquery_1.default)("<div>")
        ).addClass("wb_thumb");
        if (link) {
          if (/^wb_popup:([^;]*);/.test(link.url)) {
            div.attr("data-popup", link.url);
            div.attr("href", "javascript:void(0)");
          } else {
            div.attr("href", link.url);
          }
          if (link.target) div.attr("target", link.target);
        }
        if (image.title) div.attr("title", image.title);
        var tw = this.getThumbWidth();
        var th = this.getThumbHeight();
        var wrp = (0, jquery_1.default)("<div/>");
        wrp.css({
          width: tw + "px",
          overflow: "hidden",
          boxSizing: "content-box",
          position: "relative",
        });
        if (
          this.thumbShadow &&
          this.thumbShadow.css &&
          ["thumbs", "masonry"].indexOf(this.type) >= 0
        ) {
          wrp.css(this.thumbShadow.css);
        }
        if (this.type !== "masonry") wrp.css("height", th + "px");
        var brd = this.getBorder();
        if (isThumbsOnlyMode && brd) wrp.css(brd);
        div.append(wrp);
        div.data("image", image);
        var onloadcb = function (w, h) {
          var k;
          if (_this_1.type === "masonry") {
            k = w / tw;
          } else {
            var k1 = w / tw;
            var k2 = h / th;
            k = Math.min(k1, k2);
          }
          if (_this_1.imageCover) {
            w = w / k;
            h = h / k;
            var x = Math.round((tw - w) / 2);
            var y = _this_1.type === "masonry" ? 0 : Math.round((th - h) / 2);
            img.css({
              left: x + "px",
              top: y + "px",
              width: w + "px",
              height: h + "px",
              border: "",
              objectFit: "cover",
              transform: "translate3d(0, 0, 1px)",
            });
          } else {
            img.css({
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              border: "",
              transform: "translate3d(0, 0, 1px)",
            });
          }
          try {
            var anim = wrp
              .get(0)
              .animate([{ opacity: 0 }, { opacity: 1 }], 150);
            anim.onfinish = function () {
              wrp.css({ opacity: "" });
            };
            anim.play();
          } catch (e) {
            wrp.css({ opacity: "" });
          }
          setTimeout(function () {
            return _this_1.onImageLoad();
          }, 100);
        };
        var img;
        var imgRaw;
        if ((0, exports.isVideoFile)(image.src)) {
          img = (0, jquery_1.default)(
            '<video class="wb-video visible" autoplay loop playsinline muted controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture preload="auto">'
          );
          imgRaw = img[0];
          img.on("loadedmetadata", function () {
            var w = imgRaw.videoWidth;
            var h = imgRaw.videoHeight;
            onloadcb(w, h);
            if (imgRaw instanceof HTMLVideoElement) imgRaw.play();
          });
        } else {
          img = (0, jquery_1.default)('<img loading="lazy" src="" alt="" />');
          if (image.title) img.attr("alt", image.title);
          imgRaw = img.get(0);
          imgRaw.onload = function () {
            var w = imgRaw.width;
            var h = imgRaw.height;
            onloadcb(w, h);
          };
        }
        wrp.css({ opacity: 0 });
        imgRaw.src = this.urlEncode(image.thumb || image.src, !0, !0);
        img.css({ display: "block", maxWidth: "auto", position: "relative" });
        wrp.append(img);
        if (
          isThumbsOnlyMode &&
          this.getThumbWidth() >= 100 &&
          this.showPictureCaption !== "none"
        ) {
          var descDiv_1 = (0, jquery_1.default)(
            '<div class="wb-picture-caption"/>'
          );
          if (this.captionBackground)
            descDiv_1.css("background-color", this.captionBackground);
          if (this.captionPosition)
            descDiv_1.addClass(this.captionPosition.split(" ").join("-"));
          if (
            this.fillCaptionContainer(
              descDiv_1,
              image,
              this.captionIncludeDescription
            )
          ) {
            wrp.append(descDiv_1);
            if (this.showPictureCaption === "hover") {
              descDiv_1.css({
                opacity: 0,
                transition:
                  "opacity " +
                  (this.slideshowSpeed / 1000).toFixed(3) +
                  "s linear",
              });
              div.hover(
                function () {
                  descDiv_1.css("opacity", "1");
                },
                function () {
                  descDiv_1.css("opacity", "0");
                }
              );
            }
          }
        }
        cont.append(div);
        if (!noLightbox && !link) this.initImageLightBox(img, idx);
        return { img: img, wrp: wrp };
      };
      GalleryLib.prototype.fillCaptionContainer = function (
        cont,
        meta,
        createDescription,
        createLink
      ) {
        if (createLink === void 0) {
          createLink = !1;
        }
        var hasAny = !1;
        if (meta.title !== "") {
          hasAny = !0;
          var title = (0, jquery_1.default)(
            '<h3 class="wb-lightbox-title">'
          ).append(
            createLink && meta.link
              ? (0, jquery_1.default)("<a>")
                  .attr({
                    href: meta.link.url,
                    target: meta.link.target ? meta.link.target : null,
                  })
                  .text(meta.title)
              : document.createTextNode(meta.title)
          );
          if (this.captionTitleStyle) title.css(this.captionTitleStyle);
          cont.append(title);
        }
        if (createDescription && meta.description !== "") {
          hasAny = !0;
          var desc = (0, jquery_1.default)(
            '<div class="wb-lightbox-description">'
          ).text(meta.description);
          if (this.captionDescriptionStyle)
            desc.css(this.captionDescriptionStyle);
          cont.append(desc);
        }
        return hasAny;
      };
      GalleryLib.prototype.updateImageMeta = function (updateImage) {
        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {
          var image = _a[_i];
          if (image.src === updateImage.src) {
            jquery_1.default.extend(!0, image, updateImage);
            this.onMetaChange();
            break;
          }
        }
      };
      GalleryLib.prototype.renderMeta = function (
        image,
        createDescription,
        $container,
        $caption
      ) {
        var isNew;
        if ($caption && $caption.length) {
          $caption.empty();
          isNew = !1;
        } else {
          $caption = (0, jquery_1.default)('<div class="wb-picture-caption"/>');
          isNew = !0;
        }
        if (this.captionBackground)
          $caption.css("background-color", this.captionBackground);
        if (this.captionPosition)
          $caption.addClass(this.captionPosition.split(" ").join("-"));
        if (this.fillCaptionContainer($caption, image, createDescription)) {
          if (isNew) {
            $caption.css("opacity", 0);
            $container.append($caption);
            $caption.css("opacity", 1);
          }
          if (this.showPictureCaption === "hover") {
            $caption.css({
              opacity: 0,
              transition:
                "opacity " +
                (this.slideshowSpeed / 1000).toFixed(3) +
                "s linear",
            });
            $container.hover(
              function () {
                $caption && $caption.css("opacity", "1");
              },
              function () {
                $caption && $caption.css("opacity", "0");
              }
            );
          }
          return $caption;
        } else if (!isNew) {
          $caption.detach();
        }
        return null;
      };
      GalleryLib.prototype.onMetaChange = function () {
        var _this_1 = this;
        if (this.metaUpdateTimeout) return;
        this.metaUpdateTimeout = requestAnimationFrame(function () {
          _this_1.metaUpdateTimeout = 0;
          if (_this_1.type === "map") {
            _this_1.renderMap();
          } else if (_this_1.type === "thumbs" || _this_1.type === "masonry") {
            if (
              _this_1.getThumbWidth() >= 100 &&
              _this_1.showPictureCaption !== "none"
            ) {
              var thisClass_1 = _this_1;
              _this_1.elem.find(".wb_thumb").each(function () {
                var $thumb = (0, jquery_1.default)(this);
                var image = $thumb.data("image");
                if (!image) return;
                $thumb.attr("title", image.title || "");
                thisClass_1.renderMeta(
                  image,
                  !1,
                  $thumb.children().first(),
                  (0, jquery_1.default)(".wb-picture-caption", $thumb)
                );
              });
            }
          } else {
            var renderListImageMeta = function ($cont, fadeIn) {
              var $parent = $cont.parent();
              if (!$parent || !$parent.length) return;
              var image = $cont.data("image");
              if (!image) return;
              $cont.attr("title", image.title || "");
              var $prevCaption = $cont.data("caption");
              var $caption = null;
              if (_this_1.showPictureCaption !== "none") {
                $caption = _this_1.renderMeta(image, !0, $parent, $prevCaption);
              }
              $cont.data("caption", $caption);
              if ($caption && !$prevCaption) {
                $caption.addClass("wb-no-transition");
                var opacity = parseFloat(getComputedStyle($cont[0]).opacity);
                if (opacity < 1) {
                  $caption.css("opacity", opacity);
                  if (fadeIn)
                    $caption.fadeTo(
                      Math.floor((1 - opacity) * _this_1.getTransitionSpeed()),
                      1
                    );
                  else
                    $caption.fadeOut(
                      Math.floor(opacity * _this_1.getTransitionSpeed()),
                      function () {
                        return $caption === null || $caption === void 0
                          ? void 0
                          : $caption.remove();
                      }
                    );
                }
              }
            };
            if (_this_1.displayedImage)
              renderListImageMeta(_this_1.displayedImage, !1);
            if (_this_1.loadingImage)
              renderListImageMeta(_this_1.loadingImage, !0);
            if (_this_1.type === "list") {
              (0, jquery_1.default)(".wb_thumb", _this_1.elem).each(
                function () {
                  var $thumb = (0, jquery_1.default)(this);
                  var image = $thumb.data("image");
                  $thumb.attr("title", image.title || "");
                }
              );
            }
          }
        });
      };
      GalleryLib.prototype.constructImagesArray = function () {
        var images = [];
        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {
          var image = _a[_i];
          if ((0, exports.isVideoFile)(image.src)) {
            continue;
          }
          images.push({
            src: image.zoom || image.src,
            w: image.width,
            h: image.height,
            msrc: null,
            title:
              typeof image.title === "string" && image.title.length > 0
                ? image.title
                : " ",
            link: image.link ? image.link : undefined,
            description: image.description ? image.description : "",
          });
        }
        return images;
      };
      GalleryLib.prototype.initImageLightBox = function (img, imageIndex) {
        var _this_1 = this;
        if (img.prop("tagName") == "VIDEO") {
          return;
        }
        var lightBoxInited = GalleryLib.lightBoxInited;
        GalleryLib.lightBoxInited = !0;
        var params;
        if (this.initialRender) {
          params = this.parseHash();
          imageIndex = params.pid ? parseInt(params.pid) : imageIndex;
        }
        if (
          (this.type === "slideshow" ||
            this.type === "list" ||
            this.type === "thumbs" ||
            this.type === "masonry") &&
          this.disablePopup
        )
          return;
        var lightBoxElem = (0, jquery_1.default)(".wb_pswp");
        if (
          !lightBoxInited &&
          this.initialRender &&
          params &&
          params.pid &&
          params.gid === this.id
        ) {
          this.lightBoxDisplayed = !0;
          var images = [];
          images = this.constructImagesArray();
          this.lightBox = new PhotoSwipe(
            lightBoxElem.get(0),
            PhotoSwipeUI_Default,
            images,
            {
              index: imageIndex,
              galleryUID: this.id,
              addCaptionHTMLFn: function (item, captionElement) {
                var cont = (0, jquery_1.default)(captionElement.children[0]);
                cont.empty();
                return _this_1.fillCaptionContainer(cont, item, !0, !0);
              },
              history: !0,
              closeOnScroll: !1,
            }
          );
          this.lightBox.init();
          this.lightBox.listen("destroy", function () {
            _this_1.lightBoxDisplayed = !1;
          });
          this.initialRender = !1;
        }
        img
          .css({ cursor: "pointer" })
          .on("click touchstart touchend touchmove", function (e) {
            var img = (0, jquery_1.default)(e.currentTarget);
            if (e.type === "touchstart") {
              img.data("pswpDisabled", !1);
            } else if (e.type === "touchmove") {
              img.data("pswpDisabled", !0);
            }
            if (
              (e.type === "click" || e.type === "touchend") &&
              !img.data("pswpDisabled")
            ) {
              _this_1.lightBoxDisplayed = !0;
              var images = [];
              images = _this_1.constructImagesArray();
              _this_1.lightBox = new PhotoSwipe(
                lightBoxElem.get(0),
                PhotoSwipeUI_Default,
                images,
                {
                  index: imageIndex,
                  galleryUID: _this_1.id,
                  addCaptionHTMLFn: function (item, captionElement) {
                    var cont = (0, jquery_1.default)(
                      captionElement.children[0]
                    );
                    cont.empty();
                    return _this_1.fillCaptionContainer(cont, item, !0, !0);
                  },
                  history: !0,
                  closeOnScroll: !1,
                }
              );
              _this_1.lightBox.init();
              _this_1.lightBox.listen("destroy", function () {
                _this_1.lightBoxDisplayed = !1;
              });
              lightBoxElem.attr("id", _this_1.id + "_pswp");
            }
          });
      };
      GalleryLib.prototype.urlEncode = function (url, quotes, hash) {
        if (quotes === void 0) {
          quotes = !1;
        }
        if (hash === void 0) {
          hash = !1;
        }
        var url_ = encodeURI(url).replace(/\(/g, "%28").replace(/\)/g, "%29");
        if (quotes) {
          url_ = url_.replace(/\'/g, "%27");
        }
        if (hash) {
          url_ = url_.replace(/#/g, "%23");
        }
        return url_;
      };
      GalleryLib.prototype.initSwipes = function (elem, callback) {
        var self = this;
        var xDiff = null,
          yDiff = null;
        this.elem.css({ "touch-action": "pan-y pinch-zoom" });
        function startSwipe(e) {
          xDiff =
            e.pageX ||
            e.originalEvent.touches[0].screenX ||
            e.originalEvent.touches[0].pageX;
          yDiff =
            e.pageY ||
            e.originalEvent.touches[0].screenY ||
            e.originalEvent.touches[0].pageY;
          (0, jquery_1.default)(document.body).on("mouseup touchend", endSwipe);
        }
        function endSwipe(e) {
          (0, jquery_1.default)(document.body).off(
            "mouseup touchend",
            endSwipe
          );
          if (xDiff && yDiff) {
            xDiff -=
              e.pageX ||
              e.originalEvent.changedTouches[0].screenX ||
              e.originalEvent.changedTouches[0].pageX;
            yDiff -=
              e.pageY ||
              e.originalEvent.changedTouches[0].screenY ||
              e.originalEvent.changedTouches[0].pageY;
            if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 10) {
              if (xDiff < -10) callback("right");
              else if (xDiff > 10) callback("left");
              self.elem.find(".gallery-image > *").data("pswpDisabled", !0);
              setTimeout(function () {
                self.elem.find(".gallery-image > *").data("pswpDisabled", !1);
              }, 100);
            }
            xDiff = yDiff = null;
          }
        }
        elem.on("mousedown touchstart", startSwipe);
        elem.data("_startSwipe", startSwipe);
      };
      GalleryLib.prototype.destroySwipe = function (elem) {
        this.elem.css({ "touch-action": "" });
        var startSwipe = elem.data("_startSwipe");
        if (startSwipe) elem.off("mousedown touchstart", startSwipe);
      };
      GalleryLib.prototype.getImages = function () {
        return __spreadArray([], this.images, !0);
      };
      GalleryLib.prototype.setImages = function (images) {
        this.images = __spreadArray([], images, !0);
        this.invalidate();
      };
      GalleryLib.prototype.setHeight = function (height) {
        this.height = height;
        this.invalidate();
      };
      GalleryLib.prototype.getType = function () {
        return this.type;
      };
      GalleryLib.prototype.setType = function (type) {
        this.type = type;
        this.invalidate();
      };
      GalleryLib.prototype.getSlideshowInterval = function () {
        return this.slideshowInterval;
      };
      GalleryLib.prototype.getSlideshowSpeed = function () {
        return this.slideshowSpeed;
      };
      GalleryLib.prototype.setSlideshowSpeed = function (speed) {
        this.slideshowSpeed = speed;
      };
      GalleryLib.prototype.getTransitionSpeed = function () {
        return this.slideshowInterval > 0
          ? Math.min(
              Math.max(0, this.slideshowInterval * 1000 - 100),
              this.slideshowSpeed
            )
          : this.slideshowSpeed;
      };
      GalleryLib.prototype.getBgColor = function () {
        return this.bgColor;
      };
      GalleryLib.prototype.setBgColor = function (color) {
        this.bgColor = color;
        this.elem.css("background-color", this.bgColor);
      };
      GalleryLib.prototype.getCaptionBackground = function () {
        return this.captionBackground;
      };
      GalleryLib.prototype.setCaptionBackground = function (color) {
        this.captionBackground = color;
        if (this.captionBackground)
          this.elem.find(".wb-picture-caption").css("background-color", color);
      };
      GalleryLib.prototype.getCaptionPosition = function () {
        return this.captionPosition;
      };
      GalleryLib.prototype.setCaptionPosition = function (position) {
        this.captionPosition = position;
        if (this.captionPosition)
          this.elem
            .find(".wb-picture-caption")
            .removeClass(
              "left-top center-top right-top left-center center-center right-center left-bottom center-bottom right-bottom"
            )
            .addClass(position.split(" ").join("-"));
      };
      GalleryLib.prototype.getCaptionTitleStyle = function () {
        return this.captionTitleStyle;
      };
      GalleryLib.prototype.setCaptionTitleStyle = function (css) {
        this.captionTitleStyle = css;
        this.elem.find(".wb-lightbox-title").css(css);
      };
      GalleryLib.prototype.getCaptionDescriptionStyle = function () {
        return this.captionDescriptionStyle;
      };
      GalleryLib.prototype.setCaptionDescriptionStyle = function (css) {
        this.captionDescriptionStyle = css;
        this.elem.find(".wb-lightbox-description").css(css);
      };
      GalleryLib.prototype.getControlsArrow = function () {
        return this.controlsArrow;
      };
      GalleryLib.prototype.setControlsArrow = function (type) {
        this.controlsArrow = type;
      };
      GalleryLib.prototype.getControlsArrowSize = function () {
        return this.controlsArrowSize;
      };
      GalleryLib.prototype.setControlsArrowSize = function (size) {
        this.controlsArrowSize = size;
      };
      GalleryLib.prototype.getControlsArrowStyle = function () {
        return this.controlsArrowStyle;
      };
      GalleryLib.prototype.setControlsArrowStyle = function (style) {
        this.controlsArrowStyle = style;
      };
      GalleryLib.prototype.setFrequency = function (frequency) {
        if (frequency >= 0 && frequency <= 10) {
          this.slideshowInterval = frequency;
          this.reset();
        }
      };
      GalleryLib.prototype.getFrequency = function () {
        return this.slideshowInterval;
      };
      GalleryLib.prototype.setPauseOnHover = function (value) {
        this.pauseOnHover = value;
      };
      GalleryLib.prototype.getPauseOnHover = function () {
        return this.pauseOnHover;
      };
      GalleryLib.prototype.getBorder = function () {
        return this.border;
      };
      GalleryLib.prototype.setBorder = function (border) {
        this.border = border;
        this.elem
          .find(".gallery-image")
          .css(
            this.imageCover || !this.border ? { border: "none" } : this.border
          );
        this.invalidate();
      };
      GalleryLib.prototype.getPadding = function () {
        return this.padding;
      };
      GalleryLib.prototype.getThumbWidth = function () {
        return this.thumbWidth ? this.thumbWidth : config.thumbWidth;
      };
      GalleryLib.prototype.getThumbHeight = function () {
        return this.thumbHeight ? this.thumbHeight : config.thumbHeight;
      };
      GalleryLib.prototype.getThumbAlign = function () {
        return this.thumbAlign;
      };
      GalleryLib.prototype.getThumbPadding = function () {
        return this.thumbPadding;
      };
      GalleryLib.prototype.setPadding = function (padding) {
        this.padding = padding;
        this.invalidate();
      };
      GalleryLib.prototype.setThumbWidth = function (width) {
        this.thumbWidth = width;
        this.invalidate();
      };
      GalleryLib.prototype.setThumbHeight = function (height) {
        this.thumbHeight = height;
        this.invalidate();
      };
      GalleryLib.prototype.setThumbAlign = function (align) {
        this.thumbAlign = align;
        this.invalidate();
      };
      GalleryLib.prototype.setThumbPadding = function (padding) {
        this.thumbPadding = padding;
        this.invalidate();
      };
      GalleryLib.prototype.getThumbAnim = function () {
        return this.thumbAnim;
      };
      GalleryLib.prototype.setThumbAnim = function (value) {
        if (value && "_preview" in value && value._preview) {
          delete value._preview;
        }
        this.thumbAnim = value;
        this.invalidate();
      };
      GalleryLib.prototype.getThumbShadow = function () {
        return this.thumbShadow;
      };
      GalleryLib.prototype.setThumbShadow = function (value) {
        this.thumbShadow = value;
        this.invalidate();
      };
      GalleryLib.prototype.setImageCover = function (value) {
        this.imageCover = value;
        this.invalidate();
      };
      GalleryLib.prototype.setDisablePopup = function (value) {
        this.disablePopup = value;
        this.invalidate();
      };
      GalleryLib.prototype.setSlideOpacity = function (value) {
        this.slideOpacity = value;
        if (this.type === "slideshow" && this.listImgCont) {
          this.listImgCont.css("opacity", this.slideOpacity / 100);
        }
      };
      GalleryLib.prototype.getImageCover = function () {
        return this.imageCover;
      };
      GalleryLib.prototype.getDisablePopup = function () {
        return this.disablePopup;
      };
      GalleryLib.prototype.getSlideOpacity = function () {
        return this.slideOpacity;
      };
      GalleryLib.prototype.setShowPictureCaption = function (value) {
        this.showPictureCaption = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowPictureCaption = function () {
        return this.showPictureCaption;
      };
      GalleryLib.prototype.setCaptionIncludeDescription = function (value) {
        this.captionIncludeDescription = value;
        this.invalidate();
      };
      GalleryLib.prototype.getCaptionIncludeDescription = function () {
        return this.captionIncludeDescription;
      };
      GalleryLib.prototype.getMapTypeId = function () {
        return this.mapTypeId;
      };
      GalleryLib.prototype.setMapTypeId = function (value) {
        this.mapTypeId = value;
        this.invalidate();
      };
      GalleryLib.prototype.getMarkerIconTypeId = function () {
        return this.markerIconTypeId;
      };
      GalleryLib.prototype.setMarkerIconTypeId = function (value) {
        this.markerIconTypeId = value;
        this.invalidate();
      };
      GalleryLib.prototype.getZoom = function () {
        return this.zoom;
      };
      GalleryLib.prototype.setZoom = function (value) {
        this.zoom = value;
        this.invalidate();
      };
      GalleryLib.prototype.getMapCenter = function () {
        return this.mapCenter;
      };
      GalleryLib.prototype.setMapCenter = function (value) {
        this.mapCenter = value;
        this.invalidate();
      };
      GalleryLib.prototype.getKey = function () {
        return this.key;
      };
      GalleryLib.prototype.setKey = function (value) {
        this.key = value;
        this.invalidate();
      };
      GalleryLib.prototype.getTheme = function () {
        return this.theme;
      };
      GalleryLib.prototype.setTheme = function (value) {
        this.theme = value;
        this.invalidate();
      };
      GalleryLib.prototype.getColor = function () {
        return this.color;
      };
      GalleryLib.prototype.setColor = function (value) {
        this.color = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowSatellite = function () {
        return this.showSatellite;
      };
      GalleryLib.prototype.setShowSatellite = function (value) {
        this.showSatellite = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowZoom = function () {
        return this.showZoom;
      };
      GalleryLib.prototype.setShowZoom = function (value) {
        this.showZoom = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowStreetView = function () {
        return this.showStreetView;
      };
      GalleryLib.prototype.setShowStreetView = function (value) {
        this.showStreetView = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowFullscreen = function () {
        return this.showFullscreen;
      };
      GalleryLib.prototype.setShowFullscreen = function (value) {
        this.showFullscreen = value;
        this.invalidate();
      };
      GalleryLib.prototype.getAllowDragging = function () {
        return this.allowDragging;
      };
      GalleryLib.prototype.setAllowDragging = function (value) {
        this.allowDragging = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowRoads = function () {
        return this.showRoads;
      };
      GalleryLib.prototype.setShowRoads = function (value) {
        this.showRoads = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowLandmarks = function () {
        return this.showLandmarks;
      };
      GalleryLib.prototype.setShowLandmarks = function (value) {
        this.showLandmarks = value;
        this.invalidate();
      };
      GalleryLib.prototype.getShowLabels = function () {
        return this.showLabels;
      };
      GalleryLib.prototype.setShowLabels = function (value) {
        this.showLabels = value;
        this.invalidate();
      };
      GalleryLib.lightBoxInited = !1;
      GalleryLib.galleryLibList = [];
      return GalleryLib;
    })();
    exports.GalleryLib = GalleryLib;
  });
  this.require = tmpRequire;
  delete this.module;
  if (this.exports && this.exports.GalleryLib) {
    this.wbmodGalleryLib = this.exports.GalleryLib;
  }
  delete this.exports;
}).call(window);
