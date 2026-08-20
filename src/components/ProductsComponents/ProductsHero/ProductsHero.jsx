import React from "react";
import "./ProductsHero.css";

const ProductsHero = () => {
    return (
        <section className="products-hero">

            <div className="products-hero-overlay"></div>

            <div className="container products-hero-content">
                <span>OUR PRODUCTS</span>

                <h1>
                    Explore our
                    <br />
                    product range.
                </h1>

                <p>
                    Premium spices carefully selected for
                    quality, flavour and consistency.
                </p>
            </div>

        </section>
    );
};

export default ProductsHero;