import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import EnrollModal from './EnrollModal'

const EnrollButton = () => {
  const [showEnrollTab, setShowEnrollTab] = useState(false)
  function toggleEnrollTab () {
    setShowEnrollTab((prev)=>!prev)
  }
  return (
    <Box>
      <Button variant='outlined' onClick={toggleEnrollTab}>Записаться</Button>
      <EnrollModal open={showEnrollTab} handleClose={toggleEnrollTab}/>
      
    </Box>
  )
}

export default EnrollButton