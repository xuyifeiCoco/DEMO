/*!
 * (c): 0.0.1
 * @license Author: duanliaokuo
 * (t) 2018-9-18
 */
webpackJsonp([3],{

/***/ "+Y/g":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("rQ5r");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("MTIv")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/px2rem-loader/index.js??ref--2-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-3!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/px2rem-loader/index.js??ref--2-2!../../../node_modules/postcss-loader/lib/index.js??ref--2-3!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "0to/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.install = function (Vue, options) {
  Vue.prototype.appSendLog = function (viewname, clickname, data) {
    var detail = {
      view_name: viewname,
      click_name: clickname
    };

    if (data) detail.ext1 = data;

    window.meipian.traceGrowth({
      event: 'view_click',
      data: detail
    });
  };
};

/***/ }),

/***/ "14OI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.video {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: 999;\n  object-fit: fill;\n}", ""]);

// exports


/***/ }),

/***/ "1Wr1":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "1lyH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("fdka");

/***/ }),

/***/ "5d+6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAKaElEQVRoQ9VaeVhTxxafuUkgQRAEBDEiYSeAQETfc6lKa9Ui7WtVQCAIavvcBbeKokXxuaCgCCp1F1kiLtXaV4t1qT79XJ5PZQ0gIIsaUAQXtgBJ7vQb8NKw5ibwtvtHvpt7z5w5v5k5M+f8zoWgHy4nJx9DJtQaBUjSGQCCRyDERRAMAhCwW9Uj0AQReEtCKAGALAMEkStHLQ/F4rNv+to91FSBu5WPvoKt5YUg+gySgA8IoJ4uEiBEgHyI4GVGU8ulRyVn32tii3qdAgDc7fyN5Sw4ByIwE0DA0aTTLm0QaAII/gRlLScyis++VkcnbQA+wIdRzGcJAUTfIAh1lDuBAAJnF2vOmLEuerZ2wzjmw4ewBxnqsthsbQaWa2pqVrypqZe9eP6yqajwhfT+vey63OynUgRQB1shQo0AwaP6phWimzdvyukAoQXA3SlouALJdwAI7JWV8nhDtf2EU4wnT/6ToUwuJzMzCuvyxaWNJSWSpgpJtayhoVGB5QcM0GEM5RqzrKy4bL6TpY6bwE6PxWQS168/eJOWerW6rKyiuYOxJCxUMNHGnBxRiSoQKgEIHPwnIQJuARAMoJRZWJhpha7yG+o+mq9/Jf1+9Y/n//FGLH4qVdWZ8nsnJ2vOVzMnGU71HGP86F/57+P2pFWUl1e2UDJ4NhDBiMjMTbnZm95eAbg6B8yEJFgHICCwEgbBgEuWe5t6z55seuHcjarjhy9W1da3jbKm10BdHcb8BV+azPD+2OTc6euvEvade6UgFW1rCwESESAqK1d0vif9PQIQOAq9EUTrqIamJkas6L0hlgoFiTasSyirkLyWaWp0d+2GcgeztkUt4TEYBPx2RXzpq6qadv0QwaiMvNRz3bXrFoCAHzARQRBDjbyt3XD2/u/X2lxOv18Tt+dUJUn2adB7xE0QDBCywtfM02u80bLFu4qLCp81UTMBEViTkS+61blxFwAu9nMsGQz5SWqnsbUZpn3w+Ab7Q9+fl5w5dbWmP0e9J12zvD8xXBLiM2zR/G1PiopftDo49gmFghmc/SS5tOMOqPTPw8OD+e4VNwkQyA4/NjMzZiWmbLY/evhixdnTVzU+NQ0HDWQGz/988J3bWbUPHogb6AyCz+wpht8s+JI7N3BzQWVlddtyImGhgakkSHmL7TADAn5AECJACOWwJ1IibDMeF9XFxqRU0um0JxlfvymG6zfOtSQVJFq2aFfhvXs59XT0rVwdYCZwt9ebF7iliHJsSIL4jHxRUvtuRd0IbHwGAy3mD9TSWRriO2TUaL7e18Fbi/q65v2F04zWrg/i4b6k0mbFmhVxxXfvZKkEgX3i2MmNto8fFtTtizv9klpKoEU+izqx22fAjS9cCwjki4XwPp90KpIfOPu7/OfPX7XvzXRGrTsZagaod3K5Aq0OiS26dSujTpVOc3NTreS0Lfy5ws35ZWVt5wQC4GyWWLSzFRD+cXObawCaZZcAgbTx/917V/Kelb9sjos91aelQxnnFzDNKCw8iPfzT7df6+vrMiZMEhgqFAoUtnp/8fVrD2pVgQhd6W9mwRvCXhUa2+bAJGwG2iyvzMzEd20AHIUBAKJV+N7SkqudmLrJ4YupK3L7ekh1BhAbIypPSrxUfeZ8lIOtnfmAlhYZGRF+sOTXy/d7jUTxYff3K3ud5wojC0pLJW1hB4J7MvNSRRSAZAARHz8PWx/MZTIZYNvfjktUjQzd99QMiJIvV0bvTK5gabHgsRMbbUe42uhhHUsX7nqiyifCN87jkogEUdtOttqFAMjLEouCIE5GWCTrVxzP46jyym/7R4QsiynOzytVK7bpDQwFICUpvXL3rpQKLMthaxMJR9ZZuwnsBibsO/v8yKEfq3rTwXe05OxLWGMzxWNZTmsUSwIEZbLp0NVZOBUitB03dna25uzaE2I1fWqomO7o0pHrDgBuh3eZMWOddHOznkpr6xtUHu+/XIlzCluzryQnu7h1cCGC30FXR/9VEMIA/OCvC2eaWFqZscPDDjyjYxhdmZ4A0G1PyW3fuXR4aUll05FD51tnCyEkgq6OwngI0Tj8IHpPKC/rcWF9Skp6tbrK1V1CmugPDPQ0dnO3012zMq6sDQC8C90cAy4ACMzxg7Rz2+3jY09LVDmUup331wyMG++iu3yFH9ffJ/xJ204EnkOBo/8t6vRNvxbvvHTBzqKSkg9blbqW9iDfXwCsrLjaBw6H2Xp+GpLb5gOoEbo5BTyk+r1555Dr7BnhecqxeH9g6C8AJiaDmGcuRDl5jF+YRdnVBYDvjHXiqqq3tBJquuD+XQAQArJ+XUI4q7J3sODoDuAQ9fVSMi+3VIpnc5rnWP2o6GU2yucAXfDKcl2XEHjfjROnSe7eyVYZKSor/uIvEwxm+X4y2Np6mI6ung6Teldb2yD/7drDN3K5HHn7TjbtKwDsxCEr/bh+3kpO3JdtVIfDJnbELLOYOElgSGdEk06mV8RGa55bdLuN9uUgO3hkvfWfxzob0DEey/QVwNYdi4eXl73qdJAphRIjXGw4O2OW0wolvD7/yGBr1GJrusZjOSqYU6eNsmznUAKQIELjYC5m7wre5E9HG6ljTFJieoWm6Snf0ZK9L2GNbZdgDhvg5ihsD6fXbQjmMgjV4fSBg2utxn3kOkgdAOHfHihOT7+rEQvdOZwGCOZn5qXO0TihUc5z6YDIzXlaFyyMLNQkv+4+oQGxmXmiVI1TSiaDAQ8dC7ceOcpBXxWAstJKaciS6GJN82uVKSU2wNUpIAwC4IPvcVJ/UrSZP8cvotekHsfzGyLmDfP0GmfM4bRR6cpXXV2j/OeLt1/HxaZVNje3dOTSVaH+8P6PpD6ygGKxuyT1WLYzrbI8dPaQkaMcaNEqPJ6Z1oSJgoFc88HaOjocoqb6vfzZs5dN9+/m1LeTUjQNVhbDGeLx5AjbjEcFdfF7VdAqrSA6EVuJqZtaOZnY3aJ+YSfUxYCJLTyIc4WRqoktrLyVWqwaepIqZLRSi6mbHY4euijpC7WoruFYHlOLCxZ+xQ0SbvqDWkTgiYFJRXCP1CJu+KEak0wVNP4b5O7MWR8bLg317ULuEpAV+Eic1CHd/Z+k1z/zGmu0fHGMZvQ6Nd29FTgiwg+Wa7ol9rSc8G6zZfsii34pcFCd/F+XmCgQbs6BHoAkI5WLfHjbxHH5yFEOA69e/mf1+R9u1OTnlbZVU2heOLaZMdPDCBf5Hj8sqI2PTZNQ5C1WgfNdEsJNWWLRjd5UqqxSKjl2r2XWFpmMzHj8pK5AXNZYUippqqyokdV/KADq6uowzIYasawsuWwHJ56OYKS9nhaL9Z8ps1Lo3d0XsOTSBlyh/5pisal3nQvdwy2GcAwG6TI5HHbr6SyVNineva2XPyt/Ke2t0I1ZZwTBMSZnQPKjR4dpFRFpzYDyFLq4zDGBcnkgBHBGf39qQLKIxOzs5F450s7LSW0A7b6BawotsukAAE+AkIMmH3sACAsAAOlAi/UL5vppuk8HMY0BKGtR/tyGANASAcQFABoAQH1TgRoBQO8ggBISoNL+/Nzmd9gYqHMGwQqcAAAAAElFTkSuQmCC"

/***/ }),

/***/ "5wy4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (window, document) {
    function createHttpRequest() {
        if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
    }
    function AliLogTracker(host, project, logstore) {
        this.uri_ = 'http://' + project + '.' + host + '/logstores/' + logstore + '/track?APIVersion=0.6.0';
        this.params_ = new Array();
        this.httpRequest_ = createHttpRequest();
    }
    AliLogTracker.prototype = {
        push: function push(key, value) {
            if (!key || !value) {
                return;
            }
            this.params_.push(key);
            this.params_.push(value);
        },
        logger: function logger() {
            var url = this.uri_;
            var k = 0;
            while (this.params_.length > 0) {
                if (k % 2 == 0) {
                    url += '&' + encodeURIComponent(this.params_.shift());
                } else {
                    url += '=' + encodeURIComponent(this.params_.shift());
                }
                ++k;
            }
            try {
                this.httpRequest_.open("GET", url, false);
                this.httpRequest_.send(null);
            } catch (ex) {
                if (window && window.console && typeof window.console.log === 'function') {
                    console.log("Failed to log to ali log service because of this exception:\n" + ex);
                    console.log("Failed log data:", url);
                }
            }
        }
    };
    window.Tracker = AliLogTracker;
})(window, document);

/***/ }),

/***/ "BIvu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video_poster.76c5f42.jpg";

/***/ }),

/***/ "J0jp":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("14OI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("ee3b4b2e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "JU1R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var home = function home(r) {
  return __webpack_require__.e/* require.ensure */(1).then((function () {
    return r(__webpack_require__("nU8l"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var detail = function detail(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__("OtD6"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

exports.default = [{
  path: '',
  component: home
}, {
  path: '/home',
  component: home
}, {
  path: '/detail',
  component: detail
}];

/***/ }),

/***/ "OMN4":
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "PIhb":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  height: 100%;\n}\nhtml body {\n  width: 10rem;\n  margin: 0 auto;\n}\n#app {\n  height: 100%;\n}\na {\n  text-decoration: none;\n}\np {\n  margin: 0;\n  padding: 0;\n}\n[v-cloak] {\n  display: none;\n}\n.flex-center {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.music {\n  position: absolute;\n  top: 0.506667rem;\n  right: 0.346667rem;\n  z-index: 11;\n  background: url(" + escape(__webpack_require__("1Wr1")) + ") 0 0 no-repeat;\n  background-size: 100% auto;\n  height: 0.64rem;\n  width: 0.64rem;\n}\n.music .audio {\n  display: none;\n}\n.music.play {\n  background: url(" + escape(__webpack_require__("5d+6")) + ") 0 0 no-repeat;\n  background-size: 100% auto;\n}", ""]);

// exports


/***/ }),

/***/ "PPen":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("PIhb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("464abf33", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "bT3/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  host: 'cn-hangzhou.log.aliyuncs.com', //正式cn-beijing.log.aliyuncs.com       测试cn-hangzhou.log.aliyuncs.com
  project: 'h5-activity-test', //正式h5-activity      测试h5-activity-test
  logstore: 'check_in' //正式check_in       测试check_in
};

/***/ }),

/***/ "fdka":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("+Y/g");

/***/ }),

/***/ "fils":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/video/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var video = ({
  name: '',
  props: {
    url: String,
    poster: String
  },
  mounted: function mounted() {
    var video_player = document.getElementById("video_player");
    video_player.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
      video_player.play();
    }, false);

    video_player.addEventListener("touchstart", function () {
      video_player.play();
    }, false);

    var _this = this;
    if (video_player.ended) {
      _this.$emit('videoPlayEnd');
    }
    video_player.addEventListener("ended", function () {
      _this.$emit('videoPlayEnd');
      console.log("结束123");
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ace09d44","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/video/index.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "video",
    {
      staticClass: "video",
      attrs: {
        autoplay: "",
        preload: "auto",
        poster: _vm.poster,
        id: "video_player",
        "x-webkit-airplay": "allow",
        "webkit-playsinline": "true",
        "x5-video-player-type": "h5",
        "x5-video-player-fullscreen": "true",
        playsinline: "true",
        width: "100%",
        height: "100%",
        muted: ""
      },
      domProps: { muted: true }
    },
    [_c("source", { attrs: { src: _vm.url, type: "video/mp4" } })]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ace09d44", { render: render, staticRenderFns: staticRenderFns })
  }
}
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/components/video/index.vue
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("J0jp")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  video,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/video/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ace09d44", Component.options)
  } else {
    hotAPI.reload("data-v-ace09d44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_video = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var App = ({
  name: 'App',
  components: {
    Video: components_video
  },
  data: function data() {
    return {
      isPlayAudio: false,
      isShowVideo: false,
      hasPlay: false,
      videoUrl: __webpack_require__("wdGW"), //'https://ss2.meipian.me/promo/mid_autumn/video/mid_autumn.mp4',
      videoPoster: __webpack_require__("BIvu")
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var app = document.getElementById('app');
    var _this = this;
    app.addEventListener("touchstart", function () {
      if (!_this.hasPlay) {
        var audioPlayer = document.querySelector('.audio');
        _this.isPlayAudio = true;
        audioPlayer.play();
      }
      _this.hasPlay = true;
    });

    // localStorage.removeItem("playVideo")
    // if(localStorage.hasOwnProperty('playVideo')){
    //   this.playAudio()
    // } else {
    //   this.isShowVideo = false
    //   // localStorage.setItem("playVideo", true)
    // }
  },

  methods: {
    videoPlayEnd: function videoPlayEnd() {
      this.isShowVideo = false;
    },
    playAudio: function playAudio() {
      var audioPlayer = document.querySelector('.audio');
      if (audioPlayer.paused) {
        this.isPlayAudio = true;
        audioPlayer.play();
      } else {
        this.isPlayAudio = false;
        audioPlayer.pause();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-992092a6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/App.vue
var App_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "div",
        {
          staticClass: "music",
          class: _vm.isPlayAudio ? "play" : "",
          on: { click: _vm.playAudio }
        },
        [
          _c("audio", {
            staticClass: "audio",
            attrs: {
              src:
                "http://dl.stream.qqmusic.qq.com/C100003iUn5P0JDQd7.m4a?fromtag=38",
              loop: ""
            }
          })
        ]
      ),
      _vm._v(" "),
      [_c("router-view")],
      _vm._v(" "),
      _vm.isShowVideo
        ? _c("Video", {
            attrs: { url: _vm.videoUrl, poster: _vm.videoPoster },
            on: { videoPlayEnd: _vm.videoPlayEnd }
          })
        : _vm._e()
    ],
    2
  )
}
var App_staticRenderFns = []
App_render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-992092a6", { render: App_render, staticRenderFns: App_staticRenderFns })
  }
}
// CONCATENATED MODULE: ./src/pages/App.vue
var App_disposed = false
function App_injectStyle (context) {
  if (App_disposed) return
  __webpack_require__("PPen")
}
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null

var App_Component = Object(component_normalizer["a" /* default */])(
  App,
  App_render,
  App_staticRenderFns,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)
App_Component.options.__file = "src/pages/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-992092a6", App_Component.options)
  } else {
    hotAPI.reload("data-v-992092a6", App_Component.options)
  }
  module.hot.dispose(function (data) {
    App_disposed = true
  })
})()}

/* harmony default export */ var pages_App = __webpack_exports__["default"] = (App_Component.exports);


/***/ }),

/***/ "lVK7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

__webpack_require__("1lyH");

var _App = __webpack_require__("fils");

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__("JU1R");

var _router2 = _interopRequireDefault(_router);

var _vueRouter = __webpack_require__("/ocq");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _appSendLog = __webpack_require__("0to/");

var _appSendLog2 = _interopRequireDefault(_appSendLog);

var _sendLoger = __webpack_require__("mJt9");

var _sendLoger2 = _interopRequireDefault(_sendLoger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);
Vue.use(_appSendLog2.default);
Vue.use(_sendLoger2.default);

var router = new _vueRouter2.default({
  routes: _router2.default
});
if (true) {
  window.Hook.VConsole();
}
// window.NODE_ENV = NODE_ENV
window.app = new Vue((0, _extends3.default)({
  router: router
}, _App2.default)).$mount('#app');

/***/ }),

/***/ "mJt9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("5wy4");

var _config = __webpack_require__("bT3/");

function RerurnDevice() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return "android";
  }
  if (isiOS) {
    return "ios";
  }
}
exports.install = function (Vue, options) {
  Vue.prototype.sendLoger = function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$event_type = _ref.event_type,
        event_type = _ref$event_type === undefined ? 'click' : _ref$event_type,
        _ref$event_src = _ref.event_src,
        event_src = _ref$event_src === undefined ? '' : _ref$event_src,
        _ref$referer = _ref.referer,
        referer = _ref$referer === undefined ? '' : _ref$referer,
        _ref$platform = _ref.platform,
        platform = _ref$platform === undefined ? 'wechat' : _ref$platform,
        _ref$unionid = _ref.unionid,
        unionid = _ref$unionid === undefined ? '' : _ref$unionid,
        _ref$openid = _ref.openid,
        openid = _ref$openid === undefined ? '' : _ref$openid,
        _ref$user_id = _ref.user_id,
        user_id = _ref$user_id === undefined ? "" : _ref$user_id;

    var logger = new window.Tracker(_config.host, _config.project, _config.logstore);
    var os_type = RerurnDevice();
    var ref = referer || window.location.href;
    logger.push('event_type', event_type);
    logger.push('event_src', event_src);
    logger.push('referer', ref);
    logger.push('platform', platform);
    logger.push('unionid', unionid);
    logger.push('openid', openid);
    logger.push('user_id', user_id);
    logger.push('os_type', os_type);
    logger.logger();
  };
};

/***/ }),

/***/ "rQ5r":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 0.533333rem;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 0.013333rem dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -0.026667rem;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails,\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\nhtml {\n  font-family: 'SimHei', 'Helvetica,sans-serif', 'Helvetica';\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nhtml {\n  font-size: 625%;\n}\n\nbody {\n  font-size: 0.16rem;\n}\n\n@media screen and (max-width: 360px) {\n  html {\n    font-size: 300%;\n  }\n}\n\n@media screen and (min-width: 361px) and (max-width: 480px) {\n  html {\n    font-size: 340%;\n  }\n}\n\n@media screen and (min-width: 481px) and (max-width: 560px) {\n  html {\n    font-size: 500%;\n  }\n}\n\n@media screen and (min-width: 561px) and (max-width: 750px) {\n  html {\n    font-size: 625%;\n  }\n}\n\n@media screen and (min-width: 751px) and (max-width: 960px) {\n  html {\n    font-size: 750%;\n  }\n}\n\n@media screen and (min-width: 961px) {\n  html {\n    font-size: 250%;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "wdGW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/mid_autumn.84410de.mp4";

/***/ })

},["lVK7"]);