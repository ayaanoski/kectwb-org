import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BookOpen, GraduationCap, Users } from "lucide-react";

export function Coaching() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="The KECT Coaching Centre"
        breadcrumbs={[{ label: "Projects", href: "/projects/academy" }, { label: "Coaching Centre" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="Academic Excellence" />
            <h2 className="text-4xl font-bold text-brand mt-6 mb-6">ICSE/ISC Coaching</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our specialized coaching programs are designed to support students preparing for their ICSE and ISC board examinations. We provide expert guidance, comprehensive study materials, and a supportive environment to help students achieve their academic goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Comprehensive Curriculum</h4>
                  <p className="text-gray-600">Covering all major subjects with a focus on conceptual clarity and exam preparation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Expert Faculty</h4>
                  <p className="text-gray-600">Experienced teachers dedicated to mentoring and guiding students to success.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mr-4 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand mb-2">Proven Results</h4>
                  <p className="text-gray-600">A track record of excellent board exam results and student placements.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/seed/coaching/800/1000" 
              alt="Students studying" 
              className="relative rounded-3xl shadow-xl w-full object-cover h-[600px]" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
