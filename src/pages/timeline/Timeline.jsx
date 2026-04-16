import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FriendContext } from "../../context/FriendContextProvider";
import TimelineCard from "../../components/ui/TimelineCard";
import { LiaUserFriendsSolid } from "react-icons/lia";

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("All");
  const [filterTimeOption, setFilterTimeOption] = useState("Oldest");
  const [searchInput, setSearchInput] = useState("");

  const { interactions } = useContext(FriendContext);

  const [displayInteractions, setDisplayInteractions] = useState([]);

  useEffect(() => {
    let filteredList = [...interactions];

    // Filter by type
    if (filterOption !== "All") {
      filteredList = filteredList.filter(
        (interaction) => interaction.type === filterOption,
      );
    }

    // user search
    if (searchInput.trim() !== "") {
      filteredList = filteredList.filter((interaction) =>
        interaction.personName
          .toLowerCase()
          .includes(searchInput.toLowerCase()),
      );
    }

    // time sort
    filteredList.sort((a, b) =>
      filterTimeOption === "Oldest" ? a.time - b.time : b.time - a.time,
    );

    setDisplayInteractions(filteredList);
  }, [interactions, filterOption, filterTimeOption, searchInput]);

  const handleTimeFilter = (option) => {
    setFilterTimeOption(option);
    setIsTimeOpen(false);
  };

  const handleDropdownSelect = (option) => {
    setFilterOption(option);
    setIsOpen(false);
  };

  return (
    <section className="container mx-auto px-5 my-10 space-y-8">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Timeline</h1>

        <div className="flex flex-wrap items-center gap-2">
          {/* Sort by interaction type */}
          <div className={`dropdown ${isOpen ? "dropdown-open" : ""}`}>
            <div
              role="button"
              onClick={() => setIsOpen(!isOpen)}
              className="btn m-1 w-70 justify-between items-center text-lg font-normal text-gray-500"
            >
              <p>Filter Timeline ({filterOption})</p>
              <MdKeyboardArrowDown size={22} />
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-70 p-2 shadow-sm text-lg">
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

          {/* Sort by time */}
          <div className={`dropdown ${isTimeOpen ? "dropdown-open" : ""}`}>
            <div
              role="button"
              onClick={() => setIsTimeOpen(!isTimeOpen)}
              className="btn m-1 w-70 justify-between items-center text-lg font-normal text-gray-500"
            >
              <p>{filterTimeOption}</p>
              <MdKeyboardArrowDown size={22} />
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-70 p-2 shadow-sm text-lg">
              <li onClick={() => handleTimeFilter("Oldest")}>
                <a>Oldest</a>
              </li>
              <li onClick={() => handleTimeFilter("Most Recent")}>
                <a>Most Recent</a>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <label className="input w-70 text-lg">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              onChange={(e) => setSearchInput(e.target.value)}
              required
              placeholder="Search by friend's name"
            />
          </label>
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
        ) : displayInteractions.length === 0 ? (
          <div className="h-[65vh] flex flex-col items-center justify-center gap-5 bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-200 text-gray-500 px-5">
            <h1 className="text-2xl">No Results Found</h1>
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
