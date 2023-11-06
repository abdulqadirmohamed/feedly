import { TPosts } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCards = ({ id, title, categoryName, author, content, createdAt }: TPosts) => {

  const dateOpject = new Date(createdAt)
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
    day: 'numeric'
  }
  const formattedDate = dateOpject.toLocaleDateString('en-US', options)

  return (
    <Link href={`/posts/${id}`} className="shadow-md w-fit rouded-md group">
      <div className="group-hover:opacity-90">
        <Image
          src={
            "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={800}
          height={800}
          alt="image"
        />
      </div>
      <div className="p-3 relative">
        <div>
          <span className="text-sm my-3 text-gray-500">{categoryName}</span>
          <h1 className="font-bold my-2 line-clamp-2">{title}</h1>
        </div>
        <div className="mt-4">
          <hr />
        </div>
        <div className="my-2 flex items-center gap-4 text-sm">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            width={30}
            height={30}
            alt="User profile"
            className="rounded-full"
          />
          <div className="flex flex-row items-center gap-5">
            <span className="font-medium">{author}</span>
            <span className="text-gray-500">{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCards;
