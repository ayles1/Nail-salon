/* eslint-disable class-methods-use-this */
class EnrollController {
    servicesList = []

    saveServicesListSession(list) {
        sessionStorage.setItem('Services', JSON.stringify(list))
    }

    getServicesListSession() {
        return JSON.parse(sessionStorage.getItem('Services'))
    }

    async saveServicesListDB(list) {
        const res = await fetch('http://localhost:8000/enroll/send', {
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
