import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { selectProduct } from './redux/ProductsSlice';

function Text({ id }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(selectProduct(id));
  });

  const selectedProduct = useSelector(state => state.products.selectedProduct);

  let imageName = selectProduct.image;
  console.log(imageName);
  return <div>{selectedProduct ? selectedProduct.name : 'nothing'}</div>;
}

export default Text;
