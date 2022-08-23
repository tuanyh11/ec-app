import React from 'react'
import {RiCloseLine} from 'react-icons/ri'

const Heading = ({title, handleClosePanel}) => {
  return (
    <div>
        <h1>{title}</h1>
        <RiCloseLine onClick={ handleClosePanel}/>
    </div>
  )
}

export default Heading