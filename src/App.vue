<template>
    <div class="app">
        <router-view></router-view>
        <tab-bar v-if="!router.meta.hideTabNav"></tab-bar>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import TabBar from './components/tab-bar/tab-bar.vue';

const router = useRoute()
</script>
<style scoped>
</style>
