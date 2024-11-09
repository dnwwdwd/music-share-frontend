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
            <UngroupOutlined/>
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
        <a-menu-item key="6" v-if="isAdmin">
          <router-link to="/admin/musicManagement">
            <CustomerServiceOutlined/>
            <span>音乐管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="7" v-if="isAdmin">
          <router-link to="/admin/singerManagement">
            <MehOutlined/>
            <span>歌手管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="8" v-if="isAdmin">
          <router-link to="/admin/userManagement">
            <UserOutlined />
            <span>用户管理</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; height: 60px">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="font-size: 20px; margin-left: 20px; color: #1E90FF">{{ title }}</span>
          <div style="margin-right: 30px">
            <a-button style="margin-right: 20px; color: #31C27C" @click="showModal">上传音乐</a-button>
            <a-modal v-model:open="open" title="上传音乐" @ok="handleOk" cancelText="取消" okText="确认上传">
              音乐名称：
              <a-input v-model:value="formModal.name" class="a-input"/>
              音乐图片：
              <a-input v-model:value="formModal.imgUrl" class="a-input"/>
              音乐类型：
              <a-input v-model:value="formModal.type" class="a-input"/>
              音乐描述：
              <a-input v-model:value="formModal.description" class="a-input"/>
              音乐链接：
              <a-input v-model:value="formModal.url" class="a-input"/>
              音乐时长：
              <a-input v-model:value="formModal.duration" class="a-input"/>
              歌手名称：
              <a-input v-model:value="formModal.singerName" class="a-input"/>
              歌手图片：
              <a-input v-model:value="formModal.singerImgUrl" class="a-input"/>
              歌手描述：
              <a-input v-model:value="formModal.singerDesc" class="a-input"/>
            </a-modal>
            <a-dropdown>
              <a-avatar
                  shape="circle"
                  :src="user.avatarUrl"
              />
              <template #overlay>
                <a-menu>
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
import {
  CommentOutlined, DesktopOutlined, FormOutlined,
  UngroupOutlined, CustomerServiceOutlined,
  MehOutlined,UserOutlined
} from '@ant-design/icons-vue';
import {onMounted, ref, watchEffect} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {getCurrentUser} from "../services/user.js";
import {message} from "ant-design-vue";
import myAxios from "../plugins/myAxios.js";
import routes from "../route/index.js";
import {getCookie} from "../utils/utils.js";

const selectedKeys = ref([]);

const title = ref('');

const route = useRoute();
const router = useRouter();

const user = ref({});

const isAdmin = ref(false);

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
    case '/admin/musicManagement':
      selectedKeys.value = ['6'];
    case '/admin/singerManagement':
      selectedKeys.value = ['7'];
    case '/admin/userManagement':
      selectedKeys.value = ['8'];
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
      isAdmin.value = user.value.role === 'admin';
    }
  }
});

const userLogout = async () => {
  const csrfToken = getCookie('csrftoken'); // 获取 CSRF token
  const res = await myAxios.post('/user/logout', {}, {
    headers: {
      'X-CSRFToken': csrfToken, // 添加 CSRF token
    },
    withCredentials: true, // 确保携带 Cookie
  });

  if (res.data.code === 0) {
    message.success('登出成功！');
    // 清理本地存储的用户信息等
  } else {
    message.error('登出失败: ' + res.data.message);
  }
};

const open = ref(false);

const showModal = () => {
  open.value = true;
}

const formModal = ref({
  name: '',
  imgUrl: '',
  type: '',
  description: '',
  url: '',
  duration: '',
  singerName: '',
  singerImgUrl: '',
  singerDesc: '',
})

const handleOk = async () => {
  const res = await myAxios.post('/music/upload', formModal.value);
  if (res.code == 0) {
    window.location.reload();
  }
}


</script>

<style scoped>

</style>
