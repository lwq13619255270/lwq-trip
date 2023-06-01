import dayjs from "dayjs"

export function formaMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}