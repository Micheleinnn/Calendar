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

const Calendar = () => {
    //funkce otevirani modalu
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalClick = () => { setModalOpen(true); };
    const handleSubmit = (event: EventInput) => { setModalOpen(false); };

    //funkce rendrovani eventu
    const renderEventContent = (eventContent: EventContentArg) => (
        <>
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
        </>
    );
   return (
        <section>
            <button onClick={handleModalClick}>Add Event</button>
            {modalOpen && <EventForm onSubmit={handleSubmit} />}

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
            />
        </section>
    );
};



export default Calendar;
