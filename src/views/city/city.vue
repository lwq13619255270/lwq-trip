<template>
    <div class="city top-page">
        <!-- 搜索 -->
        <van-search 
            shape="round"
            show-action
            v-model="searchValue" 
            placeholder="城市/区域/位置"
            @cancel="onCancel"
        />
        <van-tabs v-model:active="tabActive" color="#ff976a">
            <template v-for="(item, key, index) in allCities" :key="key">
                <van-tab :title="item.title"></van-tab>
            </template>
        </van-tabs>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia'

const searchValue = ref('');
const router = useRouter();
const onCancel = () => {
    // 返回上一层
    router.back();
}

// tab的切换
const tabActive = ref(0);

/**
 * 这个位置发送网络请求有两个缺点
 *  1、如果网络请求次数太多，那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
 *  2、如果页面封装了很多的子组件，子组件需要这些数据，我们必须一步步将数据传递过去
 * 
 * 使用pinia管理网络请求
 */
// 获取城市数据
// const allCities = ref();
// getCityAll().then(res => {
//     allCities.value = res.data;
// })

// 从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
</script> 
<style lang="less" scoped>
</style>