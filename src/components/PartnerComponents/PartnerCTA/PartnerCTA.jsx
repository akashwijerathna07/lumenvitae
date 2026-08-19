import React from "react";
import { Link } from "react-router-dom";
import "./PartnerCTA.css";

import scrollToTop from "../../../utils/scrollToTop.js";

const PartnerCTA = () => {

    const partners = [
        "RETAILERS",
        "BAKERY",
        "FOOD BRANDS",
        "WHOLESALERS",
        "DISTRIBUTORS",
        "IMPORTERS"
    ];

    return (
        <section className="partner-cta">

            <div className="partner-cta-box">
                <div className="partner-cta-audience">

                    <span className="partner-cta-label">
                        WHO WE WORK WITH
                    </span>

                    {/* Marquee */}

                    <div className="partner-types-marquee">
                        <div className="partner-types-track">
                            {[...Array(3)].map((_, groupIndex) => (
                                <div className="partner-types-group" key={groupIndex} >

                                    {partners.map((partner) => (
                                        <React.Fragment
                                            key={`${groupIndex}-${partner}`}
                                        >
                                            <span className="partner-type">
                                                {partner}
                                            </span>

                                            <span className="partner-type-divider">
                                                ✦
                                            </span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                {/* Divider*/}

                <div className="partner-cta-divider"></div>


                {/* cta */}

                <div className="partner-cta-content">
                    <div className="partner-cta-text">

                        <h2>
                            Ready to partner?
                        </h2>
                        <p>
                            Whether you're growing a local business or reaching new markets,
                            we're here to provide quality Sri Lankan spices, dependable supply,
                            and a partnership built around your long-term success.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="partner-cta-btn"
                        onClick={scrollToTop}
                    >
                        <span>
                            ENQUIRE NOW
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default PartnerCTA;