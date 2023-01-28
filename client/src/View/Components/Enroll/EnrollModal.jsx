import React, { useState } from 'react'

import { Form, Link, Outlet, useNavigate, useResolvedPath } from 'react-router-dom'

import { Alert, Box, Button, Modal, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import AdditionalsList from './Additional.services-list'
import ComplexList from './Complex.services-list'
import ManicureList from './Manicure.services-list'
import PedicureList from './Pedicure.services-list'

import enrollController from '../../../Controllers/Enroll/enroll.controller'
import useManicureServices from '../../../hooks/services'

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
    const {
        servicesList,
        error,
        handleWindowClose,
        toggleServicesList,
        filterServices,
        handleError,
    } = useManicureServices()

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
                                            filterServices(service)
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
                            <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>
                                <Link
                                    onClick={async (e) => {
                                        const valid = servicesList.length > 0
                                        if (!valid) {
                                            e.preventDefault()
                                            handleError()
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
