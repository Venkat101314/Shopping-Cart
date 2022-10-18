import "./App.css";
import Header from "../src/Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Components/Home";
import Cart from "./Components/Cart.js";
import Dashboard from "./Components/Dashboard";
import Login from './Components/Login/Login';
import Signup from "./Components/Signup/Signup";
import Product from "./Components/Product"
import AdminPanel from "./Components/AdminPanel/Home";
import Announcement from "./Components/Announcement";
import Single from "./Components/AdminPanel/Pages/Single/Single"
import CarouselExample from "./Components/CarouselExample";
import Main from './Components/Main'
import Register from "./Components/Register"
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path="/products" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route exact path="/admin" element={<AdminPanel />}></Route>
          <Route path="/admin/userId" element={<Single/>}></Route>
          <Route path="/admin/products" element={<Single/>}></Route>
  </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;