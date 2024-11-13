import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Events from "../components/Events";
import { useNavigate } from "react-router-dom";
import SearchEvents from "../components/SearchEvents";

const Home = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  const [search, setSearch] = useState(false);

  const [filteredEvents, setFilteredEvents] = useState([]);

  return (
    <div className="w-screen overflow-x-hidden min-h-screen ">
      <Navbar
        events={events}
        setSearch={setSearch}
        setFilteredEvents={setFilteredEvents}
        home={true}
      />
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="py-7 flex flex-col gap-2 px-20">
              <h1 className="text-black text-xl font-bold">Hello User</h1>
              <h1 className="text-black text-base tracking-tight">
                View upcoming events and schedules
              </h1>
              <button
                className="bg-black text-white w-fit py-2 px-4 mt-5 text-sm rounded-sm"
                onClick={() => navigate("/calendar")}
              >
                View Calender
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Events events={events} setEvents={setEvents} />
            </div>
          </div>
        </div>
        <div>{search && <SearchEvents filteredEvents={filteredEvents} />}</div>
      </div>
    </div>
  );
};

export default Home;
