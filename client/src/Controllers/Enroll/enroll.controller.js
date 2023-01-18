class EnrollController {
    servicesList = []

    async saveServicesListDB(list) {
        const res = await fetch('http://localhost:8000/test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(list),
        })
        this.serviesList = await res.json()
        return this.serviesList
    }
}

const enrollController = new EnrollController()
export default enrollController
