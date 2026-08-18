import React from "react";
import "./ExportCTA.css";

import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";

const ExportCTA = () => {
    return (
        <section className="export-cta">
            <div className="container export-cta-content">
                <span>BUSINESS PARTNERSHIPS</span>

                <h2>
                    From our island
                    <br />
                    to your business
                </h2>

                <p>
                    Quality Sri Lankan spices, carefully sourced
                    for businesses at home and around the world.
                </p>

                <Link to="/partner" onClick={scrollToTop} >
                    <span>PARTNER WITH US</span>
                    <span className="cta-arrow">→</span>
                </Link>
            </div>
        </section>
    );
};

export default ExportCTA;