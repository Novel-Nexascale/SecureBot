
'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {


  return (
    <header className='container flex  w-full justify-between p-4'>
      <div>
        Hello
      </div>

      <div>
        <Link href='/auth/sign-in'>
          <Button>
            Sign In
          </Button>
        </Link>
      </div>

    </header>
  )
}
