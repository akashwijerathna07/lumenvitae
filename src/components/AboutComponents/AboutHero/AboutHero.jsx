import "./AboutHero.css";

const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero-overlay"></div>

            <div className="container about-hero-content">
                <div className="about-hero-title">
                    <span>OUR STORY</span>

                    <h1>
                        Rooted in Sri Lanka.
                        <br />
                        Shared with the world.
                    </h1>
                </div>

                <div className="about-hero-text">
                    <p>
                        Born from an island renowned for extraordinary spices,
                        we bring authentic Sri Lankan flavour to markets around
                        the world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;