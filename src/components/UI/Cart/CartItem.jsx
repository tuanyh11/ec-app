import React from 'react'
import { Link } from 'react-router-dom'
import {RiCloseFill} from 'react-icons/ri'

const CartItem = ({data}) => {
  return (
    <div className="flex items-center pb-[30px] border-b-[1px] mb-[30px]">
      <Link to="/" className="pr-[30px]">
        <img className="max-w-[120px]" src={data?.imageUrl} alt="" />
      </Link>
      <div className="flex-1 text-start">
        <div>
          <Link to="/" className="block text-sm font-bold">{data?.name}</Link>
          <span className="mt-1 text-base text-gray-500 font-semibold">{data?.price}</span>
        </div>
        <div className="mt-[25px] flex justify-between ">
            <div className="border flex items-center hover:!border-[#111111] hover:!border-[1px] default-transition group ">
              <button className="p-[0_7px] cursor-pointer text-gray-500  text-xl font-medium h-full  relative  cart-action-btn hover:text-slate-900 hover:before:bg-[#eee]">-</button>
              <input onChange={() => {}} type="text" className="text-sm font-semibold h-[40px] w-[42px] outline-0 flex-1 text-center leading-[40px]" value={data.quantity ? data.quantity: '' } />
              <button className="p-[0_7px] cursor-pointer text-gray-500   text-xl font-medium h-full rouned-[100%] hover:before:bg-[#eee] hover:text-slate-900  relative cart-action-btn">+</button>
            </div>
            <button className="flex items-center group">
              <RiCloseFill className="mr-2 group-hover:text-[#111111] text-[#a2a5a6] default-transition duration-300 "/>
              <p className="mr-1 text-[#a2a5a6] text-sm font-normal group-hover:text-[#111111] default-transition duration-300" >Remove</p>
            </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem