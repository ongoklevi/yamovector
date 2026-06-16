import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";

function Services() {
  return (
    <MainLayout>
      <ServiceCard />
      <ProductCard />
    </MainLayout>
  );
}

export default Services;