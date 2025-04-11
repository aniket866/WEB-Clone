import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TracksSection from "@/components/TracksSection";
import JudgesAndMentorsSection from "@/components/JudgesAndMentorsSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesAndSponsorsSection from "@/components/PrizesAndSponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06254b]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <JudgesAndMentorsSection />
      <TimelineSection />
      <PrizesAndSponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
