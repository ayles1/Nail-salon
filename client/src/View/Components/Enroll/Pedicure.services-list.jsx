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
        name: 'Педикюр 1',
        desc: 'Все все все',
        price: 666,
    },
    {
        name: 'Педикюр 2',
        desc: 'Не все не все не все',
        price: 1000,
    },
    {
        name: 'Педикюр 3',
        desc: 'Ничего ничего ничего ',
        price: 999,
    },
    {
        name: 'Педикюр 4',
        desc: 'Что то что то что то',
        price: 2000,
    },
]
function PedicureList({ chooseService }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
            >
                <Typography>Педикюр</Typography>
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

export default PedicureList
