import React from 'react'
import Card from './components/Card'
import Image from 'next/image';
import Card1s from "../../../../Assets/Icons/Card1s.svg"
import Card2s from "../../../../Assets/Icons/Card2s.svg"
import Card3s from "../../../../Assets/Icons/Card3s.svg"
import Card4s from "../../../../Assets/Icons/Card4s.svg"

const CardsSmall = () => {
    return (
        <div className='ml-[3.75rem] mt-[2.5rem]'>
            <div className='flex'>
                <Card icon={Card1s} heading1='Total Revenues' heading2='$2,129,430' background='#DDEFE0' />
                <Card icon={Card2s} heading1='Total Transactions' heading2='1,520' background='#F4ECDD' />
                <Card icon={Card3s} heading1='Total Likes' heading2='9,721' background='#EFDADA' />
                <Card icon={Card4s} heading1='Total Users' heading2='892' background='#DEE0EF' />
            </div>
        </div>
    )
}

export default CardsSmall