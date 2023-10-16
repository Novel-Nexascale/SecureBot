'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SignOut from '@/components/SignOut'
import ActiveLink from './ActiveLink'


export const Nav = () => {
  return (
    <nav className='container flex justify-between text-center py-[24px] px-5'>
      <div>
        <Link href='/'>
          <div className='flex gap-1 justify-start items-center'>
            <div  >
              <Image src='/image/Logo.png' alt='logo' width={32} height={32} />
            </div>
            <p className='font-bold  text-[16px] text-center'>SecureBot</p>
          </div>
        </Link>
      </div>
      <div className='flex items-center'>
        <ActiveLink href='/training'className='border rounded-l-md'>
          Training
        </ActiveLink>
        <ActiveLink href='/chat' className='border rounded-r-md'>
          Chat Bot
        </ActiveLink>

      </div>
      <div className='flex gap-3'>
        <SignOut />
      </div>
    </nav>
  )
}

