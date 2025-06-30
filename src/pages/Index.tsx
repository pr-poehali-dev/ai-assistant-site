import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SearchSection />
      <AboutSection />
    </div>
  );
};

export default Index;
