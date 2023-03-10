import React, { useState } from 'react'

import { Close, Dehaze } from '@mui/icons-material'
import { Box, Modal, Typography, useMediaQuery } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import EnrollButton from './Enroll/EnrollButton'

import { useScroll } from '../Services/Scrolling.service'

function Navbar() {
    const widthQuery = useMediaQuery('(min-width:860px)')
    const { navigationRefs, handleClick } = useScroll()
    const navigate = useNavigate()

    return (
        <Typography component="nav">
            {widthQuery ? (
                <Typography
                    component="ul"
                    id="nav"
                    sx={{
                        position: 'fixed',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px',
                    }}
                >
                    <div ref={navigationRefs.portfolio}>
                        <Link to="/#portfolio" onClick={() => handleClick('portfolio')}>
                            Портфолио
                        </Link>
                    </div>
                    <div ref={navigationRefs.pricing}>
                        <Link to="/#pricing" onClick={() => handleClick('pricing')}>
                            Прайс и акции
                        </Link>
                    </div>
                    <div ref={navigationRefs.ratings}>
                        <Link to="/#ratings" onClick={() => handleClick('ratings')}>
                            Отзывы
                        </Link>
                    </div>
                    <div ref={navigationRefs.address}>
                        <Link to="/#address" onClick={() => handleClick('address')}>
                            Адрес
                        </Link>
                    </div>
                    <EnrollButton />
                </Typography>
            ) : (
                <Dehaze onClick={() => navigate('/nav')} />
            )}
        </Typography>
    )
}

export default Navbar
