/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

;(() => {
	var q_ = Object.create
	var tn = Object.defineProperty
	var M_ = Object.getOwnPropertyDescriptor
	var D_ = Object.getOwnPropertyNames
	var F_ = Object.getPrototypeOf,
		G_ = Object.prototype.hasOwnProperty
	var he = (e, t) => () => (e && (t = e((e = 0))), t)
	var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
		Me = (e, t) => {
			for (var r in t) tn(e, r, { get: t[r], enumerable: !0 })
		},
		As = (e, t, r, n) => {
			if ((t && typeof t == 'object') || typeof t == 'function')
				for (let i of D_(t))
					!G_.call(e, i) && i !== r && tn(e, i, { get: () => t[i], enumerable: !(n = M_(t, i)) || n.enumerable })
			return e
		}
	var ue = (e, t, r) => (
			(r = e != null ? q_(F_(e)) : {}),
			As(t || !e || !e.__esModule ? tn(r, 'default', { value: e, enumerable: !0 }) : r, e)
		),
		Ze = (e) => As(tn({}, '__esModule', { value: !0 }), e)
	var Si = u(() => {
		'use strict'
		window.tram = (function (e) {
			function t(l, h) {
				var m = new D.Bare()
				return m.init(l, h)
			}
			function r(l) {
				return l.replace(/[A-Z]/g, function (h) {
					return '-' + h.toLowerCase()
				})
			}
			function n(l) {
				var h = parseInt(l.slice(1), 16),
					m = (h >> 16) & 255,
					I = (h >> 8) & 255,
					y = 255 & h
				return [m, I, y]
			}
			function i(l, h, m) {
				return '#' + ((1 << 24) | (l << 16) | (h << 8) | m).toString(16).slice(1)
			}
			function o() {}
			function a(l, h) {
				f('Type warning: Expected: [' + l + '] Got: [' + typeof h + '] ' + h)
			}
			function s(l, h, m) {
				f('Units do not match [' + l + ']: ' + h + ', ' + m)
			}
			function c(l, h, m) {
				if ((h !== void 0 && (m = h), l === void 0)) return m
				var I = m
				return (
					xt.test(l) || !ct.test(l) ? (I = parseInt(l, 10)) : ct.test(l) && (I = 1e3 * parseFloat(l)),
					0 > I && (I = 0),
					I === I ? I : m
				)
			}
			function f(l) {
				ce.debug && window && window.console.warn(l)
			}
			function v(l) {
				for (var h = -1, m = l ? l.length : 0, I = []; ++h < m; ) {
					var y = l[h]
					y && I.push(y)
				}
				return I
			}
			var d = (function (l, h, m) {
					function I(re) {
						return typeof re == 'object'
					}
					function y(re) {
						return typeof re == 'function'
					}
					function O() {}
					function K(re, pe) {
						function G() {
							var Re = new ne()
							return y(Re.init) && Re.init.apply(Re, arguments), Re
						}
						function ne() {}
						pe === m && ((pe = re), (re = Object)), (G.Bare = ne)
						var ae,
							_e = (O[l] = re[l]),
							Qe = (ne[l] = G[l] = new O())
						return (
							(Qe.constructor = G),
							(G.mixin = function (Re) {
								return (ne[l] = G[l] = K(G, Re)[l]), G
							}),
							(G.open = function (Re) {
								if (((ae = {}), y(Re) ? (ae = Re.call(G, Qe, _e, G, re)) : I(Re) && (ae = Re), I(ae)))
									for (var hr in ae) h.call(ae, hr) && (Qe[hr] = ae[hr])
								return y(Qe.init) || (Qe.init = re), G
							}),
							G.open(pe)
						)
					}
					return K
				})('prototype', {}.hasOwnProperty),
				g = {
					ease: [
						'ease',
						function (l, h, m, I) {
							var y = (l /= I) * l,
								O = y * l
							return h + m * (-2.75 * O * y + 11 * y * y + -15.5 * O + 8 * y + 0.25 * l)
						},
					],
					'ease-in': [
						'ease-in',
						function (l, h, m, I) {
							var y = (l /= I) * l,
								O = y * l
							return h + m * (-1 * O * y + 3 * y * y + -3 * O + 2 * y)
						},
					],
					'ease-out': [
						'ease-out',
						function (l, h, m, I) {
							var y = (l /= I) * l,
								O = y * l
							return h + m * (0.3 * O * y + -1.6 * y * y + 2.2 * O + -1.8 * y + 1.9 * l)
						},
					],
					'ease-in-out': [
						'ease-in-out',
						function (l, h, m, I) {
							var y = (l /= I) * l,
								O = y * l
							return h + m * (2 * O * y + -5 * y * y + 2 * O + 2 * y)
						},
					],
					linear: [
						'linear',
						function (l, h, m, I) {
							return (m * l) / I + h
						},
					],
					'ease-in-quad': [
						'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
						function (l, h, m, I) {
							return m * (l /= I) * l + h
						},
					],
					'ease-out-quad': [
						'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
						function (l, h, m, I) {
							return -m * (l /= I) * (l - 2) + h
						},
					],
					'ease-in-out-quad': [
						'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
						function (l, h, m, I) {
							return (l /= I / 2) < 1 ? (m / 2) * l * l + h : (-m / 2) * (--l * (l - 2) - 1) + h
						},
					],
					'ease-in-cubic': [
						'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
						function (l, h, m, I) {
							return m * (l /= I) * l * l + h
						},
					],
					'ease-out-cubic': [
						'cubic-bezier(0.215, 0.610, 0.355, 1)',
						function (l, h, m, I) {
							return m * ((l = l / I - 1) * l * l + 1) + h
						},
					],
					'ease-in-out-cubic': [
						'cubic-bezier(0.645, 0.045, 0.355, 1)',
						function (l, h, m, I) {
							return (l /= I / 2) < 1 ? (m / 2) * l * l * l + h : (m / 2) * ((l -= 2) * l * l + 2) + h
						},
					],
					'ease-in-quart': [
						'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
						function (l, h, m, I) {
							return m * (l /= I) * l * l * l + h
						},
					],
					'ease-out-quart': [
						'cubic-bezier(0.165, 0.840, 0.440, 1)',
						function (l, h, m, I) {
							return -m * ((l = l / I - 1) * l * l * l - 1) + h
						},
					],
					'ease-in-out-quart': [
						'cubic-bezier(0.770, 0, 0.175, 1)',
						function (l, h, m, I) {
							return (l /= I / 2) < 1 ? (m / 2) * l * l * l * l + h : (-m / 2) * ((l -= 2) * l * l * l - 2) + h
						},
					],
					'ease-in-quint': [
						'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
						function (l, h, m, I) {
							return m * (l /= I) * l * l * l * l + h
						},
					],
					'ease-out-quint': [
						'cubic-bezier(0.230, 1, 0.320, 1)',
						function (l, h, m, I) {
							return m * ((l = l / I - 1) * l * l * l * l + 1) + h
						},
					],
					'ease-in-out-quint': [
						'cubic-bezier(0.860, 0, 0.070, 1)',
						function (l, h, m, I) {
							return (l /= I / 2) < 1 ? (m / 2) * l * l * l * l * l + h : (m / 2) * ((l -= 2) * l * l * l * l + 2) + h
						},
					],
					'ease-in-sine': [
						'cubic-bezier(0.470, 0, 0.745, 0.715)',
						function (l, h, m, I) {
							return -m * Math.cos((l / I) * (Math.PI / 2)) + m + h
						},
					],
					'ease-out-sine': [
						'cubic-bezier(0.390, 0.575, 0.565, 1)',
						function (l, h, m, I) {
							return m * Math.sin((l / I) * (Math.PI / 2)) + h
						},
					],
					'ease-in-out-sine': [
						'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
						function (l, h, m, I) {
							return (-m / 2) * (Math.cos((Math.PI * l) / I) - 1) + h
						},
					],
					'ease-in-expo': [
						'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
						function (l, h, m, I) {
							return l === 0 ? h : m * Math.pow(2, 10 * (l / I - 1)) + h
						},
					],
					'ease-out-expo': [
						'cubic-bezier(0.190, 1, 0.220, 1)',
						function (l, h, m, I) {
							return l === I ? h + m : m * (-Math.pow(2, (-10 * l) / I) + 1) + h
						},
					],
					'ease-in-out-expo': [
						'cubic-bezier(1, 0, 0, 1)',
						function (l, h, m, I) {
							return l === 0
								? h
								: l === I
								? h + m
								: (l /= I / 2) < 1
								? (m / 2) * Math.pow(2, 10 * (l - 1)) + h
								: (m / 2) * (-Math.pow(2, -10 * --l) + 2) + h
						},
					],
					'ease-in-circ': [
						'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
						function (l, h, m, I) {
							return -m * (Math.sqrt(1 - (l /= I) * l) - 1) + h
						},
					],
					'ease-out-circ': [
						'cubic-bezier(0.075, 0.820, 0.165, 1)',
						function (l, h, m, I) {
							return m * Math.sqrt(1 - (l = l / I - 1) * l) + h
						},
					],
					'ease-in-out-circ': [
						'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
						function (l, h, m, I) {
							return (l /= I / 2) < 1
								? (-m / 2) * (Math.sqrt(1 - l * l) - 1) + h
								: (m / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + h
						},
					],
					'ease-in-back': [
						'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
						function (l, h, m, I, y) {
							return y === void 0 && (y = 1.70158), m * (l /= I) * l * ((y + 1) * l - y) + h
						},
					],
					'ease-out-back': [
						'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
						function (l, h, m, I, y) {
							return y === void 0 && (y = 1.70158), m * ((l = l / I - 1) * l * ((y + 1) * l + y) + 1) + h
						},
					],
					'ease-in-out-back': [
						'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
						function (l, h, m, I, y) {
							return (
								y === void 0 && (y = 1.70158),
								(l /= I / 2) < 1
									? (m / 2) * l * l * (((y *= 1.525) + 1) * l - y) + h
									: (m / 2) * ((l -= 2) * l * (((y *= 1.525) + 1) * l + y) + 2) + h
							)
						},
					],
				},
				E = {
					'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
					'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
					'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)',
				},
				T = document,
				_ = window,
				R = 'bkwld-tram',
				x = /[\-\.0-9]/g,
				S = /[A-Z]/,
				A = 'number',
				P = /^(rgb|#)/,
				q = /(em|cm|mm|in|pt|pc|px)$/,
				w = /(em|cm|mm|in|pt|pc|px|%)$/,
				X = /(deg|rad|turn)$/,
				W = 'unitless',
				k = /(all|none) 0s ease 0s/,
				Y = /^(width|height)$/,
				te = ' ',
				L = T.createElement('a'),
				b = ['Webkit', 'Moz', 'O', 'ms'],
				C = ['-webkit-', '-moz-', '-o-', '-ms-'],
				B = function (l) {
					if (l in L.style) return { dom: l, css: l }
					var h,
						m,
						I = '',
						y = l.split('-')
					for (h = 0; h < y.length; h++) I += y[h].charAt(0).toUpperCase() + y[h].slice(1)
					for (h = 0; h < b.length; h++) if (((m = b[h] + I), m in L.style)) return { dom: m, css: C[h] + l }
				},
				V = (t.support = {
					bind: Function.prototype.bind,
					transform: B('transform'),
					transition: B('transition'),
					backface: B('backface-visibility'),
					timing: B('transition-timing-function'),
				})
			if (V.transition) {
				var J = V.timing.dom
				if (((L.style[J] = g['ease-in-back'][0]), !L.style[J])) for (var ee in E) g[ee][0] = E[ee]
			}
			var N = (t.frame = (function () {
					var l =
						_.requestAnimationFrame ||
						_.webkitRequestAnimationFrame ||
						_.mozRequestAnimationFrame ||
						_.oRequestAnimationFrame ||
						_.msRequestAnimationFrame
					return l && V.bind
						? l.bind(_)
						: function (h) {
								_.setTimeout(h, 16)
						  }
				})()),
				H = (t.now = (function () {
					var l = _.performance,
						h = l && (l.now || l.webkitNow || l.msNow || l.mozNow)
					return h && V.bind
						? h.bind(l)
						: Date.now ||
								function () {
									return +new Date()
								}
				})()),
				j = d(function (l) {
					function h(Q, se) {
						var ye = v(('' + Q).split(te)),
							le = ye[0]
						se = se || {}
						var Ce = U[le]
						if (!Ce) return f('Unsupported property: ' + le)
						if (!se.weak || !this.props[le]) {
							var Xe = Ce[0],
								qe = this.props[le]
							return qe || (qe = this.props[le] = new Xe.Bare()), qe.init(this.$el, ye, Ce, se), qe
						}
					}
					function m(Q, se, ye) {
						if (Q) {
							var le = typeof Q
							if (
								(se || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)),
								le == 'number' && se)
							)
								return (this.timer = new de({ duration: Q, context: this, complete: O })), void (this.active = !0)
							if (le == 'string' && se) {
								switch (Q) {
									case 'hide':
										G.call(this)
										break
									case 'stop':
										K.call(this)
										break
									case 'redraw':
										ne.call(this)
										break
									default:
										h.call(this, Q, ye && ye[1])
								}
								return O.call(this)
							}
							if (le == 'function') return void Q.call(this, this)
							if (le == 'object') {
								var Ce = 0
								Qe.call(
									this,
									Q,
									function (Te, P_) {
										Te.span > Ce && (Ce = Te.span), Te.stop(), Te.animate(P_)
									},
									function (Te) {
										'wait' in Te && (Ce = c(Te.wait, 0))
									}
								),
									_e.call(this),
									Ce > 0 &&
										((this.timer = new de({ duration: Ce, context: this })),
										(this.active = !0),
										se && (this.timer.complete = O))
								var Xe = this,
									qe = !1,
									en = {}
								N(function () {
									Qe.call(Xe, Q, function (Te) {
										Te.active && ((qe = !0), (en[Te.name] = Te.nextStyle))
									}),
										qe && Xe.$el.css(en)
								})
							}
						}
					}
					function I(Q) {
						;(Q = c(Q, 0)),
							this.active
								? this.queue.push({ options: Q })
								: ((this.timer = new de({ duration: Q, context: this, complete: O })), (this.active = !0))
					}
					function y(Q) {
						return this.active
							? (this.queue.push({ options: Q, args: arguments }), void (this.timer.complete = O))
							: f('No active transition timer. Use start() or wait() before then().')
					}
					function O() {
						if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
							var Q = this.queue.shift()
							m.call(this, Q.options, !0, Q.args)
						}
					}
					function K(Q) {
						this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)
						var se
						typeof Q == 'string' ? ((se = {}), (se[Q] = 1)) : (se = typeof Q == 'object' && Q != null ? Q : this.props),
							Qe.call(this, se, Re),
							_e.call(this)
					}
					function re(Q) {
						K.call(this, Q), Qe.call(this, Q, hr, N_)
					}
					function pe(Q) {
						typeof Q != 'string' && (Q = 'block'), (this.el.style.display = Q)
					}
					function G() {
						K.call(this), (this.el.style.display = 'none')
					}
					function ne() {
						this.el.offsetHeight
					}
					function ae() {
						K.call(this), e.removeData(this.el, R), (this.$el = this.el = null)
					}
					function _e() {
						var Q,
							se,
							ye = []
						this.upstream && ye.push(this.upstream)
						for (Q in this.props) (se = this.props[Q]), se.active && ye.push(se.string)
						;(ye = ye.join(',')), this.style !== ye && ((this.style = ye), (this.el.style[V.transition.dom] = ye))
					}
					function Qe(Q, se, ye) {
						var le,
							Ce,
							Xe,
							qe,
							en = se !== Re,
							Te = {}
						for (le in Q)
							(Xe = Q[le]),
								le in ve
									? (Te.transform || (Te.transform = {}), (Te.transform[le] = Xe))
									: (S.test(le) && (le = r(le)), le in U ? (Te[le] = Xe) : (qe || (qe = {}), (qe[le] = Xe)))
						for (le in Te) {
							if (((Xe = Te[le]), (Ce = this.props[le]), !Ce)) {
								if (!en) continue
								Ce = h.call(this, le)
							}
							se.call(this, Ce, Xe)
						}
						ye && qe && ye.call(this, qe)
					}
					function Re(Q) {
						Q.stop()
					}
					function hr(Q, se) {
						Q.set(se)
					}
					function N_(Q) {
						this.$el.css(Q)
					}
					function He(Q, se) {
						l[Q] = function () {
							return this.children ? L_.call(this, se, arguments) : (this.el && se.apply(this, arguments), this)
						}
					}
					function L_(Q, se) {
						var ye,
							le = this.children.length
						for (ye = 0; le > ye; ye++) Q.apply(this.children[ye], se)
						return this
					}
					;(l.init = function (Q) {
						if (
							((this.$el = e(Q)),
							(this.el = this.$el[0]),
							(this.props = {}),
							(this.queue = []),
							(this.style = ''),
							(this.active = !1),
							ce.keepInherited && !ce.fallback)
						) {
							var se = F(this.el, 'transition')
							se && !k.test(se) && (this.upstream = se)
						}
						V.backface && ce.hideBackface && p(this.el, V.backface.css, 'hidden')
					}),
						He('add', h),
						He('start', m),
						He('wait', I),
						He('then', y),
						He('next', O),
						He('stop', K),
						He('set', re),
						He('show', pe),
						He('hide', G),
						He('redraw', ne),
						He('destroy', ae)
				}),
				D = d(j, function (l) {
					function h(m, I) {
						var y = e.data(m, R) || e.data(m, R, new j.Bare())
						return y.el || y.init(m), I ? y.start(I) : y
					}
					l.init = function (m, I) {
						var y = e(m)
						if (!y.length) return this
						if (y.length === 1) return h(y[0], I)
						var O = []
						return (
							y.each(function (K, re) {
								O.push(h(re, I))
							}),
							(this.children = O),
							this
						)
					}
				}),
				M = d(function (l) {
					function h() {
						var O = this.get()
						this.update('auto')
						var K = this.get()
						return this.update(O), K
					}
					function m(O, K, re) {
						return K !== void 0 && (re = K), O in g ? O : re
					}
					function I(O) {
						var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O)
						return (K ? i(K[1], K[2], K[3]) : O).replace(/#(\w)(\w)(\w)$/, '#$1$1$2$2$3$3')
					}
					var y = { duration: 500, ease: 'ease', delay: 0 }
					;(l.init = function (O, K, re, pe) {
						;(this.$el = O), (this.el = O[0])
						var G = K[0]
						re[2] && (G = re[2]),
							z[G] && (G = z[G]),
							(this.name = G),
							(this.type = re[1]),
							(this.duration = c(K[1], this.duration, y.duration)),
							(this.ease = m(K[2], this.ease, y.ease)),
							(this.delay = c(K[3], this.delay, y.delay)),
							(this.span = this.duration + this.delay),
							(this.active = !1),
							(this.nextStyle = null),
							(this.auto = Y.test(this.name)),
							(this.unit = pe.unit || this.unit || ce.defaultUnit),
							(this.angle = pe.angle || this.angle || ce.defaultAngle),
							ce.fallback || pe.fallback
								? (this.animate = this.fallback)
								: ((this.animate = this.transition),
								  (this.string =
										this.name +
										te +
										this.duration +
										'ms' +
										(this.ease != 'ease' ? te + g[this.ease][0] : '') +
										(this.delay ? te + this.delay + 'ms' : '')))
					}),
						(l.set = function (O) {
							;(O = this.convert(O, this.type)), this.update(O), this.redraw()
						}),
						(l.transition = function (O) {
							;(this.active = !0),
								(O = this.convert(O, this.type)),
								this.auto &&
									(this.el.style[this.name] == 'auto' && (this.update(this.get()), this.redraw()),
									O == 'auto' && (O = h.call(this))),
								(this.nextStyle = O)
						}),
						(l.fallback = function (O) {
							var K = this.el.style[this.name] || this.convert(this.get(), this.type)
							;(O = this.convert(O, this.type)),
								this.auto &&
									(K == 'auto' && (K = this.convert(this.get(), this.type)), O == 'auto' && (O = h.call(this))),
								(this.tween = new Z({
									from: K,
									to: O,
									duration: this.duration,
									delay: this.delay,
									ease: this.ease,
									update: this.update,
									context: this,
								}))
						}),
						(l.get = function () {
							return F(this.el, this.name)
						}),
						(l.update = function (O) {
							p(this.el, this.name, O)
						}),
						(l.stop = function () {
							;(this.active || this.nextStyle) &&
								((this.active = !1), (this.nextStyle = null), p(this.el, this.name, this.get()))
							var O = this.tween
							O && O.context && O.destroy()
						}),
						(l.convert = function (O, K) {
							if (O == 'auto' && this.auto) return O
							var re,
								pe = typeof O == 'number',
								G = typeof O == 'string'
							switch (K) {
								case A:
									if (pe) return O
									if (G && O.replace(x, '') === '') return +O
									re = 'number(unitless)'
									break
								case P:
									if (G) {
										if (O === '' && this.original) return this.original
										if (K.test(O)) return O.charAt(0) == '#' && O.length == 7 ? O : I(O)
									}
									re = 'hex or rgb string'
									break
								case q:
									if (pe) return O + this.unit
									if (G && K.test(O)) return O
									re = 'number(px) or string(unit)'
									break
								case w:
									if (pe) return O + this.unit
									if (G && K.test(O)) return O
									re = 'number(px) or string(unit or %)'
									break
								case X:
									if (pe) return O + this.angle
									if (G && K.test(O)) return O
									re = 'number(deg) or string(angle)'
									break
								case W:
									if (pe || (G && w.test(O))) return O
									re = 'number(unitless) or string(unit or %)'
							}
							return a(re, O), O
						}),
						(l.redraw = function () {
							this.el.offsetHeight
						})
				}),
				$ = d(M, function (l, h) {
					l.init = function () {
						h.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), P))
					}
				}),
				ie = d(M, function (l, h) {
					;(l.init = function () {
						h.init.apply(this, arguments), (this.animate = this.fallback)
					}),
						(l.get = function () {
							return this.$el[this.name]()
						}),
						(l.update = function (m) {
							this.$el[this.name](m)
						})
				}),
				oe = d(M, function (l, h) {
					function m(I, y) {
						var O, K, re, pe, G
						for (O in I)
							(pe = ve[O]), (re = pe[0]), (K = pe[1] || O), (G = this.convert(I[O], re)), y.call(this, K, G, re)
					}
					;(l.init = function () {
						h.init.apply(this, arguments),
							this.current ||
								((this.current = {}),
								ve.perspective &&
									ce.perspective &&
									((this.current.perspective = ce.perspective),
									p(this.el, this.name, this.style(this.current)),
									this.redraw()))
					}),
						(l.set = function (I) {
							m.call(this, I, function (y, O) {
								this.current[y] = O
							}),
								p(this.el, this.name, this.style(this.current)),
								this.redraw()
						}),
						(l.transition = function (I) {
							var y = this.values(I)
							this.tween = new ut({
								current: this.current,
								values: y,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease,
							})
							var O,
								K = {}
							for (O in this.current) K[O] = O in y ? y[O] : this.current[O]
							;(this.active = !0), (this.nextStyle = this.style(K))
						}),
						(l.fallback = function (I) {
							var y = this.values(I)
							this.tween = new ut({
								current: this.current,
								values: y,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease,
								update: this.update,
								context: this,
							})
						}),
						(l.update = function () {
							p(this.el, this.name, this.style(this.current))
						}),
						(l.style = function (I) {
							var y,
								O = ''
							for (y in I) O += y + '(' + I[y] + ') '
							return O
						}),
						(l.values = function (I) {
							var y,
								O = {}
							return (
								m.call(this, I, function (K, re, pe) {
									;(O[K] = re),
										this.current[K] === void 0 &&
											((y = 0), ~K.indexOf('scale') && (y = 1), (this.current[K] = this.convert(y, pe)))
								}),
								O
							)
						})
				}),
				Z = d(function (l) {
					function h(G) {
						re.push(G) === 1 && N(m)
					}
					function m() {
						var G,
							ne,
							ae,
							_e = re.length
						if (_e) for (N(m), ne = H(), G = _e; G--; ) (ae = re[G]), ae && ae.render(ne)
					}
					function I(G) {
						var ne,
							ae = e.inArray(G, re)
						ae >= 0 && ((ne = re.slice(ae + 1)), (re.length = ae), ne.length && (re = re.concat(ne)))
					}
					function y(G) {
						return Math.round(G * pe) / pe
					}
					function O(G, ne, ae) {
						return i(G[0] + ae * (ne[0] - G[0]), G[1] + ae * (ne[1] - G[1]), G[2] + ae * (ne[2] - G[2]))
					}
					var K = { ease: g.ease[1], from: 0, to: 1 }
					;(l.init = function (G) {
						;(this.duration = G.duration || 0), (this.delay = G.delay || 0)
						var ne = G.ease || K.ease
						g[ne] && (ne = g[ne][1]),
							typeof ne != 'function' && (ne = K.ease),
							(this.ease = ne),
							(this.update = G.update || o),
							(this.complete = G.complete || o),
							(this.context = G.context || this),
							(this.name = G.name)
						var ae = G.from,
							_e = G.to
						ae === void 0 && (ae = K.from),
							_e === void 0 && (_e = K.to),
							(this.unit = G.unit || ''),
							typeof ae == 'number' && typeof _e == 'number'
								? ((this.begin = ae), (this.change = _e - ae))
								: this.format(_e, ae),
							(this.value = this.begin + this.unit),
							(this.start = H()),
							G.autoplay !== !1 && this.play()
					}),
						(l.play = function () {
							this.active || (this.start || (this.start = H()), (this.active = !0), h(this))
						}),
						(l.stop = function () {
							this.active && ((this.active = !1), I(this))
						}),
						(l.render = function (G) {
							var ne,
								ae = G - this.start
							if (this.delay) {
								if (ae <= this.delay) return
								ae -= this.delay
							}
							if (ae < this.duration) {
								var _e = this.ease(ae, 0, 1, this.duration)
								return (
									(ne = this.startRGB ? O(this.startRGB, this.endRGB, _e) : y(this.begin + _e * this.change)),
									(this.value = ne + this.unit),
									void this.update.call(this.context, this.value)
								)
							}
							;(ne = this.endHex || this.begin + this.change),
								(this.value = ne + this.unit),
								this.update.call(this.context, this.value),
								this.complete.call(this.context),
								this.destroy()
						}),
						(l.format = function (G, ne) {
							if (((ne += ''), (G += ''), G.charAt(0) == '#'))
								return (
									(this.startRGB = n(ne)),
									(this.endRGB = n(G)),
									(this.endHex = G),
									(this.begin = 0),
									void (this.change = 1)
								)
							if (!this.unit) {
								var ae = ne.replace(x, ''),
									_e = G.replace(x, '')
								ae !== _e && s('tween', ne, G), (this.unit = ae)
							}
							;(ne = parseFloat(ne)), (G = parseFloat(G)), (this.begin = this.value = ne), (this.change = G - ne)
						}),
						(l.destroy = function () {
							this.stop(), (this.context = null), (this.ease = this.update = this.complete = o)
						})
					var re = [],
						pe = 1e3
				}),
				de = d(Z, function (l) {
					;(l.init = function (h) {
						;(this.duration = h.duration || 0),
							(this.complete = h.complete || o),
							(this.context = h.context),
							this.play()
					}),
						(l.render = function (h) {
							var m = h - this.start
							m < this.duration || (this.complete.call(this.context), this.destroy())
						})
				}),
				ut = d(Z, function (l, h) {
					;(l.init = function (m) {
						;(this.context = m.context), (this.update = m.update), (this.tweens = []), (this.current = m.current)
						var I, y
						for (I in m.values)
							(y = m.values[I]),
								this.current[I] !== y &&
									this.tweens.push(
										new Z({
											name: I,
											from: this.current[I],
											to: y,
											duration: m.duration,
											delay: m.delay,
											ease: m.ease,
											autoplay: !1,
										})
									)
						this.play()
					}),
						(l.render = function (m) {
							var I,
								y,
								O = this.tweens.length,
								K = !1
							for (I = O; I--; )
								(y = this.tweens[I]), y.context && (y.render(m), (this.current[y.name] = y.value), (K = !0))
							return K ? void (this.update && this.update.call(this.context)) : this.destroy()
						}),
						(l.destroy = function () {
							if ((h.destroy.call(this), this.tweens)) {
								var m,
									I = this.tweens.length
								for (m = I; m--; ) this.tweens[m].destroy()
								;(this.tweens = null), (this.current = null)
							}
						})
				}),
				ce = (t.config = {
					debug: !1,
					defaultUnit: 'px',
					defaultAngle: 'deg',
					keepInherited: !1,
					hideBackface: !1,
					perspective: '',
					fallback: !V.transition,
					agentTests: [],
				})
			;(t.fallback = function (l) {
				if (!V.transition) return (ce.fallback = !0)
				ce.agentTests.push('(' + l + ')')
				var h = new RegExp(ce.agentTests.join('|'), 'i')
				ce.fallback = h.test(navigator.userAgent)
			}),
				t.fallback('6.0.[2-5] Safari'),
				(t.tween = function (l) {
					return new Z(l)
				}),
				(t.delay = function (l, h, m) {
					return new de({ complete: h, duration: l, context: m })
				}),
				(e.fn.tram = function (l) {
					return t.call(null, this, l)
				})
			var p = e.style,
				F = e.css,
				z = { transform: V.transform && V.transform.css },
				U = {
					color: [$, P],
					background: [$, P, 'background-color'],
					'outline-color': [$, P],
					'border-color': [$, P],
					'border-top-color': [$, P],
					'border-right-color': [$, P],
					'border-bottom-color': [$, P],
					'border-left-color': [$, P],
					'border-width': [M, q],
					'border-top-width': [M, q],
					'border-right-width': [M, q],
					'border-bottom-width': [M, q],
					'border-left-width': [M, q],
					'border-spacing': [M, q],
					'letter-spacing': [M, q],
					margin: [M, q],
					'margin-top': [M, q],
					'margin-right': [M, q],
					'margin-bottom': [M, q],
					'margin-left': [M, q],
					padding: [M, q],
					'padding-top': [M, q],
					'padding-right': [M, q],
					'padding-bottom': [M, q],
					'padding-left': [M, q],
					'outline-width': [M, q],
					opacity: [M, A],
					top: [M, w],
					right: [M, w],
					bottom: [M, w],
					left: [M, w],
					'font-size': [M, w],
					'text-indent': [M, w],
					'word-spacing': [M, w],
					width: [M, w],
					'min-width': [M, w],
					'max-width': [M, w],
					height: [M, w],
					'min-height': [M, w],
					'max-height': [M, w],
					'line-height': [M, W],
					'scroll-top': [ie, A, 'scrollTop'],
					'scroll-left': [ie, A, 'scrollLeft'],
				},
				ve = {}
			V.transform &&
				((U.transform = [oe]),
				(ve = {
					x: [w, 'translateX'],
					y: [w, 'translateY'],
					rotate: [X],
					rotateX: [X],
					rotateY: [X],
					scale: [A],
					scaleX: [A],
					scaleY: [A],
					skew: [X],
					skewX: [X],
					skewY: [X],
				})),
				V.transform &&
					V.backface &&
					((ve.z = [w, 'translateZ']), (ve.rotateZ = [X]), (ve.scaleZ = [A]), (ve.perspective = [q]))
			var xt = /ms/,
				ct = /s|\./
			return (e.tram = t)
		})(window.jQuery)
	})
	var Ss = u((TH, xs) => {
		'use strict'
		var V_ = window.$,
			U_ = Si() && V_.tram
		xs.exports = (function () {
			var e = {}
			e.VERSION = '1.6.0-Webflow'
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				o = r.push,
				a = r.slice,
				s = r.concat,
				c = n.toString,
				f = n.hasOwnProperty,
				v = r.forEach,
				d = r.map,
				g = r.reduce,
				E = r.reduceRight,
				T = r.filter,
				_ = r.every,
				R = r.some,
				x = r.indexOf,
				S = r.lastIndexOf,
				A = Array.isArray,
				P = Object.keys,
				q = i.bind,
				w =
					(e.each =
					e.forEach =
						function (b, C, B) {
							if (b == null) return b
							if (v && b.forEach === v) b.forEach(C, B)
							else if (b.length === +b.length) {
								for (var V = 0, J = b.length; V < J; V++) if (C.call(B, b[V], V, b) === t) return
							} else
								for (var ee = e.keys(b), V = 0, J = ee.length; V < J; V++)
									if (C.call(B, b[ee[V]], ee[V], b) === t) return
							return b
						})
			;(e.map = e.collect =
				function (b, C, B) {
					var V = []
					return b == null
						? V
						: d && b.map === d
						? b.map(C, B)
						: (w(b, function (J, ee, N) {
								V.push(C.call(B, J, ee, N))
						  }),
						  V)
				}),
				(e.find = e.detect =
					function (b, C, B) {
						var V
						return (
							X(b, function (J, ee, N) {
								if (C.call(B, J, ee, N)) return (V = J), !0
							}),
							V
						)
					}),
				(e.filter = e.select =
					function (b, C, B) {
						var V = []
						return b == null
							? V
							: T && b.filter === T
							? b.filter(C, B)
							: (w(b, function (J, ee, N) {
									C.call(B, J, ee, N) && V.push(J)
							  }),
							  V)
					})
			var X =
				(e.some =
				e.any =
					function (b, C, B) {
						C || (C = e.identity)
						var V = !1
						return b == null
							? V
							: R && b.some === R
							? b.some(C, B)
							: (w(b, function (J, ee, N) {
									if (V || (V = C.call(B, J, ee, N))) return t
							  }),
							  !!V)
					})
			;(e.contains = e.include =
				function (b, C) {
					return b == null
						? !1
						: x && b.indexOf === x
						? b.indexOf(C) != -1
						: X(b, function (B) {
								return B === C
						  })
				}),
				(e.delay = function (b, C) {
					var B = a.call(arguments, 2)
					return setTimeout(function () {
						return b.apply(null, B)
					}, C)
				}),
				(e.defer = function (b) {
					return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)))
				}),
				(e.throttle = function (b) {
					var C, B, V
					return function () {
						C ||
							((C = !0),
							(B = arguments),
							(V = this),
							U_.frame(function () {
								;(C = !1), b.apply(V, B)
							}))
					}
				}),
				(e.debounce = function (b, C, B) {
					var V,
						J,
						ee,
						N,
						H,
						j = function () {
							var D = e.now() - N
							D < C ? (V = setTimeout(j, C - D)) : ((V = null), B || ((H = b.apply(ee, J)), (ee = J = null)))
						}
					return function () {
						;(ee = this), (J = arguments), (N = e.now())
						var D = B && !V
						return V || (V = setTimeout(j, C)), D && ((H = b.apply(ee, J)), (ee = J = null)), H
					}
				}),
				(e.defaults = function (b) {
					if (!e.isObject(b)) return b
					for (var C = 1, B = arguments.length; C < B; C++) {
						var V = arguments[C]
						for (var J in V) b[J] === void 0 && (b[J] = V[J])
					}
					return b
				}),
				(e.keys = function (b) {
					if (!e.isObject(b)) return []
					if (P) return P(b)
					var C = []
					for (var B in b) e.has(b, B) && C.push(B)
					return C
				}),
				(e.has = function (b, C) {
					return f.call(b, C)
				}),
				(e.isObject = function (b) {
					return b === Object(b)
				}),
				(e.now =
					Date.now ||
					function () {
						return new Date().getTime()
					}),
				(e.templateSettings = {
					evaluate: /<%([\s\S]+?)%>/g,
					interpolate: /<%=([\s\S]+?)%>/g,
					escape: /<%-([\s\S]+?)%>/g,
				})
			var W = /(.)^/,
				k = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' },
				Y = /\\|'|\r|\n|\u2028|\u2029/g,
				te = function (b) {
					return '\\' + k[b]
				},
				L = /^\s*(\w|\$)+\s*$/
			return (
				(e.template = function (b, C, B) {
					!C && B && (C = B), (C = e.defaults({}, C, e.templateSettings))
					var V = RegExp(
							[(C.escape || W).source, (C.interpolate || W).source, (C.evaluate || W).source].join('|') + '|$',
							'g'
						),
						J = 0,
						ee = "__p+='"
					b.replace(V, function (D, M, $, ie, oe) {
						return (
							(ee += b.slice(J, oe).replace(Y, te)),
							(J = oe + D.length),
							M
								? (ee +=
										`'+
((__t=(` +
										M +
										`))==null?'':_.escape(__t))+
'`)
								: $
								? (ee +=
										`'+
((__t=(` +
										$ +
										`))==null?'':__t)+
'`)
								: ie &&
								  (ee +=
										`';
` +
										ie +
										`
__p+='`),
							D
						)
					}),
						(ee += `';
`)
					var N = C.variable
					if (N) {
						if (!L.test(N)) throw new Error('variable is not a bare identifier: ' + N)
					} else
						(ee =
							`with(obj||{}){
` +
							ee +
							`}
`),
							(N = 'obj')
					ee =
						`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
						ee +
						`return __p;
`
					var H
					try {
						H = new Function(C.variable || 'obj', '_', ee)
					} catch (D) {
						throw ((D.source = ee), D)
					}
					var j = function (D) {
						return H.call(this, D, e)
					}
					return (
						(j.source =
							'function(' +
							N +
							`){
` +
							ee +
							'}'),
						j
					)
				}),
				e
			)
		})()
	})
	var et = u((bH, Ms) => {
		'use strict'
		var fe = {},
			Gt = {},
			Vt = [],
			Ri = window.Webflow || [],
			Et = window.jQuery,
			Be = Et(window),
			H_ = Et(document),
			Je = Et.isFunction,
			We = (fe._ = Ss()),
			Rs = (fe.tram = Si() && Et.tram),
			nn = !1,
			Ci = !1
		Rs.config.hideBackface = !1
		Rs.config.keepInherited = !0
		fe.define = function (e, t, r) {
			Gt[e] && Ns(Gt[e])
			var n = (Gt[e] = t(Et, We, r) || {})
			return Cs(n), n
		}
		fe.require = function (e) {
			return Gt[e]
		}
		function Cs(e) {
			fe.env() && (Je(e.design) && Be.on('__wf_design', e.design), Je(e.preview) && Be.on('__wf_preview', e.preview)),
				Je(e.destroy) && Be.on('__wf_destroy', e.destroy),
				e.ready && Je(e.ready) && X_(e)
		}
		function X_(e) {
			if (nn) {
				e.ready()
				return
			}
			We.contains(Vt, e.ready) || Vt.push(e.ready)
		}
		function Ns(e) {
			Je(e.design) && Be.off('__wf_design', e.design),
				Je(e.preview) && Be.off('__wf_preview', e.preview),
				Je(e.destroy) && Be.off('__wf_destroy', e.destroy),
				e.ready && Je(e.ready) && W_(e)
		}
		function W_(e) {
			Vt = We.filter(Vt, function (t) {
				return t !== e.ready
			})
		}
		fe.push = function (e) {
			if (nn) {
				Je(e) && e()
				return
			}
			Ri.push(e)
		}
		fe.env = function (e) {
			var t = window.__wf_design,
				r = typeof t < 'u'
			if (!e) return r
			if (e === 'design') return r && t
			if (e === 'preview') return r && !t
			if (e === 'slug') return r && window.__wf_slug
			if (e === 'editor') return window.WebflowEditor
			if (e === 'test') return window.__wf_test
			if (e === 'frame') return window !== window.top
		}
		var rn = navigator.userAgent.toLowerCase(),
			Ls = (fe.env.touch =
				'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
			B_ = (fe.env.chrome =
				/chrome/.test(rn) && /Google/.test(navigator.vendor) && parseInt(rn.match(/chrome\/(\d+)\./)[1], 10)),
			k_ = (fe.env.ios = /(ipod|iphone|ipad)/.test(rn))
		fe.env.safari = /safari/.test(rn) && !B_ && !k_
		var wi
		Ls &&
			H_.on('touchstart mousedown', function (e) {
				wi = e.target
			})
		fe.validClick = Ls
			? function (e) {
					return e === wi || Et.contains(e, wi)
			  }
			: function () {
					return !0
			  }
		var Ps = 'resize.webflow orientationchange.webflow load.webflow',
			j_ = 'scroll.webflow ' + Ps
		fe.resize = Ni(Be, Ps)
		fe.scroll = Ni(Be, j_)
		fe.redraw = Ni()
		function Ni(e, t) {
			var r = [],
				n = {}
			return (
				(n.up = We.throttle(function (i) {
					We.each(r, function (o) {
						o(i)
					})
				})),
				e && t && e.on(t, n.up),
				(n.on = function (i) {
					typeof i == 'function' && (We.contains(r, i) || r.push(i))
				}),
				(n.off = function (i) {
					if (!arguments.length) {
						r = []
						return
					}
					r = We.filter(r, function (o) {
						return o !== i
					})
				}),
				n
			)
		}
		fe.location = function (e) {
			window.location = e
		}
		fe.env() && (fe.location = function () {})
		fe.ready = function () {
			;(nn = !0), Ci ? z_() : We.each(Vt, ws), We.each(Ri, ws), fe.resize.up()
		}
		function ws(e) {
			Je(e) && e()
		}
		function z_() {
			;(Ci = !1), We.each(Gt, Cs)
		}
		var St
		fe.load = function (e) {
			St.then(e)
		}
		function qs() {
			St && (St.reject(), Be.off('load', St.resolve)), (St = new Et.Deferred()), Be.on('load', St.resolve)
		}
		fe.destroy = function (e) {
			;(e = e || {}),
				(Ci = !0),
				Be.triggerHandler('__wf_destroy'),
				e.domready != null && (nn = e.domready),
				We.each(Gt, Ns),
				fe.resize.off(),
				fe.scroll.off(),
				fe.redraw.off(),
				(Vt = []),
				(Ri = []),
				St.state() === 'pending' && qs()
		}
		Et(fe.ready)
		qs()
		Ms.exports = window.Webflow = fe
	})
	var Gs = u((IH, Fs) => {
		'use strict'
		var Ds = et()
		Ds.define(
			'brand',
			(Fs.exports = function (e) {
				var t = {},
					r = document,
					n = e('html'),
					i = e('body'),
					o = '.w-webflow-badge',
					a = window.location,
					s = /PhantomJS/i.test(navigator.userAgent),
					c = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange',
					f
				t.ready = function () {
					var E = n.attr('data-wf-status'),
						T = n.attr('data-wf-domain') || ''
					;/\.webflow\.io$/i.test(T) && a.hostname !== T && (E = !0),
						E && !s && ((f = f || d()), g(), setTimeout(g, 500), e(r).off(c, v).on(c, v))
				}
				function v() {
					var E =
						r.fullScreen ||
						r.mozFullScreen ||
						r.webkitIsFullScreen ||
						r.msFullscreenElement ||
						!!r.webkitFullscreenElement
					e(f).attr('style', E ? 'display: none !important;' : '')
				}
				function d() {
					var E = e('<a class="w-webflow-badge"></a>').attr('href', 'https://webflow.com?utm_campaign=brandjs'),
						T = e('<img>')
							.attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg')
							.attr('alt', '')
							.css({ marginRight: '4px', width: '26px' }),
						_ = e('<img>')
							.attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg')
							.attr('alt', 'Made in Webflow')
					return E.append(T, _), E[0]
				}
				function g() {
					var E = i.children(o),
						T = E.length && E.get(0) === f,
						_ = Ds.env('editor')
					if (T) {
						_ && E.remove()
						return
					}
					E.length && E.remove(), _ || i.append(f)
				}
				return t
			})
		)
	})
	var Us = u((OH, Vs) => {
		'use strict'
		var K_ = et()
		K_.define(
			'focus-visible',
			(Vs.exports = function () {
				function e(r) {
					var n = !0,
						i = !1,
						o = null,
						a = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							'datetime-local': !0,
						}
					function s(A) {
						return !!(
							A &&
							A !== document &&
							A.nodeName !== 'HTML' &&
							A.nodeName !== 'BODY' &&
							'classList' in A &&
							'contains' in A.classList
						)
					}
					function c(A) {
						var P = A.type,
							q = A.tagName
						return !!(
							(q === 'INPUT' && a[P] && !A.readOnly) ||
							(q === 'TEXTAREA' && !A.readOnly) ||
							A.isContentEditable
						)
					}
					function f(A) {
						A.getAttribute('data-wf-focus-visible') || A.setAttribute('data-wf-focus-visible', 'true')
					}
					function v(A) {
						A.getAttribute('data-wf-focus-visible') && A.removeAttribute('data-wf-focus-visible')
					}
					function d(A) {
						A.metaKey || A.altKey || A.ctrlKey || (s(r.activeElement) && f(r.activeElement), (n = !0))
					}
					function g() {
						n = !1
					}
					function E(A) {
						s(A.target) && (n || c(A.target)) && f(A.target)
					}
					function T(A) {
						s(A.target) &&
							A.target.hasAttribute('data-wf-focus-visible') &&
							((i = !0),
							window.clearTimeout(o),
							(o = window.setTimeout(function () {
								i = !1
							}, 100)),
							v(A.target))
					}
					function _() {
						document.visibilityState === 'hidden' && (i && (n = !0), R())
					}
					function R() {
						document.addEventListener('mousemove', S),
							document.addEventListener('mousedown', S),
							document.addEventListener('mouseup', S),
							document.addEventListener('pointermove', S),
							document.addEventListener('pointerdown', S),
							document.addEventListener('pointerup', S),
							document.addEventListener('touchmove', S),
							document.addEventListener('touchstart', S),
							document.addEventListener('touchend', S)
					}
					function x() {
						document.removeEventListener('mousemove', S),
							document.removeEventListener('mousedown', S),
							document.removeEventListener('mouseup', S),
							document.removeEventListener('pointermove', S),
							document.removeEventListener('pointerdown', S),
							document.removeEventListener('pointerup', S),
							document.removeEventListener('touchmove', S),
							document.removeEventListener('touchstart', S),
							document.removeEventListener('touchend', S)
					}
					function S(A) {
						;(A.target.nodeName && A.target.nodeName.toLowerCase() === 'html') || ((n = !1), x())
					}
					document.addEventListener('keydown', d, !0),
						document.addEventListener('mousedown', g, !0),
						document.addEventListener('pointerdown', g, !0),
						document.addEventListener('touchstart', g, !0),
						document.addEventListener('visibilitychange', _, !0),
						R(),
						r.addEventListener('focus', E, !0),
						r.addEventListener('blur', T, !0)
				}
				function t() {
					if (typeof document < 'u')
						try {
							document.querySelector(':focus-visible')
						} catch {
							e(document)
						}
				}
				return { ready: t }
			})
		)
	})
	var Ws = u((AH, Xs) => {
		'use strict'
		var Hs = et()
		Hs.define(
			'focus',
			(Xs.exports = function () {
				var e = [],
					t = !1
				function r(a) {
					t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
				}
				function n(a) {
					var s = a.target,
						c = s.tagName
					return (
						(/^a$/i.test(c) && s.href != null) ||
						(/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
						(/^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled) ||
						(!/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
						/^audio$/i.test(c) ||
						(/^video$/i.test(c) && s.controls === !0)
					)
				}
				function i(a) {
					n(a) &&
						((t = !0),
						setTimeout(() => {
							for (t = !1, a.target.focus(); e.length > 0; ) {
								var s = e.pop()
								s.target.dispatchEvent(new MouseEvent(s.type, s))
							}
						}, 0))
				}
				function o() {
					typeof document < 'u' &&
						document.body.hasAttribute('data-wf-focus-within') &&
						Hs.env.safari &&
						(document.addEventListener('mousedown', i, !0),
						document.addEventListener('mouseup', r, !0),
						document.addEventListener('click', r, !0))
				}
				return { ready: o }
			})
		)
	})
	var js = u((xH, ks) => {
		'use strict'
		var Li = window.jQuery,
			tt = {},
			on = [],
			Bs = '.w-ix',
			an = {
				reset: function (e, t) {
					t.__wf_intro = null
				},
				intro: function (e, t) {
					t.__wf_intro || ((t.__wf_intro = !0), Li(t).triggerHandler(tt.types.INTRO))
				},
				outro: function (e, t) {
					t.__wf_intro && ((t.__wf_intro = null), Li(t).triggerHandler(tt.types.OUTRO))
				},
			}
		tt.triggers = {}
		tt.types = { INTRO: 'w-ix-intro' + Bs, OUTRO: 'w-ix-outro' + Bs }
		tt.init = function () {
			for (var e = on.length, t = 0; t < e; t++) {
				var r = on[t]
				r[0](0, r[1])
			}
			;(on = []), Li.extend(tt.triggers, an)
		}
		tt.async = function () {
			for (var e in an) {
				var t = an[e]
				an.hasOwnProperty(e) &&
					(tt.triggers[e] = function (r, n) {
						on.push([t, n])
					})
			}
		}
		tt.async()
		ks.exports = tt
	})
	var qi = u((SH, Ys) => {
		'use strict'
		var Pi = js()
		function zs(e, t) {
			var r = document.createEvent('CustomEvent')
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var Y_ = window.jQuery,
			sn = {},
			Ks = '.w-ix',
			$_ = {
				reset: function (e, t) {
					Pi.triggers.reset(e, t)
				},
				intro: function (e, t) {
					Pi.triggers.intro(e, t), zs(t, 'COMPONENT_ACTIVE')
				},
				outro: function (e, t) {
					Pi.triggers.outro(e, t), zs(t, 'COMPONENT_INACTIVE')
				},
			}
		sn.triggers = {}
		sn.types = { INTRO: 'w-ix-intro' + Ks, OUTRO: 'w-ix-outro' + Ks }
		Y_.extend(sn.triggers, $_)
		Ys.exports = sn
	})
	var $s = u((wH, lt) => {
		function Mi(e) {
			return (
				(lt.exports = Mi =
					typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
						? function (t) {
								return typeof t
						  }
						: function (t) {
								return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
									? 'symbol'
									: typeof t
						  }),
				(lt.exports.__esModule = !0),
				(lt.exports.default = lt.exports),
				Mi(e)
			)
		}
		;(lt.exports = Mi), (lt.exports.__esModule = !0), (lt.exports.default = lt.exports)
	})
	var un = u((RH, Er) => {
		var Q_ = $s().default
		function Qs(e) {
			if (typeof WeakMap != 'function') return null
			var t = new WeakMap(),
				r = new WeakMap()
			return (Qs = function (i) {
				return i ? r : t
			})(e)
		}
		function Z_(e, t) {
			if (!t && e && e.__esModule) return e
			if (e === null || (Q_(e) !== 'object' && typeof e != 'function')) return { default: e }
			var r = Qs(t)
			if (r && r.has(e)) return r.get(e)
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor
			for (var o in e)
				if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
					var a = i ? Object.getOwnPropertyDescriptor(e, o) : null
					a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o])
				}
			return (n.default = e), r && r.set(e, n), n
		}
		;(Er.exports = Z_), (Er.exports.__esModule = !0), (Er.exports.default = Er.exports)
	})
	var Zs = u((CH, yr) => {
		function J_(e) {
			return e && e.__esModule ? e : { default: e }
		}
		;(yr.exports = J_), (yr.exports.__esModule = !0), (yr.exports.default = yr.exports)
	})
	var Ee = u((NH, Js) => {
		var cn = function (e) {
			return e && e.Math == Math && e
		}
		Js.exports =
			cn(typeof globalThis == 'object' && globalThis) ||
			cn(typeof window == 'object' && window) ||
			cn(typeof self == 'object' && self) ||
			cn(typeof global == 'object' && global) ||
			(function () {
				return this
			})() ||
			Function('return this')()
	})
	var Ut = u((LH, eu) => {
		eu.exports = function (e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	})
	var wt = u((PH, tu) => {
		var eT = Ut()
		tu.exports = !eT(function () {
			return (
				Object.defineProperty({}, 1, {
					get: function () {
						return 7
					},
				})[1] != 7
			)
		})
	})
	var ln = u((qH, ru) => {
		var mr = Function.prototype.call
		ru.exports = mr.bind
			? mr.bind(mr)
			: function () {
					return mr.apply(mr, arguments)
			  }
	})
	var au = u((ou) => {
		'use strict'
		var nu = {}.propertyIsEnumerable,
			iu = Object.getOwnPropertyDescriptor,
			tT = iu && !nu.call({ 1: 2 }, 1)
		ou.f = tT
			? function (t) {
					var r = iu(this, t)
					return !!r && r.enumerable
			  }
			: nu
	})
	var Di = u((DH, su) => {
		su.exports = function (e, t) {
			return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t }
		}
	})
	var ke = u((FH, cu) => {
		var uu = Function.prototype,
			Fi = uu.bind,
			Gi = uu.call,
			rT = Fi && Fi.bind(Gi)
		cu.exports = Fi
			? function (e) {
					return e && rT(Gi, e)
			  }
			: function (e) {
					return (
						e &&
						function () {
							return Gi.apply(e, arguments)
						}
					)
			  }
	})
	var du = u((GH, fu) => {
		var lu = ke(),
			nT = lu({}.toString),
			iT = lu(''.slice)
		fu.exports = function (e) {
			return iT(nT(e), 8, -1)
		}
	})
	var vu = u((VH, pu) => {
		var oT = Ee(),
			aT = ke(),
			sT = Ut(),
			uT = du(),
			Vi = oT.Object,
			cT = aT(''.split)
		pu.exports = sT(function () {
			return !Vi('z').propertyIsEnumerable(0)
		})
			? function (e) {
					return uT(e) == 'String' ? cT(e, '') : Vi(e)
			  }
			: Vi
	})
	var Ui = u((UH, gu) => {
		var lT = Ee(),
			fT = lT.TypeError
		gu.exports = function (e) {
			if (e == null) throw fT("Can't call method on " + e)
			return e
		}
	})
	var _r = u((HH, hu) => {
		var dT = vu(),
			pT = Ui()
		hu.exports = function (e) {
			return dT(pT(e))
		}
	})
	var rt = u((XH, Eu) => {
		Eu.exports = function (e) {
			return typeof e == 'function'
		}
	})
	var Ht = u((WH, yu) => {
		var vT = rt()
		yu.exports = function (e) {
			return typeof e == 'object' ? e !== null : vT(e)
		}
	})
	var Tr = u((BH, mu) => {
		var Hi = Ee(),
			gT = rt(),
			hT = function (e) {
				return gT(e) ? e : void 0
			}
		mu.exports = function (e, t) {
			return arguments.length < 2 ? hT(Hi[e]) : Hi[e] && Hi[e][t]
		}
	})
	var Tu = u((kH, _u) => {
		var ET = ke()
		_u.exports = ET({}.isPrototypeOf)
	})
	var Iu = u((jH, bu) => {
		var yT = Tr()
		bu.exports = yT('navigator', 'userAgent') || ''
	})
	var Cu = u((zH, Ru) => {
		var wu = Ee(),
			Xi = Iu(),
			Ou = wu.process,
			Au = wu.Deno,
			xu = (Ou && Ou.versions) || (Au && Au.version),
			Su = xu && xu.v8,
			je,
			fn
		Su && ((je = Su.split('.')), (fn = je[0] > 0 && je[0] < 4 ? 1 : +(je[0] + je[1])))
		!fn &&
			Xi &&
			((je = Xi.match(/Edge\/(\d+)/)), (!je || je[1] >= 74) && ((je = Xi.match(/Chrome\/(\d+)/)), je && (fn = +je[1])))
		Ru.exports = fn
	})
	var Wi = u((KH, Lu) => {
		var Nu = Cu(),
			mT = Ut()
		Lu.exports =
			!!Object.getOwnPropertySymbols &&
			!mT(function () {
				var e = Symbol()
				return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && Nu && Nu < 41)
			})
	})
	var Bi = u((YH, Pu) => {
		var _T = Wi()
		Pu.exports = _T && !Symbol.sham && typeof Symbol.iterator == 'symbol'
	})
	var ki = u(($H, qu) => {
		var TT = Ee(),
			bT = Tr(),
			IT = rt(),
			OT = Tu(),
			AT = Bi(),
			xT = TT.Object
		qu.exports = AT
			? function (e) {
					return typeof e == 'symbol'
			  }
			: function (e) {
					var t = bT('Symbol')
					return IT(t) && OT(t.prototype, xT(e))
			  }
	})
	var Du = u((QH, Mu) => {
		var ST = Ee(),
			wT = ST.String
		Mu.exports = function (e) {
			try {
				return wT(e)
			} catch {
				return 'Object'
			}
		}
	})
	var Gu = u((ZH, Fu) => {
		var RT = Ee(),
			CT = rt(),
			NT = Du(),
			LT = RT.TypeError
		Fu.exports = function (e) {
			if (CT(e)) return e
			throw LT(NT(e) + ' is not a function')
		}
	})
	var Uu = u((JH, Vu) => {
		var PT = Gu()
		Vu.exports = function (e, t) {
			var r = e[t]
			return r == null ? void 0 : PT(r)
		}
	})
	var Xu = u((eX, Hu) => {
		var qT = Ee(),
			ji = ln(),
			zi = rt(),
			Ki = Ht(),
			MT = qT.TypeError
		Hu.exports = function (e, t) {
			var r, n
			if (
				(t === 'string' && zi((r = e.toString)) && !Ki((n = ji(r, e)))) ||
				(zi((r = e.valueOf)) && !Ki((n = ji(r, e)))) ||
				(t !== 'string' && zi((r = e.toString)) && !Ki((n = ji(r, e))))
			)
				return n
			throw MT("Can't convert object to primitive value")
		}
	})
	var Bu = u((tX, Wu) => {
		Wu.exports = !1
	})
	var dn = u((rX, ju) => {
		var ku = Ee(),
			DT = Object.defineProperty
		ju.exports = function (e, t) {
			try {
				DT(ku, e, { value: t, configurable: !0, writable: !0 })
			} catch {
				ku[e] = t
			}
			return t
		}
	})
	var pn = u((nX, Ku) => {
		var FT = Ee(),
			GT = dn(),
			zu = '__core-js_shared__',
			VT = FT[zu] || GT(zu, {})
		Ku.exports = VT
	})
	var Yi = u((iX, $u) => {
		var UT = Bu(),
			Yu = pn()
		;($u.exports = function (e, t) {
			return Yu[e] || (Yu[e] = t !== void 0 ? t : {})
		})('versions', []).push({
			version: '3.19.0',
			mode: UT ? 'pure' : 'global',
			copyright: '\xA9 2021 Denis Pushkarev (zloirock.ru)',
		})
	})
	var Zu = u((oX, Qu) => {
		var HT = Ee(),
			XT = Ui(),
			WT = HT.Object
		Qu.exports = function (e) {
			return WT(XT(e))
		}
	})
	var yt = u((aX, Ju) => {
		var BT = ke(),
			kT = Zu(),
			jT = BT({}.hasOwnProperty)
		Ju.exports =
			Object.hasOwn ||
			function (t, r) {
				return jT(kT(t), r)
			}
	})
	var $i = u((sX, ec) => {
		var zT = ke(),
			KT = 0,
			YT = Math.random(),
			$T = zT((1).toString)
		ec.exports = function (e) {
			return 'Symbol(' + (e === void 0 ? '' : e) + ')_' + $T(++KT + YT, 36)
		}
	})
	var Qi = u((uX, oc) => {
		var QT = Ee(),
			ZT = Yi(),
			tc = yt(),
			JT = $i(),
			rc = Wi(),
			ic = Bi(),
			Xt = ZT('wks'),
			Rt = QT.Symbol,
			nc = Rt && Rt.for,
			eb = ic ? Rt : (Rt && Rt.withoutSetter) || JT
		oc.exports = function (e) {
			if (!tc(Xt, e) || !(rc || typeof Xt[e] == 'string')) {
				var t = 'Symbol.' + e
				rc && tc(Rt, e) ? (Xt[e] = Rt[e]) : ic && nc ? (Xt[e] = nc(t)) : (Xt[e] = eb(t))
			}
			return Xt[e]
		}
	})
	var cc = u((cX, uc) => {
		var tb = Ee(),
			rb = ln(),
			ac = Ht(),
			sc = ki(),
			nb = Uu(),
			ib = Xu(),
			ob = Qi(),
			ab = tb.TypeError,
			sb = ob('toPrimitive')
		uc.exports = function (e, t) {
			if (!ac(e) || sc(e)) return e
			var r = nb(e, sb),
				n
			if (r) {
				if ((t === void 0 && (t = 'default'), (n = rb(r, e, t)), !ac(n) || sc(n))) return n
				throw ab("Can't convert object to primitive value")
			}
			return t === void 0 && (t = 'number'), ib(e, t)
		}
	})
	var Zi = u((lX, lc) => {
		var ub = cc(),
			cb = ki()
		lc.exports = function (e) {
			var t = ub(e, 'string')
			return cb(t) ? t : t + ''
		}
	})
	var eo = u((fX, dc) => {
		var lb = Ee(),
			fc = Ht(),
			Ji = lb.document,
			fb = fc(Ji) && fc(Ji.createElement)
		dc.exports = function (e) {
			return fb ? Ji.createElement(e) : {}
		}
	})
	var to = u((dX, pc) => {
		var db = wt(),
			pb = Ut(),
			vb = eo()
		pc.exports =
			!db &&
			!pb(function () {
				return (
					Object.defineProperty(vb('div'), 'a', {
						get: function () {
							return 7
						},
					}).a != 7
				)
			})
	})
	var ro = u((gc) => {
		var gb = wt(),
			hb = ln(),
			Eb = au(),
			yb = Di(),
			mb = _r(),
			_b = Zi(),
			Tb = yt(),
			bb = to(),
			vc = Object.getOwnPropertyDescriptor
		gc.f = gb
			? vc
			: function (t, r) {
					if (((t = mb(t)), (r = _b(r)), bb))
						try {
							return vc(t, r)
						} catch {}
					if (Tb(t, r)) return yb(!hb(Eb.f, t, r), t[r])
			  }
	})
	var br = u((vX, Ec) => {
		var hc = Ee(),
			Ib = Ht(),
			Ob = hc.String,
			Ab = hc.TypeError
		Ec.exports = function (e) {
			if (Ib(e)) return e
			throw Ab(Ob(e) + ' is not an object')
		}
	})
	var Ir = u((_c) => {
		var xb = Ee(),
			Sb = wt(),
			wb = to(),
			yc = br(),
			Rb = Zi(),
			Cb = xb.TypeError,
			mc = Object.defineProperty
		_c.f = Sb
			? mc
			: function (t, r, n) {
					if ((yc(t), (r = Rb(r)), yc(n), wb))
						try {
							return mc(t, r, n)
						} catch {}
					if ('get' in n || 'set' in n) throw Cb('Accessors not supported')
					return 'value' in n && (t[r] = n.value), t
			  }
	})
	var vn = u((hX, Tc) => {
		var Nb = wt(),
			Lb = Ir(),
			Pb = Di()
		Tc.exports = Nb
			? function (e, t, r) {
					return Lb.f(e, t, Pb(1, r))
			  }
			: function (e, t, r) {
					return (e[t] = r), e
			  }
	})
	var io = u((EX, bc) => {
		var qb = ke(),
			Mb = rt(),
			no = pn(),
			Db = qb(Function.toString)
		Mb(no.inspectSource) ||
			(no.inspectSource = function (e) {
				return Db(e)
			})
		bc.exports = no.inspectSource
	})
	var Ac = u((yX, Oc) => {
		var Fb = Ee(),
			Gb = rt(),
			Vb = io(),
			Ic = Fb.WeakMap
		Oc.exports = Gb(Ic) && /native code/.test(Vb(Ic))
	})
	var oo = u((mX, Sc) => {
		var Ub = Yi(),
			Hb = $i(),
			xc = Ub('keys')
		Sc.exports = function (e) {
			return xc[e] || (xc[e] = Hb(e))
		}
	})
	var gn = u((_X, wc) => {
		wc.exports = {}
	})
	var qc = u((TX, Pc) => {
		var Xb = Ac(),
			Lc = Ee(),
			ao = ke(),
			Wb = Ht(),
			Bb = vn(),
			so = yt(),
			uo = pn(),
			kb = oo(),
			jb = gn(),
			Rc = 'Object already initialized',
			lo = Lc.TypeError,
			zb = Lc.WeakMap,
			hn,
			Or,
			En,
			Kb = function (e) {
				return En(e) ? Or(e) : hn(e, {})
			},
			Yb = function (e) {
				return function (t) {
					var r
					if (!Wb(t) || (r = Or(t)).type !== e) throw lo('Incompatible receiver, ' + e + ' required')
					return r
				}
			}
		Xb || uo.state
			? ((mt = uo.state || (uo.state = new zb())),
			  (Cc = ao(mt.get)),
			  (co = ao(mt.has)),
			  (Nc = ao(mt.set)),
			  (hn = function (e, t) {
					if (co(mt, e)) throw new lo(Rc)
					return (t.facade = e), Nc(mt, e, t), t
			  }),
			  (Or = function (e) {
					return Cc(mt, e) || {}
			  }),
			  (En = function (e) {
					return co(mt, e)
			  }))
			: ((Ct = kb('state')),
			  (jb[Ct] = !0),
			  (hn = function (e, t) {
					if (so(e, Ct)) throw new lo(Rc)
					return (t.facade = e), Bb(e, Ct, t), t
			  }),
			  (Or = function (e) {
					return so(e, Ct) ? e[Ct] : {}
			  }),
			  (En = function (e) {
					return so(e, Ct)
			  }))
		var mt, Cc, co, Nc, Ct
		Pc.exports = { set: hn, get: Or, has: En, enforce: Kb, getterFor: Yb }
	})
	var Fc = u((bX, Dc) => {
		var fo = wt(),
			$b = yt(),
			Mc = Function.prototype,
			Qb = fo && Object.getOwnPropertyDescriptor,
			po = $b(Mc, 'name'),
			Zb = po && function () {}.name === 'something',
			Jb = po && (!fo || (fo && Qb(Mc, 'name').configurable))
		Dc.exports = { EXISTS: po, PROPER: Zb, CONFIGURABLE: Jb }
	})
	var Xc = u((IX, Hc) => {
		var eI = Ee(),
			Gc = rt(),
			tI = yt(),
			Vc = vn(),
			rI = dn(),
			nI = io(),
			Uc = qc(),
			iI = Fc().CONFIGURABLE,
			oI = Uc.get,
			aI = Uc.enforce,
			sI = String(String).split('String')
		;(Hc.exports = function (e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				o = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				c
			if (
				(Gc(r) &&
					(String(s).slice(0, 7) === 'Symbol(' && (s = '[' + String(s).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
					(!tI(r, 'name') || (iI && r.name !== s)) && Vc(r, 'name', s),
					(c = aI(r)),
					c.source || (c.source = sI.join(typeof s == 'string' ? s : ''))),
				e === eI)
			) {
				o ? (e[t] = r) : rI(t, r)
				return
			} else i ? !a && e[t] && (o = !0) : delete e[t]
			o ? (e[t] = r) : Vc(e, t, r)
		})(Function.prototype, 'toString', function () {
			return (Gc(this) && oI(this).source) || nI(this)
		})
	})
	var vo = u((OX, Wc) => {
		var uI = Math.ceil,
			cI = Math.floor
		Wc.exports = function (e) {
			var t = +e
			return t !== t || t === 0 ? 0 : (t > 0 ? cI : uI)(t)
		}
	})
	var kc = u((AX, Bc) => {
		var lI = vo(),
			fI = Math.max,
			dI = Math.min
		Bc.exports = function (e, t) {
			var r = lI(e)
			return r < 0 ? fI(r + t, 0) : dI(r, t)
		}
	})
	var zc = u((xX, jc) => {
		var pI = vo(),
			vI = Math.min
		jc.exports = function (e) {
			return e > 0 ? vI(pI(e), 9007199254740991) : 0
		}
	})
	var Yc = u((SX, Kc) => {
		var gI = zc()
		Kc.exports = function (e) {
			return gI(e.length)
		}
	})
	var go = u((wX, Qc) => {
		var hI = _r(),
			EI = kc(),
			yI = Yc(),
			$c = function (e) {
				return function (t, r, n) {
					var i = hI(t),
						o = yI(i),
						a = EI(n, o),
						s
					if (e && r != r) {
						for (; o > a; ) if (((s = i[a++]), s != s)) return !0
					} else for (; o > a; a++) if ((e || a in i) && i[a] === r) return e || a || 0
					return !e && -1
				}
			}
		Qc.exports = { includes: $c(!0), indexOf: $c(!1) }
	})
	var Eo = u((RX, Jc) => {
		var mI = ke(),
			ho = yt(),
			_I = _r(),
			TI = go().indexOf,
			bI = gn(),
			Zc = mI([].push)
		Jc.exports = function (e, t) {
			var r = _I(e),
				n = 0,
				i = [],
				o
			for (o in r) !ho(bI, o) && ho(r, o) && Zc(i, o)
			for (; t.length > n; ) ho(r, (o = t[n++])) && (~TI(i, o) || Zc(i, o))
			return i
		}
	})
	var yn = u((CX, el) => {
		el.exports = [
			'constructor',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'toLocaleString',
			'toString',
			'valueOf',
		]
	})
	var rl = u((tl) => {
		var II = Eo(),
			OI = yn(),
			AI = OI.concat('length', 'prototype')
		tl.f =
			Object.getOwnPropertyNames ||
			function (t) {
				return II(t, AI)
			}
	})
	var il = u((nl) => {
		nl.f = Object.getOwnPropertySymbols
	})
	var al = u((PX, ol) => {
		var xI = Tr(),
			SI = ke(),
			wI = rl(),
			RI = il(),
			CI = br(),
			NI = SI([].concat)
		ol.exports =
			xI('Reflect', 'ownKeys') ||
			function (t) {
				var r = wI.f(CI(t)),
					n = RI.f
				return n ? NI(r, n(t)) : r
			}
	})
	var ul = u((qX, sl) => {
		var LI = yt(),
			PI = al(),
			qI = ro(),
			MI = Ir()
		sl.exports = function (e, t) {
			for (var r = PI(t), n = MI.f, i = qI.f, o = 0; o < r.length; o++) {
				var a = r[o]
				LI(e, a) || n(e, a, i(t, a))
			}
		}
	})
	var ll = u((MX, cl) => {
		var DI = Ut(),
			FI = rt(),
			GI = /#|\.prototype\./,
			Ar = function (e, t) {
				var r = UI[VI(e)]
				return r == XI ? !0 : r == HI ? !1 : FI(t) ? DI(t) : !!t
			},
			VI = (Ar.normalize = function (e) {
				return String(e).replace(GI, '.').toLowerCase()
			}),
			UI = (Ar.data = {}),
			HI = (Ar.NATIVE = 'N'),
			XI = (Ar.POLYFILL = 'P')
		cl.exports = Ar
	})
	var dl = u((DX, fl) => {
		var yo = Ee(),
			WI = ro().f,
			BI = vn(),
			kI = Xc(),
			jI = dn(),
			zI = ul(),
			KI = ll()
		fl.exports = function (e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				o,
				a,
				s,
				c,
				f,
				v
			if ((n ? (a = yo) : i ? (a = yo[r] || jI(r, {})) : (a = (yo[r] || {}).prototype), a))
				for (s in t) {
					if (
						((f = t[s]),
						e.noTargetGet ? ((v = WI(a, s)), (c = v && v.value)) : (c = a[s]),
						(o = KI(n ? s : r + (i ? '.' : '#') + s, e.forced)),
						!o && c !== void 0)
					) {
						if (typeof f == typeof c) continue
						zI(f, c)
					}
					;(e.sham || (c && c.sham)) && BI(f, 'sham', !0), kI(a, s, f, e)
				}
		}
	})
	var vl = u((FX, pl) => {
		var YI = Eo(),
			$I = yn()
		pl.exports =
			Object.keys ||
			function (t) {
				return YI(t, $I)
			}
	})
	var hl = u((GX, gl) => {
		var QI = wt(),
			ZI = Ir(),
			JI = br(),
			eO = _r(),
			tO = vl()
		gl.exports = QI
			? Object.defineProperties
			: function (t, r) {
					JI(t)
					for (var n = eO(r), i = tO(r), o = i.length, a = 0, s; o > a; ) ZI.f(t, (s = i[a++]), n[s])
					return t
			  }
	})
	var yl = u((VX, El) => {
		var rO = Tr()
		El.exports = rO('document', 'documentElement')
	})
	var xl = u((UX, Al) => {
		var nO = br(),
			iO = hl(),
			ml = yn(),
			oO = gn(),
			aO = yl(),
			sO = eo(),
			uO = oo(),
			_l = '>',
			Tl = '<',
			_o = 'prototype',
			To = 'script',
			Il = uO('IE_PROTO'),
			mo = function () {},
			Ol = function (e) {
				return Tl + To + _l + e + Tl + '/' + To + _l
			},
			bl = function (e) {
				e.write(Ol('')), e.close()
				var t = e.parentWindow.Object
				return (e = null), t
			},
			cO = function () {
				var e = sO('iframe'),
					t = 'java' + To + ':',
					r
				return (
					(e.style.display = 'none'),
					aO.appendChild(e),
					(e.src = String(t)),
					(r = e.contentWindow.document),
					r.open(),
					r.write(Ol('document.F=Object')),
					r.close(),
					r.F
				)
			},
			mn,
			_n = function () {
				try {
					mn = new ActiveXObject('htmlfile')
				} catch {}
				_n = typeof document < 'u' ? (document.domain && mn ? bl(mn) : cO()) : bl(mn)
				for (var e = ml.length; e--; ) delete _n[_o][ml[e]]
				return _n()
			}
		oO[Il] = !0
		Al.exports =
			Object.create ||
			function (t, r) {
				var n
				return (
					t !== null ? ((mo[_o] = nO(t)), (n = new mo()), (mo[_o] = null), (n[Il] = t)) : (n = _n()),
					r === void 0 ? n : iO(n, r)
				)
			}
	})
	var wl = u((HX, Sl) => {
		var lO = Qi(),
			fO = xl(),
			dO = Ir(),
			bo = lO('unscopables'),
			Io = Array.prototype
		Io[bo] == null && dO.f(Io, bo, { configurable: !0, value: fO(null) })
		Sl.exports = function (e) {
			Io[bo][e] = !0
		}
	})
	var Rl = u(() => {
		'use strict'
		var pO = dl(),
			vO = go().includes,
			gO = wl()
		pO(
			{ target: 'Array', proto: !0 },
			{
				includes: function (t) {
					return vO(this, t, arguments.length > 1 ? arguments[1] : void 0)
				},
			}
		)
		gO('includes')
	})
	var Nl = u((BX, Cl) => {
		var hO = Ee(),
			EO = ke()
		Cl.exports = function (e, t) {
			return EO(hO[e].prototype[t])
		}
	})
	var Pl = u((kX, Ll) => {
		Rl()
		var yO = Nl()
		Ll.exports = yO('Array', 'includes')
	})
	var Ml = u((jX, ql) => {
		var mO = Pl()
		ql.exports = mO
	})
	var Fl = u((zX, Dl) => {
		var _O = Ml()
		Dl.exports = _O
	})
	var Oo = u((KX, Gl) => {
		var TO = typeof global == 'object' && global && global.Object === Object && global
		Gl.exports = TO
	})
	var ze = u((YX, Vl) => {
		var bO = Oo(),
			IO = typeof self == 'object' && self && self.Object === Object && self,
			OO = bO || IO || Function('return this')()
		Vl.exports = OO
	})
	var Wt = u(($X, Ul) => {
		var AO = ze(),
			xO = AO.Symbol
		Ul.exports = xO
	})
	var Bl = u((QX, Wl) => {
		var Hl = Wt(),
			Xl = Object.prototype,
			SO = Xl.hasOwnProperty,
			wO = Xl.toString,
			xr = Hl ? Hl.toStringTag : void 0
		function RO(e) {
			var t = SO.call(e, xr),
				r = e[xr]
			try {
				e[xr] = void 0
				var n = !0
			} catch {}
			var i = wO.call(e)
			return n && (t ? (e[xr] = r) : delete e[xr]), i
		}
		Wl.exports = RO
	})
	var jl = u((ZX, kl) => {
		var CO = Object.prototype,
			NO = CO.toString
		function LO(e) {
			return NO.call(e)
		}
		kl.exports = LO
	})
	var _t = u((JX, Yl) => {
		var zl = Wt(),
			PO = Bl(),
			qO = jl(),
			MO = '[object Null]',
			DO = '[object Undefined]',
			Kl = zl ? zl.toStringTag : void 0
		function FO(e) {
			return e == null ? (e === void 0 ? DO : MO) : Kl && Kl in Object(e) ? PO(e) : qO(e)
		}
		Yl.exports = FO
	})
	var Ao = u((eW, $l) => {
		function GO(e, t) {
			return function (r) {
				return e(t(r))
			}
		}
		$l.exports = GO
	})
	var xo = u((tW, Ql) => {
		var VO = Ao(),
			UO = VO(Object.getPrototypeOf, Object)
		Ql.exports = UO
	})
	var ft = u((rW, Zl) => {
		function HO(e) {
			return e != null && typeof e == 'object'
		}
		Zl.exports = HO
	})
	var So = u((nW, ef) => {
		var XO = _t(),
			WO = xo(),
			BO = ft(),
			kO = '[object Object]',
			jO = Function.prototype,
			zO = Object.prototype,
			Jl = jO.toString,
			KO = zO.hasOwnProperty,
			YO = Jl.call(Object)
		function $O(e) {
			if (!BO(e) || XO(e) != kO) return !1
			var t = WO(e)
			if (t === null) return !0
			var r = KO.call(t, 'constructor') && t.constructor
			return typeof r == 'function' && r instanceof r && Jl.call(r) == YO
		}
		ef.exports = $O
	})
	var tf = u((wo) => {
		'use strict'
		Object.defineProperty(wo, '__esModule', { value: !0 })
		wo.default = QO
		function QO(e) {
			var t,
				r = e.Symbol
			return (
				typeof r == 'function'
					? r.observable
						? (t = r.observable)
						: ((t = r('observable')), (r.observable = t))
					: (t = '@@observable'),
				t
			)
		}
	})
	var rf = u((Co, Ro) => {
		'use strict'
		Object.defineProperty(Co, '__esModule', { value: !0 })
		var ZO = tf(),
			JO = eA(ZO)
		function eA(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var Bt
		typeof self < 'u'
			? (Bt = self)
			: typeof window < 'u'
			? (Bt = window)
			: typeof global < 'u'
			? (Bt = global)
			: typeof Ro < 'u'
			? (Bt = Ro)
			: (Bt = Function('return this')())
		var tA = (0, JO.default)(Bt)
		Co.default = tA
	})
	var No = u((Sr) => {
		'use strict'
		Sr.__esModule = !0
		Sr.ActionTypes = void 0
		Sr.default = sf
		var rA = So(),
			nA = af(rA),
			iA = rf(),
			nf = af(iA)
		function af(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var of = (Sr.ActionTypes = { INIT: '@@redux/INIT' })
		function sf(e, t, r) {
			var n
			if ((typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)), typeof r < 'u')) {
				if (typeof r != 'function') throw new Error('Expected the enhancer to be a function.')
				return r(sf)(e, t)
			}
			if (typeof e != 'function') throw new Error('Expected the reducer to be a function.')
			var i = e,
				o = t,
				a = [],
				s = a,
				c = !1
			function f() {
				s === a && (s = a.slice())
			}
			function v() {
				return o
			}
			function d(_) {
				if (typeof _ != 'function') throw new Error('Expected listener to be a function.')
				var R = !0
				return (
					f(),
					s.push(_),
					function () {
						if (R) {
							;(R = !1), f()
							var S = s.indexOf(_)
							s.splice(S, 1)
						}
					}
				)
			}
			function g(_) {
				if (!(0, nA.default)(_))
					throw new Error('Actions must be plain objects. Use custom middleware for async actions.')
				if (typeof _.type > 'u')
					throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')
				if (c) throw new Error('Reducers may not dispatch actions.')
				try {
					;(c = !0), (o = i(o, _))
				} finally {
					c = !1
				}
				for (var R = (a = s), x = 0; x < R.length; x++) R[x]()
				return _
			}
			function E(_) {
				if (typeof _ != 'function') throw new Error('Expected the nextReducer to be a function.')
				;(i = _), g({ type: of.INIT })
			}
			function T() {
				var _,
					R = d
				return (
					(_ = {
						subscribe: function (S) {
							if (typeof S != 'object') throw new TypeError('Expected the observer to be an object.')
							function A() {
								S.next && S.next(v())
							}
							A()
							var P = R(A)
							return { unsubscribe: P }
						},
					}),
					(_[nf.default] = function () {
						return this
					}),
					_
				)
			}
			return (
				g({ type: of.INIT }),
				(n = { dispatch: g, subscribe: d, getState: v, replaceReducer: E }),
				(n[nf.default] = T),
				n
			)
		}
	})
	var Po = u((Lo) => {
		'use strict'
		Lo.__esModule = !0
		Lo.default = oA
		function oA(e) {
			typeof console < 'u' && typeof console.error == 'function' && console.error(e)
			try {
				throw new Error(e)
			} catch {}
		}
	})
	var lf = u((qo) => {
		'use strict'
		qo.__esModule = !0
		qo.default = lA
		var uf = No(),
			aA = So(),
			sW = cf(aA),
			sA = Po(),
			uW = cf(sA)
		function cf(e) {
			return e && e.__esModule ? e : { default: e }
		}
		function uA(e, t) {
			var r = t && t.type,
				n = (r && '"' + r.toString() + '"') || 'an action'
			return (
				'Given action ' +
				n +
				', reducer "' +
				e +
				'" returned undefined. To ignore an action, you must explicitly return the previous state.'
			)
		}
		function cA(e) {
			Object.keys(e).forEach(function (t) {
				var r = e[t],
					n = r(void 0, { type: uf.ActionTypes.INIT })
				if (typeof n > 'u')
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
					)
				var i = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.')
				if (typeof r(void 0, { type: i }) > 'u')
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined when probed with a random type. ' +
							("Don't try to handle " + uf.ActionTypes.INIT + ' or other actions in "redux/*" ') +
							'namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
					)
			})
		}
		function lA(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n]
				typeof e[i] == 'function' && (r[i] = e[i])
			}
			var o = Object.keys(r)
			if (!1) var a
			var s
			try {
				cA(r)
			} catch (c) {
				s = c
			}
			return function () {
				var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					v = arguments[1]
				if (s) throw s
				if (!1) var d
				for (var g = !1, E = {}, T = 0; T < o.length; T++) {
					var _ = o[T],
						R = r[_],
						x = f[_],
						S = R(x, v)
					if (typeof S > 'u') {
						var A = uA(_, v)
						throw new Error(A)
					}
					;(E[_] = S), (g = g || S !== x)
				}
				return g ? E : f
			}
		}
	})
	var df = u((Mo) => {
		'use strict'
		Mo.__esModule = !0
		Mo.default = fA
		function ff(e, t) {
			return function () {
				return t(e.apply(void 0, arguments))
			}
		}
		function fA(e, t) {
			if (typeof e == 'function') return ff(e, t)
			if (typeof e != 'object' || e === null)
				throw new Error(
					'bindActionCreators expected an object or a function, instead received ' +
						(e === null ? 'null' : typeof e) +
						'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
				)
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var o = r[i],
					a = e[o]
				typeof a == 'function' && (n[o] = ff(a, t))
			}
			return n
		}
	})
	var Fo = u((Do) => {
		'use strict'
		Do.__esModule = !0
		Do.default = dA
		function dA() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
			if (t.length === 0)
				return function (o) {
					return o
				}
			if (t.length === 1) return t[0]
			var n = t[t.length - 1],
				i = t.slice(0, -1)
			return function () {
				return i.reduceRight(function (o, a) {
					return a(o)
				}, n.apply(void 0, arguments))
			}
		}
	})
	var pf = u((Go) => {
		'use strict'
		Go.__esModule = !0
		var pA =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t]
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			}
		Go.default = EA
		var vA = Fo(),
			gA = hA(vA)
		function hA(e) {
			return e && e.__esModule ? e : { default: e }
		}
		function EA() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
			return function (n) {
				return function (i, o, a) {
					var s = n(i, o, a),
						c = s.dispatch,
						f = [],
						v = {
							getState: s.getState,
							dispatch: function (g) {
								return c(g)
							},
						}
					return (
						(f = t.map(function (d) {
							return d(v)
						})),
						(c = gA.default.apply(void 0, f)(s.dispatch)),
						pA({}, s, { dispatch: c })
					)
				}
			}
		}
	})
	var Vo = u((Ue) => {
		'use strict'
		Ue.__esModule = !0
		Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0
		var yA = No(),
			mA = kt(yA),
			_A = lf(),
			TA = kt(_A),
			bA = df(),
			IA = kt(bA),
			OA = pf(),
			AA = kt(OA),
			xA = Fo(),
			SA = kt(xA),
			wA = Po(),
			pW = kt(wA)
		function kt(e) {
			return e && e.__esModule ? e : { default: e }
		}
		Ue.createStore = mA.default
		Ue.combineReducers = TA.default
		Ue.bindActionCreators = IA.default
		Ue.applyMiddleware = AA.default
		Ue.compose = SA.default
	})
	var Ke,
		Uo,
		nt,
		RA,
		CA,
		Tn,
		NA,
		Ho = he(() => {
			'use strict'
			;(Ke = {
				NAVBAR_OPEN: 'NAVBAR_OPEN',
				NAVBAR_CLOSE: 'NAVBAR_CLOSE',
				TAB_ACTIVE: 'TAB_ACTIVE',
				TAB_INACTIVE: 'TAB_INACTIVE',
				SLIDER_ACTIVE: 'SLIDER_ACTIVE',
				SLIDER_INACTIVE: 'SLIDER_INACTIVE',
				DROPDOWN_OPEN: 'DROPDOWN_OPEN',
				DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
				MOUSE_CLICK: 'MOUSE_CLICK',
				MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
				MOUSE_DOWN: 'MOUSE_DOWN',
				MOUSE_UP: 'MOUSE_UP',
				MOUSE_OVER: 'MOUSE_OVER',
				MOUSE_OUT: 'MOUSE_OUT',
				MOUSE_MOVE: 'MOUSE_MOVE',
				MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
				SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
				SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
				SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
				ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
				ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
				PAGE_START: 'PAGE_START',
				PAGE_FINISH: 'PAGE_FINISH',
				PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
				PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
				PAGE_SCROLL: 'PAGE_SCROLL',
			}),
				(Uo = { ELEMENT: 'ELEMENT', CLASS: 'CLASS', PAGE: 'PAGE' }),
				(nt = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' }),
				(RA = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' }),
				(CA = { CHILDREN: 'CHILDREN', SIBLINGS: 'SIBLINGS', IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN' }),
				(Tn = {
					FADE_EFFECT: 'FADE_EFFECT',
					SLIDE_EFFECT: 'SLIDE_EFFECT',
					GROW_EFFECT: 'GROW_EFFECT',
					SHRINK_EFFECT: 'SHRINK_EFFECT',
					SPIN_EFFECT: 'SPIN_EFFECT',
					FLY_EFFECT: 'FLY_EFFECT',
					POP_EFFECT: 'POP_EFFECT',
					FLIP_EFFECT: 'FLIP_EFFECT',
					JIGGLE_EFFECT: 'JIGGLE_EFFECT',
					PULSE_EFFECT: 'PULSE_EFFECT',
					DROP_EFFECT: 'DROP_EFFECT',
					BLINK_EFFECT: 'BLINK_EFFECT',
					BOUNCE_EFFECT: 'BOUNCE_EFFECT',
					FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
					FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
					RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
					JELLO_EFFECT: 'JELLO_EFFECT',
					GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
					SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
					PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT',
				}),
				(NA = {
					LEFT: 'LEFT',
					RIGHT: 'RIGHT',
					BOTTOM: 'BOTTOM',
					TOP: 'TOP',
					BOTTOM_LEFT: 'BOTTOM_LEFT',
					BOTTOM_RIGHT: 'BOTTOM_RIGHT',
					TOP_RIGHT: 'TOP_RIGHT',
					TOP_LEFT: 'TOP_LEFT',
					CLOCKWISE: 'CLOCKWISE',
					COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE',
				})
		})
	var De,
		LA,
		bn = he(() => {
			'use strict'
			;(De = {
				TRANSFORM_MOVE: 'TRANSFORM_MOVE',
				TRANSFORM_SCALE: 'TRANSFORM_SCALE',
				TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
				TRANSFORM_SKEW: 'TRANSFORM_SKEW',
				STYLE_OPACITY: 'STYLE_OPACITY',
				STYLE_SIZE: 'STYLE_SIZE',
				STYLE_FILTER: 'STYLE_FILTER',
				STYLE_FONT_VARIATION: 'STYLE_FONT_VARIATION',
				STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
				STYLE_BORDER: 'STYLE_BORDER',
				STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
				OBJECT_VALUE: 'OBJECT_VALUE',
				PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
				PLUGIN_SPLINE: 'PLUGIN_SPLINE',
				PLUGIN_VARIABLE: 'PLUGIN_VARIABLE',
				GENERAL_DISPLAY: 'GENERAL_DISPLAY',
				GENERAL_START_ACTION: 'GENERAL_START_ACTION',
				GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
				GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
				GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
				GENERAL_LOOP: 'GENERAL_LOOP',
				STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW',
			}),
				(LA = { ELEMENT: 'ELEMENT', ELEMENT_CLASS: 'ELEMENT_CLASS', TRIGGER_ELEMENT: 'TRIGGER_ELEMENT' })
		})
	var PA,
		vf = he(() => {
			'use strict'
			PA = {
				MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
				MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
				MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
				SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
				SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
				MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
				PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
				PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
				PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
				NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
				DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
				ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
				TAB_INTERACTION: 'TAB_INTERACTION',
				SLIDER_INTERACTION: 'SLIDER_INTERACTION',
			}
		})
	var qA,
		MA,
		DA,
		FA,
		GA,
		VA,
		UA,
		Xo,
		gf = he(() => {
			'use strict'
			bn()
			;({
				TRANSFORM_MOVE: qA,
				TRANSFORM_SCALE: MA,
				TRANSFORM_ROTATE: DA,
				TRANSFORM_SKEW: FA,
				STYLE_SIZE: GA,
				STYLE_FILTER: VA,
				STYLE_FONT_VARIATION: UA,
			} = De),
				(Xo = { [qA]: !0, [MA]: !0, [DA]: !0, [FA]: !0, [GA]: !0, [VA]: !0, [UA]: !0 })
		})
	var be = {}
	Me(be, {
		IX2_ACTION_LIST_PLAYBACK_CHANGED: () => nx,
		IX2_ANIMATION_FRAME_CHANGED: () => QA,
		IX2_CLEAR_REQUESTED: () => KA,
		IX2_ELEMENT_STATE_CHANGED: () => rx,
		IX2_EVENT_LISTENER_ADDED: () => YA,
		IX2_EVENT_STATE_CHANGED: () => $A,
		IX2_INSTANCE_ADDED: () => JA,
		IX2_INSTANCE_REMOVED: () => tx,
		IX2_INSTANCE_STARTED: () => ex,
		IX2_MEDIA_QUERIES_DEFINED: () => ox,
		IX2_PARAMETER_CHANGED: () => ZA,
		IX2_PLAYBACK_REQUESTED: () => jA,
		IX2_PREVIEW_REQUESTED: () => kA,
		IX2_RAW_DATA_IMPORTED: () => HA,
		IX2_SESSION_INITIALIZED: () => XA,
		IX2_SESSION_STARTED: () => WA,
		IX2_SESSION_STOPPED: () => BA,
		IX2_STOP_REQUESTED: () => zA,
		IX2_TEST_FRAME_RENDERED: () => ax,
		IX2_VIEWPORT_WIDTH_CHANGED: () => ix,
	})
	var HA,
		XA,
		WA,
		BA,
		kA,
		jA,
		zA,
		KA,
		YA,
		$A,
		QA,
		ZA,
		JA,
		ex,
		tx,
		rx,
		nx,
		ix,
		ox,
		ax,
		hf = he(() => {
			'use strict'
			;(HA = 'IX2_RAW_DATA_IMPORTED'),
				(XA = 'IX2_SESSION_INITIALIZED'),
				(WA = 'IX2_SESSION_STARTED'),
				(BA = 'IX2_SESSION_STOPPED'),
				(kA = 'IX2_PREVIEW_REQUESTED'),
				(jA = 'IX2_PLAYBACK_REQUESTED'),
				(zA = 'IX2_STOP_REQUESTED'),
				(KA = 'IX2_CLEAR_REQUESTED'),
				(YA = 'IX2_EVENT_LISTENER_ADDED'),
				($A = 'IX2_EVENT_STATE_CHANGED'),
				(QA = 'IX2_ANIMATION_FRAME_CHANGED'),
				(ZA = 'IX2_PARAMETER_CHANGED'),
				(JA = 'IX2_INSTANCE_ADDED'),
				(ex = 'IX2_INSTANCE_STARTED'),
				(tx = 'IX2_INSTANCE_REMOVED'),
				(rx = 'IX2_ELEMENT_STATE_CHANGED'),
				(nx = 'IX2_ACTION_LIST_PLAYBACK_CHANGED'),
				(ix = 'IX2_VIEWPORT_WIDTH_CHANGED'),
				(ox = 'IX2_MEDIA_QUERIES_DEFINED'),
				(ax = 'IX2_TEST_FRAME_RENDERED')
		})
	var we = {}
	Me(we, {
		ABSTRACT_NODE: () => iS,
		AUTO: () => zx,
		BACKGROUND: () => Hx,
		BACKGROUND_COLOR: () => Ux,
		BAR_DELIMITER: () => $x,
		BORDER_COLOR: () => Xx,
		BOUNDARY_SELECTOR: () => fx,
		CHILDREN: () => Qx,
		COLON_DELIMITER: () => Yx,
		COLOR: () => Wx,
		COMMA_DELIMITER: () => Kx,
		CONFIG_UNIT: () => mx,
		CONFIG_VALUE: () => gx,
		CONFIG_X_UNIT: () => hx,
		CONFIG_X_VALUE: () => dx,
		CONFIG_Y_UNIT: () => Ex,
		CONFIG_Y_VALUE: () => px,
		CONFIG_Z_UNIT: () => yx,
		CONFIG_Z_VALUE: () => vx,
		DISPLAY: () => Bx,
		FILTER: () => Dx,
		FLEX: () => kx,
		FONT_VARIATION_SETTINGS: () => Fx,
		HEIGHT: () => Vx,
		HTML_ELEMENT: () => rS,
		IMMEDIATE_CHILDREN: () => Zx,
		IX2_ID_DELIMITER: () => sx,
		OPACITY: () => Mx,
		PARENT: () => eS,
		PLAIN_OBJECT: () => nS,
		PRESERVE_3D: () => tS,
		RENDER_GENERAL: () => aS,
		RENDER_PLUGIN: () => uS,
		RENDER_STYLE: () => sS,
		RENDER_TRANSFORM: () => oS,
		ROTATE_X: () => Rx,
		ROTATE_Y: () => Cx,
		ROTATE_Z: () => Nx,
		SCALE_3D: () => wx,
		SCALE_X: () => Ax,
		SCALE_Y: () => xx,
		SCALE_Z: () => Sx,
		SIBLINGS: () => Jx,
		SKEW: () => Lx,
		SKEW_X: () => Px,
		SKEW_Y: () => qx,
		TRANSFORM: () => _x,
		TRANSLATE_3D: () => Ox,
		TRANSLATE_X: () => Tx,
		TRANSLATE_Y: () => bx,
		TRANSLATE_Z: () => Ix,
		WF_PAGE: () => ux,
		WIDTH: () => Gx,
		WILL_CHANGE: () => jx,
		W_MOD_IX: () => lx,
		W_MOD_JS: () => cx,
	})
	var sx,
		ux,
		cx,
		lx,
		fx,
		dx,
		px,
		vx,
		gx,
		hx,
		Ex,
		yx,
		mx,
		_x,
		Tx,
		bx,
		Ix,
		Ox,
		Ax,
		xx,
		Sx,
		wx,
		Rx,
		Cx,
		Nx,
		Lx,
		Px,
		qx,
		Mx,
		Dx,
		Fx,
		Gx,
		Vx,
		Ux,
		Hx,
		Xx,
		Wx,
		Bx,
		kx,
		jx,
		zx,
		Kx,
		Yx,
		$x,
		Qx,
		Zx,
		Jx,
		eS,
		tS,
		rS,
		nS,
		iS,
		oS,
		aS,
		sS,
		uS,
		Ef = he(() => {
			'use strict'
			;(sx = '|'),
				(ux = 'data-wf-page'),
				(cx = 'w-mod-js'),
				(lx = 'w-mod-ix'),
				(fx = '.w-dyn-item'),
				(dx = 'xValue'),
				(px = 'yValue'),
				(vx = 'zValue'),
				(gx = 'value'),
				(hx = 'xUnit'),
				(Ex = 'yUnit'),
				(yx = 'zUnit'),
				(mx = 'unit'),
				(_x = 'transform'),
				(Tx = 'translateX'),
				(bx = 'translateY'),
				(Ix = 'translateZ'),
				(Ox = 'translate3d'),
				(Ax = 'scaleX'),
				(xx = 'scaleY'),
				(Sx = 'scaleZ'),
				(wx = 'scale3d'),
				(Rx = 'rotateX'),
				(Cx = 'rotateY'),
				(Nx = 'rotateZ'),
				(Lx = 'skew'),
				(Px = 'skewX'),
				(qx = 'skewY'),
				(Mx = 'opacity'),
				(Dx = 'filter'),
				(Fx = 'font-variation-settings'),
				(Gx = 'width'),
				(Vx = 'height'),
				(Ux = 'backgroundColor'),
				(Hx = 'background'),
				(Xx = 'borderColor'),
				(Wx = 'color'),
				(Bx = 'display'),
				(kx = 'flex'),
				(jx = 'willChange'),
				(zx = 'AUTO'),
				(Kx = ','),
				(Yx = ':'),
				($x = '|'),
				(Qx = 'CHILDREN'),
				(Zx = 'IMMEDIATE_CHILDREN'),
				(Jx = 'SIBLINGS'),
				(eS = 'PARENT'),
				(tS = 'preserve-3d'),
				(rS = 'HTML_ELEMENT'),
				(nS = 'PLAIN_OBJECT'),
				(iS = 'ABSTRACT_NODE'),
				(oS = 'RENDER_TRANSFORM'),
				(aS = 'RENDER_GENERAL'),
				(sS = 'RENDER_STYLE'),
				(uS = 'RENDER_PLUGIN')
		})
	var yf = {}
	Me(yf, {
		ActionAppliesTo: () => LA,
		ActionTypeConsts: () => De,
		EventAppliesTo: () => Uo,
		EventBasedOn: () => nt,
		EventContinuousMouseAxes: () => RA,
		EventLimitAffectedElements: () => CA,
		EventTypeConsts: () => Ke,
		IX2EngineActionTypes: () => be,
		IX2EngineConstants: () => we,
		InteractionTypeConsts: () => PA,
		QuickEffectDirectionConsts: () => NA,
		QuickEffectIds: () => Tn,
		ReducedMotionTypes: () => Xo,
	})
	var Fe = he(() => {
		'use strict'
		Ho()
		bn()
		vf()
		gf()
		hf()
		Ef()
		bn()
		Ho()
	})
	var cS,
		mf,
		_f = he(() => {
			'use strict'
			Fe()
			;({ IX2_RAW_DATA_IMPORTED: cS } = be),
				(mf = (e = Object.freeze({}), t) => {
					switch (t.type) {
						case cS:
							return t.payload.ixData || Object.freeze({})
						default:
							return e
					}
				})
		})
	var jt = u((me) => {
		'use strict'
		Object.defineProperty(me, '__esModule', { value: !0 })
		var lS =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e
				  }
				: function (e) {
						return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
							? 'symbol'
							: typeof e
				  }
		me.clone = On
		me.addLast = If
		me.addFirst = Of
		me.removeLast = Af
		me.removeFirst = xf
		me.insert = Sf
		me.removeAt = wf
		me.replaceAt = Rf
		me.getIn = An
		me.set = xn
		me.setIn = Sn
		me.update = Nf
		me.updateIn = Lf
		me.merge = Pf
		me.mergeDeep = qf
		me.mergeIn = Mf
		me.omit = Df
		me.addDefaults = Ff
		var Tf = 'INVALID_ARGS'
		function bf(e) {
			throw new Error(e)
		}
		function Wo(e) {
			var t = Object.keys(e)
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var fS = {}.hasOwnProperty
		function On(e) {
			if (Array.isArray(e)) return e.slice()
			for (var t = Wo(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n]
				r[i] = e[i]
			}
			return r
		}
		function Ge(e, t, r) {
			var n = r
			n == null && bf(Tf)
			for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s]
			for (var c = 0; c < a.length; c++) {
				var f = a[c]
				if (f != null) {
					var v = Wo(f)
					if (v.length)
						for (var d = 0; d <= v.length; d++) {
							var g = v[d]
							if (!(e && n[g] !== void 0)) {
								var E = f[g]
								t && In(n[g]) && In(E) && (E = Ge(e, t, n[g], E)),
									!(E === void 0 || E === n[g]) && (i || ((i = !0), (n = On(n))), (n[g] = E))
							}
						}
				}
			}
			return n
		}
		function In(e) {
			var t = typeof e > 'u' ? 'undefined' : lS(e)
			return e != null && (t === 'object' || t === 'function')
		}
		function If(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}
		function Of(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}
		function Af(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}
		function xf(e) {
			return e.length ? e.slice(1) : e
		}
		function Sf(e, t, r) {
			return e
				.slice(0, t)
				.concat(Array.isArray(r) ? r : [r])
				.concat(e.slice(t))
		}
		function wf(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}
		function Rf(e, t, r) {
			if (e[t] === r) return e
			for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o]
			return (i[t] = r), i
		}
		function An(e, t) {
			if ((!Array.isArray(t) && bf(Tf), e != null)) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n]
					if (((r = r?.[i]), r === void 0)) return r
				}
				return r
			}
		}
		function xn(e, t, r) {
			var n = typeof t == 'number' ? [] : {},
				i = e ?? n
			if (i[t] === r) return i
			var o = On(i)
			return (o[t] = r), o
		}
		function Cf(e, t, r, n) {
			var i = void 0,
				o = t[n]
			if (n === t.length - 1) i = r
			else {
				var a = In(e) && In(e[o]) ? e[o] : typeof t[n + 1] == 'number' ? [] : {}
				i = Cf(a, t, r, n + 1)
			}
			return xn(e, o, i)
		}
		function Sn(e, t, r) {
			return t.length ? Cf(e, t, r, 0) : r
		}
		function Nf(e, t, r) {
			var n = e?.[t],
				i = r(n)
			return xn(e, t, i)
		}
		function Lf(e, t, r) {
			var n = An(e, t),
				i = r(n)
			return Sn(e, t, i)
		}
		function Pf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c]
			return s.length ? Ge.call.apply(Ge, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ge(!1, !1, e, t, r, n, i, o)
		}
		function qf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c]
			return s.length ? Ge.call.apply(Ge, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ge(!1, !0, e, t, r, n, i, o)
		}
		function Mf(e, t, r, n, i, o, a) {
			var s = An(e, t)
			s == null && (s = {})
			for (var c = void 0, f = arguments.length, v = Array(f > 7 ? f - 7 : 0), d = 7; d < f; d++)
				v[d - 7] = arguments[d]
			return (
				v.length
					? (c = Ge.call.apply(Ge, [null, !1, !1, s, r, n, i, o, a].concat(v)))
					: (c = Ge(!1, !1, s, r, n, i, o, a)),
				Sn(e, t, c)
			)
		}
		function Df(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (fS.call(e, r[i])) {
					n = !0
					break
				}
			if (!n) return e
			for (var o = {}, a = Wo(e), s = 0; s < a.length; s++) {
				var c = a[s]
				r.indexOf(c) >= 0 || (o[c] = e[c])
			}
			return o
		}
		function Ff(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c]
			return s.length ? Ge.call.apply(Ge, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ge(!0, !1, e, t, r, n, i, o)
		}
		var dS = {
			clone: On,
			addLast: If,
			addFirst: Of,
			removeLast: Af,
			removeFirst: xf,
			insert: Sf,
			removeAt: wf,
			replaceAt: Rf,
			getIn: An,
			set: xn,
			setIn: Sn,
			update: Nf,
			updateIn: Lf,
			merge: Pf,
			mergeDeep: qf,
			mergeIn: Mf,
			omit: Df,
			addDefaults: Ff,
		}
		me.default = dS
	})
	var Vf,
		pS,
		vS,
		gS,
		hS,
		ES,
		Gf,
		Uf,
		Hf = he(() => {
			'use strict'
			Fe()
			;(Vf = ue(jt())),
				({
					IX2_PREVIEW_REQUESTED: pS,
					IX2_PLAYBACK_REQUESTED: vS,
					IX2_STOP_REQUESTED: gS,
					IX2_CLEAR_REQUESTED: hS,
				} = be),
				(ES = { preview: {}, playback: {}, stop: {}, clear: {} }),
				(Gf = Object.create(null, {
					[pS]: { value: 'preview' },
					[vS]: { value: 'playback' },
					[gS]: { value: 'stop' },
					[hS]: { value: 'clear' },
				})),
				(Uf = (e = ES, t) => {
					if (t.type in Gf) {
						let r = [Gf[t.type]]
						return (0, Vf.setIn)(e, [r], { ...t.payload })
					}
					return e
				})
		})
	var Ne,
		yS,
		mS,
		_S,
		TS,
		bS,
		IS,
		OS,
		AS,
		xS,
		SS,
		Xf,
		wS,
		Wf,
		Bf = he(() => {
			'use strict'
			Fe()
			;(Ne = ue(jt())),
				({
					IX2_SESSION_INITIALIZED: yS,
					IX2_SESSION_STARTED: mS,
					IX2_TEST_FRAME_RENDERED: _S,
					IX2_SESSION_STOPPED: TS,
					IX2_EVENT_LISTENER_ADDED: bS,
					IX2_EVENT_STATE_CHANGED: IS,
					IX2_ANIMATION_FRAME_CHANGED: OS,
					IX2_ACTION_LIST_PLAYBACK_CHANGED: AS,
					IX2_VIEWPORT_WIDTH_CHANGED: xS,
					IX2_MEDIA_QUERIES_DEFINED: SS,
				} = be),
				(Xf = {
					active: !1,
					tick: 0,
					eventListeners: [],
					eventState: {},
					playbackState: {},
					viewportWidth: 0,
					mediaQueryKey: null,
					hasBoundaryNodes: !1,
					hasDefinedMediaQueries: !1,
					reducedMotion: !1,
				}),
				(wS = 20),
				(Wf = (e = Xf, t) => {
					switch (t.type) {
						case yS: {
							let { hasBoundaryNodes: r, reducedMotion: n } = t.payload
							return (0, Ne.merge)(e, { hasBoundaryNodes: r, reducedMotion: n })
						}
						case mS:
							return (0, Ne.set)(e, 'active', !0)
						case _S: {
							let {
								payload: { step: r = wS },
							} = t
							return (0, Ne.set)(e, 'tick', e.tick + r)
						}
						case TS:
							return Xf
						case OS: {
							let {
								payload: { now: r },
							} = t
							return (0, Ne.set)(e, 'tick', r)
						}
						case bS: {
							let r = (0, Ne.addLast)(e.eventListeners, t.payload)
							return (0, Ne.set)(e, 'eventListeners', r)
						}
						case IS: {
							let { stateKey: r, newState: n } = t.payload
							return (0, Ne.setIn)(e, ['eventState', r], n)
						}
						case AS: {
							let { actionListId: r, isPlaying: n } = t.payload
							return (0, Ne.setIn)(e, ['playbackState', r], n)
						}
						case xS: {
							let { width: r, mediaQueries: n } = t.payload,
								i = n.length,
								o = null
							for (let a = 0; a < i; a++) {
								let { key: s, min: c, max: f } = n[a]
								if (r >= c && r <= f) {
									o = s
									break
								}
							}
							return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: o })
						}
						case SS:
							return (0, Ne.set)(e, 'hasDefinedMediaQueries', !0)
						default:
							return e
					}
				})
		})
	var jf = u((PW, kf) => {
		function RS() {
			;(this.__data__ = []), (this.size = 0)
		}
		kf.exports = RS
	})
	var wn = u((qW, zf) => {
		function CS(e, t) {
			return e === t || (e !== e && t !== t)
		}
		zf.exports = CS
	})
	var wr = u((MW, Kf) => {
		var NS = wn()
		function LS(e, t) {
			for (var r = e.length; r--; ) if (NS(e[r][0], t)) return r
			return -1
		}
		Kf.exports = LS
	})
	var $f = u((DW, Yf) => {
		var PS = wr(),
			qS = Array.prototype,
			MS = qS.splice
		function DS(e) {
			var t = this.__data__,
				r = PS(t, e)
			if (r < 0) return !1
			var n = t.length - 1
			return r == n ? t.pop() : MS.call(t, r, 1), --this.size, !0
		}
		Yf.exports = DS
	})
	var Zf = u((FW, Qf) => {
		var FS = wr()
		function GS(e) {
			var t = this.__data__,
				r = FS(t, e)
			return r < 0 ? void 0 : t[r][1]
		}
		Qf.exports = GS
	})
	var ed = u((GW, Jf) => {
		var VS = wr()
		function US(e) {
			return VS(this.__data__, e) > -1
		}
		Jf.exports = US
	})
	var rd = u((VW, td) => {
		var HS = wr()
		function XS(e, t) {
			var r = this.__data__,
				n = HS(r, e)
			return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
		}
		td.exports = XS
	})
	var Rr = u((UW, nd) => {
		var WS = jf(),
			BS = $f(),
			kS = Zf(),
			jS = ed(),
			zS = rd()
		function zt(e) {
			var t = -1,
				r = e == null ? 0 : e.length
			for (this.clear(); ++t < r; ) {
				var n = e[t]
				this.set(n[0], n[1])
			}
		}
		zt.prototype.clear = WS
		zt.prototype.delete = BS
		zt.prototype.get = kS
		zt.prototype.has = jS
		zt.prototype.set = zS
		nd.exports = zt
	})
	var od = u((HW, id) => {
		var KS = Rr()
		function YS() {
			;(this.__data__ = new KS()), (this.size = 0)
		}
		id.exports = YS
	})
	var sd = u((XW, ad) => {
		function $S(e) {
			var t = this.__data__,
				r = t.delete(e)
			return (this.size = t.size), r
		}
		ad.exports = $S
	})
	var cd = u((WW, ud) => {
		function QS(e) {
			return this.__data__.get(e)
		}
		ud.exports = QS
	})
	var fd = u((BW, ld) => {
		function ZS(e) {
			return this.__data__.has(e)
		}
		ld.exports = ZS
	})
	var it = u((kW, dd) => {
		function JS(e) {
			var t = typeof e
			return e != null && (t == 'object' || t == 'function')
		}
		dd.exports = JS
	})
	var Bo = u((jW, pd) => {
		var ew = _t(),
			tw = it(),
			rw = '[object AsyncFunction]',
			nw = '[object Function]',
			iw = '[object GeneratorFunction]',
			ow = '[object Proxy]'
		function aw(e) {
			if (!tw(e)) return !1
			var t = ew(e)
			return t == nw || t == iw || t == rw || t == ow
		}
		pd.exports = aw
	})
	var gd = u((zW, vd) => {
		var sw = ze(),
			uw = sw['__core-js_shared__']
		vd.exports = uw
	})
	var yd = u((KW, Ed) => {
		var ko = gd(),
			hd = (function () {
				var e = /[^.]+$/.exec((ko && ko.keys && ko.keys.IE_PROTO) || '')
				return e ? 'Symbol(src)_1.' + e : ''
			})()
		function cw(e) {
			return !!hd && hd in e
		}
		Ed.exports = cw
	})
	var jo = u((YW, md) => {
		var lw = Function.prototype,
			fw = lw.toString
		function dw(e) {
			if (e != null) {
				try {
					return fw.call(e)
				} catch {}
				try {
					return e + ''
				} catch {}
			}
			return ''
		}
		md.exports = dw
	})
	var Td = u(($W, _d) => {
		var pw = Bo(),
			vw = yd(),
			gw = it(),
			hw = jo(),
			Ew = /[\\^$.*+?()[\]{}|]/g,
			yw = /^\[object .+?Constructor\]$/,
			mw = Function.prototype,
			_w = Object.prototype,
			Tw = mw.toString,
			bw = _w.hasOwnProperty,
			Iw = RegExp(
				'^' +
					Tw.call(bw)
						.replace(Ew, '\\$&')
						.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
					'$'
			)
		function Ow(e) {
			if (!gw(e) || vw(e)) return !1
			var t = pw(e) ? Iw : yw
			return t.test(hw(e))
		}
		_d.exports = Ow
	})
	var Id = u((QW, bd) => {
		function Aw(e, t) {
			return e?.[t]
		}
		bd.exports = Aw
	})
	var Tt = u((ZW, Od) => {
		var xw = Td(),
			Sw = Id()
		function ww(e, t) {
			var r = Sw(e, t)
			return xw(r) ? r : void 0
		}
		Od.exports = ww
	})
	var Rn = u((JW, Ad) => {
		var Rw = Tt(),
			Cw = ze(),
			Nw = Rw(Cw, 'Map')
		Ad.exports = Nw
	})
	var Cr = u((e5, xd) => {
		var Lw = Tt(),
			Pw = Lw(Object, 'create')
		xd.exports = Pw
	})
	var Rd = u((t5, wd) => {
		var Sd = Cr()
		function qw() {
			;(this.__data__ = Sd ? Sd(null) : {}), (this.size = 0)
		}
		wd.exports = qw
	})
	var Nd = u((r5, Cd) => {
		function Mw(e) {
			var t = this.has(e) && delete this.__data__[e]
			return (this.size -= t ? 1 : 0), t
		}
		Cd.exports = Mw
	})
	var Pd = u((n5, Ld) => {
		var Dw = Cr(),
			Fw = '__lodash_hash_undefined__',
			Gw = Object.prototype,
			Vw = Gw.hasOwnProperty
		function Uw(e) {
			var t = this.__data__
			if (Dw) {
				var r = t[e]
				return r === Fw ? void 0 : r
			}
			return Vw.call(t, e) ? t[e] : void 0
		}
		Ld.exports = Uw
	})
	var Md = u((i5, qd) => {
		var Hw = Cr(),
			Xw = Object.prototype,
			Ww = Xw.hasOwnProperty
		function Bw(e) {
			var t = this.__data__
			return Hw ? t[e] !== void 0 : Ww.call(t, e)
		}
		qd.exports = Bw
	})
	var Fd = u((o5, Dd) => {
		var kw = Cr(),
			jw = '__lodash_hash_undefined__'
		function zw(e, t) {
			var r = this.__data__
			return (this.size += this.has(e) ? 0 : 1), (r[e] = kw && t === void 0 ? jw : t), this
		}
		Dd.exports = zw
	})
	var Vd = u((a5, Gd) => {
		var Kw = Rd(),
			Yw = Nd(),
			$w = Pd(),
			Qw = Md(),
			Zw = Fd()
		function Kt(e) {
			var t = -1,
				r = e == null ? 0 : e.length
			for (this.clear(); ++t < r; ) {
				var n = e[t]
				this.set(n[0], n[1])
			}
		}
		Kt.prototype.clear = Kw
		Kt.prototype.delete = Yw
		Kt.prototype.get = $w
		Kt.prototype.has = Qw
		Kt.prototype.set = Zw
		Gd.exports = Kt
	})
	var Xd = u((s5, Hd) => {
		var Ud = Vd(),
			Jw = Rr(),
			e0 = Rn()
		function t0() {
			;(this.size = 0), (this.__data__ = { hash: new Ud(), map: new (e0 || Jw)(), string: new Ud() })
		}
		Hd.exports = t0
	})
	var Bd = u((u5, Wd) => {
		function r0(e) {
			var t = typeof e
			return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null
		}
		Wd.exports = r0
	})
	var Nr = u((c5, kd) => {
		var n0 = Bd()
		function i0(e, t) {
			var r = e.__data__
			return n0(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
		}
		kd.exports = i0
	})
	var zd = u((l5, jd) => {
		var o0 = Nr()
		function a0(e) {
			var t = o0(this, e).delete(e)
			return (this.size -= t ? 1 : 0), t
		}
		jd.exports = a0
	})
	var Yd = u((f5, Kd) => {
		var s0 = Nr()
		function u0(e) {
			return s0(this, e).get(e)
		}
		Kd.exports = u0
	})
	var Qd = u((d5, $d) => {
		var c0 = Nr()
		function l0(e) {
			return c0(this, e).has(e)
		}
		$d.exports = l0
	})
	var Jd = u((p5, Zd) => {
		var f0 = Nr()
		function d0(e, t) {
			var r = f0(this, e),
				n = r.size
			return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
		}
		Zd.exports = d0
	})
	var Cn = u((v5, ep) => {
		var p0 = Xd(),
			v0 = zd(),
			g0 = Yd(),
			h0 = Qd(),
			E0 = Jd()
		function Yt(e) {
			var t = -1,
				r = e == null ? 0 : e.length
			for (this.clear(); ++t < r; ) {
				var n = e[t]
				this.set(n[0], n[1])
			}
		}
		Yt.prototype.clear = p0
		Yt.prototype.delete = v0
		Yt.prototype.get = g0
		Yt.prototype.has = h0
		Yt.prototype.set = E0
		ep.exports = Yt
	})
	var rp = u((g5, tp) => {
		var y0 = Rr(),
			m0 = Rn(),
			_0 = Cn(),
			T0 = 200
		function b0(e, t) {
			var r = this.__data__
			if (r instanceof y0) {
				var n = r.__data__
				if (!m0 || n.length < T0 - 1) return n.push([e, t]), (this.size = ++r.size), this
				r = this.__data__ = new _0(n)
			}
			return r.set(e, t), (this.size = r.size), this
		}
		tp.exports = b0
	})
	var zo = u((h5, np) => {
		var I0 = Rr(),
			O0 = od(),
			A0 = sd(),
			x0 = cd(),
			S0 = fd(),
			w0 = rp()
		function $t(e) {
			var t = (this.__data__ = new I0(e))
			this.size = t.size
		}
		$t.prototype.clear = O0
		$t.prototype.delete = A0
		$t.prototype.get = x0
		$t.prototype.has = S0
		$t.prototype.set = w0
		np.exports = $t
	})
	var op = u((E5, ip) => {
		var R0 = '__lodash_hash_undefined__'
		function C0(e) {
			return this.__data__.set(e, R0), this
		}
		ip.exports = C0
	})
	var sp = u((y5, ap) => {
		function N0(e) {
			return this.__data__.has(e)
		}
		ap.exports = N0
	})
	var cp = u((m5, up) => {
		var L0 = Cn(),
			P0 = op(),
			q0 = sp()
		function Nn(e) {
			var t = -1,
				r = e == null ? 0 : e.length
			for (this.__data__ = new L0(); ++t < r; ) this.add(e[t])
		}
		Nn.prototype.add = Nn.prototype.push = P0
		Nn.prototype.has = q0
		up.exports = Nn
	})
	var fp = u((_5, lp) => {
		function M0(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0
			return !1
		}
		lp.exports = M0
	})
	var pp = u((T5, dp) => {
		function D0(e, t) {
			return e.has(t)
		}
		dp.exports = D0
	})
	var Ko = u((b5, vp) => {
		var F0 = cp(),
			G0 = fp(),
			V0 = pp(),
			U0 = 1,
			H0 = 2
		function X0(e, t, r, n, i, o) {
			var a = r & U0,
				s = e.length,
				c = t.length
			if (s != c && !(a && c > s)) return !1
			var f = o.get(e),
				v = o.get(t)
			if (f && v) return f == t && v == e
			var d = -1,
				g = !0,
				E = r & H0 ? new F0() : void 0
			for (o.set(e, t), o.set(t, e); ++d < s; ) {
				var T = e[d],
					_ = t[d]
				if (n) var R = a ? n(_, T, d, t, e, o) : n(T, _, d, e, t, o)
				if (R !== void 0) {
					if (R) continue
					g = !1
					break
				}
				if (E) {
					if (
						!G0(t, function (x, S) {
							if (!V0(E, S) && (T === x || i(T, x, r, n, o))) return E.push(S)
						})
					) {
						g = !1
						break
					}
				} else if (!(T === _ || i(T, _, r, n, o))) {
					g = !1
					break
				}
			}
			return o.delete(e), o.delete(t), g
		}
		vp.exports = X0
	})
	var hp = u((I5, gp) => {
		var W0 = ze(),
			B0 = W0.Uint8Array
		gp.exports = B0
	})
	var yp = u((O5, Ep) => {
		function k0(e) {
			var t = -1,
				r = Array(e.size)
			return (
				e.forEach(function (n, i) {
					r[++t] = [i, n]
				}),
				r
			)
		}
		Ep.exports = k0
	})
	var _p = u((A5, mp) => {
		function j0(e) {
			var t = -1,
				r = Array(e.size)
			return (
				e.forEach(function (n) {
					r[++t] = n
				}),
				r
			)
		}
		mp.exports = j0
	})
	var Ap = u((x5, Op) => {
		var Tp = Wt(),
			bp = hp(),
			z0 = wn(),
			K0 = Ko(),
			Y0 = yp(),
			$0 = _p(),
			Q0 = 1,
			Z0 = 2,
			J0 = '[object Boolean]',
			eR = '[object Date]',
			tR = '[object Error]',
			rR = '[object Map]',
			nR = '[object Number]',
			iR = '[object RegExp]',
			oR = '[object Set]',
			aR = '[object String]',
			sR = '[object Symbol]',
			uR = '[object ArrayBuffer]',
			cR = '[object DataView]',
			Ip = Tp ? Tp.prototype : void 0,
			Yo = Ip ? Ip.valueOf : void 0
		function lR(e, t, r, n, i, o, a) {
			switch (r) {
				case cR:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
					;(e = e.buffer), (t = t.buffer)
				case uR:
					return !(e.byteLength != t.byteLength || !o(new bp(e), new bp(t)))
				case J0:
				case eR:
				case nR:
					return z0(+e, +t)
				case tR:
					return e.name == t.name && e.message == t.message
				case iR:
				case aR:
					return e == t + ''
				case rR:
					var s = Y0
				case oR:
					var c = n & Q0
					if ((s || (s = $0), e.size != t.size && !c)) return !1
					var f = a.get(e)
					if (f) return f == t
					;(n |= Z0), a.set(e, t)
					var v = K0(s(e), s(t), n, i, o, a)
					return a.delete(e), v
				case sR:
					if (Yo) return Yo.call(e) == Yo.call(t)
			}
			return !1
		}
		Op.exports = lR
	})
	var Ln = u((S5, xp) => {
		function fR(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r]
			return e
		}
		xp.exports = fR
	})
	var Oe = u((w5, Sp) => {
		var dR = Array.isArray
		Sp.exports = dR
	})
	var $o = u((R5, wp) => {
		var pR = Ln(),
			vR = Oe()
		function gR(e, t, r) {
			var n = t(e)
			return vR(e) ? n : pR(n, r(e))
		}
		wp.exports = gR
	})
	var Cp = u((C5, Rp) => {
		function hR(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
				var a = e[r]
				t(a, r, e) && (o[i++] = a)
			}
			return o
		}
		Rp.exports = hR
	})
	var Qo = u((N5, Np) => {
		function ER() {
			return []
		}
		Np.exports = ER
	})
	var Zo = u((L5, Pp) => {
		var yR = Cp(),
			mR = Qo(),
			_R = Object.prototype,
			TR = _R.propertyIsEnumerable,
			Lp = Object.getOwnPropertySymbols,
			bR = Lp
				? function (e) {
						return e == null
							? []
							: ((e = Object(e)),
							  yR(Lp(e), function (t) {
									return TR.call(e, t)
							  }))
				  }
				: mR
		Pp.exports = bR
	})
	var Mp = u((P5, qp) => {
		function IR(e, t) {
			for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
			return n
		}
		qp.exports = IR
	})
	var Fp = u((q5, Dp) => {
		var OR = _t(),
			AR = ft(),
			xR = '[object Arguments]'
		function SR(e) {
			return AR(e) && OR(e) == xR
		}
		Dp.exports = SR
	})
	var Lr = u((M5, Up) => {
		var Gp = Fp(),
			wR = ft(),
			Vp = Object.prototype,
			RR = Vp.hasOwnProperty,
			CR = Vp.propertyIsEnumerable,
			NR = Gp(
				(function () {
					return arguments
				})()
			)
				? Gp
				: function (e) {
						return wR(e) && RR.call(e, 'callee') && !CR.call(e, 'callee')
				  }
		Up.exports = NR
	})
	var Xp = u((D5, Hp) => {
		function LR() {
			return !1
		}
		Hp.exports = LR
	})
	var Pn = u((Pr, Qt) => {
		var PR = ze(),
			qR = Xp(),
			kp = typeof Pr == 'object' && Pr && !Pr.nodeType && Pr,
			Wp = kp && typeof Qt == 'object' && Qt && !Qt.nodeType && Qt,
			MR = Wp && Wp.exports === kp,
			Bp = MR ? PR.Buffer : void 0,
			DR = Bp ? Bp.isBuffer : void 0,
			FR = DR || qR
		Qt.exports = FR
	})
	var qn = u((F5, jp) => {
		var GR = 9007199254740991,
			VR = /^(?:0|[1-9]\d*)$/
		function UR(e, t) {
			var r = typeof e
			return (t = t ?? GR), !!t && (r == 'number' || (r != 'symbol' && VR.test(e))) && e > -1 && e % 1 == 0 && e < t
		}
		jp.exports = UR
	})
	var Mn = u((G5, zp) => {
		var HR = 9007199254740991
		function XR(e) {
			return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= HR
		}
		zp.exports = XR
	})
	var Yp = u((V5, Kp) => {
		var WR = _t(),
			BR = Mn(),
			kR = ft(),
			jR = '[object Arguments]',
			zR = '[object Array]',
			KR = '[object Boolean]',
			YR = '[object Date]',
			$R = '[object Error]',
			QR = '[object Function]',
			ZR = '[object Map]',
			JR = '[object Number]',
			eC = '[object Object]',
			tC = '[object RegExp]',
			rC = '[object Set]',
			nC = '[object String]',
			iC = '[object WeakMap]',
			oC = '[object ArrayBuffer]',
			aC = '[object DataView]',
			sC = '[object Float32Array]',
			uC = '[object Float64Array]',
			cC = '[object Int8Array]',
			lC = '[object Int16Array]',
			fC = '[object Int32Array]',
			dC = '[object Uint8Array]',
			pC = '[object Uint8ClampedArray]',
			vC = '[object Uint16Array]',
			gC = '[object Uint32Array]',
			ge = {}
		ge[sC] = ge[uC] = ge[cC] = ge[lC] = ge[fC] = ge[dC] = ge[pC] = ge[vC] = ge[gC] = !0
		ge[jR] =
			ge[zR] =
			ge[oC] =
			ge[KR] =
			ge[aC] =
			ge[YR] =
			ge[$R] =
			ge[QR] =
			ge[ZR] =
			ge[JR] =
			ge[eC] =
			ge[tC] =
			ge[rC] =
			ge[nC] =
			ge[iC] =
				!1
		function hC(e) {
			return kR(e) && BR(e.length) && !!ge[WR(e)]
		}
		Kp.exports = hC
	})
	var Qp = u((U5, $p) => {
		function EC(e) {
			return function (t) {
				return e(t)
			}
		}
		$p.exports = EC
	})
	var Jp = u((qr, Zt) => {
		var yC = Oo(),
			Zp = typeof qr == 'object' && qr && !qr.nodeType && qr,
			Mr = Zp && typeof Zt == 'object' && Zt && !Zt.nodeType && Zt,
			mC = Mr && Mr.exports === Zp,
			Jo = mC && yC.process,
			_C = (function () {
				try {
					var e = Mr && Mr.require && Mr.require('util').types
					return e || (Jo && Jo.binding && Jo.binding('util'))
				} catch {}
			})()
		Zt.exports = _C
	})
	var Dn = u((H5, rv) => {
		var TC = Yp(),
			bC = Qp(),
			ev = Jp(),
			tv = ev && ev.isTypedArray,
			IC = tv ? bC(tv) : TC
		rv.exports = IC
	})
	var ea = u((X5, nv) => {
		var OC = Mp(),
			AC = Lr(),
			xC = Oe(),
			SC = Pn(),
			wC = qn(),
			RC = Dn(),
			CC = Object.prototype,
			NC = CC.hasOwnProperty
		function LC(e, t) {
			var r = xC(e),
				n = !r && AC(e),
				i = !r && !n && SC(e),
				o = !r && !n && !i && RC(e),
				a = r || n || i || o,
				s = a ? OC(e.length, String) : [],
				c = s.length
			for (var f in e)
				(t || NC.call(e, f)) &&
					!(
						a &&
						(f == 'length' ||
							(i && (f == 'offset' || f == 'parent')) ||
							(o && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
							wC(f, c))
					) &&
					s.push(f)
			return s
		}
		nv.exports = LC
	})
	var Fn = u((W5, iv) => {
		var PC = Object.prototype
		function qC(e) {
			var t = e && e.constructor,
				r = (typeof t == 'function' && t.prototype) || PC
			return e === r
		}
		iv.exports = qC
	})
	var av = u((B5, ov) => {
		var MC = Ao(),
			DC = MC(Object.keys, Object)
		ov.exports = DC
	})
	var Gn = u((k5, sv) => {
		var FC = Fn(),
			GC = av(),
			VC = Object.prototype,
			UC = VC.hasOwnProperty
		function HC(e) {
			if (!FC(e)) return GC(e)
			var t = []
			for (var r in Object(e)) UC.call(e, r) && r != 'constructor' && t.push(r)
			return t
		}
		sv.exports = HC
	})
	var Nt = u((j5, uv) => {
		var XC = Bo(),
			WC = Mn()
		function BC(e) {
			return e != null && WC(e.length) && !XC(e)
		}
		uv.exports = BC
	})
	var Dr = u((z5, cv) => {
		var kC = ea(),
			jC = Gn(),
			zC = Nt()
		function KC(e) {
			return zC(e) ? kC(e) : jC(e)
		}
		cv.exports = KC
	})
	var fv = u((K5, lv) => {
		var YC = $o(),
			$C = Zo(),
			QC = Dr()
		function ZC(e) {
			return YC(e, QC, $C)
		}
		lv.exports = ZC
	})
	var vv = u((Y5, pv) => {
		var dv = fv(),
			JC = 1,
			eN = Object.prototype,
			tN = eN.hasOwnProperty
		function rN(e, t, r, n, i, o) {
			var a = r & JC,
				s = dv(e),
				c = s.length,
				f = dv(t),
				v = f.length
			if (c != v && !a) return !1
			for (var d = c; d--; ) {
				var g = s[d]
				if (!(a ? g in t : tN.call(t, g))) return !1
			}
			var E = o.get(e),
				T = o.get(t)
			if (E && T) return E == t && T == e
			var _ = !0
			o.set(e, t), o.set(t, e)
			for (var R = a; ++d < c; ) {
				g = s[d]
				var x = e[g],
					S = t[g]
				if (n) var A = a ? n(S, x, g, t, e, o) : n(x, S, g, e, t, o)
				if (!(A === void 0 ? x === S || i(x, S, r, n, o) : A)) {
					_ = !1
					break
				}
				R || (R = g == 'constructor')
			}
			if (_ && !R) {
				var P = e.constructor,
					q = t.constructor
				P != q &&
					'constructor' in e &&
					'constructor' in t &&
					!(typeof P == 'function' && P instanceof P && typeof q == 'function' && q instanceof q) &&
					(_ = !1)
			}
			return o.delete(e), o.delete(t), _
		}
		pv.exports = rN
	})
	var hv = u(($5, gv) => {
		var nN = Tt(),
			iN = ze(),
			oN = nN(iN, 'DataView')
		gv.exports = oN
	})
	var yv = u((Q5, Ev) => {
		var aN = Tt(),
			sN = ze(),
			uN = aN(sN, 'Promise')
		Ev.exports = uN
	})
	var _v = u((Z5, mv) => {
		var cN = Tt(),
			lN = ze(),
			fN = cN(lN, 'Set')
		mv.exports = fN
	})
	var ta = u((J5, Tv) => {
		var dN = Tt(),
			pN = ze(),
			vN = dN(pN, 'WeakMap')
		Tv.exports = vN
	})
	var Vn = u((eB, wv) => {
		var ra = hv(),
			na = Rn(),
			ia = yv(),
			oa = _v(),
			aa = ta(),
			Sv = _t(),
			Jt = jo(),
			bv = '[object Map]',
			gN = '[object Object]',
			Iv = '[object Promise]',
			Ov = '[object Set]',
			Av = '[object WeakMap]',
			xv = '[object DataView]',
			hN = Jt(ra),
			EN = Jt(na),
			yN = Jt(ia),
			mN = Jt(oa),
			_N = Jt(aa),
			Lt = Sv
		;((ra && Lt(new ra(new ArrayBuffer(1))) != xv) ||
			(na && Lt(new na()) != bv) ||
			(ia && Lt(ia.resolve()) != Iv) ||
			(oa && Lt(new oa()) != Ov) ||
			(aa && Lt(new aa()) != Av)) &&
			(Lt = function (e) {
				var t = Sv(e),
					r = t == gN ? e.constructor : void 0,
					n = r ? Jt(r) : ''
				if (n)
					switch (n) {
						case hN:
							return xv
						case EN:
							return bv
						case yN:
							return Iv
						case mN:
							return Ov
						case _N:
							return Av
					}
				return t
			})
		wv.exports = Lt
	})
	var Dv = u((tB, Mv) => {
		var sa = zo(),
			TN = Ko(),
			bN = Ap(),
			IN = vv(),
			Rv = Vn(),
			Cv = Oe(),
			Nv = Pn(),
			ON = Dn(),
			AN = 1,
			Lv = '[object Arguments]',
			Pv = '[object Array]',
			Un = '[object Object]',
			xN = Object.prototype,
			qv = xN.hasOwnProperty
		function SN(e, t, r, n, i, o) {
			var a = Cv(e),
				s = Cv(t),
				c = a ? Pv : Rv(e),
				f = s ? Pv : Rv(t)
			;(c = c == Lv ? Un : c), (f = f == Lv ? Un : f)
			var v = c == Un,
				d = f == Un,
				g = c == f
			if (g && Nv(e)) {
				if (!Nv(t)) return !1
				;(a = !0), (v = !1)
			}
			if (g && !v) return o || (o = new sa()), a || ON(e) ? TN(e, t, r, n, i, o) : bN(e, t, c, r, n, i, o)
			if (!(r & AN)) {
				var E = v && qv.call(e, '__wrapped__'),
					T = d && qv.call(t, '__wrapped__')
				if (E || T) {
					var _ = E ? e.value() : e,
						R = T ? t.value() : t
					return o || (o = new sa()), i(_, R, r, n, o)
				}
			}
			return g ? (o || (o = new sa()), IN(e, t, r, n, i, o)) : !1
		}
		Mv.exports = SN
	})
	var ua = u((rB, Vv) => {
		var wN = Dv(),
			Fv = ft()
		function Gv(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || (!Fv(e) && !Fv(t)) ? e !== e && t !== t : wN(e, t, r, n, Gv, i)
		}
		Vv.exports = Gv
	})
	var Hv = u((nB, Uv) => {
		var RN = zo(),
			CN = ua(),
			NN = 1,
			LN = 2
		function PN(e, t, r, n) {
			var i = r.length,
				o = i,
				a = !n
			if (e == null) return !o
			for (e = Object(e); i--; ) {
				var s = r[i]
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
			}
			for (; ++i < o; ) {
				s = r[i]
				var c = s[0],
					f = e[c],
					v = s[1]
				if (a && s[2]) {
					if (f === void 0 && !(c in e)) return !1
				} else {
					var d = new RN()
					if (n) var g = n(f, v, c, e, t, d)
					if (!(g === void 0 ? CN(v, f, NN | LN, n, d) : g)) return !1
				}
			}
			return !0
		}
		Uv.exports = PN
	})
	var ca = u((iB, Xv) => {
		var qN = it()
		function MN(e) {
			return e === e && !qN(e)
		}
		Xv.exports = MN
	})
	var Bv = u((oB, Wv) => {
		var DN = ca(),
			FN = Dr()
		function GN(e) {
			for (var t = FN(e), r = t.length; r--; ) {
				var n = t[r],
					i = e[n]
				t[r] = [n, i, DN(i)]
			}
			return t
		}
		Wv.exports = GN
	})
	var la = u((aB, kv) => {
		function VN(e, t) {
			return function (r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		kv.exports = VN
	})
	var zv = u((sB, jv) => {
		var UN = Hv(),
			HN = Bv(),
			XN = la()
		function WN(e) {
			var t = HN(e)
			return t.length == 1 && t[0][2]
				? XN(t[0][0], t[0][1])
				: function (r) {
						return r === e || UN(r, e, t)
				  }
		}
		jv.exports = WN
	})
	var Fr = u((uB, Kv) => {
		var BN = _t(),
			kN = ft(),
			jN = '[object Symbol]'
		function zN(e) {
			return typeof e == 'symbol' || (kN(e) && BN(e) == jN)
		}
		Kv.exports = zN
	})
	var Hn = u((cB, Yv) => {
		var KN = Oe(),
			YN = Fr(),
			$N = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			QN = /^\w*$/
		function ZN(e, t) {
			if (KN(e)) return !1
			var r = typeof e
			return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || YN(e)
				? !0
				: QN.test(e) || !$N.test(e) || (t != null && e in Object(t))
		}
		Yv.exports = ZN
	})
	var Zv = u((lB, Qv) => {
		var $v = Cn(),
			JN = 'Expected a function'
		function fa(e, t) {
			if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(JN)
			var r = function () {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					o = r.cache
				if (o.has(i)) return o.get(i)
				var a = e.apply(this, n)
				return (r.cache = o.set(i, a) || o), a
			}
			return (r.cache = new (fa.Cache || $v)()), r
		}
		fa.Cache = $v
		Qv.exports = fa
	})
	var eg = u((fB, Jv) => {
		var eL = Zv(),
			tL = 500
		function rL(e) {
			var t = eL(e, function (n) {
					return r.size === tL && r.clear(), n
				}),
				r = t.cache
			return t
		}
		Jv.exports = rL
	})
	var rg = u((dB, tg) => {
		var nL = eg(),
			iL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			oL = /\\(\\)?/g,
			aL = nL(function (e) {
				var t = []
				return (
					e.charCodeAt(0) === 46 && t.push(''),
					e.replace(iL, function (r, n, i, o) {
						t.push(i ? o.replace(oL, '$1') : n || r)
					}),
					t
				)
			})
		tg.exports = aL
	})
	var da = u((pB, ng) => {
		function sL(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; ) i[r] = t(e[r], r, e)
			return i
		}
		ng.exports = sL
	})
	var cg = u((vB, ug) => {
		var ig = Wt(),
			uL = da(),
			cL = Oe(),
			lL = Fr(),
			fL = 1 / 0,
			og = ig ? ig.prototype : void 0,
			ag = og ? og.toString : void 0
		function sg(e) {
			if (typeof e == 'string') return e
			if (cL(e)) return uL(e, sg) + ''
			if (lL(e)) return ag ? ag.call(e) : ''
			var t = e + ''
			return t == '0' && 1 / e == -fL ? '-0' : t
		}
		ug.exports = sg
	})
	var fg = u((gB, lg) => {
		var dL = cg()
		function pL(e) {
			return e == null ? '' : dL(e)
		}
		lg.exports = pL
	})
	var Gr = u((hB, dg) => {
		var vL = Oe(),
			gL = Hn(),
			hL = rg(),
			EL = fg()
		function yL(e, t) {
			return vL(e) ? e : gL(e, t) ? [e] : hL(EL(e))
		}
		dg.exports = yL
	})
	var er = u((EB, pg) => {
		var mL = Fr(),
			_L = 1 / 0
		function TL(e) {
			if (typeof e == 'string' || mL(e)) return e
			var t = e + ''
			return t == '0' && 1 / e == -_L ? '-0' : t
		}
		pg.exports = TL
	})
	var Xn = u((yB, vg) => {
		var bL = Gr(),
			IL = er()
		function OL(e, t) {
			t = bL(t, e)
			for (var r = 0, n = t.length; e != null && r < n; ) e = e[IL(t[r++])]
			return r && r == n ? e : void 0
		}
		vg.exports = OL
	})
	var Wn = u((mB, gg) => {
		var AL = Xn()
		function xL(e, t, r) {
			var n = e == null ? void 0 : AL(e, t)
			return n === void 0 ? r : n
		}
		gg.exports = xL
	})
	var Eg = u((_B, hg) => {
		function SL(e, t) {
			return e != null && t in Object(e)
		}
		hg.exports = SL
	})
	var mg = u((TB, yg) => {
		var wL = Gr(),
			RL = Lr(),
			CL = Oe(),
			NL = qn(),
			LL = Mn(),
			PL = er()
		function qL(e, t, r) {
			t = wL(t, e)
			for (var n = -1, i = t.length, o = !1; ++n < i; ) {
				var a = PL(t[n])
				if (!(o = e != null && r(e, a))) break
				e = e[a]
			}
			return o || ++n != i ? o : ((i = e == null ? 0 : e.length), !!i && LL(i) && NL(a, i) && (CL(e) || RL(e)))
		}
		yg.exports = qL
	})
	var Tg = u((bB, _g) => {
		var ML = Eg(),
			DL = mg()
		function FL(e, t) {
			return e != null && DL(e, t, ML)
		}
		_g.exports = FL
	})
	var Ig = u((IB, bg) => {
		var GL = ua(),
			VL = Wn(),
			UL = Tg(),
			HL = Hn(),
			XL = ca(),
			WL = la(),
			BL = er(),
			kL = 1,
			jL = 2
		function zL(e, t) {
			return HL(e) && XL(t)
				? WL(BL(e), t)
				: function (r) {
						var n = VL(r, e)
						return n === void 0 && n === t ? UL(r, e) : GL(t, n, kL | jL)
				  }
		}
		bg.exports = zL
	})
	var Bn = u((OB, Og) => {
		function KL(e) {
			return e
		}
		Og.exports = KL
	})
	var pa = u((AB, Ag) => {
		function YL(e) {
			return function (t) {
				return t?.[e]
			}
		}
		Ag.exports = YL
	})
	var Sg = u((xB, xg) => {
		var $L = Xn()
		function QL(e) {
			return function (t) {
				return $L(t, e)
			}
		}
		xg.exports = QL
	})
	var Rg = u((SB, wg) => {
		var ZL = pa(),
			JL = Sg(),
			eP = Hn(),
			tP = er()
		function rP(e) {
			return eP(e) ? ZL(tP(e)) : JL(e)
		}
		wg.exports = rP
	})
	var bt = u((wB, Cg) => {
		var nP = zv(),
			iP = Ig(),
			oP = Bn(),
			aP = Oe(),
			sP = Rg()
		function uP(e) {
			return typeof e == 'function'
				? e
				: e == null
				? oP
				: typeof e == 'object'
				? aP(e)
					? iP(e[0], e[1])
					: nP(e)
				: sP(e)
		}
		Cg.exports = uP
	})
	var va = u((RB, Ng) => {
		var cP = bt(),
			lP = Nt(),
			fP = Dr()
		function dP(e) {
			return function (t, r, n) {
				var i = Object(t)
				if (!lP(t)) {
					var o = cP(r, 3)
					;(t = fP(t)),
						(r = function (s) {
							return o(i[s], s, i)
						})
				}
				var a = e(t, r, n)
				return a > -1 ? i[o ? t[a] : a] : void 0
			}
		}
		Ng.exports = dP
	})
	var ga = u((CB, Lg) => {
		function pP(e, t, r, n) {
			for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; ) if (t(e[o], o, e)) return o
			return -1
		}
		Lg.exports = pP
	})
	var qg = u((NB, Pg) => {
		var vP = /\s/
		function gP(e) {
			for (var t = e.length; t-- && vP.test(e.charAt(t)); );
			return t
		}
		Pg.exports = gP
	})
	var Dg = u((LB, Mg) => {
		var hP = qg(),
			EP = /^\s+/
		function yP(e) {
			return e && e.slice(0, hP(e) + 1).replace(EP, '')
		}
		Mg.exports = yP
	})
	var kn = u((PB, Vg) => {
		var mP = Dg(),
			Fg = it(),
			_P = Fr(),
			Gg = 0 / 0,
			TP = /^[-+]0x[0-9a-f]+$/i,
			bP = /^0b[01]+$/i,
			IP = /^0o[0-7]+$/i,
			OP = parseInt
		function AP(e) {
			if (typeof e == 'number') return e
			if (_P(e)) return Gg
			if (Fg(e)) {
				var t = typeof e.valueOf == 'function' ? e.valueOf() : e
				e = Fg(t) ? t + '' : t
			}
			if (typeof e != 'string') return e === 0 ? e : +e
			e = mP(e)
			var r = bP.test(e)
			return r || IP.test(e) ? OP(e.slice(2), r ? 2 : 8) : TP.test(e) ? Gg : +e
		}
		Vg.exports = AP
	})
	var Xg = u((qB, Hg) => {
		var xP = kn(),
			Ug = 1 / 0,
			SP = 17976931348623157e292
		function wP(e) {
			if (!e) return e === 0 ? e : 0
			if (((e = xP(e)), e === Ug || e === -Ug)) {
				var t = e < 0 ? -1 : 1
				return t * SP
			}
			return e === e ? e : 0
		}
		Hg.exports = wP
	})
	var ha = u((MB, Wg) => {
		var RP = Xg()
		function CP(e) {
			var t = RP(e),
				r = t % 1
			return t === t ? (r ? t - r : t) : 0
		}
		Wg.exports = CP
	})
	var kg = u((DB, Bg) => {
		var NP = ga(),
			LP = bt(),
			PP = ha(),
			qP = Math.max
		function MP(e, t, r) {
			var n = e == null ? 0 : e.length
			if (!n) return -1
			var i = r == null ? 0 : PP(r)
			return i < 0 && (i = qP(n + i, 0)), NP(e, LP(t, 3), i)
		}
		Bg.exports = MP
	})
	var Ea = u((FB, jg) => {
		var DP = va(),
			FP = kg(),
			GP = DP(FP)
		jg.exports = GP
	})
	var Yg = {}
	Me(Yg, {
		ELEMENT_MATCHES: () => VP,
		FLEX_PREFIXED: () => ya,
		IS_BROWSER_ENV: () => Ye,
		TRANSFORM_PREFIXED: () => It,
		TRANSFORM_STYLE_PREFIXED: () => zn,
		withBrowser: () => jn,
	})
	var Kg,
		Ye,
		jn,
		VP,
		ya,
		It,
		zg,
		zn,
		Kn = he(() => {
			'use strict'
			;(Kg = ue(Ea())),
				(Ye = typeof window < 'u'),
				(jn = (e, t) => (Ye ? e() : t)),
				(VP = jn(() =>
					(0, Kg.default)(
						[
							'matches',
							'matchesSelector',
							'mozMatchesSelector',
							'msMatchesSelector',
							'oMatchesSelector',
							'webkitMatchesSelector',
						],
						(e) => e in Element.prototype
					)
				)),
				(ya = jn(() => {
					let e = document.createElement('i'),
						t = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'],
						r = ''
					try {
						let { length: n } = t
						for (let i = 0; i < n; i++) {
							let o = t[i]
							if (((e.style.display = o), e.style.display === o)) return o
						}
						return r
					} catch {
						return r
					}
				}, 'flex')),
				(It = jn(() => {
					let e = document.createElement('i')
					if (e.style.transform == null) {
						let t = ['Webkit', 'Moz', 'ms'],
							r = 'Transform',
							{ length: n } = t
						for (let i = 0; i < n; i++) {
							let o = t[i] + r
							if (e.style[o] !== void 0) return o
						}
					}
					return 'transform'
				}, 'transform')),
				(zg = It.split('transform')[0]),
				(zn = zg ? zg + 'TransformStyle' : 'transformStyle')
		})
	var ma = u((GB, eh) => {
		var UP = 4,
			HP = 0.001,
			XP = 1e-7,
			WP = 10,
			Vr = 11,
			Yn = 1 / (Vr - 1),
			BP = typeof Float32Array == 'function'
		function $g(e, t) {
			return 1 - 3 * t + 3 * e
		}
		function Qg(e, t) {
			return 3 * t - 6 * e
		}
		function Zg(e) {
			return 3 * e
		}
		function $n(e, t, r) {
			return (($g(t, r) * e + Qg(t, r)) * e + Zg(t)) * e
		}
		function Jg(e, t, r) {
			return 3 * $g(t, r) * e * e + 2 * Qg(t, r) * e + Zg(t)
		}
		function kP(e, t, r, n, i) {
			var o,
				a,
				s = 0
			do (a = t + (r - t) / 2), (o = $n(a, n, i) - e), o > 0 ? (r = a) : (t = a)
			while (Math.abs(o) > XP && ++s < WP)
			return a
		}
		function jP(e, t, r, n) {
			for (var i = 0; i < UP; ++i) {
				var o = Jg(t, r, n)
				if (o === 0) return t
				var a = $n(t, r, n) - e
				t -= a / o
			}
			return t
		}
		eh.exports = function (t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error('bezier x values must be in [0, 1] range')
			var o = BP ? new Float32Array(Vr) : new Array(Vr)
			if (t !== r || n !== i) for (var a = 0; a < Vr; ++a) o[a] = $n(a * Yn, t, n)
			function s(c) {
				for (var f = 0, v = 1, d = Vr - 1; v !== d && o[v] <= c; ++v) f += Yn
				--v
				var g = (c - o[v]) / (o[v + 1] - o[v]),
					E = f + g * Yn,
					T = Jg(E, t, n)
				return T >= HP ? jP(c, E, t, n) : T === 0 ? E : kP(c, f, f + Yn, t, n)
			}
			return function (f) {
				return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : $n(s(f), r, i)
			}
		}
	})
	var Hr = {}
	Me(Hr, {
		bounce: () => wq,
		bouncePast: () => Rq,
		ease: () => zP,
		easeIn: () => KP,
		easeInOut: () => $P,
		easeOut: () => YP,
		inBack: () => mq,
		inCirc: () => gq,
		inCubic: () => eq,
		inElastic: () => bq,
		inExpo: () => dq,
		inOutBack: () => Tq,
		inOutCirc: () => Eq,
		inOutCubic: () => rq,
		inOutElastic: () => Oq,
		inOutExpo: () => vq,
		inOutQuad: () => JP,
		inOutQuart: () => oq,
		inOutQuint: () => uq,
		inOutSine: () => fq,
		inQuad: () => QP,
		inQuart: () => nq,
		inQuint: () => aq,
		inSine: () => cq,
		outBack: () => _q,
		outBounce: () => yq,
		outCirc: () => hq,
		outCubic: () => tq,
		outElastic: () => Iq,
		outExpo: () => pq,
		outQuad: () => ZP,
		outQuart: () => iq,
		outQuint: () => sq,
		outSine: () => lq,
		swingFrom: () => xq,
		swingFromTo: () => Aq,
		swingTo: () => Sq,
	})
	function QP(e) {
		return Math.pow(e, 2)
	}
	function ZP(e) {
		return -(Math.pow(e - 1, 2) - 1)
	}
	function JP(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2)
	}
	function eq(e) {
		return Math.pow(e, 3)
	}
	function tq(e) {
		return Math.pow(e - 1, 3) + 1
	}
	function rq(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2)
	}
	function nq(e) {
		return Math.pow(e, 4)
	}
	function iq(e) {
		return -(Math.pow(e - 1, 4) - 1)
	}
	function oq(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2)
	}
	function aq(e) {
		return Math.pow(e, 5)
	}
	function sq(e) {
		return Math.pow(e - 1, 5) + 1
	}
	function uq(e) {
		return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2)
	}
	function cq(e) {
		return -Math.cos(e * (Math.PI / 2)) + 1
	}
	function lq(e) {
		return Math.sin(e * (Math.PI / 2))
	}
	function fq(e) {
		return -0.5 * (Math.cos(Math.PI * e) - 1)
	}
	function dq(e) {
		return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
	}
	function pq(e) {
		return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
	}
	function vq(e) {
		return e === 0
			? 0
			: e === 1
			? 1
			: (e /= 0.5) < 1
			? 0.5 * Math.pow(2, 10 * (e - 1))
			: 0.5 * (-Math.pow(2, -10 * --e) + 2)
	}
	function gq(e) {
		return -(Math.sqrt(1 - e * e) - 1)
	}
	function hq(e) {
		return Math.sqrt(1 - Math.pow(e - 1, 2))
	}
	function Eq(e) {
		return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
	}
	function yq(e) {
		return e < 1 / 2.75
			? 7.5625 * e * e
			: e < 2 / 2.75
			? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
			: e < 2.5 / 2.75
			? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
			: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
	}
	function mq(e) {
		let t = dt
		return e * e * ((t + 1) * e - t)
	}
	function _q(e) {
		let t = dt
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}
	function Tq(e) {
		let t = dt
		return (e /= 0.5) < 1
			? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
			: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}
	function bq(e) {
		let t = dt,
			r = 0,
			n = 1
		return e === 0
			? 0
			: e === 1
			? 1
			: (r || (r = 0.3),
			  n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
			  -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)))
	}
	function Iq(e) {
		let t = dt,
			r = 0,
			n = 1
		return e === 0
			? 0
			: e === 1
			? 1
			: (r || (r = 0.3),
			  n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
			  n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1)
	}
	function Oq(e) {
		let t = dt,
			r = 0,
			n = 1
		return e === 0
			? 0
			: (e /= 1 / 2) === 2
			? 1
			: (r || (r = 0.3 * 1.5),
			  n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
			  e < 1
					? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r))
					: n * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r) * 0.5 + 1)
	}
	function Aq(e) {
		let t = dt
		return (e /= 0.5) < 1
			? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
			: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}
	function xq(e) {
		let t = dt
		return e * e * ((t + 1) * e - t)
	}
	function Sq(e) {
		let t = dt
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}
	function wq(e) {
		return e < 1 / 2.75
			? 7.5625 * e * e
			: e < 2 / 2.75
			? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
			: e < 2.5 / 2.75
			? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
			: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
	}
	function Rq(e) {
		return e < 1 / 2.75
			? 7.5625 * e * e
			: e < 2 / 2.75
			? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
			: e < 2.5 / 2.75
			? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
			: 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375)
	}
	var Ur,
		dt,
		zP,
		KP,
		YP,
		$P,
		_a = he(() => {
			'use strict'
			;(Ur = ue(ma())),
				(dt = 1.70158),
				(zP = (0, Ur.default)(0.25, 0.1, 0.25, 1)),
				(KP = (0, Ur.default)(0.42, 0, 1, 1)),
				(YP = (0, Ur.default)(0, 0, 0.58, 1)),
				($P = (0, Ur.default)(0.42, 0, 0.58, 1))
		})
	var rh = {}
	Me(rh, { applyEasing: () => Nq, createBezierEasing: () => Cq, optimizeFloat: () => Xr })
	function Xr(e, t = 5, r = 10) {
		let n = Math.pow(r, t),
			i = Number(Math.round(e * n) / n)
		return Math.abs(i) > 1e-4 ? i : 0
	}
	function Cq(e) {
		return (0, th.default)(...e)
	}
	function Nq(e, t, r) {
		return t === 0 ? 0 : t === 1 ? 1 : Xr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Hr[e] ? Hr[e](t) : t)
	}
	var th,
		Ta = he(() => {
			'use strict'
			_a()
			th = ue(ma())
		})
	var oh = {}
	Me(oh, { createElementState: () => ih, ixElements: () => kq, mergeActionState: () => ba })
	function ih(e, t, r, n, i) {
		let o = r === Lq ? (0, tr.getIn)(i, ['config', 'target', 'objectId']) : null
		return (0, tr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r })
	}
	function ba(e, t, r, n, i) {
		let o = zq(i)
		return (0, tr.mergeIn)(e, [t, Bq, r], n, o)
	}
	function zq(e) {
		let { config: t } = e
		return jq.reduce((r, n) => {
			let i = n[0],
				o = n[1],
				a = t[i],
				s = t[o]
			return a != null && s != null && (r[o] = s), r
		}, {})
	}
	var tr,
		UB,
		Lq,
		HB,
		Pq,
		qq,
		Mq,
		Dq,
		Fq,
		Gq,
		Vq,
		Uq,
		Hq,
		Xq,
		Wq,
		nh,
		Bq,
		kq,
		jq,
		ah = he(() => {
			'use strict'
			tr = ue(jt())
			Fe()
			;({
				HTML_ELEMENT: UB,
				PLAIN_OBJECT: Lq,
				ABSTRACT_NODE: HB,
				CONFIG_X_VALUE: Pq,
				CONFIG_Y_VALUE: qq,
				CONFIG_Z_VALUE: Mq,
				CONFIG_VALUE: Dq,
				CONFIG_X_UNIT: Fq,
				CONFIG_Y_UNIT: Gq,
				CONFIG_Z_UNIT: Vq,
				CONFIG_UNIT: Uq,
			} = we),
				({ IX2_SESSION_STOPPED: Hq, IX2_INSTANCE_ADDED: Xq, IX2_ELEMENT_STATE_CHANGED: Wq } = be),
				(nh = {}),
				(Bq = 'refState'),
				(kq = (e = nh, t = {}) => {
					switch (t.type) {
						case Hq:
							return nh
						case Xq: {
							let { elementId: r, element: n, origin: i, actionItem: o, refType: a } = t.payload,
								{ actionTypeId: s } = o,
								c = e
							return (0, tr.getIn)(c, [r, n]) !== n && (c = ih(c, n, a, r, o)), ba(c, r, s, i, o)
						}
						case Wq: {
							let { elementId: r, actionTypeId: n, current: i, actionItem: o } = t.payload
							return ba(e, r, n, i, o)
						}
						default:
							return e
					}
				})
			jq = [
				[Pq, Fq],
				[qq, Gq],
				[Mq, Vq],
				[Dq, Uq],
			]
		})
	var sh = u((Ae) => {
		'use strict'
		Object.defineProperty(Ae, '__esModule', { value: !0 })
		Ae.renderPlugin =
			Ae.getPluginOrigin =
			Ae.getPluginDuration =
			Ae.getPluginDestination =
			Ae.getPluginConfig =
			Ae.createPluginInstance =
			Ae.clearPlugin =
				void 0
		var Kq = (e) => e.value
		Ae.getPluginConfig = Kq
		var Yq = (e, t) => {
			if (t.config.duration !== 'auto') return null
			let r = parseFloat(e.getAttribute('data-duration'))
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute('data-default-duration')) * 1e3
		}
		Ae.getPluginDuration = Yq
		var $q = (e) => e || { value: 0 }
		Ae.getPluginOrigin = $q
		var Qq = (e) => ({ value: e.value })
		Ae.getPluginDestination = Qq
		var Zq = (e) => {
			let t = window.Webflow.require('lottie').createInstance(e)
			return t.stop(), t.setSubframe(!0), t
		}
		Ae.createPluginInstance = Zq
		var Jq = (e, t, r) => {
			if (!e) return
			let n = t[r.actionTypeId].value / 100
			e.goToFrame(e.frames * n)
		}
		Ae.renderPlugin = Jq
		var eM = (e) => {
			window.Webflow.require('lottie').createInstance(e).stop()
		}
		Ae.clearPlugin = eM
	})
	var ch = u((xe) => {
		'use strict'
		Object.defineProperty(xe, '__esModule', { value: !0 })
		xe.renderPlugin =
			xe.getPluginOrigin =
			xe.getPluginDuration =
			xe.getPluginDestination =
			xe.getPluginConfig =
			xe.createPluginInstance =
			xe.clearPlugin =
				void 0
		var tM = (e) => document.querySelector(`[data-w-id="${e}"]`),
			rM = () => window.Webflow.require('spline'),
			nM = (e, t) => e.filter((r) => !t.includes(r)),
			iM = (e, t) => e.value[t]
		xe.getPluginConfig = iM
		var oM = () => null
		xe.getPluginDuration = oM
		var uh = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1,
			}),
			aM = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r)
				if (e) {
					let o = Object.keys(e),
						a = nM(n, o)
					return a.length ? a.reduce((c, f) => ((c[f] = uh[f]), c), e) : e
				}
				return n.reduce((o, a) => ((o[a] = uh[a]), o), {})
			}
		xe.getPluginOrigin = aM
		var sM = (e) => e.value
		xe.getPluginDestination = sM
		var uM = (e, t) => {
			var r, n
			let i =
				t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0
					? void 0
					: n.pluginElement
			return i ? tM(i) : null
		}
		xe.createPluginInstance = uM
		var cM = (e, t, r) => {
			let n = rM(),
				i = n.getInstance(e),
				o = r.config.target.objectId,
				a = (s) => {
					if (!s) throw new Error('Invalid spline app passed to renderSpline')
					let c = o && s.findObjectById(o)
					if (!c) return
					let { PLUGIN_SPLINE: f } = t
					f.positionX != null && (c.position.x = f.positionX),
						f.positionY != null && (c.position.y = f.positionY),
						f.positionZ != null && (c.position.z = f.positionZ),
						f.rotationX != null && (c.rotation.x = f.rotationX),
						f.rotationY != null && (c.rotation.y = f.rotationY),
						f.rotationZ != null && (c.rotation.z = f.rotationZ),
						f.scaleX != null && (c.scale.x = f.scaleX),
						f.scaleY != null && (c.scale.y = f.scaleY),
						f.scaleZ != null && (c.scale.z = f.scaleZ)
				}
			i ? a(i.spline) : n.setLoadHandler(e, a)
		}
		xe.renderPlugin = cM
		var lM = () => null
		xe.clearPlugin = lM
	})
	var fh = u((Ie) => {
		'use strict'
		Object.defineProperty(Ie, '__esModule', { value: !0 })
		Ie.getPluginOrigin =
			Ie.getPluginDuration =
			Ie.getPluginDestination =
			Ie.getPluginConfig =
			Ie.createPluginInstance =
			Ie.clearPlugin =
				void 0
		Ie.normalizeColor = lh
		Ie.renderPlugin = void 0
		function lh(e) {
			let t,
				r,
				n,
				i = 1,
				o = e.replace(/\s/g, '').toLowerCase()
			if (o.startsWith('#')) {
				let a = o.substring(1)
				a.length === 3
					? ((t = parseInt(a[0] + a[0], 16)), (r = parseInt(a[1] + a[1], 16)), (n = parseInt(a[2] + a[2], 16)))
					: a.length === 6 &&
					  ((t = parseInt(a.substring(0, 2), 16)),
					  (r = parseInt(a.substring(2, 4), 16)),
					  (n = parseInt(a.substring(4, 6), 16)))
			} else if (o.startsWith('rgba')) {
				let a = o.match(/rgba\(([^)]+)\)/)[1].split(',')
				;(t = parseInt(a[0], 10)), (r = parseInt(a[1], 10)), (n = parseInt(a[2], 10)), (i = parseFloat(a[3]))
			} else if (o.startsWith('rgb')) {
				let a = o.match(/rgb\(([^)]+)\)/)[1].split(',')
				;(t = parseInt(a[0], 10)), (r = parseInt(a[1], 10)), (n = parseInt(a[2], 10))
			} else if (o.startsWith('hsla')) {
				let a = o.match(/hsla\(([^)]+)\)/)[1].split(','),
					s = parseFloat(a[0]),
					c = parseFloat(a[1].replace('%', '')) / 100,
					f = parseFloat(a[2].replace('%', '')) / 100
				i = parseFloat(a[3])
				let v = (1 - Math.abs(2 * f - 1)) * c,
					d = v * (1 - Math.abs(((s / 60) % 2) - 1)),
					g = f - v / 2,
					E,
					T,
					_
				s >= 0 && s < 60
					? ((E = v), (T = d), (_ = 0))
					: s >= 60 && s < 120
					? ((E = d), (T = v), (_ = 0))
					: s >= 120 && s < 180
					? ((E = 0), (T = v), (_ = d))
					: s >= 180 && s < 240
					? ((E = 0), (T = d), (_ = v))
					: s >= 240 && s < 300
					? ((E = d), (T = 0), (_ = v))
					: ((E = v), (T = 0), (_ = d)),
					(t = Math.round((E + g) * 255)),
					(r = Math.round((T + g) * 255)),
					(n = Math.round((_ + g) * 255))
			} else if (o.startsWith('hsl')) {
				let a = o.match(/hsl\(([^)]+)\)/)[1].split(','),
					s = parseFloat(a[0]),
					c = parseFloat(a[1].replace('%', '')) / 100,
					f = parseFloat(a[2].replace('%', '')) / 100,
					v = (1 - Math.abs(2 * f - 1)) * c,
					d = v * (1 - Math.abs(((s / 60) % 2) - 1)),
					g = f - v / 2,
					E,
					T,
					_
				s >= 0 && s < 60
					? ((E = v), (T = d), (_ = 0))
					: s >= 60 && s < 120
					? ((E = d), (T = v), (_ = 0))
					: s >= 120 && s < 180
					? ((E = 0), (T = v), (_ = d))
					: s >= 180 && s < 240
					? ((E = 0), (T = d), (_ = v))
					: s >= 240 && s < 300
					? ((E = d), (T = 0), (_ = v))
					: ((E = v), (T = 0), (_ = d)),
					(t = Math.round((E + g) * 255)),
					(r = Math.round((T + g) * 255)),
					(n = Math.round((_ + g) * 255))
			}
			return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, { red: t, green: r, blue: n, alpha: i }
		}
		var fM = (e, t) => e.value[t]
		Ie.getPluginConfig = fM
		var dM = () => null
		Ie.getPluginDuration = dM
		var pM = (e, t) => {
			if (e) return e
			let r = t.config.value,
				n = t.config.target.objectId,
				i = getComputedStyle(document.documentElement).getPropertyValue(n)
			if (r.size != null) return { size: parseInt(i, 10) }
			if (r.red != null && r.green != null && r.blue != null) return lh(i)
		}
		Ie.getPluginOrigin = pM
		var vM = (e) => e.value
		Ie.getPluginDestination = vM
		var gM = () => null
		Ie.createPluginInstance = gM
		var hM = (e, t, r) => {
			let n = r.config.target.objectId,
				i = r.config.value.unit,
				{ PLUGIN_VARIABLE: o } = t,
				{ size: a, red: s, green: c, blue: f, alpha: v } = o,
				d
			a != null && (d = a + i),
				s != null && f != null && c != null && v != null && (d = `rgba(${s}, ${c}, ${f}, ${v})`),
				d != null && document.documentElement.style.setProperty(n, d)
		}
		Ie.renderPlugin = hM
		var EM = (e, t) => {
			let r = t.config.target.objectId
			document.documentElement.style.removeProperty(r)
		}
		Ie.clearPlugin = EM
	})
	var dh = u((Qn) => {
		'use strict'
		var Oa = un().default
		Object.defineProperty(Qn, '__esModule', { value: !0 })
		Qn.pluginMethodMap = void 0
		var Ia = (Fe(), Ze(yf)),
			yM = Oa(sh()),
			mM = Oa(ch()),
			_M = Oa(fh()),
			kB = (Qn.pluginMethodMap = new Map([
				[Ia.ActionTypeConsts.PLUGIN_LOTTIE, { ...yM }],
				[Ia.ActionTypeConsts.PLUGIN_SPLINE, { ...mM }],
				[Ia.ActionTypeConsts.PLUGIN_VARIABLE, { ..._M }],
			]))
	})
	var ph = {}
	Me(ph, {
		clearPlugin: () => Ca,
		createPluginInstance: () => bM,
		getPluginConfig: () => xa,
		getPluginDestination: () => wa,
		getPluginDuration: () => TM,
		getPluginOrigin: () => Sa,
		isPluginType: () => Pt,
		renderPlugin: () => Ra,
	})
	function Pt(e) {
		return Aa.pluginMethodMap.has(e)
	}
	var Aa,
		qt,
		xa,
		Sa,
		TM,
		wa,
		bM,
		Ra,
		Ca,
		Na = he(() => {
			'use strict'
			Kn()
			Aa = ue(dh())
			;(qt = (e) => (t) => {
				if (!Ye) return () => null
				let r = Aa.pluginMethodMap.get(t)
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`)
				let n = r[e]
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`)
				return n
			}),
				(xa = qt('getPluginConfig')),
				(Sa = qt('getPluginOrigin')),
				(TM = qt('getPluginDuration')),
				(wa = qt('getPluginDestination')),
				(bM = qt('createPluginInstance')),
				(Ra = qt('renderPlugin')),
				(Ca = qt('clearPlugin'))
		})
	var gh = u((KB, vh) => {
		function IM(e, t) {
			return e == null || e !== e ? t : e
		}
		vh.exports = IM
	})
	var Eh = u((YB, hh) => {
		function OM(e, t, r, n) {
			var i = -1,
				o = e == null ? 0 : e.length
			for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e)
			return r
		}
		hh.exports = OM
	})
	var mh = u(($B, yh) => {
		function AM(e) {
			return function (t, r, n) {
				for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
					var c = a[e ? s : ++i]
					if (r(o[c], c, o) === !1) break
				}
				return t
			}
		}
		yh.exports = AM
	})
	var Th = u((QB, _h) => {
		var xM = mh(),
			SM = xM()
		_h.exports = SM
	})
	var La = u((ZB, bh) => {
		var wM = Th(),
			RM = Dr()
		function CM(e, t) {
			return e && wM(e, t, RM)
		}
		bh.exports = CM
	})
	var Oh = u((JB, Ih) => {
		var NM = Nt()
		function LM(e, t) {
			return function (r, n) {
				if (r == null) return r
				if (!NM(r)) return e(r, n)
				for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; );
				return r
			}
		}
		Ih.exports = LM
	})
	var Pa = u((ek, Ah) => {
		var PM = La(),
			qM = Oh(),
			MM = qM(PM)
		Ah.exports = MM
	})
	var Sh = u((tk, xh) => {
		function DM(e, t, r, n, i) {
			return (
				i(e, function (o, a, s) {
					r = n ? ((n = !1), o) : t(r, o, a, s)
				}),
				r
			)
		}
		xh.exports = DM
	})
	var Rh = u((rk, wh) => {
		var FM = Eh(),
			GM = Pa(),
			VM = bt(),
			UM = Sh(),
			HM = Oe()
		function XM(e, t, r) {
			var n = HM(e) ? FM : UM,
				i = arguments.length < 3
			return n(e, VM(t, 4), r, i, GM)
		}
		wh.exports = XM
	})
	var Nh = u((nk, Ch) => {
		var WM = ga(),
			BM = bt(),
			kM = ha(),
			jM = Math.max,
			zM = Math.min
		function KM(e, t, r) {
			var n = e == null ? 0 : e.length
			if (!n) return -1
			var i = n - 1
			return r !== void 0 && ((i = kM(r)), (i = r < 0 ? jM(n + i, 0) : zM(i, n - 1))), WM(e, BM(t, 3), i, !0)
		}
		Ch.exports = KM
	})
	var Ph = u((ik, Lh) => {
		var YM = va(),
			$M = Nh(),
			QM = YM($M)
		Lh.exports = QM
	})
	function qh(e, t) {
		return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
	}
	function JM(e, t) {
		if (qh(e, t)) return !0
		if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
		let r = Object.keys(e),
			n = Object.keys(t)
		if (r.length !== n.length) return !1
		for (let i = 0; i < r.length; i++) if (!ZM.call(t, r[i]) || !qh(e[r[i]], t[r[i]])) return !1
		return !0
	}
	var ZM,
		qa,
		Mh = he(() => {
			'use strict'
			ZM = Object.prototype.hasOwnProperty
			qa = JM
		})
	var Zh = {}
	Me(Zh, {
		cleanupHTMLElement: () => $1,
		clearAllStyles: () => Y1,
		clearObjectCache: () => h1,
		getActionListProgress: () => Z1,
		getAffectedElements: () => Va,
		getComputedStyle: () => O1,
		getDestinationValues: () => N1,
		getElementId: () => _1,
		getInstanceId: () => y1,
		getInstanceOrigin: () => S1,
		getItemConfigByKey: () => C1,
		getMaxDurationItemIndex: () => Qh,
		getNamespacedParameterId: () => tD,
		getRenderType: () => Kh,
		getStyleProp: () => L1,
		mediaQueriesEqual: () => nD,
		observeStore: () => I1,
		reduceListToGroup: () => J1,
		reifyState: () => T1,
		renderHTMLElement: () => P1,
		shallowEqual: () => qa,
		shouldAllowMediaQuery: () => rD,
		shouldNamespaceEventParameter: () => eD,
		stringifyTarget: () => iD,
	})
	function h1() {
		Zn.clear()
	}
	function y1() {
		return 'i' + E1++
	}
	function _1(e, t) {
		for (let r in e) {
			let n = e[r]
			if (n && n.ref === t) return n.id
		}
		return 'e' + m1++
	}
	function T1({ events: e, actionLists: t, site: r } = {}) {
		let n = (0, ri.default)(
				e,
				(a, s) => {
					let { eventTypeId: c } = s
					return a[c] || (a[c] = {}), (a[c][s.id] = s), a
				},
				{}
			),
			i = r && r.mediaQueries,
			o = []
		return (
			i ? (o = i.map((a) => a.key)) : ((i = []), console.warn('IX2 missing mediaQueries in site data')),
			{ ixData: { events: e, actionLists: t, eventTypeMap: n, mediaQueries: i, mediaQueryKeys: o } }
		)
	}
	function I1({ store: e, select: t, onChange: r, comparator: n = b1 }) {
		let { getState: i, subscribe: o } = e,
			a = o(c),
			s = t(i())
		function c() {
			let f = t(i())
			if (f == null) {
				a()
				return
			}
			n(f, s) || ((s = f), r(s, e))
		}
		return a
	}
	function Gh(e) {
		let t = typeof e
		if (t === 'string') return { id: e }
		if (e != null && t === 'object') {
			let { id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s } = e
			return { id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s }
		}
		return {}
	}
	function Va({ config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i }) {
		if (!i) throw new Error('IX2 missing elementApi')
		let { targets: o } = e
		if (Array.isArray(o) && o.length > 0)
			return o.reduce(
				(L, b) => L.concat(Va({ config: { target: b }, event: t, eventTarget: r, elementRoot: n, elementApi: i })),
				[]
			)
		let {
				getValidDocument: a,
				getQuerySelector: s,
				queryDocument: c,
				getChildElements: f,
				getSiblingElements: v,
				matchSelector: d,
				elementContains: g,
				isSiblingNode: E,
			} = i,
			{ target: T } = e
		if (!T) return []
		let { id: _, objectId: R, selector: x, selectorGuids: S, appliesTo: A, useEventTarget: P } = Gh(T)
		if (R) return [Zn.has(R) ? Zn.get(R) : Zn.set(R, {}).get(R)]
		if (A === Uo.PAGE) {
			let L = a(_)
			return L ? [L] : []
		}
		let w = (t?.action?.config?.affectedElements ?? {})[_ || x] || {},
			X = !!(w.id || w.selector),
			W,
			k,
			Y,
			te = t && s(Gh(t.target))
		if (
			(X
				? ((W = w.limitAffectedElements), (k = te), (Y = s(w)))
				: (k = Y = s({ id: _, selector: x, selectorGuids: S })),
			t && P)
		) {
			let L = r && (Y || P === !0) ? [r] : c(te)
			if (Y) {
				if (P === p1) return c(Y).filter((b) => L.some((C) => g(b, C)))
				if (P === Dh) return c(Y).filter((b) => L.some((C) => g(C, b)))
				if (P === Fh) return c(Y).filter((b) => L.some((C) => E(C, b)))
			}
			return L
		}
		return k == null || Y == null
			? []
			: Ye && n
			? c(Y).filter((L) => n.contains(L))
			: W === Dh
			? c(k, Y)
			: W === d1
			? f(c(k)).filter(d(Y))
			: W === Fh
			? v(c(k)).filter(d(Y))
			: c(Y)
	}
	function O1({ element: e, actionItem: t }) {
		if (!Ye) return {}
		let { actionTypeId: r } = t
		switch (r) {
			case ar:
			case sr:
			case ur:
			case cr:
			case ii:
				return window.getComputedStyle(e)
			default:
				return {}
		}
	}
	function S1(e, t = {}, r = {}, n, i) {
		let { getStyle: o } = i,
			{ actionTypeId: a } = n
		if (Pt(a)) return Sa(a)(t[a], n)
		switch (n.actionTypeId) {
			case nr:
			case ir:
			case or:
			case jr:
				return t[n.actionTypeId] || Ua[n.actionTypeId]
			case zr:
				return A1(t[n.actionTypeId], n.config.filters)
			case Kr:
				return x1(t[n.actionTypeId], n.config.fontVariations)
			case kh:
				return { value: (0, pt.default)(parseFloat(o(e, ei)), 1) }
			case ar: {
				let s = o(e, ot),
					c = o(e, at),
					f,
					v
				return (
					n.config.widthUnit === Ot
						? (f = Vh.test(s) ? parseFloat(s) : parseFloat(r.width))
						: (f = (0, pt.default)(parseFloat(s), parseFloat(r.width))),
					n.config.heightUnit === Ot
						? (v = Vh.test(c) ? parseFloat(c) : parseFloat(r.height))
						: (v = (0, pt.default)(parseFloat(c), parseFloat(r.height))),
					{ widthValue: f, heightValue: v }
				)
			}
			case sr:
			case ur:
			case cr:
				return j1({ element: e, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: o })
			case ii:
				return { value: (0, pt.default)(o(e, ti), r.display) }
			case g1:
				return t[n.actionTypeId] || { value: 0 }
			default:
				return
		}
	}
	function N1({ element: e, actionItem: t, elementApi: r }) {
		if (Pt(t.actionTypeId)) return wa(t.actionTypeId)(t.config)
		switch (t.actionTypeId) {
			case nr:
			case ir:
			case or:
			case jr: {
				let { xValue: n, yValue: i, zValue: o } = t.config
				return { xValue: n, yValue: i, zValue: o }
			}
			case ar: {
				let { getStyle: n, setStyle: i, getProperty: o } = r,
					{ widthUnit: a, heightUnit: s } = t.config,
					{ widthValue: c, heightValue: f } = t.config
				if (!Ye) return { widthValue: c, heightValue: f }
				if (a === Ot) {
					let v = n(e, ot)
					i(e, ot, ''), (c = o(e, 'offsetWidth')), i(e, ot, v)
				}
				if (s === Ot) {
					let v = n(e, at)
					i(e, at, ''), (f = o(e, 'offsetHeight')), i(e, at, v)
				}
				return { widthValue: c, heightValue: f }
			}
			case sr:
			case ur:
			case cr: {
				let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config
				return { rValue: n, gValue: i, bValue: o, aValue: a }
			}
			case zr:
				return t.config.filters.reduce(w1, {})
			case Kr:
				return t.config.fontVariations.reduce(R1, {})
			default: {
				let { value: n } = t.config
				return { value: n }
			}
		}
	}
	function Kh(e) {
		if (/^TRANSFORM_/.test(e)) return Wh
		if (/^STYLE_/.test(e)) return Fa
		if (/^GENERAL_/.test(e)) return Da
		if (/^PLUGIN_/.test(e)) return Bh
	}
	function L1(e, t) {
		return e === Fa ? t.replace('STYLE_', '').toLowerCase() : null
	}
	function P1(e, t, r, n, i, o, a, s, c) {
		switch (s) {
			case Wh:
				return G1(e, t, r, i, a)
			case Fa:
				return z1(e, t, r, i, o, a)
			case Da:
				return K1(e, i, a)
			case Bh: {
				let { actionTypeId: f } = i
				if (Pt(f)) return Ra(f)(c, t, i)
			}
		}
	}
	function G1(e, t, r, n, i) {
		let o = F1.map((s) => {
				let c = Ua[s],
					{
						xValue: f = c.xValue,
						yValue: v = c.yValue,
						zValue: d = c.zValue,
						xUnit: g = '',
						yUnit: E = '',
						zUnit: T = '',
					} = t[s] || {}
				switch (s) {
					case nr:
						return `${r1}(${f}${g}, ${v}${E}, ${d}${T})`
					case ir:
						return `${n1}(${f}${g}, ${v}${E}, ${d}${T})`
					case or:
						return `${i1}(${f}${g}) ${o1}(${v}${E}) ${a1}(${d}${T})`
					case jr:
						return `${s1}(${f}${g}, ${v}${E})`
					default:
						return ''
				}
			}).join(' '),
			{ setStyle: a } = i
		Mt(e, It, i), a(e, It, o), H1(n, r) && a(e, zn, u1)
	}
	function V1(e, t, r, n) {
		let i = (0, ri.default)(t, (a, s, c) => `${a} ${c}(${s}${D1(c, r)})`, ''),
			{ setStyle: o } = n
		Mt(e, Wr, n), o(e, Wr, i)
	}
	function U1(e, t, r, n) {
		let i = (0, ri.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(', '),
			{ setStyle: o } = n
		Mt(e, Br, n), o(e, Br, i)
	}
	function H1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
		return (e === nr && n !== void 0) || (e === ir && n !== void 0) || (e === or && (t !== void 0 || r !== void 0))
	}
	function k1(e, t) {
		let r = e.exec(t)
		return r ? r[1] : ''
	}
	function j1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
		let i = Ga[t],
			o = n(e, i),
			a = W1.test(o) ? o : r[i],
			s = k1(B1, a).split(kr)
		return {
			rValue: (0, pt.default)(parseInt(s[0], 10), 255),
			gValue: (0, pt.default)(parseInt(s[1], 10), 255),
			bValue: (0, pt.default)(parseInt(s[2], 10), 255),
			aValue: (0, pt.default)(parseFloat(s[3]), 1),
		}
	}
	function z1(e, t, r, n, i, o) {
		let { setStyle: a } = o
		switch (n.actionTypeId) {
			case ar: {
				let { widthUnit: s = '', heightUnit: c = '' } = n.config,
					{ widthValue: f, heightValue: v } = r
				f !== void 0 && (s === Ot && (s = 'px'), Mt(e, ot, o), a(e, ot, f + s)),
					v !== void 0 && (c === Ot && (c = 'px'), Mt(e, at, o), a(e, at, v + c))
				break
			}
			case zr: {
				V1(e, r, n.config, o)
				break
			}
			case Kr: {
				U1(e, r, n.config, o)
				break
			}
			case sr:
			case ur:
			case cr: {
				let s = Ga[n.actionTypeId],
					c = Math.round(r.rValue),
					f = Math.round(r.gValue),
					v = Math.round(r.bValue),
					d = r.aValue
				Mt(e, s, o), a(e, s, d >= 1 ? `rgb(${c},${f},${v})` : `rgba(${c},${f},${v},${d})`)
				break
			}
			default: {
				let { unit: s = '' } = n.config
				Mt(e, i, o), a(e, i, r.value + s)
				break
			}
		}
	}
	function K1(e, t, r) {
		let { setStyle: n } = r
		switch (t.actionTypeId) {
			case ii: {
				let { value: i } = t.config
				i === c1 && Ye ? n(e, ti, ya) : n(e, ti, i)
				return
			}
		}
	}
	function Mt(e, t, r) {
		if (!Ye) return
		let n = zh[t]
		if (!n) return
		let { getStyle: i, setStyle: o } = r,
			a = i(e, rr)
		if (!a) {
			o(e, rr, n)
			return
		}
		let s = a.split(kr).map(jh)
		s.indexOf(n) === -1 && o(e, rr, s.concat(n).join(kr))
	}
	function Yh(e, t, r) {
		if (!Ye) return
		let n = zh[t]
		if (!n) return
		let { getStyle: i, setStyle: o } = r,
			a = i(e, rr)
		!a ||
			a.indexOf(n) === -1 ||
			o(
				e,
				rr,
				a
					.split(kr)
					.map(jh)
					.filter((s) => s !== n)
					.join(kr)
			)
	}
	function Y1({ store: e, elementApi: t }) {
		let { ixData: r } = e.getState(),
			{ events: n = {}, actionLists: i = {} } = r
		Object.keys(n).forEach((o) => {
			let a = n[o],
				{ config: s } = a.action,
				{ actionListId: c } = s,
				f = i[c]
			f && Uh({ actionList: f, event: a, elementApi: t })
		}),
			Object.keys(i).forEach((o) => {
				Uh({ actionList: i[o], elementApi: t })
			})
	}
	function Uh({ actionList: e = {}, event: t, elementApi: r }) {
		let { actionItemGroups: n, continuousParameterGroups: i } = e
		n &&
			n.forEach((o) => {
				Hh({ actionGroup: o, event: t, elementApi: r })
			}),
			i &&
				i.forEach((o) => {
					let { continuousActionGroups: a } = o
					a.forEach((s) => {
						Hh({ actionGroup: s, event: t, elementApi: r })
					})
				})
	}
	function Hh({ actionGroup: e, event: t, elementApi: r }) {
		let { actionItems: n } = e
		n.forEach((i) => {
			let { actionTypeId: o, config: a } = i,
				s
			Pt(o) ? (s = (c) => Ca(o)(c, i)) : (s = $h({ effect: Q1, actionTypeId: o, elementApi: r })),
				Va({ config: a, event: t, elementApi: r }).forEach(s)
		})
	}
	function $1(e, t, r) {
		let { setStyle: n, getStyle: i } = r,
			{ actionTypeId: o } = t
		if (o === ar) {
			let { config: a } = t
			a.widthUnit === Ot && n(e, ot, ''), a.heightUnit === Ot && n(e, at, '')
		}
		i(e, rr) && $h({ effect: Yh, actionTypeId: o, elementApi: r })(e)
	}
	function Q1(e, t, r) {
		let { setStyle: n } = r
		Yh(e, t, r), n(e, t, ''), t === It && n(e, zn, '')
	}
	function Qh(e) {
		let t = 0,
			r = 0
		return (
			e.forEach((n, i) => {
				let { config: o } = n,
					a = o.delay + o.duration
				a >= t && ((t = a), (r = i))
			}),
			r
		)
	}
	function Z1(e, t) {
		let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
			{ actionItem: i, verboseTimeElapsed: o = 0 } = t,
			a = 0,
			s = 0
		return (
			r.forEach((c, f) => {
				if (n && f === 0) return
				let { actionItems: v } = c,
					d = v[Qh(v)],
					{ config: g, actionTypeId: E } = d
				i.id === d.id && (s = a + o)
				let T = Kh(E) === Da ? 0 : g.duration
				a += g.delay + T
			}),
			a > 0 ? Xr(s / a) : 0
		)
	}
	function J1({ actionList: e, actionItemId: t, rawData: r }) {
		let { actionItemGroups: n, continuousParameterGroups: i } = e,
			o = [],
			a = (s) => (o.push((0, ni.mergeIn)(s, ['config'], { delay: 0, duration: 0 })), s.id === t)
		return (
			n && n.some(({ actionItems: s }) => s.some(a)),
			i &&
				i.some((s) => {
					let { continuousActionGroups: c } = s
					return c.some(({ actionItems: f }) => f.some(a))
				}),
			(0, ni.setIn)(r, ['actionLists'], { [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] } })
		)
	}
	function eD(e, { basedOn: t }) {
		return (e === Ke.SCROLLING_IN_VIEW && (t === nt.ELEMENT || t == null)) || (e === Ke.MOUSE_MOVE && t === nt.ELEMENT)
	}
	function tD(e, t) {
		return e + v1 + t
	}
	function rD(e, t) {
		return t == null ? !0 : e.indexOf(t) !== -1
	}
	function nD(e, t) {
		return qa(e && e.sort(), t && t.sort())
	}
	function iD(e) {
		if (typeof e == 'string') return e
		if (e.pluginElement && e.objectId) return e.pluginElement + Ma + e.objectId
		if (e.objectId) return e.objectId
		let { id: t = '', selector: r = '', useEventTarget: n = '' } = e
		return t + Ma + r + Ma + n
	}
	var pt,
		ri,
		Jn,
		ni,
		e1,
		t1,
		r1,
		n1,
		i1,
		o1,
		a1,
		s1,
		u1,
		c1,
		ei,
		Wr,
		Br,
		ot,
		at,
		Xh,
		l1,
		f1,
		Dh,
		d1,
		Fh,
		p1,
		ti,
		rr,
		Ot,
		kr,
		v1,
		Ma,
		Wh,
		Da,
		Fa,
		Bh,
		nr,
		ir,
		or,
		jr,
		kh,
		zr,
		Kr,
		ar,
		sr,
		ur,
		cr,
		ii,
		g1,
		jh,
		Ga,
		zh,
		Zn,
		E1,
		m1,
		b1,
		Vh,
		A1,
		x1,
		w1,
		R1,
		C1,
		Ua,
		q1,
		M1,
		D1,
		F1,
		X1,
		W1,
		B1,
		$h,
		Jh = he(() => {
			'use strict'
			;(pt = ue(gh())), (ri = ue(Rh())), (Jn = ue(Ph())), (ni = ue(jt()))
			Fe()
			Mh()
			Ta()
			Na()
			Kn()
			;({
				BACKGROUND: e1,
				TRANSFORM: t1,
				TRANSLATE_3D: r1,
				SCALE_3D: n1,
				ROTATE_X: i1,
				ROTATE_Y: o1,
				ROTATE_Z: a1,
				SKEW: s1,
				PRESERVE_3D: u1,
				FLEX: c1,
				OPACITY: ei,
				FILTER: Wr,
				FONT_VARIATION_SETTINGS: Br,
				WIDTH: ot,
				HEIGHT: at,
				BACKGROUND_COLOR: Xh,
				BORDER_COLOR: l1,
				COLOR: f1,
				CHILDREN: Dh,
				IMMEDIATE_CHILDREN: d1,
				SIBLINGS: Fh,
				PARENT: p1,
				DISPLAY: ti,
				WILL_CHANGE: rr,
				AUTO: Ot,
				COMMA_DELIMITER: kr,
				COLON_DELIMITER: v1,
				BAR_DELIMITER: Ma,
				RENDER_TRANSFORM: Wh,
				RENDER_GENERAL: Da,
				RENDER_STYLE: Fa,
				RENDER_PLUGIN: Bh,
			} = we),
				({
					TRANSFORM_MOVE: nr,
					TRANSFORM_SCALE: ir,
					TRANSFORM_ROTATE: or,
					TRANSFORM_SKEW: jr,
					STYLE_OPACITY: kh,
					STYLE_FILTER: zr,
					STYLE_FONT_VARIATION: Kr,
					STYLE_SIZE: ar,
					STYLE_BACKGROUND_COLOR: sr,
					STYLE_BORDER: ur,
					STYLE_TEXT_COLOR: cr,
					GENERAL_DISPLAY: ii,
					OBJECT_VALUE: g1,
				} = De),
				(jh = (e) => e.trim()),
				(Ga = Object.freeze({ [sr]: Xh, [ur]: l1, [cr]: f1 })),
				(zh = Object.freeze({ [It]: t1, [Xh]: e1, [ei]: ei, [Wr]: Wr, [ot]: ot, [at]: at, [Br]: Br })),
				(Zn = new Map())
			E1 = 1
			m1 = 1
			b1 = (e, t) => e === t
			;(Vh = /px/),
				(A1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = q1[n.type]), r), e || {})),
				(x1 = (e, t) =>
					t.reduce((r, n) => (r[n.type] == null && (r[n.type] = M1[n.type] || n.defaultValue || 0), r), e || {}))
			;(w1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
				(R1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
				(C1 = (e, t, r) => {
					if (Pt(e)) return xa(e)(r, t)
					switch (e) {
						case zr: {
							let n = (0, Jn.default)(r.filters, ({ type: i }) => i === t)
							return n ? n.value : 0
						}
						case Kr: {
							let n = (0, Jn.default)(r.fontVariations, ({ type: i }) => i === t)
							return n ? n.value : 0
						}
						default:
							return r[t]
					}
				})
			;(Ua = {
				[nr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[ir]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
				[or]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[jr]: Object.freeze({ xValue: 0, yValue: 0 }),
			}),
				(q1 = Object.freeze({
					blur: 0,
					'hue-rotate': 0,
					invert: 0,
					grayscale: 0,
					saturate: 100,
					sepia: 0,
					contrast: 100,
					brightness: 100,
				})),
				(M1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
				(D1 = (e, t) => {
					let r = (0, Jn.default)(t.filters, ({ type: n }) => n === e)
					if (r && r.unit) return r.unit
					switch (e) {
						case 'blur':
							return 'px'
						case 'hue-rotate':
							return 'deg'
						default:
							return '%'
					}
				}),
				(F1 = Object.keys(Ua))
			;(X1 = '\\(([^)]+)\\)'), (W1 = /^rgb/), (B1 = RegExp(`rgba?${X1}`))
			$h =
				({ effect: e, actionTypeId: t, elementApi: r }) =>
				(n) => {
					switch (t) {
						case nr:
						case ir:
						case or:
						case jr:
							e(n, It, r)
							break
						case zr:
							e(n, Wr, r)
							break
						case Kr:
							e(n, Br, r)
							break
						case kh:
							e(n, ei, r)
							break
						case ar:
							e(n, ot, r), e(n, at, r)
							break
						case sr:
						case ur:
						case cr:
							e(n, Ga[t], r)
							break
						case ii:
							e(n, ti, r)
							break
					}
				}
		})
	var Dt = u((Le) => {
		'use strict'
		var lr = un().default
		Object.defineProperty(Le, '__esModule', { value: !0 })
		Le.IX2VanillaUtils =
			Le.IX2VanillaPlugins =
			Le.IX2ElementsReducer =
			Le.IX2Easings =
			Le.IX2EasingUtils =
			Le.IX2BrowserSupport =
				void 0
		var oD = lr((Kn(), Ze(Yg)))
		Le.IX2BrowserSupport = oD
		var aD = lr((_a(), Ze(Hr)))
		Le.IX2Easings = aD
		var sD = lr((Ta(), Ze(rh)))
		Le.IX2EasingUtils = sD
		var uD = lr((ah(), Ze(oh)))
		Le.IX2ElementsReducer = uD
		var cD = lr((Na(), Ze(ph)))
		Le.IX2VanillaPlugins = cD
		var lD = lr((Jh(), Ze(Zh)))
		Le.IX2VanillaUtils = lD
	})
	var ai,
		vt,
		fD,
		dD,
		pD,
		vD,
		gD,
		hD,
		oi,
		eE,
		ED,
		yD,
		Ha,
		mD,
		_D,
		TD,
		bD,
		tE,
		rE = he(() => {
			'use strict'
			Fe()
			;(ai = ue(Dt())),
				(vt = ue(jt())),
				({
					IX2_RAW_DATA_IMPORTED: fD,
					IX2_SESSION_STOPPED: dD,
					IX2_INSTANCE_ADDED: pD,
					IX2_INSTANCE_STARTED: vD,
					IX2_INSTANCE_REMOVED: gD,
					IX2_ANIMATION_FRAME_CHANGED: hD,
				} = be),
				({ optimizeFloat: oi, applyEasing: eE, createBezierEasing: ED } = ai.IX2EasingUtils),
				({ RENDER_GENERAL: yD } = we),
				({ getItemConfigByKey: Ha, getRenderType: mD, getStyleProp: _D } = ai.IX2VanillaUtils),
				(TD = (e, t) => {
					let {
							position: r,
							parameterId: n,
							actionGroups: i,
							destinationKeys: o,
							smoothing: a,
							restingValue: s,
							actionTypeId: c,
							customEasingFn: f,
							skipMotion: v,
							skipToValue: d,
						} = e,
						{ parameters: g } = t.payload,
						E = Math.max(1 - a, 0.01),
						T = g[n]
					T == null && ((E = 1), (T = s))
					let _ = Math.max(T, 0) || 0,
						R = oi(_ - r),
						x = v ? d : oi(r + R * E),
						S = x * 100
					if (x === r && e.current) return e
					let A, P, q, w
					for (let W = 0, { length: k } = i; W < k; W++) {
						let { keyframe: Y, actionItems: te } = i[W]
						if ((W === 0 && (A = te[0]), S >= Y)) {
							A = te[0]
							let L = i[W + 1],
								b = L && S !== Y
							;(P = b ? L.actionItems[0] : null), b && ((q = Y / 100), (w = (L.keyframe - Y) / 100))
						}
					}
					let X = {}
					if (A && !P)
						for (let W = 0, { length: k } = o; W < k; W++) {
							let Y = o[W]
							X[Y] = Ha(c, Y, A.config)
						}
					else if (A && P && q !== void 0 && w !== void 0) {
						let W = (x - q) / w,
							k = A.config.easing,
							Y = eE(k, W, f)
						for (let te = 0, { length: L } = o; te < L; te++) {
							let b = o[te],
								C = Ha(c, b, A.config),
								J = (Ha(c, b, P.config) - C) * Y + C
							X[b] = J
						}
					}
					return (0, vt.merge)(e, { position: x, current: X })
				}),
				(bD = (e, t) => {
					let {
							active: r,
							origin: n,
							start: i,
							immediate: o,
							renderType: a,
							verbose: s,
							actionItem: c,
							destination: f,
							destinationKeys: v,
							pluginDuration: d,
							instanceDelay: g,
							customEasingFn: E,
							skipMotion: T,
						} = e,
						_ = c.config.easing,
						{ duration: R, delay: x } = c.config
					d != null && (R = d), (x = g ?? x), a === yD ? (R = 0) : (o || T) && (R = x = 0)
					let { now: S } = t.payload
					if (r && n) {
						let A = S - (i + x)
						if (s) {
							let W = S - i,
								k = R + x,
								Y = oi(Math.min(Math.max(0, W / k), 1))
							e = (0, vt.set)(e, 'verboseTimeElapsed', k * Y)
						}
						if (A < 0) return e
						let P = oi(Math.min(Math.max(0, A / R), 1)),
							q = eE(_, P, E),
							w = {},
							X = null
						return (
							v.length &&
								(X = v.reduce((W, k) => {
									let Y = f[k],
										te = parseFloat(n[k]) || 0,
										b = (parseFloat(Y) - te) * q + te
									return (W[k] = b), W
								}, {})),
							(w.current = X),
							(w.position = P),
							P === 1 && ((w.active = !1), (w.complete = !0)),
							(0, vt.merge)(e, w)
						)
					}
					return e
				}),
				(tE = (e = Object.freeze({}), t) => {
					switch (t.type) {
						case fD:
							return t.payload.ixInstances || Object.freeze({})
						case dD:
							return Object.freeze({})
						case pD: {
							let {
									instanceId: r,
									elementId: n,
									actionItem: i,
									eventId: o,
									eventTarget: a,
									eventStateKey: s,
									actionListId: c,
									groupIndex: f,
									isCarrier: v,
									origin: d,
									destination: g,
									immediate: E,
									verbose: T,
									continuous: _,
									parameterId: R,
									actionGroups: x,
									smoothing: S,
									restingValue: A,
									pluginInstance: P,
									pluginDuration: q,
									instanceDelay: w,
									skipMotion: X,
									skipToValue: W,
								} = t.payload,
								{ actionTypeId: k } = i,
								Y = mD(k),
								te = _D(Y, k),
								L = Object.keys(g).filter((C) => g[C] != null && typeof g[C] != 'string'),
								{ easing: b } = i.config
							return (0, vt.set)(e, r, {
								id: r,
								elementId: n,
								active: !1,
								position: 0,
								start: 0,
								origin: d,
								destination: g,
								destinationKeys: L,
								immediate: E,
								verbose: T,
								current: null,
								actionItem: i,
								actionTypeId: k,
								eventId: o,
								eventTarget: a,
								eventStateKey: s,
								actionListId: c,
								groupIndex: f,
								renderType: Y,
								isCarrier: v,
								styleProp: te,
								continuous: _,
								parameterId: R,
								actionGroups: x,
								smoothing: S,
								restingValue: A,
								pluginInstance: P,
								pluginDuration: q,
								instanceDelay: w,
								skipMotion: X,
								skipToValue: W,
								customEasingFn: Array.isArray(b) && b.length === 4 ? ED(b) : void 0,
							})
						}
						case vD: {
							let { instanceId: r, time: n } = t.payload
							return (0, vt.mergeIn)(e, [r], { active: !0, complete: !1, start: n })
						}
						case gD: {
							let { instanceId: r } = t.payload
							if (!e[r]) return e
							let n = {},
								i = Object.keys(e),
								{ length: o } = i
							for (let a = 0; a < o; a++) {
								let s = i[a]
								s !== r && (n[s] = e[s])
							}
							return n
						}
						case hD: {
							let r = e,
								n = Object.keys(e),
								{ length: i } = n
							for (let o = 0; o < i; o++) {
								let a = n[o],
									s = e[a],
									c = s.continuous ? TD : bD
								r = (0, vt.set)(r, a, c(s, t))
							}
							return r
						}
						default:
							return e
					}
				})
		})
	var ID,
		OD,
		AD,
		nE,
		iE = he(() => {
			'use strict'
			Fe()
			;({ IX2_RAW_DATA_IMPORTED: ID, IX2_SESSION_STOPPED: OD, IX2_PARAMETER_CHANGED: AD } = be),
				(nE = (e = {}, t) => {
					switch (t.type) {
						case ID:
							return t.payload.ixParameters || {}
						case OD:
							return {}
						case AD: {
							let { key: r, value: n } = t.payload
							return (e[r] = n), e
						}
						default:
							return e
					}
				})
		})
	var sE = {}
	Me(sE, { default: () => SD })
	var oE,
		aE,
		xD,
		SD,
		uE = he(() => {
			'use strict'
			oE = ue(Vo())
			_f()
			Hf()
			Bf()
			aE = ue(Dt())
			rE()
			iE()
			;({ ixElements: xD } = aE.IX2ElementsReducer),
				(SD = (0, oE.combineReducers)({
					ixData: mf,
					ixRequest: Uf,
					ixSession: Wf,
					ixElements: xD,
					ixInstances: tE,
					ixParameters: nE,
				}))
		})
	var lE = u((Tk, cE) => {
		var wD = _t(),
			RD = Oe(),
			CD = ft(),
			ND = '[object String]'
		function LD(e) {
			return typeof e == 'string' || (!RD(e) && CD(e) && wD(e) == ND)
		}
		cE.exports = LD
	})
	var dE = u((bk, fE) => {
		var PD = pa(),
			qD = PD('length')
		fE.exports = qD
	})
	var vE = u((Ik, pE) => {
		var MD = '\\ud800-\\udfff',
			DD = '\\u0300-\\u036f',
			FD = '\\ufe20-\\ufe2f',
			GD = '\\u20d0-\\u20ff',
			VD = DD + FD + GD,
			UD = '\\ufe0e\\ufe0f',
			HD = '\\u200d',
			XD = RegExp('[' + HD + MD + VD + UD + ']')
		function WD(e) {
			return XD.test(e)
		}
		pE.exports = WD
	})
	var IE = u((Ok, bE) => {
		var hE = '\\ud800-\\udfff',
			BD = '\\u0300-\\u036f',
			kD = '\\ufe20-\\ufe2f',
			jD = '\\u20d0-\\u20ff',
			zD = BD + kD + jD,
			KD = '\\ufe0e\\ufe0f',
			YD = '[' + hE + ']',
			Xa = '[' + zD + ']',
			Wa = '\\ud83c[\\udffb-\\udfff]',
			$D = '(?:' + Xa + '|' + Wa + ')',
			EE = '[^' + hE + ']',
			yE = '(?:\\ud83c[\\udde6-\\uddff]){2}',
			mE = '[\\ud800-\\udbff][\\udc00-\\udfff]',
			QD = '\\u200d',
			_E = $D + '?',
			TE = '[' + KD + ']?',
			ZD = '(?:' + QD + '(?:' + [EE, yE, mE].join('|') + ')' + TE + _E + ')*',
			JD = TE + _E + ZD,
			eF = '(?:' + [EE + Xa + '?', Xa, yE, mE, YD].join('|') + ')',
			gE = RegExp(Wa + '(?=' + Wa + ')|' + eF + JD, 'g')
		function tF(e) {
			for (var t = (gE.lastIndex = 0); gE.test(e); ) ++t
			return t
		}
		bE.exports = tF
	})
	var AE = u((Ak, OE) => {
		var rF = dE(),
			nF = vE(),
			iF = IE()
		function oF(e) {
			return nF(e) ? iF(e) : rF(e)
		}
		OE.exports = oF
	})
	var SE = u((xk, xE) => {
		var aF = Gn(),
			sF = Vn(),
			uF = Nt(),
			cF = lE(),
			lF = AE(),
			fF = '[object Map]',
			dF = '[object Set]'
		function pF(e) {
			if (e == null) return 0
			if (uF(e)) return cF(e) ? lF(e) : e.length
			var t = sF(e)
			return t == fF || t == dF ? e.size : aF(e).length
		}
		xE.exports = pF
	})
	var RE = u((Sk, wE) => {
		var vF = 'Expected a function'
		function gF(e) {
			if (typeof e != 'function') throw new TypeError(vF)
			return function () {
				var t = arguments
				switch (t.length) {
					case 0:
						return !e.call(this)
					case 1:
						return !e.call(this, t[0])
					case 2:
						return !e.call(this, t[0], t[1])
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		wE.exports = gF
	})
	var Ba = u((wk, CE) => {
		var hF = Tt(),
			EF = (function () {
				try {
					var e = hF(Object, 'defineProperty')
					return e({}, '', {}), e
				} catch {}
			})()
		CE.exports = EF
	})
	var ka = u((Rk, LE) => {
		var NE = Ba()
		function yF(e, t, r) {
			t == '__proto__' && NE ? NE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r)
		}
		LE.exports = yF
	})
	var qE = u((Ck, PE) => {
		var mF = ka(),
			_F = wn(),
			TF = Object.prototype,
			bF = TF.hasOwnProperty
		function IF(e, t, r) {
			var n = e[t]
			;(!(bF.call(e, t) && _F(n, r)) || (r === void 0 && !(t in e))) && mF(e, t, r)
		}
		PE.exports = IF
	})
	var FE = u((Nk, DE) => {
		var OF = qE(),
			AF = Gr(),
			xF = qn(),
			ME = it(),
			SF = er()
		function wF(e, t, r, n) {
			if (!ME(e)) return e
			t = AF(t, e)
			for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
				var c = SF(t[i]),
					f = r
				if (c === '__proto__' || c === 'constructor' || c === 'prototype') return e
				if (i != a) {
					var v = s[c]
					;(f = n ? n(v, c, s) : void 0), f === void 0 && (f = ME(v) ? v : xF(t[i + 1]) ? [] : {})
				}
				OF(s, c, f), (s = s[c])
			}
			return e
		}
		DE.exports = wF
	})
	var VE = u((Lk, GE) => {
		var RF = Xn(),
			CF = FE(),
			NF = Gr()
		function LF(e, t, r) {
			for (var n = -1, i = t.length, o = {}; ++n < i; ) {
				var a = t[n],
					s = RF(e, a)
				r(s, a) && CF(o, NF(a, e), s)
			}
			return o
		}
		GE.exports = LF
	})
	var HE = u((Pk, UE) => {
		var PF = Ln(),
			qF = xo(),
			MF = Zo(),
			DF = Qo(),
			FF = Object.getOwnPropertySymbols,
			GF = FF
				? function (e) {
						for (var t = []; e; ) PF(t, MF(e)), (e = qF(e))
						return t
				  }
				: DF
		UE.exports = GF
	})
	var WE = u((qk, XE) => {
		function VF(e) {
			var t = []
			if (e != null) for (var r in Object(e)) t.push(r)
			return t
		}
		XE.exports = VF
	})
	var kE = u((Mk, BE) => {
		var UF = it(),
			HF = Fn(),
			XF = WE(),
			WF = Object.prototype,
			BF = WF.hasOwnProperty
		function kF(e) {
			if (!UF(e)) return XF(e)
			var t = HF(e),
				r = []
			for (var n in e) (n == 'constructor' && (t || !BF.call(e, n))) || r.push(n)
			return r
		}
		BE.exports = kF
	})
	var zE = u((Dk, jE) => {
		var jF = ea(),
			zF = kE(),
			KF = Nt()
		function YF(e) {
			return KF(e) ? jF(e, !0) : zF(e)
		}
		jE.exports = YF
	})
	var YE = u((Fk, KE) => {
		var $F = $o(),
			QF = HE(),
			ZF = zE()
		function JF(e) {
			return $F(e, ZF, QF)
		}
		KE.exports = JF
	})
	var QE = u((Gk, $E) => {
		var e2 = da(),
			t2 = bt(),
			r2 = VE(),
			n2 = YE()
		function i2(e, t) {
			if (e == null) return {}
			var r = e2(n2(e), function (n) {
				return [n]
			})
			return (
				(t = t2(t)),
				r2(e, r, function (n, i) {
					return t(n, i[0])
				})
			)
		}
		$E.exports = i2
	})
	var JE = u((Vk, ZE) => {
		var o2 = bt(),
			a2 = RE(),
			s2 = QE()
		function u2(e, t) {
			return s2(e, a2(o2(t)))
		}
		ZE.exports = u2
	})
	var ty = u((Uk, ey) => {
		var c2 = Gn(),
			l2 = Vn(),
			f2 = Lr(),
			d2 = Oe(),
			p2 = Nt(),
			v2 = Pn(),
			g2 = Fn(),
			h2 = Dn(),
			E2 = '[object Map]',
			y2 = '[object Set]',
			m2 = Object.prototype,
			_2 = m2.hasOwnProperty
		function T2(e) {
			if (e == null) return !0
			if (p2(e) && (d2(e) || typeof e == 'string' || typeof e.splice == 'function' || v2(e) || h2(e) || f2(e)))
				return !e.length
			var t = l2(e)
			if (t == E2 || t == y2) return !e.size
			if (g2(e)) return !c2(e).length
			for (var r in e) if (_2.call(e, r)) return !1
			return !0
		}
		ey.exports = T2
	})
	var ny = u((Hk, ry) => {
		var b2 = ka(),
			I2 = La(),
			O2 = bt()
		function A2(e, t) {
			var r = {}
			return (
				(t = O2(t, 3)),
				I2(e, function (n, i, o) {
					b2(r, i, t(n, i, o))
				}),
				r
			)
		}
		ry.exports = A2
	})
	var oy = u((Xk, iy) => {
		function x2(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
			return e
		}
		iy.exports = x2
	})
	var sy = u((Wk, ay) => {
		var S2 = Bn()
		function w2(e) {
			return typeof e == 'function' ? e : S2
		}
		ay.exports = w2
	})
	var cy = u((Bk, uy) => {
		var R2 = oy(),
			C2 = Pa(),
			N2 = sy(),
			L2 = Oe()
		function P2(e, t) {
			var r = L2(e) ? R2 : C2
			return r(e, N2(t))
		}
		uy.exports = P2
	})
	var fy = u((kk, ly) => {
		var q2 = ze(),
			M2 = function () {
				return q2.Date.now()
			}
		ly.exports = M2
	})
	var vy = u((jk, py) => {
		var D2 = it(),
			ja = fy(),
			dy = kn(),
			F2 = 'Expected a function',
			G2 = Math.max,
			V2 = Math.min
		function U2(e, t, r) {
			var n,
				i,
				o,
				a,
				s,
				c,
				f = 0,
				v = !1,
				d = !1,
				g = !0
			if (typeof e != 'function') throw new TypeError(F2)
			;(t = dy(t) || 0),
				D2(r) &&
					((v = !!r.leading),
					(d = 'maxWait' in r),
					(o = d ? G2(dy(r.maxWait) || 0, t) : o),
					(g = 'trailing' in r ? !!r.trailing : g))
			function E(w) {
				var X = n,
					W = i
				return (n = i = void 0), (f = w), (a = e.apply(W, X)), a
			}
			function T(w) {
				return (f = w), (s = setTimeout(x, t)), v ? E(w) : a
			}
			function _(w) {
				var X = w - c,
					W = w - f,
					k = t - X
				return d ? V2(k, o - W) : k
			}
			function R(w) {
				var X = w - c,
					W = w - f
				return c === void 0 || X >= t || X < 0 || (d && W >= o)
			}
			function x() {
				var w = ja()
				if (R(w)) return S(w)
				s = setTimeout(x, _(w))
			}
			function S(w) {
				return (s = void 0), g && n ? E(w) : ((n = i = void 0), a)
			}
			function A() {
				s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0)
			}
			function P() {
				return s === void 0 ? a : S(ja())
			}
			function q() {
				var w = ja(),
					X = R(w)
				if (((n = arguments), (i = this), (c = w), X)) {
					if (s === void 0) return T(c)
					if (d) return clearTimeout(s), (s = setTimeout(x, t)), E(c)
				}
				return s === void 0 && (s = setTimeout(x, t)), a
			}
			return (q.cancel = A), (q.flush = P), q
		}
		py.exports = U2
	})
	var hy = u((zk, gy) => {
		var H2 = vy(),
			X2 = it(),
			W2 = 'Expected a function'
		function B2(e, t, r) {
			var n = !0,
				i = !0
			if (typeof e != 'function') throw new TypeError(W2)
			return (
				X2(r) && ((n = 'leading' in r ? !!r.leading : n), (i = 'trailing' in r ? !!r.trailing : i)),
				H2(e, t, { leading: n, maxWait: t, trailing: i })
			)
		}
		gy.exports = B2
	})
	var yy = {}
	Me(yy, {
		actionListPlaybackChanged: () => dr,
		animationFrameChanged: () => ui,
		clearRequested: () => gG,
		elementStateChanged: () => es,
		eventListenerAdded: () => si,
		eventStateChanged: () => Qa,
		instanceAdded: () => Za,
		instanceRemoved: () => Ja,
		instanceStarted: () => ci,
		mediaQueriesDefined: () => rs,
		parameterChanged: () => fr,
		playbackRequested: () => pG,
		previewRequested: () => dG,
		rawDataImported: () => za,
		sessionInitialized: () => Ka,
		sessionStarted: () => Ya,
		sessionStopped: () => $a,
		stopRequested: () => vG,
		testFrameRendered: () => hG,
		viewportWidthChanged: () => ts,
	})
	var Ey,
		k2,
		j2,
		z2,
		K2,
		Y2,
		$2,
		Q2,
		Z2,
		J2,
		eG,
		tG,
		rG,
		nG,
		iG,
		oG,
		aG,
		sG,
		uG,
		cG,
		lG,
		fG,
		za,
		Ka,
		Ya,
		$a,
		dG,
		pG,
		vG,
		gG,
		si,
		hG,
		Qa,
		ui,
		fr,
		Za,
		ci,
		Ja,
		es,
		dr,
		ts,
		rs,
		li = he(() => {
			'use strict'
			Fe()
			;(Ey = ue(Dt())),
				({
					IX2_RAW_DATA_IMPORTED: k2,
					IX2_SESSION_INITIALIZED: j2,
					IX2_SESSION_STARTED: z2,
					IX2_SESSION_STOPPED: K2,
					IX2_PREVIEW_REQUESTED: Y2,
					IX2_PLAYBACK_REQUESTED: $2,
					IX2_STOP_REQUESTED: Q2,
					IX2_CLEAR_REQUESTED: Z2,
					IX2_EVENT_LISTENER_ADDED: J2,
					IX2_TEST_FRAME_RENDERED: eG,
					IX2_EVENT_STATE_CHANGED: tG,
					IX2_ANIMATION_FRAME_CHANGED: rG,
					IX2_PARAMETER_CHANGED: nG,
					IX2_INSTANCE_ADDED: iG,
					IX2_INSTANCE_STARTED: oG,
					IX2_INSTANCE_REMOVED: aG,
					IX2_ELEMENT_STATE_CHANGED: sG,
					IX2_ACTION_LIST_PLAYBACK_CHANGED: uG,
					IX2_VIEWPORT_WIDTH_CHANGED: cG,
					IX2_MEDIA_QUERIES_DEFINED: lG,
				} = be),
				({ reifyState: fG } = Ey.IX2VanillaUtils),
				(za = (e) => ({ type: k2, payload: { ...fG(e) } })),
				(Ka = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
					type: j2,
					payload: { hasBoundaryNodes: e, reducedMotion: t },
				})),
				(Ya = () => ({ type: z2 })),
				($a = () => ({ type: K2 })),
				(dG = ({ rawData: e, defer: t }) => ({ type: Y2, payload: { defer: t, rawData: e } })),
				(pG = ({
					actionTypeId: e = De.GENERAL_START_ACTION,
					actionListId: t,
					actionItemId: r,
					eventId: n,
					allowEvents: i,
					immediate: o,
					testManual: a,
					verbose: s,
					rawData: c,
				}) => ({
					type: $2,
					payload: {
						actionTypeId: e,
						actionListId: t,
						actionItemId: r,
						testManual: a,
						eventId: n,
						allowEvents: i,
						immediate: o,
						verbose: s,
						rawData: c,
					},
				})),
				(vG = (e) => ({ type: Q2, payload: { actionListId: e } })),
				(gG = () => ({ type: Z2 })),
				(si = (e, t) => ({ type: J2, payload: { target: e, listenerParams: t } })),
				(hG = (e = 1) => ({ type: eG, payload: { step: e } })),
				(Qa = (e, t) => ({ type: tG, payload: { stateKey: e, newState: t } })),
				(ui = (e, t) => ({ type: rG, payload: { now: e, parameters: t } })),
				(fr = (e, t) => ({ type: nG, payload: { key: e, value: t } })),
				(Za = (e) => ({ type: iG, payload: { ...e } })),
				(ci = (e, t) => ({ type: oG, payload: { instanceId: e, time: t } })),
				(Ja = (e) => ({ type: aG, payload: { instanceId: e } })),
				(es = (e, t, r, n) => ({ type: sG, payload: { elementId: e, actionTypeId: t, current: r, actionItem: n } })),
				(dr = ({ actionListId: e, isPlaying: t }) => ({ type: uG, payload: { actionListId: e, isPlaying: t } })),
				(ts = ({ width: e, mediaQueries: t }) => ({ type: cG, payload: { width: e, mediaQueries: t } })),
				(rs = () => ({ type: lG }))
		})
	var Pe = {}
	Me(Pe, {
		elementContains: () => os,
		getChildElements: () => xG,
		getClosestElement: () => Yr,
		getProperty: () => TG,
		getQuerySelector: () => is,
		getRefType: () => as,
		getSiblingElements: () => SG,
		getStyle: () => _G,
		getValidDocument: () => IG,
		isSiblingNode: () => AG,
		matchSelector: () => bG,
		queryDocument: () => OG,
		setStyle: () => mG,
	})
	function mG(e, t, r) {
		e.style[t] = r
	}
	function _G(e, t) {
		return e.style[t]
	}
	function TG(e, t) {
		return e[t]
	}
	function bG(e) {
		return (t) => t[ns](e)
	}
	function is({ id: e, selector: t }) {
		if (e) {
			let r = e
			if (e.indexOf(my) !== -1) {
				let n = e.split(my),
					i = n[0]
				if (((r = n[1]), i !== document.documentElement.getAttribute(Ty))) return null
			}
			return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
		}
		return t
	}
	function IG(e) {
		return e == null || e === document.documentElement.getAttribute(Ty) ? document : null
	}
	function OG(e, t) {
		return Array.prototype.slice.call(document.querySelectorAll(t ? e + ' ' + t : e))
	}
	function os(e, t) {
		return e.contains(t)
	}
	function AG(e, t) {
		return e !== t && e.parentNode === t.parentNode
	}
	function xG(e) {
		let t = []
		for (let r = 0, { length: n } = e || []; r < n; r++) {
			let { children: i } = e[r],
				{ length: o } = i
			if (o) for (let a = 0; a < o; a++) t.push(i[a])
		}
		return t
	}
	function SG(e = []) {
		let t = [],
			r = []
		for (let n = 0, { length: i } = e; n < i; n++) {
			let { parentNode: o } = e[n]
			if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue
			r.push(o)
			let a = o.firstElementChild
			for (; a != null; ) e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling)
		}
		return t
	}
	function as(e) {
		return e != null && typeof e == 'object' ? (e instanceof Element ? EG : yG) : null
	}
	var _y,
		ns,
		my,
		EG,
		yG,
		Ty,
		Yr,
		by = he(() => {
			'use strict'
			_y = ue(Dt())
			Fe()
			;({ ELEMENT_MATCHES: ns } = _y.IX2BrowserSupport),
				({ IX2_ID_DELIMITER: my, HTML_ELEMENT: EG, PLAIN_OBJECT: yG, WF_PAGE: Ty } = we)
			Yr = Element.prototype.closest
				? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
				: (e, t) => {
						if (!document.documentElement.contains(e)) return null
						let r = e
						do {
							if (r[ns] && r[ns](t)) return r
							r = r.parentNode
						} while (r != null)
						return null
				  }
		})
	var ss = u(($k, Oy) => {
		var wG = it(),
			Iy = Object.create,
			RG = (function () {
				function e() {}
				return function (t) {
					if (!wG(t)) return {}
					if (Iy) return Iy(t)
					e.prototype = t
					var r = new e()
					return (e.prototype = void 0), r
				}
			})()
		Oy.exports = RG
	})
	var fi = u((Qk, Ay) => {
		function CG() {}
		Ay.exports = CG
	})
	var pi = u((Zk, xy) => {
		var NG = ss(),
			LG = fi()
		function di(e, t) {
			;(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__chain__ = !!t),
				(this.__index__ = 0),
				(this.__values__ = void 0)
		}
		di.prototype = NG(LG.prototype)
		di.prototype.constructor = di
		xy.exports = di
	})
	var Cy = u((Jk, Ry) => {
		var Sy = Wt(),
			PG = Lr(),
			qG = Oe(),
			wy = Sy ? Sy.isConcatSpreadable : void 0
		function MG(e) {
			return qG(e) || PG(e) || !!(wy && e && e[wy])
		}
		Ry.exports = MG
	})
	var Py = u((ej, Ly) => {
		var DG = Ln(),
			FG = Cy()
		function Ny(e, t, r, n, i) {
			var o = -1,
				a = e.length
			for (r || (r = FG), i || (i = []); ++o < a; ) {
				var s = e[o]
				t > 0 && r(s) ? (t > 1 ? Ny(s, t - 1, r, n, i) : DG(i, s)) : n || (i[i.length] = s)
			}
			return i
		}
		Ly.exports = Ny
	})
	var My = u((tj, qy) => {
		var GG = Py()
		function VG(e) {
			var t = e == null ? 0 : e.length
			return t ? GG(e, 1) : []
		}
		qy.exports = VG
	})
	var Fy = u((rj, Dy) => {
		function UG(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t)
				case 1:
					return e.call(t, r[0])
				case 2:
					return e.call(t, r[0], r[1])
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		Dy.exports = UG
	})
	var Uy = u((nj, Vy) => {
		var HG = Fy(),
			Gy = Math.max
		function XG(e, t, r) {
			return (
				(t = Gy(t === void 0 ? e.length - 1 : t, 0)),
				function () {
					for (var n = arguments, i = -1, o = Gy(n.length - t, 0), a = Array(o); ++i < o; ) a[i] = n[t + i]
					i = -1
					for (var s = Array(t + 1); ++i < t; ) s[i] = n[i]
					return (s[t] = r(a)), HG(e, this, s)
				}
			)
		}
		Vy.exports = XG
	})
	var Xy = u((ij, Hy) => {
		function WG(e) {
			return function () {
				return e
			}
		}
		Hy.exports = WG
	})
	var ky = u((oj, By) => {
		var BG = Xy(),
			Wy = Ba(),
			kG = Bn(),
			jG = Wy
				? function (e, t) {
						return Wy(e, 'toString', { configurable: !0, enumerable: !1, value: BG(t), writable: !0 })
				  }
				: kG
		By.exports = jG
	})
	var zy = u((aj, jy) => {
		var zG = 800,
			KG = 16,
			YG = Date.now
		function $G(e) {
			var t = 0,
				r = 0
			return function () {
				var n = YG(),
					i = KG - (n - r)
				if (((r = n), i > 0)) {
					if (++t >= zG) return arguments[0]
				} else t = 0
				return e.apply(void 0, arguments)
			}
		}
		jy.exports = $G
	})
	var Yy = u((sj, Ky) => {
		var QG = ky(),
			ZG = zy(),
			JG = ZG(QG)
		Ky.exports = JG
	})
	var Qy = u((uj, $y) => {
		var eV = My(),
			tV = Uy(),
			rV = Yy()
		function nV(e) {
			return rV(tV(e, void 0, eV), e + '')
		}
		$y.exports = nV
	})
	var em = u((cj, Jy) => {
		var Zy = ta(),
			iV = Zy && new Zy()
		Jy.exports = iV
	})
	var rm = u((lj, tm) => {
		function oV() {}
		tm.exports = oV
	})
	var us = u((fj, im) => {
		var nm = em(),
			aV = rm(),
			sV = nm
				? function (e) {
						return nm.get(e)
				  }
				: aV
		im.exports = sV
	})
	var am = u((dj, om) => {
		var uV = {}
		om.exports = uV
	})
	var cs = u((pj, um) => {
		var sm = am(),
			cV = Object.prototype,
			lV = cV.hasOwnProperty
		function fV(e) {
			for (var t = e.name + '', r = sm[t], n = lV.call(sm, t) ? r.length : 0; n--; ) {
				var i = r[n],
					o = i.func
				if (o == null || o == e) return i.name
			}
			return t
		}
		um.exports = fV
	})
	var gi = u((vj, cm) => {
		var dV = ss(),
			pV = fi(),
			vV = 4294967295
		function vi(e) {
			;(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__dir__ = 1),
				(this.__filtered__ = !1),
				(this.__iteratees__ = []),
				(this.__takeCount__ = vV),
				(this.__views__ = [])
		}
		vi.prototype = dV(pV.prototype)
		vi.prototype.constructor = vi
		cm.exports = vi
	})
	var fm = u((gj, lm) => {
		function gV(e, t) {
			var r = -1,
				n = e.length
			for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
			return t
		}
		lm.exports = gV
	})
	var pm = u((hj, dm) => {
		var hV = gi(),
			EV = pi(),
			yV = fm()
		function mV(e) {
			if (e instanceof hV) return e.clone()
			var t = new EV(e.__wrapped__, e.__chain__)
			return (t.__actions__ = yV(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t
		}
		dm.exports = mV
	})
	var hm = u((Ej, gm) => {
		var _V = gi(),
			vm = pi(),
			TV = fi(),
			bV = Oe(),
			IV = ft(),
			OV = pm(),
			AV = Object.prototype,
			xV = AV.hasOwnProperty
		function hi(e) {
			if (IV(e) && !bV(e) && !(e instanceof _V)) {
				if (e instanceof vm) return e
				if (xV.call(e, '__wrapped__')) return OV(e)
			}
			return new vm(e)
		}
		hi.prototype = TV.prototype
		hi.prototype.constructor = hi
		gm.exports = hi
	})
	var ym = u((yj, Em) => {
		var SV = gi(),
			wV = us(),
			RV = cs(),
			CV = hm()
		function NV(e) {
			var t = RV(e),
				r = CV[t]
			if (typeof r != 'function' || !(t in SV.prototype)) return !1
			if (e === r) return !0
			var n = wV(r)
			return !!n && e === n[0]
		}
		Em.exports = NV
	})
	var bm = u((mj, Tm) => {
		var mm = pi(),
			LV = Qy(),
			PV = us(),
			ls = cs(),
			qV = Oe(),
			_m = ym(),
			MV = 'Expected a function',
			DV = 8,
			FV = 32,
			GV = 128,
			VV = 256
		function UV(e) {
			return LV(function (t) {
				var r = t.length,
					n = r,
					i = mm.prototype.thru
				for (e && t.reverse(); n--; ) {
					var o = t[n]
					if (typeof o != 'function') throw new TypeError(MV)
					if (i && !a && ls(o) == 'wrapper') var a = new mm([], !0)
				}
				for (n = a ? n : r; ++n < r; ) {
					o = t[n]
					var s = ls(o),
						c = s == 'wrapper' ? PV(o) : void 0
					c && _m(c[0]) && c[1] == (GV | DV | FV | VV) && !c[4].length && c[9] == 1
						? (a = a[ls(c[0])].apply(a, c[3]))
						: (a = o.length == 1 && _m(o) ? a[s]() : a.thru(o))
				}
				return function () {
					var f = arguments,
						v = f[0]
					if (a && f.length == 1 && qV(v)) return a.plant(v).value()
					for (var d = 0, g = r ? t[d].apply(this, f) : v; ++d < r; ) g = t[d].call(this, g)
					return g
				}
			})
		}
		Tm.exports = UV
	})
	var Om = u((_j, Im) => {
		var HV = bm(),
			XV = HV()
		Im.exports = XV
	})
	var xm = u((Tj, Am) => {
		function WV(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		Am.exports = WV
	})
	var wm = u((bj, Sm) => {
		var BV = xm(),
			fs = kn()
		function kV(e, t, r) {
			return (
				r === void 0 && ((r = t), (t = void 0)),
				r !== void 0 && ((r = fs(r)), (r = r === r ? r : 0)),
				t !== void 0 && ((t = fs(t)), (t = t === t ? t : 0)),
				BV(fs(e), t, r)
			)
		}
		Sm.exports = kV
	})
	var Fm,
		Gm,
		Vm,
		Um,
		jV,
		zV,
		KV,
		YV,
		$V,
		QV,
		ZV,
		JV,
		eU,
		tU,
		rU,
		nU,
		iU,
		oU,
		aU,
		Hm,
		Xm,
		sU,
		uU,
		cU,
		Wm,
		lU,
		fU,
		Bm,
		dU,
		ds,
		km,
		Rm,
		Cm,
		jm,
		Qr,
		pU,
		st,
		zm,
		vU,
		Ve,
		$e,
		Zr,
		Km,
		ps,
		Nm,
		vs,
		gU,
		$r,
		hU,
		EU,
		yU,
		Ym,
		Lm,
		mU,
		Pm,
		_U,
		TU,
		bU,
		qm,
		Ei,
		yi,
		Mm,
		Dm,
		$m,
		Qm = he(() => {
			'use strict'
			;(Fm = ue(Om())), (Gm = ue(Wn())), (Vm = ue(wm()))
			Fe()
			gs()
			li()
			;(Um = ue(Dt())),
				({
					MOUSE_CLICK: jV,
					MOUSE_SECOND_CLICK: zV,
					MOUSE_DOWN: KV,
					MOUSE_UP: YV,
					MOUSE_OVER: $V,
					MOUSE_OUT: QV,
					DROPDOWN_CLOSE: ZV,
					DROPDOWN_OPEN: JV,
					SLIDER_ACTIVE: eU,
					SLIDER_INACTIVE: tU,
					TAB_ACTIVE: rU,
					TAB_INACTIVE: nU,
					NAVBAR_CLOSE: iU,
					NAVBAR_OPEN: oU,
					MOUSE_MOVE: aU,
					PAGE_SCROLL_DOWN: Hm,
					SCROLL_INTO_VIEW: Xm,
					SCROLL_OUT_OF_VIEW: sU,
					PAGE_SCROLL_UP: uU,
					SCROLLING_IN_VIEW: cU,
					PAGE_FINISH: Wm,
					ECOMMERCE_CART_CLOSE: lU,
					ECOMMERCE_CART_OPEN: fU,
					PAGE_START: Bm,
					PAGE_SCROLL: dU,
				} = Ke),
				(ds = 'COMPONENT_ACTIVE'),
				(km = 'COMPONENT_INACTIVE'),
				({ COLON_DELIMITER: Rm } = we),
				({ getNamespacedParameterId: Cm } = Um.IX2VanillaUtils),
				(jm = (e) => (t) => typeof t == 'object' && e(t) ? !0 : t),
				(Qr = jm(({ element: e, nativeEvent: t }) => e === t.target)),
				(pU = jm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
				(st = (0, Fm.default)([Qr, pU])),
				(zm = (e, t) => {
					if (t) {
						let { ixData: r } = e.getState(),
							{ events: n } = r,
							i = n[t]
						if (i && !gU[i.eventTypeId]) return i
					}
					return null
				}),
				(vU = ({ store: e, event: t }) => {
					let { action: r } = t,
						{ autoStopEventId: n } = r.config
					return !!zm(e, n)
				}),
				(Ve = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
					let { action: o, id: a } = t,
						{ actionListId: s, autoStopEventId: c } = o.config,
						f = zm(e, c)
					return (
						f &&
							pr({
								store: e,
								eventId: c,
								eventTarget: r,
								eventStateKey: c + Rm + n.split(Rm)[1],
								actionListId: (0, Gm.default)(f, 'action.config.actionListId'),
							}),
						pr({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: s }),
						Jr({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: s }),
						i
					)
				}),
				($e = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
				(Zr = { handler: $e(st, Ve) }),
				(Km = { ...Zr, types: [ds, km].join(' ') }),
				(ps = [
					{ target: window, types: 'resize orientationchange', throttle: !0 },
					{ target: document, types: 'scroll wheel readystatechange IX2_PAGE_UPDATE', throttle: !0 },
				]),
				(Nm = 'mouseover mouseout'),
				(vs = { types: ps }),
				(gU = { PAGE_START: Bm, PAGE_FINISH: Wm }),
				($r = (() => {
					let e = window.pageXOffset !== void 0,
						r = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body
					return () => ({
						scrollLeft: e ? window.pageXOffset : r.scrollLeft,
						scrollTop: e ? window.pageYOffset : r.scrollTop,
						stiffScrollTop: (0, Vm.default)(
							e ? window.pageYOffset : r.scrollTop,
							0,
							r.scrollHeight - window.innerHeight
						),
						scrollWidth: r.scrollWidth,
						scrollHeight: r.scrollHeight,
						clientWidth: r.clientWidth,
						clientHeight: r.clientHeight,
						innerWidth: window.innerWidth,
						innerHeight: window.innerHeight,
					})
				})()),
				(hU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)),
				(EU = ({ element: e, nativeEvent: t }) => {
					let { type: r, target: n, relatedTarget: i } = t,
						o = e.contains(n)
					if (r === 'mouseover' && o) return !0
					let a = e.contains(i)
					return !!(r === 'mouseout' && o && a)
				}),
				(yU = (e) => {
					let {
							element: t,
							event: { config: r },
						} = e,
						{ clientWidth: n, clientHeight: i } = $r(),
						o = r.scrollOffsetValue,
						c = r.scrollOffsetUnit === 'PX' ? o : (i * (o || 0)) / 100
					return hU(t.getBoundingClientRect(), { left: 0, top: c, right: n, bottom: i - c })
				}),
				(Ym = (e) => (t, r) => {
					let { type: n } = t.nativeEvent,
						i = [ds, km].indexOf(n) !== -1 ? n === ds : r.isActive,
						o = { ...r, isActive: i }
					return ((!r || o.isActive !== r.isActive) && e(t, o)) || o
				}),
				(Lm = (e) => (t, r) => {
					let n = { elementHovered: EU(t) }
					return ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n)) || n
				}),
				(mU = (e) => (t, r) => {
					let n = { ...r, elementVisible: yU(t) }
					return ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n)) || n
				}),
				(Pm =
					(e) =>
					(t, r = {}) => {
						let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = $r(),
							{
								event: { config: a, eventTypeId: s },
							} = t,
							{ scrollOffsetValue: c, scrollOffsetUnit: f } = a,
							v = f === 'PX',
							d = i - o,
							g = Number((n / d).toFixed(2))
						if (r && r.percentTop === g) return r
						let E = (v ? c : (o * (c || 0)) / 100) / d,
							T,
							_,
							R = 0
						r && ((T = g > r.percentTop), (_ = r.scrollingDown !== T), (R = _ ? g : r.anchorTop))
						let x = s === Hm ? g >= R + E : g <= R - E,
							S = { ...r, percentTop: g, inBounds: x, anchorTop: R, scrollingDown: T }
						return (r && x && (_ || S.inBounds !== r.inBounds) && e(t, S)) || S
					}),
				(_U = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom),
				(TU = (e) => (t, r) => {
					let n = { finished: document.readyState === 'complete' }
					return n.finished && !(r && r.finshed) && e(t), n
				}),
				(bU = (e) => (t, r) => {
					let n = { started: !0 }
					return r || e(t), n
				}),
				(qm =
					(e) =>
					(t, r = { clickCount: 0 }) => {
						let n = { clickCount: (r.clickCount % 2) + 1 }
						return (n.clickCount !== r.clickCount && e(t, n)) || n
					}),
				(Ei = (e = !0) => ({
					...Km,
					handler: $e(
						e ? st : Qr,
						Ym((t, r) => (r.isActive ? Zr.handler(t, r) : r))
					),
				})),
				(yi = (e = !0) => ({
					...Km,
					handler: $e(
						e ? st : Qr,
						Ym((t, r) => (r.isActive ? r : Zr.handler(t, r)))
					),
				})),
				(Mm = {
					...vs,
					handler: mU((e, t) => {
						let { elementVisible: r } = t,
							{ event: n, store: i } = e,
							{ ixData: o } = i.getState(),
							{ events: a } = o
						return !a[n.action.config.autoStopEventId] && t.triggered
							? t
							: (n.eventTypeId === Xm) === r
							? (Ve(e), { ...t, triggered: !0 })
							: t
					}),
				}),
				(Dm = 0.05),
				($m = {
					[eU]: Ei(),
					[tU]: yi(),
					[JV]: Ei(),
					[ZV]: yi(),
					[oU]: Ei(!1),
					[iU]: yi(!1),
					[rU]: Ei(),
					[nU]: yi(),
					[fU]: { types: 'ecommerce-cart-open', handler: $e(st, Ve) },
					[lU]: { types: 'ecommerce-cart-close', handler: $e(st, Ve) },
					[jV]: {
						types: 'click',
						handler: $e(
							st,
							qm((e, { clickCount: t }) => {
								vU(e) ? t === 1 && Ve(e) : Ve(e)
							})
						),
					},
					[zV]: {
						types: 'click',
						handler: $e(
							st,
							qm((e, { clickCount: t }) => {
								t === 2 && Ve(e)
							})
						),
					},
					[KV]: { ...Zr, types: 'mousedown' },
					[YV]: { ...Zr, types: 'mouseup' },
					[$V]: {
						types: Nm,
						handler: $e(
							st,
							Lm((e, t) => {
								t.elementHovered && Ve(e)
							})
						),
					},
					[QV]: {
						types: Nm,
						handler: $e(
							st,
							Lm((e, t) => {
								t.elementHovered || Ve(e)
							})
						),
					},
					[aU]: {
						types: 'mousemove mouseout scroll',
						handler: (
							{ store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i },
							o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
						) => {
							let { basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: f, restingState: v = 0 } = r,
								{ clientX: d = o.clientX, clientY: g = o.clientY, pageX: E = o.pageX, pageY: T = o.pageY } = n,
								_ = s === 'X_AXIS',
								R = n.type === 'mouseout',
								x = v / 100,
								S = c,
								A = !1
							switch (a) {
								case nt.VIEWPORT: {
									x = _
										? Math.min(d, window.innerWidth) / window.innerWidth
										: Math.min(g, window.innerHeight) / window.innerHeight
									break
								}
								case nt.PAGE: {
									let { scrollLeft: P, scrollTop: q, scrollWidth: w, scrollHeight: X } = $r()
									x = _ ? Math.min(P + E, w) / w : Math.min(q + T, X) / X
									break
								}
								case nt.ELEMENT:
								default: {
									S = Cm(i, c)
									let P = n.type.indexOf('mouse') === 0
									if (P && st({ element: t, nativeEvent: n }) !== !0) break
									let q = t.getBoundingClientRect(),
										{ left: w, top: X, width: W, height: k } = q
									if (!P && !_U({ left: d, top: g }, q)) break
									;(A = !0), (x = _ ? (d - w) / W : (g - X) / k)
									break
								}
							}
							return (
								R && (x > 1 - Dm || x < Dm) && (x = Math.round(x)),
								(a !== nt.ELEMENT || A || A !== o.elementHovered) && ((x = f ? 1 - x : x), e.dispatch(fr(S, x))),
								{ elementHovered: A, clientX: d, clientY: g, pageX: E, pageY: T }
							)
						},
					},
					[dU]: {
						types: ps,
						handler: ({ store: e, eventConfig: t }) => {
							let { continuousParameterGroupId: r, reverse: n } = t,
								{ scrollTop: i, scrollHeight: o, clientHeight: a } = $r(),
								s = i / (o - a)
							;(s = n ? 1 - s : s), e.dispatch(fr(r, s))
						},
					},
					[cU]: {
						types: ps,
						handler: ({ element: e, store: t, eventConfig: r, eventStateKey: n }, i = { scrollPercent: 0 }) => {
							let { scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: f } = $r(),
								{
									basedOn: v,
									selectedAxis: d,
									continuousParameterGroupId: g,
									startsEntering: E,
									startsExiting: T,
									addEndOffset: _,
									addStartOffset: R,
									addOffsetValue: x = 0,
									endOffsetValue: S = 0,
								} = r,
								A = d === 'X_AXIS'
							if (v === nt.VIEWPORT) {
								let P = A ? o / s : a / c
								return P !== i.scrollPercent && t.dispatch(fr(g, P)), { scrollPercent: P }
							} else {
								let P = Cm(n, g),
									q = e.getBoundingClientRect(),
									w = (R ? x : 0) / 100,
									X = (_ ? S : 0) / 100
								;(w = E ? w : 1 - w), (X = T ? X : 1 - X)
								let W = q.top + Math.min(q.height * w, f),
									Y = q.top + q.height * X - W,
									te = Math.min(f + Y, c),
									b = Math.min(Math.max(0, f - W), te) / te
								return b !== i.scrollPercent && t.dispatch(fr(P, b)), { scrollPercent: b }
							}
						},
					},
					[Xm]: Mm,
					[sU]: Mm,
					[Hm]: {
						...vs,
						handler: Pm((e, t) => {
							t.scrollingDown && Ve(e)
						}),
					},
					[uU]: {
						...vs,
						handler: Pm((e, t) => {
							t.scrollingDown || Ve(e)
						}),
					},
					[Wm]: { types: 'readystatechange IX2_PAGE_UPDATE', handler: $e(Qr, TU(Ve)) },
					[Bm]: { types: 'readystatechange IX2_PAGE_UPDATE', handler: $e(Qr, bU(Ve)) },
				})
		})
	var v_ = {}
	Me(v_, {
		observeRequests: () => XU,
		startActionGroup: () => Jr,
		startEngine: () => Oi,
		stopActionGroup: () => pr,
		stopAllActionGroups: () => f_,
		stopEngine: () => Ai,
	})
	function XU(e) {
		Ft({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: kU }),
			Ft({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: jU }),
			Ft({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: zU }),
			Ft({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: KU })
	}
	function WU(e) {
		Ft({
			store: e,
			select: ({ ixSession: t }) => t.mediaQueryKey,
			onChange: () => {
				Ai(e), s_({ store: e, elementApi: Pe }), Oi({ store: e, allowEvents: !0 }), u_()
			},
		})
	}
	function BU(e, t) {
		let r = Ft({
			store: e,
			select: ({ ixSession: n }) => n.tick,
			onChange: (n) => {
				t(n), r()
			},
		})
	}
	function kU({ rawData: e, defer: t }, r) {
		let n = () => {
			Oi({ store: r, rawData: e, allowEvents: !0 }), u_()
		}
		t ? setTimeout(n, 0) : n()
	}
	function u_() {
		document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'))
	}
	function jU(e, t) {
		let {
				actionTypeId: r,
				actionListId: n,
				actionItemId: i,
				eventId: o,
				allowEvents: a,
				immediate: s,
				testManual: c,
				verbose: f = !0,
			} = e,
			{ rawData: v } = e
		if (n && i && v && s) {
			let d = v.actionLists[n]
			d && (v = NU({ actionList: d, actionItemId: i, rawData: v }))
		}
		if ((Oi({ store: t, rawData: v, allowEvents: a, testManual: c }), (n && r === De.GENERAL_START_ACTION) || hs(r))) {
			pr({ store: t, actionListId: n }), l_({ store: t, actionListId: n, eventId: o })
			let d = Jr({ store: t, eventId: o, actionListId: n, immediate: s, verbose: f })
			f && d && t.dispatch(dr({ actionListId: n, isPlaying: !s }))
		}
	}
	function zU({ actionListId: e }, t) {
		e ? pr({ store: t, actionListId: e }) : f_({ store: t }), Ai(t)
	}
	function KU(e, t) {
		Ai(t), s_({ store: t, elementApi: Pe })
	}
	function Oi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
		let { ixSession: i } = e.getState()
		t && e.dispatch(za(t)),
			i.active ||
				(e.dispatch(
					Ka({
						hasBoundaryNodes: !!document.querySelector(_i),
						reducedMotion:
							document.body.hasAttribute('data-wf-ix-vacation') &&
							window.matchMedia('(prefers-reduced-motion)').matches,
					})
				),
				r && (eH(e), YU(), e.getState().ixSession.hasDefinedMediaQueries && WU(e)),
				e.dispatch(Ya()),
				$U(e, n))
	}
	function YU() {
		let { documentElement: e } = document
		e.className.indexOf(Zm) === -1 && (e.className += ` ${Zm}`)
	}
	function $U(e, t) {
		let r = (n) => {
			let { ixSession: i, ixParameters: o } = e.getState()
			i.active && (e.dispatch(ui(n, o)), t ? BU(e, r) : requestAnimationFrame(r))
		}
		r(window.performance.now())
	}
	function Ai(e) {
		let { ixSession: t } = e.getState()
		if (t.active) {
			let { eventListeners: r } = t
			r.forEach(QU), MU(), e.dispatch($a())
		}
	}
	function QU({ target: e, listenerParams: t }) {
		e.removeEventListener.apply(e, t)
	}
	function ZU({
		store: e,
		eventStateKey: t,
		eventTarget: r,
		eventId: n,
		eventConfig: i,
		actionListId: o,
		parameterGroup: a,
		smoothing: s,
		restingValue: c,
	}) {
		let { ixData: f, ixSession: v } = e.getState(),
			{ events: d } = f,
			g = d[n],
			{ eventTypeId: E } = g,
			T = {},
			_ = {},
			R = [],
			{ continuousActionGroups: x } = a,
			{ id: S } = a
		LU(E, i) && (S = PU(t, S))
		let A = v.hasBoundaryNodes && r ? Yr(r, _i) : null
		x.forEach((P) => {
			let { keyframe: q, actionItems: w } = P
			w.forEach((X) => {
				let { actionTypeId: W } = X,
					{ target: k } = X.config
				if (!k) return
				let Y = k.boundaryMode ? A : null,
					te = DU(k) + Es + W
				if (((_[te] = JU(_[te], q, X)), !T[te])) {
					T[te] = !0
					let { config: L } = X
					Ti({ config: L, event: g, eventTarget: r, elementRoot: Y, elementApi: Pe }).forEach((b) => {
						R.push({ element: b, key: te })
					})
				}
			})
		}),
			R.forEach(({ element: P, key: q }) => {
				let w = _[q],
					X = (0, gt.default)(w, '[0].actionItems[0]', {}),
					{ actionTypeId: W } = X,
					k = Ii(W) ? ms(W)(P, X) : null,
					Y = ys({ element: P, actionItem: X, elementApi: Pe }, k)
				_s({
					store: e,
					element: P,
					eventId: n,
					actionListId: o,
					actionItem: X,
					destination: Y,
					continuous: !0,
					parameterId: S,
					actionGroups: w,
					smoothing: s,
					restingValue: c,
					pluginInstance: k,
				})
			})
	}
	function JU(e = [], t, r) {
		let n = [...e],
			i
		return (
			n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
			i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
			n[i].actionItems.push(r),
			n
		)
	}
	function eH(e) {
		let { ixData: t } = e.getState(),
			{ eventTypeMap: r } = t
		c_(e),
			(0, vr.default)(r, (i, o) => {
				let a = $m[o]
				if (!a) {
					console.warn(`IX2 event type not configured: ${o}`)
					return
				}
				aH({ logic: a, store: e, events: i })
			})
		let { ixSession: n } = e.getState()
		n.eventListeners.length && rH(e)
	}
	function rH(e) {
		let t = () => {
			c_(e)
		}
		tH.forEach((r) => {
			window.addEventListener(r, t), e.dispatch(si(window, [r, t]))
		}),
			t()
	}
	function c_(e) {
		let { ixSession: t, ixData: r } = e.getState(),
			n = window.innerWidth
		if (n !== t.viewportWidth) {
			let { mediaQueries: i } = r
			e.dispatch(ts({ width: n, mediaQueries: i }))
		}
	}
	function aH({ logic: e, store: t, events: r }) {
		sH(r)
		let { types: n, handler: i } = e,
			{ ixData: o } = t.getState(),
			{ actionLists: a } = o,
			s = nH(r, oH)
		if (!(0, t_.default)(s)) return
		;(0, vr.default)(s, (d, g) => {
			let E = r[g],
				{ action: T, id: _, mediaQueries: R = o.mediaQueryKeys } = E,
				{ actionListId: x } = T.config
			FU(R, o.mediaQueryKeys) || t.dispatch(rs()),
				T.actionTypeId === De.GENERAL_CONTINUOUS_ACTION &&
					(Array.isArray(E.config) ? E.config : [E.config]).forEach((A) => {
						let { continuousParameterGroupId: P } = A,
							q = (0, gt.default)(a, `${x}.continuousParameterGroups`, []),
							w = (0, e_.default)(q, ({ id: k }) => k === P),
							X = (A.smoothing || 0) / 100,
							W = (A.restingState || 0) / 100
						w &&
							d.forEach((k, Y) => {
								let te = _ + Es + Y
								ZU({
									store: t,
									eventStateKey: te,
									eventTarget: k,
									eventId: _,
									eventConfig: A,
									actionListId: x,
									parameterGroup: w,
									smoothing: X,
									restingValue: W,
								})
							})
					}),
				(T.actionTypeId === De.GENERAL_START_ACTION || hs(T.actionTypeId)) &&
					l_({ store: t, actionListId: x, eventId: _ })
		})
		let c = (d) => {
				let { ixSession: g } = t.getState()
				iH(s, (E, T, _) => {
					let R = r[T],
						x = g.eventState[_],
						{ action: S, mediaQueries: A = o.mediaQueryKeys } = R
					if (!bi(A, g.mediaQueryKey)) return
					let P = (q = {}) => {
						let w = i({ store: t, element: E, event: R, eventConfig: q, nativeEvent: d, eventStateKey: _ }, x)
						GU(w, x) || t.dispatch(Qa(_, w))
					}
					S.actionTypeId === De.GENERAL_CONTINUOUS_ACTION
						? (Array.isArray(R.config) ? R.config : [R.config]).forEach(P)
						: P()
				})
			},
			f = (0, o_.default)(c, HU),
			v = ({ target: d = document, types: g, throttle: E }) => {
				g.split(' ')
					.filter(Boolean)
					.forEach((T) => {
						let _ = E ? f : c
						d.addEventListener(T, _), t.dispatch(si(d, [T, _]))
					})
			}
		Array.isArray(n) ? n.forEach(v) : typeof n == 'string' && v(e)
	}
	function sH(e) {
		if (!UU) return
		let t = {},
			r = ''
		for (let n in e) {
			let { eventTypeId: i, target: o } = e[n],
				a = is(o)
			t[a] ||
				((i === Ke.MOUSE_CLICK || i === Ke.MOUSE_SECOND_CLICK) &&
					((t[a] = !0), (r += a + '{cursor: pointer;touch-action: manipulation;}')))
		}
		if (r) {
			let n = document.createElement('style')
			;(n.textContent = r), document.body.appendChild(n)
		}
	}
	function l_({ store: e, actionListId: t, eventId: r }) {
		let { ixData: n, ixSession: i } = e.getState(),
			{ actionLists: o, events: a } = n,
			s = a[r],
			c = o[t]
		if (c && c.useFirstGroupAsInitialState) {
			let f = (0, gt.default)(c, 'actionItemGroups[0].actionItems', []),
				v = (0, gt.default)(s, 'mediaQueries', n.mediaQueryKeys)
			if (!bi(v, i.mediaQueryKey)) return
			f.forEach((d) => {
				let { config: g, actionTypeId: E } = d,
					T =
						g?.target?.useEventTarget === !0 && g?.target?.objectId == null
							? { target: s.target, targets: s.targets }
							: g,
					_ = Ti({ config: T, event: s, elementApi: Pe }),
					R = Ii(E)
				_.forEach((x) => {
					let S = R ? ms(E)(x, d) : null
					_s({
						destination: ys({ element: x, actionItem: d, elementApi: Pe }, S),
						immediate: !0,
						store: e,
						element: x,
						eventId: r,
						actionItem: d,
						actionListId: t,
						pluginInstance: S,
					})
				})
			})
		}
	}
	function f_({ store: e }) {
		let { ixInstances: t } = e.getState()
		;(0, vr.default)(t, (r) => {
			if (!r.continuous) {
				let { actionListId: n, verbose: i } = r
				Ts(r, e), i && e.dispatch(dr({ actionListId: n, isPlaying: !1 }))
			}
		})
	}
	function pr({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i }) {
		let { ixInstances: o, ixSession: a } = e.getState(),
			s = a.hasBoundaryNodes && r ? Yr(r, _i) : null
		;(0, vr.default)(o, (c) => {
			let f = (0, gt.default)(c, 'actionItem.config.target.boundaryMode'),
				v = n ? c.eventStateKey === n : !0
			if (c.actionListId === i && c.eventId === t && v) {
				if (s && f && !os(s, c.element)) return
				Ts(c, e), c.verbose && e.dispatch(dr({ actionListId: i, isPlaying: !1 }))
			}
		})
	}
	function Jr({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i,
		groupIndex: o = 0,
		immediate: a,
		verbose: s,
	}) {
		let { ixData: c, ixSession: f } = e.getState(),
			{ events: v } = c,
			d = v[t] || {},
			{ mediaQueries: g = c.mediaQueryKeys } = d,
			E = (0, gt.default)(c, `actionLists.${i}`, {}),
			{ actionItemGroups: T, useFirstGroupAsInitialState: _ } = E
		if (!T || !T.length) return !1
		o >= T.length && (0, gt.default)(d, 'config.loop') && (o = 0), o === 0 && _ && o++
		let x = (o === 0 || (o === 1 && _)) && hs(d.action?.actionTypeId) ? d.config.delay : void 0,
			S = (0, gt.default)(T, [o, 'actionItems'], [])
		if (!S.length || !bi(g, f.mediaQueryKey)) return !1
		let A = f.hasBoundaryNodes && r ? Yr(r, _i) : null,
			P = wU(S),
			q = !1
		return (
			S.forEach((w, X) => {
				let { config: W, actionTypeId: k } = w,
					Y = Ii(k),
					{ target: te } = W
				if (!te) return
				let L = te.boundaryMode ? A : null
				Ti({ config: W, event: d, eventTarget: r, elementRoot: L, elementApi: Pe }).forEach((C, B) => {
					let V = Y ? ms(k)(C, w) : null,
						J = Y ? VU(k)(C, w) : null
					q = !0
					let ee = P === X && B === 0,
						N = RU({ element: C, actionItem: w }),
						H = ys({ element: C, actionItem: w, elementApi: Pe }, V)
					_s({
						store: e,
						element: C,
						actionItem: w,
						eventId: t,
						eventTarget: r,
						eventStateKey: n,
						actionListId: i,
						groupIndex: o,
						isCarrier: ee,
						computedStyle: N,
						destination: H,
						immediate: a,
						verbose: s,
						pluginInstance: V,
						pluginDuration: J,
						instanceDelay: x,
					})
				})
			}),
			q
		)
	}
	function _s(e) {
		let { store: t, computedStyle: r, ...n } = e,
			{ element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: c, restingValue: f, eventId: v } = n,
			d = !c,
			g = xU(),
			{ ixElements: E, ixSession: T, ixData: _ } = t.getState(),
			R = AU(E, i),
			{ refState: x } = E[R] || {},
			S = as(i),
			A = T.reducedMotion && Xo[o.actionTypeId],
			P
		if (A && c)
			switch (_.events[v]?.eventTypeId) {
				case Ke.MOUSE_MOVE:
				case Ke.MOUSE_MOVE_IN_VIEWPORT:
					P = f
					break
				default:
					P = 0.5
					break
			}
		let q = CU(i, x, r, o, Pe, s)
		if (
			(t.dispatch(Za({ instanceId: g, elementId: R, origin: q, refType: S, skipMotion: A, skipToValue: P, ...n })),
			d_(document.body, 'ix2-animation-started', g),
			a)
		) {
			uH(t, g)
			return
		}
		Ft({ store: t, select: ({ ixInstances: w }) => w[g], onChange: p_ }), d && t.dispatch(ci(g, T.tick))
	}
	function Ts(e, t) {
		d_(document.body, 'ix2-animation-stopping', { instanceId: e.id, state: t.getState() })
		let { elementId: r, actionItem: n } = e,
			{ ixElements: i } = t.getState(),
			{ ref: o, refType: a } = i[r] || {}
		a === a_ && qU(o, n, Pe), t.dispatch(Ja(e.id))
	}
	function d_(e, t, r) {
		let n = document.createEvent('CustomEvent')
		n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
	}
	function uH(e, t) {
		let { ixParameters: r } = e.getState()
		e.dispatch(ci(t, 0)), e.dispatch(ui(performance.now(), r))
		let { ixInstances: n } = e.getState()
		p_(n[t], e)
	}
	function p_(e, t) {
		let {
				active: r,
				continuous: n,
				complete: i,
				elementId: o,
				actionItem: a,
				actionTypeId: s,
				renderType: c,
				current: f,
				groupIndex: v,
				eventId: d,
				eventTarget: g,
				eventStateKey: E,
				actionListId: T,
				isCarrier: _,
				styleProp: R,
				verbose: x,
				pluginInstance: S,
			} = e,
			{ ixData: A, ixSession: P } = t.getState(),
			{ events: q } = A,
			w = q[d] || {},
			{ mediaQueries: X = A.mediaQueryKeys } = w
		if (bi(X, P.mediaQueryKey) && (n || r || i)) {
			if (f || (c === OU && i)) {
				t.dispatch(es(o, s, f, a))
				let { ixElements: W } = t.getState(),
					{ ref: k, refType: Y, refState: te } = W[o] || {},
					L = te && te[s]
				;(Y === a_ || Ii(s)) && SU(k, te, L, d, a, R, Pe, c, S)
			}
			if (i) {
				if (_) {
					let W = Jr({
						store: t,
						eventId: d,
						eventTarget: g,
						eventStateKey: E,
						actionListId: T,
						groupIndex: v + 1,
						verbose: x,
					})
					x && !W && t.dispatch(dr({ actionListId: T, isPlaying: !1 }))
				}
				Ts(e, t)
			}
		}
	}
	var e_,
		gt,
		t_,
		r_,
		n_,
		i_,
		vr,
		o_,
		mi,
		IU,
		hs,
		Es,
		_i,
		a_,
		OU,
		Zm,
		Ti,
		AU,
		ys,
		Ft,
		xU,
		SU,
		s_,
		wU,
		RU,
		CU,
		NU,
		LU,
		PU,
		bi,
		qU,
		MU,
		DU,
		FU,
		GU,
		Ii,
		ms,
		VU,
		Jm,
		UU,
		HU,
		tH,
		nH,
		iH,
		oH,
		gs = he(() => {
			'use strict'
			;(e_ = ue(Ea())),
				(gt = ue(Wn())),
				(t_ = ue(SE())),
				(r_ = ue(JE())),
				(n_ = ue(ty())),
				(i_ = ue(ny())),
				(vr = ue(cy())),
				(o_ = ue(hy()))
			Fe()
			mi = ue(Dt())
			li()
			by()
			Qm()
			;(IU = Object.keys(Tn)),
				(hs = (e) => IU.includes(e)),
				({ COLON_DELIMITER: Es, BOUNDARY_SELECTOR: _i, HTML_ELEMENT: a_, RENDER_GENERAL: OU, W_MOD_IX: Zm } = we),
				({
					getAffectedElements: Ti,
					getElementId: AU,
					getDestinationValues: ys,
					observeStore: Ft,
					getInstanceId: xU,
					renderHTMLElement: SU,
					clearAllStyles: s_,
					getMaxDurationItemIndex: wU,
					getComputedStyle: RU,
					getInstanceOrigin: CU,
					reduceListToGroup: NU,
					shouldNamespaceEventParameter: LU,
					getNamespacedParameterId: PU,
					shouldAllowMediaQuery: bi,
					cleanupHTMLElement: qU,
					clearObjectCache: MU,
					stringifyTarget: DU,
					mediaQueriesEqual: FU,
					shallowEqual: GU,
				} = mi.IX2VanillaUtils),
				({ isPluginType: Ii, createPluginInstance: ms, getPluginDuration: VU } = mi.IX2VanillaPlugins),
				(Jm = navigator.userAgent),
				(UU = Jm.match(/iPad/i) || Jm.match(/iPhone/)),
				(HU = 12)
			tH = ['resize', 'orientationchange']
			;(nH = (e, t) => (0, r_.default)((0, i_.default)(e, t), n_.default)),
				(iH = (e, t) => {
					;(0, vr.default)(e, (r, n) => {
						r.forEach((i, o) => {
							let a = n + Es + o
							t(i, n, a)
						})
					})
				}),
				(oH = (e) => {
					let t = { target: e.target, targets: e.targets }
					return Ti({ config: t, elementApi: Pe })
				})
		})
	var h_ = u((ht) => {
		'use strict'
		var cH = un().default,
			lH = Zs().default
		Object.defineProperty(ht, '__esModule', { value: !0 })
		ht.actions = void 0
		ht.destroy = g_
		ht.init = gH
		ht.setEnv = vH
		ht.store = void 0
		Fl()
		var fH = Vo(),
			dH = lH((uE(), Ze(sE))),
			bs = (gs(), Ze(v_)),
			pH = cH((li(), Ze(yy)))
		ht.actions = pH
		var Is = (ht.store = (0, fH.createStore)(dH.default))
		function vH(e) {
			e() && (0, bs.observeRequests)(Is)
		}
		function gH(e) {
			g_(), (0, bs.startEngine)({ store: Is, rawData: e, allowEvents: !0 })
		}
		function g_() {
			;(0, bs.stopEngine)(Is)
		}
	})
	var __ = u((Nj, m_) => {
		'use strict'
		var E_ = et(),
			y_ = h_()
		y_.setEnv(E_.env)
		E_.define(
			'ix2',
			(m_.exports = function () {
				return y_
			})
		)
	})
	var b_ = u((Lj, T_) => {
		'use strict'
		var gr = et()
		gr.define(
			'links',
			(T_.exports = function (e, t) {
				var r = {},
					n = e(window),
					i,
					o = gr.env(),
					a = window.location,
					s = document.createElement('a'),
					c = 'w--current',
					f = /index\.(html|php)$/,
					v = /\/$/,
					d,
					g
				r.ready = r.design = r.preview = E
				function E() {
					;(i = o && gr.env('design')), (g = gr.env('slug') || a.pathname || ''), gr.scroll.off(_), (d = [])
					for (var x = document.links, S = 0; S < x.length; ++S) T(x[S])
					d.length && (gr.scroll.on(_), _())
				}
				function T(x) {
					if (!x.getAttribute('hreflang')) {
						var S = (i && x.getAttribute('href-disabled')) || x.getAttribute('href')
						if (((s.href = S), !(S.indexOf(':') >= 0))) {
							var A = e(x)
							if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
								if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return
								var P = e(s.hash)
								P.length && d.push({ link: A, sec: P, active: !1 })
								return
							}
							if (!(S === '#' || S === '')) {
								var q = s.href === a.href || S === g || (f.test(S) && v.test(g))
								R(A, c, q)
							}
						}
					}
				}
				function _() {
					var x = n.scrollTop(),
						S = n.height()
					t.each(d, function (A) {
						if (!A.link.attr('hreflang')) {
							var P = A.link,
								q = A.sec,
								w = q.offset().top,
								X = q.outerHeight(),
								W = S * 0.5,
								k = q.is(':visible') && w + X - W >= x && w + W <= x + S
							A.active !== k && ((A.active = k), R(P, c, k))
						}
					})
				}
				function R(x, S, A) {
					var P = x.hasClass(S)
					;(A && P) || (!A && !P) || (A ? x.addClass(S) : x.removeClass(S))
				}
				return r
			})
		)
	})
	var O_ = u((Pj, I_) => {
		'use strict'
		var xi = et()
		xi.define(
			'scroll',
			(I_.exports = function (e) {
				var t = { WF_CLICK_EMPTY: 'click.wf-empty-link', WF_CLICK_SCROLL: 'click.wf-scroll' },
					r = window.location,
					n = T() ? null : window.history,
					i = e(window),
					o = e(document),
					a = e(document.body),
					s =
						window.requestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						function (L) {
							window.setTimeout(L, 15)
						},
					c = xi.env('editor') ? '.w-editor-body' : 'body',
					f = 'header, ' + c + ' > .header, ' + c + ' > .w-nav:not([data-no-scroll])',
					v = 'a[href="#"]',
					d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ')',
					g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
					E = document.createElement('style')
				E.appendChild(document.createTextNode(g))
				function T() {
					try {
						return !!window.frameElement
					} catch {
						return !0
					}
				}
				var _ = /^#[a-zA-Z0-9][\w:.-]*$/
				function R(L) {
					return _.test(L.hash) && L.host + L.pathname === r.host + r.pathname
				}
				let x = typeof window.matchMedia == 'function' && window.matchMedia('(prefers-reduced-motion: reduce)')
				function S() {
					return document.body.getAttribute('data-wf-scroll-motion') === 'none' || x.matches
				}
				function A(L, b) {
					var C
					switch (b) {
						case 'add':
							;(C = L.attr('tabindex')), C ? L.attr('data-wf-tabindex-swap', C) : L.attr('tabindex', '-1')
							break
						case 'remove':
							;(C = L.attr('data-wf-tabindex-swap')),
								C ? (L.attr('tabindex', C), L.removeAttr('data-wf-tabindex-swap')) : L.removeAttr('tabindex')
							break
					}
					L.toggleClass('wf-force-outline-none', b === 'add')
				}
				function P(L) {
					var b = L.currentTarget
					if (!(xi.env('design') || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className)))) {
						var C = R(b) ? b.hash : ''
						if (C !== '') {
							var B = e(C)
							B.length &&
								(L && (L.preventDefault(), L.stopPropagation()),
								q(C, L),
								window.setTimeout(
									function () {
										w(B, function () {
											A(B, 'add'), B.get(0).focus({ preventScroll: !0 }), A(B, 'remove')
										})
									},
									L ? 0 : 300
								))
						}
					}
				}
				function q(L) {
					if (r.hash !== L && n && n.pushState && !(xi.env.chrome && r.protocol === 'file:')) {
						var b = n.state && n.state.hash
						b !== L && n.pushState({ hash: L }, '', L)
					}
				}
				function w(L, b) {
					var C = i.scrollTop(),
						B = X(L)
					if (C !== B) {
						var V = W(L, C, B),
							J = Date.now(),
							ee = function () {
								var N = Date.now() - J
								window.scroll(0, k(C, B, N, V)), N <= V ? s(ee) : typeof b == 'function' && b()
							}
						s(ee)
					}
				}
				function X(L) {
					var b = e(f),
						C = b.css('position') === 'fixed' ? b.outerHeight() : 0,
						B = L.offset().top - C
					if (L.data('scroll') === 'mid') {
						var V = i.height() - C,
							J = L.outerHeight()
						J < V && (B -= Math.round((V - J) / 2))
					}
					return B
				}
				function W(L, b, C) {
					if (S()) return 0
					var B = 1
					return (
						a.add(L).each(function (V, J) {
							var ee = parseFloat(J.getAttribute('data-scroll-time'))
							!isNaN(ee) && ee >= 0 && (B = ee)
						}),
						(472.143 * Math.log(Math.abs(b - C) + 125) - 2e3) * B
					)
				}
				function k(L, b, C, B) {
					return C > B ? b : L + (b - L) * Y(C / B)
				}
				function Y(L) {
					return L < 0.5 ? 4 * L * L * L : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1
				}
				function te() {
					var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: b } = t
					o.on(b, d, P),
						o.on(L, v, function (C) {
							C.preventDefault()
						}),
						document.head.insertBefore(E, document.head.firstChild)
				}
				return { ready: te }
			})
		)
	})
	var x_ = u((qj, A_) => {
		'use strict'
		var hH = et()
		hH.define(
			'touch',
			(A_.exports = function (e) {
				var t = {},
					r = window.getSelection
				;(e.event.special.tap = { bindType: 'click', delegateType: 'click' }),
					(t.init = function (o) {
						return (o = typeof o == 'string' ? e(o).get(0) : o), o ? new n(o) : null
					})
				function n(o) {
					var a = !1,
						s = !1,
						c = Math.min(Math.round(window.innerWidth * 0.04), 40),
						f,
						v
					o.addEventListener('touchstart', d, !1),
						o.addEventListener('touchmove', g, !1),
						o.addEventListener('touchend', E, !1),
						o.addEventListener('touchcancel', T, !1),
						o.addEventListener('mousedown', d, !1),
						o.addEventListener('mousemove', g, !1),
						o.addEventListener('mouseup', E, !1),
						o.addEventListener('mouseout', T, !1)
					function d(R) {
						var x = R.touches
						;(x && x.length > 1) || ((a = !0), x ? ((s = !0), (f = x[0].clientX)) : (f = R.clientX), (v = f))
					}
					function g(R) {
						if (a) {
							if (s && R.type === 'mousemove') {
								R.preventDefault(), R.stopPropagation()
								return
							}
							var x = R.touches,
								S = x ? x[0].clientX : R.clientX,
								A = S - v
							;(v = S),
								Math.abs(A) > c &&
									r &&
									String(r()) === '' &&
									(i('swipe', R, { direction: A > 0 ? 'right' : 'left' }), T())
						}
					}
					function E(R) {
						if (a && ((a = !1), s && R.type === 'mouseup')) {
							R.preventDefault(), R.stopPropagation(), (s = !1)
							return
						}
					}
					function T() {
						a = !1
					}
					function _() {
						o.removeEventListener('touchstart', d, !1),
							o.removeEventListener('touchmove', g, !1),
							o.removeEventListener('touchend', E, !1),
							o.removeEventListener('touchcancel', T, !1),
							o.removeEventListener('mousedown', d, !1),
							o.removeEventListener('mousemove', g, !1),
							o.removeEventListener('mouseup', E, !1),
							o.removeEventListener('mouseout', T, !1),
							(o = null)
					}
					this.destroy = _
				}
				function i(o, a, s) {
					var c = e.Event(o, { originalEvent: a })
					e(a.target).trigger(c, s)
				}
				return (t.instance = t.init(document)), t
			})
		)
	})
	var w_ = u((Mj, S_) => {
		'use strict'
		var Os = et()
		Os.define(
			'forms',
			(S_.exports = function (e, t) {
				var r = {},
					n = e(document),
					i,
					o = window.location,
					a = window.XDomainRequest && !window.atob,
					s = '.w-form',
					c,
					f = /e(-)?mail/i,
					v = /^\S+@\S+$/,
					d = window.alert,
					g = Os.env(),
					E,
					T,
					_,
					R = /list-manage[1-9]?.com/i,
					x = t.debounce(function () {
						d(
							'Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.'
						)
					}, 100)
				r.ready =
					r.design =
					r.preview =
						function () {
							S(), !g && !E && P()
						}
				function S() {
					;(c = e('html').attr('data-wf-site')),
						(T = 'https://webflow.com/api/v1/form/' + c),
						a &&
							T.indexOf('https://webflow.com') >= 0 &&
							(T = T.replace('https://webflow.com', 'https://formdata.webflow.com')),
						(_ = `${T}/signFile`),
						(i = e(s + ' form')),
						i.length && i.each(A)
				}
				function A(N, H) {
					var j = e(H),
						D = e.data(H, s)
					D || (D = e.data(H, s, { form: j })), q(D)
					var M = j.closest('div.w-form')
					;(D.done = M.find('> .w-form-done')),
						(D.fail = M.find('> .w-form-fail')),
						(D.fileUploads = M.find('.w-file-upload')),
						D.fileUploads.each(function (oe) {
							V(oe, D)
						})
					var $ = D.form.attr('aria-label') || D.form.attr('data-name') || 'Form'
					D.done.attr('aria-label') || D.form.attr('aria-label', $),
						D.done.attr('tabindex', '-1'),
						D.done.attr('role', 'region'),
						D.done.attr('aria-label') || D.done.attr('aria-label', $ + ' success'),
						D.fail.attr('tabindex', '-1'),
						D.fail.attr('role', 'region'),
						D.fail.attr('aria-label') || D.fail.attr('aria-label', $ + ' failure')
					var ie = (D.action = j.attr('action'))
					if (((D.handler = null), (D.redirect = j.attr('data-redirect')), R.test(ie))) {
						D.handler = b
						return
					}
					if (!ie) {
						if (c) {
							D.handler = L
							return
						}
						x()
					}
				}
				function P() {
					;(E = !0),
						n.on('submit', s + ' form', function (oe) {
							var Z = e.data(this, s)
							Z.handler && ((Z.evt = oe), Z.handler(Z))
						})
					let N = '.w-checkbox-input',
						H = '.w-radio-input',
						j = 'w--redirected-checked',
						D = 'w--redirected-focus',
						M = 'w--redirected-focus-visible',
						$ = ':focus-visible, [data-wf-focus-visible]',
						ie = [
							['checkbox', N],
							['radio', H],
						]
					n.on('change', s + ' form input[type="checkbox"]:not(' + N + ')', (oe) => {
						e(oe.target).siblings(N).toggleClass(j)
					}),
						n.on('change', s + ' form input[type="radio"]', (oe) => {
							e(`input[name="${oe.target.name}"]:not(${N})`).map((de, ut) => e(ut).siblings(H).removeClass(j))
							let Z = e(oe.target)
							Z.hasClass('w-radio-input') || Z.siblings(H).addClass(j)
						}),
						ie.forEach(([oe, Z]) => {
							n.on('focus', s + ` form input[type="${oe}"]:not(` + Z + ')', (de) => {
								e(de.target).siblings(Z).addClass(D), e(de.target).filter($).siblings(Z).addClass(M)
							}),
								n.on('blur', s + ` form input[type="${oe}"]:not(` + Z + ')', (de) => {
									e(de.target).siblings(Z).removeClass(`${D} ${M}`)
								})
						})
				}
				function q(N) {
					var H = (N.btn = N.form.find(':input[type="submit"]'))
					;(N.wait = N.btn.attr('data-wait') || null),
						(N.success = !1),
						H.prop('disabled', !1),
						N.label && H.val(N.label)
				}
				function w(N) {
					var H = N.btn,
						j = N.wait
					H.prop('disabled', !0), j && ((N.label = H.val()), H.val(j))
				}
				function X(N, H) {
					var j = null
					return (
						(H = H || {}),
						N.find(':input:not([type="submit"]):not([type="file"])').each(function (D, M) {
							var $ = e(M),
								ie = $.attr('type'),
								oe = $.attr('data-name') || $.attr('name') || 'Field ' + (D + 1),
								Z = $.val()
							if (ie === 'checkbox') Z = $.is(':checked')
							else if (ie === 'radio') {
								if (H[oe] === null || typeof H[oe] == 'string') return
								Z = N.find('input[name="' + $.attr('name') + '"]:checked').val() || null
							}
							typeof Z == 'string' && (Z = e.trim(Z)), (H[oe] = Z), (j = j || te($, ie, oe, Z))
						}),
						j
					)
				}
				function W(N) {
					var H = {}
					return (
						N.find(':input[type="file"]').each(function (j, D) {
							var M = e(D),
								$ = M.attr('data-name') || M.attr('name') || 'File ' + (j + 1),
								ie = M.attr('data-value')
							typeof ie == 'string' && (ie = e.trim(ie)), (H[$] = ie)
						}),
						H
					)
				}
				let k = { _mkto_trk: 'marketo' }
				function Y() {
					return document.cookie.split('; ').reduce(function (H, j) {
						let D = j.split('='),
							M = D[0]
						if (M in k) {
							let $ = k[M],
								ie = D.slice(1).join('=')
							H[$] = ie
						}
						return H
					}, {})
				}
				function te(N, H, j, D) {
					var M = null
					return (
						H === 'password'
							? (M = 'Passwords cannot be submitted.')
							: N.attr('required')
							? D
								? f.test(N.attr('type')) && (v.test(D) || (M = 'Please enter a valid email address for: ' + j))
								: (M = 'Please fill out the required field: ' + j)
							: j === 'g-recaptcha-response' && !D && (M = 'Please confirm you\u2019re not a robot.'),
						M
					)
				}
				function L(N) {
					B(N), C(N)
				}
				function b(N) {
					q(N)
					var H = N.form,
						j = {}
					if (/^https/.test(o.href) && !/^https/.test(N.action)) {
						H.attr('method', 'post')
						return
					}
					B(N)
					var D = X(H, j)
					if (D) return d(D)
					w(N)
					var M
					t.each(j, function (Z, de) {
						f.test(de) && (j.EMAIL = Z),
							/^((full[ _-]?)?name)$/i.test(de) && (M = Z),
							/^(first[ _-]?name)$/i.test(de) && (j.FNAME = Z),
							/^(last[ _-]?name)$/i.test(de) && (j.LNAME = Z)
					}),
						M && !j.FNAME && ((M = M.split(' ')), (j.FNAME = M[0]), (j.LNAME = j.LNAME || M[1]))
					var $ = N.action.replace('/post?', '/post-json?') + '&c=?',
						ie = $.indexOf('u=') + 2
					ie = $.substring(ie, $.indexOf('&', ie))
					var oe = $.indexOf('id=') + 3
					;(oe = $.substring(oe, $.indexOf('&', oe))),
						(j['b_' + ie + '_' + oe] = ''),
						e
							.ajax({ url: $, data: j, dataType: 'jsonp' })
							.done(function (Z) {
								;(N.success = Z.result === 'success' || /already/.test(Z.msg)),
									N.success || console.info('MailChimp error: ' + Z.msg),
									C(N)
							})
							.fail(function () {
								C(N)
							})
				}
				function C(N) {
					var H = N.form,
						j = N.redirect,
						D = N.success
					if (D && j) {
						Os.location(j)
						return
					}
					N.done.toggle(D), N.fail.toggle(!D), D ? N.done.focus() : N.fail.focus(), H.toggle(!D), q(N)
				}
				function B(N) {
					N.evt && N.evt.preventDefault(), (N.evt = null)
				}
				function V(N, H) {
					if (!H.fileUploads || !H.fileUploads[N]) return
					var j,
						D = e(H.fileUploads[N]),
						M = D.find('> .w-file-upload-default'),
						$ = D.find('> .w-file-upload-uploading'),
						ie = D.find('> .w-file-upload-success'),
						oe = D.find('> .w-file-upload-error'),
						Z = M.find('.w-file-upload-input'),
						de = M.find('.w-file-upload-label'),
						ut = de.children(),
						ce = oe.find('.w-file-upload-error-msg'),
						p = ie.find('.w-file-upload-file'),
						F = ie.find('.w-file-remove-link'),
						z = p.find('.w-file-upload-file-name'),
						U = ce.attr('data-w-size-error'),
						ve = ce.attr('data-w-type-error'),
						xt = ce.attr('data-w-generic-error')
					if (
						(g ||
							de.on('click keydown', function (y) {
								;(y.type === 'keydown' && y.which !== 13 && y.which !== 32) || (y.preventDefault(), Z.click())
							}),
						de.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true'),
						F.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true'),
						g)
					)
						Z.on('click', function (y) {
							y.preventDefault()
						}),
							de.on('click', function (y) {
								y.preventDefault()
							}),
							ut.on('click', function (y) {
								y.preventDefault()
							})
					else {
						F.on('click keydown', function (y) {
							if (y.type === 'keydown') {
								if (y.which !== 13 && y.which !== 32) return
								y.preventDefault()
							}
							Z.removeAttr('data-value'), Z.val(''), z.html(''), M.toggle(!0), ie.toggle(!1), de.focus()
						}),
							Z.on('change', function (y) {
								;(j = y.target && y.target.files && y.target.files[0]),
									j &&
										(M.toggle(!1),
										oe.toggle(!1),
										$.toggle(!0),
										$.focus(),
										z.text(j.name),
										I() || w(H),
										(H.fileUploads[N].uploading = !0),
										J(j, h))
							})
						var ct = de.outerHeight()
						Z.height(ct), Z.width(1)
					}
					function l(y) {
						var O = y.responseJSON && y.responseJSON.msg,
							K = xt
						typeof O == 'string' && O.indexOf('InvalidFileTypeError') === 0
							? (K = ve)
							: typeof O == 'string' && O.indexOf('MaxFileSizeError') === 0 && (K = U),
							ce.text(K),
							Z.removeAttr('data-value'),
							Z.val(''),
							$.toggle(!1),
							M.toggle(!0),
							oe.toggle(!0),
							oe.focus(),
							(H.fileUploads[N].uploading = !1),
							I() || q(H)
					}
					function h(y, O) {
						if (y) return l(y)
						var K = O.fileName,
							re = O.postData,
							pe = O.fileId,
							G = O.s3Url
						Z.attr('data-value', pe), ee(G, re, j, K, m)
					}
					function m(y) {
						if (y) return l(y)
						$.toggle(!1), ie.css('display', 'inline-block'), ie.focus(), (H.fileUploads[N].uploading = !1), I() || q(H)
					}
					function I() {
						var y = (H.fileUploads && H.fileUploads.toArray()) || []
						return y.some(function (O) {
							return O.uploading
						})
					}
				}
				function J(N, H) {
					var j = new URLSearchParams({ name: N.name, size: N.size })
					e.ajax({ type: 'GET', url: `${_}?${j}`, crossDomain: !0 })
						.done(function (D) {
							H(null, D)
						})
						.fail(function (D) {
							H(D)
						})
				}
				function ee(N, H, j, D, M) {
					var $ = new FormData()
					for (var ie in H) $.append(ie, H[ie])
					$.append('file', j, D),
						e
							.ajax({ type: 'POST', url: N, data: $, processData: !1, contentType: !1 })
							.done(function () {
								M(null)
							})
							.fail(function (oe) {
								M(oe)
							})
				}
				return r
			})
		)
	})
	var C_ = u((Dj, R_) => {
		'use strict'
		var At = et(),
			EH = qi(),
			Se = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35,
			}
		At.define(
			'navbar',
			(R_.exports = function (e, t) {
				var r = {},
					n = e.tram,
					i = e(window),
					o = e(document),
					a = t.debounce,
					s,
					c,
					f,
					v,
					d = At.env(),
					g = '<div class="w-nav-overlay" data-wf-ignore />',
					E = '.w-nav',
					T = 'w--open',
					_ = 'w--nav-dropdown-open',
					R = 'w--nav-dropdown-toggle-open',
					x = 'w--nav-dropdown-list-open',
					S = 'w--nav-link-open',
					A = EH.triggers,
					P = e()
				;(r.ready = r.design = r.preview = q),
					(r.destroy = function () {
						;(P = e()), w(), c && c.length && c.each(Y)
					})
				function q() {
					;(f = d && At.env('design')),
						(v = At.env('editor')),
						(s = e(document.body)),
						(c = o.find(E)),
						c.length && (c.each(k), w(), X())
				}
				function w() {
					At.resize.off(W)
				}
				function X() {
					At.resize.on(W)
				}
				function W() {
					c.each(M)
				}
				function k(p, F) {
					var z = e(F),
						U = e.data(F, E)
					U || (U = e.data(F, E, { open: !1, el: z, config: {}, selectedIdx: -1 })),
						(U.menu = z.find('.w-nav-menu')),
						(U.links = U.menu.find('.w-nav-link')),
						(U.dropdowns = U.menu.find('.w-dropdown')),
						(U.dropdownToggle = U.menu.find('.w-dropdown-toggle')),
						(U.dropdownList = U.menu.find('.w-dropdown-list')),
						(U.button = z.find('.w-nav-button')),
						(U.container = z.find('.w-container')),
						(U.overlayContainerId = 'w-nav-overlay-' + p),
						(U.outside = j(U))
					var ve = z.find('.w-nav-brand')
					ve && ve.attr('href') === '/' && ve.attr('aria-label') == null && ve.attr('aria-label', 'home'),
						U.button.attr('style', '-webkit-user-select: text;'),
						U.button.attr('aria-label') == null && U.button.attr('aria-label', 'menu'),
						U.button.attr('role', 'button'),
						U.button.attr('tabindex', '0'),
						U.button.attr('aria-controls', U.overlayContainerId),
						U.button.attr('aria-haspopup', 'menu'),
						U.button.attr('aria-expanded', 'false'),
						U.el.off(E),
						U.button.off(E),
						U.menu.off(E),
						b(U),
						f
							? (te(U), U.el.on('setting' + E, C(U)))
							: (L(U),
							  U.button.on('click' + E, N(U)),
							  U.menu.on('click' + E, 'a', H(U)),
							  U.button.on('keydown' + E, B(U)),
							  U.el.on('keydown' + E, V(U))),
						M(p, F)
				}
				function Y(p, F) {
					var z = e.data(F, E)
					z && (te(z), e.removeData(F, E))
				}
				function te(p) {
					p.overlay && (ce(p, !0), p.overlay.remove(), (p.overlay = null))
				}
				function L(p) {
					p.overlay ||
						((p.overlay = e(g).appendTo(p.el)),
						p.overlay.attr('id', p.overlayContainerId),
						(p.parent = p.menu.parent()),
						ce(p, !0))
				}
				function b(p) {
					var F = {},
						z = p.config || {},
						U = (F.animation = p.el.attr('data-animation') || 'default')
					;(F.animOver = /^over/.test(U)),
						(F.animDirect = /left$/.test(U) ? -1 : 1),
						z.animation !== U && p.open && t.defer(ee, p),
						(F.easing = p.el.attr('data-easing') || 'ease'),
						(F.easing2 = p.el.attr('data-easing2') || 'ease')
					var ve = p.el.attr('data-duration')
					;(F.duration = ve != null ? Number(ve) : 400), (F.docHeight = p.el.attr('data-doc-height')), (p.config = F)
				}
				function C(p) {
					return function (F, z) {
						z = z || {}
						var U = i.width()
						b(p),
							z.open === !0 && de(p, !0),
							z.open === !1 && ce(p, !0),
							p.open &&
								t.defer(function () {
									U !== i.width() && ee(p)
								})
					}
				}
				function B(p) {
					return function (F) {
						switch (F.keyCode) {
							case Se.SPACE:
							case Se.ENTER:
								return N(p)(), F.preventDefault(), F.stopPropagation()
							case Se.ESCAPE:
								return ce(p), F.preventDefault(), F.stopPropagation()
							case Se.ARROW_RIGHT:
							case Se.ARROW_DOWN:
							case Se.HOME:
							case Se.END:
								return p.open
									? (F.keyCode === Se.END ? (p.selectedIdx = p.links.length - 1) : (p.selectedIdx = 0),
									  J(p),
									  F.preventDefault(),
									  F.stopPropagation())
									: (F.preventDefault(), F.stopPropagation())
						}
					}
				}
				function V(p) {
					return function (F) {
						if (p.open)
							switch (((p.selectedIdx = p.links.index(document.activeElement)), F.keyCode)) {
								case Se.HOME:
								case Se.END:
									return (
										F.keyCode === Se.END ? (p.selectedIdx = p.links.length - 1) : (p.selectedIdx = 0),
										J(p),
										F.preventDefault(),
										F.stopPropagation()
									)
								case Se.ESCAPE:
									return ce(p), p.button.focus(), F.preventDefault(), F.stopPropagation()
								case Se.ARROW_LEFT:
								case Se.ARROW_UP:
									return (
										(p.selectedIdx = Math.max(-1, p.selectedIdx - 1)), J(p), F.preventDefault(), F.stopPropagation()
									)
								case Se.ARROW_RIGHT:
								case Se.ARROW_DOWN:
									return (
										(p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1)),
										J(p),
										F.preventDefault(),
										F.stopPropagation()
									)
							}
					}
				}
				function J(p) {
					if (p.links[p.selectedIdx]) {
						var F = p.links[p.selectedIdx]
						F.focus(), H(F)
					}
				}
				function ee(p) {
					p.open && (ce(p, !0), de(p, !0))
				}
				function N(p) {
					return a(function () {
						p.open ? ce(p) : de(p)
					})
				}
				function H(p) {
					return function (F) {
						var z = e(this),
							U = z.attr('href')
						if (!At.validClick(F.currentTarget)) {
							F.preventDefault()
							return
						}
						U && U.indexOf('#') === 0 && p.open && ce(p)
					}
				}
				function j(p) {
					return (
						p.outside && o.off('click' + E, p.outside),
						function (F) {
							var z = e(F.target)
							;(v && z.closest('.w-editor-bem-EditorOverlay').length) || D(p, z)
						}
					)
				}
				var D = a(function (p, F) {
					if (p.open) {
						var z = F.closest('.w-nav-menu')
						p.menu.is(z) || ce(p)
					}
				})
				function M(p, F) {
					var z = e.data(F, E),
						U = (z.collapsed = z.button.css('display') !== 'none')
					if ((z.open && !U && !f && ce(z, !0), z.container.length)) {
						var ve = ie(z)
						z.links.each(ve), z.dropdowns.each(ve)
					}
					z.open && ut(z)
				}
				var $ = 'max-width'
				function ie(p) {
					var F = p.container.css($)
					return (
						F === 'none' && (F = ''),
						function (z, U) {
							;(U = e(U)), U.css($, ''), U.css($) === 'none' && U.css($, F)
						}
					)
				}
				function oe(p, F) {
					F.setAttribute('data-nav-menu-open', '')
				}
				function Z(p, F) {
					F.removeAttribute('data-nav-menu-open')
				}
				function de(p, F) {
					if (p.open) return
					;(p.open = !0),
						p.menu.each(oe),
						p.links.addClass(S),
						p.dropdowns.addClass(_),
						p.dropdownToggle.addClass(R),
						p.dropdownList.addClass(x),
						p.button.addClass(T)
					var z = p.config,
						U = z.animation
					;(U === 'none' || !n.support.transform || z.duration <= 0) && (F = !0)
					var ve = ut(p),
						xt = p.menu.outerHeight(!0),
						ct = p.menu.outerWidth(!0),
						l = p.el.height(),
						h = p.el[0]
					if ((M(0, h), A.intro(0, h), At.redraw.up(), f || o.on('click' + E, p.outside), F)) {
						y()
						return
					}
					var m = 'transform ' + z.duration + 'ms ' + z.easing
					if ((p.overlay && ((P = p.menu.prev()), p.overlay.show().append(p.menu)), z.animOver)) {
						n(p.menu)
							.add(m)
							.set({ x: z.animDirect * ct, height: ve })
							.start({ x: 0 })
							.then(y),
							p.overlay && p.overlay.width(ct)
						return
					}
					var I = l + xt
					n(p.menu).add(m).set({ y: -I }).start({ y: 0 }).then(y)
					function y() {
						p.button.attr('aria-expanded', 'true')
					}
				}
				function ut(p) {
					var F = p.config,
						z = F.docHeight ? o.height() : s.height()
					return (
						F.animOver ? p.menu.height(z) : p.el.css('position') !== 'fixed' && (z -= p.el.outerHeight(!0)),
						p.overlay && p.overlay.height(z),
						z
					)
				}
				function ce(p, F) {
					if (!p.open) return
					;(p.open = !1), p.button.removeClass(T)
					var z = p.config
					if (
						((z.animation === 'none' || !n.support.transform || z.duration <= 0) && (F = !0),
						A.outro(0, p.el[0]),
						o.off('click' + E, p.outside),
						F)
					) {
						n(p.menu).stop(), h()
						return
					}
					var U = 'transform ' + z.duration + 'ms ' + z.easing2,
						ve = p.menu.outerHeight(!0),
						xt = p.menu.outerWidth(!0),
						ct = p.el.height()
					if (z.animOver) {
						n(p.menu)
							.add(U)
							.start({ x: xt * z.animDirect })
							.then(h)
						return
					}
					var l = ct + ve
					n(p.menu).add(U).start({ y: -l }).then(h)
					function h() {
						p.menu.height(''),
							n(p.menu).set({ x: 0, y: 0 }),
							p.menu.each(Z),
							p.links.removeClass(S),
							p.dropdowns.removeClass(_),
							p.dropdownToggle.removeClass(R),
							p.dropdownList.removeClass(x),
							p.overlay &&
								p.overlay.children().length &&
								(P.length ? p.menu.insertAfter(P) : p.menu.prependTo(p.parent), p.overlay.attr('style', '').hide()),
							p.el.triggerHandler('w-close'),
							p.button.attr('aria-expanded', 'false')
					}
				}
				return r
			})
		)
	})
	Gs()
	Us()
	Ws()
	qi()
	__()
	b_()
	O_()
	x_()
	w_()
	C_()
})()
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	events: {
		'e-2': {
			id: 'e-2',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_SCROLL_DOWN',
			action: {
				id: '',
				actionTypeId: 'GENERAL_START_ACTION',
				config: {
					delay: 0,
					easing: '',
					duration: 0,
					actionListId: 'a',
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: 'e',
				},
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 0,
				scrollOffsetUnit: '%',
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1706455262538,
		},
		'e-4': {
			id: 'e-4',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_FINISH',
			action: {
				id: '',
				actionTypeId: 'GENERAL_START_ACTION',
				config: {
					delay: 0,
					easing: '',
					duration: 0,
					actionListId: 'a-2',
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: 'e-3',
				},
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: {
				loop: true,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1706810652126,
		},
		'e-11': {
			id: 'e-11',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLLING_IN_VIEW',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|b2413312-1914-796a-ea89-2b52754988db',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|b2413312-1914-796a-ea89-2b52754988db',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: [
				{
					continuousParameterGroupId: 'a-4-p',
					smoothing: 50,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: true,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1625125522687,
		},
		'e-12': {
			id: 'e-12',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLLING_IN_VIEW',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|a34bfd19-3be7-b9dc-acf9-09e96f901cf3',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|a34bfd19-3be7-b9dc-acf9-09e96f901cf3',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: [
				{
					continuousParameterGroupId: 'a-4-p',
					smoothing: 50,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: true,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1706818376346,
		},
		'e-13': {
			id: 'e-13',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLLING_IN_VIEW',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|7f93f7e5-749a-8c87-25a2-ae021528172c',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|7f93f7e5-749a-8c87-25a2-ae021528172c',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: [
				{
					continuousParameterGroupId: 'a-4-p',
					smoothing: 50,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: true,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1706818463362,
		},
		'e-14': {
			id: 'e-14',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_SCROLL',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-7', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['main'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: [
				{
					continuousParameterGroupId: 'a-7-p',
					smoothing: 0,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: false,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1706819439069,
		},
		'e-15': {
			id: 'e-15',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLLING_IN_VIEW',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|eb35d2bf-02a9-8616-94f6-29574c8acfa7',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|eb35d2bf-02a9-8616-94f6-29574c8acfa7',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: [
				{
					continuousParameterGroupId: 'a-4-p',
					smoothing: 50,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: true,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1706868314045,
		},
		'e-16': {
			id: 'e-16',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_SCROLL',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-6', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['medium', 'small', 'tiny'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: [
				{
					continuousParameterGroupId: 'a-6-p',
					smoothing: 0,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: false,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1706900635491,
		},
		'e-17': {
			id: 'e-17',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_SCROLL',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-5', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['main'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: [
				{
					continuousParameterGroupId: 'a-5-p',
					smoothing: 0,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: false,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1706901350296,
		},
		'e-18': {
			id: 'e-18',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_START',
			action: {
				id: '',
				actionTypeId: 'GENERAL_START_ACTION',
				config: {
					delay: 0,
					easing: '',
					duration: 0,
					actionListId: 'a-8',
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: 'e-19',
				},
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1707058017897,
		},
		'e-20': {
			id: 'e-20',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-21' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|305e881d-ec07-d9b2-b838-e995353415b6',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|305e881d-ec07-d9b2-b838-e995353415b6',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061428707,
		},
		'e-22': {
			id: 'e-22',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-23' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|c0254a63-5d07-6f91-abef-207e95951921',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|c0254a63-5d07-6f91-abef-207e95951921',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 100,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061460876,
		},
		'e-24': {
			id: 'e-24',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-25' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|6618c822-7940-750a-fa7f-db84e35f0661',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|6618c822-7940-750a-fa7f-db84e35f0661',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 200,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061473935,
		},
		'e-26': {
			id: 'e-26',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-27' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|6979764a-94ac-e0aa-3aad-ce48536401c9',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|6979764a-94ac-e0aa-3aad-ce48536401c9',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 300,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061490488,
		},
		'e-28': {
			id: 'e-28',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-29' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|61420804-ad3a-492d-2638-12033994e9b1',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|61420804-ad3a-492d-2638-12033994e9b1',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 400,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061503033,
		},
		'e-30': {
			id: 'e-30',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-31' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|0d10ece9-8fa4-289b-0894-a4945670ecab',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|0d10ece9-8fa4-289b-0894-a4945670ecab',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061579337,
		},
		'e-32': {
			id: 'e-32',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-33' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|247d1c2f-98e3-6a84-52dc-eeecc1d59698',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|247d1c2f-98e3-6a84-52dc-eeecc1d59698',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061602997,
		},
		'e-34': {
			id: 'e-34',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-35' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|7ac283a2-2519-de28-de4d-387818857643',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|7ac283a2-2519-de28-de4d-387818857643',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 100,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061617438,
		},
		'e-36': {
			id: 'e-36',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-37' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|d80d1f12-cac1-47a3-65fb-6bfc0c130c41',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|d80d1f12-cac1-47a3-65fb-6bfc0c130c41',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 100,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061630387,
		},
		'e-38': {
			id: 'e-38',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-39' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|d448913f-476b-1449-edd8-33d825350578',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|d448913f-476b-1449-edd8-33d825350578',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 200,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061660581,
		},
		'e-40': {
			id: 'e-40',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-41' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|d86f3495-750b-ba06-0e38-e14cfa760867',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|d86f3495-750b-ba06-0e38-e14cfa760867',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 200,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061675213,
		},
		'e-42': {
			id: 'e-42',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-43' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|8dba3604-adbd-8547-6e48-cb70828ac579',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|8dba3604-adbd-8547-6e48-cb70828ac579',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061736704,
		},
		'e-44': {
			id: 'e-44',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-45' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|e3e669fa-9f76-0eaa-bdc5-4d62c89f771a',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|e3e669fa-9f76-0eaa-bdc5-4d62c89f771a',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 150,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061747897,
		},
		'e-46': {
			id: 'e-46',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-47' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|ec144282-02bd-fad7-7839-e6f711030823',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|ec144282-02bd-fad7-7839-e6f711030823',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 300,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061756518,
		},
		'e-48': {
			id: 'e-48',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-49' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|f3228602-0e21-8080-6976-e3b8d7a7fc86',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|f3228602-0e21-8080-6976-e3b8d7a7fc86',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 450,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707061852767,
		},
		'e-68': {
			id: 'e-68',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-69' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|384d2cc7-b078-f721-9357-5be21bbf7fe2',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|384d2cc7-b078-f721-9357-5be21bbf7fe2',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707062306969,
		},
		'e-70': {
			id: 'e-70',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-71' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|b4beef83-a43f-6685-d644-93db7a8e0374',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|b4beef83-a43f-6685-d644-93db7a8e0374',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 150,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707062316034,
		},
		'e-72': {
			id: 'e-72',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-73' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|4b961232-7214-e80b-1e0e-63df870b387d',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|4b961232-7214-e80b-1e0e-63df870b387d',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 300,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707062324244,
		},
		'e-74': {
			id: 'e-74',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-75' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|acb42b39-0ea0-101e-c378-abc067672cfa',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|acb42b39-0ea0-101e-c378-abc067672cfa',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 450,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707062336760,
		},
		'e-76': {
			id: 'e-76',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-77' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|6ce9a2b5-e6d5-7f83-bb1f-f8fc20da1a79',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|6ce9a2b5-e6d5-7f83-bb1f-f8fc20da1a79',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707062401804,
		},
		'e-78': {
			id: 'e-78',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-79' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65a9a021b3cbcaf754c14a66|5ed05cb8-3bd9-a3f4-9fb3-727f37559932',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [
				{
					id: '65a9a021b3cbcaf754c14a66|5ed05cb8-3bd9-a3f4-9fb3-727f37559932',
					appliesTo: 'ELEMENT',
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707062978708,
		},
		'e-80': {
			id: 'e-80',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_SCROLL',
			action: {
				id: '',
				actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
				config: { actionListId: 'a-10', affectedElements: {}, duration: 0 },
			},
			mediaQueries: ['medium', 'small', 'tiny'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: [
				{
					continuousParameterGroupId: 'a-10-p',
					smoothing: 0,
					startsEntering: true,
					addStartOffset: false,
					addOffsetValue: 50,
					startsExiting: false,
					addEndOffset: false,
					endOffsetValue: 50,
				},
			],
			createdOn: 1707063520995,
		},
		'e-84': {
			id: 'e-84',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_FINISH',
			action: {
				id: '',
				actionTypeId: 'GENERAL_START_ACTION',
				config: {
					delay: 0,
					easing: '',
					duration: 0,
					actionListId: 'a-12',
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: 'e-83',
				},
			},
			mediaQueries: ['main'],
			target: { id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] },
			targets: [{ id: '65a9a021b3cbcaf754c14a66', appliesTo: 'PAGE', styleBlockIds: [] }],
			config: {
				loop: true,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1707249227970,
		},
		'e-133': {
			id: 'e-133',
			name: '',
			animationType: 'preset',
			eventTypeId: 'SCROLL_INTO_VIEW',
			action: {
				id: '',
				actionTypeId: 'GROW_EFFECT',
				instant: false,
				config: { actionListId: 'growIn', autoStopEventId: 'e-134' },
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: {
				id: '65c8ce52b28fe27c776beb3c|7f663c89-86af-5585-8ee6-cae25ab9bd47',
				appliesTo: 'ELEMENT',
				styleBlockIds: [],
			},
			targets: [],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: 20,
				scrollOffsetUnit: '%',
				delay: 0,
				direction: null,
				effectIn: true,
			},
			createdOn: 1707658853290,
		},
		'e-136': {
			id: 'e-136',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_FINISH',
			action: {
				id: '',
				actionTypeId: 'GENERAL_START_ACTION',
				config: {
					delay: 0,
					easing: '',
					duration: 0,
					actionListId: 'a-14',
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: 'e-135',
				},
			},
			mediaQueries: ['main', 'medium', 'small', 'tiny'],
			target: { appliesTo: 'PAGE', styleBlockIds: [], id: '65a9a021b3cbcaf754c14a66' },
			targets: [],
			config: {
				loop: true,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1707663325565,
		},
		'e-138': {
			id: 'e-138',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_FINISH',
			action: {
				id: '',
				actionTypeId: 'GENERAL_START_ACTION',
				config: {
					delay: 0,
					easing: '',
					duration: 0,
					actionListId: 'a-15',
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: 'e-137',
				},
			},
			mediaQueries: ['main'],
			target: { appliesTo: 'PAGE', styleBlockIds: [], id: '65a9a021b3cbcaf754c14a66' },
			targets: [],
			config: {
				loop: true,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1707664829021,
		},
		'e-140': {
			id: 'e-140',
			name: '',
			animationType: 'custom',
			eventTypeId: 'PAGE_FINISH',
			action: {
				id: '',
				actionTypeId: 'GENERAL_START_ACTION',
				config: {
					delay: 0,
					easing: '',
					duration: 0,
					actionListId: 'a-16',
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: 'e-139',
				},
			},
			mediaQueries: ['main'],
			target: { appliesTo: 'PAGE', styleBlockIds: [], id: '65a9a021b3cbcaf754c14a66' },
			targets: [],
			config: {
				loop: true,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1707665743739,
		},
	},
	actionLists: {
		a: {
			id: 'a',
			title: 'Nav menu hide',
			actionItemGroups: [
				{
					actionItems: [
						{
							id: 'a-n',
							actionTypeId: 'STYLE_SIZE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
								widthUnit: 'PX',
								heightUnit: 'PX',
								locked: false,
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1706455309710,
		},
		'a-2': {
			id: 'a-2',
			title: 'top testimonials movement',
			actionItemGroups: [
				{
					actionItems: [
						{
							id: 'a-2-n',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 0,
								target: { selector: '.top-row-testimonials', selectorGuids: ['0b0d0695-d2a5-f242-3c63-c33a23c728dd'] },
								xValue: 0,
								xUnit: '%',
								yUnit: 'PX',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-2-n-3',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 0,
								target: {
									selector: '.bottom-row-testimonials',
									selectorGuids: ['5635984d-2cca-4104-7e44-c44b83902f88'],
								},
								xValue: 0,
								xUnit: '%',
								yUnit: 'PX',
								zUnit: 'PX',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-2-n-2',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 100000,
								target: { selector: '.top-row-testimonials', selectorGuids: ['0b0d0695-d2a5-f242-3c63-c33a23c728dd'] },
								xValue: -100,
								xUnit: '%',
								yUnit: 'PX',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-2-n-4',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 100000,
								target: {
									selector: '.bottom-row-testimonials',
									selectorGuids: ['5635984d-2cca-4104-7e44-c44b83902f88'],
								},
								xValue: 100,
								xUnit: '%',
								yUnit: 'PX',
								zUnit: 'PX',
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1706810657636,
		},
		'a-4': {
			id: 'a-4',
			title: 'Timeline Animation',
			continuousParameterGroups: [
				{
					id: 'a-4-p',
					type: 'SCROLL_PROGRESS',
					parameterLabel: 'Scroll',
					continuousActionGroups: [
						{
							keyframe: 57,
							actionItems: [
								{
									id: 'a-4-n',
									actionTypeId: 'STYLE_BACKGROUND_COLOR',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: {
											useEventTarget: 'CHILDREN',
											selector: '.timeline_circle',
											selectorGuids: ['4b57943f-ffba-65fb-5900-68c1379aa5b6'],
										},
										globalSwatchId: '',
										rValue: 65,
										bValue: 65,
										gValue: 65,
										aValue: 1,
									},
								},
								{
									id: 'a-4-n-2',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: {
											useEventTarget: 'CHILDREN',
											selector: '.timeline_right',
											selectorGuids: ['4b57943f-ffba-65fb-5900-68c1379aa5bd'],
										},
										value: 0.15,
										unit: '',
									},
								},
								{
									id: 'a-4-n-3',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: {
											useEventTarget: 'CHILDREN',
											selector: '.timeline_left',
											selectorGuids: ['4b57943f-ffba-65fb-5900-68c1379aa5ca'],
										},
										value: 0.15,
										unit: '',
									},
								},
							],
						},
						{
							keyframe: 62,
							actionItems: [
								{
									id: 'a-4-n-4',
									actionTypeId: 'STYLE_BACKGROUND_COLOR',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: {
											useEventTarget: 'CHILDREN',
											selector: '.timeline_circle',
											selectorGuids: ['4b57943f-ffba-65fb-5900-68c1379aa5b6'],
										},
										globalSwatchId: '',
										rValue: 255,
										bValue: 255,
										gValue: 255,
										aValue: 1,
									},
								},
								{
									id: 'a-4-n-5',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: {
											useEventTarget: 'CHILDREN',
											selector: '.timeline_right',
											selectorGuids: ['4b57943f-ffba-65fb-5900-68c1379aa5bd'],
										},
										value: 1,
										unit: '',
									},
								},
								{
									id: 'a-4-n-6',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: {
											useEventTarget: 'CHILDREN',
											selector: '.timeline_left',
											selectorGuids: ['4b57943f-ffba-65fb-5900-68c1379aa5ca'],
										},
										value: 1,
										unit: '',
									},
								},
							],
						},
					],
				},
			],
			createdOn: 1625115912519,
		},
		'a-7': {
			id: 'a-7',
			title: 'navbar-desktop',
			continuousParameterGroups: [
				{
					id: 'a-7-p',
					type: 'SCROLL_PROGRESS',
					parameterLabel: 'Scroll',
					continuousActionGroups: [
						{
							keyframe: 0,
							actionItems: [
								{
									id: 'a-7-n',
									actionTypeId: 'STYLE_SIZE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|d006efd7-29e4-a999-0afc-42f213be076b' },
										widthValue: 100,
										heightValue: 7.5,
										widthUnit: '%',
										heightUnit: 'rem',
										locked: false,
									},
								},
								{
									id: 'a-7-n-2',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: 0,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
							],
						},
						{
							keyframe: 1,
							actionItems: [
								{
									id: 'a-7-n-3',
									actionTypeId: 'STYLE_SIZE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|d006efd7-29e4-a999-0afc-42f213be076b' },
										widthValue: 100,
										heightValue: 5,
										widthUnit: '%',
										heightUnit: 'rem',
										locked: false,
									},
								},
								{
									id: 'a-7-n-4',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: -55,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
							],
						},
					],
				},
			],
			createdOn: 1706819473740,
		},
		'a-6': {
			id: 'a-6',
			title: 'Navbar tablet',
			continuousParameterGroups: [
				{
					id: 'a-6-p',
					type: 'SCROLL_PROGRESS',
					parameterLabel: 'Scroll',
					continuousActionGroups: [
						{
							keyframe: 0,
							actionItems: [
								{
									id: 'a-6-n',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: 0,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
								{
									id: 'a-6-n-3',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a97' },
										value: 1,
										unit: '',
									},
								},
								{
									id: 'a-6-n-6',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: 0,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
							],
						},
						{
							keyframe: 1,
							actionItems: [
								{
									id: 'a-6-n-4',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a97' },
										value: 0,
										unit: '',
									},
								},
								{
									id: 'a-6-n-2',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: -25,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
								{
									id: 'a-6-n-5',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: -25,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
							],
						},
					],
				},
			],
			createdOn: 1706900675211,
		},
		'a-5': {
			id: 'a-5',
			title: 'show-hide progressbar-desktop',
			continuousParameterGroups: [
				{
					id: 'a-5-p',
					type: 'SCROLL_PROGRESS',
					parameterLabel: 'Scroll',
					continuousActionGroups: [
						{
							keyframe: 0,
							actionItems: [
								{
									id: 'a-5-n-3',
									actionTypeId: 'STYLE_SIZE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|d006efd7-29e4-a999-0afc-42f213be076b' },
										widthValue: 100,
										heightValue: 7.5,
										widthUnit: '%',
										heightUnit: 'rem',
										locked: false,
									},
								},
								{
									id: 'a-5-n-5',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: 0,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
							],
						},
						{
							keyframe: 1,
							actionItems: [
								{
									id: 'a-5-n-4',
									actionTypeId: 'STYLE_SIZE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|d006efd7-29e4-a999-0afc-42f213be076b' },
										widthValue: 100,
										heightValue: 5,
										widthUnit: '%',
										heightUnit: 'rem',
										locked: false,
									},
								},
								{
									id: 'a-5-n-6',
									actionTypeId: 'TRANSFORM_MOVE',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|7a9e76d0-f26a-da40-65cf-9b48b8ce1a95' },
										yValue: -55,
										xUnit: 'PX',
										yUnit: 'px',
										zUnit: 'PX',
									},
								},
							],
						},
						{
							keyframe: 61,
							actionItems: [
								{
									id: 'a-5-n',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|b2413312-1914-796a-ea89-2b52754988da' },
										value: 0,
										unit: '',
									},
								},
							],
						},
						{
							keyframe: 62,
							actionItems: [
								{
									id: 'a-5-n-2',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|b2413312-1914-796a-ea89-2b52754988da' },
										value: 1,
										unit: '',
									},
								},
							],
						},
					],
				},
			],
			createdOn: 1706819473740,
		},
		'a-8': {
			id: 'a-8',
			title: 'Header animation',
			actionItemGroups: [
				{
					actionItems: [
						{
							id: 'a-8-n-2',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|ab18bffb-9bb2-50b7-2c4c-51d5107b4a96' },
								yValue: 30,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-3',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|ab18bffb-9bb2-50b7-2c4c-51d5107b4a96' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-8-n-5',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|163ae6e1-a0d6-67ea-55c4-1faeed5fc16a' },
								yValue: 30,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-7',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|163ae6e1-a0d6-67ea-55c4-1faeed5fc16a' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-8-n-9',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|eff813f3-46ff-eb88-5081-f3b0fafb5a03' },
								yValue: 30,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-11',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|eff813f3-46ff-eb88-5081-f3b0fafb5a03' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-8-n-13',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|2db6e8dc-f062-f607-f8ee-7d4ab02d5c44' },
								yValue: 30,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-16',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|2db6e8dc-f062-f607-f8ee-7d4ab02d5c44' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-8-n-17',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|2f50220b-0650-5b55-e483-4b3c7c64c23b' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-8-n-27',
							actionTypeId: 'TRANSFORM_SCALE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|2f50220b-0650-5b55-e483-4b3c7c64c23b' },
								xValue: 0.5,
								yValue: 0.5,
								locked: true,
							},
						},
						{
							id: 'a-8-n-19',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|e9e39981-b9da-1093-8c04-9b05c96960b4' },
								yValue: 30,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-22',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|27fd10fb-f817-3e3c-d9b1-405e0b04378e' },
								yValue: 30,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-23',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|e9e39981-b9da-1093-8c04-9b05c96960b4' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-8-n-25',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|27fd10fb-f817-3e3c-d9b1-405e0b04378e' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-8-n-30',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|cc01519b-32af-3979-f744-afa6dddf248c' },
								value: 0,
								unit: '',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-8-n',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|ab18bffb-9bb2-50b7-2c4c-51d5107b4a96' },
								yValue: 0,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-4',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|ab18bffb-9bb2-50b7-2c4c-51d5107b4a96' },
								value: 1,
								unit: '',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-8-n-10',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|eff813f3-46ff-eb88-5081-f3b0fafb5a03' },
								yValue: 0,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-12',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|eff813f3-46ff-eb88-5081-f3b0fafb5a03' },
								value: 1,
								unit: '',
							},
						},
						{
							id: 'a-8-n-28',
							actionTypeId: 'TRANSFORM_SCALE',
							config: {
								delay: 0,
								easing: '',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|2f50220b-0650-5b55-e483-4b3c7c64c23b' },
								xValue: 1,
								yValue: 1,
								locked: true,
							},
						},
						{
							id: 'a-8-n-18',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|2f50220b-0650-5b55-e483-4b3c7c64c23b' },
								value: 1,
								unit: '',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-8-n-6',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|163ae6e1-a0d6-67ea-55c4-1faeed5fc16a' },
								yValue: 0,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-8',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|163ae6e1-a0d6-67ea-55c4-1faeed5fc16a' },
								value: 1,
								unit: '',
							},
						},
						{
							id: 'a-8-n-24',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|e9e39981-b9da-1093-8c04-9b05c96960b4' },
								value: 1,
								unit: '',
							},
						},
						{
							id: 'a-8-n-20',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|e9e39981-b9da-1093-8c04-9b05c96960b4' },
								yValue: 0,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-8-n-21',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|27fd10fb-f817-3e3c-d9b1-405e0b04378e' },
								yValue: 0,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-26',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|27fd10fb-f817-3e3c-d9b1-405e0b04378e' },
								value: 1,
								unit: '',
							},
						},
						{
							id: 'a-8-n-14',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|2db6e8dc-f062-f607-f8ee-7d4ab02d5c44' },
								yValue: 0,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-8-n-15',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: 'inQuart',
								duration: 300,
								target: { id: '65a9a021b3cbcaf754c14a66|2db6e8dc-f062-f607-f8ee-7d4ab02d5c44' },
								value: 1,
								unit: '',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-8-n-29',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|cc01519b-32af-3979-f744-afa6dddf248c' },
								value: 1,
								unit: '',
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: true,
			createdOn: 1707058028807,
		},
		'a-10': {
			id: 'a-10',
			title: 'Tablet progressbar show/hide',
			continuousParameterGroups: [
				{
					id: 'a-10-p',
					type: 'SCROLL_PROGRESS',
					parameterLabel: 'Scroll',
					continuousActionGroups: [
						{
							keyframe: 54,
							actionItems: [
								{
									id: 'a-10-n',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|b2413312-1914-796a-ea89-2b52754988da' },
										value: 0,
										unit: '',
									},
								},
							],
						},
						{
							keyframe: 55,
							actionItems: [
								{
									id: 'a-10-n-3',
									actionTypeId: 'STYLE_OPACITY',
									config: {
										delay: 0,
										easing: '',
										duration: 500,
										target: { id: '65a9a021b3cbcaf754c14a66|b2413312-1914-796a-ea89-2b52754988da' },
										value: 1,
										unit: '',
									},
								},
							],
						},
					],
				},
			],
			createdOn: 1707063531399,
		},
		'a-12': {
			id: 'a-12',
			title: 'header bobbles animation',
			actionItemGroups: [
				{
					actionItems: [
						{
							id: 'a-12-n',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 0,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								xValue: 0,
								yValue: 0,
								xUnit: '%',
								yUnit: '%',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-12-n-4',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 0,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								value: 0,
								unit: '',
							},
						},
						{
							id: 'a-12-n-7',
							actionTypeId: 'STYLE_SIZE',
							config: {
								delay: 0,
								easing: '',
								duration: 0,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								widthValue: 20,
								heightValue: 20,
								widthUnit: 'px',
								heightUnit: 'px',
								locked: false,
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-12-n-5',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 5000,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								value: 0.58,
								unit: '',
							},
						},
						{
							id: 'a-12-n-6',
							actionTypeId: 'STYLE_SIZE',
							config: {
								delay: 0,
								easing: '',
								duration: 3000,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								widthValue: 100,
								heightValue: 100,
								widthUnit: 'px',
								heightUnit: 'px',
								locked: false,
							},
						},
						{
							id: 'a-12-n-2',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 5000,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								xValue: -200,
								yValue: -80,
								xUnit: '%',
								yUnit: '%',
								zUnit: 'PX',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-12-n-9',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 10000,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								xValue: -700,
								yValue: -200,
								xUnit: '%',
								yUnit: '%',
								zUnit: 'PX',
							},
						},
						{
							id: 'a-12-n-8',
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: '',
								duration: 10000,
								target: { id: '65a9a021b3cbcaf754c14a66|6f9935c6-02b1-5441-edac-31c26016ff1d' },
								value: 0,
								unit: '',
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1707249234557,
		},
		'a-14': {
			id: 'a-14',
			title: 'Chevron-down-animation',
			actionItemGroups: [
				{
					actionItems: [
						{
							id: 'a-14-n-3',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 500,
								target: { id: '65a9a021b3cbcaf754c14a66|cc01519b-32af-3979-f744-afa6dddf248c' },
								xValue: -50,
								yValue: 0,
								xUnit: '%',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-14-n-4',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 1000,
								target: { id: '65a9a021b3cbcaf754c14a66|cc01519b-32af-3979-f744-afa6dddf248c' },
								yValue: -20,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: 'a-14-n-6',
							actionTypeId: 'TRANSFORM_MOVE',
							config: {
								delay: 0,
								easing: '',
								duration: 1000,
								target: { id: '65a9a021b3cbcaf754c14a66|cc01519b-32af-3979-f744-afa6dddf248c' },
								yValue: 0,
								xUnit: 'PX',
								yUnit: 'px',
								zUnit: 'PX',
							},
						},
					],
				},
			],
			createdOn: 1707663331841,
			useFirstGroupAsInitialState: true,
		},
		// 'a-15': {
		// 	id: 'a-15',
		// 	title: 'lewy i środkowy bombel animacja',
		// 	actionItemGroups: [
		// 		{
		// 			actionItems: [
		// 				{
		// 					id: 'a-15-n',
		// 					actionTypeId: 'TRANSFORM_MOVE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 0,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|1c0af2cc-b398-d230-d2ea-bd79a851d9ac' },
		// 						xValue: null,
		// 						yValue: 0,
		// 						xUnit: 'px',
		// 						yUnit: 'px',
		// 						zUnit: 'PX',
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-4',
		// 					actionTypeId: 'TRANSFORM_MOVE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 0,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|c2a9dd65-e420-dd14-ac39-54b140446b7b' },
		// 						xValue: null,
		// 						yValue: 0,
		// 						xUnit: 'px',
		// 						yUnit: 'px',
		// 						zUnit: 'PX',
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-11',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 500,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|ee3c7ea5-2ff5-6a02-171f-66de03c30c68' },
		// 						xValue: 1,
		// 						yValue: 1,
		// 						locked: true,
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			actionItems: [
		// 				{
		// 					id: 'a-15-n-2',
		// 					actionTypeId: 'TRANSFORM_MOVE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|1c0af2cc-b398-d230-d2ea-bd79a851d9ac' },
		// 						xValue: null,
		// 						yValue: -30,
		// 						xUnit: 'px',
		// 						yUnit: 'px',
		// 						zUnit: 'PX',
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-5',
		// 					actionTypeId: 'TRANSFORM_MOVE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|c2a9dd65-e420-dd14-ac39-54b140446b7b' },
		// 						xValue: null,
		// 						yValue: 30,
		// 						xUnit: 'px',
		// 						yUnit: 'px',
		// 						zUnit: 'PX',
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-7',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|c2a9dd65-e420-dd14-ac39-54b140446b7b' },
		// 						xValue: 1.3,
		// 						yValue: 1.3,
		// 						locked: true,
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-9',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|1c0af2cc-b398-d230-d2ea-bd79a851d9ac' },
		// 						xValue: 1.3,
		// 						yValue: 1.3,
		// 						locked: true,
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-12',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 5000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|ee3c7ea5-2ff5-6a02-171f-66de03c30c68' },
		// 						xValue: 0.8,
		// 						yValue: 0.8,
		// 						locked: true,
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			actionItems: [
		// 				{
		// 					id: 'a-15-n-6',
		// 					actionTypeId: 'TRANSFORM_MOVE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|c2a9dd65-e420-dd14-ac39-54b140446b7b' },
		// 						xValue: null,
		// 						yValue: 0,
		// 						xUnit: 'px',
		// 						yUnit: 'px',
		// 						zUnit: 'PX',
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-8',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|c2a9dd65-e420-dd14-ac39-54b140446b7b' },
		// 						xValue: 1,
		// 						yValue: 1,
		// 						locked: true,
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-3',
		// 					actionTypeId: 'TRANSFORM_MOVE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|1c0af2cc-b398-d230-d2ea-bd79a851d9ac' },
		// 						xValue: null,
		// 						yValue: 0,
		// 						xUnit: 'px',
		// 						yUnit: 'px',
		// 						zUnit: 'PX',
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-10',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 3000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|1c0af2cc-b398-d230-d2ea-bd79a851d9ac' },
		// 						xValue: 1,
		// 						yValue: 1,
		// 						locked: true,
		// 					},
		// 				},
		// 				{
		// 					id: 'a-15-n-13',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 5000,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|ee3c7ea5-2ff5-6a02-171f-66de03c30c68' },
		// 						xValue: 1,
		// 						yValue: 1,
		// 						locked: true,
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// 	createdOn: 1707664852761,
		// 	useFirstGroupAsInitialState: false,
		// },
		// 'a-16': {
		// 	id: 'a-16',
		// 	title: 'prawy bombel',
		// 	actionItemGroups: [
		// 		{
		// 			actionItems: [
		// 				{
		// 					id: 'a-16-n',
		// 					actionTypeId: 'TRANSFORM_MOVE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 0,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|c485793c-2baf-c49e-4e15-0174822a5883' },
		// 						yValue: 0,
		// 						xUnit: 'PX',
		// 						yUnit: 'px',
		// 						zUnit: 'PX',
		// 					},
		// 				},
		// 				{
		// 					id: 'a-16-n-4',
		// 					actionTypeId: 'TRANSFORM_SCALE',
		// 					config: {
		// 						delay: 0,
		// 						easing: '',
		// 						duration: 0,
		// 						target: { id: '65a9a021b3cbcaf754c14a66|c485793c-2baf-c49e-4e15-0174822a5883' },
		// 						xValue: 1,
		// 						yValue: 1,
		// 						locked: true,
		// 					},
		// 				},
		// 			],
		// 		},
				// {
				// 	actionItems: [
				// 		{
				// 			id: 'a-16-n-2',
				// 			actionTypeId: 'TRANSFORM_MOVE',
				// 			config: {
				// 				delay: 0,
				// 				easing: '',
				// 				duration: 5000,
				// 				target: { id: '65a9a021b3cbcaf754c14a66|c485793c-2baf-c49e-4e15-0174822a5883' },
				// 				yValue: 100,
				// 				xUnit: 'PX',
				// 				yUnit: 'px',
				// 				zUnit: 'PX',
				// 			},
				// 		},
				// 		{
				// 			id: 'a-16-n-5',
				// 			actionTypeId: 'TRANSFORM_SCALE',
				// 			config: {
				// 				delay: 0,
				// 				easing: '',
				// 				duration: 5000,
				// 				target: { id: '65a9a021b3cbcaf754c14a66|c485793c-2baf-c49e-4e15-0174822a5883' },
				// 				xValue: 0.7,
				// 				yValue: 0.7,
				// 				locked: true,
				// 			},
				// 		},
				// 	],
				// },
				// {
				// 	actionItems: [
				// 		{
				// 			id: 'a-16-n-3',
				// 			actionTypeId: 'TRANSFORM_MOVE',
				// 			config: {
				// 				delay: 0,
				// 				easing: '',
				// 				duration: 5000,
				// 				target: { id: '65a9a021b3cbcaf754c14a66|c485793c-2baf-c49e-4e15-0174822a5883' },
				// 				yValue: 0,
				// 				xUnit: 'PX',
				// 				yUnit: 'px',
				// 				zUnit: 'PX',
				// 			},
				// 		},
				// 		{
				// 			id: 'a-16-n-6',
				// 			actionTypeId: 'TRANSFORM_SCALE',
				// 			config: {
				// 				delay: 0,
				// 				easing: '',
				// 				duration: 5000,
				// 				target: { id: '65a9a021b3cbcaf754c14a66|c485793c-2baf-c49e-4e15-0174822a5883' },
				// 				xValue: 1,
				// 				yValue: 1,
				// 				locked: true,
				// 			},
				// 		},
				// 	],
				// },
		// 	],
		// 	createdOn: 1707665749645,
		// 	useFirstGroupAsInitialState: false,
		// },
		growIn: {
			id: 'growIn',
			useFirstGroupAsInitialState: true,
			actionItemGroups: [
				{
					actionItems: [
						{
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								duration: 0,
								target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
								value: 0,
							},
						},
					],
				},
				{
					actionItems: [
						{
							actionTypeId: 'TRANSFORM_SCALE',
							config: {
								delay: 0,
								duration: 0,
								target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
								xValue: 0.7500000000000001,
								yValue: 0.7500000000000001,
							},
						},
					],
				},
				{
					actionItems: [
						{
							actionTypeId: 'TRANSFORM_SCALE',
							config: {
								delay: 0,
								easing: 'outQuart',
								duration: 1000,
								target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
								xValue: 1,
								yValue: 1,
							},
						},
						{
							actionTypeId: 'STYLE_OPACITY',
							config: {
								delay: 0,
								easing: 'outQuart',
								duration: 1000,
								target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
								value: 1,
							},
						},
					],
				},
			],
		},
	},
	site: {
		mediaQueries: [
			{ key: 'main', min: 992, max: 10000 },
			{ key: 'medium', min: 768, max: 991 },
			{ key: 'small', min: 480, max: 767 },
			{ key: 'tiny', min: 0, max: 479 },
		],
	},
})

