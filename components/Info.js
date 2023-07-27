"use client";

import Link from "next/link";
import { useState } from "react";

const Info = () => {
  const [edit, setEdit] = useState(false);
  const [fullName, setFullName] = useState("User Name");
  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <section>
      <div className="pb-6 relative border-b-2 w-full flex flex-col items-center px-6 max-sm:p-0 justify-center">
        <div className="relative w-[800px] max-sm:w-full h-[350px] max-sm:h-[280px]">
          <img className="w-[800px] max-sm:w-full h-[250px] max-sm:h-[180px] bg-red-200 rounded-md" />
          <div className="absolute flex items-center justify-start w-full px-8">
            <img className="w-[110px] h-[110px] mt-[-40px] rounded-full max-sm:h-[100px] bg-green-200 mx-6" />
            <div className="flex items-center gap-6">
              {edit ? (
                <input
                  className="bg-transparent text-[24px] w-[150px] border rounded-md px-2 border-blue-600"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              ) : (
                <h1 className="text-[24px] px-2">{fullName}</h1>
              )}
              <div
                onClick={handleEdit}
                className="w-8 h-8 cursor-pointer bg-slate-300 rounded-full"
              ></div>
            </div>
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
