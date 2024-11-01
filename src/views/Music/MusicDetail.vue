<template>
  <div class="container">
    <div style="display: flex; margin-top: 24px; margin-left: 24px">
      <div>
        <img :src="musicVO.imgUrl" width="250" height="250"/>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 20px">
        <span style="font-size: 30px">{{ musicVO.name }}</span>
        <div style="display: flex; align-items: center;margin-top: 10px"
             @click="router.push(`/singerDetail/${musicVO.singer.id}`)">
          <img src="../../assets/singer.png" width="20" height="20"/>
          <span style="font-size: 25px; margin-left: 2px; color: #8A8A8A">{{ musicVO.singer.name }}</span>
        </div>
        <span style="font-size: 18px; margin-top: 10px">类型： {{ musicVO.type }}</span>
        <span style="margin-top: 10px"> {{ musicVO.description }}</span>
        <a-button type="primary" style="background: #31C27C; margin-top: 18px" @click="star(musicVO.id)">收藏</a-button>
        <audio controls v-if="musicVO.url">
          <source :src="musicVO.url"/>
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {useRoute, useRouter} from "vue-router";
import {message} from "ant-design-vue";

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const musicVO = ref({
  singer: {}
});

onMounted(async () => {
  const res = await myAxios.get(`/music/${id}`);
  if (res.code === 0) {
    musicVO.value = res.data;
  }
});

const star = async (value) => {
  const res = await myAxios.post("/music/star", {
    id: value.id
  });
  if (res.code === 0) {
    message.success('收藏成功');
  }
  console.log(value)

};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
</style>