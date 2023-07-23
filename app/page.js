import { PostSection, Suggestions } from "@/components";

export default function Home() {
  return (
    <div className="mt-10 flex items-start justify-evenly">
      <Suggestions title={"Suggested Peoples"} />
      <PostSection />
      <Suggestions title={"Suggested Comunities"} />
    </div>
  );
}
