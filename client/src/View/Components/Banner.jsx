import React from 'react'

import { Box } from '@mui/material';
import Carousel from './UI/Carousel';
import image1 from '../../assets/img/photo1.jpg'
import image2 from '../../assets/img/photo2.jpg'
import image3 from '../../assets/img/photo3.jpg'
import image4 from '../../assets/img/photo4.jpg'

const images = [image1, image2, image3, image4]

const Banner = () => {
  return (
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Carousel images={images}/>
      </Box>
  )
}

export default Banner