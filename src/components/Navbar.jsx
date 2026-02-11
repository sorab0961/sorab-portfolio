import { useState } from 'react';
// import './Navbar.css'; // We will move specific styles here or keep in index.css

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="site-header">
            <div className="container header-inner">
                <a className="logo" href="#top" onClick={closeMenu}>
                    Sorab<span>Rajput</span>
                </a>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#education" onClick={closeMenu}>Education</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>
                <button
                    className="menu-btn"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    Menu
                </button>
            </div>
        </header>
    );
};

export default Navbar;
