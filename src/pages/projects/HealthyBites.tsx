import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HealthyBites() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Healthy Bites Project"
        breadcrumbs={[{ label: "Projects", href: "/projects/academy" }, { label: "Healthy Bites" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="Nutrition & Welfare" />
            <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Nourishing the Community</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-brand">Combating malnourishment</strong> — The Healthy Bites Project aims to address malnourishment among students at The KECT Academy, many of whom come from economically disadvantaged backgrounds and suffer from poor nutrition. 
              </p>
              <p>
                To ensure they receive adequate nourishment, the Trust provides them with wholesome and nutritious snacks on a daily basis. A significant portion of the school's budget is allocated towards this initiative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
