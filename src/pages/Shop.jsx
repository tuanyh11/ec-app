import React, {useState} from 'react'
import {Sidebar} from '../components/'
import { Container, Row, Col} from 'reactstrap'
import {Link, useLocation} from 'react-router-dom'
import {RiArrowDownSLine} from 'react-icons/ri'

const categoriesBanner = 
  {
    imgUrl:
      'https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/catalog_banner1.jpg',
  }

const sortValue = [
  {
    name: 'Default sorting',
    isDefault: true,
  },
  {
    name: 'Sort by popularity',
    isDefault: false,
  },
  {
    name: 'Sort by average rating',
    isDefault: false,
  },
  {
    name: 'Sort by latest',
    isDefault: false,
  }
]

const Shop = () => {

  const location = useLocation()

  const [selected, setSelected] = useState('')

  return (
    <div className='lg:p-[60px_80px] p-[60px_0_80px]'>
      <Container fluid="xl">
        <Row>
          <Col lg={3} className="hidden lg:block">
            <div className="pr-[10%]">
              <Sidebar/>
            </div>
          </Col>
          <Col lg={9}>
            <div>
              <div >
                <Link to="/shop">
                  <img src="https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/catalog_banner1.jpg" alt="" />
                </Link>
              </div>

              <div className="flex items-center justify-between p-[40px_0]">
                <div >
                  <h1 className="text-4xl font-medium capitalize">{location.pathname.replace('/', '')}</h1>
                </div>

                <div className="relative cursor-pointer ">
                  <select name="" id="" className='p-[12px_25px] border text-[#767676] outline-none  cursor-pointer appearance-none'>
                    {sortValue.map((value, i) => {
                      return <option value={value.name} key={i} defaultValue={value.isDefault}>{value.name}</option>
                    })}
                  </select>
                  <RiArrowDownSLine className="absolute top-[50%] right-[15px] translate-y-[-50%]"/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt">
                    
        </Row>
      </Container>
    </div>
  )
}

export default Shop