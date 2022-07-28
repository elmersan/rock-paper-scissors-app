import React from 'react'

export const Header = () => {
  return (
    <header className='px-2 py-8'>
      <div className='wrapper'>
        <div className='p-[12px] text-white flex justify-between items-center border-[3px] rounded border-header_Outline'>
          <h1 className='leading-[80%] text-xl font-bold pl-2'>
            ROCK <br />
            PAPER <br />
            SCISSORS <br />
          </h1>
          <div className='text-center bg-white text-dark_Text rounded px-6 py-1'>
            <span className='font-bold text-[10px] tracking-widest'>SCORE</span>
            <h2 className='text-4xl font-bold'>12</h2>
          </div>
        </div>
      </div>
    </header>
  )
}
