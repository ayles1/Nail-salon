import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@mui/material'

const ToggleRatingsButton = ({ value, linkTo, onClick }) => {
  return (
    <Button variant='outlined' onClick={onClick}>
      <Link to={`/${linkTo}`}>{value}</Link>
    </Button>
  )
}

export default ToggleRatingsButton