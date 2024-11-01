<template>
  <div>
    <music-rank :song-list="songs"/>
  </div>

  <a-flex wrap="wrap" gap="large" style="margin-top: 20px; margin-left: 70px">
    <music-card :music-list="musicList"/>
  </a-flex>
</template>

<script setup lang="js">
import MusicCard from "../components/MusicCard.vue";
import {ref} from "vue";
import MusicRank from "../components/MusicRank.vue";

const songs = [
  {
    singer: {
      id: 1,
      name: '陶喆',
    }, songName: '普通朋友', duration: '3:40', popularity: 8
  },
  {
    singer: {
      id: 1,
      name: '陈奕迅',
    }, songName: '爱情转移', duration: '4:05', popularity: 9
  },
  {
    singer: {
      id: 1,
      name: '周杰伦',
    }, songName: '青花瓷', duration: '4:10', popularity: 7
  },
  {
    singer: {
      id: 1,
      name: '陶喆',
    }, songName: '你是我的', duration: '3:50', popularity: 6
  },
];

const musicList = ref([
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  },
  {
    imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
    name: '普通朋友',
    singer: {
      name: '陶喆'
    },
    duration: '3:59'
  }
]);

</script>

<style scoped>

</style>