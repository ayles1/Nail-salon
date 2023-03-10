import React from 'react'

import { Telegram, Instagram } from '@mui/icons-material'
import { Typography, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'

function Footer() {
    return (
        <Grid
            container
            sx={{
                backgroundColor: '#1562c0',
                padding: '20px 0 20px 0',
                alignItems: 'center',
            }}
        >
            <Grid item xs={1}>
                <Paper sx={{ backgroundColor: 'red', borderRadius: '50%' }}>
                    <Typography>Привет</Typography>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                    }}
                >
                    <Typography sx={{ textAlign: 'center' }}>
                        Катя шоп нейлс 228
                    </Typography>
                    <Typography
                        component="a"
                        href="tel"
                        sx={{ textAlign: 'center', fontWeight: '700' }}
                    >
                        +7 999 164 27 44
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: '5px' }}>
                <a label="Telegram" href="telegram.com">
                    <Telegram />
                </a>
                <a
                    label="Instagram"
                    href="https://instagram.com/kattriin_nails?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                >
                    <Instagram />
                </a>
            </Grid>
        </Grid>
    )
}

export default Footer
