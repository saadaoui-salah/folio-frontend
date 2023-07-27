import { GoogleAuth } from "@/components/GoogleAuth";

export default function Login() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="bg-white w-[350px] h-[200px] flex justify-center border border-slate-300 rounded-md px-4 py-2">
        <h1 className="text-[30px] mt-2">Login</h1>
        <GoogleAuth />
      </div>
    </div>
  );
}
