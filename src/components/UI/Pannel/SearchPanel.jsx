import { data } from 'autoprefixer'
import { Children, useState } from 'react'
import { RiArrowDownSLine, RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'uy3jbhs',
    parentId: null,
    name: 'kids',
  },
  {
    id: 'uy3jbhx',
    parentId: 'uy3jbhs',
    name: 'coat',
  },
  {
    id: 'uy3jbgb',
    parentId: 'uy3jbhs',
    name: 'hoodi',
  },
  {
    id: 'uy3jbhxs',
    parentId: null,
    name: 'womens',
  },
  {
    id: 'uy3jbxx',
    parentId: 'uy3jbhs',
    name: 'Hats',
  },
  {
    id: 'uy3jb24',
    parentId: 'uy3jbhxs',
    name: 'shoes',
  },
  {
    id: 'uy3jbhxs2',
    parentId: null,
    name: 'mens',
  },
  
]

const quickLinks = [
  {
    path: '/',
    name: 'Bag with Flap'
  },
  {
    path: '/',
    name: 'Travel Large Trifold Wallet'
  },
  {
    path: '/',
    name: 'Floral Dress Reserved'
  },
  {
    path: '/',
    name: 'Geometric print Scarf'
  },
  {
    path: '/',
    name: 'Polarised Sunglasses'
  },
  {
    path: '/',
    name: 'Travel Large Trifold Wallet'
  }
]

const SearchPanel = () => {
  const [text, setText] = useState('All Categories')

  const [openSelect, setOpenselect] = useState(false)

  const handleSetValue = (text) => {
    setText(text)
    setOpenselect(false)
  }


  
  const rootCategories = categories.filter((item) => item.parentId === null)

  const getChilCategory = (id) => {
    return categories.filter((item) => item.parentId === id)
  }
  
  
  const Category = ({data, childrenCate, handleSelect, isChir}) => {
    return <div value={data.name} onClick={(e) => {e.stopPropagation(); handleSelect(data.name)}}  className={` cursor-pointer ${!isChir ? 'text-start capitalize text-slate-900': 'block ml-[15px]'}`}>
      {data.name}
      {childrenCate.map((item) => 
        <Category handleSelect={handleSelect} key={item.id} data={item} childrenCate={[]} isChir={true}  />
      )}
    </div>
  }

  return (
    <div className='p-[30px]'>
      <form action="">
        <div>

          {/* select opition */}
          <div className='mb-[20px]'>
            <div onClick={() => setOpenselect(!openSelect)} className='cursor-pointer p-[12px_25px] flex items-center justify-between border border-solid min-h-[42px] text-base' >
              <h1 className=' text-gray-600 leading-7' >{text}</h1>
              <RiArrowDownSLine className={`${openSelect ? "rotate-[180deg]" : ''} transition w-[20px] h-[20px] text-gray-600`} />
            </div>
            <div className={`p-[0_25px] border-[#1111] !border-t-[0px] border border-solid  overflow-y-scroll transition-all duration-300 ease ${openSelect ? 'max-h-[460px]' : 'max-h-[0]'} `}>
              <div onClick={() => handleSetValue('All Categories')}  className='text-start cursor-pointer'>
                All Categoris
              </div>
              {rootCategories.map((item) => (
                <Category key={item.id} data={item} handleSelect={handleSetValue}   childrenCate={getChilCategory(item.id)}/>
              ))}
            </div>
          </div>
          {/* end select option */}
            
            {/* input search */}
          <div className='flex items-center border relative'>
            <input type="text" className="text-sm h-[54px] pr-[42px] p-[12px_25px] w-full outline-0 " placeholder='Search here'  />
            <button className='absolute top-[50%] right-[25px]  translate-y-[-50%]'>
              <RiSearchLine className='w-[20px] h-[20px] text-gray-600'/>
            </button>
          </div>
          {/* end input search */}

          {/* quick link */}
          <div className='mt-[30px] '>
            <h1 className='border-t-[1px] p-[30px] m-[0_-30px] text-start text-sm font-semibold'>Quick Links</h1>
            <ul>
                {quickLinks.map((item, i) => (
                  <li className='text-start p-[7px_0] text-sm ' key={i}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))} 
            </ul>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchPanel