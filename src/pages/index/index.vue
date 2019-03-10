<template>
  <main>
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
      photoList: [{}]
    };
  },

  components: {
    card,
    navBar
  }
};
</script>

<style scoped>
main {
  height: 100%;
}
</style>
