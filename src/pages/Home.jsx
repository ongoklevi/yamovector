import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import Services from "../components/Services";

function Home() {
  return (
    <MainLayout>
      <Hero />
      
      <Services />
        
      <ProductCard />
    </MainLayout>
  );
}

export default Home;