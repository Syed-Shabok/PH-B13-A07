import React, { useContext } from "react";
import { useParams } from "react-router";
import { FriendContext } from "../../context/FriendContextProvider";
import StatusTag from "../../components/ui/StatusTag";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const FriendDetails = () => {
  const { friendId } = useParams();
  const { friendsList, loading } = useContext(FriendContext);

  const friend = friendsList.find((f) => f.id === Number(friendId));

  console.log(friend);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <section>
      <h1>{`Details of Friend: ${friendId}`}</h1>
      <div>
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] p-8 w-full gap-2 rounded-lg shadow-sm">
          <img
            src={friend.picture}
            className="rounded-full w-25"
            alt={`Photo of ${friend.name}`}
          />

          <h3 className="text-2xl font-bold mt-2">{friend.name}</h3>

          <StatusTag status={friend.status} />

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

          <p className="text-lg text-gray-600">{`${friend.bio}`}</p>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
