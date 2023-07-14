import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Image from 'next/image';
import ChartIcon from '../../../../Assets/Icons/ChartIcon1.svg';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
        {
            label: 'Top Products',
            data: [55, 31, 14],
            backgroundColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484',
            ],
            borderColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484',
            ],
            borderWidth: 1,
        },
    ],
};





export default function PieChart() {

    return (
        <div className='my-[1rem] ml-[3.5rem] bg-white rounded-[1.63rem] w-[30rem]'>
            <div className='flex justify-between pt-[1.88rem] px-[2.5rem]'>
                <div>
                    <h1 className='1.25rem font-bold'>Top Products</h1>
                </div>
                <div className='flex'>
                    <p className='text-[#858585] text-[0.875rem] pt-[0.31rem]'>May - June</p>
                    <Image className='ml-[0.31rem] relative top-1' src={ChartIcon} alt='icon' />
                </div>
            </div>
            <div className='px-[3.75rem] pt-[0.75rem] w-10/12' >
                <Pie data={data} />;
            </div>
        </div>
    )
}
