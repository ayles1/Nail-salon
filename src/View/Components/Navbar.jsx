import { Close, Dehaze } from '@mui/icons-material'
import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import EnrollButton from './Enroll/EnrollButton'
import { useScroll } from '../Services/Scrolling'

const Navbar = () => {
  
  const widthQuery = useMediaQuery('(min-width:860px)')
  const {navigationRefs,handleClick } = useScroll()
  const [showBurger, setShowBurger] = useState(true)
  function handleBurgerClick () {
    setShowBurger((prev) => !prev)
  }
  return (
    <Typography component="nav">
        
            {widthQuery
            ?(<Typography component='ul' sx={{position:'fixed',}}>
            <Typography onClick={()=>handleClick('portfolio')} component='li' ref={navigationRefs.portfolio} sx={{textAlign:'center', opacity:0.7,cursor:'pointer'}}>
            Портфолио
            </Typography>
            <Typography  onClick={()=>handleClick('pricing')} component='li' ref={navigationRefs.pricing} sx={{textAlign:'center',opacity:0.7, cursor:'pointer'}}>
              Прайс и акции
            </Typography>
            <Typography onClick={()=> handleClick('ratings')} component='li' ref={navigationRefs.ratings} sx={{textAlign:'center',opacity:0.7, cursor:'pointer'}}>
              Отзывы
            </Typography>
            <Typography  onClick={()=> handleClick('address')} component='li' ref={navigationRefs.address} sx={{margin:'0 0 20px 0',textAlign:'center',opacity:0.7, cursor:'pointer'}}>
              Адрес
            </Typography>
            <EnrollButton/>
          </Typography>)
            : (<Box>
              {showBurger
              ? <Dehaze onClick={handleBurgerClick}/>
              : <Box sx={{width:'100vw', height:'100vh', backgroundColor:'white', position:'absolute', inset:0 , zIndex:'1000'}}>
                <Close onClick={handleBurgerClick}/>
              </Box>
              }
              
              </Box>)
            }
                
    </Typography>
  )
}

export default Navbar

