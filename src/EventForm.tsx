import React, { FormEvent, useState } from 'react';
import { useEventFormContext } from './Context';



interface EventFormProps {
    onSubmit: (event: EventData) => void;
}

interface EventData {
    title: string;
    start: string;
    end: string;
    color: string;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {

    const { title, setTitle, start, setStart, end, setEnd, color, setColor } = useEventFormContext()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //event.preventDefault();
        //onSubmit(formData);
    };
console.log(title)
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="title" style={{ width: '170px' }} value={title} onChange={(e)=>setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                <input type="datetime-local" name="start" value={start} onChange={(e)=>setStart(e.target.value)} />
            </label>
            <br />
            <label>
                <input type="datetime-local" name="end" value={end} onChange={(e)=>setEnd(e.target.value)} />
            </label>
            <br />
            <label>
                <input type="color" name="color" style={{ height: "25px", width: "170px", marginTop: "1px" }} onChange={(e)=>setTitle(e.target.value)}  />
            </label>
            <br />
            <button type="submit">Add</button>
        </form>
    );
};

export default EventForm;