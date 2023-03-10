import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import useDetails from '../../../hooks/details'
import DatePickerUI from '../UI/DatePicker/DatePicker'

function EnrollDetails() {
    const {
        username,
        userSurname,
        phoneNumber,
        requests,
        validUsername,
        validPhoneNumber,
        handlePhoneNumberChange,
        handleNameChange,
        handleSurnameChange,
        handleRequestsChange,
        handleDateChange,
        handleSubmit,
    } = useDetails()
    return (
        <div>
            <Typography variant="h5" component="h3" sx={{ marginBottom: '20px' }}>
                Дополнительные данные
            </Typography>
            <form method="post">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            error={!validUsername}
                            helperText={
                                validUsername
                                    ? null
                                    : 'Неверно введено имя, попробуйте ввести кириллические буквы'
                            }
                            onChange={(e) => {
                                handleNameChange(e)
                            }}
                            required
                            value={username}
                            inputProps={{ maxLength: '15' }}
                            label="Имя"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Фамилия"
                            value={userSurname}
                            onChange={(e) => handleSurnameChange(e)}
                            inputProps={{ maxLength: '20' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={!validPhoneNumber}
                            helperText={validPhoneNumber ? null : 'Номер введен неверно'}
                            type="tel"
                            onChange={(e) => {
                                handlePhoneNumberChange(e)
                            }}
                            value={phoneNumber}
                            required
                            fullWidth
                            inputProps={{ maxLength: '18' }}
                            label="Телефон"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={requests}
                            onChange={(e) => handleRequestsChange(e)}
                            multiline
                            fullWidth
                            inputProps={{ maxLength: '70' }}
                            label="Особые пожелания"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <span>Выберите время :</span>
                        <DatePickerUI
                            onDateChoose={(date) => {
                                handleDateChange(date)
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ display: 'block' }}
                            onClick={(e) => {
                                handleSubmit(e)
                            }}
                        >
                            Подтвердить
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default EnrollDetails
