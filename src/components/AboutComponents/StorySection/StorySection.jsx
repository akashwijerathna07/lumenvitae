import "./StorySection.css";

const StorySection = () => {
    return (
        <section className="story-section">
            <div className="container">
                <div className="story-heading">
                    <span>OUR STORY</span>
                    <h2>The story behind<br />Lumen Vitae.</h2>
                </div>

                <div className="story-row story-row-one">
                    <div className="story-card story-card-one">
                        <div className="story-card-content">
                            <span>OUR BEGINNING</span>

                            <h3>Rooted in<br />Sri Lanka.</h3>

                            <p>
                                Lumen Vitae was born from a deep appreciation
                                for the spices that have shaped Sri Lanka for
                                generations.
                            </p>
                        </div>
                    </div>

                    <div className="story-side-text">
                        <span>01</span>

                        <p>
                             From the land where our spices grow to the hands that know them best, every part of our story begins at the source.

                        </p>
                    </div>
                </div>

                <div className="story-row story-row-two">
                    <div className="story-side-text">
                        <span>02</span>

                        <p>
                            We believe remarkable spices need little interference just careful handling, thoughtful attention and respect for the land and traditions they come from.
                        </p>
                    </div>

                    <div className="story-card story-card-two">
                        <div className="story-card-content">
                            <span>WHAT WE BELIEVE</span>

                            <h3>Authentic by<br />nature.</h3>

                            <p>
                                We carefully source Sri Lankan spices with a
                                focus on preserving the character, aroma and
                                flavour that make them exceptional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;