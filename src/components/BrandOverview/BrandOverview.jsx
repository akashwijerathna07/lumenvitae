import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import "./BrandOverview.css";

const BrandOverview = () => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const dragState = useRef({
        startX: 0,
        scrollLeft: 0
    });

    const marqueeItems = [
        "SRI LANKAN ORIGIN",
        "PURE QUALITY",
        "AUTHENTIC FLAVOUR",
        "ISLAND GROWN"
    ];

    /* Center large image on load */
    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider || window.innerWidth > 900) {
            return;
        }

        const largeImage = slider.querySelector(".overview-image-large");

        if (!largeImage) {
            return;
        }

        const target =
            largeImage.offsetLeft -
            (slider.clientWidth - largeImage.offsetWidth) / 2;

        slider.scrollLeft = target;
    }, []);

    /* Start drag */
    const handleMouseDown = (e) => {
        const slider = sliderRef.current;

        if (!slider || window.innerWidth > 900) {
            return;
        }

        setIsDragging(true);

        dragState.current = {
            startX: e.pageX,
            scrollLeft: slider.scrollLeft
        };
    };

    /* Drag */
    const handleMouseMove = (e) => {
        if (!isDragging) {
            return;
        }

        const slider = sliderRef.current;

        if (!slider) {
            return;
        }

        e.preventDefault();

        const distance = e.pageX - dragState.current.startX;

        slider.scrollLeft =
            dragState.current.scrollLeft - distance;
    };

    /* Stop drag */
    const stopDragging = () => {
        setIsDragging(false);
    };

    return (
        <>
            <div className="marquee">
                <div className="marquee-track">
                    {[...Array(3)].map((_, index) => (
                        <div
                            className="marquee-content"
                            key={index}
                        >
                            {marqueeItems.map((item, i) => (
                                <span key={i}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <section className="brand-overview">
                <div className="container">

                    <motion.div
                        className="brand-overview-header"
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
                            amount: 0.4
                        }}
                        transition={{
                            duration: 2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <h2>
                            Rooted in Sri Lanka.
                            <br />
                            Made for modern markets.
                        </h2>
                    </motion.div>

                    <div
                        ref={sliderRef}
                        className={`brand-overview-images ${
                            isDragging ? "is-dragging" : ""
                        }`}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={stopDragging}
                        onMouseLeave={stopDragging}
                    >
                        <motion.div
                            className="overview-image"
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.985
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            transition={{
                                duration: 2.2,
                                delay: 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <img
                                src="/images/about-1.webp"
                                alt="Jar packaging"
                                draggable="false"
                            />
                        </motion.div>

                        <motion.div
                            className="overview-image overview-image-large"
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.985
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            transition={{
                                duration: 2.2,
                                delay: 0.5,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <img
                                src="/images/about-2.webp"
                                alt="Cinnamon packaging"
                                draggable="false"
                            />
                        </motion.div>

                        <motion.div
                            className="overview-image"
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.985
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            transition={{
                                duration: 2.2,
                                delay: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <img
                                src="/images/about-3.webp"
                                alt="Packaging design"
                                draggable="false"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="brand-overview-message"
                        initial={{
                            opacity: 0,
                            y: 50
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
                            delay: 0.35,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <p>
                            We are building a spice brand that celebrates
                            authentic Sri Lankan flavour through carefully
                            selected products, thoughtful presentation and a
                            commitment to quality.
                        </p>
                    </motion.div>

                    <div className="brand-stats">
                        {[
                            ["100%", "Sri Lankan Origin"],
                            ["8+", "Spice Varieties"],
                            ["Premium", "Packaging Focus"],
                            ["Fresh", "Carefully Selected"]
                        ].map(([title, text], index) => (
                            <motion.div
                                className="stat"
                                key={title}
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.5
                                }}
                                transition={{
                                    duration: 1.6,
                                    delay: index * 0.25,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default BrandOverview;