"use client";
import React from 'react'
import Image from 'next/image'
import GoogleIcon from '../../../../../../Assets/Icons/google-icon 1.svg'
import Dashboard from '@/components/DashBoard/Dashboard';
import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'

const GoogleSignUpButton = () => {

    const { data: session } = useSession();
    const router = useRouter();

    if (session && session.user) {
        console.log(session);
        return (
            <div className='h-full'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1>Hi {session.user.name}</h1>
                        <div className='flex justify-center'>
                            <button
                                className='bg-red-700 text-white rounded-[0.63rem] py-2 px-6'
                                onClick={() => signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <button
                    type='button'
                    onClick={() => signIn()}
                    className='pl-[1.45rem] pr-[.19rem] flex items-center w-[11.35rem] h-[1.875rem]
                            bg-white text-[#858585] text-[0.75rem] rounded-[0.63rem]'>
                    <Image className='mr-[0.63rem]' src={GoogleIcon} alt="googleIcon" /> Sign in with Google
                </button>
            </div>
        )
    }
}

export default GoogleSignUpButton