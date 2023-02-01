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
        const url =
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:9000/enroll/send'
                : '/enroll/send'
        const res = await fetch(url, {
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
