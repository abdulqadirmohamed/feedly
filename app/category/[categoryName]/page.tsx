import { TPosts } from '@/types/types';
import React from 'react'


const getpost = async (categoryName: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/categories/${categoryName}`, {
            cache: 'no-store'
        })
        if (res.ok) {
            const post = await res.json()
            return post
        }
    } catch (error) {
        console.log(error)
    }
}



const page = async ({ params }: { params: { categoryName: string } }) => {
    const categoryName = params.categoryName
    const posts = await getpost(categoryName)

    console.log(posts)
  return (
    <div>
        <h1>{posts.categoryName}</h1>

        {posts && posts.length > 0 ?(
            posts?.map((post:TPosts)=>(
            <h1>{post.title}</h1>
        ))
        ):"no cat"}
       
    </div>
  )
}

export default page