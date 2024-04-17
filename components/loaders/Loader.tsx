import React from 'react'

const Loader = () => {
    const loader = [1,2,3,3]
  return (
    <div className='grid grid-cols-4 gap-4'>
        {loader.map((item)=>(
            <div className="px-4 py-1 rounded-md bg-slate-200 capitalize text-white cursor-pointer animate w-24 h-6"></div>
        ))}
    </div>
  )
}

export default Loader