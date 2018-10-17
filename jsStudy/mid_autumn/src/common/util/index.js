const u = navigator.userAgent

export const isWX = u.indexOf('MicroMessenger') > -1 && (u.indexOf('wxwork') === -1)
export const isWXwork = (u.indexOf('MicroMessenger') > -1) && (u.indexOf('wxwork') > -1)

export function wxConfig({
  appId,
  title,
  coverThumb,
  link,
  abstractShare,
  timestamp,
  nonceStr,
  signature,
  onMenuShareTimeline = null,
  onMenuShareAppMessage = null
}) {
  try {
    console.log("appId=" + appId)
    console.log("timestamp=" + timestamp)
    console.log("nonceStr=" + nonceStr)
    console.log("signature=" + signature)
  } catch (error) {
    console.log(error)
  }

  window.wx.config({
    debug: false,
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'previewImage'
    ]
  })

  window.wx.ready(function () {
    window.wx.onMenuShareTimeline({
      title: title,
      link: link || window.location.href,
      imgUrl: coverThumb,
      success() {
        onMenuShareTimeline && onMenuShareTimeline()
      }
    })

    window.wx.onMenuShareAppMessage({
      title: title,
      desc: abstractShare,
      link: link || window.location.href,
      imgUrl: coverThumb,
      success() {
        onMenuShareAppMessage && onMenuShareAppMessage()
      }
    })
  })
}