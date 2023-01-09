import { Button } from '@mui/material'
import React from 'react'

const ToggleRatingsButton = ({onClick, value}) => {
  return (
    <Button variant='outlined' onClick={onClick}>{value}</Button>
  )
}

export default ToggleRatingsButton