(function () {
  var Meipian = function () {
    var _version = "beta",
      _debug = false,
      _bridgeInit = false,
      _registerevents = {};
    /*API鏂规硶闆嗗悎*/
    var _apiArray = [
      'checkJsApi',
      'openBindWeChat',//调用微信收授权
      'getDeviceInfo',
      'getUserInfo',
      'gotoUserLoginPage',
      'gotoMyWalletPage',
      'gotoMyOrderPage',
      'gotoMyBookPage',
      'gotoMyMainPage',
      'gotoUserColumnPage',
      'showAlert',
      'showToast',
      'showActionSheet',
      'showLoading',
      'hideLoading',
      'setNavbarTitle',
      'updateNavbar',
      'gotoCustomerServiceForBookPage',
      'gotoCustomerServiceForHelpPage',
      'gotoHelpPage',
      'gotoArticlePage',
      'gotoBookShopPage',
      'gotoCircleMainPage',
      'showShareBoard',
      'gotoImagesViewerPage',
      'chooseImage',
      'chooseImages',
      'traceUMeng',
      'traceGrowingIO',
      'getWebViewSize',
      'reloadWebView',
      'goBackWebView',
      'exitCurrentPage',
      'gotoMusicPlayPage',
      'getArticleForTemplate',
      'gotoWebPage',
      'goBookMallUrl',
      'showArticleShareView',
      'gotoArticleEditPage',
      'traceGrowth',
      'gotoTopicDetailPage'
    ];
    var _privateMethod = {
      getPlatform: function () {
        var platform = navigator.userAgent.toLowerCase();
        if (/iphone|ipod|ipad/gi.test(platform)) {
          return "iOS";
        } else if (/android/gi.test(platform)) {
          return "Android";
        } else {
          return "涓嶆敮鎸佹骞冲彴!";
        }
      },
      connectWebViewJavascriptBridge: function (callback) {
        if (window.WebViewJavascriptBridge) {
          return callback(WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {
          return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () {
          document.documentElement.removeChild(WVJBIframe)
        }, 0)
      },
      callApiCenter: function (apikey, options) {
        var platform = this.getPlatform(),
          apikey = apikey,
          params = (options && options.param) ? options.param : null,
          callback = (options && options.callback) ? options.callback : null;
        if (platform == "iOS" || platform == "Android") {
          this.connectWebViewJavascriptBridge(function (bridge) {
            if (!_bridgeInit) {
              bridge.registerHandler("mpWebBridge", function (message, responseCallback) {
                var message = JSON.parse(message);
                var eventName = message.action,
                  data = message.params;
                if (_registerevents && (typeof _registerevents[eventName] == 'function')) {
                  _registerevents[eventName](data, responseCallback);
                }
              });
              _bridgeInit = true;
            }
            bridge.callHandler('mpWebBridge', {
              action: apikey,
              params: params
            }, function (response) {
              typeof callback == "function" && callback(JSON.parse(response));
              return response;
            });
          });
        } else {
          console.log(platform);
        }
      }
    };
    return function () {
      this.config = function (options, callback) {
        _debug = options.debug || false;
        return this.callApiCenter("checkJsApi", {
          callback: callback,
          param: options
        });
      };
      this.getVersion = function () {
        return _version;
      };
      this.getApiCollect = function () {
        return _apiArray;
      };
      this.registerEvents = function (options) {
        // 鍚堝苟瀵硅薄
        // if (options && JSON.stringify(options) == "{}") {
        //     //_registerevents = options;
        // } else {
        for (var key in options) {
          if (options[key]) {
            _registerevents[key] = options[key]
          }
        }
        // }
      }
      this.callApiCenter = function (apikey, options) {
        _privateMethod.callApiCenter(apikey, options);
        return this;
      };
      this.registerApi();
    };
  }();
  Meipian.prototype = {
    registerApi: function () {
      var _this = this;
      var apiArray = this.getApiCollect();
      for (var i = 0; i < apiArray.length; i++) {
        var apikey = apiArray[i];
        Meipian.prototype[apikey] = (function (apikey) {
          return function () {
            var len = arguments.length;
            if (!len) {
              _this.callApiCenter(apikey);
            }
            if (len) {
              var arr0 = arguments[0];
              var arr1 = arguments[1];
              if (typeof arr0 == "function") {
                _this.callApiCenter(apikey, {
                  callback: arr0
                });
              } else {
                if (arr1 && (typeof arr1 == "function")) {
                  _this.callApiCenter(apikey, {
                    param: arr0,
                    callback: arr1
                  });
                } else {
                  _this.callApiCenter(apikey, {
                    param: arr0
                  });
                }
              }
            }
          };
        })(apikey);
      }
    }
  };
  window.meipian = new Meipian();
})();