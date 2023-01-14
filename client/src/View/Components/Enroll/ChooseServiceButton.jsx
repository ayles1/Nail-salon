import React from 'react'

import { Button } from '@mui/material'

const ChooseServiceButton = ({chooseService, value}) => {
  return (
    <Button onClick={()=>{
        chooseService(value)
    }}
     variant="outlined">Добавить</Button>
  )
}

export default ChooseServiceButton