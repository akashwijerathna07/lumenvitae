import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductsGrid.css";

import products from "../../../data/products";
import scrollToTop from "../../../utils/scrollToTop";

const PRODUCTS_PER_PAGE = 6;

const ProductsGrid = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToProducts) {

            if (location.state?.page) {
                setCurrentPage(location.state.page);
            }

            setTimeout(() => {
                document
                    .querySelector(".products-section")
                    ?.scrollIntoView({
                        behavior: "instant",
                        block: "start",
                    });
            }, 0);
        }
    }, [location]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.title
                .toLowerCase()
                .includes(search.toLowerCase().trim())
        );
    }, [search]);

    const totalPages = Math.ceil(
        filteredProducts.length / PRODUCTS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) * PRODUCTS_PER_PAGE;

    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    const firstResult =
        filteredProducts.length === 0
            ? 0
            : startIndex + 1;

    const lastResult = Math.min(
        startIndex + PRODUCTS_PER_PAGE,
        filteredProducts.length
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);

        document
            .querySelector(".products-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section className="products-section" id="products-grid" >
            <div className="container">
                <div className="products-toolbar">

                    <p className="products-results">
                        Showing{" "}
                        <strong>
                            {firstResult}-{lastResult}
                        </strong>{" "}
                        of{" "}
                        <strong>
                            {filteredProducts.length}
                        </strong>{" "}
                        products
                    </p>

                    <div className="products-search">

                        <svg viewBox="0 0 24 24" aria-hidden="true" >
                            <circle
                                cx="11"
                                cy="11"
                                r="7"
                            />
                            <path d="M20 20L16.5 16.5" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {currentProducts.length > 0 ? (
                    <div className="products-grid">
                        {currentProducts.map((product) => (
                            <article className="product-card" key={product.id} >

                                <div className="product-card-image">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>

                                <div className="product-card-content">
                                    <h3>
                                        {product.title}
                                    </h3>

                                    <Link
                                        to={`/products/${product.slug}`}
                                        state={{ fromPage: currentPage }}
                                        className="product-view-btn"
                                        onClick={scrollToTop}
                                    >
                                        <span>
                                            VIEW PRODUCT
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                ) : (

                    <div className="no-products">
                        <h3>
                            No products found.
                        </h3>

                        <p>
                            Try searching for another product.
                        </p>
                    </div>

                )}

                {totalPages > 1 && (
                    <div className="products-pagination">

                        <button
                            onClick={() =>
                                handlePageChange(
                                    currentPage - 1
                                )
                            }
                            disabled={currentPage === 1}
                            aria-label="Previous page"
                        >←</button>

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (

                            <button
                                key={page}
                                onClick={() =>
                                    handlePageChange(page)
                                }
                                className={
                                    currentPage === page
                                        ? "pagination-number active"
                                        : "pagination-number"
                                }
                            >{page}</button>

                        ))}

                        <button
                            onClick={() =>
                                handlePageChange(
                                    currentPage + 1
                                )
                            }
                            disabled={
                                currentPage === totalPages
                            }
                            aria-label="Next page"
                        >→</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsGrid;