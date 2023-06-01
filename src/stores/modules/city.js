import { defineStore } from 'pinia'
import { getCityAll } from '@/service'

const useCityStore = defineStore('city', {
    state: () => ({
        allCities: {}
    }),
    actions: {
        async fetchAllCitiesData() {
            const res = await getCityAll();
            this.allCities = res.data;
        }
    }
})

export default useCityStore