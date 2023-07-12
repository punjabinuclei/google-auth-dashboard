import React from 'react'
import Image from 'next/image'
import GoogleIcon from '../../../../Assets/Icons/google-icon 1.svg'
import AppleIcon from '../../../../Assets/Icons/apple-1.svg'
import { Lato } from 'next/font/google'

// const lato = Lato({
//     subsets: ['latin'],
// });


const Form = () => {
    return (
        <div className=''>
            <div className='h-full '>
                <div>
                    <h1 className='text-[2.25rem] font-bold'>Sign In</h1>
                    <p className='text-[1rem] pt-[0.31rem]'>Sign in to your account</p>
                </div>

                <div className='flex mt-[1.63rem]'>
                    <div className='mr-[1.16rem]'>
                        <button className='pl-[1.63rem] pr-[.19rem] flex items-center w-[11.35rem] h-[1.875rem] bg-white text-[#858585] text-[0.75rem] rounded-xl' ><Image className='mr-[0.63rem]' src={GoogleIcon} alt="googleIcon" /> Sign in with Google</button>
                    </div>
                    <div>
                        <button className='pl-[1.63rem] flex items-center w-[11.25rem] h-[1.875rem] bg-white text-[#858585] text-[0.75rem] rounded-xl'><Image className='mr-[0.63rem]' src={AppleIcon} alt="appleIcon" />Sign in with Apple</button>
                    </div>
                </div>
                <div className='w-[24.0625rem] h-[19.8125rem] rounded-[1.25rem] bg-white mt-[1.56rem]'>
                    <div>
                        <p className='text-[1rem]'>Email address</p>
                        <input placeholder='johndoe@gmail.com' type='email' className='rounded-[0.63rem] w-[20.3rem] h-[2.5rem] flex items-center text-[1rem]' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input placeholder='********' type='password' className='' />
                    </div>
                    <div>
                        <p>Forgot password?</p>
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </div>
                <div>
                    <p>Don't have an account? Register here </p>
                </div>
            </div>
        </div>
    )
}

export default Form