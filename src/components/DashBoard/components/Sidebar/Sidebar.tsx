import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import DashboardIcon from "../../../../Assets/Icons/dashboard_icon.svg"
import TransactionIcon from "../../../../Assets/Icons/transaction_icon.svg"
import ScheduleIcon from "../../../../Assets/Icons/schedule_icon.svg"
import UserIcon from "../../../../Assets/Icons/user_icon.svg"
import SettingsIcon from "../../../../Assets/Icons/setting_icon.svg"


const Sidebar = () => {
    return (
        <div className='rounded-[1.88rem] w-[17.5rem] h-full bg-black text-white'>

            <div className='pt-[6.25rem] pb-[3.7rem] pl-[3.12rem]'>
                <h1 className='text-[2.25rem] font-bold'>Board.</h1>
            </div>

            <div className='text-[1.125rem] pl-[3.12rem]'>
                <Link href='/dashboard'>
                    <p className='mt-[2.5rem] font-bold'><Image className='inline mr-[1.25rem]' src={DashboardIcon} alt='DashboardIcon' /> Dashboard</p>
                </Link>

                <Link href='/dashboard'>
                    <p className='mt-[2.5rem] '><Image className='inline mr-[1.25rem]' src={TransactionIcon} alt='TransactionIcon' /> Transactions</p>
                </Link>

                <Link href='/dashboard'>
                    <p className='mt-[2.5rem]'><Image className='inline mr-[1.25rem]' src={ScheduleIcon} alt='ScheduleIcon' /> Schedules</p>
                </Link>

                <Link href='/dashboard'>
                    <p className='mt-[2.5rem]'><Image className='inline mr-[1.25rem]' src={UserIcon} alt='UserIcon' /> Users</p>
                </Link>

                <Link href='/dashboard'>
                    <p className='mt-[2.5rem]'><Image className='inline mr-[1.25rem]' src={SettingsIcon} alt='Settings' /> Settings</p>
                </Link>
            </div>

            <div className='relative pt-[30rem] pl-[3.12rem] text-white'>
                    <p className='pb-[1.25rem]'>Help</p>
                    <p>Contact Us</p>
            </div>
        </div>
    )
}

export default Sidebar