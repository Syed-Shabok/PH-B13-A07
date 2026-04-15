import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import textIcon from "../../assets/text.png";

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("Filter Timeline");

  const handleDropdownSelect = (option) => {
    setFilterOption(option);
    setIsOpen(false);
  };

  return (
    <section className="container mx-auto px-5 my-10 space-y-8">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Timeline</h1>

        <div className={`dropdown ${isOpen ? "dropdown-open" : ""}`}>
          <div
            role="button"
            onClick={() => setIsOpen(!isOpen)}
            className="btn m-1 w-60 justify-between items-center text-lg font-normal text-gray-500"
          >
            <p>{filterOption}</p>
            <MdKeyboardArrowDown size={22} />
          </div>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-60 p-2 shadow-sm">
            <li onClick={() => handleDropdownSelect("Call")}>
              <a>Call</a>
            </li>
            <li onClick={() => handleDropdownSelect("Text")}>
              <a>Text</a>
            </li>
            <li onClick={() => handleDropdownSelect("Video")}>
              <a>Video</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Timeline Cards */}
      <div className="flex flex-col gap-6">
        {/* Cards will be rendered here */}
      </div>
    </section>
  );
};

export default Timeline;
