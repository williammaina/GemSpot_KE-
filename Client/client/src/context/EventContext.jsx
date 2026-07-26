import React, { createContext, useState } from 'react';
import { eventService } from '../services/eventService';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await eventService.getAllEvents();
      setEvents(data.events || data);
    } finally {
      setLoading(false);
    }
  };

  const fetchEventById = async (id) => {
    setLoading(true);
    try {
      const data = await eventService.getEventById(id);
      setSelectedEvent(data.event || data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventContext.Provider value={{ events, selectedEvent, loading, fetchEvents, fetchEventById }}>
      {children}
    </EventContext.Provider>
  );
};