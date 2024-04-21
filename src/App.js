import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Addproduct from './components/AddProduct/Addproduct';
import BuyNow from './components/BuyNow/BuyNow';
import Man from './components/MAN/Man';
import Woman from './components/WOMAN/Woman';
import Kids from './components/KIDS/Kids';
import Sale from './components/SALE/Sale';
import Basket from './components/Basket/Basket';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addProduct' element={<Addproduct/>}/>
        <Route path='/buynow' element={<BuyNow/>}></Route>
        <Route path='/man' element={<Man/>}></Route>
        <Route path='/woman' element={<Woman/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/sale' element={<Sale/>}></Route>
        <Route path='basket' element={<Basket/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
