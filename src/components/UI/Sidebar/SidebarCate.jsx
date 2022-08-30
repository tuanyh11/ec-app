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
}) => {
  return (
    <div className={`first:pt-0  `}>
      <div
        className={`${
          type === 'root' ? ' mt-4 ' : 'ml-2'
        } flex justify-between`}
      >
        <div className="flex items-center">
          <input type="checkbox" className="mr-[14px]" />
          <p className="capitalize font-medium text-[#767676]">{item.name}</p>
          <p className="ml-1 font-normal text-sm text-[#767676]">{`(${item.products.nodes.length})`}</p>
        </div>
        {type === 'root' && (
          <div onClick={() => onToggle(item.id)} className="p-2 cursor-pointer">
            <RiArrowDownSLine
              className={`${
                toggle ? 'rotate-[360deg]' : 'rotate-[180deg] '
              } transition-all duration-300 ease mr-[1px] w-5 h-5 text-[#767676] `}
            />
          </div>
        )}
      </div>
      <div
        className={` relative transition-all duration-300 ease ${
          toggle ? 'max-h-[100vh]' : 'max-h-[0]'
        }`}
      >
        {childrens &&
          childrens.map((item) => (
            <div key={item.id} className="mt-[10px]">
              <SidebarItem item={item} type="children" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarItem;
