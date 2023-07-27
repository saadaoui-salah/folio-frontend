"use client";

import Link from "next/link";
import { useState } from "react";

const Info = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <section>
      <div className="pb-6 border-b-2 w-full flex flex-col items-center px-6 justify-center">
        <img className="w-[800px] h-[250px] max-sm:h-[180px] bg-red-200 rounded-md" />
        <div className="flex items-center justify-start w-full px-8">
          <img className="w-[110px] h-[110px] mt-[-40px] rounded-full max-sm:h-[100px] bg-green-200 mx-6" />
          <div className="flex items-center gap-6">
            <h1 contentEditable={edit} className="text-[24px] ">
              User Name
            </h1>
            <div
              onClick={handleEdit}
              className="w-8 h-8 cursor-pointer bg-slate-300 rounded-full"
            ></div>
          </div>
        </div>
      </div>
      <div className="border-b-2 py-2 w-full flex flex-row gap-2 items-center px-6 justify-center">
        <Link
          className="text-[17px] px-4 py-1 hover:bg-slate-200 font-semibold rounded-md "
          href="/followers"
        >
          Followers
        </Link>
        <Link
          className="text-[17px] px-4 py-1 hover:bg-slate-200 font-semibold rounded-md "
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-[17px] px-4 py-1 hover:bg-slate-200 font-semibold rounded-md "
          href="/communites"
        >
          Communities
        </Link>
        <Link
          className="text-[17px] px-4 py-1 hover:bg-slate-200 font-semibold rounded-md "
          href="/gallery"
        >
          Gallery
        </Link>
        <Link
          className="text-[17px] px-4 py-1 hover:bg-slate-200 font-semibold rounded-md "
          href="/settings"
        >
          Settings
        </Link>
      </div>
    </section>
  );
};
export default Info;
