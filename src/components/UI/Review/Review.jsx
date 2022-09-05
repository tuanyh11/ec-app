import React from 'react'
import {RiStarSFill, RiStarSLine} from 'react-icons/ri'

const Review = ({data}) => {
  const {reviewer, product_name, imageProduct, productCategories, review, rating, date_created} = data
  const time = new Date(date_created)

  const date = time.getDate()
  const month = time.toLocaleDateString('en-us', { month:"short"})
  const years = time.getFullYear()

  const ratingFillStars = [...new Array(rating).keys()]

  
  const ratingEmpStars = rating < 5 ?  [...new Array(5 - rating).keys()] : []
  return (
    <div className=' p-[30px] border mr-[30px]  h-full text-start'>

      <div className='flex flex-col h-full '>
        <div className=' flex items-center mb-[18px]'>
          <div className="mr-[24px]">
            <img className='w-[80px] h-[80px] object-cover' src={imageProduct.mediaItemUrl} alt="" />
          </div>
          <div className='text-start'>
            <p className='text-base text-[#525252] '>{productCategories[0].name}</p>
            <h2 className='text-base text-[#1f1f1f] font-medium mb-[5px]'>{product_name}</h2>
            <div className='flex '>
                {ratingFillStars.map(item => (
                    <RiStarSFill className="text-yellow-500" key={item}/>
                ))}
                {ratingEmpStars.map(item => (
                  <RiStarSFill className="text-[#cdcdcd]" key={item}/>
                ))}
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: `${review}`}} className='text-start text-lg mb-[15px] flex-1 '/>
            
        <div className="flex-1 flex flex-col">
          <p className='mt-auto'>{reviewer + ','}</p>
          <span>{`${date} ${month} ${years}`}</span>
        </div>
      </div>
    </div>
  )
}

export default Review