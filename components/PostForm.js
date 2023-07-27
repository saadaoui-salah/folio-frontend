import Image from "next/image";
import { XIcon } from "./Icons";

const PostForm = () => {
  return (
    <form className="md:w-[500px] lg:w-[700px] bg-white w-[400px] border border-slate-300 rounded-md">
      <div className="p-2 flex items-center gap-4 border-b border-slate-300">
        <img className="bg-slate-400 w-10 h-10 rounded-full" />
        <p className="font-bold">User Name</p>
      </div>
      <textarea
        placeholder="Share post ..."
        className="p-2 w-full border-b h-36 border-slate-300 bg-transparent"
      ></textarea>
      <div className="px-3 py-2 flex gap-4 flex-wrap">
        <div className="relative">
          <img className="rounded-md bg-slate-300 w-16 h-16" />
          <button className="cursor-pointer absolute top-1 right-1 rounded-full bg-red-200 p-1">
            <XIcon />
          </button>
        </div>
      </div>
      <div className="flex border-t border-slate-300 items-center justify-between px-2 py-1">
        <button className="px-2 py-1">Upload</button>
        <button className="px-2 py-1">share</button>
      </div>
    </form>
  );
};
export default PostForm;
