<template>
  <van-tabs
    color="rgba(0, 0, 0, 1)"
    animated
  >
    <van-tab title="框形">
      <borderStyle></borderStyle>
    </van-tab>
    <van-tab title="颜色">颜色</van-tab>
    <van-tab title="内边距">
      <zoom></zoom>
    </van-tab>
    <van-tab title="背景">背景</van-tab>
    <van-tab title="场景">场景</van-tab>
    <van-tab title="签名">签名</van-tab>
  </van-tabs>
</template>

<script>
import zoom from "./components/zoom.vue";
import borderStyle from "./components/borderStyle.vue";

export default {
  data() {
    return {
      a: ""
    };
  },
  components: {
    zoom,
    borderStyle
  }
};
</script>
