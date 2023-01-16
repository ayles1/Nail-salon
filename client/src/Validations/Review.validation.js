export function validateReviewText(text) {
  if (typeof text === "string" && text.length > 5) {
    return true;
  }

  return false;
}
export function validateReviewRating(rating) {
  if (typeof rating === "number" && rating > 0) {
    return true;
  }
  return false;
}
