import React from 'react'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import Topbar from '../Common/Topbar/Topbar'

const DefaultLayout = ({children}) => {
  return (
    <div >
        <Topbar/>
        <Header/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default DefaultLayout