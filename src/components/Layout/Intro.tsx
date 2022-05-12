
import {
    CodeIcon,
    ServerIcon,
    KeyIcon
} from '@heroicons/react/outline'

function Intro() {
    return (
        <div className='py-[60px] pb-6'>
            <div className='font others px-2 md:px-10 font-thers text-white bg-gradient-to-r from-secure-blue to-cyan-500 pb-5'>
                < div className='flex flex-col' >
                    <h1 className='text-3xl md:text-5xl font-semibold '>Secure and Open Source </h1>
                    <h2 className='text-2xl md:text-3l text-slate-300 font-semibold '>Your passwords more safer than ever.</h2>
                    <div className='mt-3 flex flex-row justify-center gap-6 md:justify-start md:gap-8 text-gray-200'>
                        <ul className='flex gap-1'><KeyIcon className=' text-blue-300 h-6 my-auto' />Encrypted</ul>
                        <ul className='flex gap-1'><ServerIcon className='text-blue-300 h-6 my-auto' />Self-Host</ul>
                        <ul className='flex gap-1'><CodeIcon className='text-blue-300 h-6 my-auto' />Open Source</ul>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Intro;