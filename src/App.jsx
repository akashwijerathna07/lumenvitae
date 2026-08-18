import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Partner from "./pages/Partner/Partner";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/contact" element={<Contact />}/>
                <Route path="/products/:slug" element={<SingleProduct />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;