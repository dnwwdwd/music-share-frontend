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
        <a-button type="primary" style="background: #31C27C; margin-top: 18px; width: 100px" @click="star(musicVO.id)" v-if="!show">收藏</a-button>
        <a-button type="primary" style="background: #31C27C; margin-top: 18px; width: 100px" @click="star_delete(musicVO.id)" v-if="show">取消收藏</a-button>

        <div style="display: flex; align-content: center; justify-content: center">
          <audio controls v-if="musicVO.url">
            <source :src="musicVO.url"/>
          </audio>
          <a-popover title="" v-if="musicVO.url">
            <template #content>
              <span>{{musicVO.url}}</span>
            </template>
            <ShareAltOutlined style="margin-top: 20px" />
          </a-popover>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; margin-left: 20px">
        <a-qrcode :value="musicVO.url" />
        <span style="margin-top: 3px">分享</span>
      </div>
    </div>
  </div>

</template>

<script setup lang="js">
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {useRoute, useRouter} from "vue-router";
import {message} from "ant-design-vue";
import {ShareAltOutlined} from "@ant-design/icons-vue";

const route = useRoute();
const router = useRouter();

const text = ref('https://www.antdv.com/');

const id = route.params.id;

const musicVO = ref({
  singer: {}
});

const show = ref(false)

onMounted(async () => {
  const res = await myAxios.get(`/music/${id}`);
  if (res.code === 0) {
    musicVO.value = res.data;
  }
  const result = await myAxios.get('/music_starred',{
    params: {
      musicId: id
    }
  });
  if (result.code === 0) {
    show.value = result.data;
  }
});

const star = async (value) => {
  console.log(value)
  const res = await myAxios.post("/music_star/add", {
    musicId: value
  });
  if (res.code === 0) {
    message.success('收藏成功');
    show.value = true;
  }
  console.log(value)
};

const star_delete = async (value) => {
  console.log(value)
  const res = await myAxios.post("/music_star/delete", {
    musicId: value
  });
  if (res.code === 0) {
    message.success('取消收藏成功');
    show.value = false;
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