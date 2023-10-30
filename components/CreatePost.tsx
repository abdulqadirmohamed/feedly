"use client";
import { TCategory } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("api/categories");
      const categoryName = await res.json();
      setCategories(categoryName);
    };
    getCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      const errorMessage = "Title and content are required";
      setError(errorMessage);
      return;
    }

    try {
      const res = await fetch("api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          featuredImage,
          selectedCategory,
        }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh()
      } else {
        setError("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="my-6 font-bold">Create Post</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-5">
        <div className="col-span-2 border-[1px] rounded-md p-4">
          <div className="my-3">
            <label htmlFor="">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border-2 px-4 py-2 rounded-md w-full my-2"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="my-3 flex flex-col">
            <label htmlFor="">Category</label>
            <select
              className="border-2 px-4 py-2 rounded-md w-full capitalize my-2"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select A Category</option>
              {categories &&
                categories.map((category: TCategory) => (
                  <option value="" key={category.id} className=" my-2">
                    {category.categoryName}
                  </option>
                ))}
            </select>
          </div>
          <div className="my-3">
            <label htmlFor="">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              rows={5}
              className="border-2 px-4 py-2 rounded-md w-full my-2"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md">
              Submit
            </button>
          </div>

          {error && (
            <div className="my-5">
              <span className="text-red-500">{error}</span>
            </div>
          )}

        </div>
        <div className="border-[1px] rounded-md p-4">
          <h1>Featured Image</h1>
          <hr />
          <div className="my-4">
            <input
              type="file"
              onChange={(e) => setFeaturedImage(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
