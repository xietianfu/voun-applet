<template>
    <div class="edit-warp">
        <!-- <Test v-bind:title="title" ></Test> -->
        <card :photo-url="imgUrl"></card>
        <editNav></editNav>
    </div>
</template>

<script>
import store from './store';
import card from "./card";
import editNav from "./editNav";


console.log(store.state)
export default {
    data() {
        return {
            imgUrl:store.state.imageUrl,
            title:store.state.title
        }
    },
    components:{
        card,
        editNav
    },
    onShow() {
        this.imgUrl=store.state.imageUrl;
  },
}
</script>