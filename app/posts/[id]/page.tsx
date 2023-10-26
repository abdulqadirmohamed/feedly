import { TPosts } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-[60%] mx-auto'>
            <div>
                <div className='my-2 flex items-center gap-4 text-sm mb-5'>
                    <Image
                        src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                        width={30} height={30} alt="User profile"
                        className='rounded-full' />
                    <span className='font-medium'>Abdulqadir</span>
                    <span className='text-gray-500'>17 Oct 2023</span>
                </div>
                <hr />
                <div className='my-5'>
                    <h1 className='font-bold text-2xl'>How to setup notifications using ROQ ai</h1>
                    <p className='my-3'>In this tutorial, we will dive into the powerful world of notifications using the ROQ Platform. Notifications play a vital role in any successful software application, keeping users engaged and informed about essential updates, events, or actions. With ROQ's notification system, we can effortlessly add new notifications to our project and deliver them to users through various channels, including in-app notifications, traditional e-mails, SMS, or push messages.</p>
                </div>
            </div>
        </div>
    )
}

export default page