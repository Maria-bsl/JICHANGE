!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (e.moment = t());
})(this, function () {
  'use strict';
  var e, i;
  function p() {
    return e.apply(null, arguments);
  }
  function o(e) {
    return (
      e instanceof Array ||
      '[object Array]' === Object.prototype.toString.call(e)
    );
  }
  function u(e) {
    return null != e && '[object Object]' === Object.prototype.toString.call(e);
  }
  function l(e) {
    return void 0 === e;
  }
  function d(e) {
    return (
      'number' == typeof e ||
      '[object Number]' === Object.prototype.toString.call(e)
    );
  }
  function h(e) {
    return (
      e instanceof Date || '[object Date]' === Object.prototype.toString.call(e)
    );
  }
  function c(e, t) {
    var n,
      s = [];
    for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
    return s;
  }
  function w(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function f(e, t) {
    for (var n in t) w(t, n) && (e[n] = t[n]);
    return (
      w(t, 'toString') && (e.toString = t.toString),
      w(t, 'valueOf') && (e.valueOf = t.valueOf),
      e
    );
  }
  function m(e, t, n, s) {
    return kt(e, t, n, s, !0).utc();
  }
  function v(e) {
    return (
      null == e._pf &&
        (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        }),
      e._pf
    );
  }
  function _(e) {
    if (null == e._isValid) {
      var t = v(e),
        n = i.call(t.parsedDateParts, function (e) {
          return null != e;
        }),
        s =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n));
      if (
        (e._strict &&
          (s =
            s &&
            0 === t.charsLeftOver &&
            0 === t.unusedTokens.length &&
            void 0 === t.bigHour),
        null != Object.isFrozen && Object.isFrozen(e))
      )
        return s;
      e._isValid = s;
    }
    return e._isValid;
  }
  function y(e) {
    var t = m(NaN);
    return null != e ? f(v(t), e) : (v(t).userInvalidated = !0), t;
  }
  i = Array.prototype.some
    ? Array.prototype.some
    : function (e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
          if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
      };
  var r = (p.momentProperties = []);
  function g(e, t) {
    var n, s, i;
    if (
      (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      l(t._i) || (e._i = t._i),
      l(t._f) || (e._f = t._f),
      l(t._l) || (e._l = t._l),
      l(t._strict) || (e._strict = t._strict),
      l(t._tzm) || (e._tzm = t._tzm),
      l(t._isUTC) || (e._isUTC = t._isUTC),
      l(t._offset) || (e._offset = t._offset),
      l(t._pf) || (e._pf = v(t)),
      l(t._locale) || (e._locale = t._locale),
      0 < r.length)
    )
      for (n = 0; n < r.length; n++) l((i = t[(s = r[n])])) || (e[s] = i);
    return e;
  }
  var t = !1;
  function M(e) {
    g(this, e),
      (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === t && ((t = !0), p.updateOffset(this), (t = !1));
  }
  function S(e) {
    return e instanceof M || (null != e && null != e._isAMomentObject);
  }
  function D(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function k(e) {
    var t = +e,
      n = 0;
    return 0 !== t && isFinite(t) && (n = D(t)), n;
  }
  function a(e, t, n) {
    var s,
      i = Math.min(e.length, t.length),
      r = Math.abs(e.length - t.length),
      a = 0;
    for (s = 0; s < i; s++)
      ((n && e[s] !== t[s]) || (!n && k(e[s]) !== k(t[s]))) && a++;
    return a + r;
  }
  function Y(e) {
    !1 === p.suppressDeprecationWarnings &&
      'undefined' != typeof console &&
      console.warn &&
      console.warn('Deprecation warning: ' + e);
  }
  function n(i, r) {
    var a = !0;
    return f(function () {
      if ((null != p.deprecationHandler && p.deprecationHandler(null, i), a)) {
        for (var e, t = [], n = 0; n < arguments.length; n++) {
          if (((e = ''), 'object' == typeof arguments[n])) {
            for (var s in ((e += '\n[' + n + '] '), arguments[0]))
              e += s + ': ' + arguments[0][s] + ', ';
            e = e.slice(0, -2);
          } else e = arguments[n];
          t.push(e);
        }
        Y(
          i +
            '\nArguments: ' +
            Array.prototype.slice.call(t).join('') +
            '\n' +
            new Error().stack
        ),
          (a = !1);
      }
      return r.apply(this, arguments);
    }, r);
  }
  var s,
    O = {};
  function T(e, t) {
    null != p.deprecationHandler && p.deprecationHandler(e, t),
      O[e] || (Y(t), (O[e] = !0));
  }
  function x(e) {
    return (
      e instanceof Function ||
      '[object Function]' === Object.prototype.toString.call(e)
    );
  }
  function b(e, t) {
    var n,
      s = f({}, e);
    for (n in t)
      w(t, n) &&
        (u(e[n]) && u(t[n])
          ? ((s[n] = {}), f(s[n], e[n]), f(s[n], t[n]))
          : null != t[n]
          ? (s[n] = t[n])
          : delete s[n]);
    for (n in e) w(e, n) && !w(t, n) && u(e[n]) && (s[n] = f({}, s[n]));
    return s;
  }
  function P(e) {
    null != e && this.set(e);
  }
  (p.suppressDeprecationWarnings = !1),
    (p.deprecationHandler = null),
    (s = Object.keys
      ? Object.keys
      : function (e) {
          var t,
            n = [];
          for (t in e) w(e, t) && n.push(t);
          return n;
        });
  var W = {};
  function H(e, t) {
    var n = e.toLowerCase();
    W[n] = W[n + 's'] = W[t] = e;
  }
  function R(e) {
    return 'string' == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
  }
  function C(e) {
    var t,
      n,
      s = {};
    for (n in e) w(e, n) && (t = R(n)) && (s[t] = e[n]);
    return s;
  }
  var F = {};
  function L(e, t) {
    F[e] = t;
  }
  function U(e, t, n) {
    var s = '' + Math.abs(e),
      i = t - s.length;
    return (
      (0 <= e ? (n ? '+' : '') : '-') +
      Math.pow(10, Math.max(0, i)).toString().substr(1) +
      s
    );
  }
  var N =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    V = {},
    E = {};
  function I(e, t, n, s) {
    var i = s;
    'string' == typeof s &&
      (i = function () {
        return this[s]();
      }),
      e && (E[e] = i),
      t &&
        (E[t[0]] = function () {
          return U(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (E[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function A(e, t) {
    return e.isValid()
      ? ((t = j(t, e.localeData())),
        (V[t] =
          V[t] ||
          (function (s) {
            var e,
              i,
              t,
              r = s.match(N);
            for (e = 0, i = r.length; e < i; e++)
              E[r[e]]
                ? (r[e] = E[r[e]])
                : (r[e] = (t = r[e]).match(/\[[\s\S]/)
                    ? t.replace(/^\[|\]$/g, '')
                    : t.replace(/\\/g, ''));
            return function (e) {
              var t,
                n = '';
              for (t = 0; t < i; t++) n += x(r[t]) ? r[t].call(e, s) : r[t];
              return n;
            };
          })(t)),
        V[t](e))
      : e.localeData().invalidDate();
  }
  function j(e, t) {
    var n = 5;
    function s(e) {
      return t.longDateFormat(e) || e;
    }
    for (G.lastIndex = 0; 0 <= n && G.test(e); )
      (e = e.replace(G, s)), (G.lastIndex = 0), (n -= 1);
    return e;
  }
  var Z = /\d/,
    z = /\d\d/,
    $ = /\d{3}/,
    q = /\d{4}/,
    J = /[+-]?\d{6}/,
    B = /\d\d?/,
    Q = /\d\d\d\d?/,
    X = /\d\d\d\d\d\d?/,
    K = /\d{1,3}/,
    ee = /\d{1,4}/,
    te = /[+-]?\d{1,6}/,
    ne = /\d+/,
    se = /[+-]?\d+/,
    ie = /Z|[+-]\d\d:?\d\d/gi,
    re = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    oe = {};
  function ue(e, n, s) {
    oe[e] = x(n)
      ? n
      : function (e, t) {
          return e && s ? s : n;
        };
  }
  function le(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var de = {};
  function he(e, n) {
    var t,
      s = n;
    for (
      'string' == typeof e && (e = [e]),
        d(n) &&
          (s = function (e, t) {
            t[n] = k(e);
          }),
        t = 0;
      t < e.length;
      t++
    )
      de[e[t]] = s;
  }
  function ce(e, i) {
    he(e, function (e, t, n, s) {
      (n._w = n._w || {}), i(e, n._w, n, s);
    });
  }
  var fe = 0,
    me = 1,
    _e = 2,
    ye = 3,
    ge = 4,
    pe = 5,
    we = 6,
    ve = 7,
    Me = 8;
  function Se(e) {
    return De(e) ? 366 : 365;
  }
  function De(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
  }
  I('Y', 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? '' + e : '+' + e;
  }),
    I(0, ['YY', 2], 0, function () {
      return this.year() % 100;
    }),
    I(0, ['YYYY', 4], 0, 'year'),
    I(0, ['YYYYY', 5], 0, 'year'),
    I(0, ['YYYYYY', 6, !0], 0, 'year'),
    H('year', 'y'),
    L('year', 1),
    ue('Y', se),
    ue('YY', B, z),
    ue('YYYY', ee, q),
    ue('YYYYY', te, J),
    ue('YYYYYY', te, J),
    he(['YYYYY', 'YYYYYY'], fe),
    he('YYYY', function (e, t) {
      t[fe] = 2 === e.length ? p.parseTwoDigitYear(e) : k(e);
    }),
    he('YY', function (e, t) {
      t[fe] = p.parseTwoDigitYear(e);
    }),
    he('Y', function (e, t) {
      t[fe] = parseInt(e, 10);
    }),
    (p.parseTwoDigitYear = function (e) {
      return k(e) + (68 < k(e) ? 1900 : 2e3);
    });
  var ke,
    Ye = Oe('FullYear', !0);
  function Oe(t, n) {
    return function (e) {
      return null != e
        ? (xe(this, t, e), p.updateOffset(this, n), this)
        : Te(this, t);
    };
  }
  function Te(e, t) {
    return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN;
  }
  function xe(e, t, n) {
    e.isValid() &&
      !isNaN(n) &&
      ('FullYear' === t && De(e.year()) && 1 === e.month() && 29 === e.date()
        ? e._d['set' + (e._isUTC ? 'UTC' : '') + t](
            n,
            e.month(),
            be(n, e.month())
          )
        : e._d['set' + (e._isUTC ? 'UTC' : '') + t](n));
  }
  function be(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n = ((t % 12) + 12) % 12;
    return (
      (e += (t - n) / 12), 1 === n ? (De(e) ? 29 : 28) : 31 - ((n % 7) % 2)
    );
  }
  (ke = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
      }),
    I('M', ['MM', 2], 'Mo', function () {
      return this.month() + 1;
    }),
    I('MMM', 0, 0, function (e) {
      return this.localeData().monthsShort(this, e);
    }),
    I('MMMM', 0, 0, function (e) {
      return this.localeData().months(this, e);
    }),
    H('month', 'M'),
    L('month', 8),
    ue('M', B),
    ue('MM', B, z),
    ue('MMM', function (e, t) {
      return t.monthsShortRegex(e);
    }),
    ue('MMMM', function (e, t) {
      return t.monthsRegex(e);
    }),
    he(['M', 'MM'], function (e, t) {
      t[me] = k(e) - 1;
    }),
    he(['MMM', 'MMMM'], function (e, t, n, s) {
      var i = n._locale.monthsParse(e, s, n._strict);
      null != i ? (t[me] = i) : (v(n).invalidMonth = e);
    });
  var Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    We =
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      ),
    He = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function Re(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ('string' == typeof t)
      if (/^\d+$/.test(t)) t = k(t);
      else if (!d((t = e.localeData().monthsParse(t)))) return e;
    return (
      (n = Math.min(e.date(), be(e.year(), t))),
      e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n),
      e
    );
  }
  function Ce(e) {
    return null != e
      ? (Re(this, e), p.updateOffset(this, !0), this)
      : Te(this, 'Month');
  }
  var Fe = ae,
    Le = ae;
  function Ue() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s = [],
      i = [],
      r = [];
    for (t = 0; t < 12; t++)
      (n = m([2e3, t])),
        s.push(this.monthsShort(n, '')),
        i.push(this.months(n, '')),
        r.push(this.months(n, '')),
        r.push(this.monthsShort(n, ''));
    for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++)
      (s[t] = le(s[t])), (i[t] = le(i[t]));
    for (t = 0; t < 24; t++) r[t] = le(r[t]);
    (this._monthsRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
      (this._monthsShortStrictRegex = new RegExp(
        '^(' + s.join('|') + ')',
        'i'
      ));
  }
  function Ne(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return (
      e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
      t
    );
  }
  function Ge(e, t, n) {
    var s = 7 + t - n;
    return (-(7 + Ne(e, 0, s).getUTCDay() - t) % 7) + s - 1;
  }
  function Ve(e, t, n, s, i) {
    var r,
      a,
      o = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + Ge(e, s, i);
    return (
      (a =
        o <= 0
          ? Se((r = e - 1)) + o
          : o > Se(e)
          ? ((r = e + 1), o - Se(e))
          : ((r = e), o)),
      { year: r, dayOfYear: a }
    );
  }
  function Ee(e, t, n) {
    var s,
      i,
      r = Ge(e.year(), t, n),
      a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return (
      a < 1
        ? (s = a + Ie((i = e.year() - 1), t, n))
        : a > Ie(e.year(), t, n)
        ? ((s = a - Ie(e.year(), t, n)), (i = e.year() + 1))
        : ((i = e.year()), (s = a)),
      { week: s, year: i }
    );
  }
  function Ie(e, t, n) {
    var s = Ge(e, t, n),
      i = Ge(e + 1, t, n);
    return (Se(e) - s + i) / 7;
  }
  I('w', ['ww', 2], 'wo', 'week'),
    I('W', ['WW', 2], 'Wo', 'isoWeek'),
    H('week', 'w'),
    H('isoWeek', 'W'),
    L('week', 5),
    L('isoWeek', 5),
    ue('w', B),
    ue('ww', B, z),
    ue('W', B),
    ue('WW', B, z),
    ce(['w', 'ww', 'W', 'WW'], function (e, t, n, s) {
      t[s.substr(0, 1)] = k(e);
    }),
    I('d', 0, 'do', 'day'),
    I('dd', 0, 0, function (e) {
      return this.localeData().weekdaysMin(this, e);
    }),
    I('ddd', 0, 0, function (e) {
      return this.localeData().weekdaysShort(this, e);
    }),
    I('dddd', 0, 0, function (e) {
      return this.localeData().weekdays(this, e);
    }),
    I('e', 0, 0, 'weekday'),
    I('E', 0, 0, 'isoWeekday'),
    H('day', 'd'),
    H('weekday', 'e'),
    H('isoWeekday', 'E'),
    L('day', 11),
    L('weekday', 11),
    L('isoWeekday', 11),
    ue('d', B),
    ue('e', B),
    ue('E', B),
    ue('dd', function (e, t) {
      return t.weekdaysMinRegex(e);
    }),
    ue('ddd', function (e, t) {
      return t.weekdaysShortRegex(e);
    }),
    ue('dddd', function (e, t) {
      return t.weekdaysRegex(e);
    }),
    ce(['dd', 'ddd', 'dddd'], function (e, t, n, s) {
      var i = n._locale.weekdaysParse(e, s, n._strict);
      null != i ? (t.d = i) : (v(n).invalidWeekday = e);
    }),
    ce(['d', 'e', 'E'], function (e, t, n, s) {
      t[s] = k(e);
    });
  var Ae = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
      '_'
    ),
    je = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    Ze = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    ze = ae,
    $e = ae,
    qe = ae;
  function Je() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s,
      i,
      r,
      a = [],
      o = [],
      u = [],
      l = [];
    for (t = 0; t < 7; t++)
      (n = m([2e3, 1]).day(t)),
        (s = this.weekdaysMin(n, '')),
        (i = this.weekdaysShort(n, '')),
        (r = this.weekdays(n, '')),
        a.push(s),
        o.push(i),
        u.push(r),
        l.push(s),
        l.push(i),
        l.push(r);
    for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++)
      (o[t] = le(o[t])), (u[t] = le(u[t])), (l[t] = le(l[t]));
    (this._weekdaysRegex = new RegExp('^(' + l.join('|') + ')', 'i')),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp('^(' + u.join('|') + ')', 'i')),
      (this._weekdaysShortStrictRegex = new RegExp(
        '^(' + o.join('|') + ')',
        'i'
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        '^(' + a.join('|') + ')',
        'i'
      ));
  }
  function Be() {
    return this.hours() % 12 || 12;
  }
  function Qe(e, t) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function Xe(e, t) {
    return t._meridiemParse;
  }
  I('H', ['HH', 2], 0, 'hour'),
    I('h', ['hh', 2], 0, Be),
    I('k', ['kk', 2], 0, function () {
      return this.hours() || 24;
    }),
    I('hmm', 0, 0, function () {
      return '' + Be.apply(this) + U(this.minutes(), 2);
    }),
    I('hmmss', 0, 0, function () {
      return '' + Be.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2);
    }),
    I('Hmm', 0, 0, function () {
      return '' + this.hours() + U(this.minutes(), 2);
    }),
    I('Hmmss', 0, 0, function () {
      return '' + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2);
    }),
    Qe('a', !0),
    Qe('A', !1),
    H('hour', 'h'),
    L('hour', 13),
    ue('a', Xe),
    ue('A', Xe),
    ue('H', B),
    ue('h', B),
    ue('k', B),
    ue('HH', B, z),
    ue('hh', B, z),
    ue('kk', B, z),
    ue('hmm', Q),
    ue('hmmss', X),
    ue('Hmm', Q),
    ue('Hmmss', X),
    he(['H', 'HH'], ye),
    he(['k', 'kk'], function (e, t, n) {
      var s = k(e);
      t[ye] = 24 === s ? 0 : s;
    }),
    he(['a', 'A'], function (e, t, n) {
      (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
    }),
    he(['h', 'hh'], function (e, t, n) {
      (t[ye] = k(e)), (v(n).bigHour = !0);
    }),
    he('hmm', function (e, t, n) {
      var s = e.length - 2;
      (t[ye] = k(e.substr(0, s))),
        (t[ge] = k(e.substr(s))),
        (v(n).bigHour = !0);
    }),
    he('hmmss', function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[ye] = k(e.substr(0, s))),
        (t[ge] = k(e.substr(s, 2))),
        (t[pe] = k(e.substr(i))),
        (v(n).bigHour = !0);
    }),
    he('Hmm', function (e, t, n) {
      var s = e.length - 2;
      (t[ye] = k(e.substr(0, s))), (t[ge] = k(e.substr(s)));
    }),
    he('Hmmss', function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[ye] = k(e.substr(0, s))),
        (t[ge] = k(e.substr(s, 2))),
        (t[pe] = k(e.substr(i)));
    });
  var Ke,
    et = Oe('Hours', !0),
    tt = {
      calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
      },
      longDateFormat: {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
      },
      invalidDate: 'Invalid date',
      ordinal: '%d',
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
      },
      months: We,
      monthsShort: He,
      week: { dow: 0, doy: 6 },
      weekdays: Ae,
      weekdaysMin: Ze,
      weekdaysShort: je,
      meridiemParse: /[ap]\.?m?\.?/i,
    },
    nt = {},
    st = {};
  function it(e) {
    return e ? e.toLowerCase().replace('_', '-') : e;
  }
  function rt(e) {
    var t = null;
    if (!nt[e] && 'undefined' != typeof module && module && module.exports)
      try {
        (t = Ke._abbr), require('./locale/' + e), at(t);
      } catch (e) {}
    return nt[e];
  }
  function at(e, t) {
    var n;
    return (
      e &&
        ((n = l(t) ? ut(e) : ot(e, t))
          ? (Ke = n)
          : 'undefined' != typeof console &&
            console.warn &&
            console.warn(
              'Locale ' + e + ' not found. Did you forget to load it?'
            )),
      Ke._abbr
    );
  }
  function ot(e, t) {
    if (null === t) return delete nt[e], null;
    var n,
      s = tt;
    if (((t.abbr = e), null != nt[e]))
      T(
        'defineLocaleOverride',
        'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
      ),
        (s = nt[e]._config);
    else if (null != t.parentLocale)
      if (null != nt[t.parentLocale]) s = nt[t.parentLocale]._config;
      else {
        if (null == (n = rt(t.parentLocale)))
          return (
            st[t.parentLocale] || (st[t.parentLocale] = []),
            st[t.parentLocale].push({ name: e, config: t }),
            null
          );
        s = n._config;
      }
    return (
      (nt[e] = new P(b(s, t))),
      st[e] &&
        st[e].forEach(function (e) {
          ot(e.name, e.config);
        }),
      at(e),
      nt[e]
    );
  }
  function ut(e) {
    var t;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return Ke;
    if (!o(e)) {
      if ((t = rt(e))) return t;
      e = [e];
    }
    return (function (e) {
      for (var t, n, s, i, r = 0; r < e.length; ) {
        for (
          t = (i = it(e[r]).split('-')).length,
            n = (n = it(e[r + 1])) ? n.split('-') : null;
          0 < t;

        ) {
          if ((s = rt(i.slice(0, t).join('-')))) return s;
          if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
          t--;
        }
        r++;
      }
      return Ke;
    })(e);
  }
  function lt(e) {
    var t,
      n = e._a;
    return (
      n &&
        -2 === v(e).overflow &&
        ((t =
          n[me] < 0 || 11 < n[me]
            ? me
            : n[_e] < 1 || n[_e] > be(n[fe], n[me])
            ? _e
            : n[ye] < 0 ||
              24 < n[ye] ||
              (24 === n[ye] && (0 !== n[ge] || 0 !== n[pe] || 0 !== n[we]))
            ? ye
            : n[ge] < 0 || 59 < n[ge]
            ? ge
            : n[pe] < 0 || 59 < n[pe]
            ? pe
            : n[we] < 0 || 999 < n[we]
            ? we
            : -1),
        v(e)._overflowDayOfYear && (t < fe || _e < t) && (t = _e),
        v(e)._overflowWeeks && -1 === t && (t = ve),
        v(e)._overflowWeekday && -1 === t && (t = Me),
        (v(e).overflow = t)),
      e
    );
  }
  function dt(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }
  function ht(e) {
    var t,
      n,
      s,
      i,
      r,
      a = [];
    if (!e._d) {
      var o, u;
      for (
        o = e,
          u = new Date(p.now()),
          s = o._useUTC
            ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()]
            : [u.getFullYear(), u.getMonth(), u.getDate()],
          e._w &&
            null == e._a[_e] &&
            null == e._a[me] &&
            (function (e) {
              var t, n, s, i, r, a, o, u;
              if (null != (t = e._w).GG || null != t.W || null != t.E)
                (r = 1),
                  (a = 4),
                  (n = dt(t.GG, e._a[fe], Ee(Yt(), 1, 4).year)),
                  (s = dt(t.W, 1)),
                  ((i = dt(t.E, 1)) < 1 || 7 < i) && (u = !0);
              else {
                (r = e._locale._week.dow), (a = e._locale._week.doy);
                var l = Ee(Yt(), r, a);
                (n = dt(t.gg, e._a[fe], l.year)),
                  (s = dt(t.w, l.week)),
                  null != t.d
                    ? ((i = t.d) < 0 || 6 < i) && (u = !0)
                    : null != t.e
                    ? ((i = t.e + r), (t.e < 0 || 6 < t.e) && (u = !0))
                    : (i = r);
              }
              s < 1 || s > Ie(n, r, a)
                ? (v(e)._overflowWeeks = !0)
                : null != u
                ? (v(e)._overflowWeekday = !0)
                : ((o = Ve(n, s, i, r, a)),
                  (e._a[fe] = o.year),
                  (e._dayOfYear = o.dayOfYear));
            })(e),
          null != e._dayOfYear &&
            ((r = dt(e._a[fe], s[fe])),
            (e._dayOfYear > Se(r) || 0 === e._dayOfYear) &&
              (v(e)._overflowDayOfYear = !0),
            (n = Ne(r, 0, e._dayOfYear)),
            (e._a[me] = n.getUTCMonth()),
            (e._a[_e] = n.getUTCDate())),
          t = 0;
        t < 3 && null == e._a[t];
        ++t
      )
        e._a[t] = a[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = a[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
      24 === e._a[ye] &&
        0 === e._a[ge] &&
        0 === e._a[pe] &&
        0 === e._a[we] &&
        ((e._nextDay = !0), (e._a[ye] = 0)),
        (e._d = (
          e._useUTC
            ? Ne
            : function (e, t, n, s, i, r, a) {
                var o = new Date(e, t, n, s, i, r, a);
                return (
                  e < 100 &&
                    0 <= e &&
                    isFinite(o.getFullYear()) &&
                    o.setFullYear(e),
                  o
                );
              }
        ).apply(null, a)),
        (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[ye] = 24),
        e._w &&
          void 0 !== e._w.d &&
          e._w.d !== i &&
          (v(e).weekdayMismatch = !0);
    }
  }
  var ct =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    ft =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    mt = /Z|[+-]\d\d(?::?\d\d)?/,
    _t = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, !1],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
      ['YYYYDDD', /\d{7}/],
    ],
    yt = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/],
    ],
    gt = /^\/?Date\((\-?\d+)/i;
  function pt(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o = e._i,
      u = ct.exec(o) || ft.exec(o);
    if (u) {
      for (v(e).iso = !0, t = 0, n = _t.length; t < n; t++)
        if (_t[t][1].exec(u[1])) {
          (i = _t[t][0]), (s = !1 !== _t[t][2]);
          break;
        }
      if (null == i) return void (e._isValid = !1);
      if (u[3]) {
        for (t = 0, n = yt.length; t < n; t++)
          if (yt[t][1].exec(u[3])) {
            r = (u[2] || ' ') + yt[t][0];
            break;
          }
        if (null == r) return void (e._isValid = !1);
      }
      if (!s && null != r) return void (e._isValid = !1);
      if (u[4]) {
        if (!mt.exec(u[4])) return void (e._isValid = !1);
        a = 'Z';
      }
      (e._f = i + (r || '') + (a || '')), St(e);
    } else e._isValid = !1;
  }
  var wt =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  var vt = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480,
  };
  function Mt(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o,
      u,
      l,
      d,
      h,
      c = wt.exec(
        e._i
          .replace(/\([^)]*\)|[\n\t]/g, ' ')
          .replace(/(\s\s+)/g, ' ')
          .trim()
      );
    if (c) {
      var f =
        ((i = c[4]),
        (r = c[3]),
        (a = c[2]),
        (o = c[5]),
        (u = c[6]),
        (l = c[7]),
        (h = [
          ((d = parseInt(i, 10)), d <= 49 ? 2e3 + d : d <= 999 ? 1900 + d : d),
          He.indexOf(r),
          parseInt(a, 10),
          parseInt(o, 10),
          parseInt(u, 10),
        ]),
        l && h.push(parseInt(l, 10)),
        h);
      if (
        ((n = f),
        (s = e),
        (t = c[1]) &&
          je.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() &&
          ((v(s).weekdayMismatch = !0), (s._isValid = !1), 1))
      )
        return;
      (e._a = f),
        (e._tzm = (function (e, t, n) {
          if (e) return vt[e];
          if (t) return 0;
          var s = parseInt(n, 10),
            i = s % 100;
          return ((s - i) / 100) * 60 + i;
        })(c[8], c[9], c[10])),
        (e._d = Ne.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (v(e).rfc2822 = !0);
    } else e._isValid = !1;
  }
  function St(e) {
    if (e._f !== p.ISO_8601)
      if (e._f !== p.RFC_2822) {
        (e._a = []), (v(e).empty = !0);
        var t,
          n,
          s,
          i,
          r,
          a,
          o,
          u,
          l = '' + e._i,
          d = l.length,
          h = 0;
        for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++)
          (i = s[t]),
            (n = (l.match(
              ((y = i),
              (g = e),
              w(oe, y)
                ? oe[y](g._strict, g._locale)
                : new RegExp(
                    le(
                      y
                        .replace('\\', '')
                        .replace(
                          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                          function (e, t, n, s, i) {
                            return t || n || s || i;
                          }
                        )
                    )
                  ))
            ) || [])[0]) &&
              (0 < (r = l.substr(0, l.indexOf(n))).length &&
                v(e).unusedInput.push(r),
              (l = l.slice(l.indexOf(n) + n.length)),
              (h += n.length)),
            E[i]
              ? (n ? (v(e).empty = !1) : v(e).unusedTokens.push(i),
                (a = i),
                (u = e),
                null != (o = n) && w(de, a) && de[a](o, u._a, u, a))
              : e._strict && !n && v(e).unusedTokens.push(i);
        (v(e).charsLeftOver = d - h),
          0 < l.length && v(e).unusedInput.push(l),
          e._a[ye] <= 12 &&
            !0 === v(e).bigHour &&
            0 < e._a[ye] &&
            (v(e).bigHour = void 0),
          (v(e).parsedDateParts = e._a.slice(0)),
          (v(e).meridiem = e._meridiem),
          (e._a[ye] =
            ((c = e._locale),
            (f = e._a[ye]),
            null == (m = e._meridiem)
              ? f
              : null != c.meridiemHour
              ? c.meridiemHour(f, m)
              : (null != c.isPM &&
                  ((_ = c.isPM(m)) && f < 12 && (f += 12),
                  _ || 12 !== f || (f = 0)),
                f))),
          ht(e),
          lt(e);
      } else Mt(e);
    else pt(e);
    var c, f, m, _, y, g;
  }
  function Dt(e) {
    var t,
      n,
      s,
      i,
      r = e._i,
      a = e._f;
    return (
      (e._locale = e._locale || ut(e._l)),
      null === r || (void 0 === a && '' === r)
        ? y({ nullInput: !0 })
        : ('string' == typeof r && (e._i = r = e._locale.preparse(r)),
          S(r)
            ? new M(lt(r))
            : (h(r)
                ? (e._d = r)
                : o(a)
                ? (function (e) {
                    var t, n, s, i, r;
                    if (0 === e._f.length)
                      return (v(e).invalidFormat = !0), (e._d = new Date(NaN));
                    for (i = 0; i < e._f.length; i++)
                      (r = 0),
                        (t = g({}, e)),
                        null != e._useUTC && (t._useUTC = e._useUTC),
                        (t._f = e._f[i]),
                        St(t),
                        _(t) &&
                          ((r += v(t).charsLeftOver),
                          (r += 10 * v(t).unusedTokens.length),
                          (v(t).score = r),
                          (null == s || r < s) && ((s = r), (n = t)));
                    f(e, n || t);
                  })(e)
                : a
                ? St(e)
                : l((n = (t = e)._i))
                ? (t._d = new Date(p.now()))
                : h(n)
                ? (t._d = new Date(n.valueOf()))
                : 'string' == typeof n
                ? ((s = t),
                  null === (i = gt.exec(s._i))
                    ? (pt(s),
                      !1 === s._isValid &&
                        (delete s._isValid,
                        Mt(s),
                        !1 === s._isValid &&
                          (delete s._isValid, p.createFromInputFallback(s))))
                    : (s._d = new Date(+i[1])))
                : o(n)
                ? ((t._a = c(n.slice(0), function (e) {
                    return parseInt(e, 10);
                  })),
                  ht(t))
                : u(n)
                ? (function (e) {
                    if (!e._d) {
                      var t = C(e._i);
                      (e._a = c(
                        [
                          t.year,
                          t.month,
                          t.day || t.date,
                          t.hour,
                          t.minute,
                          t.second,
                          t.millisecond,
                        ],
                        function (e) {
                          return e && parseInt(e, 10);
                        }
                      )),
                        ht(e);
                    }
                  })(t)
                : d(n)
                ? (t._d = new Date(n))
                : p.createFromInputFallback(t),
              _(e) || (e._d = null),
              e))
    );
  }
  function kt(e, t, n, s, i) {
    var r,
      a = {};
    return (
      (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
      ((u(e) &&
        (function (e) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        })(e)) ||
        (o(e) && 0 === e.length)) &&
        (e = void 0),
      (a._isAMomentObject = !0),
      (a._useUTC = a._isUTC = i),
      (a._l = n),
      (a._i = e),
      (a._f = t),
      (a._strict = s),
      (r = new M(lt(Dt(a))))._nextDay && (r.add(1, 'd'), (r._nextDay = void 0)),
      r
    );
  }
  function Yt(e, t, n, s) {
    return kt(e, t, n, s, !1);
  }
  (p.createFromInputFallback = n(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
    }
  )),
    (p.ISO_8601 = function () {}),
    (p.RFC_2822 = function () {});
  var Ot = n(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = Yt.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : y();
      }
    ),
    Tt = n(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = Yt.apply(null, arguments);
        return this.isValid() && e.isValid() ? (this < e ? this : e) : y();
      }
    );
  function xt(e, t) {
    var n, s;
    if ((1 === t.length && o(t[0]) && (t = t[0]), !t.length)) return Yt();
    for (n = t[0], s = 1; s < t.length; ++s)
      (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
    return n;
  }
  var bt = [
    'year',
    'quarter',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
  ];
  function Pt(e) {
    var t = C(e),
      n = t.year || 0,
      s = t.quarter || 0,
      i = t.month || 0,
      r = t.week || 0,
      a = t.day || 0,
      o = t.hour || 0,
      u = t.minute || 0,
      l = t.second || 0,
      d = t.millisecond || 0;
    (this._isValid = (function (e) {
      for (var t in e)
        if (-1 === ke.call(bt, t) || (null != e[t] && isNaN(e[t]))) return !1;
      for (var n = !1, s = 0; s < bt.length; ++s)
        if (e[bt[s]]) {
          if (n) return !1;
          parseFloat(e[bt[s]]) !== k(e[bt[s]]) && (n = !0);
        }
      return !0;
    })(t)),
      (this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60),
      (this._days = +a + 7 * r),
      (this._months = +i + 3 * s + 12 * n),
      (this._data = {}),
      (this._locale = ut()),
      this._bubble();
  }
  function Wt(e) {
    return e instanceof Pt;
  }
  function Ht(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }
  function Rt(e, n) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
        t = '+';
      return (
        e < 0 && ((e = -e), (t = '-')),
        t + U(~~(e / 60), 2) + n + U(~~e % 60, 2)
      );
    });
  }
  Rt('Z', ':'),
    Rt('ZZ', ''),
    ue('Z', re),
    ue('ZZ', re),
    he(['Z', 'ZZ'], function (e, t, n) {
      (n._useUTC = !0), (n._tzm = Ft(re, e));
    });
  var Ct = /([\+\-]|\d\d)/gi;
  function Ft(e, t) {
    var n = (t || '').match(e);
    if (null === n) return null;
    var s = ((n[n.length - 1] || []) + '').match(Ct) || ['-', 0, 0],
      i = 60 * s[1] + k(s[2]);
    return 0 === i ? 0 : '+' === s[0] ? i : -i;
  }
  function Lt(e, t) {
    var n, s;
    return t._isUTC
      ? ((n = t.clone()),
        (s = (S(e) || h(e) ? e.valueOf() : Yt(e).valueOf()) - n.valueOf()),
        n._d.setTime(n._d.valueOf() + s),
        p.updateOffset(n, !1),
        n)
      : Yt(e).local();
  }
  function Ut(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }
  function Nt() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  p.updateOffset = function () {};
  var Gt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Vt =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function Et(e, t) {
    var n,
      s,
      i,
      r,
      a,
      o,
      u = e,
      l = null;
    return (
      Wt(e)
        ? (u = { ms: e._milliseconds, d: e._days, M: e._months })
        : d(e)
        ? ((u = {}), t ? (u[t] = e) : (u.milliseconds = e))
        : (l = Gt.exec(e))
        ? ((n = '-' === l[1] ? -1 : 1),
          (u = {
            y: 0,
            d: k(l[_e]) * n,
            h: k(l[ye]) * n,
            m: k(l[ge]) * n,
            s: k(l[pe]) * n,
            ms: k(Ht(1e3 * l[we])) * n,
          }))
        : (l = Vt.exec(e))
        ? ((n = '-' === l[1] ? -1 : (l[1], 1)),
          (u = {
            y: It(l[2], n),
            M: It(l[3], n),
            w: It(l[4], n),
            d: It(l[5], n),
            h: It(l[6], n),
            m: It(l[7], n),
            s: It(l[8], n),
          }))
        : null == u
        ? (u = {})
        : 'object' == typeof u &&
          ('from' in u || 'to' in u) &&
          ((r = Yt(u.from)),
          (a = Yt(u.to)),
          (i =
            r.isValid() && a.isValid()
              ? ((a = Lt(a, r)),
                r.isBefore(a)
                  ? (o = At(r, a))
                  : (((o = At(a, r)).milliseconds = -o.milliseconds),
                    (o.months = -o.months)),
                o)
              : { milliseconds: 0, months: 0 }),
          ((u = {}).ms = i.milliseconds),
          (u.M = i.months)),
      (s = new Pt(u)),
      Wt(e) && w(e, '_locale') && (s._locale = e._locale),
      s
    );
  }
  function It(e, t) {
    var n = e && parseFloat(e.replace(',', '.'));
    return (isNaN(n) ? 0 : n) * t;
  }
  function At(e, t) {
    var n = { milliseconds: 0, months: 0 };
    return (
      (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
      e.clone().add(n.months, 'M').isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
      n
    );
  }
  function jt(s, i) {
    return function (e, t) {
      var n;
      return (
        null === t ||
          isNaN(+t) ||
          (T(
            i,
            'moment().' +
              i +
              '(period, number) is deprecated. Please use moment().' +
              i +
              '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
          ),
          (n = e),
          (e = t),
          (t = n)),
        Zt(this, Et((e = 'string' == typeof e ? +e : e), t), s),
        this
      );
    };
  }
  function Zt(e, t, n, s) {
    var i = t._milliseconds,
      r = Ht(t._days),
      a = Ht(t._months);
    e.isValid() &&
      ((s = null == s || s),
      a && Re(e, Te(e, 'Month') + a * n),
      r && xe(e, 'Date', Te(e, 'Date') + r * n),
      i && e._d.setTime(e._d.valueOf() + i * n),
      s && p.updateOffset(e, r || a));
  }
  (Et.fn = Pt.prototype),
    (Et.invalid = function () {
      return Et(NaN);
    });
  var zt = jt(1, 'add'),
    $t = jt(-1, 'subtract');
  function qt(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      s = e.clone().add(n, 'months');
    return (
      -(
        n +
        (t - s < 0
          ? (t - s) / (s - e.clone().add(n - 1, 'months'))
          : (t - s) / (e.clone().add(n + 1, 'months') - s))
      ) || 0
    );
  }
  function Jt(e) {
    var t;
    return void 0 === e
      ? this._locale._abbr
      : (null != (t = ut(e)) && (this._locale = t), this);
  }
  (p.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
    (p.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
  var Bt = n(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (e) {
      return void 0 === e ? this.localeData() : this.locale(e);
    }
  );
  function Qt() {
    return this._locale;
  }
  function Xt(e, t) {
    I(0, [e, e.length], 0, t);
  }
  function Kt(e, t, n, s, i) {
    var r;
    return null == e
      ? Ee(this, s, i).year
      : (t > (r = Ie(e, s, i)) && (t = r),
        function (e, t, n, s, i) {
          var r = Ve(e, t, n, s, i),
            a = Ne(r.year, 0, r.dayOfYear);
          return (
            this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
          );
        }.call(this, e, t, n, s, i));
  }
  I(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  }),
    I(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    Xt('gggg', 'weekYear'),
    Xt('ggggg', 'weekYear'),
    Xt('GGGG', 'isoWeekYear'),
    Xt('GGGGG', 'isoWeekYear'),
    H('weekYear', 'gg'),
    H('isoWeekYear', 'GG'),
    L('weekYear', 1),
    L('isoWeekYear', 1),
    ue('G', se),
    ue('g', se),
    ue('GG', B, z),
    ue('gg', B, z),
    ue('GGGG', ee, q),
    ue('gggg', ee, q),
    ue('GGGGG', te, J),
    ue('ggggg', te, J),
    ce(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, s) {
      t[s.substr(0, 2)] = k(e);
    }),
    ce(['gg', 'GG'], function (e, t, n, s) {
      t[s] = p.parseTwoDigitYear(e);
    }),
    I('Q', 0, 'Qo', 'quarter'),
    H('quarter', 'Q'),
    L('quarter', 7),
    ue('Q', Z),
    he('Q', function (e, t) {
      t[me] = 3 * (k(e) - 1);
    }),
    I('D', ['DD', 2], 'Do', 'date'),
    H('date', 'D'),
    L('date', 9),
    ue('D', B),
    ue('DD', B, z),
    ue('Do', function (e, t) {
      return e
        ? t._dayOfMonthOrdinalParse || t._ordinalParse
        : t._dayOfMonthOrdinalParseLenient;
    }),
    he(['D', 'DD'], _e),
    he('Do', function (e, t) {
      t[_e] = k(e.match(B)[0]);
    });
  var en = Oe('Date', !0);
  I('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
    H('dayOfYear', 'DDD'),
    L('dayOfYear', 4),
    ue('DDD', K),
    ue('DDDD', $),
    he(['DDD', 'DDDD'], function (e, t, n) {
      n._dayOfYear = k(e);
    }),
    I('m', ['mm', 2], 0, 'minute'),
    H('minute', 'm'),
    L('minute', 14),
    ue('m', B),
    ue('mm', B, z),
    he(['m', 'mm'], ge);
  var tn = Oe('Minutes', !1);
  I('s', ['ss', 2], 0, 'second'),
    H('second', 's'),
    L('second', 15),
    ue('s', B),
    ue('ss', B, z),
    he(['s', 'ss'], pe);
  var nn,
    sn = Oe('Seconds', !1);
  for (
    I('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      I(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      I(0, ['SSS', 3], 0, 'millisecond'),
      I(0, ['SSSS', 4], 0, function () {
        return 10 * this.millisecond();
      }),
      I(0, ['SSSSS', 5], 0, function () {
        return 100 * this.millisecond();
      }),
      I(0, ['SSSSSS', 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      I(0, ['SSSSSSS', 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      I(0, ['SSSSSSSS', 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      I(0, ['SSSSSSSSS', 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      H('millisecond', 'ms'),
      L('millisecond', 16),
      ue('S', K, Z),
      ue('SS', K, z),
      ue('SSS', K, $),
      nn = 'SSSS';
    nn.length <= 9;
    nn += 'S'
  )
    ue(nn, ne);
  function rn(e, t) {
    t[we] = k(1e3 * ('0.' + e));
  }
  for (nn = 'S'; nn.length <= 9; nn += 'S') he(nn, rn);
  var an = Oe('Milliseconds', !1);
  I('z', 0, 0, 'zoneAbbr'), I('zz', 0, 0, 'zoneName');
  var on = M.prototype;
  function un(e) {
    return e;
  }
  (on.add = zt),
    (on.calendar = function (e, t) {
      var n = e || Yt(),
        s = Lt(n, this).startOf('day'),
        i = p.calendarFormat(this, s) || 'sameElse',
        r = t && (x(t[i]) ? t[i].call(this, n) : t[i]);
      return this.format(r || this.localeData().calendar(i, this, Yt(n)));
    }),
    (on.clone = function () {
      return new M(this);
    }),
    (on.diff = function (e, t, n) {
      var s, i, r;
      if (!this.isValid()) return NaN;
      if (!(s = Lt(e, this)).isValid()) return NaN;
      switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = R(t)))) {
        case 'year':
          r = qt(this, s) / 12;
          break;
        case 'month':
          r = qt(this, s);
          break;
        case 'quarter':
          r = qt(this, s) / 3;
          break;
        case 'second':
          r = (this - s) / 1e3;
          break;
        case 'minute':
          r = (this - s) / 6e4;
          break;
        case 'hour':
          r = (this - s) / 36e5;
          break;
        case 'day':
          r = (this - s - i) / 864e5;
          break;
        case 'week':
          r = (this - s - i) / 6048e5;
          break;
        default:
          r = this - s;
      }
      return n ? r : D(r);
    }),
    (on.endOf = function (e) {
      return void 0 === (e = R(e)) || 'millisecond' === e
        ? this
        : ('date' === e && (e = 'day'),
          this.startOf(e)
            .add(1, 'isoWeek' === e ? 'week' : e)
            .subtract(1, 'ms'));
    }),
    (on.format = function (e) {
      e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
      var t = A(this, e);
      return this.localeData().postformat(t);
    }),
    (on.from = function (e, t) {
      return this.isValid() && ((S(e) && e.isValid()) || Yt(e).isValid())
        ? Et({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (on.fromNow = function (e) {
      return this.from(Yt(), e);
    }),
    (on.to = function (e, t) {
      return this.isValid() && ((S(e) && e.isValid()) || Yt(e).isValid())
        ? Et({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (on.toNow = function (e) {
      return this.to(Yt(), e);
    }),
    (on.get = function (e) {
      return x(this[(e = R(e))]) ? this[e]() : this;
    }),
    (on.invalidAt = function () {
      return v(this).overflow;
    }),
    (on.isAfter = function (e, t) {
      var n = S(e) ? e : Yt(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ('millisecond' === (t = R(l(t) ? 'millisecond' : t))
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      );
    }),
    (on.isBefore = function (e, t) {
      var n = S(e) ? e : Yt(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ('millisecond' === (t = R(l(t) ? 'millisecond' : t))
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      );
    }),
    (on.isBetween = function (e, t, n, s) {
      return (
        ('(' === (s = s || '()')[0]
          ? this.isAfter(e, n)
          : !this.isBefore(e, n)) &&
        (')' === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
      );
    }),
    (on.isSame = function (e, t) {
      var n,
        s = S(e) ? e : Yt(e);
      return (
        !(!this.isValid() || !s.isValid()) &&
        ('millisecond' === (t = R(t || 'millisecond'))
          ? this.valueOf() === s.valueOf()
          : ((n = s.valueOf()),
            this.clone().startOf(t).valueOf() <= n &&
              n <= this.clone().endOf(t).valueOf()))
      );
    }),
    (on.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (on.isSameOrBefore = function (e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (on.isValid = function () {
      return _(this);
    }),
    (on.lang = Bt),
    (on.locale = Jt),
    (on.localeData = Qt),
    (on.max = Tt),
    (on.min = Ot),
    (on.parsingFlags = function () {
      return f({}, v(this));
    }),
    (on.set = function (e, t) {
      if ('object' == typeof e)
        for (
          var n = (function (e) {
              var t = [];
              for (var n in e) t.push({ unit: n, priority: F[n] });
              return (
                t.sort(function (e, t) {
                  return e.priority - t.priority;
                }),
                t
              );
            })((e = C(e))),
            s = 0;
          s < n.length;
          s++
        )
          this[n[s].unit](e[n[s].unit]);
      else if (x(this[(e = R(e))])) return this[e](t);
      return this;
    }),
    (on.startOf = function (e) {
      switch ((e = R(e))) {
        case 'year':
          this.month(0);
        case 'quarter':
        case 'month':
          this.date(1);
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
          this.hours(0);
        case 'hour':
          this.minutes(0);
        case 'minute':
          this.seconds(0);
        case 'second':
          this.milliseconds(0);
      }
      return (
        'week' === e && this.weekday(0),
        'isoWeek' === e && this.isoWeekday(1),
        'quarter' === e && this.month(3 * Math.floor(this.month() / 3)),
        this
      );
    }),
    (on.subtract = $t),
    (on.toArray = function () {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }),
    (on.toObject = function () {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }),
    (on.toDate = function () {
      return new Date(this.valueOf());
    }),
    (on.toISOString = function (e) {
      if (!this.isValid()) return null;
      var t = !0 !== e,
        n = t ? this.clone().utc() : this;
      return n.year() < 0 || 9999 < n.year()
        ? A(
            n,
            t
              ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
              : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
          )
        : x(Date.prototype.toISOString)
        ? t
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
              .toISOString()
              .replace('Z', A(n, 'Z'))
        : A(
            n,
            t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
          );
    }),
    (on.inspect = function () {
      if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
      var e = 'moment',
        t = '';
      this.isLocal() ||
        ((e = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'),
        (t = 'Z'));
      var n = '[' + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
        i = t + '[")]';
      return this.format(n + s + '-MM-DD[T]HH:mm:ss.SSS' + i);
    }),
    (on.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }),
    (on.toString = function () {
      return this.clone()
        .locale('en')
        .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }),
    (on.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (on.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (on.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }),
    (on.year = Ye),
    (on.isLeapYear = function () {
      return De(this.year());
    }),
    (on.weekYear = function (e) {
      return Kt.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }),
    (on.isoWeekYear = function (e) {
      return Kt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (on.quarter = on.quarters =
      function (e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }),
    (on.month = Ce),
    (on.daysInMonth = function () {
      return be(this.year(), this.month());
    }),
    (on.week = on.weeks =
      function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), 'd');
      }),
    (on.isoWeek = on.isoWeeks =
      function (e) {
        var t = Ee(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), 'd');
      }),
    (on.weeksInYear = function () {
      var e = this.localeData()._week;
      return Ie(this.year(), e.dow, e.doy);
    }),
    (on.isoWeeksInYear = function () {
      return Ie(this.year(), 1, 4);
    }),
    (on.date = en),
    (on.day = on.days =
      function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t,
          n,
          s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e
          ? ((t = e),
            (n = this.localeData()),
            (e =
              'string' != typeof t
                ? t
                : isNaN(t)
                ? 'number' == typeof (t = n.weekdaysParse(t))
                  ? t
                  : null
                : parseInt(t, 10)),
            this.add(e - s, 'd'))
          : s;
      }),
    (on.weekday = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, 'd');
    }),
    (on.isoWeekday = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      if (null == e) return this.day() || 7;
      var t,
        n,
        s =
          ((t = e),
          (n = this.localeData()),
          'string' == typeof t
            ? n.weekdaysParse(t) % 7 || 7
            : isNaN(t)
            ? null
            : t);
      return this.day(this.day() % 7 ? s : s - 7);
    }),
    (on.dayOfYear = function (e) {
      var t =
        Math.round(
          (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
        ) + 1;
      return null == e ? t : this.add(e - t, 'd');
    }),
    (on.hour = on.hours = et),
    (on.minute = on.minutes = tn),
    (on.second = on.seconds = sn),
    (on.millisecond = on.milliseconds = an),
    (on.utcOffset = function (e, t, n) {
      var s,
        i = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null == e) return this._isUTC ? i : Ut(this);
      if ('string' == typeof e) {
        if (null === (e = Ft(re, e))) return this;
      } else Math.abs(e) < 16 && !n && (e *= 60);
      return (
        !this._isUTC && t && (s = Ut(this)),
        (this._offset = e),
        (this._isUTC = !0),
        null != s && this.add(s, 'm'),
        i !== e &&
          (!t || this._changeInProgress
            ? Zt(this, Et(e - i, 'm'), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              p.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    }),
    (on.utc = function (e) {
      return this.utcOffset(0, e);
    }),
    (on.local = function (e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(Ut(this), 'm')),
        this
      );
    }),
    (on.parseZone = function () {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ('string' == typeof this._i) {
        var e = Ft(ie, this._i);
        null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
      }
      return this;
    }),
    (on.hasAlignedHourOffset = function (e) {
      return (
        !!this.isValid() &&
        ((e = e ? Yt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }),
    (on.isDST = function () {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }),
    (on.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }),
    (on.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }),
    (on.isUtc = Nt),
    (on.isUTC = Nt),
    (on.zoneAbbr = function () {
      return this._isUTC ? 'UTC' : '';
    }),
    (on.zoneName = function () {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }),
    (on.dates = n('dates accessor is deprecated. Use date instead.', en)),
    (on.months = n('months accessor is deprecated. Use month instead', Ce)),
    (on.years = n('years accessor is deprecated. Use year instead', Ye)),
    (on.zone = n(
      'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
      function (e, t) {
        return null != e
          ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }
    )),
    (on.isDSTShifted = n(
      'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
      function () {
        if (!l(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if ((g(e, this), (e = Dt(e))._a)) {
          var t = e._isUTC ? m(e._a) : Yt(e._a);
          this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray());
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
      }
    ));
  var ln = P.prototype;
  function dn(e, t, n, s) {
    var i = ut(),
      r = m().set(s, t);
    return i[n](r, e);
  }
  function hn(e, t, n) {
    if ((d(e) && ((t = e), (e = void 0)), (e = e || ''), null != t))
      return dn(e, t, n, 'month');
    var s,
      i = [];
    for (s = 0; s < 12; s++) i[s] = dn(e, s, n, 'month');
    return i;
  }
  function cn(e, t, n, s) {
    t =
      ('boolean' == typeof e || ((n = t = e), (e = !1)),
      d(t) && ((n = t), (t = void 0)),
      t || '');
    var i,
      r = ut(),
      a = e ? r._week.dow : 0;
    if (null != n) return dn(t, (n + a) % 7, s, 'day');
    var o = [];
    for (i = 0; i < 7; i++) o[i] = dn(t, (i + a) % 7, s, 'day');
    return o;
  }
  (ln.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return x(s) ? s.call(t, n) : s;
  }),
    (ln.longDateFormat = function (e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n.replace(
            /MMMM|MM|DD|dddd/g,
            function (e) {
              return e.slice(1);
            }
          )),
          this._longDateFormat[e]);
    }),
    (ln.invalidDate = function () {
      return this._invalidDate;
    }),
    (ln.ordinal = function (e) {
      return this._ordinal.replace('%d', e);
    }),
    (ln.preparse = un),
    (ln.postformat = un),
    (ln.relativeTime = function (e, t, n, s) {
      var i = this._relativeTime[n];
      return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (ln.pastFuture = function (e, t) {
      var n = this._relativeTime[0 < e ? 'future' : 'past'];
      return x(n) ? n(t) : n.replace(/%s/i, t);
    }),
    (ln.set = function (e) {
      var t, n;
      for (n in e) x((t = e[n])) ? (this[n] = t) : (this['_' + n] = t);
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' +
            /\d{1,2}/.source
        ));
    }),
    (ln.months = function (e, t) {
      return e
        ? o(this._months)
          ? this._months[e.month()]
          : this._months[
              (this._months.isFormat || Pe).test(t) ? 'format' : 'standalone'
            ][e.month()]
        : o(this._months)
        ? this._months
        : this._months.standalone;
    }),
    (ln.monthsShort = function (e, t) {
      return e
        ? o(this._monthsShort)
          ? this._monthsShort[e.month()]
          : this._monthsShort[Pe.test(t) ? 'format' : 'standalone'][e.month()]
        : o(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }),
    (ln.monthsParse = function (e, t, n) {
      var s, i, r;
      if (this._monthsParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            a = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                s = 0;
              s < 12;
              ++s
            )
              (r = m([2e3, s])),
                (this._shortMonthsParse[s] = this.monthsShort(
                  r,
                  ''
                ).toLocaleLowerCase()),
                (this._longMonthsParse[s] = this.months(
                  r,
                  ''
                ).toLocaleLowerCase());
          return n
            ? 'MMM' === t
              ? -1 !== (i = ke.call(this._shortMonthsParse, a))
                ? i
                : null
              : -1 !== (i = ke.call(this._longMonthsParse, a))
              ? i
              : null
            : 'MMM' === t
            ? -1 !== (i = ke.call(this._shortMonthsParse, a))
              ? i
              : -1 !== (i = ke.call(this._longMonthsParse, a))
              ? i
              : null
            : -1 !== (i = ke.call(this._longMonthsParse, a))
            ? i
            : -1 !== (i = ke.call(this._shortMonthsParse, a))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((i = m([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              '^' + this.months(i, '').replace('.', '') + '$',
              'i'
            )),
            (this._shortMonthsParse[s] = new RegExp(
              '^' + this.monthsShort(i, '').replace('.', '') + '$',
              'i'
            ))),
          n ||
            this._monthsParse[s] ||
            ((r = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')),
            (this._monthsParse[s] = new RegExp(r.replace('.', ''), 'i'))),
          n && 'MMMM' === t && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && 'MMM' === t && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }),
    (ln.monthsRegex = function (e) {
      return this._monthsParseExact
        ? (w(this, '_monthsRegex') || Ue.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (w(this, '_monthsRegex') || (this._monthsRegex = Le),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (ln.monthsShortRegex = function (e) {
      return this._monthsParseExact
        ? (w(this, '_monthsRegex') || Ue.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (w(this, '_monthsShortRegex') || (this._monthsShortRegex = Fe),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (ln.week = function (e) {
      return Ee(e, this._week.dow, this._week.doy).week;
    }),
    (ln.firstDayOfYear = function () {
      return this._week.doy;
    }),
    (ln.firstDayOfWeek = function () {
      return this._week.dow;
    }),
    (ln.weekdays = function (e, t) {
      return e
        ? o(this._weekdays)
          ? this._weekdays[e.day()]
          : this._weekdays[
              this._weekdays.isFormat.test(t) ? 'format' : 'standalone'
            ][e.day()]
        : o(this._weekdays)
        ? this._weekdays
        : this._weekdays.standalone;
    }),
    (ln.weekdaysMin = function (e) {
      return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }),
    (ln.weekdaysShort = function (e) {
      return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }),
    (ln.weekdaysParse = function (e, t, n) {
      var s, i, r;
      if (this._weekdaysParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            a = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                s = 0;
              s < 7;
              ++s
            )
              (r = m([2e3, 1]).day(s)),
                (this._minWeekdaysParse[s] = this.weekdaysMin(
                  r,
                  ''
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[s] = this.weekdaysShort(
                  r,
                  ''
                ).toLocaleLowerCase()),
                (this._weekdaysParse[s] = this.weekdays(
                  r,
                  ''
                ).toLocaleLowerCase());
          return n
            ? 'dddd' === t
              ? -1 !== (i = ke.call(this._weekdaysParse, a))
                ? i
                : null
              : 'ddd' === t
              ? -1 !== (i = ke.call(this._shortWeekdaysParse, a))
                ? i
                : null
              : -1 !== (i = ke.call(this._minWeekdaysParse, a))
              ? i
              : null
            : 'dddd' === t
            ? -1 !== (i = ke.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = ke.call(this._shortWeekdaysParse, a))
              ? i
              : -1 !== (i = ke.call(this._minWeekdaysParse, a))
              ? i
              : null
            : 'ddd' === t
            ? -1 !== (i = ke.call(this._shortWeekdaysParse, a))
              ? i
              : -1 !== (i = ke.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = ke.call(this._minWeekdaysParse, a))
              ? i
              : null
            : -1 !== (i = ke.call(this._minWeekdaysParse, a))
            ? i
            : -1 !== (i = ke.call(this._weekdaysParse, a))
            ? i
            : -1 !== (i = ke.call(this._shortWeekdaysParse, a))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((i = m([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              '^' + this.weekdays(i, '').replace('.', '.?') + '$',
              'i'
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              '^' + this.weekdaysShort(i, '').replace('.', '.?') + '$',
              'i'
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              '^' + this.weekdaysMin(i, '').replace('.', '.?') + '$',
              'i'
            ))),
          this._weekdaysParse[s] ||
            ((r =
              '^' +
              this.weekdays(i, '') +
              '|^' +
              this.weekdaysShort(i, '') +
              '|^' +
              this.weekdaysMin(i, '')),
            (this._weekdaysParse[s] = new RegExp(r.replace('.', ''), 'i'))),
          n && 'dddd' === t && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && 'ddd' === t && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && 'dd' === t && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }),
    (ln.weekdaysRegex = function (e) {
      return this._weekdaysParseExact
        ? (w(this, '_weekdaysRegex') || Je.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (w(this, '_weekdaysRegex') || (this._weekdaysRegex = ze),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (ln.weekdaysShortRegex = function (e) {
      return this._weekdaysParseExact
        ? (w(this, '_weekdaysRegex') || Je.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (w(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = $e),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (ln.weekdaysMinRegex = function (e) {
      return this._weekdaysParseExact
        ? (w(this, '_weekdaysRegex') || Je.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (w(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = qe),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (ln.isPM = function (e) {
      return 'p' === (e + '').toLowerCase().charAt(0);
    }),
    (ln.meridiem = function (e, t, n) {
      return 11 < e ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
    }),
    at('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (e) {
        var t = e % 10;
        return (
          e +
          (1 === k((e % 100) / 10)
            ? 'th'
            : 1 === t
            ? 'st'
            : 2 === t
            ? 'nd'
            : 3 === t
            ? 'rd'
            : 'th')
        );
      },
    }),
    (p.lang = n('moment.lang is deprecated. Use moment.locale instead.', at)),
    (p.langData = n(
      'moment.langData is deprecated. Use moment.localeData instead.',
      ut
    ));
  var fn = Math.abs;
  function mn(e, t, n, s) {
    var i = Et(t, n);
    return (
      (e._milliseconds += s * i._milliseconds),
      (e._days += s * i._days),
      (e._months += s * i._months),
      e._bubble()
    );
  }
  function _n(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function yn(e) {
    return (4800 * e) / 146097;
  }
  function gn(e) {
    return (146097 * e) / 4800;
  }
  function pn(e) {
    return function () {
      return this.as(e);
    };
  }
  var wn = pn('ms'),
    vn = pn('s'),
    Mn = pn('m'),
    Sn = pn('h'),
    Dn = pn('d'),
    kn = pn('w'),
    Yn = pn('M'),
    On = pn('y');
  function Tn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var xn = Tn('milliseconds'),
    bn = Tn('seconds'),
    Pn = Tn('minutes'),
    Wn = Tn('hours'),
    Hn = Tn('days'),
    Rn = Tn('months'),
    Cn = Tn('years'),
    Fn = Math.round,
    Ln = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
    Un = Math.abs;
  function Nn(e) {
    return (0 < e) - (e < 0) || +e;
  }
  function Gn() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
      t,
      n = Un(this._milliseconds) / 1e3,
      s = Un(this._days),
      i = Un(this._months);
    (t = D((e = D(n / 60)) / 60)), (n %= 60), (e %= 60);
    var r = D(i / 12),
      a = (i %= 12),
      o = s,
      u = t,
      l = e,
      d = n ? n.toFixed(3).replace(/\.?0+$/, '') : '',
      h = this.asSeconds();
    if (!h) return 'P0D';
    var c = h < 0 ? '-' : '',
      f = Nn(this._months) !== Nn(h) ? '-' : '',
      m = Nn(this._days) !== Nn(h) ? '-' : '',
      _ = Nn(this._milliseconds) !== Nn(h) ? '-' : '';
    return (
      c +
      'P' +
      (r ? f + r + 'Y' : '') +
      (a ? f + a + 'M' : '') +
      (o ? m + o + 'D' : '') +
      (u || l || d ? 'T' : '') +
      (u ? _ + u + 'H' : '') +
      (l ? _ + l + 'M' : '') +
      (d ? _ + d + 'S' : '')
    );
  }
  var Vn = Pt.prototype;
  return (
    (Vn.isValid = function () {
      return this._isValid;
    }),
    (Vn.abs = function () {
      var e = this._data;
      return (
        (this._milliseconds = fn(this._milliseconds)),
        (this._days = fn(this._days)),
        (this._months = fn(this._months)),
        (e.milliseconds = fn(e.milliseconds)),
        (e.seconds = fn(e.seconds)),
        (e.minutes = fn(e.minutes)),
        (e.hours = fn(e.hours)),
        (e.months = fn(e.months)),
        (e.years = fn(e.years)),
        this
      );
    }),
    (Vn.add = function (e, t) {
      return mn(this, e, t, 1);
    }),
    (Vn.subtract = function (e, t) {
      return mn(this, e, t, -1);
    }),
    (Vn.as = function (e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        s = this._milliseconds;
      if ('month' === (e = R(e)) || 'year' === e)
        return (
          (t = this._days + s / 864e5),
          (n = this._months + yn(t)),
          'month' === e ? n : n / 12
        );
      switch (((t = this._days + Math.round(gn(this._months))), e)) {
        case 'week':
          return t / 7 + s / 6048e5;
        case 'day':
          return t + s / 864e5;
        case 'hour':
          return 24 * t + s / 36e5;
        case 'minute':
          return 1440 * t + s / 6e4;
        case 'second':
          return 86400 * t + s / 1e3;
        case 'millisecond':
          return Math.floor(864e5 * t) + s;
        default:
          throw new Error('Unknown unit ' + e);
      }
    }),
    (Vn.asMilliseconds = wn),
    (Vn.asSeconds = vn),
    (Vn.asMinutes = Mn),
    (Vn.asHours = Sn),
    (Vn.asDays = Dn),
    (Vn.asWeeks = kn),
    (Vn.asMonths = Yn),
    (Vn.asYears = On),
    (Vn.valueOf = function () {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * k(this._months / 12)
        : NaN;
    }),
    (Vn._bubble = function () {
      var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
      return (
        (0 <= r && 0 <= a && 0 <= o) ||
          (r <= 0 && a <= 0 && o <= 0) ||
          ((r += 864e5 * _n(gn(o) + a)), (o = a = 0)),
        (u.milliseconds = r % 1e3),
        (e = D(r / 1e3)),
        (u.seconds = e % 60),
        (t = D(e / 60)),
        (u.minutes = t % 60),
        (n = D(t / 60)),
        (u.hours = n % 24),
        (o += i = D(yn((a += D(n / 24))))),
        (a -= _n(gn(i))),
        (s = D(o / 12)),
        (o %= 12),
        (u.days = a),
        (u.months = o),
        (u.years = s),
        this
      );
    }),
    (Vn.clone = function () {
      return Et(this);
    }),
    (Vn.get = function (e) {
      return (e = R(e)), this.isValid() ? this[e + 's']() : NaN;
    }),
    (Vn.milliseconds = xn),
    (Vn.seconds = bn),
    (Vn.minutes = Pn),
    (Vn.hours = Wn),
    (Vn.days = Hn),
    (Vn.weeks = function () {
      return D(this.days() / 7);
    }),
    (Vn.months = Rn),
    (Vn.years = Cn),
    (Vn.humanize = function (e) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u,
        l,
        d,
        h = this.localeData(),
        c =
          ((t = !e),
          (n = h),
          (s = Et(this).abs()),
          (i = Fn(s.as('s'))),
          (r = Fn(s.as('m'))),
          (a = Fn(s.as('h'))),
          (o = Fn(s.as('d'))),
          (u = Fn(s.as('M'))),
          (l = Fn(s.as('y'))),
          ((d = (i <= Ln.ss && ['s', i]) ||
            (i < Ln.s && ['ss', i]) ||
            (r <= 1 && ['m']) ||
            (r < Ln.m && ['mm', r]) ||
            (a <= 1 && ['h']) ||
            (a < Ln.h && ['hh', a]) ||
            (o <= 1 && ['d']) ||
            (o < Ln.d && ['dd', o]) ||
            (u <= 1 && ['M']) ||
            (u < Ln.M && ['MM', u]) ||
            (l <= 1 && ['y']) || ['yy', l])[2] = t),
          (d[3] = 0 < +this),
          (d[4] = n),
          function (e, t, n, s, i) {
            return i.relativeTime(t || 1, !!n, e, s);
          }.apply(null, d));
      return e && (c = h.pastFuture(+this, c)), h.postformat(c);
    }),
    (Vn.toISOString = Gn),
    (Vn.toString = Gn),
    (Vn.toJSON = Gn),
    (Vn.locale = Jt),
    (Vn.localeData = Qt),
    (Vn.toIsoString = n(
      'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
      Gn
    )),
    (Vn.lang = Bt),
    I('X', 0, 0, 'unix'),
    I('x', 0, 0, 'valueOf'),
    ue('x', se),
    ue('X', /[+-]?\d+(\.\d{1,3})?/),
    he('X', function (e, t, n) {
      n._d = new Date(1e3 * parseFloat(e, 10));
    }),
    he('x', function (e, t, n) {
      n._d = new Date(k(e));
    }),
    (p.version = '2.21.0'),
    (e = Yt),
    (p.fn = on),
    (p.min = function () {
      return xt('isBefore', [].slice.call(arguments, 0));
    }),
    (p.max = function () {
      return xt('isAfter', [].slice.call(arguments, 0));
    }),
    (p.now = function () {
      return Date.now ? Date.now() : +new Date();
    }),
    (p.utc = m),
    (p.unix = function (e) {
      return Yt(1e3 * e);
    }),
    (p.months = function (e, t) {
      return hn(e, t, 'months');
    }),
    (p.isDate = h),
    (p.locale = at),
    (p.invalid = y),
    (p.duration = Et),
    (p.isMoment = S),
    (p.weekdays = function (e, t, n) {
      return cn(e, t, n, 'weekdays');
    }),
    (p.parseZone = function () {
      return Yt.apply(null, arguments).parseZone();
    }),
    (p.localeData = ut),
    (p.isDuration = Wt),
    (p.monthsShort = function (e, t) {
      return hn(e, t, 'monthsShort');
    }),
    (p.weekdaysMin = function (e, t, n) {
      return cn(e, t, n, 'weekdaysMin');
    }),
    (p.defineLocale = ot),
    (p.updateLocale = function (e, t) {
      if (null != t) {
        var n,
          s,
          i = tt;
        null != (s = rt(e)) && (i = s._config),
          ((n = new P((t = b(i, t)))).parentLocale = nt[e]),
          (nt[e] = n),
          at(e);
      } else
        null != nt[e] &&
          (null != nt[e].parentLocale
            ? (nt[e] = nt[e].parentLocale)
            : null != nt[e] && delete nt[e]);
      return nt[e];
    }),
    (p.locales = function () {
      return s(nt);
    }),
    (p.weekdaysShort = function (e, t, n) {
      return cn(e, t, n, 'weekdaysShort');
    }),
    (p.normalizeUnits = R),
    (p.relativeTimeRounding = function (e) {
      return void 0 === e ? Fn : 'function' == typeof e && ((Fn = e), !0);
    }),
    (p.relativeTimeThreshold = function (e, t) {
      return (
        void 0 !== Ln[e] &&
        (void 0 === t ? Ln[e] : ((Ln[e] = t), 's' === e && (Ln.ss = t - 1), !0))
      );
    }),
    (p.calendarFormat = function (e, t) {
      var n = e.diff(t, 'days', !0);
      return n < -6
        ? 'sameElse'
        : n < -1
        ? 'lastWeek'
        : n < 0
        ? 'lastDay'
        : n < 1
        ? 'sameDay'
        : n < 2
        ? 'nextDay'
        : n < 7
        ? 'nextWeek'
        : 'sameElse';
    }),
    (p.prototype = on),
    (p.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
      DATE: 'YYYY-MM-DD',
      TIME: 'HH:mm',
      TIME_SECONDS: 'HH:mm:ss',
      TIME_MS: 'HH:mm:ss.SSS',
      WEEK: 'YYYY-[W]WW',
      MONTH: 'YYYY-MM',
    }),
    p
  );
});
