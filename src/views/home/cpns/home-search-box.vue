<template>
    <div class="home-search-box">
        <div class="location">
            <div class="city" @click="cityClick">广州</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/home-location.png" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const cityClick = () => {
    router.push('/city')
}

const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log('获取当前位置', res)
    }, err => {
        console.log('获取当前位置失败', err)
    })
}
</script> 
<style lang="less" scoped>
     .location {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;
        .city {
            flex: 1;
            color: #333;
        }
        .position {
            width: 74px;
            .text {
                font-size: 12px;
                color: #666;
            }
            img {
                vertical-align: bottom;
                margin-left: 4px;
                width: 18px;
                height: 18px;
            }
        }
    }
</style>