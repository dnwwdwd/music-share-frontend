<template>
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 12px">
    <a-input-search
        v-model:value="searchText"
        placeholder="请输入歌名/歌手名搜索车辆"
        style="width: 400px; margin-top: 10px"
        @search="onSearch"/>
  </div>
  <a-flex wrap="wrap" gap="large" style="margin-top: 20px; margin-left: 70px">
    <music-card :music-list="musicList"/>
  </a-flex>
  <audio preload autoplay="" controls src="./src/muscis/除了春天爱情和樱花.mp3">
  </audio>
  <audio-player :src="audioSrc" controls></audio-player>
</template>

<script setup lang="js">
import MusicCard from "../components/MusicCard.vue";
import AudioPlayer from 'vue-audio';
import {ref} from "vue";

const audioSrc = ref('./src/muscis/Angel (0_8X版).mp3');

const searchText = ref('');

const musicList = [
  {
    id: 1,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    id: 2,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    id: 3,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    id: 4,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    id: 5,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    id: 6,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    id: 7,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    id: 8,
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  }
];

const onSearch = async () => {

};

</script>

<style scoped>

</style>