import Header from './component/Header';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import Home from './component/Home';
import Cart from './component/Cart';




function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route exact path="/" element= {<Home/>} />
      <Route exact path="/products" element= {<ProductList/>} />
      <Route exact path="/products/:id" element= {<ProductDetail/>} />
      <Route exact path="/carts" element= {<Cart/>} />

      <Route> 404 Not Fount </Route>
      </Routes>
    </>
  );
}

export default App;
