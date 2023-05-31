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
            <van-tab title="国内港澳台"></van-tab>
            <van-tab title="海外"></van-tab>
        </van-tabs>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getCityAll } from '@/service'

const searchValue = ref('');
const router = useRouter();
const onCancel = () => {
    // 返回上一层
    router.back();
}

// tab的切换
const tabActive = ref(0);
getCityAll().then(res => {
    
})
</script> 
<style lang="less" scoped>
</style>