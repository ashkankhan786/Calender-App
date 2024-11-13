import React from "react";

const SearchEvents = ({ filteredEvents }) => {
  const getDateFromTimeStamps = (d) => {
    const dateObj = new Date(d);
    return dateObj.getDate();
  };

  return (
    <div className="border-l-2 border-gray-400 flex flex-col gap-4 px-7 py-4 ">
      <div className="flex items-center justify-start">
        <h1 className="text-black text-lg font-semibold">Searched Events</h1>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        {filteredEvents.map((e, i) => {
          return (
            <div
              className="flex gap-1 items-center justify-start border-b-2 border-slate-500"
              key={e.id}
            >
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

export default SearchEvents;
