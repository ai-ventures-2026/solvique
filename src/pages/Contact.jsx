import { useState } from 'react'
import './Contact.css'

const offices = [
  {
    city: 'Chicago',
    flag: '🇺🇸',
    role: 'Global Headquarters',
    address: '333 West Wacker Drive, Suite 2800\nChicago, IL 60606',
    phone: '+1 (312) 555 0190',
    email: 'chicago@solvique.com',
  },
  {
    city: 'London',
    flag: '🇬🇧',
    role: 'European Headquarters',
    address: '30 St Mary Axe (The Gherkin), Level 12\nLondon, EC3A 8EP',
    phone: '+44 20 7946 0823',
    email: 'london@solvique.com',
  },
  {
    city: 'Singapore',
    flag: '🇸🇬',
    role: 'Asia-Pacific Headquarters',
    address: 'One Raffles Quay, North Tower, Level 26\nSingapore 048583',
    phone: '+65 6221 4870',
    email: 'singapore@solvique.com',
  },
]

const services = [
  'Business Strategy',
  'Operations Excellence',
  'Financial Advisory',
  'Digital Transformation',
  'Change Management',
  'Risk & Compliance',
  'Other / Not Sure',
]

const companySizes = [
  'Under 50 employees',
  '50 – 250 employees',
  '250 – 1,000 employees',
  '1,000 – 5,000 employees',
  '5,000+ employees',
]

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  title: '',
  companySize: '',
  service: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required.'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'A valid business email is required.'
    if (!form.company.trim()) errs.company = 'Company name is required.'
    if (!form.service) errs.service = 'Please select a service area.'
    if (!form.message.trim()) errs.message = 'Please briefly describe your challenge.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__label">Contact Us</span>
          <h1 className="page-hero__title">Start a Conversation</h1>
          <p className="page-hero__subtitle">
            Complete the form below and a Solvique practice leader will respond within one business day.
            All inquiries are treated with strict confidentiality.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="container contact-grid">

          {/* Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h2 className="contact-form-card__title">Request a Consultation</h2>
              <p className="contact-form-card__subtitle">
                Our engagements begin with a no-obligation discovery call to assess your situation
                and determine how we can best help.
              </p>

              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon" aria-hidden="true">✓</div>
                  <h3 className="contact-success__title">Thank You, {form.firstName}.</h3>
                  <p className="contact-success__desc">
                    Your inquiry has been received. A member of our team will contact you at{' '}
                    <strong>{form.email}</strong> within one business day to schedule a conversation
                    with the appropriate practice leader.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label" htmlFor="firstName">First Name <span className="form-required">*</span></label>
                      <input
                        id="firstName" name="firstName" type="text"
                        className={`form-input${errors.firstName ? ' form-input--error' : ''}`}
                        value={form.firstName} onChange={handleChange}
                        placeholder="First name"
                        autoComplete="given-name"
                      />
                      {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="lastName">Last Name <span className="form-required">*</span></label>
                      <input
                        id="lastName" name="lastName" type="text"
                        className={`form-input${errors.lastName ? ' form-input--error' : ''}`}
                        value={form.lastName} onChange={handleChange}
                        placeholder="Last name"
                        autoComplete="family-name"
                      />
                      {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label" htmlFor="email">Business Email <span className="form-required">*</span></label>
                      <input
                        id="email" name="email" type="email"
                        className={`form-input${errors.email ? ' form-input--error' : ''}`}
                        value={form.email} onChange={handleChange}
                        placeholder="name@company.com"
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className="form-input"
                        value={form.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label" htmlFor="company">Company <span className="form-required">*</span></label>
                      <input
                        id="company" name="company" type="text"
                        className={`form-input${errors.company ? ' form-input--error' : ''}`}
                        value={form.company} onChange={handleChange}
                        placeholder="Your company name"
                        autoComplete="organization"
                      />
                      {errors.company && <span className="form-error">{errors.company}</span>}
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="title">Your Title</label>
                      <input
                        id="title" name="title" type="text"
                        className="form-input"
                        value={form.title} onChange={handleChange}
                        placeholder="CEO, CFO, VP Operations…"
                        autoComplete="organization-title"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label" htmlFor="companySize">Company Size</label>
                      <select
                        id="companySize" name="companySize"
                        className="form-input form-select"
                        value={form.companySize} onChange={handleChange}
                      >
                        <option value="">Select employee range</option>
                        {companySizes.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="service">Service Area <span className="form-required">*</span></label>
                      <select
                        id="service" name="service"
                        className={`form-input form-select${errors.service ? ' form-input--error' : ''}`}
                        value={form.service} onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <span className="form-error">{errors.service}</span>}
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="budget">Approximate Budget Range</label>
                    <select
                      id="budget" name="budget"
                      className="form-input form-select"
                      value={form.budget} onChange={handleChange}
                    >
                      <option value="">Prefer not to say / Not yet determined</option>
                      <option>Under $100K</option>
                      <option>$100K – $250K</option>
                      <option>$250K – $500K</option>
                      <option>$500K – $1M</option>
                      <option>$1M – $3M</option>
                      <option>$3M+</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="message">
                      Describe Your Challenge <span className="form-required">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      className={`form-input form-textarea${errors.message ? ' form-input--error' : ''}`}
                      value={form.message} onChange={handleChange}
                      placeholder="Briefly describe the business challenge or opportunity you would like to explore with us…"
                      rows={5}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <p className="form-privacy">
                    By submitting this form you agree to our{' '}
                    <a href="#privacy" className="form-privacy-link">Privacy Policy</a>.
                    We will never share your information with third parties.
                  </p>

                  <button type="submit" className="btn btn--primary btn--lg form-submit">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar">
            {/* Offices */}
            <div className="contact-offices">
              <h3 className="contact-sidebar__title">Our Offices</h3>
              <div className="contact-sidebar__divider" />
              {offices.map((o) => (
                <div key={o.city} className="office-card">
                  <div className="office-card__header">
                    <span className="office-card__flag" aria-hidden="true">{o.flag}</span>
                    <div>
                      <div className="office-card__city">{o.city}</div>
                      <div className="office-card__role">{o.role}</div>
                    </div>
                  </div>
                  <address className="office-card__address">
                    {o.address.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </address>
                  <div className="office-card__contact">
                    <a href={`tel:${o.phone}`} className="office-card__link">📞 {o.phone}</a>
                    <a href={`mailto:${o.email}`} className="office-card__link">✉ {o.email}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* What to Expect */}
            <div className="contact-expect">
              <h3 className="contact-sidebar__title">What to Expect</h3>
              <div className="contact-sidebar__divider" />
              <ol className="expect-list">
                <li className="expect-item">
                  <span className="expect-item__num">1</span>
                  <div>
                    <strong>Acknowledgment within 4 hours</strong>
                    <p>A member of our Business Development team will confirm receipt of your inquiry.</p>
                  </div>
                </li>
                <li className="expect-item">
                  <span className="expect-item__num">2</span>
                  <div>
                    <strong>Practice leader introductory call</strong>
                    <p>Within one business day, we will schedule a 30-minute exploratory call with the relevant practice leader.</p>
                  </div>
                </li>
                <li className="expect-item">
                  <span className="expect-item__num">3</span>
                  <div>
                    <strong>Tailored proposal</strong>
                    <p>Following the discovery call, we will provide a scope of work and engagement proposal within five business days.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
