import React from 'react'
import { Link } from 'react-router-dom'
import {RiEyeLine, RiHeartLine, RiHandbagLine} from 'react-icons/ri'

const CardProduct = ({data}) => {

  const { image, galleryImages, productCategories,  price} = data

  return (
    <div className='group'> 
      <div className='relative'>
        <Link className='block'  to={`/shop/${data.id}`}>
          <img  className='max-w-full h-auto transition-all duration-300 ease' src={image.link} alt="" />
          {galleryImages.edges.length > 0 && (
            <img className=' opacity-0 group-hover:!opacity-100 absolute w-full top-0  left-0  right-0 h-auto transition-all duration-300 ease' src={galleryImages.edges[1].node.link} alt="" />
          )}
        </Link>

        <div className='hidden lg:flex items-center absolute bottom-[15px] translate-x-[50%] right-[50%]'>
            <button datatype='Add to cart' className='relative action-ntn  w-[40px] group-hover:translate-y-[-10px] h-[40px]  [transition:transform_.1s,opacity_.1s,background_.35s,color_.35s] opacity-0 group-hover:!opacity-100 hover:text-white hover:!bg-primary cursor-pointer flex items-center justify-center m-[0_5px] rounded-[100%] bg-white'>
              <RiHandbagLine className='w-[18px] h-[18px]'/>
            </button>
            <button datatype='Quick view' className='relative action-ntn  w-[40px] group-hover:translate-y-[-10px] h-[40px] [transition:transform_.1s,opacity_.1s,background_.35s,color_.35s] opacity-0 group-hover:!opacity-100 hover:text-white hover:!bg-primary cursor-pointer flex items-center justify-center m-[0_5px] rounded-[100%] bg-white'>
              <RiEyeLine className='w-[18px] h-[18px]'/>
            </button>
            <button datatype='Wishlist' className='relative action-ntn  w-[40px] group-hover:translate-y-[-10px] h-[40px] [transition:transform_.1s,opacity_.1s,background_.35s,color_.35s] opacity-0 group-hover:!opacity-100 hover:text-white hover:!bg-primary cursor-pointer flex items-center justify-center m-[0_5px] rounded-[100%] bg-white'>
              <RiHeartLine className='w-[18px] h-[18px]'/>
            </button>
        </div>

        <div className='absolute top-0 bottom-auto right-[15px] flex flex-col lg:hidden '>
              <button datatype='Quick view' className='relative action-ntn-before before:top-0 before:right-[30px] before:translate-y-[-5px]  top-[0] mt-[15px] cursor-pointer flex items-center justify-center '>
                <RiEyeLine className='w-[18px] h-[18px]'/>  
              </button>
              <button datatype='Wishlist' className='relative action-ntn-before before:top-0 before:right-[30px] before:translate-y-[-5px]  top-[0] mt-[15px]  right-0  cursor-pointer flex items-center justify-center '>
                <RiHeartLine className='w-[18px] h-[18px]'/> 
              </button>
        </div>
      </div>

      <div className='text-start p-[20px_0]'>
        <p className='text-sm text-[#767676] capitalize'>{productCategories.node[0].name}</p>
        <h3 className='font-medium text-base m-[5px_0]'>{data.name}</h3>
        <p className='text-base leading-[1] font-medium text-[#767676]'>{price}</p>
      </div>

      <div className='lg:hidden'>
        <button className='h-[42px] p-[0_10px] mt-[15px] bg-[#1f1f1f] w-full block rounded-sm text-white '>Add to cart</button>
      </div>
    </div>
  )
}

export default CardProduct