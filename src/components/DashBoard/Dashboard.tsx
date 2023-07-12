import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <div>
            <div className="w-full flex">
                <div className="sidebar p-[2.5rem]">
                    <Sidebar />
                    </div>
                <div className="mainArea flex grow content flex-col">
                    Navbar
                    <div className="h-full bg-Dull-White">
                        info
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard