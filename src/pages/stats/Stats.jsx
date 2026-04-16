import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContextProvider";

import { MdInsertChartOutlined } from "react-icons/md";
import FriendsGraph from "../../components/statsPage/FriendsGraph";

const Stats = () => {
  const { interactions } = useContext(FriendContext);

  return (
    <section className="container mx-auto px-5 my-10 space-y-5">
      <h1 className="text-3xl md:text-4xl font-bold">Friendship Analytics</h1>

      <div>
        {interactions.length === 0 ? (
          <div className="h-[75vh] flex flex-col items-center justify-center gap-5 bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-200 text-gray-500 px-5">
            <MdInsertChartOutlined size={70} />

            <h1 className="text-2xl md:text-3xl text-center">
              There are no interactions to generate analytics
            </h1>
          </div>
        ) : (
          <div className="min-h-[75vh] bg-[#FFFFFF] rounded-lg shadow-sm border border-gray-200 p-5 flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold md:m-4 text-[#244D3F]">
              By Interaction Type
            </h3>
            <div className="flex-1 flex items-center justify-center ">
              <FriendsGraph />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Stats;
