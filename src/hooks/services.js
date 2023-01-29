import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useManicureServices() {
    const [servicesList, setServicesList] = useState([])
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    function toggleServicesList(item) {
        setServicesList((list) => list.filter((elem) => elem !== item))
        if (item.category !== 'additionals') {
            setServicesList((list) => list.filter((elem) => elem.category !== item.category))
        }

        setError(false)
        setServicesList((list) => list.concat(item))
    }
    function handleError() {
        setError(true)
    }
    function handleWindowClose() {
        // maybe some other features one day
        navigate('/')
    }
    function filterServices(service) {
        setServicesList((list) => list.filter((item) => item !== service))
    }
    return {
        servicesList,
        error,
        toggleServicesList,
        handleWindowClose,
        filterServices,
        handleError,
    }
}
