import { defineStore } from 'pinia'
import { getHotSuggests } from '@/service'

const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
    }),
    actions: {
        async fetchHotSuggestData() {
           const res = await getHotSuggests();
           this.hotSuggests = res.data;
        }
    }
})

export default useHomeStore;