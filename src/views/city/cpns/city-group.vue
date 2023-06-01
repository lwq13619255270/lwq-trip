<template>
    <div class="city-group">
        <van-index-bar :index-list="indexList">
            <van-index-anchor index="热门" />
            <div class="list">
                <template v-for="(city, index) in groupData.hotCities" :key="index">
                    <div class="hot-city" @click="cityClick(city)">{{ city.cityName }} </div>
                </template>
            </div>
            <template v-for="(group, index) in groupData.cities" :key="index">
                    <!-- <h2 class="title">标题：{{ group.group }}</h2> -->
                    <van-index-anchor :index="group.group" />
                    <template v-for="(city, i) in group.cities" :key="i">
                        <van-cell :title="city.cityName"  @click="cityClick(city)"/>
                    </template>
            </template>
        </van-index-bar>
    </div>
</template>
<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue'
import { useRouter } from 'vue-router';
// 定义props
const props = defineProps({
    groupData: {
        type: Object,
        default: () => ({})
    }
})

// 动态获取索引
const indexList = computed(() => {
    const list = props.groupData.cities.map(item => item.group);
    list.unshift('#');
    return list
})

// 监听城市的点击
const router = useRouter();
const cityStore = useCityStore();
const cityClick = (city) => {
    // 获取选中的城市
    cityStore.currentCity = city;
    // 返回上一级
    router.back();

}
</script> 
<style lang="less" scoped>
    .list {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-right: 25px;
        flex-wrap: wrap;
        .hot-city {
            width: 70px;
            height: 28px;
            border-radius: 14px;
            font-size: 12px;
            color: #000;
            text-align: center;
            line-height: 28px;
            background-color: #fff4ec;
            margin: 8px 0;
        }
    }
</style>