<template>
  <div class="container">
    <div style="display: flex; margin-top: 24px; margin-left: 24px">
      <div>
        <img :src="musicVO.imgUrl" width="250" height="250"/>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 20px">
        <span style="font-size: 30px">{{ musicVO.name }}</span>
        <div style="display: flex; align-items: center;margin-top: 10px" @click="router.push(`/singerDetail/${musicVO.singer.id}`)">
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
  id: 1,
  imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
  name: '普通朋友',
  singer: {
    id: 1,
    name: '陶喆',
  },
  type: 'Rap',
  description: '这是普通朋友的简单描述',
  duration: '3:50',
  url: 'http://ws.stream.qqmusic.qq.com/C400002qN5rI1ng5AY.m4a?guid=201554826&vkey=DB974974372A3038E3AFB3AF6A48ED9098096A9F34CD6CEA577BE954F39FA5D0CF67FFF9C710008796D1AE79A51DA157A726317759BF7AB5&uin=&fromtag=120032&src=C400001CQcSQ4IRWm0.m4a',
});

// onMounted(async () => {
//   const res = await myAxios.get(`/music/${id}`);
//   if (res.code === 0) {
//     musicVO.value = res.data;
//   }
// });

const star = async (value) => {
  // const res = await myAxios.post("/music/star", {
  //   id: value.id
  // });
  // if (res.code === 0) {
  //   message.success('收藏成功');
  // }
  console.log(value)

};
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
</style>