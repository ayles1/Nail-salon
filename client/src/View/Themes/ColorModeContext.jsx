import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React, { useContext, useMemo, useState } from 'react'

const ColorModeContext = React.createContext()

export const useColorMode = () => useContext(ColorModeContext)

function ColorModeProvider({ children }) {
    const [mode, setMode] = useState('light')

    const toggleColorMode = () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    const theme = createTheme({
        palette: {
            mode,
            // Main color : #E0F5FF
            // background: mode === 'light' ? {paper:'#42a5f5', default:'#42a5f5'} : {paper:'#000', default:'#000'}
        },

        typography: {
            fontFamily: "'IBM Plex Sans', sans-serif;",
        },
    })
    const memoizedValue = useMemo(() => {
        const props = {
            toggleColorMode,
            theme: theme.palette.mode,
        }
        return props
    }, [theme])
    return (
        <ColorModeContext.Provider value={memoizedValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline>{children}</CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default ColorModeProvider
