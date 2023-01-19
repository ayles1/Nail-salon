import React from 'react'

import { Box } from '@mui/material'
import image1 from '../../assets/img/photo1.jpg'
import image2 from '../../assets/img/photo2.jpg'
import image3 from '../../assets/img/photo3.jpg'
import image4 from '../../assets/img/photo4.jpg'
import Carousel from './UI/Slider/Carousel'

const images = [image1, image2, image3, image4]

function Banner() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Carousel width="60%" height="400px" autoPlayTime={5000} images={images} autoPlay />
        </Box>
    )
}

export default Banner
