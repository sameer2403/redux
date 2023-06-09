import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCAkeContainer";
import IceCreamcontainer from "./components/IceCreamcontainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer />
        {/* we paas in cake as a prop, in mapStateToprop we check if that cake props was sent or not
        if it was sent we access state.numOfCakes in which case our ItemCONTAINER  BEHAVES like the 
        cake container
        else iceCream container */}
        <ItemContainer cake />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamcontainer />
        <NewCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
