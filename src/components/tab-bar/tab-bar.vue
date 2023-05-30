<template>
    <div class="tab-bar">
        <van-tabbar v-model="active">
            <template v-for="(item, index) in tarBarData">
                <van-tabbar-item :to="item.path" :icon="item.icon">
                    <span>{{item.text}}</span>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>
<script setup>
    import tarBarData from '@/assets/data/tab-bar'
    import { ref } from 'vue';
    const active = ref(0);
   
</script> 
<style lang="less" scoped>
    .tab-bar {
    }
</style>