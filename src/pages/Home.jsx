import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import HomeProducts from "../components/HomeProducts";

function Home() {
  return (
    <MainLayout>
      <Hero />
      
      <HomeServices />
      
      <HomeProducts />
    </MainLayout>
  );
}

export default Home;