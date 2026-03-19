import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Hero Area */}
      <section className="p-4 md:p-6 lg:p-8">
        <div className="relative rounded-[2rem] overflow-hidden bg-navy min-h-[85vh] flex items-center">
          <img
            src="https://picsum.photos/seed/kect-hero/1920/1080?blur=1"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 p-8 md:p-16 w-full flex flex-col lg:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
            <div className="max-w-2xl text-left w-full">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
                Empowering futures <br /> for a better world
              </h1>
              <p className="text-gray-200 text-lg mb-10 max-w-xl leading-relaxed">
                KECT provides sustainable educational solutions for underprivileged communities. We are committed to providing quality education, skill development, and community welfare. Join us in making a difference today.
              </p>
              <div className="flex flex-wrap gap-4">
                <PillButton text="Donate Now" href="/donate" variant="white" />
                <PillButton text="Our Projects" href="/projects/academy" variant="outline" className="text-white border-white/30 hover:bg-white/10" />
              </div>
            </div>

            <div className="hidden lg:block w-full max-w-sm">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-[2rem] border border-white/20 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/kect-student/600/800"
                  alt="Hopeful Student"
                  className="rounded-3xl w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-5 flex justify-between items-center text-white px-3 pb-2">
                  <span className="font-semibold text-lg">Discover Our Recent Project</span>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="About" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-tight mb-8">
                At KECT, our mission is to empower communities with <span className="text-gray-400">quality, accessible, and</span> holistic educational opportunities.
              </h2>
              <PillButton text="Learn More" href="/about" variant="outline" />
            </div>
            <div className="grid grid-cols-2 gap-4 h-full">
              <img
                src="https://picsum.photos/seed/kect-academy/800/1000"
                alt="Academy"
                className="rounded-[2rem] w-full h-full object-cover aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col gap-4">
                <img
                  src="https://picsum.photos/seed/kect-skill/800/800"
                  alt="Skill Development"
                  className="rounded-[2rem] w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-surface-alt p-8 rounded-[2rem] flex-grow flex items-center">
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    We aim to accelerate social mobility by delivering innovative educational programs, improving learning outcomes, and fostering sustainable community development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Projects (Services) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 flex flex-col">
              <SectionLabel text="Our Impact" />
              <img
                src="https://picsum.photos/seed/kect-food/800/1000"
                alt="Healthy Bites"
                className="rounded-[2rem] w-full aspect-[4/5] object-cover mb-8 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-tight mb-6">
                Powering Tomorrow With <span className="text-gray-400">Sustainable</span> Education
              </h2>
              <p className="text-gray-600 mb-10 max-w-xl text-lg">
                We provide comprehensive educational services designed to create a brighter future. From foundational learning to advanced skill development and community welfare programs.
              </p>
              <div className="mb-12">
                <PillButton text="See All Projects" href="/projects/academy" variant="outline" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ProjectCard num="01" title="The KECT Academy" active={false} href="/projects/academy" />
                <ProjectCard num="02" title="Coaching Centre" active={false} href="/projects/coaching" />
                <ProjectCard num="03" title="Skill Development" active={true} href="/projects/skill-development" />
                <ProjectCard num="04" title="Healthy Bites" active={false} href="/projects/healthy-bites" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionLabel text="Our Approach" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy leading-tight mt-6 mb-6">
                A Holistic Path to <span className="text-gray-400">Empowerment</span>
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                We've developed a comprehensive approach to community upliftment. From early childhood education to vocational training and ensuring basic nutritional needs are met.
              </p>
              <PillButton text="Get Involved" href="/get-involved" variant="outline" />
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <img src="https://picsum.photos/seed/step1/1200/600" alt="Step 1" className="rounded-[2rem] w-full h-72 object-cover mb-4 shadow-sm" referrerPolicy="no-referrer" />
                  <p className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">Step 1</p>
                  <h3 className="text-2xl font-bold text-navy">Foundational Education</h3>
                </div>
                <div>
                  <img src="https://picsum.photos/seed/step2/600/400" alt="Step 2" className="rounded-[2rem] w-full h-56 object-cover mb-4 shadow-sm" referrerPolicy="no-referrer" />
                  <p className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">Step 2</p>
                  <h3 className="text-2xl font-bold text-navy">Skill Development</h3>
                </div>
                <div>
                  <img src="https://picsum.photos/seed/step3/600/400" alt="Step 3" className="rounded-[2rem] w-full h-56 object-cover mb-4 shadow-sm" referrerPolicy="no-referrer" />
                  <p className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">Step 3</p>
                  <h3 className="text-2xl font-bold text-navy">Community Welfare</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel text="Stories of Impact" />
          <div className="bg-surface-alt rounded-[3rem] p-8 md:p-16 relative overflow-hidden mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5">
                <img src="https://picsum.photos/seed/testimonial/800/800" alt="Testimonial" className="rounded-[2rem] w-full aspect-square object-cover shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="text-primary text-6xl font-serif leading-none mb-6">"</div>
                <p className="text-xl md:text-2xl text-navy font-medium leading-relaxed mb-10">
                  KECT's skill development program completely changed my life. The tailoring course gave me the confidence and skills to start my own small business. Now I can support my family and send my children to school. I am forever grateful for their support.
                </p>
                <div>
                  <h4 className="text-lg font-bold text-navy">Amina B.</h4>
                  <p className="text-gray-500 text-sm">Program Graduate & Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ num, title, active, href }: { num: string; title: string; active: boolean; href: string }) {
  return (
    <Link to={href} className={cn(
      "p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px] transition-all cursor-pointer group",
      active ? "bg-primary text-white shadow-lg" : "bg-surface-alt text-navy hover:bg-gray-200"
    )}>
      <div className="flex justify-between items-start mb-8">
        <span className={cn("text-lg font-medium", active ? "text-white/80" : "text-gray-400")}>{num}</span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45",
          active ? "bg-white text-primary" : "bg-primary text-white"
        )}>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </Link>
  );
}

