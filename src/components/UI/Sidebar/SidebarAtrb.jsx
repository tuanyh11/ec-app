import React from 'react';

const ArributeItem = ({ name, id, handleCheckbox }) => {
  return (
    <div className="text-start relative flex items-center checkbox-container">
      <input type="checkbox"  onChange={(e) => handleCheckbox(e.target.checked, name)} className="mr-3 cursor-pointer w-full h-full absolute bg-transparent opacity-0" id={id}/>
      <span className=" before:w-5 before:content-['']  before:h-5  before:border  before:block before:bg-[#e2e2e2] mr-3 cursor-pointer"></span>
      <label htmlFor={id} className="text-lg text-[#767676] cursor-pointer before:content-[''] capitalize">{name}</label>
    </div>
  );
};

const ArributeColourItem = ({ name, id, color, handleCheckbox}) => {
  return (
    <div className="text-start relative flex items-center checkbox-container color">
      <input type="checkbox" onChange={(e) => handleCheckbox(e.target.checked, name)} className="mr-3 cursor-pointer w-full h-full  absolute bg-transparent opacity-0" id={id}/>
      <span style={{background: color}} className=" before:w-6 before:content-[''] capitalize  before:h-6 before:block mr-3 cursor-pointer rounded-[50%]"></span>
      <label htmlFor={id} className="text-lg text-[#767676] cursor-pointer before:content-[''] capitalize">{name}</label>
    </div>
  )
}

const ArributeSizeItem = ({ name, id, color, handleCheckbox}) => {
  return (
    <div className=" relative flex items-center checkbox-container size text-center mr-3">
      <input type="checkbox" onChange={(e) => handleCheckbox(e.target.checked, name)} className=" cursor-pointer w-full h-full   absolute bg-transparent opacity-0" id={id}/>
      <label htmlFor={id} className=" text-lg text-[#767676] cursor-pointer capitalize before:content-[''] capitalize p-[8px_15px]  min-w-[48px] border">{name}</label>
    </div>
  )
}

const SidebarAtrb = ({ item, type = 'root', handleCheckbox }) => {
  return (
    <div className="mt-[24px]">
      <div>
        {type.toUpperCase() === 'SEASON' && <ArributeItem name={item.name} id={item.id} handleCheckbox={handleCheckbox}/>}
        {type.toUpperCase() === 'PRICE' && <ArributeItem name={item.name} id={item.id} handleCheckbox={handleCheckbox}/>}
        {type.toUpperCase() === 'COLOR' && <ArributeColourItem name={item.name} id={item.id} handleCheckbox={handleCheckbox} color={item.description}/>}
        {type.toUpperCase() === 'BRAND' && <ArributeItem name={item.name} id={item.id} handleCheckbox={handleCheckbox} color={item.description}/>}
        {type.toUpperCase() === 'SIZE' && <ArributeSizeItem name={item.name} id={item.id} handleCheckbox={handleCheckbox} color={item.description}/>}
      </div>
    </div>
  );
};

export default SidebarAtrb;
