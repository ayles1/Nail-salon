import React, { useEffect, useState } from 'react'
import reviewController from '../../../Controllers/Review/review.controller'

import ReviewItem from './Review'
import ToggleRatingsButton from './ToggleRatingsButton'

function ReviewItemList() {
    const [reviews, setReviews] = useState([])
    const [lastReviews, setLastReviews] = useState([])
    const [showAllReviews, setShowAllReviews] = useState(false)

    useEffect(() => {
        reviewController.getReviews().then((res) => {
            setReviews(res.reverse())
            setLastReviews(res.slice(0, 2))
        })
    }, [reviews])

    return (
        <>
            {!showAllReviews
                ? lastReviews.map((review, index) => (
                      <ReviewItem review={review} key={review.date} />
                  ))
                : reviews.map((review, index, array) => (
                      <ReviewItem review={review} key={review.date} />
                  ))}
            {/* Link to all reviews is here */}
            <div style={{ marginTop: '20px' }}>
                <ToggleRatingsButton
                    value={!showAllReviews ? 'Показать все' : 'Закрыть'}
                    linkTo="#reviews"
                    onClick={() => setShowAllReviews((prev) => !prev)}
                />
            </div>
        </>
    )
}

export default ReviewItemList
