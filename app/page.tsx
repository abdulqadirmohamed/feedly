import CategoriesList from "@/components/Categories";
import PostCards from "@/components/PostCards";
import PostLoader from "@/components/loaders/PostLoader";
import { TPosts } from "@/types/types";

const getPosts = async (): Promise<TPosts[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: 'no-store'
    });

    if (res.ok) {
      const posts = await res.json();
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

        <div className="mt-10">
          {posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6 ">
              {posts.map((post: TPosts) => (
                <PostCards
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  author={post.author.name}
                  createdAt={post.createdAt}
                />
              ))}
            </div>
          ) : (
            <PostLoader />
          )}
        </div>
      </div>
    </main>
  );
}
