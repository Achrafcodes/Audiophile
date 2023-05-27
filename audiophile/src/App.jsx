import { Provider } from "react";
import store from "./redux/store";

const App = function(){
  return(
    <Provider store={store}></Provider>

  )
}
export default App
