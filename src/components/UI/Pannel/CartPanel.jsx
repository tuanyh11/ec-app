import React from 'react'
import CartItem from '../Cart/CartItem'

const CartPanel = ({data = []}) => {
  return (
    <div className="pt-[30px] static h-full">
        <div className='pb-[400px] h-full'>
          <div className='overflow-y-auto h-full cart-container p-[0_30px]'>
            {data.map((item, i) => (
              <CartItem key={i} data={item}/>
            ))}
          </div>

        <div className="absolute bottom-0 left-0 right-0 ">
            <div className="flex items-center p-[24px_30px] justify-between bg-[#f5f5f5]">
              <p className="text-sm font-medium ">Subtotal</p>
              <p className="text-base font-medium ">$1,838.25</p>
            </div>

            <div className='p-[0_30px_30px_30px]'>
              <div className="p-[30px_0_10px] text-start border-b-[#e2e2e2] border-b-[1px] border-solid ">
                <p className="text-base text-[#525252]  mb-[5px]">Congratulations! You have got <strong className="font-semibold text-[#212529]">free shipping</strong></p>
                <div className='flex items-center'>
                  <div className='bg-linear-1 !bg-primary bg-[length:15px_15px] w-full h-[7px]'></div>
                  <div className='ml-6 text-sm'>100%</div>
                </div>
              </div>

              <div className="mt-[30px]">
                <button className='block p-[0_37px] leading-[50px] text-center w-full bg-[#1F1F1F] text-white '>View Cart</button>
                <button className='block p-[0_37px] leading-[50px] text-center w-full bg-white text-[#1F1F1F] border-[1px] mt-[10px] border-[#1F1F1F]'>Checkout</button>
              </div> 
            </div> 
        </div>
        </div>
    </div>
  )
}

export default CartPanel