import { Button } from '@mui/material'
import React from 'react'

const ChooseServiceButton = ({chooseService, value}) => {
  return (
    <Button onClick={()=>{
        chooseService(value)
    }}
     variant="outlined">Добавить</Button>
  )
}

export default ChooseServiceButton