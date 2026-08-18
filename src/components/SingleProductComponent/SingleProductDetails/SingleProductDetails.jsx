import React from "react";
import {
    Link,
    useLocation,
    useParams
} from "react-router-dom";

import "./SingleProductDetails.css";

import products from "../../../data/products";
import scrollToTop from "../../../utils/scrollToTop";

const SingleProductDetails = () => {
    const { slug } = useParams();

    const location = useLocation();

    const fromPage =
        location.state?.fromPage || 1;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return (
            <section className="single-product-not-found">

                <div className="container">
                    <h1>
                        PRODUCT NOT FOUND
                    </h1>

                    <Link to="/products"
                        state={{
                            scrollToProducts: true,
                            page: fromPage
                        }}
                    >
                        BACK TO PRODUCTS
                    </Link>
                </div>

            </section>
        );
    }

    return (
        <section className="single-product-section">

            <div className="container">
                <div className="single-product-breadcrumb">
                    <Link
                        to="/products"
                        state={{
                            scrollToProducts: true,
                            page: fromPage
                        }}
                    >
                        PRODUCTS
                    </Link>

                    <span>/</span>

                    <span>
                        {product.title}
                    </span>
                </div>

                <div className="single-product-layout">
                    <div className="single-product-gallery">
                        <div className="single-product-main-image">

                            <img
                                src={product.image}
                                alt={product.title}
                            />

                        </div>
                    </div>

                    <div className="single-product-info">
                        <div className="single-product-intro">
                            <h1>
                                {product.title}
                            </h1>

                            <p>
                                {product.description}
                            </p>
                        </div>

                        <div className="single-product-divider"></div>

                        <div className="single-product-detail">
                            <span className="single-product-detail-label">
                                ORIGIN
                            </span>

                            <p>
                                {product.origin}
                            </p>
                        </div>

                        <div className="single-product-detail">
                            <span className="single-product-detail-label">
                                COMMON USES
                            </span>

                            <p>
                                {product.uses}
                            </p>
                        </div>

                        <div className="single-product-divider"></div>

                        <Link
                            to="/contact"
                            className="single-product-cta"
                            onClick={scrollToTop}
                        >
                            <span>
                                MAKE AN INQUIRY
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default SingleProductDetails;