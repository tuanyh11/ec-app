import {useState, useEffect} from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const initRemeningTime = {
  days: "",
  hours: "",
  minutes: "",
  seconds: ""
}


const Discount = ({data}) => {
  
  const [remainingTime, setRemainingTime] = useState(initRemeningTime)
  

  useEffect(() => {
    let idTimeRemaining = setInterval(() => {
        updateRemainingTime()
      }, 1000)
    return () => {
      clearInterval(idTimeRemaining)
    }
  }, [])

  function updateRemainingTime() {
    const currentDate = new Date()
    const remainingDate = new Date(data.expiration)
    const seconds = Math.floor((remainingDate.getTime() - currentDate.getTime()) / 1000)
    const minutes = Math.floor(seconds / 60 )
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    const addZeroToFontRemainingTim = (time) => {
      if(time.toString().length >= 2) return time.toString()
      return "0"+ time.toString()
    }

    setRemainingTime({...remainingTime, seconds: addZeroToFontRemainingTim(seconds % 60), minutes: addZeroToFontRemainingTim(minutes % 60), hours: addZeroToFontRemainingTim(hours % 60), days: addZeroToFontRemainingTim(days)})

  }

  return (
    <div>
        <div style={{backgroundImage: `url(${data.image.mediaItemUrl})`}} className="h-[550px] bg-cover bg-no-repeat bg-center ">
            <div className="h-full  flex-col justify-center  lg:ml-[50%] flex text-center lg:!text-start p-[15px]  ">
                <h1 className="font-medium text-[32px]   leading-[46px] text-[#1f1f1f] mb-[30px]" dangerouslySetInnerHTML={{__html: data.headline}}></h1>
                <div className='flex mb-[52px] justify-center lg:!justify-start'> 
                    <div className="flex font-semibold !text-primary">
                        <div className="text-[40px] pr-[15px] lg:pr-[23px]">
                          <span>{remainingTime.days}</span>
                          <p className="uppercase text-[13px] text-[#767676] font-medium">days</p>
                        </div>
                    </div>
                    <div className="flex font-semibold !text-primary">
                        <div className="text-[40px] mt-[-2px]">:</div>
                        <div className="text-[40px] p-[0_15px] lg:p-[0_23px]">
                          <span>{remainingTime.hours}</span>
                          <p className="uppercase text-[13px] text-[#767676] font-medium">hours</p>
                        </div>
                    </div>
                    <div className="flex font-semibold !text-primary">
                        <div className="text-[40px] mt-[-2px]">:</div>
                        <div className="text-[40px] p-[0_15px] lg:p-[0_23px]">
                          <span>{remainingTime.minutes}</span>
                          <p className="uppercase text-[13px] text-[#767676] font-medium">minutes</p>
                        </div>
                    </div>
                    <div className="flex font-semibold !text-primary">
                        <div className="text-[40px] mt-[-2px]">:</div>
                        <div className="text-[40px] p-[0_15px] lg:p-[0_23px]">
                          <span>{remainingTime.seconds}</span>
                          <p className="uppercase text-[13px] text-[#767676] font-medium">seconds</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/${data.url}`} className="group inline-flex relative z-10 capitalize items-center p-[0_44px] leading-[54px] bg-[#1f1f1f] hover:text-primary text-white ">
                      Shop Now 
                      <RiArrowRightLine className="ml-2   group-hover:!translate-x-[3px] transition"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discount