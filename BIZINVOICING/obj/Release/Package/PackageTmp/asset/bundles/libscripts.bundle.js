!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (T, e) {
  'use strict';
  var t = [],
    C = T.document,
    i = Object.getPrototypeOf,
    a = t.slice,
    g = t.concat,
    l = t.push,
    r = t.indexOf,
    n = {},
    o = n.toString,
    m = n.hasOwnProperty,
    s = m.toString,
    u = s.call(Object),
    v = {},
    y = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    _ = function (e) {
      return null != e && e === e.window;
    },
    c = { type: !0, src: !0, noModule: !0 };
  function b(e, t, n) {
    var i,
      r = (t = t || C).createElement('script');
    if (((r.text = e), n)) for (i in c) n[i] && (r[i] = n[i]);
    t.head.appendChild(r).parentNode.removeChild(r);
  }
  function w(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[o.call(e)] || 'object'
      : typeof e;
  }
  var x = function (e, t) {
      return new x.fn.init(e, t);
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function h(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e);
    return (
      !y(e) &&
      !_(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (x.fn = x.prototype =
    {
      jquery: '3.3.1',
      constructor: x,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (e) {
        return null == e
          ? a.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = x.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return x.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          x.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: l,
      sort: t.sort,
      splice: t.splice,
    }),
    (x.extend = x.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;
        for (
          'boolean' == typeof s && ((u = s), (s = arguments[a] || {}), a++),
            'object' == typeof s || y(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (i = e[t]) &&
                  (u && i && (x.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((o = r
                        ? ((r = !1), n && Array.isArray(n) ? n : [])
                        : n && x.isPlainObject(n)
                        ? n
                        : {}),
                      (s[t] = x.extend(u, o, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    x.extend({
      expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== o.call(e) ||
          ((t = i(e)) &&
            ('function' !=
              typeof (n = m.call(t, 'constructor') && t.constructor) ||
              s.call(n) !== u))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        b(e);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (h(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(f, '');
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (h(Object(e))
              ? x.merge(n, 'string' == typeof e ? [e] : e)
              : l.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : r.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          o = 0,
          s = [];
        if (h(e))
          for (i = e.length; o < i; o++)
            null != (r = t(e[o], o, n)) && s.push(r);
        else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
        return g.apply([], s);
      },
      guid: 1,
      support: v,
    }),
    'function' == typeof Symbol && (x.fn[Symbol.iterator] = t[Symbol.iterator]),
    x.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      r,
      p,
      f,
      g,
      w,
      l,
      u,
      E,
      T,
      s,
      C,
      m,
      a,
      c,
      v,
      x = 'sizzle' + 1 * new Date(),
      y = n.document,
      S = 0,
      i = 0,
      h = se(),
      _ = se(),
      D = se(),
      A = function (e, t) {
        return e === t && (u = !0), 0;
      },
      N = {}.hasOwnProperty,
      t = [],
      I = t.pop,
      k = t.push,
      O = t.push,
      j = t.slice,
      L = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      H = '[\\x20\\t\\r\\n\\f]',
      q = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      R =
        '\\[' +
        H +
        '*(' +
        q +
        ')(?:' +
        H +
        '*([*^$|!~]?=)' +
        H +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        q +
        '))|)' +
        H +
        '*\\]',
      M =
        ':(' +
        q +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        R +
        ')*)|.*)\\)|)',
      W = new RegExp(H + '+', 'g'),
      F = new RegExp('^' + H + '+|((?:^|[^\\\\])(?:\\\\.)*)' + H + '+$', 'g'),
      B = new RegExp('^' + H + '*,' + H + '*'),
      U = new RegExp('^' + H + '*([>+~]|' + H + ')' + H + '*'),
      Q = new RegExp('=' + H + '*([^\\]\'"]*?)' + H + '*\\]', 'g'),
      K = new RegExp(M),
      $ = new RegExp('^' + q + '$'),
      V = {
        ID: new RegExp('^#(' + q + ')'),
        CLASS: new RegExp('^\\.(' + q + ')'),
        TAG: new RegExp('^(' + q + '|[*])'),
        ATTR: new RegExp('^' + R),
        PSEUDO: new RegExp('^' + M),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            H +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            H +
            '*(?:([+-]|)' +
            H +
            '*(\\d+)|))' +
            H +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + P + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            H +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            H +
            '*((?:-\\d)?\\d*)' +
            H +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      z = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      X = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      Z = new RegExp('\\\\([\\da-f]{1,6}' + H + '?|(' + H + ')|.)', 'ig'),
      ee = function (e, t, n) {
        var i = '0x' + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? '\0' === e
            ? '�'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      ie = function () {
        E();
      },
      re = ye(
        function (e) {
          return !0 === e.disabled && ('form' in e || 'label' in e);
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      O.apply((t = j.call(y.childNodes)), y.childNodes),
        t[y.childNodes.length].nodeType;
    } catch (n) {
      O = {
        apply: t.length
          ? function (e, t) {
              k.apply(e, j.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, n, i) {
      var r,
        o,
        s,
        a,
        l,
        u,
        c,
        f = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : y) !== T && E(t), (t = t || T), C)
      ) {
        if (11 !== h && (l = G.exec(e)))
          if ((r = l[1])) {
            if (9 === h) {
              if (!(s = t.getElementById(r))) return n;
              if (s.id === r) return n.push(s), n;
            } else if (f && (s = f.getElementById(r)) && v(t, s) && s.id === r)
              return n.push(s), n;
          } else {
            if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
            if (
              (r = l[3]) &&
              d.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(n, t.getElementsByClassName(r)), n;
          }
        if (d.qsa && !D[e + ' '] && (!m || !m.test(e))) {
          if (1 !== h) (f = t), (c = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute('id'))
                ? (a = a.replace(te, ne))
                : t.setAttribute('id', (a = x)),
                o = (u = p(e)).length;
              o--;

            )
              u[o] = '#' + a + ' ' + ve(u[o]);
            (c = u.join(',')), (f = (J.test(e) && ge(t.parentNode)) || t);
          }
          if (c)
            try {
              return O.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
            } finally {
              a === x && t.removeAttribute('id');
            }
        }
      }
      return g(e.replace(F, '$1'), t, n, i);
    }
    function se() {
      var i = [];
      return function e(t, n) {
        return (
          i.push(t + ' ') > b.cacheLength && delete e[i.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function ae(e) {
      return (e[x] = !0), e;
    }
    function le(e) {
      var t = T.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split('|'), i = n.length; i--; ) b.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n;
      };
    }
    function de(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && re(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function pe(s) {
      return ae(function (o) {
        return (
          (o = +o),
          ae(function (e, t) {
            for (var n, i = s([], e.length, o), r = i.length; r--; )
              e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((d = oe.support = {}),
    (r = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && 'HTML' !== t.nodeName;
      }),
    (E = oe.setDocument =
      function (e) {
        var t,
          n,
          i = e ? e.ownerDocument || e : y;
        return (
          i !== T &&
            9 === i.nodeType &&
            i.documentElement &&
            ((s = (T = i).documentElement),
            (C = !r(T)),
            y !== T &&
              (n = T.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener('unload', ie, !1)
                : n.attachEvent && n.attachEvent('onunload', ie)),
            (d.attributes = le(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (d.getElementsByTagName = le(function (e) {
              return (
                e.appendChild(T.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (d.getElementsByClassName = X.test(T.getElementsByClassName)),
            (d.getById = le(function (e) {
              return (
                (s.appendChild(e).id = x),
                !T.getElementsByName || !T.getElementsByName(x).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(Z, ee);
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && C) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' !== e) return o;
                  for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && C)
                  return t.getElementsByClassName(e);
              }),
            (a = []),
            (m = []),
            (d.qsa = X.test(T.querySelectorAll)) &&
              (le(function (e) {
                (s.appendChild(e).innerHTML =
                  "<a id='" +
                  x +
                  "'></a><select id='" +
                  x +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push('[*^$]=' + H + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    m.push('\\[' + H + '*(?:value|' + P + ')'),
                  e.querySelectorAll('[id~=' + x + '-]').length || m.push('~='),
                  e.querySelectorAll(':checked').length || m.push(':checked'),
                  e.querySelectorAll('a#' + x + '+*').length ||
                    m.push('.#.+[+~]');
              }),
              le(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    m.push('name' + H + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    m.push(':enabled', ':disabled'),
                  (s.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    m.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  m.push(',.*:');
              })),
            (d.matchesSelector = X.test(
              (c =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              le(function (e) {
                (d.disconnectedMatch = c.call(e, '*')),
                  c.call(e, "[s!='']:x"),
                  a.push('!=', M);
              }),
            (m = m.length && new RegExp(m.join('|'))),
            (a = a.length && new RegExp(a.join('|'))),
            (t = X.test(s.compareDocumentPosition)),
            (v =
              t || X.test(s.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (A = t
              ? function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === T || (e.ownerDocument === y && v(y, e))
                        ? -1
                        : t === T || (t.ownerDocument === y && v(y, t))
                        ? 1
                        : l
                        ? L(l, e) - L(l, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (u = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e === T
                      ? -1
                      : t === T
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : l
                      ? L(l, e) - L(l, t)
                      : 0;
                  if (r === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? ce(s[i], a[i])
                    : s[i] === y
                    ? -1
                    : a[i] === y
                    ? 1
                    : 0;
                })),
          T
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== T && E(e),
        (t = t.replace(Q, "='$1']")),
        d.matchesSelector &&
          C &&
          !D[t + ' '] &&
          (!a || !a.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < oe(t, T, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== T && E(e), v(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== T && E(e);
      var n = b.attrHandle[t.toLowerCase()],
        i = n && N.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== i
        ? i
        : d.attributes || !C
        ? e.getAttribute(t)
        : (i = e.getAttributeNode(t)) && i.specified
        ? i.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + '').replace(te, ne);
    }),
    (oe.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        r = 0;
      if (
        ((u = !d.detectDuplicates),
        (l = !d.sortStable && e.slice(0)),
        e.sort(A),
        u)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
        for (; i--; ) e.splice(n[i], 1);
      }
      return (l = null), e;
    }),
    (o = oe.getText =
      function (e) {
        var t,
          n = '',
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += o(t);
        return n;
      }),
    ((b = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: ae,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    K.test(n) &&
                    (t = p(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = h[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + H + ')' + e + '(' + H + '|$)')) &&
                h(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (n, i, r) {
            return function (e) {
              var t = oe.attr(e, n);
              return null == t
                ? '!=' === i
                : !i ||
                    ((t += ''),
                    '=' === i
                      ? t === r
                      : '!=' === i
                      ? t !== r
                      : '^=' === i
                      ? r && 0 === t.indexOf(r)
                      : '*=' === i
                      ? r && -1 < t.indexOf(r)
                      : '$=' === i
                      ? r && t.slice(-r.length) === r
                      : '~=' === i
                      ? -1 < (' ' + t.replace(W, ' ') + ' ').indexOf(r)
                      : '|=' === i &&
                        (t === r || t.slice(0, r.length + 1) === r + '-'));
            };
          },
          CHILD: function (p, e, t, g, m) {
            var v = 'nth' !== p.slice(0, 3),
              y = 'last' !== p.slice(-4),
              _ = 'of-type' === e;
            return 1 === g && 0 === m
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u = v !== y ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = _ && e.nodeName.toLowerCase(),
                    h = !n && !_,
                    d = !1;
                  if (c) {
                    if (v) {
                      for (; u; ) {
                        for (s = e; (s = s[u]); )
                          if (
                            _
                              ? s.nodeName.toLowerCase() === f
                              : 1 === s.nodeType
                          )
                            return !1;
                        l = u = 'only' === p && !l && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((l = [y ? c.firstChild : c.lastChild]), y && h)) {
                      for (
                        d =
                          (a =
                            (i =
                              (r =
                                (o = (s = c)[x] || (s[x] = {}))[s.uniqueID] ||
                                (o[s.uniqueID] = {}))[p] || [])[0] === S &&
                            i[1]) && i[2],
                          s = a && c.childNodes[a];
                        (s = (++a && s && s[u]) || (d = a = 0) || l.pop());

                      )
                        if (1 === s.nodeType && ++d && s === e) {
                          r[p] = [S, a, d];
                          break;
                        }
                    } else if (
                      (h &&
                        (d = a =
                          (i =
                            (r =
                              (o = (s = e)[x] || (s[x] = {}))[s.uniqueID] ||
                              (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]),
                      !1 === d)
                    )
                      for (
                        ;
                        (s = (++a && s && s[u]) || (d = a = 0) || l.pop()) &&
                        ((_
                          ? s.nodeName.toLowerCase() !== f
                          : 1 !== s.nodeType) ||
                          !++d ||
                          (h &&
                            ((r =
                              (o = s[x] || (s[x] = {}))[s.uniqueID] ||
                              (o[s.uniqueID] = {}))[p] = [S, d]),
                          s !== e));

                      );
                    return (d -= m) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              s =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                oe.error('unsupported pseudo: ' + e);
            return s[x]
              ? s(o)
              : 1 < s.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ae(function (e, t) {
                      for (var n, i = s(e, o), r = i.length; r--; )
                        e[(n = L(e, i[r]))] = !(t[n] = i[r]);
                    })
                  : function (e) {
                      return s(e, 0, t);
                    })
              : s;
          },
        },
        pseudos: {
          not: ae(function (e) {
            var i = [],
              r = [],
              a = f(e.replace(F, '$1'));
            return a[x]
              ? ae(function (e, t, n, i) {
                  for (var r, o = a(e, null, i, []), s = e.length; s--; )
                    (r = o[s]) && (e[s] = !(t[s] = r));
                })
              : function (e, t, n) {
                  return (i[0] = e), a(i, null, n, r), (i[0] = null), !r.pop();
                };
          }),
          has: ae(function (t) {
            return function (e) {
              return 0 < oe(t, e).length;
            };
          }),
          contains: ae(function (t) {
            return (
              (t = t.replace(Z, ee)),
              function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
              }
            );
          }),
          lang: ae(function (n) {
            return (
              $.test(n || '') || oe.error('unsupported lang: ' + n),
              (n = n.replace(Z, ee).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
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
            return e === s;
          },
          focus: function (e) {
            return (
              e === T.activeElement &&
              (!T.hasFocus || T.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
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
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return z.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: pe(function () {
            return [0];
          }),
          last: pe(function (e, t) {
            return [t - 1];
          }),
          eq: pe(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: pe(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: pe(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: pe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: pe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = fe(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function ve(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function ye(a, e, t) {
      var l = e.dir,
        u = e.next,
        c = u || l,
        f = t && 'parentNode' === c,
        h = i++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[l]); ) if (1 === e.nodeType || f) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var i,
              r,
              o,
              s = [S, h];
            if (n) {
              for (; (e = e[l]); )
                if ((1 === e.nodeType || f) && a(e, t, n)) return !0;
            } else
              for (; (e = e[l]); )
                if (1 === e.nodeType || f)
                  if (
                    ((r =
                      (o = e[x] || (e[x] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    u && u === e.nodeName.toLowerCase())
                  )
                    e = e[l] || e;
                  else {
                    if ((i = r[c]) && i[0] === S && i[1] === h)
                      return (s[2] = i[2]);
                    if (((r[c] = s)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function _e(r) {
      return 1 < r.length
        ? function (e, t, n) {
            for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
            return !0;
          }
        : r[0];
    }
    function be(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
      return s;
    }
    function we(d, p, g, m, v, e) {
      return (
        m && !m[x] && (m = we(m)),
        v && !v[x] && (v = we(v, e)),
        ae(function (e, t, n, i) {
          var r,
            o,
            s,
            a = [],
            l = [],
            u = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                return n;
              })(p || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && p) ? c : be(c, a, d, n, i),
            h = g ? (v || (e ? d : u || m) ? [] : t) : f;
          if ((g && g(f, h, n, i), m))
            for (r = be(h, l), m(r, [], n, i), o = r.length; o--; )
              (s = r[o]) && (h[l[o]] = !(f[l[o]] = s));
          if (e) {
            if (v || d) {
              if (v) {
                for (r = [], o = h.length; o--; )
                  (s = h[o]) && r.push((f[o] = s));
                v(null, (h = []), r, i);
              }
              for (o = h.length; o--; )
                (s = h[o]) &&
                  -1 < (r = v ? L(e, s) : a[o]) &&
                  (e[r] = !(t[r] = s));
            }
          } else (h = be(h === t ? h.splice(u, h.length) : h)), v ? v(null, t, h, i) : O.apply(t, h);
        })
      );
    }
    function Ee(e) {
      for (
        var r,
          t,
          n,
          i = e.length,
          o = b.relative[e[0].type],
          s = o || b.relative[' '],
          a = o ? 1 : 0,
          l = ye(
            function (e) {
              return e === r;
            },
            s,
            !0
          ),
          u = ye(
            function (e) {
              return -1 < L(r, e);
            },
            s,
            !0
          ),
          c = [
            function (e, t, n) {
              var i =
                (!o && (n || t !== w)) ||
                ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
              return (r = null), i;
            },
          ];
        a < i;
        a++
      )
        if ((t = b.relative[e[a].type])) c = [ye(_e(c), t)];
        else {
          if ((t = b.filter[e[a].type].apply(null, e[a].matches))[x]) {
            for (n = ++a; n < i && !b.relative[e[n].type]; n++);
            return we(
              1 < a && _e(c),
              1 < a &&
                ve(
                  e
                    .slice(0, a - 1)
                    .concat({ value: ' ' === e[a - 2].type ? '*' : '' })
                ).replace(F, '$1'),
              t,
              a < n && Ee(e.slice(a, n)),
              n < i && Ee((e = e.slice(n))),
              n < i && ve(e)
            );
          }
          c.push(t);
        }
      return _e(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (p = oe.tokenize =
        function (e, t) {
          var n,
            i,
            r,
            o,
            s,
            a,
            l,
            u = _[e + ' '];
          if (u) return t ? 0 : u.slice(0);
          for (s = e, a = [], l = b.preFilter; s; ) {
            for (o in ((n && !(i = B.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), a.push((r = []))),
            (n = !1),
            (i = U.exec(s)) &&
              ((n = i.shift()),
              r.push({ value: n, type: i[0].replace(F, ' ') }),
              (s = s.slice(n.length))),
            b.filter))
              !(i = V[o].exec(s)) ||
                (l[o] && !(i = l[o](i))) ||
                ((n = i.shift()),
                r.push({ value: n, type: o, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : _(e, a).slice(0);
        }),
      (f = oe.compile =
        function (e, t) {
          var n,
            m,
            v,
            y,
            _,
            i,
            r = [],
            o = [],
            s = D[e + ' '];
          if (!s) {
            for (t || (t = p(e)), n = t.length; n--; )
              (s = Ee(t[n]))[x] ? r.push(s) : o.push(s);
            (s = D(
              e,
              ((m = o),
              (v = r),
              (y = 0 < v.length),
              (_ = 0 < m.length),
              (i = function (e, t, n, i, r) {
                var o,
                  s,
                  a,
                  l = 0,
                  u = '0',
                  c = e && [],
                  f = [],
                  h = w,
                  d = e || (_ && b.find.TAG('*', r)),
                  p = (S += null == h ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  r && (w = t === T || t || r);
                  u !== g && null != (o = d[u]);
                  u++
                ) {
                  if (_ && o) {
                    for (
                      s = 0, t || o.ownerDocument === T || (E(o), (n = !C));
                      (a = m[s++]);

                    )
                      if (a(o, t || T, n)) {
                        i.push(o);
                        break;
                      }
                    r && (S = p);
                  }
                  y && ((o = !a && o) && l--, e && c.push(o));
                }
                if (((l += u), y && u !== l)) {
                  for (s = 0; (a = v[s++]); ) a(c, f, t, n);
                  if (e) {
                    if (0 < l) for (; u--; ) c[u] || f[u] || (f[u] = I.call(i));
                    f = be(f);
                  }
                  O.apply(i, f),
                    r &&
                      !e &&
                      0 < f.length &&
                      1 < l + v.length &&
                      oe.uniqueSort(i);
                }
                return r && ((S = p), (w = h)), c;
              }),
              y ? ae(i) : i)
            )).selector = e;
          }
          return s;
        }),
      (g = oe.select =
        function (e, t, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u = 'function' == typeof e && e,
            c = !i && p((e = u.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              'ID' === (s = o[0]).type &&
              9 === t.nodeType &&
              C &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(s.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              r = V.needsContext.test(e) ? 0 : o.length;
              r-- && ((s = o[r]), !b.relative[(a = s.type)]);

            )
              if (
                (l = b.find[a]) &&
                (i = l(
                  s.matches[0].replace(Z, ee),
                  (J.test(o[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(r, 1), !(e = i.length && ve(o))))
                  return O.apply(n, i), n;
                break;
              }
          }
          return (
            (u || f(e, c))(
              i,
              t,
              !C,
              n,
              !t || (J.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = x.split('').sort(A).join('') === x),
      (d.detectDuplicates = !!u),
      E(),
      (d.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement('fieldset'));
      })),
      le(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        ue('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        le(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        ue('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      le(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        ue(P, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      oe
    );
  })(T);
  (x.find = d),
    (x.expr = d.selectors),
    (x.expr[':'] = x.expr.pseudos),
    (x.uniqueSort = x.unique = d.uniqueSort),
    (x.text = d.getText),
    (x.isXMLDoc = d.isXML),
    (x.contains = d.contains),
    (x.escapeSelector = d.escape);
  var p = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && x(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    E = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    S = x.expr.match.needsContext;
  function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function N(e, n, i) {
    return y(n)
      ? x.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        })
      : n.nodeType
      ? x.grep(e, function (e) {
          return (e === n) !== i;
        })
      : 'string' != typeof n
      ? x.grep(e, function (e) {
          return -1 < r.call(n, e) !== i;
        })
      : x.filter(n, e, i);
  }
  (x.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? x.find.matchesSelector(i, e)
          ? [i]
          : []
        : x.find.matches(
            e,
            x.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    x.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ('string' != typeof e)
          return this.pushStack(
            x(e).filter(function () {
              for (t = 0; t < i; t++) if (x.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, r[t], n);
        return 1 < i ? x.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, 'string' == typeof e && S.test(e) ? x(e) : e || [], !1)
          .length;
      },
    });
  var I,
    k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((x.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || I), 'string' != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : y(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(x)
        : x.makeArray(e, this);
    if (
      !(i =
        '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : k.exec(e)) ||
      (!i[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (i[1]) {
      if (
        ((t = t instanceof x ? t[0] : t),
        x.merge(
          this,
          x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
        ),
        A.test(i[1]) && x.isPlainObject(t))
      )
        for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      return this;
    }
    return (
      (r = C.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
    );
  }).prototype = x.fn),
    (I = x(C));
  var O = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  x.fn.extend({
    has: function (e) {
      var t = x(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = 'string' != typeof e && x(e);
      if (!S.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && x.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? x.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? r.call(x(e), this[0])
          : r.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    x.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return p(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return p(e, 'parentNode', n);
        },
        next: function (e) {
          return L(e, 'nextSibling');
        },
        prev: function (e) {
          return L(e, 'previousSibling');
        },
        nextAll: function (e) {
          return p(e, 'nextSibling');
        },
        prevAll: function (e) {
          return p(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return p(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return p(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return E((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return E(e.firstChild);
        },
        contents: function (e) {
          return D(e, 'iframe')
            ? e.contentDocument
            : (D(e, 'template') && (e = e.content || e),
              x.merge([], e.childNodes));
        },
      },
      function (i, r) {
        x.fn[i] = function (e, t) {
          var n = x.map(this, r, e);
          return (
            'Until' !== i.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = x.filter(t, n)),
            1 < this.length &&
              (j[i] || x.uniqueSort(n), O.test(i) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function H(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function R(e, t, n, i) {
    var r;
    try {
      e && y((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && y((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (x.Callbacks = function (i) {
    var e, n;
    i =
      'string' == typeof i
        ? ((e = i),
          (n = {}),
          x.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : x.extend({}, i);
    var r,
      t,
      o,
      s,
      a = [],
      l = [],
      u = -1,
      c = function () {
        for (s = s || i.once, o = r = !0; l.length; u = -1)
          for (t = l.shift(); ++u < a.length; )
            !1 === a[u].apply(t[0], t[1]) &&
              i.stopOnFalse &&
              ((u = a.length), (t = !1));
        i.memory || (t = !1), (r = !1), s && (a = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            a &&
              (t && !r && ((u = a.length - 1), l.push(t)),
              (function n(e) {
                x.each(e, function (e, t) {
                  y(t)
                    ? (i.unique && f.has(t)) || a.push(t)
                    : t && t.length && 'string' !== w(t) && n(t);
                });
              })(arguments),
              t && !r && c()),
            this
          );
        },
        remove: function () {
          return (
            x.each(arguments, function (e, t) {
              for (var n; -1 < (n = x.inArray(t, a, n)); )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < x.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = l = []), (a = t = ''), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = l = []), t || r || (a = t = ''), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              r || c()),
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
    x.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              x.Callbacks('memory'),
              x.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              x.Callbacks('once memory'),
              x.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              x.Callbacks('once memory'),
              x.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          r = 'pending',
          s = {
            state: function () {
              return r;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return s.then(null, e);
            },
            pipe: function () {
              var r = arguments;
              return x
                .Deferred(function (i) {
                  x.each(o, function (e, t) {
                    var n = y(r[t[4]]) && r[t[4]];
                    a[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && y(e.promise)
                        ? e
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[t[0] + 'With'](this, n ? [e] : arguments);
                    });
                  }),
                    (r = null);
                })
                .promise();
            },
            then: function (t, n, i) {
              var l = 0;
              function u(r, o, s, a) {
                return function () {
                  var n = this,
                    i = arguments,
                    e = function () {
                      var e, t;
                      if (!(r < l)) {
                        if ((e = s.apply(n, i)) === o.promise())
                          throw new TypeError('Thenable self-resolution');
                        (t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          y(t)
                            ? a
                              ? t.call(e, u(l, o, H, a), u(l, o, q, a))
                              : (l++,
                                t.call(
                                  e,
                                  u(l, o, H, a),
                                  u(l, o, q, a),
                                  u(l, o, H, o.notifyWith)
                                ))
                            : (s !== H && ((n = void 0), (i = [e])),
                              (a || o.resolveWith)(n, i));
                      }
                    },
                    t = a
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            x.Deferred.exceptionHook &&
                              x.Deferred.exceptionHook(e, t.stackTrace),
                              l <= r + 1 &&
                                (s !== q && ((n = void 0), (i = [e])),
                                o.rejectWith(n, i));
                          }
                        };
                  r
                    ? t()
                    : (x.Deferred.getStackHook &&
                        (t.stackTrace = x.Deferred.getStackHook()),
                      T.setTimeout(t));
                };
              }
              return x
                .Deferred(function (e) {
                  o[0][3].add(u(0, e, y(i) ? i : H, e.notifyWith)),
                    o[1][3].add(u(0, e, y(t) ? t : H)),
                    o[2][3].add(u(0, e, y(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? x.extend(e, s) : s;
            },
          },
          a = {};
        return (
          x.each(o, function (e, t) {
            var n = t[2],
              i = t[5];
            (s[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    r = i;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (a[t[0]] = function () {
                return (
                  a[t[0] + 'With'](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[t[0] + 'With'] = n.fireWith);
          }),
          s.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          i = Array(t),
          r = a.call(arguments),
          o = x.Deferred(),
          s = function (t) {
            return function (e) {
              (i[t] = this),
                (r[t] = 1 < arguments.length ? a.call(arguments) : e),
                --n || o.resolveWith(i, r);
            };
          };
        if (
          n <= 1 &&
          (R(e, o.done(s(t)).resolve, o.reject, !n),
          'pending' === o.state() || y(r[t] && r[t].then))
        )
          return o.then();
        for (; t--; ) R(r[t], s(t), o.reject);
        return o.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (x.Deferred.exceptionHook = function (e, t) {
    T.console &&
      T.console.warn &&
      e &&
      M.test(e.name) &&
      T.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (x.readyException = function (e) {
      T.setTimeout(function () {
        throw e;
      });
    });
  var W = x.Deferred();
  function F() {
    C.removeEventListener('DOMContentLoaded', F),
      T.removeEventListener('load', F),
      x.ready();
  }
  (x.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        x.readyException(e);
      }),
      this
    );
  }),
    x.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --x.readyWait : x.isReady) ||
          ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
          W.resolveWith(C, [x]);
      },
    }),
    (x.ready.then = W.then),
    'complete' === C.readyState ||
    ('loading' !== C.readyState && !C.documentElement.doScroll)
      ? T.setTimeout(x.ready)
      : (C.addEventListener('DOMContentLoaded', F),
        T.addEventListener('load', F));
  var B = function (e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        u = null == n;
      if ('object' === w(n))
        for (a in ((r = !0), n)) B(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        y(i) || (s = !0),
        u &&
          (t = s
            ? (t.call(e, i), null)
            : ((u = t),
              function (e, t, n) {
                return u.call(x(e), n);
              })),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    U = /^-ms-/,
    Q = /-([a-z])/g;
  function K(e, t) {
    return t.toUpperCase();
  }
  function $(e) {
    return e.replace(U, 'ms-').replace(Q, K);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function z() {
    this.expando = x.expando + z.uid++;
  }
  (z.uid = 1),
    (z.prototype = {
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
        var i,
          r = this.cache(e);
        if ('string' == typeof t) r[$(t)] = n;
        else for (i in t) r[$(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][$(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map($)
              : (t = $(t)) in i
              ? [t]
              : t.match(P) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || x.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !x.isEmptyObject(t);
      },
    });
  var Y = new z(),
    X = new z(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = 'data-' + t.replace(J, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            'true' === (r = n) ||
            ('false' !== r &&
              ('null' === r
                ? null
                : r === +r + ''
                ? +r
                : G.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        X.set(e, t, n);
      } else n = void 0;
    return n;
  }
  x.extend({
    hasData: function (e) {
      return X.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return X.access(e, t, n);
    },
    removeData: function (e, t) {
      X.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    x.fn.extend({
      data: function (n, e) {
        var t,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 !== n)
          return 'object' == typeof n
            ? this.each(function () {
                X.set(this, n);
              })
            : B(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e) {
                    if (void 0 !== (t = X.get(o, n))) return t;
                    if (void 0 !== (t = Z(o, n))) return t;
                  } else
                    this.each(function () {
                      X.set(this, n, e);
                    });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((r = X.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
        ) {
          for (t = s.length; t--; )
            s[t] &&
              0 === (i = s[t].name).indexOf('data-') &&
              ((i = $(i.slice(5))), Z(o, i, r[i]));
          Y.set(o, 'hasDataAttrs', !0);
        }
        return r;
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e);
        });
      },
    }),
    x.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (i = Y.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Y.access(e, t, x.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = x.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = x._queueHooks(e, t);
        'inprogress' === r && ((r = n.shift()), i--),
          r &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            r.call(
              e,
              function () {
                x.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: x.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    x.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? x.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = x.queue(this, t, n);
                x._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && x.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          x.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = x.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          s--;

        )
          (n = Y.get(o[s], e + 'queueHooks')) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    ie = function (e, t) {
      return (
        'none' === (e = t || e).style.display ||
        ('' === e.style.display &&
          x.contains(e.ownerDocument, e) &&
          'none' === x.css(e, 'display'))
      );
    },
    re = function (e, t, n, i) {
      var r,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
      return r;
    };
  function oe(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return x.css(e, t, '');
          },
      l = a(),
      u = (n && n[3]) || (x.cssNumber[t] ? '' : 'px'),
      c = (x.cssNumber[t] || ('px' !== u && +l)) && te.exec(x.css(e, t));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--; )
        x.style(e, t, c + u),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
          (c /= o);
      (c *= 2), x.style(e, t, c + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var se = {};
  function ae(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
      (i = e[o]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n &&
              ((r[o] = Y.get(i, 'display') || null),
              r[o] || (i.style.display = '')),
            '' === i.style.display &&
              ie(i) &&
              (r[o] =
                ((f = u = l = void 0),
                (u = (a = i).ownerDocument),
                (c = a.nodeName),
                (f = se[c]) ||
                  ((l = u.body.appendChild(u.createElement(c))),
                  (f = x.css(l, 'display')),
                  l.parentNode.removeChild(l),
                  'none' === f && (f = 'block'),
                  (se[c] = f)))))
          : 'none' !== n && ((r[o] = 'none'), Y.set(i, 'display', n)));
    var a, l, u, c, f;
    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  x.fn.extend({
    show: function () {
      return ae(this, !0);
    },
    hide: function () {
      return ae(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ie(this) ? x(this).show() : x(this).hide();
          });
    },
  });
  var le = /^(?:checkbox|radio)$/i,
    ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ce = /^$|^module$|\/(?:java|ecma)script/i,
    fe = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  function he(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && D(e, t)) ? x.merge([e], n) : n
    );
  }
  function de(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (fe.optgroup = fe.option),
    (fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead),
    (fe.th = fe.td);
  var pe,
    ge,
    me = /<|&#?\w+;/;
  function ve(e, t, n, i, r) {
    for (
      var o,
        s,
        a,
        l,
        u,
        c,
        f = t.createDocumentFragment(),
        h = [],
        d = 0,
        p = e.length;
      d < p;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) x.merge(h, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          for (
            s = s || f.appendChild(t.createElement('div')),
              a = (ue.exec(o) || ['', ''])[1].toLowerCase(),
              l = fe[a] || fe._default,
              s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            s = s.lastChild;
          x.merge(h, s.childNodes), ((s = f.firstChild).textContent = '');
        } else h.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; (o = h[d++]); )
      if (i && -1 < x.inArray(o, i)) r && r.push(o);
      else if (
        ((u = x.contains(o.ownerDocument, o)),
        (s = he(f.appendChild(o), 'script')),
        u && de(s),
        n)
      )
        for (c = 0; (o = s[c++]); ) ce.test(o.type || '') && n.push(o);
    return f;
  }
  (pe = C.createDocumentFragment().appendChild(C.createElement('div'))),
    (ge = C.createElement('input')).setAttribute('type', 'radio'),
    ge.setAttribute('checked', 'checked'),
    ge.setAttribute('name', 't'),
    pe.appendChild(ge),
    (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (pe.innerHTML = '<textarea>x</textarea>'),
    (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue);
  var ye = C.documentElement,
    _e = /^key/,
    be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce() {
    try {
      return C.activeElement;
    } catch (e) {}
  }
  function xe(e, t, n, i, r, o) {
    var s, a;
    if ('object' == typeof t) {
      for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t))
        xe(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ('string' == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = Te;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return x().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = x.guid++))),
      e.each(function () {
        x.event.add(this, t, r, i, n);
      })
    );
  }
  (x.event = {
    global: {},
    add: function (t, e, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = Y.get(t);
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && x.find.matchesSelector(ye, r),
            n.guid || (n.guid = x.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle =
                function (e) {
                  return void 0 !== x && x.event.triggered !== e.type
                    ? x.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            u = (e = (e || '').match(P) || ['']).length;
          u--;

        )
          (d = g = (a = we.exec(e[u]) || [])[1]),
            (p = (a[2] || '').split('.').sort()),
            d &&
              ((f = x.event.special[d] || {}),
              (d = (r ? f.delegateType : f.bindType) || d),
              (f = x.event.special[d] || {}),
              (c = x.extend(
                {
                  type: d,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && x.expr.match.needsContext.test(r),
                  namespace: p.join('.'),
                },
                o
              )),
              (h = l[d]) ||
                (((h = l[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, i, p, s)) ||
                  (t.addEventListener && t.addEventListener(d, s))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
              (x.event.global[d] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m = Y.hasData(e) && Y.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || '').match(P) || ['']).length; u--; )
          if (
            ((d = g = (a = we.exec(t[u]) || [])[1]),
            (p = (a[2] || '').split('.').sort()),
            d)
          ) {
            for (
              f = x.event.special[d] || {},
                h = l[(d = (i ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                s = o = h.length;
              o--;

            )
              (c = h[o]),
                (!r && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                  (h.splice(o, 1),
                  c.selector && h.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !h.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                x.removeEvent(e, d, m.handle),
              delete l[d]);
          } else for (d in l) x.event.remove(e, d + t[u], n, i, !0);
        x.isEmptyObject(l) && Y.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = x.event.fix(e),
        l = new Array(arguments.length),
        u = (Y.get(this, 'events') || {})[a.type] || [],
        c = x.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, a))
      ) {
        for (
          s = x.event.handlers.call(this, a, u), t = 0;
          (r = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !==
                (i = (
                  (x.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !('click' === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + ' ')] &&
                (s[r] = i.needsContext
                  ? -1 < x(r, this).index(u)
                  : x.find(r, this, null, [u]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: u, handlers: o });
          }
      return (
        (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(x.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: y(e)
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
      return e[x.expando] ? e : new x.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Ce() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          if (this === Ce() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && D(this, 'input'))
            return this.click(), !1;
        },
        _default: function (e) {
          return D(e.target, 'a');
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
    (x.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (x.Event = function (e, t) {
      if (!(this instanceof x.Event)) return new x.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && x.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
      constructor: x.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    x.each(
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
          return null == e.which && _e.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && be.test(e.type)
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
      x.event.addProp
    ),
    x.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, r) {
        x.event.special[e] = {
          delegateType: r,
          bindType: r,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (n && (n === this || x.contains(this, n))) ||
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = r)),
              t
            );
          },
        };
      }
    ),
    x.fn.extend({
      on: function (e, t, n, i) {
        return xe(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return xe(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            x(e.delegateTarget).off(
              i.namespace ? i.origType + '.' + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ('object' != typeof e)
          return (
            (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Te),
            this.each(function () {
              x.event.remove(this, e, n, t);
            })
          );
        for (r in e) this.off(r, t, e[r]);
        return this;
      },
    });
  var Se =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    De = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ie(e, t) {
    return (
      (D(e, 'table') &&
        D(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        x(e).children('tbody')[0]) ||
      e
    );
  }
  function ke(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function Oe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function je(e, t) {
    var n, i, r, o, s, a, l, u;
    if (1 === t.nodeType) {
      if (
        Y.hasData(e) &&
        ((o = Y.access(e)), (s = Y.set(t, o)), (u = o.events))
      )
        for (r in (delete s.handle, (s.events = {}), u))
          for (n = 0, i = u[r].length; n < i; n++) x.event.add(t, r, u[r][n]);
      X.hasData(e) && ((a = X.access(e)), (l = x.extend({}, a)), X.set(t, l));
    }
  }
  function Le(n, i, r, o) {
    i = g.apply([], i);
    var e,
      t,
      s,
      a,
      l,
      u,
      c = 0,
      f = n.length,
      h = f - 1,
      d = i[0],
      p = y(d);
    if (p || (1 < f && 'string' == typeof d && !v.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        p && (i[0] = d.call(this, e, t.html())), Le(t, i, r, o);
      });
    if (
      f &&
      ((t = (e = ve(i, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (a = (s = x.map(he(e, 'script'), ke)).length; c < f; c++)
        (l = e),
          c !== h &&
            ((l = x.clone(l, !0, !0)), a && x.merge(s, he(l, 'script'))),
          r.call(n[c], l, c);
      if (a)
        for (u = s[s.length - 1].ownerDocument, x.map(s, Oe), c = 0; c < a; c++)
          (l = s[c]),
            ce.test(l.type || '') &&
              !Y.access(l, 'globalEval') &&
              x.contains(u, l) &&
              (l.src && 'module' !== (l.type || '').toLowerCase()
                ? x._evalUrl && x._evalUrl(l.src)
                : b(l.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Pe(e, t, n) {
    for (var i, r = t ? x.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || x.cleanData(he(i)),
        i.parentNode &&
          (n && x.contains(i.ownerDocument, i) && de(he(i, 'script')),
          i.parentNode.removeChild(i));
    return e;
  }
  x.extend({
    htmlPrefilter: function (e) {
      return e.replace(Se, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        u,
        c = e.cloneNode(!0),
        f = x.contains(e.ownerDocument, e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          x.isXMLDoc(e)
        )
      )
        for (s = he(c), i = 0, r = (o = he(e)).length; i < r; i++)
          (a = o[i]),
            (l = s[i]),
            void 0,
            'input' === (u = l.nodeName.toLowerCase()) && le.test(a.type)
              ? (l.checked = a.checked)
              : ('input' !== u && 'textarea' !== u) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (o = o || he(e), s = s || he(c), i = 0, r = o.length; i < r; i++)
            je(o[i], s[i]);
        else je(e, c);
      return (
        0 < (s = he(c, 'script')).length && de(s, !f && he(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
            n[Y.expando] = void 0;
          }
          n[X.expando] && (n[X.expando] = void 0);
        }
    },
  }),
    x.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? x.text(this)
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
        return Le(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ie(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Le(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Ie(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Le(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Le(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (x.cleanData(he(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return x.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !De.test(e) &&
              !fe[(ue.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = x.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (x.cleanData(he(t, !1)), (t.innerHTML = e));
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
        return Le(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            x.inArray(this, n) < 0 &&
              (x.cleanData(he(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    x.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, s) {
        x.fn[e] = function (e) {
          for (var t, n = [], i = x(e), r = i.length - 1, o = 0; o <= r; o++)
            (t = o === r ? this : this.clone(!0)),
              x(i[o])[s](t),
              l.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var He = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    qe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = T), t.getComputedStyle(e);
    },
    Re = new RegExp(ne.join('|'), 'i');
  function Me(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || qe(e)) &&
        ('' !== (s = n.getPropertyValue(t) || n[t]) ||
          x.contains(e.ownerDocument, e) ||
          (s = x.style(e, t)),
        !v.pixelBoxStyles() &&
          He.test(s) &&
          Re.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + '' : s
    );
  }
  function We(e, t) {
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
        (a.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          ye.appendChild(a).appendChild(l);
        var e = T.getComputedStyle(l);
        (n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (i = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (r = 36 === l.offsetWidth || 'absolute'),
          ye.removeChild(a),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      i,
      r,
      o,
      s,
      a = C.createElement('div'),
      l = C.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (v.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      x.extend(v, {
        boxSizingReliable: function () {
          return e(), i;
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
          return e(), r;
        },
      }));
  })();
  var Fe = /^(none|table(?!-c[ea]).+)/,
    Be = /^--/,
    Ue = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Qe = { letterSpacing: '0', fontWeight: '400' },
    Ke = ['Webkit', 'Moz', 'ms'],
    $e = C.createElement('div').style;
  function Ve(e) {
    var t = x.cssProps[e];
    return (
      t ||
        (t = x.cssProps[e] =
          (function (e) {
            if (e in $e) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--; )
              if ((e = Ke[n] + t) in $e) return e;
          })(e) || e),
      t
    );
  }
  function ze(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function Ye(e, t, n, i, r, o) {
    var s = 'width' === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; s < 4; s += 2)
      'margin' === n && (l += x.css(e, n + ne[s], !0, r)),
        i
          ? ('content' === n && (l -= x.css(e, 'padding' + ne[s], !0, r)),
            'margin' !== n &&
              (l -= x.css(e, 'border' + ne[s] + 'Width', !0, r)))
          : ((l += x.css(e, 'padding' + ne[s], !0, r)),
            'padding' !== n
              ? (l += x.css(e, 'border' + ne[s] + 'Width', !0, r))
              : (a += x.css(e, 'border' + ne[s] + 'Width', !0, r)));
    return (
      !i &&
        0 <= o &&
        (l += Math.max(
          0,
          Math.ceil(
            e['offset' + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
          )
        )),
      l
    );
  }
  function Xe(e, t, n) {
    var i = qe(e),
      r = Me(e, t, i),
      o = 'border-box' === x.css(e, 'boxSizing', !1, i),
      s = o;
    if (He.test(r)) {
      if (!n) return r;
      r = 'auto';
    }
    return (
      (s = s && (v.boxSizingReliable() || r === e.style[t])),
      ('auto' === r ||
        (!parseFloat(r) && 'inline' === x.css(e, 'display', !1, i))) &&
        ((r = e['offset' + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (r = parseFloat(r) || 0) +
        Ye(e, t, n || (o ? 'border' : 'content'), s, i, r) +
        'px'
    );
  }
  function Ge(e, t, n, i, r) {
    return new Ge.prototype.init(e, t, n, i, r);
  }
  x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Me(e, 'opacity');
            return '' === n ? '1' : n;
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
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = $(t),
          l = Be.test(t),
          u = e.style;
        if (
          (l || (t = Ve(a)), (s = x.cssHooks[t] || x.cssHooks[a]), void 0 === n)
        )
          return s && 'get' in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        'string' == (o = typeof n) &&
          (r = te.exec(n)) &&
          r[1] &&
          ((n = oe(e, t, r)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' === o &&
              (n += (r && r[3]) || (x.cssNumber[a] ? '' : 'px')),
            v.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (u[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = $(t);
      return (
        Be.test(t) || (t = Ve(a)),
        (s = x.cssHooks[t] || x.cssHooks[a]) &&
          'get' in s &&
          (r = s.get(e, !0, n)),
        void 0 === r && (r = Me(e, t, i)),
        'normal' === r && t in Qe && (r = Qe[t]),
        '' === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    x.each(['height', 'width'], function (e, a) {
      x.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !Fe.test(x.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Xe(e, a, n)
              : re(e, Ue, function () {
                  return Xe(e, a, n);
                });
        },
        set: function (e, t, n) {
          var i,
            r = qe(e),
            o = 'border-box' === x.css(e, 'boxSizing', !1, r),
            s = n && Ye(e, a, n, o, r);
          return (
            o &&
              v.scrollboxSize() === r.position &&
              (s -= Math.ceil(
                e['offset' + a[0].toUpperCase() + a.slice(1)] -
                  parseFloat(r[a]) -
                  Ye(e, a, 'border', !1, r) -
                  0.5
              )),
            s &&
              (i = te.exec(t)) &&
              'px' !== (i[3] || 'px') &&
              ((e.style[a] = t), (t = x.css(e, a))),
            ze(0, t, s)
          );
        },
      };
    }),
    (x.cssHooks.marginLeft = We(v.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Me(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              re(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    x.each({ margin: '', padding: '', border: 'Width' }, function (r, o) {
      (x.cssHooks[r + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, i = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
          return n;
        },
      }),
        'margin' !== r && (x.cssHooks[r + o].set = ze);
    }),
    x.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = qe(e), r = t.length; s < r; s++)
                o[t[s]] = x.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((x.Tween = Ge).prototype = {
      constructor: Ge,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || x.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (x.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = Ge.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ge.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ge.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                x.easing[this.easing](
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
          n && n.set ? n.set(this) : Ge.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ge.prototype),
    ((Ge.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = x.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          x.fx.step[e.prop]
            ? x.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : x.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ge.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (x.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (x.fx = Ge.prototype.init),
    (x.fx.step = {});
  var Je,
    Ze,
    et,
    tt,
    nt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function rt() {
    Ze &&
      (!1 === C.hidden && T.requestAnimationFrame
        ? T.requestAnimationFrame(rt)
        : T.setTimeout(rt, x.fx.interval),
      x.fx.tick());
  }
  function ot() {
    return (
      T.setTimeout(function () {
        Je = void 0;
      }),
      (Je = Date.now())
    );
  }
  function st(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r['margin' + (n = ne[i])] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function at(e, t, n) {
    for (
      var i,
        r = (lt.tweeners[t] || []).concat(lt.tweeners['*']),
        o = 0,
        s = r.length;
      o < s;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function lt(o, e, t) {
    var n,
      s,
      i = 0,
      r = lt.prefilters.length,
      a = x.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = Je || ot(),
            t = Math.max(0, u.startTime + u.duration - e),
            n = 1 - (t / u.duration || 0),
            i = 0,
            r = u.tweens.length;
          i < r;
          i++
        )
          u.tweens[i].run(n);
        return (
          a.notifyWith(o, [u, n, t]),
          n < 1 && r
            ? t
            : (r || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
        );
      },
      u = a.promise({
        elem: o,
        props: x.extend({}, e),
        opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Je || ot(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = x.Tween(
            o,
            u.opts,
            e,
            t,
            u.opts.specialEasing[e] || u.opts.easing
          );
          return u.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? u.tweens.length : 0;
          if (s) return this;
          for (s = !0; t < n; t++) u.tweens[t].run(1);
          return (
            e
              ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e]))
              : a.rejectWith(o, [u, e]),
            this
          );
        },
      }),
      c = u.props;
    for (
      (function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = $(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = x.cssHooks[i]) && ('expand' in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(c, u.opts.specialEasing);
      i < r;
      i++
    )
      if ((n = lt.prefilters[i].call(u, o, c, u.opts)))
        return (
          y(n.stop) &&
            (x._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      x.map(c, at, u),
      y(u.opts.start) && u.opts.start.call(o, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      x.fx.timer(x.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (x.Animation = x.extend(lt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return oe(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, i = 0, r = (e = y(e) ? ((t = e), ['*']) : e.match(P)).length;
        i < r;
        i++
      )
        (n = e[i]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f = 'width' in t || 'height' in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && ie(e),
          m = Y.get(e, 'fxshow');
        for (i in (n.queue ||
          (null == (s = x._queueHooks(e, 'fx')).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          h.always(function () {
            h.always(function () {
              s.unqueued--, x.queue(e, 'fx').length || s.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), nt.test(r))) {
            if (
              (delete t[i],
              (o = o || 'toggle' === r),
              r === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            d[i] = (m && m[i]) || x.style(e, i);
          }
        if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(d))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = Y.get(e, 'display')),
            'none' === (c = x.css(e, 'display')) &&
              (u
                ? (c = u)
                : (ae([e], !0),
                  (u = e.style.display || u),
                  (c = x.css(e, 'display')),
                  ae([e]))),
            ('inline' === c || ('inline-block' === c && null != u)) &&
              'none' === x.css(e, 'float') &&
              (l ||
                (h.done(function () {
                  p.display = u;
                }),
                null == u && ((c = p.display), (u = 'none' === c ? '' : c))),
              (p.display = 'inline-block'))),
          n.overflow &&
            ((p.overflow = 'hidden'),
            h.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          d))
            l ||
              (m
                ? 'hidden' in m && (g = m.hidden)
                : (m = Y.access(e, 'fxshow', { display: u })),
              o && (m.hidden = !g),
              g && ae([e], !0),
              h.done(function () {
                for (i in (g || ae([e]), Y.remove(e, 'fxshow'), d))
                  x.style(e, i, d[i]);
              })),
              (l = at(g ? m[i] : 0, i, h)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (x.speed = function (e, t, n) {
      var i =
        e && 'object' == typeof e
          ? x.extend({}, e)
          : {
              complete: n || (!n && t) || (y(e) && e),
              duration: e,
              easing: (n && t) || (t && !y(t) && t),
            };
      return (
        x.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration in x.fx.speeds
              ? (i.duration = x.fx.speeds[i.duration])
              : (i.duration = x.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          y(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
        }),
        i
      );
    }),
    x.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ie)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (t, e, n, i) {
        var r = x.isEmptyObject(t),
          o = x.speed(e, n, i),
          s = function () {
            var e = lt(this, x.extend({}, t), o);
            (r || Y.get(this, 'finish')) && e.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (r, e, o) {
        var s = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof r && ((o = e), (e = r), (r = void 0)),
          e && !1 !== r && this.queue(r || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != r && r + 'queueHooks',
              n = x.timers,
              i = Y.get(this);
            if (t) i[t] && i[t].stop && s(i[t]);
            else for (t in i) i[t] && i[t].stop && it.test(t) && s(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != r && n[t].queue !== r) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || x.dequeue(this, r);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[s + 'queue'],
              i = t[s + 'queueHooks'],
              r = x.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                x.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length;
              e--;

            )
              r[e].elem === this &&
                r[e].queue === s &&
                (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    x.each(['toggle', 'show', 'hide'], function (e, i) {
      var r = x.fn[i];
      x.fn[i] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? r.apply(this, arguments)
          : this.animate(st(i, !0), e, t, n);
      };
    }),
    x.each(
      {
        slideDown: st('show'),
        slideUp: st('hide'),
        slideToggle: st('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, i) {
        x.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (x.timers = []),
    (x.fx.tick = function () {
      var e,
        t = 0,
        n = x.timers;
      for (Je = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || x.fx.stop(), (Je = void 0);
    }),
    (x.fx.timer = function (e) {
      x.timers.push(e), x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function () {
      Ze || ((Ze = !0), rt());
    }),
    (x.fx.stop = function () {
      Ze = null;
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fn.delay = function (i, e) {
      return (
        (i = (x.fx && x.fx.speeds[i]) || i),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = T.setTimeout(e, i);
          t.stop = function () {
            T.clearTimeout(n);
          };
        })
      );
    }),
    (et = C.createElement('input')),
    (tt = C.createElement('select').appendChild(C.createElement('option'))),
    (et.type = 'checkbox'),
    (v.checkOn = '' !== et.value),
    (v.optSelected = tt.selected),
    ((et = C.createElement('input')).value = 't'),
    (et.type = 'radio'),
    (v.radioValue = 't' === et.value);
  var ut,
    ct = x.expr.attrHandle;
  x.fn.extend({
    attr: function (e, t) {
      return B(this, x.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
  }),
    x.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? x.prop(e, t, n)
            : ((1 === o && x.isXMLDoc(e)) ||
                (r =
                  x.attrHooks[t.toLowerCase()] ||
                  (x.expr.match.bool.test(t) ? ut : void 0)),
              void 0 !== n
                ? null === n
                  ? void x.removeAttr(e, t)
                  : r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : r && 'get' in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = x.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && 'radio' === t && D(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(P);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (ut = {
      set: function (e, t, n) {
        return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var s = ct[t] || x.find.attr;
      ct[t] = function (e, t, n) {
        var i,
          r,
          o = t.toLowerCase();
        return (
          n ||
            ((r = ct[o]),
            (ct[o] = i),
            (i = null != s(e, t, n) ? o : null),
            (ct[o] = r)),
          i
        );
      };
    });
  var ft = /^(?:input|select|textarea|button)$/i,
    ht = /^(?:a|area)$/i;
  function dt(e) {
    return (e.match(P) || []).join(' ');
  }
  function pt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function gt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
  }
  x.fn.extend({
    prop: function (e, t) {
      return B(this, x.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[x.propFix[e] || e];
      });
    },
  }),
    x.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && x.isXMLDoc(e)) ||
              ((t = x.propFix[t] || t), (r = x.propHooks[t])),
            void 0 !== n
              ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && 'get' in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = x.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : ft.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    v.optSelected ||
      (x.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    x.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (y(t))
          return this.each(function (e) {
            x(this).addClass(t.call(this, e, pt(this)));
          });
        if ((e = gt(t)).length)
          for (; (n = this[l++]); )
            if (((r = pt(n)), (i = 1 === n.nodeType && ' ' + dt(r) + ' '))) {
              for (s = 0; (o = e[s++]); )
                i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
              r !== (a = dt(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (y(t))
          return this.each(function (e) {
            x(this).removeClass(t.call(this, e, pt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = gt(t)).length)
          for (; (n = this[l++]); )
            if (((r = pt(n)), (i = 1 === n.nodeType && ' ' + dt(r) + ' '))) {
              for (s = 0; (o = e[s++]); )
                for (; -1 < i.indexOf(' ' + o + ' '); )
                  i = i.replace(' ' + o + ' ', ' ');
              r !== (a = dt(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function (r, t) {
        var o = typeof r,
          s = 'string' === o || Array.isArray(r);
        return 'boolean' == typeof t && s
          ? t
            ? this.addClass(r)
            : this.removeClass(r)
          : y(r)
          ? this.each(function (e) {
              x(this).toggleClass(r.call(this, e, pt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, i;
              if (s)
                for (t = 0, n = x(this), i = gt(r); (e = i[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== r && 'boolean' !== o) ||
                  ((e = pt(this)) && Y.set(this, '__className__', e),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      e || !1 === r ? '' : Y.get(this, '__className__') || ''
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (' ' + dt(pt(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var mt = /\r/g;
  x.fn.extend({
    val: function (n) {
      var i,
        e,
        r,
        t = this[0];
      return arguments.length
        ? ((r = y(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = r ? n.call(this, e, x(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = x.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((i =
                x.valHooks[this.type] ||
                x.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in i &&
                void 0 !== i.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
        ? (i = x.valHooks[t.type] || x.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in i &&
          void 0 !== (e = i.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(mt, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    x.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = x.find.attr(e, 'value');
            return null != t ? t : dt(x.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = 'select-one' === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !D(n.parentNode, 'optgroup'))
              ) {
                if (((t = x(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = x.makeArray(t), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                -1 < x.inArray(x.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    x.each(['radio', 'checkbox'], function () {
      (x.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < x.inArray(x(e).val(), t));
        },
      }),
        v.checkOn ||
          (x.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (v.focusin = 'onfocusin' in T);
  var vt = /^(?:focusinfocus|focusoutblur)$/,
    yt = function (e) {
      e.stopPropagation();
    };
  x.extend(x.event, {
    trigger: function (e, t, n, i) {
      var r,
        o,
        s,
        a,
        l,
        u,
        c,
        f,
        h = [n || C],
        d = m.call(e, 'type') ? e.type : e,
        p = m.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = s = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !vt.test(d + x.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (p = d.split('.')).shift()), p.sort()),
          (l = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[x.expando]
            ? e
            : new x.Event(d, 'object' == typeof e && e)).isTrigger = i ? 2 : 3),
          (e.namespace = p.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : x.makeArray(t, [e])),
          (c = x.event.special[d] || {}),
          i || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!i && !c.noBubble && !_(n)) {
          for (
            a = c.delegateType || d, vt.test(a + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            h.push(o), (s = o);
          s === (n.ownerDocument || C) &&
            h.push(s.defaultView || s.parentWindow || T);
        }
        for (r = 0; (o = h[r++]) && !e.isPropagationStopped(); )
          (f = o),
            (e.type = 1 < r ? a : c.bindType || d),
            (u = (Y.get(o, 'events') || {})[e.type] && Y.get(o, 'handle')) &&
              u.apply(o, t),
            (u = l && o[l]) &&
              u.apply &&
              V(o) &&
              ((e.result = u.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          i ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(h.pop(), t)) ||
            !V(n) ||
            (l &&
              y(n[d]) &&
              !_(n) &&
              ((s = n[l]) && (n[l] = null),
              (x.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, yt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, yt),
              (x.event.triggered = void 0),
              s && (n[l] = s))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
      x.event.trigger(i, null, t);
    },
  }),
    x.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          x.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return x.event.trigger(e, t, n, !0);
      },
    }),
    v.focusin ||
      x.each({ focus: 'focusin', blur: 'focusout' }, function (n, i) {
        var r = function (e) {
          x.event.simulate(i, e.target, x.event.fix(e));
        };
        x.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Y.access(e, i);
            t || e.addEventListener(n, r, !0), Y.access(e, i, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Y.access(e, i) - 1;
            t
              ? Y.access(e, i, t)
              : (e.removeEventListener(n, r, !0), Y.remove(e, i));
          },
        };
      });
  var _t = T.location,
    bt = Date.now(),
    wt = /\?/;
  x.parseXML = function (e) {
    var t;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new T.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName('parsererror').length) ||
        x.error('Invalid XML: ' + e),
      t
    );
  };
  var Et = /\[\]$/,
    Tt = /\r?\n/g,
    Ct = /^(?:submit|button|image|reset|file)$/i,
    xt = /^(?:input|select|textarea|keygen)/i;
  function St(n, e, i, r) {
    var t;
    if (Array.isArray(e))
      x.each(e, function (e, t) {
        i || Et.test(n)
          ? r(n, t)
          : St(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              i,
              r
            );
      });
    else if (i || 'object' !== w(e)) r(n, e);
    else for (t in e) St(n + '[' + t + ']', e[t], i, r);
  }
  (x.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = y(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
      x.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) St(n, e[n], t, r);
    return i.join('&');
  }),
    x.fn.extend({
      serialize: function () {
        return x.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = x.prop(this, 'elements');
          return e ? x.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !x(this).is(':disabled') &&
              xt.test(this.nodeName) &&
              !Ct.test(e) &&
              (this.checked || !le.test(e))
            );
          })
          .map(function (e, t) {
            var n = x(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? x.map(n, function (e) {
                  return { name: t.name, value: e.replace(Tt, '\r\n') };
                })
              : { name: t.name, value: n.replace(Tt, '\r\n') };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    At = /#.*$/,
    Nt = /([?&])_=[^&]*/,
    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    kt = /^(?:GET|HEAD)$/,
    Ot = /^\/\//,
    jt = {},
    Lt = {},
    Pt = '*/'.concat('*'),
    Ht = C.createElement('a');
  function qt(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        i = 0,
        r = e.toLowerCase().match(P) || [];
      if (y(t))
        for (; (n = r[i++]); )
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Rt(t, r, o, s) {
    var a = {},
      l = t === Lt;
    function u(e) {
      var i;
      return (
        (a[e] = !0),
        x.each(t[e] || [], function (e, t) {
          var n = t(r, o, s);
          return 'string' != typeof n || l || a[n]
            ? l
              ? !(i = n)
              : void 0
            : (r.dataTypes.unshift(n), u(n), !1);
        }),
        i
      );
    }
    return u(r.dataTypes[0]) || (!a['*'] && u('*'));
  }
  function Mt(e, t) {
    var n,
      i,
      r = x.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && x.extend(!0, e, i), e;
  }
  (Ht.href = _t.href),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _t.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            _t.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Pt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': x.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Mt(Mt(e, x.ajaxSettings), t) : Mt(x.ajaxSettings, e);
      },
      ajaxPrefilter: qt(jt),
      ajaxTransport: qt(Lt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          h,
          n,
          d,
          i,
          p,
          g,
          r,
          o,
          m = x.ajaxSetup({}, t),
          v = m.context || m,
          y = m.context && (v.nodeType || v.jquery) ? x(v) : x.event,
          _ = x.Deferred(),
          b = x.Callbacks('once memory'),
          w = m.statusCode || {},
          s = {},
          a = {},
          l = 'canceled',
          E = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (p) {
                if (!n)
                  for (n = {}; (t = It.exec(h)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return p ? h : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == p &&
                  ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                  (s[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == p && (m.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (p) E.always(e[E.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || l;
              return c && c.abort(t), u(0, t), this;
            },
          };
        if (
          (_.promise(E),
          (m.url = ((e || m.url || _t.href) + '').replace(
            Ot,
            _t.protocol + '//'
          )),
          (m.type = t.method || t.type || m.method || m.type),
          (m.dataTypes = (m.dataType || '*').toLowerCase().match(P) || ['']),
          null == m.crossDomain)
        ) {
          i = C.createElement('a');
          try {
            (i.href = m.url),
              (i.href = i.href),
              (m.crossDomain =
                Ht.protocol + '//' + Ht.host != i.protocol + '//' + i.host);
          } catch (e) {
            m.crossDomain = !0;
          }
        }
        if (
          (m.data &&
            m.processData &&
            'string' != typeof m.data &&
            (m.data = x.param(m.data, m.traditional)),
          Rt(jt, m, t, E),
          p)
        )
          return E;
        for (r in ((g = x.event && m.global) &&
          0 == x.active++ &&
          x.event.trigger('ajaxStart'),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !kt.test(m.type)),
        (f = m.url.replace(At, '')),
        m.hasContent
          ? m.data &&
            m.processData &&
            0 ===
              (m.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (m.data = m.data.replace(Dt, '+'))
          : ((o = m.url.slice(f.length)),
            m.data &&
              (m.processData || 'string' == typeof m.data) &&
              ((f += (wt.test(f) ? '&' : '?') + m.data), delete m.data),
            !1 === m.cache &&
              ((f = f.replace(Nt, '$1')),
              (o = (wt.test(f) ? '&' : '?') + '_=' + bt++ + o)),
            (m.url = f + o)),
        m.ifModified &&
          (x.lastModified[f] &&
            E.setRequestHeader('If-Modified-Since', x.lastModified[f]),
          x.etag[f] && E.setRequestHeader('If-None-Match', x.etag[f])),
        ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
          E.setRequestHeader('Content-Type', m.contentType),
        E.setRequestHeader(
          'Accept',
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ('*' !== m.dataTypes[0] ? ', ' + Pt + '; q=0.01' : '')
            : m.accepts['*']
        ),
        m.headers))
          E.setRequestHeader(r, m.headers[r]);
        if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p))
          return E.abort();
        if (
          ((l = 'abort'),
          b.add(m.complete),
          E.done(m.success),
          E.fail(m.error),
          (c = Rt(Lt, m, t, E)))
        ) {
          if (((E.readyState = 1), g && y.trigger('ajaxSend', [E, m]), p))
            return E;
          m.async &&
            0 < m.timeout &&
            (d = T.setTimeout(function () {
              E.abort('timeout');
            }, m.timeout));
          try {
            (p = !1), c.send(s, u);
          } catch (e) {
            if (p) throw e;
            u(-1, e);
          }
        } else u(-1, 'No Transport');
        function u(e, t, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u = t;
          p ||
            ((p = !0),
            d && T.clearTimeout(d),
            (c = void 0),
            (h = i || ''),
            (E.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                for (
                  var i, r, o, s, a = e.contents, l = e.dataTypes;
                  '*' === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader('Content-Type'));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + ' ' + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(m, E, n)),
            (a = (function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = l;
                  else if ('*' !== l && l !== o) {
                    if (!(s = u[l + ' ' + o] || u['* ' + o]))
                      for (r in u)
                        if (
                          (a = r.split(' '))[1] === o &&
                          (s = u[l + ' ' + a[0]] || u['* ' + a[0]])
                        ) {
                          !0 === s
                            ? (s = u[r])
                            : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: s
                              ? e
                              : 'No conversion from ' + l + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(m, a, E, r)),
            r
              ? (m.ifModified &&
                  ((l = E.getResponseHeader('Last-Modified')) &&
                    (x.lastModified[f] = l),
                  (l = E.getResponseHeader('etag')) && (x.etag[f] = l)),
                204 === e || 'HEAD' === m.type
                  ? (u = 'nocontent')
                  : 304 === e
                  ? (u = 'notmodified')
                  : ((u = a.state), (o = a.data), (r = !(s = a.error))))
              : ((s = u), (!e && u) || ((u = 'error'), e < 0 && (e = 0))),
            (E.status = e),
            (E.statusText = (t || u) + ''),
            r ? _.resolveWith(v, [o, u, E]) : _.rejectWith(v, [E, u, s]),
            E.statusCode(w),
            (w = void 0),
            g && y.trigger(r ? 'ajaxSuccess' : 'ajaxError', [E, m, r ? o : s]),
            b.fireWith(v, [E, u]),
            g &&
              (y.trigger('ajaxComplete', [E, m]),
              --x.active || x.event.trigger('ajaxStop')));
        }
        return E;
      },
      getJSON: function (e, t, n) {
        return x.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return x.get(e, void 0, t, 'script');
      },
    }),
    x.each(['get', 'post'], function (e, r) {
      x[r] = function (e, t, n, i) {
        return (
          y(t) && ((i = i || n), (n = t), (t = void 0)),
          x.ajax(
            x.extend(
              { url: e, type: r, dataType: i, data: t, success: n },
              x.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (x._evalUrl = function (e) {
      return x.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    x.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (y(e) && (e = e.call(this[0])),
            (t = x(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return y(n)
          ? this.each(function (e) {
              x(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = x(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = y(t);
        return this.each(function (e) {
          x(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              x(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (x.expr.pseudos.hidden = function (e) {
      return !x.expr.pseudos.visible(e);
    }),
    (x.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (x.ajaxSettings.xhr = function () {
      try {
        return new T.XMLHttpRequest();
      } catch (e) {}
    });
  var Wt = { 0: 200, 1223: 204 },
    Ft = x.ajaxSettings.xhr();
  (v.cors = !!Ft && 'withCredentials' in Ft),
    (v.ajax = Ft = !!Ft),
    x.ajaxTransport(function (r) {
      var o, s;
      if (v.cors || (Ft && !r.crossDomain))
        return {
          send: function (e, t) {
            var n,
              i = r.xhr();
            if (
              (i.open(r.type, r.url, r.async, r.username, r.password),
              r.xhrFields)
            )
              for (n in r.xhrFields) i[n] = r.xhrFields[n];
            for (n in (r.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(r.mimeType),
            r.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              i.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    s =
                    i.onload =
                    i.onerror =
                    i.onabort =
                    i.ontimeout =
                    i.onreadystatechange =
                      null),
                  'abort' === e
                    ? i.abort()
                    : 'error' === e
                    ? 'number' != typeof i.status
                      ? t(0, 'error')
                      : t(i.status, i.statusText)
                    : t(
                        Wt[i.status] || i.status,
                        i.statusText,
                        'text' !== (i.responseType || 'text') ||
                          'string' != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = o()),
              (s = i.onerror = i.ontimeout = o('error')),
              void 0 !== i.onabort
                ? (i.onabort = s)
                : (i.onreadystatechange = function () {
                    4 === i.readyState &&
                      T.setTimeout(function () {
                        o && s();
                      });
                  }),
              (o = o('abort'));
            try {
              i.send((r.hasContent && r.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    x.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    x.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return x.globalEval(e), e;
        },
      },
    }),
    x.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    x.ajaxTransport('script', function (n) {
      var i, r;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (i = x('<script>')
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (r = function (e) {
                  i.remove(),
                    (r = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(i[0]);
          },
          abort: function () {
            r && r();
          },
        };
    });
  var Bt,
    Ut = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Ut.pop() || x.expando + '_' + bt++;
      return (this[e] = !0), e;
    },
  }),
    x.ajaxPrefilter('json jsonp', function (e, t, n) {
      var i,
        r,
        o,
        s =
          !1 !== e.jsonp &&
          (Qt.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Qt.test(e.data) &&
              'data');
      if (s || 'jsonp' === e.dataTypes[0])
        return (
          (i = e.jsonpCallback =
            y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(Qt, '$1' + i))
            : !1 !== e.jsonp &&
              (e.url += (wt.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
          (e.converters['script json'] = function () {
            return o || x.error(i + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (r = T[i]),
          (T[i] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === r ? x(T).removeProp(i) : (T[i] = r),
              e[i] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(i)),
              o && y(r) && r(o[0]),
              (o = r = void 0);
          }),
          'script'
        );
    }),
    (v.createHTMLDocument =
      (((Bt = C.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === Bt.childNodes.length)),
    (x.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (v.createHTMLDocument
              ? (((i = (t =
                  C.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = C.location.href),
                t.head.appendChild(i))
              : (t = C)),
          (o = !n && []),
          (r = A.exec(e))
            ? [t.createElement(r[1])]
            : ((r = ve([e], t, o)),
              o && o.length && x(o).remove(),
              x.merge([], r.childNodes)));
      var i, r, o;
    }),
    (x.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(' ');
      return (
        -1 < a && ((i = dt(e.slice(a))), (e = e.slice(0, a))),
        y(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (r = 'POST'),
        0 < s.length &&
          x
            .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                s.html(i ? x('<div>').append(x.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    x.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        x.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (x.expr.pseudos.animated = function (t) {
      return x.grep(x.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (x.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u = x.css(e, 'position'),
          c = x(e),
          f = {};
        'static' === u && (e.style.position = 'relative'),
          (a = c.offset()),
          (o = x.css(e, 'top')),
          (l = x.css(e, 'left')),
          (r =
            ('absolute' === u || 'fixed' === u) && -1 < (o + l).indexOf('auto')
              ? ((s = (i = c.position()).top), i.left)
              : ((s = parseFloat(o) || 0), parseFloat(l) || 0)),
          y(t) && (t = t.call(e, n, x.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + r),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    x.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                x.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((e = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ('fixed' === x.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === x.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = x(e).offset()).top += x.css(e, 'borderTopWidth', !0)),
              (r.left += x.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - r.top - x.css(i, 'marginTop', !0),
            left: t.left - r.left - x.css(i, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === x.css(e, 'position');

          )
            e = e.offsetParent;
          return e || ye;
        });
      },
    }),
    x.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, r) {
        var o = 'pageYOffset' === r;
        x.fn[t] = function (e) {
          return B(
            this,
            function (e, t, n) {
              var i;
              if (
                (_(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
              )
                return i ? i[r] : e[t];
              i
                ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    x.each(['top', 'left'], function (e, n) {
      x.cssHooks[n] = We(v.pixelPosition, function (e, t) {
        if (t)
          return (t = Me(e, n)), He.test(t) ? x(e).position()[n] + 'px' : t;
      });
    }),
    x.each({ Height: 'height', Width: 'width' }, function (s, a) {
      x.each(
        { padding: 'inner' + s, content: a, '': 'outer' + s },
        function (i, o) {
          x.fn[o] = function (e, t) {
            var n = arguments.length && (i || 'boolean' != typeof e),
              r = i || (!0 === e || !0 === t ? 'margin' : 'border');
            return B(
              this,
              function (e, t, n) {
                var i;
                return _(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + s]
                    : e.document.documentElement['client' + s]
                  : 9 === e.nodeType
                  ? ((i = e.documentElement),
                    Math.max(
                      e.body['scroll' + s],
                      i['scroll' + s],
                      e.body['offset' + s],
                      i['offset' + s],
                      i['client' + s]
                    ))
                  : void 0 === n
                  ? x.css(e, t, r)
                  : x.style(e, t, n, r);
              },
              a,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    x.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        x.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    x.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    x.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
    }),
    (x.proxy = function (e, t) {
      var n, i, r;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
        return (
          (i = a.call(arguments, 2)),
          ((r = function () {
            return e.apply(t || this, i.concat(a.call(arguments)));
          }).guid = e.guid =
            e.guid || x.guid++),
          r
        );
    }),
    (x.holdReady = function (e) {
      e ? x.readyWait++ : x.ready(!0);
    }),
    (x.isArray = Array.isArray),
    (x.parseJSON = JSON.parse),
    (x.nodeName = D),
    (x.isFunction = y),
    (x.isWindow = _),
    (x.camelCase = $),
    (x.type = w),
    (x.now = Date.now),
    (x.isNumeric = function (e) {
      var t = x.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return x;
      });
  var Kt = T.jQuery,
    $t = T.$;
  return (
    (x.noConflict = function (e) {
      return T.$ === x && (T.$ = $t), e && T.jQuery === x && (T.jQuery = Kt), x;
    }),
    e || (T.jQuery = T.$ = x),
    x
  );
}),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function () {
    'use strict';
    function s(e) {
      return e && '[object Function]' === {}.toString.call(e);
    }
    function b(e, t) {
      if (1 !== e.nodeType) return [];
      var n = getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function y(e) {
      return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }
    function _(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;
        case '#document':
          return e.body;
      }
      var t = b(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
      return /(auto|scroll)/.test(n + r + i) ? e : _(y(e));
    }
    function w(e) {
      var t = e && e.offsetParent,
        n = t && t.nodeName;
      return n && 'BODY' !== n && 'HTML' !== n
        ? -1 !== ['TD', 'TABLE'].indexOf(t.nodeName) &&
          'static' === b(t, 'position')
          ? w(t)
          : t
        : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
    }
    function c(e) {
      return null === e.parentNode ? e : c(e.parentNode);
    }
    function E(e, t) {
      if (!(e && e.nodeType && t && t.nodeType))
        return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        r = n ? t : e,
        o = document.createRange();
      o.setStart(i, 0), o.setEnd(r, 0);
      var s,
        a,
        l = o.commonAncestorContainer;
      if ((e !== l && t !== l) || i.contains(r))
        return 'BODY' === (a = (s = l).nodeName) ||
          ('HTML' !== a && w(s.firstElementChild) !== s)
          ? w(l)
          : l;
      var u = c(e);
      return u.host ? E(u.host, t) : E(e, c(t).host);
    }
    function T(e) {
      var t =
          'top' ===
          (1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : 'top')
            ? 'scrollTop'
            : 'scrollLeft',
        n = e.nodeName;
      if ('BODY' !== n && 'HTML' !== n) return e[t];
      var i = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || i)[t];
    }
    function f(e, t) {
      var n = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == n ? 'Right' : 'Bottom';
      return (
        parseFloat(e['border' + n + 'Width'], 10) +
        parseFloat(e['border' + i + 'Width'], 10)
      );
    }
    function i(e, t, n, i) {
      return q(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        F()
          ? n['offset' + e] +
              i['margin' + ('Height' === e ? 'Top' : 'Left')] +
              i['margin' + ('Height' === e ? 'Bottom' : 'Right')]
          : 0
      );
    }
    function C() {
      var e = document.body,
        t = document.documentElement,
        n = F() && getComputedStyle(t);
      return { height: i('Height', e, t, n), width: i('Width', e, t, n) };
    }
    function x(e) {
      return Q({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function S(e) {
      var t = {};
      if (F())
        try {
          t = e.getBoundingClientRect();
          var n = T(e, 'top'),
            i = T(e, 'left');
          (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
        } catch (e) {}
      else t = e.getBoundingClientRect();
      var r = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top,
        },
        o = 'HTML' === e.nodeName ? C() : {},
        s = o.width || e.clientWidth || r.right - r.left,
        a = o.height || e.clientHeight || r.bottom - r.top,
        l = e.offsetWidth - s,
        u = e.offsetHeight - a;
      if (l || u) {
        var c = b(e);
        (l -= f(c, 'x')), (u -= f(c, 'y')), (r.width -= l), (r.height -= u);
      }
      return x(r);
    }
    function D(e, t) {
      var n = F(),
        i = 'HTML' === t.nodeName,
        r = S(e),
        o = S(t),
        s = _(e),
        a = b(t),
        l = parseFloat(a.borderTopWidth, 10),
        u = parseFloat(a.borderLeftWidth, 10),
        c = x({
          top: r.top - o.top - l,
          left: r.left - o.left - u,
          width: r.width,
          height: r.height,
        });
      if (((c.marginTop = 0), (c.marginLeft = 0), !n && i)) {
        var f = parseFloat(a.marginTop, 10),
          h = parseFloat(a.marginLeft, 10);
        (c.top -= l - f),
          (c.bottom -= l - f),
          (c.left -= u - h),
          (c.right -= u - h),
          (c.marginTop = f),
          (c.marginLeft = h);
      }
      return (
        (n ? t.contains(s) : t === s && 'BODY' !== s.nodeName) &&
          (c = (function (e, t) {
            var n =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              i = T(t, 'top'),
              r = T(t, 'left'),
              o = n ? -1 : 1;
            return (
              (e.top += i * o),
              (e.bottom += i * o),
              (e.left += r * o),
              (e.right += r * o),
              e
            );
          })(c, t)),
        c
      );
    }
    function h(e, t, n, i) {
      var r,
        o,
        s,
        a,
        l,
        u,
        c,
        f = { top: 0, left: 0 },
        h = E(e, t);
      if ('viewport' === i)
        (o = (r = h).ownerDocument.documentElement),
          (s = D(r, o)),
          (a = q(o.clientWidth, window.innerWidth || 0)),
          (l = q(o.clientHeight, window.innerHeight || 0)),
          (u = T(o)),
          (c = T(o, 'left')),
          (f = x({
            top: u - s.top + s.marginTop,
            left: c - s.left + s.marginLeft,
            width: a,
            height: l,
          }));
      else {
        var d;
        'scrollParent' === i
          ? 'BODY' === (d = _(y(t))).nodeName &&
            (d = e.ownerDocument.documentElement)
          : (d = 'window' === i ? e.ownerDocument.documentElement : i);
        var p = D(d, h);
        if (
          'HTML' !== d.nodeName ||
          (function e(t) {
            var n = t.nodeName;
            return (
              'BODY' !== n &&
              'HTML' !== n &&
              ('fixed' === b(t, 'position') || e(y(t)))
            );
          })(h)
        )
          f = p;
        else {
          var g = C(),
            m = g.height,
            v = g.width;
          (f.top += p.top - p.marginTop),
            (f.bottom = m + p.top),
            (f.left += p.left - p.marginLeft),
            (f.right = v + p.left);
        }
      }
      return (f.left += n), (f.top += n), (f.right -= n), (f.bottom -= n), f;
    }
    function a(e, t, i, n, r) {
      var o =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf('auto')) return e;
      var s = h(i, n, o, r),
        a = {
          top: { width: s.width, height: t.top - s.top },
          right: { width: s.right - t.right, height: s.height },
          bottom: { width: s.width, height: s.bottom - t.bottom },
          left: { width: t.left - s.left, height: s.height },
        },
        l = Object.keys(a)
          .map(function (e) {
            return Q({ key: e }, a[e], {
              area: ((t = a[e]), t.width * t.height),
            });
            var t;
          })
          .sort(function (e, t) {
            return t.area - e.area;
          }),
        u = l.filter(function (e) {
          var t = e.width,
            n = e.height;
          return t >= i.clientWidth && n >= i.clientHeight;
        }),
        c = 0 < u.length ? u[0].key : l[0].key,
        f = e.split('-')[1];
      return c + (f ? '-' + f : '');
    }
    function l(e, t, n) {
      return D(n, E(t, n));
    }
    function A(e) {
      var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
      return { width: e.offsetWidth + i, height: e.offsetHeight + n };
    }
    function N(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }
    function I(e, t, n) {
      n = n.split('-')[0];
      var i = A(e),
        r = { width: i.width, height: i.height },
        o = -1 !== ['right', 'left'].indexOf(n),
        s = o ? 'top' : 'left',
        a = o ? 'left' : 'top',
        l = o ? 'height' : 'width',
        u = o ? 'width' : 'height';
      return (
        (r[s] = t[s] + t[l] / 2 - i[l] / 2),
        (r[a] = n === a ? t[a] - i[u] : t[N(a)]),
        r
      );
    }
    function k(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function O(e, n, t) {
      return (
        (void 0 === t
          ? e
          : e.slice(
              0,
              (function (e, t, n) {
                if (Array.prototype.findIndex)
                  return e.findIndex(function (e) {
                    return e[t] === n;
                  });
                var i = k(e, function (e) {
                  return e[t] === n;
                });
                return e.indexOf(i);
              })(e, 'name', t)
            )
        ).forEach(function (e) {
          e.function &&
            console.warn(
              '`modifier.function` is deprecated, use `modifier.fn`!'
            );
          var t = e.function || e.fn;
          e.enabled &&
            s(t) &&
            ((n.offsets.popper = x(n.offsets.popper)),
            (n.offsets.reference = x(n.offsets.reference)),
            (n = t(n, e)));
        }),
        n
      );
    }
    function e(e, n) {
      return e.some(function (e) {
        var t = e.name;
        return e.enabled && t === n;
      });
    }
    function j(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          i = 0;
        i < t.length - 1;
        i++
      ) {
        var r = t[i],
          o = r ? '' + r + n : e;
        if (void 0 !== document.body.style[o]) return o;
      }
      return null;
    }
    function o(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function t(e, t, n, i) {
      (n.updateBound = i),
        o(e).addEventListener('resize', n.updateBound, { passive: !0 });
      var r = _(e);
      return (
        (function e(t, n, i, r) {
          var o = 'BODY' === t.nodeName,
            s = o ? t.ownerDocument.defaultView : t;
          s.addEventListener(n, i, { passive: !0 }),
            o || e(_(s.parentNode), n, i, r),
            r.push(s);
        })(r, 'scroll', n.updateBound, n.scrollParents),
        (n.scrollElement = r),
        (n.eventsEnabled = !0),
        n
      );
    }
    function n() {
      var e, t;
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state =
          ((e = this.reference),
          (t = this.state),
          o(e).removeEventListener('resize', t.updateBound),
          t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound);
          }),
          (t.updateBound = null),
          (t.scrollParents = []),
          (t.scrollElement = null),
          (t.eventsEnabled = !1),
          t)));
    }
    function d(e) {
      return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function u(n, i) {
      Object.keys(i).forEach(function (e) {
        var t = '';
        -1 !==
          ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(e) &&
          d(i[e]) &&
          (t = 'px'),
          (n.style[e] = i[e] + t);
      });
    }
    function L(e, t, n) {
      var i = k(e, function (e) {
          return e.name === t;
        }),
        r =
          !!i &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order;
          });
      if (!r) {
        var o = '`' + t + '`';
        console.warn(
          '`' +
            n +
            '` modifier is required by ' +
            o +
            ' modifier in order to work, be sure to include it before ' +
            o +
            '!'
        );
      }
      return r;
    }
    function r(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = $.indexOf(e),
        i = $.slice(n + 1).concat($.slice(0, n));
      return t ? i.reverse() : i;
    }
    function p(e, r, o, t) {
      var s = [0, 0],
        a = -1 !== ['right', 'left'].indexOf(t),
        n = e.split(/(\+|\-)/).map(function (e) {
          return e.trim();
        }),
        i = n.indexOf(
          k(n, function (e) {
            return -1 !== e.search(/,|\s/);
          })
        );
      n[i] &&
        -1 === n[i].indexOf(',') &&
        console.warn(
          'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
        );
      var l = /\s*,\s*|\s+/,
        u =
          -1 === i
            ? [n]
            : [
                n.slice(0, i).concat([n[i].split(l)[0]]),
                [n[i].split(l)[1]].concat(n.slice(i + 1)),
              ];
      return (
        (u = u.map(function (e, t) {
          var n = (1 === t ? !a : a) ? 'height' : 'width',
            i = !1;
          return e
            .reduce(function (e, t) {
              return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
                ? ((e[e.length - 1] = t), (i = !0), e)
                : i
                ? ((e[e.length - 1] += t), (i = !1), e)
                : e.concat(t);
            }, [])
            .map(function (e) {
              return (function (e, t, n, i) {
                var r,
                  o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  s = +o[1],
                  a = o[2];
                if (!s) return e;
                if (0 !== a.indexOf('%'))
                  return 'vh' !== a && 'vw' !== a
                    ? s
                    : (('vh' === a
                        ? q(
                            document.documentElement.clientHeight,
                            window.innerHeight || 0
                          )
                        : q(
                            document.documentElement.clientWidth,
                            window.innerWidth || 0
                          )) /
                        100) *
                        s;
                switch (a) {
                  case '%p':
                    r = n;
                    break;
                  case '%':
                  case '%r':
                  default:
                    r = i;
                }
                return (x(r)[t] / 100) * s;
              })(e, n, r, o);
            });
        })).forEach(function (n, i) {
          n.forEach(function (e, t) {
            d(e) && (s[i] += e * ('-' === n[t - 1] ? -1 : 1));
          });
        }),
        s
      );
    }
    for (
      var P = Math.min,
        H = Math.floor,
        q = Math.max,
        g = 'undefined' != typeof window && 'undefined' != typeof document,
        m = ['Edge', 'Trident', 'Firefox'],
        v = 0,
        R = 0;
      R < m.length;
      R += 1
    )
      if (g && 0 <= navigator.userAgent.indexOf(m[R])) {
        v = 1;
        break;
      }
    var M,
      W =
        g && window.Promise
          ? function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  window.Promise.resolve().then(function () {
                    (t = !1), e();
                  }));
              };
            }
          : function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  setTimeout(function () {
                    (t = !1), e();
                  }, v));
              };
            },
      F = function () {
        return (
          null == M && (M = -1 !== navigator.appVersion.indexOf('MSIE 10')), M
        );
      },
      B = (function () {
        function i(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function (e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        };
      })(),
      U = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      },
      Q =
        Object.assign ||
        function (e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        },
      K = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      $ = K.slice(3),
      V = 'flip',
      z = 'clockwise',
      Y = 'counterclockwise',
      X = (function () {
        function o(e, t) {
          var n = this,
            i =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, o),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(n.update);
            }),
            (this.update = W(this.update.bind(this))),
            (this.options = Q({}, o.Defaults, i)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = e && e.jquery ? e[0] : e),
            (this.popper = t && t.jquery ? t[0] : t),
            (this.options.modifiers = {}),
            Object.keys(Q({}, o.Defaults.modifiers, i.modifiers)).forEach(
              function (e) {
                n.options.modifiers[e] = Q(
                  {},
                  o.Defaults.modifiers[e] || {},
                  i.modifiers ? i.modifiers[e] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return Q({ name: e }, n.options.modifiers[e]);
              })
              .sort(function (e, t) {
                return e.order - t.order;
              })),
            this.modifiers.forEach(function (e) {
              e.enabled &&
                s(e.onLoad) &&
                e.onLoad(n.reference, n.popper, n.options, e, n.state);
            }),
            this.update();
          var r = this.options.eventsEnabled;
          r && this.enableEventListeners(), (this.state.eventsEnabled = r);
        }
        return (
          B(o, [
            {
              key: 'update',
              value: function () {
                return function () {
                  if (!this.state.isDestroyed) {
                    var e = {
                      instance: this,
                      styles: {},
                      arrowStyles: {},
                      attributes: {},
                      flipped: !1,
                      offsets: {},
                    };
                    (e.offsets.reference = l(
                      this.state,
                      this.popper,
                      this.reference
                    )),
                      (e.placement = a(
                        this.options.placement,
                        e.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                      )),
                      (e.originalPlacement = e.placement),
                      (e.offsets.popper = I(
                        this.popper,
                        e.offsets.reference,
                        e.placement
                      )),
                      (e.offsets.popper.position = 'absolute'),
                      (e = O(this.modifiers, e)),
                      this.state.isCreated
                        ? this.options.onUpdate(e)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(e));
                  }
                }.call(this);
              },
            },
            {
              key: 'destroy',
              value: function () {
                return function () {
                  return (
                    (this.state.isDestroyed = !0),
                    e(this.modifiers, 'applyStyle') &&
                      (this.popper.removeAttribute('x-placement'),
                      (this.popper.style.left = ''),
                      (this.popper.style.position = ''),
                      (this.popper.style.top = ''),
                      (this.popper.style[j('transform')] = '')),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy &&
                      this.popper.parentNode.removeChild(this.popper),
                    this
                  );
                }.call(this);
              },
            },
            {
              key: 'enableEventListeners',
              value: function () {
                return function () {
                  this.state.eventsEnabled ||
                    (this.state = t(
                      this.reference,
                      this.options,
                      this.state,
                      this.scheduleUpdate
                    ));
                }.call(this);
              },
            },
            {
              key: 'disableEventListeners',
              value: function () {
                return n.call(this);
              },
            },
          ]),
          o
        );
      })();
    return (
      (X.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
      (X.placements = K),
      (X.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = t.split('-')[1];
              if (i) {
                var r = e.offsets,
                  o = r.reference,
                  s = r.popper,
                  a = -1 !== ['bottom', 'top'].indexOf(n),
                  l = a ? 'left' : 'top',
                  u = a ? 'width' : 'height',
                  c = {
                    start: U({}, l, o[l]),
                    end: U({}, l, o[l] + o[u] - s[u]),
                  };
                e.offsets.popper = Q({}, s, c[i]);
              }
              return e;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var n,
                i = t.offset,
                r = e.placement,
                o = e.offsets,
                s = o.popper,
                a = o.reference,
                l = r.split('-')[0];
              return (
                (n = d(+i) ? [+i, 0] : p(i, s, a, l)),
                'left' === l
                  ? ((s.top += n[0]), (s.left -= n[1]))
                  : 'right' === l
                  ? ((s.top += n[0]), (s.left += n[1]))
                  : 'top' === l
                  ? ((s.left += n[0]), (s.top -= n[1]))
                  : 'bottom' === l && ((s.left += n[0]), (s.top += n[1])),
                (e.popper = s),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, i) {
              var t = i.boundariesElement || w(e.instance.popper);
              e.instance.reference === t && (t = w(t));
              var r = h(e.instance.popper, e.instance.reference, i.padding, t);
              i.boundaries = r;
              var n = i.priority,
                o = e.offsets.popper,
                s = {
                  primary: function (e) {
                    var t = o[e];
                    return (
                      o[e] < r[e] &&
                        !i.escapeWithReference &&
                        (t = q(o[e], r[e])),
                      U({}, e, t)
                    );
                  },
                  secondary: function (e) {
                    var t = 'right' === e ? 'left' : 'top',
                      n = o[t];
                    return (
                      o[e] > r[e] &&
                        !i.escapeWithReference &&
                        (n = P(
                          o[t],
                          r[e] - ('right' === e ? o.width : o.height)
                        )),
                      U({}, t, n)
                    );
                  },
                };
              return (
                n.forEach(function (e) {
                  var t =
                    -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                  o = Q({}, o, s[t](e));
                }),
                (e.offsets.popper = o),
                e
              );
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                r = e.placement.split('-')[0],
                o = H,
                s = -1 !== ['top', 'bottom'].indexOf(r),
                a = s ? 'right' : 'bottom',
                l = s ? 'left' : 'top',
                u = s ? 'width' : 'height';
              return (
                n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]),
                n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              var n;
              if (!L(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
              var i = t.element;
              if ('string' == typeof i) {
                if (!(i = e.instance.popper.querySelector(i))) return e;
              } else if (!e.instance.popper.contains(i))
                return (
                  console.warn(
                    'WARNING: `arrow.element` must be child of its popper element!'
                  ),
                  e
                );
              var r = e.placement.split('-')[0],
                o = e.offsets,
                s = o.popper,
                a = o.reference,
                l = -1 !== ['left', 'right'].indexOf(r),
                u = l ? 'height' : 'width',
                c = l ? 'Top' : 'Left',
                f = c.toLowerCase(),
                h = l ? 'left' : 'top',
                d = l ? 'bottom' : 'right',
                p = A(i)[u];
              a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)),
                a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]),
                (e.offsets.popper = x(e.offsets.popper));
              var g = a[f] + a[u] / 2 - p / 2,
                m = b(e.instance.popper),
                v = parseFloat(m['margin' + c], 10),
                y = parseFloat(m['border' + c + 'Width'], 10),
                _ = g - e.offsets.popper[f] - v - y;
              return (
                (_ = q(P(s[u] - p, _), 0)),
                (e.arrowElement = i),
                (e.offsets.arrow =
                  (U((n = {}), f, Math.round(_)), U(n, h, ''), n)),
                e
              );
            },
            element: '[x-arrow]',
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (p, g) {
              if (e(p.instance.modifiers, 'inner')) return p;
              if (p.flipped && p.placement === p.originalPlacement) return p;
              var m = h(
                  p.instance.popper,
                  p.instance.reference,
                  g.padding,
                  g.boundariesElement
                ),
                v = p.placement.split('-')[0],
                y = N(v),
                _ = p.placement.split('-')[1] || '',
                b = [];
              switch (g.behavior) {
                case V:
                  b = [v, y];
                  break;
                case z:
                  b = r(v);
                  break;
                case Y:
                  b = r(v, !0);
                  break;
                default:
                  b = g.behavior;
              }
              return (
                b.forEach(function (e, t) {
                  if (v !== e || b.length === t + 1) return p;
                  (v = p.placement.split('-')[0]), (y = N(v));
                  var n,
                    i = p.offsets.popper,
                    r = p.offsets.reference,
                    o = H,
                    s =
                      ('left' === v && o(i.right) > o(r.left)) ||
                      ('right' === v && o(i.left) < o(r.right)) ||
                      ('top' === v && o(i.bottom) > o(r.top)) ||
                      ('bottom' === v && o(i.top) < o(r.bottom)),
                    a = o(i.left) < o(m.left),
                    l = o(i.right) > o(m.right),
                    u = o(i.top) < o(m.top),
                    c = o(i.bottom) > o(m.bottom),
                    f =
                      ('left' === v && a) ||
                      ('right' === v && l) ||
                      ('top' === v && u) ||
                      ('bottom' === v && c),
                    h = -1 !== ['top', 'bottom'].indexOf(v),
                    d =
                      !!g.flipVariations &&
                      ((h && 'start' === _ && a) ||
                        (h && 'end' === _ && l) ||
                        (!h && 'start' === _ && u) ||
                        (!h && 'end' === _ && c));
                  (s || f || d) &&
                    ((p.flipped = !0),
                    (s || f) && (v = b[t + 1]),
                    d &&
                      (_ =
                        'end' === (n = _)
                          ? 'start'
                          : 'start' === n
                          ? 'end'
                          : n),
                    (p.placement = v + (_ ? '-' + _ : '')),
                    (p.offsets.popper = Q(
                      {},
                      p.offsets.popper,
                      I(p.instance.popper, p.offsets.reference, p.placement)
                    )),
                    (p = O(p.instance.modifiers, p, 'flip')));
                }),
                p
              );
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split('-')[0],
                i = e.offsets,
                r = i.popper,
                o = i.reference,
                s = -1 !== ['left', 'right'].indexOf(n),
                a = -1 === ['top', 'left'].indexOf(n);
              return (
                (r[s ? 'left' : 'top'] =
                  o[n] - (a ? r[s ? 'width' : 'height'] : 0)),
                (e.placement = N(t)),
                (e.offsets.popper = x(r)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!L(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
              var t = e.offsets.reference,
                n = k(e.instance.modifiers, function (e) {
                  return 'preventOverflow' === e.name;
                }).boundaries;
              if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                r = e.offsets.popper,
                o = k(e.instance.modifiers, function (e) {
                  return 'applyStyle' === e.name;
                }).gpuAcceleration;
              void 0 !== o &&
                console.warn(
                  'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                );
              var s,
                a,
                l = void 0 === o ? t.gpuAcceleration : o,
                u = S(w(e.instance.popper)),
                c = { position: r.position },
                f = {
                  left: H(r.left),
                  top: H(r.top),
                  bottom: H(r.bottom),
                  right: H(r.right),
                },
                h = 'bottom' === n ? 'top' : 'bottom',
                d = 'right' === i ? 'left' : 'right',
                p = j('transform');
              if (
                ((a = 'bottom' == h ? -u.height + f.bottom : f.top),
                (s = 'right' == d ? -u.width + f.right : f.left),
                l && p)
              )
                (c[p] = 'translate3d(' + s + 'px, ' + a + 'px, 0)'),
                  (c[h] = 0),
                  (c[d] = 0),
                  (c.willChange = 'transform');
              else {
                var g = 'bottom' == h ? -1 : 1,
                  m = 'right' == d ? -1 : 1;
                (c[h] = a * g), (c[d] = s * m), (c.willChange = h + ', ' + d);
              }
              var v = { 'x-placement': e.placement };
              return (
                (e.attributes = Q({}, v, e.attributes)),
                (e.styles = Q({}, c, e.styles)),
                (e.arrowStyles = Q({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return (
                u(e.instance.popper, e.styles),
                (t = e.instance.popper),
                (n = e.attributes),
                Object.keys(n).forEach(function (e) {
                  !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e]);
                }),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  u(e.arrowElement, e.arrowStyles),
                e
              );
              var t, n;
            },
            onLoad: function (e, t, n, i, r) {
              var o = l(0, t, e),
                s = a(
                  n.placement,
                  o,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
              return (
                t.setAttribute('x-placement', s),
                u(t, { position: 'absolute' }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      X
    );
  }),
  (function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? t(exports, require('jquery'), require('popper.js'))
      : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], t)
      : t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
  })(this, function (e, p, f) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function t(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function l(r) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? t(Object(o), !0).forEach(function (e) {
              var t, n, i;
              (t = r),
                (i = o[(n = e)]),
                n in t
                  ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[n] = i);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
          : t(Object(o)).forEach(function (e) {
              Object.defineProperty(
                r,
                e,
                Object.getOwnPropertyDescriptor(o, e)
              );
            });
      }
      return r;
    }
    (p = p && p.hasOwnProperty('default') ? p.default : p),
      (f = f && f.hasOwnProperty('default') ? f.default : f);
    var n = 'transitionend';
    function r(e) {
      var t = this,
        n = !1;
      return (
        p(this).one(g.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || g.triggerTransitionEnd(t);
        }, e),
        this
      );
    }
    var g = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function (e) {
        for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
        return e;
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute('data-target');
        if (!t || '#' === t) {
          var n = e.getAttribute('href');
          t = n && '#' !== n ? n.trim() : '';
        }
        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var t = p(e).css('transition-duration'),
          n = p(e).css('transition-delay'),
          i = parseFloat(t),
          r = parseFloat(n);
        return i || r
          ? ((t = t.split(',')[0]),
            (n = n.split(',')[0]),
            1e3 * (parseFloat(t) + parseFloat(n)))
          : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        p(e).trigger(n);
      },
      supportsTransitionEnd: function () {
        return Boolean(n);
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
              o = t[i],
              s =
                o && g.isElement(o)
                  ? 'element'
                  : ((a = o),
                    {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase());
            if (!new RegExp(r).test(s))
              throw new Error(
                e.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  s +
                  '" but expected type "' +
                  r +
                  '".'
              );
          }
        var a;
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ('function' != typeof e.getRootNode)
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
            ? g.findShadowRoot(e.parentNode)
            : null;
        var t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      },
      jQueryDetection: function () {
        if (void 0 === p)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = p.fn.jquery.split(' ')[0].split('.');
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          4 <= e[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    g.jQueryDetection(),
      (p.fn.emulateTransitionEnd = r),
      (p.event.special[g.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function (e) {
          if (p(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        },
      });
    var o = 'alert',
      a = 'bs.alert',
      u = '.' + a,
      c = p.fn[o],
      h = {
        CLOSE: 'close' + u,
        CLOSED: 'closed' + u,
        CLICK_DATA_API: 'click' + u + '.data-api',
      },
      d = 'alert',
      m = 'fade',
      v = 'show',
      y = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (e.dispose = function () {
            p.removeData(this._element, a), (this._element = null);
          }),
          (e._getRootElement = function (e) {
            var t = g.getSelectorFromElement(e),
              n = !1;
            return (
              t && (n = document.querySelector(t)),
              n || (n = p(e).closest('.' + d)[0]),
              n
            );
          }),
          (e._triggerCloseEvent = function (e) {
            var t = p.Event(h.CLOSE);
            return p(e).trigger(t), t;
          }),
          (e._removeElement = function (t) {
            var n = this;
            if ((p(t).removeClass(v), p(t).hasClass(m))) {
              var e = g.getTransitionDurationFromElement(t);
              p(t)
                .one(g.TRANSITION_END, function (e) {
                  return n._destroyElement(t, e);
                })
                .emulateTransitionEnd(e);
            } else this._destroyElement(t);
          }),
          (e._destroyElement = function (e) {
            p(e).detach().trigger(h.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = p(this),
                t = e.data(a);
              t || ((t = new i(this)), e.data(a, t)),
                'close' === n && t[n](this);
            });
          }),
          (i._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          s(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
          ]),
          i
        );
      })();
    p(document).on(
      h.CLICK_DATA_API,
      '[data-dismiss="alert"]',
      y._handleDismiss(new y())
    ),
      (p.fn[o] = y._jQueryInterface),
      (p.fn[o].Constructor = y),
      (p.fn[o].noConflict = function () {
        return (p.fn[o] = c), y._jQueryInterface;
      });
    var _ = 'button',
      b = 'bs.button',
      w = '.' + b,
      E = '.data-api',
      T = p.fn[_],
      C = 'active',
      x = 'btn',
      S = 'focus',
      D = '[data-toggle^="button"]',
      A = '[data-toggle="buttons"]',
      N = '[data-toggle="button"]',
      I = '[data-toggle="buttons"] .btn',
      k = 'input:not([type="hidden"])',
      O = '.active',
      j = '.btn',
      L = {
        CLICK_DATA_API: 'click' + w + E,
        FOCUS_BLUR_DATA_API: 'focus' + w + E + ' blur' + w + E,
        LOAD_DATA_API: 'load' + w + E,
      },
      P = (function () {
        function n(e) {
          this._element = e;
        }
        var e = n.prototype;
        return (
          (e.toggle = function () {
            var e = !0,
              t = !0,
              n = p(this._element).closest(A)[0];
            if (n) {
              var i = this._element.querySelector(k);
              if (i) {
                if ('radio' === i.type)
                  if (i.checked && this._element.classList.contains(C)) e = !1;
                  else {
                    var r = n.querySelector(O);
                    r && p(r).removeClass(C);
                  }
                else
                  'checkbox' === i.type
                    ? 'LABEL' === this._element.tagName &&
                      i.checked === this._element.classList.contains(C) &&
                      (e = !1)
                    : (e = !1);
                e &&
                  ((i.checked = !this._element.classList.contains(C)),
                  p(i).trigger('change')),
                  i.focus(),
                  (t = !1);
              }
            }
            this._element.hasAttribute('disabled') ||
              this._element.classList.contains('disabled') ||
              (t &&
                this._element.setAttribute(
                  'aria-pressed',
                  !this._element.classList.contains(C)
                ),
              e && p(this._element).toggleClass(C));
          }),
          (e.dispose = function () {
            p.removeData(this._element, b), (this._element = null);
          }),
          (n._jQueryInterface = function (t) {
            return this.each(function () {
              var e = p(this).data(b);
              e || ((e = new n(this)), p(this).data(b, e)),
                'toggle' === t && e[t]();
            });
          }),
          s(n, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
          ]),
          n
        );
      })();
    p(document)
      .on(L.CLICK_DATA_API, D, function (e) {
        var t = e.target;
        if (
          (p(t).hasClass(x) || (t = p(t).closest(j)[0]),
          !t || t.hasAttribute('disabled') || t.classList.contains('disabled'))
        )
          e.preventDefault();
        else {
          var n = t.querySelector(k);
          if (
            n &&
            (n.hasAttribute('disabled') || n.classList.contains('disabled'))
          )
            return void e.preventDefault();
          P._jQueryInterface.call(p(t), 'toggle');
        }
      })
      .on(L.FOCUS_BLUR_DATA_API, D, function (e) {
        var t = p(e.target).closest(j)[0];
        p(t).toggleClass(S, /^focus(in)?$/.test(e.type));
      }),
      p(window).on(L.LOAD_DATA_API, function () {
        for (
          var e = [].slice.call(document.querySelectorAll(I)),
            t = 0,
            n = e.length;
          t < n;
          t++
        ) {
          var i = e[t],
            r = i.querySelector(k);
          r.checked || r.hasAttribute('checked')
            ? i.classList.add(C)
            : i.classList.remove(C);
        }
        for (
          var o = 0,
            s = (e = [].slice.call(document.querySelectorAll(N))).length;
          o < s;
          o++
        ) {
          var a = e[o];
          'true' === a.getAttribute('aria-pressed')
            ? a.classList.add(C)
            : a.classList.remove(C);
        }
      }),
      (p.fn[_] = P._jQueryInterface),
      (p.fn[_].Constructor = P),
      (p.fn[_].noConflict = function () {
        return (p.fn[_] = T), P._jQueryInterface;
      });
    var H = 'carousel',
      q = 'bs.carousel',
      R = '.' + q,
      M = '.data-api',
      W = p.fn[H],
      F = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: 'hover',
        wrap: !0,
        touch: !0,
      },
      B = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean',
      },
      U = 'next',
      Q = 'prev',
      K = 'left',
      $ = 'right',
      V = {
        SLIDE: 'slide' + R,
        SLID: 'slid' + R,
        KEYDOWN: 'keydown' + R,
        MOUSEENTER: 'mouseenter' + R,
        MOUSELEAVE: 'mouseleave' + R,
        TOUCHSTART: 'touchstart' + R,
        TOUCHMOVE: 'touchmove' + R,
        TOUCHEND: 'touchend' + R,
        POINTERDOWN: 'pointerdown' + R,
        POINTERUP: 'pointerup' + R,
        DRAG_START: 'dragstart' + R,
        LOAD_DATA_API: 'load' + R + M,
        CLICK_DATA_API: 'click' + R + M,
      },
      z = 'carousel',
      Y = 'active',
      X = 'slide',
      G = 'carousel-item-right',
      J = 'carousel-item-left',
      Z = 'carousel-item-next',
      ee = 'carousel-item-prev',
      te = 'pointer-event',
      ne = '.active',
      ie = '.active.carousel-item',
      re = '.carousel-item',
      oe = '.carousel-item img',
      se = '.carousel-item-next, .carousel-item-prev',
      ae = '.carousel-indicators',
      le = '[data-slide], [data-slide-to]',
      ue = '[data-ride="carousel"]',
      ce = { TOUCH: 'touch', PEN: 'pen' },
      fe = (function () {
        function o(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(ae)),
            (this._touchSupported =
              'ontouchstart' in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var e = o.prototype;
        return (
          (e.next = function () {
            this._isSliding || this._slide(U);
          }),
          (e.nextWhenVisible = function () {
            !document.hidden &&
              p(this._element).is(':visible') &&
              'hidden' !== p(this._element).css('visibility') &&
              this.next();
          }),
          (e.prev = function () {
            this._isSliding || this._slide(Q);
          }),
          (e.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector(se) &&
                (g.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (e.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (e.to = function (e) {
            var t = this;
            this._activeElement = this._element.querySelector(ie);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                p(this._element).one(V.SLID, function () {
                  return t.to(e);
                });
              else {
                if (n === e) return this.pause(), void this.cycle();
                var i = n < e ? U : Q;
                this._slide(i, this._items[e]);
              }
          }),
          (e.dispose = function () {
            p(this._element).off(R),
              p.removeData(this._element, q),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (e._getConfig = function (e) {
            return (e = l({}, F, {}, e)), g.typeCheckConfig(H, e, B), e;
          }),
          (e._handleSwipe = function () {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              var t = e / this.touchDeltaX;
              (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next();
            }
          }),
          (e._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              p(this._element).on(V.KEYDOWN, function (e) {
                return t._keydown(e);
              }),
              'hover' === this._config.pause &&
                p(this._element)
                  .on(V.MOUSEENTER, function (e) {
                    return t.pause(e);
                  })
                  .on(V.MOUSELEAVE, function (e) {
                    return t.cycle(e);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (e._addTouchEventListeners = function () {
            var n = this;
            if (this._touchSupported) {
              var t = function (e) {
                  n._pointerEvent &&
                  ce[e.originalEvent.pointerType.toUpperCase()]
                    ? (n.touchStartX = e.originalEvent.clientX)
                    : n._pointerEvent ||
                      (n.touchStartX = e.originalEvent.touches[0].clientX);
                },
                i = function (e) {
                  n._pointerEvent &&
                    ce[e.originalEvent.pointerType.toUpperCase()] &&
                    (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX),
                    n._handleSwipe(),
                    'hover' === n._config.pause &&
                      (n.pause(),
                      n.touchTimeout && clearTimeout(n.touchTimeout),
                      (n.touchTimeout = setTimeout(function (e) {
                        return n.cycle(e);
                      }, 500 + n._config.interval)));
                };
              p(this._element.querySelectorAll(oe)).on(
                V.DRAG_START,
                function (e) {
                  return e.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (p(this._element).on(V.POINTERDOWN, function (e) {
                      return t(e);
                    }),
                    p(this._element).on(V.POINTERUP, function (e) {
                      return i(e);
                    }),
                    this._element.classList.add(te))
                  : (p(this._element).on(V.TOUCHSTART, function (e) {
                      return t(e);
                    }),
                    p(this._element).on(V.TOUCHMOVE, function (e) {
                      var t;
                      (t = e).originalEvent.touches &&
                      1 < t.originalEvent.touches.length
                        ? (n.touchDeltaX = 0)
                        : (n.touchDeltaX =
                            t.originalEvent.touches[0].clientX - n.touchStartX);
                    }),
                    p(this._element).on(V.TOUCHEND, function (e) {
                      return i(e);
                    }));
            }
          }),
          (e._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (e._getItemIndex = function (e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(e.parentNode.querySelectorAll(re))
                  : []),
              this._items.indexOf(e)
            );
          }),
          (e._getItemByDirection = function (e, t) {
            var n = e === U,
              i = e === Q,
              r = this._getItemIndex(t),
              o = this._items.length - 1;
            if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
              return t;
            var s = (r + (e === Q ? -1 : 1)) % this._items.length;
            return -1 === s
              ? this._items[this._items.length - 1]
              : this._items[s];
          }),
          (e._triggerSlideEvent = function (e, t) {
            var n = this._getItemIndex(e),
              i = this._getItemIndex(this._element.querySelector(ie)),
              r = p.Event(V.SLIDE, {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n,
              });
            return p(this._element).trigger(r), r;
          }),
          (e._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              var t = [].slice.call(
                this._indicatorsElement.querySelectorAll(ne)
              );
              p(t).removeClass(Y);
              var n = this._indicatorsElement.children[this._getItemIndex(e)];
              n && p(n).addClass(Y);
            }
          }),
          (e._slide = function (e, t) {
            var n,
              i,
              r,
              o = this,
              s = this._element.querySelector(ie),
              a = this._getItemIndex(s),
              l = t || (s && this._getItemByDirection(e, s)),
              u = this._getItemIndex(l),
              c = Boolean(this._interval);
            if (
              ((r = e === U ? ((n = J), (i = Z), K) : ((n = G), (i = ee), $)),
              l && p(l).hasClass(Y))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
              s &&
              l
            ) {
              (this._isSliding = !0),
                c && this.pause(),
                this._setActiveIndicatorElement(l);
              var f = p.Event(V.SLID, {
                relatedTarget: l,
                direction: r,
                from: a,
                to: u,
              });
              if (p(this._element).hasClass(X)) {
                p(l).addClass(i),
                  g.reflow(l),
                  p(s).addClass(n),
                  p(l).addClass(n);
                var h = parseInt(l.getAttribute('data-interval'), 10);
                h
                  ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                    (this._config.interval = h))
                  : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
                var d = g.getTransitionDurationFromElement(s);
                p(s)
                  .one(g.TRANSITION_END, function () {
                    p(l)
                      .removeClass(n + ' ' + i)
                      .addClass(Y),
                      p(s).removeClass(Y + ' ' + i + ' ' + n),
                      (o._isSliding = !1),
                      setTimeout(function () {
                        return p(o._element).trigger(f);
                      }, 0);
                  })
                  .emulateTransitionEnd(d);
              } else
                p(s).removeClass(Y),
                  p(l).addClass(Y),
                  (this._isSliding = !1),
                  p(this._element).trigger(f);
              c && this.cycle();
            }
          }),
          (o._jQueryInterface = function (i) {
            return this.each(function () {
              var e = p(this).data(q),
                t = l({}, F, {}, p(this).data());
              'object' == typeof i && (t = l({}, t, {}, i));
              var n = 'string' == typeof i ? i : t.slide;
              if (
                (e || ((e = new o(this, t)), p(this).data(q, e)),
                'number' == typeof i)
              )
                e.to(i);
              else if ('string' == typeof n) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              } else t.interval && t.ride && (e.pause(), e.cycle());
            });
          }),
          (o._dataApiClickHandler = function (e) {
            var t = g.getSelectorFromElement(this);
            if (t) {
              var n = p(t)[0];
              if (n && p(n).hasClass(z)) {
                var i = l({}, p(n).data(), {}, p(this).data()),
                  r = this.getAttribute('data-slide-to');
                r && (i.interval = !1),
                  o._jQueryInterface.call(p(n), i),
                  r && p(n).data(q).to(r),
                  e.preventDefault();
              }
            }
          }),
          s(o, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return F;
              },
            },
          ]),
          o
        );
      })();
    p(document).on(V.CLICK_DATA_API, le, fe._dataApiClickHandler),
      p(window).on(V.LOAD_DATA_API, function () {
        for (
          var e = [].slice.call(document.querySelectorAll(ue)),
            t = 0,
            n = e.length;
          t < n;
          t++
        ) {
          var i = p(e[t]);
          fe._jQueryInterface.call(i, i.data());
        }
      }),
      (p.fn[H] = fe._jQueryInterface),
      (p.fn[H].Constructor = fe),
      (p.fn[H].noConflict = function () {
        return (p.fn[H] = W), fe._jQueryInterface;
      });
    var he = 'collapse',
      de = 'bs.collapse',
      pe = '.' + de,
      ge = p.fn[he],
      me = { toggle: !0, parent: '' },
      ve = { toggle: 'boolean', parent: '(string|element)' },
      ye = {
        SHOW: 'show' + pe,
        SHOWN: 'shown' + pe,
        HIDE: 'hide' + pe,
        HIDDEN: 'hidden' + pe,
        CLICK_DATA_API: 'click' + pe + '.data-api',
      },
      _e = 'show',
      be = 'collapse',
      we = 'collapsing',
      Ee = 'collapsed',
      Te = 'width',
      Ce = 'height',
      xe = '.show, .collapsing',
      Se = '[data-toggle="collapse"]',
      De = (function () {
        function a(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(Se)),
              i = 0,
              r = n.length;
            i < r;
            i++
          ) {
            var o = n[i],
              s = g.getSelectorFromElement(o),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (e) {
                  return e === t;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var e = a.prototype;
        return (
          (e.toggle = function () {
            p(this._element).hasClass(_e) ? this.hide() : this.show();
          }),
          (e.show = function () {
            var e,
              t,
              n = this;
            if (
              !this._isTransitioning &&
              !p(this._element).hasClass(_e) &&
              (this._parent &&
                0 ===
                  (e = [].slice
                    .call(this._parent.querySelectorAll(xe))
                    .filter(function (e) {
                      return 'string' == typeof n._config.parent
                        ? e.getAttribute('data-parent') === n._config.parent
                        : e.classList.contains(be);
                    })).length &&
                (e = null),
              !(
                e &&
                (t = p(e).not(this._selector).data(de)) &&
                t._isTransitioning
              ))
            ) {
              var i = p.Event(ye.SHOW);
              if ((p(this._element).trigger(i), !i.isDefaultPrevented())) {
                e &&
                  (a._jQueryInterface.call(p(e).not(this._selector), 'hide'),
                  t || p(e).data(de, null));
                var r = this._getDimension();
                p(this._element).removeClass(be).addClass(we),
                  (this._element.style[r] = 0),
                  this._triggerArray.length &&
                    p(this._triggerArray)
                      .removeClass(Ee)
                      .attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                var o = 'scroll' + (r[0].toUpperCase() + r.slice(1)),
                  s = g.getTransitionDurationFromElement(this._element);
                p(this._element)
                  .one(g.TRANSITION_END, function () {
                    p(n._element).removeClass(we).addClass(be).addClass(_e),
                      (n._element.style[r] = ''),
                      n.setTransitioning(!1),
                      p(n._element).trigger(ye.SHOWN);
                  })
                  .emulateTransitionEnd(s),
                  (this._element.style[r] = this._element[o] + 'px');
              }
            }
          }),
          (e.hide = function () {
            var e = this;
            if (!this._isTransitioning && p(this._element).hasClass(_e)) {
              var t = p.Event(ye.HIDE);
              if ((p(this._element).trigger(t), !t.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + 'px'),
                  g.reflow(this._element),
                  p(this._element).addClass(we).removeClass(be).removeClass(_e);
                var i = this._triggerArray.length;
                if (0 < i)
                  for (var r = 0; r < i; r++) {
                    var o = this._triggerArray[r],
                      s = g.getSelectorFromElement(o);
                    if (null !== s)
                      p([].slice.call(document.querySelectorAll(s))).hasClass(
                        _e
                      ) || p(o).addClass(Ee).attr('aria-expanded', !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = '';
                var a = g.getTransitionDurationFromElement(this._element);
                p(this._element)
                  .one(g.TRANSITION_END, function () {
                    e.setTransitioning(!1),
                      p(e._element)
                        .removeClass(we)
                        .addClass(be)
                        .trigger(ye.HIDDEN);
                  })
                  .emulateTransitionEnd(a);
              }
            }
          }),
          (e.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (e.dispose = function () {
            p.removeData(this._element, de),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (e._getConfig = function (e) {
            return (
              ((e = l({}, me, {}, e)).toggle = Boolean(e.toggle)),
              g.typeCheckConfig(he, e, ve),
              e
            );
          }),
          (e._getDimension = function () {
            return p(this._element).hasClass(Te) ? Te : Ce;
          }),
          (e._getParent = function () {
            var e,
              n = this;
            g.isElement(this._config.parent)
              ? ((e = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (e = this._config.parent[0]))
              : (e = document.querySelector(this._config.parent));
            var t =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              i = [].slice.call(e.querySelectorAll(t));
            return (
              p(i).each(function (e, t) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
              }),
              e
            );
          }),
          (e._addAriaAndCollapsedClass = function (e, t) {
            var n = p(e).hasClass(_e);
            t.length && p(t).toggleClass(Ee, !n).attr('aria-expanded', n);
          }),
          (a._getTargetFromElement = function (e) {
            var t = g.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var e = p(this),
                t = e.data(de),
                n = l(
                  {},
                  me,
                  {},
                  e.data(),
                  {},
                  'object' == typeof i && i ? i : {}
                );
              if (
                (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                t || ((t = new a(this, n)), e.data(de, t)),
                'string' == typeof i)
              ) {
                if (void 0 === t[i])
                  throw new TypeError('No method named "' + i + '"');
                t[i]();
              }
            });
          }),
          s(a, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return me;
              },
            },
          ]),
          a
        );
      })();
    p(document).on(ye.CLICK_DATA_API, Se, function (e) {
      'A' === e.currentTarget.tagName && e.preventDefault();
      var n = p(this),
        t = g.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(t));
      p(i).each(function () {
        var e = p(this),
          t = e.data(de) ? 'toggle' : n.data();
        De._jQueryInterface.call(e, t);
      });
    }),
      (p.fn[he] = De._jQueryInterface),
      (p.fn[he].Constructor = De),
      (p.fn[he].noConflict = function () {
        return (p.fn[he] = ge), De._jQueryInterface;
      });
    var Ae = 'dropdown',
      Ne = 'bs.dropdown',
      Ie = '.' + Ne,
      ke = '.data-api',
      Oe = p.fn[Ae],
      je = new RegExp('38|40|27'),
      Le = {
        HIDE: 'hide' + Ie,
        HIDDEN: 'hidden' + Ie,
        SHOW: 'show' + Ie,
        SHOWN: 'shown' + Ie,
        CLICK: 'click' + Ie,
        CLICK_DATA_API: 'click' + Ie + ke,
        KEYDOWN_DATA_API: 'keydown' + Ie + ke,
        KEYUP_DATA_API: 'keyup' + Ie + ke,
      },
      Pe = 'disabled',
      He = 'show',
      qe = 'dropup',
      Re = 'dropright',
      Me = 'dropleft',
      We = 'dropdown-menu-right',
      Fe = 'position-static',
      Be = '[data-toggle="dropdown"]',
      Ue = '.dropdown form',
      Qe = '.dropdown-menu',
      Ke = '.navbar-nav',
      $e = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
      Ve = 'top-start',
      ze = 'top-end',
      Ye = 'bottom-start',
      Xe = 'bottom-end',
      Ge = 'right-start',
      Je = 'left-start',
      Ze = {
        offset: 0,
        flip: !0,
        boundary: 'scrollParent',
        reference: 'toggle',
        display: 'dynamic',
        popperConfig: null,
      },
      et = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string',
        popperConfig: '(null|object)',
      },
      tt = (function () {
        function u(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var e = u.prototype;
        return (
          (e.toggle = function () {
            if (!this._element.disabled && !p(this._element).hasClass(Pe)) {
              var e = p(this._menu).hasClass(He);
              u._clearMenus(), e || this.show(!0);
            }
          }),
          (e.show = function (e) {
            if (
              (void 0 === e && (e = !1),
              !(
                this._element.disabled ||
                p(this._element).hasClass(Pe) ||
                p(this._menu).hasClass(He)
              ))
            ) {
              var t = { relatedTarget: this._element },
                n = p.Event(Le.SHOW, t),
                i = u._getParentFromElement(this._element);
              if ((p(i).trigger(n), !n.isDefaultPrevented())) {
                if (!this._inNavbar && e) {
                  if (void 0 === f)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var r = this._element;
                  'parent' === this._config.reference
                    ? (r = i)
                    : g.isElement(this._config.reference) &&
                      ((r = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (r = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary &&
                      p(i).addClass(Fe),
                    (this._popper = new f(
                      r,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                'ontouchstart' in document.documentElement &&
                  0 === p(i).closest(Ke).length &&
                  p(document.body).children().on('mouseover', null, p.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  p(this._menu).toggleClass(He),
                  p(i).toggleClass(He).trigger(p.Event(Le.SHOWN, t));
              }
            }
          }),
          (e.hide = function () {
            if (
              !this._element.disabled &&
              !p(this._element).hasClass(Pe) &&
              p(this._menu).hasClass(He)
            ) {
              var e = { relatedTarget: this._element },
                t = p.Event(Le.HIDE, e),
                n = u._getParentFromElement(this._element);
              p(n).trigger(t),
                t.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  p(this._menu).toggleClass(He),
                  p(n).toggleClass(He).trigger(p.Event(Le.HIDDEN, e)));
            }
          }),
          (e.dispose = function () {
            p.removeData(this._element, Ne),
              p(this._element).off(Ie),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (e.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e._addEventListeners = function () {
            var t = this;
            p(this._element).on(Le.CLICK, function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (e._getConfig = function (e) {
            return (
              (e = l(
                {},
                this.constructor.Default,
                {},
                p(this._element).data(),
                {},
                e
              )),
              g.typeCheckConfig(Ae, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._getMenuElement = function () {
            if (!this._menu) {
              var e = u._getParentFromElement(this._element);
              e && (this._menu = e.querySelector(Qe));
            }
            return this._menu;
          }),
          (e._getPlacement = function () {
            var e = p(this._element.parentNode),
              t = Ye;
            return (
              e.hasClass(qe)
                ? ((t = Ve), p(this._menu).hasClass(We) && (t = ze))
                : e.hasClass(Re)
                ? (t = Ge)
                : e.hasClass(Me)
                ? (t = Je)
                : p(this._menu).hasClass(We) && (t = Xe),
              t
            );
          }),
          (e._detectNavbar = function () {
            return 0 < p(this._element).closest('.navbar').length;
          }),
          (e._getOffset = function () {
            var t = this,
              e = {};
            return (
              'function' == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = l(
                        {},
                        e.offsets,
                        {},
                        t._config.offset(e.offsets, t._element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this._config.offset),
              e
            );
          }),
          (e._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              'static' === this._config.display &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              l({}, e, {}, this._config.popperConfig)
            );
          }),
          (u._jQueryInterface = function (t) {
            return this.each(function () {
              var e = p(this).data(Ne);
              if (
                (e ||
                  ((e = new u(this, 'object' == typeof t ? t : null)),
                  p(this).data(Ne, e)),
                'string' == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          (u._clearMenus = function (e) {
            if (!e || (3 !== e.which && ('keyup' !== e.type || 9 === e.which)))
              for (
                var t = [].slice.call(document.querySelectorAll(Be)),
                  n = 0,
                  i = t.length;
                n < i;
                n++
              ) {
                var r = u._getParentFromElement(t[n]),
                  o = p(t[n]).data(Ne),
                  s = { relatedTarget: t[n] };
                if ((e && 'click' === e.type && (s.clickEvent = e), o)) {
                  var a = o._menu;
                  if (
                    p(r).hasClass(He) &&
                    !(
                      e &&
                      (('click' === e.type &&
                        /input|textarea/i.test(e.target.tagName)) ||
                        ('keyup' === e.type && 9 === e.which)) &&
                      p.contains(r, e.target)
                    )
                  ) {
                    var l = p.Event(Le.HIDE, s);
                    p(r).trigger(l),
                      l.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          p(document.body)
                            .children()
                            .off('mouseover', null, p.noop),
                        t[n].setAttribute('aria-expanded', 'false'),
                        o._popper && o._popper.destroy(),
                        p(a).removeClass(He),
                        p(r).removeClass(He).trigger(p.Event(Le.HIDDEN, s)));
                  }
                }
              }
          }),
          (u._getParentFromElement = function (e) {
            var t,
              n = g.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (u._dataApiKeydownHandler = function (e) {
            if (
              (/input|textarea/i.test(e.target.tagName)
                ? !(
                    32 === e.which ||
                    (27 !== e.which &&
                      ((40 !== e.which && 38 !== e.which) ||
                        p(e.target).closest(Qe).length))
                  )
                : je.test(e.which)) &&
              (e.preventDefault(),
              e.stopPropagation(),
              !this.disabled && !p(this).hasClass(Pe))
            ) {
              var t = u._getParentFromElement(this),
                n = p(t).hasClass(He);
              if (n || 27 !== e.which)
                if (n && (!n || (27 !== e.which && 32 !== e.which))) {
                  var i = [].slice
                    .call(t.querySelectorAll($e))
                    .filter(function (e) {
                      return p(e).is(':visible');
                    });
                  if (0 !== i.length) {
                    var r = i.indexOf(e.target);
                    38 === e.which && 0 < r && r--,
                      40 === e.which && r < i.length - 1 && r++,
                      r < 0 && (r = 0),
                      i[r].focus();
                  }
                } else {
                  if (27 === e.which) {
                    var o = t.querySelector(Be);
                    p(o).trigger('focus');
                  }
                  p(this).trigger('click');
                }
            }
          }),
          s(u, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return Ze;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return et;
              },
            },
          ]),
          u
        );
      })();
    p(document)
      .on(Le.KEYDOWN_DATA_API, Be, tt._dataApiKeydownHandler)
      .on(Le.KEYDOWN_DATA_API, Qe, tt._dataApiKeydownHandler)
      .on(Le.CLICK_DATA_API + ' ' + Le.KEYUP_DATA_API, tt._clearMenus)
      .on(Le.CLICK_DATA_API, Be, function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          tt._jQueryInterface.call(p(this), 'toggle');
      })
      .on(Le.CLICK_DATA_API, Ue, function (e) {
        e.stopPropagation();
      }),
      (p.fn[Ae] = tt._jQueryInterface),
      (p.fn[Ae].Constructor = tt),
      (p.fn[Ae].noConflict = function () {
        return (p.fn[Ae] = Oe), tt._jQueryInterface;
      });
    var nt = 'modal',
      it = 'bs.modal',
      rt = '.' + it,
      ot = p.fn[nt],
      st = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      at = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        focus: 'boolean',
        show: 'boolean',
      },
      lt = {
        HIDE: 'hide' + rt,
        HIDE_PREVENTED: 'hidePrevented' + rt,
        HIDDEN: 'hidden' + rt,
        SHOW: 'show' + rt,
        SHOWN: 'shown' + rt,
        FOCUSIN: 'focusin' + rt,
        RESIZE: 'resize' + rt,
        CLICK_DISMISS: 'click.dismiss' + rt,
        KEYDOWN_DISMISS: 'keydown.dismiss' + rt,
        MOUSEUP_DISMISS: 'mouseup.dismiss' + rt,
        MOUSEDOWN_DISMISS: 'mousedown.dismiss' + rt,
        CLICK_DATA_API: 'click' + rt + '.data-api',
      },
      ut = 'modal-dialog-scrollable',
      ct = 'modal-scrollbar-measure',
      ft = 'modal-backdrop',
      ht = 'modal-open',
      dt = 'fade',
      pt = 'show',
      gt = 'modal-static',
      mt = '.modal-dialog',
      vt = '.modal-body',
      yt = '[data-toggle="modal"]',
      _t = '[data-dismiss="modal"]',
      bt = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      wt = '.sticky-top',
      Et = (function () {
        function r(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(mt)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var e = r.prototype;
        return (
          (e.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (e.show = function (e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
              p(this._element).hasClass(dt) && (this._isTransitioning = !0);
              var n = p.Event(lt.SHOW, { relatedTarget: e });
              p(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  p(this._element).on(lt.CLICK_DISMISS, _t, function (e) {
                    return t.hide(e);
                  }),
                  p(this._dialog).on(lt.MOUSEDOWN_DISMISS, function () {
                    p(t._element).one(lt.MOUSEUP_DISMISS, function (e) {
                      p(e.target).is(t._element) &&
                        (t._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return t._showElement(e);
                  }));
            }
          }),
          (e.hide = function (e) {
            var t = this;
            if (
              (e && e.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var n = p.Event(lt.HIDE);
              if (
                (p(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = p(this._element).hasClass(dt);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  p(document).off(lt.FOCUSIN),
                  p(this._element).removeClass(pt),
                  p(this._element).off(lt.CLICK_DISMISS),
                  p(this._dialog).off(lt.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = g.getTransitionDurationFromElement(this._element);
                  p(this._element)
                    .one(g.TRANSITION_END, function (e) {
                      return t._hideModal(e);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (e.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return p(e).off(rt);
            }),
              p(document).off(lt.FOCUSIN),
              p.removeData(this._element, it),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function () {
            this._adjustDialog();
          }),
          (e._getConfig = function (e) {
            return (e = l({}, st, {}, e)), g.typeCheckConfig(nt, e, at), e;
          }),
          (e._triggerBackdropTransition = function () {
            var e = this;
            if ('static' === this._config.backdrop) {
              var t = p.Event(lt.HIDE_PREVENTED);
              if ((p(this._element).trigger(t), t.defaultPrevented)) return;
              this._element.classList.add(gt);
              var n = g.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(g.TRANSITION_END, function () {
                  e._element.classList.remove(gt);
                })
                .emulateTransitionEnd(n),
                this._element.focus();
            } else this.hide();
          }),
          (e._showElement = function (e) {
            var t = this,
              n = p(this._element).hasClass(dt),
              i = this._dialog ? this._dialog.querySelector(vt) : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              p(this._dialog).hasClass(ut) && i
                ? (i.scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && g.reflow(this._element),
              p(this._element).addClass(pt),
              this._config.focus && this._enforceFocus();
            var r = p.Event(lt.SHOWN, { relatedTarget: e }),
              o = function () {
                t._config.focus && t._element.focus(),
                  (t._isTransitioning = !1),
                  p(t._element).trigger(r);
              };
            if (n) {
              var s = g.getTransitionDurationFromElement(this._dialog);
              p(this._dialog).one(g.TRANSITION_END, o).emulateTransitionEnd(s);
            } else o();
          }),
          (e._enforceFocus = function () {
            var t = this;
            p(document)
              .off(lt.FOCUSIN)
              .on(lt.FOCUSIN, function (e) {
                document !== e.target &&
                  t._element !== e.target &&
                  0 === p(t._element).has(e.target).length &&
                  t._element.focus();
              });
          }),
          (e._setEscapeEvent = function () {
            var t = this;
            this._isShown && this._config.keyboard
              ? p(this._element).on(lt.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && t._triggerBackdropTransition();
                })
              : this._isShown || p(this._element).off(lt.KEYDOWN_DISMISS);
          }),
          (e._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? p(window).on(lt.RESIZE, function (e) {
                  return t.handleUpdate(e);
                })
              : p(window).off(lt.RESIZE);
          }),
          (e._hideModal = function () {
            var e = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                p(document.body).removeClass(ht),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  p(e._element).trigger(lt.HIDDEN);
              });
          }),
          (e._removeBackdrop = function () {
            this._backdrop &&
              (p(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function (e) {
            var t = this,
              n = p(this._element).hasClass(dt) ? dt : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = ft),
                n && this._backdrop.classList.add(n),
                p(this._backdrop).appendTo(document.body),
                p(this._element).on(lt.CLICK_DISMISS, function (e) {
                  t._ignoreBackdropClick
                    ? (t._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      t._triggerBackdropTransition();
                }),
                n && g.reflow(this._backdrop),
                p(this._backdrop).addClass(pt),
                !e)
              )
                return;
              if (!n) return void e();
              var i = g.getTransitionDurationFromElement(this._backdrop);
              p(this._backdrop)
                .one(g.TRANSITION_END, e)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              p(this._backdrop).removeClass(pt);
              var r = function () {
                t._removeBackdrop(), e && e();
              };
              if (p(this._element).hasClass(dt)) {
                var o = g.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop)
                  .one(g.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
            } else e && e();
          }),
          (e._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + 'px');
          }),
          (e._resetAdjustments = function () {
            (this._element.style.paddingLeft = ''),
              (this._element.style.paddingRight = '');
          }),
          (e._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function () {
            var r = this;
            if (this._isBodyOverflowing) {
              var e = [].slice.call(document.querySelectorAll(bt)),
                t = [].slice.call(document.querySelectorAll(wt));
              p(e).each(function (e, t) {
                var n = t.style.paddingRight,
                  i = p(t).css('padding-right');
                p(t)
                  .data('padding-right', n)
                  .css(
                    'padding-right',
                    parseFloat(i) + r._scrollbarWidth + 'px'
                  );
              }),
                p(t).each(function (e, t) {
                  var n = t.style.marginRight,
                    i = p(t).css('margin-right');
                  p(t)
                    .data('margin-right', n)
                    .css(
                      'margin-right',
                      parseFloat(i) - r._scrollbarWidth + 'px'
                    );
                });
              var n = document.body.style.paddingRight,
                i = p(document.body).css('padding-right');
              p(document.body)
                .data('padding-right', n)
                .css(
                  'padding-right',
                  parseFloat(i) + this._scrollbarWidth + 'px'
                );
            }
            p(document.body).addClass(ht);
          }),
          (e._resetScrollbar = function () {
            var e = [].slice.call(document.querySelectorAll(bt));
            p(e).each(function (e, t) {
              var n = p(t).data('padding-right');
              p(t).removeData('padding-right'),
                (t.style.paddingRight = n || '');
            });
            var t = [].slice.call(document.querySelectorAll('' + wt));
            p(t).each(function (e, t) {
              var n = p(t).data('margin-right');
              void 0 !== n &&
                p(t).css('margin-right', n).removeData('margin-right');
            });
            var n = p(document.body).data('padding-right');
            p(document.body).removeData('padding-right'),
              (document.body.style.paddingRight = n || '');
          }),
          (e._getScrollbarWidth = function () {
            var e = document.createElement('div');
            (e.className = ct), document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var e = p(this).data(it),
                t = l(
                  {},
                  st,
                  {},
                  p(this).data(),
                  {},
                  'object' == typeof n && n ? n : {}
                );
              if (
                (e || ((e = new r(this, t)), p(this).data(it, e)),
                'string' == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n](i);
              } else t.show && e.show(i);
            });
          }),
          s(r, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return st;
              },
            },
          ]),
          r
        );
      })();
    p(document).on(lt.CLICK_DATA_API, yt, function (e) {
      var t,
        n = this,
        i = g.getSelectorFromElement(this);
      i && (t = document.querySelector(i));
      var r = p(t).data(it) ? 'toggle' : l({}, p(t).data(), {}, p(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || e.preventDefault();
      var o = p(t).one(lt.SHOW, function (e) {
        e.isDefaultPrevented() ||
          o.one(lt.HIDDEN, function () {
            p(n).is(':visible') && n.focus();
          });
      });
      Et._jQueryInterface.call(p(t), r, this);
    }),
      (p.fn[nt] = Et._jQueryInterface),
      (p.fn[nt].Constructor = Et),
      (p.fn[nt].noConflict = function () {
        return (p.fn[nt] = ot), Et._jQueryInterface;
      });
    var Tt = [
        'background',
        'cite',
        'href',
        'itemtype',
        'longdesc',
        'poster',
        'src',
        'xlink:href',
      ],
      Ct = {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
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
        img: ['src', 'alt', 'title', 'width', 'height'],
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
      xt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      St =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Dt(e, s, t) {
      if (0 === e.length) return e;
      if (t && 'function' == typeof t) return t(e);
      for (
        var n = new window.DOMParser().parseFromString(e, 'text/html'),
          a = Object.keys(s),
          l = [].slice.call(n.body.querySelectorAll('*')),
          i = function (e, t) {
            var n = l[e],
              i = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
              return n.parentNode.removeChild(n), 'continue';
            var r = [].slice.call(n.attributes),
              o = [].concat(s['*'] || [], s[i] || []);
            r.forEach(function (e) {
              (function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return (
                    -1 === Tt.indexOf(n) ||
                    Boolean(e.nodeValue.match(xt) || e.nodeValue.match(St))
                  );
                for (
                  var i = t.filter(function (e) {
                      return e instanceof RegExp;
                    }),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  if (n.match(i[r])) return !0;
                return !1;
              })(e, o) || n.removeAttribute(e.nodeName);
            });
          },
          r = 0,
          o = l.length;
        r < o;
        r++
      )
        i(r);
      return n.body.innerHTML;
    }
    var At = 'tooltip',
      Nt = 'bs.tooltip',
      It = '.' + Nt,
      kt = p.fn[At],
      Ot = 'bs-tooltip',
      jt = new RegExp('(^|\\s)' + Ot + '\\S+', 'g'),
      Lt = ['sanitize', 'whiteList', 'sanitizeFn'],
      Pt = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object',
        popperConfig: '(null|object)',
      },
      Ht = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: 'right',
        BOTTOM: 'bottom',
        LEFT: 'left',
      },
      qt = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Ct,
        popperConfig: null,
      },
      Rt = 'show',
      Mt = 'out',
      Wt = {
        HIDE: 'hide' + It,
        HIDDEN: 'hidden' + It,
        SHOW: 'show' + It,
        SHOWN: 'shown' + It,
        INSERTED: 'inserted' + It,
        CLICK: 'click' + It,
        FOCUSIN: 'focusin' + It,
        FOCUSOUT: 'focusout' + It,
        MOUSEENTER: 'mouseenter' + It,
        MOUSELEAVE: 'mouseleave' + It,
      },
      Ft = 'fade',
      Bt = 'show',
      Ut = '.tooltip-inner',
      Qt = '.arrow',
      Kt = 'hover',
      $t = 'focus',
      Vt = 'click',
      zt = 'manual',
      Yt = (function () {
        function i(e, t) {
          if (void 0 === f)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var e = i.prototype;
        return (
          (e.enable = function () {
            this._isEnabled = !0;
          }),
          (e.disable = function () {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var t = this.constructor.DATA_KEY,
                  n = p(e.currentTarget).data(t);
                n ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  p(e.currentTarget).data(t, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (p(this.getTipElement()).hasClass(Bt))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              p.removeData(this.element, this.constructor.DATA_KEY),
              p(this.element).off(this.constructor.EVENT_KEY),
              p(this.element)
                .closest('.modal')
                .off('hide.bs.modal', this._hideModalHandler),
              this.tip && p(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function () {
            var t = this;
            if ('none' === p(this.element).css('display'))
              throw new Error('Please use show on visible elements');
            var e = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              p(this.element).trigger(e);
              var n = g.findShadowRoot(this.element),
                i = p.contains(
                  null !== n ? n : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (e.isDefaultPrevented() || !i) return;
              var r = this.getTipElement(),
                o = g.getUID(this.constructor.NAME);
              r.setAttribute('id', o),
                this.element.setAttribute('aria-describedby', o),
                this.setContent(),
                this.config.animation && p(r).addClass(Ft);
              var s =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, r, this.element)
                    : this.config.placement,
                a = this._getAttachment(s);
              this.addAttachmentClass(a);
              var l = this._getContainer();
              p(r).data(this.constructor.DATA_KEY, this),
                p.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || p(r).appendTo(l),
                p(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new f(
                  this.element,
                  r,
                  this._getPopperConfig(a)
                )),
                p(r).addClass(Bt),
                'ontouchstart' in document.documentElement &&
                  p(document.body).children().on('mouseover', null, p.noop);
              var u = function () {
                t.config.animation && t._fixTransition();
                var e = t._hoverState;
                (t._hoverState = null),
                  p(t.element).trigger(t.constructor.Event.SHOWN),
                  e === Mt && t._leave(null, t);
              };
              if (p(this.tip).hasClass(Ft)) {
                var c = g.getTransitionDurationFromElement(this.tip);
                p(this.tip).one(g.TRANSITION_END, u).emulateTransitionEnd(c);
              } else u();
            }
          }),
          (e.hide = function (e) {
            var t = this,
              n = this.getTipElement(),
              i = p.Event(this.constructor.Event.HIDE),
              r = function () {
                t._hoverState !== Rt &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  t._cleanTipClass(),
                  t.element.removeAttribute('aria-describedby'),
                  p(t.element).trigger(t.constructor.Event.HIDDEN),
                  null !== t._popper && t._popper.destroy(),
                  e && e();
              };
            if ((p(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (p(n).removeClass(Bt),
                'ontouchstart' in document.documentElement &&
                  p(document.body).children().off('mouseover', null, p.noop),
                (this._activeTrigger[Vt] = !1),
                (this._activeTrigger[$t] = !1),
                (this._activeTrigger[Kt] = !1),
                p(this.tip).hasClass(Ft))
              ) {
                var o = g.getTransitionDurationFromElement(n);
                p(n).one(g.TRANSITION_END, r).emulateTransitionEnd(o);
              } else r();
              this._hoverState = '';
            }
          }),
          (e.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function (e) {
            p(this.getTipElement()).addClass(Ot + '-' + e);
          }),
          (e.getTipElement = function () {
            return (
              (this.tip = this.tip || p(this.config.template)[0]), this.tip
            );
          }),
          (e.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(p(e.querySelectorAll(Ut)), this.getTitle()),
              p(e).removeClass(Ft + ' ' + Bt);
          }),
          (e.setElementContent = function (e, t) {
            'object' != typeof t || (!t.nodeType && !t.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (t = Dt(t, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(t))
                : e.text(t)
              : this.config.html
              ? p(t).parent().is(e) || e.empty().append(t)
              : e.text(p(t).text());
          }),
          (e.getTitle = function () {
            var e = this.element.getAttribute('data-original-title');
            return (
              e ||
                (e =
                  'function' == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              e
            );
          }),
          (e._getPopperConfig = function (e) {
            var t = this;
            return l(
              {},
              {
                placement: e,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: Qt },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                },
              },
              {},
              this.config.popperConfig
            );
          }),
          (e._getOffset = function () {
            var t = this,
              e = {};
            return (
              'function' == typeof this.config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = l(
                        {},
                        e.offsets,
                        {},
                        t.config.offset(e.offsets, t.element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this.config.offset),
              e
            );
          }),
          (e._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : g.isElement(this.config.container)
              ? p(this.config.container)
              : p(document).find(this.config.container);
          }),
          (e._getAttachment = function (e) {
            return Ht[e.toUpperCase()];
          }),
          (e._setListeners = function () {
            var i = this;
            this.config.trigger.split(' ').forEach(function (e) {
              if ('click' === e)
                p(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (e) {
                    return i.toggle(e);
                  }
                );
              else if (e !== zt) {
                var t =
                    e === Kt
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    e === Kt
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                p(i.element)
                  .on(t, i.config.selector, function (e) {
                    return i._enter(e);
                  })
                  .on(n, i.config.selector, function (e) {
                    return i._leave(e);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                i.element && i.hide();
              }),
              p(this.element)
                .closest('.modal')
                .on('hide.bs.modal', this._hideModalHandler),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: 'manual',
                    selector: '',
                  }))
                : this._fixTitle();
          }),
          (e._fixTitle = function () {
            var e = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || 'string' !== e) &&
              (this.element.setAttribute(
                'data-original-title',
                this.element.getAttribute('title') || ''
              ),
              this.element.setAttribute('title', ''));
          }),
          (e._enter = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              p(e.currentTarget).data(n, t)),
              e && (t._activeTrigger['focusin' === e.type ? $t : Kt] = !0),
              p(t.getTipElement()).hasClass(Bt) || t._hoverState === Rt
                ? (t._hoverState = Rt)
                : (clearTimeout(t._timeout),
                  (t._hoverState = Rt),
                  t.config.delay && t.config.delay.show
                    ? (t._timeout = setTimeout(function () {
                        t._hoverState === Rt && t.show();
                      }, t.config.delay.show))
                    : t.show());
          }),
          (e._leave = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              p(e.currentTarget).data(n, t)),
              e && (t._activeTrigger['focusout' === e.type ? $t : Kt] = !1),
              t._isWithActiveTrigger() ||
                (clearTimeout(t._timeout),
                (t._hoverState = Mt),
                t.config.delay && t.config.delay.hide
                  ? (t._timeout = setTimeout(function () {
                      t._hoverState === Mt && t.hide();
                    }, t.config.delay.hide))
                  : t.hide());
          }),
          (e._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (e._getConfig = function (e) {
            var t = p(this.element).data();
            return (
              Object.keys(t).forEach(function (e) {
                -1 !== Lt.indexOf(e) && delete t[e];
              }),
              'number' ==
                typeof (e = l(
                  {},
                  this.constructor.Default,
                  {},
                  t,
                  {},
                  'object' == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              'number' == typeof e.title && (e.title = e.title.toString()),
              'number' == typeof e.content &&
                (e.content = e.content.toString()),
              g.typeCheckConfig(At, e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = Dt(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (e._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (e._cleanTipClass = function () {
            var e = p(this.getTipElement()),
              t = e.attr('class').match(jt);
            null !== t && t.length && e.removeClass(t.join(''));
          }),
          (e._handlePopperPlacementChange = function (e) {
            var t = e.instance;
            (this.tip = t.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (e._fixTransition = function () {
            var e = this.getTipElement(),
              t = this.config.animation;
            null === e.getAttribute('x-placement') &&
              (p(e).removeClass(Ft),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = t));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = p(this).data(Nt),
                t = 'object' == typeof n && n;
              if (
                (e || !/dispose|hide/.test(n)) &&
                (e || ((e = new i(this, t)), p(this).data(Nt, e)),
                'string' == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return qt;
              },
            },
            {
              key: 'NAME',
              get: function () {
                return At;
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Nt;
              },
            },
            {
              key: 'Event',
              get: function () {
                return Wt;
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return It;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return Pt;
              },
            },
          ]),
          i
        );
      })();
    (p.fn[At] = Yt._jQueryInterface),
      (p.fn[At].Constructor = Yt),
      (p.fn[At].noConflict = function () {
        return (p.fn[At] = kt), Yt._jQueryInterface;
      });
    var Xt = 'popover',
      Gt = 'bs.popover',
      Jt = '.' + Gt,
      Zt = p.fn[Xt],
      en = 'bs-popover',
      tn = new RegExp('(^|\\s)' + en + '\\S+', 'g'),
      nn = l({}, Yt.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      rn = l({}, Yt.DefaultType, { content: '(string|element|function)' }),
      on = 'fade',
      sn = 'show',
      an = '.popover-header',
      ln = '.popover-body',
      un = {
        HIDE: 'hide' + Jt,
        HIDDEN: 'hidden' + Jt,
        SHOW: 'show' + Jt,
        SHOWN: 'shown' + Jt,
        INSERTED: 'inserted' + Jt,
        CLICK: 'click' + Jt,
        FOCUSIN: 'focusin' + Jt,
        FOCUSOUT: 'focusout' + Jt,
        MOUSEENTER: 'mouseenter' + Jt,
        MOUSELEAVE: 'mouseleave' + Jt,
      },
      cn = (function (e) {
        var t, n;
        function i() {
          return e.apply(this, arguments) || this;
        }
        (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          ((t.prototype.constructor = t).__proto__ = n);
        var r = i.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (e) {
            p(this.getTipElement()).addClass(en + '-' + e);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || p(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function () {
            var e = p(this.getTipElement());
            this.setElementContent(e.find(an), this.getTitle());
            var t = this._getContent();
            'function' == typeof t && (t = t.call(this.element)),
              this.setElementContent(e.find(ln), t),
              e.removeClass(on + ' ' + sn);
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute('data-content') || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var e = p(this.getTipElement()),
              t = e.attr('class').match(tn);
            null !== t && 0 < t.length && e.removeClass(t.join(''));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = p(this).data(Gt),
                t = 'object' == typeof n ? n : null;
              if (
                (e || !/dispose|hide/.test(n)) &&
                (e || ((e = new i(this, t)), p(this).data(Gt, e)),
                'string' == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return nn;
              },
            },
            {
              key: 'NAME',
              get: function () {
                return Xt;
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Gt;
              },
            },
            {
              key: 'Event',
              get: function () {
                return un;
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return Jt;
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return rn;
              },
            },
          ]),
          i
        );
      })(Yt);
    (p.fn[Xt] = cn._jQueryInterface),
      (p.fn[Xt].Constructor = cn),
      (p.fn[Xt].noConflict = function () {
        return (p.fn[Xt] = Zt), cn._jQueryInterface;
      });
    var fn = 'scrollspy',
      hn = 'bs.scrollspy',
      dn = '.' + hn,
      pn = p.fn[fn],
      gn = { offset: 10, method: 'auto', target: '' },
      mn = { offset: 'number', method: 'string', target: '(string|element)' },
      vn = {
        ACTIVATE: 'activate' + dn,
        SCROLL: 'scroll' + dn,
        LOAD_DATA_API: 'load' + dn + '.data-api',
      },
      yn = 'dropdown-item',
      _n = 'active',
      bn = '[data-spy="scroll"]',
      wn = '.nav, .list-group',
      En = '.nav-link',
      Tn = '.nav-item',
      Cn = '.list-group-item',
      xn = '.dropdown',
      Sn = '.dropdown-item',
      Dn = '.dropdown-toggle',
      An = 'offset',
      Nn = 'position',
      In = (function () {
        function n(e, t) {
          var n = this;
          (this._element = e),
            (this._scrollElement = 'BODY' === e.tagName ? window : e),
            (this._config = this._getConfig(t)),
            (this._selector =
              this._config.target +
              ' ' +
              En +
              ',' +
              this._config.target +
              ' ' +
              Cn +
              ',' +
              this._config.target +
              ' ' +
              Sn),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            p(this._scrollElement).on(vn.SCROLL, function (e) {
              return n._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var e = n.prototype;
        return (
          (e.refresh = function () {
            var t = this,
              e = this._scrollElement === this._scrollElement.window ? An : Nn,
              r = 'auto' === this._config.method ? e : this._config.method,
              o = r === Nn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var t,
                    n = g.getSelectorFromElement(e);
                  if ((n && (t = document.querySelector(n)), t)) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [p(t)[r]().top + o, n];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (e.dispose = function () {
            p.removeData(this._element, hn),
              p(this._scrollElement).off(dn),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function (e) {
            if (
              'string' !=
              typeof (e = l({}, gn, {}, 'object' == typeof e && e ? e : {}))
                .target
            ) {
              var t = p(e.target).attr('id');
              t || ((t = g.getUID(fn)), p(e.target).attr('id', t)),
                (e.target = '#' + t);
            }
            return g.typeCheckConfig(fn, e, mn), e;
          }),
          (e._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  e >= this._offsets[r] &&
                  (void 0 === this._offsets[r + 1] ||
                    e < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
              }
            }
          }),
          (e._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(',').map(function (e) {
                return (
                  e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              }),
              n = p([].slice.call(document.querySelectorAll(e.join(','))));
            n.hasClass(yn)
              ? (n.closest(xn).find(Dn).addClass(_n), n.addClass(_n))
              : (n.addClass(_n),
                n
                  .parents(wn)
                  .prev(En + ', ' + Cn)
                  .addClass(_n),
                n.parents(wn).prev(Tn).children(En).addClass(_n)),
              p(this._scrollElement).trigger(vn.ACTIVATE, { relatedTarget: t });
          }),
          (e._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains(_n);
              })
              .forEach(function (e) {
                return e.classList.remove(_n);
              });
          }),
          (n._jQueryInterface = function (t) {
            return this.each(function () {
              var e = p(this).data(hn);
              if (
                (e ||
                  ((e = new n(this, 'object' == typeof t && t)),
                  p(this).data(hn, e)),
                'string' == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          s(n, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'Default',
              get: function () {
                return gn;
              },
            },
          ]),
          n
        );
      })();
    p(window).on(vn.LOAD_DATA_API, function () {
      for (
        var e = [].slice.call(document.querySelectorAll(bn)), t = e.length;
        t--;

      ) {
        var n = p(e[t]);
        In._jQueryInterface.call(n, n.data());
      }
    }),
      (p.fn[fn] = In._jQueryInterface),
      (p.fn[fn].Constructor = In),
      (p.fn[fn].noConflict = function () {
        return (p.fn[fn] = pn), In._jQueryInterface;
      });
    var kn = 'bs.tab',
      On = '.' + kn,
      jn = p.fn.tab,
      Ln = {
        HIDE: 'hide' + On,
        HIDDEN: 'hidden' + On,
        SHOW: 'show' + On,
        SHOWN: 'shown' + On,
        CLICK_DATA_API: 'click' + On + '.data-api',
      },
      Pn = 'dropdown-menu',
      Hn = 'active',
      qn = 'disabled',
      Rn = 'fade',
      Mn = 'show',
      Wn = '.dropdown',
      Fn = '.nav, .list-group',
      Bn = '.active',
      Un = '> li > .active',
      Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Kn = '.dropdown-toggle',
      $n = '> .dropdown-menu .active',
      Vn = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  p(this._element).hasClass(Hn)) ||
                p(this._element).hasClass(qn)
              )
            ) {
              var e,
                i,
                t = p(this._element).closest(Fn)[0],
                r = g.getSelectorFromElement(this._element);
              if (t) {
                var o = 'UL' === t.nodeName || 'OL' === t.nodeName ? Un : Bn;
                i = (i = p.makeArray(p(t).find(o)))[i.length - 1];
              }
              var s = p.Event(Ln.HIDE, { relatedTarget: this._element }),
                a = p.Event(Ln.SHOW, { relatedTarget: i });
              if (
                (i && p(i).trigger(s),
                p(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                r && (e = document.querySelector(r)),
                  this._activate(this._element, t);
                var l = function () {
                  var e = p.Event(Ln.HIDDEN, { relatedTarget: n._element }),
                    t = p.Event(Ln.SHOWN, { relatedTarget: i });
                  p(i).trigger(e), p(n._element).trigger(t);
                };
                e ? this._activate(e, e.parentNode, l) : l();
              }
            }
          }),
          (e.dispose = function () {
            p.removeData(this._element, kn), (this._element = null);
          }),
          (e._activate = function (e, t, n) {
            var i = this,
              r = (
                !t || ('UL' !== t.nodeName && 'OL' !== t.nodeName)
                  ? p(t).children(Bn)
                  : p(t).find(Un)
              )[0],
              o = n && r && p(r).hasClass(Rn),
              s = function () {
                return i._transitionComplete(e, r, n);
              };
            if (r && o) {
              var a = g.getTransitionDurationFromElement(r);
              p(r)
                .removeClass(Mn)
                .one(g.TRANSITION_END, s)
                .emulateTransitionEnd(a);
            } else s();
          }),
          (e._transitionComplete = function (e, t, n) {
            if (t) {
              p(t).removeClass(Hn);
              var i = p(t.parentNode).find($n)[0];
              i && p(i).removeClass(Hn),
                'tab' === t.getAttribute('role') &&
                  t.setAttribute('aria-selected', !1);
            }
            if (
              (p(e).addClass(Hn),
              'tab' === e.getAttribute('role') &&
                e.setAttribute('aria-selected', !0),
              g.reflow(e),
              e.classList.contains(Rn) && e.classList.add(Mn),
              e.parentNode && p(e.parentNode).hasClass(Pn))
            ) {
              var r = p(e).closest(Wn)[0];
              if (r) {
                var o = [].slice.call(r.querySelectorAll(Kn));
                p(o).addClass(Hn);
              }
              e.setAttribute('aria-expanded', !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = p(this),
                t = e.data(kn);
              if (
                (t || ((t = new i(this)), e.data(kn, t)), 'string' == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
          ]),
          i
        );
      })();
    p(document).on(Ln.CLICK_DATA_API, Qn, function (e) {
      e.preventDefault(), Vn._jQueryInterface.call(p(this), 'show');
    }),
      (p.fn.tab = Vn._jQueryInterface),
      (p.fn.tab.Constructor = Vn),
      (p.fn.tab.noConflict = function () {
        return (p.fn.tab = jn), Vn._jQueryInterface;
      });
    var zn = 'toast',
      Yn = 'bs.toast',
      Xn = '.' + Yn,
      Gn = p.fn[zn],
      Jn = {
        CLICK_DISMISS: 'click.dismiss' + Xn,
        HIDE: 'hide' + Xn,
        HIDDEN: 'hidden' + Xn,
        SHOW: 'show' + Xn,
        SHOWN: 'shown' + Xn,
      },
      Zn = 'fade',
      ei = 'hide',
      ti = 'show',
      ni = 'showing',
      ii = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
      ri = { animation: !0, autohide: !0, delay: 500 },
      oi = '[data-dismiss="toast"]',
      si = (function () {
        function i(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        var e = i.prototype;
        return (
          (e.show = function () {
            var e = this,
              t = p.Event(Jn.SHOW);
            if ((p(this._element).trigger(t), !t.isDefaultPrevented())) {
              this._config.animation && this._element.classList.add(Zn);
              var n = function () {
                e._element.classList.remove(ni),
                  e._element.classList.add(ti),
                  p(e._element).trigger(Jn.SHOWN),
                  e._config.autohide &&
                    (e._timeout = setTimeout(function () {
                      e.hide();
                    }, e._config.delay));
              };
              if (
                (this._element.classList.remove(ei),
                g.reflow(this._element),
                this._element.classList.add(ni),
                this._config.animation)
              ) {
                var i = g.getTransitionDurationFromElement(this._element);
                p(this._element)
                  .one(g.TRANSITION_END, n)
                  .emulateTransitionEnd(i);
              } else n();
            }
          }),
          (e.hide = function () {
            if (this._element.classList.contains(ti)) {
              var e = p.Event(Jn.HIDE);
              p(this._element).trigger(e),
                e.isDefaultPrevented() || this._close();
            }
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(ti) &&
                this._element.classList.remove(ti),
              p(this._element).off(Jn.CLICK_DISMISS),
              p.removeData(this._element, Yn),
              (this._element = null),
              (this._config = null);
          }),
          (e._getConfig = function (e) {
            return (
              (e = l(
                {},
                ri,
                {},
                p(this._element).data(),
                {},
                'object' == typeof e && e ? e : {}
              )),
              g.typeCheckConfig(zn, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._setListeners = function () {
            var e = this;
            p(this._element).on(Jn.CLICK_DISMISS, oi, function () {
              return e.hide();
            });
          }),
          (e._close = function () {
            var e = this,
              t = function () {
                e._element.classList.add(ei), p(e._element).trigger(Jn.HIDDEN);
              };
            if ((this._element.classList.remove(ti), this._config.animation)) {
              var n = g.getTransitionDurationFromElement(this._element);
              p(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n);
            } else t();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = p(this),
                t = e.data(Yn);
              if (
                (t ||
                  ((t = new i(this, 'object' == typeof n && n)), e.data(Yn, t)),
                'string' == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](this);
              }
            });
          }),
          s(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1';
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return ii;
              },
            },
            {
              key: 'Default',
              get: function () {
                return ri;
              },
            },
          ]),
          i
        );
      })();
    (p.fn[zn] = si._jQueryInterface),
      (p.fn[zn].Constructor = si),
      (p.fn[zn].noConflict = function () {
        return (p.fn[zn] = Gn), si._jQueryInterface;
      }),
      (e.Alert = y),
      (e.Button = P),
      (e.Carousel = fe),
      (e.Collapse = De),
      (e.Dropdown = tt),
      (e.Modal = Et),
      (e.Popover = cn),
      (e.Scrollspy = In),
      (e.Tab = Vn),
      (e.Toast = si),
      (e.Tooltip = Yt),
      (e.Util = g),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
