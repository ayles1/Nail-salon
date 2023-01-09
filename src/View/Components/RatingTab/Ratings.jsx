import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useScroll } from '../../Services/Scrolling'
import WriteReviewModal from './WriteReviewModal'
import ReviewItem from './ReviewItem'
import ToggleRatingsButton from './ToggleRatingsButton'


const TabPanel = (props) =>{
  const {value, index, children} = props
  return (
    <div>
      {value === index && (
        <Typography component='div' sx={{display:"flex", flexDirection:'column', alignItems:'center'}}>{children}</Typography>
      )}
    </div>
  )
}

const Ratings = () => {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const [reviews, setReviews] = useState(['fef', 'efle;', 'wgk', 'kw;we', 'wkf;wk', 1,4,5,7,9,0,3,6,3])
  
  const {componentsRefs} = useScroll()
  const [value,setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function toggleAllReviews () {
    setShowAllReviews((prev) => !prev)
  }
  function toggleReviewsModal () {
    setShowReviewsModal((prev)=> !prev)
  }
  return (
   <Box ref={componentsRefs.ratings} sx={{border:'1px' ,borderColor:'divider', display:'flex', flexDirection:'column', alignItems:'center' }}>
     <Typography component="h1" variant='h4'>Отзывы</Typography>
      <Tabs onChange={handleChange} value={value}>
        <Tab
        label='Этот сайт'
        >
        </Tab>
        <Tab
        label="Avito"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>Last 2 reviews</div>
        <ToggleRatingsButton value={"Показать все"} onClick={toggleAllReviews}/>
        {showAllReviews?(
          reviews.map((review, index,array)=>{
            return <ReviewItem key={index}/>
          })
        ):null}
        <div>Уже были у меня? Напишите отзыв!</div>
        <ToggleRatingsButton value="Оставить отзыв !" onClick={toggleReviewsModal}/>
      <WriteReviewModal open={showReviewsModal} handleClose={toggleReviewsModal}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Goodbye geys
      </TabPanel>
      
      
    </Box>
  )
}

export default Ratings