import React from 'react'

const Brand = ({data}) => {
  return (
    <div >
        <div className="flex justify-center hover:translate-y-[-3px] transition-[transform] ease duration-300 p-[10px_0]">
          <img src={data.image} className="w-auto" alt="" />
        </div>
    </div>
  )
}

export default Brand