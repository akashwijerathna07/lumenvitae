const products = [
    {
        id: 1,
        title: "Ceylon Cinnamon",
        slug: "ceylon-cinnamon",
        image: "/products/cinnamon.png",
        description:
            "Ceylon cinnamon is prized for its delicate sweetness, warm aroma and refined flavour. Native to Sri Lanka, it is valued around the world for its distinctive character and versatility.",
        origin: "Sri Lanka",
        uses:
            "Commonly used in baking, desserts, beverages, curries, confectionery and a wide variety of spice blends.",
    },
    {
        id: 2,
        title: "Black Pepper",
        slug: "black-pepper",
        image: "/products/pepper.png",
        description:
            "Sri Lankan black pepper is known for its bold aroma, warming heat and rich, complex flavour, making it a versatile spice for both traditional and modern food applications.",
        origin: "Sri Lanka",
        uses:
            "Widely used for seasoning, marinades, sauces, meat dishes, savoury foods and spice blends.",
    },
    {
        id: 3,
        title: "Cardamom",
        slug: "cardamom",
        image: "/products/cardamom.png",
        description:
            "Cardamom is an intensely aromatic spice recognised for its fresh, warm and slightly sweet character. Its distinctive fragrance makes it a valued ingredient across many cuisines.",
        origin: "Sri Lanka",
        uses:
            "Ideal for curries, desserts, baked goods, tea, coffee, confectionery and aromatic spice blends.",
    },
    {
        id: 4,
        title: "Cloves",
        slug: "cloves",
        image: "/products/cloves.png",
        description:
            "Cloves deliver a powerful warm aroma with a distinctive sweet and spicy character, bringing depth and intensity to both savoury and sweet preparations.",
        origin: "Sri Lanka",
        uses:
            "Used in curries, marinades, baked goods, beverages, desserts, pickles and traditional spice blends.",
    },
    {
        id: 5,
        title: "Nutmeg",
        slug: "nutmeg",
        image: "/products/cardamom.png",
        description:
            "Nutmeg offers a warm, subtly sweet and nutty flavour with a rich aromatic character that complements a wide range of culinary applications.",
        origin: "Sri Lanka",
        uses:
            "Suitable for baked goods, desserts, sauces, beverages, savoury dishes and spice blends.",
    },
    {
        id: 6,
        title: "Mace",
        slug: "mace",
        image: "/products/cloves.png",
        description:
            "Mace is the aromatic outer covering of the nutmeg seed, offering a warm and refined flavour with delicate sweet and spicy notes.",
        origin: "Sri Lanka",
        uses:
            "Used in baking, sauces, soups, meat dishes, desserts, beverages and premium spice blends.",
    },
    {
        id: 7,
        title: "Turmeric",
        slug: "turmeric",
        image: "/products/pepper.png",
        description:
            "Turmeric is recognised for its vibrant golden colour, earthy aroma and warm, slightly bitter flavour, making it an essential ingredient in many traditional dishes.",
        origin: "Sri Lanka",
        uses:
            "Commonly used in curries, rice dishes, spice blends, sauces, marinades and beverages.",
    },
    {
        id: 8,
        title: "Ginger",
        slug: "ginger",
        image: "/products/cardamom.png",
        description:
            "Ginger brings a fresh, warming and pleasantly spicy character with a distinctive aroma that works across both savoury and sweet applications.",
        origin: "Sri Lanka",
        uses:
            "Used in curries, marinades, sauces, baked goods, confectionery, tea and other beverages.",
    },
    {
        id: 9,
        title: "Vanilla",
        slug: "vanilla",
        image: "/products/cloves.png",
        description:
            "Vanilla is valued for its rich fragrance and smooth, sweet aromatic profile, bringing depth and warmth to premium food and beverage applications.",
        origin: "Sri Lanka",
        uses:
            "Ideal for desserts, baked goods, confectionery, beverages, dairy products and flavouring applications.",
    },
    {
        id: 10,
        title: "Coriander",
        slug: "coriander",
        image: "/products/pepper.png",
        description:
            "Coriander seeds have a warm, citrusy and subtly nutty flavour that adds balanced aromatic character to a wide variety of dishes.",
        origin: "Sri Lanka",
        uses:
            "Commonly used in curries, spice blends, marinades, sauces, pickles and savoury preparations.",
    },
    {
        id: 11,
        title: "Chilli",
        slug: "chilli",
        image: "/products/cinnamon.png",
        description:
            "Chilli delivers vibrant colour, distinctive flavour and varying levels of heat, making it a fundamental ingredient across countless culinary applications.",
        origin: "Sri Lanka",
        uses:
            "Used in curries, sauces, marinades, sambols, seasonings, spice blends and savoury dishes.",
    },
    {
        id: 12,
        title: "Curry Leaves",
        slug: "curry-leaves",
        image: "/products/cardamom.png",
        description:
            "Curry leaves are highly aromatic, offering a distinctive citrusy and savoury character that forms an essential part of Sri Lankan cooking.",
        origin: "Sri Lanka",
        uses:
            "Commonly used in curries, tempering, rice dishes, sambols, soups and traditional savoury preparations.",
    },
    {
        id: 13,
        title: "Fennel Seeds",
        slug: "fennel-seeds",
        image: "/products/pepper.png",
        description:
            "Fennel seeds offer a naturally sweet, fresh and gently aromatic flavour with subtle anise-like notes.",
        origin: "Sri Lanka",
        uses:
            "Used in curries, spice blends, baked goods, marinades, beverages and savoury preparations.",
    },
    {
        id: 14,
        title: "Cumin Seeds",
        slug: "cumin-seeds",
        image: "/products/cloves.png",
        description:
            "Cumin seeds are recognised for their warm, earthy aroma and distinctive savoury flavour, adding depth to a wide range of dishes.",
        origin: "Sri Lanka",
        uses:
            "Ideal for curries, spice blends, rice dishes, marinades, sauces and roasted preparations.",
    },
    {
        id: 15,
        title: "Fenugreek",
        slug: "fenugreek",
        image: "/products/cinnamon.png",
        description:
            "Fenugreek has a distinctive earthy aroma with a slightly bitter and subtly sweet flavour that develops beautifully during cooking.",
        origin: "Sri Lanka",
        uses:
            "Commonly used in curries, spice blends, pickles, sauces and traditional savoury preparations.",
    },
    {
        id: 16,
        title: "Mustard Seeds",
        slug: "mustard-seeds",
        image: "/products/cardamom.png",
        description:
            "Mustard seeds bring a sharp, nutty and warming character that becomes particularly aromatic when toasted or tempered.",
        origin: "Sri Lanka",
        uses:
            "Used in curries, tempering, pickles, sauces, marinades and a variety of traditional dishes.",
    },
    {
        id: 17,
        title: "Lemongrass",
        slug: "lemongrass",
        image: "/products/cloves.png",
        description:
            "Lemongrass has a fresh citrus aroma and clean, bright flavour that adds a distinctive fragrant character to food and beverages.",
        origin: "Sri Lanka",
        uses:
            "Ideal for curries, soups, marinades, sauces, herbal infusions and aromatic beverages.",
    },
    {
        id: 18,
        title: "Garcinia",
        slug: "garcinia",
        image: "/products/pepper.png",
        description:
            "Garcinia, commonly used in Sri Lankan cuisine, provides a distinctive sour and smoky character that brings depth and balance to savoury dishes.",
        origin: "Sri Lanka",
        uses:
            "Traditionally used in fish curries, seafood dishes, curries, sauces and other savoury preparations.",
    },
];

export default products;