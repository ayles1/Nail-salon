class ReviewController {
  async getReviews() {
    const res = await fetch("http://localhost:8000/reviews", {
      method: "GET",
    });
    const reviews = res.json();
    console.log(reviews);
    return reviews;
  }
  async postReview(data) {
    const res = await fetch("http://localhost:8000/reviews", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const review = res.json();
    console.log(review);
  }
  reviews;
}

export const reviewController = new ReviewController();
