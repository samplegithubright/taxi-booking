import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
export default function NavBar() {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[1px] shadow-lg'>
    <div className='flex gap-10 items-center'>
      
        <Image src='/taxi.png' alt='logo' width={120} height={60}/>
      
      <div className=' hidden md:flex gap-6'>
        <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
        <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
        <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
      </div>
    </div>
    <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}
