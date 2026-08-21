import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion } from "motion/react";
import "./SingleProductDetails.css";

import products from "../../../data/products.js";
import scrollToTop from "../../../utils/scrollToTop.js";

const SingleProductDetails = () => {
    const { slug } = useParams();

    const location = useLocation();

    const fromPage = location.state?.fromPage || 1;

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

                    <Link
                        to="/products"
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

                <motion.div
                    className="single-product-breadcrumb"
                    initial={{
                        opacity: 0,
                        y: 60
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
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
                </motion.div>

                <div className="single-product-layout">

                    <motion.div
                        className="single-product-gallery"
                        initial={{
                            opacity: 0,
                            x: -90,
                            y: 70
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className="single-product-main-image">
                            <img
                                src={product.image}
                                alt={product.title}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="single-product-info"
                        initial={{
                            opacity: 0,
                            x: 90,
                            y: 70
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.25,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <motion.div
                            className="single-product-intro"
                            initial={{
                                opacity: 0,
                                y: 80
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 1.9,
                                delay: 0.35,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <h1>
                                {product.title}
                            </h1>

                            <p>
                                {product.description}
                            </p>
                        </motion.div>

                        <div className="single-product-divider"></div>

                        <motion.div
                            className="single-product-detail"
                            initial={{
                                opacity: 0,
                                y: 65
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 1.8,
                                delay: 0.55,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <span className="single-product-detail-label">
                                ORIGIN
                            </span>

                            <p>
                                {product.origin}
                            </p>
                        </motion.div>

                        <motion.div
                            className="single-product-detail"
                            initial={{
                                opacity: 0,
                                y: 65
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 1.8,
                                delay: 0.7,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <span className="single-product-detail-label">
                                COMMON USES
                            </span>

                            <p>
                                {product.uses}
                            </p>
                        </motion.div>

                        <div className="single-product-divider"></div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 60
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 1.8,
                                delay: 0.85,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <Link
                                to="/contact"
                                className="single-product-cta"
                                onClick={scrollToTop}
                            >
                                <span>
                                    MAKE AN INQUIRY
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default SingleProductDetails;