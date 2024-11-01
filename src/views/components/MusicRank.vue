<template>
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px">
    <div class="rankings-container">
      <h2>歌曲排行榜</h2>
      <div class="rankings" v-if="songList.length > 0">
        <div class="ranking-item" v-for="(song, index) in songList" :key="index">
          <div class="rank">{{ index + 1 }}</div>
          <div class="song-info">
            <span class="song-name" @click="router.push(`/musicDetail/${song.singer.id}`)">{{ song.songName }}</span>
            <span class="artist"> - {{ song.singer.name }}</span>
            <span class="duration"> (时长: {{ song.duration }})</span>
          </div>
          <div class="popularity-bar">
            <div class="popularity" :style="{ width: `${song.popularity * 10}%` }"></div>
          </div>
        </div>
      </div>
      <div class="rankings" v-if="songList.length < 1">
        <span>暂无热榜歌曲</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { defineProps } from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps({
  songList: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.rankings-container {
  margin: 20px;
  width: 600px;
  font-family: Arial, sans-serif;
}

.rankings {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
}

.ranking-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.rank {
  width: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #31C27C;
}

.song-info {
  flex-grow: 1;
  margin-left: 10px;
}

.song-name {
  font-size: 18px;
  font-weight: 500;
}

.artist {
  color: #555;
}

.duration {
  color: #999;
}

.popularity-bar {
  background-color: #e6e6e6;
  border-radius: 4px;
  height: 8px;
  flex-basis: 100px; /* 最小宽度 */
  margin-left: 10px;
}

.popularity {
  background-color: #31C27C;
  height: 100%;
  border-radius: 4px;
}
</style>
