import React from 'react'
import Form from './components/Form/Form'

const SignUpPage = () => {
    return (
        <div className='h-screen flex'>
            <div className='bg-black w-[36rem] h-full flex justify-center items-center'>
                <h1 className='text-[4.5rem] font-bold text-white'>Board.</h1>
            </div>
            <div className='mx-auto flex items-center'>
                <Form />
            </div>
        </div>
    )
}

export default SignUpPage