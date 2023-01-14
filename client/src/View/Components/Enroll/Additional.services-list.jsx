import React from 'react'

import ChooseServiceButton from './ChooseServiceButton'
import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'

const services = [{
  
  name:'Доп 1',
  desc: 'Все все все',
  price: 111

},
{

  name:"Доп 2",
  desc: 'Не все не все не все',
  price:222

},
{

  name:"Доп 3",
  desc: "Ничего ничего ничего ",
  price:555

},
{

  name:"Доп 4",
  desc: 'Что то что то что то',
  price:888

}
]
const AdditionalsList = ({chooseService}) => {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1a-content"
    >
      <Typography>Дополнительные услуги</Typography>
    </AccordionSummary>
    <AccordionDetails>
    {services.map((service)=>{
        return (
          <Box key={service.name} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Typography component='h6'>{service.name}</Typography>
          <Typography>{service.desc}</Typography>
          <ChooseServiceButton value={service} chooseService={chooseService}/>
          </Box>
        )
      })}
    </AccordionDetails>
  </Accordion>
  )
}

export default AdditionalsList