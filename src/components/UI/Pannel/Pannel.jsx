import React from 'react'
import Heading from './Heading'
import AuthPanel from './AuthPanel'
import WishlistPanel from './WishlistPanel'
import CartPanel from './CartPanel'

const Pannel = ({title = '', action = '', handleClosePanel = () => {}, isTurnOn = false}) => {

  const GetTemplatePanel = () => {
    if(action && action === 'cart') return <CartPanel/>
    if(action && action === 'wishlist') return <WishlistPanel/>
    if(action && action === 'auth') return <AuthPanel/>
  }

  return (
    <div className={`panel absolute top-0 right-0 max-w-full h-full transition-[transform]  ease-in duration-700 w-[470px] bg-white z-[999999999]  ${isTurnOn ? '!transform-none': 'translate-x-[100%]'}`}>
      <div>
        <Heading title={title} handleClosePanel={handleClosePanel}/>
        <div>
          {GetTemplatePanel()}
        </div>
      </div>
    </div>
  )
}

export default Pannel