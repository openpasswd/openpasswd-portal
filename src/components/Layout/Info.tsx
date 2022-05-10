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
} from '@heroicons/react/solid'

import bgImg from '/security-image.jpg'

function Info() {
    return (
        <div className='text-white bg-gradient-to-r from-secure-blue to-cyan-500'>
            <div className='px-20 py-20 font-thers'>
                <div className='flex flex-col' >
                    <h1 className='py-2 text-5xl font-semibold'>Secure and Open Source</h1>
                    <p className='text-3xl text-slate-200'>Your passwords more secure than ever.</p>
                </div >
            </div >
        </div >
    )
}

export default Info;