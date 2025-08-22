import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useState } from "react";
export default function Courses({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="overflow-hidden relative max-w-85 mx-auto mt-10">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={prev}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={next}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === curr ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurr(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
