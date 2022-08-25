import React from 'react';
import Heading from './Heading';
import AuthPanel from './AuthPanel';
import WishlistPanel from './WishlistPanel';
import CartPanel from './CartPanel';
import SearchPanel from './SearchPanel';

const Pannel = ({
  title = '',
  action = '',
  handleClosePanel = () => {},
  isTurnOn = false,
  children,
  style,
}) => {
  return (
    <div
      className={
        style?.container
          ? style?.container
          : `panel h-full absolute top-0 right-0 max-w-full transition-[transform]  ease-in duration-300 w-[470px] bg-white z-[999999999]  ${
              isTurnOn ? '!transform-none' : 'translate-x-[100%]'
            }`
      }
    >
      <Heading title={title} className={style?.heading} handleClosePanel={handleClosePanel} />
      {children}
    </div>
  );
};

export default Pannel;
