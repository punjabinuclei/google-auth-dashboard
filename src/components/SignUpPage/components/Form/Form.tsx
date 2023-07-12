import React from 'react'
import Image from 'next/image'
import GoogleIcon from '../../../../Assets/Icons/google-icon 1.svg'
import AppleIcon from '../../../../Assets/Icons/apple-1.svg'
// import { Lato } from 'next/font/google'

// const lato = Lato({
//     subsets: ['latin'],
//     weight: ['100', '300', '400', '700'],
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
                        <button className='pl-[1.45rem] pr-[.19rem] flex items-center w-[11.35rem] h-[1.875rem] bg-white text-[#858585] text-[0.75rem] rounded-[0.63rem]' ><Image className='mr-[0.63rem]' src={GoogleIcon} alt="googleIcon" /> Sign in with Google</button>
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
                    <p className='text-[#858585] text-[1rem] text-center font-[500]'>Don't have an account?<span className='text-[#346BD4]'> Register here </span></p>
                </div>
            </div>
        </div>
    )
}

export default Form