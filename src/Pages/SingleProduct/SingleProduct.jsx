import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import SingleProductDetails from "../../components/SingleProductComponent/SingleProductDetails/SingleProductDetails.jsx";
import products from "../../data/products.js";

const SingleProduct = () => {
    const { slug } = useParams();

    const product = products.find(
        (item) => item.slug === slug
    );

    return (
        <>
            <Helmet>
                <title>
                    {product
                        ? `${product.title}  - Lumen Vitae Exporters`
                        : "Product Not Found - Lumen Vitae Exporters"
                    }
                </title>

                {product && (
                    <meta
                        name="description"
                        content={product.description}
                    />
                )}

                {!product && (
                    <meta
                        name="robots"
                        content="noindex, nofollow"
                    />
                )}
            </Helmet>

            <SingleProductDetails />
        </>
    );
};

export default SingleProduct;