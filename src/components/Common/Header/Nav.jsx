import React from 'react'
import { Link } from 'react-router-dom';


const Nav = ({data}) => {
  return (
    <nav className="h-full hidden lg:block">
        <ul className="flex header-nav  h-full items-center ">
        {data.map((item, i) => (
            <li
            key={i}
            className="p-[8px_17px] first:pl-0 last:pr-0 group header-nav_item hover:text-primary"
            >
            <Link
                className=' capitalize text-base font-medium relative  
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
  )
}

export default Nav