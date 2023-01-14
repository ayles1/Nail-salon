import React from 'react'

import { useNavigate } from "react-router-dom"

import { Alert, Snackbar } from '@mui/material'
import { Box } from '@mui/system'


const ConfirmationAlert = () => {
    const navigate = useNavigate()
   setTimeout(()=>{
    navigate("/")
   }, 4000)
  return (
    <Box>
        <Snackbar open>
            <Alert severity="success">Спасибо!</Alert>
        </Snackbar>
    </Box>
  )
}

export default ConfirmationAlert

