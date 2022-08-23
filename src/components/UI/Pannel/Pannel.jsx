import React from 'react'
import Heading from './Heading'

const Pannel = ({title = '', action = '',  children, handleClosePanel = () => {}}) => {



  return (
    <div className="absolute top-0 right-0 bottom-0 w-[470px] bg-white z-[999999999]">
      <div>
        <Heading title={title} handleClosePanel={handleClosePanel}/>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Pannel