import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu} aria-label="Solvique home">
          <span className="navbar__logo-mark">S</span>
          <span className="navbar__logo-text">SOLVIQUE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Contact
          </NavLink>
        </nav>

        <Link to="/contact" className="navbar__cta btn btn--primary" onClick={closeMenu}>
          Schedule Consultation
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="navbar__drawer-nav">
          <NavLink to="/" end className="navbar__drawer-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="navbar__drawer-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className="navbar__drawer-link" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" className="navbar__drawer-link" onClick={closeMenu}>Contact</NavLink>
          <Link to="/contact" className="btn btn--primary" style={{ marginTop: 24 }} onClick={closeMenu}>
            Schedule Consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}
