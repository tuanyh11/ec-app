import {useState, useEffect} from 'react';
import { Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import {OffLayer, Pannel} from '../'
import axios from 'axios';
import {
  RiSearchLine,
  RiUser3Line,
  RiHeartLine,
  RiShoppingBagLine,
} from 'react-icons/ri';

const headerPage = [
  {
    name: 'Home',
    pathName: '/',
  },
  {
    name: 'shop',
    pathName: '/',
  },
  {
    name: 'pages',
    pathName: '/',
  },
  {
    name: 'blog',
    pathName: '/',
  },
  {
    name: 'Features',
    pathName: '/',
  },
];

const cartQuantity = 3
const wishlistQuantity = 4

const headerActions = [
  {
    icon: <RiSearchLine className="w-[19px] h-[19px]" />,
    pathName: null,
    title: 'Search Products',
    action: 'search'
  },
  {
    icon: <RiUser3Line className="w-[19px] h-[19px]" />,
    pathName: null,
    title: 'Sign in',
    action: 'auth'
  },
  {
    icon: <RiHeartLine className="w-[19px] h-[19px]" />,
    pathName: 'wishlist',
    title: '',
    action: 'wishlist'
  },
  {
    icon: <RiShoppingBagLine className="w-[19px] h-[19px]" />,
    pathName: 'cart',
    title: 'Your Cart',
    name: 'cart',
    action: 'cart'
  },
];

function Header() {


  const [selectPanel, setSelectPanel] = useState({})
  const [isTurnOn, setIsTurnOn] = useState(false)

  const handleSelectPanel = (title, action) => {
    setIsTurnOn(true)
    setSelectPanel({title, action})
  }
// http://localhost/wordpress/graphql
  useEffect(() => {
    const getPages = async() => {
      try {
        const pages = await axios.get('http://localhost/wordpress/graphql', {
          query: `  query NewQuery {
            pages {
              nodes {
                title
                slug
              }
            }
          }`
        })
      } catch (error) {
        console.log(error)
      }
    }
    getPages()
  }, [])
  console.log(12323)

  return (
    <div className="h-[90px] flex items-center">
      <OffLayer isTurnOn={isTurnOn}><Pannel handleClosePanel={() => setIsTurnOn(false)} isTurnOn={isTurnOn} {...selectPanel}  /></OffLayer>
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* logo */}
          <div>
            <Link className="text-3xl font-bold text-[#111111]" to="/">
              Razzi.
            </Link>
          </div>
          {/* end logo */}

          {/* header nav */}
          <nav className="h-full">
            <ul className="flex header-nav  h-full items-center ">
              {headerPage.map((item, i) => (
                <li
                  key={i}
                  className="p-[8px_17px] first:pl-0 last:pr-0 group header-nav_item hover:text-primary"
                >
                  <Link
                    className=' capitalize text-[15px] font-medium relative  
                  transition-all duration-500 ease-out after:content-[""] after:absolute after:h-[1px]
                after:bg-primary after:left-0  after:right-0 after:bottom-[-2px] after:w-0 after:opacity-0 after:ease after:transition-all after:duration-500 '
                    to={item.pathName}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* end nav */}

          {/* header actions */}
          <div>
            <ul className="flex">
              {headerActions.map((item, i) => {
                const {icon, title, action, pathName} = item;
                return (
                  <li onClick={() => handleSelectPanel(title, action)} key={i} className="p-[0_10px] cursor-pointer relative">
                        {icon}
                        {pathName === 'cart' && <span className="absolute top-[-10px] right-[-4px] min-w-[18px] h-[18px] !bg-primary rounded-[50%] text-white text-xs  flex items-center justify-center !text-center"> {cartQuantity}</span>}
                        {pathName === 'wishlist' && <span className="absolute top-[-10px] right-[-4px] min-w-[18px] h-[18px] !bg-primary rounded-[50%] text-white text-xs  flex items-center justify-center !text-center"> {wishlistQuantity}</span>}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end header actions */}
        </div>
      </Container>
    </div>
  );
}

export default Header;
