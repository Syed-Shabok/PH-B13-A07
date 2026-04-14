import React from "react";

const StatusTag = ({ status }) => {
  return (
    <div
      className={`badge text-lg capitalize text-[#FFFFFF] font-medium py-5 px-4 rounded-full ${
        status === "overdue"
          ? "badge-error border-red-300"
          : status === "almost due"
            ? "badge-warning border-yellow-300"
            : "badge-success border-green-300"
      }`}
    >
      {status}
    </div>
  );
};

export default StatusTag;
