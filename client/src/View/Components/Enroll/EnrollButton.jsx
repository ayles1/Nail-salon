import React from 'react'

import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

function EnrollButton() {
    return (
        <Box>
            <Button variant="outlined">
                <Link to="/enroll">Записаться</Link>
            </Button>
        </Box>
    )
}

export default EnrollButton
