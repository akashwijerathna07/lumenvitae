import { motion } from "motion/react";
import "./AboutHero.css";

const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero-overlay"></div>

            <div className="container about-hero-content">
                <div className="about-hero-title">
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
                        OUR STORY
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
                        Rooted in Sri Lanka.
                        <br />
                        Shared with the world.
                    </motion.h1>
                </div>

                <div className="about-hero-text">
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
                        Born from an island renowned for extraordinary spices,
                        we bring authentic Sri Lankan flavour to markets around
                        the world.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;