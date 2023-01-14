import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React, { useContext, useState } from 'react'

const ColorModeContext = React.createContext()

export const useColorMode = () => {
    return useContext(ColorModeContext)
}

const ColorModeProvider = ({children}) => {
    const [mode, setMode] = useState('light')
    const toggleColorMode = () => {
        return setMode((prev) => {
            
           return (prev === 'light' ? 'dark' : 'light') })
    }
    const theme = createTheme({
        palette:{
            mode,
        // Main color : #E0F5FF
        // background: mode === 'light' ? {paper:'#42a5f5', default:'#42a5f5'} : {paper:'#000', default:'#000'}
        },

        typography:{
            fontFamily: "'IBM Plex Sans', sans-serif;"
        }
    })

  return (
    <ColorModeContext.Provider value={{
        toggleColorMode,
        theme:theme.palette.mode
        }}>
        <ThemeProvider theme={theme}>
            <CssBaseline>
    {children}
            </CssBaseline>
        </ThemeProvider>
    
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider