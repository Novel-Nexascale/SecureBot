import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SignUp from '@/components/SignUp'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


const Nav = () => {
  return (
    <>
      <Link href='/'>
        <div className='flex gap-1 justify-start items-center text-white'>
          <div  >
            <Image src='/image/Logo.png' alt='logo' width={32} height={32} />
          </div>
          <p className='font-bold  text-[16px] text-center'>SecureBot</p>
        </div>
      </Link>
    </>
  )
}

const Page = async () => {

  const supabase = createServerComponentClient({ cookies })

  const { data: { session }, } = await supabase.auth.getSession();

  if (session) {
    redirect('/training/1');
  }

  return (
    <section className='min-h-screen flex bg-slate-950'>
      <div className='flex-1 h-full'>
        <div className='pl-6 py-6'><Nav /></div>
        <div className='flex flex-col items-center w-full '>
          <SignUp />
        </div>
      </div>

      <div className='w-[55%] bg-[url("/image/LoginBG.png")] bg-no-repeat'>
        <div className='bg-slate-950 absolute w-[55%] h-full opacity-80 px-[60px] flex flex-col' >
          <div className='my-auto'>
            <h1 className='text-[48px] text-white font-[800] w-[90%]'>
              Empowering Cyber Guardians with SecureBot Trainer
            </h1>
            <p className='text-[24px] pt-[24px] text-white font-medium'>
              Safeguarding the Digital Frontier through AI-Enhanced Cybersecurity Training Simulations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page