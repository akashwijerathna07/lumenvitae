import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Products from "./pages/Products/Products.jsx";
import Partner from "./pages/Partner/Partner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct.jsx";

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