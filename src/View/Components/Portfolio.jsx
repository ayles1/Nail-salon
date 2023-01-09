import { Box, Grow, ImageList, ImageListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useScroll } from '../Services/Scrolling'
import image1 from "../../assets/img/photo1.jpg"
import image2 from '../../assets/img/photo2.jpg'
import image3 from '../../assets/img/photo3.jpg'
import image4 from '../../assets/img/photo4.jpg'
import image5 from '../../assets/img/photo5.jpg'
import image6 from '../../assets/img/photo6.jpg'
import image7 from '../../assets/img/photo7.jpg'
import image8 from '../../assets/img/photo8.jpg'
import image9 from '../../assets/img/photo9.jpg'

const images = [image1, image2, image3, image4,image5,image6,image7,image8, image9]
const Portfolio = () => {
  const {componentsRefs} = useScroll()
  const [checked, setChecked] = useState(false)
  useEffect(() =>{
    setChecked(true)
  },[])

  return (
    <Box ref={componentsRefs.portfolio} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography component='h1' variant='h4'>Мое портфолио</Typography>
        <ImageList sx={{width:'70%'}} variant="woven" cols={3}>
          {images.map((img,index)=>{
           return( 
           <Grow key={index} in={checked}>
            <ImageListItem >
              <img 
              src={img}
              alt="Не удалось выполнить загрузку"
              loading='lazy'
              />
            </ImageListItem>
            </Grow>
           )
          })}
        </ImageList>
    </Box>
  )
}

export default Portfolio