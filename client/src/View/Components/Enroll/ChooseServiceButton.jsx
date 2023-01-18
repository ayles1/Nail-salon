import React from 'react'

import { Button } from '@mui/material'

function ChooseServiceButton({ chooseService, value }) {
    return (
        <Button
            onClick={() => {
                chooseService(value)
            }}
            variant="outlined"
        >
            Добавить
        </Button>
    )
}

export default ChooseServiceButton
