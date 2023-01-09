import { FormControlLabel } from '@mui/material'
import React from 'react'
import { useColorMode } from '../../Themes/ColorModeContext'
import MaterialUISwitch from './MuiSwitchIcon'


const ThemeSwitch = () => {
    const {toggleColorMode} = useColorMode()
    
  return (
        <FormControlLabel 
        onChange={toggleColorMode} 
        control={<MaterialUISwitch  sx={{ m: 1 }}  />}
          
          />


  )
}

export default ThemeSwitch

