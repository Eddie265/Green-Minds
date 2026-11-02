import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import Board from "@/components/Board";
import Footer from "@/components/Footer";
import { GSAPInitializer } from "@/components/GSAPInitializer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Our Team & Board",
  "Meet the team and board members behind Green Minds Malawi, bringing expertise in environmental science, climate education, governance and impact measurement.",
  "/team"
);

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GSAPInitializer />
      <Navbar />
      <PageHeader
        label="Team"
        title={<>Our <span className="text-accent italic font-serif">Team</span> &amp; Board</>}
        intro="The people leading Green Minds Malawi's work in schools and communities, and the board guiding our growth."
      />
      <div className="reveal">
        <Team />
      </div>
      <div className="reveal">
        <Board />
      </div>
      <Footer />
    </div>
  );
}
