import React from 'react'
import {RiCloseLine, RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'
import { Row, Col } from 'reactstrap'
import {Button, CardProduct} from '../../'
import Slider from 'react-slick';


const CartLayer = ({data, toggleLayer, onDispatch, products}) => {


    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
     };


     function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className={`absolute top-[-15px] translate-y-[-50%]  right-[-10px] z-10 opacity-50 hover:!opacity-100 transition`}
            onClick={onClick}
          >
            <button className='w-[42px] h-[42px] flex items-center justify-center group'><RiArrowRightSLine className='w-8 h-8 group-hover:text-[#111111]' /></button>
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick} = props;
        return (
          <div
            className={`absolute top-[-15px] translate-y-[-50%]  right-[50px] z-10 opacity-50 hover:!opacity-100 transition`}
            onClick={onClick}
      
          >
            <button className='w-[42px] h-[42px] flex items-center justify-center group'><RiArrowLeftSLine className='w-8 h-8 group-hover:text-[#111111]' /></button>
          </div>
        );
      }

  return (
    <div className="max-w-[770px] absolute bg-white top-[50%] left-[50%] p-[30px] translate-y-[-50%]  translate-x-[-50%] z-[999999999999999]">
        <div onClick={() => onDispatch(toggleLayer(false))} className="absolute  top-[-12px] bg-white flex items-center p-[10px] rounded-[50%] justify-center right-[-12px] cursor-pointer group">
            <RiCloseLine  className="w-6 h-6  text-[#a6a6a6] group-hover:text-[#767676]"/>
        </div>
        <div>
            <Row className='items-center'>
                <Col lg={12}>
                    <h1 className="capitalize text-xl font-medium text-start mb-[10px]">Successfully added to your cart.</h1>
                </Col>
                <Col lg={6}>
                    <div className="flex items-center">
                        <div className="pr-5">
                            <img className="max-w-[120px]" src={data.newItem.image.mediaItemUrl} alt="" />
                        </div>
                       <div className="text-start">
                            <p className="text-lg font-medium">Leather Belt</p>
                            <p className="m-[5px_0] text-lg text-[#767676]">$14.00</p>
                            <p className=" text-lg text-[#767676]">QTY: 1</p>
                       </div>
                    </div>
                </Col>
                <Col lg={6} className="border-l-[1px] border-l-[#a6a6a6]">
                    <div className="text-start pl-2">
                        <h1 className=" text-lg text-[#767676] mb-[10px]">{`There are ${data.cartItems.length} items in your cart`}</h1>
                        <div className="flex items-center mb-[10px]">
                            <span className="text-[#111111] text-start text-lg font-medium flex-1">Subtotal:</span>
                            <span className="text-[#111111] text-lg font-medium">{data.totalAmount}</span>
                        </div>
                        <div className="text-lg">You are missing <strong>$63.90</strong> to get <strong>free shipping!</strong></div>
                        <div className='flex items-center'>
                            <div className="bg-[#f5f5f5] flex-1 h-[7px] mr-3">
                                <div className="bg-[#ff6f61] h-full w-[68%]"></div>
                            </div>
                            <div>68.05%</div>
                        </div>

                        <div className='mt-[30px]'>
                            <Button title={'View cart'} className="bg-[#1f1f1f] text-white text-lg"/>
                            <Button title={'Checkout'} className="text-lg border-[1px] mt-[10px] border-[#111111] border-solid"/>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="mt-[30px] pt-[30px] border-t-[1px]">
                        <div className='text-start font-medium text-2xl m-[0_20px_15px]'>You may also like</div>
                        <Slider {...setting}>
                            {products.map((product) => 
                                <div key={product.id} className="p-2"> 
                                    <CardProduct data={product} tunOffAction={true}/>
                                </div>
                            )}
                        </Slider>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default CartLayer