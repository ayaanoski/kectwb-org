import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Utensils, HeartPulse, ShieldCheck } from "lucide-react";

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
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Healthy Bites Project is our dedicated community welfare initiative focused on providing nutritious meals to those in need. We believe that proper nutrition is fundamental to health, education, and overall well-being.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Food Distribution</h4>
                  <p className="text-gray-600">Regular distribution of healthy, balanced meals to vulnerable populations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Nutritional Support</h4>
                  <p className="text-gray-600">Focusing on essential nutrients to combat malnutrition, especially in children.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Pandemic Relief</h4>
                  <p className="text-gray-600">Stepping up during crises to ensure no one in our community goes hungry.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/seed/food/800/1000" 
              alt="Food distribution" 
              className="relative rounded-3xl shadow-xl w-full object-cover h-[600px]" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
