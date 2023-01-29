import React, { forwardRef, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.scss'
import { Button } from '@mui/material'

registerLocale('ru', ru)

const handleTime = (time) => {
    const availableTime = time.getHours() > 10 && time.getHours() < 19
    return availableTime ? 'available' : 'unavailable'
}

const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button sx={{ display: 'block' }} variant="contained" onClick={onClick} ref={ref}>
        {value}
    </Button>
))

function DatePickerUI({ value, onDateChoose }) {
    const [date, setDate] = useState(new Date().setDate(new Date().getDate() + 1))
    const startDate = new Date()
    return (
        <DatePicker
            value={date}
            className="date-picker"
            showTimeSelect
            locale="ru"
            dateFormat="Pp"
            selected={date}
            minDate={startDate.setDate(startDate.getDate() + 1)}
            maxDate={startDate.setDate(startDate.getDate() + 30)}
            showDisabledMonthNavigation
            onChange={(d) => {
                onDateChoose(d)
                setDate(d)
            }}
            customInput={<CustomInput />}
            timeClassName={handleTime}
        />
    )
}

export default DatePickerUI
