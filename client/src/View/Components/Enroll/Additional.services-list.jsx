import React from 'react'

import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ChooseServiceButton from './ChooseServiceButton'

const services = [
    {
        name: 'Доп 1',
        desc: 'Все все все',
        price: 111,
        category: 'additionals',
    },
    {
        name: 'Доп 2',
        desc: 'Не все не все не все',
        price: 222,
        category: 'additionals',
    },
    {
        name: 'Доп 3',
        desc: 'Ничего ничего ничего ',
        price: 555,
        category: 'additionals',
    },
    {
        name: 'Доп 4',
        desc: 'Что то что то что то',
        price: 888,
        category: 'additionals',
    },
]
function AdditionalsList({ chooseService }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content">
                <Typography>Дополнительные услуги</Typography>
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

export default AdditionalsList
