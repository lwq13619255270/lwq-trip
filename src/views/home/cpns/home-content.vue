<template>
    <div class="home-content">
        <h2>热门精选</h2>
        <div class="list">
            <template v-for="(item, index) in houseList" :key="item.data.houseId">
                <house-item-v9 v-if="item.discoveryContentType === 9" :item-data="item.data"></house-item-v9>
                <house-item-v3 v-else-if="item.discoveryContentType === 3" :item-data="item.data"></house-item-v3>
            </template>
        </div>
        <button @click="moreBtnClick">加载更多</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import useHomeStore from '@/stores/modules/home';
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore();
// const currentPage = ref(1);
homeStore.fetchHouseListData();
const { houseList } = storeToRefs(homeStore);
console.log(houseList)
// 加载更多
const moreBtnClick = () => {
    // currentPage.value++;
    homeStore.fetchHouseListData();
}
</script> 
<style lang="less" scoped>
    .home-content {
        padding: 8px 10px;
        // margin-bottom: 50px;
        title {
            font-size: 22px;
            padding: 10px;
        }
        .list {
            // height: 100px;
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>