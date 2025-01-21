import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/cart';
import Homee from './pages/home/Home';
import Search from './pages/search/search';
import Order from './pages/order/order';
import WelcomePage from './components/welcome';



function App() {
  return (
   <div>
  <Routes>
    <Route path='/' element={<WelcomePage/>}></Route>
  <Route path='/home' element={<Homee/>}> </Route>
    <Route path='/cart' element={<Cart/>}> </Route>
    <Route path='/search' element={<Search/>}></Route>
    <Route path='/order' element={<Order/>}></Route>
  </Routes>
   </div>
  );
}

export default App;
