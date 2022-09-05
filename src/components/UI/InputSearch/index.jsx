import React from 'react'
import {RiSearchLine} from 'react-icons/ri'

const index = ({placeholder}) => {
  return (
    <form>
        <div className="flex items-center relative">
            <input type="text" placeholder={placeholder} className='w-full p-[10px_40px_10px_15px] outline-none border-[#1f1f1f] focus:!border-[#262626]  focus:outline-offset-0 border border-solid ' />
            <RiSearchLine className='absolute right-3 top-[50%] translate-y-[-50%] w-5 h-5'/>
        </div>
    </form>
  )
}

export default index