"use client";

import React from 'react'
import Image from 'next/image'
import GoogleIcon from '../../../../Assets/Icons/google-icon 1.svg'
import AppleIcon from '../../../../Assets/Icons/apple-1.svg'
import GoogleSignUpButton from './components/components/GoogleSignUpButton'
import { useSession, signIn, signOut } from 'next-auth/react'
import RegisterButton from './components/components/RegisterButton'
import { useRouter } from 'next/router'


// import { Lato } from 'next/font/google'

// const lato = Lato({
//     subsets: ['latin'],
//     weight: ['100', '300', '400', '700'],
// });




const Form = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleClick = () => {
        router.push('/dashboard');
    };

    if (session && session.user) {
        return (
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-[3rem]'>Welcome<span className='font-bold'> {session.user.name}</span></h1>
                    <div className='flex justify-center mt-4'>
                        <div>
                            <button
                                onClick={handleClick}
                                className='bg-green-700 rounded-[0.63rem] text-white py-2 px-6 mr-4'>
                                Dashboard
                            </button>
                        </div>
                        <div>
                            <button
                                className='bg-red-700 text-white rounded-[0.63rem] py-2 px-6'
                                onClick={() => signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {


        return (
            <div className=''>
                <div className='h-full '>
                    <div>
                        <h1 className='text-[2.25rem] font-bold'>Sign In</h1>
                        <p className='text-[1rem] pt-[0.31rem]'>Sign in to your account</p>
                    </div>

                    <div className='flex mt-[1.63rem]'>
                        <div className='mr-[1.16rem]'>
                            <GoogleSignUpButton />
                        </div>
                        <div>
                            <button className='pl-[1.45rem] flex items-center w-[11.25rem] h-[1.875rem] bg-white text-[#858585] text-[0.75rem] rounded-[0.63rem]'><Image className='mr-[0.63rem]' src={AppleIcon} alt="appleIcon" />Sign in with Apple</button>
                        </div>
                    </div>
                    <div className='w-[24.0625rem] h-[20.5rem] rounded-[1.25rem] bg-white mt-[1.56rem]'>
                        <div >
                            <div>
                                <p className='text-[1rem] pt-[1.88rem] pl-[1.88rem] pb-[0.62rem] font-[500]'>Email address</p>
                                <input
                                    autoComplete='off'
                                    style={{ outline: 'none' }}
                                    placeholder='johndoe@gmail.com'
                                    type='email'
                                    className='pl-[0.94rem] mx-auto rounded-[0.63rem] w-[20.3rem] h-[2.5rem] flex items-center text-[1rem] bg-[#F5F5F5]' />
                            </div>
                            <div>
                                <p className='text-[1rem] pt-[1.25rem]  pl-[1.88rem] pb-[0.62rem] font-[500]'>Password</p>
                                <input
                                    style={{ outline: 'none' }}
                                    autoComplete='off'
                                    placeholder='********'
                                    type='text'
                                    className='pl-[0.94rem] mx-auto rounded-[0.63rem] w-[20.3rem] h-[2.5rem] flex items-center text-[1rem] bg-[#F5F5F5]' />
                            </div>
                            <div>
                                <button className='pt-[1.25rem] pl-[1.94rem] text-[#346BD4] font-medium' >Forgot password?</button>
                            </div>
                        </div>
                        <div className='flex justify-center '>
                            <button className='w-[20.3125rem] h-[2.5rem] bg-black text-white text-[1rem] font-bold rounded-[0.63rem] mt-[1.25rem] '>Sign In</button>
                        </div>
                    </div>
                    <div className='mt-[1.25rem]'>
                        <RegisterButton />
                    </div>
                </div>
            </div>
        )
    }
}

export default Form