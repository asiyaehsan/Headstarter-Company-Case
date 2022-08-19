import React from 'react'
import FullCalender, { DatesSetArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
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


interface VisibleDates{
  start: Date;
  end: Date;
}


const CalenderPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [range, setRange] = useState<VisibleDates>({
    start: new Date(),
    end: new Date()
  })

 

    const handleDateClick = async (e: DateClickArg) => {
      if (e.jsEvent.shiftKey) {
        const title = prompt('Enter title', e.dateStr);
      
        try {
          await addDoc(collection(db, 'Events'), {
           title: title ? title : e.dateStr,
           start: e.date,
          allDay: true
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
          allDay:doc.get('allDay')
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
        
        <FullCalender
          
                datesSet={handleDatesSet}
                events = {data}
                plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                dateClick={handleDateClick}
            />
        </>
    )
}


export default CalenderPage
