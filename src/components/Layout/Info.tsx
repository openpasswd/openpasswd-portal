import React from 'react';

import {
    ShieldCheckIcon,
    BeakerIcon,
    ChartBarIcon,
    CodeIcon,
    CogIcon,
    CubeTransparentIcon,
    CubeIcon,
    ServerIcon,
    KeyIcon
} from '@heroicons/react/outline'

import bgImg from '/security-image.jpg'

function Info() {
    return (
        <div className='font-others'>
            <div className='px-20 py-20 font-thers text-white bg-gradient-to-r from-secure-blue to-cyan-500 pb-10'>
                <div className='flex flex-col'>
                    <h1 className='py-2 text-5xl font-semibold '>Secure and Open Source </h1>
                    <p className='text-3xl text-slate-300 '>Your passwords more secure than ever.</p>
                    <div className='flex flex-row gap-8 text-gray-200 pt-6'>
                        <ul className='flex gap-1'><KeyIcon className='h-5 my-auto' />Encrypted</ul>
                        <ul className='flex gap-1'><ServerIcon className=' h-5 my-auto' />Self-Host</ul>
                        <ul className='flex gap-1'><CodeIcon className=' h-5 my-auto' />Open Source</ul>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Info;