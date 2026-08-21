import React from "react";
import { motion } from "motion/react";
import "./ProductsHero.css";

const ProductsHero = () => {
    return (
        <section className="products-hero">
            <div className="products-hero-overlay"></div>

            <div className="container products-hero-content">
                <motion.span
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
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    OUR PRODUCTS
                </motion.span>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 90
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    Explore our
                    <br />
                    product range.
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 70
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1.9,
                        delay: 0.55,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    Premium spices carefully selected for
                    quality, flavour and consistency.
                </motion.p>
            </div>
        </section>
    );
};

export default ProductsHero;