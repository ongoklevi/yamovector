import './Hero.css';

function Hero() {
  return (
    <div className="hero hero--bw min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-20 text-center">

        {/* Logo 
        /*<div className="flex items-center justify-center gap-2.5 mb-6">
          <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
            <i className="ti ti-device-laptop text-white text-lg" aria-hidden="true" />
          </div>
          <span className="text-white text-xl font-medium tracking-wide">
            yamo<span className="text-blue-400">vector</span>
          </span>
        </div> */}

        {/* Badge */}
        <div className="badge mb-7">
          <i className="ti ti-bolt" aria-hidden="true" />
          Nairobi's trusted tech repair specialists
        </div>

        {/* Heading */}
        <h1 className="hero-title mb-5">
          Expert repairs.<br />
          <span className="hero-accent">Reliable technology.</span>
        </h1>

        {/* Subtext */}
        <p className="hero-subtext mb-5">
          From motherboard-level laptop repair to refurbished sales and corporate
          maintenance contracts — Yamovector keeps your tech running at its best.
        </p>

        {/* Slogan */}
        <p className="hero-slogan mb-8">
          "Fixing Today. Building Tomorrow."
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
          <button className="hero-cta-primary flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-lg">
            <i className="ti ti-tool" aria-hidden="true" />
            Book a repair
          </button>
          <button className="hero-cta-secondary flex items-center gap-2 text-sm px-6 py-3 rounded-lg">
            <i className="ti ti-device-laptop" aria-hidden="true" />
            Browse laptops
          </button>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "ti-cpu", title: "Laptop repair", desc: "Motherboard-level diagnostics and component repair" },
            { icon: "ti-device-laptop", title: "Laptop sales", desc: "New and certified refurbished units at fair prices" },
            { icon: "ti-building", title: "Corporate contracts", desc: "Maintenance agreements for businesses of all sizes" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="service-card p-4 text-left">
              <div className="service-icon mb-3">
                <i className={`ti ${icon} text-base`} aria-hidden="true" />
              </div>
              <h4 className="service-title text-sm font-medium mb-1">{title}</h4>
              <p className="service-desc text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x border rounded-xl overflow-hidden stats">
          {[
            { num: "500+", label: "Devices repaired" },
            { num: "48h", label: "Average turnaround" },
            { num: "100%", label: "Satisfaction guaranteed" },
          ].map(({ num, label }) => (
            <div key={label} className="stat-item py-4 text-center">
              <div className="stat-num text-xl font-medium mb-0.5">{num}</div>
              <div className="stat-label text-xs">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hero;