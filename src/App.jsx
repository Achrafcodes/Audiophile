import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Hero from './components/Hero';
import Item from './Item';
function App() {
  return (
    <Provider store={store}>
      <Item id={1} />
      <Item id={12} />
    </Provider>
  );
}

export default App;
