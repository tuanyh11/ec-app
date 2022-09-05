import React from 'react'
import {Button} from '../../'
import { useCartSlice } from '../../../Features/hooks';




const Index = ({confirmText, onConfirm}) => {
  const [cartData, cartActions, dispatch] = useCartSlice();

  const handleExcep = () => {
    onConfirm(true)
    dispatch(cartActions.removeFromCart(cartData.showConfirm))
    dispatch(cartActions.toggleConfirm(null))
  }

  return (
    <div className='absolute top-[50%] left-[50%] w-[320px]  translate-x-[-50%] translate-y-[-50%] bg-white rounded-md z-[99999999]'>
        <div className='h-full p-10'>
          
          <div className="">
              <div className="text-base font-medium">{confirmText}</div>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <div className="mr-3">
              <Button title={'Yes'} onAction={() => handleExcep()}className='border font-medium rounded-md !bg-primary opacity-[0.8] hover:opacity-[1] transition text-white'/>
            </div>
            <div className="ml-3">
              <Button title={'No'} onAction={() => onConfirm(null)} className='border font-medium rounded-md !bg-slate-300 opacity-[0.8] hover:opacity-[1]'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index