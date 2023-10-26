
import CreatePost from '@/components/CreatePost'
import React from 'react'
import {getServerSession} from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import {redirect} from 'next/navigation'

const page = async () => {
  const session = await getServerSession(authOptions)
  // if(!session){
  //   redirect('/sign-in')
  // }
  return (
    <div className='w-[60%] mx-auto'>
      <CreatePost/>
    </div>
  )
}

export default page