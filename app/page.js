import { Post, PostForm, Suggestions } from "@/components";

export default function Home() {
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
        <Suggestions />
        <Suggestions />
      </section>
    </>
  );
}
