<template>
  <div style="max-width: 80%; margin: auto;">
    <a-list item-layout="vertical" size="large" bordered :pagination="pagination" :data-source="listData"
            v-if="listData && listData.length > 0">
      <template #renderItem="{ item }">
        <a-list-item key="item.title" @click="router.push(`/activity/detail/${item.id}`)">
          <template #extra>
            <img
                height="100px"
                width="120px"
                alt="logo"
                :src="item.imgUrl"
            />
          </template>
          <a-list-item-meta :description="item.name">
            <template #title>
              <a :href="item.href">{{ item.user.nickname }}</a>
            </template>
            <template #avatar><a-avatar :src="item.user.avatarUrl" /></template>
          </a-list-item-meta>
          {{ item.description }}
        </a-list-item>
      </template>
    </a-list>
  </div>
  <div
      v-if="!listData || listData.length < 1"
      style="display: flex; justify-content: center; align-items: center;"
  >
    <a-empty :description="`暂无活动`"/>
  </div>
</template>
<script lang="js" setup>
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {useRouter} from "vue-router";

const router = useRouter();

const listData = ref([]);

const pagination = {
  onChange: (page) => {
    loadData(page);
  },
  pageSize: 3,
};

const loadData = async (page) => {
  const res = await myAxios.get('/activity/list', {
    pageSize: pagination.pageSize,
    pageNum: page,
  });
  listData.value = res.data;
}

onMounted(async () => {
  loadData(1);
});

</script>