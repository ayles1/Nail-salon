import React from 'react'
import { Outlet } from 'react-router-dom'

import { useMediaQuery } from '@mui/material'

import { Container, Box } from '@mui/system'

import { useScroll } from '../Services/Scrolling.service'

import * as Components from './index'

const { Banner, Footer, Header, Location, Navbar, Portfolio, Pricing, Ratings } = Components

function App() {
    const { handleScroll } = useScroll()
    const widthQuery = useMediaQuery('(min-width:860px)')

    return (
        <Box
            onScroll={() => {
                if (widthQuery) {
                    handleScroll()
                }
            }}
            sx={{
                maxHeight: '100vh',
                overflowY: 'scroll',
                position: 'relative',
            }}
        >
            <Container>
                {/* Outlet - Enroll Modal || Review Modal */}
                <Outlet />
                <Header />
                <Navbar />
                <Banner />
                <Portfolio />
                <Pricing />
                <Ratings />
                <Location />
                <Footer />
            </Container>
        </Box>
    )
}

export default App
