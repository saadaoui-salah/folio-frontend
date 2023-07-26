import { GroupOfCards, Info, PostSection } from "@/components";

export default function Me() {
  return (
    <>
      <Info />
      <div className="flex justify-evenly flex-wrap mt-16">
        <div className=" px-4">
          <GroupOfCards title="Followers" link="/followers" />
          <GroupOfCards title="Projects" link="/projects" />
        </div>
        <PostSection />
      </div>
    </>
  );
}
