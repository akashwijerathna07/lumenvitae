import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Products from "./Pages/Products/Products.jsx";
import Partner from "./Pages/Partner/Partner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";

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