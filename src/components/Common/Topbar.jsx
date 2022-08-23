import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {RiTruckLine, RiArrowDownSLine, RiFacebookLine, RiTwitterFill, RiInstagramLine, RiPinterestLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const tobarContact = [
    {
        pathName: 'https://www.facebook.com/',
        icon: <RiFacebookLine/>
    },
    {
        pathName: 'https://twitter.com/',
        icon: <RiTwitterFill/>
    },
    {
        pathName: 'https://www.instagram.com/',
        icon: <RiInstagramLine/>
    },
    {
        pathName: 'https://www.pinterest.com/',
        icon: <RiPinterestLine/>
    },
]

const tobarCurency = [
    {
        curruncy: 'usd'
    },
    {
        curruncy: 'eur'
    },
]

const Topbar = () => {
  return (
    <div className="bg-[#f5f5f5] h-[50px] text-[#111111]">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="flex items-center">
                        <div className="flex items-center mr-[50px]">
                            <RiTruckLine className="h-[18px] w-[18px]"/>
                            <span className="ml-[14px] text-[11px] font-medium uppercase text-[#111111]">Free shipping over $100</span>
                        </div>

                        {/* curruncy */}
                        <div className="flex items-center">
                            <div className="p-[0_20px] group relative">
                                <div className=' flex items-center'>
                                    <span className="text-sm font-semibold ">USD</span>
                                    <RiArrowDownSLine className="ml-[7px]"/>
                                </div>

                                {/* dropdown */}
                                <div className="absolute top-[110%]">
                                    <ul className="shadow-md">
                                        {tobarCurency.map((item, i) => (
                                            <li key={i}>
                                                <Link to="/" className="">
                                                    {item.curruncy}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <span className="text-sm font-semibold">English</span>
                                    <RiArrowDownSLine className="ml-[7px]"/>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </Col>
                <Col lg={6}>
                    <div className="flex items-center">
                        {/* tobar menu */}
                        <ul>
                            <li>
                                <Link to="/"> Shipping </Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>

                        {/* tobar contact */}

                        <ul>
                            {tobarContact.map((item, i) => (
                                <li key={i}>
                                    <a href={item.pathName}>
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Topbar