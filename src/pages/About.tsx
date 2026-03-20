import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { ArrowRight, Target, Heart, Users } from "lucide-react";

export function About() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="About KECT"
        breadcrumbs={[{ label: "About KECT" }]}
      />

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="Who We Are" />
            <h2 className="text-4xl md:text-5xl font-bold text-brand mt-6 mb-8 leading-tight">
              Empowering Communities Through <span className="text-accent">Education</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Kolkata Educational and Charitable Trust (KECT) is a Public Charitable Trust managed by a board of nine expert Trustees. We are dedicated to uplifting the underprivileged sections of society by providing access to quality education and skill development.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Since our inception, we have focused on creating sustainable impact in the lives of slum-dwelling populations, ensuring that every child has the opportunity to learn, grow, and succeed irrespective of their class, creed, or race.
            </p>
            <PillButton href="/projects/academy" variant="primary" text="Explore Our Projects" />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img
              src="/about.jpg"
              alt="Children learning"
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-video"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel text="Our Core Values" />
            <h2 className="text-4xl font-bold text-brand mt-6 mb-6">What Drives Us Forward</h2>
            <p className="text-lg text-gray-600">
              Our work is guided by a set of core principles that ensure we remain focused on our mission to create a more equitable world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Excellence in Education",
                description: "We strive to provide the highest quality of education, ensuring our students are well-prepared for the future."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Compassion & Inclusion",
                description: "We believe every child deserves a chance, regardless of their background, class, creed, or race."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Empowerment",
                description: "We work closely with communities to build sustainable solutions that uplift entire families."
              }
            ].map((value, index) => (
              <div key={index} className="bg-surface-alt p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
