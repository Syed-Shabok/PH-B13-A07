import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContextProvider";

const SummaryCards = () => {
  const { friendsList } = useContext(FriendContext);

  return (
    <section>
      <div className="my-10 grid grid-cols-4 gap-7">
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 rounded-lg">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {friendsList.length}
          </h3>

          <p className="text-lg text-gray-600">Total Friends</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 rounded-lg">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {
              friendsList.filter((friend) => friend.status === "on-track")
                .length
            }
          </h3>

          <p className="text-lg text-gray-600">On Track</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 rounded-lg">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {friendsList.filter((friend) => friend.status === "overdue").length}
          </h3>

          <p className="text-lg text-gray-600">Need Attention</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] py-8 rounded-lg">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {
              friendsList.filter((friend) => friend.days_since_contact <= 30)
                .length
            }
          </h3>

          <p className="text-lg text-gray-600">Interactions This Month</p>
        </div>
      </div>

      <hr className="bg-[#E9E9E9] border-0 h-0.5 mt-9" />
    </section>
  );
};

export default SummaryCards;
