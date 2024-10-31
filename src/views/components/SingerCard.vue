<template>
    <a-flex wrap="wrap" gap="small" style="margin-top: 20px; margin-left: 120px">
      <div v-if="singerList" v-for="singer in singerList"
           style="border: 1px solid #d3d3d3; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
       margin: 20px; padding: 8px; width: 160px; height: 195px;">
        <div style="display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: center; align-items: center">
            <img :src="singer.imgUrl" width="140" height="140" style="border-radius: 50%"/>
          </div>
          <div style="display: flex; justify-content: center; align-items: center">
            <span style="font-size: 16px; font-family: Arial; color: #000000; margin-top: 20px">{{ singer.name }}</span>
          </div>
        </div>
      </div>
    </a-flex>
</template>

<script setup lang="js">

import {defineProps} from "vue";

const props = defineProps({
  singerList: {
    type: Array,
    required: true,
  },
});

</script>

<style scoped>

</style>