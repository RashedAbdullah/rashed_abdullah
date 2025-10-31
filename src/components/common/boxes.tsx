import React from "react";

const Boxes = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hover:bg-secondary transition-colors duration-300 rounded-lg border-[0.1px] border-border font-sf-mono h-48 text-sm">
      {children}
    </div>
  );
};

export default Boxes;
