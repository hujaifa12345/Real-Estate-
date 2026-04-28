import LogoAndNavBar from "./components/LogoAndNavBar";
import HeroSection from "./components/HeroSection";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-amber-50">
      <LogoAndNavBar/>
      <HeroSection/>
      <PropertyCard/>
      <Footer/>
    </div>
  );
}
