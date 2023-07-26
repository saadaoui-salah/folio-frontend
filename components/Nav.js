"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AuthButtons, ProfileButoon } from "./Buttons";
import { NotificationIcon } from "./Icons";

const Logo = () => {
  return (
    <div className="font-bold select-none text-3xl flex items-end">
      folio
      <div className="font-bold text-4xl mx-[6px] px-1 py-1 mb-[5px] rounded-full bg-green-300"></div>
    </div>
  );
};

const DropDownLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block hover:bg-gray-100  px-4 py-2 text-sm text-gray-700"
    >
      {title}
    </Link>
  );
};

const DropDownMenu = ({ Icon, children }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
        document.removeEventListener("click", () => "");
      }
    }

    document.addEventListener("click", (e) => handleClickOutside(e));
  }, []);
  return (
    <div ref={dropdownRef} className="relative ml-3">
      <Icon action={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div
          onClick={() => setDropdown(!dropdown)}
          className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          id="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="bg-white shadow-slate-200 border-b shadow-md fixed w-full top-0 z-50">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/*Mobile menu button */}
          <div className="absolute p-2 rounded-full cursor-pointer inset-y-0 left-0 flex items-center sm:hidden">
            <NotificationIcon />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
          </div>
          {false && (
            <div className="flex h-full items-center">
              <AuthButtons />
            </div>
          )}
          {true && (
            <>
              <div className="rounded-full cursor-pointer max-sm:hidden">
                <NotificationIcon />
              </div>
              <div className="flex items-center sm:static sm:inset-auto ml-2 sm:pr-0">
                <DropDownMenu Icon={ProfileButoon}>
                  <DropDownLink href="/me" title="My Profile" />
                  <DropDownLink href="/community/1" title="Community Name" />
                  <DropDownLink
                    href="/community/create"
                    title="Create Community"
                  />
                  <DropDownLink href="/sign-out" title="Sign out" />
                </DropDownMenu>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
