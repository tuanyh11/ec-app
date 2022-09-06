import { useEffect, useState } from 'react';
import {
  RiArrowLeftSLine, RiArrowRightSLine, RiExchangeDollarFill, RiMedalLine, RiSecurePaymentLine, RiTruckLine
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';
import { razziInstagram, brands } from '../acssets/fakedata';
import { Banner, CampaignBar, CardProduct, CategoryBanner, Discount, Policy, Review, Razzi, Brand } from '../components/';
import { useDataSlice, usePolicy } from '../Features/hooks';

// ck_f02c4b788ca1e801c2dedde08c03bd99f8dc3967
// cs_bf7f0d0b38e00780c620cfe476be1afb63cdb300



const settingsSlickTopCate = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingsdiscountBanner = {
  dots: false,
  fade: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow/>,
  prevArrow: <SamplePrevArrow/>
}

const settingsBrand = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  appendDots: dots => <ul  style={{bottom: '-55px'}}>{dots}</ul>,

}

const settingsReview = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  appendDots: dots => <ul className='!bottom-[-10px]' style={{bottom: '-70px'}}>{dots}</ul>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
      }
    }
  ]
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`absolute top-[50%] translate-y-[-50%] bg-[#fff] right-0 z-10 opacity-50 hover:!opacity-100 transition`}
      onClick={onClick}
    >
      <button className='w-[42px] h-[42px] flex items-center justify-center'><RiArrowRightSLine className='w-5' /></button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`absolute top-[50%] translate-y-[-50%] bg-[#fff] left-0 z-10 opacity-50 hover:!opacity-100 transition`}
      onClick={onClick}

    >
      <button className='w-[42px] h-[42px] flex items-center justify-center'><RiArrowLeftSLine className='w-5' /></button>
    </div>
  );
}

const Home = () => {

  const [ data, actions, dispatch] = useDataSlice()
  const [policy, policyAct] = usePolicy()


  const fliter = data.filter
  const banner = data.banner
  const mainCategories = data.mainCategories
  const discountBanner = data.discountBanner
  const lastestReviews = data.lastestReviews
  const isPending = data.isPending
  const isRejected = data.isRejected
  const products = data.products
  const policies = policy.policyItems
  
  console.log(policies)
  
  useEffect(() => {
    dispatch(actions.fetchAllProducts())
    dispatch(actions.fetchAllCategories())
    dispatch(actions.fetchAllDiscountBanner())
    dispatch(actions.fetchLasetReviews())
    dispatch(actions.fetchAllBanner())
    dispatch(policyAct.fetchAsyncAllPolicy())
  }, []) 
  
  const productFilter = products.filter(product => product.productCategories.nodes.some(category => category.name === fliter))

  return (
    <>
      {isPending && !isRejected ? <div>Loading...</div>
      : <div>
          <CampaignBar
            title="GET 20% SALE WITH COUPONE CODE CGBNJKI25"
            imageUrl="https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2021/06/bg_cam.jpg"
          />
          <section className="lg:!hidden">
            <div>
              <Slider {...settingsSlickTopCate}>
                {mainCategories.map((category, i) => (
                  <Banner key={i} data={category} />
                ))}
              </Slider>
            </div>
          </section>
          {/* banner */}
          <section className="hidden lg:block">
            <div className="flex items-center">
              {mainCategories.map((category, i) => (
                  <Col lg={4} key={i}>
                    <Link  to={`/shop/${category.slug}`}>
                      <Banner data={category} />
                    </Link>
                  </Col>
              ))}
            </div>
          </section>
          {/* end banner */}

          {/* policy */}
          <section className="pt-[20px] ">
            <Container fluid="xl">
              <Row>
                {policies.map((item, i) => (
                  <Col sm={6} lg={3} className="p-[15px]" key={i}>
                    <Policy data={item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
          {/*end policy */}
                
          <section>
            <Container fluid="xl">
              <div className="p-[15px_0]">
                <div className=" pt-[80px] pb-[30px] border-t-[1px] border-solid lg:pb-[32px] lg:pt-[105px]">
                  <h4 className="text-sm mb-[15px] text-[#a0a0a0]">
                    NEW COLLECTION
                  </h4>
                  <h1 className="text-4xl text-[#111111 c] font-medium  ">
                    Best Picks 2021
                  </h1>
                </div>
                <p className="inline-block p-[0_12%] lg:p-[0_30%] text-lg text-[#525252] mb-[40px]">
                  A conscious collection made entirely from food crop waste,
                  recycled cotton, other more sustainable materials.
                </p>
              </div>
            </Container>
          </section>

          <section>
            <Container fluid="xl">
              <Row>
                {banner.map((item, i) => {
                  const left = {
                    titleContent: 'text-white',
                    buttonContent: 'text-white ',
                    contentContainer: 'justify-center',
                  };

                  const right = {
                    contentContainer: 'flex-start',
                    imgContainer:
                      ' [background-position:-120px_0] lg:[background-position:0]',
                  };
                  const navi = i === 0 || i === 3;
                  if (navi)
                    return (
                      <Col key={i} lg={4} md={6} sm={12} className="mt-[20px]">
                        <Link to={item.url}>
                          <CategoryBanner style={left} data={item} />
                        </Link>
                      </Col>
                    );
                  else
                    return (
                      <Col key={i} lg={8} md={6} sm={12} className="mt-[20px]">
                        <Link to={item.url}>
                          <CategoryBanner style={right} data={item} />
                        </Link>
                      </Col>
                    );
                })}
              </Row>
            </Container>
          </section>
                
          {/* Top month seller  */}

          <section className="pt-[88px] ">
            <Container fluid="xl">
              <Row>
                <Col lg={12}>
                  <div className="flex justify-center text-4xl font-medium pb-[32px]">
                    <h1>Top Month Sellers</h1>
                  </div>
                </Col>
                <Col lg={12} className="pb-[80px]">
                  <div>
                    {/* Home category */}
                    <div className="flex justify-center">
                      {mainCategories.map((item, i) => (
                        <div key={i} onClick={() => dispatch(actions.setFliterCategories(item.name))}>
                          <p
                            className={`mr-8 capitalize font-medium relative cursor-pointer text-base hover:text-primary 
                            leadding-1 leading-[18px] afterStyle hover:after:!bg-primary hover:after:w-full hover:after:opacity-100 ${
                              fliter === item.name ? 'active_one' : ''
                            }`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
              
              {/* product */}

              <Row >
                  {productFilter.map(item => (
                    <Col lg={3} md={4} className="mb-[20px]" key={item.id}>
                      <CardProduct data={item} />
                    </Col>
                  ))}
              </Row>

              <div className='p-[40px_0_80px]'>
                <Link className='relative origin-[left_center] hover:after:origin-[right_center] hover:after:scale-0 after:transition text-base font-medium afterStyle after:opacity-100 after:w-full after:block after:bg-black' to={'/shop'}>Discover More</Link>
              </div>
            </Container>
          </section>

          {/* discount */}

          <section>
            <Slider {...settingsdiscountBanner}>
              {discountBanner.map((item) => (
                <Discount key={item.id} data={item}/>
              ))}
            </Slider>
          </section>

          {/* reviews */}
          <section className="mb-[165px]">
            <Container fluid="xl">
              <Row>
                <Col lg={12}>
                  <div className='p-[105px_0px_70px]'>
                    <p className='upercase text-sm font-medium text-[#a0a0a0] mb-[15px]'>WHAT BUYERS SAY</p>
                    <h1 className="text-4xl font-medium leading-[1]">Lastest Buyers Review</h1>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mr-[-30px]">
                    <Slider {...settingsReview}>
                    {lastestReviews.map((review) => (
                        <Review key={review.id} data={review}></Review>
                      ))}
                    </Slider>
                  </div>
                </Col>
              </Row>

            </Container>
          </section>

          <section className="pt-[85px] bg-[#f5f5f5]">
            <Container fluid="xl">
              <Row>
                <Col lg={12}>
                    <div className="p-[15px] pb-[64px] ">
                      <h2 className="mb-[21px] text-4xl font-medium text-[#111111]">@Razzi</h2>
                      <p className="text-lg font-normal text-[#525252]">The best thing about a monochrome colour scheme</p>
                    </div>
                </Col>
                <Col lg={12}>
                    <Row className='mb-[-105px] pr-[7px] pl-[7px]'>
                      {razziInstagram.map((item, i) => (
                        <Col key={i} lg={2} md={4} className="mt-[12px] pr-[5px] pl-[5px]" >
                          <a href={item.link} className="hover:opacity-90 transition" >
                            <Razzi data={item}/>
                          </a>
                        </Col>
                      ))}
                    </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section>
            <Container fluid="xl">
              <div className="p-[190px_0_68px]">
                <Row className="hidden lg:flex">
                    {brands.map((item, i) => (
                      <Col key={i} >
                        <Link  to={`/${item.slug}`}>
                          <Brand  data={item}/>
                        </Link>
                      </Col>
                    ))} 
                </Row>
                <Row className="lg:hidden">
                  <Col lg={12}>
                    <Slider {...settingsBrand}>
                      {brands.map((item, i) => (
                          <div key={i}>
                            <Link to={`/${item.slug}`}>
                              <Brand  data={item}/>
                            </Link>
                          </div>
                        ))} 
                    </Slider>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      }

      {isRejected && !isPending && <div>Something went wrong</div>}
    </>
  );
};

export default Home;
