import React, { useContext } from "react";
import { useParams } from "react-router";
import { FriendContext } from "../../context/FriendContextProvider";
import StatusTag from "../../components/ui/StatusTag";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import {
  RiArchiveLine,
  RiDeleteBin6Line,
  RiNotificationSnoozeLine,
} from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { BiMessageDots } from "react-icons/bi";
import { PiVideoCameraBold } from "react-icons/pi";

const FriendDetails = () => {
  const { friendId } = useParams();
  const { friendsList, loading } = useContext(FriendContext);

  const friend = friendsList.find((f) => f.id === Number(friendId));

  console.log(friend);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <section>
      <div className="py-20 px-40 grid grid-cols-3 gap-7">
        {/* Column 1 */}
        <div className="space-y-4">
          {/* Friend Image card */}
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

            <p className="text-xl italic text-gray-600 text-center">{`"${friend.bio}"`}</p>

            <p className="text-lg text-gray-400">{`Preferred: ${friend.preferred_contact}`}</p>
          </div>

          {/* Buttons below image card */}
          <div className="space-y-4">
            <button className="btn py-8 text-xl bg-[#FFFFFF] w-full shadow-sm">
              <RiNotificationSnoozeLine size={22} /> Snooze 2 weeks
            </button>

            <button className="btn py-8 text-xl bg-[#FFFFFF] w-full shadow-sm">
              <RiArchiveLine size={22} /> Archive
            </button>

            <button className="btn py-8 text-xl bg-[#FFFFFF] text-red-500 w-full shadow-sm">
              <RiDeleteBin6Line size={22} /> Delete
            </button>
          </div>
        </div>

        {/* Column 2 & 3 */}
        <div className="col-span-2 space-y-7">
          {/* Summary Card Container */}
          <div className="grid grid-cols-3 gap-7">
            {/* Summary Card */}
            <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-12 px-4 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-[#244D3F]">
                {friend.days_since_contact}
              </h3>

              <p className="md:text-xl text-gray-600 text-center">
                Days Since Contact
              </p>
            </div>

            {/* Summary Card */}
            <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-12 px-4 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-[#244D3F]">
                {friend.goal}
              </h3>

              <p className="md:text-xl text-gray-600 text-center">
                Goal (Days)
              </p>
            </div>

            {/* Summary Card */}
            <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-12 px-4 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-[#244D3F]">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>

              <p className="md:text-xl text-gray-600 text-center">Next Due</p>
            </div>
          </div>

          {/* Middle Container  */}
          <div className="space-y-6 py-12 px-7 bg-[#FFFFFF] rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-medium text-[#244D3F]">
                Relationship Goal
              </h3>
              <button className="btn bg-[#F8FAFC] p-5 text-lg">Edit</button>
            </div>
            <h3 className="text-xl text-gray-500">
              Connect every{" "}
              <span className="text-black font-bold">{`${friend.goal} days`}</span>
            </h3>
          </div>

          {/* Functional Buttons Container */}
          <div className="py-12 px-7 bg-[#FFFFFF] rounded-lg shadow-sm space-y-6">
            <h3 className="text-2xl font-medium text-[#244D3F] ">
              Quick Check-In
            </h3>

            {/* Grid Button container */}
            <div className="grid grid-cols-3 gap-5">
              <button className="btn px-25 py-6 h-auto text-xl bg-[#F8FAFC] flex flex-col items-center justify-center font-normal rounded-lg">
                <TbPhoneCall size={32} /> Call
              </button>

              <button className="btn px-25 py-6 h-auto text-xl bg-[#F8FAFC] flex flex-col items-center justify-center font-normal rounded-lg">
                <BiMessageDots size={32} /> Text
              </button>

              <button className="btn px-25 py-6 h-auto text-xl bg-[#F8FAFC] flex flex-col items-center justify-center font-normal rounded-lg">
                <PiVideoCameraBold size={32} /> Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
