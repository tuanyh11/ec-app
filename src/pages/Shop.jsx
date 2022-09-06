import React, { useState, useEffect } from 'react';
import { Loading, Sidebar } from '../components/';
import { Container, Row, Col } from 'reactstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';
import { CardProduct } from '../components';
import {
  useProductsSlice,
  useCategoriesSlice,
  useAttributesSlice,
} from '../Features/hooks';
import currency from 'currency.js';

const sortValue = [
  {
    name: 'Default sorting',
    isDefault: true,
  },
  {
    name: 'Sort by popularity',
    isDefault: false,
  },
  {
    name: 'Sort by average rating',
    isDefault: false,
  },
  {
    name: 'Sort by lastest',
    isDefault: false,
  },
];

const Shop = () => {

  const location = useLocation();
  const defaultSelectedCate = location?.state?.url?.split('/') ? location?.state?.url?.split('/') : []
  const [selected, setSelected] = useState({
    categories: [],
    seasons: [],
    price: [],
    color: [],
    brands: [],
    size: [],
  });


  const [showProducts, setShowProducts] = useState([]);
  const [productData, productActs, dispatch] = useProductsSlice();
  const [cateData, cateActs] = useCategoriesSlice();
  const [attData, attActs] = useAttributesSlice();

  const isPending =
  productData.isPending || cateData.isPending || attData.isPending;
  const error = productData.error || cateData.error;


  useEffect(() => {
    dispatch(attActs.fetchAllAttributes());
    dispatch(cateActs.fetchAllCategories());
    dispatch(productActs.fetchAllProducts());
    setSelected({...selected, categories: [...defaultSelectedCate]})
  }, []);

  const categories = cateData.categories;
  const products = productData.productsFilter;
  const attributes = attData.attributes;

  const updateProducts = () => {
    let temp = products;
    if (selected.categories.length > 0) {
      temp = temp.filter((product) =>
        product.productCategories.nodes.some((item) =>
          selected.categories.includes(item.slug)
        )
      );
    }

    if (selected.size.length > 0) {
      temp = temp.filter((product) =>
        product.attributes?.nodes.some((attribute) =>
          attribute.options.some((item) => selected.size.includes(item))
        )
      );
    }

    if (selected.seasons.length > 0) {
      temp = temp.filter((product) =>
        product.attributes?.nodes.some((attribute) =>
          attribute.options.some((item) => selected.seasons.includes(item))
        )
      );
    }

    if (selected.color.length > 0) {
      temp = temp.filter((product) =>
        product.attributes?.nodes.some((attribute) =>
          attribute.options.some((item) => selected.color.includes(item))
        )
      );
    }

    if (selected.price.length > 0) {
      const ragePrice = selected.price
        .map((item) => item.split(/[*+-]/))
        .map((a) => a.map((item) => currency(item).value));
      temp = temp.filter((product) =>
        ragePrice.some((item) => {
          const fisrtIndex = item.findIndex((item) => true);
          const lastIndex = item.findLastIndex((item) => true);
          if (product.variations) {
            if (item[lastIndex] === 0)
              return product.variations.nodes.some(
                (a) => currency(a.price).value > item[fisrtIndex]
              );
            return product.variations.nodes.some(
              (a) =>
                currency(a.price).value >= item[fisrtIndex] &&
                currency(a.price).value <= item[lastIndex]
            );
          } else {
            if (item[lastIndex] === 0)
              return currency(product.price).value > item[fisrtIndex];
            return (
              currency(product.price).value >= item[fisrtIndex] &&
              currency(product.price).value <= item[lastIndex]
            );
          }
        })
      );
    }
    setShowProducts(temp);
  };
  // item.options.some(option => selected.categories.includes(option) )
  useEffect(() => {
    updateProducts();
  }, [selected, products]);

  // useEffect(() => {
  //   if (id)
  //     setSelected({
  //       ...selected,
  //       categories: [...selected.categories.filter((cate) => cate === id), id],
  //     });
  // }, [id]);


  if (error) return <div>{error}</div>;
  return (
    <div className="lg:p-[60px_80px] p-[60px_0_80px]">
      {isPending ? (
        <div className="flex justify-center"><Loading/></div>
      ) : (
        <Container fluid="xl">
          <Row>
            <Col lg={3} className="hidden lg:block">
              <div className="pr-[10%]">
                <Sidebar
                  categories={categories}
                  setSelected={setSelected}
                  selected={selected}
                  attributes={attributes}
                />
              </div>
            </Col>
            <Col lg={9}>
              <div>
                <div>
                  <Link to="/shop">
                    <img
                      src="https://demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/catalog_banner1.jpg"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="flex items-center justify-between p-[40px_0]">
                  <div>
                    <h1 className="text-4xl font-medium capitalize">
                      {location.pathname.replaceAll('/', ' ')}
                    </h1>
                  </div>

                  <div className="relative cursor-pointer ">
                    <select
                      name=""
                      id=""
                      onChange={(e) => dispatch(productActs.filterProduct(e.target.value))}
                      className="p-[12px_46px] text-lg border text-[#767676] outline-none  cursor-pointer appearance-none"
                    >
                      {sortValue.map((value, i) => {
                        return (
                          <option
                            value={value.name}
                            key={i}
                            defaultValue={value.isDefault}
                            
                          >
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
                    <RiArrowDownSLine className="absolute top-[50%] right-[15px] translate-y-[-50%]" />
                  </div>
                </div>

                <div>
                  <Row>
                    {showProducts?.map((item) => (
                      <Col lg={3} md={4} className="mb-[20px]" key={item.id}>
                        <CardProduct data={item} />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Shop;
