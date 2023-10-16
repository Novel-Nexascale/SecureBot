'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


const supabase = createClientComponentClient()


export async function googleLogin() {
    await supabase.auth.signInWithOAuth({
       provider: 'google',
       options:{
        redirectTo: 'http://localhost:3000/auth/callback'
       } 
    })
}

export async function githubLogin() {
    await supabase.auth.signInWithOAuth({
            provider: 'github',
            options:{
                redirectTo: 'http://localhost:3000/auth/callback'
         }
     })
}


