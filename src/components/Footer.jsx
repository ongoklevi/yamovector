import { Link } from "react-router-dom";

const socials = [
  { icon: "ti-brand-x", label: "Twitter", href: "#" },
  { icon: "ti-brand-github", label: "GitHub", href: "#" },
  { icon: "ti-brand-linkedin", label: "LinkedIn", href: "#" },
  { icon: "ti-brand-instagram", label: "Instagram", href: "#" },
];

const pages = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const company = ["Careers", "Blog", "Press", "Partners"];
const legal = ["Privacy", "Terms", "Cookies", "Licenses"];

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-zinc-400 px-8 pt-12 pb-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-medium mb-2">YourBrand</h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-5">
            Building thoughtful products for people who care about the details.
            Quality, craftsmanship, and simplicity.
          </p>
          <div className="flex gap-2">
            {socials.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-white transition-colors"
              >
                <i className={`ti ${icon} text-base`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white text-xs font-medium uppercase tracking-widest mb-4">
            Pages
          </h3>
          <ul className="flex flex-col gap-2">
            {pages.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-zinc-500 text-sm hover:text-zinc-200 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-xs font-medium uppercase tracking-widest mb-4">
            Company
          </h3>
          <ul className="flex flex-col gap-2">
            {company.map((item) => (
              <li key={item}>
                <a href="#" className="text-zinc-500 text-sm hover:text-zinc-200 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white text-xs font-medium uppercase tracking-widest mb-4">
            Legal
          </h3>
          <ul className="flex flex-col gap-2">
            {legal.map((item) => (
              <li key={item}>
                <a href="#" className="text-zinc-500 text-sm hover:text-zinc-200 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto mt-10 pt-5 border-t border-zinc-800 flex flex-wrap justify-between items-center gap-3">
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-zinc-600 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          All systems operational
        </div>
      </div>
    </footer>
  );
}

export default Footer;