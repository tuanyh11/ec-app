import React from 'react'
import {CampaignBar, Banner, Policy, CategoryBanner} from '../components/'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import {RiTruckLine, RiExchangeDollarFill, RiSecurePaymentLine, RiMedalLine} from 'react-icons/ri'
import { Col, Container, Row } from 'reactstrap';

const topCategories = [
  {
    img: 'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2021/09/home1-banner-carousels-1.jpg?resize=670%2C692&ssl=1',
    name: 'Womens'
  },
  {
    img: 'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home1-banner-carousels-2.jpg?resize=670%2C692&ssl=1',
    name: 'Mens'
  },
  {
    img: 'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home1-banner-carousels-3.jpg?resize=670%2C692&ssl=1',
    name: 'Kids'
  }
]

const categoriesBanner = [
  {
    title: 'Bags Collection',
    pathName: '/shop/women/bags',
    imgUrl: 'https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home1-banner-grid-2.jpg',
  },
  {
    title: "Printed Men’s \n Shirt",
    pathName: '/shop/women/bags',
    imgUrl: 'https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home1-banner-grid-1.jpg'
  },
  {
    title: 'Basic Women’s \n Dresses',
    pathName: '/shop/women/bags',
    imgUrl: 'https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home1-banner-grid-3.jpg'
  },
  {
    title: 'Sweatshirt',
    pathName: '/shop/women/bags',
    imgUrl: 'https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home1-banner-grid-6.jpg'
  },
]

const policy = [
  {
    icon: <RiTruckLine className="w-[40px] h-[40px]" />,
    name: 'FREE SHIPPING',
    content: 'From all orders over $100'
  },
  {
    icon: <RiExchangeDollarFill className="w-[40px] h-[40px]" />,
    name: 'FREE RETURNS',
    content: 'Return money within 30 days'
  },
  {
    icon: <RiSecurePaymentLine className="w-[40px] h-[40px]" />,
    name: 'SECURE SHOPPING',
    content: "You're in safe hands"
  },
  {
    icon: <RiMedalLine className="w-[40px] h-[40px]" />,
    name: 'FREE SHIPPING',
    content: 'We have everything you need'
  },
]

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <CampaignBar title="GET 20% SALE WITH COUPONE CODE CGBNJKI25" imageUrl="https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2021/06/bg_cam.jpg"/>
      <section className="lg:!hidden">
        <div>
          <Slider  {...settings}>
            {topCategories.map((category, i) => (
              <Banner key={i} data={category}/>
            ))}
          </Slider>
        </div>
      </section>
      {/* banner */}
      <section className="hidden lg:block">
          <div className="flex items-center">
            {topCategories.map((category, i) => (
            <Link to={`/shop/${category.name}`}>
              <Banner key={i} data={category}/>
            </Link>
            ))}
          </div>
      </section>
      {/* end banner */}

      {/* policy */}
      <section className="pt-[20px] ">
        <Container fluid="xl">
          <Row>
            {policy.map((item, i) => (
              <Col sm={6} lg={3} className="p-[15px]" key={i}>
                <Policy data={item}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/*end policy */}
      
      <section>
        <Container fluid="xl" >
            <div className="p-[15px_0]"> 
              <div className=" pt-[80px] pb-[30px] border-t-[1px] border-solid lg:pb-[32px] lg:pt-[105px]">
                <h4 className="text-sm mb-[15px] text-[#a0a0a0]">NEW COLLECTION</h4>
                <h1 className="text-4xl text-[#111111 c] font-medium  ">Best Picks 2021</h1>
              </div>
              <p className="inline-block p-[0_12%] lg:p-[0_30%] text-lg text-[#525252] mb-[40px]">A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials.</p>
            </div>
        </Container>  
      </section>
              
      <section>
        <Container fluid="xl">
          <Row>
            {categoriesBanner.map((item, i) => {
              const left = {
                titleContent: 'text-white',
                buttonContent: 'text-white ', 
                contentContainer: 'justify-center'
              }

              const right = {
                contentContainer: 'flex-start',
                imgContainer: ' [background-position:-120px_0] lg:[background-position:0]'
              }
              const navi = i === 0 || i === 3
              if(navi)  
                return (
                  <Col key={i} lg={4} md={6} sm={12} className="mt-[20px]">
                    <Link to={item.pathName}>
                      <CategoryBanner style={left} data={item}/>
                    </Link>
                  </Col>
                )
              else return (
                <Col key={i} lg={8} md={6} sm={12} className="mt-[20px]">
                  <Link   to={item.pathName}>
                    <CategoryBanner style={right} data={item}/>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home