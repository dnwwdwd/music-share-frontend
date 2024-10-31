<template>
  <a-flex wrap="wrap" gap="large" style="margin-top: 20px; margin-left: 70px">
    <music-card :music-list="musicList"/>
  </a-flex>
</template>

<script setup lang="js">
import MusicCard from "../components/MusicCard.vue";
import {ref} from "vue";

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