import React, { useEffect, useRef, useState } from "react";
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

                    <div className="core-values-heading">
                        <h2>Our core values</h2>

                        <p>
                            The principles that shape how we work,
                            make decisions and build relationships
                            that last.
                        </p>
                    </div>

                    <div className="core-values-slider">

                        <div className="core-values-viewport">

                            <div
                                className="core-values-track"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * (100 / itemsPerView)
                                    }%)`
                                }}
                            >

                                {values.map((value) => (
                                    <article
                                        className="core-value-card"
                                        key={value.number}
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

                                    </article>
                                ))}

                            </div>

                        </div>

                    </div>

                    <div className="core-values-controls">

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

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutCoreValues;