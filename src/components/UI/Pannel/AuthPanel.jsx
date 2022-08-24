import React from 'react' 
import {RiEyeLine, RiFacebookCircleLine, RiGoogleLine} from 'react-icons/ri'

const AuthPanel = () => {
  return (
    <div className='p-[30px_50px]'>
      <form action="">
        {/* input user */}
        <div className='mb-[20px]'>
          <input className='w-full p-[15px_20px] outline-0 border border-[#cccccc] text-sm' placeholder='Username'  type="text" />
        </div>
        <div className='mb-[20px] relative'>
          <input className='w-full p-[15px_20px] outline-0 border border-[#cccccc] text-sm' placeholder='Password' type="password" />
          <button type='button' className='absolute top-[50%] right-[20px] translate-y-[-50%] group'>
            <RiEyeLine className='w-5 h-5 opacity-70 group-hover:!opacity-100 transition'  />
          </button>
        </div>
        {/* end input user */}

        {/* password actions */}
        <div className='flex items-center justify-between mb-[25px]' >
          <div className='flex items-center '>
            <input type="checkbox" className='mr-[12px]' />
            <p className='text-sm text-[#1f1f1f] font-medium'>Remember me</p>
          </div>
          <p className='text-sm text-[#1f1f1f] font-medium afterStyle hover:after:bg-[#111111] hover:after:w-full hover:after:opacity-100'>Lost your password?</p>
        </div>
        {/* end password action */}

        {/* auth action */}
        <div>
          <button>Sign in</button>
        </div>
        <div>
          <button>Create An Acount</button>
        </div>
        {/* auth action */}

        {/* social login */}
        <div>
          <button>
            <RiFacebookCircleLine/>
            facebook
          </button>
          <button>
            <RiGoogleLine/>
            google
          </button>
        </div>
        {/* end social login */}
      </form>
    </div>
  )
}

export default AuthPanel