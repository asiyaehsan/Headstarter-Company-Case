import React from 'react'
import  { DatesSetArg, EventClickArg } from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid';
import { db } from '../firebase-config';

import {
  addDoc,
  collection,
  query,
  onSnapshot,
  orderBy,
  startAt,
  endAt
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import '../components/CalendarPage.css'
import {Link } from 'react-router-dom'






interface VisibleDates{
  start: Date;
  end: Date;
}


// const CalendarPage = () => {
export const CalendarPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [range, setRange] = useState<VisibleDates>({
    start: new Date(),
    end: new Date()
  })
  
 

    const handleDateClick = async (e: DateClickArg) => {
      if (e.jsEvent.shiftKey) {
        const title = prompt('Enter title', e.dateStr);
        const confirmAllDay = prompt('Is this an all day event?');

        
        
        
        try {
          await addDoc(collection(db, 'Events'), {
           title: title ? title : e.dateStr,
           start: e.date,
            allDay: confirmAllDay === 'yes' ? true : false,
           
          
          })
        } catch (err) {
            alert(err)
        }
        }
    }
   useEffect(() => {
    //mounts
     const q = query(collection(db, 'Events'),
       orderBy('start'),startAt(range.start), endAt(range.end));
     
    const unsub = onSnapshot(q, (snap) => {
      const array: any[] = snap.docs.map(doc => {
        return {
          id: doc.id,
          title:doc.get('title'),
          start: doc.get('start').toDate('start'),
          allDay: doc.get('allDay'),
          
      
        }
      });
      console.log(array)
      setData([...array]);
    })
    //unmounts
    return () => {unsub()}
  },[range])
  
  const handleDatesSet = (e: DatesSetArg) => {
    setRange({start:e.start, end:e.end})
  }
  
  
    return (
      <>
        <h1>Welcome to your team calendar!</h1>
        <Link to='/videocall'>
        <button className='button1'>Attend Meeting</button>
         </Link>
       
        <button className='button2'>Home Logout</button>
        
        <FullCalendar 
          
                datesSet={handleDatesSet}
                events = {data}
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          dateClick={handleDateClick}
             
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                   right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
          />
          
        </>
       
    )
}


// export default CalendarPage
