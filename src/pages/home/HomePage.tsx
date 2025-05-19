import Container from "@/components/common/Container";
import AdvantageSection from "@/components/page/home/AdvantageSection";
import GetInformedSection from "@/components/page/home/GetInformedSection";
import HeroSection from "@/components/page/home/HeroSection";
import PlanningSection from "@/components/page/home/PlanningSection";


export default function HomePage() {
  return (
    <>
      <Container className="px-0">
        {/* hero sections */}
        <HeroSection />
        <AdvantageSection />
        <PlanningSection />
        <GetInformedSection />
      </Container>
    </>
  );
}
