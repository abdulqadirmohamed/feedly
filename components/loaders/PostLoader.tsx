import React from 'react'

const PostLoader = () => {
    const loader = [1, 2, 3,4,5,6]
    return (
        <div className='grid md:grid-cols-3 gap-6'>
            {loader.map((item) => (
                <div className=''>
                    <div className='bg-slate-100 h-36 rounded-md animate-out my-3'></div>
                    <div className='bg-slate-100 h-3  animate-accordion-up'></div>
                    <div className='flex items-center justify-between gap-10 my-2'>
                        <div className='bg-slate-100 h-3 w-full  animate-accordion-up'></div>
                        <div className='bg-slate-100 h-3 w-full  animate-accordion-up'></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostLoader