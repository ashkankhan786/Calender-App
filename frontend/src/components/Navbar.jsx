import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = ({ events, setSearch, setFilteredEvents, home }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    if (text.trim() === "") return;

    const filteredEvents = events.filter((e) => {
      const title = e.title.toLowerCase();
      return title.includes(text.toLowerCase());
    });
    setFilteredEvents(filteredEvents);
    setSearch(true);

    setText("");
  };
  return (
    <div className="bg-gray-300 w-screen h-fit px-16 py-5 flex items-center justify-between">
      <div>
        <FaCalendar
          size={25}
          className="hover:cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div
        className={`${
          home === false ? "hidden" : ""
        } flex items-center justify-center`}
      >
        <input
          type="text"
          placeholder="Search events"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-3 py-1 rounded-md focus:outline-none"
        />
        <FaSearch
          size={19}
          className="ml-2 hover:cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
