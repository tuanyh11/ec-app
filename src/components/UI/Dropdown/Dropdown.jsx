import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Dropdown = ({
  root = [],
  title,
  type = 'root',
  level = 2,
  index = 0,
  toggle = [],
  onToggle = () => {},
  childrens = [],
  addHeader = null,
  configChildrenItem = null,
}) => {
   

   
  return (
    <div className="pb-[17px] border-b-[1px] border-solid border-[#444] mb-[21px] ">
      {addHeader ? (
        addHeader()
      ) : (
        <div className="flex items-center  justify-between">
          <h2 className="uppercase text-[13px] font-medium">{title}</h2>
          {type === 'root' && <RiArrowDownSLine onClick={() => onToggle(index)} className={`${toggle.includes(index) ? 'rotate-[180deg]' :'' } transition-all w-6 h-6`} />}
        </div>
      )}

      {/* menu */}
      {level === 2 && childrens.length > 0 ? (
        <div className={`transition-all duration-[500ms] ease-in overflow-auto  ${toggle.includes(index) ? 'max-h-[10rem] mt-4': 'max-h-0 ' }`}>
          {configChildrenItem &&
            childrens.map((items, index) => configChildrenItem({...items, onToggle, toggle}, index))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
