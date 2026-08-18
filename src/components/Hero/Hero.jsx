import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/hero-1.png",
            title: "Born from the richness of Sri Lanka.",
            text: "Authentic spices, carefully selected and thoughtfully packed."
        },
        {
            image: "/images/hero-2.png",
            title: "Pure flavour begins at the source.",
            text: "Celebrating the natural character of Sri Lankan spices."
        },
        {
            image: "/images/hero-3.png",
            title: "Quality in every pack.",
            text: "Carefully handled to preserve freshness, aroma and flavour."
        },
        {
            image: "/images/hero-4.png",
            title: "Naturally Sri Lankan.",
            text: "Distinctive spices rooted in the richness of our island."
        }
    ];


    // AUTO SLIDE — 12 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 12000);
        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <section className="hero container">
            {slides.map((slide, index) => (
                <div key={index} className={`hero-slide ${ index === currentSlide ? "active" : "" }`}
                     style={{ backgroundImage: `url(${slide.image})`}} >

                    <div className="hero-overlay"></div>

                    <div className="hero-content">
                        <h1>
                            {slide.title}
                        </h1>
                        <p>
                            {slide.text}
                        </p>
                    </div>
                </div>
            ))}

            <div className="hero-indicators">
                {slides.map((_, index) => (
                    <button key={index} className={`hero-dot ${ index === currentSlide ? "active" : "" }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;