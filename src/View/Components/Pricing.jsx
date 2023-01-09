import { Box, Typography } from '@mui/material'
import React from 'react'
import { useScroll } from '../Services/Scrolling'
import EnrollButton from './Enroll/EnrollButton'



const Pricing = () => {
  const {componentsRefs} = useScroll()

  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} ref={componentsRefs.pricing} >
      <Typography id="price_section" component='h1' variant='h4'>Прайс лист</Typography>
      <Typography component='img' src="https://i.pinimg.com/564x/fd/09/3c/fd093cdb4d1d8e19e14c3d753c9cdce8.jpg"></Typography>
    <EnrollButton/>
    </Box>
  )
}

export default Pricing