import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"; //style our calendar
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

//dummy data

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date("2022-08-19T10:42:05.468Z"),
    end: new Date("2022-08-19T11:42:05.468Z"),
  },
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 8, 10),
    end: new Date(2022, 8, 15), // the dates go by prev month and then dates
  },
];

// const CalendarPage = () => {
export const CalendarPage = () => {
  const [newEvent, setNewEvent] = useState({
    tittle: "",
    start: "",
    end: "",
    time: "",
  });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <h1 className="calendarHeading">Calendar</h1>
      <h2>Add new Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <DatePicker
          placeholderText="Select Time"
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="time"
          dateFormat="h:mm aa"
          selected={newEvent.time}
          onChange={(time) => setNewEvent({ ...newEvent, time })}
        />
        <button
          className="newEventButton"
          style={{ marginTop: "10px" }}
          onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default CalendarPage;
