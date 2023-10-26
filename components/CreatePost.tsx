'use client'
import { TCategory } from "@/types/types";
import React, { useEffect, useState } from "react";

const CreatePost = () => {
  const [categories, setCategories] = useState<TCategory[]>([])
  useEffect(()=>{
    const getCategories = async () =>{
      const res = await fetch('api/categories')
      const categoryName = await res.json()
      setCategories(categoryName)
    }
    getCategories()
  },[])
  return (
    <div>
      <h1 className="my-6 font-bold">Create Post</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 border-[1px] rounded-md p-4">
          <div className="my-3">
            <label htmlFor="">Title <span className="text-red-600">*</span></label>
            <input
              type="text"
              className="border-2 px-4 py-2 rounded-md w-full my-2"
            />
          </div>
          <div className="my-3 flex flex-col">
            <label htmlFor="">Category</label>
            <select
              className="border-2 px-4 py-2 rounded-md w-full capitalize my-2"
              name=""
              id=""
            >
              <option value="">Select A Category</option>
              {categories && categories.map((category)=>(
                <option value="" className=" my-2">{category.categoryName}</option>
              ))}
              {/* <option value="">Technology</option>
              <option value="">Programming</option>
              <option value="">AI</option> */}
            </select>
          </div>
          <div className="my-3">
            <label htmlFor="">Description <span className="text-red-600">*</span></label>
            <textarea
              rows={5}
              className="border-2 px-4 py-2 rounded-md w-full my-2"
            />
          </div>
        </div>
        <div className="border-[1px] rounded-md p-4">
            <h1>Featured Image</h1>
            <hr />
            <div className="my-4">
                <input type="file" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
