import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/categories/ProductList';
import Landing from './components/hero/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import User from './components/user/User';
import Categories from './components/categories/Categories';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user" element={<User />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
