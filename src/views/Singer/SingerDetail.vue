<template>
  <div class="container">
    <div class="singer-info" style="display: flex; margin-top: 24px; margin-left: 24px;">
      <div style="display: flex; margin-top: 24px; margin-left: 24px;">
        <div>
          <img :src="singerVO.imgUrl" width="220" height="220" style="border-radius: 50%; margin-bottom: 3px"/>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 20px">
          <span style="font-size: 30px">{{ singerVO.name }}</span>
          <span style="margin-top: 10px; font-size: 18px">简介： {{ singerVO.description }}</span>
          <span style="margin-top: 10px; font-size: 18px">单曲： {{ singerVO.songCount }}</span>
          <a-button
              type="default"
              style="background: #31C27C; width: 150px; margin-top: 10px"
              @click="togglePlay"
          >
            {{ isPlaying ? '暂停' : '开始播放' }}
          </a-button>
          <div v-if="music.url" style="display: flex; align-items: center; margin-top: 6px">
            <span style="color: #A7A7A8; font-size: 20px">{{ music.name }}：</span>
            <audio controls ref="audioPlayer" @ended="playNext">
              <source :src="music.url"/>
            </audio>
          </div>
        </div>
      </div>
    </div>
    <div class="list-container" style="margin-top: 20px">
      <h2>热门音乐</h2>
      <a-list
          class="demo-loadmore-list"
          :loading="false"
          item-layout="horizontal"
          :data-source="singerVO.music_list"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <template #actions>
              <a key="list-loadmore-more" @click="play(item)">
                <PlayCircleOutlined style="width: 30px; height: 30px"/>
              </a>
            </template>
            <a-skeleton avatar :title="false" :loading="false" active>
              <a-list-item-meta :description="item.name">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name }}</a>
                </template>
              </a-list-item-meta>
              <div>{{ item.duration }}</div>
            </a-skeleton>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup lang="js">
import {onMounted, ref} from "vue";
import {PlayCircleOutlined} from '@ant-design/icons-vue';
import {message} from "ant-design-vue";
import myAxios from "../../plugins/myAxios.js";
import {useRoute} from "vue-router";

const audioPlayer = ref(null);
const isPlaying = ref(false); // 播放状态
const singerVO = ref({});

const route = useRoute();

const id = route.params.id;

const music = ref({});

onMounted(async () => {
  const res = await myAxios.get(`/singer/${id}`);
  if (res.code === 0 && res.data) {
    singerVO.value = res.data;
    music.value = singerVO.value.music_list[0];
  }

});

const togglePlay = () => {
  if (isPlaying.value) {
    audioPlayer.value.pause(); // 暂停播放
  } else {
    if (music.value.url) {
      audioPlayer.value.load();
      audioPlayer.value.play(); // 开始播放
    } else {
      message.info('该歌手还没有音乐');
    }
  }
  isPlaying.value = !isPlaying.value; // 切换播放状态
};

const play = (value) => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
    audioPlayer.value.currentTime = 0;
  }
  music.value = value;
  audioPlayer.value.load();
  audioPlayer.value.play();
  isPlaying.value = true; // 播放时设置状态为播放
};

const playNext = () => {
  // 处理播放结束后的逻辑
  const currentIndex = singerVO.value.music_list.indexOf(music.value);
  if (currentIndex < singerVO.value.music_list.length - 1) {
    music.value = singerVO.value.music_list[currentIndex + 1];
    audioPlayer.value.load();
    audioPlayer.value.play();
  } else {
    isPlaying.value = false; // 所有音乐播放完毕，更新状态
  }
};

</script>

<style scoped>
.container {
  margin-left: 100px;
  margin-top: 50px;
}

.singer-info {
  width: 900px;

  border: 2px solid #31C27C; /* 设置边框颜色 */
  border-radius: 10px; /* 设置圆角 */
  box-shadow: 0 4px 8px rgba(49, 194, 124, 0.3); /* 设置阴影 */
  padding: 16px; /* 内边距 */
  background-color: #fff; /* 背景颜色 */
}

.list-container {
  width: 900px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-left: 20px;
  background-color: #f9f9f9;
}
</style>
