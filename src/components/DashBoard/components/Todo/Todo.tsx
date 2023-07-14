import React from 'react'
import Image from 'next/image';
import ChartIcon from '../../../../Assets/Icons/ChartIcon1.svg';


const Todo = () => {
    return (
        <div className='my-[1rem] pb-[1rem] bg-white rounded-[1.63rem] w-[30rem] mr-[3.5rem]'>
            <div className='flex justify-between pt-[1.88rem] px-[2.5rem]'>
                <div>
                    <h1 className='1.25rem font-bold'>Top Products</h1>
                </div>
                <div className='flex'>
                    <p className='text-[#858585] text-[0.875rem] pt-[0.31rem]'>May - June</p>
                    <Image className='ml-[0.31rem] relative top-1' src={ChartIcon} alt='icon' />
                </div>
            </div>
            <div className='mt-[3.56rem] px-[2.5rem]'>
                <div className='border-l-8 border-[#9BDD7C] pb-2'>
                    <h1 className='pl-[0.94rem] text-[#666666] text-[1rem] pt-[0.61rem] font-medium'>Meeting with suppliers from Kuta Bali</h1>
                    <p className=' pl-[0.94rem] text-[#999999] text-[0.75rem] pt-[0.61rem]'>14.00-15.00</p>
                    <p className=' pl-[0.94rem] text-[#999999] text-[0.75rem] pt-[0.61rem]'>at Sunset Road, Kuta, Bali </p>
                </div>
                <div className='border-l-8 border-[#6972C3] mt-[1.81rem] pb-6'>
                    <h1 className='pl-[0.94rem] text-[#666666] text-[1rem] pt-[0.61rem] font-medium'>Check operation at Giga Factory 1</h1>
                    <p className=' pl-[0.94rem] text-[#999999] text-[0.75rem] pt-[0.61rem]'>18.00-20.00</p>
                    <p className='pl-[0.94rem] text-[#999999] text-[0.75rem] pt-[0.61rem]'>at Central Jakarta </p>
                </div>
            </div>

        </div>
    )
}

export default Todo