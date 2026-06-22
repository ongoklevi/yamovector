import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import HomeServices from "../components/HomeServices";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <HomeServices />
    
        
      <ProductCard />
    </MainLayout>
  );
}

export default Home;