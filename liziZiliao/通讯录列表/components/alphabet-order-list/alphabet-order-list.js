// components/alphabet-order-list/alphabet-order-list.js
Component({

  options: {
    multipleSlots: true
  },

  properties: {
    source: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        this.setData({
          dataSource: this._groupby(newVal)
        })
      }
    },
    groupKey: String,
    imageKey: String,
    imageStyle: String,
    textKey: String,
    textStyle: String,
    tagStyle: String,
    showPoundSign: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
        var alphabet = this.data.alphabet
        if (newVal) {
          if (alphabet.length == 26) {
            alphabet.push('PoundSign')
            this.setData({
              alphabet: alphabet
            })
          }
        } else {
          if (alphabet.length > 26) {
            alphabet.splice(26, 1)
            this.setData({
              alphabet: alphabet
            })
          }
        }

      }
    },
  },

  data: {
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    startTouchAlphabet: false,
    touchLetter: '',
    letterHeight: 0,
    dataSource: []
  },

  ready: function () {
    if (wx.createSelectorQuery) {
      var that = this
      var query = wx.createSelectorQuery().in(this)
      query.select('#alphabet').boundingClientRect(function (res) {
        if (res.height) {
          that.setData({
            letterHeight: res.height / that.data.alphabet.length
          })
        } else {
          throw ('Initialization failed.')
        }
      }).exec()
    } else {
      throw ('当前基础库版本小于1.6.0，不支持alphabet-order-list组件')
    }
  },

  methods: {

    _compare: function (key) {
      return function (o, p) {
        if (typeof o === "object" && typeof p === "object" && o && p) {
          var a = o[key]
          var b = p[key]
          if (a == '' || a == null || a == undefined) {
            a = String.fromCharCode(91)
          } else if (a[0] >= 'a' && a[0] <= 'z') {
            a = a.replace(a[0], String.fromCharCode(a[0].charCodeAt() - 32))
          } else if (a[0] < 'A' || a[0] > 'Z') {
            a = a.replace(a[0], String.fromCharCode(a[0].charCodeAt() + 91))
          }
          if (b == '' || b == null || b == undefined) {
            b = String.fromCharCode(91)
          } else if (b >= 'a' && b <= 'z') {
            b = b.replace(b[0], String.fromCharCode(b[0].charCodeAt() - 32))
          } else if (b[0] < 'A' || b[0] > 'Z') {
            b = b.replace(b[0], String.fromCharCode(b[0].charCodeAt() + 91))
          }
          if (a === b) {
            return 0
          }
          if (typeof a === typeof b) {
            return a < b ? -1 : 1
          }
          return typeof a < typeof b ? -1 : 1
        }
        throw ("Error type.")
      }
    },

    _sort: function (array, key) {
      return array.sort(this._compare(key))
    },

    _groupby: function (array) {
      if (!array || array.length == 0) {
        return
      }
      var key = this.properties.groupKey
      array = this._sort(array, key)
      var tag = array[0][key][0]
      if (tag >= 'a' && tag <= 'z') {
        tag = String.fromCharCode(tag.charCodeAt() - 32)
      }
      var results = [{
        'tag': tag >= 'A' && tag <= 'Z' ? tag : 'PoundSign',
        'data': [array[0]]
      }]
      for (var i = 1, j = 0; i < array.length; i++) {
        var tag = array[i][key][0]
        if(tag >= 'a' && tag <= 'z') {
          tag = String.fromCharCode(tag.charCodeAt() - 32)
        }
        if (tag >= 'A' && tag <= 'Z') {
          if (tag == results[j]['tag']) {
            results[j]['data'].push(array[i])
          } else {
            j++
            results.push({
              'tag': tag,
              'data': [array[i]]
            })
          }
        } else {
          if (results[j]['tag'] != 'PoundSign') {
            j++
            results.push({
              'tag': 'PoundSign',
              'data': [array[i]]
            })
          } else {
            results[j]['data'].push(array[i])
          }
        }
      }
      return results
    },

    _itemtap: function (e) {
      this.triggerEvent('itemtap', { 'item': e.currentTarget.dataset.item }, {})
    },

    _letterTouchStartEvent: function (e) {
      this.setData({
        startTouchAlphabet: true,
        touchLetter: this.data.alphabet[parseInt(e.changedTouches[0].pageY / this.data.letterHeight)]
      })
    },

    _letterTouchMoveEvent: function (e) {
      var index = parseInt(e.changedTouches[0].pageY / this.data.letterHeight)
      if (index > this.data.alphabet.length - 1) {
        index = this.data.alphabet.length - 1
      } else if (index < 0) {
        index = 0;
      }
      this.setData({
        touchLetter: this.data.alphabet[index]
      })
    },

    _letterTouchEndEvent: function (e) {
      console.log(e)
      this.setData({
        startTouchAlphabet: false,
        touchLetter: ''
      })
    },

    _letterTouchCancelEvent: function (e) {
      this.setData({
        startTouchAlphabet: false,
        touchLetter: ''
      })
    },

  }
})