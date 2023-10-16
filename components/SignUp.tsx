
'use client'

import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { githubLogin, googleLogin } from "@/lib/helperFunction"


export default function Register() {


  return (
    <div className="w-[450px] p-6 space-y-6 text-white ">
      <div className="space-y-2 text-left">
        <h1 className="text-2xl font-bold">Get started</h1>
        <p>Create a new account</p>
      </div>
      <Button onClick={googleLogin} className="w-full bg-[#4285F4] text-white"  >
        <div className="flex items-center justify-center">
          <svg
            className=" w-5 h-5 mr-2"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
          </svg>
          Continue with Google
        </div>
      </Button>
      <Button onClick={githubLogin} className="w-full bg-black text-white border-slate-800" variant='outline' >
        <div className="flex items-center justify-center">
          <svg
            className=" w-5 h-5 mr-2"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
          </svg>
          Continue with Github
        </div>
      </Button>

      <div className="flex items-center space-x-2">
        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
        <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
      </div>

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Password</Label>
          <Input id="password" placeholder="**********" required type="password" />
        </div>

        <div className="pt-6">
          <Button className="w-full bg-yellow-600 text-white border-slate-800">Sign Up</Button>
        </div>


        <div className='flex text-[14px] gap-3'>
          <p>Have an account</p> <Link href='#' className=" underline underline-offset-1 font-bold">Sign In Now</Link>
        </div>

      </div>

    </div>

  )
}
