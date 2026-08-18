import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import scrollToTop from "../../utils/scrollToTop";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Partner", path: "/partner" }
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="nav-container">

            <div className="nav-main">

                <div className="logo-container">
                    <Link to="/"
                        onClick={() => {
                            closeMenu();
                            scrollToTop();
                        }}
                    >
                        LUMEN VITAE
                    </Link>
                </div>

                <div className="nav-links desktop-nav">
                    {navLinks.map((link) => (
                        <NavLink
                            to={link.path}
                            key={link.name}
                            end={link.path === "/"}
                            onClick={scrollToTop}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="cta-container desktop-cta">
                    <Link
                        to="/contact"
                        onClick={scrollToTop}
                    >
                        Enquire now
                    </Link>
                </div>


                {/* Hamburger icon */}
                <button
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>


            {/* mobile menu */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <div className="mobile-menu-content">

                    <div className="mobile-links">
                        {navLinks.map((link, index) => (
                            <NavLink
                                to={link.path}
                                key={link.name}
                                end={link.path === "/"}
                                onClick={() => {
                                    closeMenu();
                                    scrollToTop();
                                }}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                style={{
                                    "--delay": `${index * 0.05}s`
                                }}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>


                    <div className="mobile-cta">
                        <Link
                            to="/contact"
                            onClick={() => {
                                closeMenu();
                                scrollToTop();
                            }}
                        >
                            Enquire now
                        </Link>
                    </div>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;