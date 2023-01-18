class ReviewController {
    reviews = []

    async getReviews() {
        const res = await fetch('http://localhost:8000/reviews/get', {
            method: 'GET',
        })
        this.reviews = await res.json()
        return this.reviews
    }

    async sendReview(data) {
        const res = await fetch('http://localhost:8000/reviews/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(data),
        })
        const review = await res.json()
        this.reviews.push(review)
        return this.reviews
    }
}
const reviewController = new ReviewController()
export default reviewController
