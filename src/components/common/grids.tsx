import React from "react";

const Grids = () => {
  return (
    <div className="absolute -z-10 left-0 top-0 h-full w-full grid grid-cols-4">
      <div className="h-full border-l-[0.1px]" />
      <div className="h-full border-l-[0.1px]" />
      <div className="h-full border-l-[0.1px]" />
      <div className="h-full border-x-[0.1px]" />
    </div>
  );
};

export default Grids;
