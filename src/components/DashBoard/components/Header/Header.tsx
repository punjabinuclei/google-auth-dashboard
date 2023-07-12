import React from 'react'
import SearchIcon from "../../../../Assets/Icons/Searchicon.svg"
import Image from 'next/image'
import HeaderStyle from './Header.module.css'
import BellIcon from '../../../../Assets/Icons/BellIcon.svg'
import UserImg from '../../../../Assets/Icons/image1.png'

const Header = () => {
    return (
        <div className='p-[3.75rem] flex justify-between'>
            <div>
                <h1 className='text-[1.5rem] font-bold'>Dashboard</h1>
            </div>
            <div className='flex '>
                <div>
                    <input
                        className='rounded-[0.63rem] w-[11.25rem] h-[1.875rem] pl-[0.94rem] text-[#B0B0B0]::placeholder'
                        autoComplete='off'
                        style={{ outline: 'none' }}
                        type="text" placeholder='Search..' />
                    <Image className='inline relative right-6 bottom-[0.15rem]  ' src={SearchIcon} alt='SearchIcon' />
                </div>
                <div className='ml-[1.88rem] flex relative bottom-[0.2rem]'>
                    <button><Image src={BellIcon} alt='BellIcon' /></button>
                </div>
                <div className='ml-[1.88rem]'>
                    <Image className='rounded-full' src={UserImg} alt='UserImg' />
                </div>
            </div>
        </div>
    )
}

export default Header