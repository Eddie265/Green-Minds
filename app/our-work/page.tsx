import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Impact from "@/components/Impact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import { GSAPInitializer } from "@/components/GSAPInitializer";
import { getGalleries } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Our Work",
  "Solar lamps for learners through the Green-Ed Initiative, climate education in schools, tree planting, youth campaigns and Climate Witness stories from communities across Malawi.",
  "/our-work"
);

export default async function OurWorkPage() {
  const galleries = await getGalleries();

  return (
    <div className="flex flex-col min-h-screen">
      <GSAPInitializer />
      <Navbar />
      <PageHeader
        label="Our Work"
        title={<>Our <span className="text-accent italic font-serif">Work</span> &amp; Programmes</>}
        intro="From solar lamps for learners to documenting communities living through the climate crisis, here is what we have delivered so far."
      />
      <div className="reveal">
        <Impact galleries={galleries} />
      </div>
      <div className="reveal">
        <FeaturedProjects />
      </div>
      <Footer />
    </div>
  );
}
