import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./PartnerOfferings.css";

const offerings = [
    {
        number: "01",
        title: "QUALITY SOURCING",
        text: "Authentic Sri Lankan spices carefully sourced with attention to quality, origin and consistency."
    },
    {
        number: "02",
        title: "FLEXIBLE SUPPLY",
        text: "Supply solutions designed around different business sizes, product requirements and order volumes."
    },
    {
        number: "03",
        title: "LOCAL & GLOBAL",
        text: "Supporting businesses across Sri Lanka while also supplying partners in international markets."
    },
    {
        number: "04",
        title: "RELIABLE PARTNERSHIPS",
        text: "Clear communication, dependable service and business relationships designed for long-term growth."
    }
];

const PartnerOfferings = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const intervalRef = useRef(null);
    const startX = useRef(0);
    const currentX = useRef(0);

    /* Next */
    const goNext = () => {
        setActiveIndex((prev) =>
            (prev + 1) % offerings.length
        );
    };

    /* Previous */
    const goPrev = () => {
        setActiveIndex((prev) =>
            (prev - 1 + offerings.length) %
            offerings.length
        );
    };

    /* Stop autoplay */
    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    /* Autoplay */
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) =>
                (prev + 1) % offerings.length
            );
        }, 4500);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    /* Card position */
    const getPosition = (index) => {
        const total = offerings.length;

        const previous =
            (activeIndex - 1 + total) % total;

        const next =
            (activeIndex + 1) % total;

        if (index === activeIndex) {
            return "active";
        }

        if (index === previous) {
            return "prev";
        }

        if (index === next) {
            return "next";
        }

        return "hidden";
    };

    /* Drag start */
    const handlePointerDown = (event) => {
        stopAutoPlay();

        setIsDragging(true);

        startX.current = event.clientX;
        currentX.current = event.clientX;

        event.currentTarget.setPointerCapture?.(
            event.pointerId
        );
    };

    /* Drag move */
    const handlePointerMove = (event) => {
        if (!isDragging) return;

        currentX.current = event.clientX;
    };

    /* Drag end */
    const handlePointerUp = (event) => {
        if (!isDragging) return;

        const difference =
            startX.current - currentX.current;

        if (Math.abs(difference) > 45) {
            if (difference > 0) {
                goNext();
            } else {
                goPrev();
            }
        }

        setIsDragging(false);

        event.currentTarget.releasePointerCapture?.(
            event.pointerId
        );
    };

    return (
        <section className="partner-offerings">
            <div className="container">
                <motion.div
                    className="partner-offerings-heading"
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
                    <h2>
                        What we offer
                    </h2>

                    <p>
                        Flexible spice solutions built around your business,
                        backed by quality, consistency and dependable supply.
                    </p>
                </motion.div>
            </div>

            <motion.div
                className={`partner-carousel ${
                    isDragging ? "is-dragging" : ""
                }`}
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
                    amount: 0.2
                }}
                transition={{
                    duration: 2,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {offerings.map((item, index) => {
                    const position = getPosition(index);

                    return (
                        <article
                            key={item.number}
                            className={`partner-offer-card ${position}`}
                        >
                            <span className="partner-offer-number">
                                {item.number}
                            </span>

                            <div className="partner-offer-content">
                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.text}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </motion.div>

            <motion.div
                className="partner-carousel-indicators"
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
                {offerings.map((item, index) => (
                    <button
                        key={item.number}
                        type="button"
                        aria-label={`Go to offering ${index + 1}`}
                        className={
                            activeIndex === index
                                ? "active"
                                : ""
                        }
                        onClick={() => {
                            stopAutoPlay();
                            setActiveIndex(index);
                        }}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default PartnerOfferings;