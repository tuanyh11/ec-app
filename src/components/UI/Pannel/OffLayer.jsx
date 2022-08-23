import React from 'react'

const OffLayer = ({children}) => {
  return (
    <div className="fixed  top-0 right-0 left-0 bottom-0 z-[9999999]">
        <div className="bg-layerColor opacity-[0.5] absolute top-0 right-0 left-0 bottom-0 z-[99999999]"/> 
        <div>
            {children}
        </div>
    </div>
  )
}

export default OffLayer