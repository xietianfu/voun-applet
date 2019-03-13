<template>
  <div class="warp">
    <van-slider
      min="50"
      max="100"
      step="10"
      :value="currentValue"
      active-color="black"
      inactive-color="#666"
      bar-height="10px"
      class="slider"
      use-button-slot
      @drag="onDrag"
    >
      <view
        class="custom-button"
        slot="button"
      >
        {{ currentValue }}%
      </view>
    </van-slider>
  </div>
</template>

<script>
import store from "../store";

export default {
  computed: {
    currentValue() {
      return store.state.zoom;
    }
  },
  methods: {
    xx() {
      console.log("xxx");
    },
    onDrag(event) {
      console.log(event.mp.detail.value);
      store.commit("changeZoom", event.mp.detail.value);
    }
  }
};
</script>

<style lang="less">
.warp {
  padding: 50px 30px 0 30px;
  overflow: hidden;
  max-width: 100%;
  height: 100%;
}
.custom-button {
  margin: -30px;
  z-index: 100;
  &::before {
    content: "";
    position: absolute;
    top: -40px;
    right: -10px;
    bottom: -40px;
    left: -10px;
  }
}
</style>

