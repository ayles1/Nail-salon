import { Box, Button, Input, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
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
const WriteReviewModal = ({open, handleClose}) => {
  const [reviewText, setReviewText] = useState('')
  function handleTextChange (event) {
    setReviewText(event.target.value)
  }
  return (
    <Modal
  open={open}
  onClose={handleClose}>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Оставьте отзыв
    </Typography>
    <Input onChange={(e)=>handleTextChange(e)}/>
    <Button variant="outlined" onClick={()=>{
      //Отправка отзыва на бэкенд
      handleClose()
      
    }}>Отправить</Button>
  </Box>
</Modal>
  )
}

export default WriteReviewModal