import React from 'react'
import { useSession, signOut, signIn } from 'next-auth/react'
import Dashboard from '@/components/DashBoard/Dashboard'

const dashboard = () => {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-[2.5rem] font-bold'>You are Not Signed In</h1>
                    <div className='flex justify-center'>
                        <button className='px-6 py-2 bg-blue-600 text-white rounded-[0.63rem]'
                            type='button'
                            onClick={() => signIn()}
                        >Sign In</button>
                    </div>
                </div>
            </div>

        )
    }
    else {
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
}

export default dashboard