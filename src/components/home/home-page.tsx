import BannerSection from "./banner-section";
import DetailAboutUsSection from "./detail-about-us-section";
import GetToKnowSection from "./get-to-know-section";
import OurServiceSection from "./our-service-section";
import ContactSection from "./contact-section";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col gap-20 pb-20">
        <BannerSection />
        <DetailAboutUsSection />
        <OurServiceSection />
        <GetToKnowSection />
        <ContactSection />
      </div>
    </main>
  );
}
