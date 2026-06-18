import "./Services.css";
import {
  Laptop,
  Wrench,
  Network,
  Camera,
  Headphones,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: <Wrench size={40} />,
    title: "Laptop Repair",
    description:
      "Hardware diagnostics, motherboard repairs, upgrades, and maintenance.",
  },
  {
    icon: <Laptop size={40} />,
    title: "Laptop Sales",
    description:
      "New and refurbished laptops from HP, Lenovo, Dell, and more.",
  },
  {
    icon: <Network size={40} />,
    title: "Networking Solutions",
    description:
      "Professional network setup, troubleshooting, and optimization.",
  },
  {
    icon: <Camera size={40} />,
    title: "CCTV Installation",
    description:
      "Reliable surveillance systems for homes and businesses.",
  },
  {
    icon: <Headphones size={40} />,
    title: "IT Support",
    description:
      "Remote and onsite technical support for individuals and companies.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Enterprise Solutions",
    description:
      "Scalable technology solutions tailored for growing businesses.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <span>WHAT WE DO</span>
        <h2>Technology Solutions That Drive Growth</h2>
        <p>
          At YAMOVECTOR, we deliver innovative technology services designed
          to keep your devices, networks, and business running efficiently.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="/">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;