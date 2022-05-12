/* eslint-disable react/no-unescaped-entities */
import {
  DocumentTextIcon,
  CloudIcon,
  TerminalIcon
} from '@heroicons/react/outline'

import {
  ShieldExclamationIcon,
  EyeOffIcon,
  ChevronDoubleUpIcon,
  PencilIcon
} from '@heroicons/react/solid'


function Home() {
  return (
    <div className="font-body font-semibold">
      <h1 className="flex justify-center items-center text-3xl md:text-4xl text-slate-500 
      bg-blue-white mb-10">
        <ShieldExclamationIcon className='h-8 mr-1 text-red-400' />
        Why trust in OpenPasswd?</h1>

      <div className="flex justify-center mt-14 mb-[80px] md:mb-2">
        <div className="grid gap-x-[1.5rem] gap-y-4 grid-row-3 md:grid-cols-3  text-white">

          <div className='bg-sky-600 h-72 w-72 rounded-lg drop-shadow-lg'>
            <h1 className='flex justify-center md:text-2xl text-3xl mt-2'>
              You can't see me</h1>
            <h2 className='text-slate-200  flex justify-center md:text-1xl pl-2 pr-2'>Your password is encrypted </h2>
            <div className='flex flex-col'>
              <DocumentTextIcon className='h-[180px]' />
              <EyeOffIcon className='h-[30px]  animate-pulse' />
            </div>
          </div>

          <div className='bg-sky-500 h-72 w-72 rounded-lg drop-shadow-lg'>
            <h1 className='flex justify-center md:text-2xl text-3xl mt-2'>
              It's all yours!</h1>
            <h2 className='text-slate-200 flex justify-center md:text-1xl pl-2 pr-2'>You can deploy anyware you trust!</h2>
            <div className='flex flex-col'>
              <CloudIcon className='h-[180px]' />
              <ChevronDoubleUpIcon className='h-[30px] animate-bounce' />
            </div>
          </div>

          <div className='bg-sky-400 h-72 w-72 rounded-lg drop-shadow-lg'>
            <h1 className='flex justify-center md:text-2xl text-3xl mt-2'>
              What's happening?</h1>
            <h2 className='text-slate-200 flex justify-center text-1xl pl-2 pr-2'>View and edit the source code :)</h2>
            <div className='flex flex-col'>
              <TerminalIcon className='h-[180px]' />
              <PencilIcon className='h-[30px] animate-wiggle' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home;
