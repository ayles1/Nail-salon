export function validateUsername(username) {
    if (typeof username === 'string' && username.match(/[а-яё]/gi) && username.length >= 3) {
        return true
    }
    return false
}

export function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.match(/[+7|8]\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/)) {
        return true
    }
    return false
}
