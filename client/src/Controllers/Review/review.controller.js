class ReviewController {
  async getReviews() {
    const res = await fetch("http://localhost:8000/reviews/get", {
      method: "GET",
    });
    const reviews = await res.json();
    return reviews;
  }
  async sendReview(data) {
    const res = await fetch("http://localhost:8000/reviews/send", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(data),
    });
    const review = await res.json();
    console.log(review);
  }
  reviews;
}

export const reviewController = new ReviewController();
