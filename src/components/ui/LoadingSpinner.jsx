import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
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
  );
};

export default LoadingSpinner;
