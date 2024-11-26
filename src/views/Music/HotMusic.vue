<template>
  <div>
    <music-rank :song-list="songs"/>
  </div>

  <a-flex wrap="wrap" gap="large" style="margin-top: 20px; margin-left: 180px">
    <music-card :music-list="musicList"/>
  </a-flex>
</template>

<script setup lang="js">
import MusicCard from "../components/MusicCard.vue";
import {onMounted, ref} from "vue";
import MusicRank from "../components/MusicRank.vue";
import myAxios from "../../plugins/myAxios.js";

const songs = ref([]);

const musicList = ref([]);

onMounted(async () => {
  const res1 = await myAxios.get('/music');
  if (res1.code === 0) {
    musicList.value = res1.data;
  }
  const res2 = await myAxios.get('/hot/music');
  if (res2.code === 0) {
    songs.value = res2.data;
  }
});

</script>

<style scoped>

</style>