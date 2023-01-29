import React from 'react'

import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ChooseServiceButton from './ChooseServiceButton'

const services = [
    {
        name: 'Комплекс 1',
        desc: 'Все все все',
        price: 5000,
        category: 'complex',
    },
    {
        name: 'Комплекс 2',
        desc: 'Не все не все не все',
        price: 2000,
        category: 'complex',
    },
    {
        name: 'Комплекс 3',
        desc: 'Ничего ничего ничего ',
        price: 1000,
        category: 'complex',
    },
    {
        name: 'Комплекс 4',
        desc: 'Что то что то что то',
        price: 2000,
        category: 'complex',
    },
]
function ComplexList({ chooseService }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content">
                <Typography>Комплексные услуги</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {services.map((service) => (
                    <Box
                        key={service.name}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h6">{service.name}</Typography>
                        <Typography>{service.desc}</Typography>
                        <ChooseServiceButton value={service} chooseService={chooseService} />
                    </Box>
                ))}
            </AccordionDetails>
        </Accordion>
    )
}

export default ComplexList
