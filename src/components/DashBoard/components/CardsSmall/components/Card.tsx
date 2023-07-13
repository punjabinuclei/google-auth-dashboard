import React from 'react'
import Image from 'next/image';

interface Props {
    heading1: string;
    heading2: string;
    icon: string;
    background: string;
}

const Card = ({ heading1, heading2, icon, background }: Props) => {
    return (
        <div className='mr-[2.3rem]'>
            <div className='w-[13.8rem] h-[7.5rem] rounded-[0.63rem]' style={{ backgroundColor: background }}>
                <div className='flex justify-end pt-[1.25rem] pr-[1.6rem]'>
                    <Image src={icon} alt='icon' />
                </div>
                <div className='pl-[1.56rem] pt-[0.06rem]'>
                    <h2 className='text-[0.875rem] '>{heading1}</h2>
                </div>
                <div className='pl-[1.56rem] pt-[0.31rem]'>
                    <h1 className='text-[1.5rem] font-bold'>{heading2}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card