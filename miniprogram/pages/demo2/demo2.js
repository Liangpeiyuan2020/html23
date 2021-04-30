const util = require("../../util");

// pages/demo2/demo2.js
Page({

  data: {
    html: '',
    id: '',
  },

  app: getApp(),

  async cloudTest(){  // 从云托管获取数据
    do{
      var res = await wx.cloud.callContainer({
        path: '/container-html/' + this.data.id,
        method: 'get'
      }) 
    }while(res.data=='OH NO!\n')   
    
    res.data = util.formatRichText(res.data)  //美化图片显示
    this.setData({html: res.data})    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({id: options.id});
    this.cloudTest();
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