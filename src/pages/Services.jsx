import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 'strategy',
    icon: '♟',
    title: 'Business Strategy',
    tagline: 'Compete more effectively. Grow more sustainably.',
    desc: [
      'In an environment of accelerating disruption and intensifying competition, having a clear, differentiated strategy is not optional. Solvique\'s Strategy practice helps leadership teams articulate where to play and how to win—translating market intelligence and organizational insight into decisive action.',
      'We bring a combination of rigorous analytical methods and deep sector experience to strategic planning, portfolio review, growth strategy, and competitive positioning. Our work surfaces hard truths, challenges assumptions, and builds consensus around a path forward that the entire organization can execute against.',
    ],
    deliverables: [
      'Corporate and business unit strategy development',
      'Market entry and expansion planning',
      'Competitive analysis and strategic positioning',
      'Growth and adjacency strategy',
      'Portfolio rationalization and capital allocation',
      'Strategic planning process design',
      'Scenario planning and stress testing',
      'Board and investor strategy communication',
    ],
  },
  {
    id: 'operations',
    icon: '⚙',
    title: 'Operations Excellence',
    tagline: 'Run leaner. Execute faster. Deliver more.',
    desc: [
      'Operational excellence is a sustained competitive advantage that cannot be easily replicated. Solvique\'s Operations practice works with clients to fundamentally redesign how their organizations create and deliver value—from supply chain to production to service delivery.',
      'We combine lean methodology, data-driven diagnostics, and change management expertise to drive lasting performance improvement. Our engagements consistently deliver measurable reductions in cost, lead time, and defects, while improving customer satisfaction and employee engagement.',
    ],
    deliverables: [
      'End-to-end process redesign and lean transformation',
      'Supply chain strategy and network optimization',
      'Procurement and sourcing excellence',
      'Production system design and throughput improvement',
      'Service delivery model redesign',
      'Performance management system implementation',
      'Operational due diligence for M&A',
      'Continuous improvement program design',
    ],
  },
  {
    id: 'financial',
    icon: '📊',
    title: 'Financial Advisory',
    tagline: 'Optimize capital. Accelerate value creation.',
    desc: [
      'Sound financial management is the foundation of strategic execution. Solvique\'s Financial Advisory practice provides rigorous, independent counsel to CFOs, boards, and investors navigating complex financial decisions—from restructuring and turnaround to M&A and capital structure optimization.',
      'Our team combines investment banking expertise with operational insight, enabling us to identify value creation opportunities that purely financial advisors often miss. We are equally comfortable at the board table and in the management accounts.',
    ],
    deliverables: [
      'Financial restructuring and turnaround advisory',
      'M&A buy-side and sell-side advisory',
      'Financial and operational due diligence',
      'Working capital and cash flow optimization',
      'Cost structure analysis and overhead reduction',
      'Business case and investment appraisal',
      'Finance function transformation',
      'Management reporting and KPI framework design',
    ],
  },
  {
    id: 'digital',
    icon: '🖥',
    title: 'Digital Transformation',
    tagline: 'Harness technology. Transform the core.',
    desc: [
      'Digital transformation is not about technology—it is about reimagining how your business creates value in a digital world. Solvique helps organizations cut through the noise to identify where technology investments will generate the greatest strategic and financial return.',
      'From enterprise architecture to AI strategy to large-scale ERP implementations, we provide end-to-end advisory and implementation support that bridges the gap between technical capability and business value. We are technology-agnostic and outcome-focused.',
    ],
    deliverables: [
      'Digital strategy and technology roadmap',
      'Enterprise architecture assessment and design',
      'AI, machine learning, and data analytics strategy',
      'ERP selection, program governance, and implementation advisory',
      'Digital operating model design',
      'Customer experience and digital channel strategy',
      'Cybersecurity posture review',
      'Technology vendor evaluation and selection',
    ],
  },
  {
    id: 'change',
    icon: '🔄',
    title: 'Change Management',
    tagline: 'Lead change. Sustain transformation.',
    desc: [
      'Up to 70% of transformation programs fail to achieve their objectives—not because the strategy is wrong, but because organizational change is underestimated. Solvique\'s Change Management practice ensures that your strategic and operational initiatives actually land.',
      'We design and execute comprehensive change programs that address culture, communication, leadership alignment, and capability building. We believe that durable change requires both a clear case for change and genuine ownership from the people who must live with the new way of working.',
    ],
    deliverables: [
      'Change readiness assessment and diagnostics',
      'Change strategy and program design',
      'Stakeholder analysis and engagement planning',
      'Executive communications and town hall support',
      'Organizational design and role clarity',
      'Training needs analysis and learning program design',
      'Resistance management and cultural alignment',
      'Sustained adoption measurement and feedback loops',
    ],
  },
  {
    id: 'risk',
    icon: '🛡',
    title: 'Risk & Compliance',
    tagline: 'Manage risk. Maintain integrity. Build resilience.',
    desc: [
      'The risk landscape facing enterprises has never been more complex. Regulatory requirements, geopolitical instability, cyber threats, and ESG expectations demand a proactive, integrated approach to risk management. Solvique helps organizations build resilient risk frameworks that protect value while enabling growth.',
      'Our Risk & Compliance practice works at the intersection of governance, operations, and technology to design practical, proportionate risk management systems that stand up to regulatory scrutiny and leadership challenge alike.',
    ],
    deliverables: [
      'Enterprise risk management (ERM) framework design',
      'Regulatory compliance program assessment and remediation',
      'Internal controls design and testing',
      'Third-party and supply chain risk management',
      'Business continuity and crisis management planning',
      'ESG risk integration and reporting frameworks',
      'Regulatory change impact assessment',
      'Board and audit committee risk reporting',
    ],
  },
]

export default function Services() {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__label">Our Services</span>
          <h1 className="page-hero__title">Integrated Advisory<br />for Complex Challenges</h1>
          <p className="page-hero__subtitle">
            Six integrated practice areas designed to address the full spectrum of enterprise
            transformation challenges—from strategy through execution.
          </p>
        </div>
      </div>

      {/* Service Nav */}
      <div className="services-nav">
        <div className="container services-nav__inner">
          {services.map(s => (
            <a key={s.id} href={`#${s.id}`} className="services-nav__link">
              <span className="services-nav__icon" aria-hidden="true">{s.icon}</span>
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services Detail */}
      <div className="services-detail">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`section service-section${i % 2 === 1 ? ' section--gray' : ''}`}
          >
            <div className="container service-section__inner">
              <div className="service-section__header">
                <span className="service-section__icon" aria-hidden="true">{s.icon}</span>
                <div>
                  <span className="section-label">{`0${i + 1}`}</span>
                  <h2 className="service-section__title">{s.title}</h2>
                  <div className="gold-bar" />
                  <p className="service-section__tagline">{s.tagline}</p>
                </div>
              </div>
              <div className="service-section__body">
                <div className="service-section__desc">
                  {s.desc.map((para, idx) => (
                    <p key={idx} style={{ marginBottom: idx < s.desc.length - 1 ? 20 : 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="service-section__deliverables">
                  <h4 className="service-section__deliv-title">Key Deliverables</h4>
                  <ul className="service-section__deliv-list">
                    {s.deliverables.map(d => (
                      <li key={d} className="service-section__deliv-item">
                        <span className="service-section__check" aria-hidden="true">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: 'var(--gold)' }}>Get Started</span>
          <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: 16 }}>
            Discuss Your Challenge
          </h2>
          <div className="gold-bar gold-bar--center" />
          <p style={{ color: 'rgba(255,255,255,0.68)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Not sure which service applies to your situation? Our practice leaders are happy to listen
            first and recommend an engagement approach tailored to your specific context.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary btn--lg">Contact a Practice Leader</Link>
            <Link to="/about" className="btn btn--outline-white btn--lg">Meet Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
