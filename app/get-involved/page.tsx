import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GSAPInitializer } from "@/components/GSAPInitializer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Get Involved",
  "Volunteer, partner with or support Green Minds Malawi, or contact our team in Lilongwe by email or phone.",
  "/get-involved"
);

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GSAPInitializer />
      <Navbar />
      <PageHeader
        label="Get Involved"
        title={<>Get <span className="text-accent italic font-serif">Involved</span></>}
        intro="Volunteer with us, partner on a project, support our work or simply get in touch."
      />
      <div className="reveal">
        <CTA />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
