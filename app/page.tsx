import CategoriesList from "@/components/Categories";
import PostCards from "@/components/PostCards";
import { TPosts } from "@/types/types";

const getPosts = async (): Promise<TPosts[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: 'no-store'
    });

    if (res.ok) {
      const posts = await res.json();
      console.log(posts);
      return posts;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <div className="w-[60%] mx-auto">
        <CategoriesList />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {posts && posts.length > 0 ? (
            posts.map((post: TPosts) => (
              <PostCards
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                author={post.author.name}
              />
            ))
          ) : (
            <div className="py-6">No posts to display</div>
          )}
        </div>
      </div>
    </main>
  );
}
