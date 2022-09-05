import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Dropdown = ({
  title,
  type = 'root',
  level = 2,
  index = 0,
  toggle,
  onToggle = () => {},
  childrens = [],
  renderHeader,
  renderBody,
  headerMenu,
  style = {
    container: '',
    containerHeader: '',
    title: '',
    icon: '',
    menu: '',
  },
}) => {
  return (
    <div
      className={`${
        style.container
          ? style.container
          : 'pb-[17px] border-b-[1px] border-solid border-[#444] mb-[21px]'
      }`}
    >
      
      {renderHeader ? (
        renderHeader()
      ) : (
        <div
          className={`${
            style.containerHeader
              ? style.containerHeader
              : 'flex items-center  justify-between'
          }`}
        >
          <h2
            className={`${
              style.title ? style.title : 'uppercase text-[13px] font-medium '
            }`}
          >
            {title}
          </h2>
          
          {type === 'root' && (
            <div onClick={() => onToggle(index)} className="p-2 cursor-pointer">
              <RiArrowDownSLine
                className={`${toggle ? 'rotate-[180deg]' : 'rotate-[360deg]'} ${
                  style.icon
                } transition-all w-6 h-6`}
              />
            </div>
          )}
          
        </div>
        
      )}
      

      {/* menu */}
      {level === 2 && childrens.length > 0 ? (
        <div
          className={`transition-all duration-[300ms] ease  overflow-auto category-scrollbar ${toggle ? 'max-h-[100vh] ' : 'max-h-0 '} ${style.menu}`}
        >
          {headerMenu && <div>{headerMenu()}</div>}
          <div className={` overflow-y-auto category-scrollbar max-h-[100vh] ${title.toUpperCase() === 'SIZE' && 'flex overflow-visible flex-wrap'} ${title.toUpperCase() === 'BRAND' && 'max-h-[390px]'}`}>
            {renderBody &&
              childrens.map((items, index) =>
                renderBody({ ...items, onToggle, toggle },title , index)
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
