import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./WhyUs.css";

import scrollToTop from "../../utils/scrollToTop";

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

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="why-sri-lankan" ref={sectionRef}>
            <div className="why-sri-lankan-sticky">
                <img
                    ref={imageRef}
                    src="/why-sri-lankan.png"
                    alt="Sri Lankan spice plantation"
                    className="why-sri-lankan-bg"
                />

                <div className="why-sri-lankan-overlay"></div>

                <div
                    className="container why-sri-lankan-content"
                    ref={contentRef}
                >
                    <span>WHY CHOOSE US?</span>

                    <h2>
                        QUALITY YOU CAN
                        <br />
                        TASTE.
                    </h2>

                    <p>
                        From careful sourcing to final selection, we focus on
                        quality at every step. Pure spices, authentic flavour,
                        and nothing unnecessary — just the real taste of Sri Lanka.
                    </p>

                    <Link to="/about" onClick={scrollToTop}>
                        <span>DISCOVER OUR STORY</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;