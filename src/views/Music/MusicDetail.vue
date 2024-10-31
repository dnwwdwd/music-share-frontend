<template>
  <div style="display: flex; margin-top: 24px; margin-left: 24px">
    <div>
      <img :src="musicVO.imgUrl" width="250" height="250"/>
    </div>
    <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 20px">
      <span style="font-size: 30px">{{musicVO.name}}</span>
      <div style="display: flex; align-items: center;margin-top: 10px">
        <img src="../../assets/singer.png" width="20" height="20"/>
        <span style="font-size: 25px; margin-left: 2px; color: #8A8A8A">{{ musicVO.singer.name }}</span>
      </div>
      <span style="font-size: 18px; margin-top: 10px">类型： {{ musicVO.type}}</span>
      <span style="margin-top: 10px"> {{ musicVO.description }}</span>
      <a-button type="primary" style="background: #31C27C; margin-top: 18px" @click="star">收藏</a-button>
    </div>
  </div>
  <audio controls>
    <source src="../../musics/Angel.mp3" />
  </audio>
</template>

<script setup lang="js">
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {useRoute} from "vue-router";

const route = useRoute();

const id = route.params.id;

const musicVO = ref({});

// onMounted(async () => {
//   const res = await myAxios.get(`/music/${id}`);
//   if (res.code === 0) {
//     musicVO.value = res.data;
//   }
// });

const star = async () => {

};
</script>

<style scoped>

</style>