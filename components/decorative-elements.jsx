import React from "react";

const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] [mask-image:linear-gradient(180deg,white,transparent)] dark:bg-[url('/grid-pattern-dark.svg')]"></div>
      </div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
    </div>
  );
};

export default DecorativeElements;
