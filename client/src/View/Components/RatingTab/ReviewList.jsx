import React, { useEffect, useState } from 'react'
import { reviewController } from '../../../Controllers/Review/review.controller'

import ReviewItem from './Review'
import ToggleRatingsButton from './ToggleRatingsButton'

const ReviewItemList = () => {
  const [reviews,setReviews] = useState([])
  const [lastReviews, setLastReviews] = useState([])
  const [showAllReviews, setShowAllReviews] = useState(false)

  useEffect(()=>{
      reviewController.getReviews()
      .then((res)=>{
        setReviews(res.reverse())
        setLastReviews(res.slice(0,2))
      })
  },[])

  return (
    <>
    {!showAllReviews
    ?lastReviews.map((review,index)=>{
      return <ReviewItem review={review} key={index}/>
    })
    :reviews.map((review, index,array)=>{
      return <ReviewItem review={review} key={index}/>
    })}
    {/* Link to all reviews is here */}
    <ToggleRatingsButton value={!showAllReviews?"Показать все":"Закрыть"} linkTo='#reviews/this-site' onClick={()=>setShowAllReviews((prev)=>!prev)}/>
    </>
  )
}

export default ReviewItemList