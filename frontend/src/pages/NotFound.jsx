import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white text-2xl flex flex-col gap-2 items-center justify-center">
        <h1>Error 404</h1>
        <h1>Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
