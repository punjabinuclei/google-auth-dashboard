"use client";
import React from 'react'
import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const Logout = () => {

    const { data: session } = useSession();
    const router = useRouter();

    if (session && session.user) {
        console.log(session);
        return (
            <div className='h-full'>
                <div className='flex justify-center items-center pl-[1.88rem]'>
                    <div className='flex justify-center'>
                        <h1 className='relative top-2'>Welcome <span className='font-bold'>{session.user.name}</span></h1>
                        <div className='pl-[1.88rem]'>
                            <button
                                className='bg-red-700 text-white rounded-[0.63rem] py-2 px-6'
                                onClick={() => signOut()}>Sign Out</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Logout