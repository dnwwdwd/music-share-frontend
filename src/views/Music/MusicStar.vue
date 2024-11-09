<template>
  <a-flex wrap="wrap" gap="large" style="margin-top: 40px; margin-left: 70px"
          v-if="musicList && musicList.length > 0">
    <music-card :music-list="musicList"/>
  </a-flex>
  <div style="display: flex; justify-content: center; align-items: center;" v-else>
    <a-empty description="你还没有收藏任何音乐" style="margin-top: 200px"/>
  </div>
</template>

<script setup lang="js">
import MusicCard from "../components/MusicCard.vue";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";

const musicList = ref([]);

onMounted(async () => {
  const res = await myAxios('/music_star/list');
  if (res.code === 0) {
    musicList.value = res.data.flatMap(item => item.music);
  }
});

</script>

<style scoped>

</style>