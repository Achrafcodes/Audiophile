import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Item from './Item';
import Landing from './components/hero/Landing';
import NavBar from './components/layouts/NavBar';
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Landing />
    </Provider>
  );
}

export default App;
