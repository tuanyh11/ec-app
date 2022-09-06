import React from 'react'
import {
  RiArrowLeftSLine, RiArrowRightSLine, RiExchangeDollarFill, RiMedalLine, RiSecurePaymentLine, RiTruckLine
} from 'react-icons/ri';
const Policy = ({data}) => {
  return (
    <div className="flex policy">
        <div className="mr-[26px]" dangerouslySetInnerHTML={{__html: data.icon}}>
        </div>
        <div className="text-start"> 
            <p className="text-sm font-medium">{data.heading}</p>
            <p className="text-[#767676] text-[15px]">{data.description}</p>
        </div>
    </div>
  )
}

export default Policy