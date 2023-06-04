import lwqRequest from '../request'
export function getHotSuggests() {
    return lwqRequest.get({
        url: '/home/hotSuggests'
    })
}