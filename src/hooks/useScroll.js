import { onMounted, onUnmounted, ref } from 'vue';

// 如果有多个回调就不方便管理，所以直接把结果返回出来，自己组件自行处理
// export default function useScroll(callback) {
//     // 监听window的滚动
//     // 1、当离开页面的时候要移除监听
//     // 2、如果其他页也进行类似的监听，会重复代码编写 
//     const scrollListenerHandler = () => {
//         const clientHeight = document.documentElement.clientHeight;
//         const scrollTop = document.documentElement.scrollTop;
//         const scrollHeight = document.documentElement.scrollHeight;
//         if (scrollHeight <= scrollTop + clientHeight) {
//             callback();
//         }
//     }

//     onMounted(() => {
//         console.log('挂载')
//         window.addEventListener('scroll', scrollListenerHandler)
//     })

//     onUnmounted(() => {
//         console.log('销毁')
//         window.removeEventListener('scroll', scrollListenerHandler)
//     })
// }
export default function useScroll() {

    const isReachBottom = ref(false);
    const scrollListenerHandler = () => {
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        if (scrollHeight <= scrollTop + clientHeight) {
            isReachBottom.value = true;
        }
    }

    onMounted(() => {
        console.log('挂载')
        window.addEventListener('scroll', scrollListenerHandler)
    })

    onUnmounted(() => {
        console.log('销毁')
        window.removeEventListener('scroll', scrollListenerHandler)
    })

    return { isReachBottom }
}