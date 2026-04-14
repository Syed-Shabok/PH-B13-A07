import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="container mx-auto px-5 flex flex-col items-center justify-center h-[90vh] gap-4">
      <h1 className="text-8xl font-extrabold text-[#244d3fFF]">404</h1>

      <h3 className="text-3xl font-extrabold">Page Not Found</h3>

      <p className="text-xl text-gray-500 text-center md:w-[75%] lg:w-[50%] xl:w-[32%]">
        Looks like this friendship link is broken. The page you're looking for
        doesn't exist or has been moved.
      </p>
      <Link to="/">
        <button className="btn bg-[#1a8862] text-[#FFFFFF] mt-3 text-lg p-6 rounded-lg flex gap-2 items-center">
          <IoMdHome size={22} /> Back to Home
        </button>
      </Link>
    </section>
  );
};

export default ErrorPage;
