import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { footerMoreInfo } from '../../../acssets/fakedata';
import {
  RiFacebookFill,
  RiTwitterFill,
  RiGoogleFill,
  RiTumblrFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Dropdown from '../../UI/Dropdown/Dropdown';

const footerSocial = [
  {
    icon: (
      <RiFacebookFill className="w-5 opacity-70 hover:opacity-100 transition h-5" />
    ),
    link: 'https://www.facebook.com/',
  },
  {
    icon: (
      <RiTwitterFill className="w-5 opacity-70 hover:opacity-100 transition h-5" />
    ),
    link: 'https://www.facebook.com/',
  },
  {
    icon: (
      <RiGoogleFill className="w-5 opacity-70 hover:opacity-100 transition h-5" />
    ),
    link: 'https://www.facebook.com/',
  },
  {
    icon: (
      <RiTumblrFill className="w-5 opacity-70 hover:opacity-100 transition h-5" />
    ),
    link: 'https://www.facebook.com/',
  },
];

const MoreInfoItem = ({ root, item, type = 'root' }) => (
  <div className="text-start p-[5px_0] first:pt-0 ">
    <h2
      className={`relative  ${
        type === 'root'
          ? 'text-[13px] pb-4 font-medium uppercase'
          : 'text-[#cdcdcd] after:duration-[0.4s]   text-base capitalize cursor-pointer afterStyle hover:after:w-full after:bg-white inline hover:after:opacity-100'
      }`}
    >
      {root.title}
    </h2>
    {item.map((item, i) => (
      <MoreInfoItem key={i} root={item} item={[]} type={null} />
    ))}
  </div>
);

const DropDownItem = ({ root, type = null, childrens }) => {
  return (
    <div className="text-start p-[5px_0] first:pt-0 ">
      <h2
        className={`relative  ${
          type === 'root'
            ? 'text-[13px] pb-4 font-medium uppercase'
            : 'text-[#cdcdcd] after:duration-[0.4s]   text-base capitalize cursor-pointer afterStyle hover:after:w-full after:bg-white inline hover:after:opacity-100'
        }`}
      >
        {root.title}
      </h2>
      {childrens.map((item, i) => (
        <Dropdown key={i} root={item} childrens={[]} type={null} />
      ))}
    </div>
  );
};

const Footer = ({ data }) => {
  const rootFooterInfo = footerMoreInfo.filter(
    (item) => item.parentId === null
  );
  const getFooterInfoItem = (id) => {
    return footerMoreInfo.filter((item) => item.parentId === id);
  };

  const [toggle, setToggle] = useState([])

  const handleToggle = (index) => {
    const isToggle = toggle.includes(index) ? [...toggle.filter(item => item !== index)] : [...toggle, index]
    setToggle(isToggle)
    return isToggle
  }

  return (
    <div
      className="text-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2021/02/footer_bg_1920.png?ssl=1')",
      }}
    >
      <Container fluid="xl">
        <Row>
          <Col lg={12}>
            <div className="p-[110px_0_41px] ">
              <div>
                <h2 className="text-2xl mb-[30px]">
                  Want style Ideas and Treats?
                </h2>
              </div>
              <form action="">
                <div className="flex max-w-[640px] m-auto">
                  <input
                    type="Email"
                    className="p-[17px_30px] w-full bg-[#303030]  outline-0 text-base"
                    placeholder="Enter Email *"
                    required
                  />
                  <input
                    type="submit"
                    className=" outline-0 p-[0_35px] bg-[#525252] ml-[5px] w-[30%] text-base font-medium text-center"
                    value="Subcribe"
                  />
                </div>
              </form>
            </div>
          </Col>
          <Col lg={12}>
            <div className="p-[64px_0]">
              <Row>
                <Col lg={3} md={4}>
                  <div className="flex flex-col text-start mb-[20px] lg:mb-[0]">
                    <div className="text-4xl font-medium mb-[20px] leading-[0.8]">
                      Razzi.
                    </div>
                    <div className="flex items-center m-[17px_0]  lg:m-0">
                      {footerSocial.map((item, i) => (
                        <div
                          className="cursor-pointer p-[0_7.5px] first:pl-0 last:pr-0"
                          key={i}
                        >
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col className="hidden md:block" lg={9} md={8}>
                  <div>
                    <Row className="">
                      {rootFooterInfo.map((item, i) => (
                        <Col key={i} lg={3} md={6} className="md:mb-[50px]">
                          <MoreInfoItem
                            root={item}
                            item={getFooterInfoItem(item.id)}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Col>

                <Col className='lg:hidden'>
                  <div>
                    <Row>
                      {rootFooterInfo.map((item, i) => (
                        <Col key={i} lg={3} md={6} className="md:mb-[50px]">
                          <Dropdown
                            root={item}
                            title={item.title}
                            childrens={getFooterInfoItem(item.id)}
                            onToggle={handleToggle}
                            toggle={toggle.includes(i)}
                            renderBody={(data, index) => (
                              <DropDownItem key={index} index={index}  root={data} childrens={[]} />
                            )}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="p-[22px_0] border-t-[1px] border-[#333333] border-solid">
        <Container fluid="xl">
          <Row>
            <Col md={12} lg={6}>
              <p className="lg:text-start p-[15px_0] text-sm text-[#cdcdcd]">
                © 2021 All rights reserved.
              </p>
            </Col>
            <Col md={12} lg={6}>
              <Link className="p-[15px_0] flex justify-center" to={'/'}>
                <img
                  src="https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2021/06/icons_payment.png"
                  alt=""
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
