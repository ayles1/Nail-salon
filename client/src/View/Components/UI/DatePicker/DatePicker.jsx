import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.scss'

registerLocale('ru', ru)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const handleColor = (time) => {
    const availableTime = time.getHours() > 10 && time.getHours() < 19
    return availableTime ? 'available' : 'unavailable'
}

function Example() {
    const [date, setDate] = useState(new Date().setDate(new Date().getDate() + 1))
    const startDate = new Date()
    return (
        <DatePicker
            showTimeSelect
            locale="ru"
            dateFormat="Pp"
            selected={date}
            minDate={startDate.setDate(startDate.getDate() + 1)}
            maxDate={startDate.setDate(startDate.getDate() + 30)}
            showDisabledMonthNavigation
            onChange={(d) => setDate(d)}
            timeClassName={handleColor}
        />
    )
}

export default Example
