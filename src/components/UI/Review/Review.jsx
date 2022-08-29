import React from 'react'
import {RiStarSFill, RiStarSLine} from 'react-icons/ri'

const Review = ({data}) => {
  const {image, name, categoryReview, review, rating, user} = data
  const time = new Date(review.date)

  const date = time.getDate()
  const month = time.toLocaleDateString('en-us', { month:"short"})
  const years = time.getFullYear()

  const ratingFillStars = [...new Array(rating ).keys()]

  const ratingEmpStars = rating < 5 ?  [...new Array(5 - rating).keys()] : []
  return (
    <div>
      <div className='p-[30px] border mr-[30px]'>
        <div className='flex items-center mb-[15px]'>
          <div className="mr-[24px]">
            <img className='w-[80px] h-[80px] object-cover' src={image} alt="" />
          </div>
          <div className='text-start'>
            <p className='text-base text-[#525252] '>{categoryReview.name}</p>
            <h2 className='text-base text-[#1f1f1f] font-medium mb-[5px]'>{name}</h2>
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

        <div className='text-start mb-[15px]'>
          <p>{review.content}</p>
        </div>
        <div className="flex items-center text-sm text-[#767676]">
          <p>{user.name + ','}</p>
          <span>{`${date} ${month} ${years}`}</span>
        </div>
      </div>
    </div>
  )
}

export default Review