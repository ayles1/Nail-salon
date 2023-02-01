import React, { useState } from 'react'

import { ExpandMore } from '@mui/icons-material'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Rating,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { Box } from '@mui/system'
import { parseDate, parseTime } from '../../../helpers/time-parse'

function ReviewItem({ review }) {
    const [open, setOpen] = useState(false)

    const widthQuery = useMediaQuery('(min-width:860px)')

    return (
        <Accordion sx={{ width: '60%' }}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                onClick={() => setOpen((prev) => !prev)}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={
                    widthQuery
                        ? { padding: '0 10px', justifyContent: 'space-between' }
                        : { padding: '0 10px', flexDirection: 'column' }
                }
            >
                <Box>
                    {!open ? (
                        <>
                            <Typography sx={{ maxWidth: '100%' }}>{review.text}</Typography>
                            <Typography>
                                <Rating
                                    name="read-only"
                                    value={review.rating}
                                    readOnly
                                    sx={{ maxWidth: '100%' }}
                                />
                            </Typography>
                        </>
                    ) : null}
                </Box>
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
