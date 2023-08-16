import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import Cart from './components/cart';
import Home from './components/home';
import Navbar from './components/navbar';
import Product from './components/product';
import Contact from './components/contact' ;
import Products from './components/products';
import Wish from './components/wishList';

function App() {
  return (
        <div className="App">  
        <Navbar />    
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='products' element = {<Outlet />}>
                <Route path='' element  = { <Products />}/>
                <Route path='/products:id' element = {<Product />} />
            </Route>
            <Route path='/cart' element = {<Cart />} />
            <Route path='/contact' element = {<Contact />} />
            <Route path='/wish' element = {<Wish />} />
          </Routes>
    </div>

  );
}

export default App;
