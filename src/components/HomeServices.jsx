import './homeservices.css';
import { IconCode, IconNetwork, IconShieldCheck, IconArrowRight } from '@tabler/icons-react';

const services = [
  {
    id: '01',
    icon: <IconCode size={22} stroke={1.5} />,
    title: 'Web Development',
    description: 'Modern websites and web applications built for performance and scale.',
  },
  {
    id: '02',
    icon: <IconNetwork size={22} stroke={1.5} />,
    title: 'Networking Solutions',
    description: 'Secure and reliable network infrastructure that scales with your team.',
  },
  {
    id: '03',
    icon: <IconShieldCheck size={22} stroke={1.5} />,
    title: 'Cyber Security',
    description: 'Proactive protection that shields your business from evolving threats.',
  },
];

function HomeServices() {
  return (
    <section className="hs-section">
      <p className="hs-eyebrow">What we offer</p>
      <h2 className="hs-headline">
        Built for the way<br />you work.
      </h2>
      <p className="hs-sub">
        End-to-end technology solutions designed to keep your business
        secure, connected, and ahead.
      </p>

      <div className="hs-grid">
        {services.map((service) => (
          <div key={service.id} className="hs-card">
            <div className="hs-icon-wrap">{service.icon}</div>
            <p className="hs-card-label">{service.id}</p>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="hs-card-link">
              Learn more <IconArrowRight size={14} stroke={2} />
            </span>
          </div>
        ))}
      </div>

      <button className="hs-btn">
        Explore all services <IconArrowRight size={16} stroke={2} />
      </button>
    </section>
  );
}

export default HomeServices;