import React, { useContext } from "react";
import FriendCard from "../ui/FriendCard";
import { FriendContext } from "../../context/FriendContextProvider";
import { RotatingLines } from "react-loader-spinner";
import LoadingSpinner from "../ui/LoadingSpinner";

const AllFriends = () => {
  const { friendsList } = useContext(FriendContext);

  return (
    <section className="my-10 space-y-5">
      <h3 className="text-3xl font-semibold">Your Friends</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-7">
        {friendsList.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default AllFriends;
