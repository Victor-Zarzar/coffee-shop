"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Cart from '../Cart/Cart';
import { Button } from 'rsuite';

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full h-28 flex items-center py-2 px-8 justify-between z-50 bg-slate-200 text-gray-400'>
      <div className="md:flex items-center justify-between py-5 md:px-10 px-6">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Image
            src="/logo.png"
            alt="logo"
            width={250}
            height={250}
            priority
            className="h-40 w-40"
          />
          <Link href={'/'} className='uppercase font-bold text-sm h-10 flex mt-4'>
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-8 relative'>
        <Cart />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='modal'>
            <Button className='border rounded-md bg-stone-400 hover:bg-stone-400 border-gray-400 text-white px-6 py-2.5'>
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  )
}
