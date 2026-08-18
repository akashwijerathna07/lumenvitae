import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedSpices.css";

import scrollToTop from "../../utils/scrollToTop";

const FeaturedSpices = () => {
    const spices = [
        {
            name: "CEYLON CINNAMON",
            slug: "ceylon-cinnamon",
            desc: "Warm • Sweet • Aromatic",
            image: "/products/cinnamon.png",
            className: "spice-card spice-card-large"
        },
        {
            name: "BLACK PEPPER",
            slug: "black-pepper",
            desc: "Bold • Earthy • Fiery",
            image: "/products/pepper.png",
            className: "spice-card"
        },
        {
            name: "CARDAMOM",
            slug: "cardamom",
            desc: "Fresh • Floral • Fragrant",
            image: "/products/cardamom.png",
            className: "spice-card"
        },
        {
            name: "CLOVES",
            slug: "cloves",
            desc: "Rich • Warm • Intense",
            image: "/products/cloves.png",
            className: "spice-card"
        }
    ];

    return (
        <section className="featured-spices">
            <div className="container">
                <div className="featured-spices-header">
                    <span>OUR COLLECTION</span>

                    <h2>
                        The flavours <br />
                        of the island
                    </h2>

                    <p>
                        Pure Sri Lankan spices, carefully selected
                        from the source.
                    </p>
                </div>

                <div className="spice-grid">
                    {spices.map((spice) => (
                        <div className={spice.className} key={spice.slug} >
                            <div className="spice-image-container">
                                <img
                                    src={spice.image}
                                    alt={spice.name}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSpices;