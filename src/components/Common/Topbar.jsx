import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  RiTruckLine,
  RiArrowDownSLine,
  RiFacebookLine,
  RiTwitterFill,
  RiInstagramLine,
  RiPinterestLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const tobarContact = [
  {
    pathName: 'https://www.facebook.com/',
    icon: <RiFacebookLine />,
  },
  {
    pathName: 'https://twitter.com/',
    icon: <RiTwitterFill />,
  },
  {
    pathName: 'https://www.instagram.com/',
    icon: <RiInstagramLine />,
  },
  {
    pathName: 'https://www.pinterest.com/',
    icon: <RiPinterestLine />,
  },
];

const tobarCurency = [
  {
    curruncy: 'usd',
  },
  {
    curruncy: 'eur',
  },
];

const topbarLanguage = [
  {
    language: 'english',
  },
  {
    language: 'France',
  },
  {
    language: 'Germary',
  },
];

const topbarMenu = [
  {
    pathName: '/',
    name: 'Shipping',
  },
  {
    pathName: '/',
    name: 'FQA',
  },
  {
    pathName: '/',
    name: 'Contact',
  },
];

const Topbar = () => {
  return (
    <div className="topbar bg-[#f5f5f5] h-[50px] text-[#111111]">
      <Container className="h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center h-full">
            <div className="flex items-center mr-[50px] ">
              <RiTruckLine className="h-[18px] w-[18px]" />
              <span className="ml-[14px] text-[11px] font-medium uppercase text-[#111111]">
                Free shipping over $100
              </span>
            </div>

            <div className="flex items-center h-full  ">
              {/* curruncy */}
              <div className="flex items-center p-[0_20px] h-full group relative">
                <div className=" flex items-center">
                  <span className="text-sm font-semibold ">USD</span>
                  <RiArrowDownSLine className="ml-[7px]" />
                </div>

                {/* dropdown */}
                <div className=" group-hover:!opacity-100 group-hover:top-[100%] group-hover:!visible  invisible bg-white 
                  opacity-0 absolute top-[110%] min-w-[80px] left-0 z-[9999999] text-left transition-all ease duration-300 ">
                  <ul className="shadow-md ">
                    {tobarCurency.map((item, i) => (
                      <li
                        key={i}
                        className="border-b-[#f5f5f5] border-b-[1px] last:!border-0 hover:bg-[#e2e2e2] transition "
                      >
                        <Link
                          to="/"
                          className="p-[13px_20px] text-sm  block uppercase leading-none "
                        >
                          {item.curruncy}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* end curruncy */}

              {/* language */}
              <div className="flex items-center p-[0_20px] h-full group relative ">
                <div className="flex items-center">
                  <span className="text-sm font-semibold">English</span>
                  <RiArrowDownSLine className="ml-[7px]" />
                </div>
                {/* dropdown */}
                <div className="group-hover:!opacity-100 group-hover:!visible group-hover:top-[100%] invisible bg-white 
                  opacity-0 absolute top-[110%] min-w-[80px] left-0 z-[9999999] text-left transition-all ease duration-300">
                  <ul className="shadow-md ">
                    {topbarLanguage.map((item, i) => (
                      <li
                        key={i}
                        className="border-b-[#f5f5f5] border-b-[1px] last:!border-0 hover:bg-[#e2e2e2] transition"
                      >
                        <Link
                          to="/"
                          className="p-[13px_20px] text-sm  block capitalize leading-none "
                        >
                          {item.language}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            {/* tobar menu */}
            <ul className="flex items-center">
              {topbarMenu.map((item, i) => (
                <li className="p-[8px_14px] first:pl-0 last:pr-0" key={i}>
                  <Link
                    className="hover:text-primary transition text-sm font-medium"
                    to="/"
                  >
                    {' '}
                    {item.name}{' '}
                  </Link>
                </li>
              ))}
            </ul>

            {/* tobar contact */}

            <ul className="flex items-center ml-[72px]">
              {tobarContact.map((item, i) => (
                <li key={i}>
                  <a
                    className="p-[0_10px] block text-[#A0A0A0] w-auto h-auto hover:text-[#111111] transition"
                    href={item.pathName}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Topbar;
