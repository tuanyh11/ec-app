import { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { RiArrowDownSLine } from 'react-icons/ri';
import SidebarCate from './SidebarCate';
import SidebarAtrb from './SidebarAtrb';
import { useParams} from 'react-router-dom'
import { InputSearch } from '../..';
import {useDataSlice} from '../../../Features/hooks'


const Sidebar = ({ categories, setSelected, attributes, selected }) => {
  const rootCategory = categories.filter((item) => item.parentId === null);

  // const attributesData = attributes.map((item) => item)

  const [data, actions] = useDataSlice()

  const [toggleCate, setToggleCate] = useState({
    toggleRoot: true,
    toggleChildren: [],
  }); 

  const {id} = useParams()

  const [toggleAttributes, setToggleAttributes] = useState([])

  const getChilCategory = (id) => {
    return categories.filter((item) => item.parentId === id);
  };

  const handleToggleCate = (slug, type) => {
    const toggleItem = toggleCate.toggleChildren.includes(slug)
      ? toggleCate.toggleChildren.filter((item) => item !== slug)
      : [...toggleCate.toggleChildren, slug];
    setToggleCate({ ...toggleCate, toggleChildren: toggleItem });
  };

  const handleCheckbox = (type, checked, value) => {
    console.log(value);
    if(checked) {
      switch (type.toUpperCase()) {
        case 'CATEGORIES':
          setSelected(pre => ({...pre, categories: [...pre.categories.filter(item => item !== value), value]}))
          break;

        case 'SEASON':
          setSelected(pre => ({...pre, seasons: [...pre.seasons, value]}))
          break;
        case 'PRICE':
          setSelected(pre => ({...pre, price: [...pre.price, value]}))
          break;

        case 'COLOR':
          setSelected(pre => ({...pre, color: [...pre.color, value]}))
          break; 

        case 'BRAND':
          setSelected(pre => ({...pre, brands: [...pre.brands, value]}))
          break;
        case 'SIZE':
          setSelected(pre => ({...pre, size: [...pre.size, value]}))
          break;           

        default:
          break;
      }
    } else {
      switch (type.toUpperCase()) {
        case 'CATEGORIES':
          setSelected(pre => ({...pre, categories: [...pre.categories.filter((item) => item !== value)]}))
          break;
        case 'SEASON':
          setSelected(pre => ({...pre, seasons: [...pre.seasons.filter((item) => item !== value)]}))
        break;
        case 'PRICE':
          setSelected(pre => ({...pre, price: [...pre.price.filter((item) => item !== value)]}))
          break;
        case 'COLOR':
          setSelected(pre => ({...pre, color: [...pre.color.filter((item) => item !== value)]}))
          break;
        case 'BRAND':
          setSelected(pre => ({...pre, brands: [...pre.brands.filter((item) => item !== value)]}))
          break;
        case 'SIZE':
          setSelected(pre => ({...pre, size: [...pre.size.filter((item) => item !== value)]}))
          break;       
        default:
          break;
      }
    }
  }

  useEffect(() => {
    setToggleAttributes([...toggleAttributes, ...data.attributes.map(att => att?.name)])
  }, [data.attributes])

  const handleToggleAttribute = (value) => {
    const temp = toggleAttributes.includes(value) ? toggleAttributes.filter(item => item !== value) : [...toggleAttributes, value]
    setToggleAttributes(temp)
  }

  useEffect(() => {
    if(id) setToggleCate({...toggleCate, toggleChildren: [...toggleCate.toggleChildren.filter((item) => item === id), id]})
  }, [id])

  const propsCateDropdown = {
    title: 'Categories',
    childrens: rootCategory,
    onToggle: () =>
      setToggleCate((pre) => ({
        ...pre,
        toggleRoot: !toggleCate.toggleRoot,
      })),
    toggle: toggleCate.toggleRoot,
    renderBody: (item, type, index) => (
      <SidebarCate
        key={index}
        handleCheckbox={(checked, value) => handleCheckbox( type, checked, value)}
        toggle={toggleCate.toggleChildren.includes(item.slug)}
        item={item}
        childrens={getChilCategory(item.id)}
        onToggle={handleToggleCate}
        defaultChecked={selected.categories}
      />
    ),
    style: {
      container:
        'pb-[5px] border-b-[1px] border-[#e2e2e2] border-solid mb-[35px]',
      containerHeader: 'flex item-center justify-between items-center',
      title: 'capitalize font-medium text-lg',
      icon: 'rotate-[180deg]',
      menu: 'overflow-hidden',
    },
  };

  return (
    <div>
      <div>
        <Dropdown {...propsCateDropdown}/>
      </div>
      {attributes.map((attribute, index) => {
        return (
          <div key={attribute.id}>
            <Dropdown
              title={attribute.name}
              childrens={attribute.attributes}
              renderBody={(item, type, index) => 
                <SidebarAtrb 
                  handleCheckbox={(checked, value) => handleCheckbox(type, checked, value)}
                  item={item} 
                  key={item.id} 
                  type={type}
                />
              }
              onToggle={() => handleToggleAttribute(attribute.name)}
              toggle={toggleAttributes.includes(attribute.name)}
              headerMenu={attribute.name.toUpperCase() === 'BRAND' ? () => <div className='mt-[35px] mb-[30px]'><InputSearch placeholder={'Search product brands'}/></div> : null}
              style={{
                container:
                  'pb-[5px] border-b-[1px] border-[#e2e2e2] border-solid mb-[35px]',
                containerHeader:
                  'flex item-center justify-between items-center',
                title: 'capitalize font-medium text-lg',
                icon: 'rotate-[180deg]',
              }}

            />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
