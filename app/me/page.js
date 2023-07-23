import { Post, PostForm, ProjectCard } from "@/components";
import Followers from "@/components/Followers";

export default function Me() {
  return (
    <>
      <section>Home</section>
      <section>
        <PostForm />
      </section>
      <section>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
      <section>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
      <Followers />
    </>
  );
}
