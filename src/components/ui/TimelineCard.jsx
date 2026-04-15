import React from "react";

const TimelineCard = () => {
  return (
    <div className="flex items-center gap-4 bg-[#FFFFFF] px-7 py-6 rounded-lg shadow-sm border border-gray-100">
      <img src="" className="md:h-12" alt="Text Icon" />

      <div className="flex flex-col">
        <h3 className="md:text-xl">
          <span className="font-bold">Text</span> with Tom Baker
        </h3>

        <p className="text-gray-500">March 20, 2026</p>
      </div>
    </div>
  );
};

export default TimelineCard;
