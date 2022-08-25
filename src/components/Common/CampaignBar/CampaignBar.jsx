import React from 'react'

const Campaign = ({title, imageUrl}) => {
  return (
    <div>
      <div className="h-[53px] flex justify-center items-center bg-[center_center] bg-cover text-[13px] font-medium p-[5_20px] text-white uppercase" style={{backgroundImage: `url(${imageUrl})`}}>
        {title}
      </div>
    </div>
  )
}

export default Campaign