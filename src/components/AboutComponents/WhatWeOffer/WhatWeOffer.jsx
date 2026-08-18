import "./WhatWeOffer.css";

const WhatWeOffer = () => {
    const offers = [
        {
            number: "01",
            title: "Authentic Origin",
            text: "Sri Lankan spices sourced with their natural character & origin intact."
        },
        {
            number: "02",
            title: "Consistent Quality",
            text: "Carefully selected and handled to deliver quality you can rely on."
        },
        {
            number: "03",
            title: "Flexible Supply",
            text: "Supply options designed around different products, quantities and markets."
        },
        {
            number: "04",
            title: "Global Partnerships",
            text: "Long-term relationships built around reliability, transparency and growth."
        }
    ];

    return (
        <section className="offer-section">
            <div className="offer-wrapper">
                <div className="container offer-inner">
                    <div className="offer-heading">
                        <span>WHAT WE OFFER</span>

                        <h2>
                            MORE THAN SPICES.
                            <br />
                            BUILT FOR BUSINESS.
                        </h2>

                        <p>
                            From origin to market, we focus on quality,
                            flexibility and relationships that last.
                        </p>
                    </div>

                    <div className="offer-list">
                        {offers.map((offer, index) => (
                            <div
                                className={`offer-item ${
                                    index % 2 === 0
                                        ? "offer-left"
                                        : "offer-right"
                                }`}
                                key={offer.number}
                            >
                                <span className="offer-number">
                                    {offer.number}
                                </span>

                                <div className="offer-content">
                                    <h3>{offer.title}</h3>
                                    <p>{offer.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;