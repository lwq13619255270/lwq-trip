import lwqRequest from '../request'
export function getCityAll () {
    return lwqRequest.get({
        url: '/city/all'
    })
}