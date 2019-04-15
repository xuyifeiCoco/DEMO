// pages/chooseprovince/chooseprovince.js
Page({

  data: {
    provinces: [
      { 'pinyin': 'BeiJing', 'name': '北京' },
      { 'pinyin': 'TianJin', 'name': '天津' },
      { 'pinyin': 'ShangHai', 'name': '上海' },
      { 'pinyin': 'ChongQing', 'name': '重庆' },
      { 'pinyin': 'XiangGang', 'name': '香港' },
      { 'pinyin': 'AoMen', 'name': '澳门' },
      { 'pinyin': 'AnHui', 'name': '安徽' },
      { 'pinyin': 'FuJian', 'name': '福建' },
      { 'pinyin': 'GanSu', 'name': '甘肃' },
      { 'pinyin': 'GuangXi', 'name': '广西' },
      { 'pinyin': 'GuangDong', 'name': '广东' },
      { 'pinyin': 'GuiZhou', 'name': '贵州' },
      { 'pinyin': 'HaiNan', 'name': '海南' },
      { 'pinyin': 'HeBei', 'name': '河北' },
      { 'pinyin': 'HeNan', 'name': '河南' },
      { 'pinyin': 'HeiLongJiang', 'name': '黑龙江' },
      { 'pinyin': 'HuBei', 'name': '湖北' },
      { 'pinyin': 'HuNan', 'name': '湖南' },
      { 'pinyin': 'JiLin', 'name': '吉林' },
      { 'pinyin': 'JiangSu', 'name': '江苏' },
      { 'pinyin': 'JiangXi', 'name': '江西' },
      { 'pinyin': 'LiaoNing', 'name': '辽宁' },
      { 'pinyin': 'NeiMengGu', 'name': '内蒙古' },
      { 'pinyin': 'NingXia', 'name': '宁夏' },
      { 'pinyin': 'QingHai', 'name': '青海' },
      { 'pinyin': 'ShanDong', 'name': '山东' },
      { 'pinyin': 'ShanXi', 'name': '山西' },
      { 'pinyin': 'ShanXi', 'name': '陕西' },
      { 'pinyin': 'SiChuan', 'name': '四川' },
      { 'pinyin': 'XiZang', 'name': '西藏' },
      { 'pinyin': 'XinJiang', 'name': '新疆' },
      { 'pinyin': 'YunNan', 'name': '云南' },
      { 'pinyin': 'ZheJiang', 'name': '浙江' },
      { 'pinyin': 'TaiWan', 'name': '台湾' },
    ],
  },

  onLoad: function (options) {
    this.alphabet_order_list = this.selectComponent('#alphabet_order_list')
    console.log(this.alphabet_order_list)
  },

  itemClickEvent: function (e) {
    wx.showToast({
      title: JSON.stringify(e.detail.item),
      icon: 'none',
      duration: 2000,
    })
  },
  
})