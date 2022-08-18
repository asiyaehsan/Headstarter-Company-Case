import React from 'react'
import FullCalender from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'


const CalenderPage = () => {

    const handleDateClick = (e: DateClickArg) => {
        if(e.jsEvent.shiftKey) console.log('shift click')
    }

    return (
        <>
            <FullCalender
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
            />
        </>
    )
}


export default CalenderPage