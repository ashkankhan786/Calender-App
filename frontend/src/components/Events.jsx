import React, { useEffect, useState } from "react";

const Events = ({ events, setEvents }) => {
  useEffect(() => {
    const fetchEvents = () => {
      fetch("http://localhost:3000/events")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          setEvents(data);
        });
    };

    fetchEvents();
  }, []);

  const getDateFromTimeStamps = (d) => {
    const dateObj = new Date(d);
    return dateObj.getDate();
  };

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted!");
        }
      });
    }

    const checkEventNotifications = () => {
      const currentDate = new Date();
      events.forEach((event) => {
        const eventStartTime = new Date(event.start).getTime();
        const currentTime = currentDate.getTime();

        if (
          eventStartTime <= currentTime &&
          eventStartTime > currentTime - 60000
        ) {
          showNotification(`Reminder: ${event.title}`, {
            body: `Your event "${
              event.title
            }" is about to start at ${event.start.toLocaleTimeString()}.`,
          });
        }
      });
    };

    const intervalId = setInterval(checkEventNotifications, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="border-2 border-gray-400 flex flex-col gap-4 px-7 py-4 shadow-md shadow-gray-500">
      <div className="flex items-center justify-start">
        <h1 className="text-black text-lg font-semibold">Upcoming Events</h1>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        {events.map((e, i) => {
          return (
            <div className="flex gap-1 items-center justify-start" key={e.id}>
              <div className="bg-black text-white px-3 py-2">
                {getDateFromTimeStamps(e.id)}
              </div>
              <div className="flex flex-col">
                <h1 className="text-base font-semibold">{e.title}</h1>
                <h1 className="text-sm tracking-tight">{e.description}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
