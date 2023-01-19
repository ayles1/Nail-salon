import React, { useState } from 'react'

import { Form, Link, Outlet, useNavigate, useResolvedPath } from 'react-router-dom'

import { Alert, Box, Button, Modal, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import AdditionalsList from './Additional.services-list'
import ComplexList from './Complex.services-list'
import ManicureList from './Manicure.services-list'
import PedicureList from './Pedicure.services-list'

import enrollController from '../../../Controllers/Enroll/enroll.controller'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

function EnrollModal() {
    const [servicesList, setServicesList] = useState([])
    const [error, setError] = useState(false)

    const navigation = useNavigate()

    function toggleServicesList(item) {
        setError(false)
        setServicesList((list) => list.concat(item))
    }
    function handleWindowClose() {
        // maybe some other features one day
        navigation(-1)
    }
    const { pathname } = useResolvedPath() // get current route to show right tab conditionally
    return (
        <Modal sx={{ overflow: 'auto' }} open onClose={handleWindowClose}>
            <Box sx={style}>
                {pathname !== '/enroll' ? ( // check current path and render details tab || services tab
                    <Outlet />
                ) : (
                    <>
                        <Typography variant="h5" component="h3">
                            Запись
                        </Typography>
                        <form method="post">
                            <div>Выберите услуги :</div>
                            <ul>
                                <ComplexList chooseService={toggleServicesList} />
                                <ManicureList chooseService={toggleServicesList} />
                                <PedicureList chooseService={toggleServicesList} />
                                <AdditionalsList chooseService={toggleServicesList} />
                            </ul>
                            {servicesList.map((service, index) => (
                                <Typography
                                    component="div"
                                    key={service.name}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography>{service.name}</Typography>
                                    <Close
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setServicesList((list) =>
                                                list.filter((item) => item !== service)
                                            )
                                        }}
                                    />
                                </Typography>
                            ))}
                            {servicesList.length > 1 ? (
                                <div>{`Итого : ${servicesList.reduce(
                                    (sum, obj) =>
                                        sum +
                                        Object.values(obj).reduce((s, v) => {
                                            if (typeof v !== 'string') {
                                                return s + v
                                            }
                                            return s
                                        }, 0),
                                    0
                                )}`}</div>
                            ) : null}
                            {error ? <div>*Пожалуйста, укажите услуги</div> : null}
                            <Button type="submit" variant="contained">
                                {/* <Link to="/confirmation">Подтвердить</Link> */}
                                <Link
                                    onClick={async (e) => {
                                        const valid = servicesList.length > 0
                                        // Подтверждение записи, отправка на бекэнд
                                        // navigation("/confirmation/enroll")
                                        if (!valid) {
                                            e.preventDefault()
                                            setError(true)
                                        } else {
                                            enrollController.saveServicesListSession(servicesList)
                                        }
                                    }}
                                    to="/enroll/details"
                                >
                                    Подтвердить
                                </Link>
                            </Button>
                        </form>
                    </>
                )}
            </Box>
        </Modal>
    )
}

export default EnrollModal
