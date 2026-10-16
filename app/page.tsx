import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import WhoWeAre from "@/components/WhoWeAre";
import FocusAreas from "@/components/FocusAreas";
import FeaturedProjects from "@/components/FeaturedProjects";
import Team from "@/components/Team";
import Board from "@/components/Board";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GSAPInitializer } from "@/components/GSAPInitializer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <GSAPInitializer />
      <Navbar />
      <Hero />
      {/*<div className="reveal">*/}
      {/*  <TrustedBy />*/}
      {/*</div>*/}
      <div className="reveal">
        <WhoWeAre />
      </div>
      <div className="reveal">
        <Team />
      </div>
      <div className="reveal">
        <Board />
      </div>
      <div className="reveal">
        <Impact />
      </div>
      <div className="reveal">
        <FeaturedProjects />
      </div>
      <div className="reveal">
        <FocusAreas />
      </div>
      <div className="reveal">
        <WhyChooseUs />
      </div>
      {/*<div className="reveal">*/}
      {/*  <Testimonial />*/}
      {/*</div>*/}
      <div className="reveal">
        <CTA />
      </div>
      {/*<div className="reveal">*/}
      {/*  <News />*/}
      {/*</div>*/}
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
