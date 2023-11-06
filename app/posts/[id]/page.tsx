import { TPosts } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const getpost = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
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

const page = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const post = await getpost(id)

    const dateOpject = new Date(post.createdAt)
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        year: '2-digit',
        day: 'numeric'
    }
    const formattedDate = dateOpject.toLocaleDateString('en-us', options)


    return (
        <div className='w-[60%] mx-auto'>
            <div>
                <div className='my-2 flex items-center gap-4 text-sm mb-5'>
                    <Image
                        src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                        width={30} height={30} alt="User profile"
                        className='rounded-full' />
                    <span className='font-medium'>{post.author.name}</span>
                    <span className='text-gray-500'>{formattedDate}</span>
                </div>
                <hr />
                <div className='my-5'>
                    <h1 className='font-bold text-2xl'>{post.title}</h1>
                    <p className='my-3'>{post.content}</p>
                </div>
            </div>
        </div>
    )
}

export default page