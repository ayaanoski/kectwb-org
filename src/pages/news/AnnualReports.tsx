import { Hero } from "@/components/ui/Hero";
import { DocumentList } from "@/components/ui/DocumentList";
import { SectionLabel } from "@/components/ui/SectionLabel";

const REPORTS = [
  { id: "1", title: "Annual Report 2024-2025", fileUrl: "/docs/annual_report_2024-2025.pdf" },
  { id: "2", title: "Annual Report 2023-2024", fileUrl: "/docs/annual_report_2023-2024.pdf" },
  { id: "3", title: "Annual Report 2022-2023", fileUrl: "/docs/annual_report_2022-2023.pdf" },
];

export function AnnualReports() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Annual Reports"
        breadcrumbs={[{ label: "News and updates", href: "/news" }, { label: "Annual Reports" }]}
      />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <SectionLabel text="Transparency" />
          <h2 className="text-4xl md:text-5xl font-bold text-brand mt-6 mb-6">
            Download Our Reports
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe in complete transparency. Review our annual reports to see how your contributions are making a difference.
          </p>
        </div>
        <DocumentList documents={REPORTS} />
      </div>
    </div>
  );
}
