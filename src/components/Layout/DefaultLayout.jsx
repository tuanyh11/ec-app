import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Topbar from '../Common/Topbar'

const DefaultLayout = ({children}) => {
  return (
    <div>
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