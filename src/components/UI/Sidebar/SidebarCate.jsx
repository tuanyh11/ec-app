import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const initCateitem = {
  name: '',
  id: '',
  parentId: null,
  products: {
    nodes: [],
  },
  onToggle: () => {},
  toggle: null,
};

const SidebarItem = ({
  item = initCateitem,
  childrens = [],
  type = 'root',
  onToggle = () => {},
  toggle = null,
  handleCheckbox,
  defaultChecked = [], 
}) => {
  return (
    <div className={`first:pt-0  `}>
      <div
        className={`${
          type === 'root' ? ' mt-4 ' : 'ml-2'
        } flex justify-between`}
      >
        <div className="flex items-center checkbox-container">
          <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.checked, item.name)} checked={defaultChecked.includes(item.name)} className=" mr-3 cursor-pointer w-20 h-8 absolute bg-transparent opacity-0" id={item.id}/>
          <span className=" before:w-5 before:content-['']  before:h-5  before:border  before:block before:bg-[#e2e2e2] mr-3 cursor-pointer"></span>
          <label htmlFor={item.id} className="text-lg text-[#767676] cursor-pointer before:content-['']">{item.name}</label>
          <p className="ml-1 font-normal text-sm text-[#767676]">{`(${item.products.nodes.length})`}</p>
        </div>
        {type === 'root' && (
          <div onClick={() => onToggle(item.name)} className="p-2 cursor-pointer">
            <RiArrowDownSLine
              className={`${
                toggle ? 'rotate-[360deg]' : 'rotate-[180deg] '
              } transition-all duration-[300ms] ease  mr-[1px] w-5 h-5 text-[#767676] `}
            />
          </div>
        )}
      </div>
      <div
        className={` relative transition-all duration-[300ms] ease  overflow-auto category-scrollbar ${
          toggle ? 'max-h-[100vh]' : 'max-h-[0]'
        }`}
      >
        {childrens &&
          childrens.map((item, index) => (
            <div key={item.id} className="mt-[10px]">
              <SidebarItem item={item} type="children"  handleCheckbox={handleCheckbox} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarItem;
