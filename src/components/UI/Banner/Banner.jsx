import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const Banner = ({ data }) => {
  return (
    <div className="relative group">
      <div className='after:content-["*"] group-hover:after:bg-rgba-20 after:transition-all after:ease after:absolute after:bg-rgba-30 after:right-0 after:bottom-0 after:top-0 after:left-0 '>
        <img src={data.image.mediaItemUrl} alt="" className='h-full w-full object-cover' />
      </div>
      <div className="p-[0_30px] absolute top-[0] right-[0] w-full  h-full items-center pb-[40px] pt-[30px] flex flex-col ">
        <h2 className="text-5xl mt-auto flex-grow-0 flex-shrink-0 basis-auto  text-white font-medium pt-[35px]">
          {data.name}
        </h2>
        <h1
          className="mt-auto font-medium flex items-center justify-center flex-grow-0 flex-shrink-0 basis-auto  min-w-[190px] leading-[54px] p-[0_26px] bg-white text-[#1f1f1f] "
        >
          {data.description}
          <RiArrowRightLine className="ml-3 transition-all ease duration-300 w-auto h-auto group-hover:translate-x-[3px] "/>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
