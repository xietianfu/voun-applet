<template>
  <div class="bar-warp">
    <image :src="buy"></image>
    <image :src="add"></image>
    <image :src="vip"></image>
  </div>
</template>

<script>
import vip from "@/assets/images/ico/会员.png";
import add from "@/assets/images/ico/添加.png";
import buy from "@/assets/images/ico/购买.png";

export default {
  data() {
    return {
      vip: vip,
      add: add,
      buy: buy
    };
  }
};
</script>

<style lang="less" scoped>
.bar-warp {
  position: fixed;
  display: flex;
  bottom: 3%;
  height: 65px;
  z-index: 1000;
  width: 100%;
  justify-content: space-around;
  align-content: flex-end;
  align-items: flex-end;

  image {
    width: 50px;
    height: 50px;
    box-shadow: 9pt 7pt 18pt rgba(0, 0, 0, 0.2);
    border-radius: 1000px;
    &:nth-of-type(2) {
      width: 65px;
      height: 65px;
    }
  }
}
</style>
