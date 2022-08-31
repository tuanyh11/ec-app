import { useEffect, useState } from 'react';
import {
  RiArrowLeftSLine, RiArrowRightSLine, RiExchangeDollarFill, RiMedalLine, RiSecurePaymentLine, RiTruckLine
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';
import { posts, products as fakeProducts, razziInstagram, brands } from '../acssets/fakedata';
import API from '../api';
import { Banner, CampaignBar, CardProduct, CategoryBanner, Discount, Policy, Review, Razzi, Brand } from '../components/';
import { GET_ALLPRODUCTS, GET_ALLCATEGORIES, GET_DISCOUNT_BANNERS, GET_ALLBANNERS } from '../Queries';



const policy = [
  {
    icon: <RiTruckLine className="w-[40px] h-[40px]" />,
    name: 'FREE SHIPPING',
    content: 'From all orders over $100',
  },
  {
    icon: <RiExchangeDollarFill className="w-[40px] h-[40px]" />,
    name: 'FREE RETURNS',
    content: 'Return money within 30 days',
  },
  {
    icon: <RiSecurePaymentLine className="w-[40px] h-[40px]" />,
    name: 'SECURE SHOPPING',
    content: "You're in safe hands",
  },
  {
    icon: <RiMedalLine className="w-[40px] h-[40px]" />,
    name: 'FREE SHIPPING',
    content: 'We have everything you need',
  },
];


const discouts = [
  {
    image: 'https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home1-deal-carousel-b1.jpg',
    title: 'Get -50% From Summer Collection'
  },
  {
    image: 'https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/home_2_slider_2.jpg',
    title: 'Get -50% From Summer Collection'
  }
]

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


  const [filter, setFilter] = useState('womens');

  const [dataField, setDataField] = useState({
    categories: [],
    discountBanner: [],
    products: [],
    reviews: [],
    categoriesBanner: [],
    banners: [],
    parentCategories: []
  })


  useEffect(() => {

      (async () => {
        try {
            const productRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
               query:  GET_ALLPRODUCTS

            })
            const categoriesRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
               query: GET_ALLCATEGORIES 
            })

            // const discountBanner = await API.post('http://localhost/wordpress/graphql', {
            //   query: GET_DISCOUNT_BANNERS
            // })


            const allCategories = categoriesRes.data?.data?.productCategories?.nodes
            
            const parentCategories = allCategories.filter(item => item.parentId === null).reverse()

            setFilter(parentCategories[0].name)

            const bannersRes = await API.post('https://72.arrowhitech.net/tn3/test_an/wordpress/graphql', {
              query: GET_ALLBANNERS 
           })

           const banners = bannersRes.data.data.allBanner.nodes.map(item => {
            return {...item.banner}
           })

            // const newDiscountBanner = discountBanner.data?.data.allBanner.nodes?.map((node) => {
            //   const {discount_banner, id} = node
            //   return {...discount_banner, id}
            // })
           console.log(allCategories)

            // const newProducts =  productRes?.data?.data?.products?.edges?.map((item) => {
            //   const {node} = item
            //   return node
            // })


            const reviews =  posts?.products?.nodes.map((node) => {
              const review = node.reviews.nodes
              const categoryReview = node.productCategories.nodes[0]
              return {...node, image: node.image, review, categoryReview}
            }).map(item => {
              const lastReview = item?.review?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              return {...item, review: lastReview[0] ? lastReview[0] : null}
            })

            const lastReview = reviews.sort((a, b) => new Date(b.review.date).getTime() - new Date(a.review.date).getTime()).slice(0, 6)

            setDataField({...dataField, categories: [], reviews:  lastReview, banners: banners, parentCategories: parentCategories})
           
        } catch (error) {
            console.error(error)
        }
      })()
  }, []) 

  console.log(dataField)

  return (
    <div>
      <CampaignBar
        title="GET 20% SALE WITH COUPONE CODE CGBNJKI25"
        imageUrl="https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2021/06/bg_cam.jpg"
      />
      <section className="lg:!hidden">
        <div>
          <Slider {...settingsSlickTopCate}>
            {dataField.categories.reverse(  ).map((category, i) => (
              <Banner key={i} data={category} />
            ))}
          </Slider>
        </div>
      </section>
      {/* banner */}
      <section className="hidden lg:block">
        <div className="flex items-center">
          {dataField.categories.map((category, i) => (
            <Link key={i} to={`/shop/${category.name}`}>
              <Banner data={category} />
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
            {dataField.banners.map((item, i) => {
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
                  {dataField.parentCategories.map((item, i) => (
                    <div key={i} onClick={() => setFilter(item.name)}>
                      <p
                        className={`mr-8 capitalize font-medium relative cursor-pointer text-base hover:text-primary leadding-1 leading-[18px] afterStyle hover:after:!bg-primary hover:after:w-full hover:after:opacity-100 ${
                          filter === item.name ? 'active_one' : ''
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
              {fakeProducts.map((item, i) => (
                <Col lg={3} md={4} className="mb-[20px]" key={i}>
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
          {dataField.discountBanner.map((item) => (
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
                {dataField.reviews.map((post) => (
                    <div lg={4} key={post.id}>
                        <Review data={post}></Review>
                    </div>
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
  );
};

export default Home;
