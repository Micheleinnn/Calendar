import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventContentArg, EventInput } from '@fullcalendar/core';
import { useState } from 'react';
import list from "@fullcalendar/list"
import { DateSelectionApi } from '@fullcalendar/core';

const Calendar = () => {


    const [modalOpen, setModalOpen] = useState(false);
    const renderEventContent = (eventContent: EventContentArg) => (
        <>
          <b>{eventContent.timeText}</b>
          <i>{eventContent.event.title}</i>
        </>
      );
    const handleModalClick = () => { setModalOpen(true); };
    const handleFormSubmit = (event: EventInput) => { setModalOpen(false); };


    return (
        <section>
            <button onClick={handleModalClick}>Add Event</button>
            {modalOpen && (
                <form onSubmit={handleFormSubmit}>
                    <label>
                        <input type="text" name="title" style={{ width: '170px' }} />
                    </label>
                    <br />
                    <label>
                        <input type="datetime-local" name="start" />
                    </label>
                    <br />
                    <label>
                        <input type="datetime-local" name="end" />
                    </label>
                    <br />
                    <label>
                        <input type="color" name="color" style={{ height: "25px", width: "170px", marginTop: "1px" }} />
                    </label>
                    <br />
                    <button type="submit">Add</button>
                </form>
            )}


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
