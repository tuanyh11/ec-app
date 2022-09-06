import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProducts,
  fetchAllCategories,
  fetchAllDiscountBanner,
  fetchAllBanner,
  fetchLasetReviews,
  setFliterCategories,
  fetchAllAttributes
} from '../slice/dataSilce';
import {
  toggleLayer,
  addToCart,
  removeFromCart,
  toggleConfirm,
  handleQuantity
} from '../slice/cartSlice'

import {
  fetchAsyncAllPolicy
} from '../slice/policySlice'

export const useDataSlice = () => {
  const dispatch = useDispatch();
  const actions = {
    fetchAllProducts,
    fetchAllCategories,
    fetchAllDiscountBanner,
    fetchAllBanner,
    fetchLasetReviews,
    setFliterCategories,
    fetchAllAttributes,
    addToCart,
  };
  const homedata = useSelector((state) => state);
  return [ homedata.data, actions,dispatch];
};

export const useCartSlice = () => {
  const dispatch = useDispatch();
  const actions = {
    toggleLayer,
    addToCart,
    removeFromCart,
    toggleConfirm,
    handleQuantity
  };
  const cartData = useSelector((state) => state.persistedData.cart);
  return [cartData, actions, dispatch];
}

export const usePolicy = () => {
  const dispatch = useDispatch()
  const actions = {
    fetchAsyncAllPolicy
  }

  const policy = useSelector(state => state.policy)
  return [policy, actions, dispatch]
}