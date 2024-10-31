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
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },
  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },  {
    name: '王力宏',
    imgUrl: 'https://y.qq.com/music/photo_new/T001R500x500M000001JDzPT3JdvqK.jpg?max_age=2592000',
  },


]);
</script>

<style scoped>

</style>