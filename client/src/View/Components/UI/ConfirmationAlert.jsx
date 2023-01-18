import React from 'react'

import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

import { Alert, Snackbar } from '@mui/material'
import { Box } from '@mui/system'

function ConfirmationAlert() {
    const data = useParams()

    let text
    if (data.type === 'enroll') {
        text = 'Запись подтверждена, буду вас ждать!)'
    } else if (data.type === 'review') {
        text = 'Отзыв опубликован, спасибо)'
    } else {
        text = 'Спасибо'
    }
    // const text =
    //     data.type === 'enroll'
    //         ? 'Запись подтверждена, жду вас ждать!)'
    //         : data.type === 'review'
    //         ? 'Отзыв опубликован, спасибо)'
    //         : 'Спасибо'
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/')
    }, 4000)
    return (
        <Box>
            <Snackbar open>
                <Alert severity="success">{text}</Alert>
            </Snackbar>
        </Box>
    )
}

export default ConfirmationAlert
