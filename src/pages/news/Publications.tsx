import { Hero } from "@/components/ui/Hero";
import { DocumentList } from "@/components/ui/DocumentList";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PUBLICATIONS = [
  { id: "1", title: "Aaghaaz Souvenir 2025", fileUrl: "/docs/aaghaaz_2025.pdf" },
  { id: "2", title: "KECT Brochure", fileUrl: "/docs/kect_brochure.pdf" },
  { id: "3", title: "KECT Brochure 2021", fileUrl: "/docs/brochure_2021.pdf" },
  { id: "4", title: "KECT Brochure 2022", fileUrl: "/docs/brochure_2022.pdf" },

];

export function Publications() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Publications"
        breadcrumbs={[{ label: "News and updates", href: "/news" }, { label: "Publications" }]}
      />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <SectionLabel text="Our Literature" />
          <h2 className="text-4xl md:text-5xl font-bold text-brand mt-6 mb-6">
            Brochures and Souvenirs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of publications detailing our journey, impact, and the stories of those we've helped.
          </p>
        </div>
        <DocumentList documents={PUBLICATIONS} />
      </div>
    </div>
  );
}
