import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const UserDashboard = () => {
  return (
    <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[170px]">
      <div className="text-[28px] md:text-[34px] mb-10 font-semibold">
        This page is under constructon
      </div>
      <div className="text-md md:text-xl">
        Please move to the admin dashboard to see my further work.
      </div>

      <a
        target="_blank"
        href="https://fake-store-admin-git-main-abuhasanrumi.vercel.app/"
        className="w-full md:w-[300px] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center mx-auto mt-[25px]"
        rel="noreferrer"
      >
        Admin Live Link
      </a>
    </div>
  );
};

export default UserDashboard;
