'use client'

import React, { FormEvent, useState } from 'react';
import { useEventFormContext } from './Context';
import dayjs from "dayjs";


interface EventFormProps {
    closeModal: () => void;
}

interface EventData {
    title: string;
    date: string;
    end: string;
    backgroundColor: string;
}

const EventForm: React.FC<EventFormProps> = ({ closeModal }) => {

    const { title, setTitle, start, setStart, end, setEnd, color, setColor, calendarEvents, setCalendarEvents } = useEventFormContext()
//funkce vykreslovani nasledujici udalosti(4)
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCalendarEvents((prev: EventData[]) => [...prev, { title: title, date: dayjs(start).format('YYYY-MM-DD'), end: dayjs(end).format('YYYY-MM-DD'), backgroundColor: color }])
    
        closeModal()
    };

    console.log(title, "title", start, end, color, calendarEvents)
    return (
        <form onSubmit={handleSubmit}>
            {/*pridani inputu(3)*/}
            <input type="text" name="title" style={{ width: '170px' }} value={title} onChange={(e) => {
                console.log(e.target.value)
                setTitle(e.target.value)
            }} />

            <br />
            <label>
                <input type="datetime-local" name="start" value={start} onChange={(e) => setStart(e.target.value)} />
            </label>
            <br />
            <label>
                <input type="datetime-local" name="end" value={end} onChange={(e) => setEnd(e.target.value)} />
            </label>
            <br />
            <label>
                <input type="color" name="color" style={{ height: "25px", width: "170px", marginTop: "1px" }} onChange={(e) => setColor(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add</button>
        </form>
    );
};

export default EventForm;