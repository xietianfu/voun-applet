<template>
  <main>
    <div class="title" :style="{fontSize: titleSize}"  >
    </div>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <navBar></navBar>
  </main>
</template>

<script>
import card from "@/components/card";
import navBar from "@/components/navBar";

export default {
  data() {
    return {
      photoList: [{}],
      titleSize: '23px',
      animationData:{},
    };
  },

  components: {
    card,
    navBar
  },

  onShow(){
  },
  onPageScroll: function(e) {

    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })


    console.log(e.scrollTop);
    if(e.scrollTop > 80&&e.scrollTop < 200 ){
      this.titleSize='11.5px'
    }
    if(e.scrollTop < 50 ){
      this.titleSize='23px'
    }
  }
};
</script>

<style lang="less" scoped>
main {
  height: 100%;
  .title{
    height: 80px;
    width: 100%;
    &::after{
      padding: 0.25em 0.5em;
      content:'Fotoever';
      position: fixed;
      top: 3%;
      left: 50%;
      transform: translateX(-50%);
      color: black;
      border: 2px solid black;
      text-align: center;
      z-index: 1000;
      transition: font-size 0.3s ease; 
    }
  }
}
</style>

