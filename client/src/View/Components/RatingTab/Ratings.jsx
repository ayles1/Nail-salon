import React, { useState } from 'react'

import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useScroll } from '../../Services/Scrolling.service'

import ToggleRatingsButton from './ToggleRatingsButton'
import ReviewItemList from './ReviewList'

function Ratings() {
    const [value, setValue] = useState(0)
    const { componentsRefs } = useScroll()
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box
            ref={componentsRefs.ratings}
            sx={{
                border: '1px',
                borderColor: 'divider',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '100px 0 0 0',
            }}
        >
            <Typography component="h1" variant="h4" sx={{ fontSize: '45px', marginBottom: '30px' }}>
                Отзывы
            </Typography>

            {/* Tabs and their routings declaration */}

            {/* Tabs realization */}

            <ReviewItemList />
            <div style={{ margin: '20px 0' }}>Уже были у меня? Напишите отзыв!</div>

            {/* Link to review modal is there */}
            <ToggleRatingsButton value="Оставить отзыв !" linkTo="postreview" />
        </Box>
    )
}

export default Ratings
