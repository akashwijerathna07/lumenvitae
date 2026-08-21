import React from "react";
import { motion } from "motion/react";
import "./PartnerHero.css";

const PartnerHero = () => {
    return (
        <section className="partner-hero">
            <div className="partner-hero-overlay"></div>

            <div className="partner-hero-content container">
                <div className="partner-hero-left">
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
                        PARTNER WITH US
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
                        Better spices.
                        <br />
                        Stronger partnerships.
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

export default PartnerHero;