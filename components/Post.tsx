import React from 'react'
import PostCards from './PostCards'
import { TPosts } from '@/types/types'



const Post = () => {

    const posts: Array<TPosts> = [
        {
            id: 1,
            title: 'Integrate SMS notifications to your Next.js web app by using Twilio',
            desc: 'description...',
            category: 'Middle east',
            author: 'Abdulqadir',
            cover:'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
        },
        {
            id: 2,
            title: 'How to add media uploads to S3 on your Next.js app',
            desc: 'description 2...',
            category: 'Africa',
            author: 'Nuur',
            cover: 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg'
        },
        {
            id: 3,
            title: 'How to setup notifications using ROQ ai',
            desc: 'description 2...',
            category: 'News',
            author: 'Ahmed',
            cover: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg'
        },
    ]


    return (
        <div className='grid grid-cols-3 gap-6'>
            {posts.map((post) => (
                <PostCards key={post.id} {...post} />
            ))}
        </div>
    )
}

export default Post