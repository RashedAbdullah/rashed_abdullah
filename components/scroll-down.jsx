import React from "react";

const ScrollDown = () => {
  return (
    <a href="#works" className="inline-flex justify-start items-center gap-2">
      <div className="justify-start text-neutral-400 text-xl font-medium leading-loose">
        Scroll Down
      </div>
      <svg
        width="20"
        height="30"
        viewBox="0 0 60 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
.arrow {
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  animation: moveDown 1.5s infinite;
}

@keyframes moveDown {
  0% { transform: translateY(-10px); opacity: 0.5; }
  50% { transform: translateY(0px); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0.5; }
}
`}
        </style>
        <line x1="30" y1="10" x2="30" y2="70" className="arrow" />
        <polyline points="10,60 30,85 50,60" className="arrow" />
      </svg>
    </a>
  );
};

export default ScrollDown;
