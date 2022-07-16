import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";


const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Routes>
                 <Route exact path="/"
                    element={<Home/>}/> 
                <Route exact path="/products/:category"
                element={<ProductList/>}/>
                 <Route path="/product/:id"
                    element={<Product/>}/>
               <Route path="/cart"
                    element={<Cart/>}/>
                    <Route path="/success"
       element =  {<Success />}/>
        
                <Route path="/login"
                    element={<Login/>}
                   />

                <Route path="/register"
                    element={<Register/>}/> 
            </Routes> 
        </Router>
    )
};

export default App;
