import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./AboutCoreValues.css";

const values = [
    {
        number: "01",
        title: "QUALITY",
        text: "Carefully selected spices with a commitment to consistency, authenticity and high standards."
    },
    {
        number: "02",
        title: "INTEGRITY",
        text: "We build every relationship through honest communication, transparency and responsible business."
    },
    {
        number: "03",
        title: "SUSTAINABILITY",
        text: "A thoughtful approach to sourcing that respects the people, communities and environments behind our products."
    },
    {
        number: "04",
        title: "INNOVATION",
        text: "Always looking for better ways to source, serve and adapt to the changing needs of our partners."
    },
    {
        number: "05",
        title: "CUSTOMER FOCUS",
        text: "Understanding each business and providing dependable service built around what they actually need."
    }
];

const AboutCoreValues = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(2);

    const intervalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth <= 700 ? 1 : 2);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const maxIndex = Math.max(0, values.length - itemsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= maxIndex ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev <= 0 ? maxIndex : prev - 1
        );
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, maxIndex]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= maxIndex ? 0 : prev + 1
            );
        }, 7000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [maxIndex]);

    return (
        <section className="core-values-section">
            <div className="core-values-box">
                <div className="container">

                    <motion.div
                        className="core-values-heading"
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
                        <h2>Our core values</h2>

                        <p>
                            The principles that shape how we work,
                            make decisions and build relationships
                            that last.
                        </p>
                    </motion.div>

                    <motion.div
                        className="core-values-slider"
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
                            amount: 0.25
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className="core-values-viewport">
                            <div
                                className="core-values-track"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * (100 / itemsPerView)
                                    }%)`
                                }}
                            >
                                {values.map((value, index) => (
                                    <motion.article
                                        className="core-value-card"
                                        key={value.number}
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
                                            amount: 0.2
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            delay: index * 0.18,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                    >
                                        <div className="core-value-top">
                                            <span className="core-value-number">
                                                {value.number}
                                            </span>
                                        </div>

                                        <div className="core-value-content">
                                            <h3>
                                                {value.title}
                                            </h3>

                                            <p>
                                                {value.text}
                                            </p>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="core-values-controls"
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
                            delay: 0.6,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <button
                            className="core-values-arrow"
                            type="button"
                            onClick={() => {
                                stopAutoPlay();
                                prevSlide();
                            }}
                            aria-label="Previous value"
                        >
                            ←
                        </button>

                        <div className="core-values-indicators">
                            {Array.from({
                                length: maxIndex + 1
                            }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={
                                        currentIndex === index
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => {
                                        stopAutoPlay();
                                        setCurrentIndex(index);
                                    }}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className="core-values-arrow"
                            type="button"
                            onClick={() => {
                                stopAutoPlay();
                                nextSlide();
                            }}
                            aria-label="Next value"
                        >
                            →
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutCoreValues;