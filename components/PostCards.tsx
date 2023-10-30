import { TPosts } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const PostCards = ({id, title, categoryName, author}:TPosts) => {
    return (
        <Link href={`/posts/${id}`} className='shadow-md w-fit rouded-md group'>
            <div className='relative group-hover:opacity-90'>
                <Image src={'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={800} height={800} alt='image' />
            </div>
            <div className='p-3'>
                <div>
                    <span className='text-sm my-3 text-gray-500'>{categoryName}</span>
                    <h1 className='font-bold my-2'>{title}</h1>
                </div>
                <div className='mt-4'>
                    <hr />
                </div>
                <div className='my-2 flex items-center gap-4 text-sm'>
                    <Image
                        src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                        width={30} height={30} alt="User profile"
                        className='rounded-full' />
                        <span className='font-medium'>{author}</span>
                        <span className='text-gray-500'>17 Oct 2023</span>
                </div>

            </div>
        </Link>
    )




}

export default PostCards