<template>
    <div class="home-search-box">
        <!-- 位置信息 -->
        <div class="location">
            <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/home-location.png" alt="">
            </div>
        </div>
        <!-- 日期范围 -->
        <div class="section date-range">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="title">{{ startDate }}</span>
                </div>
                <div class="stay">共一晚</div>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="title">{{ endDate }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formaMonthDay } from '@/utils/format_date'

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

// 获取当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

// 日期的处理
const nowDate = new Date();
const startDate = ref(formaMonthDay(nowDate));
const newDate = nowDate.setDate(nowDate.getDate() + 1);
const endDate = ref(formaMonthDay(newDate));
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

.date-range {
    height: 44px;
    .stay {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #666;
    }
}

.section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;

    .start {
        flex: 1;
        display: flex;
        height: 44px;
        align-items: center;
    }

    .end {
        min-width: 30%;
        padding-left: 20px;
    }

    .date {
        display: flex;
        flex-direction: column;

        .tip {
            font-size: 12px;
            color: #999;
        }

        .time {
            margin-top: 4px;
            color: #333;
            font-size: 15px;
            font-weight: 500;
        }
    }
}
</style>