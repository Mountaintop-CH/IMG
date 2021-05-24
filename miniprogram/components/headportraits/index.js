// components/headportraits/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    classifyData: [{
      name: "女生",
      id: "a1",
    }, {
      name: "男生",
      id: "a2",
    }, {
      name: "萌系",
      id: "a3",
    }, {
      name: "明星",
      id: "a4",
    }, {
      name: "极简",
      id: "a5",
    }, 
    {
      name: "其他",
      id: "a6",
    }],
    hotData:[1,2,3,4,5,6,7,8,9,10,11,12,13,45,48]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toimgDetail(){
      console.log("图片详情");
      wx.navigateTo({
        url: '../../pages/headportraitsDetail/index'
      })
    },
    toClassifyDeatil(){
      console.log("分类详情");

      wx.navigateTo({
        url: '../../pages/classifyDetail/index'
      })
    }
  }
})
