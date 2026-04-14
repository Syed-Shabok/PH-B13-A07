import React, { use } from "react";
import FriendCard from "../ui/FriendCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <section className="my-10 space-y-5">
      <h3 className="text-3xl font-semibold">Your Friends</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default AllFriends;
