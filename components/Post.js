"use client";
import { useEffect, useRef, useState } from "react";
import { EyeSlash } from "./Icons";
import PostForm from "./PostForm";

const PostDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        document.removeEventListener("click", () => "");
        console.log("eeee");
      }
    }

    document.addEventListener("click", (e) => handleClickOutside(e));
  }, []);
  return (
    <>
      <div
        ref={dropdownRef}
        onClick={() => setOpen(!open)}
        className="flex items-center rounded-full cursor-pointer"
      >
        <span className="text-xl font-bold">.</span>
        <span className="text-xl font-bold">.</span>
        <span className="text-xl font-bold">.</span>
        {open && (
          <div className="absolute w-48  bg-white right-4 top-12 rounded-md shadow-md">
            <ul className="p-4 flex flex-col gap-2">
              <li className="w-full flex items-center gap-2 hover:bg-slate-200 rounded-md px-2 py-[3px]">
                <EyeSlash />
                <p>Hide Post</p>
              </li>
              <li className="w-full flex hover:bg-slate-200 rounded-md px-2 py-[3px]">
                <p>Follow Poster</p>
              </li>
              <li className="w-full flex hover:bg-slate-200 rounded-md px-2 py-[3px]">
                <p>Unfollow Poster</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

const PostActions = () => {
  return (
    <div className="flex items-center justify-between gap-4 mt-3">
      <div className="flex gap-2">
        <div className="rounded-full cursor-pointer bg-slate-300 w-6 h-6"></div>
        <div className="rounded-full cursor-pointer bg-slate-300 w-6 h-6"></div>
      </div>
      <span className="rounded-full cursor-pointer bg-slate-300 w-6 h-6"></span>
    </div>
  );
};

const Post = () => {
  return (
    <div className="border hover:shadow-md md:w-[500px] lg:w-[700px] shadow-sm relative border-slate-300 rounded-md w-[400px] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="rounded-full bg-slate-400 w-10 h-10" />
          <div>
            <div className="flex items-center">
              <p className="font-bold mx-3 cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4">
                User Name
              </p>
              <span className="px-2 py-1 mt-[1px] font-bold bg-slate-300 bg-opacity-80 rounded-md text-sm select-none">
                Admin
              </span>
            </div>
            <p className="text-sm mx-3 font-light">22, may 2022</p>
          </div>
        </div>
        <PostDropDown />
      </div>
      <p className="mt-4">lorem </p>
      <div className="mt-2 rounded-md bg-slate-400 w-md h-[400px]"></div>
      <PostActions />
    </div>
  );
};

export const PostLoading = () => {
  return (
    <div className="border hover:shadow-md shadow-sm relative border-slate-300 rounded-md w-[400px] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="animate-pulse rounded-full bg-slate-300 w-10 h-10"></div>
          <div>
            <div className="w-28 animate-pulse h-[15px] bg-slate-300 rounded-full  mx-3 font-light"></div>
            <div className="w-28 animate-pulse h-[12px] mt-2 bg-slate-300 rounded-full  mx-3 font-light"></div>
          </div>
        </div>
        <div className="flex items-center rounded-full cursor-pointer">
          <span className="w-6 h-6 bg-slate-300 rounded-full"></span>
        </div>
      </div>
      <div className="w-full h-[20px] rounded-full animate-pulse bg-slate-300 mt-4"></div>
      <div className="flex mt-2">
        <div className="w-48 h-[20px] mr-2 rounded-full animate-pulse bg-slate-300"></div>
        <div className="w-48 h-[20px] rounded-full animate-pulse bg-slate-300"></div>
      </div>
      <div className="mt-2 rounded-md bg-slate-300 animate-pulse w-md min-h-[200px]"></div>
      <div className="flex items-center justify-between animate-pulse gap-4 mt-3">
        <div className="flex gap-2">
          <div className="rounded-full bg-slate-300 w-6 h-6"></div>
          <div className="rounded-full bg-slate-300 w-6 h-6"></div>
        </div>
        <span className="rounded-full bg-slate-300 w-6 h-6"></span>
      </div>
    </div>
  );
};

export const PostSectionLoading = () => {
  return (
    <section className="flex flex-col gap-4 my-4 px-3 items-center">
      {Array(5)
        .fill(0)
        .map((i) => {
          return <PostLoading />;
        })}
    </section>
  );
};

const PostSection = () => {
  return (
    <section className="flex flex-col gap-4 px-3 mb-8 items-center">
      <PostForm />
      {Array(5)
        .fill(0)
        .map((i) => {
          return <Post />;
        })}
    </section>
  );
};

export default PostSection;
