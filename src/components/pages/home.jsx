import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PopularDestinations from "@/components/popular-destinations";
import StatsBar from "@/components/stats-bar";
import WhyChooseUs from "@/components/whychoose-us";

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* pt-24/28 clears the floating search widget, which overlaps
          Hero's bottom edge with a negative margin */}
      <div className="pt-24 md:pt-32">
        <PopularDestinations />
      </div>
      <WhyChooseUs />
      <StatsBar />
      <Footer />
    </>
  );
}

export default HomePage;
