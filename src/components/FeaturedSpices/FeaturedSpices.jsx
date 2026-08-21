import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./FeaturedSpices.css";

import scrollToTop from "../../utils/scrollToTop";

const FeaturedSpices = () => {
    const sliderRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const spices = [
        {
            name: "CEYLON CINNAMON",
            slug: "ceylon-cinnamon",
            desc: "Warm • Sweet • Aromatic",
            image: "/products/cinnamon.webp",
            className: "spice-card spice-card-large"
        },
        {
            name: "BLACK PEPPER",
            slug: "black-pepper",
            desc: "Bold • Earthy • Fiery",
            image: "/products/black-pepper.webp",
            className: "spice-card"
        },
        {
            name: "CARDAMOM",
            slug: "cardamom",
            desc: "Fresh • Floral • Fragrant",
            image: "/products/cardamom.webp",
            className: "spice-card"
        },
        {
            name: "CLOVES",
            slug: "cloves",
            desc: "Rich • Warm • Intense",
            image: "/products/cloves.webp",
            className: "spice-card"
        }
    ];

    const cardAnimations = [
        { x: -80, y: 80 },
        { x: 0, y: 90 },
        { x: 0, y: 90 },
        { x: 80, y: 80 }
    ];

    const handleMouseDown = (e) => {
        if (!sliderRef.current) return;

        setIsDragging(true);

        setStartX(
            e.pageX - sliderRef.current.offsetLeft
        );

        setScrollLeft(
            sliderRef.current.scrollLeft
        );
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;

        e.preventDefault();

        const x =
            e.pageX - sliderRef.current.offsetLeft;

        const distance =
            (x - startX) * 1.4;

        sliderRef.current.scrollLeft =
            scrollLeft - distance;
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    return (
        <section className="featured-spices">
            <div className="container">
                <motion.div
                    className="featured-spices-header"
                    initial={{
                        opacity: 0,
                        y: 70
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        amount: 0.35
                    }}
                    transition={{
                        duration: 1.9,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <span>OUR COLLECTION</span>

                    <h2>
                        The flavours <br />
                        of the island
                    </h2>

                    <p>
                        Pure Sri Lankan spices, carefully selected
                        from the source.
                    </p>
                </motion.div>

                <div
                    className={`spice-grid ${
                        isDragging ? "dragging" : ""
                    }`}
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                >
                    {spices.map((spice, index) => (
                        <motion.div
                            className={spice.className}
                            key={spice.slug}
                            initial={{
                                opacity: 0,
                                x: cardAnimations[index].x,
                                y: cardAnimations[index].y,
                                scale: 0.96
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25
                            }}
                            transition={{
                                duration: 1.9,
                                delay: index * 0.18,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className="spice-image-container">
                                <img
                                    src={spice.image}
                                    alt={spice.name}
                                    draggable="false"
                                />
                            </div>

                            <div className="spice-card-content">
                                <h3>
                                    {spice.name}
                                </h3>

                                <Link
                                    to={`/products/${spice.slug}`}
                                    onClick={scrollToTop}
                                >
                                    <span>
                                        DISCOVER
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSpices;