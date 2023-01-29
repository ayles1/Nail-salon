import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import enrollController from '../../../Controllers/Enroll/enroll.controller'

function EnrollSubmit() {
    const [enrollDetails, setEnrollDetails] = useState(enrollController.getDetailsSession())

    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography variant="h5" component="h3">
                Подтверждение
            </Typography>
            <Typography> Ваше имя : {enrollDetails.username}</Typography>
            {enrollDetails.userSurname ? (
                <Typography>Ваша фамилия : {enrollDetails.userSurname} </Typography>
            ) : null}
            <Typography>Ваш телефон : {enrollDetails.phoneNumber}</Typography>
            <Typography>
                Дата записи : {new Date(enrollDetails.meetingDate).toLocaleDateString()}
            </Typography>
            <Typography>
                Время записи :{' '}
                {new Date(enrollDetails.meetingDate).toLocaleTimeString().slice(0, -3)}
            </Typography>
            <Typography>
                <span>Вы выбрали :</span>
                {enrollDetails.servicesList.map((item) => (
                    <div>{item.name}</div>
                ))}
            </Typography>
            <Typography>
                На общую сумму{' '}
                {enrollDetails.servicesList.reduce(
                    (sum, obj) =>
                        sum +
                        Object.values(obj).reduce((s, v) => {
                            if (typeof v !== 'string') {
                                return s + v
                            }
                            return s
                        }, 0),
                    0
                )}{' '}
                рублей
            </Typography>
            <Button
                variant="contained"
                onClick={async () => {
                    const res = await enrollController.saveServicesListDB(enrollDetails)
                    navigate('/confirmation/enroll')
                }}
            >
                Записаться
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    navigate('/enroll')
                }}
            >
                Вернуться к услугам
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    navigate('/enroll/details')
                }}
            >
                Вернуться к доп. данным
            </Button>
        </div>
    )
}

export default EnrollSubmit
