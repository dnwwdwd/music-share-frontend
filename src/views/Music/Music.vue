<template>
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 12px">
    <a-input-search
        v-model:value="searchText"
        placeholder="请输入歌名/歌手名进行搜索"
        style="width: 400px; margin-top: 10px"
        @search="onSearch"/>
  </div>
  <a-flex wrap="wrap" gap="large" style="margin-top: 20px; margin-left: 70px">
    <music-card :music-list="musicList"/>
  </a-flex>
</template>

<script setup lang="js">
import MusicCard from "../components/MusicCard.vue";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";


const searchText = ref('');

const musicList = ref([]);

onMounted(async () => {
  const res = await myAxios.get('/music');
  if (res.code === 0) {
    musicList.value = res.data;
  }
});

const onSearch = async () => {
  const res = await myAxios.get('/music', {
    params: {
      searchText: searchText.value,
    }
  });
  if (res.code === 0) {
    musicList.value = res.data;
  }
};

</script>

<style scoped>

</style>