import React, { Dispatch, SetStateAction, useContext, useState } from "react";

interface EventData {
    title: string;
    start: string;
    end: string;
    color: string;
}

export interface ContextType {
    calendarEvents: EventData[];
    setCalendarEvents: Dispatch<SetStateAction<EventData[]>>
    title: string, setTitle: (data: string) => void;
    start: string, setStart: (data: string) => void;
    end: string, setEnd: (data: string) => void;
    color: string, setColor: (data: string) => void;
};

export const EventFormContext = React.createContext<ContextType>({
    calendarEvents: [],
    setCalendarEvents: (eventData) => [],
    title: "", setTitle: (data) => "",
    start: "", setStart: (data) => "",
    end: "", setEnd: (data) => "",
    color: "", setColor: (data) => "",
},
);

export const EventFormProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [calendarEvents, setCalendarEvents] = React.useState<EventData[]>([]);
    const [title, setTitle] = React.useState("")
    const [start, setStart] = React.useState("")
    const [end, setEnd] = React.useState("")
    const [color, setColor] = React.useState("")
    return (
        <EventFormContext.Provider
            value={{
                calendarEvents, setCalendarEvents, title, setTitle, start, setStart, end, setEnd, color, setColor
            }}
        >
            {children}
        </EventFormContext.Provider>
    );
};

export const useEventFormContext = () => {
    const context = useContext(EventFormContext);
    if (!context) {
        throw Error("Unable to init context: EventFormContext");
    }
    return context;
};