import React from 'react';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import Topbar from '../Common/Topbar/Topbar';
import { OffLayer, ConfirmBox, CartLayer } from '../index';
import { useCartSlice } from '../../Features/hooks';
import { useDataSlice } from '../../Features/hooks';

const DefaultLayout = ({ children }) => {
  const [data, actions, dispatch] = useDataSlice();

  const [cartData, cartActions] = useCartSlice();
  return (
    <div>
      {cartData.isOpenLayer && (
        <OffLayer >
          <CartLayer
            data={cartData}
            toggleLayer={cartActions.toggleLayer}
            products={data.products}
            onDispatch={dispatch}
          />
        </OffLayer>
      )}
      {cartData.showConfirm && (
        <OffLayer levelLayer={'z-[99999999999999]'}>
          <ConfirmBox
            onConfirm={(value) => dispatch(cartActions.toggleConfirm(value))}
            confirmText={'Do You want remove it?'}
          />
        </OffLayer>
      )}

      <Topbar />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
