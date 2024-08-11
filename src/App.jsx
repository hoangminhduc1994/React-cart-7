

import { useState } from "react";
import CartToggle from "./components/CartToggle";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import store from "./app/store";


const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Provider store={store}>
      <CartToggle toggleCart={toggleCart}/>
      <Cart isOpen={isCartOpen}/>
      <ProductList/>
    </Provider>
  );
};

export default App;
