import './App.css';
import { Provider } from 'react-redux';
import Text from './Text';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Text id={1} />
    </Provider>
  );
}

export default App;
