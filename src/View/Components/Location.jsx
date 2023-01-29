import React from 'react'

import { Box, Typography, useMediaQuery } from '@mui/material'
import { useScroll } from '../Services/Scrolling.service'

import EnrollButton from './Enroll/EnrollButton'

function Location() {
    const { componentsRefs } = useScroll()
    const widthQuery = useMediaQuery('(min-width:860px)')
    return (
        <Box
            ref={componentsRefs.address}
            sx={{
                margin: '100px 0 30px 0',
                padding: widthQuery ? '0 0 0 100px' : '0',
                display: 'flex',
                flexDirection: widthQuery ? 'row' : 'column',
                gap: '15px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <Box sx={{ width: widthQuery ? '60%' : '100%' }}>
                <iframe
                    title="yandex-map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A52a79e81fcdeda05a7adae16fcf73e2581c314a7e03a62b594a47b9c236b16f2&amp;source=constructor"
                    style={{ width: '100%', height: '400px' }}
                    frameBorder="0"
                />
            </Box>
            <Box>
                <Typography
                    component="a"
                    href="tel"
                    sx={{ textAlign: 'center', fontWeight: '700' }}
                >
                    +7 999 164 27 44
                </Typography>
                <Typography>ЖК Салават Купере, Тансык 7</Typography>
                <EnrollButton />
            </Box>
        </Box>
    )
}

export default Location
