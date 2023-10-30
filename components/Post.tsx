import React from "react";
import PostCards from "./PostCards";
import { TPosts } from "@/types/types";

// const getPost = async (): Promise<TPosts[] | null> => {
//   try {
//     const res = await fetch("http://localhost:3000/api/posts/", {
//       cache: "no-store",
//     });
//     if (res.ok) {
//       const posts = await res.json();
//       return posts;
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   return null;
// };
const getPosts = async (): Promise<TPosts[] | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts`, {
      cache: "no-store",
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

const Post = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-3 gap-6">
      {posts && posts.length > 0 ? <div>Posts</div> : "no posts"}
    </div>
  );
};
// posts.map((post:TPosts) => (
//     <PostCards key={post.id} {...post} />
//   ))}

export default Post;
