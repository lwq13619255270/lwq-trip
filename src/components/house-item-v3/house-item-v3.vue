<template>
    <div class="house-item-v3">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="infos">
                <div class="location">
                    <img src="@/assets/img/home/home-location.png" alt="">
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="price">
                    <div class="new">{{ "￥" + itemData.finalPrice }}</div>
                    <div class="old">{{ "￥" + itemData.productPrice }}</div>
                    <div class="tip">{{ itemData.priceTipBadge?.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
 const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
 })
</script> 
<style lang="less" scoped>
    .house-item-v3 {
        width: 50%;
        .item-inner {
            position: relative;
            margin: 5px;
            background: #fff;
            border-radius: 6px;
            overflow: hidden;
            .cover {
                img {
                    width: 100%;
                }
            }
            .infos {
                .location {
                    margin-bottom: 8px;
                    img {
                       width: 16px;
                       height: 16px;
                       vertical-align: bottom;
                       margin-right: 4px; 
                    }
                    span {
                        font-size: 12px;
                        color: #666;
                    }
                }
                padding: 8px 10px;
                .summary {
                    color: #666;
                    font-size: 12px;
                }
                .name {
                    margin: 5px 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .price {
                    display: flex;
                    margin-top: 10px;
                    div {
                        margin-right: 4px;
                    }
                    .new {
                        color: var(--primary-color);
                    }
                    .old {
                        color: #666;
                        font-size: 12px;
                        text-decoration: line-through;
                    }
                    .tip {
                        font-size: 10px;
                        color: #fff;
                        background: red;
                        border-radius: 6px;
                        padding: 2px;
                    }
                }
            }

        }
    }
</style>