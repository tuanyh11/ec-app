import React from 'react'

const Policy = ({data}) => {
    
  return (
    <div className="flex ">
        <div className="mr-[26px]">
            {data.icon}
        </div>
        <div className="text-start"> 
            <p className="text-sm font-medium">{data.name}</p>
            <p className="text-[#767676] text-[15px]">{data.content}</p>
        </div>
    </div>
  )
}

export default Policy