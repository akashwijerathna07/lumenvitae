import React from "react";
import { motion } from "motion/react";
import "./ExportCTA.css";

import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";

const ExportCTA = () => {
    return (
        <section className="export-cta">
            <motion.div
                className="container export-cta-content"
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
                    amount: 0.35
                }}
                transition={{
                    duration: 2,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                <motion.span
                    initial={{
                        opacity: 0,
                        y: 60
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.8,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    BUSINESS PARTNERSHIPS
                </motion.span>

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 90
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                        delay: 0.35,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    From our island
                    <br />
                    to your business
                </motion.h2>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 70
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.9,
                        delay: 0.55,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    Quality Sri Lankan spices, carefully sourced
                    for businesses at home and around the world.
                </motion.p>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.8,
                        delay: 0.75,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <Link to="/partner" onClick={scrollToTop}>
                        <span>PARTNER WITH US</span>
                        <span className="cta-arrow">→</span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ExportCTA;