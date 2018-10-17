exports.install = function (Vue, options) {
  Vue.prototype.appSendLog = function (viewname, clickname, data) {
    var detail = {
      view_name: viewname,
      click_name: clickname
    }

    if (data) detail.ext1 = data

    window.meipian.traceGrowth({
      event: 'view_click',
      data: detail
    })
  }
}