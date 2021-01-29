'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var luckyCanvas_cjs_min = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: !0
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var t = function (e, i) {
  return (t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
  })(e, i);
};

function e(e, i) {
  if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

  function n() {
    this.constructor = e;
  }

  t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n());
}

var i = function () {
  return (i = Object.assign || function (t) {
    for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);

    return t;
  }).apply(this, arguments);
};

function n(t, e, i, n) {
  return new (i || (i = Promise))(function (r, o) {
    function s(t) {
      try {
        u(n.next(t));
      } catch (t) {
        o(t);
      }
    }

    function a(t) {
      try {
        u(n.throw(t));
      } catch (t) {
        o(t);
      }
    }

    function u(t) {
      var e;
      t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i(function (t) {
        t(e);
      })).then(s, a);
    }

    u((n = n.apply(t, e || [])).next());
  });
}

function r(t, e) {
  var i,
      n,
      r,
      o,
      s = {
    label: 0,
    sent: function () {
      if (1 & r[0]) throw r[1];
      return r[1];
    },
    trys: [],
    ops: []
  };
  return o = {
    next: a(0),
    throw: a(1),
    return: a(2)
  }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
    return this;
  }), o;

  function a(o) {
    return function (a) {
      return function (o) {
        if (i) throw new TypeError("Generator is already executing.");

        for (; s;) try {
          if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;

          switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
            case 0:
            case 1:
              r = o;
              break;

            case 4:
              return s.label++, {
                value: o[1],
                done: !1
              };

            case 5:
              s.label++, n = o[1], o = [0];
              continue;

            case 7:
              o = s.ops.pop(), s.trys.pop();
              continue;

            default:
              if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                s = 0;
                continue;
              }

              if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                s.label = o[1];
                break;
              }

              if (6 === o[0] && s.label < r[1]) {
                s.label = r[1], r = o;
                break;
              }

              if (r && s.label < r[2]) {
                s.label = r[2], s.ops.push(o);
                break;
              }

              r[2] && s.ops.pop(), s.trys.pop();
              continue;
          }

          o = e.call(t, s);
        } catch (t) {
          o = [6, t], n = 0;
        } finally {
          i = r = 0;
        }

        if (5 & o[0]) throw o[1];
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, a]);
    };
  }
}

function o() {
  for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;

  var n = Array(t),
      r = 0;

  for (e = 0; e < i; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, r++) n[r] = o[s];

  return n;
}

String.prototype.includes || (String.prototype.includes = function (t, e) {
  return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
}), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
  value: function (t) {
    if (null == this) throw new TypeError('"this" is null or not defined');
    var e = Object(this),
        i = e.length >>> 0;
    if ("function" != typeof t) throw new TypeError("predicate must be a function");

    for (var n = arguments[1], r = 0; r < i;) {
      var o = e[r];
      if (t.call(n, o, r, e)) return o;
      r++;
    }
  }
});

var s = function (t) {
  for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];

  return e.some(function (e) {
    return Object.prototype.toString.call(t).slice(8, -1).toLowerCase() === e;
  });
},
    a = function (t) {
  return [].filter.call(t, function (t) {
    return "\n" !== t;
  }).join("");
},
    u = function (t) {
  if ("string" != typeof t) return !1;
  if ("transparent" === (t = t.toLocaleLowerCase().trim())) return !1;

  if (/^rgba/.test(t)) {
    var e = /([^\s,]+)\)$/.exec(t);
    if (0 === (null === (i = e) ? 0 : "object" == typeof i ? NaN : "number" == typeof i ? i : "string" == typeof i ? "%" === i[i.length - 1] ? Number(i.slice(0, -1)) / 100 : Number(i) : NaN)) return !1;
  }

  var i;
  return !0;
},
    h = ["#409EFF", "#67C23A", "#E6A23C", "#F56C6C", "#909399"];

var c = function () {
  function t(t, e, i, n, r) {
    this.dx = 0, this.dy = 0, this.ctx = t, this.x = e || 0, this.y = i || 0, this.vx = 0, this.vy = 0, this.sx = 1, this.sy = 1, this.radius = n || 10, this.color = r || "black";
  }

  return t.prototype.draw = function (t) {
    if (["fill", "stroke"].includes(t)) {
      var e = this.ctx;
      e.save(), e.translate(this.x, this.y), e.scale(this.sx, this.sy), e.fillStyle = this.color, e.strokeStyle = this.color, e.beginPath(), e.arc(0, 0, this.radius, 0, 360 * Math.PI / 180), e.closePath(), "fill" === t ? e.fill() : e.stroke(), e.restore();
    }
  }, t;
}(),
    l = function () {
  function t() {
    this.subs = [];
  }

  return t.prototype.addSub = function (t) {
    this.subs.includes(t) || this.subs.push(t);
  }, t.prototype.notify = function () {
    this.subs.forEach(function (t) {
      t.update();
    });
  }, t;
}(),
    f = ("__proto__" in {});

function d(t, e, i, n) {
  Object.defineProperty(t, e, {
    value: i,
    enumerable: !!n,
    writable: !0,
    configurable: !0
  });
}

var p = Array.prototype,
    g = Object.create(p);
["push", "pop", "shift", "unshift", "sort", "splice", "reverse"].forEach(function (t) {
  g[t] = function () {
    for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];

    var n = p[t].apply(this, e),
        r = this.__luckyOb__;
    return ["push", "unshift", "splice"].includes(t) && r.walk(this), r.dep.notify(), n;
  };
});

var m = function () {
  function t(t) {
    this.dep = new l(), d(t, "__luckyOb__", this), Array.isArray(t) && (f ? t.__proto__ = g : Object.getOwnPropertyNames(g).forEach(function (e) {
      d(t, e, g[e]);
    })), this.walk(t);
  }

  return t.prototype.walk = function (t) {
    Object.keys(t).forEach(function (e) {
      y(t, e, t[e]);
    });
  }, t;
}();

function v(t) {
  if (t && "object" == typeof t) return "__luckyOb__" in t ? t.__luckyOb__ : new m(t);
}

function y(t, e, i) {
  var n = new l(),
      r = Object.getOwnPropertyDescriptor(t, e);

  if (!r || !1 !== r.configurable) {
    var o = r && r.get,
        s = r && r.set;
    o && !s || 2 !== arguments.length || (i = t[e]);
    var a = v(i);
    Object.defineProperty(t, e, {
      get: function () {
        var e = o ? o.call(t) : i;
        return l.target && (n.addSub(l.target), a && a.dep.addSub(l.target)), e;
      },
      set: function (e) {
        e !== i && (i = e, o && !s || (s ? s.call(t, e) : i = e, a = v(e), n.notify()));
      }
    });
  }
}

var b = 0,
    w = function () {
  function t(t, e, i, n) {
    void 0 === n && (n = {}), this.id = b++, this.$lucky = t, this.expr = e, this.deep = !!n.deep, this.getter = "function" == typeof e ? e : function (t) {
      t += ".";

      for (var e = [], i = "", n = 0; n < t.length; n++) {
        var r = t[n];
        if (/\[|\./.test(r)) e.push(i), i = "";else {
          if (/\W/.test(r)) continue;
          i += r;
        }
      }

      return function (t) {
        return e.reduce(function (t, e) {
          return t[e];
        }, t);
      };
    }(e), this.cb = i, this.value = this.get();
  }

  return t.prototype.get = function () {
    l.target = this;
    var t = this.getter.call(this.$lucky, this.$lucky);
    return this.deep && function (t) {
      var e = function (t) {
        s(t, "array", "object") && Object.keys(t).forEach(function (i) {
          var n = t[i];
          e(n);
        });
      };

      e(t);
    }(t), l.target = null, t;
  }, t.prototype.update = function () {
    var t = this.get(),
        e = this.value;
    this.value = t, this.cb.call(this.$lucky, t, e);
  }, t;
}(),
    x = function () {
  function t(t) {
    var e = this;
    this.htmlFontSize = 16, this.rAF = function () {}, this.count = 0, this.setHTMLFontSize(), "string" == typeof t ? t = {
      el: t
    } : 1 === t.nodeType && (t = {
      el: "",
      divElement: t
    }), t = t, this.config = t, this.setDpr(), this.initWindowFunction(), t.flag || (t.flag = "WEB"), Object.prototype.hasOwnProperty.call(t, "ob") || (t.ob = !0), t.el && (t.divElement = document.querySelector(t.el));
    var i = 0,
        n = 0;
    t.divElement && (i = t.divElement.offsetWidth, n = t.divElement.offsetHeight, t.canvasElement = document.createElement("canvas"), t.divElement.appendChild(t.canvasElement)), t.width = this.getLength(t.width) || i, t.height = this.getLength(t.height) || n, t.divElement && (t.divElement.style.overflow = "hidden", t.divElement.style.width = t.width + "px", t.divElement.style.height = t.height + "px"), t.canvasElement && (t.ctx = t.canvasElement.getContext("2d"), t.canvasElement.setAttribute("package", "lucky-canvas@1.4.5"), t.canvasElement.addEventListener("click", function (t) {
      e.handleClick(t), e.drawEasterEggs(t.offsetX, t.offsetY);
    })), this.ctx = t.ctx, t.ctx && t.width && t.height || console.error("无法获取到 CanvasContext2D 或宽高");
  }

  return t.prototype.handleClick = function (t) {}, t.prototype.draw = function () {}, t.prototype.conversionAxis = function (t, e) {
    return [0, 0];
  }, t.prototype.drawEasterEggs = function (t, e, i) {
    var n = this;

    if (void 0 === i && (i = function () {}), 0 == this.count++ && setTimeout(function () {
      return n.count = 0;
    }, 1e3), 7 === this.count) {
      var r = this.ctx,
          o = this.rAF,
          s = this.conversionAxis(t, e),
          a = s[0],
          u = s[1],
          l = this,
          f = function (t, e, i, n) {
        for (var r = [], o = 0; o < n; o++) {
          var s = 9 * Math.random() + 1,
              a = new c(t, 0, 0, s, h[Math.random() * h.length >> 0]);
          a.x = e + 1 * Math.random() - 1 * Math.random(), a.y = i + 1 * Math.random() - 1 * Math.random();
          var u = e - a.x,
              l = i - a.y,
              f = Math.abs(u / l);
          a.dx = 100 * (u < 0 ? 1 : -1) / Math.sqrt(f * f + 1) * Math.random() * f + e, a.dy = 100 * (l < 0 ? 1 : -1) / Math.sqrt(f * f + 1) * Math.random() + i, r.push(a);
        }

        return r;
      }(r, a, u, 50),
          d = .1,
          p = 0;

      !function t() {
        if (!(p++ > 60)) {
          o(t), l.draw();

          for (var e = 0, n = f; e < n.length; e++) {
            var r = n[e];
            r.draw("fill"), r.vx = (r.dx - r.x) * d, r.vy = (r.dy - r.y) * d, r.x += r.vx, r.y += r.vy, r.sx += -r.sx * d, r.sy += -r.sy * d;
          }

          i.call(l);
        }
      }();
    }
  }, t.prototype.setDpr = function () {
    var t = this.config;
    t.dpr || (window ? window.dpr = t.dpr = window.devicePixelRatio || 1 : t.dpr || console.error(t, "未传入 dpr 可能会导致绘制异常"));
  }, t.prototype.setHTMLFontSize = function () {
    window && (this.htmlFontSize = +window.getComputedStyle(document.documentElement).fontSize.slice(0, -2));
  }, t.prototype.initWindowFunction = function () {
    var t = this.config;
    if (window) return this.rAF = window.requestAnimationFrame, t.setTimeout = window.setTimeout, t.setInterval = window.setInterval, t.clearTimeout = window.clearTimeout, void (t.clearInterval = window.clearInterval);
    if (t.rAF) this.rAF = t.rAF;else if (t.setTimeout) {
      var e = t.setTimeout;

      this.rAF = function (t) {
        return e(t, 16);
      };
    } else this.rAF = function (t) {
      return setTimeout(t, 16);
    };
  }, t.prototype.zoomCanvas = function () {
    var t = this.config,
        e = this.ctx,
        i = t.canvasElement,
        n = t.dpr,
        r = function (t) {
      return (t * n - t) / (t * n) * (n / 2) * 100;
    };

    i && (i.width = t.width * n, i.height = t.height * n, i.style.width = i.width + "px", i.style.height = i.height + "px", i.style.transform = "scale(" + 1 / n + ") translate(\n      " + -r(i.width) + "%, " + -r(i.height) + "%\n    )", e.scale(n, n));
  }, t.prototype.loadImg = function (t, e, i) {
    var n = this;
    return void 0 === i && (i = "$resolve"), new Promise(function (r, o) {
      if (t || o("=> '" + e.src + "' 不能为空或不合法"), "WEB" === n.config.flag) {
        var s = new Image();
        s.src = t, s.onload = function () {
          return r(s);
        }, s.onerror = function () {
          return o("=> '" + e.src + "' 图片加载失败");
        };
      } else e[i] = r;
    });
  }, t.prototype.drawImage = function (t, e, i, n, r) {
    var o,
        s = this.config,
        a = this.ctx;
    return ["WEB", "MINI-WX"].includes(s.flag) ? o = t : ["UNI-H5", "UNI-MINI-WX"].includes(s.flag) && (o = t.path), a.drawImage(o, e, i, n, r);
  }, t.prototype.getLength = function (t) {
    return s(t, "number") ? t : s(t, "string") ? this.changeUnits(t) : 0;
  }, t.prototype.changeUnits = function (t, e) {
    var i = this;
    return void 0 === e && (e = 1), Number(t.replace(/^([-]*[0-9.]*)([a-z%]*)$/, function (t, n, r) {
      var o = {
        "%": function (t) {
          return t * (e / 100);
        },
        px: function (t) {
          return 1 * t;
        },
        rem: function (t) {
          return t * i.htmlFontSize;
        }
      }[r];
      if (o) return o(n);
      var s = i.config.unitFunc;
      return s ? s(n, r) : n;
    }));
  }, t.prototype.$set = function (t, e, i) {
    t && "object" == typeof t && y(t, e, i);
  }, t.prototype.$computed = function (t, e, i) {
    var n = this;
    Object.defineProperty(t, e, {
      get: function () {
        return i.call(n);
      }
    });
  }, t.prototype.$watch = function (t, e, i) {
    void 0 === i && (i = {}), "object" == typeof e && (e = (i = e).handler);
    var n = new w(this, t, e, i);
    return i.immediate && e.call(this, n.value), function () {};
  }, t;
}(),
    I = function (t) {
  return Math.PI / 180 * t;
},
    z = function (t, e) {
  return [+(Math.cos(t) * e).toFixed(8), +(Math.sin(t) * e).toFixed(8)];
},
    S = function (t, e) {
  var i = -t / e;
  return [i, -i * t + e];
},
    k = function (t, e, i, n, r, o) {
  var s;

  if (void 0 === o && (o = !0), Math.abs(r - n).toFixed(8) >= I(180).toFixed(8)) {
    var a = (r + n) / 2;
    return o ? (k(t, e, i, n, a, o), k(t, e, i, a, r, o)) : (k(t, e, i, a, r, o), k(t, e, i, n, a, o)), !1;
  }

  o || (n = (s = [r, n])[0], r = s[1]);
  var u = z(n, i),
      h = u[0],
      c = u[1],
      l = z(r, i),
      f = l[0],
      d = l[1],
      p = S(h, c),
      g = p[0],
      m = p[1],
      v = S(f, d),
      y = v[0],
      b = v[1],
      w = (b - m) / (g - y),
      x = (y * m - g * b) / (y - g);
  isNaN(w) && (Math.abs(h) === +i.toFixed(8) && (w = h), Math.abs(f) === +i.toFixed(8) && (w = f)), g === 1 / 0 || g === -1 / 0 ? x = y * w + b : y !== 1 / 0 && y !== -1 / 0 || (x = g * w + m), e.lineTo(h, c), ["WEB", "UNI-H5"].includes(t) ? e.arcTo(w, x, f, d, i) : e.quadraticCurveTo(w, x, f, d);
},
    C = function (t, e, i, n, r, o, s, a) {
  i || (i = s);
  var u = I(90 / Math.PI / n * s),
      h = I(90 / Math.PI / i * s),
      c = r + u,
      l = o - u,
      f = r + h,
      d = o - h;
  e.beginPath(), e.fillStyle = a, e.moveTo.apply(e, z(c, n)), k(t, e, n, c, l, !0), d > f ? k(t, e, i, f, d, !1) : e.lineTo.apply(e, z((r + o) / 2, s / 2 / Math.abs(Math.sin((r - o) / 2)))), e.closePath(), e.fill();
},
    T = function (t, e, i, n, r, o, s) {
  var a = Math.min(n, r);
  o > a / 2 && (o = a / 2), t.beginPath(), t.fillStyle = s, t.moveTo(e + o, i), t.lineTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + o), t.lineTo(e + n, i + r - o), t.quadraticCurveTo(e + n, i + r, e + n - o, i + r), t.lineTo(e + o, i + r), t.quadraticCurveTo(e, i + r, e, i + r - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath(), t.fill();
},
    O = {
  easeIn: function (t, e, i, n) {
    return t >= n && (t = n), i * (t /= n) * t + e;
  },
  easeOut: function (t, e, i, n) {
    return t >= n && (t = n), -i * (t /= n) * (t - 2) + e;
  }
},
    _ = {
  easeIn: function (t, e, i, n) {
    return t >= n && (t = n), -i * Math.cos(t / n * (Math.PI / 2)) + i + e;
  },
  easeOut: function (t, e, i, n) {
    return t >= n && (t = n), i * Math.sin(t / n * (Math.PI / 2)) + e;
  }
},
    E = {
  easeIn: function (t, e, i, n) {
    return t >= n && (t = n), 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e;
  },
  easeOut: function (t, e, i, n) {
    return t >= n && (t = n), t == n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e;
  }
},
    W = {
  easeIn: function (t, e, i, n) {
    return t >= n && (t = n), -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
  },
  easeOut: function (t, e, i, n) {
    return t >= n && (t = n), i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
  }
},
    P = Object.freeze({
  __proto__: null,
  quad: O,
  cubic: {
    easeIn: function (t, e, i, n) {
      return t >= n && (t = n), i * (t /= n) * t * t + e;
    },
    easeOut: function (t, e, i, n) {
      return t >= n && (t = n), i * ((t = t / n - 1) * t * t + 1) + e;
    }
  },
  quart: {
    easeIn: function (t, e, i, n) {
      return t >= n && (t = n), i * (t /= n) * t * t * t + e;
    },
    easeOut: function (t, e, i, n) {
      return t >= n && (t = n), -i * ((t = t / n - 1) * t * t * t - 1) + e;
    }
  },
  quint: {
    easeIn: function (t, e, i, n) {
      return t >= n && (t = n), i * (t /= n) * t * t * t * t + e;
    },
    easeOut: function (t, e, i, n) {
      return t >= n && (t = n), i * ((t = t / n - 1) * t * t * t * t + 1) + e;
    }
  },
  sine: _,
  expo: E,
  circ: W
}),
    $ = function (t) {
  function o(e, i) {
    void 0 === i && (i = {});
    var n = t.call(this, e) || this;
    return n.blocks = [], n.prizes = [], n.buttons = [], n.defaultConfig = {}, n._defaultConfig = {
      gutter: "0px",
      offsetDegree: 0,
      speed: 20,
      speedFunction: "quad",
      accelerationTime: 2500,
      decelerationTime: 2500,
      stopRange: .8
    }, n.defaultStyle = {}, n._defaultStyle = {
      fontSize: "18px",
      fontColor: "#000",
      fontStyle: "sans-serif",
      fontWeight: "400",
      lineHeight: "",
      background: "transparent",
      wordWrap: !0,
      lengthLimit: "90%"
    }, n.Radius = 0, n.prizeRadius = 0, n.prizeDeg = 0, n.prizeRadian = 0, n.rotateDeg = 0, n.maxBtnRadius = 0, n.startTime = 0, n.endTime = 0, n.stopDeg = 0, n.endDeg = 0, n.FPS = 16.6, n.blockImgs = [[]], n.prizeImgs = [[]], n.btnImgs = [[]], e.ob && (n.initData(i), n.initWatch()), n.initComputed(), n.init({
      blockImgs: n.blocks.map(function (t) {
        return t.imgs;
      }),
      prizeImgs: n.prizes.map(function (t) {
        return t.imgs;
      }),
      btnImgs: n.buttons.map(function (t) {
        return t.imgs;
      })
    }), n;
  }

  return e(o, t), o.prototype.initData = function (t) {
    this.$set(this, "blocks", t.blocks || []), this.$set(this, "prizes", t.prizes || []), this.$set(this, "buttons", t.buttons || []), this.$set(this, "defaultConfig", t.defaultConfig || {}), this.$set(this, "defaultStyle", t.defaultStyle || {}), this.$set(this, "startCallback", t.start), this.$set(this, "endCallback", t.end);
  }, o.prototype.initComputed = function () {
    var t = this;
    this.$computed(this, "_defaultConfig", function () {
      return i({
        gutter: "0px",
        offsetDegree: 0,
        speed: 20,
        speedFunction: "quad",
        accelerationTime: 2500,
        decelerationTime: 2500,
        stopRange: .8
      }, t.defaultConfig);
    }), this.$computed(this, "_defaultStyle", function () {
      return i({
        fontSize: "18px",
        fontColor: "#000",
        fontStyle: "sans-serif",
        fontWeight: "400",
        background: "transparent",
        wordWrap: !0,
        lengthLimit: "90%"
      }, t.defaultStyle);
    });
  }, o.prototype.initWatch = function () {
    var t = this;
    this.$watch("blocks", function (e) {
      return t.init({
        blockImgs: e.map(function (t) {
          return t.imgs;
        })
      });
    }, {
      deep: !0
    }), this.$watch("prizes", function (e) {
      return t.init({
        prizeImgs: e.map(function (t) {
          return t.imgs;
        })
      });
    }, {
      deep: !0
    }), this.$watch("buttons", function (e) {
      return t.init({
        btnImgs: e.map(function (t) {
          return t.imgs;
        })
      });
    }, {
      deep: !0
    }), this.$watch("defaultConfig", function () {
      return t.draw();
    }, {
      deep: !0
    }), this.$watch("defaultStyle", function () {
      return t.draw();
    }, {
      deep: !0
    }), this.$watch("startCallback", function () {
      return t.init({});
    }), this.$watch("endCallback", function () {
      return t.init({});
    });
  }, o.prototype.init = function (t) {
    var e,
        i,
        n = this,
        r = this.config,
        o = this.ctx;
    this.setDpr(), this.setHTMLFontSize(), this.zoomCanvas(), null === (e = r.beforeInit) || void 0 === e || e.call(this), this.Radius = Math.min(r.width, r.height) / 2, o.translate(this.Radius, this.Radius), this.draw(), Object.keys(t).forEach(function (e) {
      var i = e,
          r = {
        blockImgs: "blocks",
        prizeImgs: "prizes",
        btnImgs: "buttons"
      }[i],
          o = t[i];
      o && o.forEach(function (t, e) {
        t && t.forEach(function (t, o) {
          n.loadAndCacheImg(r, e, i, o, function () {
            n.draw();
          });
        });
      });
    }), null === (i = r.afterInit) || void 0 === i || i.call(this);
  }, o.prototype.handleClick = function (t) {
    var e,
        i = this.ctx;
    i.beginPath(), i.arc(0, 0, this.maxBtnRadius, 0, 2 * Math.PI, !1), i.isPointInPath(t.offsetX, t.offsetY) && (this.startTime || null === (e = this.startCallback) || void 0 === e || e.call(this, t));
  }, o.prototype.loadAndCacheImg = function (t, e, i, o, s) {
    return n(this, void 0, void 0, function () {
      var n,
          a,
          u = this;
      return r(this, function (r) {
        return (n = this[t][e]) && n.imgs && (a = n.imgs[o]) ? (this[i][e] || (this[i][e] = []), this.loadImg(a.src, a).then(function (t) {
          u[i][e][o] = t, s.call(u);
        }).catch(function (i) {
          console.error(t + "[" + e + "].imgs[" + o + "] " + i);
        }), [2]) : [2];
      });
    });
  }, o.prototype.computedWidthAndHeight = function (t, e, i, n) {
    if (!e.width && !e.height) return [t.width, t.height];

    if (e.width && !e.height) {
      var r = this.getWidth(e.width, i);
      return [r, t.height * (r / t.width)];
    }

    if (!e.width && e.height) {
      var o = this.getHeight(e.height, n);
      return [t.width * (o / t.height), o];
    }

    return [this.getWidth(e.width, i), this.getHeight(e.height, n)];
  }, o.prototype.draw = function () {
    var t,
        e,
        i = this,
        n = this,
        r = n.config,
        o = n.ctx,
        s = n._defaultConfig,
        h = n._defaultStyle;
    null === (t = r.beforeDraw) || void 0 === t || t.call(this, o), o.clearRect(-this.Radius, -this.Radius, 2 * this.Radius, 2 * this.Radius), this.prizeRadius = this.blocks.reduce(function (t, e, n) {
      return u(e.background) && (o.beginPath(), o.fillStyle = e.background, o.arc(0, 0, t, 0, 2 * Math.PI, !1), o.fill()), e.imgs && e.imgs.forEach(function (e, r) {
        if (i.blockImgs[n]) {
          var s = i.blockImgs[n][r];

          if (s) {
            var a = i.computedWidthAndHeight(s, e, 2 * t, 2 * t),
                u = a[0],
                h = a[1],
                c = [i.getOffsetX(u), i.getHeight(e.top, 2 * t) - t],
                l = c[0],
                f = c[1];
            o.save(), e.rotate && o.rotate(I(i.rotateDeg)), i.drawImage(s, l, f, u, h), o.restore();
          }
        }
      }), t - i.getLength(e.padding && e.padding.split(" ")[0]);
    }, this.Radius), this.prizeDeg = 360 / this.prizes.length, this.prizeRadian = I(this.prizeDeg);

    var c = I(-90 + this.rotateDeg + s.offsetDegree),
        l = function (t) {
      return i.getOffsetX(o.measureText(t).width);
    },
        f = function (t, e, n) {
      var r = t.lineHeight || h.lineHeight || t.fontSize || h.fontSize;
      return i.getHeight(t.top, e) + (n + 1) * i.getLength(r);
    };

    o.save(), this.prizes.forEach(function (t, e) {
      var n = c + e * i.prizeRadian,
          d = i.prizeRadius - i.maxBtnRadius,
          p = t.background || h.background;
      u(p) && function (t, e, i, n, r, o, s, a) {
        s ? C(t, e, i, n, r, o, s, a) : (e.beginPath(), e.fillStyle = a, e.moveTo(0, 0), e.arc(0, 0, n, r, o, !1), e.closePath(), e.fill());
      }(r.flag, o, i.maxBtnRadius, i.prizeRadius, n - i.prizeRadian / 2, n + i.prizeRadian / 2, i.getLength(s.gutter), p);
      var g = Math.cos(n) * i.prizeRadius,
          m = Math.sin(n) * i.prizeRadius;
      o.translate(g, m), o.rotate(n + I(90)), t.imgs && t.imgs.forEach(function (t, n) {
        if (i.prizeImgs[e]) {
          var r = i.prizeImgs[e][n];

          if (r) {
            var o = i.computedWidthAndHeight(r, t, i.prizeRadian * i.prizeRadius, d),
                s = o[0],
                a = o[1],
                u = [i.getOffsetX(s), i.getHeight(t.top, d)],
                h = u[0],
                c = u[1];
            i.drawImage(r, h, c, s, a);
          }
        }
      }), t.fonts && t.fonts.forEach(function (t) {
        var e = t.fontColor || h.fontColor,
            n = t.fontWeight || h.fontWeight,
            r = i.getLength(t.fontSize || h.fontSize),
            u = t.fontStyle || h.fontStyle;
        o.fillStyle = e, o.font = n + " " + (r >> 0) + "px " + u;
        var c = [],
            p = String(t.text);

        if (Object.prototype.hasOwnProperty.call(t, "wordWrap") ? t.wordWrap : h.wordWrap) {
          p = a(p);

          for (var g = "", m = 0; m < p.length; m++) {
            g += p[m];
            var v = o.measureText(g).width,
                y = (i.prizeRadius - f(t, d, c.length)) * Math.tan(i.prizeRadian / 2) * 2 - i.getLength(s.gutter);
            v > i.getWidth(t.lengthLimit || h.lengthLimit, y) && (c.push(g.slice(0, -1)), g = p[m]);
          }

          g && c.push(g), c.length || c.push(p);
        } else c = p.split("\n");

        c.filter(function (t) {
          return !!t;
        }).forEach(function (e, i) {
          o.fillText(e, l(e), f(t, d, i));
        });
      }), o.rotate(I(360) - n - I(90)), o.translate(-g, -m);
    }), o.restore(), this.buttons.forEach(function (t, e) {
      var n = i.getHeight(t.radius);
      i.maxBtnRadius = Math.max(i.maxBtnRadius, n), u(t.background) && (o.beginPath(), o.fillStyle = t.background, o.arc(0, 0, n, 0, 2 * Math.PI, !1), o.fill()), t.pointer && u(t.background) && (o.beginPath(), o.fillStyle = t.background, o.moveTo(-n, 0), o.lineTo(n, 0), o.lineTo(0, 2 * -n), o.closePath(), o.fill()), t.imgs && t.imgs.forEach(function (t, r) {
        if (i.btnImgs[e]) {
          var o = i.btnImgs[e][r];

          if (o) {
            var s = i.computedWidthAndHeight(o, t, 2 * n, 2 * n),
                a = s[0],
                u = s[1],
                h = [i.getOffsetX(a), i.getHeight(t.top, n)],
                c = h[0],
                l = h[1];
            i.drawImage(o, c, l, a, u);
          }
        }
      }), t.fonts && t.fonts.forEach(function (t) {
        var e = t.fontColor || h.fontColor,
            r = t.fontWeight || h.fontWeight,
            s = i.getLength(t.fontSize || h.fontSize),
            a = t.fontStyle || h.fontStyle;
        o.fillStyle = e, o.font = r + " " + (s >> 0) + "px " + a, String(t.text).split("\n").forEach(function (e, i) {
          o.fillText(e, l(e), f(t, n, i));
        });
      });
    }), null === (e = r.afterDraw) || void 0 === e || e.call(this, o);
  }, o.prototype.play = function () {
    this.startTime || (this.startTime = Date.now(), this.prizeFlag = void 0, this.run());
  }, o.prototype.stop = function (t) {
    this.prizeFlag = Number(t) % this.prizes.length;
  }, o.prototype.run = function (t) {
    void 0 === t && (t = 0);
    var e = this,
        i = e.rAF,
        n = e.prizeFlag,
        r = e.prizeDeg,
        o = e.rotateDeg,
        s = e._defaultConfig,
        a = Date.now() - this.startTime;

    if (a >= s.accelerationTime && void 0 !== n) {
      this.FPS = a / t, this.endTime = Date.now(), this.stopDeg = o;

      for (var u = (Math.random() * r - r / 2) * this.getLength(s.stopRange), h = 0; ++h;) {
        var c = 360 * h - n * r - o - s.offsetDegree + u;

        if (P[s.speedFunction].easeOut(this.FPS, this.stopDeg, c, s.decelerationTime) - this.stopDeg > s.speed) {
          this.endDeg = c;
          break;
        }
      }

      return this.slowDown();
    }

    this.rotateDeg = (o + P[s.speedFunction].easeIn(a, 0, s.speed, s.accelerationTime)) % 360, this.draw(), i(this.run.bind(this, t + 1));
  }, o.prototype.slowDown = function () {
    var t,
        e = this,
        n = e.rAF,
        r = e.prizes,
        o = e.prizeFlag,
        s = e.stopDeg,
        a = e.endDeg,
        u = e._defaultConfig,
        h = Date.now() - this.endTime;
    if (h >= u.decelerationTime) return this.startTime = 0, void (null === (t = this.endCallback) || void 0 === t || t.call(this, i({}, r.find(function (t, e) {
      return e === o;
    }))));
    this.rotateDeg = P[u.speedFunction].easeOut(h, s, a, u.decelerationTime) % 360, this.draw(), n(this.slowDown.bind(this));
  }, o.prototype.getWidth = function (t, e) {
    return void 0 === e && (e = this.prizeRadian * this.prizeRadius), s(t, "number") ? t : s(t, "string") ? this.changeUnits(t, e) : 0;
  }, o.prototype.getHeight = function (t, e) {
    return void 0 === e && (e = this.prizeRadius), s(t, "number") ? t : s(t, "string") ? this.changeUnits(t, e) : 0;
  }, o.prototype.getOffsetX = function (t) {
    return -t / 2;
  }, o.prototype.conversionAxis = function (t, e) {
    var i = this.config;
    return [t / i.dpr - this.Radius, e / i.dpr - this.Radius];
  }, o;
}(x),
    F = function (t) {
  function h(e, i) {
    void 0 === i && (i = {});
    var n = t.call(this, e) || this;
    n.rows = 3, n.cols = 3, n.blocks = [], n.prizes = [], n.buttons = [], n.defaultConfig = {}, n._defaultConfig = {
      gutter: 5,
      speed: 20,
      accelerationTime: 2500,
      decelerationTime: 2500
    }, n.defaultStyle = {}, n._defaultStyle = {
      borderRadius: 20,
      fontColor: "#000",
      fontSize: "18px",
      fontStyle: "sans-serif",
      fontWeight: "400",
      lineHeight: "",
      background: "transparent",
      shadow: "",
      wordWrap: !0,
      lengthLimit: "90%"
    }, n.activeStyle = {}, n._activeStyle = {
      background: "#ffce98",
      shadow: "",
      fontStyle: "",
      fontWeight: "",
      fontSize: "",
      lineHeight: "",
      fontColor: ""
    }, n.cellWidth = 0, n.cellHeight = 0, n.startTime = 0, n.endTime = 0, n.currIndex = 0, n.stopIndex = 0, n.endIndex = 0, n.demo = !1, n.timer = 0, n.FPS = 16.6, n.cells = [], n.blockImgs = [[]], n.btnImgs = [[]], n.prizeImgs = [], e.ob && (n.initData(i), n.initWatch()), n.initComputed();
    var r = n.buttons.map(function (t) {
      return t.imgs;
    });
    return n.button && r.push(n.button.imgs), n.init({
      blockImgs: n.blocks.map(function (t) {
        return t.imgs;
      }),
      prizeImgs: n.prizes.map(function (t) {
        return t.imgs;
      }),
      btnImgs: r
    }), n;
  }

  return e(h, t), h.prototype.initData = function (t) {
    this.$set(this, "rows", Number(t.rows) || 3), this.$set(this, "cols", Number(t.cols) || 3), this.$set(this, "blocks", t.blocks || []), this.$set(this, "prizes", t.prizes || []), this.$set(this, "buttons", t.buttons || []), this.$set(this, "button", t.button), this.$set(this, "defaultConfig", t.defaultConfig || {}), this.$set(this, "defaultStyle", t.defaultStyle || {}), this.$set(this, "activeStyle", t.activeStyle || {}), this.$set(this, "startCallback", t.start), this.$set(this, "endCallback", t.end);
  }, h.prototype.initComputed = function () {
    var t = this;
    this.$computed(this, "_defaultConfig", function () {
      var e = i({
        gutter: 5,
        speed: 20,
        accelerationTime: 2500,
        decelerationTime: 2500
      }, t.defaultConfig);
      return e.gutter = t.getLength(e.gutter), e.speed = e.speed / 40, e;
    }), this.$computed(this, "_defaultStyle", function () {
      return i({
        borderRadius: 20,
        fontColor: "#000",
        fontSize: "18px",
        fontStyle: "sans-serif",
        fontWeight: "400",
        background: "transparent",
        shadow: "",
        wordWrap: !0,
        lengthLimit: "90%"
      }, t.defaultStyle);
    }), this.$computed(this, "_activeStyle", function () {
      return i({
        background: "#ffce98",
        shadow: ""
      }, t.activeStyle);
    });
  }, h.prototype.initWatch = function () {
    var t = this;
    this.$watch("blocks", function (e) {
      return t.init({
        blockImgs: e.map(function (t) {
          return t.imgs;
        })
      });
    }, {
      deep: !0
    }), this.$watch("prizes", function (e) {
      return t.init({
        prizeImgs: e.map(function (t) {
          return t.imgs;
        })
      });
    }, {
      deep: !0
    }), this.$watch("buttons", function (e) {
      var i = e.map(function (t) {
        return t.imgs;
      });
      return t.button && i.push(t.button.imgs), t.init({
        btnImgs: i
      });
    }, {
      deep: !0
    }), this.$watch("button", function () {
      var e = t.buttons.map(function (t) {
        return t.imgs;
      });
      return t.button && e.push(t.button.imgs), t.init({
        btnImgs: e
      });
    }, {
      deep: !0
    }), this.$watch("rows", function () {
      return t.init({});
    }), this.$watch("cols", function () {
      return t.init({});
    }), this.$watch("defaultConfig", function () {
      return t.draw();
    }, {
      deep: !0
    }), this.$watch("defaultStyle", function () {
      return t.draw();
    }, {
      deep: !0
    }), this.$watch("activeStyle", function () {
      return t.draw();
    }, {
      deep: !0
    }), this.$watch("startCallback", function () {
      return t.init({});
    }), this.$watch("endCallback", function () {
      return t.init({});
    });
  }, h.prototype.init = function (t) {
    var e,
        i,
        n = this,
        r = this,
        o = r.config;
    r.ctx, r.button, this.setHTMLFontSize(), this.setDpr(), this.zoomCanvas(), null === (e = o.beforeInit) || void 0 === e || e.call(this), this.draw(), Object.keys(t).forEach(function (e) {
      var i = e,
          r = t[i],
          o = {
        blockImgs: "blocks",
        prizeImgs: "prizes",
        btnImgs: "buttons"
      }[i];
      r && r.forEach(function (t, e) {
        t && t.forEach(function (t, r) {
          n.loadAndCacheImg(o, e, i, r, function () {
            n.draw();
          });
        });
      });
    }), null === (i = o.afterInit) || void 0 === i || i.call(this);
  }, h.prototype.handleClick = function (t) {
    var e = this,
        i = this.ctx;
    o(this.buttons, [this.button]).forEach(function (n) {
      var r;

      if (n) {
        var o = e.getGeometricProperty([n.x, n.y, n.col || 1, n.row || 1]),
            s = o[0],
            a = o[1],
            u = o[2],
            h = o[3];
        i.beginPath(), i.rect(s, a, u, h), i.isPointInPath(t.offsetX, t.offsetY) && (e.startTime || null === (r = e.startCallback) || void 0 === r || r.call(e, t));
      }
    });
  }, h.prototype.loadAndCacheImg = function (t, e, i, o, s) {
    return n(this, void 0, void 0, function () {
      var n,
          a,
          u,
          h = this;
      return r(this, function (r) {
        return n = this[t][e], "buttons" === t && !this.buttons.length && this.button && (n = this.button), n && n.imgs && (a = n.imgs[o]) ? (this[i][e] || (this[i][e] = []), u = [this.loadImg(a.src, a), a.activeSrc && this.loadImg(a.activeSrc, a, "$activeResolve")], Promise.all(u).then(function (t) {
          var n = t[0],
              r = t[1];
          h[i][e][o] = {
            defaultImg: n,
            activeImg: r
          }, s.call(h);
        }).catch(function (i) {
          console.error(t + "[" + e + "].imgs[" + o + "] " + i);
        }), [2]) : [2];
      });
    });
  }, h.prototype.computedWidthAndHeight = function (t, e, i) {
    if (!e.width && !e.height) return [t.width, t.height];

    if (e.width && !e.height) {
      var n = this.getWidth(e.width, i.col);
      return [n, t.height * (n / t.width)];
    }

    if (!e.width && e.height) {
      var r = this.getHeight(e.height, i.row);
      return [t.width * (r / t.height), r];
    }

    return [this.getWidth(e.width, i.col), this.getHeight(e.height, i.row)];
  }, h.prototype.draw = function () {
    var t,
        e,
        i = this,
        n = this,
        r = n.config,
        h = n.ctx,
        c = n._defaultConfig,
        l = n._defaultStyle,
        f = n._activeStyle;
    null === (t = r.beforeDraw) || void 0 === t || t.call(this, h), h.clearRect(0, 0, r.width, r.height), this.cells = o(this.prizes, this.buttons), this.button && this.cells.push(this.button), this.cells.forEach(function (t) {
      t.col = t.col || 1, t.row = t.row || 1;
    }), this.prizeArea = this.blocks.reduce(function (t, e) {
      var n = t.x,
          r = t.y,
          o = t.w,
          a = t.h,
          c = function (t) {
        var e = t.padding.replace(/px/g, "").split(" ").map(function (t) {
          return ~~t;
        }) || [0],
            i = 0,
            n = 0,
            r = 0,
            o = 0;

        switch (e.length) {
          case 1:
            i = n = r = o = e[0];
            break;

          case 2:
            i = n = e[0], r = o = e[1];
            break;

          case 3:
            i = e[0], r = o = e[1], n = e[2];
            break;

          default:
            i = e[0], n = e[1], r = e[2], o = e[3];
        }

        var a = {
          paddingTop: i,
          paddingBottom: n,
          paddingLeft: r,
          paddingRight: o
        };

        for (var u in a) a[u] = Object.prototype.hasOwnProperty.call(t, u) && s(t[u], "string", "number") ? ~~String(t[u]).replace(/px/g, "") : a[u];

        return [i, n, r, o];
      }(e).map(function (t) {
        return ~~t;
      }),
          f = c[0],
          d = c[1],
          p = c[2],
          g = c[3],
          m = e.borderRadius ? i.getLength(e.borderRadius) : 0,
          v = e.background || l.background;

      return u(v) && T(h, n, r, o, a, m, i.handleBackground(n, r, o, a, v)), {
        x: n + p,
        y: r + f,
        w: o - p - g,
        h: a - f - d
      };
    }, {
      x: 0,
      y: 0,
      w: r.width,
      h: r.height
    }), this.cellWidth = (this.prizeArea.w - c.gutter * (this.cols - 1)) / this.cols, this.cellHeight = (this.prizeArea.h - c.gutter * (this.rows - 1)) / this.rows, this.cells.forEach(function (t, e) {
      var n = i.getGeometricProperty([t.x, t.y, t.col, t.row]),
          o = n[0],
          s = n[1],
          c = n[2],
          d = n[3],
          p = e === i.currIndex % i.prizes.length >> 0,
          g = p ? f.background : t.background || l.background;

      if (u(g)) {
        var m = (p ? f.shadow : t.shadow || l.shadow).replace(/px/g, "").split(",")[0].split(" ").map(function (t, e) {
          return e < 3 ? Number(t) : t;
        });
        4 === m.length && (h.shadowColor = m[3], h.shadowOffsetX = m[0] * r.dpr, h.shadowOffsetY = m[1] * r.dpr, h.shadowBlur = m[2], m[0] > 0 ? c -= m[0] : (c += m[0], o -= m[0]), m[1] > 0 ? d -= m[1] : (d += m[1], s -= m[1])), T(h, o, s, c, d, i.getLength(t.borderRadius ? t.borderRadius : l.borderRadius), i.handleBackground(o, s, c, d, g)), h.shadowColor = "rgba(0, 0, 0, 0)", h.shadowOffsetX = 0, h.shadowOffsetY = 0, h.shadowBlur = 0;
      }

      var v = "prizeImgs";
      e >= i.prizes.length && (v = "btnImgs", e -= i.prizes.length), t.imgs && t.imgs.forEach(function (n, r) {
        if (i[v][e]) {
          var a = i[v][e][r];

          if (a) {
            var u = p && a.activeImg || a.defaultImg;

            if (u) {
              var h = i.computedWidthAndHeight(u, n, t),
                  c = h[0],
                  l = h[1],
                  f = [o + i.getOffsetX(c, t.col), s + i.getHeight(n.top, t.row)],
                  d = f[0],
                  g = f[1];
              i.drawImage(u, d, g, c, l);
            }
          }
        }
      }), t.fonts && t.fonts.forEach(function (e) {
        var n = p && f.fontStyle ? f.fontStyle : e.fontStyle || l.fontStyle,
            r = p && f.fontWeight ? f.fontWeight : e.fontWeight || l.fontWeight,
            u = p && f.fontSize ? i.getLength(f.fontSize) : i.getLength(e.fontSize || l.fontSize),
            c = p && f.lineHeight ? f.lineHeight : e.lineHeight || l.lineHeight || e.fontSize || l.fontSize;
        h.font = r + " " + (u >> 0) + "px " + n, h.fillStyle = p && f.fontColor ? f.fontColor : e.fontColor || l.fontColor;
        var d = [],
            g = String(e.text);

        if (Object.prototype.hasOwnProperty.call(e, "wordWrap") ? e.wordWrap : l.wordWrap) {
          g = a(g);

          for (var m = "", v = 0; v < g.length; v++) {
            m += g[v], h.measureText(m).width > i.getWidth(e.lengthLimit || l.lengthLimit, t.col) && (d.push(m.slice(0, -1)), m = g[v]);
          }

          m && d.push(m), d.length || d.push(g);
        } else d = g.split("\n");

        d.forEach(function (n, r) {
          h.fillText(n, o + i.getOffsetX(h.measureText(n).width, t.col), s + i.getHeight(e.top, t.row) + (r + 1) * i.getLength(c));
        });
      });
    }), null === (e = r.afterDraw) || void 0 === e || e.call(this, h);
  }, h.prototype.handleBackground = function (t, e, i, n, r) {
    var o = this.ctx;
    return r.includes("linear-gradient") && (r = function (t, e, i, n, r, o) {
      var s = /linear-gradient\((.+)\)/.exec(o)[1].split(",").map(function (t) {
        return t.trim();
      }),
          a = s.shift(),
          u = [0, 0, 0, 0];

      if (a.includes("deg")) {
        var h = function (t) {
          return Math.tan(t / 180 * Math.PI);
        };

        (a = a.slice(0, -3) % 360) >= 0 && a < 45 ? u = [e, i + r, e + n, i + r - n * h(a - 0)] : a >= 45 && a < 90 ? u = [e, i + r, e + n - r * h(a - 45), i] : a >= 90 && a < 135 ? u = [e + n, i + r, e + n - r * h(a - 90), i] : a >= 135 && a < 180 ? u = [e + n, i + r, e, i + n * h(a - 135)] : a >= 180 && a < 225 ? u = [e + n, i, e, i + n * h(a - 180)] : a >= 225 && a < 270 ? u = [e + n, i, e + r * h(a - 225), i + r] : a >= 270 && a < 315 ? u = [e, i, e + r * h(a - 270), i + r] : a >= 315 && a < 360 && (u = [e, i, e + n, i + r - n * h(a - 315)]);
      } else a.includes("top") ? u = [e, i + r, e, i] : a.includes("bottom") ? u = [e, i, e, i + r] : a.includes("left") ? u = [e + n, i, e, i] : a.includes("right") && (u = [e, i, e + n, i]);

      var c = t.createLinearGradient.apply(t, u.map(function (t) {
        return t >> 0;
      }));
      return s.reduce(function (t, e, i) {
        var n = e.split(" ");
        return 1 === n.length ? t.addColorStop(i, n[0]) : 2 === n.length && t.addColorStop.apply(t, n), t;
      }, c);
    }(o, t, e, i, n, r)), r;
  }, h.prototype.play = function () {
    var t = this.config.clearInterval;
    this.startTime || (t(this.timer), this.startTime = Date.now(), this.prizeFlag = void 0, this.run());
  }, h.prototype.stop = function (t) {
    this.prizeFlag = t % this.prizes.length;
  }, h.prototype.run = function (t) {
    void 0 === t && (t = 0);
    var e = this,
        i = e.rAF,
        n = e.currIndex,
        r = e.prizes,
        o = e.prizeFlag,
        s = e.startTime,
        a = e._defaultConfig,
        u = Date.now() - s;

    if (u >= a.accelerationTime && void 0 !== o) {
      this.FPS = u / t, this.endTime = Date.now(), this.stopIndex = n;

      for (var h = 0; ++h;) {
        var c = r.length * h + o - (n >> 0);

        if (O.easeOut(this.FPS, this.stopIndex, c, a.decelerationTime) - this.stopIndex > a.speed) {
          this.endIndex = c;
          break;
        }
      }

      return this.slowDown();
    }

    this.currIndex = (n + O.easeIn(u, .1, a.speed, a.accelerationTime)) % r.length, this.draw(), i(this.run.bind(this, t + 1));
  }, h.prototype.slowDown = function () {
    var t,
        e = this,
        n = e.rAF,
        r = e.prizes,
        o = e.prizeFlag,
        s = e.stopIndex,
        a = e.endIndex,
        u = e._defaultConfig,
        h = Date.now() - this.endTime;
    if (h > u.decelerationTime) return this.startTime = 0, void (null === (t = this.endCallback) || void 0 === t || t.call(this, i({}, r.find(function (t, e) {
      return e === o;
    }))));
    this.currIndex = O.easeOut(h, s, a, u.decelerationTime) % r.length, this.draw(), n(this.slowDown.bind(this));
  }, h.prototype.walk = function () {
    var t = this,
        e = this.config,
        i = e.setInterval;
    (0, e.clearInterval)(this.timer), this.timer = i(function () {
      t.currIndex += 1, t.draw();
    }, 1300);
  }, h.prototype.getGeometricProperty = function (t) {
    var e = t[0],
        i = t[1],
        n = t[2],
        r = t[3],
        o = this.cellWidth,
        s = this.cellHeight,
        a = this._defaultConfig.gutter,
        u = [this.prizeArea.x + (o + a) * e, this.prizeArea.y + (s + a) * i];
    return n && r && u.push(o * n + a * (n - 1), s * r + a * (r - 1)), u;
  }, h.prototype.getWidth = function (t, e) {
    return void 0 === e && (e = 1), s(t, "number") ? t : s(t, "string") ? this.changeUnits(t, this.cellWidth * e + this._defaultConfig.gutter * (e - 1)) : 0;
  }, h.prototype.getHeight = function (t, e) {
    return void 0 === e && (e = 1), s(t, "number") ? t : s(t, "string") ? this.changeUnits(t, this.cellHeight * e + this._defaultConfig.gutter * (e - 1)) : 0;
  }, h.prototype.getOffsetX = function (t, e) {
    return void 0 === e && (e = 1), (this.cellWidth * e + this._defaultConfig.gutter * (e - 1) - t) / 2;
  }, h.prototype.conversionAxis = function (t, e) {
    var i = this.config;
    return [t / i.dpr, e / i.dpr];
  }, h;
}(x);

exports.LuckyGrid = F, exports.LuckyWheel = $;
});

var luckyCanvas = luckyCanvas_cjs_min;

var name = "react-luck-draw";
var version = "0.0.3";

var LuckyWheel = /*#__PURE__*/function (_React$Component) {
  _inherits(LuckyWheel, _React$Component);

  var _super = _createSuper(LuckyWheel);

  function LuckyWheel(props) {
    var _this;

    _classCallCheck(this, LuckyWheel);

    _this = _super.call(this, props);
    _this.myLucky = /*#__PURE__*/React__default['default'].createRef();
    return _this;
  }

  _createClass(LuckyWheel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      this.myLucky.current.setAttribute('package', "".concat(name, "@").concat(version));

      try {
        this.init();
        props.onSuccess && props.onSuccess();
      } catch (err) {
        props.onError && props.onError(err);
      } finally {
        props.onFinally && props.onFinally(err);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.blocks !== prevProps.blocks) {
        this.$lucky.blocks = this.props.blocks;
      }

      if (this.props.prizes !== prevProps.prizes) {
        this.$lucky.prizes = this.props.prizes;
      }

      if (this.props.buttons !== prevProps.buttons) {
        this.$lucky.buttons = this.props.buttons;
      }
    }
  }, {
    key: "init",
    value: function init() {
      var props = this.props;
      console.log(props);
      this.$lucky = new luckyCanvas.LuckyWheel({
        flag: 'WEB',
        width: props.width,
        height: props.height,
        divElement: this.myLucky.current
      }, _objectSpread2(_objectSpread2({}, props), {}, {
        start: function start() {
          props.onStart && props.onStart.apply(props, arguments);
        },
        end: function end() {
          props.onEnd && props.onEnd.apply(props, arguments);
        }
      }));
    }
  }, {
    key: "play",
    value: function play() {
      var _this$$lucky;

      (_this$$lucky = this.$lucky).play.apply(_this$$lucky, arguments);
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this$$lucky2;

      (_this$$lucky2 = this.$lucky).stop.apply(_this$$lucky2, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        ref: this.myLucky
      });
    }
  }]);

  return LuckyWheel;
}(React__default['default'].Component);
LuckyWheel.defaultProps = {
  width: '',
  height: '',
  prizes: [],
  blocks: [],
  buttons: [],
  defaultStyle: {},
  defaultConfig: {}
};

var LuckyGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(LuckyGrid, _React$Component);

  var _super = _createSuper(LuckyGrid);

  function LuckyGrid(props) {
    var _this;

    _classCallCheck(this, LuckyGrid);

    _this = _super.call(this, props);
    _this.myLucky = /*#__PURE__*/React__default['default'].createRef();
    return _this;
  }

  _createClass(LuckyGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      this.myLucky.current.setAttribute('package', "".concat(name, "@").concat(version));

      try {
        this.init();
        props.onSuccess && props.onSuccess();
      } catch (err) {
        props.onError && props.onError(err);
      } finally {
        props.onFinally && props.onFinally(err);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.cols !== prevProps.cols) {
        this.$lucky.cols = this.props.cols;
      }

      if (this.props.rows !== prevProps.rows) {
        this.$lucky.rows = this.props.rows;
      }

      if (this.props.blocks !== prevProps.blocks) {
        this.$lucky.blocks = this.props.blocks;
      }

      if (this.props.prizes !== prevProps.prizes) {
        this.$lucky.prizes = this.props.prizes;
      }

      if (this.props.buttons !== prevProps.buttons) {
        this.$lucky.buttons = this.props.buttons;
      }
    }
  }, {
    key: "init",
    value: function init() {
      var props = this.props;
      this.$lucky = new luckyCanvas.LuckyGrid({
        flag: 'WEB',
        width: props.width,
        height: props.height,
        divElement: this.myLucky.current
      }, _objectSpread2(_objectSpread2({}, props), {}, {
        start: function start() {
          props.onStart && props.onStart.apply(props, arguments);
        },
        end: function end() {
          props.onEnd && props.onEnd.apply(props, arguments);
        }
      }));
    }
  }, {
    key: "play",
    value: function play() {
      var _this$$lucky;

      (_this$$lucky = this.$lucky).play.apply(_this$$lucky, arguments);
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this$$lucky2;

      (_this$$lucky2 = this.$lucky).stop.apply(_this$$lucky2, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        ref: this.myLucky
      });
    }
  }]);

  return LuckyGrid;
}(React__default['default'].Component);
LuckyGrid.defaultProps = {
  width: '',
  height: '',
  cols: 3,
  rows: 3,
  blocks: [],
  prizes: [],
  buttons: [],
  defaultStyle: {},
  activeStyle: {},
  defaultConfig: {}
};

exports.LuckyGrid = LuckyGrid;
exports.LuckyWheel = LuckyWheel;
