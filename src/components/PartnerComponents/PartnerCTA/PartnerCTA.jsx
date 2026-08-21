import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import "./PartnerCTA.css";
import scrollToTop from "../../../utils/scrollToTop.js";

const PartnerCTA = () => {
    const partners = [
        "RETAILERS",
        "BAKERY",
        "FOOD BRANDS",
        "WHOLESALERS",
        "DISTRIBUTORS",
        "IMPORTERS"
    ];

    return (
        <section className="partner-cta">
            <div className="partner-cta-box">

                <motion.div
                    className="partner-cta-audience"
                    initial={{
                        opacity: 0,
                        y: 80
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    transition={{
                        duration: 2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <span className="partner-cta-label">
                        WHO WE WORK WITH
                    </span>

                    {/* Marquee */}
                    <div className="partner-types-marquee">
                        <div className="partner-types-track">
                            {[...Array(3)].map((_, groupIndex) => (
                                <div
                                    className="partner-types-group"
                                    key={groupIndex}
                                >
                                    {partners.map((partner) => (
                                        <React.Fragment
                                            key={`${groupIndex}-${partner}`}
                                        >
                                            <span className="partner-type">
                                                {partner}
                                            </span>

                                            <span className="partner-type-divider">
                                                ✦
                                            </span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="partner-cta-divider"></div>

                {/* CTA */}
                <motion.div
                    className="partner-cta-content"
                    initial={{
                        opacity: 0,
                        y: 90
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <motion.div
                        className="partner-cta-text"
                        initial={{
                            opacity: 0,
                            y: 70
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 1.9,
                            delay: 0.35,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <h2>
                            Ready to partner?
                        </h2>

                        <p>
                            Whether you're growing a local business or reaching new markets,
                            we're here to provide quality Sri Lankan spices, dependable supply,
                            and a partnership built around your long-term success.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 1.8,
                            delay: 0.55,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <Link
                            to="/contact"
                            className="partner-cta-btn"
                            onClick={scrollToTop}
                        >
                            <span>
                                ENQUIRE NOW
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default PartnerCTA;