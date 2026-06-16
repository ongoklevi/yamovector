function Hero() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans">
      <div className="max-w-2xl mx-auto px-8 pt-16 pb-12 text-center">

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
        <div className="inline-flex items-center gap-1.5 bg-blue-950 text-blue-400 text-xs font-medium px-3 py-1.5 rounded-full mb-7 tracking-wide">
          <i className="ti ti-bolt text-xs" aria-hidden="true" />
          Nairobi's trusted tech repair specialists
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-medium text-white leading-tight tracking-tight mb-5">
          Expert repairs.<br />
          <span className="text-blue-400">Reliable technology.</span>
        </h1>

        {/* Subtext */}
        <p className="text-zinc-500 text-sm leading-relaxed  mb-5">
          From motherboard-level laptop repair to refurbished sales and corporate
          maintenance contracts — Yamovector keeps your tech running at its best.
        </p>

        {/* Slogan */}
        <p className="text-zinc-600 text-xs tracking-widest mb-8 px-3 py-2">
          <span className="text-blue-500">"Fixing Today.</span> Building Tomorrow."
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            <i className="ti ti-tool" aria-hidden="true" />
            Book a repair
          </button>
          <button className="flex items-center gap-2 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-200 text-sm px-5 py-2.5 rounded-lg transition-colors">
            <i className="ti ti-device-laptop" aria-hidden="true" />
            Browse laptops
          </button>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-12">
          {[
            { icon: "ti-cpu", title: "Laptop repair", desc: "Motherboard-level diagnostics and component repair" },
            { icon: "ti-device-laptop", title: "Laptop sales", desc: "New and certified refurbished units at fair prices" },
            { icon: "ti-building", title: "Corporate contracts", desc: "Maintenance agreements for businesses of all sizes" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 text-left">
              <div className="w-8 h-8 bg-blue-950 rounded-lg flex items-center justify-center mb-3">
                <i className={`ti ${icon} text-blue-400 text-base`} aria-hidden="true" />
              </div>
              <h4 className="text-zinc-200 text-sm font-medium mb-1">{title}</h4>
              <p className="text-zinc-600 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-zinc-900 border border-zinc-900 rounded-xl overflow-hidden">
          {[
            { num: "500+", label: "Devices repaired" },
            { num: "48h", label: "Average turnaround" },
            { num: "100%", label: "Satisfaction guaranteed" },
          ].map(({ num, label }) => (
            <div key={label} className="bg-zinc-950 py-4 text-center">
              <div className="text-white text-xl font-medium mb-0.5">{num}</div>
              <div className="text-zinc-600 text-xs">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hero;