import React from 'react'

const OffLayer = ({children, levelLayer = 'z-[9999999]'}) => {
  return (
    <div className={`fixed   top-0  left-0 w-full h-full transition  ${levelLayer} `}>
        <div className="bg-layerColor opacity-[0.5]  absolute top-0 right-0 left-0 bottom-0 z-[99999999]"/> 
        {children}
    </div>
  )
}

export default OffLayer