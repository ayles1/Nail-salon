import React from 'react'

import { ExpandMore } from '@mui/icons-material'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from '@mui/material'
import ChooseServiceButton from './ChooseServiceButton'

const services = [
    {
        name: 'Маникюр 1',
        desc: 'Все все все',
        price: 223,
    },
    {
        name: 'Маникюр 2',
        desc: 'Не все не все не все',
        price: 200,
    },
    {
        name: 'Маникюр 3',
        desc: 'Ничего ничего ничего ',
        price: 4242,
    },
    {
        name: 'Маникюр 4',
        desc: 'Что то что то что то',
        price: 5000,
    },
]
function ManicureList({ chooseService }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
            >
                <Typography>Маникюр</Typography>
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
                        <ChooseServiceButton
                            value={service}
                            chooseService={chooseService}
                        />
                    </Box>
                ))}
            </AccordionDetails>
        </Accordion>
    )
}

export default ManicureList
