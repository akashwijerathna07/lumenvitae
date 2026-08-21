import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./WhyUs.css";

import scrollToTop from "../../utils/scrollToTop.js";

const WhyUs = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const updateScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            const progress = Math.min(
                Math.max(-rect.top / window.innerHeight, 0),
                1
            );

            if (imageRef.current) {
                imageRef.current.style.transform =
                    `scale(${1.08 - progress * 0.04}) translateY(${progress * 18}px)`;
            }

            if (contentRef.current) {
                contentRef.current.style.transform =
                    `translateY(${-progress * 18}px)`;

                contentRef.current.style.opacity =
                    `${1 - progress * 0.25}`;
            }

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);

        updateScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className="why-sri-lankan"
            ref={sectionRef}
        >
            <div className="why-sri-lankan-sticky">
                <img
                    ref={imageRef}
                    src="/why-sri-lankan.webp"
                    alt="Sri Lankan spice plantation"
                    className="why-sri-lankan-bg"
                />

                <div className="why-sri-lankan-overlay"></div>

                <div
                    className="container why-sri-lankan-content"
                    ref={contentRef}
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
                        viewport={{
                            once: true,
                            amount: 0.4
                        }}
                        transition={{
                            duration: 1.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        WHY CHOOSE US?
                    </motion.span>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 85
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.4
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        Quality you can
                        <br />
                        taste.
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
                        viewport={{
                            once: true,
                            amount: 0.4
                        }}
                        transition={{
                            duration: 1.9,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        From careful sourcing to final selection, we focus on
                        quality at every step. Pure spices, authentic flavour,
                        and nothing unnecessary — just the real taste of Sri Lanka.
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
                        viewport={{
                            once: true,
                            amount: 0.4
                        }}
                        transition={{
                            duration: 1.8,
                            delay: 0.45,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <Link
                            to="/about"
                            onClick={scrollToTop}
                        >
                            <span>DISCOVER OUR STORY</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;