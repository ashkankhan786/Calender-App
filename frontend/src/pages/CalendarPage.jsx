import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());
  const clickTimeout = useRef(null);
  const [popup, setPopup] = useState(false);

  const handleDateClick = (date) => {
    console.log(value);

    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      setPopup(true);
    } else {
      clickTimeout.current = setTimeout(() => {
        setPopup(false);
        clickTimeout.current = null;
      }, 250);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen w-screen">
      <Navbar home={false} />
      <div className="flex items-center justify-evenly px-20 py-20">
        <div
          className={`h-[350px] transition-transform duration-500 ease-in-out ${
            popup ? "-translate-x-40 opacity-50" : "translate-x-0 opacity-100"
          } `}
        >
          <Calendar
            value={value}
            onClickDay={(date) => {
              setValue(date);
              handleDateClick(date);
            }}
            className="h-full w-full"
          />
        </div>
        {popup && (
          <div className=" flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-100">
            {" "}
            <Popup setPopup={setPopup} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
