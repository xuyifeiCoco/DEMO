import './loghub-tracking'
import {
  host,
  project,
  logstore
} from '../util/config'

function RerurnDevice() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return "android"
  }
  if (isiOS) {
    return "ios"
  }
}
exports.install = function (Vue, options) {
  Vue.prototype.sendLoger = function ({
    event_type = 'click',
    event_src = '',
    referer = '',
    platform = 'wechat',
    unionid = '',
    openid = '',
    user_id = "",
  } = {}) {
    var logger = new window.Tracker(host, project, logstore);
    var os_type = RerurnDevice()
    var ref = referer || window.location.href
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