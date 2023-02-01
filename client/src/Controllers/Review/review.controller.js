class ReviewController {
    reviews = []

    async getReviews() {
        const url =
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:9000/reviews/get'
                : '/reviews/get'
        const res = await fetch(url, {
            method: 'GET',
        })
        this.reviews = await res.json()
        return this.reviews
    }

    async sendReview(data) {
        const url =
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:9000/reviews/send'
                : '/reviews/send'
        const res = await fetch(url, {
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
