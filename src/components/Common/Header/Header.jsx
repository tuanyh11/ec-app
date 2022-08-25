import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  OffLayer,
  Pannel,
  AuthPanel,
  CartPanel,
  SearchPanel,
  SidebarPanel,
} from '../../';
import Nav from './Nav';
import {
  RiSearchLine,
  RiUser3Line,
  RiHeartLine,
  RiShoppingBagLine,
  RiMenuLine,
} from 'react-icons/ri';



const headerPage = [
  {
    name: 'Home',
    pathName: '/home',
    topics: [
      {
        name: 'topic1',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic2',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic3',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      }
      
    ]
  },
  {
    name: 'shop',
    pathName: '/shop',
    topics: [
      {
        name: 'topic1',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic2',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic3',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      }
      
    ]
  },
  {
    name: 'pages',
    pathName: '/',
    topics: [
      {
        name: 'topic1',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic2',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic3',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      }
      
    ]
  },
  {
    name: 'blog',
    pathName: '/',
    topics: [
      {
        name: 'topic1',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic2',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic3',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      }
      
    ]
  },
  {
    name: 'Features',
    pathName: '/',
    topics: [
      {
        name: 'topic1',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic2',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      },
      {
        name: 'topic3',
        subTopic: [
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          },
          {
            name: 'Home v1 - Minimal'
          }
        ]
      }
      
    ]
  },
];

const cartData = [
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
  {
    imageUrl:
      'https://i0.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/w41.jpg?resize=130%2C156&ssl=1',
    name: 'Wide Cotton Tunic',
    price: '$250.00',
    quantity: 3,
  },
];

const cartQuantity = 3;
const wishlistQuantity = 4;

const headerActions = [
  {
    icon: <RiSearchLine className="w-[19px] h-[19px]" />,
    pathName: null,
    title: 'Search Products',
  },
  {
    icon: <RiUser3Line className="w-[19px] h-[19px]" />,
    pathName: null,
    title: 'Sign in',
  },
  {
    icon: <RiHeartLine className="w-[19px] h-[19px]" />,
    pathName: '/wishlist',
    title: null,
  },
  {
    icon: <RiShoppingBagLine className="w-[19px] h-[19px]" />,
    pathName: null,
    title: 'Your Cart',
  },
];

function Header() {
  
  const [selectPanel, setSelectPanel] = useState('');
  const [isTurnOn, setIsTurnOn] = useState(false);
  const [pages, setPages] = useState([])

  useEffect(() => {

    const getPages = async() => {
      try {
        const pages = await axios.get('http://localhost/wordpress/graphql', {
          query: QUERY
        })
        console.log(pages)
      } catch (error) {
        console.log(error)
      }
    }
    getPages()
    console.log(pages)
 
  }, [])
  console.log(12323)

  const handleSelectPanel = (title) => {
    setIsTurnOn(true);
    setSelectPanel(title);
  };

  return (
    <div className="h-[90px] flex items-center">
      {isTurnOn && (
        <OffLayer  >
          {selectPanel === 'Search Products' && (
            <Pannel
              handleClosePanel={() => setIsTurnOn(false)}
              isTurnOn={isTurnOn}
              {...selectPanel}
              title={selectPanel}
            >
              <SearchPanel />
            </Pannel>
          )}

          {selectPanel === 'Sign in' && (
            <Pannel
              handleClosePanel={() => setIsTurnOn(false)}
              isTurnOn={isTurnOn}
              {...selectPanel}
              title={selectPanel}
            >
              <AuthPanel title={selectPanel} />
            </Pannel>
          )}

          {selectPanel === 'Your Cart' && (
            <Pannel
              handleClosePanel={() => setIsTurnOn(false)}
              isTurnOn={isTurnOn}
              {...selectPanel}
              title={selectPanel}
            >
              <CartPanel title={selectPanel} data={cartData} />
            </Pannel>
          )}

          {selectPanel === 'nav' && (
            <Pannel
              handleClosePanel={() => setIsTurnOn(false)}
              isTurnOn={isTurnOn}
              {...selectPanel}
              title={'Razzi.'} 
              style={{heading: '!text-3xl !font-bold !text-[#111111]', container: 'panel h-full absolute top-0 left-0 max-w-full transition-[transform]  ease-in duration-300 w-[470px] bg-white z-[999999999]'}}
            >
              <SidebarPanel  data={headerPage} />
            </Pannel>
          )}
        </OffLayer>
      )}

      <Container fluid="xl" className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* nav tablet mobile */}
          <button className="lg:hidden" onClick={() => handleSelectPanel('nav')}>
            <RiMenuLine className="w-[20px] h-[20px]" />
          </button>
          {/* end  nav tablet mobile*/}

          {/* logo */}
          <div>
            <Link className="text-3xl !font-bold text-[#111111]" to="/">
              Razzi.
            </Link>
          </div>
          <Nav data={headerPage} />

          {/* header actions */}
          <div>
            <ul className="flex">
              {headerActions.map((item, i) => {
                const { icon, title, pathName } = item;
                if (title)
                  return (
                    <li
                      onClick={() => handleSelectPanel(title)}
                      key={i}
                      className={`p-[0_10px] cursor-pointer relative ${
                        title === 'Your Cart' ? 'block' : 'lg:block hidden'
                      }`}
                    >
                      {icon}
                      {title === 'Your Cart' && (
                        <span className="absolute top-[-10px] right-[-4px] min-w-[18px] h-[18px] !bg-primary rounded-[50%] text-white text-xs  flex items-center justify-center !text-center">
                          {' '}
                          {cartQuantity}
                        </span>
                      )}
                    </li>
                  );
                else
                  return (
                    <li key={i} className="p-[0_10px] cursor-pointer relative">
                      <Link to={pathName}>
                        {icon}
                        {pathName === '/wishlist' && (
                          <span className="absolute top-[-10px] right-[-4px] min-w-[18px] h-[18px] !bg-primary rounded-[50%] text-white text-xs  flex items-center justify-center !text-center">
                            {' '}
                            {wishlistQuantity}
                          </span>
                        )}
                      </Link>
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
