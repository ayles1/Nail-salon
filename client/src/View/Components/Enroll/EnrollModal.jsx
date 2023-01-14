import React, { useState } from 'react'

import {  Form, Link, redirect, useNavigate } from "react-router-dom"

import { Alert, Box, Button, Modal, Snackbar, Typography } from '@mui/material'
import { Close } from '@mui/icons-material';
import AdditionalsList from './Additional.services-list';
import ComplexList from './Complex.services-list';
import ManicureList from './Manicure.services-list';
import PedicureList from './Pedicure.services-list';

import { enrollController } from '../../../Controllers/Enroll/enroll.controller';

export function action(){
  return redirect('/confirmation')
}

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

const EnrollModal = () => {
  const navigation = useNavigate()
  const [servicesList, setServicesList] = useState([])

  function toggleServicesList (item) {
  setServicesList((list)=>list.concat(item))
  }
  function handleWindowClose(){
    //maybe some other features one day
    navigation(-1)
  }
  
  return (
    <Modal
    sx={{overflow:'auto'}}
  open={true}
  onClose={handleWindowClose}
  >
  <Box sx={style}>
    <Typography variant="h5" component="h3">
      Запись
    </Typography>
    <Form method="post">
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
            <Close sx={{cursor:'pointer'}} onClick={()=>{
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
    <Button type="submit" onClick={async (e)=>{
      //Подтверждение записи, отправка на бекэнд
      // await enrollController.saveServicesListDB(servicesList)
      // Добавить алерт спасибо за запись и редирект на "/"
      // handleWindowClose()
    }} variant='contained'>
      {/* <Link to="/confirmation">Подтвердить</Link> */}
      Подтвердить
      </Button>
    </Form>
  </Box>
</Modal>
  )
}


export default EnrollModal