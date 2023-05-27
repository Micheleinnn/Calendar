import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';

const events: EventInput[] = [
    {
        id: '1',
        title: 'Billish',
        start: '2023-05-29T10:00:00',
        end: '2023-05-31T12:00:00',
        eventColor: 'orange'
    },
    {
        id: '2',
        title: 'B-Day Party',
        start: '2023-05-19T10:00:00',
        end: '2023-05-20T12:00:00',
    },
    {
        id: '3',
        title: 'LoopTroop',
        start: '2023-06-08T10:00:00',
        end: '2023-06-10T11:00:00',
    },
    { id: '4', title: 'Korolova', start: '2023-06-03', end: '2023-06-02' },
    { id: '5', title: 'Benny Bennasi', start: '2023-06-05', end: '2023-06-06' },
];


const Calendar = () => {

    return (
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "dayGridMonth, timeGridWeek",
                    center: "title",
                    end: "today prev,next",
                }}
                height={"90vh"}
                events={events}
                eventColor="red"
                nowIndicator
                firstDay={1}
                dayMaxEventRows={true}
                dayMaxEvents={undefined}
                eventContent={renderEventContent}
              
            />
        </div>
    );
};
function renderEventContent(eventInfo: { timeText: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; event: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }; }) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

export default Calendar;
