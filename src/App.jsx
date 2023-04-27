import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Item from './Item';
import Landing from './components/hero/Landing';
import NavBar from './components/layouts/NavBar';
import Login from './components/Login/Login';
function App() {
  return (
    <Provider store={store}>
      <NavBar />

      <Login className="hidden" />
      <Landing />
    </Provider>
  );
}

export default App;
