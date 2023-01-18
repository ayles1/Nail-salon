import React, { useEffect, useState } from 'react'

import { Box, Grow, ImageList, ImageListItem, Typography } from '@mui/material'
import { useScroll } from '../Services/Scrolling.service'

import images from '../../assets/img/index'

function Portfolio() {
    const { componentsRefs } = useScroll()
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Box
            ref={componentsRefs.portfolio}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '70px 0 0 0',
            }}
        >
            <Typography
                component="h1"
                variant="h4"
                sx={{ fontSize: '45px', margin: '0 0 30px 0' }}
            >
                Мое портфолио
            </Typography>
            <ImageList sx={{ width: '70%' }} variant="woven" cols={3}>
                {images.map((img, index) => (
                    <Grow key={img} in={checked}>
                        <ImageListItem>
                            <img
                                src={img}
                                alt="Не удалось выполнить загрузку"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Grow>
                ))}
            </ImageList>
        </Box>
    )
}

export default Portfolio
