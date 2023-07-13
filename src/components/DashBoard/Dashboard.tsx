import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import CardsSmall from './components/CardsSmall/CardsSmall'
import LineChart from './components/LineChart/LineChart'

const Dashboard = () => {
    return (
        <div>
            <div className="w-full flex">
                <div className="sidebar p-[2.5rem]">
                    <Sidebar />
                </div>
                <div className="mainArea flex grow content flex-col">
                    <Header />
                    <div className="h-full bg-Dull-White">
                        <CardsSmall />
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard