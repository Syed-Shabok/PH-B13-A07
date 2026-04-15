import React, { Suspense, useContext } from "react";
import AllFriends from "../../components/homepage/AllFriends";
import { DNA, Hourglass, RotatingLines } from "react-loader-spinner";
import SummaryCards from "../../components/homepage/SummaryCards";
import { FriendContext } from "../../context/FriendContextProvider";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const HomePage = () => {
  const { loading } = useContext(FriendContext);

  return (
    <div className="container mx-auto px-5">
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
