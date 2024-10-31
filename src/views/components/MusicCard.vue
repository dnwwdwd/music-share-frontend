<template>
    <div v-if="musicList" v-for="music in musicList" :key="music.id"
         style="border: 1px solid #d3d3d3; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
       padding: 8px; width: 300px; height: 110px;" @click="router.push(`/musicDetail/${music.id}`)">
      <div style="display: flex; align-items: center;">
        <div>
          <img :src="music.imgUrl" width="90" height="90"/>
        </div>
        <div style="margin-left: 10px; display: flex; flex-direction: column; justify-content: center;">
          <span style="color: #000000; font-size: 15px">{{ music.name }}</span>
          <span style="color: darkgrey; font-size: 14px">{{ music.singer.name }}</span>
        </div>
        <div style="margin-left: auto; display: flex; align-items: center;">
          <span style="color: #9C9A99; font-size: 18px">{{ music.duration }}</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="js">
import {defineProps} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps({
  musicList: {
    type: Array,
    required: true,
  },
});

</script>

<style scoped>

</style>