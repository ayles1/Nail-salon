import React, { useState } from 'react'

import ReviewItem from './ReviewItem'

const ReviewItemList = () => {

  const [reviews, setReviews] = useState(['fef', 'efle;', 'wgk', 'kw;we', 'wkf;wk', 1,4,5,7,9,0,3,6,3])

  return (
    reviews.map((review, index,array)=>{
        return <ReviewItem key={index}/>
      })
  )
}

export default ReviewItemList