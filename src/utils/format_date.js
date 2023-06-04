import dayjs from "dayjs"

export function formaMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}

// 时间差
export function getDiffDays(startDate, endDate) {
    return dayjs(endDate).diff(startDate, 'day')
}