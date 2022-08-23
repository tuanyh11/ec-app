import React from 'react'

const OffLayer = ({children, isTurnOn}) => {
  return (
    <div className={`fixed  top-0 left-0 w-full h-full transition  z-[9999999] ${isTurnOn ? 'block ': ' opacity-0 hidden'}`}>
        <div className="bg-layerColor opacity-[0.5]  absolute top-0 right-0 left-0 bottom-0 z-[99999999]"/> 
        {children}
    </div>
  )
}

export default OffLayer