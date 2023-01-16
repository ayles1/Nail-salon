import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { Box, Button, Modal, Rating, TextField, Typography } from '@mui/material';
import { reviewController } from '../../../Controllers/Review/review.controller';
import { validateReviewText, validateReviewRating } from '../../../Validations/Review.validation';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  
const WriteReviewModal = () => {
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(0)
  const [isValidText, setIsValidText] = useState(true)
  const [isValidRating, setIsValidRating] = useState(true)
  const navigate = useNavigate()

  function handleTextChange (event) {
    setReviewText(event.target.value)
  }
  return (
    <Modal
  open={true}
  onClose={()=>{
    navigate(-1)
  }}
  >
  <Box sx={modalStyle}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Оставьте отзыв
    </Typography>
    <form method='post'>
    <TextField 
    sx={{margin:'20px 0'}} 
    error={!isValidText} 
    helperText={isValidText?null:"Неверный формат текста"} 
    name="text" 
    focused 
    multiline 
    minRows={5} 
    maxRows={10} 
    fullWidth 
    onChange={(e)=>handleTextChange(e)}
    />
    <div>
      <Typography component="legend">Ваша оценка :</Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => {
        setRating(newValue);
      }}
      />
      {!isValidRating
        ?<div style={{color:'red'}}>Укажите рейтинг</div>
        :null}
    </div>
    <Button type="submit"  sx={{marginTop:'10px'}} variant="outlined" onClick={ async (e)=>{
      e.preventDefault()
      //Results of validations
      const validText = validateReviewText(reviewText) 
      const validRating = validateReviewRating(rating)
      
      if(validText && validRating){          //Correct validation
        navigate('/confirmation/review')
        await reviewController.sendReview({
          rating,
          text:reviewText,
          date: Date.now()
        })
      }
      else if(validText && !validRating){   //Rating incorrect
        setIsValidText(true)  
        setIsValidRating(false)
      }
      else if(!validText && validRating){    //Text incorrect
        setIsValidRating(true)
        setIsValidText(false)
      }
      else{
        setIsValidRating(false)
        setIsValidText(false)
      } 
    }}>Отправить</Button>
    </form>
  </Box>
</Modal>
  )
}

export default WriteReviewModal