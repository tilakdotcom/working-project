import AboutApproach from "@/components/page/about/AboutApproach";
import AboutHeroSection from "@/components/page/about/AboutHeroSection";
import AboutStorySection from "@/components/page/about/AboutStoryPage";
import Container from "@/components/common/Container";

export default function AboutPage() {
  return (
    <>
      <Container className="py-0 ">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutApproach />
      </Container>
    </>
  );
}
