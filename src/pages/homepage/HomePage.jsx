import React, { Suspense } from "react";
import AllFriends from "../../components/homepage/AllFriends";
import { DNA, Hourglass, RotatingLines } from "react-loader-spinner";

const HomePage = () => {
  return (
    <div className="container mx-auto px-5">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[50vh]">
            <RotatingLines
              visible={true}
              height="50"
              width="50"
              color="#244D3F"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        <AllFriends />
      </Suspense>
    </div>
  );
};

export default HomePage;
