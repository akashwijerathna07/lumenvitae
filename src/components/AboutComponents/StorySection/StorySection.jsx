import { motion } from "motion/react";
import "./StorySection.css";

const StorySection = () => {
    return (
        <section className="story-section">
            <div className="container">
                <motion.div
                    className="story-heading"
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
                    <span>OUR STORY</span>
                    <h2>
                        The story behind
                        <br />
                        Lumen Vitae.
                    </h2>
                </motion.div>

                <div className="story-row story-row-one">
                    <motion.div
                        className="story-card story-card-one"
                        initial={{
                            opacity: 0,
                            x: -90,
                            y: 60
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            y: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25
                        }}
                        transition={{
                            duration: 2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className="story-card-content">
                            <span>OUR BEGINNING</span>

                            <h3>
                                Rooted in
                                <br />
                                Sri Lanka.
                            </h3>

                            <p>
                                Lumen Vitae was born from a deep appreciation
                                for the spices that have shaped Sri Lanka for
                                generations.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="story-side-text"
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
                            duration: 1.8,
                            delay: 0.25,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <span>01</span>

                        <p>
                            From the land where our spices grow to the hands
                            that know them best, every part of our story begins
                            at the source.
                        </p>
                    </motion.div>
                </div>

                <div className="story-row story-row-two">
                    <motion.div
                        className="story-side-text"
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
                            duration: 1.8,
                            delay: 0.25,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <span>02</span>

                        <p>
                            We believe remarkable spices need little
                            interference, just careful handling, thoughtful
                            attention and respect for the land and traditions
                            they come from.
                        </p>
                    </motion.div>

                    <motion.div
                        className="story-card story-card-two"
                        initial={{
                            opacity: 0,
                            x: 90,
                            y: 60
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            y: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25
                        }}
                        transition={{
                            duration: 2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className="story-card-content">
                            <span>WHAT WE BELIEVE</span>

                            <h3>
                                Authentic by
                                <br />
                                nature.
                            </h3>

                            <p>
                                We carefully source Sri Lankan spices with a
                                focus on preserving the character, aroma and
                                flavour that make them exceptional.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;