import { Hero } from "@/components/ui/Hero";
import { DocumentList } from "@/components/ui/DocumentList";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PUBLICATIONS = [
  { id: "1", title: "Aaghaaz Souvenir 2025", date: "January 2025", fileSize: "5.4 MB", fileUrl: "#" },
  { id: "2", title: "KECT Brochure", date: "March 2024", fileSize: "3.2 MB", fileUrl: "#" },
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
