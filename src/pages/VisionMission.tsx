import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Vision and Mission"
        breadcrumbs={[{ label: "Vision and Mission" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Vision Card */}
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mb-8">
                <Eye className="w-10 h-10" />
              </div>
              <SectionLabel text="Our Vision" />
              <h2 className="text-4xl font-bold text-brand mt-4 mb-6">A Brighter Future</h2>
              <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                To empower the underprivileged sections of society through quality education.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                We envision a society where every individual has the opportunity to reach their full potential, contributing to a prosperous and equitable world. Education is the key to unlocking this potential and breaking the cycle of poverty.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-brand p-12 rounded-3xl shadow-xl text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 backdrop-blur-sm">
                <Target className="w-10 h-10" />
              </div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-4">
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">Our Core Purpose</h2>
              <p className="text-3xl font-medium leading-relaxed italic text-accent">
                "To have a world in which every child is educated irrespective of class, creed or race."
              </p>
              <p className="mt-8 text-gray-300 leading-relaxed text-lg">
                We are committed to providing accessible, high-quality education and skill development programs to those who need it most, fostering a supportive environment that encourages lifelong learning.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
