import React from "react";

const Popup = ({ setPopup }) => {
  return (
    <div className="px-16 py-8 flex items-center justify-center bg-slate-800 rounded-lg">
      <form>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-start">
            <h1 className="text-2xl font-bold text-white">New Event</h1>
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-sm text-white">Title</h1>
            <input
              type="text"
              placeholder="Event title"
              className="outline-none px-3 py-3 rounded-sm text-sm"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-sm text-white">Start</h1>
              <input
                type="time"
                placeholder="Time"
                className="px-3 py-3 rounded-sm text-sm"
                required
              />
            </div>
            <div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-sm text-white">End</h1>
                <input
                  type="time"
                  placeholder="Time"
                  className="px-3 py-3 rounded-sm text-sm"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-sm text-white">Description</h1>
            <input
              type="text"
              aria-rowcount={5}
              placeholder="Add description"
              className="px-3 py-3 rounded-sm text-sm"
            />
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-sm text-white">Location</h1>
            <input
              type="text"
              placeholder="Add location"
              className="px-3 py-3 rounded-sm text-sm"
            />
          </div>
          <div className="mt-3 flex items-center justify-center gap-4 ">
            <button
              type="button"
              className="text-sm font-semibold rounded-sm px-3 py-2 bg-red-500 text-white"
              onClick={() => setPopup(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm font-semibold rounded-sm px-3 py-2 bg-blue-500 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Popup;
