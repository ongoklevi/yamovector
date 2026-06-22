import MainLayout from "../layouts/MainLayout";
import { services }  from "../data/services";

function Services() {
  return (
    <MainLayout>
      <section>
        <h1>Our Services</h1>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <span>{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default Services;