import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import enrollController from '../Controllers/Enroll/enroll.controller'
import { validatePhoneNumber, validateUsername } from '../Validations/Enroll.validation'

export default function useDetails() {
    const [username, setUsername] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [requests, setRequests] = useState('')
    const [meetingDate, setMeetingDate] = useState(null)

    const [validUsername, setValidUsername] = useState(true)
    const [validPhoneNumber, setValidPhoneNumber] = useState(true)

    const navigate = useNavigate()

    const [servicesList, setServicesList] = useState({})

    useEffect(() => {
        setServicesList(enrollController.getServicesListSession())
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
        return setUsername(event.target.value)
    }
    function handleSurnameChange(event) {
        return setUserSurname(event.target.value)
    }
    function handleRequestsChange(event) {
        return setRequests(event.target.value)
    }
    function handleDateChange(d) {
        return setMeetingDate(d)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const validName = validateUsername(username)
        const validNumber = validatePhoneNumber(phoneNumber)
        if (validName && validNumber) {
            enrollController.saveDetailsSession({
                username,
                userSurname,
                phoneNumber,
                requests,
                servicesList,
                meetingDate,
            })
            navigate('/enroll/submit')
        } else if (!validName && validNumber) {
            setValidUsername(false)
            setValidPhoneNumber(true)
        } else if (!validNumber && validName) {
            setValidPhoneNumber(false)
            setValidUsername(true)
        } else {
            setValidUsername(false)
            setValidPhoneNumber(false)
        }
    }
    return {
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
    }
}
