import Link from "next/link";
import { CloseMenuIcon, NotificationIcon, OpenMenuIcon } from "./Icons";
import Image from "next/image";

export const ProfileButoon = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      type="button"
      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <Image
        width={30}
        height={30}
        className="h-8 w-8 rounded-full"
        src={"/avatar.jpeg"}
        alt=""
      />
    </button>
  );
};

export const NotificationButton = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      type="button"
      className="rounded-full relative hover:bg-gray-200 p-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute top-0 -left-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <NotificationIcon />
    </button>
  );
};

export const MobileMenuButtons = ({ onclick, open }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        onClick={() => onclick()}
        type="button"
        id="dropdownBtn"
        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        {open ? <OpenMenuIcon /> : <CloseMenuIcon />}
      </button>
    </div>
  );
};

export const AuthButtons = () => {
  return (
    <>
      <Link
        href="login"
        className="hover:bg-gradient-to-r from-[#ff80b5] to-[#9089fc]  hover:text-white text-indigo-400 border border-indigo-400 mr-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </Link>
      <Link
        href="signup"
        className="bg-gradient-to-r from-[#ff80b5] to-[#9089fc]  text-white font-bold py-2 px-4 rounded focus:outline-none border border-indigo-400 focus:shadow-outline"
      >
        Sign Up
      </Link>
    </>
  );
};
