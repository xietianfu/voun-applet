<template>
  <div class="photo-wrap">
    <image
      class="bg-img"
      :src="tableLampUrl"
      mode="aspectFill"
    ></image>
    <div class="frame">
      <image
        class="bg-frame"
        :src="bgFrame"
      ></image>
      <image
        class="photo"
        :src="photoUrl"
        mode="aspectFill"
        @click="showT"
        alt
      ></image>

    </div>
  </div>
</template>

<script>
import tableLamp from "@/assets/images/scene/台灯桌面照片.png";
import photo from "@/assets/images/照片.png";
import frame from "@/assets/images/frame/相框1.png";

export default {
  props: [ "photoUrl","wrapBackground", "frame"],
  data() {
    return {
      // wrapBackground: wrapBackground,
      bgFrame: frame,
      tableLampUrl: tableLamp,
    };
  },
  computed: {

  },
};
</script>

<style lang="less" scoped>
.photo-wrap {
  position: relative;
  display: flex;
  height: 430px;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-size: 70%;
  background-repeat: no-repeat;
  box-shadow: -10pt 0pt 25px #b3b3b3;
}
.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
}
.frame {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  height: 45%;
  background: white;
  box-shadow: 10px 5px 10px #b3b3b3;
  .bg-frame {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .photo {
    max-width: 100%;
    max-height: 100%;
    text-align: center;
  }
}
</style>

