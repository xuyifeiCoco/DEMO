/*!
 * (c): 0.0.1
 * @license Author: duanliaokuo
 * (t) 2018-9-18
 */
webpackJsonp([0],{

/***/ "+HEu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/change.96a8f4d.png";

/***/ }),

/***/ "+tPU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xGkn");
var global = __webpack_require__("7KvD");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var TO_STRING_TAG = __webpack_require__("dSzd")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "//Fk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("U5ju"), __esModule: true };

/***/ }),

/***/ "/bQp":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "11Pc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title-4.13a9f64.png";

/***/ }),

/***/ "2KxR":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "2nZ/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/task-rabbit.d02a07d.png";

/***/ }),

/***/ "3ZqR":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "3fs2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "4mcu":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "4xQb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.hand img {\n  height: 2.666667rem;\n  width: 2.666667rem;\n}\n.lantern-animation img,\n.change img {\n  height: 5.066667rem;\n  width: 5.066667rem;\n}", ""]);

// exports


/***/ }),

/***/ "73pJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/complete-3.3237ac5.png";

/***/ }),

/***/ "7Z5C":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/complete-1.90ccfca.png";

/***/ }),

/***/ "82Mu":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var macrotask = __webpack_require__("L42u").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("R9M2")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");


/***/ }),

/***/ "94VQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Yobk");
var descriptor = __webpack_require__("X8DO");
var setToStringTag = __webpack_require__("e6n0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("hJx8")(IteratorPrototype, __webpack_require__("dSzd")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "B5b9":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-5ee9087b] {\n  font-family: PingFang-SC-Medium;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background: url(" + escape(__webpack_require__("XGny")) + ") 0 0 no-repeat;\n  background-size: 100% auto;\n  background-color: #221644;\n  overflow: hidden;\n}\n.content .fly[data-v-5ee9087b] {\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n  -webkit-transition: all 2s;\n  transition: all 2s;\n  background: url(" + escape(__webpack_require__("+HEu")) + ") 0 0 no-repeat;\n  background-size: 100% auto;\n}\n.content .fly.step-5[data-v-5ee9087b] {\n  z-index: 9;\n}\n.content .step[data-v-5ee9087b] {\n  position: absolute;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step.is-fly-end[data-v-5ee9087b] {\n  z-index: 9;\n}\n.content .step.active .text[data-v-5ee9087b] {\n  top: 3.866667rem !important;\n}\n.content .step.active .text.open[data-v-5ee9087b] {\n  top: 3.973333rem !important;\n}\n.content .step.active .lantern[data-v-5ee9087b] {\n  display: none;\n}\n.content .step.active .cloud[data-v-5ee9087b] {\n  background-image: none;\n  z-index: 10;\n}\n.content .step .cloud-fly[data-v-5ee9087b] {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n  opacity: 0;\n  background-image: url(" + escape(__webpack_require__("TKGf")) + ") !important;\n}\n.content .step.is-fly-end .cloud-fly[data-v-5ee9087b] {\n  opacity: 1;\n}\n.content .step.is-fly-end .lantern[data-v-5ee9087b] {\n  top: 1.333333rem;\n  opacity: 0;\n}\n.content .step.is-fly .lantern[data-v-5ee9087b],\n.content .step.is-fly .cloud[data-v-5ee9087b] {\n  background-image: none !important;\n}\n.content .step.has-complete .cloud[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("TKGf")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step.has-complete .lantern[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("JrMv")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .hand[data-v-5ee9087b] {\n  position: absolute;\n  z-index: 10;\n}\n.content .lantern-animation[data-v-5ee9087b],\n.content .change[data-v-5ee9087b] {\n  position: absolute;\n}\n.content .change.step-5[data-v-5ee9087b] {\n  z-index: 9;\n}\n.content .step-5[data-v-5ee9087b] {\n  left: 4.933333rem;\n  top: 0;\n}\n.content .step-5 .moon[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("KjJY")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step-5 .rabbit[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("HG0w")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step-5 .redpack[data-v-5ee9087b] {\n  top: 0;\n  left: 0;\n  background: url(" + escape(__webpack_require__("Geq/")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step-5 .cloud[data-v-5ee9087b] {\n  z-index: 10;\n  background: url(" + escape(__webpack_require__("pypw")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n  font-size: 0.32rem;\n  font-family: Adobe Heiti Std R;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.content .step-5 .cloud .text[data-v-5ee9087b] {\n  position: absolute;\n  top: 3.973333rem;\n  z-index: 2;\n  text-align: center;\n}\n.content .step-5.active .redpack[data-v-5ee9087b] {\n  -webkit-animation: redpack-fly 1.5s linear;\n  animation: redpack-fly 1.5s linear;\n}\n.content .step-4[data-v-5ee9087b] {\n  top: 1.72rem;\n  left: 0;\n}\n.content .step-4 .lantern[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("Rhku")) + ") 0 0 no-repeat;\n  top: 0;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step-4 .cloud[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("pypw")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n  font-size: 0.32rem;\n  font-family: Adobe Heiti Std R;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.content .step-4 .cloud .text[data-v-5ee9087b] {\n  position: absolute;\n  top: 3.973333rem;\n  z-index: 2;\n  text-align: center;\n}\n.content .step-3[data-v-5ee9087b] {\n  top: 4.48rem;\n  left: 4.933333rem;\n}\n.content .step-3 div[data-v-5ee9087b] {\n  position: absolute;\n}\n.content .step-3 .lantern[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("Rhku")) + ") 0 0 no-repeat;\n  top: 0;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step-3 .cloud[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("pypw")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n  font-size: 0.32rem;\n  font-family: Adobe Heiti Std R;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.content .step-3 .cloud .text[data-v-5ee9087b] {\n  position: absolute;\n  top: 3.973333rem;\n  z-index: 2;\n  text-align: center;\n}\n.content .step-2[data-v-5ee9087b] {\n  top: 6.253333rem;\n  left: 0;\n}\n.content .step-2 .lantern[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("Rhku")) + ") 0 0 no-repeat;\n  top: 0;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step-2 .cloud[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("pypw")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n  font-size: 0.32rem;\n  font-family: Adobe Heiti Std R;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.content .step-2 .cloud .text[data-v-5ee9087b] {\n  position: absolute;\n  top: 3.973333rem;\n  z-index: 2;\n  text-align: center;\n}\n.content .step-1[data-v-5ee9087b] {\n  top: 8.946667rem;\n  left: 4.933333rem;\n}\n.content .step-1 .lantern[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("Rhku")) + ") 0 0 no-repeat;\n  top: 0;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n}\n.content .step-1 .cloud[data-v-5ee9087b] {\n  background: url(" + escape(__webpack_require__("pypw")) + ") 0 0 no-repeat;\n  position: absolute;\n  background-size: 100% auto;\n  height: 5.066667rem;\n  width: 5.066667rem;\n  font-size: 0.32rem;\n  font-family: Adobe Heiti Std R;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.content .step-1 .cloud .text[data-v-5ee9087b] {\n  position: absolute;\n  top: 3.973333rem;\n  z-index: 2;\n  text-align: center;\n}\n.content .step-0[data-v-5ee9087b] {\n  display: none;\n}\n.content .hand-0[data-v-5ee9087b] {\n  display: none;\n}\n.content .hand-1[data-v-5ee9087b] {\n  top: 12.066667rem;\n  right: 1.866667rem;\n  -webkit-transform: scaleX(-1);\n  -ms-transform: scaleX(-1);\n  transform: scaleX(-1);\n}\n.content .hand-2[data-v-5ee9087b] {\n  top: 9.4rem;\n  left: 1.866667rem;\n}\n.content .hand-3[data-v-5ee9087b] {\n  top: 7.666667rem;\n  right: 1.866667rem;\n  -webkit-transform: scaleX(-1);\n  -ms-transform: scaleX(-1);\n  transform: scaleX(-1);\n}\n.content .hand-4[data-v-5ee9087b] {\n  top: 4.866667rem;\n  left: 1.866667rem;\n}\n.content .hand-5[data-v-5ee9087b] {\n  display: none;\n}\n.content .back-home[data-v-5ee9087b] {\n  position: absolute;\n  bottom: 0.653333rem;\n  left: 50%;\n  margin-left: -1.36rem;\n  width: 2.72rem;\n  height: 0.68rem;\n  background: white;\n  opacity: 0.5;\n  border-radius: 0.346667rem;\n}\n.content .flower[data-v-5ee9087b] {\n  position: absolute;\n  background: url(" + escape(__webpack_require__("3ZqR")) + ") 0 0 no-repeat;\n  background-size: 100% auto;\n}\n.content .flower-left[data-v-5ee9087b] {\n  bottom: 3.146667rem;\n  left: 0.746667rem;\n  width: 0.933333rem;\n  height: 0.64rem;\n}\n.content .flower-right[data-v-5ee9087b] {\n  bottom: 0.746667rem;\n  right: 0.346667rem;\n  width: 1.2rem;\n  height: 0.8rem;\n}", ""]);

// exports


/***/ }),

/***/ "BHl3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/task-2.d3bdbcd.png";

/***/ }),

/***/ "CXw9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var global = __webpack_require__("7KvD");
var ctx = __webpack_require__("+ZMJ");
var classof = __webpack_require__("RY/4");
var $export = __webpack_require__("kM2E");
var isObject = __webpack_require__("EqjI");
var aFunction = __webpack_require__("lOnJ");
var anInstance = __webpack_require__("2KxR");
var forOf = __webpack_require__("NWt+");
var speciesConstructor = __webpack_require__("t8x9");
var task = __webpack_require__("L42u").set;
var microtask = __webpack_require__("82Mu")();
var newPromiseCapabilityModule = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");
var userAgent = __webpack_require__("iUbK");
var promiseResolve = __webpack_require__("fJUb");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("dSzd")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("xH/j")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("e6n0")($Promise, PROMISE);
__webpack_require__("bRrM")(PROMISE);
Wrapper = __webpack_require__("FeBl")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("dY0y")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "EGZi":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "EqBC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var global = __webpack_require__("7KvD");
var speciesConstructor = __webpack_require__("t8x9");
var promiseResolve = __webpack_require__("fJUb");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "Geq/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "HG0w":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "HY7f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("pYOI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("6cb81353", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-23290f29\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popup.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-23290f29\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "I90X":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/complete_bg.d28019b.png";

/***/ }),

/***/ "IoNx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title-1.df82189.png";

/***/ }),

/***/ "J1P9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("exGp");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__("OMN4");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HOST = "//t-www.meipian.cn/";

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var _ref$headers = _ref.headers,
        headers = _ref$headers === undefined ? '' : _ref$headers,
        _ref$url = _ref.url,
        url = _ref$url === undefined ? '' : _ref$url,
        _ref$method = _ref.method,
        method = _ref$method === undefined ? 'post' : _ref$method,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params,
        _ref$ok = _ref.ok,
        ok = _ref$ok === undefined ? '' : _ref$ok,
        _ref$err = _ref.err,
        err = _ref$err === undefined ? '' : _ref$err;
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!url) {
              _context.next = 11;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return (0, _axios2.default)({
              headers: headers,
              method: method,
              url: HOST + url,
              data: data,
              params: params
            });

          case 4:
            res = _context.sent;

            if (res.status === 200) {
              ok && ok(res);
            } else {
              err && err(res);
            }
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            console.log(_context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "JrMv":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "JwbQ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("B5b9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("7328fb07", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5ee9087b\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./detail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5ee9087b\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "KjJY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moon.87b971e.png";

/***/ }),

/***/ "L42u":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var invoke = __webpack_require__("knuC");
var html = __webpack_require__("RPLV");
var cel = __webpack_require__("ON07");
var global = __webpack_require__("7KvD");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("R9M2")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "L8lC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/task-1.93bc7d7.png";

/***/ }),

/***/ "M6a0":
/***/ (function(module, exports) {



/***/ }),

/***/ "Mhyx":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("/bQp");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "NWt+":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var anObject = __webpack_require__("77Pl");
var toLength = __webpack_require__("QRG4");
var getIterFn = __webpack_require__("3fs2");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "NmlI":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("kxFB");
exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.complete-content[data-v-748431ef] {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.complete-content .complete-body[data-v-748431ef] {\n  position: absolute;\n  top: 3.053333rem;\n  left: 50%;\n  margin-left: -3.813333rem;\n  background: url(" + escape(__webpack_require__("I90X")) + ") 0 0 no-repeat;\n  background-size: 100% auto;\n  height: 11.16rem;\n  width: 7.626667rem;\n  padding-top: 4.4rem;\n}\n.complete-content .complete-body div[data-v-748431ef] {\n  text-align: center;\n}\n.complete-content .complete-body .line-1[data-v-748431ef] {\n  font-size: 0.373333rem;\n  font-family: PingFang-SC-Medium;\n  font-weight: 500;\n  color: #ffec86;\n  line-height: 0.706667rem;\n  margin-bottom: 0.586667rem;\n}\n.complete-content .complete-body .line-1 .nums[data-v-748431ef] {\n  color: #fff;\n}\n.complete-content .complete-body .line-2[data-v-748431ef] {\n  font-size: 0.4rem;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: #ffec86;\n  line-height: 0.706667rem;\n  margin-bottom: 0.48rem;\n}\n.complete-content .complete-body .line-3[data-v-748431ef] {\n  font-size: 0.96rem;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: #ffec86;\n  line-height: 0.706667rem;\n  margin-bottom: 0.52rem;\n}\n.complete-content .complete-body .line-4[data-v-748431ef] {\n  font-size: 0.4rem;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: white;\n  line-height: 0.706667rem;\n  margin-bottom: 0.373333rem;\n}\n.complete-content .complete-body .btn[data-v-748431ef] {\n  position: relative;\n  left: 50%;\n  margin-left: -2.64rem;\n  background: url(" + escape(__webpack_require__("urBF")) + ") 0 0 no-repeat;\n  background-size: 100% auto;\n  height: 1.493333rem;\n  width: 5.186667rem;\n  font-size: 0.48rem;\n  font-family: PingFangSC-Semibold;\n  font-weight: 600;\n  color: #9a2800;\n}", ""]);

// exports


/***/ }),

/***/ "OtD6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var core_js_promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(core_js_promise);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/popup/popup.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var popup = ({
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    isComplete: {
      type: Boolean,
      default: false
    },
    titleUrl: String,
    taskUrl: String,
    btnUrl: String,
    closeUrl: String,
    text: String,
    confirmBtn: {
      type: String,
      default: '确认'
    }
  },
  methods: {
    close: function close() {
      if (!this.isComplete) {
        this.$emit("update:visible", false);
      } else {
        this.$emit("click-popup-btn", false);
      }
    },
    confirm: function confirm() {
      this.$emit("click-popup-btn", false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-23290f29","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/popup/popup.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "popup-content"
    },
    [
      _c("img", {
        staticClass: "title-img",
        class: { complete: _vm.isComplete },
        attrs: { src: _vm.titleUrl }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "task-img",
        class: { complete: _vm.isComplete },
        attrs: { src: _vm.taskUrl }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "close",
        attrs: { src: _vm.closeUrl },
        on: { click: _vm.close }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex-center btn",
          style: { backgroundImage: "url(" + _vm.btnUrl + ")" },
          on: { click: _vm.confirm }
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-23290f29", { render: render, staticRenderFns: staticRenderFns })
  }
}
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("XyMi");

// CONCATENATED MODULE: ./src/components/popup/popup.vue
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("HY7f")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23290f29"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  popup,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/popup/popup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23290f29", Component.options)
  } else {
    hotAPI.reload("data-v-23290f29", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var popup_popup = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/complete/complete.vue
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

/* harmony default export */ var complete = ({
  name: 'Complete',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    ranking: Number
  },
  methods: {
    closeComplete: function closeComplete() {
      this.$emit("update:visible", false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-748431ef","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/complete/complete.vue
var complete_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "complete-content"
    },
    [
      _c("div", { staticClass: "complete-body" }, [
        _c("div", { staticClass: "line-1" }, [
          _vm._v("你是第"),
          _c("span", { staticClass: "nums" }, [_vm._v(_vm._s(_vm.ranking))]),
          _vm._v("个帮助嫦娥奔月成功的侠士!")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "line-2" }, [_vm._v("嫦娥超开心，特奉红包")]),
        _vm._v(" "),
        _c("div", { staticClass: "line-3" }, [_vm._v("3元")]),
        _vm._v(" "),
        _c("div", { staticClass: "line-4" }, [_vm._v("已存入美篇钱包")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex-center btn", on: { click: _vm.closeComplete } },
          [_vm._v("知道了")]
        )
      ])
    ]
  )
}
var complete_staticRenderFns = []
complete_render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-748431ef", { render: complete_render, staticRenderFns: complete_staticRenderFns })
  }
}
// CONCATENATED MODULE: ./src/components/complete/complete.vue
var complete_disposed = false
function complete_injectStyle (context) {
  if (complete_disposed) return
  __webpack_require__("iTXY")
}
/* script */


/* template */

/* template functional */
var complete___vue_template_functional__ = false
/* styles */
var complete___vue_styles__ = complete_injectStyle
/* scopeId */
var complete___vue_scopeId__ = "data-v-748431ef"
/* moduleIdentifier (server only) */
var complete___vue_module_identifier__ = null

var complete_Component = Object(component_normalizer["a" /* default */])(
  complete,
  complete_render,
  complete_staticRenderFns,
  complete___vue_template_functional__,
  complete___vue_styles__,
  complete___vue_scopeId__,
  complete___vue_module_identifier__
)
complete_Component.options.__file = "src/components/complete/complete.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-748431ef", complete_Component.options)
  } else {
    hotAPI.reload("data-v-748431ef", complete_Component.options)
  }
  module.hot.dispose(function (data) {
    complete_disposed = true
  })
})()}

/* harmony default export */ var complete_complete = (complete_Component.exports);

// EXTERNAL MODULE: ./src/common/util/index.js
var util = __webpack_require__("vG4S");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./src/common/service/api.js
var api = __webpack_require__("J1P9");
var api_default = /*#__PURE__*/__webpack_require__.n(api);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/detail/detail.vue

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

var $ = __webpack_require__("eeO1");





/* harmony default export */ var detail = ({
  components: {
    Popup: popup_popup,
    Complete: complete_complete
  },
  data: function data() {
    return {
      isShowPopup: false,
      isFly: false,
      isFlyEnd: false,
      titleUrl: __webpack_require__("IoNx"),
      taskUrl: __webpack_require__("L8lC"),
      btnUrl: __webpack_require__("gaaM"),
      closeUrl: __webpack_require__("oNPX"),
      text: '去关注',
      isShowComplete: false,
      taskStep: 0,
      todayTaskStatus: 1, //0:未开启; 1:已开启
      isComplete: false,
      isWX: util["isWX"],
      taskArr: [{ step: 4, content: '创作一篇文章' }, { step: 3, content: '发布三个评论' }, { step: 2, content: '给3篇文章点赞' }, { step: 1, content: '关注3位好友' }],
      ranking: 0,
      user_id: 13687547,
      activeTimer: null,
      lanternTimer: null,
      handTimer: null
    };
  },
  created: function created() {
    this.appSendLog('by_hd', 'hdcy_show');
  },
  mounted: function mounted() {
    this.playActive();
    this.playHand();
    this.playLantern();
    var _this = this;
    if (window.meipian) {
      meipian.getUserInfo(function (data) {
        if (data.id == 1000) {
          meipian.gotoUserLoginPage();
        } else {
          _this.user_id = data.id;
          _this.getTask();
        }
      });
    }
    if (window.WebViewJavascriptBridge == undefined) {
      this.getTask();
    }
  },

  methods: {
    //当前任务
    getTask: function getTask() {
      var _this = this;
      api_default()({
        url: 'promo/mid_autumn/api/currentMission',
        data: {
          user_id: _this.user_id
        },
        params: {
          user_id: _this.user_id
        },
        ok: function ok(res) {
          if (res.data.code === 0) {
            _this.taskStep = res.data.data.step;
            _this.todayTaskStatus = res.data.data.status;
            _this.isComplete = res.data.data.times || res.data.data.times > 0 ? false : true;
            _this.showPopup();
          }
        }
      });
    },
    showPopup: function showPopup() {
      if (this.isComplete) {
        this.text = '好哒';
        this.taskUrl = __webpack_require__("2nZ/");
        if (this.taskStep == 5) {
          this.isShowPopup = true;
          this.appSendLog('by_hd', 'lq_tc_show');
          return false;
        }
        switch (this.taskStep) {
          case 1:
            this.titleUrl = __webpack_require__("7Z5C");
            this.appSendLog('by_hd', 'wc_1st_show');
            break;
          case 2:
            this.titleUrl = __webpack_require__("SSip");
            this.appSendLog('by_hd', 'wc_2nd_show');
            break;
          case 3:
            this.titleUrl = __webpack_require__("73pJ");
            this.appSendLog('by_hd', 'wc_3rd_show');
            break;
          case 4:
            this.titleUrl = __webpack_require__("PJkx");
            this.appSendLog('by_hd', 'wc_4th_show');
            break;
          default:
            break;
        }
        this.isShowPopup = true;
      } else if (this.todayTaskStatus == 1) {
        this.isShowPopup = true;
        switch (this.taskStep) {
          case 1:
            this.titleUrl = __webpack_require__("IoNx");
            this.taskUrl = __webpack_require__("L8lC");
            this.text = '去关注';
            this.appSendLog('by_hd', 'fb_1st_show');
            break;
          case 2:
            this.titleUrl = __webpack_require__("sSGB");
            this.taskUrl = __webpack_require__("BHl3");
            this.text = '去点赞';
            this.appSendLog('by_hd', 'fb_2nd_show');
            break;
          case 3:
            this.titleUrl = __webpack_require__("Y6ma");
            this.taskUrl = __webpack_require__("s1Nl");
            this.text = '去评论';
            this.appSendLog('by_hd', 'fb_3rd_show');
            break;
          case 4:
            this.titleUrl = __webpack_require__("11Pc");
            this.taskUrl = __webpack_require__("c7PH");
            this.text = '去创作';
            this.appSendLog('by_hd', 'fb_4th_show');
            break;
          default:
            break;
        }
      }
    },
    confirmPopup: function confirmPopup() {
      console.log('点击了');
      if (this.isComplete) {
        if (this.taskStep == 5) {
          this.isShowPopup = false;
        } else if (this.taskStep == 4) {
          this.getReward();
        } else {
          this.createTask();
        }
      } else {
        this.isShowPopup = false;
        this.goAppPage(this.taskStep);
      }
    },

    //点击云朵
    clickCloud: function clickCloud(taskStep) {
      if (taskStep == this.taskStep) {
        this.goAppPage(taskStep);
      }
    },
    goAppPage: function goAppPage(taskStep) {
      console.log('拉起app', taskStep);
      switch (taskStep) {
        case 1:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://meipian/home?tab=0'
            });
          }
          break;
        case 2:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://meipian/home?tab=0'
            });
          }
          break;
        case 3:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://meipian/home?tab=0'
            });
          }
          break;
        case 4:
          if (window.meipian) {
            meipian.generalRoute({
              uri: 'meipian://article/edit'
            });
          }
          break;
        default:
          break;
      }
    },

    //新建任务
    createTask: function createTask() {
      var _this2 = this;

      var _this = this;
      this.todayTaskStatus = 0;
      $('.fly').show();
      this.isShowPopup = false;
      this.isFly = true;
      this.taskStep++;
      this.playLantern();
      setTimeout(function () {
        _this2.isFly = false;
        _this2.isFlyEnd = false;
        _this2.playActive();
        $('.fly').hide();
      }, 2100);
      setTimeout(function () {
        _this2.isFlyEnd = true;
      }, 500);
      api_default()({
        url: 'promo/mid_autumn/api/newMission',
        data: {
          user_id: _this.user_id
        },
        ok: function ok(res) {
          if (res.data.code === 0) {
            _this.todayTaskStatus = res.data.data.status;
          }
        }
      });
    },

    //领红包
    getReward: function getReward() {
      var _this3 = this;

      var _this = this;
      $('.fly').show();
      this.isShowPopup = false;
      this.isFly = true;
      this.taskStep++;
      this.playLantern();
      setTimeout(function () {
        _this3.isFly = false;
        _this3.isFlyEnd = false;
        _this3.isShowComplete = true;
        // this.playActive()
        $('.fly').hide();
      }, 2100);
      setTimeout(function () {
        _this3.isFlyEnd = true;
      }, 500);
      api_default()({
        url: 'promo/mid_autumn/api/reward',
        data: {
          user_id: _this.user_id
        },
        ok: function ok(res) {
          if (res.data.code === 0) {
            _this.ranking = res.data.data;
          }
        }
      });
    },
    fly: function fly() {},

    //播放嫦娥动的动画
    playActive: function playActive() {
      var totalNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 36;

      var _this = this;
      clearInterval(this.activeTimer);
      var $ele = $('.change');
      var promiseArr = this.loadImage(0, 36, 'change');
      promise_default.a.all(promiseArr).then(function (store) {
        var obj = {
          length: 0
        };
        store.forEach(function (val, index) {
          obj[index] = val;
          obj.length++;
        });
        _this.activeAnimation = obj;
        var index = 0;
        // 依次append图片对象
        var timer = setInterval(function () {
          $ele.find('img').remove();
          $ele.append(obj[index]);
          // 序列增加
          index++;
          // 如果超过最大限制
          if (index >= totalNum) {
            index = 0;
          }
        }, 50);
        _this.activeTimer = timer;
      });
    },

    //播放手动画
    playHand: function playHand() {
      var totalNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 67;

      var _this = this;
      clearInterval(this.handTimer);
      var $ele = $('.hand');
      var promiseArr = this.loadImage(0, 67, 'hand');
      promise_default.a.all(promiseArr).then(function (store) {
        var obj = {
          length: 0
        };
        store.forEach(function (val, index) {
          obj[index] = val;
          obj.length++;
        });
        _this.handAnimation = obj;
        var index = 0;
        // 依次append图片对象
        var timer = setInterval(function () {
          $ele.find('img').remove();
          $ele.append(obj[index]);
          // 序列增加
          index++;
          // 如果超过最大限制
          if (index >= totalNum) {
            index = 0;
          }
        }, 50);
        _this.handTimer = timer;
      });
    },

    //播放手动画
    playLantern: function playLantern() {
      var totalNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 34;

      var _this = this;
      clearInterval(this.lanternTimer);
      var $ele = $('.lantern-animation');
      var promiseArr = this.loadImage(0, 34, 'lantern');
      promise_default.a.all(promiseArr).then(function (store) {
        var obj = {
          length: 0
        };
        store.forEach(function (val, index) {
          obj[index] = val;
          obj.length++;
        });
        var index = 0;
        // 依次append图片对象
        var timer = setInterval(function () {
          $ele.find('img').remove();
          $ele.append(obj[index]);
          // 序列增加
          index++;
          // 如果超过最大限制
          if (index >= totalNum) {
            index = 0;
          }
        }, 50);
        _this.lanternTimer = timer;
      });
    },
    loadImage: function loadImage() {
      var startIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var totalNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;
      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'change';

      var urlRoot = 'https://ss2.meipian.me/promo/mid_autumn/img/';
      var maxLength = totalNum - startIndex + 1;
      var $ele = $('.' + className);

      // 图片序列预加载
      var promiseArr = [];

      var _loop = function _loop(start) {
        var promise = new promise_default.a(function (resolve, reject) {
          var img = new Image();
          img.onload = function () {
            // 存储预加载的图片对象
            resolve(this);
          };
          img.onerror = function () {
            resolve(this);
          };
          img.src = urlRoot + className + '/' + start + '.png';
        });
        promiseArr.push(promise);
      };

      for (var start = startIndex; start <= totalNum; start++) {
        _loop(start);
      }
      return promiseArr;
    },
    playPicture: function playPicture() {
      var startIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var _this4 = this;

      var totalNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;
      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'change';

      var urlRoot = 'https://ss2.meipian.me/promo/mid_autumn/img/';
      var maxLength = totalNum - startIndex + 1;
      var $ele = $('.' + className);
      // 存储预加载的DOM对象和长度信息
      var store = {
        length: 0
        // 图片序列预加载
      };for (var start = startIndex; start <= totalNum; start++) {
        (function (index) {
          var img = new Image();
          img.onload = function () {
            store.length++;
            // 存储预加载的图片对象
            // console.log('this', store)
            store[index] = this;
            play();
          };
          img.onerror = function () {
            store.length++;
            play();
          };
          img.src = urlRoot + className + '/' + index + '.png';
        })(start);
      }
      var play = function play() {
        var percent = Math.round(100 * store.length / maxLength);

        // 全部加载完毕，无论成功还是失败
        if (percent == 100) {
          console.log('store', store);
          var index = startIndex;
          // 依次append图片对象
          var timer = setInterval(function () {
            $ele.find('img').remove();
            $ele.append(store[index]);
            // 序列增加
            index++;
            // 如果超过最大限制
            if (index >= totalNum) {
              index = 0;
            }
          }, 50);
          switch (className) {
            case 'active':
              _this4.activeTimer = timer;
              break;
            default:
              break;
          }
        }
      };
    }
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5ee9087b","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/detail/detail.vue
var detail_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c(
        "div",
        {
          staticClass: "step step-5",
          class: [_vm.taskStep == 5 && !_vm.isFly ? "active" : ""]
        },
        [
          _c("div", { staticClass: "moon" }),
          _vm._v(" "),
          _c("div", { staticClass: "rabbit" }),
          _vm._v(" "),
          _c("div", { staticClass: "redpack" }),
          _vm._v(" "),
          _c("div", { staticClass: "flex-center cloud" })
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.taskArr, function(item) {
        return [
          _c(
            "div",
            {
              staticClass: "step",
              class: [
                "step-" + item.step,
                _vm.taskStep == item.step && !_vm.isFly ? "active" : "",
                _vm.isFly && _vm.taskStep - 1 == item.step ? "is-fly" : "",
                _vm.isFlyEnd && _vm.taskStep == item.step ? "is-fly-end" : "",
                _vm.taskStep > item.step ? "has-complete" : ""
              ],
              on: {
                click: function($event) {
                  _vm.clickCloud(item.step)
                }
              }
            },
            [
              _c("div", { staticClass: "lantern" }),
              _vm._v(" "),
              _c("div", { staticClass: "flex-center cloud" }, [
                _c(
                  "div",
                  {
                    staticClass: "text",
                    class: _vm.todayTaskStatus ? "open" : ""
                  },
                  [
                    _vm.taskStep < item.step ||
                    (_vm.isFly &&
                      _vm.taskStep == item.step &&
                      _vm.todayTaskStatus == 0)
                      ? [_vm._v("待开启")]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.taskStep == item.step &&
                    _vm.todayTaskStatus == 0 &&
                    !_vm.isFly
                      ? [
                          _c("p", [_vm._v("完成任务后")]),
                          _c("p", [_vm._v("次日开启")])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.taskStep > item.step ||
                    (_vm.taskStep == item.step && _vm.todayTaskStatus == 1)
                      ? [_vm._v(_vm._s(item.content))]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          )
        ]
      }),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isFly,
            expression: "!isFly"
          }
        ],
        staticClass: "change",
        class: "step-" + _vm.taskStep
      }),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isFly && _vm.todayTaskStatus == 1,
            expression: "!isFly && todayTaskStatus == 1"
          }
        ],
        staticClass: "hand",
        class: "hand-" + _vm.taskStep,
        on: {
          click: function($event) {
            _vm.clickCloud(_vm.taskStep)
          }
        }
      }),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isFly,
            expression: "isFly"
          }
        ],
        staticClass: "lantern-animation",
        class: "step-" + (_vm.taskStep - 1)
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "fly",
        class: "step-" + _vm.taskStep,
        staticStyle: { display: "none" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "flower flower-left" }),
      _vm._v(" "),
      _c("div", { staticClass: "flower flower-right" }),
      _vm._v(" "),
      _c("router-link", { attrs: { to: "/home" } }, [
        _c("div", { staticClass: "flex-center back-home" }, [
          _vm._v("返回活动主页")
        ])
      ]),
      _vm._v(" "),
      _c("Popup", {
        attrs: {
          visible: _vm.isShowPopup,
          titleUrl: _vm.titleUrl,
          taskUrl: _vm.taskUrl,
          btnUrl: _vm.btnUrl,
          closeUrl: _vm.closeUrl,
          text: _vm.text,
          isComplete: _vm.isComplete
        },
        on: {
          "update:visible": function($event) {
            _vm.isShowPopup = $event
          },
          "click-popup-btn": _vm.confirmPopup
        }
      }),
      _vm._v(" "),
      _c("Complete", {
        attrs: { visible: _vm.isShowComplete, ranking: _vm.ranking },
        on: {
          "update:visible": function($event) {
            _vm.isShowComplete = $event
          }
        }
      })
    ],
    2
  )
}
var detail_staticRenderFns = []
detail_render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ee9087b", { render: detail_render, staticRenderFns: detail_staticRenderFns })
  }
}
// CONCATENATED MODULE: ./src/pages/detail/detail.vue
var detail_disposed = false
function detail_injectStyle (context) {
  if (detail_disposed) return
  __webpack_require__("gkv1")
  __webpack_require__("JwbQ")
}
/* script */


/* template */

/* template functional */
var detail___vue_template_functional__ = false
/* styles */
var detail___vue_styles__ = detail_injectStyle
/* scopeId */
var detail___vue_scopeId__ = "data-v-5ee9087b"
/* moduleIdentifier (server only) */
var detail___vue_module_identifier__ = null

var detail_Component = Object(component_normalizer["a" /* default */])(
  detail,
  detail_render,
  detail_staticRenderFns,
  detail___vue_template_functional__,
  detail___vue_styles__,
  detail___vue_scopeId__,
  detail___vue_module_identifier__
)
detail_Component.options.__file = "src/pages/detail/detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ee9087b", detail_Component.options)
  } else {
    hotAPI.reload("data-v-5ee9087b", detail_Component.options)
  }
  module.hot.dispose(function (data) {
    detail_disposed = true
  })
})()}

/* harmony default export */ var detail_detail = __webpack_exports__["default"] = (detail_Component.exports);


/***/ }),

/***/ "PJkx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/complete-4.459e55c.png";

/***/ }),

/***/ "PzxK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("D2L2");
var toObject = __webpack_require__("sB3e");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "RY/4":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("R9M2");
var TAG = __webpack_require__("dSzd")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "Rhku":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAF8CAMAAAD7OfD4AAABBVBMVEUAAABoNFp0LkZuO1xlMFxuO15kMFtsN11mMltkLlVrM1ViJ05kMFtkLlpzPV5kMFtzPF5yPV5xOlhkMFtyPF1yPV1KF0NmMVtLFkJtOV1bJVRyO11xPF5kL1plMFtkMFtJF0RyPF5eLFNKF0NKF0NkMVthLVZkMFtxO11rNlhJFkRkL1tKF0N2QF9dJk9zPV5JF0NyPF1LF0JKF0NLFkNKGERJF0NdJ01oNFtdJ01JFkNkMFtdJ01KF0NlMFpqNVxmMltoM1tsN11eKU9uOV1wOl1jLVdyPF5gKlJfKlBhLFR1Pl9mL1FhK09qM1RhLFVWIkxTHkhcJlNjLFBOGkZtNlZvOFjhnMS4AAAAO3RSTlMAGgUulWnsU0chEg37brOon2H+9efHmIl6PzXy3NrFv4h/KPHk0rSgjnVpYPju29LJvLyyXFZA9evnUG83Z58AAAWFSURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYPbutatpGAzgeDbH2AQUhh4v3BQERbzr8fbUbGtY1hZGx1C//0exS7qmtU2EtPXV8zvHV/PVfyFpn1ZBCKH/bIWg/6vZfbTxdP3O23tbvV7v3v31pVsE1a/RWWq93x6djkaj8Xjc+/U70js7O3t9Z6NBUF2aj5dau+1+v+9GTudGo4uLX3PjSPQF3D/G/jVonLQOVweDwXA47Edc6dS9kH6PxnH/9xu3CapOs9PaAaARVV9w3f555CJyKrYh2X8d9/+qNI+/eTAn4ov6qv/wPCb2Idk/2v6xfjU6bxzHCWR8mV/2lwZXc1H8YXwQyPzbuPVUoHvkCFzVV6L4dDKZXM3/nPcjIr+of4egsta+OBKjMEcl1Z9OYlfxVuS6YvGfLRFUSncvcBY8kOhfmDSZDOKjIF78W7jxlLK2Cb6T4JDIxo/x5EpIrv2nBFlr7AEAcxIMCjksFojNKK4fxb9HkK1OG0R8JSiOLzHm04is74r6eLlpqfkAhHR8RqGA+htU1RfxNwiy0dhVaRXPHJ8DyPrx0sfrHSuP2yptGoU8P7Utifpi6WN8W53NTFrFM8b3ISKWvoiP246NRhsSniMYdn1PffpX/GWCbmwNlMDJCDTxJSrrY/wSnoPCnQxmjM8X8YcifoegG7sLCnWyOCi5n40gG/8RQaXig+9k+KDkfja8THy8ybLRgpTQyaKG+CwbH5/mWh24hn0nyMdXUvHd0RjHmhYegWHfYab4PBOfoJtbycU1HblUF3+LIAuHueGN6S43+5na83GkXP7EBS+/7+i+HD8d/y1BFpbN+44+PkvHv0+QhZVV05EbAGg/TsfH9xfs7JmWvm+Iz1Px1wmysQYZzHif5WnivyDIRkMzvpG4Pn6Yio9vL1jaBcNdrqf/arzUSBkfZFWz73imi81QEx/H+ZYaq6Yjl2s/9FPxcZxv6wgMV5uhNj4DSB4j4kTZ1jIYlr6n/ywVv0uQnWbbcLXJ9Mcxp0l8nChba5muNimkaeITZOsWGK42+TXi41CzhF3D1aan3ZKCJP42QdZODEeur43vJfFxqFnhketrT1y/MD4ONct4YFj6XLcj+Yv4ONSs8i4X/OvEZ4tHuDjULOeuful7ustQhkPNajw2PqxVwlx8HGqWt6cdXzLtaYBDzYos65c+/Wd8fE22pB3tjIHr4+NQs5ZnKpQVxqeOwpLRDr4mW9JKWzdjCCClMH6ToEpvtGjxtSYriI9vapbW2NQsfV8XH+dqtY31eRJZc+/LcK5Wne6qZunr4uNcrULPNUufg+IVxMe5WgX2IcsviB/k47s4V6txvBaCEhbEPyaovFvFSz8ovsX1Zfy+i//xQo1L3yuO7y3i41ytxqXvF8cP5vHn9XGuVuPSZ8XDHb6Iv09QFfZXCybLrHi4Qxfx8X21Oq/1IYWln5/L+gRVo1u09GlRfE7l0h9+JaieCU+Yvsui4Ww6vZSms1nIxdLfIaim4SaL49PZ9OePnJ+X0zcPCKpprh+K+LPLHxoHn/BRSnVW8q/rqzWf8wH/XUSlliBjpsrnPPtEUKWah9dMf/AQf2VZ5ToQo8ZVj+lrcSTTG7b6Vx+/4zlbj+4mANenP/j4EicK9TnZmeqW/Lsnn3HN/2GnDnEABoEACPrWkwvqUolqmtD/Pw08GtTME1bsXne86+S/0qrwR1y1R2aZMlr/H9kBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgNEeHAgAAAAACPK3nmCDCgAAAAAAAAAAAAAAAAAAAAAAAAAAABgBkQkzPmkD7ooAAAAASUVORK5CYII="

/***/ }),

/***/ "SSip":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/complete-2.d1dbd9a.png";

/***/ }),

/***/ "SldL":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "TKGf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAF8CAMAAAD7OfD4AAAC/VBMVEUAAAD27rDWycShgOSlgOSigeSif+SigOT586338LD37bGhgOT586v586yigOT586yigOT27rKkguWigOahgOX48q7y6rWgf+X38bP48qz58qz07bT28K/586uigeX48q2hf+WjgeT59Kv586yigeShgOSigeSigOT586yjguSigOSigeT38a7r38Lz6rf28qzx6LmigeT38K/y6bn69azw5rz38LD17bPt48Hs4cPq38Lq3cbx57veztDt4760mOPErt3Vw9Syl+LNudfp3MPEq9+4neO8o93XxtDTvfahf+TTvPaigOSjguWhgOTRu/aigOXUvvW2m+348qulhOaxlOukg+XVwPCzl+zQufXSvPTUvvS5nu6nh+bTvfS3nO2vkuqpiujbyObXw+zWwfGoiOffzt7PuPW0l+zVv/Pt4sKyluy0meywk+vNtfS1mu3JsfPFrfK7oO/Xw+7Ruvatj+m8oe/r38fYxezk1dPPuPPZxerOt/Tj1Na9o/DVwPLayOiqi+jezOHMtPTXwvC+pPCsjum3nO6nh+fIsPPEq/G1me3p3cru5MDBqPDTvvHo2szcyuTdy+Pw5r3KsvTi09jCqfHSvPLg0NymheWukOqqjOjy6bjDqvHax+nh0dqrjenm2NH17bPLs/Tz67bx57vl19Px6Lrz67Wuker38a66n+7m2c/s4MXn2s307LTHr/PApvH38K3v5b7q3snfzeDLtPLs4cPOtvW/pfG4nO7277DRuvP17rLGrvO6n++sjujh0trcyuXBqPGxlezHr/DNtvGkhOT59Kv48625n+epiebo3Myzl+aqiuGmhefgz97OuPWukOG7od7AqNvTvu7376+5n+zbyee/p+W3m9/WxdK/puyyluHMt9bZxuu8ouvh08rQuu/YxeDFr9jWwufMt97Dq+nk1dWtj+XTvuHeztrayNrdzdTh0tLby83l2Mb79qzPuefJtOXFruHv5b/SvejRvdPn287LtezSv9rHr+np3sLy6bnu48KXO99LAAAASXRSTlMA/gX3Fu9OuUdVEMX0zZx60jIqIOfCIw0Jk4kqF+iPZVg316qohGTctnpvQzzsoh7Xr960m4Bw8seTTdzuvTzg1Gq1raaPTOvbbUoMOAAAHlRJ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"

/***/ }),

/***/ "U5ju":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("M6a0");
__webpack_require__("zQR9");
__webpack_require__("+tPU");
__webpack_require__("CXw9");
__webpack_require__("EqBC");
__webpack_require__("jKW+");
module.exports = __webpack_require__("FeBl").Promise;


/***/ }),

/***/ "XGny":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.10ce0b9.png";

/***/ }),

/***/ "Xxa5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jyFz");


/***/ }),

/***/ "Y6ma":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title-3.6d14a1e.png";

/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "bRrM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var dP = __webpack_require__("evD5");
var DESCRIPTORS = __webpack_require__("+E39");
var SPECIES = __webpack_require__("dSzd")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "c7PH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/task-4.e2f470c.png";

/***/ }),

/***/ "dNDb":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dY0y":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("dSzd")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "eeO1":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "exGp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "fJUb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var isObject = __webpack_require__("EqjI");
var newPromiseCapability = __webpack_require__("qARP");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "gaaM":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "gkv1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4xQb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("49b3a5fe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "h65t":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var defined = __webpack_require__("52gC");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "iTXY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("NmlI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("e7b1938a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-748431ef\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./complete.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-748431ef\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/px2rem-loader/index.js?{\"remUnit\":75}!../../../node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"/Users/duanliaokuo/Sites/article/promo/mid_autumn/node_modules/meipian-webpack/.postcssrc.js\"},\"sourceMap\":true}!../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./complete.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "iUbK":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "jKW+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("kM2E");
var newPromiseCapability = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "jyFz":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("SldL");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "knuC":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "msXi":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("77Pl");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "oNPX":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "pYOI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.popup-content[data-v-23290f29] {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.popup-content .title-img[data-v-23290f29] {\n  width: 7.72rem;\n  height: 1.906667rem;\n  margin: 0 auto;\n  margin-top: 3.4rem;\n}\n.popup-content .title-img.complete[data-v-23290f29] {\n  width: 6.44rem;\n  height: 1.906667rem;\n  display: block;\n}\n.popup-content .task-img[data-v-23290f29] {\n  width: 2.56rem;\n  height: 5.04rem;\n  margin-top: 0.16rem;\n  margin-bottom: 0.373333rem;\n}\n.popup-content .task-img.complete[data-v-23290f29] {\n  width: 3.2rem;\n  height: 3.68rem;\n  margin-top: 0.84rem;\n  margin-bottom: 1.053333rem;\n}\n.popup-content .btn[data-v-23290f29] {\n  position: relative;\n  left: 50%;\n  margin-left: -2.586667rem;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  width: 5.186667rem;\n  height: 1.346667rem;\n  font-size: 0.48rem;\n  font-family: PingFangSC-Semibold;\n  font-weight: 600;\n  color: #9a2800;\n  line-height: 0.72rem;\n}\n.popup-content .close[data-v-23290f29] {\n  position: absolute;\n  top: 0.893333rem;\n  right: 1.08rem;\n  height: 0.933333rem;\n  width: 0.933333rem;\n}", ""]);

// exports


/***/ }),

/***/ "pypw":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "qARP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("lOnJ");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "s1Nl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/task-3.d9e318a.png";

/***/ }),

/***/ "sSGB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title-2.d0953ad.png";

/***/ }),

/***/ "t8x9":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("77Pl");
var aFunction = __webpack_require__("lOnJ");
var SPECIES = __webpack_require__("dSzd")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "urBF":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "vG4S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wxConfig = wxConfig;
var u = navigator.userAgent;

var isWX = exports.isWX = u.indexOf('MicroMessenger') > -1 && u.indexOf('wxwork') === -1;
var isWXwork = exports.isWXwork = u.indexOf('MicroMessenger') > -1 && u.indexOf('wxwork') > -1;

function wxConfig(_ref) {
  var appId = _ref.appId,
      title = _ref.title,
      coverThumb = _ref.coverThumb,
      link = _ref.link,
      abstractShare = _ref.abstractShare,
      timestamp = _ref.timestamp,
      nonceStr = _ref.nonceStr,
      signature = _ref.signature,
      _ref$onMenuShareTimel = _ref.onMenuShareTimeline,
      onMenuShareTimeline = _ref$onMenuShareTimel === undefined ? null : _ref$onMenuShareTimel,
      _ref$onMenuShareAppMe = _ref.onMenuShareAppMessage,
      onMenuShareAppMessage = _ref$onMenuShareAppMe === undefined ? null : _ref$onMenuShareAppMe;

  try {
    console.log("appId=" + appId);
    console.log("timestamp=" + timestamp);
    console.log("nonceStr=" + nonceStr);
    console.log("signature=" + signature);
  } catch (error) {
    console.log(error);
  }

  window.wx.config({
    debug: false,
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'previewImage']
  });

  window.wx.ready(function () {
    window.wx.onMenuShareTimeline({
      title: title,
      link: link || window.location.href,
      imgUrl: coverThumb,
      success: function success() {
        onMenuShareTimeline && onMenuShareTimeline();
      }
    });

    window.wx.onMenuShareAppMessage({
      title: title,
      desc: abstractShare,
      link: link || window.location.href,
      imgUrl: coverThumb,
      success: function success() {
        onMenuShareAppMessage && onMenuShareAppMessage();
      }
    });
  });
}

/***/ }),

/***/ "vIB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var $iterCreate = __webpack_require__("94VQ");
var setToStringTag = __webpack_require__("e6n0");
var getPrototypeOf = __webpack_require__("PzxK");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "xGkn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("4mcu");
var step = __webpack_require__("EGZi");
var Iterators = __webpack_require__("/bQp");
var toIObject = __webpack_require__("TcQ7");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("vIB/")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "xH/j":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("hJx8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "zQR9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("h65t")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("vIB/")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ })

});