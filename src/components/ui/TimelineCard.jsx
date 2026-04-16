import React from "react";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";

const TimelineCard = ({ interaction }) => {
  return (
    <div className="flex items-center gap-4 bg-[#FFFFFF] px-7 py-6 rounded-lg shadow-sm border border-gray-100">
      <img
        src={
          interaction.type === "Call"
            ? callIcon
            : interaction.type === "Text"
              ? textIcon
              : videoIcon
        }
        className="md:h-12"
        alt="Text Icon"
      />

      <div className="flex flex-col">
        <h3 className="md:text-xl">
          <span className="font-bold">{interaction.type}</span> with{" "}
          {interaction.personName}
        </h3>

        <p className="text-gray-500">
          {new Date(interaction.time).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default TimelineCard;
