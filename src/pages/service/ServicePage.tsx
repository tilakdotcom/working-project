import Container from "@/components/common/Container";
import OurServiceSection from "@/components/page/service/OurServiceSection";
import ServiceHeroSection from "@/components/page/service/ServiceHeroSection";


export default function ServicePage() {
  return (
    <>
      <Container className="py-0 ">
        <ServiceHeroSection />
        <OurServiceSection />
      </Container>
    </>
  );
}
