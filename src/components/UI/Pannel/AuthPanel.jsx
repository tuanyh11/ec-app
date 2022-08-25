import {useState} from 'react' 
import {RiEyeLine, RiFacebookCircleLine, RiGoogleLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const AuthPanel = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='p-[30px_50px] h-full '>
      <form action="" className='h-full flex flex-col justify-center'>
        {/* input user */}
        <div className='mb-[20px]'>
          <input className='w-full p-[15px_20px] outline-0 border border-[#cccccc] text-sm' placeholder='Username'  type="text" />
        </div>
        <div className='mb-[20px] relative'>
          <input className='w-full p-[15px_20px] outline-0 border border-[#cccccc] text-sm' placeholder='Password' type={showPassword ? 'text': 'password'} />
          <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-[50%] right-[20px] translate-y-[-50%] group'>
            <RiEyeLine className='w-5 h-5 opacity-70 group-hover:!opacity-100 transition'  />
          </button>
        </div>
        {/* end input user */}

        {/* password actions */}
        <div className='flex items-center  justify-between mb-[25px]' >   
          <label className='box-check flex items-center relative cursor-pointer '>
            <input type="checkbox" className='absolute opacity-0 cursor-pointer h-0 w-0 mr-[12px] ' />
            <span className='checkmark after:content-[""] after:absolute after:hidden   p-2 bg-gray-300 '></span>
            <span className=' after: pl-4  text-sm text-[#1f1f1f] font-medium'>Remember me</span>
          </label>
          <Link to={'/'} className='text-sm text-[#1f1f1f] relative font-medium afterStyle hover:after:bg-[#111111] hover:after:w-full hover:after:opacity-100'>Lost your password?</Link>
        </div>
        {/* end password action */}

        {/* auth action */}
        <div>
          <button className='block p-[0_37px] leading-[50px] text-center w-full bg-[#1F1F1F] text-white'>Sign in</button>
        </div>
        <div className='m-[20px_0]'>
          <button className='block p-[0_37px] leading-[50px] text-center w-full bg-white text-[#1F1F1F] border-[1px] border-[#1F1F1F]'>Create An Acount</button>
        </div>
        {/* auth action */}

        {/* social login */}
        <div>
          <button className='w-full flex items-center bg-blue-500 m-[10px_0] rounded-sm '>
            <div className='p-[6px] '>
              <RiFacebookCircleLine className='w-7 h-7 bg text-white'/>
            </div>
            <p className='p-[0_10px] flex-1 text-white'>Continue with Facebook</p>
          </button>
          <button className='w-full flex items-center bg-red-500 m-[10px_0] rounded-sm'>
            <div className='p-[6px] '>
              <RiGoogleLine className='w-7 h-7 text-white'/>
            </div>
            <p className='p-[0_10px] flex-1 text-white'>Continue with google</p>
            
          </button>
        </div>
        {/* end social login */}
      </form>
    </div>
  )
}

export default AuthPanel