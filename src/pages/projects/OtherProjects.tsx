import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Shirt, BookOpen, Globe } from "lucide-react";

export function OtherProjects() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Other Projects"
        breadcrumbs={[{ label: "Projects", href: "/projects/academy" }, { label: "Other Projects" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="More Initiatives" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Expanding Our Impact</h2>
          <p className="text-lg text-gray-600">
            Beyond our core educational and skill development programs, KECT runs several other initiatives to support and uplift the community in various ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-accent group-hover:text-brand transition-colors">
              <Shirt className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand mb-4">Apparels of Joy</h3>
            <p className="text-gray-600 leading-relaxed">
              A clothing distribution initiative ensuring that underprivileged families have access to clean, warm, and dignified clothing throughout the year, especially during festive seasons and harsh winters.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-accent group-hover:text-brand transition-colors">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand mb-4">Teacher Training</h3>
            <p className="text-gray-600 leading-relaxed">
              Continuous professional development programs for our educators to ensure they are equipped with the latest pedagogical methods and can provide the best possible learning experience for our students.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-accent group-hover:text-brand transition-colors">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand mb-4">Community Outreach</h3>
            <p className="text-gray-600 leading-relaxed">
              Various awareness campaigns and outreach programs focusing on health, hygiene, environmental conservation, and civic responsibilities to foster a well-rounded and informed community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
