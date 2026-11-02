import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import WhoWeAre from "@/components/WhoWeAre";
import FocusAreas from "@/components/FocusAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { GSAPInitializer } from "@/components/GSAPInitializer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About Us",
  "Green Minds Malawi is a youth-led organisation working on climate education, clean energy access, youth leadership, environmental conservation and climate justice.",
  "/about"
);

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GSAPInitializer />
      <Navbar />
      <PageHeader
        label="About Us"
        title={<>About <span className="text-accent italic font-serif">Green Minds</span> Malawi</>}
        intro="A youth-led organisation helping young people and communities understand climate change and act on it."
      />
      <div className="reveal">
        <WhoWeAre />
      </div>
      <div className="reveal">
        <FocusAreas />
      </div>
      <div className="reveal">
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
}
