<template>
  <a-flex wrap="wrap" gap="small">
    <singer-card :singer-list="singerList"/>
  </a-flex>
</template>

<script setup lang="js">
import SingerCard from "../components/SingerCard.vue";
import {ref} from "vue";

const singerList = ref([
  {
    id: 1,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 2,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 3,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 4,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 5,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 6,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 7,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 7,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 8,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    id: 9,
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },


]);
</script>

<style scoped>

</style>