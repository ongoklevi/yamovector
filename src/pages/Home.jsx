import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <ServiceCard />
      <ProductCard />
    </MainLayout>
  );
}

export default Home;