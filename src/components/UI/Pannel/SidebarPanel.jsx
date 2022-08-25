import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';

const Topic = ({
  value,
  topics,
  pathName,
  className,
  isLast = false,
  isChir,
  active = false,
  style
}) => {
  const getSubTopic = (sub) => {
    if (sub.subTopic) return sub.subTopic;
    return [];
  };


  return (
    <div className={style?.container}>
      <div className={`${className} ${active === pathName ? '!text-primary': ''} `}>
        <Link
          className={`flex-1 mr-4 text-start ${isLast ? '!ml-4' : ''}  ${
            isChir ? 'text-xl capitalize' : 'text-2xl'
          } `}
          to={pathName}
        >
          {' '}
          {value}
        </Link>
        {!isLast && <RiArrowDownSLine className={'w-[26px] h-[26px]'} />}
      </div>
      {topics.map((sub, i) => (
        <Topic
          className={`${className}  overflow-hidden ml-2  `}
          style={{container: 'max-h-0 overflow-hidden '}}
          isChir={true}
          key={i}
          value={sub.name}
          topics={getSubTopic(sub)}
          isLast={getSubTopic(sub).length === 0}
          pathName=""
        />
      ))}
    </div>
  );
};

const SidebarPanel = ({ data = [] }) => {

  const location = useLocation()


  
  return (
    <div className="pt-[60px] pr-[30px] pl-[30px]">
      <div>
        <div className="flex flex-col ">
          {data.map((page, i) => {
            return (
              <Topic
                key={i}
                className="flex items-center justify-between mb-[10px]"
                value={page.name}
                pathName={page.pathName}
                topics={page.topics}
                active={location.pathname}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SidebarPanel;
