import React from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineLink } from "react-icons/hi";

const Dashboard = () => {
  return (
<div className="flex items-center justify-center h-screen dark:bg-neutral-1000">
  <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-lg shadow-md w-70 h-60 flex flex-col items-center justify-center">
    <div className="p-6 pt-0 grid gap-4 duration-500 animate-in fade-in-30 items-center">
      <div className="flex items-center justify-center">
        <HiOutlineLink className="text-2xl text-white" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-4 text-glow items-center flex justify-center">
        Log In to MiniURL
      </h2>

      <div className="flex flex-col items-center justify-center space-y-2">
        <button
          className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:hover:border-neutral-700/50 h-9 px-4 py-2 w-full"
          name="Continue with Google"
        >
          <FcGoogle />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  </div>
</div>

  
  
  );
};

export default Dashboard;