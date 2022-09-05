import React from 'react'

const Layer = ({children}) => {
  return (
    <div className="fixed  right-0 bottom-0 top-0 left-0 bg-rgba-20 z-50">
        {children}
    </div>
  )
}

export default Layer