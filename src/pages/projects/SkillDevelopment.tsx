import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Scissors, Briefcase, TrendingUp } from "lucide-react";

export function SkillDevelopment() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Skill Development"
        breadcrumbs={[{ label: "Projects", href: "/projects/academy" }, { label: "Skill Development" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform -translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/seed/skill/800/1000" 
              alt="Women learning skills" 
              className="relative rounded-3xl shadow-xl w-full object-cover h-[600px]" 
              referrerPolicy="no-referrer" 
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel text="Empowering Women" />
            <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Fostering Independence</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our skill development programs are designed to empower women in the community, providing them with the tools and training necessary to achieve socio-economic independence and support their families.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <Scissors className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Tailoring & Vocational Training</h4>
                  <p className="text-gray-600">Practical, hands-on training in tailoring and other marketable skills.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Entrepreneurship Support</h4>
                  <p className="text-gray-600">Guidance on starting small businesses and managing finances effectively.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Economic Upliftment</h4>
                  <p className="text-gray-600">Creating pathways for sustainable income generation and community growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
