import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import ChartIcon from '../../../../Assets/Icons/ChartIcon1.svg';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['Week1', 'Week2', 'Week3', 'Week4'];

const data = {
    labels,
    datasets: [
        {
            label: 'Guest',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
            borderColor: '#E9A0A0',
            backgroundColor: '#E9A0A0',
            pointStyle: 'circle',
            pointRadius: 5,

        },
        {
            label: 'User',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
            borderColor: '#9BDD7C',
            backgroundColor: '#9BDD7C',
            pointStyle: 'circle',
            pointRadius: 5,

        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                padding: 20, // Adjust the padding between ticks
            },
        },
        y: {
            min: 0,
            max: 500,
            stepSize: 100,
            grid: {
                display: true,
                drawBorder: false,
            },
        },
    },
    elements: {
        line: {
            tension: 0.35, // Adjust the lineTension value for curved lines
        },
    },
    maintainAspectRatio: true,
};

export default function LineChart() {
    return (
        <div className='bg-white rounded-[1.63rem] mx-[3.75rem] my-[2.5rem] ' >
            <div className='pt-[1.87rem] pl-[2.5rem]'>
                <h1 className='text-[1.125rem] font-bold'>Activities</h1>
                <div className='flex'>
                    <p className='text-[#858585] text-[0.875rem] pt-[0.31rem]'>May - June</p>
                    <Image className='ml-[0.31rem] relative top-1' src={ChartIcon} alt='icon' />
                </div>
            </div>
            <div className='px-[2.5rem] pb-[1.88rem]'>
                <Line options={options} data={data} />
            </div>
        </div>
    );
}




