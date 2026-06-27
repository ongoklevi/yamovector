import { Link } from "react-router-dom";
import laptop1 from "../assets/products/laptop1.png";
import networking from "../assets/products/network1.png";
import starlink from "../assets/products/starlink.png";
import cctv from "../assets/products/network1.png";
import accessories from "../assets/products/accessory1.png";
import repair from "../assets/products/a.png";

const categories = [
  {
    title: "Laptops",
    image: laptop1,
    description: "Premium laptops for business, work, and gaming.",
  },
  {
    title: "Networking",
    image: networking,
    description: "Enterprise-grade routers, switches, and networking solutions.",
  },
  {
    title: "Starlink",
    image: starlink,
    description: "High-speed satellite internet solutions for homes and businesses.",
  },
  {
    title: "CCTV",
    image: cctv,
    description: "Smart surveillance systems for enhanced security.",
  },
  {
    title: "Accessories",
    image: accessories,
    description: "Quality peripherals and accessories for every setup.",
  },
  {
    title: "Repairs",
    image: repair,
    description: "Professional diagnostics, maintenance, and repair services.",
  },
];

function HomeProducts() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
            Our Solutions
          </p>

          <p>
            <h2 className="text-center font-bold text-black">
            Technology For Every Need
          </h2>
          </p>

          <p className="text-center text-black mt-6 max-w-2xl mx-auto">
            Discover premium technology products and services from
            YAMOVECTOR, designed to power businesses and individuals.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex animate-scroll gap-8 w-max">
            {[...categories, ...categories].map((item, index) => (
              <div
                key={index}
                className="group w-[320px] bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-black text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Effects */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <Link
            to="/products"
            className="px-10 py-4 bg-black text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl"
          >
            See More Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;