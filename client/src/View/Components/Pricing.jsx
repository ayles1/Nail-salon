import React from 'react'

import { useScroll } from '../Services/Scrolling.service'

import { Box, Typography } from '@mui/material'
import EnrollButton from './Enroll/EnrollButton'



const Pricing = () => {
  const {componentsRefs} = useScroll()

  return (
    <Box ref={componentsRefs.pricing} sx={{display:'flex',flexDirection:'column',alignItems:'center', margin:"100px 0 0 0"}}  >
      <Typography component='h1' variant='h4' sx={{fontSize:"45px" ,marginBottom:'20px'}}>Прайс лист</Typography>
      <Typography component='img' src="https://i.pinimg.com/564x/fd/09/3c/fd093cdb4d1d8e19e14c3d753c9cdce8.jpg" sx={{marginBottom:'30px'}}/>
    <EnrollButton/>
    </Box>
  )
}

export default Pricing