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
        <div class="section date-range" @click="changeDate">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="title">{{ startDate }}</span>
                </div>
                <div class="stay">共{{ stayCount }}晚</div>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="title">{{ endDate }}</span>
                </div>
            </div>
        </div>

        <van-calendar 
            v-model:show="showCalendar" 
            type="range"
            :round="false"
            color="#ff9854"
            :show-confirm="false"  
            @confirm="onConfirm" />

        <div class="section price-counter bottom-gray-line">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>
        <div class="section keyword bottom-gray-line">关键字/位置/民俗名</div>
        <div class="section hot-suggests">
            <template v-for="(item, index) in hotSuggests" :key="index">
                <div 
                    class="item" 
                    :style="{color: item.tagText.color, background: item.tagText.background.color}">
                    {{ item.tagText.text }}
                </div>
            </template>
        </div>
        <div class="search-btn">
            <div class="btn" @click="startSearch">开始搜索</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formaMonthDay, getDiffDays } from '@/utils/format_date'
import useHomeStore from '@/stores/modules/home'

const router = useRouter();

// 定义props
// const props = defineProps({
//     hotSuggests: {
//         type: Array,
//         default: () => []
//     }
// })

// 进入城市页面
const cityClick = () => {
    router.push('/city')
}

// 位置定位
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
const newDate = new Date().setDate(nowDate.getDate() + 1);

const startDate = ref(formaMonthDay(nowDate));
const endDate = ref(formaMonthDay(newDate));
const stayCount = ref(getDiffDays(nowDate, newDate));

// 选择日期
const showCalendar = ref(false);
const changeDate = () => {
    showCalendar.value = true
}
const onConfirm = (event) => {
    const selectStartDate = event[0];
    const selectEndDate = event[1];
    startDate.value = formaMonthDay(selectStartDate);
    endDate.value = formaMonthDay(selectEndDate);
    showCalendar.value = false;
    stayCount.value = getDiffDays(selectStartDate, selectEndDate);
}

// 获取热门推荐
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData();
const { hotSuggests } = storeToRefs(homeStore);
</script> 
<style lang="less" scoped>
.home-search-box {
    --van-calendar-popup-height: 100%;
}

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

.price-counter {
    height: 44px;
    .start {
        border-right: 1px solid var(--line-color);
    }
}
.keyword {
    height: 44px;
}

.hot-suggests {
    margin: 10px 0;
    .item {
        padding: 4px 8px;
        margin: 6px 4px;
        border-radius: 4px;
    }
}

</style>