import lwqRequest from '../request'
export function getHotSuggests() {
    return lwqRequest.get({
        url: '/home/hotSuggests'
    })
}
export function getHomeCategories() {
    return lwqRequest.get({
        url: '/home/categories'
    })
}
export function getHomeHouseList(page = 1) {
    return lwqRequest.get({
        url: 'home/houselist',
        params: {
            page: page
        }
    })
}