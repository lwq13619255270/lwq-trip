<template>
    <div class="home">
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <home-search-box></home-search-box>
        <home-categories></home-categories>
        <home-content></home-content>
    </div>
</template>
<script setup>
// import { ref } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue';
import HomeContent from './cpns/home-content.vue'
// import { getHotSuggests } from '@/service/modules/home'

// 发送网络请求
// 1、热门建议  - 使用状态管理进行网络请求的管理
// const hotSuggests = ref([]);
// getHotSuggests().then(res => {
//     hotSuggests.value = res.data;
// })

</script> 
<style lang="less" scoped>
    
    .home {
        padding-bottom: 50px;
        .banner {
            img {
                width: 100%;
            }
        }
    }
   
</style>