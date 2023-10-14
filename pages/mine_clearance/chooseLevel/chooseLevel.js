//chooseLevel.js
//获取应用实例
const app = getApp()
Page({
  data: {},
  //事件处理函数
  // 翻开
  chooseLevel: function (e) {
    wx.navigateTo({
      url: `../mineClearance/mineClearance?level=${e.target.dataset.level}`,
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });
  },
  // 页面启动
  onLoad: function () {
  },
  onShareAppMessage: function () {
    return {
      title: '扫雷',
      path: '/pages/mine_clearance/chooseLevel/chooseLevel.js'
    }
  }
})