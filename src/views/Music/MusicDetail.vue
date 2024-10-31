<template>
<!--  <div style="display: flex; margin-top: 24px; margin-left: 24px">-->
<!--    <div>-->
<!--      <img :src="musicVO.imgUrl" width="250" height="250"/>-->
<!--    </div>-->
<!--    <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 20px">-->
<!--      <span style="font-size: 30px">{{musicVO.name}}</span>-->
<!--      <div style="display: flex; align-items: center;margin-top: 10px">-->
<!--        <img src="../../assets/singer.png" width="20" height="20"/>-->
<!--        <span style="font-size: 25px; margin-left: 2px; color: #8A8A8A">{{ musicVO.singer.name }}</span>-->
<!--      </div>-->
<!--      <span style="font-size: 18px; margin-top: 10px">类型： {{ musicVO.type}}</span>-->
<!--      <span style="margin-top: 10px"> {{ musicVO.description }}</span>-->
<!--      <a-button type="primary" style="background: #31C27C; margin-top: 18px" @click="star">收藏</a-button>-->
<!--    </div>-->
<!--  </div>-->
  <audio preload autoplay="" controls src="D:\graduation_projects\徐志鹏\petManagement\music-share-frontend\src\views\Music\\Angel.mp3">
  </audio>
  <button @click="playAudio">播放音频</button>
  <button @click="stopAudio">停止音频</button>
</template>

<script setup lang="js">
const sound = new Howl({
  src: ['D:\\graduation_projects\\徐志鹏\\petManagement\\music-share-frontend\\src\\views\\Music\\Angel.mp3'], // 音频文件路径
  html5: true // 如果文件较大，使用 HTML5 音频
});
const playAudio = () => {
  sound.play();
};

const stopAudio = () => {
  sound.stop();
};
</script>

<style scoped>

</style>