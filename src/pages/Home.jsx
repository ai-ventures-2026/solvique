import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    icon: '♟',
    title: 'Business Strategy',
    desc: 'Competitive positioning, market entry, growth planning, and corporate portfolio strategy for sustainable advantage.',
    link: '/services',
  },
  {
    icon: '⚙',
    title: 'Operations Excellence',
    desc: 'Process redesign, lean transformation, supply chain optimization, and performance management systems.',
    link: '/services',
  },
  {
    icon: '📊',
    title: 'Financial Advisory',
    desc: 'Financial restructuring, M&A due diligence, cost optimization, and working capital management.',
    link: '/services',
  },
  {
    icon: '🖥',
    title: 'Digital Transformation',
    desc: 'Technology roadmaps, ERP implementations, data analytics strategy, and enterprise digitization.',
    link: '/services',
  },
]

const differentiators = [
  {
    icon: '🏆',
    title: 'Results-Driven',
    desc: 'Every engagement is anchored to measurable business outcomes—not just deliverables.',
  },
  {
    icon: '🔬',
    title: 'Evidence-Based',
    desc: 'Our recommendations are grounded in rigorous data analysis and industry benchmarking.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Approach',
    desc: 'We work alongside your leadership team to build internal capability, not dependency.',
  },
  {
    icon: '🌐',
    title: 'Global Perspective',
    desc: 'Offices in three continents and expertise spanning 30+ industries worldwide.',
  },
]

const results = [
  {
    metric: '340%',
    label: 'ROI in 18 months',
    industry: 'Manufacturing',
    title: 'Operational Turnaround – Global Manufacturer',
    desc: 'Redesigned supply chain and production scheduling for a $2.4B industrial manufacturer, eliminating $78M in annual waste and reducing lead times by 41%.',
    tags: ['Operations', 'Supply Chain', 'Lean'],
  },
  {
    metric: '$52M',
    label: 'Annual cost savings',
    industry: 'Financial Services',
    title: 'Cost Transformation – Regional Bank',
    desc: 'Led a comprehensive cost structure review across 14 business units, identifying $52M in sustainable savings while maintaining customer service quality scores.',
    tags: ['Finance', 'Strategy', 'Restructuring'],
  },
  {
    metric: '2.7×',
    label: 'Revenue growth in 3 years',
    industry: 'Healthcare',
    title: 'Growth Strategy – Healthcare Network',
    desc: 'Developed and executed a five-year market expansion strategy for a regional healthcare provider, entering four new geographies and three adjacent service lines.',
    tags: ['Strategy', 'Growth', 'M&A'],
  },
]

const industries = [
  { icon: '🏦', name: 'Financial Services' },
  { icon: '🏥', name: 'Healthcare & Life Sciences' },
  { icon: '⚡', name: 'Energy & Utilities' },
  { icon: '🏭', name: 'Industrial & Manufacturing' },
  { icon: '🛒', name: 'Retail & Consumer' },
  { icon: '💻', name: 'Technology & Media' },
]

const testimonials = [
  {
    quote: "Solvique's team brought a level of analytical rigor and strategic clarity that fundamentally changed how we approach growth planning. The results speak for themselves.",
    name: 'Margaret L. Thornton',
    title: 'CEO, Meridian Capital Group',
    initials: 'MT',
  },
  {
    quote: "What distinguishes Solvique is their ability to translate complex data into clear, actionable priorities—and then stay with us through execution. That partnership is rare.",
    name: 'David K. Osei',
    title: 'Chief Operating Officer, Halcyon Industries',
    initials: 'DO',
  },
  {
    quote: "We engaged three consulting firms before Solvique. None of the others delivered the operational depth or the genuine commitment to our long-term success that Solvique provided.",
    name: 'Sarah E. Radcliffe',
    title: 'CFO, Northgate Health Systems',
    initials: 'SR',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg-pattern" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">Strategic Business Consulting</span>
            <h1 className="hero__title">
              Complex Problems.<br />
              <span className="hero__title-accent">Proven Solutions.</span>
            </h1>
            <p className="hero__desc">
              Solvique partners with enterprise and mid-market leaders to solve their most critical business
              challenges—delivering measurable results in strategy, operations, finance, and digital transformation.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">Schedule a Consultation</Link>
              <Link to="/services" className="btn btn--outline-white btn--lg">Explore Our Services</Link>
            </div>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">25+</span>
              <span className="hero__stat-label">Years of Practice</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-num">400+</span>
              <span className="hero__stat-label">Engagements Delivered</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-num">$3.8B</span>
              <span className="hero__stat-label">Value Created</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Core Advisory Services</h2>
            <div className="gold-bar gold-bar--center" />
            <p className="section-subtitle">
              From board-level strategy to front-line implementation, our integrated service model addresses
              the full spectrum of business transformation challenges.
            </p>
          </div>
          <div className="grid-4 services-grid">
            {services.map((s) => (
              <Link to={s.link} key={s.title} className="service-card">
                <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <span className="service-card__cta">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Solvique ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <span className="section-label">Why Solvique</span>
              <h2 className="section-title">The Solvique Difference</h2>
              <div className="gold-bar" />
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.75, marginBottom: 32 }}>
                We are not generalists. Our practice leaders are former executives and domain specialists
                who have navigated the same challenges our clients face. We bring proven frameworks,
                deep sector knowledge, and an unwavering focus on sustainable results.
              </p>
              <Link to="/about" className="btn btn--outline">Our Approach</Link>
            </div>
            <div className="why-right">
              {differentiators.map((d) => (
                <div key={d.title} className="differentiator">
                  <span className="differentiator__icon" aria-hidden="true">{d.icon}</span>
                  <div>
                    <h4 className="differentiator__title">{d.title}</h4>
                    <p className="differentiator__desc">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Results ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Client Results</span>
            <h2 className="section-title">Engagements That Moved the Needle</h2>
            <div className="gold-bar gold-bar--center" />
            <p className="section-subtitle">
              A representative sample of the measurable outcomes we have delivered for clients across industries.
            </p>
          </div>
          <div className="grid-3">
            {results.map((r) => (
              <div key={r.title} className="result-card">
                <div className="result-card__header">
                  <div className="result-card__metric-block">
                    <span className="result-card__metric">{r.metric}</span>
                    <span className="result-card__label">{r.label}</span>
                  </div>
                  <span className="result-card__industry">{r.industry}</span>
                </div>
                <h4 className="result-card__title">{r.title}</h4>
                <p className="result-card__desc">{r.desc}</p>
                <div className="result-card__tags">
                  {r.tags.map(t => <span key={t} className="result-card__tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Industries We Serve</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Sector Expertise Across Six Verticals</h2>
            <div className="gold-bar gold-bar--center" />
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Deep domain knowledge and established benchmarks in the industries that matter most.
            </p>
          </div>
          <div className="industries-grid">
            {industries.map((ind) => (
              <div key={ind.name} className="industry-card">
                <span className="industry-card__icon" aria-hidden="true">{ind.icon}</span>
                <span className="industry-card__name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Client Testimonials</span>
            <h2 className="section-title">Trusted by Senior Leaders</h2>
            <div className="gold-bar gold-bar--center" />
          </div>
          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__quote-mark" aria-hidden="true">"</div>
                <p className="testimonial-card__quote">{t.quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__title">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">Ready to Transform Your Business?</h2>
            <p className="cta-banner__desc">
              Speak with a Solvique practice leader. We will assess your situation and propose
              a tailored engagement framework—no obligation.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">Schedule Consultation</Link>
            <Link to="/services" className="btn btn--outline-white btn--lg">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
