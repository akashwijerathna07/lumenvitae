import "./BrandOverview.css";

const BrandOverview = () => {

    const marqueeItems = [
        "SRI LANKAN ORIGIN",
        "PURE QUALITY",
        "AUTHENTIC FLAVOUR",
        "ISLAND GROWN"
    ];

    return (
        <>
            <div className="marquee">
                <div className="marquee-track">
                {
                    [...Array(3)].map((_, index) => (
                    <div className="marquee-content" key={index}>
                        {marqueeItems.map((item, i) => (
                        <span key={i}>
                            {item}
                        </span>
                        ))}
                    </div>
                    ))
                }
                </div>
            </div>

            <section className="brand-overview">
                <div className="container">

                    <div className="brand-overview-header">
                        <h2>
                            Rooted in Sri Lanka.
                            <br />
                            Made for modern markets.
                        </h2>
                    </div>


                    <div className="brand-overview-images">

                        <div className="overview-image">
                            <img
                                src="/images/about-1.png"
                                alt="Sri Lankan spices"
                            />
                        </div>

                        <div className="overview-image overview-image-large">
                            <img
                                src="/images/about-2.png"
                                alt="Spice preparation"
                            />
                        </div>

                        <div className="overview-image">
                            <img
                                src="/images/about-3.png"
                                alt="Packaged spice products"
                            />
                        </div>

                    </div>


                    <div className="brand-overview-message">
                        <p>
                            We are building a spice brand that celebrates authentic
                            Sri Lankan flavour through carefully selected products,
                            thoughtful presentation and a commitment to quality.
                        </p>
                    </div>


                    <div className="brand-stats">

                        <div className="stat">
                            <h3>100%</h3>
                            <p>Sri Lankan Origin</p>
                        </div>

                        <div className="stat">
                            <h3>8+</h3>
                            <p>Spice Varieties</p>
                        </div>

                        <div className="stat">
                            <h3>Premium</h3>
                            <p>Packaging Focus</p>
                        </div>

                        <div className="stat">
                            <h3>Fresh</h3>
                            <p>Carefully Selected</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
        
    );
};

export default BrandOverview;