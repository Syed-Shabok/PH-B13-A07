import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FriendContext } from "../../context/FriendContextProvider";
import TimelineCard from "../../components/ui/TimelineCard";
import { LiaUserFriendsSolid } from "react-icons/lia";

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("Filter Timeline");

  const { interactions } = useContext(FriendContext);

  const [displayInteractions, setDisplayInteractions] = useState([]);

  useEffect(() => {
    setDisplayInteractions(interactions);
  }, [interactions]);

  const handleDropdownSelect = (option) => {
    setFilterOption(option);
    setIsOpen(false);

    if (option === "All") {
      setDisplayInteractions(interactions);
      return;
    }

    const filteredList = interactions.filter(
      (interaction) => interaction.type === option,
    );

    setDisplayInteractions(filteredList);
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
            <li onClick={() => handleDropdownSelect("All")}>
              <a>All</a>
            </li>
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

      {/* Timeline Cards Container*/}
      <div className="flex flex-col gap-6 min-h-[65vh]">
        {interactions.length === 0 ? (
          <div className="h-[65vh] flex flex-col items-center justify-center gap-5 bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-200 text-gray-500 px-5">
            <LiaUserFriendsSolid size={70} />

            <h1 className="text-2xl md:text-3xl text-center">
              You currently have no interactions.
            </h1>
          </div>
        ) : (
          displayInteractions.map((interaction, index) => (
            <TimelineCard key={index} interaction={interaction} />
          ))
        )}
      </div>
    </section>
  );
};

export default Timeline;
