import { PostSection, Suggestions } from "@/components";

export default function Home() {
  return (
    <div className="flex items-start justify-center gap-8">
      <Suggestions title={"Suggested Peoples"} />
      <PostSection />
      <Suggestions title={"Suggested Comunities"} />
    </div>
  );
}
