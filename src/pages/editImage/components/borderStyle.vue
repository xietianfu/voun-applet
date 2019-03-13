<template>
  <div class="slide-box">
    <div class="slide-item"></div>
    <div class="slide-item"></div>
    <div class="slide-item"></div>
    <div class="slide-item"></div>
    <div class="slide-item"></div>
    <div class="slide-item"></div>
    <div class="slide-item"></div>
    <div class="slide-item"></div>
  </div>
</template>

<style lang="less" scoped>
.slide-box {
  margin-top: 15px;
  display: flex;
  flex-flow: nowrap;
  width: 100%;
  /* 和父盒子宽度一样 */
  height: 100%;
  /* 比里层元素高16px 为了隐藏滚动条*/
  overflow-x: scroll;
  /* 定义超出此盒子滚动 */
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
.slide-item {
  flex: none;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  background: blueviolet;
  margin-right: 30px;
}
</style>

