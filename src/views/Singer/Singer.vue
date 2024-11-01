<template>
  <a-flex wrap="wrap" gap="small">
    <singer-card :singer-list="singerList"/>
  </a-flex>
</template>

<script setup lang="js">
import SingerCard from "../components/SingerCard.vue";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";

const singerList = ref([]);

onMounted(async () => {
  const res = await myAxios.get('/singer');
  if (res.code === 0) {
    singerList.value = res.data;
  }
});
</script>

<style scoped>

</style>