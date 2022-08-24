import React from 'react'
import {RiCloseLine} from 'react-icons/ri'

const Heading = ({title, handleClosePanel}) => {
  return (
    <div className='p-[25px_45px_20px_20px] flex items-center justify-center border-b-[1px] border-solid border-[#e5e5e5] '>
        <h1 className='text-[18px] font-semibold flex-1 '>{title}</h1>
        <RiCloseLine className='h-[28px] w-[28px] cursor-pointer text-[#a6a6a6]'  onClick={ handleClosePanel}/>
    </div>
  )
}

export default Heading