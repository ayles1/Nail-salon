import React, { useEffect, useState } from 'react'

import { useScroll } from '../Services/Scrolling.service'

import { Box, Grow, ImageList, ImageListItem, Typography } from '@mui/material'
import { images } from '../../assets/img/index.js'

const Portfolio = () => {
  const {componentsRefs} = useScroll()
  const [checked, setChecked] = useState(false)
  useEffect(() =>{
    setChecked(true)
  },[])

  return (
    <Box ref={componentsRefs.portfolio} sx={{display:'flex', flexDirection:'column', alignItems:'center', margin:"70px 0 0 0"}}>
        <Typography component='h1' variant='h4' sx={{fontSize:"45px", margin:"0 0 30px 0"}}>Мое портфолио</Typography>
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