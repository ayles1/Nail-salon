import React, { useState } from 'react'

import { useScroll } from '../../Services/Scrolling.service'

import { Box, Tab, Tabs, Typography } from '@mui/material'
import ReviewItem from './ReviewItem'
import ToggleRatingsButton from './ToggleRatingsButton'
import ReviewItemList from './ReviewItemList'
import { useNavigate } from 'react-router-dom'


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
  
  const [value,setValue] = useState(0)
  const {componentsRefs} = useScroll()
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function toggleAllReviews () {
    showAllReviews === false || navigate(-1)
    setShowAllReviews((prev) => !prev)
  }
  return (
   <Box  ref={componentsRefs.ratings} sx={{border:'1px' ,borderColor:'divider', display:'flex', flexDirection:'column', alignItems:'center', margin:'100px 0 0 0'}}>
     <Typography component="h1" variant='h4' sx={{fontSize:"45px",marginBottom:'30px'}}>Отзывы</Typography>
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

        {/* Link to all reviews is here */}
        <ToggleRatingsButton value={"Показать все"} linkTo='#reviews' onClick={toggleAllReviews}/>
        {showAllReviews?(
          <ReviewItemList/>
        ):null}
        <div>Уже были у меня? Напишите отзыв!</div>

        {/* Link to review modal is there */}
        <ToggleRatingsButton value="Оставить отзыв !" linkTo="postreview"/>  

      </TabPanel>
      <TabPanel value={value} index={1}>
        Goodbye geys
      </TabPanel>
    </Box>
  )
}

export default Ratings