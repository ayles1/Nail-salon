import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import enrollController from '../../../Controllers/Enroll/enroll.controller'
import Example from '../UI/DatePicker/DatePicker'

function EnrollDetails() {
    const [username, setUsername] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [requests, setRequests] = useState('')

    let servicesList
    useEffect(() => {
        servicesList = enrollController.getServicesListSession()
    }, [])

    function parsePhoneNumber(num) {
        return num.replace(/\D/g, '')
    }

    function handlePhoneNumberChange(event) {
        const digits = parsePhoneNumber(event.target.value)

        let formatedPhoneNumber = ''
        const { selectionStart } = event.target

        if (!digits) {
            return setPhoneNumber('')
        }
        if (event.target.value.length !== selectionStart) {
            if (event.nativeEvent.data && /\D/g.test(event.nativeEvent.data)) {
                return null
            }
            return setPhoneNumber(event.target.value)
        }

        if (['7', '8', '9'].indexOf(digits[0]) > -1) {
            if (digits[0] === '9') {
                return setPhoneNumber(`7${digits}`)
            }
            const firstSymbols = digits[0] === '8' ? '8' : '+7'
            formatedPhoneNumber = `${firstSymbols} `
            if (digits.length > 1) {
                formatedPhoneNumber += `(${digits.substring(1, 4)}`
            }
            if (digits.length >= 5) {
                formatedPhoneNumber += `) ${digits.substring(4, 7)}`
            }
            if (digits.length >= 8) {
                formatedPhoneNumber += `-${digits.substring(7, 9)}`
            }
            if (digits.length >= 10) {
                formatedPhoneNumber += `-${digits.substring(9, 11)}`
            }
            setPhoneNumber(formatedPhoneNumber)
        } else {
            return setPhoneNumber(`+${digits}`)
        }
    }

    function handleNameChange(event) {
        return event
    }
    return (
        <div>
            <Typography variant="h5" component="h3">
                Дополнительные данные
            </Typography>
            <form method="post">
                <TextField
                    onChange={(e) => {
                        handleNameChange(e)
                    }}
                    required
                    inputProps={{ maxLength: '15' }}
                    label="Имя"
                />
                <TextField label="Фамилия" inputProps={{ maxLength: '20' }} />
                <TextField
                    type="tel"
                    onChange={(e) => {
                        handlePhoneNumberChange(e)
                    }}
                    value={phoneNumber}
                    required
                    inputProps={{ maxLength: '18' }}
                    label="Телефон"
                />
                <TextField multiline inputProps={{ maxLength: '70' }} label="Особые пожелания" />
                <Example />
                <Button variant="contained" sx={{ display: 'block' }}>
                    <Link to="/enroll/submit">Подтвердить</Link>
                </Button>
            </form>
        </div>
    )
}

export default EnrollDetails
