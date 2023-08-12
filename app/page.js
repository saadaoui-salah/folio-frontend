import { PostSection, Suggestions } from "@/components";
import { gql } from "@apollo/client";
import client from "@/roupi/apolloClient";

export const fetchPosts = async () => {
    const data  = await client.query({
      query: gql`
query data {
    allPosts{
      content
    }
  }
      `,
    });

    return data
}


export default async function Home() {
  const data = await fetchPosts()
  console.log(data)
  return (
    <div className="flex items-start justify-center gap-8">
      <Suggestions title={"Suggested Peoples"} />
      <PostSection />
      <Suggestions title={"Suggested Comunities"} />
    </div>
  );
}
