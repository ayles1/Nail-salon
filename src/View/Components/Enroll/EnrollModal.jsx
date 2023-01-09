import { Close } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import AdditionalsList from './Additional.services-list';
import ComplexList from './Complex.services-list';
import ManicureList from './Manicure.services-list';
import PedicureList from './Pedicure.services-list';
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
const EnrollModal = ({open, handleClose}) => {
  const [servicesList, setServicesList] = useState([]) 
  
  function toggleServicesList (item) {
  setServicesList((list)=>list.concat(item))
  }
  return (
    <Modal
    sx={{overflow:'auto'}}
  open={open}
  onClose={handleClose}>
  <Box sx={style}>
    <Typography variant="h5" component="h3">
      Запись
    </Typography>
    <form action="post">
      <div>Выберите услуги :</div>
      <ul>
        <ComplexList chooseService={toggleServicesList}/>
        <ManicureList chooseService={toggleServicesList}/>
        <PedicureList chooseService={toggleServicesList}/>
        <AdditionalsList chooseService={toggleServicesList}/>
      </ul>
      {servicesList.map((service, index)=>{
        return (
          <Typography component="div" key={service.name} sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography>{service.name}</Typography>
            <Close onClick={()=>{
              setServicesList((list)=>{
                return list.filter((item)=>item !== service)
              })}}/> 
          </Typography>
        )
      })}
      {servicesList.length > 1
        ?<div>{`Итого : ${servicesList.reduce((sum, obj)=>sum+Object.values(obj).reduce((s,v)=>{
          if (typeof v !== 'string'){
            return s + v
          }
          return s
        },0),0)}`}</div>
        :null
      }
      
    <Button onClick={(e)=>{
      //Подтверждение записи, отправка на бекэнд
      e.preventDefault()
      handleClose()
    }} variant='contained'>
      Подтвердить
      </Button>
    </form>
   
  </Box>
</Modal>
  )
}


export default EnrollModal