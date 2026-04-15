import React from "react";
import StatusTag from "../ui/StatusTag";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <Link
      to={`/friendDetails/${friend.id}`}
      className="flex flex-col items-center justify-center bg-[#FFFFFF] p-8 w-full gap-2 rounded-lg shadow-sm border border-gray-100"
    >
      <img
        src={friend.picture}
        className="rounded-full border-3 border-green-300 w-25"
        alt={`Photo of ${friend.name}`}
      />

      <h3 className="text-2xl font-bold mt-2">{friend.name}</h3>

      <p className="text-lg text-gray-600">{`${friend.days_since_contact}d ago`}</p>

      <div className="flex justify-center items-center flex-wrap gap-2 my-2">
        {friend.tags.map((tag, index) => (
          <div
            key={index}
            className="badge badge-success bg-green-100 text-lg py-5 px-4 rounded-full text-black border-green-500"
          >
            {tag}
          </div>
        ))}
      </div>

      <StatusTag status={friend.status} />
    </Link>
  );
};

export default FriendCard;
