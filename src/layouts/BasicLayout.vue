<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider style="background: #FFFFFF;">
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 5px;">
        <img src="../assets/logo.png" width="45" height="45" style="margin-right: 10px;"/>
        <span style="color: #31C27C">基于Vue+Django的音乐分享网站</span>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1">
          <router-link to="/">
            <UngroupOutlined />
            <span>音乐推荐</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/hot/music">
            <FormOutlined/>
            <span>热门音乐</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/singer/recommend">
            <desktop-outlined/>
            <span>歌手推荐</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/song/star">
            <desktop-outlined/>
            <span>收藏音乐</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link to="/setting">
            <CommentOutlined/>
            <span>个人设置</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; height: 60px">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="font-size: 20px; margin-left: 20px; color: #1E90FF">{{ title }}</span>
          <div style="margin-right: 30px">
            <a-button style="margin-right: 20px; color: #31C27C">上传音乐</a-button>
            <a-dropdown>
              <a-avatar
                  shape="circle"
                  :src="user.avatarUrl"
              />
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <router-link to="/">前台页面</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/user/login" @click="userLogout">退出登录</router-link>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Designed by 徐志鹏
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="js" setup>
import {CommentOutlined, DesktopOutlined, FormOutlined, UngroupOutlined,} from '@ant-design/icons-vue';
import {onMounted, ref, watchEffect} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {getCurrentUser} from "../services/user.js";
import {message} from "ant-design-vue";
import myAxios from "../plugins/myAxios.js";
import routes from "../route/index.js";

const selectedKeys = ref([]);

const title = ref('');

const route = useRoute();
const router = useRouter();

const user = ref({});

watchEffect(() => {
  // 根据当前路由的 path 来设置选中的菜单项
  switch (route.path) {
    case '/':
      selectedKeys.value = ['1'];
      break;
    case '/hot/music':
      selectedKeys.value = ['2'];
      break;
    case '/singer/recommend':
      selectedKeys.value = ['3'];
      break;
    case '/song/star':
      selectedKeys.value = ['4'];
      break;
    case '/setting':
      selectedKeys.value = ['5'];
      break;
    default:
      // 如果没有匹配到任何菜单项，清空选中项
      selectedKeys.value = [];
  }
});

router.beforeEach((to, from) => {
  routes.forEach(route => {
    if (to.path === route.path) {
      title.value = route.title;
      console.log(route.title)
    }
  });
});

onMounted(async () => {
  if (!route.path.includes('/user/login') && !route.path.includes('/user/register')) {
    const res = await getCurrentUser();
    if (res) {
      user.value = res;
    }
  }
});

const userLogout = async () => {
  const res = await myAxios.post('/user/logout');
  if (res.code === 0) {
    message.success('退出成功');
  } else {
    message.error('退出失败');
  }
};

</script>

<style scoped>

</style>
