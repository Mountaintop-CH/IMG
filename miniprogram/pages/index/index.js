// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tabData: ['头像', '壁纸', '背景', '文案', '表情包', ],
    tabData: [{
      name: "头像",
      id: "a1",
      class: ""
    }, {
      name: "壁纸",
      id: "a2",
      class: ""
    }, {
      name: "背景",
      id: "a3",
      class: ""
    }, {
      name: "文案",
      id: "a4",
      class: ""
    }, {
      name: "表情包",
      id: "a5",
      class: ""
    }, ],
    id: 'a1'
  },
  // tab点击
  onTab(e) {
    console.log(e);
    let id = e.target.dataset.id
    let index = e.target.dataset.ind
    this.setData({
      id:id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})