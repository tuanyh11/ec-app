import { useDispatch, useSelector } from 'react-redux';
import { fetchLasetReviews } from '../slice/reviewsSilce';
import { fetchAllAttributes } from '../slice/attributesSlice';
import { fetchAllCategories } from '../slice/categoriesSlice';
import { fetchAllProducts, filterProductByCate, filterProduct } from '../slice/productsSlice';
import { fetchAllBanner, fetchAllDiscountBanner } from '../slice/bannerSlice';
import { fetchAsyncAllPages} from '../slice/headerSlice';
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

export const useReviewSlice = () => {
  const dispatch = useDispatch();
  const actions = {
    fetchLasetReviews,
  };
  const reviewData = useSelector((state) => state);
  return [ reviewData.reviews, actions,dispatch];
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

export const useAttributesSlice  = () => {
  const dispatch = useDispatch()
  const actions = {
    fetchAllAttributes
  }

  const attributes = useSelector(state => state.attributes)
  return [attributes, actions, dispatch]
}

export const useBannerSlice  = () => {
  const dispatch = useDispatch()
  const actions = {
    fetchAllBanner,
    fetchAllDiscountBanner
  }

  const banner = useSelector(state => state.banner)
  return [banner, actions, dispatch]
}

export const useCategoriesSlice  = () => {
  const dispatch = useDispatch()
  const actions = {
    fetchAllCategories
  }

  const categories = useSelector(state => state.categories)
  return [categories, actions, dispatch]
}


export const useProductsSlice  = () => {
  const dispatch = useDispatch()
  const actions = {
    fetchAllProducts,
    filterProductByCate,
    filterProduct
  }

  const products = useSelector(state => state.products)
  return [products, actions, dispatch]
}

export const usePolicySlice  = () => {
  const dispatch = useDispatch()
  const actions = {
    fetchAsyncAllPolicy
  }

  const policy = useSelector(state => state.policy)
  return [policy, actions, dispatch]
}

export const useHeaderSlice  = () => {
  const dispatch = useDispatch()
  const actions = {
    fetchAsyncAllPages
  }

  const headers = useSelector(state => state.headers)
  return [headers, actions, dispatch]
}


