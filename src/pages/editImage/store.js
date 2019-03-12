// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    imageUrl: '',
    title:'hello'
  },
  mutations: {
    // 修改图片地址
    changeImage:(state,url)=>{
        const obj=state;
        obj.imageUrl=url;
    },

  }
})

export default store
