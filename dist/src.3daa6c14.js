parcelRequire = (function(e, r, n, t) {
  var i = 'function' == typeof parcelRequire && parcelRequire,
    o = 'function' == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = 'function' == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && 'string' == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function(r) {
        return e[n][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {},
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = c)
      : 'function' == typeof define && define.amd
      ? define(function() {
          return c;
        })
      : t && (this[t] = c);
  }
  return u;
})(
  {
    '2yOG': [
      function(require, module, exports) {
        'use strict';
        function e(e) {
          return {
            tagName: e,
            attrs:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            children:
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
          };
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    H3dV: [
      function(require, module, exports) {
        var n = 9007199254740991,
          r = '[object Function]',
          t = '[object GeneratorFunction]';
        function e(n, r, t) {
          switch (t.length) {
            case 0:
              return n.call(r);
            case 1:
              return n.call(r, t[0]);
            case 2:
              return n.call(r, t[0], t[1]);
            case 3:
              return n.call(r, t[0], t[1], t[2]);
          }
          return n.apply(r, t);
        }
        function u(n, r) {
          for (var t = -1, e = n ? n.length : 0, u = 0, o = []; ++t < e; ) {
            var c = n[t];
            r(c, t, n) && (o[u++] = c);
          }
          return o;
        }
        function o(n, r) {
          for (var t = -1, e = n ? n.length : 0, u = Array(e); ++t < e; )
            u[t] = r(n[t], t, n);
          return u;
        }
        function c(n) {
          return function(r) {
            return null == r ? void 0 : r[n];
          };
        }
        function a(n, r) {
          for (var t = -1, e = Array(n); ++t < n; ) e[t] = r(t);
          return e;
        }
        var f = Object.prototype,
          i = f.toString,
          l = Math.max;
        function v(n, r) {
          return (
            (r = l(void 0 === r ? n.length - 1 : r, 0)),
            function() {
              for (
                var t = arguments, u = -1, o = l(t.length - r, 0), c = Array(o);
                ++u < o;

              )
                c[u] = t[r + u];
              u = -1;
              for (var a = Array(r + 1); ++u < r; ) a[u] = t[u];
              return (a[r] = c), e(n, this, a);
            }
          );
        }
        function h(n) {
          if (!n || !n.length) return [];
          var r = 0;
          return (
            (n = u(n, function(n) {
              if (p(n)) return (r = l(n.length, r)), !0;
            })),
            a(r, function(r) {
              return o(n, c(r));
            })
          );
        }
        var g = v(h);
        function y(n) {
          return null != n && b(n.length) && !s(n);
        }
        function p(n) {
          return A(n) && y(n);
        }
        function s(n) {
          var e = j(n) ? i.call(n) : '';
          return e == r || e == t;
        }
        function b(r) {
          return 'number' == typeof r && r > -1 && r % 1 == 0 && r <= n;
        }
        function j(n) {
          var r = typeof n;
          return !!n && ('object' == r || 'function' == r);
        }
        function A(n) {
          return !!n && 'object' == typeof n;
        }
        module.exports = g;
      },
      {},
    ],
    o3wj: [
      function(require, module, exports) {
        var r = 'Expected a function',
          t = 1 / 0,
          n = 1.7976931348623157e308,
          e = NaN,
          o = '[object Symbol]',
          u = /^\s+|\s+$/g,
          f = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          i = parseInt;
        function l(r, t, n) {
          switch (n.length) {
            case 0:
              return r.call(t);
            case 1:
              return r.call(t, n[0]);
            case 2:
              return r.call(t, n[0], n[1]);
            case 3:
              return r.call(t, n[0], n[1], n[2]);
          }
          return r.apply(t, n);
        }
        function v(r, t) {
          for (var n = -1, e = t.length, o = r.length; ++n < e; )
            r[o + n] = t[n];
          return r;
        }
        var s = Object.prototype,
          p = s.toString,
          y = Math.max;
        function h(r, t) {
          return (
            (t = y(void 0 === t ? r.length - 1 : t, 0)),
            function() {
              for (
                var n = arguments, e = -1, o = y(n.length - t, 0), u = Array(o);
                ++e < o;

              )
                u[e] = n[t + e];
              e = -1;
              for (var f = Array(t + 1); ++e < t; ) f[e] = n[e];
              return (f[t] = u), l(r, this, f);
            }
          );
        }
        function g(r, t, n) {
          var e = -1,
            o = r.length;
          t < 0 && (t = -t > o ? 0 : o + t),
            (n = n > o ? o : n) < 0 && (n += o),
            (o = t > n ? 0 : (n - t) >>> 0),
            (t >>>= 0);
          for (var u = Array(o); ++e < o; ) u[e] = r[e + t];
          return u;
        }
        function b(r, t, n) {
          var e = r.length;
          return (n = void 0 === n ? e : n), !t && n >= e ? r : g(r, t, n);
        }
        function d(t, n) {
          if ('function' != typeof t) throw new TypeError(r);
          return (
            (n = void 0 === n ? 0 : y(w(n), 0)),
            h(function(r) {
              var e = r[n],
                o = b(r, 0, n);
              return e && v(o, e), l(t, this, o);
            })
          );
        }
        function m(r) {
          var t = typeof r;
          return !!r && ('object' == t || 'function' == t);
        }
        function j(r) {
          return !!r && 'object' == typeof r;
        }
        function x(r) {
          return 'symbol' == typeof r || (j(r) && p.call(r) == o);
        }
        function $(r) {
          return r
            ? (r = A(r)) === t || r === -t
              ? (r < 0 ? -1 : 1) * n
              : r == r
              ? r
              : 0
            : 0 === r
            ? r
            : 0;
        }
        function w(r) {
          var t = $(r),
            n = t % 1;
          return t == t ? (n ? t - n : t) : 0;
        }
        function A(r) {
          if ('number' == typeof r) return r;
          if (x(r)) return e;
          if (m(r)) {
            var t = 'function' == typeof r.valueOf ? r.valueOf() : r;
            r = m(t) ? t + '' : t;
          }
          if ('string' != typeof r) return 0 === r ? r : +r;
          r = r.replace(u, '');
          var n = a.test(r);
          return n || c.test(r) ? i(r.slice(2), n ? 2 : 8) : f.test(r) ? e : +r;
        }
        module.exports = d;
      },
      {},
    ],
    q4BD: [
      function(require, module, exports) {
        'use strict';
        function t(t, a) {
          return n(t) || e(t, a) || r();
        }
        function r() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        }
        function e(t, r) {
          var e = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var i, u = t[Symbol.iterator]();
              !(n = (i = u.next()).done) &&
              (e.push(i.value), !r || e.length !== r);
              n = !0
            );
          } catch (l) {
            (a = !0), (o = l);
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (a) throw o;
            }
          }
          return e;
        }
        function n(t) {
          if (Array.isArray(t)) return t;
        }
        function a(r) {
          if ('string' == typeof r) return document.createTextNode(r);
          for (
            var e = r.tagName,
              n = r.attrs,
              o = r.children,
              i = document.createElement(e),
              u = Object.entries(n),
              l = 0;
            l < u.length;
            l++
          ) {
            var c = t(u[l], 2),
              f = c[0],
              d = c[1];
            i.setAttribute(f, d);
          }
          var y = !0,
            s = !1,
            v = void 0;
          try {
            for (
              var h, p = o[Symbol.iterator]();
              !(y = (h = p.next()).done);
              y = !0
            ) {
              var m = h.value;
              i.appendChild(a(m));
            }
          } catch (b) {
            (s = !0), (v = b);
          } finally {
            try {
              y || null == p.return || p.return();
            } finally {
              if (s) throw v;
            }
          }
          return i;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = a);
      },
      {},
    ],
    '7PyI': [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = l);
        var r = e(require('lodash.zip')),
          t = e(require('lodash.spread')),
          n = e(require('./render'));
        function e(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function u(r, t) {
          return o(r) || a(r, t) || i();
        }
        function i() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        }
        function a(r, t) {
          var n = [],
            e = !0,
            u = !1,
            i = void 0;
          try {
            for (
              var a, o = r[Symbol.iterator]();
              !(e = (a = o.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              e = !0
            );
          } catch (l) {
            (u = !0), (i = l);
          } finally {
            try {
              e || null == o.return || o.return();
            } finally {
              if (u) throw i;
            }
          }
          return n;
        }
        function o(r) {
          if (Array.isArray(r)) return r;
        }
        function l(r, t) {
          if (!t)
            return function(r) {
              r.remove();
            };
          if ('string' == typeof r || 'string' == typeof t)
            return r !== t
              ? function(r) {
                  var e = (0, n.default)(t);
                  return r.replaceWith(e), e;
                }
              : function() {};
          if (r.tagName !== t.tagName)
            return function(r) {
              var e = (0, n.default)(t);
              return r.replaceWith(e), e;
            };
          var e = f(r.attrs, t.attrs),
            u = c(r.children, t.children);
          return function(r) {
            return e(r), u(r), r;
          };
        }
        function f(r, t) {
          var n = Object.keys(t)
              .filter(function(n) {
                return !r.hasOwnProperty(n) || r[n] !== t[n];
              })
              .map(function(r) {
                return function(n) {
                  return n.setAttribute(r, t[r]), n;
                };
              }),
            e = Object.keys(r)
              .filter(function(r) {
                return !t.hasOwnProperty(r);
              })
              .map(function(r) {
                return function(t) {
                  return t.removeAttribute(r), t;
                };
              })
              .concat(n);
          return function(r) {
            var t = !0,
              n = !1,
              u = void 0;
            try {
              for (
                var i, a = e[Symbol.iterator]();
                !(t = (i = a.next()).done);
                t = !0
              ) {
                (0, i.value)(r);
              }
            } catch (o) {
              (n = !0), (u = o);
            } finally {
              try {
                t || null == a.return || a.return();
              } finally {
                if (n) throw u;
              }
            }
            return r;
          };
        }
        function c(e, i) {
          var a = (0, r.default)(e, i).map((0, t.default)(l)),
            o = i.slice(e.length).map(function(r) {
              return function(t) {
                return t.appendChild((0, n.default)(r)), t;
              };
            });
          return function(t) {
            var n = !0,
              e = !1,
              i = void 0;
            try {
              for (
                var l, f = (0, r.default)(a, t.childNodes)[Symbol.iterator]();
                !(n = (l = f.next()).done);
                n = !0
              ) {
                var c = u(l.value, 2);
                (0, c[0])(c[1]);
              }
            } catch (p) {
              (e = !0), (i = p);
            } finally {
              try {
                n || null == f.return || f.return();
              } finally {
                if (e) throw i;
              }
            }
            var d = !0,
              y = !1,
              v = void 0;
            try {
              for (
                var s, h = o[Symbol.iterator]();
                !(d = (s = h.next()).done);
                d = !0
              ) {
                (0, s.value)(t);
              }
            } catch (p) {
              (y = !0), (v = p);
            } finally {
              try {
                d || null == h.return || h.return();
              } finally {
                if (y) throw v;
              }
            }
            return t;
          };
        }
      },
      { 'lodash.zip': 'H3dV', 'lodash.spread': 'o3wj', './render': 'q4BD' },
    ],
    sxPg: [
      function(require, module, exports) {
        'use strict';
        function e(e, t) {
          return t.replaceWith(e), e;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    WqSZ: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.render = exports.mount = exports.diff = exports.createElement = void 0);
        var e = o(require('./createElement')),
          r = o(require('./diff')),
          t = o(require('./mount')),
          u = o(require('./render'));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = e.default;
        exports.createElement = d;
        var a = r.default;
        exports.diff = a;
        var f = t.default;
        exports.mount = f;
        var n = u.default;
        exports.render = n;
      },
      {
        './createElement': '2yOG',
        './diff': '7PyI',
        './mount': 'sxPg',
        './render': 'q4BD',
      },
    ],
    Focm: [
      function(require, module, exports) {
        'use strict';
        var e = require('./vdom'),
          t = function(t) {
            var n = t.count;
            return (0, e.createElement)('div', { id: 'app', count: n }, [
              (0, e.createElement)('h1', void 0, ['VirtualDOMio']),
              (0, e.createElement)('span', { id: 'count' }, [String(n)]),
              (0, e.createElement)('input', {
                type: 'text',
                placeholder: 'Try typing while the app is updating',
              }),
              (0, e.createElement)('img', {
                src:
                  'https://media.giphy.com/media/26DNdzl2XkgbbFAmk/giphy.gif',
              }),
            ]);
          },
          n = { count: 0 },
          i = t(n),
          r = (0, e.mount)((0, e.render)(i), document.querySelector('#app'));
        setInterval(function() {
          n.count += 1;
          var a = t(n),
            c = (0, e.diff)(i, a);
          (r = c(r)), (i = a);
        }, 1e3);
      },
      { './vdom': 'WqSZ' },
    ],
  },
  {},
  ['Focm'],
  null
);
//# sourceMappingURL=/src.3daa6c14.map
