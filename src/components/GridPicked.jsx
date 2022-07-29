import React, { useState } from 'react'
import { Item } from './Item'

export const GridPicked = ({housePick,pick}) => {

  return (
    <div className='flex justify-around items-end'>
      <div className='text-center'>
        <Item {...pick}/>
        <h4 className='text-white mt-6'>YOU PICKED</h4>
      </div>
      <div className='text-center flex flex-col items-center'>
        {
          !housePick ? (
            <div className='w-[110px] h-[110px] bg-[#192845] rounded-full p-8'>
            </div>
          ):(
            <Item {...housePick}/>
          )
        }
        <h4 className='text-white mt-6'>THE HOUSE PICKED</h4>
      </div>
    </div>
  )
}
