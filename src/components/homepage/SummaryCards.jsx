import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContextProvider";

const SummaryCards = () => {
  const { friendsList } = useContext(FriendContext);
  const { interactions } = useContext(FriendContext);

  return (
    <section>
      {/* Summary Card Container */}
      <div className="my-10 grid grid-cols-2 lg:grid-cols-4 gap-7">
        {/* Summary Card */}
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 px-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {friendsList.length}
          </h3>

          <p className="md:text-lg text-gray-600 text-center">Total Friends</p>
        </div>

        {/* Summary Card */}
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 px-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {
              friendsList.filter((friend) => friend.status === "on-track")
                .length
            }
          </h3>

          <p className="md:text-lg text-gray-600 text-center">On Track</p>
        </div>

        {/* Summary Card */}
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 px-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {friendsList.filter((friend) => friend.status === "overdue").length}
          </h3>

          <p className="md:text-lg text-gray-600 text-center">Need Attention</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 px-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {
              // friendsList.filter((friend) => friend.days_since_contact <= 30)
              //   .length

              interactions.length
            }
          </h3>

          <p className="md:text-lg text-gray-600 text-center">
            Interactions This Month
          </p>
        </div>
      </div>

      <hr className="bg-[#E9E9E9] border-0 h-0.5 mt-9" />
    </section>
  );
};

export default SummaryCards;
