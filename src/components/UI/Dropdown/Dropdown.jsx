import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Dropdown = ({
  root = [],
  title,
  type = 'root',
  level = 2,
  index = 0,
  toggle = null,
  onToggle = () => {},
  childrens = [],
  renderHeader = null,
  renderBody = null,
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
              style.title ? style.title : 'uppercase text-[13px] font-medium'
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
          className={`transition-all duration-[300ms] ease  overflow-auto  ${
            toggle ? 'max-h-[100vh] ' : 'max-h-0 '
          } ${style.menu}`}
        >
          {renderBody &&
            childrens.map((items, index) =>
              renderBody({ ...items, onToggle, toggle }, index)
            )}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
