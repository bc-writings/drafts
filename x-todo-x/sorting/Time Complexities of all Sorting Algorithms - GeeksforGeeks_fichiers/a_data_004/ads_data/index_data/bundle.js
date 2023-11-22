! function (t) {
  for (var i, s = [], n = 0; n < t.length; n++) i = {
    exports: {}
  }, t[n](s, i.exports, i), s.push(i.exports)
}([function (t, i, s) {
  ! function (t) {
    var i = setTimeout;

    function n() {}

    function h(t) {
      if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof t) throw new TypeError("not a function");
      this.v = 0, this.y = !1, this.p = void 0, this.w = [], u(t, this)
    }

    function e(t, i) {
      for (; 3 === t.v;) t = t.p;
      0 !== t.v ? (t.y = !0, h.b(function () {
        var s = 1 === t.v ? i.onFulfilled : i.onRejected;
        if (null !== s) {
          var n;
          try {
            n = s(t.p)
          } catch (t) {
            return void a(i.promise, t)
          }
          o(i.promise, n)
        } else(1 === t.v ? o : a)(i.promise, t.p)
      })) : t.w.push(i)
    }

    function o(t, i) {
      try {
        if (i === t) throw new TypeError("A promise cannot be resolved with itself.");
        if (i && ("object" == typeof i || "function" == typeof i)) {
          var s = i.then;
          if (i instanceof h) return t.v = 3, t.p = i, void r(t);
          if ("function" == typeof s) return void u((n = s, e = i, function () {
            n.apply(e, arguments)
          }), t)
        }
        t.v = 1, t.p = i, r(t)
      } catch (i) {
        a(t, i)
      }
      var n, e
    }

    function a(t, i) {
      t.v = 2, t.p = i, r(t)
    }

    function r(t) {
      2 === t.v && 0 === t.w.length && h.b(function () {
        t.y || h.m(t.p)
      });
      for (var i = 0, s = t.w.length; i < s; i++) e(t, t.w[i]);
      t.w = null
    }

    function u(t, i) {
      var s = !1;
      try {
        t(function (t) {
          s || (s = !0, o(i, t))
        }, function (t) {
          s || (s = !0, a(i, t))
        })
      } catch (t) {
        if (s) return;
        s = !0, a(i, t)
      }
    }
    h.prototype.catch = function (t) {
      return this.then(null, t)
    }, h.prototype.then = function (t, i) {
      var s = new this.constructor(n);
      return e(this, new function (t, i, s) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof i ? i : null, this.promise = s
      }(t, i, s)), s
    }, h.all = function (t) {
      var i = Array.prototype.slice.call(t);
      return new h(function (t, s) {
        if (0 === i.length) return t([]);
        var n = i.length;

        function h(e, o) {
          try {
            if (o && ("object" == typeof o || "function" == typeof o)) {
              var a = o.then;
              if ("function" == typeof a) return void a.call(o, function (t) {
                h(e, t)
              }, s)
            }
            i[e] = o, 0 == --n && t(i)
          } catch (t) {
            s(t)
          }
        }
        for (var e = 0; e < i.length; e++) h(e, i[e])
      })
    }, h.resolve = function (t) {
      return t && "object" == typeof t && t.constructor === h ? t : new h(function (i) {
        i(t)
      })
    }, h.reject = function (t) {
      return new h(function (i, s) {
        s(t)
      })
    }, h.race = function (t) {
      return new h(function (i, s) {
        for (var n = 0, h = t.length; n < h; n++) t[n].then(i, s)
      })
    }, h.b = function (t) {
      i(t, 0)
    }, h.m = function (t) {
      "undefined" != typeof console && console
    }, h.j = function (t) {
      h.b = t
    }, h.T = function (t) {
      h.m = t
    }, s.exports = h
  }()
}, function (t, i, s) {
  function n() {
    this.g = {}
  }
  n.prototype.on = function (t, i) {
    this.g[t] || (this.g[t] = []);
    var s = this.g[t];
    return s.push(i),
      function () {
        s.splice(s.indexOf(i), 1)
      }
  }, n.prototype.off = function (t, i) {
    var s = this.g[t];
    return s && s.splice(s.indexOf(i), 1), this
  }, n.prototype.trigger = function (t, i) {
    var s = this.g[t];
    if (s)
      for (var n = 0, h = s.length; n < h; n++) s[n](i);
    return this
  }, n.prototype.emit = n.prototype.trigger, s.exports = n
}, function (t, i, s) {
  var n = t[0],
    h = t[1];

  function e() {
    h.call(this), this.u = null, this.f = !1, this.isScrolling = !1, this.animationEngine = null
  }
  for (var o in h.prototype) e.prototype[o] = h.prototype[o];
  e.prototype.attach = function (t) {
    this.u = t, this.element = this.u.getElements()[0], this.f = !this.element.classList.contains("hidden"), this.isScrolling = this.element.classList.contains("scrolling"), this.animationEngine && this.animationEngine.attach(this.element)
  }, e.prototype.detach = function () {
    this.animationEngine && this.animationEngine.detach(this.element), this.u = null, this.f = !1, this.element = null, this.isScrolling = !1
  }, e.prototype.destroy = function () {
    this.u && (this.d(), this.u.destroy())
  }, e.prototype.edit = function (t, i, s) {
    this.u && this.u.edit && this.u.edit(t, i, s)
  }, e.prototype.getComponent = function () {
    return this.u
  }, e.prototype.getProgress = function () {
    return this.animationEngine ? this.animationEngine.getProgress() : this.f ? 1 : 0
  }, e.prototype.setProgress = function (t, i) {
    return this.animationEngine ? i ? this.animationEngine.run(t, i) : (this.animationEngine.setProgress(t), n.resolve()) : n.resolve()
  }, e.prototype.setParameters = function (t) {
    return this.animationEngine && this.animationEngine.setParameters && this.animationEngine.setParameters(t), this
  }, e.prototype.setAnimationEngine = function (t) {
    return this.animationEngine && this.animationEngine.detach.apply(this.animationEngine), this.animationEngine = t, t && this.u && this.animationEngine.attach.apply(this.animationEngine, this.u.getElements()), this
  }, s.exports = e
}, function (t, i, s) {
  function n(t) {
    this.k = t
  }
  n.prototype.on = function (t, i) {
    this.k.addEventListener(t, i)
  }, n.prototype.off = function (t, i) {
    this.k.removeEventListener(t, i)
  }, n.prototype.getElements = function () {
    return this.k ? [this.k] : []
  }, n.prototype.destroy = function () {
    this.k.parentNode.removeChild(this.k), this.k = null
  }, s.exports = n
}, function (t, i, s) {
  function n(t, i) {
    for (var s = i, n = t.length - 1; n >= 0; n--) {
      var h = {};
      h[t[n]] = s, s = h
    }
    return s
  }
  s.exports = {
    route: function (t) {
      return function (i, s, n) {
        return function t(i, s, n, h, e) {
          for (;
            "function" != typeof s && i < n.length;) {
            if (!(s = s[n[i]])) return;
            i++
          }
          if ("function" == typeof s) return s.call(this, n.slice(i), h, e);
          if ("object" == typeof s)
            for (var o in h) o in s && t.call(this, i, s[o], n, h[o], e)
        }.call(this, 0, t, i, s, n)
      }
    },
    pathMin: function (t, i) {
      return function (s, n, h) {
        return function t(i, s, n, h, e) {
          if (i <= n.length) return s.call(this, n, h, e);
          for (var o in h) {
            var a = n.slice(0);
            a.push(o), t.call(this, i, s, a, h[o], e)
          }
        }.call(this, t, i, s, n, h)
      }
    },
    expand: function (t) {
      return function (i, s, h) {
        t.call(this, n(i, s), h)
      }
    },
    normalize: n,
    overlap: function (t) {
      return function (i, s, n) {
        for (var h = 0; h < t.length; h++) t[h].call(this, i, s, n)
      }
    }
  }
}, function (t, i, s) {
  function n(t) {
    if ("string" == typeof t) throw new Error("Type not found: " + t);
    return t
  }
  n.setTypesRegistry = function (t) {
    t
  }, n.deserialize = function (t) {
    return t ? new(n(t.type))(t) : null
  }, s.exports = n
}, function (t, i, s) {
  s.exports = {
    filter: void 0 !== document.body.style.filter ? "filter" : "webkit-filter",
    transform: void 0 !== document.body.style.transform ? "transform" : "webkit-transform",
    transformOrigin: void 0 !== document.body.style.transformOrigin ? "transform-origin" : "webkit-transform-origin",
    transition: void 0 !== document.body.style.transition ? "transition" : "webkit-transition",
    documentHidden: void 0 !== document.hidden ? "hidden" : "webkitHidden",
    documentVisibilityChange: void 0 !== document.hidden ? "visibilitychange" : "webkitvisibilitychange"
  }
}, function (t, i, s) {
  var n = t[4];

  function h() {
    this.gestures = {
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      keyDown: null,
      keyUp: null,
      keyRight: null,
      keyLeft: null,
      wheelUp: null,
      wheelDown: null,
      tap: null,
      tapRight: null,
      tapLeft: null,
      timed: null
    }
  }
  h.prototype.edit = n.pathMin(1, function (t, i) {
    let s = t.slice(-1)[0];
    "gestures" === s && Object.keys(i).forEach(function (t) {
      this.gestures[t] = i[t]
    }.bind(this)), 2 === t.length && (this.gestures[s] = i), 3 === t.length && (this.gestures[t[1]][s] = i), "transition" === t[t.length - 2] && (this.gestures[t[1]].transition[s] = i)
  }), h.prototype.getTargetTransition = function (t) {
    let i = this.transformGesture(t);
    return this.gestures[i] && this.gestures[i].transition ? this.gestures[i].transition : null
  }, h.prototype.getTimedTransition = function () {
    return this.gestures.timed
  }, h.prototype.getTargetId = function (t) {
    let i = this.transformGesture(t);
    return this.gestures[i] && this.gestures[i].target ? this.gestures[i].target : null
  }, h.prototype.getGesture = function (t) {
    return this.gestures[t]
  }, h.prototype.getGestures = function () {
    return this.gestures
  }, h.prototype.getEdge = function (t) {
    return this.gestures[t] ? this.gestures[t].edge : null
  }, h.prototype.transformGesture = function (t) {
    switch (t) {
      case "keyLeft":
        return "swipeRight";
      case "keyRight":
        return "swipeLeft";
      case "keyDown":
        return "swipeUp";
      case "keyUp":
      case "wheelUp":
        return "swipeDown";
      case "wheelDown":
        return "swipeUp";
      default:
        return t
    }
    return t
  }, s.exports = h
}, function (t, i, s) {
  function n(t, i, s) {
    this.element = t, this.configData = i, this.successCb = s, this.stripeCheckoutHandler = null, this.ot = !1, this.requireStripeAPI = this.requireStripeAPI.bind(this), this.setStripeAPIParams = this.setStripeAPIParams.bind(this), this.updateConfig = this.updateConfig.bind(this), this.attachModuleListener = this.attachModuleListener.bind(this), this.detachModuleListener = this.detachModuleListener.bind(this), this.resetModule = this.resetModule.bind(this), this.openStripeModal = this.openStripeModal.bind(this), this.handleStripeModalOpen = this.handleStripeModalOpen.bind(this), this.handleStripeModalClose = this.handleStripeModalClose.bind(this), this.forwardIframeClick = this.forwardIframeClick.bind(this), this.simulateIframeTouch = this.simulateIframeTouch.bind(this), this.toggleSimulatedTouchMove = this.toggleSimulatedTouchMove.bind(this), this.notifyTransitionProgress = this.notifyTransitionProgress.bind(this), window.activeStripeConfig = null, document.getElementById("stripe-api") ? this.attachModuleListener() : this.requireStripeAPI(() => {
      this.attachModuleListener()
    })
  }
  n.prototype.constructor = n, n.prototype.requireStripeAPI = function (t) {
    const i = document.createElement("script");
    i.id = "stripe-api", i.type = "text/javascript", i.async = !0, i.src = "", i.onload = t, document.head.appendChild(i)
  }, n.prototype.setStripeAPIParams = function () {
    const t = document.querySelectorAll(".stripe_checkout_app");
    t.length && Array.from(t).forEach(t => document.body.removeChild(t)), this.stripeCheckoutHandler = StripeCheckout.configure({
      key: this.configData.key,
      image: this.configData.image,
      locale: "auto",
      allowRememberMe: !1,
      token: t => {
        if (!t) return !1;
        this.handleSuccess(t)
      }
    })
  }, n.prototype.updateConfig = function (t) {
    this.stripeCheckoutHandler && this.stripeCheckoutHandler.close();
    let i = !0;
    if (t.amount || "number" == typeof t.amount)
      if ("string" == typeof t.amount) {
        if (!(i = function (t) {
            return t.match(/^([1-9]{1}[0-9]{0,2})(\,\d{3})*(\.\d{2})?$|^(\$)?([1-9]{1}[0-9]{0,2})(\d{3})*(\.\d{2})?$|^(0)?(\.\d{2})?$|^(\$0)?(\.\d{2})?$|^(\$\.)(\d{2})?$/gm)
          }(t.amount) || !isNaN(+t.amount))) return;
        t.amount.includes(".") ? (t.amount = t.amount.split("."), t.amount[1] = t.amount[1].slice(0, 2), t.amount = 100 * parseFloat(t.amount.join("."))) : t.amount = 100 * parseInt(t.amount)
      } else "number" == typeof t.amount && (t.amount = 100 * parseInt(t.amount));
    else t.amount = 0;
    isNaN(+t.amount) || (t.amount = +t.amount, this.configData = t, t.key && t.key !== this.configData.key && (this.setStripeAPIParams(), window.activeStripeConfig = this.element.dataset.id))
  }, n.prototype.attachModuleListener = function () {
    this.element.classList.add("stripe-link"), this.element.addEventListener("click", this.handleStripeModalOpen)
  }, n.prototype.detachModuleListener = function () {
    this.stripeCheckoutHandler && window.activeStripeConfig === this.element.dataset.id && this.stripeCheckoutHandler.close(), this.element.classList.remove("stripe-link"), this.element.removeEventListener("click", this.handleStripeModalOpen);
    const t = document.querySelector(".stripe_checkout_app");
    if (t && (t.contentWindow.addEventListener("mousedown", this.simulateIframeTouch), t.contentWindow.addEventListener("mousemove", this.simulateIframeTouch), t.contentWindow.addEventListener("mouseup", this.simulateIframeTouch)), !document.getElementsByClassName("stripe-link").length) {
      const t = document.getElementById("stripe-api");
      t && document.head.removeChild(t)
    }
  }, n.prototype.resetModule = function () {
    this.stripeCheckoutHandler && window.activeStripeConfig === this.element.dataset.id && this.stripeCheckoutHandler.close()
  }, n.prototype.openStripeModal = function (t) {
    if (!this.ot) {
      this.stripeCheckoutHandler.open(this.configData), t.preventDefault();
      const i = document.querySelector(".stripe_checkout_app");
      i && (i.contentWindow.addEventListener("click", this.forwardIframeClick), i.contentWindow.addEventListener("mousedown", this.simulateIframeTouch), i.contentWindow.addEventListener("mouseup", this.simulateIframeTouch))
    }
  }, n.prototype.handleStripeModalOpen = function (t) {
    window.activeStripeConfig !== this.element.dataset.id ? (this.setStripeAPIParams(), window.activeStripeConfig = this.element.dataset.id, this.openStripeModal(t)) : this.openStripeModal(t)
  }, n.prototype.handleStripeModalClose = function () {
    this.stripeCheckoutHandler.close()
  }, n.prototype.forwardIframeClick = function (t) {
    t.target.classList.contains("trackingArea") && t.target.parentElement && t.target.parentElement.classList.contains("close") && this.stripeCheckoutHandler.close()
  }, n.prototype.simulateIframeTouch = function (t) {
    let i = document.querySelector(".stripe_checkout_app");
    if (i && i.contentWindow && (i = i.contentWindow.document, t.target.classList.contains("same-address") || t.target.classList.contains("addressSelector") || i.querySelector(".same-address").contains(t.target) || i.querySelector(".addressSelector").contains(t.target))) {
      const i = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend"
        } [t.type],
        s = new MouseEvent(i, t);
      t.target.dispatchEvent(s), this.toggleSimulatedTouchMove(i)
    }
  }, n.prototype.toggleSimulatedTouchMove = function (t) {
    const i = document.querySelector(".stripe_checkout_app");
    i && "touchstart" === t ? i.contentWindow.addEventListener("mousemove", this.simulateIframeTouch) : i && "touchend" === t && i.contentWindow.removeEventListener("mousemove", this.simulateIframeTouch)
  }, n.prototype.notifyTransitionProgress = function (t) {
    this.ot = t % 1 != 0
  }, n.prototype.handleSuccess = function (t) {
    this.successCb()
  }, s.exports = n
}, function (t, i, s) {
  var n = t[1],
    h = t[4],
    e = t[5],
    o = t[6],
    a = t[7],
    r = t[8];

  function u(t, i, s, h) {
    n.call(this), i || (i = t.$id), this.elementId = t.$id, this.inAnimation = null, this.outAnimation = null, this.currentAnimation = null, this.q = 10, this.M = this.O.bind(this), this.x = this.D.bind(this), this.I = null, this.r = new a, this.P = "", this.S = !1, this.forward = h.forward || !0, this.currentProgress = h.progress || 0, this.role = h.role || "end", this.visible = h.visible || !1, this.locked = !1, this.V = 0, this.$ = 0, this.C = 0, this.G = 0, this.initialProperties = {
      transform: this.element ? this.element.style[o.transform] : ""
    }, this.J = null, this.N = null, this.U = null, this.element = document.querySelector('[data-id="' + i + '"]'), s && (this.element = s)
  }
  u.prototype = Object.create(n.prototype), u.prototype.constructor = n.constructor, u.prototype.isStubUrl = function (t) {
    return "string" != typeof t || t.indexOf("//") < 0 || t.indexOf(".") < 0 || "//" === t.substr(-2) || "about:blank" === t
  }, u.prototype._ = function () {
    var t = this.r.getGesture("tap");
    t && this.trigger("stateChange", {
      progress: 0,
      settleOnTarget: 1,
      gesture: "tap",
      edge: t.edge,
      target: t.target,
      transition: t.transition
    })
  }, u.prototype.z = function (t) {
    switch (this.I) {
      case "internal":
        this.A();
        break;
      case "external":
        this.B();
        break;
      case "checkoutModule":
        this.F()
    }
    this.I = t
  }, u.prototype.A = function () {
    this.element && (this.element.style.cursor = "", this.element.removeEventListener("mousedown", this.M), this.element.removeEventListener("mouseup", this.x), this.element.removeEventListener("touchstart", this.M), this.element.removeEventListener("touchend", this.x))
  }, u.prototype.B = function () {
    if (this.element && this.N) {
      if (this.N.parentNode.replaceChild(this.element, this.N), "DIV" === this.element.nodeName)
        for (; this.N.childNodes.length > 0;) this.element.appendChild(this.N.firstChild);
      this.element.dataset.id = this.N.dataset.id, delete this.N.dataset.id, this.J && this.element.setAttribute("style", this.J), this.J = null, this.N = null
    }
  }, u.prototype.F = function () {
    this.U && (this.U.detachModuleListener(), this.U = null, this.element.style.cursor = "")
  }, u.prototype.H = function () {
    this.element && (this.element.style.cursor = "pointer", this.element.addEventListener("mousedown", this.M), this.element.addEventListener("mouseup", this.x), this.element.addEventListener("touchstart", this.M), this.element.addEventListener("touchend", this.x))
  }, u.prototype.K = function () {
    if (this.element) {
      if (!this.N)
        if (this.N = document.createElement("a"), this.N.dataset.id = this.element.dataset.id, delete this.element.dataset.id, this.J = this.element.getAttribute("style"), this.J && this.N.setAttribute("style", this.J), this.N.style.textDecoration = "none", this.element.removeAttribute("style"), "svg" === this.element.nodeName && (this.element.style.position = "absolute", this.element.style.width = "100%", this.element.style.height = "100%"), this.element.parentNode.replaceChild(this.N, this.element), "DIV" === this.element.nodeName)
          for (; this.element.childNodes.length > 0;) this.N.appendChild(this.element.firstChild);
        else this.N.appendChild(this.element);
      this.N.href = this.P, this.S ? this.N.target = "_blank" : this.N.removeAttribute("target")
    }
  }, u.prototype.L = function (t) {
    this.U || "object" != typeof t || (this.U = new r(this.element, t, () => {
      this._()
    }))
  }, u.prototype.resetAllModules = function () {
    this.U && this.U.resetModule()
  }, u.prototype.Q = function (t) {
    switch (this.I) {
      case "internal":
        this.R(t.gestures), this.r.getGesture("tap") ? this.H() : this.A();
        break;
      case "external":
        if (t.link && t.link.href) {
          this.W(t.link);
          const i = this.isStubUrl(this.P);
          this.P && !i ? this.K() : this.B()
        }
        break;
      case "checkoutModule":
        this.U || this.L(t.stripeConfig), this.X(t)
    }
  }, u.prototype.R = function (t) {
    let i = ["gestures"],
      s = t;
    if (t.tap && 1 === Object.keys(t.tap).length) {
      let n = Object.keys(t.tap)[0];
      i = ["gestures", "tap", n], s = t.tap[n]
    }
    this.r.edit(i, s)
  }, u.prototype.W = function (t) {
    "string" == typeof t ? this.P = t.indexOf(":") < 0 ? `https://${t}` : t : t ? (this.P = t.href.indexOf(":") < 0 ? `https://${t.href}` : t.href, this.S = t.targetBlank) : (this.P = "", this.S = !1)
  }, u.prototype.X = function (t) {
    t.gestures && this.R(t.gestures), this.U && "object" == typeof t.stripeConfig && this.U.updateConfig(t.stripeConfig)
  }, u.prototype.Y = function (t) {
    var i = this.N || this.element;
    if (null === t) this.inAnimation && this.inAnimation.detach(), this.inAnimation = null;
    else if (t.type) {
      var s = e(t.type);
      t.buildType = "in", t.initialProperties = this.initialProperties, this.inAnimation instanceof s ? this.inAnimation.setOptions(t) : (this.inAnimation && this.inAnimation.detach(), this.inAnimation = e.deserialize(t), this.inAnimation.attach(i))
    } else this.inAnimation.setOptions(t)
  }, u.prototype.Z = function (t) {
    var i = this.N || this.element;
    if (null === t) this.outAnimation && this.outAnimation.detach(), this.outAnimation = null;
    else if (t.type) {
      var s = e(t.type);
      t.buildType = "out", t.initialProperties = this.initialProperties, this.outAnimation instanceof s ? this.outAnimation.setOptions(t) : (this.outAnimation && this.outAnimation.detach(), this.outAnimation = e.deserialize(t), this.outAnimation.attach(i))
    } else this.outAnimation.setOptions(t)
  }, u.prototype.edit = h.expand(function (t) {
    void 0 !== t.inAnimation && this.Y(t.inAnimation), void 0 !== t.outAnimation && this.Z(t.outAnimation), void 0 !== t.isLink && (t.isLink !== this.I && this.z(t.isLink, t), this.Q(t)), t.gestures && t.gestures.syntheticGesture && this.R(t.gestures)
  }), u.prototype.detach = function () {
    this.currentAnimation && this.currentAnimation.detach(), this.currentAnimation = null
  }, u.prototype.replaceElement = function (t) {
    if (this.element) return this.tt = document.createRange(), this.tt.selectNode(this.element), this.it = this.tt.extractContents(), this.tt.insertNode(t), this.element = t, this.currentAnimation && (this.currentAnimation.detach(), this.currentAnimation.attach(t)), this.element
  }, u.prototype.svgToNewDomWrapper = function () {
    if (!this.element || !this.element.parentNode) return;
    this.J = this.element.getAttribute("style");
    const t = this.element.getAttribute("height"),
      i = this.element.getAttribute("width"),
      s = document.createElement("div");
    s.setAttribute("style", this.J), s.dataset.id = this.element.dataset.id, s.style.height = t, s.style.width = i, this.element.parentNode.replaceChild(s, this.element), this.element = s
  }, u.prototype.O = function (t) {
    this.V = t.screenX, this.$ = t.screenY
  }, u.prototype.D = function (t) {
    this.C = t.screenX, this.G = t.screenY;
    var i = Math.abs(this.V - this.C),
      s = Math.abs(this.$ - this.G);
    i < this.q && s < this.q && this.r.getGesture("tap") && this._()
  }, u.prototype.setProgress = function (t) {
    this.currentAnimation.setProgress(t, !1)
  }, u.prototype.syntheticBuildIn = function (t) {
    if (0 === t) {
      this.currentAnimation = this.inAnimation;
      var i = this.N || this.element;
      this.currentAnimation.attach(i), this.currentAnimation.setProgress(t), this.shouldAnimate = !0
    } else 1 === t && this.updateState({
      progress: t,
      forward: !0,
      role: "end",
      visible: !0
    }, !0)
  }, u.prototype.setInitialState = function (t) {
    this.updateState(t, !1), this.locked = !1;
    var i = this.N || this.element,
      s = null;
    if ("start" === this.role && this.forward ? s = this.outAnimation : "start" !== this.role || this.forward ? "end" === this.role && this.forward ? s = this.inAnimation : "end" !== this.role || this.forward || (s = this.outAnimation) : s = this.inAnimation, this.shouldAnimate = !!s, 0 === this.currentProgress && this.currentAnimation && this.shouldAnimate && (this.currentAnimation.setProgress(0), this.currentAnimation.detach(), this.currentAnimation = null), s && this.currentAnimation !== s && (!this.currentAnimation || this.currentAnimation && !this.currentAnimation.isActive()) && (this.currentAnimation && this.currentAnimation.detach(), this.currentAnimation = s, this.currentAnimation.attach(i), "time" === this.currentAnimation.animationBasis)) {
      var n = "start" === this.role ? 1 : 0;
      this.currentAnimation.setProgress(n)
    }
    this.shouldAnimate || s || !this.currentAnimation || 0 !== this.currentProgress || (this.currentAnimation.detach(), this.currentAnimation = null, this.element && this.visible && this.element.classList.remove(this.st))
  }, u.prototype.updateState = function (t, i) {
    this.U ? this.U.notifyTransitionProgress(t.progress) : this.ht && this.et && this.et.deactivateOffscreen && this.notifyTransitionProgress(t.progress), this.currentProgress = t.progress, this.forward = t.forward, this.role = t.role, this.visible = t.visible, i && this.updateAnimation()
  }, u.prototype.updateAnimation = function () {
    if (!this.locked && this.currentAnimation && this.shouldAnimate)
      if ("position" === this.currentAnimation.animationBasis) this.setProgress(this.currentProgress);
      else if ("time" === this.currentAnimation.animationBasis)
      if ("start" === this.role && this.currentAnimation.isActive() && !this.forward) {
        this.locked = !0;
        var t = this.currentAnimation.getProgress();
        this.currentAnimation.nt = this.currentAnimation.duration * (1 - t), this.currentAnimation.setProgress(t), this.currentAnimation.ut = !1, this.currentAnimation.runToEnd(1), this.currentAnimation.nt = this.currentAnimation.duration
      } else "end" === this.role && this.currentProgress >= this.currentAnimation.delay && !this.currentAnimation.isActive() ? this.currentAnimation.runToEnd(1) : "start" === this.role && 1 - this.currentProgress >= this.currentAnimation.delay && !this.currentAnimation.isActive() && this.currentAnimation.runToEnd(0)
  }, s.exports = u
}, function (t, i, s) {
  var n = t[1];

  function h(t, i) {
    this.k = t, this.ii = this.ti.bind(this), this.s = this.h.bind(this), window.addEventListener("resize", this.ii), this.ii(), this.enableScroll(), n.call(this)
  }
  for (var e in n.prototype) h.prototype[e] = n.prototype[e];
  h.prototype.h = function (t) {
    0 === this.k.scrollTop || this.si - this.k.scrollTop === this.hi ? setTimeout(function () {
      this.trigger("scrolling", !1)
    }.bind(this), 2e3) : this.trigger("scrolling", !0)
  }, h.prototype.ti = function () {
    this.si = this.k.scrollHeight, this.hi = this.k.clientHeight
  }, h.prototype.enableScroll = function () {
    this.k.addEventListener("scroll", this.s)
  }, h.prototype.disableScroll = function () {
    this.k.removeEventListener("scroll", this.s)
  }, s.exports = h
}, function (t, i, s) {
  var n = t[1];

  function h() {
    n.call(this), this.ni = [], this.nt = 0, this.ei = 0, this.oi = 0, this.ri = 0, this.ui = this.ai.bind(this), this.fi = !1
  }
  for (var e in n.prototype) h.prototype[e] = n.prototype[e];
  h.prototype.setSequence = function (t) {
    this.ni = t, this.ni.forEach(function (t) {
      t.time > this.nt && (this.nt = t.time)
    }.bind(this))
  }, h.prototype.play = function () {
    this.fi = !1, this.ei = Date.now(), this.oi = this.ei + this.nt, requestAnimationFrame(this.ui)
  }, h.prototype.skip = function () {
    for (this.fi = !0; this.ri < this.ni.length;) this.ci(this.ni[this.ri])
  }, h.prototype.ci = function (t) {
    t.action(), this.ri++
  }, h.prototype.stop = function () {
    this.fi = !0, cancelAnimationFrame(this.ui)
  }, h.prototype.clear = function () {
    this.nt = 0, this.ei = 0, this.oi = 0, this.ri = 0, this.ni = [], this.fi = !1
  }, h.prototype.ai = function () {
    if (!this.fi) {
      var t = Date.now();
      t >= this.ei + this.ni[this.ri].time && this.ci(this.ni[this.ri]), t > this.oi ? this.trigger("ended") : requestAnimationFrame(this.ui)
    }
  }, s.exports = h
}, function (t, i, s) {
  var n = t[2],
    h = t[3],
    e = t[4],
    o = t[5],
    a = t[9],
    r = t[7],
    u = t[10],
    c = t[11];

  function f() {
    n.call(this), this.t = {}, this.currentProgress = 0, this.previousProgress = 0, this.forward = !0, this.role = "start", this.splash = !1, this.visible = !1, this.boundHandleProgress = this.handleProgress.bind(this), this.i = null, this.s = this.h.bind(this), this.r = new r, this.n = !1, this.e = !1, this.o = new c, this.resetAllModules = this.resetAllModules.bind(this), this.on("resetAllModules", this.resetAllModules)
  }
  f.prototype = Object.create(n.prototype), f.prototype.a = function (t, i, s, n, h) {
    for (var e in t) {
      var r = t[e],
        u = a;
      try {
        u = o(r.type)
      } catch (t) {}
      var c = i + e;
      this.t[c] || (this.t[c] = {}), this.t[c].id || (this.t[c].id = r.$id);
      var f = !1;
      if (this.t[c].instance && (this.t[c].instance.edit ? u && this.t[c].type !== u && (f = !0) : (f = !0, r.type || (u = this.t[c].type))), !this.t[c].instance || !this.t[c].instance.edit || f) {
        if (f && this.t[c].instance.detach && this.t[c].instance.detach(), "function" == typeof u) {
          var l = this.getContentElement(c),
            d = {
              visible: this.visible,
              progress: this.currentProgress,
              role: this.role,
              forward: this.forward
            };
          this.t[c].instance = new u(r, this.t[c].id, l, d), this.t[c].instance && this.t[c].instance.on && (this.t[c].instance.on("stateChange", function (t) {
            this.trigger("stateChange", t)
          }.bind(this)), this.t[c].instance.on("sendAnalytics", function (t) {
            this.trigger("sendAnalytics", t)
          }.bind(this)))
        }
        this.t[c].type = u
      }
      var p = n || h;
      this.t[c].instance.edit && this.t[c].instance.edit([], r, p), this.t[c].instance instanceof a && r && r.content && this.a(r.content, i + e + "/", s, p)
    }
  }, f.prototype.getContentElement = function (t) {
    var i = this.u.getElements()[0],
      s = this.t[t],
      n = i.querySelectorAll('[data-id="' + s.id + '"]');
    if (n.length) {
      if (1 === n.length) return n[0];
      if (n.length > 1) {
        for (var h = t.split("/"), e = i.childNodes[0].childNodes, o = 0; o < h.length; o++) {
          var a = e[parseInt(h[o])];
          if (!a.childNodes) break;
          e = a.childNodes
        }
        return a || n[0]
      }
      return n[0]
    }
    return null
  }, f.prototype.resetAllModules = function () {
    for (let t in this.t) {
      const i = this.t[t];
      i && i.instance && i.instance.resetAllModules()
    }
  }, f.prototype.edit = e.pathMin(1, function (t, i, s) {
    var n = s || "content" === t[0];
    if ("$id" === t[0]) return this.getComponent() && this.detach(this.getComponent()), this.attach(new h(document.querySelector('[data-id="' + i + '"]')));
    "splash" === t[0] && (this.splash = i), "scrollReset" === t[0] && (this.e = i);
    var o = "gestures" === t[0];
    if (o && this.r.edit(t, i), !o && n) {
      var a = e.normalize(s ? t.slice(2) : t.slice(1), i);
      return this.a(a, "", t, this.f, this.currentProgress)
    }
  }), f.prototype.scrollCheck = function () {
    var t = this.u.getElements()[0];
    return this.i && (this.i.disableScroll(), this.i.off("scrolling", this.s), this.i = null), "scroll" === window.getComputedStyle(t).overflowY && (this.i = new u(t), this.i.on("scrolling", this.s), !0)
  }, f.prototype.h = function (t) {
    this.trigger("scrolling", t), this.r.getTimedTransition() && this.r.getTimedTransition().resetOnTouch && this.checkTimed()
  }, f.prototype.checkTimed = function () {
    this.clearTimed();
    var t = this.r.getTimedTransition();
    t && this.c(t)
  }, f.prototype.c = function (t) {
    let i = [{
      time: t.delay,
      action: function () {
        this.trigger("timed", {
          transition: t.transition,
          target: t.target,
          progress: 0,
          settleOnTarget: 1,
          gesture: "timed",
          edge: t.edge
        })
      }.bind(this)
    }];
    this.o.setSequence(i), this.o.play()
  }, f.prototype.clearTimed = function () {
    this.o.stop(), this.o.clear()
  }, f.prototype.syntheticBuildIn = function (t) {
    for (var i in this.t) {
      var s = this.t[i].instance;
      s instanceof a && s && s.inAnimation && s.syntheticBuildIn(t)
    }
  }, f.prototype.setProgress = function (t, i) {
    var s = n.prototype.setProgress.call(this, t, i);
    if (1 !== this.splash || i) {
      if (2 === this.splash && i) {
        for (var h in this.currentProgress = 1, this.forward = !0, this.role = "end", this.splash = !1, this.t) {
          var e = this.t[h].instance;
          e instanceof a && e.updateState({
            progress: this.currentProgress,
            forward: this.forward,
            role: this.role,
            visible: this.visible
          }, !1)
        }
        this.syntheticBuildIn(1)
      }
    } else this.splash++, this.syntheticBuildIn(0);
    return s
  }, f.prototype.handleProgress = function (t) {
    this.splash || this.setContentState(t, !1), this.isScrolling && (!this.n && t > 0 && t < 1 && (this.element.style.overflowY = "hidden", this.n = !0), (this.n && 1 === t || 0 === t) && (this.element.style.overflowY = "", this.n = !1)), this.animationEngine && (this.visible = this.animationEngine.l)
  }, f.prototype.setContentState = function (t) {
    for (var i in this.previousProgress = this.currentProgress, this.currentProgress = t, "start" === this.role && this.currentProgress < this.previousProgress ? this.forward = !0 : "start" === this.role && this.currentProgress > this.previousProgress ? this.forward = !1 : "end" === this.role && this.currentProgress > this.previousProgress ? this.forward = !0 : "end" === this.role && this.currentProgress < this.previousProgress && (this.forward = !1), this.t) {
      var s = this.t[i].instance;
      s instanceof a && s.updateState({
        progress: this.currentProgress,
        forward: this.forward,
        role: this.role,
        visible: this.visible
      }, !0)
    }
  }, f.prototype.setTransition = function (t) {
    if (this.clearTimed(), this.forward = !(t.appDirection < 0), this.role = t.role || "start", this.animationEngine && this.animationEngine.off("progress", this.boundHandleProgress), n.prototype.setAnimationEngine.call(this, t.engine), this.animationEngine && (this.animationEngine.on("progress", this.boundHandleProgress), this.visible = this.animationEngine.l), !this.splash)
      for (var i in this.t) {
        var s = this.t[i].instance;
        s instanceof a && s.setInitialState({
          progress: this.currentProgress,
          forward: this.forward,
          role: this.role,
          visible: this.visible
        }, !1)
      }
    n.prototype.setParameters.call(this, {
      role: t.role,
      appDirection: "start" === t.role ? -t.appDirection : t.appDirection,
      orientation: t.orientation,
      elementIds: t.elementIds || {}
    })
  }, f.prototype.getTargetTransition = function (t) {
    return this.r.getTargetTransition(t)
  }, f.prototype.getTargetId = function (t) {
    return this.r.getTargetId(t)
  }, f.prototype.getTimedTransition = function () {
    return this.r.getTimedTransition()
  }, f.prototype.getGestureEdge = function (t) {
    return this.r.getEdge(t)
  }, f.prototype.resetAnimations = function () {
    this.animationEngine && this.animationEngine.detach(), this.element && "start" === this.role && this.e && (this.element.scrollTop = 0)
  }, s.exports = function (t) {
    var i = new f;
    return i.edit([], t), i
  }
}, function (t, i, s) {
  var n = t[9],
    h = t[4];

  function e() {
    n.apply(this, arguments), this.rt = "", this.J = "", this.wt = ""
  }
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.detach = function () {
    this.element.style = this.J, this.J = "", this.wt = "", n.prototype.detach.call(this)
  }, e.prototype.ft = function (t) {
    this.element && (this.J = this.element.style, this.wt = this.element.dataset.id);
    var i = this.element.getElementsByTagName("image")[0],
      s = i && i.parentElement && "svg" !== i.parentElement.tagName;
    if (i && !1 === s && i.setAttributeNS("http://www.w3.org/1999/xlink", "href", t.src), ("svg" === this.element.tagName || "SVG" === this.element.tagName) && (!i || !0 === s) && t.src) {
      var n = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        h = this.element.getAttribute("viewBox"),
        e = h.split(" "),
        o = e[2],
        a = e[3];
      n.setAttribute("width", o), n.setAttribute("height", a), n.setAttribute("viewBox", h);
      var r = document.createElementNS("http://www.w3.org/2000/svg", "image");
      r.setAttributeNS("http://www.w3.org/1999/xlink", "href", t.src), r.setAttribute("width", o), r.setAttribute("height", a), n.appendChild(r), n.style = this.J, n.dataset.id = this.wt, n.setAttribute("preserveAspectRatio", "none"), r.setAttribute("preserveAspectRatio", "none"), this.vt = this.replaceElement(n)
    }
  }, e.prototype.edit = h.overlap([n.prototype.edit, h.expand(function (t) {
    t.src && (this.rt = t.src, this.element && this.ft(t)), t.maskUpdate && this.maskUpdate(t.maskUpdate)
  })]), e.prototype.maskUpdate = function (t) {
    var i = this.element.querySelector("defs:first-of-type > mask:first-of-type > use:first-of-type");
    if (i) {
      i.setAttribute("x", t.x), i.setAttribute("y", t.y);
      var s = i.querySelector("path:first-of-type");
      s && s.setAttribute("d", t.d)
    }
  }, s.exports = e
}, function (t, i, s) {
  function n(t) {
    this.lt = [], this.at = null, this.v = null, this.ct = 0, this.Dt = 0, null != t && this.from(t)
  }

  function h(t) {
    return t
  }
  n.prototype.to = function (t, i, s, n) {
    return 0 === this.lt.length && (this.ct = Date.now(), this.Dt = 0), this.lt.push([t, null !== i ? i : h, null !== s ? s : 100, n]), this
  }, n.prototype.from = function (t) {
    for (this.v = this.yt(null, t), this.at = t; this.lt.length;) {
      var i = this.lt.shift()[3];
      i && i(!0)
    }
    return this.ct = Date.now(), this.Dt = 0, this
  }, n.prototype.bt = function (t, i, s, n) {
    if (s instanceof Object)
      if (s instanceof Array)
        for (var h = 0, e = s.length; h < e; h++) t[h] = this.bt(t[h], i[h], s[h], n);
      else
        for (var o in s) t[o] = this.bt(t[o], i[o], s[o], n);
    else t = i + n * (s - i);
    return t
  }, n.prototype.yt = function t(i, s) {
    if ("number" == typeof s) return s;
    for (var n in i || (i = Array.isArray(s) ? [] : {}), s) i[n] = t(i[n], s[n]);
    return i
  }, n.prototype.get = function (t) {
    if (!this.lt.length) return this.v;
    t || (t = this.Dt || Date.now());
    var i = this.lt[0],
      s = (t - this.ct) / i[2];
    if (s >= 1) {
      this.v = this.yt(this.v, i[0]), this.ct = this.ct + i[2], this.at = i[0];
      var n = i[3];
      n && n(!1), this.lt.shift()
    } else this.v = this.bt(this.v, this.at, i[0], i[1](s));
    return this.v
  }, n.prototype.isActive = function () {
    return this.lt.length > 0
  }, n.prototype.halt = function () {
    return this.from(this.get())
  }, n.prototype.pause = function () {
    return this.Dt = Date.now(), this
  }, n.prototype.isPaused = function () {
    return !!this.Dt
  }, n.prototype.resume = function () {
    var t = this.Dt - this.ct;
    return this.ct = Date.now() - t, this.Dt = null, this
  }, s.exports = n
}, function (t, i, s) {
  var n = t[0],
    h = t[14],
    e = t[1],
    o = t[5];

  function a(t) {
    e.call(this), this.element = null, this.transitionable = new h(0), this.l = !0, this.st = "hidden", this.qi = null, this.nt = 350, this.pi = 0, this.yi = null, this.ut = !1, this.Ai = this.Ei.bind(this), this.Oi = 0, this.appDirection = 1, this.orientation = 0, this.role = "start", this.elementIds = {}, t && this.setOptions(t)
  }
  for (var r in e.prototype) a.prototype[r] = e.prototype[r];
  a.prototype.setParameters = function (t) {
    void 0 !== t.appDirection && (this.appDirection = t.appDirection), void 0 !== t.orientation && (this.orientation = t.orientation), void 0 !== t.role && (this.role = t.role), void 0 !== t.elementIds && (this.elementIds = t.elementIds)
  }, a.prototype.setOptions = function (t) {
    void 0 !== t.curve && (this.qi = o(t.curve)), void 0 !== t.duration && (this.nt = t.duration), void 0 !== t.margin && (this.pi = t.margin)
  }, a.prototype.attach = function (t) {
    this.element = t, this.l = !t.classList.contains(this.st)
  }, a.prototype.detach = function () {
    this.element && (this.element.style = ""), this.element = null
  }, a.prototype.show = function () {
    !this.l && this.element && this.element.classList.remove(this.st), this.l = !0
  }, a.prototype.hide = function () {
    this.l && this.element && this.element.classList.add(this.st), this.l = !1
  }, a.prototype.isActive = function () {
    return this.transitionable.isActive()
  }, a.prototype.getProgress = function () {
    return this.transitionable.get()
  }, a.prototype.setProgress = function (t, i) {
    return new n(function (s) {
      if (i) {
        var n = this.qi,
          h = this.nt;
        "object" == typeof i && (i.curve && (n = i.curve), i.duration && (h = i.duration)), this.transitionable.to(t, n, h, s)
      } else this.transitionable.from(t), s();
      this.step()
    }.bind(this))
  }, a.prototype.run = function (t, i) {
    return this.ut ? this.yi : (this.ut = !0, requestAnimationFrame(this.Ai), this.yi = void 0 !== t ? this.setProgress(t, i) : n.resolve(), this.yi)
  }, a.prototype.Ei = function () {
    this.isActive() ? requestAnimationFrame(this.Ai) : this.ut = !1, this.step()
  }, a.prototype.step = function () {
    this.Oi = this.getProgress(), this.Oi && !this.l ? this.show() : !this.Oi && this.l && this.hide(), this.trigger("progress", this.Oi)
  }, s.exports = a
}, function (t, i, s) {
  var n = t[15],
    h = t[6];

  function e(t) {
    this.initialProperties = {
      transform: ""
    }, this.buildType = "in", this.pinTo = "card", this.animationBasis = "position", this.duration = 300, this.delay = .5, n.call(this, t)
  }
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.setOptions = function (t) {
    n.prototype.setOptions.call(this, t), void 0 !== t.buildType ? this.buildType = t.buildType : this.buildType = "in", void 0 !== t.initialProperties && (this.initialProperties = t.initialProperties), void 0 !== t.pinTo ? this.pinTo = t.pinTo : this.pinTo = "card", void 0 !== t.animationBasis ? this.animationBasis = t.animationBasis : this.animationBasis = "position", void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.blurRadius ? this.mi = t.blurRadius : this.mi = null, void 0 !== t.opacity ? this.wi = t.opacity : this.wi = null, void 0 !== t.scale ? this.Pi = t.scale : this.Pi = null, this.element && (this.element.style.opacity = "", this.element.style[h.filter] = "", this.element.style[h.transform] = "")
  }, e.prototype.attach = function (t) {
    this.element = t, this.l = !t.classList.contains(this.st), this.triggered = !1, this.endValue = null, this.initialProperties && (this.element.style[h.transform] = this.initialProperties.transform)
  }, e.prototype.detach = function () {
    this.element && (this.element.style[h.filter] = "", this.element.style[h.transform] = this.initialProperties.transform, this.element.style.opacity = "", this.l || this.show()), this.endValue = null, this.element = null
  }, e.prototype.runToEnd = function (t) {
    this.triggered = !0, this.endValue = t, this.run(t, !0)
  }, s.exports = e
}, function (t, i, s) {
  var n = t[16],
    h = t[6];

  function e(t) {
    this.li = e.Edge.TOP, this.vi = 0, this.di = 100, n.call(this, t)
  }
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.Edge = {
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  }, e.prototype.setOptions = function (t) {
    n.prototype.setOptions.call(this, t), void 0 !== t.edge && (this.li = t.edge, this.vi = this.li === e.Edge.TOP || this.li === e.Edge.BOTTOM ? 1 : 0, this.di = this.li === e.Edge.RIGHT || this.li === e.Edge.BOTTOM ? 100 : -100, "out" === this.buildType && (this.di = -1 * this.di)), void 0 !== t.translateY ? this.Ti = t.translateY : this.Ti = null, void 0 !== t.translateX ? this.bi = t.translateX : this.bi = null, this.element && (this.element.style.scale = "")
  }, e.prototype.step = function () {
    if (this.element) {
      if (n.prototype.step.call(this), Math.abs(this.Oi) < 1e-5 && (this.Oi = 0), this.mi) {
        var t = "blur(" + this.mi * (1 - this.Oi) + "px)";
        this.element.style[h.filter] = t
      }
      null !== this.wi && (this.element.style.opacity = this.Oi * (1 - this.wi) + this.wi);
      var i = "";
      this.Pi && (i = "scaleX(" + (this.Pi + this.Oi * (1 - this.Pi)) + ") scaleY(" + (this.Pi + this.Oi * (1 - this.Pi)) + ")");
      var s = this.Ti || 0,
        e = this.bi || 0; - 100 === this.di && (e = -e, s = -s);
      var o, a, r = this.di * (1 - this.Oi);
      0 === this.vi ? (o = 1 + e, a = 0 - s) : (a = 1 - s, o = 0 + e);
      var u = "translate3d(" + o * r + "vw," + a * r + "vw,0)";
      this.element.style[h.transform] = u + " " + i + " " + this.initialProperties.transform
    }
  }, s.exports = e
}, function (t, i, s) {
  s.exports = function (t) {
    return t * (2 - t)
  }
}, function (t, i, s) {
  var n = t[9],
    h = t[4];

  function e() {
    n.apply(this, arguments), this.rt = "", this.J = "", this.wt = ""
  }
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.detach = function () {
    this.element.style = this.J, this.J = "", this.wt = "", n.prototype.detach.call(this)
  }, e.prototype.edit = h.overlap([n.prototype.edit, h.expand(function (t) {
    t.maskUpdate && this.maskUpdate(t.maskUpdate)
  })]), e.prototype.maskUpdate = function (t) {
    var i = this.element.querySelector("defs:first-of-type > mask:first-of-type > use:first-of-type");
    if (i) {
      i.setAttribute("x", t.x), i.setAttribute("y", t.y);
      var s = i.querySelector("path:first-of-type");
      s && s.setAttribute("d", t.d)
    }
  }, s.exports = e
}, function (t, i, s) {
  var n = t[9],
    h = t[4];
  const e = {
    0: "left",
    1: "right",
    2: "center",
    3: "justify",
    4: "left"
  };

  function o(t, i, s) {
    return `${100*(t/i).toFixed(5)}${s}`
  }

  function a(t, i) {
    return `var(--ihpx) * ${(t/i).toFixed(5)}`
  }

  function r() {
    n.apply(this, arguments), this.$t = !0, this.pt = "", this.dt = null
  }
  r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.prototype.placeSpan = function (t) {
    const i = document.createElement("span");
    return i.style = function (t, i) {
      let s = "word-wrap: break-word; ",
        n = `${t.font.size}px`,
        h = `${t.spacing}px`;
      return i && i.responsive && i.responsive.scaling && ("vw" === i.responsive.scaling && (n = `${o(t.font.size,i.screenWidth,"vw")}`, h = `${o(t.spacing,i.screenWidth,"vw")}`), "vh" === i.responsive.scaling && (n = `calc(${a(t.font.size,i.screenHeight)})`, h = `calc(${a(t.spacing,i.screenHeight)})`)), s += `font-size: ${n}; `, t.color && (s += `color: rgba(${Math.round(t.color.r)},${Math.round(t.color.g)},${Math.round(t.color.b)},${t.color.a}); `), t.bold && (s += "font-weight: bold; "), t.italic && (s += "font-style: italic; "), (t.underline || t.overline || t.strike) && (s += `text-decoration: ${t.underline?"underline":""} ${t.overline?"overline":""} ${t.strike?"line-through":""}; `), t.font.name && (s += `font-family: ${t.font.name}; `), h && (s += `letter-spacing: ${h};`), t.textTransform && (s += `text-transform: ${t.textTransform};`), s
    }(t, this.dt), i.innerText = `\ufeff${t.text.replace(/ /g,"​ ​")}\ufeff`, i
  }, r.prototype.objToDOMStructure = function (t, i) {
    for (; i.hasChildNodes();) i.removeChild(i.firstChild);
    t.forEach(t => {
      const s = document.createElement("div");
      s.style = function (t, i) {
        let s = "white-space: break-spaces;";
        if (t.height) {
          let n = `${t.height}px`;
          i && i.responsive && i.responsive.scaling && ("vw" === i.responsive.scaling && (n = `${o(t.height,i.screenWidth,"vw")}`), "vh" === i.responsive.scaling && (n = `calc(${a(t.height,i.screenHeight)})`)), s += `line-height: ${n};`
        }
        if (t.spacing) {
          let n = `${t.spacing}px`;
          "vw" === i.responsive.scaling && (n = `${o(t.spacing,i.screenWidth,"vw")}`), "vh" === i.responsive.scaling && (n = `calc(${a(t.spacing,i.screenHeight)})`), s += `padding-bottom: ${n};`
        }
        return t.alignment && t.alignment in e ? s += `text-align: ${e[t.alignment]};` : s += "text-align: left;", s
      }(t, this.dt), i.appendChild(s), t.texts.forEach(t => {
        s.appendChild(this.placeSpan(t))
      })
    })
  }, r.prototype.routeTextItem = function (t) {
    this.gt = this.element.querySelector("text-wrapper");
    const i = this.N || this.gt || this.element;
    this.$t && t.length && this.objToDOMStructure.call(this, t, i)
  }, r.prototype.edit = h.overlap([n.prototype.edit, h.expand(function (t) {
    if (t.frame) {
      const i = Object.keys(t.frame);
      let s = i[0];
      3 === i.length && i.includes("375X667") && (s = "375X667");
      const n = parseInt(s.split("X")[0]),
        h = parseInt(s.split("X")[1]);
      this.dt = {
        responsive: t.frame[s].responsive,
        screenWidth: n,
        screenHeight: h
      }
    }
    if (t.value) return this.routeTextItem(t.value)
  })]), s.exports = r
}, function (t, i, s) {
  var n = t[15],
    h = t[6];

  function e(t) {
    n.call(this, t), this.xi = !1, this.gi = 0, this.xOrigin = window.innerWidth / 2, this.yOrigin = window.innerHeight / 2, this.boundHandleResize = function () {
      this.xOrigin = window.innerWidth / 2, this.yOrigin = window.innerHeight / 2
    }.bind(this), t && this.setOptions(t), this.appDirection = 1, this.orientation = t.orientation || e.ORIENTATION_X
  }
  e.prototype = Object.create(n.prototype), e.prototype.attach = function (t) {
    this.xOrigin = window.innerWidth / 2, this.yOrigin = window.innerHeight / 2, window.addEventListener("resize", this.boundHandleResize), n.prototype.attach.call(this, t)
  }, e.ORIENTATION_X = 0, e.ORIENTATION_Y = 1, e.prototype.detach = function () {
    window.removeEventListener("resize", this.boundHandleResize), n.prototype.detach.call(this)
  }, e.prototype.setOptions = function (t) {
    n.prototype.setOptions.call(this, t), void 0 !== t.cutoff && (this.gi = Math.min(t.cutoff || 0, .999)), void 0 !== t.edge && (this.li = t.edge || 0), void 0 !== t.opacitate && (this.Mi = t.opacitate)
  }, e.prototype.step = function () {
    if (n.prototype.step.call(this), this.element) {
      var t = 90 * this.appDirection * (this.Oi - 1);
      Math.abs(t) < 1e-5 && (t = 0);
      var i, s = 1 - Math.abs(t / 90);
      i = this.orientation === e.ORIENTATION_X ? "translate3d(0,0," + -this.xOrigin + "px) rotate3d(0,1,0," + -t + "deg) translate3d(0,0," + this.xOrigin + "px)" : "translate3d(0,0," + -this.yOrigin + "px) rotate3d(1,0,0," + t + "deg) translate3d(0,0," + this.yOrigin + "px)", this.element.style[h.transform] = i, this.element.style.opacity = s
    }
  }, s.exports = e
}, function (t, i, s) {
  s.exports = function (t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }
}, function (t, i, s) {
  s.exports = {
    type: "deck",
    cards: [{
      $id: "545A5C1F-CA30-479F-9790-592AA54525D7",
      name: "Two",
      type: t[12],
      content: [{
        $id: "21E6BF33-9C3E-4A81-87B3-A07140601A73",
        src: "images/sPE7wE3cqj9nO4-pktf3A.png",
        name: "screens",
        type: t[13],
        index: 0,
        imageFit: "contain",
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: 0,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          styleId: "1aefa1a7-0325-48ce-ae3d-adcbfee37c24",
          duration: "3390",
          blurRadius: 0,
          translateX: -.55,
          translateY: 0,
          animationBasis: "time"
        },
        imageFocalPoint: "xMidYMid"
      }, {
        $id: "E056C966-DBFE-4552-8BAC-351D8076D6F0",
        src: "images/sc0Xl9E7pnQFWRPgV1jZHxg.png",
        name: "shadow",
        type: t[13],
        index: 1,
        imageFit: "contain",
        inAnimation: {
          edge: "bottom",
          type: t[17],
          curve: t[18],
          delay: .11,
          pinTo: "card",
          scale: .9,
          title: "Slide In",
          opacity: .7,
          styleId: "802370d3-ba05-47e1-9860-e7020bf2a806",
          duration: "3066",
          undefined: 2e3,
          blurRadius: 0,
          translateX: .1,
          translateY: 1,
          animationBasis: "time"
        },
        imageFocalPoint: "xMidYMid"
      }, {
        $id: "EEFBA09A-7FE7-421F-80CC-37B4D104CCB8",
        src: "images/sg7vek5lKyn3-a-OnvX0XfA.png",
        name: "phone",
        type: t[13],
        index: 2,
        imageFit: "contain",
        inAnimation: {
          edge: "bottom",
          type: t[17],
          curve: t[18],
          delay: .11,
          pinTo: "card",
          scale: .9,
          title: "Slide In",
          opacity: 1,
          styleId: "802370d3-ba05-47e1-9860-e7020bf2a806",
          duration: "3066",
          undefined: 2e3,
          blurRadius: 0,
          translateX: .1,
          translateY: .97,
          animationBasis: "time"
        },
        imageFocalPoint: "xMidYMid"
      }, {
        $id: "FF838FA3-63C3-4B95-BB27-DD9BACF7624A",
        name: "Rectangle",
        type: t[19],
        index: 3,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: .9,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "8CCAA34F-2920-488C-B78C-6AFBCC48E223",
        name: "TRY IT FREE",
        type: t[20],
        index: 4,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: .3,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "87838112-8F2C-48CF-BFA9-464DFD33687A",
        name: "text 1",
        type: t[20],
        index: 5,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: -.5,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "699444B6-83AE-416D-A0EC-50C898214E23",
        name: "text 1",
        type: t[20],
        index: 6,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: -.2,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "D8BD30FB-1970-4A44-B2D3-080DBBDE81D2",
        name: "text 1",
        type: t[20],
        index: 7,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: .1,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "72F6A049-2144-42DA-91E5-CFDBB4C509ED",
        name: "logo",
        type: "group",
        index: 8,
        content: [{
          $id: "0FE0445A-B19F-4994-8900-2618DBB05EDD",
          name: "Shape",
          type: t[19],
          index: 0
        }, {
          $id: "1916C11D-8F37-4D78-80C4-FFED9129A4F3",
          name: "Path",
          type: t[19],
          index: 1
        }, {
          $id: "E23DD080-66D4-446F-A399-827C344F8A4F",
          name: "Shape",
          type: t[19],
          index: 2
        }, {
          $id: "C84F32A9-9B08-4C00-9F28-7E43E0D232E8",
          name: "Path",
          type: t[19],
          index: 3
        }, {
          $id: "53C857AD-5593-4EAE-AEBE-72A97A5D0661",
          name: "Path",
          type: t[19],
          index: 4
        }, {
          $id: "02B77162-724F-4E91-A252-BD51CE6562E9",
          name: "Shape",
          type: t[19],
          index: 5
        }, {
          $id: "8AD54B32-B17B-42BE-B859-C58A5344BC20",
          name: "Path",
          type: t[19],
          index: 6
        }]
      }],
      gestures: {
        timed: {
          edge: "right",
          delay: 3e3,
          target: "F65A7A2D-BA30-4977-8C14-46C9F0CA7F33",
          timestamp: 2,
          transition: {
            type: t[21],
            curve: t[22],
            title: "3D Cube",
            styleId: "99d4a922-a147-48d0-bfd0-d42cee2cd8a9",
            duration: 1500
          },
          resetOnTouch: !0
        },
        swipeUp: null,
        tapLeft: null,
        tapRight: null,
        swipeDown: null,
        swipeLeft: null,
        swipeRight: null
      },
      $ordering: 0,
      scrolling: !1,
      scrollReset: !1
    }, {
      $id: "F65A7A2D-BA30-4977-8C14-46C9F0CA7F33",
      name: "One",
      type: t[12],
      content: [{
        $id: "F4093004-7C89-43AF-8587-865AEB78F799",
        src: "images/sCwLsOVHTjKW0r6Mg9HzUw.png",
        name: "screens",
        type: t[13],
        index: 0,
        imageFit: "contain",
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: 0,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          styleId: "1aefa1a7-0325-48ce-ae3d-adcbfee37c24",
          duration: "3390",
          blurRadius: 0,
          translateX: -.55,
          translateY: 0,
          animationBasis: "time"
        },
        imageFocalPoint: "xMidYMid"
      }, {
        $id: "A30A5F46-78CB-44F8-9B99-41C0D7384CCF",
        src: "images/sc0Xl9E7pnQFWRPgV1jZHxg.png",
        name: "shadow",
        type: t[13],
        index: 1,
        imageFit: "contain",
        inAnimation: {
          edge: "bottom",
          type: t[17],
          curve: t[18],
          delay: .11,
          pinTo: "card",
          scale: .9,
          title: "Slide In",
          opacity: .7,
          styleId: "802370d3-ba05-47e1-9860-e7020bf2a806",
          duration: "3066",
          undefined: 2e3,
          blurRadius: 0,
          translateX: .1,
          translateY: 1,
          animationBasis: "time"
        },
        imageFocalPoint: "xMidYMid"
      }, {
        $id: "9DA8BDD9-0F75-4EBE-BB96-098EA3B88223",
        src: "images/sdQTygJBbKPT3cQ7beCDRVA.png",
        name: "phone",
        type: t[13],
        index: 2,
        imageFit: "contain",
        inAnimation: {
          edge: "bottom",
          type: t[17],
          curve: t[18],
          delay: .2,
          pinTo: "card",
          scale: .9,
          title: "Slide In",
          opacity: 1,
          duration: "2027",
          undefined: 2e3,
          blurRadius: 0,
          translateX: .1,
          translateY: .95,
          animationBasis: "time"
        },
        imageFocalPoint: "xMidYMid"
      }, {
        $id: "5DB056D3-769C-4CB2-B9CB-D9E8BAD857AB",
        name: "Rectangle",
        type: t[19],
        index: 3,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: .9,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "53CD1B95-8CAB-4E06-9C2D-07D3417E0EA7",
        name: "TRY IT FREE",
        type: t[20],
        index: 4,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: .3,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "201E9EDB-8CC7-4367-A19E-1980A5695484",
        name: "text 1",
        type: t[20],
        index: 5,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: -.5,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "522C1CCD-CEC1-4B30-B664-EDBF917CB2AF",
        name: "text 1",
        type: t[20],
        index: 6,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: -.2,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "657CCC93-60D6-4314-ABAF-EA763286D9F0",
        name: "text 1",
        type: t[20],
        index: 7,
        inAnimation: {
          edge: "right",
          type: t[17],
          curve: t[18],
          delay: .5,
          pinTo: "card",
          scale: 1,
          title: "Slide In",
          opacity: 1,
          duration: 300,
          blurRadius: 0,
          translateX: .1,
          translateY: 0,
          animationBasis: "position"
        }
      }, {
        $id: "E57961F6-02C7-4ACF-8736-541D9D87C203",
        name: "logo",
        type: "group",
        index: 8,
        content: [{
          $id: "F20F8751-65B6-4580-958B-1DD5A43C5977",
          name: "Shape",
          type: t[19],
          index: 0
        }, {
          $id: "E33D2490-45ED-4D3D-B787-E10861134916",
          name: "Path",
          type: t[19],
          index: 1
        }, {
          $id: "6A5F3098-EC01-4F86-AFC7-67B5DCC81529",
          name: "Shape",
          type: t[19],
          index: 2
        }, {
          $id: "87368504-D709-45E3-AAF8-26B0B4DDE308",
          name: "Path",
          type: t[19],
          index: 3
        }, {
          $id: "BB14925E-8863-43D8-A2D2-2BD68064D5AB",
          name: "Path",
          type: t[19],
          index: 4
        }, {
          $id: "378FE875-D81C-436D-A5A0-53F274CF27F3",
          name: "Shape",
          type: t[19],
          index: 5
        }, {
          $id: "952718E2-1B7C-489F-BC35-054A7279DB43",
          name: "Path",
          type: t[19],
          index: 6
        }]
      }],
      gestures: {
        timed: {
          edge: "right",
          delay: 3e3,
          value: 1500,
          target: "545A5C1F-CA30-479F-9790-592AA54525D7",
          timestamp: 1,
          transition: {
            type: t[21],
            curve: t[22],
            title: "3D Cube",
            styleId: "99d4a922-a147-48d0-bfd0-d42cee2cd8a9",
            duration: 1500
          },
          resetOnTouch: !1
        },
        swipeUp: null,
        tapLeft: null,
        tapRight: null,
        swipeDown: null,
        swipeLeft: null,
        swipeRight: null
      },
      $ordering: 1,
      scrolling: !1,
      scrollReset: !1
    }],
    fonts: [{
      src: "fonts/c8e0e822ccb08720208b128828c3fd9cc41de51d.woff",
      style: "normal",
      width: 5,
      weight: 700,
      familyName: "Nunito Sans",
      subfamilyName: "Bold",
      postscriptName: "NunitoSans-Bold"
    }, {
      src: "fonts/b98fc5d52bf30bae3009d5b4070b4815b4c1cc83.woff",
      style: "normal",
      width: 5,
      weight: 400,
      familyName: "Nunito Sans",
      subfamilyName: "Regular",
      postscriptName: "NunitoSans-Regular"
    }],
    device: "mobile",
    isBlank: !1,
    modified: !1,
    settings: {
      target: "none",
      sourceFile: null,
      savedStyles: {
        animations: {
          "1aefa1a7-0325-48ce-ae3d-adcbfee37c24": {
            title: "screens",
            animation: {
              edge: "right",
              type: "animations/SlideIn",
              curve: "curves/easeOut",
              delay: 0,
              pinTo: "card",
              scale: 1,
              title: "Slide In",
              opacity: 1,
              styleId: "1aefa1a7-0325-48ce-ae3d-adcbfee37c24",
              duration: "3390",
              blurRadius: 0,
              translateX: -.55,
              translateY: 0,
              animationBasis: "time"
            },
            linkedItems: {
              inAnimation: ["/cards/545A5C1F-CA30-479F-9790-592AA54525D7/content/0", "/cards/F65A7A2D-BA30-4977-8C14-46C9F0CA7F33/content/0"]
            }
          },
          "802370d3-ba05-47e1-9860-e7020bf2a806": {
            title: "phone",
            animation: {
              edge: "bottom",
              type: "animations/SlideIn",
              curve: "curves/easeOut",
              delay: .11,
              pinTo: "card",
              scale: .9,
              title: "Slide In",
              opacity: 1,
              styleId: "802370d3-ba05-47e1-9860-e7020bf2a806",
              duration: "3066",
              undefined: 2e3,
              blurRadius: 0,
              translateX: .1,
              translateY: .97,
              animationBasis: "time"
            },
            linkedItems: {
              inAnimation: ["/cards/545A5C1F-CA30-479F-9790-592AA54525D7/content/2", "/cards/545A5C1F-CA30-479F-9790-592AA54525D7/content/1", "/cards/F65A7A2D-BA30-4977-8C14-46C9F0CA7F33/content/1"]
            }
          }
        },
        transitions: {
          "99d4a922-a147-48d0-bfd0-d42cee2cd8a9": {
            title: "3D",
            animation: {
              type: "transitions/RotateCube",
              curve: "curves/inOutCubic",
              title: "3D Cube",
              styleId: "99d4a922-a147-48d0-bfd0-d42cee2cd8a9",
              duration: 1500
            },
            linkedItems: {
              "gestures/timed/transition": ["/cards/F65A7A2D-BA30-4977-8C14-46C9F0CA7F33"],
              "gestures/swipeRight/transition": ["/cards/545A5C1F-CA30-479F-9790-592AA54525D7"]
            }
          }
        }
      },
      additionalJS: null,
      splashCardId: "F65A7A2D-BA30-4977-8C14-46C9F0CA7F33",
      backgroundColor: "rgba(74,74,74,1)",
      promptForInstall: !1
    },
    breakPoints: [{
      key: "375X750",
      screenWidth: 375,
      screenHeight: 750
    }]
  }
}, function (t, i, s) {
  var n = t[1];

  function h(t, i) {
    n.call(this), this.k = null, this.St = i, this.Rt = t, this.Bt = 0, this.Ft = this.Gt.bind(this), this.Ht = this.Qt.bind(this), this.Vt = {
      keyLeft: "left",
      keyRight: "right",
      keyUp: "up",
      keyDown: "down"
    }
  }
  for (var e in n.prototype) h.prototype[e] = n.prototype[e];
  h.prototype.attach = function (t) {
    this.k = t, this.k.addEventListener("keydown", this.Ft), this.k.addEventListener("keyup", this.Ht)
  }, h.prototype.detach = function () {
    this.k.removeEventListener("keydown", this.Ft), this.k.removeEventLIstener("keyup", this.Ht), this.k = null
  }, h.prototype.Gt = function (t) {
    if (!this.Bt) {
      var i, s = this.Rt.getState(),
        n = this.Rt.getTargetState(),
        h = this.Rt.getProgress(),
        e = this.St.get(s),
        o = null;
      if (37 === t.keyCode) o = "keyLeft";
      else if (32 === t.keyCode) o = "keyRight";
      else if (39 === t.keyCode) o = "keyRight";
      else if (38 === t.keyCode) o = "keyUp";
      else {
        if (40 !== t.keyCode) return;
        o = "keyDown"
      }
      this.Bt = t.keyCode, n !== (i = e.getTargetId(o)) && i && this.trigger("stateChange", {
        state: s,
        target: i,
        progress: h,
        settleOnTarget: 1,
        edge: this.Vt[o],
        gesture: o,
        keyNavigation: !0
      })
    }
  }, h.prototype.Qt = function (t) {
    t.keyCode === this.Bt && (this.Bt = 0)
  }, s.exports = h
}, function (t, i, s) {
  var n = t[1];

  function h(t, i) {
    n.call(this), this.Rt = t, this.St = i, this.k = null, this.Xt = this.Yt.bind(this), this.Zt = this._t.bind(this), this.zi = this.Di.bind(this), this.Ui = 1, this.v = "", this.Mt = "", this.Tt = 0, this.Ci = 0, this.ji = 0, this.ki = 0, this.Bi = 0, this.Fi = 2, this.Gi = null, this.scrolling = !1, this.inTransition = !1, this.Vt = {
      wheelUp: "up",
      wheelDown: "down"
    }
  }
  for (var e in n.prototype) h.prototype[e] = n.prototype[e];
  h.prototype.attach = function (t) {
    this.k = t, this.k.addEventListener("wheel", this.Zt), window.addEventListener("resize", this.zi), this.zi()
  }, h.prototype.detach = function () {
    this.k.removeEventListener("wheel", this.Zt), window.removeEventListener("resize", this.zi), this.k = null
  }, h.prototype.Hi = function () {
    var t = {
      state: this.v,
      target: this.Mt,
      progress: 0,
      settleOnTarget: 1,
      edge: this.Vt[this.Gi],
      gesture: this.Gi
    };
    this.trigger("stateChange", t)
  }, h.prototype.Ii = function (t) {
    this.v = this.Rt.getState(), this.Mt = this.Rt.getTargetState(), this.Tt = this.Rt.getProgress(), this.ki = 0, this.Bi = 0, this.Gi = null, this.scrolling = !1
  }, h.prototype.Di = function () {
    this.Ui = window.innerHeight
  }, h.prototype._t = function (t) {
    this.ji = this.Ci, this.Ci = t.timeStamp;
    var i = Math.abs(this.Ci - this.ji) > 50;
    if (!this.ot && i && this.Ii(), !(this.ot || this.Bi > this.Fi || this.Ci === this.ji || this.scrolling)) {
      this.ki = -t.deltaY, this.Bi++;
      var s = this.ki;
      0 === t.deltaMode && s < -40 && (s = -40), 0 === t.deltaMode && s > 40 && (s = 40), 1 === t.deltaMode ? s *= 40 : 2 === t.deltaMode && (s *= this.Ui);
      var n = this.v;
      if (this.Mt === n) {
        var h = s < 0,
          e = this.St.get(this.v);
        this.Gi = h ? "wheelDown" : "wheelUp";
        var o = e.getTargetId(this.Gi);
        if (!o && 0 !== o) return;
        this.Mt = o
      }
      this.Gi && this.Bi > this.Fi && this.Xt()
    }
  }, h.prototype.Yt = function () {
    this.inTransition = !0, this.Hi()
  }, s.exports = h
}, function (t, i, s) {
  var n = t[1];

  function h(t, i) {
    n.call(this), this.os = 50, this.as = null, this.ls = !1, this.vs = null, this.cs = 0, this.fs = 0, this.ei = 0, this.ms = 0, this.ds = 0, this.Xs = 0, this.Ys = 0, this.Es = 0, i || (i = {}), i.only && (this.as = i.only);
    var s = this.gs.bind(this),
      h = this.D.bind(this);
    t.addEventListener("touchstart", this.Ds.bind(this)), t.addEventListener("touchmove", this.ps.bind(this)), t.addEventListener("touchend", s), t.addEventListener("touchcancel", s), t.addEventListener("mousedown", this.O.bind(this)), t.addEventListener("mousemove", this.ws.bind(this)), t.addEventListener("mouseup", h), t.addEventListener("mouseleave", h)
  }
  for (var e in n.prototype) h.prototype[e] = n.prototype[e];
  h.prototype.Xi = function (t, i) {
    this.cs = this.ms = t.screenX, this.fs = this.ds = t.screenY, this.ei = Date.now(), this.Xs = this.ei, this.Ys = 0, this.Es = 0, this.emit("start", {
      originalEvent: i,
      clientX: t.clientX,
      clientY: t.clientY
    })
  }, h.prototype.qs = function (t, i) {
    var s = Date.now(),
      n = s - this.Xs,
      h = t.screenX - this.ms,
      e = t.screenY - this.ds;
    n < 2 && (n = 2), this.Ys = (t.screenX - this.ms) / n, this.Es = (t.screenY - this.ds) / n, this.ms = t.screenX, this.ds = t.screenY, this.Xs = s, this.emit("drag", {
      originalEvent: i,
      deltaX: this.ms - this.cs,
      deltaY: this.ds - this.fs,
      frameDeltaX: h,
      frameDeltaY: e,
      veloX: this.Ys,
      veloY: this.Es
    })
  }, h.prototype._i = function (t, i) {
    var s = this.ms - this.cs,
      n = this.ds - this.fs,
      h = Date.now() - this.ei;
    !this.as || this.as(s, n, h) ? this.emit("swipe", {
      originalEvent: i,
      deltaX: s,
      deltaY: n,
      veloX: this.Ys,
      veloY: this.Es,
      time: h
    }) : this.emit("cancel", {
      originalEvent: i,
      deltaX: s,
      deltaY: n,
      veloX: this.Ys,
      veloY: this.Es,
      time: h
    }), this.vs = null, this.cs = this.ms = 0, this.fs = this.ds = 0, this.Ys = 0, this.Es = 0
  }, h.prototype.O = function (t) {
    this.ls || this.vs || (this.vs = -1, this.Xi(t, t))
  }, h.prototype.ws = function (t) {
    -1 === this.vs && this.qs(t, t)
  }, h.prototype.D = function (t) {
    -1 === this.vs && this._i(t, t)
  }, h.prototype.Ds = function (t) {
    this.ls = !0;
    var i = t.targetTouches[0];
    this.vs = i.identifier, this.Xi(i, t)
  }, h.prototype.ps = function (t) {
    for (var i = 0; i < t.changedTouches.length; i++)
      if (t.changedTouches[i].identifier === this.vs) return this.qs(t.changedTouches[i], t)
  }, h.prototype.gs = function (t) {
    for (var i = 0; i < t.changedTouches.length; i++)
      if (t.changedTouches[i].identifier === this.vs) return this._i(t.changedTouches[i], t)
  }, s.exports = h
}, function (t, i, s) {
  var n = t[1],
    h = t[26];

  function e(t, i) {
    n.call(this), this.k = null, this.Rt = t, this.St = i, this.Tt = 0, this.Li = -1, this.Ri = !0, this.Gi = null, this.Si = null, this.Ji = 1, this.Ui = 1, this.ot = !1, this.Ki = !1, this.Ni = null, this.v = this.Rt.getState(), this.Mt = this.Rt.getTargetState(), this.isDesktop = !1, this.Qi = !1, this.Vi = !1, this.Wi = this.Xi.bind(this), this.Yi = this.Zi.bind(this), this.$i = this._i.bind(this)
  }
  for (var o in n.prototype) e.prototype[o] = n.prototype[o];
  e.prototype.attach = function (t) {
    this.k = t, this.ts = new h(this.k), this.ts.on("start", this.Wi), this.ts.on("drag", this.Yi), this.ts.on("swipe", this.$i)
  }, e.prototype.detach = function () {
    this.k && (this.ts.off("start", this.Wi), this.ts.off("drag", this.Yi), this.ts.off("swipe", this.$i), this.ts = null, this.k = null)
  }, e.prototype.resize = function (t, i) {
    this.Ji = t, this.Ui = i
  }, e.prototype.ss = function () {
    if (this.Mt === this.v && this.Gi || this.Mt < 0) {
      var t = this.St.get(this.v);
      this.hs(t)
    }
  }, e.prototype.ns = function (t) {
    var i;
    this.Tt > 1 && (this.v = this.Mt, i = this.St.get(this.v), this.hs(i), this.Tt = 1, i && (i.getTargetId(this.Gi) ? this.Tt -= 1 : this.Tt = 1)), this.Tt < 0 && (i = this.St.get(this.v), this.Gi = null, this.es(t), this.hs(i), this.Tt = Math.abs(this.Tt))
  }, e.prototype.hs = function (t) {
    this.Mt = t ? t.getTargetId(this.Gi) : null, this.li = t ? t.getGestureEdge(this.Gi) : null
  }, e.prototype.es = function (t) {
    this.Gi || (Math.abs(t.deltaX) > Math.abs(t.deltaY) && !this.Gi ? (t.veloX < 0 && (this.Gi = "swipeLeft"), t.veloX > 0 && (this.Gi = "swipeRight")) : Math.abs(t.deltaY) > Math.abs(t.deltaX) && !this.Gi && (t.veloY < 0 && (this.Gi = "swipeUp"), t.veloY > 0 && (this.Gi = "swipeDown")), this.Gi && (this.ss(), this.Gi.includes("Left") || this.Gi.includes("Up") ? this.Ri = !0 : this.Ri = !1))
  }, e.prototype.us = function (t) {
    for (var i = t; i && i !== document.body;) {
      if ("scroll" === window.getComputedStyle(i).overflowY && i.scrollHeight > i.clientHeight) return i;
      i = i.parentNode
    }
    return null
  }, e.prototype.rs = function (t) {
    if (this.Ni && !this.Ki) {
      var i = !1,
        s = this.Ni.scrollTop,
        n = (this.Ni.scrollHeight || this.Ni.firstElementChild.clientHeight) - this.Ni.clientHeight;
      i |= s <= 0 && t.frameDeltaY < 0, i |= s >= 1 && s < n, i |= s >= n && t.frameDeltaY > 0, this.Ki = i
    }
  }, e.prototype.Xi = function (t) {
    this.v = this.Rt.getState(), this.Mt = this.Rt.getTargetState(), this.Tt = this.Rt.getProgress(), this.Li = -1, this.ot = this.Tt > 0, this.isDesktop || (this.Ni = this.us(t.originalEvent.target)), this.Ki = !1, this.ot && this.v !== this.Mt || (this.Gi = null), t.clientX && t.clientX < this.Ji / 3 ? this.Si = "tapLeft" : this.Si = "tapRight", this.Hi()
  }, e.prototype.Zi = function (t) {
    if (this.es(t), this.Gi && (this.Qi = this.Gi.includes("Left") || this.Gi.includes("Right"), this.Vi = this.Gi.includes("Up") || this.Gi.includes("Down"), this.rs(t), !this.Ki || !this.Vi)) {
      var i = this.Qi ? t.frameDeltaX : t.frameDeltaY,
        s = this.Qi ? this.Ui : this.Ji;
      this.Tt += (this.Ri ? -i : i) / s, this.ns(t), this.Mt && t.originalEvent.preventDefault(), this.Hi()
    }
  }, e.prototype._i = function (t) {
    if (this.rs(t), !this.Ki || !this.Vi) {
      var i = "swipeLeft" === this.Gi || "swipeRight" === this.Gi ? t.deltaX : t.deltaY,
        s = "swipeLeft" === this.Gi || "swipeRight" === this.Gi ? t.veloX : t.veloY,
        n = i * (this.Ri ? -1 : 1),
        h = s * (this.Ri ? -1 : 1),
        e = t.veloX * t.veloX + t.veloY * t.veloY;
      n > 50 || h > .5 || t.time < 300 && e < .5 && this.ot ? this.Li = 1 : 0 === i && 0 === s && 0 === this.Tt ? (this.Li = 1, this.Gi = this.Si, this.ss()) : this.Li = 0, this.Mt || (this.Li = 0), this.Hi()
    }
  }, e.prototype.Hi = function () {
    var t = {
      progress: this.Tt,
      settleOnTarget: this.Li,
      gesture: this.Gi,
      state: this.v,
      target: this.Mt,
      edge: this.li
    };
    this.trigger("stateChange", t)
  }, s.exports = e
}, function (t, i, s) {
  var n = t[1];

  function h() {
    n.call(this), this.tn = {}, this.in = {}
  }
  for (var e in n.prototype) h.prototype[e] = n.prototype[e];
  h.prototype.get = function (t) {
    return this.tn[t]
  }, h.prototype.forEach = function (t) {
    for (var i in this.tn) t(this.tn[i], i)
  }, h.prototype.has = function (t) {
    return t in this.tn
  }, h.prototype.add = function (t, i) {
    return this.replace(t, i), i
  }, h.prototype.replace = function (t, i, s) {
    var n = this.tn[t];
    return i && (this.tn[t] = i), this.emit("replace", {
      id: t,
      value: i
    }), n
  }, h.prototype.remove = function (t) {
    var i = this.tn[t];
    return delete this.tn[t], delete this.in[t], this.emit("remove", {
      id: t,
      value: i
    }), i
  }, s.exports = h
}, function (t, i, s) {
  var n = t[0],
    h = t[5];

  function e(t) {
    if (!t.cardSet) return !1;
    if (this.St = t.cardSet, this.ie = this.St.get(t.elementIds.start), this.te = this.St.get(t.elementIds.end), !this.te || this.te === this.ie) return !1;
    this.ee = 1;
    var i = this.te.getTargetTransition(this.Gi);
    this.ie && (i = this.ie.getTargetTransition(t.gesture)), t.overrideTransition && (i = t.overrideTransition);
    var s = null,
      n = null;
    i && i.type && (s = new(h(i.type))(i), n = new(h(i.type))(i)), this.ie && this.ie.setTransition({
      engine: s,
      appDirection: t.appDirection,
      orientation: t.orientation,
      elementIds: t.elementIds || {},
      role: "start"
    }), this.te && this.te.setTransition({
      engine: n,
      appDirection: t.appDirection,
      orientation: t.orientation,
      elementIds: t.elementIds || {},
      role: "end"
    }), this.ie || this.te.setTransition({
      engine: null,
      appDirection: 1,
      orientation: 0,
      elementIds: t.elementIds || {},
      role: "end"
    })
  }
  e.prototype.getProgress = function () {
    return this.te ? this.te.getProgress() : this.ie ? 1 - this.ie.getProgress() : 0
  }, e.prototype.setProgress = function (t, i) {
    this.ee = t;
    var s = 1 - t;
    return n.all([this.ie.setProgress(s, i), this.te.setProgress(t, i)])
  }, e.prototype.terminate = function (t) {
    return t || 0 === t || (t = this.ee), this.setProgress(t), this.ie.resetAnimations(), this.te.resetAnimations(), !0
  }, s.exports = e
}, function (t, i, s) {
  var n = t[15],
    h = t[6];

  function e(t) {
    n.call(this, t), this.wi = isNaN(parseFloat(t.opacity)) ? 1 : parseFloat(t.opacity), this.xs = t.offset || 0, this.appDirection = 1
  }
  e.prototype = Object.create(n.prototype), e.ORIENTATION_X = 0, e.ORIENTATION_Y = 1, e.prototype.step = function () {
    n.prototype.step.call(this);
    var t = 100 * this.appDirection * (1 - this.Oi);
    Math.abs(t) < 1e-5 && (t = 0);
    var i = t * this.xs,
      s = "";
    if (this.appDirection < 0) {
      var o = this.wi;
      return this.element.style.opacity = this.Oi * (1 - o) + o, this.orientation === e.ORIENTATION_X ? s = "translate3d(" + i + "%,0,-0.001px)" : this.orientation === e.ORIENTATION_Y && (s = "translate3d(0," + i + "%,-0.001px)"), this.element.style[h.transform] = s, void("-1" !== this.element.style.zIndex && (this.element.style.zIndex = "-1"))
    }
    this.orientation === e.ORIENTATION_X ? s = "translate3d(" + t + "%,0,0)" : this.orientation === e.ORIENTATION_Y && (s = "translate3d(0," + t + "%,0)"), this.element.style[h.transform] = s, "" !== this.element.style.zIndex && (this.element.style.zIndex = "")
  }, s.exports = e
}, function (t, i, s) {
  var n = t[0],
    h = t[29],
    e = t[1];
  t[5];

  function o(i) {
    e.call(this), i || (i = {}), this.St = i.cardSet, this.v = i.startState || 0, this.Ts = this.v, this.Is = null, this.Ps = !1, this.Gi = null, this.At = t[30], this.Nt = {}, this.Ss = this.ys.bind(this), this.Cs = {
      left: [-1, 0],
      right: [1, 0],
      up: [-1, 1],
      down: [1, 1]
    }
  }
  for (var a in e.prototype) o.prototype[a] = e.prototype[a];
  o.prototype.getState = function () {
    return this.v
  }, o.prototype.getTargetState = function () {
    return this.Ts
  }, o.prototype.goTo = function (t) {
    this.updateState({
      state: this.getState() < 1 ? t : this.getState(),
      target: t,
      progress: 1,
      settleOnTarget: 1,
      appDirection: 1,
      orientation: 0
    })
  }, o.prototype.resetTo = function (t) {
    if (this.Is) {
      var i = this.Is.getProgress();
      this.Is.terminate(i > .5 ? 1 : 0), this.Is = null
    }
    this.Ts === this.v && (this.Ts = t), this.v = t
  }, o.prototype.isActive = function () {
    return !this.Is && this.v !== this.Ts
  }, o.prototype.ys = function () {
    if (this.Ps && this.Is) {
      var t = this.Is.getProgress();
      return t >= 1 ? (this.Is.terminate(1) && (this.v = this.Ts), this.Is = null, this.trigger("settle", {
        state: this.v
      }), this.ys()) : t <= 0 ? (this.Is.terminate(0) && (this.Ts = this.v), this.Is = null, this.trigger("settle", {
        state: this.v
      }), this.ys()) : this.Is.setProgress(1, !0).then(this.Ss)
    }
  }, o.prototype.setProgress = function (t, i) {
    if (this.Ps = !1, this.Is) {
      if (this.Ts === t) return this.Is.setProgress(i);
      this.Is.terminate(0)
    }
    return (t || 0 === t) && (this.Ts = t, this.Is = this.getProgressor(this.v, t), this.Is && this.Is.setProgress(i)), this.Is
  }, o.prototype.release = function (t) {
    return this.Ps = !0, this.Is ? (t || 0 === t || (t = this.Is.getProgress() < .5 ? 0 : 1), this.Is.setProgress(t, !0).then(this.Ss)) : n.resolve()
  }, o.prototype.getProgress = function () {
    return this.Is ? this.Is.getProgress() : 0
  }, o.prototype.getProgressor = function (t, i) {
    var s = this.Cs[this.li][0],
      n = this.Cs[this.li][1],
      e = {
        start: t,
        end: i
      };
    return new h({
      cardSet: this.St,
      gesture: this.Gi,
      overrideTransition: this.Ot,
      elementIds: e,
      appDirection: s,
      orientation: n
    })
  }, o.prototype.updateState = function (t) {
    var i = this.getState(),
      s = this.getTargetState();
    this.Gi = t.gesture || "swipeLeft", this.li = t.edge || "right", this.Ot = t.transition, t.state === i && t.target === s || this.resetTo(t.state), t.target !== i && this.setProgress(t.target, t.progress), t.settleOnTarget >= 0 && this.release(t.settleOnTarget)
  }, s.exports = o
}, function (t, i, s) {
  t[0], t[2];
  var n = t[1],
    h = t[24],
    e = t[25],
    o = t[27],
    a = t[4],
    r = t[5],
    u = t[28],
    c = t[31];

  function f(i) {
    n.call(this), this.k = null, this.Ct = [], this.At = t[30], this.Nt = {}, this.Ot = !1, this.It = window.innerWidth > 768, this.v = null, this.Mt = null, this.Pt = 0, this.Tt = 0, this.St = new u, this.Et = new c({
      cardSet: this.St,
      startState: -1
    }), this.jt = new h(this.Et, this.St), this.Jt = new o(this.Et, this.St), this.Kt = this.xt.bind(this), this.Lt = this.emit.bind(this, "stateChange"), this.Ut = this.Wt.bind(this), this.Et.on("settle", this.Ut), this.Jt.on("stateChange", this.Kt), this.Jt.on("stateChange", this.Lt), this.jt.on("stateChange", this.Kt), this.jt.on("stateChange", this.Lt), this.St.on("replace", function (t) {
      t.value.on("stateChange", this.Kt)
    }.bind(this)), this.on("resetAllModules", function (t) {
      this.St.forEach(t => {
        t.trigger("resetAllModules")
      })
    }.bind(this)), this.It && this.kt(), i && this.setOptions(i)
  }
  for (var l in n.prototype) f.prototype[l] = n.prototype[l];
  f.prototype.kt = function () {
    this.zt = new e(this.Et, this.St), this.zt.on("stateChange", this.Kt), this.zt.on("stateChange", this.Lt), this.Jt.isDesktop = !0
  }, f.prototype.attach = function (t) {
    this.k = t, this.Jt.attach(t), this.jt.attach(window), this.It && this.zt.attach(window)
  }, f.prototype.detach = function () {
    this.Jt.detach(this.k), this.jt.detach(window), this.It && this.zt.detach(window), this.k = null
  }, f.prototype.xt = function (t) {
    this.Ot || ((t.keyNavigation || t.transition) && (this.Ot = !0), this.Et.updateState({
      state: t.state ? t.state : this.Et.getState(),
      target: t.target ? t.target : this.Et.getState(),
      progress: t.progress,
      settleOnTarget: t.settleOnTarget,
      edge: t.edge,
      gesture: t.gesture,
      transition: t.transition
    }))
  }, f.prototype.Wt = function (t) {
    this.Ot = !1;
    var i = document.querySelectorAll('[data-id="' + t.state + '"]')[0].dataset.name;
    i && this.trigger("sendAnalytics", {
      screen: i
    }), this.zt && (this.zt.inTransition = !1), this.St.get(t.state).checkTimed()
  }, f.prototype.resize = function (t, i) {
    this.Jt.resize(t, i)
  }, f.prototype.edit = a.pathMin(1, function (t, i, s) {
    var n = -1,
      h = "",
      e = null;
    if (this.St.has(t[0]) ? h = t[0] : "-" !== (n = "-" === t[0] ? "-" : parseInt(t[0])) && (h = this.Ct[n]), e = this.St.get(h)) e.edit(s ? t.slice() : t.slice(1), i, s);
    else {
      (e = new r(i.type)(i)).on("sendAnalytics", function (t) {
        this.trigger("sendAnalytics", t)
      }.bind(this)), e.on("timed", function (t) {
        Object.assign(t, {
          state: this.Et.getState()
        }), this.xt(t)
      }.bind(this));
      var o = e.scrollCheck();
      this.It && o && e.on("scrolling", function (t) {
        this.zt.scrolling = t
      }.bind(this)), h = i.$id, "-" === n ? this.Ct.push(h) : n >= 0 && (this.Ct[n] = h), this.St.add(h, e)
    }
  }), f.prototype.goTo = function (t) {
    var i = this.Ct[t] || t;
    return !!i && this.Et.goTo(i)
  }, s.exports = f
}, function (t, i, s) {
  var n = t[32],
    h = t[1],
    e = t[4];

  function o(t) {
    h.call(this), this.mt = t, this.qt = 0, this.deck = new n, this.deck.attach(this.mt)
  }
  for (var a in h.prototype) o.prototype[a] = h.prototype[a];
  o.prototype.xt = function (t) {
    this.deck.updateState(t)
  }, o.prototype.resize = function (t, i) {
    this.deck.resize(t, i);
    var s = window.innerHeight;
    document.documentElement.style.setProperty("--ih", `${s}`), document.documentElement.style.setProperty("--ihpx", `${s}px`)
  }, o.prototype.edit = e.overlap([function (t, i, s) {
    t.length && "#" === t[0][0] && this.deck.edit(t, i, s)
  }, e.route({
    settings: e.expand(function (t, i) {
      t && (t.backgroundColor && (document.body.style.backgroundColor = t.backgroundColor), t.splashCardId && (this.qt = t.splashCardId))
    }),
    cards: function (t, i, s) {
      this.deck.edit(t, i, s)
    },
    styles: function (t, i, s) {
      const n = document.body.lastChild,
        h = document.createElement("style");
      h.innerHTML = i, h.classList.add("live-style"), document.body.appendChild(h), "STYLE" === n.nodeName && n.classList.contains("live-style") && n.remove()
    }
  })]), o.prototype.goTo = function (t) {
    return "#" === t[0] ? this.deck.goTo(t) : "cards" === t[1] ? this.deck.goTo(parseInt(t[2])) : void 0
  }, o.prototype.setState = function (t) {}, o.prototype.start = function () {
    this.deck.edit([this.qt, "splash"], 1), this.deck.goTo(this.qt);
    var t = window.innerHeight;
    document.documentElement.style.setProperty("--ih", `${t}px`), document.documentElement.style.setProperty("--ih", `${t}`), this.mt.classList.remove("hidden-template")
  }, o.prototype.goToStartCard = function () {
    this.deck.trigger("resetAllModules", {});
    var t = this.deck.Et.v;
    this.deck.goTo(this.qt), this.qt !== t && (this.deck.Et.St.get(this.qt).element.classList.remove("hidden"), this.deck.Et.St.get(t).element.classList.add("hidden"))
  }, s.exports = o
}, function (t, i, s) {
  function n(t, i, s) {
    var n = new XMLHttpRequest;
    try {
      n.responseType = t.responseType || "json"
    } catch (t) {
      n.json = !0
    }
    n.onreadystatechange = function () {
      4 === n.readyState && (i && 200 === n.status ? i(n.response) : s && s(n.response))
    }, n.open(t.method || "GET", t.url, !0);
    var h = t.data;
    if (t.headers)
      for (var e in t.headers) n.setRequestHeader(e, t.headers[e]);
    n.send(h)
  }
  s.exports = {
    ajax: function (t, i, s) {
      "object" == typeof t.data && (t.headers || (t.headers = {}), t.headers["Content-Type"] = "application/json", t.data = JSON.stringify(t.data)), n(t, i, s)
    },
    request: n
  }
}
, function (t, i, s) {
  var n = t[23],
    h = document.querySelector("#famous-application"),
    e = new(0, t[33])(h);

  function o(t) {
    e.resize(window.innerWidth, window.innerHeight)
  }
  e.edit([], n), window.addEventListener("resize", o), window.requestAnimationFrame(o), document.addEventListener("gesturestart", function (t) {
    t.preventDefault()
  }, !0), document.addEventListener("dragstart", function (t) {
    "IMAGE" === t.target.tagName.toUpperCase() && t.preventDefault()
  }), document.addEventListener("touchstart", function (t) {
    var i = t.target.tagName;
    "A" !== i && "INPUT" !== i && "BUTTON" !== i || t.preventDefault()
  }), /Android/.test(window.navigator.userAgent) && /Chrome/.test(window.navigator.userAgent), e.start();
  var a = !0;

  function r() {
    const t = document.getElementById("unsupported-orientation");
    if (t.className = "show", !document.getElementById("bg-image-clone")) {
      const i = document.querySelector(".card");
      let s;
      if ((i ? i.querySelectorAll("svg") : []).forEach(t => {
          t.preserveAspectRatio && t.preserveAspectRatio.baseVal && 2 === t.preserveAspectRatio.baseVal.meetOrSlice && (s = t)
        }), s) {
        const i = s.cloneNode(!0);
        i.id = "bg-image-clone", i.preserveAspectRatio.baseVal.align = 4, t.prepend(i)
      }
    }
  }
  window.addEventListener("unhandledrejection", function (t) {
    if (a && "The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission." === t.reason.message && t.reason.stack.indexOf("play") >= 0) {
      a = !1;
      var i = document.getElementById("low-power-mode-notification");
      i.classList.add("display"), setTimeout(function () {
        i.classList.add("show")
      }, 1e3), document.getElementById("power-saving-proceed-button").addEventListener("click", function () {
        i.remove()
      }), document.getElementById("power-saving-proceed-button").addEventListener("touchstart", function () {
        i.remove()
      })
    }
  }), document.addEventListener("DOMContentLoaded", function (t) {
    var i, s = (i = RegExp("[?&]ref=([^&]*)").exec(window.location.search)) && decodeURIComponent(i[1].replace(/\+/g, " "));
    s && (document.cookie = "ref=" + s + ";path=/")
  }), window.addEventListener("deviceorientation", function () {
    window.isFamousStudio || !/iPhone|iPod/.test(window.navigator.userAgent) && !/Android/.test(window.navigator.userAgent) || (screen.orientation && screen.orientation.type && -1 === screen.orientation.type.indexOf("portrait") ? r() : window.orientation && 0 !== window.orientation ? r() : document.getElementById("unsupported-orientation").className = "")
  }, !0), window.onload = (() => {
    var t = document.querySelector(".card"),
      i = t ? t.querySelector("video[autoplay]") : void 0;
    i && i.play()
  })
}]);