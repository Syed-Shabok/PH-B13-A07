import React, { Suspense, useContext } from "react";
import AllFriends from "../../components/homepage/AllFriends";
import { DNA, Hourglass, RotatingLines } from "react-loader-spinner";
import SummaryCards from "../../components/homepage/SummaryCards";
import { FriendContext } from "../../context/FriendContextProvider";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { FiPlus } from "react-icons/fi";

const HomePage = () => {
  const { loading } = useContext(FriendContext);

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center gap-5  mt-10 md:mt-15 lg:mt-20 mb-10">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          Friends to keep close in your life!!
        </h1>

        <p className="md:text-lg lg:text-xl text-center md:w-[80%] xl:w-[55%] text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn btn-ghost font-semibold text-lg py-6 px-5 rounded-md flex items-center bg-[#244d3f] text-[#FFFFFF]">
          <FiPlus size={20} /> Add a Friend
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <SummaryCards />
          <AllFriends />
        </div>
      )}
    </div>
  );
};

export default HomePage;
