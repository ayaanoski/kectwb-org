import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Pandemic() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="KECT During Pandemic"
        breadcrumbs={[{ label: "News and updates", href: "/news" }, { label: "Pandemic Relief" }]}
      />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <SectionLabel text="Community Support" />
          <h2 className="text-3xl md:text-4xl font-bold text-brand mt-6 mb-8">
            Our Relief Efforts
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="leading-relaxed">
              During the challenging times of the pandemic, KECT organized extensive relief programs, providing food, medical supplies, and support to the most vulnerable communities. We stood by our commitment to serve those in need when it mattered most.
            </p>
            <div className="my-12 rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://picsum.photos/seed/pandemic/1200/600" 
                alt="Pandemic Relief" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <p className="leading-relaxed">
              Our volunteers worked tirelessly to distribute essential ration kits, hygiene supplies, and educational materials to ensure that learning and basic needs were not compromised during the lockdowns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
