export function parseTime(timeString) {
    const date = new Date(timeString)
    let hours = date.getHours()
    let minutes = date.getMinutes()

    if (hours.length === 1) {
        hours = `0${hours}`
    }

    if (minutes.length === 1) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`
}

export function parseDate(dateString) {
    const fullDate = new Date(dateString)
    let date = fullDate.getDate()
    let month = fullDate.getMonth() + 1
    let year = fullDate.getFullYear()

    if (date.length === 1) {
        date = `0${date}`
    }
    if (month.length === 1) {
        month = `0${month}`
    }
    return `${date} ${month} ${year}`
}
