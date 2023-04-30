import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Item from './Item';
import Landing from './components/hero/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import User from './components/user/User';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
