import { Close } from '@mui/icons-material'
import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useScroll } from '../Services/Scrolling.service'

function NavbarMobile() {
    const { navigationRefs, handleClick } = useScroll()
    const navigate = useNavigate()
    return (
        <div>
            <Modal open>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100vw',
                        height: '100vh',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Close onClick={() => navigate('/')} />
                    <div>
                        <Link to="/#portfolio" onClick={() => handleClick('portfolio')}>
                            Портфолио
                        </Link>
                    </div>
                    <div>
                        <Link to="/#pricing" onClick={() => handleClick('pricing')}>
                            Прайс и акции
                        </Link>
                    </div>
                    <div>
                        <Link to="/#ratings" onClick={() => handleClick('ratings')}>
                            Отзывы
                        </Link>
                    </div>
                    <div>
                        <Link to="/#address" onClick={() => handleClick('address')}>
                            Адрес
                        </Link>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default NavbarMobile
