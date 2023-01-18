import React, { useState } from 'react'

import { ExpandMore } from '@mui/icons-material'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Rating,
    Typography,
} from '@mui/material'

function ReviewItem({ review }) {
    const [open, setOpen] = useState(false)
    function parseDate(value) {
        const date = new Date(value)
        return ` ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }
    function parseTime(value) {
        const date = new Date(value)
        return `${date.getHours()}:${date.getMinutes()}`
    }
    return (
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                onClick={() => setOpen((prev) => !prev)}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ justifyContent: 'space-between' }}
            >
                <Typography>{review.text}</Typography>
                {!open ? (
                    <Typography>
                        <Rating
                            name="read-only"
                            value={review.rating}
                            readOnly
                        />
                    </Typography>
                ) : null}
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{review.text}</Typography>
                <div>
                    <Rating name="read-only" value={review.rating} readOnly />
                </div>
                <div>{parseTime(review.date)}</div>
                <div>{parseDate(review.date)}</div>
            </AccordionDetails>
        </Accordion>
    )
}

export default ReviewItem
