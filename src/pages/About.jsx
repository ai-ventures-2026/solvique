import { Link } from 'react-router-dom'
import './About.css'

const timeline = [
  { year: '1999', event: 'Founded in Chicago by three former McKinsey partners with a focus on operational strategy.' },
  { year: '2005', event: 'Opened London office; launched dedicated Financial Advisory practice.' },
  { year: '2011', event: 'Expanded to Singapore, establishing an Asia-Pacific hub for industrial and technology clients.' },
  { year: '2017', event: 'Launched Digital Transformation practice; grew to 200+ consultants globally.' },
  { year: '2022', event: 'Named among Top 10 Boutique Consulting Firms by Consulting Magazine for the third consecutive year.' },
  { year: '2024', event: 'Reached $3.8B in cumulative client value created; surpassed 400 completed engagements.' },
]

const methodology = [
  {
    step: '01',
    title: 'Diagnose',
    desc: 'Rigorous assessment of business performance, market position, and internal capabilities using proprietary diagnostic frameworks and quantitative benchmarking.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Co-development of a tailored strategy or transformation roadmap with your leadership team, grounded in data and aligned to your organizational realities.',
  },
  {
    step: '03',
    title: 'Deliver',
    desc: 'Hands-on implementation support, change management, and program governance to ensure strategy becomes reality—not just a slide deck.',
  },
  {
    step: '04',
    title: 'Sustain',
    desc: 'Knowledge transfer, capability building, and performance tracking to embed change and generate lasting results long after the engagement closes.',
  },
]

const leadership = [
  {
    initials: 'JR',
    name: 'Jonathan R. Hale',
    title: 'Founding Partner & CEO',
    tenure: '25 years',
    bio: 'Jonathan founded Solvique after twelve years at McKinsey & Company, where he led the North American Operations Practice. He has personally led over 80 client engagements across manufacturing, energy, and financial services. A graduate of Harvard Business School and MIT, Jonathan is a frequent speaker at the World Economic Forum and has been recognized by Consulting Magazine as one of the "Top 25 Consultants" in North America.',
    expertise: ['Corporate Strategy', 'Operations Transformation', 'Industrial Sector'],
  },
  {
    initials: 'AP',
    name: 'Amara P. Okonkwo',
    title: 'Managing Partner, Financial Advisory',
    tenure: '19 years',
    bio: 'Amara leads Solvique\'s Financial Advisory and M&A practice, bringing 19 years of experience in corporate finance, restructuring, and transaction advisory. Prior to joining Solvique, she served as Managing Director at Goldman Sachs and Partner at Bain & Company. Her clients include Fortune 500 corporations, sovereign wealth funds, and private equity sponsors across three continents. She holds an MBA from INSEAD and a degree in Economics from Oxford.',
    expertise: ['M&A Advisory', 'Financial Restructuring', 'Private Equity'],
  },
  {
    initials: 'DL',
    name: 'Dr. Daniel L. Forsythe',
    title: 'Managing Partner, Digital & Technology',
    tenure: '14 years',
    bio: 'Daniel leads Solvique\'s Digital Transformation and Technology practice, combining deep technical expertise with executive-level strategic thinking. Before joining Solvique, he served as CTO of a publicly listed technology company and held research positions at MIT\'s Sloan School of Management. Daniel holds a PhD in Information Systems from Stanford University and advises government and enterprise clients on AI adoption, data strategy, and enterprise architecture.',
    expertise: ['Digital Transformation', 'AI & Data Strategy', 'Enterprise Architecture'],
  },
]

const awards = [
  { year: '2024', award: 'Top 10 Boutique Consulting Firms', org: 'Consulting Magazine' },
  { year: '2023', award: 'Best Firm to Work For – Mid-Size', org: 'Vault Consulting Rankings' },
  { year: '2022', award: 'Excellence in Client Service Award', org: 'Financial Times' },
  { year: '2021', award: 'Top 25 Consultants – Jonathan Hale', org: 'Consulting Magazine' },
  { year: '2020', award: 'Digital Transformation Leader of the Year', org: 'IDC MarketScape' },
  { year: '2019', award: 'M&A Advisory Firm of the Year – Boutique', org: 'The M&A Advisor' },
]

export default function About() {
  return (
    <div className="about">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__label">About Solvique</span>
          <h1 className="page-hero__title">Built on Expertise.<br />Measured by Results.</h1>
          <p className="page-hero__subtitle">
            For 25 years, Solvique has partnered with the world's leading organizations to solve
            their most consequential business challenges. We are practitioners, not theorists.
          </p>
        </div>
      </div>

      {/* Firm History */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">A Quarter Century of Practice</h2>
              <div className="gold-bar" />
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: 20 }}>
                Solvique was founded in 1999 with a single conviction: that the best consulting advice
                combines the analytical rigor of a top-tier firm with the accountability of an owner.
                Our founding partners left the world's largest consulting firms because they believed
                clients deserved more than frameworks and presentations—they deserved partners willing
                to stake their reputation on outcomes.
              </p>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: 20 }}>
                Twenty-five years later, that conviction remains unchanged. With offices in Chicago,
                London, and Singapore, we serve enterprise clients across six continents, bringing the
                same intensity and ownership mentality to every engagement we undertake.
              </p>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>
                Our growth has been deliberate—we have chosen to remain a boutique rather than scale
                at the expense of quality. Every engagement is staffed with senior practitioners who
                bring genuine domain expertise, not junior consultants learning on your dime.
              </p>
            </div>
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-item__year">{item.year}</div>
                  <div className="timeline-item__dot" aria-hidden="true" />
                  <div className="timeline-item__content">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">The Solvique Methodology</h2>
            <div className="gold-bar gold-bar--center" />
            <p className="section-subtitle">
              A proven four-phase approach that turns strategic insight into operational reality,
              with accountability built in at every step.
            </p>
          </div>
          <div className="methodology-grid">
            {methodology.map((m) => (
              <div key={m.step} className="methodology-card">
                <span className="methodology-card__step">{m.step}</span>
                <h3 className="methodology-card__title">{m.title}</h3>
                <p className="methodology-card__desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Our Founding Partners</h2>
            <div className="gold-bar gold-bar--center" />
            <p className="section-subtitle">
              Former executives and practice leaders who have spent their careers solving
              the challenges you face today.
            </p>
          </div>
          <div className="leadership-grid">
            {leadership.map((l) => (
              <div key={l.name} className="leader-card">
                <div className="leader-card__top">
                  <div className="leader-card__avatar">{l.initials}</div>
                  <div className="leader-card__info">
                    <h3 className="leader-card__name">{l.name}</h3>
                    <div className="leader-card__title">{l.title}</div>
                    <div className="leader-card__tenure">{l.tenure} at Solvique</div>
                  </div>
                </div>
                <p className="leader-card__bio">{l.bio}</p>
                <div className="leader-card__expertise">
                  {l.expertise.map(e => <span key={e} className="leader-card__tag">{e}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Recognition</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Awards &amp; Accolades</h2>
            <div className="gold-bar gold-bar--center" />
          </div>
          <div className="awards-grid">
            {awards.map((a) => (
              <div key={`${a.year}-${a.award}`} className="award-card">
                <span className="award-card__year">{a.year}</span>
                <div className="award-card__content">
                  <div className="award-card__name">{a.award}</div>
                  <div className="award-card__org">{a.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Work With Us</span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Partner with Solvique</h2>
          <div className="gold-bar gold-bar--center" />
          <p style={{ color: 'var(--text-gray)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Whether you are navigating a growth inflection, operational crisis, or strategic pivot,
            our partners are available for a confidential initial conversation.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg">Request a Meeting</Link>
        </div>
      </section>
    </div>
  )
}
