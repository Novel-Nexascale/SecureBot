'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";



export default function SignOut(): JSX.Element{
    const supabase = createClientComponentClient();
    const router = useRouter();

    const handlesignOut = async (): Promise<void> => {
        await supabase.auth.signOut();
        router.refresh();
    }


    return (
        <>
            <Button onClick={handlesignOut}>signOut</Button>
        </>
    )
}

