<template>
  <div class="container">
    <div class="singer-info" style="display: flex; margin-top: 24px; margin-left: 24px;">
      <div style="display: flex; margin-top: 24px; margin-left: 24px;">
        <div>
          <img :src="singerVO.imgUrl" width="220" height="220" style="border-radius: 50%"/>
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
          <div v-if="music.url" style="display: flex; align-items: center; margin-top: 3px">
            <span style="color: #A7A7A8; font-size: 20px">{{ music.name }}：</span>
            <audio controls ref="audioPlayer" @ended="playNext">
              <source :src="music.url"/>
            </audio>
          </div>
        </div>
      </div>
    </div>
    <div class="list-container" style="margin-top: 20px">
      <h2>热门歌曲</h2>
      <a-list
          class="demo-loadmore-list"
          :loading="false"
          item-layout="horizontal"
          :data-source="singerVO.musicVOList"
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
import {ref} from "vue";
import {PlayCircleOutlined} from '@ant-design/icons-vue';
import {message} from "ant-design-vue";

const show = ref(true);
const audioPlayer = ref(null);
const isPlaying = ref(false); // 播放状态
const singerVO = ref({
  id: 1,
  imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000002PjDkE14OUkV_1.jpg?max_age=2592000',
  name: '陶喆',
  songCount: 18,
  description: '这是一个描述，wjdkwjdddjdjwnurhuwjdancuhcxzcvne',
  musicVOList: [
    {
      duration: '3:40',
      name: '普通朋友',
      url: 'http://ws.stream.qqmusic.qq.com/C400002qN5rI1ng5AY.m4a?guid=201554826&vkey=DB974974372A3038E3AFB3AF6A48ED9098096A9F34CD6CEA577BE954F39FA5D0CF67FFF9C710008796D1AE79A51DA157A726317759BF7AB5&uin=&fromtag=120032&src=C400001CQcSQ4IRWm0.m4a'
    },
    {
      duration: '4:05',
      name: '爱我还是他',
      url: 'http://ws.stream.qqmusic.qq.com/C400002qN5rI1ng5AY.m4a?guid=201554826&vkey=DB974974372A3038E3AFB3AF6A48ED9098096A9F34CD6CEA577BE954F39FA5D0CF67FFF9C710008796D1AE79A51DA157A726317759BF7AB5&uin=&fromtag=120032&src=C400001CQcSQ4IRWm0.m4a'
    },
    {
      duration: '3:20',
      name: '找自己',
      url: 'http://ws.stream.qqmusic.qq.com/C400003JzO0f40IYmB.m4a?guid=177017382&vkey=948D10376C1323624476F6D8295D606F24AE8FDDC73303F45945F7BFA9BFC5C8A68BFC64CC0A6238E7981B735AB1569A4EF14CEA321F18D7&uin=&fromtag=120032'
    },
  ],
});

const music = ref(singerVO.value.musicVOList[0]);

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
  const currentIndex = singerVO.value.musicVOList.indexOf(music.value);
  if (currentIndex < singerVO.value.musicVOList.length - 1) {
    music.value = singerVO.value.musicVOList[currentIndex + 1];
    audioPlayer.value.load();
    audioPlayer.value.play();
  } else {
    isPlaying.value = false; // 所有歌曲播放完毕，更新状态
  }
};

</script>

<style scoped>
.container {
  margin-left: 100px;
  margin-top: 50px;
}

.singer-info {
  width: 1200px;

  border: 2px solid #31C27C; /* 设置边框颜色 */
  border-radius: 10px; /* 设置圆角 */
  box-shadow: 0 4px 8px rgba(49, 194, 124, 0.3); /* 设置阴影 */
  padding: 16px; /* 内边距 */
  background-color: #fff; /* 背景颜色 */
}

.list-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
}
</style>
