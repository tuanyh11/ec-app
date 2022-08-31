import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const defaultStyle = {
    container: '',
    imgContainer: '',
    imgUrl: '',
    contentContainer: '',
    titleContent: '',
    title: '',
    buttonContent: ''
}

const Category = ({style = defaultStyle, data}) => {


  return (
    <div className={`relative ${style?.container} group overflow-hidden`}>
        <div className={` bg-cover bg-no-repeat absolute top-0 right-0 left-0 transition duration-300 ease-out scale-[1.01]   group-hover:scale-[1.05] bottom-0 z-10 h-full ${style?.imgContainer}`} style={{backgroundImage: `url(${data.image.mediaItemUrl})`}}>
        </div>
        <div className={`h-[400px] flex relative z-10 p-[30px_70px] items-center  ${style?.contentContainer}  `}>
            <div className="text-start">
                <h4 dangerouslySetInnerHTML={{__html: data.headline}}  className={` text-3xl font-semibold mb-[15px] ${style?.titleContent}`}/>
                <div className={`flex items-center font-medium ${style?.buttonContent} `}>
                    Shop Now 
                    <RiArrowRightLine className="ml-4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category