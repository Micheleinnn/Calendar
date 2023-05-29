'use client'

import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventContentArg, EventInput } from '@fullcalendar/core';
import { useState } from 'react';
import list from "@fullcalendar/list"
import { DateSelectionApi } from '@fullcalendar/core';
import EventForm from './EventForm';
import { useEventFormContext } from './Context';

const Calendar = () => {
    //funkce otevirani modalu(1)
    const [modalOpen, setModalOpen] = useState(false);
    //promenna z contextu(5)
    const { calendarEvents } = useEventFormContext()

    const handleModalClick = () => { setModalOpen(true); };

    const closeModal = () => { setModalOpen(false); };

    //funkce rendrovani eventu(6)
    const renderEventContent = (eventContent: EventContentArg) => {
        console.log(eventContent)
        return (
            <>
                <p>{eventContent.event.title}</p>
            </>
        )
    }
    return (
        <section>
            <button onClick={handleModalClick}>Add Event</button>
            {/*funkce zavirani modalu(2)*/}
            {modalOpen && <EventForm closeModal={closeModal} />}

            <FullCalendar
                plugins={[list, dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "dayGridMonth, timeGridWeek, listWeek",
                    center: "title",
                    end: "today prev,next",
                }}
                height={"99vh"}
                eventColor="red"
                firstDay={1}
                dayMaxEventRows={false}
                dayMaxEvents={undefined}
                nowIndicator={true}
                editable={true}
                selectable={true}
                selectMirror={true}
                handleWindowResize={true}
                eventContent={renderEventContent}
                events={calendarEvents}
            />
        </section>
    );
};



export default Calendar;
