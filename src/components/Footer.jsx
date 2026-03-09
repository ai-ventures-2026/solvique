import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          {/* Brand column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-mark">S</span>
              <span className="footer__logo-text">SOLVIQUE</span>
            </Link>
            <p className="footer__tagline">
              Strategic consulting and proven solutions for enterprise transformation.
              Trusted by leading organizations across industries.
            </p>
            <div className="footer__socials">
              <a href="#linkedin" className="footer__social-link" aria-label="LinkedIn">in</a>
              <a href="#twitter" className="footer__social-link" aria-label="Twitter/X">X</a>
              <a href="#facebook" className="footer__social-link" aria-label="Facebook">f</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              <li><Link to="/services" className="footer__link">Business Strategy</Link></li>
              <li><Link to="/services" className="footer__link">Operations Excellence</Link></li>
              <li><Link to="/services" className="footer__link">Financial Advisory</Link></li>
              <li><Link to="/services" className="footer__link">Digital Transformation</Link></li>
              <li><Link to="/services" className="footer__link">Change Management</Link></li>
              <li><Link to="/services" className="footer__link">Risk &amp; Compliance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about" className="footer__link">About Solvique</Link></li>
              <li><Link to="/about" className="footer__link">Leadership Team</Link></li>
              <li><Link to="/about" className="footer__link">Our Methodology</Link></li>
              <li><Link to="/contact" className="footer__link">Careers</Link></li>
              <li><Link to="/contact" className="footer__link">Media &amp; Press</Link></li>
              <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__col footer__col--newsletter">
            <h4 className="footer__col-title">Executive Insights</h4>
            <p className="footer__newsletter-desc">
              Receive our monthly briefing on strategy, market trends, and operational best practices.
            </p>
            {submitted ? (
              <div className="footer__newsletter-success">
                Thank you for subscribing. You will receive our next briefing shortly.
              </div>
            ) : (
              <form className="footer__newsletter-form" onSubmit={handleNewsletter} noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your business email"
                  className="footer__newsletter-input"
                  required
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="footer__newsletter-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {currentYear} Solvique Consulting Group. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#privacy" className="footer__legal-link">Privacy Policy</a>
            <a href="#terms" className="footer__legal-link">Terms of Service</a>
            <a href="#cookies" className="footer__legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
