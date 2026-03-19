import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Linkedin, Mail } from "lucide-react";

const TRUSTEES = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: `Trustee Name ${i + 1}`,
  role: "Expert Trustee",
  bio: "A brief biography highlighting their expertise and contribution to KECT's mission of providing quality education.",
  imageUrl: `https://picsum.photos/seed/trustee${i}/400/400`,
}));

export function Trustees() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Trustees at KECT"
        breadcrumbs={[{ label: "Trustees at KECT" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Our Leadership" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Meet Our Board of Trustees</h2>
          <p className="text-lg text-gray-600">
            KECT is guided by a dedicated board of ten expert trustees who bring diverse experience and a shared passion for our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TRUSTEES.map((trustee) => (
            <div key={trustee.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={trustee.imageUrl}
                  alt={trustee.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand hover:bg-accent hover:text-brand transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand hover:bg-accent hover:text-brand transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-brand mb-2">{trustee.name}</h3>
                <p className="text-accent font-bold text-sm mb-4 uppercase tracking-widest">{trustee.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{trustee.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
