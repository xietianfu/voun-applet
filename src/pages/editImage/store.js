// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imageUrl: '',
    title: 'hello',
    zoom: 80, // 照片缩放大小，内边距大小
  },
  mutations: {
    // 修改图片地址
    changeImage: (state, url) => {
      const obj = state;
      obj.imageUrl = url;
    },
    // 修改照片缩放大小，内边距大小
    changeZoom: (state, zoom) => {
      const obj = state;
      obj.zoom = zoom;
      console.log(zoom);
    },
  },
});

export default store;
