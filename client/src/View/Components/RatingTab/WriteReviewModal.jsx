import React, { useState } from 'react'

import { Form, redirect, useNavigate } from 'react-router-dom';

import { Box, Button, Input, Modal, Rating, TextField, Typography } from '@mui/material';
import { reviewController } from '../../../Controllers/Review/review.controller';
const style = {
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

export function action(){
    return redirect('/confirmation')
  }
  
const WriteReviewModal = ({open, handleClose}) => {
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(0)
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
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Оставьте отзыв
    </Typography>
    <Form method='post'>
    <TextField sx={{margin:'20px 0'}} focused multiline minRows={5} maxRows={10} fullWidth onChange={(e)=>handleTextChange(e)}/>
    <div>
      <Typography component="legend">Ваша оценка :</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
        setRating(newValue);
      }}
      />
    </div>
    <Button type="submit" sx={{marginTop:'10px'}} variant="outlined" onClick={async ()=>{
      //Отправка отзыва на бэкенд
      //Доделать здесь !!!!!
      await reviewController.sendReview({
        rating,
        text:reviewText,
        date: Date.now()
      })
      // handleClose()
      
    }}>Отправить</Button>
    </Form>
  </Box>
</Modal>
  )
}

export default WriteReviewModal