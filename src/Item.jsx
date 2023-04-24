import { useSelector } from 'react-redux';
import { selectItemById } from './redux/ProductSlice';
function ProductDetails({ id }) {
  const item = useSelector(state => selectItemById(state, id));

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img src={item.image} alt={item.name} />
    </div>
  );
}

export default ProductDetails;
