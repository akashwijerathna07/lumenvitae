import { useEffect, useState } from "react";
import { motion } from "motion/react";

import "./Hero.css";

const slides = [
    {
        image: "/images/hero-1.webp",
        title: "Born from the richness of Sri Lanka.",
        text: "Authentic spices, carefully selected and thoughtfully packed."
    },
    {
        image: "/images/hero-2.webp",
        title: "Pure flavour begins at the source.",
        text: "Celebrating the natural character of Sri Lankan spices."
    },
    {
        image: "/images/hero-3.webp",
        title: "Quality in every pack.",
        text: "Carefully handled to preserve freshness, aroma and flavour."
    },
    {
        image: "/images/hero-4.webp",
        title: "Naturally Sri Lankan.",
        text: "Distinctive spices rooted in the richness of our island."
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    /* First image is available immediately */
    const [loadedSlides, setLoadedSlides] = useState([0]);

    /* Auto slide every 12 seconds */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    /* Loads each background only when that slide is needed */
    useEffect(() => {
        setLoadedSlides((prev) => {
            if (prev.includes(currentSlide)) {
                return prev;
            }

            return [...prev, currentSlide];
        });
    }, [currentSlide]);

    return (
        <section className="hero container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${
                        index === currentSlide ? "active" : ""
                    }`}
                    style={{
                        backgroundImage: loadedSlides.includes(index)
                            ? `url(${slide.image})`
                            : "none"
                    }}
                >
                    <div className="hero-overlay"></div>

                    {index === currentSlide && (
                        <div className="hero-content">
                            <motion.h1
                                key={`title-${currentSlide}`}
                                initial={{
                                    opacity: 0,
                                    y: 100
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 2,
                                    delay: 0.25,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {slide.title}
                            </motion.h1>

                            <motion.p
                                key={`text-${currentSlide}`}
                                initial={{
                                    opacity: 0,
                                    y: 70
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1.8,
                                    delay: 0.5,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {slide.text}
                            </motion.p>
                        </div>
                    )}
                </div>
            ))}

            <div className="hero-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${
                            index === currentSlide ? "active" : ""
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;