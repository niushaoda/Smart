import { HomePage } from './homePage-model'
const homePage = new HomePage()
// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //banner轮播
    bannerData : [
      {
        src: 'https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/3.jpg',
        link: 'wordsList'
      },{
        src: 'https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/4.jpg',
        link: 'compositionList'
      },{
        src: 'https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/3.png',
        link : "communicat"
      }
    ],
    //小分类
    middleType: [
      {
        title: "单词",
        imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/word.png",
        pageLink : "wordsList"
      },
       {
        title: "音乐",
         imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/music.png",
        pageLink : "musicList"
      }, 
      {
        title: "写作",
        imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/write.png",
        pageLink : "compositionList"
      }, 
      {
        title: "听力",
        imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/listen.png",
        pageLink : "audioList"
      }
    ],
    //精品推荐
    boutiqueData: [
      {
        title: "励志文章",
        imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/nuli.png",
        pageType : 'lizhi'
      },
      {
        title: "注意事项",
        imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/artical.png",
        pageType : 'duanwen'
      },
      {
        title: "听力技巧",
        imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/erji.png",
        pageType : 'tingli'
      },
      {
        title: "头条新闻",
        imgsrc: "https://www.niushaoda.club/thinkphp-3.2/images/bannerImg/news.png",
        pageType : 'xinwen'
      }
    ]
  },
  
  link : function(e) {
    const link = homePage.getEventData(e, 'link');
    if(link == 'communicat'){
      wx.switchTab({
        url: '../communicat/communicat',
      })
    }
    wx.navigateTo({
      url : `../${link}/${link}`
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
  
  },
  //middleType跳转
  jumpTotype:function(e){
    const link = homePage.getEventData(e,'link')
    wx.navigateTo({
      url : `../${link}/${link}`,
    })
  },
  //推荐索引
  jumpBoutique : function(e) {
    //不区分大小写
    const pageType = homePage.getEventData(e,'pagetype')
    wx.navigateTo({
      url : `../article/article?pageType=${pageType}`,
    })
  },
  gotoTrain : function() {
    wx.navigateTo({
      url : `../trainList/trainList`,
    })
  },
})