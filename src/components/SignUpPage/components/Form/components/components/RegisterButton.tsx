"use client";
import React from 'react'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'

const RegisterButton = () => {

    const { data: session } = useSession();

    if (session && session.user) {
        console.log(session);
        return (
            <>

            </ >
        )
    }
    else {
        return (
            <>
                <p className='text-[#858585] text-[1rem] text-center font-[500]'>Don't have an account?
                    <span className='text-[#346BD4]'>
                        <button
                            type='button'
                            onClick={() => signIn()}
                            className='pl-1'>
                            Register
                        </button>
                    </span></p>

            </>
        )
    }
}

export default RegisterButton