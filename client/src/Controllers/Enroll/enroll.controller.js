/* eslint-disable class-methods-use-this */
class EnrollController {
    servicesList = []

    saveServicesListSession(list) {
        sessionStorage.setItem('Services', JSON.stringify(list))
    }

    saveDetailsSession(details) {
        sessionStorage.setItem('Details', JSON.stringify(details))
    }

    getServicesListSession() {
        return JSON.parse(sessionStorage.getItem('Services'))
    }

    getDetailsSession() {
        return JSON.parse(sessionStorage.getItem('Details'))
    }

    async saveServicesListDB(list) {
        const res = await fetch('/enroll/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(list),
        })
        this.servicesList = await res.json()
        return this.servicesList
    }
}

const enrollController = new EnrollController()
export default enrollController
