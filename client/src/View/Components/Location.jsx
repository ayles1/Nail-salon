import React from 'react'

import { useScroll } from '../Services/Scrolling'

import { Box, Typography } from '@mui/material'
import EnrollButton from './Enroll/EnrollButton'

const Location = () => {
  const {componentsRefs} = useScroll()
  return (
   <Box ref={componentsRefs.address} sx={{margin:'100px 0 0 0', padding:'0 0 0 100px',display:'flex',justifyContent:'space-evenly', alignItems:'center'  }}>

        <Box sx={{width:'60%',marginBottom:'20px'}}>
        <iframe title='yandex-map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A52a79e81fcdeda05a7adae16fcf73e2581c314a7e03a62b594a47b9c236b16f2&amp;source=constructor" style={{width:'100%',height:'400px'}} frameBorder="0"></iframe>
        </Box>
        <Box>
            <Typography component="a" href="tel" sx={{textAlign:'center',fontWeight:'700'}}>
            +7 999 164 27 44
            </Typography>
            <Typography>ЖК Салават Купере, Тансык 7</Typography>     
            <EnrollButton/> 
        </Box>
    </Box>
  )
}


export default Location
