import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { RiArrowDownSLine } from 'react-icons/ri';
import SidebarCate from './SidebarCate';

const Category = {
  data: {
    name: 'Category',
    productCategories: {
      nodes: [
        {
          name: 'Clothing',
          id: 'dGVybToxOQ=2=',
          parentId: 'dGVybToyNw==',
          products: {
            nodes: [
              {
                id: 'cHJvZHVjdDoxMDk=',
              },
              {
                id: 'cHJvZHVjdDo2OQ==',
              },
            ],
          },
        },
        {
          name: 'Clothing',
          id: 'dGVybToxOQ==',
          parentId: 'dGVybToyNw==',
          products: {
            nodes: [
              {
                id: 'cHJvZHVjdDoxMDk=',
              },
              {
                id: 'cHJvZHVjdDo2OQ==',
              },
            ],
          },
        },
        {
          name: 'coats',
          id: 'dGVybTozMQ==',
          parentId: 'dGVybToyNw==',
          products: {
            nodes: [
              {
                id: 'cHJvZHVjdDoxMDk=',
              },
              {
                id: 'cHJvZHVjdDo2OQ==',
              },
              {
                id: 'cHJvZHVjdDo0OA==',
              },
            ],
          },
        },
        {
          name: 'hoodie',
          id: 'dGVybTozMg==',
          parentId: 'dGVybToyNw==',
          products: {
            nodes: [
              {
                id: 'cHJvZHVjdDoxMDk=',
              },
              {
                id: 'cHJvZHVjdDo2OQ==',
              },
              {
                id: 'cHJvZHVjdDo0OA==',
              },
            ],
          },
        },
        {
          name: 'kids',
          id: 'dGVybToyNw==',
          parentId: null,
          products: {
            nodes: [
              {
                id: 'cHJvZHVjdDoxMDk=',
              },
              {
                id: 'cHJvZHVjdDo2OQ==',
              },
              {
                id: 'cHJvZHVjdDo0OA==',
              },
            ],
          },
        },
        {
          name: 'Tshirts',
          id: 'dGVybToyMA==',
          parentId: 'dGVybToxOQ==',
          products: {
            nodes: [
              {
                id: 'cHJvZHVjdDo2OQ==',
              },
            ],
          },
        },
      ],
    },
  },
  extensions: {
    debug: [],
  },
};

const attributes = [
  {
    name: 'season',
    allValue: {
      nodes: [
        {
          name: 'Spring & Autumn',
          id: 'dGVybTozNQ==',
        },
        {
          name: 'Summer',
          id: 'dGVybTozNg==',
        },
        {
          name: 'Winter',
          id: 'dGVybTozNw==',
        },
      ],
    },
  },

  {
    name: 'Size',
    allValue: {
      nodes: [
        {
          name: '10',
          id: 'dGVybTozOA==',
        },
        {
          name: '11',
          id: 'dGVybTozOQ==',
        },
        {
          name: '13',
          id: 'dGVybTo0MA==',
        },
        {
          name: '6',
          id: 'dGVybTo0MQ==',
        },
        {
          name: '7',
          id: 'dGVybTo0Mg==',
        },
        {
          name: '8',
          id: 'dGVybTo0Mw==',
        },
        {
          name: 'Large',
          id: 'dGVybToyNA==',
        },
        {
          name: 'Medium',
          id: 'dGVybToyNQ==',
        },
        {
          name: 'Small',
          id: 'dGVybToyNg==',
        },
      ],
    },
  },

  {
    name: 'Brand',
    allValue: {
      nodes: [
        {
          id: 'dGVybTo0NQ==',
          name: 'Adidas',
        },
        {
          id: 'dGVybTo0NA==',
          name: 'Alexander McQueen',
        },
        {
          id: 'dGVybTo0Ng==',
          name: 'Balenciaga',
        },
        {
          id: 'dGVybTo0Nw==',
          name: 'Balmain',
        },
        {
          id: 'dGVybTo0OA==',
          name: 'Burberry',
        },
        {
          id: 'dGVybTo0OQ==',
          name: 'Chloé',
        },
        {
          id: 'dGVybTo1MA==',
          name: 'Dsquared2',
        },
        {
          id: 'dGVybTo1MQ==',
          name: 'Givenchy',
        },
      ],
    },
  },
  {
    name: 'Price',
    allValue: {
      nodes: [
        {
          id: 'dGVybTo0NQ==',
          name: 'Adidas',
        },
        {
          id: 'dGVybTo0NA==',
          name: 'Alexander McQueen',
        },
        {
          id: 'dGVybTo0Ng==',
          name: 'Balenciaga',
        },
        {
          id: 'dGVybTo0Nw==',
          name: 'Balmain',
        },
        {
          id: 'dGVybTo0OA==',
          name: 'Burberry',
        },
        {
          id: 'dGVybTo0OQ==',
          name: 'Chloé',
        },
        {
          id: 'dGVybTo1MA==',
          name: 'Dsquared2',
        },
        {
          id: 'dGVybTo1MQ==',
          name: 'Givenchy',
        },
      ],
    },
  },
];




const Sidebar = () => {
  const rootCategory = Category.data.productCategories.nodes.filter(
    (item) => item.parentId === null
  );

  // const attributesData = attributes.map((item) => item)

  const [toggleCate, setToggleCate] = useState({
    toggleRoot: false,
    toggleChildren: [],
  });

  const getChilCategory = (id) => {
    return Category.data.productCategories.nodes.filter(
      (item) => item.parentId === id
    );
  };

  const handleToggleCate = (id, type) => {
    console.log(id)
    const toggleItem = toggleCate.toggleChildren.includes(id)
      ? toggleCate.toggleChildren.filter((item) => item !== id)
      : [...toggleCate.toggleChildren, id];
    setToggleCate({ ...toggleCate, toggleChildren: toggleItem });
  };

  const getRootAttributes = () => {
    attributes.map((item) => {
      
    })
  }

  return (
    <div>
      <div>
        <Dropdown
          title={Category.data.name}
          childrens={rootCategory}
          onToggle={() =>
            setToggleCate((pre) => ({
              ...pre,
              toggleRoot: !toggleCate.toggleRoot,
            }))
          }
          toggle={toggleCate.toggleRoot}
          renderBody={(item, index) => (
            <SidebarCate
              key={index}
              toggle={toggleCate.toggleChildren.includes(item.id)}
              item={item}
              childrens={getChilCategory(item.id)}
              onToggle={handleToggleCate}
            />
          )}
          style={{
            container:
              'pb-[5px] border-b-[1px] border-[#e2e2e2] border-solid mb-[35px]',
            containerHeader: 'flex item-center justify-between items-center',
            title: 'capitalize font-medium text-lg',
            icon: 'rotate-[180deg]',
            menu: 'overflow-hidden',
          }}
        />
      </div>
      {attributes.map((item, index) => {
        return (
          <div key={index}>
            <Dropdown
              title={item.name}
              childrens={item.allValue.nodes}
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
